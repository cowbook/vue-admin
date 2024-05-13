var m=(i,o,a)=>new Promise((l,d)=>{var r=t=>{try{n(a.next(t))}catch(e){d(e)}},s=t=>{try{n(a.throw(t))}catch(e){d(e)}},n=t=>t.done?l(t.value):Promise.resolve(t.value).then(r,s);n((a=a.apply(i,o)).next())});import{B as h}from"./BasicTable-21ee737c.js";import{T as b}from"./componentMap-276358e1.js";import"./TableImg.vue_vue_type_style_index_0_lang-b5825a07.js";import{u as R}from"./useTable-6065d223.js";import{o as f}from"./select-d6a88e2c.js";import{d as g}from"./table-3d6d885c.js";import{t as v}from"./tree-53cd295a.js";import{h as x,_ as I}from"./index.js";import{M as k}from"./antd-5cc557c7.js";import{d as T,k as _,a8 as w,_ as C,$ as y,f as A,aa as E,a9 as P,ac as M}from"./vue-05cc5022.js";import"./BasicForm-5add6e56.js";import"./FormItem.vue_vue_type_script_lang-ec27986b.js";import"./index-6e5ef5a2.js";import"./index-6bec6a2a.js";import"./helper-137f4745.js";import"./BasicForm.vue_vue_type_style_index_0_lang-8c4f6171.js";import"./uniqBy-341b68e5.js";import"./index-c56721f4.js";import"./useWindowSizeFn-07d3d29d.js";import"./useForm-673df8f4.js";import"./RadioButtonGroup-78082783.js";import"./useFormItem-dd0166b2.js";import"./uuid-31b8b5a4.js";import"./onMountedOrActivated-7a6feff1.js";import"./download-65cb1f74.js";import"./base64Conver-39fc0d26.js";import"./index-6864474d.js";import"./IconPicker.vue_vue_type_style_index_0_lang-77cb6856.js";import"./useCopyToClipboard-60b7ccd7.js";import"./index-e3e9b296.js";import"./sortable.esm-4ae27e0b.js";const F=[{title:"输入框",dataIndex:"name-group",editRow:!0,children:[{title:"输入框",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:150},{title:"默认输入状态",dataIndex:"name7",editRow:!0,width:150},{title:"输入框校验",dataIndex:"name1",editRow:!0,align:"left",editRule:!0,width:150},{title:"输入框函数校验",dataIndex:"name2",editRow:!0,align:"right",editRule:i=>m(void 0,null,function*(){return i==="2"?"不能输入该值":""})},{title:"数字输入框",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:150}]},{title:"下拉框",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"},{label:"Option3",value:"3"}]},width:200},{title:"远程下拉",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:f,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"远程下拉树",dataIndex:"name8",editRow:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:v,resultField:"list"},width:200},{title:"日期选择",dataIndex:"date",editRow:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:150},{title:"时间选择",dataIndex:"time",editRow:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:100},{title:"勾选框",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:i=>i?"是":"否",width:100},{title:"开关",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:i=>i?"开":"关",width:100},{title:"单选框",dataIndex:"radio1",editRow:!0,editComponent:"RadioGroup",editComponentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},width:200},{title:"单选按钮框",dataIndex:"radio2",editRow:!0,editComponent:"RadioButtonGroup",editComponentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},width:200},{title:"远程单选框",dataIndex:"radio3",editRow:!0,editComponent:"ApiRadioGroup",editComponentProps:{api:f,resultField:"list",labelField:"name",valueField:"id"},width:200}],B=T({components:{BasicTable:h,TableAction:b},setup(){const{createMessage:i}=x(),o=_(""),[a]=R({title:"可编辑行示例",titleHelpMessage:["本例中修改[数字输入框]这一列时，同一行的[远程下拉]列的当前编辑数据也会同步发生改变"],api:g,columns:F,showIndexColumn:!1,showTableSetting:!0,tableSetting:{fullScreen:!0},actionColumn:{width:160,title:"Action",dataIndex:"action"}});function l(t){var e;o.value=t.key,(e=t.onEdit)==null||e.call(t,!0)}function d(t){var e;o.value="",(e=t.onEdit)==null||e.call(t,!1,!1)}function r(t){return m(this,null,function*(){var p,u;if(i.loading({content:"正在保存...",duration:0,key:"saving"}),yield(p=t.onValid)==null?void 0:p.call(t))try{const c=k(t.editValueRefs);console.log(c),(yield(u=t.onEdit)==null?void 0:u.call(t,!1,!0))&&(o.value=""),i.success({content:"数据已保存",key:"saving"})}catch(c){i.error({content:"保存失败",key:"saving"})}else i.error({content:"请填写正确的数据",key:"saving"})})}function s(t,e){return t.editable?[{label:"保存",onClick:r.bind(null,t,e)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:d.bind(null,t,e)}}]:[{label:"编辑",disabled:o.value?o.value!==t.key:!1,onClick:l.bind(null,t)}]}function n({column:t,value:e,record:p}){t.dataIndex==="id"&&(p.editValueRefs.name4.value=`${e}`),console.log(t,e,p)}return{registerTable:a,handleEdit:l,createActions:s,onEditChange:n}}}),S={class:"p-4"};function Y(i,o,a,l,d,r){const s=w("TableAction"),n=w("BasicTable");return C(),y("div",S,[A(n,{onRegister:i.registerTable,onEditChange:i.onEditChange},{bodyCell:E(({column:t,record:e})=>[t.key==="action"?(C(),P(s,{key:0,actions:i.createActions(e,t)},null,8,["actions"])):M("",!0)]),_:1},8,["onRegister","onEditChange"])])}const wt=I(B,[["render",Y]]);export{wt as default};