var I=Object.defineProperty,g=Object.defineProperties;var C=Object.getOwnPropertyDescriptors;var a=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var i=(e,o,t)=>o in e?I(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,n=(e,o)=>{for(var t in o||(o={}))F.call(o,t)&&i(e,t,o[t]);if(a)for(var t of a(o))v.call(o,t)&&i(e,t,o[t]);return e},p=(e,o)=>g(e,C(o));import N from"./FormNodeOperate-84c3636d.js";import{u as S}from"./useFormDesignState-9522adb2.js";import k from"./index-beace29b.js";import{d as b,r as y,H as V,a8 as c,_,$,a0 as f,f as d,a1 as B,a2 as O,B as D}from"./vue-05cc5022.js";import{_ as w}from"./index.js";import"./index-13afcbd1.js";import"./antd-5cc557c7.js";import"./formItemConfig-f7311075.js";import"./componentMap-276358e1.js";import"./useFormItem-dd0166b2.js";import"./RadioButtonGroup-78082783.js";import"./index-c56721f4.js";import"./index-6e5ef5a2.js";import"./index-6bec6a2a.js";import"./useWindowSizeFn-07d3d29d.js";import"./uuid-31b8b5a4.js";import"./download-65cb1f74.js";import"./base64Conver-39fc0d26.js";import"./index-6864474d.js";import"./IconPicker.vue_vue_type_style_index_0_lang-77cb6856.js";import"./useCopyToClipboard-60b7ccd7.js";import"./index-e3e9b296.js";const M=b({name:"FormNode",components:{VFormItem:k,FormNodeOperate:N},props:{schema:{type:Object,required:!0}},setup(e){const{formConfig:o,formDesignMethods:t}=S(),r=y({}),m=()=>{t.handleSetSelectItem(e.schema)};return p(n({},V(r)),{handleSelectItem:m,formConfig:o})}}),j={class:"form-item-box"},q={class:"show-key-box"};function z(e,o,t,r,m,E){var s;const l=c("VFormItem"),h=c("FormNodeOperate");return _(),$("div",{class:O(["drag-move-box",{active:e.schema.key===((s=e.formConfig.currentItem)==null?void 0:s.key)}]),onClick:o[0]||(o[0]=D((...u)=>e.handleSelectItem&&e.handleSelectItem(...u),["stop"]))},[f("div",j,[d(l,{formConfig:e.formConfig,schema:e.schema},null,8,["formConfig","schema"])]),f("div",q,B(e.schema.label+(e.schema.field?"/"+e.schema.field:"")),1),d(h,{schema:e.schema,currentItem:e.formConfig.currentItem},null,8,["schema","currentItem"])],2)}const ie=w(M,[["render",z]]);export{ie as default};