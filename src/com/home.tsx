import { h, Component } from 'preact';
// import {route} from 'preact-router';
import Swiper from 'swiper';
import { Toolbar,Tabs,Icon,Card,LayoutGrid ,Elevation,Button} from 'preact-material-components/dist/index.js';
import Header from './Header/header';
import Footer from './Footer/footer';
import HomeSwiper from './homeSwiper'
import './home.scss';
import {WOW} from 'wowjs'
import CountUp from 'react-countup';
declare var require: any;
import scrolltop from './utils/util';


var settings = {
	dots: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1
};
let products = [
	[
		{
			icon:'icon-duxiang',
			text:'独享区块链环境'
		},
		{
			icon:'icon-zhuangshuzhangbenkj',
			text:'专属账本空间'
		},
		{
			icon:'icon-bushu',
			text:'部署云商随意选择'
		}
	],
	[
		{
			icon:'icon-gongxiangzhangbenkj',
			text:'共享账本空间'
		},
		{
			icon:'icon-lijikaitong',
			text:'立即开通使用'
		},
		{
			icon:'icon-quanwangfanghu',
			text:'全网节点防护'
		}
	],
	[
		{
			icon:'icon-fangjiechi',
			text:'DNS防劫持'
		},
		{
			icon:'icon-fangcuangai',
			text:'HTTP内容防篡改'
		},
		{
			icon:'icon-fanghuyinqing',
			text:'全球首创防护引擎'
		}
	]
]
export class Home extends Component<{}, {}> {
	static defaultProps = {
		swiperIsInitialized: () => { },
		options: {},
		swiper:{}
	};
	componentDidUpdate(){
	}
	constructor(props) {
		super(props);
		this.state={
			swiper_background:false,
			showCore:false,
			proIndro:[],
			proNum:1,//默认的产品
		}
		console.log('scroll-top',scrolltop);
	}
	componentDidMount() {
		scrolltop();		
		this.setState({
			proIndro:products[1]
		})
		this.getData();
		this.initChainNum();
	}
	getData(){
		fetch('https://fclink.cn/tradecount',{
			method:'GET',
		}).then((response)=>{
			return response.json()
		}).then((json)=>{
			if(json){
				this.setState({tradecount:json})   //交易总量
			}else{
				this.setState({tradecount:"0"})   //交易总量
			}
		}).catch((err)=>{
			console.log("====>",err)
		});
	}
	initChainNum () {
		let getDate;
		if(new Date().getDate()<10){
            getDate = "0" + new Date().getDate()
		}else{
            getDate = new Date().getDate()
		}
		let time = "" +  new Date().getFullYear() +( new Date().getMonth() + 1) + getDate;
		fetch('https://fclink.cn/paramter?days=' + time,{
			method:'GET',
		}).then((response)=>{
			return response.json()
		}).then((json)=>{
			if(json.length>0 && json[0]){
				this.setState({bookscount:json[0].vals}); //专属链账本
			}else{
				this.setState({bookscount:"0"}); //专属链账本
			}
			if(json.length>0 && json[1]){
				this.setState({nodecount:json[1].vals})//共享链节点
			}else{
				this.setState({nodecount:"0"})//共享链节点
			}

		}).catch((err)=>{
			console.log("====>",err)
		})
	}
	swiper_background(type){   //swiper 回调
		console.log("==========",type)
		this.setState({swiper_background:type})
	}


	goBuy=(targether)=>{
		const user = JSON.parse(sessionStorage.getItem('user'));
		if(targether == 1){ //旗舰版
			if(!user){
				window.location.href='/uc/login/fs'
			}else {
				sessionStorage.setItem('version','flagship');
				window.location.href='/uc/home/createstandardversion'
			}
		}else if(targether ==2){  //标准版
			if(!user){
				window.location.href='/uc/login/sd'
			}else {
				sessionStorage.setItem('version','business');
				window.location.href='/uc/home/createstandardversion'
			}
		}else if(targether ==3){  //体验版
			if(!user){
				window.location.href='/uc/login/ps'
			}else {
				sessionStorage.setItem('version','free');
				window.location.href='/uc/home/shargingbooks'
			}
		}else if(targether == 4){  //免费体验
			sessionStorage.setItem('version','free');
			if(!user){
				window.location.href='/uc/login/fa'
			}else {
				window.location.href='/uc/home/shargingbooks'
			}
		}
	}

