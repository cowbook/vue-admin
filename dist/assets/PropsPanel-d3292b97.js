import C from"./FormProps-d821d6b5.js";import y from"./FormItemProps-340af79e.js";import b from"./ComponentProps-dd5f3ce0.js";import v from"./FormItemColumnProps-3318f582.js";import{u as k}from"./useFormDesignState-9522adb2.js";import{c}from"./formItemConfig-f7311075.js";import{af as F,by as g}from"./antd-5cc557c7.js";import{d as T,e as $,a8 as t,_ as e,$ as I,f as s,aa as r,a9 as n,R as K}from"./vue-05cc5022.js";import{_ as B}from"./index.js";import"./formItemPropsConfig-78b717f5.js";import"./RuleProps-47656418.js";import"./index-13afcbd1.js";import"./RadioButtonGroup-78082783.js";import"./useFormItem-dd0166b2.js";import"./FormOptions-52658761.js";import"./componentMap-276358e1.js";import"./index-c56721f4.js";import"./index-6e5ef5a2.js";import"./index-6bec6a2a.js";import"./useWindowSizeFn-07d3d29d.js";import"./uuid-31b8b5a4.js";import"./download-65cb1f74.js";import"./base64Conver-39fc0d26.js";import"./index-6864474d.js";import"./IconPicker.vue_vue_type_style_index_0_lang-77cb6856.js";import"./useCopyToClipboard-60b7ccd7.js";import"./index-e3e9b296.js";const E=T({name:"PropsPanel",components:{FormProps:C,FormItemProps:y,ComponentProps:b,ComponentColumnProps:v,Tabs:F,TabPane:g},setup(){const{formConfig:o}=k(),m=$(()=>c.find(i=>{var a;return i.component===((a=o.value.currentItem)==null?void 0:a.component)}));return{formConfig:o,customComponents:c,slotProps:m}}});function S(o,m,i,a,w,A){const u=t("FormProps"),p=t("TabPane"),_=t("FormItemProps"),f=t("ComponentColumnProps"),l=t("ComponentProps"),P=t("Tabs");return e(),I("div",null,[s(P,{activeKey:o.formConfig.activeKey,"onUpdate:activeKey":m[0]||(m[0]=d=>o.formConfig.activeKey=d),tabBarStyle:{margin:0}},{default:r(()=>[(e(),n(p,{key:1,tab:"表单"},{default:r(()=>[s(u)]),_:1})),(e(),n(p,{key:2,tab:"控件"},{default:r(()=>[s(_)]),_:1})),(e(),n(p,{key:3,tab:"栅格"},{default:r(()=>[s(f)]),_:1})),(e(),n(p,{key:4,tab:"组件"},{default:r(()=>[o.slotProps?K(o.$slots,o.slotProps.component+"Props",{key:0},void 0,!0):(e(),n(l,{key:1}))]),_:3}))]),_:3},8,["activeKey"])])}const po=B(E,[["render",S],["__scopeId","data-v-eb3727e7"]]);export{po as default};