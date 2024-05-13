var G=Object.defineProperty,Q=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var B=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,ee=Object.prototype.propertyIsEnumerable;var H=(e,u,m)=>u in e?G(e,u,{enumerable:!0,configurable:!0,writable:!0,value:m}):e[u]=m,f=(e,u)=>{for(var m in u||(u={}))Z.call(u,m)&&H(e,m,u[m]);if(B)for(var m of B(u))ee.call(u,m)&&H(e,m,u[m]);return e},J=(e,u)=>Q(e,X(u));import{e as N,u as c,d as te,H as oe,t as se,f as g,i as ne,A as ae,ad as $,E as le}from"./vue-05cc5022.js";import{c as E}from"./componentMap-276358e1.js";import{a as re}from"./index-6e5ef5a2.js";import{v as ce,l as P,Y as O,b as ie,y as z,a7 as de,a8 as fe}from"./index.js";import{N as ue,c as K,s as me}from"./helper-137f4745.js";import{ab as U,ak as he,ai as pe,M as be}from"./antd-5cc557c7.js";function ge(e,u){return N(()=>{const m=c(e),{labelCol:S={},wrapperCol:v={}}=m.itemProps||{},{labelWidth:R,disabledLabelWidth:h}=m,{labelWidth:x,labelCol:L,wrapperCol:D,layout:F}=c(u);if(!x&&!R&&!L||h)return S.style={textAlign:"left"},{labelCol:S,wrapperCol:v};let C=R||x;const k=f(f({},L),S),q=f(f({},D),v);return C&&(C=ce(C)?`${C}px`:C),{labelCol:f({style:{width:C}},k),wrapperCol:f({style:{width:F==="vertical"?"100%":`calc(100% - ${C})`}},q)}})}function W(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!ne(e)}const Me=te({name:"BasicFormItem",inheritAttrs:!1,props:{schema:{type:Object,default:()=>({})},formProps:{type:Object,default:()=>({})},allDefaultValues:{type:Object,default:()=>({})},formModel:{type:Object,default:()=>({})},setFormModel:{type:Function,default:null},tableAction:{type:Object},formActionType:{type:Object},isAdvanced:{type:Boolean}},setup(e,{slots:u}){const{t:m}=ie(),{schema:S,formProps:v}=oe(e),R=ge(S,v),h=N(()=>{const{allDefaultValues:o,formModel:t,schema:a}=e,{mergeDynamicData:l}=e.formProps;return{field:a.field,model:t,values:f(f(f({},l),o),t),schema:a}}),x=N(()=>{var n;const{schema:o,tableAction:t,formModel:a,formActionType:l}=e;let{componentProps:s={}}=o;return P(s)&&(s=(n=s({schema:o,tableAction:t,formModel:a,formActionType:l}))!=null?n:{}),o.component==="Divider"&&(s=Object.assign({type:"horizontal"},{orientation:"left",plain:!0},s)),s}),L=N(()=>{const{disabled:o}=e.formProps,{dynamicDisabled:t}=e.schema,{disabled:a=!1}=c(x);let l=!!o||a;return O(t)&&(l=t),P(t)&&(l=t(c(h))),l});function D(){const{show:o,ifShow:t}=e.schema,{showAdvancedButton:a}=e.formProps,l=a&&O(e.isAdvanced)?e.isAdvanced:!0;let s=!0,n=!0;return O(o)&&(s=o),O(t)&&(n=t),P(o)&&(s=o(c(h))),P(t)&&(n=t(c(h))),s=s&&l,{isShow:s,isIfShow:n}}function F(){var j;const{rules:o=[],component:t,rulesMessageJoinLabel:a,label:l,dynamicRules:s,required:n}=e.schema;if(P(s))return s(c(h));let r=be(o);const{rulesMessageJoinLabel:I}=e.formProps,w=Reflect.has(e.schema,"rulesMessageJoinLabel")?a:I,p=K(t)+`${w?l:""}`;function A(d,i){const y=d.message||p;return i===void 0||de(i)||Array.isArray(i)&&i.length===0||typeof i=="string"&&i.trim()===""||typeof i=="object"&&Reflect.has(i,"checked")&&Reflect.has(i,"halfChecked")&&Array.isArray(i.checked)&&Array.isArray(i.halfChecked)&&i.checked.length===0&&i.halfChecked.length===0?Promise.reject(y):Promise.resolve()}const b=P(n)?n(c(h)):n;b&&(!r||r.length===0?r=[{required:b,validator:A}]:r.findIndex(i=>Reflect.has(i,"required"))===-1&&r.push({required:b,validator:A}));const _=r.findIndex(d=>Reflect.has(d,"required")&&!Reflect.has(d,"validator"));if(_!==-1){const d=r[_],{isShow:i}=D();if(i||(d.required=!1),t){Reflect.has(d,"type")||(d.type=t==="InputNumber"?"number":"string"),d.message=d.message||p,(t.includes("Input")||t.includes("Textarea"))&&(d.whitespace=!0);const y=(j=c(x))==null?void 0:j.valueFormat;me(d,t,y)}}const M=r.findIndex(d=>d.max);return M!==-1&&!r[M].validator&&(r[M].message=r[M].message||m("component.form.maxTip",[r[M].max])),r}function C(){var i;const{renderComponentContent:o,component:t,field:a,changeEvent:l="change",valueField:s}=e.schema,n=t&&["Switch","Checkbox"].includes(t),r=`on${fe(l)}`,I={[r]:(...y)=>{const[T]=y;b[r]&&b[r](...y);const V=T?T.target:null,Y=V?n?V.checked:V.value:T;e.setFormModel(a,Y,e.schema)}},w=E.get(t),{autoSetPlaceHolder:p,size:A}=e.formProps,b=J(f({allowClear:!0,getPopupContainer:y=>y.parentNode,size:A},c(x)),{disabled:c(L)});!b.disabled&&p&&t!=="RangePicker"&&t&&(b.placeholder=((i=c(x))==null?void 0:i.placeholder)||K(t)),b.codeField=a,b.formValues=c(h);const M={[s||(n?"checked":"value")]:e.formModel[a]},j=f(f(f({},b),I),M);if(!o)return g(w,j,null);const d=P(o)?f({},o(c(h))):{default:()=>o};return g(w,j,W(d)?d:{default:()=>[d]})}function k(){const{label:o,helpMessage:t,helpComponentProps:a,subLabel:l}=e.schema,s=l?g("span",null,[o,le(" "),g("span",{class:"text-secondary"},[l])]):o,n=P(t)?t(c(h)):t;return!n||Array.isArray(n)&&n.length===0?s:g("span",null,[s,g(re,$({placement:"top",class:"mx-1",text:n},a),null)])}function q(){const{itemProps:o,slot:t,render:a,field:l,suffix:s,component:n}=e.schema,{labelCol:r,wrapperCol:I}=c(R),{colon:w}=e.formProps;if(n==="Divider"){let p;return g(U,{span:24},{default:()=>[g(he,c(x),W(p=k())?p:{default:()=>[p]})]})}else{const p=()=>t?z(u,t,c(h)):a?a(c(h)):C(),A=!!s,b=P(s)?s(c(h)):s;return ue.includes(n)&&e.schema&&(e.schema.itemProps=f({autoLink:!1},e.schema.itemProps)),g(pe.Item,$({name:l,colon:w,class:{"suffix-item":A}},o,{label:k(),rules:F(),labelCol:r,wrapperCol:I}),{default:()=>[g("div",{style:"display:flex"},[g("div",{style:"flex:1;"},[p()]),A&&g("span",{class:"suffix"},[b])])]})}}return()=>{let o;const{colProps:t={},colSlot:a,renderColContent:l,component:s}=e.schema;if(!E.has(s))return null;const{baseColProps:n={}}=e.formProps,r=f(f({},n),t),{isIfShow:I,isShow:w}=D(),p=c(h);return I&&se(g(U,r,W(o=(()=>a?z(u,a,p):l?l(p):q())())?o:{default:()=>[o]}),[[ae,w]])}}});export{Me as _};