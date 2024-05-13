import{M as k,a as w}from"./index-e1950226.js";import{P as g}from"./index-aeeebb1a.js";import{a9 as C}from"./antd-5cc557c7.js";import{d as D,k as i,u as E,a8 as a,_ as M,a9 as V,aa as r,a0 as d,f as n,E as c}from"./vue-05cc5022.js";import{_ as R}from"./index.js";import"./index-c56721f4.js";import"./index-6e5ef5a2.js";import"./index-6bec6a2a.js";import"./useWindowSizeFn-07d3d29d.js";import"./useRootSetting-2a3a7d27.js";import"./onMountedOrActivated-7a6feff1.js";import"./useContentViewHeight-c26bde0b.js";const b=D({components:{MarkDown:k,PageWrapper:g,MarkdownViewer:w,ACard:C},setup(){const e=i(null),o=i(`
# 标题h1

##### 标题h5

**加粗**
*斜体*
~~删除线~~
[链接](https://github.com/vbenjs/vue-vben-admin)
↓分割线↓

---


* 无序列表1
  * 无序列表1.1

1. 有序列表1
2. 有序列表2

* [ ] 任务列表1
* [x] 任务列表2

> 引用示例

\`\`\`js
// 代码块:
(() => {
  var htmlRoot = document.getElementById('htmlRoot');
  var theme = window.localStorage.getItem('__APP__DARK__MODE__');
  if (htmlRoot && theme) {
    htmlRoot.setAttribute('data-theme', theme);
    theme = htmlRoot = null;
  }
})();
\`\`\`

| 表格 | 示例 | 🎉️ |
| --- | --- | --- |
| 1 | 2 | 3 |
| 4 | 5 | 6 |
`);function l(){const t=E(e);if(!t)return;t.getVditor().setTheme("dark","dark","dracula")}function m(t){o.value=t}function s(){o.value=""}return{value:o,toggleTheme:l,markDownRef:e,handleChange:m,clearValue:s}}}),A={class:"mt-2"};function B(e,o,l,m,s,t){const u=a("a-button"),p=a("MarkDown"),f=a("MarkdownViewer"),_=a("a-card"),h=a("PageWrapper");return M(),V(h,{title:"MarkDown组件示例"},{default:r(()=>[d("div",null,[n(u,{onClick:e.toggleTheme,class:"mb-2",type:"primary"},{default:r(()=>[c(" 黑暗主题 ")]),_:1},8,["onClick"]),n(u,{onClick:e.clearValue,class:"mb-2",type:"default"},{default:r(()=>[c(" 清空内容 ")]),_:1},8,["onClick"]),n(p,{value:e.value,"onUpdate:value":o[0]||(o[0]=v=>e.value=v),onChange:e.handleChange,ref:"markDownRef",placeholder:"这是占位文本"},null,8,["value","onChange"])]),d("div",A,[n(_,{title:"Markdown Viewer 组件演示"},{default:r(()=>[n(f,{value:e.value},null,8,["value"])]),_:1})])]),_:1})}const S=R(b,[["render",B]]);export{S as default};