import{B as l}from"./BasicTable-21ee737c.js";import"./componentMap-276358e1.js";import"./TableImg.vue_vue_type_style_index_0_lang-b5825a07.js";import{u}from"./useTable-6065d223.js";import{getBasicColumns as d}from"./tableData-1fa5af77.js";import{P as f}from"./index-aeeebb1a.js";import{d as _}from"./table-3d6d885c.js";import{d as g,a8 as r,_ as C,a9 as B,aa as t,f as a,E as m}from"./vue-05cc5022.js";import{_ as b}from"./index.js";import"./BasicForm-5add6e56.js";import"./FormItem.vue_vue_type_script_lang-ec27986b.js";import"./index-6e5ef5a2.js";import"./index-6bec6a2a.js";import"./antd-5cc557c7.js";import"./helper-137f4745.js";import"./BasicForm.vue_vue_type_style_index_0_lang-8c4f6171.js";import"./uniqBy-341b68e5.js";import"./index-c56721f4.js";import"./useWindowSizeFn-07d3d29d.js";import"./useForm-673df8f4.js";import"./RadioButtonGroup-78082783.js";import"./useFormItem-dd0166b2.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-7a6feff1.js";import"./download-65cb1f74.js";import"./base64Conver-39fc0d26.js";import"./index-6864474d.js";import"./IconPicker.vue_vue_type_style_index_0_lang-77cb6856.js";import"./useCopyToClipboard-60b7ccd7.js";import"./index-e3e9b296.js";import"./sortable.esm-4ae27e0b.js";import"./select-d6a88e2c.js";import"./useContentViewHeight-c26bde0b.js";const h=g({components:{BasicTable:l,PageWrapper:f},setup(){const[o,{reload:e}]=u({title:"远程加载示例",api:_,columns:d(),pagination:{pageSize:10}});function i(){e()}function p(){e({page:1})}return{registerTable:o,handleReloadCurrent:i,handleReload:p}}});function T(o,e,i,p,k,R){const n=r("a-button"),s=r("BasicTable"),c=r("PageWrapper");return C(),B(c,{contentBackground:"",contentClass:"flex",dense:"",contentFullHeight:"",fixedHeight:""},{default:t(()=>[a(s,{onRegister:o.registerTable},{toolbar:t(()=>[a(n,{type:"primary",onClick:o.handleReloadCurrent},{default:t(()=>[m(" 刷新当前页 ")]),_:1},8,["onClick"]),a(n,{type:"primary",onClick:o.handleReload},{default:t(()=>[m(" 刷新并返回第一页 ")]),_:1},8,["onClick"])]),_:1},8,["onRegister"])]),_:1})}const ro=b(h,[["render",T]]);export{ro as default};