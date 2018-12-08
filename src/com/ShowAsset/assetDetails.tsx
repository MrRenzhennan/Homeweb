import {h,Component} from 'preact'

import fomat from "./dateFomat"
export  default class AssetDetails extends Component<{show,tDate},{}>{
    constructor(props){
        super(props);
        this.state={
            show:false,
            height:0,
            asset:"",
            date:{}
        }
    }
    operation(date){
        this.setState({height:250});
        console.log(date)
        this.setState({date:date})

        // if (typeof document.documentElement.scrollTop != 'undefined'){
        //     document.documentElement.scrollTop = 500;
        // }else if (typeof window.pageYOffset != 'undefined'){
            
        // }else if (typeof document.body.scrollTop != 'undefined') {
        //     document.body.scrollTop = 500;
        // }
    }
    tDate(){
        let  tDate;
        let $this = this;
        if(this.props.tDate){
            tDate = (
                this.props.tDate.map((date)=>{
                    let createdAt = fomat(new Date(date.createdAt),'yyyy-MM-dd HH:mm:ss');
                    return <ul>
                        <li className="one-logo" >{date.trade_no}</li>
                        <li className="keyword">{date.trade_alias}</li>
                        <li className="address">{date.trade_block}</li>
                        <li className="create-time">{createdAt}</li>
                        <li  class="show" onClick={$this.operation.bind($this,date)}>详情展示</li>
                    </ul>
                })
            )
        }else{
            tDate = (<div>&nbsp;</div>)
        }
        return tDate;
    }
    render(props,state){
        return(
            <div>
                <div className="asset-details-box animated fadeInDown" style={{display:props.show?"block":"none"}}>
                    <div className="asset-details-auto">
                        <div className="asset-title">
                            <span className="one-logo">唯一标识</span>
                            <span className="keyword">资产别名</span>
                            <span className="address">地址</span>
                            <span className="create-time">创建时间</span>
                            <span className="operation">操作</span>
                        </div>
                        {this.tDate.bind(this)()}
                            {/* <hr style={{margin:0}}/> */}
                        <div className="operation" style={{height:state.height}}>
                            <div className="operation-loading" style={{display:state.show?"block":"none"}}>
                                <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
                            </div>
                            <p className="operation-p">信息详情</p>
                            <div className="operation-padd">
                                <div className="operation-left">
                                    <p>唯一标识：{state.date.trade_no}</p>
                                    <p>资产别名：{state.date.trade_alias}</p>
                                    <p>关键字：{state.date.trade_keyword}</p>
                                    <p>地址：{state.date.trade_block}</p>
                                    <p>附属信息：{state.date.trade_mark}</p>
                                </div>
                                <div className="operation-right">
                                    <p>文件：</p>
                                    <p>创建时间：{ fomat(new Date(state.date.createdAt),'yyyy-MM-dd HH:mm:ss')}</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}