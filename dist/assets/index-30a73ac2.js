import{D as m}from"./index-3f7075e4.js";import{P as p}from"./index-aeeebb1a.js";import{u as n}from"./useDescription-7fef32dd.js";import{d as c,a8 as i,_ as u,a9 as d,aa as f,f as s}from"./vue-05cc5022.js";import{_ as g}from"./index.js";import"./index-6e5ef5a2.js";import"./index-6bec6a2a.js";import"./antd-5cc557c7.js";import"./useContentViewHeight-c26bde0b.js";import"./useWindowSizeFn-07d3d29d.js";import"./onMountedOrActivated-7a6feff1.js";const o={username:"test",nickName:"VB",age:"123",phone:"15695909xxx",email:"190848757@qq.com",addr:"厦门市思明区",sex:"男",certy:"3504256199xxxxxxxxx",tag:"orange"},r=[{field:"username",label:"用户名"},{field:"nickName",label:"昵称",render:(e,a)=>`${a.username}-${e}`},{field:"phone",label:"联系电话"},{field:"email",label:"邮箱"},{field:"addr",label:"地址"}],h=c({components:{Description:m,PageWrapper:p},setup(){const[e]=n({title:"useDescription",data:o,schema:r}),[a]=n({title:"无边框",bordered:!1,data:o,schema:r});return{mockData:o,schema:r,register:e,register1:a}}});function x(e,a,D,_,k,B){const t=i("Description"),l=i("PageWrapper");return u(),d(l,{title:"详情组件示例"},{default:f(()=>[s(t,{title:"基础示例",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:3,data:e.mockData,schema:e.schema},null,8,["data","schema"]),s(t,{class:"mt-4",title:"垂直示例",layout:"vertical",collapseOptions:{canExpand:!0,helpMessage:"help me"},column:2,data:e.mockData,schema:e.schema},null,8,["data","schema"]),s(t,{onRegister:e.register,class:"mt-4"},null,8,["onRegister"]),s(t,{onRegister:e.register1,class:"mt-4"},null,8,["onRegister"])]),_:1})}const v=g(h,[["render",x]]);export{v as default};