import {h,Component} from 'preact'
import {LayoutGrid ,Elevation} from 'preact-material-components/dist/index.js';
import Header from '../Header/header'
import Footer from '../Footer/footer';
import './aboutus.scss'
import Swiper from 'swiper';
import scrolltop from '../utils/util';
export class AboutUs extends Component<{},{}>{
    componentDidMount() { 
        scrolltop();         
        if(window['wow']){
             window['wow'].sync();   
        }
    }
    render(){
        return(
            <div class="aboutus" style={{overflow:'auto'}}>
                <Header/>
                <div class="about-main">
                    <div className="about-header">
                        <h1 class="" data-wow-duration="1.5s" data-wow-delay="0s">泛融科技</h1>
                        <p class="" data-wow-duration="1.5s" data-wow-delay="0s">
                            北京泛融科技有限公司是一家集共享计算、企业级区块链、金融科技为一体的区块链技术专业服务商。旗下自主研发的“蜂巢链”是一款基于区块链的共享计算服务平台，为客户提供可扩展、安全、易于使用的专属链账本、共享链账本、App内容防护、共享计算等产品。广泛应用于互联网基础服务的云计算服务商、银行、保险、农业、游戏、娱乐等行业，并为企业及个人提供数字资产交易，数字资产融资等解决方案。泛融科技自成立以来已经成功申请十多项国家专利，并多次荣膺国内区块链行业联盟及媒体评选的区块链优秀案例奖项。
                        </p>
                    </div>
                    <div className="about-content">
                        <div className="advantage">
                            <h1>公司优势</h1>
                            <p className="sub-title_english">Our Advantage</p>
                            <ul class="clearfix">
                                <li class="slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                                    <i class="icon-innovation"></i>
                                    <h5>深刻的认知和综合技术创新能力</h5>
                                    <p>
                                        了解区块链，精通金融，深谙互联网思维。拥有多项核心技术专利：高效的共识机制、自主智能合约引擎、分布式共享账本框架
                                    </p>
                                </li>
                                <li class="slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                                <i class="icon-develop"></i>
                                    <h5>优秀的产品研发和运营团队</h5>
                                    <p>
                                    核心团队成员拥有10-20年金融/互联网开发和互联网运营经验。行业经验包括：IDC/云服务商，互联网金融，区块链钱包，货币兑换等
                                    </p>
                                </li>
                                <li class="slideInRight" data-wow-duration="1.5s" data-wow-delay="0s">
                                <i class="icon-consultation"></i>
                                    <h5>资深的顾问咨询能力</h5>
                                    <p>
                                        核心成员拥有20年以上企业级顾问咨询和金融核心系统建设经验。精通区块链技术和深厚的金融业务经验。拥有丰富的解决方案设计和系统开发经验
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className="development">
                            <h1>发展历程</h1>
                            <p className="sub-title_english">Development History</p>
                            <div className="development-route">
                                <div className="inner-route clearfix">
                                    <div class="step step1 slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">2014</div>
                                    <p class="step-content step1-content slideInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">从事区块链技术研究，区块链技术的积极倡导者</p>
                                    <div class="step step2 slideInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">2016.07</div>
                                    <p class="step-content step2-content slideInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">北京泛融科技有限公司成立</p>
                                    <div class="step step3 slideInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">2016.10</div>
                                    <p class="step-content step3-content slideInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">获得千万级天使投资全力发展区块链技术</p>
                                    <div class="step step4 slideInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">2017.09</div>
                                    <p class="step-content step4-content slideInLeft" data-wow-duration="1.5s" data-wow-delay="0.3s">荣获工信部“可信区块链”优秀案列奖项</p>
                                    <div class="step step5 slideInRight" data-wow-duration="1.5s" data-wow-delay="0.6s">2017.11</div>
                                    <p class="step-content step5-content slideInRight" data-wow-duration="1.5s" data-wow-delay="0.6s">核心产品蜂巢链面世</p>
                                    <div class="step step6 slideInRight" data-wow-duration="1.5s" data-wow-delay="0.6s">2017.12</div>
                                    <p class="step-content step6-content slideInRight" data-wow-duration="1.5s" data-wow-delay="0.6s">荣获中高会区块链联盟2017年度优秀区块链公司</p>
                                    <div class="step step7 slideInRight" data-wow-duration="1.5s" data-wow-delay="0.6s">2017.12</div>
                                    <p class="step-content step7-content slideInRight" data-wow-duration="1.5s" data-wow-delay="0.6s">与数字本草战略合作，共同打造中药材行业可信生态联盟</p>
                                    <div class="step step8 slideInRight" data-wow-duration="1.5s" data-wow-delay="0.6s">2018.01</div>
                                    <p class="step-content step8-content slideInRight" data-wow-duration="1.5s" data-wow-delay="0.6s">与启迪金科强强联手，通过区块链推进金融行业科技转型升级</p>
                                </div>
                            </div>
                        </div>
                        <div class="team">
                            <div className='home-title'>
                                <p className="s1">团队介绍</p>
                                <p className="s2">Team Indroduction</p>
                            </div>
                            <div class="team-indro">
                            <div class="team-inner clearfix">
                                <div class="team-item">
                                    <div class="team-member"></div>
                                <div class="team-member-name">田江波</div>
                                    <div class="team-member-duty">CTO</div>
                                <div className="team-member-indro">
                                    北京理工大学计算机专业硕士研究生，北京连云决科技有限公司创始人，曾任蓝汛核心系统平台研发总监，有8年CDN平台架构、研发相关经验。
                                    </div>
                                </div>
                                <div class="team-item">
                                <div class="team-member"></div>
                                <div class="team-member-name">吴斌</div>
                                    <div class="team-member-duty">COO</div>
                                <div className="team-member-indro">
                                    二十多年搜狐和微软IT技术骨干。在微软十三年任职期间，参与和负责大型知名企业的重大项目开发，负责微软私有云、混合云的推广，拥有丰富的系统建设经验。
                                    </div>
                                </div>
                                <div class="team-item">
                                <div class="team-member"></div>
                                <div class="team-member-name">谭宜勇</div>
                                    <div class="team-member-duty">CEO</div>
                                <div className="team-member-indro">
                                    南开大学博士、清华大学博士后。10多年金融系统建设经验，曾多次主持国有大型银行核心系统建设，担任建设银行总行前后台分离项目、建行新一代核心业务系统等项目的总架构师和首席科学家。
                                    </div>
                                </div>
                                <div class="team-item">
                                <div class="team-member"></div>
                                <div class="team-member-name">王晋军</div>
                                    <div class="team-member-duty">合伙人 & 副总裁</div>
                                <div className="team-member-indro">
                                    上海复旦大学MSE（软件工程硕士）金融方向客座讲师，在多家上市公司任职经历，参与筹备、建设多家百亿级互金公司、支付公司平台。
                                    </div>
                                </div>
                                <div class="team-item">
                                <div class="team-member"></div>
                                <div class="team-member-name">彦远泉</div>
                                    <div class="team-member-duty">合伙人 & 副总裁</div>
                                <div className="team-member-indro">
                                    近20年IT行业从业经历，曾先后任职于新浪、微软公司，负责产品及技术架构设计、交付与迭代的管理。对于传统企业信息技术、移动互联网新兴技术及智能云计算技术有着较为深入的研究与实践经验。
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}