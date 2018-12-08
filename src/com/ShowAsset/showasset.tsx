import {h,Component} from 'preact'
import {LayoutGrid ,Elevation} from 'preact-material-components/dist/index.js';
import Header from '../Header/header'
import Footer from '../Footer/footer';
import './showasset.scss'
import {WOW} from 'wowjs'
import CountUp from 'react-countup';
import scrolltop from '../utils/util';

import AssetDetails from "./assetDetails"

export class ShowAsset extends Component<{},{}>{
    constructor(props){
        super(props);
        this.state={
            display:false,
        }
    }
    componentDidMount() {
        scrolltop();
        if(window['wow']){
            window['wow'].sync();
        }

        fetch('https://fclink.cn/tradecount',{
            method:'GET',
        }).then((response)=>{
            return response.json()
        }).then((json)=>{
            console.log("tradecount===================>",json);
            if(json){
                this.setState({tradecount:json})   //交易总量
            }else{
                this.setState({tradecount:"0"})   //交易总量
            }
        }).catch((err)=>{
            console.log("====>",err)
        });

        fetch('https://fclink.cn/blockcount',{
            method:'GET',
        }).then((response)=>{
            return response.json()
        }).then((json)=>{
            console.log("blockcount===================>",json);
            if(json){
                this.setState({blockcount:json})  //区块高度
            }else{
                this.setState({blockcount:"0"})
            }

        }).catch((err)=>{
            console.log("====>",err)
        });

        fetch('https://fclink.cn/block',{
            method:'GET',
        }).then((response)=>{
            return response.json()
        }).then((json)=>{
            console.log("block===================>",json);
            if(json.trade_count && json.trade_stime && json.trade_etime){
                this.setState({trade_count:parseInt("" + json.trade_count)});   //入链交易
                this.setState({trade_stime:parseInt("" + (json.trade_etime - json.trade_stime)/1000)});    //区块生成速度
                this.setState({trade_etime:parseInt("" + (new Date().getTime() - json.trade_etime)/1000)}) ;    //当前区块产生时间
            }else{
                this.setState({trade_count:"0"});   //入链交易
                this.setState({trade_stime:"0"});    //区块生成速度
                this.setState({trade_etime:"0"}) ;    //当前区块产生时间
            }
            console.log(this.state["trade_count"],">>>>>",this.state["trade_stime"],">>>>.",this.state["trade_etime"])
        }).catch((err)=>{
            console.log("====>",err)
        });


        fetch('https://fclink.cn/block/list?page=1&size=10',{
            method:'GET',
        }).then((response)=>{
            return response.json()
        }).then((json)=>{
            console.log("list===================>",json);

            if(json.length>0){
                this.setState({tDate:json,display:true})   //资产展示 列表
            }else{
                this.setState({tDate:[],display:false})   //资产展示 列表
            }
        }).catch((err)=>{
            console.log("====>",err)
        });

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
            console.log("paramter===================>",json);
            if(json.length > 0 && json[2] ){
                this.setState({onlinecount:json[2].vals}) //在线节点
            }else{
                this.setState({onlinecount:"0"});//在线节点
            }
        }).catch((err)=>{
            console.log("====>",err)
        })

    }
    show(){
        // this.setState({display:true});
    }
    render(props,state){
        let onlinecount;   //在线节点
        let tradecount; //交易总量
        let blockcount; //区块高度
        let trade_count;  //入链交易
        let trade_stime;  //区块生成速度
        let trade_etime;  //当前区块生成速度

        if(state.onlinecount){
            onlinecount = (<div className="t2"><CountUp start={0} end={state.onlinecount} useGrouping={true} separator="," duration={1} /></div>);
        }else{
            onlinecount = (<div className="t2" style={{marginTop:20}}><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>);
        }

        if(state.tradecount){
            tradecount = (<div className="t2 click-show"><CountUp start={0} end={state.tradecount} useGrouping={true} separator="," duration={3} /></div>);
        }else{
            tradecount = (<div className="t2" style={{marginTop:20}}><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>);
        }

        if(state.blockcount){
            blockcount = (<div className="t2"><CountUp start={0} end={state.blockcount} useGrouping={true} separator="," duration={2} /></div>);
        }else{
            blockcount = (<div className="t2" style={{marginTop:20}}><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>);
        }

        if(state.trade_count && state.trade_stime && state.trade_etime){
                trade_count = (<div className="t2"><CountUp start={0} end={state.trade_count} duration={1} /></div>);
                trade_stime = (<div className="t2"><CountUp start={0} end={state.trade_stime} duration={1} /></div>)
                trade_etime = (<div className="t2"><CountUp start={0} end={state.trade_etime} duration={1} /></div>)
        }else{
            trade_count = (<div className="t2" style={{marginTop:20}}><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>);
            trade_stime = (<div className="t2" style={{marginTop:20}}><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>);
            trade_etime = (<div className="t2" style={{marginTop:20}}><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i></div>);
        }
        return(
            <div style={{overflow:'auto'}}>
                <Header/>
                <div className="sa-bg">
                    <div className="l1 mdc-toolbar__row">
                        <div className=" mdc-toolbar__section blank"/>
                        <div className="mdc-toolbar__section sa-item" onClick={this.show.bind(this)}>
                        {/* <div className="mdc-toolbar__section sa-item t1-color" onClick={this.show.bind(this)}> */}
                            <div className="t1">交易总量（笔）</div>
                            {tradecount}
                        </div> 
                        <div className=" mdc-toolbar__section sperator"/>
                        <div className="mdc-toolbar__section sa-item ">
                            <div className="t1">区块高度</div>                            
                            {blockcount}
                        </div>
                        <div className="mdc-toolbar__section sperator"/>
                        <div className="mdc-toolbar__section sa-item ">
                            <div className="t1">在线节点</div>    
                            {onlinecount}
                        </div>   
                        <div className=" mdc-toolbar__section blank"/>                    
                    </div>

                    <div className="l2 ">
                        <div className="t1 wow fadeInUp mdc-toolbar__row">
                            <div className="mdc-toolbar__section">
                                蜂巢链云服务
                            </div>
                        </div>
                        <div className="t2 wow fadeInUp mdc-toolbar__row"  data-wow-delay="0.31s" >
                            <div className="mdc-toolbar__section">可信数据，价值流转</div>

                        </div>

                    </div>
                    <div className="l3 mdc-toolbar__row">
                        <div className="blank mdc-toolbar__section"/>
                        <div className="sa-item mdc-toolbar__section">
                            <div className="t1">入链交易（笔／块）</div>
                            {trade_count}
                        </div> 
                        <div className="mdc-toolbar__section sperator"/>
                        <div className="sa-item mdc-toolbar__section">
                            <div className="t1">区块生成速度(秒)</div>
                            {trade_stime}
                        </div>
                        <div className="mdc-toolbar__section sperator"/>
                        <div className="sa-item mdc-toolbar__section">
                            <div className="t1">当前区块产生时间(秒前)</div>
                            {trade_etime}
                        </div>   
                        <div className="blank mdc-toolbar__section"/>
                    </div>
                </div>
                <AssetDetails show={state.display} tDate={state.tDate}/>
                <Footer/>
            </div>
        )
    }
}