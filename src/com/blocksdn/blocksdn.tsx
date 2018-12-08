import {h,Component} from 'preact';
import Header from '../Header/header';
import Footer from '../Footer/footer';
import './blocksdn.scss';
import scrolltop from '../utils/util';
export class BlockSdn extends Component<{},{}>{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        scrolltop();
        if (window['wow']){
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
            window.location.href='/uc/home/applicationmanagement'
        }else {
            window.location.href='/uc/login';
        }
    }
    render(){
        return(
           <div class="sdn">
            <Header />
            <div class="sdn-banner">
                {/* <div className="sub-sdn-menu">
                    <div>
                        <a href="/">共享链资产展示</a>
                        <a href="/">产品白皮书</a>
                    </div>
                </div> */}
                <div class="sdn-title">
                    <h1 class="fadeInDown" data-wow-duration="1.5s" data-wow-delay="0s">App内容防护</h1>
                    <h5 class="fadeInUp" data-wow-duration="1.5s" data-wow-delay="0s">独创区块链防护技术，为App提供DNS防劫持、HTTP网络内容防篡改服务</h5>
                </div>
                <div class="sdn-header">
                    <ul class="clearfix sdn-row1">
                        <li class="slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                            <div>
                                <i class="icon-c1"></i>
                                <h4>智能调度</h4>
                                <p>
                                  自动指派响应最快的节点为不同地域的App提供服务
                                </p>
                            </div>
                        </li>
                        <li class="slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                            <div>
                                <i class="icon-c2"></i>
                                <h4>区块链防护专利技术</h4>
                                <p>
                                  独创基于区块链的防护技术，确保内容不被篡改
                                </p>
                            </div>
                        </li>
                        <li class="slideInRight " data-wow-duration="1.5s" data-wow-delay="0s">
                            <div>
                                <i class="icon-c3"></i>
                                <h4>全网络准确同步</h4>
                                <p>
                                  利用区块链高效同步机制，保证全网内容的一致性
                                </p>
                            </div>
                        </li>
                    </ul>
                    <ul class="sdn-row2 clearfix">
                        <li>
                            <div class="slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                                <i class="icon-d1"></i>
                                <h4>
                                  源站内容旁路获取通道
                                </h4>
                                <p>
                                  在App被DNS劫持时，本服务提供有效通道获取源站正确内容
                                </p>
                            </div>
                        </li>
                        <li>
                            <div class="slideInRight" data-wow-duration="1.5s" data-wow-delay="0s">
                                <i class="icon-d2"></i>
                                <h4>
                                  防DNS攻击
                                </h4>
                                <p>
                                  利用区块链去中心化特性，将攻击压力分散到整个网络
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="sdn-section">
                <h2>DNS防劫持</h2>
                <ul class="clearfix section-wrapper">
                    <li class="slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-challange"></i></div>
                        <h6>挑战</h6>
                        <div>
                        DNS劫持在互联网上频繁发生。一旦用户访问了错误的IP地址，影响的不仅是网站的信誉，还有用户数据被截获所带来的无法预期的损失。
                        </div>
                    </li>
                    <li class="slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-solution"></i></div>
                        <h6>解决方案</h6>
                        <div>
                        利用区块链保存正确的DNS记录，通过App内嵌SDK，将正确的DNS记录返回给App。
                        </div>
                    </li>
                    <li class="slideInRight" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-benefit"></i></div>
                        <h6>利益</h6>
                        <div>
                            <ul>
                                <li>通过智能DNS功能，实现DNS精准调度，提高用户访问体验。</li>
                                <li>去中心化的区块链多副本技术确保数据真实有效。</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="sdn-section section-gray">
                <h2>HTTP防篡改</h2>
                <ul class="clearfix section-wrapper">
                    <li class="slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-challange"></i></div>
                        <h6>挑战</h6>
                        <div>
                          不管如何强化自己网站系统的安全，网站内容在互联网传输路径中，很容易被未知的中间人篡改。一旦内容被篡改不仅会降低用户体验，而且会给企业的公信力造成不必要的损失。
                        </div>
                    </li>
                    <li class="slideInLeft" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-solution"></i></div>
                        <h6>解决方案</h6>
                        <div>
                            利用区块链确保源站正确内容全网快速传播，且不被篡改。通过App内嵌SDK，将正确的网站内容反回给App。
                        </div>
                    </li>
                    <li class="slideInRight" data-wow-duration="1.5s" data-wow-delay="0s">
                        <div class="section-icon"><i class="icon-benefit"></i></div>
                        <h6>利益</h6>
                        <div>
                            <ul>
                                <li>通过容灾备份功能，提高App网站内容打开成功率。</li>
                                <li>利用区块链防篡改能力，确保App不出现不可预期的国家禁止的非法内容。</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div className="bottom-banner">
                <p>App内容防护免费体验6个月</p>
                <a href="javascript:void(0);" onClick={this.buy.bind(this)}>立即体验</a>
            </div>
            <Footer />
           </div>
        )
    }
}