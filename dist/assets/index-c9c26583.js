import{aJ as _,w as f,_ as k}from"./index.js";import{d as a,k as r,o as m,_ as c,$ as C,R as O,a8 as s,a9 as v,aa as i,f as b,a0 as x,a1 as S}from"./vue-05cc5022.js";import{P as $}from"./index-aeeebb1a.js";import"./antd-5cc557c7.js";import"./useContentViewHeight-c26bde0b.js";import"./useWindowSizeFn-07d3d29d.js";import"./onMountedOrActivated-7a6feff1.js";const B=a({__name:"ClickOutSide",emits:["mounted","clickOutside"],setup(e,{emit:t}){const n=r(null);return _(n,()=>{t("clickOutside")}),m(()=>{t("mounted")}),(o,l)=>(c(),C("div",{ref_key:"wrap",ref:n},[O(o.$slots,"default")],512))}}),g=f(B),w=a({components:{ClickOutSide:g,PageWrapper:$},setup(){const e=r("Click");function t(){e.value="Click Out Side"}function n(){e.value="Click Inner"}return{innerClick:n,handleClickOutside:t,text:e}}});function y(e,t,n,o,l,E){const u=s("ClickOutSide"),d=s("PageWrapper");return c(),v(d,{title:"点内外部触发事件"},{default:i(()=>[b(u,{onClickOutside:e.handleClickOutside,class:"flex justify-center"},{default:i(()=>[x("div",{onClick:t[0]||(t[0]=(...p)=>e.innerClick&&e.innerClick(...p)),class:"demo-box"},S(e.text),1)]),_:1},8,["onClickOutside"])]),_:1})}const j=k(w,[["render",y],["__scopeId","data-v-8fdebb4b"]]);export{j as default};