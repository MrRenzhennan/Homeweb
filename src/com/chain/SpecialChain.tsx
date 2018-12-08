import {h,Component} from 'preact';
import Header from '../Header/header';
import './chain.scss';
import Footer from '../Footer/footer';
import scrolltop from '../utils/util';
export default class SpecialChain extends Component<{},{}>{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        scrolltop();
        if(window['wow']){
        	window['wow'].sync();
        }
    }
    buy () {
        let user;
        try {
            let str = sessionStorage.getItem('user');
            user = JSON.parse(str);
        }catch(err) {
            console.log(err);
        }
        if(user && user.userId){
            sessionStorage.setItem('version','free');
            window.location.href='/uc/home/shargingbooks'
        }else {
            window.location.href='/uc/login/fa';
        }
    }
    render(){
        return(
           <div class="chain">
            <Header />
            <div class="chain-banner">
                <div className="sub-chain-menu">
                    <div>
                        <a href="/showasset">共享链资产展示</a>
                        <a target="new" href="/蜂巢链云服务平台白皮书.pdf">产品白皮书</a>
                    </div>
                </div>
                <div class="chain-title">
                    <h1 class="fadeInDown" data-wow-duration="1.5s" data-wow-delay="0s">专属链/共享链账本</h1>
                    <h5 class="fadeInUp" data-wow-duration="1.5s" data-wow-delay="0s">拥有多项核心技术和专利的，企业应用级区块链服务</h5>
                </div>
                <div class="chain-header">
                    <ul class="clearfix chain-row1">
                        <li>
                            <div class=" slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                                <i class="icon-a1"></i>
                                <h4>企业应用级别</h4>
                                <p>
                                    满足企业对入链信息尺寸、性能、稳定性、安全性等需求
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class=" slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                                <i class="icon-a2"></i>
                                <h4>多项核心专利技术</h4>
                                <p>
                                    专为企业应用设计，拥有记账系统、安全钱包、共识算法等核心专利技术
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class=" slideInRight" data-wow-duration="1.5s" data-wow-delay="0s">
                                <i class="icon-a3"></i>
                                <h4>融合云</h4>
                                <p>
                                    灵活挑选最适合的云厂商部署区块链环境
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class=" slideInRight" data-wow-duration="1.5s" data-wow-delay="0s">
                                <i class="icon-a4"></i>
                                <h4>多链技术</h4>
                                <p>
                                    多条区块链并行处理，智能调度，有效提高记账效率
                                </p>
                            </div>
                        </li>
                    </ul>
                    <ul class="chain-row2 clearfix">
                        <li>
                            <div class=" slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                                <i class="icon-b1"></i>
                                <h4>
                                    跨域组网
                                </h4>
                                <p>
                                    区块链节点无论身处何处皆可互联互通
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class=" slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                                <i class="icon-b2"></i>
                                <h4>
                                    共识算法热插拔
                                </h4>
                                <p>
                                    根据账本规模和性能不同，动态更换共识算法，而不停止账本服务
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class=" slideInRight" data-wow-duration="1.5s" data-wow-delay="0s">
                                <i class="icon-b3"></i>
                                <h4>
                                    大文件存储
                                </h4>
                                <p>
                                    提供非结构化大文件防篡改，多点灾备功能
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="chain-section">
                <h2>数据安全防护</h2>
                <h3>单方数据入链，多重安全机制保障数据安全、防篡改</h3>
                <ul class="clearfix section-wrapper">
                    <li class=" slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-challange"></i></div>
                        <h6>挑战</h6>
                        <div>
                            当交易完成后的相关资料、或特殊场景下的重要信息，需要从录入、访问到保存全过程的安全储存，且确保不被篡改。
                        </div>
                    </li>
                    <li class=" slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-solution"></i></div>
                        <h6>解决方案</h6>
                        <div>
                            将需要保护的数据存入区块链中。通过简单的接口调用快速提取保存的数据内容。对数据的历史变化可以轻松追溯。
                        </div>
                    </li>
                    <li class=" slideInRight" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-benefit"></i></div>
                        <h6>利益</h6>
                        <div>
                            <ul>
                                <li>区块成链和共识算法，确保数据无法篡改。</li>
                                <li>数据私钥加密，确保数据不被泄露。</li>
                                <li>副账本高效同步，确保数据不丢失。</li>
                            </ul>
                        </div>
                    </li>
                    <li class=" slideInRight" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-scene"></i></div>
                        <h6>应用场景</h6>
                        <div className="scene">
                            <ul>
                                <li>产品溯源</li>
                                <li>DNS 记录防篡改</li>
                                <li>IoT 设备信息防护</li>
                                <li>核心系统审计信息入链</li>
                                <li>游戏装备信息入链</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="chain-section section-gray">
                <h2>交易透明监管</h2>
                <h3>多方交易入链可追溯，自证方式建立信任体系</h3>
                <ul class="clearfix section-wrapper">
                    <li class=" slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-challange"></i></div>
                        <h6>挑战</h6>
                        <div>
                        金融活动的核心就是交易合约的签订和执行，而交易环节透明度不足，成为了极大的信任障碍。针对如何确保多方交易有效性、公正性，让交易全过程实现多方共识，同时符合监管机构监管成为了难题。
                        </div>
                    </li>
                    <li class=" slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-solution"></i></div>
                        <h6>解决方案</h6>
                        <div>
                        在区块链上贸易各方利用各自的私钥在线签署电子合同。并通过将各贸易环节中的交易信息存入区块链中，从而提高整个贸易的真实性。
                        </div>
                    </li>
                    <li class=" slideInRight" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-benefit"></i></div>
                        <h6>利益</h6>
                        <div>
                            <ul>
                                <li>记录过程，数据源准确且无法篡改、利于监管。</li>
                                <li>多副本共同记账，确保交易真实与多方的良性协作。</li>
                                <li>价值结算，实现交易即结算。</li>
                            </ul>
                        </div>
                    </li>
                    <li class=" slideInRight" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-scene"></i></div>
                        <h6>应用场景</h6>
                        <div className="scene">
                            <ul>
                                <li>P2P 平台交易</li>
                                <li>大宗商品交易</li>
                                <li>第三方支付</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="chain-section">
                <h2>数字资产交易</h2>
                <h3>自主数据深度分析，对外开放价值流转</h3>
                <ul class="clearfix section-wrapper">
                    <li class=" slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-challange"></i></div>
                        <h6>挑战</h6>
                        <div>
                        传统的资产服务，需要相应的中间商，如资产所有者证明、真实性公证等均需要权威机构作为第三方的介入，从中协调才可以完成。当采用区块链作为“第三方”，以其不可篡改的特性，保证数字资产交易的公正性，提高交易双方的认可度。
                        </div>
                    </li>
                    <li class=" slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-solution"></i></div>
                        <h6>解决方案</h6>
                        <div>
                        利用区块链对数字资产进行登记、确权，同时利用区块链的数字钱包和交易所机制，实现数字资产的权利转换和资金可靠流转。
                        </div>
                    </li>
                    <li class=" slideInRight" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-benefit"></i></div>
                        <h6>利益</h6>
                        <div>
                            <ul>
                                <li>实现点对点的支付方式，省去第三方金融机构等中间环节，实现全天候支付、实时到账、提现简便以及没有隐形成本。</li>
                                <li>通过区块链对数字资产物权变化的准确追踪，有效避免双花问题。</li>
                            </ul>
                        </div>
                    </li>
                    <li class=" slideInRight" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-scene"></i></div>
                        <h6>应用场景</h6>
                        <div className="scene">
                            <ul>
                                <li>票据</li>
                                <li>仓单</li>
                                <li>外汇</li>
                                <li>股票</li>
                                <li>积分</li>
                                <li>能源信用</li>
                                <li>游戏装备</li>
                                <li>音乐版权</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="chain-section section-gray">
                <h2>贸易征信融资</h2>
                <h3>贸易信息入链，金融机构共治共识，融资资金专款专用</h3>
                <ul class="clearfix section-wrapper">
                    <li class=" slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-challange"></i></div>
                        <h6>挑战</h6>
                        <div>
                        产业链背景下的小微企业融资困难，银行对于企业信誉情况了解仍较为局限，而获悉企业以往融资还贷情况，成为增信的重要环节之一。企业每次申请融资贷款需要提交相同资料以备银行审核，流程繁琐，银行对其资料真实性也难以判断。同时，对于融资款项放款后，融资资金流向难以有效控制，从而对于银行而言加大了贷款风险。
                        </div>
                    </li>
                    <li class=" slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-solution"></i></div>
                        <h6>解决方案</h6>
                        <div>
                        将交易真实信息存入区块链，实现贸易增信。将融资流程入链，实现融资全程追溯。同时利用区块链的数信凭证功能，实现融资资金专款专用。
                        </div>
                    </li>
                    <li class=" slideInRight" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-benefit"></i></div>
                        <h6>利益</h6>
                        <div>
                            <ul>
                                <li>打造基于可信网络的链上增信平台，实现信息流、物流、商流，价值流、资金流的线上统一与协同。</li>
                                <li>可追溯、安全的价值流转，从根本上解决贸易背景真实性问题。</li>
                                <li>价值流转体系为小微企业增加新的融资手段，解决其融资难问题，有效促进产业链优化。</li>
                            </ul>
                        </div>
                    </li>
                    <li class="slideInRight" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-scene"></i></div>
                        <h6>应用场景</h6>
                        <div className="scene">
                            <ul>
                                <li>企业融资</li>
                                <li>消费贷</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="bottom-banner">
                <p>共享账本免费使用6个月</p>
                <a href="javascript:void(0);" onClick={this.buy.bind(this)}>立即体验</a>
            </div>
            <Footer />
           </div>
        )
    }
}