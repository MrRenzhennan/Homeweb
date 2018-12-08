import { h, render, Component } from 'preact';
import { route } from 'preact-router';


import { Toolbar,Tabs ,Menu,Button} from 'preact-material-components/dist/index.js';

let opacity ='.0';
export default class Header extends Component<{}, {}> {
    menu;
    menu1;
    menu2;
    constructor(props){
        super(props)
        this.state = {
            opacity: ".0",
            isLogined:false,
            goucweb:'http://localhost:'
        }
    }
    getUserInfo(){
        let userinfo;
        if (sessionStorage.getItem('user')) {
          try {
              userinfo = JSON.parse(sessionStorage.getItem('user'));
          }catch(err){
              console.error('no userinfo ',err);
          }
        }
        if (userinfo && userinfo.userId) {
            this.setState({
                isLogined:true
            })
        }else {
            this.setState({
                isLogined:false
            })
        }
    }
    componentDidMount() {
        this.getUserInfo();
        // window.addEventListener('scroll',this.headerCtrl);
        this.sginbtnctrl();
        let links = document.getElementsByTagName('a');
        for (var i= 0;i<links.length;i++) {
            links[i].onclick = function () {
                document.body.scrollTop = 0;
            }
        }
    }
    componentWillUnmount(){
        window.removeEventListener('scroll',this.headerCtrl);
    }
    sginbtnctrl(){
        let btn = document.getElementById('sginbtn');
        let bg = document.getElementById('btn-backgd');
        btn.addEventListener('mouseover',()=>{
            btn.style.color = '#000';
            bg.className = 'btn-backgd btn-backgd-full'
        });
        btn.addEventListener('mouseout',()=>{
            btn.style.color = '#fff';
            bg.className = 'btn-backgd'
        });
        // let header = document.getElementById('header');
        // header.addEventListener('mouseover',()=>{
        //     console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
        // });
        // header.addEventListener('mouseout',()=>{
        //     console.log("bbbbbbbbbbbbbbbbbbb")
        // })
    }

