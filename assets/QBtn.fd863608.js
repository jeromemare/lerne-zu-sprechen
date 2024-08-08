import{c as o,k as V,h as v,g as F,Z as de,U as D,$ as fe,a0 as ve,S as ae,a1 as ge,r as U,m as me,P as be,a2 as he,L as P,O as ye,q as ke}from"./index.d9befba2.js";import{h as pe,b as z,c as xe}from"./dom.617feebb.js";const Q={xs:18,sm:24,md:32,lg:38,xl:46},re={size:String};function le(e,t=Q){return o(()=>e.size!==void 0?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null)}const H="0 0 24 24",W=e=>e,N=e=>`ionicons ${e}`,ue={"mdi-":e=>`mdi ${e}`,"icon-":W,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":N,"ion-ios":N,"ion-logo":N,"iconfont ":W,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},ie={o_:"-outlined",r_:"-round",s_:"-sharp"},se={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},qe=new RegExp("^("+Object.keys(ue).join("|")+")"),$e=new RegExp("^("+Object.keys(ie).join("|")+")"),X=new RegExp("^("+Object.keys(se).join("|")+")"),Ee=/^[Mm]\s?[-+]?\.?\d/,Se=/^img:/,we=/^svguse:/,Re=/^ion-/,Le=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var Y=V({name:"QIcon",props:{...re,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:l}}=F(),n=le(e),i=o(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),f=o(()=>{let c,r=e.name;if(r==="none"||!r)return{none:!0};if(l.iconMapFn!==null){const s=l.iconMapFn(r);if(s!==void 0)if(s.icon!==void 0){if(r=s.icon,r==="none"||!r)return{none:!0}}else return{cls:s.cls,content:s.content!==void 0?s.content:" "}}if(Ee.test(r)===!0){const[s,y=H]=r.split("|");return{svg:!0,viewBox:y,nodes:s.split("&&").map(u=>{const[k,b,p]=u.split("@@");return v("path",{style:b,d:k,transform:p})})}}if(Se.test(r)===!0)return{img:!0,src:r.substring(4)};if(we.test(r)===!0){const[s,y=H]=r.split("|");return{svguse:!0,src:s.substring(7),viewBox:y}}let q=" ";const h=r.match(qe);if(h!==null)c=ue[h[1]](r);else if(Le.test(r)===!0)c=r;else if(Re.test(r)===!0)c=`ionicons ion-${l.platform.is.ios===!0?"ios":"md"}${r.substring(3)}`;else if(X.test(r)===!0){c="notranslate material-symbols";const s=r.match(X);s!==null&&(r=r.substring(6),c+=se[s[1]]),q=r}else{c="notranslate material-icons";const s=r.match($e);s!==null&&(r=r.substring(2),c+=ie[s[1]]),q=r}return{cls:c,content:q}});return()=>{const c={class:i.value,style:n.value,"aria-hidden":"true",role:"presentation"};return f.value.none===!0?v(e.tag,c,pe(t.default)):f.value.img===!0?v(e.tag,c,z(t.default,[v("img",{src:f.value.src})])):f.value.svg===!0?v(e.tag,c,z(t.default,[v("svg",{viewBox:f.value.viewBox||"0 0 24 24"},f.value.nodes)])):f.value.svguse===!0?v(e.tag,c,z(t.default,[v("svg",{viewBox:f.value.viewBox},[v("use",{"xlink:href":f.value.src})])])):(f.value.cls!==void 0&&(c.class+=" "+f.value.cls),v(e.tag,c,z(t.default,[f.value.content])))}}});const Be={size:{type:[String,Number],default:"1em"},color:String};function Ce(e){return{cSize:o(()=>e.size in Q?`${Q[e.size]}px`:e.size),classes:o(()=>"q-spinner"+(e.color?` text-${e.color}`:""))}}var _e=V({name:"QSpinner",props:{...Be,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:l}=Ce(e);return()=>v("svg",{class:l.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[v("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}});function Pe(e,t=250){let l=!1,n;return function(){return l===!1&&(l=!0,setTimeout(()=>{l=!1},t),n=e.apply(this,arguments)),n}}function Z(e,t,l,n){l.modifiers.stop===!0&&ae(e);const i=l.modifiers.color;let f=l.modifiers.center;f=f===!0||n===!0;const c=document.createElement("span"),r=document.createElement("span"),q=ge(e),{left:h,top:s,width:y,height:u}=t.getBoundingClientRect(),k=Math.sqrt(y*y+u*u),b=k/2,p=`${(y-k)/2}px`,d=f?p:`${q.left-h-b}px`,x=`${(u-k)/2}px`,_=f?x:`${q.top-s-b}px`;r.className="q-ripple__inner",xe(r,{height:`${k}px`,width:`${k}px`,transform:`translate3d(${d},${_},0) scale3d(.2,.2,1)`,opacity:0}),c.className=`q-ripple${i?" text-"+i:""}`,c.setAttribute("dir","ltr"),c.appendChild(r),t.appendChild(c);const B=()=>{c.remove(),clearTimeout(C)};l.abort.push(B);let C=setTimeout(()=>{r.classList.add("q-ripple__inner--enter"),r.style.transform=`translate3d(${p},${x},0) scale3d(1,1,1)`,r.style.opacity=.2,C=setTimeout(()=>{r.classList.remove("q-ripple__inner--enter"),r.classList.add("q-ripple__inner--leave"),r.style.opacity=0,C=setTimeout(()=>{c.remove(),l.abort.splice(l.abort.indexOf(B),1)},275)},250)},50)}function G(e,{modifiers:t,value:l,arg:n}){const i=Object.assign({},e.cfg.ripple,t,l);e.modifiers={early:i.early===!0,stop:i.stop===!0,center:i.center===!0,color:i.color||n,keyCodes:[].concat(i.keyCodes||13)}}var Te=de({name:"ripple",beforeMount(e,t){const l=t.instance.$.appContext.config.globalProperties.$q.config||{};if(l.ripple===!1)return;const n={cfg:l,enabled:t.value!==!1,modifiers:{},abort:[],start(i){n.enabled===!0&&i.qSkipRipple!==!0&&i.type===(n.modifiers.early===!0?"pointerdown":"click")&&Z(i,e,n,i.qKeyEvent===!0)},keystart:Pe(i=>{n.enabled===!0&&i.qSkipRipple!==!0&&D(i,n.modifiers.keyCodes)===!0&&i.type===`key${n.modifiers.early===!0?"down":"up"}`&&Z(i,e,n,!0)},300)};G(n,t),e.__qripple=n,fe(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const l=e.__qripple;l!==void 0&&(l.enabled=t.value!==!1,l.enabled===!0&&Object(t.value)===t.value&&G(l,t))}},beforeUnmount(e){const t=e.__qripple;t!==void 0&&(t.abort.forEach(l=>{l()}),ve(t,"main"),delete e._qripple)}});const oe={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},Oe=Object.keys(oe),Ae={align:{type:String,validator:e=>Oe.includes(e)}};function Me(e){return o(()=>{const t=e.align===void 0?e.vertical===!0?"stretch":"left":e.align;return`${e.vertical===!0?"items":"justify"}-${oe[t]}`})}function je(e){return e.appContext.config.globalProperties.$router!==void 0}function J(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function ee(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function ze(e,t){for(const l in t){const n=t[l],i=e[l];if(typeof n=="string"){if(n!==i)return!1}else if(Array.isArray(i)===!1||i.length!==n.length||n.some((f,c)=>f!==i[c]))return!1}return!0}function te(e,t){return Array.isArray(t)===!0?e.length===t.length&&e.every((l,n)=>l===t[n]):e.length===1&&e[0]===t}function Ke(e,t){return Array.isArray(e)===!0?te(e,t):Array.isArray(t)===!0?te(t,e):e===t}function Ie(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const l in e)if(Ke(e[l],t[l])===!1)return!1;return!0}const ce={to:[String,Object],replace:Boolean,href:String,target:String,disable:Boolean},Ge={...ce,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"}};function Ne({fallbackTag:e,useDisableForRouterLinkProps:t=!0}={}){const l=F(),{props:n,proxy:i,emit:f}=l,c=je(l),r=o(()=>n.disable!==!0&&n.href!==void 0),q=t===!0?o(()=>c===!0&&n.disable!==!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""):o(()=>c===!0&&r.value!==!0&&n.to!==void 0&&n.to!==null&&n.to!==""),h=o(()=>q.value===!0?_(n.to):null),s=o(()=>h.value!==null),y=o(()=>r.value===!0||s.value===!0),u=o(()=>n.type==="a"||y.value===!0?"a":n.tag||e||"div"),k=o(()=>r.value===!0?{href:n.href,target:n.target}:s.value===!0?{href:h.value.href,target:n.target}:{}),b=o(()=>{if(s.value===!1)return-1;const{matched:g}=h.value,{length:$}=g,S=g[$-1];if(S===void 0)return-1;const R=i.$route.matched;if(R.length===0)return-1;const L=R.findIndex(ee.bind(null,S));if(L!==-1)return L;const K=J(g[$-2]);return $>1&&J(S)===K&&R[R.length-1].path!==K?R.findIndex(ee.bind(null,g[$-2])):L}),p=o(()=>s.value===!0&&b.value!==-1&&ze(i.$route.params,h.value.params)),d=o(()=>p.value===!0&&b.value===i.$route.matched.length-1&&Ie(i.$route.params,h.value.params)),x=o(()=>s.value===!0?d.value===!0?` ${n.exactActiveClass} ${n.activeClass}`:n.exact===!0?"":p.value===!0?` ${n.activeClass}`:"":"");function _(g){try{return i.$router.resolve(g)}catch{}return null}function B(g,{returnRouterError:$,to:S=n.to,replace:R=n.replace}={}){if(n.disable===!0)return g.preventDefault(),Promise.resolve(!1);if(g.metaKey||g.altKey||g.ctrlKey||g.shiftKey||g.button!==void 0&&g.button!==0||n.target==="_blank")return Promise.resolve(!1);g.preventDefault();const L=i.$router[R===!0?"replace":"push"](S);return $===!0?L:L.then(()=>{}).catch(()=>{})}function C(g){if(s.value===!0){const $=S=>B(g,S);f("click",g,$),g.defaultPrevented!==!0&&$()}else f("click",g)}return{hasRouterLink:s,hasHrefLink:r,hasLink:y,linkTag:u,resolvedLink:h,linkIsActive:p,linkIsExactActive:d,linkClass:x,linkAttrs:k,getLink:_,navigateToRouterLink:B,navigateOnClick:C}}const ne={none:0,xs:4,sm:8,md:16,lg:24,xl:32},De={xs:8,sm:10,md:14,lg:20,xl:24},Qe=["button","submit","reset"],Ve=/[^\s]\/[^\s]/,Fe=["flat","outline","push","unelevated"];function Ue(e,t){return e.flat===!0?"flat":e.outline===!0?"outline":e.push===!0?"push":e.unelevated===!0?"unelevated":t}const He={...re,...ce,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,...Fe.reduce((e,t)=>(e[t]=Boolean)&&e,{}),square:Boolean,rounded:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...Ae.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean},We={...He,round:Boolean};function Xe(e){const t=le(e,De),l=Me(e),{hasRouterLink:n,hasLink:i,linkTag:f,linkAttrs:c,navigateOnClick:r}=Ne({fallbackTag:"button"}),q=o(()=>{const d=e.fab===!1&&e.fabMini===!1?t.value:{};return e.padding!==void 0?Object.assign({},d,{padding:e.padding.split(/\s+/).map(x=>x in ne?ne[x]+"px":x).join(" "),minWidth:"0",minHeight:"0"}):d}),h=o(()=>e.rounded===!0||e.fab===!0||e.fabMini===!0),s=o(()=>e.disable!==!0&&e.loading!==!0),y=o(()=>s.value===!0?e.tabindex||0:-1),u=o(()=>Ue(e,"standard")),k=o(()=>{const d={tabindex:y.value};return i.value===!0?Object.assign(d,c.value):Qe.includes(e.type)===!0&&(d.type=e.type),f.value==="a"?(e.disable===!0?d["aria-disabled"]="true":d.href===void 0&&(d.role="button"),n.value!==!0&&Ve.test(e.type)===!0&&(d.type=e.type)):e.disable===!0&&(d.disabled="",d["aria-disabled"]="true"),e.loading===!0&&e.percentage!==void 0&&Object.assign(d,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),d}),b=o(()=>{let d;e.color!==void 0?e.flat===!0||e.outline===!0?d=`text-${e.textColor||e.color}`:d=`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(d=`text-${e.textColor}`);const x=e.round===!0?"round":`rectangle${h.value===!0?" q-btn--rounded":e.square===!0?" q-btn--square":""}`;return`q-btn--${u.value} q-btn--${x}`+(d!==void 0?" "+d:"")+(s.value===!0?" q-btn--actionable q-focusable q-hoverable":e.disable===!0?" disabled":"")+(e.fab===!0?" q-btn--fab":e.fabMini===!0?" q-btn--fab-mini":"")+(e.noCaps===!0?" q-btn--no-uppercase":"")+(e.dense===!0?" q-btn--dense":"")+(e.stretch===!0?" no-border-radius self-stretch":"")+(e.glossy===!0?" glossy":"")+(e.square?" q-btn--square":"")}),p=o(()=>l.value+(e.stack===!0?" column":" row")+(e.noWrap===!0?" no-wrap text-no-wrap":"")+(e.loading===!0?" q-btn__content--hidden":""));return{classes:b,style:q,innerClasses:p,attributes:k,hasLink:i,linkTag:f,navigateOnClick:r,isActionable:s}}const{passiveCapture:E}=ke;let T=null,O=null,A=null;var Je=V({name:"QBtn",props:{...We,percentage:Number,darkPercentage:Boolean,onTouchstart:[Function,Array]},emits:["click","keydown","mousedown","keyup"],setup(e,{slots:t,emit:l}){const{proxy:n}=F(),{classes:i,style:f,innerClasses:c,attributes:r,hasLink:q,linkTag:h,navigateOnClick:s,isActionable:y}=Xe(e),u=U(null),k=U(null);let b=null,p,d=null;const x=o(()=>e.label!==void 0&&e.label!==null&&e.label!==""),_=o(()=>e.disable===!0||e.ripple===!1?!1:{keyCodes:q.value===!0?[13,32]:[13],...e.ripple===!0?{}:e.ripple}),B=o(()=>({center:e.round})),C=o(()=>{const a=Math.max(0,Math.min(100,e.percentage));return a>0?{transition:"transform 0.6s",transform:`translateX(${a-100}%)`}:{}}),g=o(()=>{if(e.loading===!0)return{onMousedown:j,onTouchstart:j,onClick:j,onKeydown:j,onKeyup:j};if(y.value===!0){const a={onClick:S,onKeydown:R,onMousedown:K};if(n.$q.platform.has.touch===!0){const m=e.onTouchstart!==void 0?"":"Passive";a[`onTouchstart${m}`]=L}return a}return{onClick:P}}),$=o(()=>({ref:u,class:"q-btn q-btn-item non-selectable no-outline "+i.value,style:f.value,...r.value,...g.value}));function S(a){if(u.value!==null){if(a!==void 0){if(a.defaultPrevented===!0)return;const m=document.activeElement;if(e.type==="submit"&&m!==document.body&&u.value.contains(m)===!1&&m.contains(u.value)===!1){u.value.focus();const I=()=>{document.removeEventListener("keydown",P,!0),document.removeEventListener("keyup",I,E),u.value!==null&&u.value.removeEventListener("blur",I,E)};document.addEventListener("keydown",P,!0),document.addEventListener("keyup",I,E),u.value.addEventListener("blur",I,E)}}s(a)}}function R(a){u.value!==null&&(l("keydown",a),D(a,[13,32])===!0&&O!==u.value&&(O!==null&&M(),a.defaultPrevented!==!0&&(u.value.focus(),O=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("keyup",w,!0),u.value.addEventListener("blur",w,E)),P(a)))}function L(a){u.value!==null&&(l("touchstart",a),a.defaultPrevented!==!0&&(T!==u.value&&(T!==null&&M(),T=u.value,b=a.target,b.addEventListener("touchcancel",w,E),b.addEventListener("touchend",w,E)),p=!0,d!==null&&clearTimeout(d),d=setTimeout(()=>{d=null,p=!1},200)))}function K(a){u.value!==null&&(a.qSkipRipple=p===!0,l("mousedown",a),a.defaultPrevented!==!0&&A!==u.value&&(A!==null&&M(),A=u.value,u.value.classList.add("q-btn--active"),document.addEventListener("mouseup",w,E)))}function w(a){if(u.value!==null&&!(a!==void 0&&a.type==="blur"&&document.activeElement===u.value)){if(a!==void 0&&a.type==="keyup"){if(O===u.value&&D(a,[13,32])===!0){const m=new MouseEvent("click",a);m.qKeyEvent=!0,a.defaultPrevented===!0&&ye(m),a.cancelBubble===!0&&ae(m),u.value.dispatchEvent(m),P(a),a.qKeyEvent=!0}l("keyup",a)}M()}}function M(a){const m=k.value;a!==!0&&(T===u.value||A===u.value)&&m!==null&&m!==document.activeElement&&(m.setAttribute("tabindex",-1),m.focus()),T===u.value&&(b!==null&&(b.removeEventListener("touchcancel",w,E),b.removeEventListener("touchend",w,E)),T=b=null),A===u.value&&(document.removeEventListener("mouseup",w,E),A=null),O===u.value&&(document.removeEventListener("keyup",w,!0),u.value!==null&&u.value.removeEventListener("blur",w,E),O=null),u.value!==null&&u.value.classList.remove("q-btn--active")}function j(a){P(a),a.qSkipRipple=!0}return me(()=>{M(!0)}),Object.assign(n,{click:a=>{y.value===!0&&S(a)}}),()=>{let a=[];e.icon!==void 0&&a.push(v(Y,{name:e.icon,left:e.stack!==!0&&x.value===!0,role:"img"})),x.value===!0&&a.push(v("span",{class:"block"},[e.label])),a=z(t.default,a),e.iconRight!==void 0&&e.round===!1&&a.push(v(Y,{name:e.iconRight,right:e.stack!==!0&&x.value===!0,role:"img"}));const m=[v("span",{class:"q-focus-helper",ref:k})];return e.loading===!0&&e.percentage!==void 0&&m.push(v("span",{class:"q-btn__progress absolute-full overflow-hidden"+(e.darkPercentage===!0?" q-btn__progress--dark":"")},[v("span",{class:"q-btn__progress-indicator fit block",style:C.value})])),m.push(v("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+c.value},a)),e.loading!==null&&m.push(v(be,{name:"q-transition--fade"},()=>e.loading===!0?[v("span",{key:"loading",class:"absolute-full flex flex-center"},t.loading!==void 0?t.loading():[v(_e)])]:null)),he(v(h.value,$.value,m),[[Te,_.value,void 0,B.value]])}}});export{Y as Q,_e as a,Ne as b,Je as c,Ge as u};
