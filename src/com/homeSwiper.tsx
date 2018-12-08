import { h, Component } from 'preact';
import Swiper from 'swiper';
import { Toolbar,Tabs,Icon,Card,LayoutGrid ,Elevation,Button} from 'preact-material-components/dist/index.js';
import {WOW} from 'wowjs'
declare var require: any;

export default class HomeSwiper extends Component<{swiper_background},{}>{
    swiper;
    prev;
    next;
    constructor(props){
        super(props);
        this.state={}
    }
    componentDidMount(){
        this.initSwiper()
    }
    shouldComponentUpdate(){
        return false;
    }
    initSwiper () {
        let $this = this;
        window.addEventListener('scroll',this.headerCtrl);
        if (typeof window !== undefined) {
            if(!this.swiper){
                console.log("init swiper")
                this.swiper = new Swiper('.swiper-container', {
                    pagination: '.swiper-pagination',
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',
                    paginationClickable: true,
                    centeredSlides: true,
                    // autoplay: 7000,
                    autoplay:false,
                    speed:500,
                    loop:true,
                    autoplayDisableOnInteraction: false,
                    observer:true,
                    observeParents:true,
                    onSlideChangeStart:function(sw){

                        if(sw.activeIndex == 0 || sw.activeIndex == 2){
                            if( $this.props.swiper_background && typeof  $this.props.swiper_background == "function"){
                                $this.props.swiper_background(true)
                            }
                        }else{
                            if( $this.props.swiper_background && typeof  $this.props.swiper_background == "function"){
                                $this.props.swiper_background(false)
                            }
                        }

                        var num = (sw.activeIndex % 2) == 0 ? 2 : 1;
                        let ddiv = document.getElementsByClassName('pp'+num);
                        if(ddiv){
                            for(var i=0;i<ddiv.length;i++){
                                ddiv[i].className = ddiv[i].className + ' wowdefault';
                            }
                        }
                        // if(window['wow']){
                        // 	window['wow'].sync();
                        // }
                    },
                    onTransitionStart:function(sw){
                        var num = (sw.activeIndex % 2) == 0 ? 2 : 1;
                        let ddiv = document.getElementsByClassName('pp'+num);
                        if(ddiv){
                            for(var i=0;i<ddiv.length;i++){
                                //ddiv[i].style['visibility']='hidden';
                                ddiv[i].className = ddiv[i].className.replace('wowdefault','');
                                ddiv[i].className = ddiv[i].className.replace('wowdefault','');
                                ddiv[i].className = ddiv[i].className.replace(' wow fadeInUp','');
                                ddiv[i].className = ddiv[i].className + ' wow fadeInUp'
                            }
                        }
                        if(window['wow']){
                            window['wow'].sync();
                        }
                    },
                    onTransitionEnd:function(sw){
                        var num = (sw.activeIndex % 2) == 0 ? 2 : 1;
                        let ddiv = document.getElementsByClassName('pp'+num);
                        if(ddiv){
                            setTimeout(function(){
                                //console.log("swiper onTransitionEnd:"+((index-1)%3+1)+":ddiv."+ddiv)
                                for(var i=0;i<ddiv.length;i++){
                                    ddiv[i].className = ddiv[i].className.replace(' wow fadeInUp','');
                                    ddiv[i].className = ddiv[i].className.replace(' wow fadeInUp','');
                                }
                                // if(window['wow']){
                                // 	window['wow'].sync();
                                // }

                            },1600);

                        }
                    }

                });
                this.swiper.height = Math.min(window.innerWidth*800/1440,580)
            }else{
                console.log("swiper="+this.swiper);
            }

        }

        this.slidHhover();
        if(window['wow']){
            window['wow'].sync();
        }
    }
    headerCtrl=() => {
        //console.log("window.innerWidth="+window.innerWidth+",swiper="+this.swiper)
        //1440==480==
        this.swiper.height = Math.min(window.innerWidth*800/1440,580)
    };
    componentWillUnmount() {
        this.swiper.removeAllSlides();
        this.swiper.destroy(true, true);
        this.swiper = null;
        window.removeEventListener('scroll',this.headerCtrl);
    }
    checkBoxes(){
        var hasFocus=false;
        let focusEle=document.getElementById('defaultst');
        for(var i=0;i<this.hoverBoxs.length;i++){
            var ele=this.hoverBoxs[i];
            if(ele.className.indexOf('mdc-elevation--z14')>0&&focusEle!=ele){
                hasFocus=true;
                break;
            }
        }
        if(!hasFocus){
            focusEle.className=focusEle.className.replace('mdc-elevation--z1','mdc-elevation--z14 ')
        }else{
            focusEle.className=ele.className.replace('mdc-elevation--z14','mdc-elevation--z1 ')
        }
    }
    slidHhover(){
        let hn = document.getElementsByClassName('patent');
        for(var i=0;i<hn.length;i++){

            hn[i]["onmouseover"]=function() {
                const index = this.getAttribute('data-index');
                document.getElementsByClassName('hn-slide-content')[index]["style"].top = 30+'px';
                // document.getElementsByClassName('hn-text')[index]["style"].opacity = 0;
                document.getElementsByClassName('hn-line')[index]["style"].opacity = 0;
                document.getElementsByClassName('hn-slide-bg')[index]["style"].background = 'linear-gradient(rgb(126,221,238),rgb(122,94,245))';
                document.getElementsByClassName('hn-slide-title')[index]["style"].marginTop = '-21px';
                document.getElementsByClassName('hn-detail')[index]["style"].opacity = 1;
                document.getElementsByClassName('hn-detail')[index]["style"].marginTop = '-10px';
            }
            hn[i]["onmouseout"]=function() {
                const index = this.getAttribute('data-index');
                document.getElementsByClassName('hn-slide-content')[index]["style"].top = 80+'px';
                document.getElementsByClassName('hn-text')[index]["style"].opacity = 1;
                document.getElementsByClassName('hn-line')[index]["style"].opacity = 1;
                document.getElementsByClassName('hn-slide-bg')[index]["style"].background = '';
                document.getElementsByClassName('hn-slide-title')[index]["style"].marginTop = '0px';
                document.getElementsByClassName('hn-detail')[index]["style"].opacity = 0;
                document.getElementsByClassName('hn-detail')[index]["style"].marginTop = '0px';
            }
        }
        let ht = document.getElementsByClassName('stype');
        let self=this;
        for(var i=0;i<ht.length;i++){
            self.hoverBoxs.push(ht[i]);

            ht[i]["onmouseover"]=function(e) {
                this.className=this.className.replace('mdc-elevation--z1','mdc-elevation--z14 ')
                // self.checkBoxes();
            }
            ht[i]["onmouseout"]=function() {
                this.className=this.className.replace('mdc-elevation--z14','mdc-elevation--z1 ')
                // self.checkBoxes();
            }
        }
    }
    bannerHover (btn) {
        if (btn == 'next') {
            this['prev'].style.opacity = '0';
        }else if (btn == 'prev') {
            this['next'].style.opacity = '0';
        }
    }
    bannerHoverOut = () => {
        this['prev'].style.opacity = '1';
        this['next'].style.opacity = '1';
    };
    hoverBoxs=Array();
    goBuy=(targether)=>{
        let user;
        try {
            user = JSON.parse(sessionStorage.getItem('user'));
        } catch (error) {
            
        }
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
                sessionStorage.setItem('version','free')
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
    render(){
        return(
            <div>
                <div className="">
                    <div className="swiper-container" style={{backgroundColor:"black"}} >
                        <div className="swiper-wrapper">
                            <div
                                  style={{cursor:'pointer'}} className='swiper-slide img_banner1'>

                                <div className='p1 pp1' data-wow-duration="1.5s" data-wow-delay="0s" >
                                    <div className="p1-sub">
                                        {/* <p className='t2'>共享账本<span style={{color:'#f3d711'}}>免费体验</span>6个月</p> */}
                                        <div style={{color:'#fff',fontSize:'26px',textAlign:'left'}}>
                                            <i class="fc-font icon-logo"></i>
                                            <span style={{letterSpacing:'5px',marginLeft:'10px'}}>蜂巢链</span></div>
                                        <h1 className="t2">基于区块链的共享计算服务</h1>
                                        <p className='hn-linaa'>打造最好的企业应用级区块链技术实现，提供基于区块链的各类增值服务：共享账本、信息安全防护、共享计算、数字资产交易</p>
                                        {/* <p className='hn-banner1button'>
                                            抢先体验
                                        </p> */}
                                    </div>
                                    <div className="banner_img">
                                        
                                    </div>
                                </div>
                            </div>
                            <div className='swiper-slide img_banner2'>
                                <div className="img_banner2_inner">
                                    <div className="banner_img wow animated fadeInLeft" data-wow-duration="1s"></div>
                                    <div className="banner_content wow animated fadeInUp" data-wow-duration="1s">
                                        <h1>共享账本<span style={{color:'#F4D64C'}}>免费使用</span>6个月</h1>
                                        <h3>价值互联网时代，等待您的到来</h3>
                                        <div className="free-trial">
                                            <a href="javascript:void(0);" onClick={this.goBuy.bind(this,4)}>免费体验</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination swiper-pagination-home"></div>
                        <div class="swiper-button-prev unslider-arrow"
                            onMouseOut={this.bannerHoverOut} onMouseOver={this.bannerHover.bind(this,'next')} ref={(_)=>{this.next = _}}
                        >
				    		<span class="arrow-line"></span>
				    		<span class="arrow-text">PREV</span>
				    		<i class="fa fa-long-arrow-down"></i>
                        </div>
                        <div class="swiper-button-next unslider-arrow"
                            onMouseOut={this.bannerHoverOut} onMouseOver={this.bannerHover.bind(this,'prev')} ref={(_) => {this.prev = _}}
                        >
                            <i class="fa fa-long-arrow-up"></i>
                                <span class="arrow-text">NEXT</span>
                                <span class="arrow-line"></span>
                        </div>
                        {/* <div className="swiper-button-next hn-next" onMouseOut={this.bannerHoverOut} onMouseOver={this.bannerHover.bind(this,'next')} ref={(_)=>{this.next = _}}>
                        </div>
                        <div className="swiper-button-prev hn-prev" onMouseOut={this.bannerHoverOut} onMouseOver={this.bannerHover.bind(this,'prev')} ref={(_) => {this.prev = _}}>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}
