var d=(o,r,s)=>new Promise((m,i)=>{var l=t=>{try{e(s.next(t))}catch(c){i(c)}},a=t=>{try{e(s.throw(t))}catch(c){i(c)}},e=t=>t.done?m(t.value):Promise.resolve(t.value).then(l,a);e((s=s.apply(o,r)).next())});import{B as v}from"./BasicForm-5add6e56.js";import"./componentMap-276358e1.js";import{u as g}from"./useForm-673df8f4.js";import"./RadioButtonGroup-78082783.js";import{C as h}from"./index-6e5ef5a2.js";import{a as B}from"./index-57fd56dd.js";import{k as A,h as F,_ as I}from"./index.js";import{h as S}from"./header-4d6dbfbe.js";import{a as b}from"./account-09ac2789.js";import{b as w}from"./data-15304551.js";import{u as k}from"./upload-251cfba7.js";import{_ as y,aa as E,ab as R}from"./antd-5cc557c7.js";import{d as U,o as V,e as $,a8 as n,_ as x,a9 as M,aa as u,f as p,a0 as _,E as N,a3 as T,a4 as G}from"./vue-05cc5022.js";import"./FormItem.vue_vue_type_script_lang-ec27986b.js";import"./helper-137f4745.js";import"./BasicForm.vue_vue_type_style_index_0_lang-8c4f6171.js";import"./uniqBy-341b68e5.js";import"./index-c56721f4.js";import"./useWindowSizeFn-07d3d29d.js";import"./useFormItem-dd0166b2.js";import"./uuid-31b8b5a4.js";import"./download-65cb1f74.js";import"./base64Conver-39fc0d26.js";import"./index-6864474d.js";import"./IconPicker.vue_vue_type_style_index_0_lang-77cb6856.js";import"./useCopyToClipboard-60b7ccd7.js";import"./index-e3e9b296.js";import"./index-6bec6a2a.js";const P=U({components:{BasicForm:v,CollapseContainer:h,Button:y,ARow:E,ACol:R,CropperAvatar:B},setup(){const{createMessage:o}=F(),r=A(),[s,{setFieldsValue:m}]=g({labelWidth:120,schemas:w,showActionButtonGroup:!1});V(()=>d(this,null,function*(){const a=yield b();m(a)}));const i=$(()=>{const{avatar:a}=r.getUserInfo;return console.log(a),a||S});function l({src:a,data:e}){const t=r.getUserInfo;t.avatar=a,r.setUserInfo(t),console.log("data",e)}return{avatar:i,register:s,uploadApi:k,updateAvatar:l,handleSubmit:()=>{o.success("更新成功！")}}}});const W=o=>(T("data-v-85758967"),o=o(),G(),o),j={class:"change-avatar"},q=W(()=>_("div",{class:"mb-2"},"头像",-1));function z(o,r,s,m,i,l){const a=n("BasicForm"),e=n("a-col"),t=n("CropperAvatar"),c=n("a-row"),f=n("Button"),C=n("CollapseContainer");return x(),M(C,{title:"基本设置",canExpan:!1},{default:u(()=>[p(c,{gutter:24},{default:u(()=>[p(e,{span:14},{default:u(()=>[p(a,{onRegister:o.register},null,8,["onRegister"])]),_:1}),p(e,{span:10},{default:u(()=>[_("div",j,[q,p(t,{uploadApi:o.uploadApi,value:o.avatar,btnText:"更换头像",btnProps:{preIcon:"ant-design:cloud-upload-outlined"},onChange:o.updateAvatar,width:"150"},null,8,["uploadApi","value","onChange"])])]),_:1})]),_:1}),p(f,{type:"primary",onClick:o.handleSubmit},{default:u(()=>[N(" 更新基本信息 ")]),_:1},8,["onClick"])]),_:1})}const Bo=I(P,[["render",z],["__scopeId","data-v-85758967"]]);export{Bo as default};