	showCore (e) {
		e.preventDefault();
		this.setState({
			showCore:true
		})
	}
	//产品hove 时候
	hoverPro (num?:any) {
		num = num.toString();
		if (!num){
			return;
		}
		this.setState({
			proIndro:products[num],
			proNum:num
		})
	}
	openService (index) {
		let proNum = this.state['proNum'];
		if (proNum == 1 && index == 1){
			let str,userinfo;
			str = sessionStorage.getItem('user');
			if (str) {
				try{
					userinfo = JSON.parse(str);
				}catch(err){
					console.log('err',err);
				}
			}
			if (userinfo && userinfo.userId) {
				location.assign('/uc/home/_');
			}else {
				location.assign('/uc/login');
			}
		}
	}
	public render(props,state) {
		// this.swiper = null;
		let nodecount;      //共享链节点
		let bookscount;    //专属链账本
		let tradecount;  //共享链交易总量
		if(state.tradecount && state.bookscount){
			nodecount = (<p className="t1"><CountUp start={0} end={state.nodecount} useGrouping={true} separator="," duration={3} /></p>);
			bookscount = (<p className="t1"> <CountUp start={0} end={state.bookscount} useGrouping={true} separator="," duration={3} /></p>);
			tradecount = (<p className="t1"><CountUp start={0} end={state.tradecount} useGrouping={true} separator="," duration={3} /></p>)
		}else{
			nodecount = (<div className="t2" style={{marginBottom:10,fontSize:15}}><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>);
			bookscount = (<div className="t2" style={{marginBottom:10,fontSize:15}}><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>);
			tradecount = (<div className="t2" style={{marginBottom:10,fontSize:15}}><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>);
		}
		return (
			<div class="home-main" style={{backgroundColor:'#f2f2f2',overflow:'auto',overflowX:'hidden'}}>
				<div class="home-header">
					<Header />
					<HomeSwiper swiper_background={this.swiper_background.bind(this)}/>
					<div className="smon" style={{background:this.state["swiper_background"]?"#47175c":"",boxShadow:"0px -5px 9px rgba(0,0,0,0.1)",position:"relative",zIndex:1}}>
						{/* <Toolbar className="">
							<Toolbar.Row>
								<Toolbar.Section align-start={true} shrink-to-fit={true} style={{borderLeft:'0'}}>
								</Toolbar.Section>
								<Toolbar.Section>
									<div className="fc-font icon-shandian"></div>
									<Toolbar.Title>
										{bookscount}
										<p className="t2">专属链账本</p>
									</Toolbar.Title>
								</Toolbar.Section>
								<Toolbar.Section>
									<div className="fc-font icon-lalala"></div>
									<Toolbar.Title className="smontext2">
										{tradecount}
										<p className="t2">共享链交易总量</p>
									</Toolbar.Title>
								</Toolbar.Section>
								<Toolbar.Section>
									<div className="fc-font icon-lian"></div>
									<Toolbar.Title>
										{nodecount}
										<p className="t2">共享链节点</p>
									</Toolbar.Title>
								</Toolbar.Section>
								<Toolbar.Section align-end={true} shrink-to-fit={true} >
								</Toolbar.Section>
							</Toolbar.Row>
						</Toolbar> */}
					</div>
				</div>
				<div class="home-product">
						<div class="clear">
							<div class={this.state['proNum']==0?'product-item item-special active':'product-item item-special'} onMouseOver={this.hoverPro.bind(this,0)}>
								<h1>01.</h1>
								<h5>专属链账本</h5>
								<p>
								帮助客户于指定的 IDC /云服务商上轻松、快捷地构建私有的区块链环境。此账本仅企业邀请的参与者可见，与不同的私有链上的账本各自独立。这一服务适合企业、产业链及联盟组织内部进行贸易往来协作时使用。
								</p>
								<div><a href="/chain">了解更多</a></div>
							</div>
							<div class={this.state['proNum']==1?"product-item item-share active":"product-item item-share"}  onMouseOver={this.hoverPro.bind(this,1)}>
								<h1>02.</h1>
								<h5>共享链账本</h5>
								<p>
									企业及用户的入链信息将存入一个全球共享账本，共享链账本由分布全球的记账节点网络构成。其拥有与公共链相同的防篡改能力，但入链的效率却高于公共链。
								</p>
								<div><a href="/chain">了解更多</a></div>
							</div>
							<div class={this.state['proNum']==2?"product-item item-protect active":"product-item item-protect"} onMouseOver={this.hoverPro.bind(this,2)}>
								<h1>03.</h1>
								<h5>App内容防护</h5>
								<p>
									为您的App提供DNS防劫持、HTTP网络内容防篡改服务。服务利用全球首创的区块链防护引擎，确保防护信息不可篡改，内容全网快速同步。同时利用独有的智能响应算法，实现不同地域App访问的高速响应。
								</p>
								<div><a href="/blocksdn">了解更多</a></div>
							</div>
						</div>
				</div>
				<div>
					<div class="home-product-options">
						<ul class="clearfix">
								{this.state['proIndro'].map((value,index) => {
									return (
										// <li onClick={this.openService.bind(this,index)}>
										<li>
											<i class={value.icon}></i>
											<p>{value.text}</p>
										</li>
									)
								})}
						</ul>
					</div>
				</div>
				<div className='patents'>
					<ul className="clearfix">
						<li data-index="0" className="patent daxiang">
							<div className="hn-slide-bg"></div>
							<div className="hn-slide-content">
								<i className='hn-shiliang fc-font icon-hudun'></i>
								<div className="hn-line">
								</div>
								<p className="hn-slide-title">产品溯源</p>
								<div className="hn-text">
									<div style={{margin:'20px'}}>
										<p className="hn-slide-detail">在新零售的背景下，商品品牌建立尤为重要。在此情景下，需要通过大量基础数据的收集，建立信用生态与开放的交易生态，让产品质量可靠、交易信息可信，帮助品牌的搭建，形成良性循环。</p>
									</div>
								</div>
								<div className="hn-detail">
									<div style={{margin:'20px'}}>
										<p class="hn-detail-content">
											促成新零售生态圈交易达成
										</p>
										<p class="hn-detail-content">
											实现商品流转中多方数据共享，佐证产品质量
										</p>
										<p class="hn-detail-content">
											帮助金融服务生态圈的线上搭建
										</p>
									</div>
								</div>
							</div>
						</li>
						<li data-index="1" className="patent qian">
							<div className="hn-slide-bg"></div>
							<div className="hn-slide-content ">
								<i className='hn-shiliang fc-font icon-gongyinglian'></i>
								<div className="hn-line">
								</div>
								<p className="hn-slide-title">供应链金融</p>
								<div className="hn-text">
									<div style={{margin:'20px'}}>
										<p className="hn-slide-detail">
										供应链金融是基于供应链内部的交易，依靠风险控制变量，帮助企业盘活其流动资产从而解决融资问题。而整个供应链金融的开展关键点—“风控”，是需要通过及时获取真实贸易背景信息来实现的。
										</p>
									</div>
								</div>
								<div className="hn-detail">
									<div style={{margin:20}}>
										<p class="hn-detail-content">
											打造基于可信网络的链上增信平台
										</p>
										<p class="hn-detail-content">
											可追溯、安全的价值流转
										</p>
										<p class="hn-detail-content">
											提供融资服务，助力中小企业
										</p>
									</div>
								</div>
							</div>
						</li>
						<li data-index="2" className="patent jianpan">
							<div className="hn-slide-bg"></div>
							<div className="hn-slide-content">
								<i className='hn-shiliang fc-font icon-feiji'></i>
								<div className="hn-line">
								</div>
								<p className="hn-slide-title">票据登记流转</p>
								<div className="hn-text">
									<div style={{margin:'20px'}}>
										<p className="hn-slide-detail">
											以解决小微融资为宗旨。解决票据的流动性，为核心企业优化其产业链，优化其财务数据，为小微企业提供低成本的融资。以票据为标的，通过区块链技术实现“化整为零”的价值流转。
										</p>
									</div>
								</div>
								<div className="hn-detail">
									<div style={{margin:20}}>
										<p class="hn-detail-content">
											产业链优化，财务数据优化
										</p>
										<p class="hn-detail-content">
											票据为基础资产的安全便捷的价值流转
										</p>
										<p class="hn-detail-content">
											核心企业资产低成本融资
										</p>
									</div>
								</div>
							</div>
						</li>
						<li data-index="3" className="patent woshou">
							<div className="hn-slide-bg"></div>
							<div className="hn-slide-content">
								<i className='hn-shiliang fc-font icon-qian'></i>
								<div className="hn-line">
								</div>
								<p className="hn-slide-title">资产证券化</p>
								<div className="hn-text">
									<div style={{margin:'20px'}}>
										<p className="hn-slide-detail">
										资产证券化作为一种新的投融资工具，可以促进经济结构的优化，实现盘活存量、为实体经济服务的目的。在证券化发行中，对基础资产的透明性要求是资产包发行安全可靠的保障，通过区块链不仅能够起到操作的跟踪，更能实现对基础资产的“溯源”。
										</p>
									</div>
								</div>
								<div className="hn-detail">
									<div style={{margin:20}}>
										<p class="hn-detail-content">
											基础资产登记，资产封包流转
										</p>
										<p class="hn-detail-content">
											资产可追溯，操作可追溯
										</p>
										<p class="hn-detail-content">
											风险可量化，流转低成本
										</p>
									</div>
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div>
					<div className='home-title'>
						<p className="s1">核心专利技术</p>
						<p className="s2">Core Technology</p>
					</div>
					<div className='coretech'>
						<LayoutGrid style={{padding:'0'}}>
							<LayoutGrid.Inner>
								<LayoutGrid.Cell cols="4">
									<i class="hn-gxzb fc-font icon-fenbushizhangben2" data-wow-duration="1s" data-wow-delay="0.31s" ></i>
									<div className="">
										<p className="p0">分布式共享账本框架</p>
									</div>
								</LayoutGrid.Cell>
								<LayoutGrid.Cell cols="4">
									<i class="hn-gxzb fc-font icon-gaoxiaogongshi" data-wow-duration="1s" data-wow-delay="0.31s"></i>
									<div className="">
										<p className="p0">高效的共识机制</p>
									</div>
								</LayoutGrid.Cell>
								<LayoutGrid.Cell cols="4">
									<i class="hn-gxzb fc-font icon-liucheng" data-wow-duration="1s" data-wow-delay="0.31s"></i>
									<div className="">
										<p className="p0">基于区块链智能合约的流程调度</p>
									</div>
								</LayoutGrid.Cell>
							</LayoutGrid.Inner>
							<LayoutGrid.Inner>
								<LayoutGrid.Cell cols="4">
									<i class="hn-gxzb fc-font icon-anquanqianbao" data-wow-duration="1s" data-wow-delay="0.31s" ></i>
									<div className="">
										<p className="p0">区块链安全钱包</p>
									</div>
								</LayoutGrid.Cell>
								<LayoutGrid.Cell cols="4">
									<i class="hn-gxzb fc-font icon-neirongfanjiechi" data-wow-duration="1s" data-wow-delay="0.31s"></i>
									<div className="">
										<p className="p0">基于区块链内容反劫持</p>
									</div>
								</LayoutGrid.Cell>
								<LayoutGrid.Cell cols="4">
									<i class="hn-gxzb fc-font icon-DNSfanjiechi" data-wow-duration="1s" data-wow-delay="0.31s"></i>
									<div className="">
										<p className="p0">基于区块链的DNS反劫持</p>
									</div>
								</LayoutGrid.Cell>
							</LayoutGrid.Inner>
							<div style={{display:this.state['showCore']?'block':'none'}}>
								<LayoutGrid.Inner>
									<LayoutGrid.Cell cols="4">
										<i class="hn-gxzb fc-font icon-zhangbentongbu" data-wow-duration="1s" data-wow-delay="0.31s" ></i>
										<div className="">
											<p className="p0">基于物联网账本同步</p>
										</div>
									</LayoutGrid.Cell>
									<LayoutGrid.Cell cols="4">
										<i class="hn-gxzb fc-font icon-tuxiangshuiyin" data-wow-duration="1s" data-wow-delay="0.31s"></i>
										<div className="">
											<p className="p0">图像水印区块链嵌入算法</p>
										</div>
									</LayoutGrid.Cell>
									<LayoutGrid.Cell cols="4">
										<i class="hn-gxzb fc-font icon-zhangbenqizha2" data-wow-duration="1s" data-wow-delay="0.31s" ></i>
										<div className="">
											<p className="p0">基于物联网的账本反欺诈</p>
										</div>
									</LayoutGrid.Cell>
								</LayoutGrid.Inner>
							</div>
							<div style={{'text-align':'center',padding:'40px 0 10px 0'}}>
								<span style={{display:this.state['showCore']?'none':'block',fontSize:14,cursor:'default',width:100,height:30,lineHeight:'30px',margin:'0 auto',border:'1px solid #6E6F71',textDecoration:'none',color:'#6B6C6E'}} href="javascript:void(0);" onClick={this.showCore.bind(this)}>查看更多</span>
							</div>
						</LayoutGrid>
					</div>
				</div>
				<div class="partner">
					<div className='home-title'>
						<p className="s1">合作伙伴</p>
						<p className="s2">Partner</p>
					</div>
				</div>
				<div class="partners">
					<ul class="partners-line1 clearfix">
						<li class="partner-1"></li>
						<li class="partner-2"></li>
						<li class="partner-3"></li>
						<li class="partner-4"></li>
					</ul>
					<ul class="partners-line2 clearfix">
						<li class="partner-5"></li>
						<li class="partner-6"></li>
						<li class="partner-7"></li>
					</ul>
				</div>
				<div class="aptitude">
					<div className='home-title'>
						<p className="s1">资质</p>
						<p className="s2">Aptitude</p>
					</div>
					<div>
					  <ul class="clearfix">
							<li class="aptitude-item" data-wow-duration="1.5s" data-wow-delay="0s">
								<div class="aptitude-1">
									<div></div>
									<p>工信部可信区块链联盟</p>
									<p>首批会员单位</p>
								</div>
							</li>
							<li class="aptitude-item" data-wow-duration="1.5s" data-wow-delay="0s">
								<div class="aptitude-3">
									<div>

									</div>
									<p>
										中国高科技产业化研究会区块链产业联盟
									</p>
									<p>首批成员单位</p>
								</div>
							</li>
							<li class="aptitude-item" data-wow-duration="1.5s" data-wow-delay="0s">
								<div class="aptitude-2">
									<div></div>
									<p>中国区块链技术和产业发展论坛</p>
									<p>首批成员单位</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<Footer />
			</div>
		)
	}
}