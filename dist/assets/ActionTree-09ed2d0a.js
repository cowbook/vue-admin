import{_ as v}from"./index-d90e9578.js";import{t as h}from"./data-1ad4e56f.js";import{h as A,_ as F}from"./index.js";import{P as K}from"./index-aeeebb1a.js";import{d as g,k as $,u as G,a8 as c,_ as T,a9 as b,aa as l,a0 as f,f as a,E as s}from"./vue-05cc5022.js";import"./index-6e5ef5a2.js";import"./index-6bec6a2a.js";import"./antd-5cc557c7.js";import"./useContextMenu-c2719a13.js";import"./useContentViewHeight-c26bde0b.js";import"./useWindowSizeFn-07d3d29d.js";import"./onMountedOrActivated-7a6feff1.js";const _=g({components:{BasicTree:v,PageWrapper:K},setup(){const n=$(null),{createMessage:e}=A();function o(){const t=G(n);if(!t)throw new Error("tree is null!");return t}function p(t){o().filterByLevel(t)}function m(){o().setCheckedKeys(["0-0"])}function k(){const t=o().getCheckedKeys();e.success(JSON.stringify(t))}function u(){o().setSelectedKeys(["0-0"])}function d(){const t=o().getSelectedKeys();e.success(JSON.stringify(t))}function i(){const t=o().getSelectedKeys(),C=o().getSelectedNode(t[0]);e.success(C!==null?JSON.stringify(C):null)}function r(){o().setExpandedKeys(["0-0"])}function B(){const t=o().getExpandedKeys();e.success(JSON.stringify(t))}function y(t){o().checkAll(t)}function E(t){o().expandAll(t)}function D(t=null){o().insertNodeByKey({parentKey:t,node:{title:"新增节点",key:"2-2-2"},push:"push"})}function N(t){o().deleteNodeByKey(t)}function S(t){o().updateNodeByKey(t,{title:"parent2-new"})}return{treeData:h,treeRef:n,handleLevel:p,handleSetCheckData:m,handleGetCheckData:k,handleSetSelectData:u,handleGetSelectData:d,handleSetExpandData:r,handleGetExpandData:B,handleGetSelectNode:i,appendNodeByKey:D,deleteNodeByKey:N,updateNodeByKey:S,checkAll:y,expandAll:E}}}),w={class:"mb-4"},J={class:"mb-4"},L={class:"mb-4"};function O(n,e,o,p,m,k){const u=c("a-button"),d=c("BasicTree"),i=c("PageWrapper");return T(),b(i,{title:"Tree函数操作示例",contentBackground:"",contentClass:"p-4"},{default:l(()=>[f("div",w,[a(u,{onClick:e[0]||(e[0]=r=>n.expandAll(!0)),class:"mr-2"},{default:l(()=>[s(" 展开全部 ")]),_:1}),a(u,{onClick:e[1]||(e[1]=r=>n.expandAll(!1)),class:"mr-2"},{default:l(()=>[s(" 折叠全部 ")]),_:1}),a(u,{onClick:e[2]||(e[2]=r=>n.checkAll(!0)),class:"mr-2"},{default:l(()=>[s(" 全选 ")]),_:1}),a(u,{onClick:e[3]||(e[3]=r=>n.checkAll(!1)),class:"mr-2"},{default:l(()=>[s(" 全不选 ")]),_:1}),a(u,{onClick:e[4]||(e[4]=r=>n.handleLevel(2)),class:"mr-2"},{default:l(()=>[s(" 显示到第2级 ")]),_:1}),a(u,{onClick:e[5]||(e[5]=r=>n.handleLevel(1)),class:"mr-2"},{default:l(()=>[s(" 显示到第1级 ")]),_:1})]),f("div",J,[a(u,{onClick:n.handleSetCheckData,class:"mr-2"},{default:l(()=>[s(" 设置勾选数据 ")]),_:1},8,["onClick"]),a(u,{onClick:n.handleGetCheckData,class:"mr-2"},{default:l(()=>[s(" 获取勾选数据 ")]),_:1},8,["onClick"]),a(u,{onClick:n.handleSetSelectData,class:"mr-2"},{default:l(()=>[s(" 设置选中数据 ")]),_:1},8,["onClick"]),a(u,{onClick:n.handleGetSelectData,class:"mr-2"},{default:l(()=>[s(" 获取选中数据 ")]),_:1},8,["onClick"]),a(u,{onClick:n.handleGetSelectNode,class:"mr-2"},{default:l(()=>[s(" 获取选中节点 ")]),_:1},8,["onClick"]),a(u,{onClick:n.handleSetExpandData,class:"mr-2"},{default:l(()=>[s(" 设置展开数据 ")]),_:1},8,["onClick"]),a(u,{onClick:n.handleGetExpandData,class:"mr-2"},{default:l(()=>[s(" 获取展开数据 ")]),_:1},8,["onClick"])]),f("div",L,[a(u,{onClick:e[6]||(e[6]=r=>n.appendNodeByKey(null)),class:"mr-2"},{default:l(()=>[s(" 添加根节点 ")]),_:1}),a(u,{onClick:e[7]||(e[7]=r=>n.appendNodeByKey("2-2")),class:"mr-2"},{default:l(()=>[s(" 添加在parent3内添加节点 ")]),_:1}),a(u,{onClick:e[8]||(e[8]=r=>n.deleteNodeByKey("2-2")),class:"mr-2"},{default:l(()=>[s(" 删除parent3节点 ")]),_:1}),a(u,{onClick:e[9]||(e[9]=r=>n.updateNodeByKey("1-1")),class:"mr-2"},{default:l(()=>[s(" 更新parent2节点 ")]),_:1})]),a(d,{treeData:n.treeData,title:"函数操作",ref:"treeRef",checkable:!0},null,8,["treeData"])]),_:1})}const X=F(_,[["render",O]]);export{X as default};
