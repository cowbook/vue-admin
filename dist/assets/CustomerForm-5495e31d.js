import{B as C}from"./BasicForm-5add6e56.js";import"./componentMap-276358e1.js";import{u as g}from"./useForm-673df8f4.js";import"./RadioButtonGroup-78082783.js";import{C as h}from"./index-6e5ef5a2.js";import{h as B,_ as b}from"./index.js";import{P as v}from"./index-aeeebb1a.js";import{$ as a}from"./antd-5cc557c7.js";import{d as E,n as P,a8 as r,_ as A,a9 as F,aa as n,f as s}from"./vue-05cc5022.js";import"./FormItem.vue_vue_type_script_lang-ec27986b.js";import"./helper-137f4745.js";import"./BasicForm.vue_vue_type_style_index_0_lang-8c4f6171.js";import"./uniqBy-341b68e5.js";import"./index-c56721f4.js";import"./useWindowSizeFn-07d3d29d.js";import"./useFormItem-dd0166b2.js";import"./uuid-31b8b5a4.js";import"./download-65cb1f74.js";import"./base64Conver-39fc0d26.js";import"./index-6864474d.js";import"./IconPicker.vue_vue_type_style_index_0_lang-77cb6856.js";import"./useCopyToClipboard-60b7ccd7.js";import"./index-e3e9b296.js";import"./index-6bec6a2a.js";import"./useContentViewHeight-c26bde0b.js";import"./onMountedOrActivated-7a6feff1.js";const m=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:o})=>P(a,{placeholder:"请输入",value:e[o],onChange:t=>{e[o]=t.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}],S=E({components:{BasicForm:C,CollapseContainer:h,PageWrapper:v,[a.name]:a},setup(){const{createMessage:e}=B(),[o,{setProps:t}]=g({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:o,schemas:m,handleSubmit:p=>{e.success("click search,values:"+JSON.stringify(p))},setProps:t}}});function $(e,o,t,p,x,I){const l=r("a-input"),c=r("BasicForm"),f=r("CollapseContainer"),d=r("PageWrapper");return A(),F(d,{title:"自定义组件示例"},{default:n(()=>[s(f,{title:"自定义表单"},{default:n(()=>[s(c,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:n(({model:i,field:u})=>[s(l,{value:i[u],"onUpdate:value":_=>i[u]=_,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister","onSubmit"])]),_:1})]),_:1})}const te=b(S,[["render",$]]);export{te as default};
