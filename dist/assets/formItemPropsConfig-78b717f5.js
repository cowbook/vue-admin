import{b as n,c as o}from"./formItemConfig-f7311075.js";const a={span:24},m=[{name:"span",label:"栅格数",component:"Slider",on:{change(e){a.span=e}},componentProps:{max:24,min:0,marks:{12:""}}},{name:"offset",label:"栅格左侧的间隔格数",component:"Slider",componentProps:{max:24,min:0,marks:{12:""}}},{name:"order",label:"栅格顺序,flex 布局模式下有效",component:"Slider",componentProps:{max:24,min:0,marks:{12:""}}},{name:"pull",label:"栅格向左移动格数",component:"Slider",componentProps:{max:24,min:0,marks:{12:""}}},{name:"push",label:"栅格向右移动格数",component:"Slider",componentProps:{max:24,min:0,marks:{12:""}}},{name:"xs",label:"<576px 响应式栅格",component:"Slider",componentProps:{max:24,min:0,marks:{12:""}}},{name:"sm",label:"≥576px 响应式栅格",component:"Slider",componentProps:{max:24,min:0,marks:{12:""}}},{name:"md",label:"≥768p 响应式栅格",component:"Slider",componentProps:{max:24,min:0,marks:{12:""}}},{name:"lg",label:"≥992px 响应式栅格",component:"Slider",componentProps:{max:24,min:0,marks:{12:""}}},{name:"xl",label:"≥1200px 响应式栅格",component:"Slider",componentProps:{max:24,min:0,marks:{12:""}}},{name:"xxl",label:"≥1600px 响应式栅格",component:"Slider",componentProps:{max:24,min:0,marks:{12:""}}},{name:"≥2000px",label:"≥1600px 响应式栅格",component:"Slider",componentProps:{max:24,min:0,marks:{12:""}}}],p=[{name:"labelCol",label:"标签col",component:"Slider",componentProps:{max:24,min:0,marks:{12:""}},exclude:["Grid"]},{name:"wrapperCol",label:"控件-span",component:"Slider",componentProps:{max:24,min:0,marks:{12:""}},exclude:["Grid"]}],t=[{name:"component",label:"控件-FormItem",component:"Select",componentProps:{options:n.concat(o).map(e=>({value:e.component,label:e.label}))}},{name:"label",label:"标签",component:"Input",componentProps:{type:"Input",placeholder:"请输入标签"},exclude:["Grid"]},{name:"field",label:"字段标识",component:"Input",componentProps:{type:"InputTextArea",placeholder:"请输入字段标识"},exclude:["Grid"]},{name:"helpMessage",label:"helpMessage",component:"Input",componentProps:{placeholder:"请输入提示信息"},exclude:["Grid"]}],r=[{name:"labelAlign",label:"标签对齐",component:"RadioGroup",componentProps:{options:[{label:"靠左",value:"left"},{label:"靠右",value:"right"}]},exclude:["Grid"]},{name:"help",label:"help",component:"Input",componentProps:{placeholder:"请输入提示信息"},exclude:["Grid"]},{name:"extra",label:"额外消息",component:"Input",componentProps:{type:"InputTextArea",placeholder:"请输入额外消息"},exclude:["Grid"]},{name:"validateTrigger",label:"validateTrigger",component:"Input",componentProps:{type:"InputTextArea",placeholder:"请输入validateTrigger"},exclude:["Grid"]},{name:"validateStatus",label:"校验状态",component:"RadioGroup",componentProps:{options:[{label:"默认",value:""},{label:"成功",value:"success"},{label:"警告",value:"warning"},{label:"错误",value:"error"},{label:"校验中",value:"validating"}]},exclude:["Grid"]}],c=[{name:"required",label:"必填项",component:"Checkbox",exclude:["alert"]},{name:"hidden",label:"隐藏",component:"Checkbox",exclude:["alert"]},{name:"hiddenLabel",component:"Checkbox",exclude:["Grid"],label:"隐藏标签"},{name:"colon",label:"label后面显示冒号",component:"Checkbox",componentProps:{},exclude:["Grid"]},{name:"hasFeedback",label:"输入反馈",component:"Checkbox",componentProps:{},includes:["Input"]},{name:"autoLink",label:"自动关联",component:"Checkbox",componentProps:{},includes:["Input"]},{name:"validateFirst",label:"检验证错误停止",component:"Checkbox",componentProps:{},includes:["Input"]}];export{t as a,c as b,r as c,p as d,m as e,a as g};
