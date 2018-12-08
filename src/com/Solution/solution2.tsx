import { h ,Component } from 'preact';
import {LayoutGrid ,Elevation} from 'preact-material-components/dist/index.js';
import Header from '../Header/header'
import Footer from '../Footer/footer';
import scrolltop from '../utils/util';
import './solution.scss';
export class Solution2 extends Component<{},{}>{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        scrolltop();
        if(window['wow']){
            window['wow'].sync();   
       }
    }
    render () {
        return (
            <div style={{overflow:'auto'}}>
                <Header/>
                <div className="sl-bg nyhy">
                    <p className="sl-bg-title wow fadeInDown"  data-wow-duration="1.5s" data-wow-delay="0.31s">能源行业</p>
                </div>
                <div className="sl-ci">
                    <p className="sl-ci-title wow ">行业痛点</p>
                    <p className="sl-sub-title  wow ">Industry Pain Points</p>
                    <p className="sl-ci-detail  wow slideInRight" data-wow-delay="0.4s" style={{textAlign:'center'}}>
                        拥有大量用户、大量用户数据，且用户信息准确性高，
                        坐拥如此大的确没有发挥其价值，急待寻求业务创新。
                        系统封闭 ，开发成本高。
                    </p>
                </div>
                <div className="sl-ci  wow zoomIn" style={{backgroundColor:"#fff",paddingBottom:'0'}}>
                    <p className="sl-ci-title">解决方案</p>
                    <p className="sl-sub-titles" >The solution</p>
                    <p className="sl-sub-detail">透明监管与资金沉淀</p>
                </div>
                <div className="sl-item">
                    <LayoutGrid>
                        <LayoutGrid.Inner>
                            <LayoutGrid.Cell cols="6">
                                <div className="text-detail   wow slideInLeft" data-wow-delay="0.31s">
                                    <p className="title">分布式副账本</p>
                                    <p className="detail">
                                        基于区块链的分布式账本特性，实现单一中心式数据库和分布<br/>
                                        式副账本共存。多个共享的账本副本，账本的维护由分布共识<br/>
                                        算法实现，通过密钥，保障交易上方的私密性，并能向监管部<br/>
                                        门适度公开必要信息，双向实现市场增信的目的。
                                    </p>
                                </div>
                                </LayoutGrid.Cell>
                            <LayoutGrid.Cell cols="6">
                                <div className="text-img4 wow slideInRight" data-wow-delay="0.31s">
                                </div>
                            </LayoutGrid.Cell>
    
                        </LayoutGrid.Inner>
                    </LayoutGrid>
                </div>
                <div className="sl-item" style={{backgroundColor:'rgb(247, 247, 247)'}}>
                    <LayoutGrid>
                        <LayoutGrid.Inner>
                            <LayoutGrid.Cell cols="6">
                            <div className="text-img2 wow slideInLeft" data-wow-delay="0.31s"></div>
                            </LayoutGrid.Cell>
                            <LayoutGrid.Cell cols="6">
                                <div className="text-detail " style={{textAlign:'right'}}>
                                    <p className="title wow slideInRight" data-wow-delay="0.31s">多方参与</p>
                                    <p className="detail wow slideInRight " data-wow-delay="0.31s">
                                        基于区块链的多中心、共识、开放、数据不可篡改的特性<br/>
                                        ，联合商业机构、物流机构、金融机构等各方共同参与、共<br/>

                                        创区块链联盟，各尽其力、各取所需，从而激活消费金融。<br/>
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
                                    <p className="title wow slideInLeft" data-wow-delay="0.31s">增信服务</p>
                                    <p className="detail wow slideInLeft" data-wow-delay="0.31s">
                                        数据量大、数据真实准确，结合区块链的多重签名、密钥<br/>
                                        机制、共识等特性，通过数据提供征信服务。
                                        </p>
                                </div>
                            </LayoutGrid.Cell>
                            <LayoutGrid.Cell cols="6">
                                <div className="text-img5 wow slideInRight" data-wow-delay="0.31s">
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