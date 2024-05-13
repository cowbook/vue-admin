var Q=Object.defineProperty,U=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var O=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var L=(e,a,t)=>a in e?Q(e,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[a]=t,u=(e,a)=>{for(var t in a||(a={}))O.call(a,t)&&L(e,t,a[t]);if(I)for(var t of I(a))R.call(a,t)&&L(e,t,a[t]);return e},M=(e,a)=>U(e,X(a));var q=(e,a)=>{var t={};for(var s in e)O.call(e,s)&&a.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&I)for(var s of I(e))a.indexOf(s)<0&&R.call(e,s)&&(t[s]=e[s]);return t};var z=(e,a,t)=>new Promise((s,C)=>{var v=m=>{try{p(t.next(m))}catch(d){C(d)}},y=m=>{try{p(t.throw(m))}catch(d){C(d)}},p=m=>m.done?s(m.value):Promise.resolve(m.value).then(v,y);p((t=t.apply(e,a)).next())});import{a as T}from"./formItemConfig-f7311075.js";import{I as Y,aV as Z,_ as x}from"./index.js";import{h as A}from"./index-13afcbd1.js";import{a as ee}from"./useFormDesignState-9522adb2.js";import{W as oe,bD as ae,ak as te,ab as ne,K as se}from"./antd-5cc557c7.js";import{d as le,r as me,e as P,u as V,H as re,a8 as b,_ as g,a9 as D,aa as f,f as E,ae as _,ah as W,af as H,R as ce,ad as K,E as ie,a1 as $,ac as B,a0 as N,aj as pe,$ as de}from"./vue-05cc5022.js";import"./componentMap-276358e1.js";import"./useFormItem-dd0166b2.js";import"./RadioButtonGroup-78082783.js";import"./index-c56721f4.js";import"./index-6e5ef5a2.js";import"./index-6bec6a2a.js";import"./useWindowSizeFn-07d3d29d.js";import"./uuid-31b8b5a4.js";import"./download-65cb1f74.js";import"./base64Conver-39fc0d26.js";import"./index-6864474d.js";import"./IconPicker.vue_vue_type_style_index_0_lang-77cb6856.js";import"./useCopyToClipboard-60b7ccd7.js";import"./index-e3e9b296.js";const he=le({name:"VFormItem",components:{Tooltip:oe,Icon:Y,FormItem:ae,Divider:te,Col:ne},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,required:!0},formConfig:{type:Object,required:!0}},emits:["update:form-data","change"],setup(e,{emit:a}){const t=me({componentMap:T}),{formModel:s,setFormModel:C}=ee(),v=P(()=>{const{colProps:o={}}=e.schema;return o}),y=P(()=>{var S,j;const{formConfig:o}=V(e);let{field:l,required:n,rules:h,labelCol:c,wrapperCol:i}=V(e.schema);const{colon:G}=e.formConfig,{itemProps:r}=V(e.schema);c=c||(o.layout==="horizontal"?o.labelLayout==="flex"?{style:`width:${o.labelWidth}px`}:o.labelCol:{}),i=i||(o.layout==="horizontal"?o.labelLayout==="flex"?{style:"width:auto;flex:1"}:o.wrapperCol:{});const J=o.layout==="horizontal"&&o.labelLayout==="flex"?{display:"flex"}:{},w=Object.assign({},{name:l,style:u({},J),colon:G,required:n,rules:h,labelCol:c,wrapperCol:i},r);return(S=r==null?void 0:r.labelCol)!=null&&S.span||(w.labelCol=c),(j=r==null?void 0:r.wrapperCol)!=null&&j.span||(w.wrapperCol=i),r!=null&&r.rules||(w.rules=h),w}),p=P(()=>T.get(e.schema.component)),m=o=>{var l,n;o.component==="Button"&&((l=o.componentProps)!=null&&l.handle)&&a((n=o.componentProps)==null?void 0:n.handle)},d=Z(()=>z(this,null,function*(){var n;let{options:o,treeData:l}=(n=e.schema.componentProps)!=null?n:{};return o&&(o=yield A(o)),l&&(l=yield A(l)),{options:o,treeData:l}})),F=P(()=>{var c;const o=e.schema&&["Switch","Checkbox","Radio"].includes(e.schema.component);let{field:l}=e.schema,i=(c=se(e.schema.componentProps,["options","treeData"]))!=null?c:{},{disabled:n}=i,h=q(i,["disabled"]);return n=e.formConfig.disabled||n,M(u({},h),{disabled:n,[o?"checked":"value"]:s.value[l]})}),k=function(o){const l=["Switch","Checkbox","Radio"].includes(e.schema.component),n=o?o.target:null,h=n?l?n.checked:n.value:o;C(e.schema.field,h),a("change",h)};return M(u({},re(t)),{componentItem:p,formItemProps:y,handleClick:m,asyncProps:d,cmpProps:F,handleChange:k,colPropsComputed:v})}});const ue={key:2};function fe(e,a,t,s,C,v){const y=b("Icon"),p=b("Tooltip"),m=b("Divider"),d=b("FormItem"),F=b("Col");return g(),D(F,_(W(e.colPropsComputed)),{default:f(()=>[E(d,_(W(u({},e.formItemProps))),H({default:f(()=>{var k;return[e.schema.componentProps&&((k=e.schema.componentProps)!=null&&k.slotName)?ce(e.$slots,e.schema.componentProps.slotName,_(K({key:0},e.schema)),void 0,!0):e.schema.component=="Divider"&&e.schema.label&&!e.formItemProps.hiddenLabel?(g(),D(m,{key:1},{default:f(()=>[ie($(e.schema.label),1)]),_:1})):B("",!0),N("div",null,[(g(),D(pe(e.componentItem),K({class:"v-form-item-wrapper"},u(u({},e.cmpProps),e.asyncProps),{schema:e.schema,style:e.schema.width?{width:e.schema.width}:{},onChange:e.handleChange,onClick:a[0]||(a[0]=o=>e.handleClick(e.schema))}),null,16,["schema","style","onChange"]))]),["Button"].includes(e.schema.component)?(g(),de("span",ue,$(e.schema.label),1)):B("",!0)]}),_:2},[!e.formItemProps.hiddenLabel&&e.schema.component!=="Divider"?{name:"label",fn:f(()=>[E(p,null,H({default:f(()=>[N("span",null,$(e.schema.label),1),e.schema.helpMessage?(g(),D(y,{key:0,class:"ml-5",icon:"ant-design:question-circle-outlined"})):B("",!0)]),_:2},[e.schema.helpMessage?{name:"title",fn:f(()=>[N("span",null,$(e.schema.helpMessage),1)]),key:"0"}:void 0]),1024)]),key:"0"}:void 0]),1040)]),_:3},16)}const Re=x(he,[["render",fe],["__scopeId","data-v-43612c3e"]]);export{Re as default};