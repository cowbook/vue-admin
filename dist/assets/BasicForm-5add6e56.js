var Oe=Object.defineProperty;var ye=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var ve=(e,r,s)=>r in e?Oe(e,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[r]=s,E=(e,r)=>{for(var s in r||(r={}))Re.call(r,s)&&ve(e,s,r[s]);if(ye)for(var s of ye(r))Ce.call(r,s)&&ve(e,s,r[s]);return e};var T=(e,r,s)=>new Promise((c,h)=>{var d=p=>{try{f(s.next(p))}catch(m){h(m)}},l=p=>{try{f(s.throw(p))}catch(m){h(m)}},f=p=>p.done?c(p.value):Promise.resolve(p.value).then(d,l);f((s=s.apply(e,r)).next())});import{_ as Le}from"./FormItem.vue_vue_type_script_lang-ec27986b.js";import{_ as Pe,b as Me,c as Ne}from"./BasicForm.vue_vue_type_style_index_0_lang-8c4f6171.js";import{_ as Ve,U,F as Z,l as ie,m as ae,V as ee,W as G,X as pe,Q as Se,v as je,f as Ie,Y as ke,Z as ge,$ as Fe,j as Te,a0 as Ue,a as _e}from"./index.js";import{a8 as _,_ as q,a9 as K,aa as k,a0 as We,ag as Ye,f as ce,R as W,ad as x,E as le,a1 as fe,ac as oe,ae as re,u as n,g as He,e as X,w as Q,an as Xe,q as me,J as Be,s as qe,d as ze,r as we,k as J,o as Ke,ai as Ge,$ as Je,ab as de,af as be,ah as ue,F as Qe}from"./vue-05cc5022.js";import{d as Ze,h as xe,a as $e}from"./helper-137f4745.js";import{M as z,as as et,ai as tt,aa as nt}from"./antd-5cc557c7.js";import{u as st}from"./uniqBy-341b68e5.js";import{u as ot}from"./index-c56721f4.js";function at(e,r,s,c,h,d){const l=_("Button"),f=_("BasicArrow"),p=_("FormItem"),m=_("a-col");return e.showActionButtonGroup?(q(),K(m,re(x({key:0},e.actionColOpt)),{default:k(()=>[We("div",{style:Ye([{width:"100%"},{textAlign:e.actionColOpt.style.textAlign}])},[ce(p,null,{default:k(()=>[W(e.$slots,"resetBefore"),e.showResetButton?(q(),K(l,x({key:0,type:"default",class:"mr-2"},e.getResetBtnOptions,{onClick:e.resetAction}),{default:k(()=>[le(fe(e.getResetBtnOptions.text),1)]),_:1},16,["onClick"])):oe("",!0),W(e.$slots,"submitBefore"),e.showSubmitButton?(q(),K(l,x({key:1,type:"primary",class:"mr-2"},e.getSubmitBtnOptions,{onClick:e.submitAction}),{default:k(()=>[le(fe(e.getSubmitBtnOptions.text),1)]),_:1},16,["onClick"])):oe("",!0),W(e.$slots,"advanceBefore"),e.showAdvancedButton&&!e.hideAdvanceBtn?(q(),K(l,{key:2,type:"link",size:"small",onClick:e.toggleAdvanced},{default:k(()=>[le(fe(e.isAdvanced?e.t("component.form.putAway"):e.t("component.form.unfold"))+" ",1),ce(f,{class:"ml-1",expand:!e.isAdvanced,up:""},null,8,["expand"])]),_:1},8,["onClick"])):oe("",!0),W(e.$slots,"advanceAfter")]),_:3})],4)]),_:3},16)):oe("",!0)}const rt=Ve(Pe,[["render",at]]);function it(e,r,s){const c=/^\[(.+)\]$/;if(c.test(e)){const h=e.match(c);if(h&&h[1]){const d=h[1].split(",");return r=Array.isArray(r)?r:[r],d.forEach((l,f)=>{ee(s,l.trim(),r[f])}),!0}}}function ct(e,r,s){const c=/^\{(.+)\}$/;if(c.test(e)){const h=e.match(c);if(h&&h[1]){const d=h[1].split(",");return r=U(r)?r:{},d.forEach(l=>{ee(s,l.trim(),r[l.trim()])}),!0}}}function lt({defaultValueRef:e,getSchema:r,formModel:s,getProps:c}){function h(f){var m,F;if(!U(f))return{};const p={};for(const b of Object.entries(f)){let[,a]=b;const[O]=b;if(!O||Z(a)&&a.length===0||ie(a))continue;const $=n(c).transformDateFunc;U(a)&&(a=$==null?void 0:$(a)),Z(a)&&((m=a[0])!=null&&m.format)&&((F=a[1])!=null&&F.format)&&(a=a.map(M=>$==null?void 0:$(M))),ae(a)&&(a===""?a=void 0:a=a.trim()),!it(O,a,p)&&!ct(O,a,p)&&ee(p,O,a)}return d(p)}function d(f){const p=n(c).fieldMapToTime;if(!p||!Array.isArray(p))return f;for(const[m,[F,b],a="YYYY-MM-DD"]of p){if(!m||!F||!b)continue;if(!f[m]){Reflect.deleteProperty(f,m);continue}const[O,$]=f[m],[M,A]=Array.isArray(a)?a:[a,a];f[F]=G(O).format(M),f[b]=G($).format(A),Reflect.deleteProperty(f,m)}return f}function l(){const f=n(r),p={};f.forEach(m=>{const{defaultValue:F}=m;pe(F)||(p[m.field]=F,s[m.field]===void 0&&(s[m.field]=F))}),e.value=z(p)}return{handleFormValues:h,initDefault:l}}const H=24;function ft({advanceState:e,emit:r,getProps:s,getSchema:c,formModel:h,defaultValueRef:d}){const l=He(),{realWidthRef:f,screenEnum:p,screenRef:m}=Se(),F=X(()=>{if(!e.isAdvanced)return 0;const A=n(s).emptySpan||0;if(je(A))return A;if(U(A)){const{span:B=0}=A,N=n(m);return A[N.toLowerCase()]||B||0}return 0}),b=Ie($,30);Q([()=>n(c),()=>e.isAdvanced,()=>n(f)],()=>{const{showAdvancedButton:A}=n(s);A&&b()},{immediate:!0});function a(A,B=0,N=!1){const L=n(f),R=parseInt(A.md)||parseInt(A.xs)||parseInt(A.sm)||A.span||H,D=parseInt(A.lg)||R,S=parseInt(A.xl)||D,t=parseInt(A.xxl)||S;return L<=p.LG?B+=R:L<p.XL?B+=D:L<p.XXL?B+=S:B+=t,N?(e.hideAdvanceBtn=!1,B<=H*2?(e.hideAdvanceBtn=!0,e.isAdvanced=!0):B>H*2&&B<=H*(n(s).autoAdvancedLine||3)?e.hideAdvanceBtn=!1:e.isLoad||(e.isLoad=!0,e.isAdvanced=!e.isAdvanced),{isAdvanced:e.isAdvanced,itemColSum:B}):B>H*(n(s).alwaysShowLines||1)?{isAdvanced:e.isAdvanced,itemColSum:B}:{isAdvanced:!0,itemColSum:B}}const O=Xe({});function $(){var L;let A=0,B=0;const{baseColProps:N={}}=n(s);for(const R of n(c)){const{show:D,colProps:S}=R;let t=!0;if(ke(D)&&(t=D),ie(D)&&(t=D({schema:R,model:h,field:R.field,values:E(E({},n(d)),h)})),t&&(S||N)){const{itemColSum:o,isAdvanced:g}=a(E(E({},N),S),A);A=o||0,g&&(B=A),O[R.field]=g}}(L=l==null?void 0:l.proxy)==null||L.$forceUpdate(),e.actionSpan=B%H+n(F),a(n(s).actionColOptions||{span:H},A,!0),r("advanced-change")}function M(){e.isAdvanced=!e.isAdvanced}return{handleToggleAdvanced:M,fieldsIsAdvancedMap:O}}function dt(e,r={}){const s=/^\[(.+)\]$/;if(s.test(e)){const c=e.match(s);if(c&&c[1]){const h=c[1].split(",");if(!h.length)return;const d=[];return h.forEach((l,f)=>{ee(d,f,r[l.trim()])}),d.filter(Boolean).length?d:void 0}}}function ut(e,r={}){const s=/^\{(.+)\}$/;if(s.test(e)){const c=e.match(s);if(c&&c[1]){const h=c[1].split(",");if(!h.length)return;const d={};return h.forEach(l=>{ee(d,l.trim(),r[l.trim()])}),Object.values(d).filter(Boolean).length?d:void 0}}}function pt({emit:e,getProps:r,formModel:s,getSchema:c,defaultValueRef:h,formElRef:d,schemaRef:l,handleFormValues:f}){function p(){return T(this,null,function*(){const{resetFunc:t,submitOnReset:o}=n(r);t&&ie(t)&&(yield t()),n(d)&&(Object.keys(s).forEach(i=>{const u=n(c).find(Y=>Y.field===i),v=(u==null?void 0:u.component)&&Ze.includes(u.component),I=z(h.value[i]);s[i]=v?I||"":I}),me(()=>R()),e("reset",Be(s)),o&&S())})}function m(t){return T(this,null,function*(){const o=n(c).map(v=>v.field).filter(Boolean),g=".",i=o.filter(v=>String(v).indexOf(g)>=0),u=[];o.forEach(v=>{const I=n(c).find(w=>w.field===v);let Y=et(t,v);const te=Reflect.has(t,v);Y=xe(I==null?void 0:I.component,Y);const{componentProps:ne}=I||{};let C=ne;typeof ne=="function"&&(C=C({formModel:n(s)}));const se=dt(v,t)||ut(v,t);if(te||se){const w=se||Y;if(B(v))if(Array.isArray(w)){const j=[];for(const y of w)j.push(y?G(y):null);n(s)[v]=j}else n(s)[v]=w?C!=null&&C.valueFormat?w:G(w):null;else n(s)[v]=w;C!=null&&C.onChange&&(C==null||C.onChange(w)),u.push(v)}else i.forEach(w=>{try{const j=w.split(".").reduce((y,V)=>y[V],t);ge(j)&&(n(s)[w]=n(j),u.push(w))}catch(j){ge(h.value[w])&&(n(s)[w]=z(n(h.value[w])))}})}),N(u).catch(v=>{})})}function F(t){return T(this,null,function*(){const o=z(n(c));if(!t)return;let g=ae(t)?[t]:t;ae(t)&&(g=[t]);for(const i of g)b(i,o);l.value=o})}function b(t,o){if(ae(t)){const g=o.findIndex(i=>i.field===t);g!==-1&&(delete s[t],o.splice(g,1))}}function a(t,o,g=!1){return T(this,null,function*(){const i=z(n(c)),u=i.findIndex(I=>I.field===o),v=U(t)?[t]:t;if(!o||u===-1||g){g?i.unshift(...v):i.push(...v),l.value=i,M(t);return}u!==-1&&i.splice(u+1,0,...v),M(t),l.value=i})}function O(t){return T(this,null,function*(){let o=[];if(U(t)&&o.push(t),Z(t)&&(o=[...t]),!o.every(i=>i.component==="Divider"||Reflect.has(i,"field")&&i.field)){Fe("All children of the form Schema array that need to be updated must contain the `field` field");return}l.value=o})}function $(t){return T(this,null,function*(){let o=[];if(U(t)&&o.push(t),Z(t)&&(o=[...t]),!o.every(u=>u.component==="Divider"||Reflect.has(u,"field")&&u.field)){Fe("All children of the form Schema array that need to be updated must contain the `field` field");return}const i=[];n(c).forEach(u=>{let v;if(o.forEach(I=>{u.field===I.field&&(v=I)}),v!==void 0&&u.field===v.field){const I=Te(u,v);i.push(I)}else i.push(u)}),M(i),l.value=st(i,"field")})}function M(t){let o=[];U(t)&&o.push(t),Z(t)&&(o=[...t]);const g={},i=A();o.forEach(u=>{u.component!="Divider"&&Reflect.has(u,"field")&&u.field&&!pe(u.defaultValue)&&(!(u.field in i)||pe(i[u.field])||Ue(i[u.field]))&&(g[u.field]=u.defaultValue)}),m(g)}function A(){return n(d)?f(Be(n(s))):{}}function B(t){return n(c).some(o=>o.field===t?$e.includes(o.component):!1)}function N(t){return T(this,null,function*(){var o;return(o=n(d))==null?void 0:o.validateFields(t)})}function L(t){return T(this,null,function*(){var o;return yield(o=n(d))==null?void 0:o.validate(t)})}function R(t){return T(this,null,function*(){var o;yield(o=n(d))==null?void 0:o.clearValidate(t)})}function D(t,o){return T(this,null,function*(){var g;yield(g=n(d))==null?void 0:g.scrollToField(t,o)})}function S(t){return T(this,null,function*(){t&&t.preventDefault();const{submitFunc:o}=n(r);if(o&&ie(o)){yield o();return}if(n(d))try{const i=yield L(),u=f(i);e("submit",u)}catch(i){if((i==null?void 0:i.outOfDate)===!1&&(i!=null&&i.errorFields))return;throw new Error(i)}})}return{handleSubmit:S,clearValidate:R,validate:L,validateFields:N,getFieldsValue:A,updateSchema:$,resetSchema:O,appendSchemaByField:a,removeSchemaByField:F,resetFields:p,setFieldsValue:m,scrollToField:D}}function mt(h){return T(this,arguments,function*({getSchema:e,getProps:r,formElRef:s,isInitedDefault:c}){qe(()=>T(this,null,function*(){if(n(c)||!n(r).autoFocusFirstItem)return;yield me();const d=n(e),l=n(s),f=l==null?void 0:l.$el;if(!l||!f||!d||d.length===0||!d[0].component.includes("Input"))return;const m=f.querySelector(".ant-row:first-child input");m&&(m==null||m.focus())}))})}const ht=ze({name:"BasicForm",components:{FormItem:Le,Form:tt,Row:nt,FormAction:rt},props:Me,emits:["advanced-change","reset","submit","register","field-value-change"],setup(e,{emit:r,attrs:s}){const c=we({}),h=ot(),d=we({isAdvanced:!0,hideAdvanceBtn:!1,isLoad:!1,actionSpan:6}),l=J({}),f=J(!1),p=J({}),m=J(null),F=J(null),{prefixCls:b}=_e("basic-form"),a=X(()=>E(E({},e),n(p))),O=X(()=>[b,{[`${b}--compact`]:n(a).compact}]),$=X(()=>{const{baseRowStyle:y={},rowProps:V}=n(a);return E({style:y},V)}),M=X(()=>E(E(E({},s),e),n(a))),A=X(()=>{const y=n(m)||n(a).schemas;for(const V of y){const{defaultValue:P,component:he,isHandleDateDefaultValue:De=!0}=V;if(De&&P&&$e.includes(he))if(!Array.isArray(P))V.defaultValue=G(P);else{const Ae=[];P.forEach(Ee=>{Ae.push(G(Ee))}),V.defaultValue=Ae}}return n(a).showAdvancedButton?z(y.filter(V=>V.component!=="Divider")):z(y)}),{handleToggleAdvanced:B,fieldsIsAdvancedMap:N}=ft({advanceState:d,emit:r,getProps:a,getSchema:A,formModel:c,defaultValueRef:l}),{handleFormValues:L,initDefault:R}=lt({getProps:a,defaultValueRef:l,getSchema:A,formModel:c});mt({getSchema:A,getProps:a,isInitedDefault:f,formElRef:F});const{handleSubmit:D,setFieldsValue:S,clearValidate:t,validate:o,validateFields:g,getFieldsValue:i,updateSchema:u,resetSchema:v,appendSchemaByField:I,removeSchemaByField:Y,resetFields:te,scrollToField:ne}=pt({emit:r,getProps:a,formModel:c,getSchema:A,defaultValueRef:l,formElRef:F,schemaRef:m,handleFormValues:L});Ne({resetAction:te,submitAction:D}),Q(()=>n(a).model,()=>{const{model:y}=n(a);y&&S(y)},{immediate:!0}),Q(()=>n(a).schemas,y=>{v(y!=null?y:[])}),Q(()=>A.value,y=>{me(()=>{var V;(V=h==null?void 0:h.redoModalHeight)==null||V.call(h)}),!n(f)&&y!=null&&y.length&&(R(),f.value=!0)}),Q(()=>c,Ie(()=>{n(a).submitOnChange&&D()},300),{deep:!0});function C(y){return T(this,null,function*(){p.value=Te(n(p)||{},y)})}function se(y,V,P){c[y]=V,r("field-value-change",y,V),P&&P.itemProps&&!P.itemProps.autoLink&&g([y]).catch(he=>{})}function w(y){const{autoSubmitOnEnter:V}=n(a);if(V&&y.key==="Enter"&&y.target&&y.target instanceof HTMLElement){const P=y.target;P&&P.tagName&&P.tagName.toUpperCase()=="INPUT"&&D()}}const j={getFieldsValue:i,setFieldsValue:S,resetFields:te,updateSchema:u,resetSchema:v,setProps:C,removeSchemaByField:Y,appendSchemaByField:I,clearValidate:t,validateFields:g,validate:o,submit:D,scrollToField:ne};return Ke(()=>{R(),r("register",j)}),E({getBindValue:M,handleToggleAdvanced:B,handleEnterPress:w,formModel:c,defaultValueRef:l,advanceState:d,getRow:$,getProps:a,formElRef:F,getSchema:A,formActionType:j,setFormModel:se,getFormClass:O,getFormActionBindProps:X(()=>E(E({},a.value),d)),fieldsIsAdvancedMap:N},j)}});function At(e,r,s,c,h,d){const l=_("FormItem"),f=_("FormAction"),p=_("Row"),m=_("Form");return q(),K(m,x(e.getBindValue,{class:e.getFormClass,ref:"formElRef",model:e.formModel,onKeypress:Ge(e.handleEnterPress,["enter"])}),{default:k(()=>[ce(p,re(ue(e.getRow)),{default:k(()=>[W(e.$slots,"formHeader"),(q(!0),Je(Qe,null,de(e.getSchema,F=>(q(),K(l,{key:F.field,isAdvanced:e.fieldsIsAdvancedMap[F.field],tableAction:e.tableAction,formActionType:e.formActionType,schema:F,formProps:e.getProps,allDefaultValues:e.defaultValueRef,formModel:e.formModel,setFormModel:e.setFormModel},be({_:2},[de(Object.keys(e.$slots),b=>({name:b,fn:k(a=>[W(e.$slots,b,re(ue(a||{})))])}))]),1032,["isAdvanced","tableAction","formActionType","schema","formProps","allDefaultValues","formModel","setFormModel"]))),128)),ce(f,x(e.getFormActionBindProps,{onToggleAdvanced:e.handleToggleAdvanced}),be({_:2},[de(["resetBefore","submitBefore","advanceBefore","advanceAfter"],F=>({name:F,fn:k(b=>[W(e.$slots,F,re(ue(b||{})))])}))]),1040,["onToggleAdvanced"]),W(e.$slots,"formFooter")]),_:3},16)]),_:3},16,["class","model","onKeypress"])}const Tt=Ve(ht,[["render",At]]);export{Tt as B};
