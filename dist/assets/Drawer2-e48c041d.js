import{B as c,a as i}from"./index-781ab23a.js";import{d as p,a8 as t,_ as m,a9 as u,aa as o,E as a,f as _,ad as d}from"./vue-05cc5022.js";import{_ as f}from"./index.js";import"./index-6e5ef5a2.js";import"./index-6bec6a2a.js";import"./antd-5cc557c7.js";const l=p({components:{BasicDrawer:c},setup(){const[e,{closeDrawer:r}]=i();return{register:e,closeDrawer:r}}});function w(e,r,D,B,g,C){const s=t("a-button"),n=t("BasicDrawer");return m(),u(n,d(e.$attrs,{onRegister:e.register,title:"Drawer Title",width:"50%"}),{default:o(()=>[a(" Drawer Info. "),_(s,{type:"primary",onClick:e.closeDrawer},{default:o(()=>[a(" 内部关闭drawer ")]),_:1},8,["onClick"])]),_:1},16,["onRegister"])}const y=f(l,[["render",w]]);export{y as default};