import {h,Component} from 'preact'
import {LayoutGrid} from 'preact-material-components/dist/index.js';
export default class Footer extends Component<{},{}>{
    render(){
        return(
           <div>
                   <div style={{backgroundColor:'rgb(1, 1, 1)'}} className="contact">
                        <LayoutGrid>
                            <LayoutGrid.Inner>
                                <LayoutGrid.Cell cols="6">
                                    <div style="color: rgb(232, 232, 232); float: left; margin: 18px 0px;">
                                        <p >地址:&nbsp;&nbsp;北京市朝阳区望京南湖西园221号楼8层808室</p>
                                        <p >电话:&nbsp;&nbsp;(+86)010-64789571</p>
                                        <p >邮箱:&nbsp;&nbsp;market@finchain360.com</p>
                                    </div>
                                </LayoutGrid.Cell>
                                <LayoutGrid.Cell  cols="6">
                                    <div className="erweima">
                                        <i class="hn-erweim"></i>
                                        <p className="wechatinfo" >微信公众平台</p>
                                    </div>
                                </LayoutGrid.Cell>
                            </LayoutGrid.Inner>
                        </LayoutGrid>
                    </div>
                    <div className="icp">京ICP备17002356号-2&nbsp;&nbsp;2017&nbsp;&nbsp;北京泛融科技有限公司
                    </div>
           </div>
        )
    }
}