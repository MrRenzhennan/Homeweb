
import { h, render } from 'preact';
import {Router,Route} from 'preact-router'
import { Home } from './com/home';
import { AboutUs } from './com/AboutUs/aboutus';
import { Solution1 } from './com/Solution/solution1';
import { Solution2 } from './com/Solution/solution2';
import { ShowAsset } from './com/ShowAsset/showasset';
import { BlockSdn } from './com/blocksdn/blocksdn';
import SpecialChain from './com/chain/SpecialChain';
import {WOW} from 'wowjs'

let root: Element;
let wow = new WOW({
    mobile: true,       // trigger animations on mobile devices (default is true)
  });



if(navigator.userAgent.indexOf('Edge')>-1){
    // browser_name='Edge';
    document.write('<link rel="stylesheet" type="text/css" href="iefix.css"/>');
    document.write('<script src="iefix.js" type="text/javascript" ></script>');
}else if(navigator.userAgent.indexOf('Firefox')>-1){
    // browser_name='Firefox';
}else if(navigator.userAgent.indexOf('Chrome')>-1){
    // browser_name='Chrome';
}else if(navigator.userAgent.indexOf('Trident')>-1&&navigator.userAgent.indexOf('rv:11')>-1){
    // browser_name='IE11';
    document.write('<link rel="stylesheet" type="text/css" href="iefix.css"/>');
    document.write('<script src="iefix.js" type="text/javascript" ></script>');
}else if(navigator.userAgent.indexOf('MSIE')>-1){
    if(navigator.userAgent.indexOf('Trident')>-1) {
        // browser_name='IE(8-10)';
        document.write('<link rel="stylesheet" type="text/css" href="iefix.css"/>');
        document.write('<script src="iefix.js" type="text/javascript" ></script>');
    }else{
        // browser_name='IE(6-7)';
        // TODO ??????
        document.write('<link rel="stylesheet" type="text/css" href="iefix.css"/>');
        document.write('<script src="iefix.js" type="text/javascript" ></script>');
    }
}else if(navigator.userAgent.indexOf('Opera')>-1){
    // browser_name='Opera';
}



function init() {
   console.log('chain',SpecialChain);
    root = render(
        <Router>
            <Route path="/"   component={Home}/>
            <Route path="/aboutus"  component={AboutUs}/>
            <Route path="/solution1"   component={Solution1}/>
            <Route path="/solution2"   component={Solution2}/>
            <Route path="/blocksdn" component={BlockSdn} />
            <Route path="/showasset" component={ShowAsset}/>
            <Route path="/chain" component={SpecialChain}/>
        </Router>,
        document.body,
        root
    )
}

declare const module: any;
if (module.hot) {
    module.hot.accept( init)
}

init();


wow.init();
window['wow']=wow;






