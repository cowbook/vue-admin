var c=(e,a,o)=>new Promise((p,n)=>{var u=t=>{try{s(o.next(t))}catch(i){n(i)}},l=t=>{try{s(o.throw(t))}catch(i){n(i)}},s=t=>t.done?p(t.value):Promise.resolve(t.value).then(u,l);s((o=o.apply(e,a)).next())});import{B as d}from"./BasicForm-5add6e56.js";import"./componentMap-276358e1.js";import{u as b}from"./useForm-673df8f4.js";import"./RadioButtonGroup-78082783.js";import{h as f,_}from"./index.js";import{P}from"./index-aeeebb1a.js";import{d as g,a8 as m,_ as h,a9 as F,aa as C,f as B}from"./vue-05cc5022.js";import"./FormItem.vue_vue_type_script_lang-ec27986b.js";import"./index-6e5ef5a2.js";import"./index-6bec6a2a.js";import"./antd-5cc557c7.js";import"./helper-137f4745.js";import"./BasicForm.vue_vue_type_style_index_0_lang-8c4f6171.js";import"./uniqBy-341b68e5.js";import"./index-c56721f4.js";import"./useWindowSizeFn-07d3d29d.js";import"./useFormItem-dd0166b2.js";import"./uuid-31b8b5a4.js";import"./download-65cb1f74.js";import"./base64Conver-39fc0d26.js";import"./index-6864474d.js";import"./IconPicker.vue_vue_type_style_index_0_lang-77cb6856.js";import"./useCopyToClipboard-60b7ccd7.js";import"./index-e3e9b296.js";import"./useContentViewHeight-c26bde0b.js";import"./onMountedOrActivated-7a6feff1.js";const r={span:8},v=[{field:"title",component:"Input",label:"标题",colProps:r,componentProps:{placeholder:"给目标起个名字"},required:!0},{field:"time",component:"RangePicker",label:"起止日期",colProps:r,required:!0},{field:"client",component:"Input",colProps:r,label:"客户",helpMessage:"目标的服务对象",subLabel:"( 选填 )",componentProps:{placeholder:"请描述你服务的客户，内部客户直接 @姓名／工号"}},{field:"weights",component:"InputNumber",label:"权重",colProps:r,subLabel:"( 选填 )",componentProps:{formatter:e=>e?`${e}%`:"",parser:e=>e.replace("%",""),placeholder:"请输入"}},{field:"target",component:"InputTextArea",label:"目标描述",colProps:r,componentProps:{placeholder:"请输入你的阶段性工作目标",rows:4},required:!0},{field:"metrics",component:"InputTextArea",label:"衡量标准",colProps:r,componentProps:{placeholder:"请输入衡量标准",rows:4},required:!0},{field:"inviteer",component:"Input",label:"邀评人",colProps:{span:8},subLabel:"( 选填 )",componentProps:{placeholder:"请直接 @姓名／工号，最多可邀请 5 人"}},{field:"disclosure",component:"RadioGroup",label:"目标公开",colProps:{span:16},itemProps:{extra:"客户、邀评人默认被分享"},componentProps:{options:[{label:"公开",value:"1"},{label:"部分公开",value:"2"},{label:"不公开",value:"3"}]}},{field:"disclosure",component:"Select",label:" ",colProps:{span:8},show:({model:e})=>e.disclosure==="2",componentProps:{placeholder:"公开给",mode:"multiple",options:[{label:"同事1",value:"1"},{label:"同事2",value:"2"},{label:"同事3",value:"3"}]}}],x=g({name:"FormBasicPage",components:{BasicForm:d,PageWrapper:P},setup(){const{createMessage:e}=f(),[a,{validate:o,setProps:p}]=b({labelCol:{span:8},wrapperCol:{span:15},schemas:v,actionColOptions:{offset:8,span:23},submitButtonOptions:{text:"提交"},submitFunc:n});function n(){return c(this,null,function*(){try{yield o(),p({submitButtonOptions:{loading:!0}}),setTimeout(()=>{p({submitButtonOptions:{loading:!1}}),e.success("提交成功！")},2e3)}catch(u){}})}return{register:a}}});function w(e,a,o,p,n,u){const l=m("BasicForm"),s=m("PageWrapper");return h(),F(s,{title:"基础表单",contentBackground:"",content:" 表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",contentClass:"p-4"},{default:C(()=>[B(l,{onRegister:e.register},null,8,["onRegister"])]),_:1})}const Z=_(x,[["render",w],["__scopeId","data-v-391920c8"]]);export{Z as default};