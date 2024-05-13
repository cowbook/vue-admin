import{C as x,M as l,J as R}from"./index-b25ff517.js";import{P as B}from"./index-aeeebb1a.js";import{ay as c,ae as D,P as h}from"./antd-5cc557c7.js";import{d as P,k as f,u as b,n as k,a8 as n,_ as y,a9 as S,aa as o,f as a,E as i}from"./vue-05cc5022.js";import{_ as j}from"./index.js";import"./useWindowSizeFn-07d3d29d.js";import"./useContentViewHeight-c26bde0b.js";import"./onMountedOrActivated-7a6feff1.js";const v='{"name":"BeJson","url":"http://www.xxx.com","page":88,"isNonProfit":true,"address":{"street":"科技园路.","city":"江苏苏州","country":"中国"},"links":[{"name":"Google","url":"http://www.xxx.com"},{"name":"Baidu","url":"http://www.xxx.com"},{"name":"SoSo","url":"http://www.xxx.com"}]}',J=`
      (() => {
        var htmlRoot = document.getElementById('htmlRoot');
        var theme = window.localStorage.getItem('__APP__DARK__MODE__');
        if (htmlRoot && theme) {
          htmlRoot.setAttribute('data-theme', theme);
          theme = htmlRoot = null;
        }
      })();
  `,M=`
     <!DOCTYPE html>
<html lang="en" id="htmlRoot">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="renderer" content="webkit" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0"
    />
    <title><%= title %></title>
    <link rel="icon" href="/favicon.ico" />
  </head>
  <body>
    <div id="app">
    </div>
  </body>
</html>
  `,A=P({components:{CodeEditor:x,PageWrapper:B,RadioButton:c.Button,RadioGroup:c.Group,ASpace:D},setup(){const t=f(l.JSON),e=f(v);function s(p){const u=p.target.value;if(u===l.JSON){e.value=v;return}if(u===l.HTML){e.value=M;return}if(u===l.JS){e.value=J;return}}function d(){b(t)==="application/json"?h.info({title:"编辑器当前值",content:k(R,{data:JSON.parse(e.value)})}):h.info({title:"编辑器当前值",content:e.value})}return{value:e,modeValue:t,handleModeChange:s,showData:d}}});function F(t,e,s,d,p,u){const _=n("a-button"),r=n("RadioButton"),w=n("RadioGroup"),E=n("a-space"),g=n("CodeEditor"),C=n("PageWrapper");return y(),S(C,{title:"代码编辑器组件示例",contentFullHeight:"",fixedHeight:"",contentBackground:""},{extra:o(()=>[a(E,{size:"middle"},{default:o(()=>[a(_,{onClick:t.showData,type:"primary"},{default:o(()=>[i("获取数据")]),_:1},8,["onClick"]),a(w,{"button-style":"solid",value:t.modeValue,"onUpdate:value":e[0]||(e[0]=m=>t.modeValue=m),onChange:t.handleModeChange},{default:o(()=>[a(r,{value:"application/json"},{default:o(()=>[i(" json数据 ")]),_:1}),a(r,{value:"htmlmixed"},{default:o(()=>[i(" html代码 ")]),_:1}),a(r,{value:"javascript"},{default:o(()=>[i(" javascript代码 ")]),_:1})]),_:1},8,["value","onChange"])]),_:1})]),default:o(()=>[a(g,{value:t.value,"onUpdate:value":e[1]||(e[1]=m=>t.value=m),mode:t.modeValue},null,8,["value","mode"])]),_:1})}const I=j(A,[["render",F]]);export{I as default};