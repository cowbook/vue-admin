import{d as C,ap as K,k as p,a8 as N,_ as n,a9 as P,aa as e,f as t,E as m,u as r,a0 as c,$ as f,F as y,ab as v,a1 as _,ac as k}from"./vue-05cc5022.js";import{P as V}from"./index-aeeebb1a.js";import{aH as D,aI as w}from"./index.js";import{af as b}from"./antd-5cc557c7.js";import"./useContentViewHeight-c26bde0b.js";import"./useWindowSizeFn-07d3d29d.js";import"./onMountedOrActivated-7a6feff1.js";const E={class:"pt-4 m-4 desc-wrap"},W=C({name:"AccountDetail",__name:"AccountDetail",setup(F){var i;const g=b,u=b.TabPane,T=K(),B=D(),o=p((i=T.params)==null?void 0:i.id),s=p("detail"),{setTitle:x}=w();x("详情：用户"+o.value);function A(){B("/system/account")}return(I,l)=>{const d=N("a-button");return n(),P(r(V),{title:"用户"+o.value+"的资料",content:"这是用户资料详情页面。本页面仅用于演示相同路由在tab中打开多个页面并且显示不同的数据",contentBackground:"",onBack:A},{extra:e(()=>[t(d,{type:"primary",danger:""},{default:e(()=>[m(" 禁用账号 ")]),_:1}),t(d,{type:"primary"},{default:e(()=>[m(" 修改密码 ")]),_:1})]),footer:e(()=>[t(r(g),{"default-active-key":"detail",activeKey:s.value,"onUpdate:activeKey":l[0]||(l[0]=a=>s.value=a)},{default:e(()=>[t(r(u),{key:"detail",tab:"用户资料"}),t(r(u),{key:"logs",tab:"操作日志"})]),_:1},8,["activeKey"])]),default:e(()=>[c("div",E,[s.value=="detail"?(n(),f(y,{key:0},v(10,a=>c("div",{key:a},"这是用户"+_(o.value)+"资料Tab",1)),64)):k("",!0),s.value=="logs"?(n(),f(y,{key:1},v(10,a=>c("div",{key:a},"这是用户"+_(o.value)+"操作日志Tab",1)),64)):k("",!0)])]),_:1},8,["title"])}}});export{W as default};