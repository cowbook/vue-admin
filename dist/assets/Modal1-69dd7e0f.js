import{B as f,a as g}from"./index-c56721f4.js";import{d as h,k as p,w as M,a8 as m,_ as o,a9 as B,aa as i,f as C,E as v,$ as t,ac as _,F as y,ab as F,a1 as k,ad as D}from"./vue-05cc5022.js";import{_ as b}from"./index.js";import"./antd-5cc557c7.js";import"./index-6e5ef5a2.js";import"./index-6bec6a2a.js";import"./useWindowSizeFn-07d3d29d.js";const $=h({components:{BasicModal:f},setup(){const e=p(!0),a=p(10),[u,{setModalProps:s,redoModalHeight:l}]=g();M(()=>a.value,()=>{l()});function d(r){r&&(e.value=!0,s({loading:!0,confirmLoading:!0}),setTimeout(()=>{a.value=Math.round(Math.random()*30+5),e.value=!1,s({loading:!1,confirmLoading:!1})},3e3))}function n(){a.value=Math.round(Math.random()*20+10)}return{register:u,loading:e,handleShow:d,lines:a,setLines:n}}});const w={key:0,class:"empty-tips"},A={key:1};function L(e,a,u,s,l,d){const n=m("a-button"),r=m("BasicModal");return o(),B(r,D(e.$attrs,{destroyOnClose:"",onRegister:e.register,title:"Modal Title",helpMessage:["提示1","提示2"],onVisibleChange:e.handleShow}),{insertFooter:i(()=>[C(n,{type:"primary",danger:"",onClick:e.setLines,disabled:e.loading},{default:i(()=>[v("点我更新内容")]),_:1},8,["onClick","disabled"])]),default:i(()=>[e.loading?(o(),t("div",w,"加载中，稍等3秒……")):_("",!0),e.loading?_("",!0):(o(),t("ul",A,[(o(!0),t(y,null,F(e.lines,c=>(o(),t("li",{key:c},"加载完成"+k(c)+"！",1))),128))]))]),_:1},16,["onRegister","onVisibleChange"])}const R=b($,[["render",L],["__scopeId","data-v-d810e372"]]);export{R as default};