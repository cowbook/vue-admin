var u=Object.defineProperty;var s=Object.getOwnPropertySymbols;var d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable;var a=(e,r,o)=>r in e?u(e,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[r]=o,t=(e,r)=>{for(var o in r||(r={}))d.call(r,o)&&a(e,o,r[o]);if(s)for(var o of s(r))h.call(r,o)&&a(e,o,r[o]);return e};import{_}from"./FormItem.vue_vue_type_script_lang-ec27986b.js";import{d as l,e as p,u as n,a8 as $,_ as P,a9 as b,af as g,ab as C,aa as F,R as I,ae as j,ah as y}from"./vue-05cc5022.js";import{_ as O}from"./index.js";import"./componentMap-276358e1.js";import"./useFormItem-dd0166b2.js";import"./antd-5cc557c7.js";import"./RadioButtonGroup-78082783.js";import"./index-c56721f4.js";import"./index-6e5ef5a2.js";import"./index-6bec6a2a.js";import"./useWindowSizeFn-07d3d29d.js";import"./uuid-31b8b5a4.js";import"./download-65cb1f74.js";import"./base64Conver-39fc0d26.js";import"./index-6864474d.js";import"./IconPicker.vue_vue_type_style_index_0_lang-77cb6856.js";import"./useCopyToClipboard-60b7ccd7.js";import"./index-e3e9b296.js";import"./helper-137f4745.js";const k=l({name:"VFormItem",components:{FormItem:_},props:{formData:{type:Object,default:()=>({})},schema:{type:Object,required:!0},formConfig:{type:Object,required:!0}},setup(e){const r=p(()=>t({},n(e.schema))),o=p(()=>t({},n(e.formConfig)));return{schemaNew:r,getProps:o}}});function v(e,r,o,c,w,q){const i=$("FormItem");return P(),b(i,{schema:e.schemaNew,formProps:e.getProps},g({_:2},[C(Object.keys(e.$slots),m=>({name:m,fn:F(f=>[I(e.$slots,m,j(y(f||{})))])}))]),1032,["schema","formProps"])}const X=O(k,[["render",v]]);export{X as default};