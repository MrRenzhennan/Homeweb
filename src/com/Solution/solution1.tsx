import {h,Component} from 'preact'
import {LayoutGrid ,Elevation} from 'preact-material-components/dist/index.js';
import Header from '../Header/header'
import Footer from '../Footer/footer';
import scrolltop from '../utils/util';
import './solution.scss'


export class Solution1 extends Component<{},{}>{

    componentDidMount() {  
        scrolltop();        
        if(window['wow']){
             window['wow'].sync();   
        }
    }
    render(){
        
        return(
            <div style={{overflow:'auto'}}>
                <Header/>
                <div className="sl-bg dzsp" >
                    <p className="sl-bg-title wow fadeInDown"  data-wow-duration="1.5s" data-wow-delay="0.31s" >大宗商品</p>
                 </div>
                <div className="sl-ci">
                    <p className="sl-ci-title wow ">行业痛点</p>
                    <p className="sl-sub-title wow ">Industry Pain Points</p>
                    <p className="sl-ci-detail wow slideInLeft" data-wow-delay="0.31s">
                        内幕交易、操纵市场、窜改数据、商业欺诈、暗箱操作、开设对赌平台、仓单重复质押、信息不公开、监管盲区
                          一些不规范的大宗商品交易中心出现的痼疾，乱象频现，不仅增加了市场 纠纷，更扰乱了正常的市场秩序，
                      甚至出现恶性案件。为监管带来了很大的麻烦与困难，监管收紧从而限制了行业的发展，信用降低也阻止了行业的前行。
                    </p>
                </div>
                <div className="sl-ci wow zoomIn" style={{backgroundColor:"#fff",paddingBottom:'0'}}>
                    <p className="sl-ci-title">解决方案</p>
                    <p className="sl-sub-titles" >Solution</p>
                    <p className="sl-sub-detail">透明监管与资金沉淀</p>
                </div>
                <div className="sl-item">
                    <LayoutGrid>
                        <LayoutGrid.Inner>
                            <LayoutGrid.Cell cols="6">
                                <div className="text-detail  wow slideInLeft" data-wow-delay="0.31s">
                                    <p className="title">记录过程</p>
                                    <p className="detail">
                                        记录系统运营过程中所有的交易记录，同时可以自己记录相<br/>
                                        关数据，也可保存监管记录和审计痕迹，并将其形成“区块”<br/>
                                        入账，存储在互联互通、全结点共享，且无法被篡改的网路<br/>
                                        系统中。无需数据采集，无需企业上报，在免去监管成本的<br/>
                                        同时也保证了数据源的准确性，为行业监管机构市场监管<br/>
                                        行为提供了极大的便利。
                                    </p>
                                </div>
                            </LayoutGrid.Cell>
                            <LayoutGrid.Cell cols="6">
                                <div className="text-img1  wow slideInRight" data-wow-delay="0.31s">
                                </div>
                            </LayoutGrid.Cell>
                        </LayoutGrid.Inner>
                    </LayoutGrid>
                </div>
                <div className="sl-item" style={{backgroundColor:'rgb(247, 247, 247)'}}>
                    <LayoutGrid>
                        <LayoutGrid.Inner>
                            <LayoutGrid.Cell cols="6">
                                <div className="text-img4 wow slideInLeft" data-wow-delay="0.31s">
                                </div>
                            </LayoutGrid.Cell>
                            <LayoutGrid.Cell cols="6">
                                <div className="text-detail" style={{textAlign:'right'}}>
                                    <p className="title  wow slideInRight" data-wow-delay="0.31s">多副本共同记账</p>
                                    <p className="detail wow slideInRight" data-wow-delay="0.31s">
                                        交易中，买卖双方为避免权益遭受损失，一般需要交易信息保<br/>
                                        密，但另一方面，市场监管机构却需要交易信息透明，取保双<br/>
                                        方的交易合法合规的真实可信，可通过多副本共同记账进行多<br/>
                                        方见证，确保交易的真实和准确。同时，数据密钥，可以保证<br/>
                                        交易双方交易信息的私密性，并向有关监管部门适度公开必要<br/>
                                        信息，这有助市场监管机构与市场参与者形成良性合作关系.
                                        
                                    </p>
                                </div>
                            </LayoutGrid.Cell>
                        </LayoutGrid.Inner>
                    </LayoutGrid>
                </div>
                <div className="sl-item">
                    <LayoutGrid>
                        <LayoutGrid.Inner>
                            <LayoutGrid.Cell cols="6">
                                <div className="text-detail">
                                    <p className="title wow slideInLeft" data-wow-delay="0.31s">价值结算</p>
                                    <p className="detail wow slideInLeft" data-wow-delay="0.31s">
                                        发行代币，在交易系统内封闭体系中通过代币进行交易结算，<br/>
                                        可进行点对点结算，不需要第三方参与，实现交易即时结算。<br/>
                                        同时可通过高效智能合约按合约模板进行自动多方结算。体系内代币流通可沉淀资金
                                    </p>
                                </div>
                            </LayoutGrid.Cell>
                            <LayoutGrid.Cell cols="6">
                                <div className="text-img3 wow slideInRight" data-wow-delay="0.31s">
                                </div>
                            </LayoutGrid.Cell>
                        </LayoutGrid.Inner>
                    </LayoutGrid>

                </div>
                <Footer/>
            </div>
        )
    }
}