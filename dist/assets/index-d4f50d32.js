import{C as B}from"./index-6e5ef5a2.js";import{I as w,k as x,_ as D}from"./index.js";import S from"./Article-eb0c5cf2.js";import F from"./Application-b2e3a0c2.js";import P from"./Project-c8c71e53.js";import{h as V}from"./header-4d6dbfbe.js";import{tags as L,teams as N,details as j,achieveList as A}from"./data-199c263c.js";import{a8 as U,af as v,aa as b,ab as $}from"./antd-5cc557c7.js";import{d as z,e as R,a8 as l,_ as t,$ as r,f as s,aa as o,a2 as n,a0 as c,F as i,ab as u,E as h,a1 as _,a9 as d,aj as q,a3 as G,a4 as H}from"./vue-05cc5022.js";import"./index-6bec6a2a.js";const J=z({components:{CollapseContainer:B,Icon:w,Tag:U,Tabs:v,TabPane:v.TabPane,Article:S,Application:F,Project:P,[b.name]:b,[$.name]:$},setup(){const a=x();return{prefixCls:"account-center",avatar:R(()=>a.getUserInfo.avatar||V),tags:L,teams:N,details:j,achieveList:A}}});const T=a=>(G("data-v-a4552911"),a=a(),H(),a),K=["src"],M=T(()=>c("span",null,"Vben",-1)),O=T(()=>c("div",null,"海纳百川，有容乃大",-1));function Q(a,g,W,X,Y,Z){const p=l("a-col"),m=l("Icon"),f=l("a-row"),I=l("Tag"),C=l("CollapseContainer"),k=l("TabPane"),y=l("Tabs");return t(),r("div",{class:n(a.prefixCls)},[s(f,{class:n(`${a.prefixCls}-top`)},{default:o(()=>[s(p,{span:9,class:n(`${a.prefixCls}-col`)},{default:o(()=>[s(f,null,{default:o(()=>[s(p,{span:8},{default:o(()=>[c("div",{class:n(`${a.prefixCls}-top__avatar`)},[c("img",{width:"70",src:a.avatar},null,8,K),M,O],2)]),_:1}),s(p,{span:16},{default:o(()=>[c("div",{class:n(`${a.prefixCls}-top__detail`)},[(t(!0),r(i,null,u(a.details,e=>(t(),r("p",{key:e.title},[s(m,{icon:e.icon},null,8,["icon"]),h(" "+_(e.title),1)]))),128))],2)]),_:1})]),_:1})]),_:1},8,["class"]),s(p,{span:7,class:n(`${a.prefixCls}-col`)},{default:o(()=>[s(C,{title:"标签",canExpan:!1},{default:o(()=>[(t(!0),r(i,null,u(a.tags,e=>(t(),d(I,{key:e,class:"mb-2"},{default:o(()=>[h(_(e),1)]),_:2},1024))),128))]),_:1})]),_:1},8,["class"]),s(p,{span:8,class:n(`${a.prefixCls}-col`)},{default:o(()=>[s(C,{class:n(`${a.prefixCls}-top__team`),title:"团队",canExpan:!1},{default:o(()=>[(t(!0),r(i,null,u(a.teams,(e,E)=>(t(),r("div",{key:E,class:n(`${a.prefixCls}-top__team-item`)},[s(m,{icon:e.icon,color:e.color},null,8,["icon","color"]),c("span",null,_(e.title),1)],2))),128))]),_:1},8,["class"])]),_:1},8,["class"])]),_:1},8,["class"]),c("div",{class:n(`${a.prefixCls}-bottom`)},[s(y,null,{default:o(()=>[(t(!0),r(i,null,u(a.achieveList,e=>(t(),d(k,{key:e.key,tab:e.name},{default:o(()=>[(t(),d(q(e.component)))]),_:2},1032,["tab"]))),128))]),_:1})],2)],2)}const ia=D(J,[["render",Q],["__scopeId","data-v-a4552911"]]);export{ia as default};
