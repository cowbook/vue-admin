import{B as s}from"./BasicTable-21ee737c.js";import"./componentMap-276358e1.js";import"./TableImg.vue_vue_type_style_index_0_lang-b5825a07.js";import{u as n}from"./useTable-6065d223.js";import{getBasicColumns as a}from"./tableData-1fa5af77.js";import{d as c}from"./table-3d6d885c.js";import{d as l,a8 as u,_,$ as d,f}from"./vue-05cc5022.js";import{_ as b}from"./index.js";import"./BasicForm-5add6e56.js";import"./FormItem.vue_vue_type_script_lang-ec27986b.js";import"./index-6e5ef5a2.js";import"./index-6bec6a2a.js";import"./antd-5cc557c7.js";import"./helper-137f4745.js";import"./BasicForm.vue_vue_type_style_index_0_lang-8c4f6171.js";import"./uniqBy-341b68e5.js";import"./index-c56721f4.js";import"./useWindowSizeFn-07d3d29d.js";import"./useForm-673df8f4.js";import"./RadioButtonGroup-78082783.js";import"./useFormItem-dd0166b2.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-7a6feff1.js";import"./download-65cb1f74.js";import"./base64Conver-39fc0d26.js";import"./index-6864474d.js";import"./IconPicker.vue_vue_type_style_index_0_lang-77cb6856.js";import"./useCopyToClipboard-60b7ccd7.js";import"./index-e3e9b296.js";import"./sortable.esm-4ae27e0b.js";import"./select-d6a88e2c.js";const B=l({components:{BasicTable:s},setup(){function o(i){const t=i.reduce((r,m)=>(r+=m.no,r),0);return[{_row:"合计",_index:"平均值",no:t},{_row:"合计",_index:"平均值",no:t}]}const[e]=n({title:"表尾行合计示例",api:c,rowSelection:{type:"checkbox"},columns:a(),showSummary:!0,summaryFunc:o,scroll:{x:2e3},canResize:!1});return{registerTable:e}}}),T={class:"p-4"};function x(o,e,i,t,r,m){const p=u("BasicTable");return _(),d("div",T,[f(p,{onRegister:o.registerTable},null,8,["onRegister"])])}const X=b(B,[["render",x]]);export{X as default};