    headerCtrl=() => {
        const top = this.getScrollTop();
        if(top<200){
            opacity = '.'+ top/2
        }else {
            opacity = '1'
        }
        document.getElementById('header').style.backgroundColor = 'rgba(51,51,51,'+ opacity+')'
    }
    goToUc () {
      this.getUserInfo();
      let isLogined = this.state['isLogined'];
      let href;
      if (isLogined) {
          href = '/uc/home/_'
      }else {
          href = '/uc/login';
      }
      location.href = href;
    }
    goHome(){
        route('/');
    }
    //获取滚动距离
    getScrollTop=() => {
        var scrollPos;
        if (window.pageYOffset) {
            scrollPos = window.pageYOffset;
        }else if (document.compatMode && document.compatMode != 'BackCompat') {
            scrollPos = document.documentElement.scrollTop;
        }else if (document.body) {
            scrollPos = document.body.scrollTop;
        }
        return scrollPos;
    }
    render(props,state) {
        return (
           <div className="header">
               <Toolbar className="mdc-toolbar--flexible" id="header">
                <Toolbar.Row>
                  <Toolbar.Section align-start={true} style={{position:'absolute',width:'100%'}}>
                       <div className="title" >
                           <a href="javascript:;" onClick={this.goHome} style={{cursor:'pointer',color:'#fff',textDecoration: 'none',fontSize:16}}>
                               <i className="fc-font icon-logo" style={{verticalAlign:'middle'}}></i> <span>蜂巢链</span>
                           </a>
                       </div>
                      <div style={{position:'absolute',right:'0'}}>
                          <div className="navlist">
                              <div className='tab navlist' indicator-accent={true}>
                                  <a className="navopts" href="/"><span>首页</span></a>

                                  <span className="navopts" style={{position:'relative'}}>
                                      <div id="jiantou1" style={{position:'absolute',width:0,height:0,borderBottom:'12px rgba(255,255,255,0.15) solid',borderRight:'12px transparent solid',borderLeft:'12px transparent solid',display:'none'}}></div>
                                    <Menu.Anchor style={{padding:'0'}} onMouseOver={e => {
                                        this.menu2.MDComponent.open = true;
                                        document.getElementById('jiantou1')['style'].display='block'
                                    }}
                                                 onMouseOut={e => {
                                                     this.menu2.MDComponent.open = false;
                                                     document.getElementById('jiantou1')['style'].display='none'
                                                 }}
                                    >
                                      <span style={{margin:'0'}}>
                                        产品
                                      </span>
                                      <Menu ref={menu => {this.menu2 = menu;}}>
                                          <a style={{textDecoration: 'none'}} href="/chain">
                                            <Menu.Item className="header-fa">
                                                专属链/共享链账本
                                            </Menu.Item>
                                        </a>
                                          <a style={{textDecoration: 'none'}} href="/blocksdn">
                                            <Menu.Item className="header-fa">
                                                App内容防护
                                            </Menu.Item>
                                          </a>
                                      </Menu>
                                    </Menu.Anchor>
                                </span>

                                  {/* <a className="navopts" href="../蜂巢链云服务平台白皮书.pdf" target="_blank"><span>产品白皮书</span></a> */}
                                  {/* <span className="navopts" style={{position:'relative'}}>
                                      <div id="jiantou" style={{position:'absolute',width:0,height:0,borderBottom:'12px #333 solid',borderRight:'12px transparent solid',borderLeft:'12px transparent solid',display:'none'}}></div>
                                    <Menu.Anchor style={{padding:'0'}} onMouseOver={e => {
                                                      this.menu1.MDComponent.open = true;
                                                      document.getElementById('jiantou')['style'].display='block'
                                                  }}
                                                 onMouseOut={e => {
                                                     this.menu1.MDComponent.open = false;
                                                     document.getElementById('jiantou')['style'].display='none'
                                                 }}
                                                  >
                                      <span style={{margin:'0'}}>
                                        解决方案
                                      </span>
                                      <Menu ref={menu => {this.menu1 = menu;}}>
                                          <a style={{textDecoration: 'none'}} href="/solution1">
                                            <Menu.Item className="header-fa">
                                                大宗商品
                                            </Menu.Item>
                                        </a>
                                          <a style={{textDecoration: 'none'}} href="/solution2">
                                            <Menu.Item className="header-fa">
                                                能源行业
                                            </Menu.Item>
                                          </a>
                                      </Menu>
                                    </Menu.Anchor>
                                </span>  */}
                                  {/* <a className="navopts" href="/showasset"><span>资产展示</span></a> */}
                                  <a className="navopts" href="/aboutus"><span>关于我们</span></a>
                                  {/*<a className="navopts" target="_blank" href="_book/index.html"><span>技术支持</span></a>*/}
                                  <a onClick={this.goToUc.bind(this)} class="navopts" href="javascript:;" style={{}}>
                                    <span>控制台</span>
                                  </a>
                                  <a className="navopts login" style={{display:'inline-block'}} href="/uc/login"><span>登录</span></a>
                                  <a href="/uc/sgin/cn" style={{display:'inline-block'}}>
                                      <span id="sginbtn" className="sginbtn">
                                          <div className="text">注册</div>
                                          <div id="btn-backgd" className="btn-backgd">
                                          </div>
                                      </span>
                                  </a>
                              </div>
                          </div>
                          <div className="navmenu">
                              <Menu.Anchor>
                                  <Button onClick={e => {this.menu.MDComponent.open = true;}}>
                                      <i className='mdc-icon material-icons'>menu</i>
                                  </Button>
                                  <Menu ref={menu => {this.menu = menu;}}>
                                      {/* <a className="navopts" href="/蜂巢链云服务平台白皮书.pdf" target="_blank"><Menu.Item style={{borderBottom:'1px #a1a1a1 solid',fontSize:'13px'}}>产品白皮书</Menu.Item>
                                      </a> */}
                                      <a href="/"><Menu.Item style={{borderBottom:'1px #a1a1a1 solid',fontSize:'13px',display:'block'}}>首页</Menu.Item></a>
                                      <Menu.Item style={{borderBottom:'0px #a1a1a1 solid',fontSize:'13px'}}>产品<i className='mdc-icon material-icons'>history</i></Menu.Item>
                                      <a style={{textDecoration: 'none'}} href="/chain">
                                          <Menu.Item style={{borderBottom:'0px #a1a1a1 solid',fontSize:'13px',paddingLeft:'32px'}}>专属链/共享链账本</Menu.Item>
                                      </a>
                                      <a style={{textDecoration: 'none'}} href="/blocksdn">
                                          <Menu.Item style={{borderBottom:'1px #a1a1a1 solid',fontSize:'13px',paddingLeft:'32px'}}>App内容防护</Menu.Item>
                                      </a>

                                      {/* <Menu.Item style={{borderBottom:'0px #a1a1a1 solid',fontSize:'13px'}}>解决方案<i className='mdc-icon material-icons'>history</i></Menu.Item> */}
                                      {/* <a style={{textDecoration: 'none'}} href="/solution1">
                                        <Menu.Item style={{borderBottom:'0px #a1a1a1 solid',fontSize:'13px',paddingLeft:'32px'}}>大宗商品</Menu.Item>
                                      </a>
                                      <a style={{textDecoration: 'none'}} href="/solution2">
                                        <Menu.Item style={{borderBottom:'1px #a1a1a1 solid',fontSize:'13px',paddingLeft:'32px'}}>能源行业</Menu.Item>
                                      </a> */}

                                      {/* <a className="navopts" href="/showasset"><Menu.Item style={{borderBottom:'1px #a1a1a1 solid',fontSize:'13px'}}>资产展示</Menu.Item>
                                      </a> */}
                                      <a className="navopts" href="/aboutus"><Menu.Item style={{borderBottom:'1px #a1a1a1 solid',fontSize:'13px'}}>关于我们</Menu.Item>
                                      </a>
                                      {/*<a className="navopts" href="_book/index.html"><Menu.Item style={{borderBottom:'1px #a1a1a1 solid',fontSize:'13px'}}>技术支持</Menu.Item>*/}
                                      {/*</a>*/}
                                      <a href="#" onClick={this.goToUc.bind(this)}><Menu.Item style={{fontSize:'13px',display:'block',borderBottom:'1px #a1a1a1 solid'}}>控制台</Menu.Item></a>
                                      <a href="/uc/login"><Menu.Item style={{borderBottom:'1px #a1a1a1 solid',fontSize:'13px',display:'block'}}>登录</Menu.Item>
                                      </a>
                                      <a href="/uc/sgin/cn"><Menu.Item style={{fontSize:'13px',display:'block'}}>免费注册</Menu.Item></a>
                                  </Menu>
                              </Menu.Anchor>
                          </div>
                      </div>
                  </Toolbar.Section>
                </Toolbar.Row>
              </Toolbar>
             </div>
        )
    }


}