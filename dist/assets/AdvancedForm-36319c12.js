import{B as u}from"./BasicForm-5add6e56.js";import"./componentMap-276358e1.js";import{u as i}from"./useForm-673df8f4.js";import"./RadioButtonGroup-78082783.js";import{C as d}from"./index-6e5ef5a2.js";import{P as f}from"./index-aeeebb1a.js";import{d as b,a8 as p,_ as C,a9 as P,aa as l,f as t}from"./vue-05cc5022.js";import{_ as h}from"./index.js";import"./FormItem.vue_vue_type_script_lang-ec27986b.js";import"./helper-137f4745.js";import"./antd-5cc557c7.js";import"./BasicForm.vue_vue_type_style_index_0_lang-8c4f6171.js";import"./uniqBy-341b68e5.js";import"./index-c56721f4.js";import"./useWindowSizeFn-07d3d29d.js";import"./useFormItem-dd0166b2.js";import"./uuid-31b8b5a4.js";import"./download-65cb1f74.js";import"./base64Conver-39fc0d26.js";import"./index-6864474d.js";import"./IconPicker.vue_vue_type_style_index_0_lang-77cb6856.js";import"./useCopyToClipboard-60b7ccd7.js";import"./index-e3e9b296.js";import"./index-6bec6a2a.js";import"./useContentViewHeight-c26bde0b.js";import"./onMountedOrActivated-7a6feff1.js";const c=()=>[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:o=>{console.log(o)}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];function _(){return[{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}]}const g=b({components:{BasicForm:u,CollapseContainer:d,PageWrapper:f},setup(){const[o]=i({labelWidth:120,schemas:c(),actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),n=[];for(let e=14;e<30;e++)n.push({field:"field"+e,component:"Input",label:"字段"+e,colProps:{span:8}});const[r]=i({labelWidth:120,schemas:[...c(),..._(),{field:"",component:"Divider",label:"更多字段"},...n],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0,alwaysShowLines:2});return{register:o,register1:r}}});function F(o,n,r,e,B,v){const a=p("BasicForm"),s=p("CollapseContainer"),m=p("PageWrapper");return C(),P(m,{title:"可折叠表单示例"},{default:l(()=>[t(s,{title:"基础收缩示例"},{default:l(()=>[t(a,{onRegister:o.register},null,8,["onRegister"])]),_:1}),t(s,{title:"超过3行自动收起，折叠时保留2行",class:"mt-4"},{default:l(()=>[t(a,{onRegister:o.register1},null,8,["onRegister"])]),_:1})]),_:1})}const U=h(g,[["render",F]]);export{U as default};
