import{B as l,a as c}from"./index-c56721f4.js";import{B as d}from"./BasicForm-5add6e56.js";import"./componentMap-276358e1.js";import{u as f}from"./useForm-673df8f4.js";import"./RadioButtonGroup-78082783.js";import{d as u,k as g,q as h,a8 as n,_ as B,a9 as _,aa as b,a0 as C,f as R,ad as V}from"./vue-05cc5022.js";import{_ as F}from"./index.js";import"./antd-5cc557c7.js";import"./index-6e5ef5a2.js";import"./index-6bec6a2a.js";import"./useWindowSizeFn-07d3d29d.js";import"./FormItem.vue_vue_type_script_lang-ec27986b.js";import"./helper-137f4745.js";import"./BasicForm.vue_vue_type_style_index_0_lang-8c4f6171.js";import"./uniqBy-341b68e5.js";import"./useFormItem-dd0166b2.js";import"./uuid-31b8b5a4.js";import"./download-65cb1f74.js";import"./base64Conver-39fc0d26.js";import"./index-6864474d.js";import"./IconPicker.vue_vue_type_style_index_0_lang-77cb6856.js";import"./useCopyToClipboard-60b7ccd7.js";import"./index-e3e9b296.js";const p=[{field:"field1",component:"Input",label:"字段1",colProps:{span:24},defaultValue:"111"},{field:"field2",component:"Input",label:"字段2",colProps:{span:24}}],M=u({components:{BasicModal:l,BasicForm:d},props:{userData:{type:Object}},setup(e){const t=g({}),[r,{}]=f({labelWidth:120,schemas:p,showActionButtonGroup:!1,actionColOptions:{span:24}}),[a]=c(o=>{o&&s(o)});function s(o){console.log("Data Received",o),t.value={field2:o.data,field1:o.info}}function i(o){o&&e.userData&&h(()=>s(e.userData))}return{register:a,schemas:p,registerForm:r,model:t,handleVisibleChange:i}}}),v={class:"pt-3px pr-3px"};function D(e,t,r,a,s,i){const o=n("BasicForm"),m=n("BasicModal");return B(),_(m,V(e.$attrs,{onRegister:e.register,title:"Modal Title",onVisibleChange:e.handleVisibleChange}),{default:b(()=>[C("div",v,[R(o,{onRegister:e.registerForm,model:e.model},null,8,["onRegister","model"])])]),_:1},16,["onRegister","onVisibleChange"])}const U=F(M,[["render",D]]);export{U as default};