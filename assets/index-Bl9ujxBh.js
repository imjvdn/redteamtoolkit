const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Dashboard-fPqGn_3u.js","assets/vendor-Dtv5IgXk.js","assets/Login-D53IUGBs.js","assets/Recon-CFnDEF--.js","assets/dialog-D_wgYfpb.js","assets/formatDistanceToNow-aDLjEcHe.js","assets/alert-triangle-BcON6RyK.js","assets/plus-DLF7sVcr.js","assets/BruteForce-S2Khbfdc.js","assets/Reports-DESgB3eQ.js","assets/Monitoring-FUElKE9C.js","assets/Settings-iFcEE_Sp.js"])))=>i.map(i=>d[i]);
import{r as g,a as M,N as z,g as q,m as x,O as U,H,R as W,b as v,c as K}from"./vendor-Dtv5IgXk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(n){if(n.ep)return;n.ep=!0;const a=o(n);fetch(n.href,a)}})();var D={exports:{}},_={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z=g,J=Symbol.for("react.element"),Y=Symbol.for("react.fragment"),G=Object.prototype.hasOwnProperty,Q=Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,X={key:!0,ref:!0,__self:!0,__source:!0};function L(e,t,o){var s,n={},a=null,i=null;o!==void 0&&(a=""+o),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(s in t)G.call(t,s)&&!X.hasOwnProperty(s)&&(n[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)n[s]===void 0&&(n[s]=t[s]);return{$$typeof:J,type:e,key:a,ref:i,props:n,_owner:Q.current}}_.Fragment=Y;_.jsx=L;_.jsxs=L;D.exports=_;var r=D.exports,P,k=M;P=k.createRoot,k.hydrateRoot;const ee="modulepreload",te=function(e){return"/redteamtoolkit/"+e},R={},j=function(t,o,s){let n=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),u=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.allSettled(o.map(c=>{if(c=te(c),c in R)return;R[c]=!0;const m=c.endsWith(".css"),d=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${d}`))return;const l=document.createElement("link");if(l.rel=m?"stylesheet":ee,m||(l.as="script"),l.crossOrigin="",l.href=c,u&&l.setAttribute("nonce",u),document.head.appendChild(l),m)return new Promise((f,h)=>{l.addEventListener("load",f),l.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(i){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=i,window.dispatchEvent(u),!u.defaultPrevented)throw i}return n.then(i=>{for(const u of i||[])u.status==="rejected"&&a(u.reason);return t().catch(a)})};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var re={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),p=(e,t)=>{const o=g.forwardRef(({color:s="currentColor",size:n=24,strokeWidth:a=2,absoluteStrokeWidth:i,className:u="",children:c,...m},d)=>g.createElement("svg",{ref:d,...re,width:n,height:n,stroke:s,strokeWidth:i?Number(a)*24/Number(n):a,className:["lucide",`lucide-${ne(e)}`,u].join(" "),...m},[...t.map(([l,f])=>g.createElement(l,f)),...Array.isArray(c)?c:[c]]));return o.displayName=`${e}`,o};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=p("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=p("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=p("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=p("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ce=p("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=p("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=p("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=p("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=p("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const he=p("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);function $(e){var t,o,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(o=$(e[t]))&&(s&&(s+=" "),s+=o)}else for(o in e)e[o]&&(s&&(s+=" "),s+=o);return s}function me(){for(var e,t,o=0,s="",n=arguments.length;o<n;o++)(e=arguments[o])&&(t=$(e))&&(s&&(s+=" "),s+=t);return s}const pe=[{name:"Dashboard",href:"/",icon:ce},{name:"Reconnaissance",href:"/recon",icon:ae},{name:"Brute Force",href:"/bruteforce",icon:le},{name:"Security Monitoring",href:"/monitoring",icon:oe},{name:"Reports",href:"/reports",icon:ie},{name:"Settings",href:"/settings",icon:de}];function xe(){return r.jsxs("div",{className:"flex h-full w-64 flex-col bg-[#181818] border-r border-gray-800",children:[r.jsxs("div",{className:"flex h-16 items-center px-4",children:[r.jsx(fe,{className:"h-8 w-8 text-[#8B5CF6]"}),r.jsx("span",{className:"ml-2 text-xl font-bold text-white",children:"Red Team Toolkit"})]}),r.jsx("nav",{className:"flex-1 space-y-1 px-2 py-4",children:pe.map(e=>r.jsxs(z,{to:e.href,className:({isActive:t})=>me("group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors",t?"bg-[#8B5CF6]/10 text-[#8B5CF6]":"text-gray-300 hover:bg-gray-800 hover:text-white"),children:[r.jsx(e.icon,{className:"mr-3 h-5 w-5 flex-shrink-0","aria-hidden":"true"}),e.name]},e.name))})]})}const ye={BASE_URL:"/redteamtoolkit/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},N=e=>{let t;const o=new Set,s=(d,l)=>{const f=typeof d=="function"?d(t):d;if(!Object.is(f,t)){const h=t;t=l??(typeof f!="object"||f===null)?f:Object.assign({},t,f),o.forEach(y=>y(t,h))}},n=()=>t,c={setState:s,getState:n,getInitialState:()=>m,subscribe:d=>(o.add(d),()=>o.delete(d)),destroy:()=>{(ye?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),o.clear()}},m=t=e(s,n,c);return c},ve=e=>e?N(e):N;var C={exports:{}},V={},I={exports:{}},T={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=g;function ge(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var je=typeof Object.is=="function"?Object.is:ge,be=b.useState,_e=b.useEffect,Ee=b.useLayoutEffect,Se=b.useDebugValue;function we(e,t){var o=t(),s=be({inst:{value:o,getSnapshot:t}}),n=s[0].inst,a=s[1];return Ee(function(){n.value=o,n.getSnapshot=t,S(n)&&a({inst:n})},[e,o,t]),_e(function(){return S(n)&&a({inst:n}),e(function(){S(n)&&a({inst:n})})},[e]),Se(o),o}function S(e){var t=e.getSnapshot;e=e.value;try{var o=t();return!je(e,o)}catch{return!0}}function ke(e,t){return t()}var Re=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ke:we;T.useSyncExternalStore=b.useSyncExternalStore!==void 0?b.useSyncExternalStore:Re;I.exports=T;var Ne=I.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E=g,Oe=Ne;function Ae(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:Ae,Le=Oe.useSyncExternalStore,Pe=E.useRef,$e=E.useEffect,Ce=E.useMemo,Ve=E.useDebugValue;V.useSyncExternalStoreWithSelector=function(e,t,o,s,n){var a=Pe(null);if(a.current===null){var i={hasValue:!1,value:null};a.current=i}else i=a.current;a=Ce(function(){function c(h){if(!m){if(m=!0,d=h,h=s(h),n!==void 0&&i.hasValue){var y=i.value;if(n(y,h))return l=y}return l=h}if(y=l,De(d,h))return y;var w=s(h);return n!==void 0&&n(y,w)?y:(d=h,l=w)}var m=!1,d,l,f=o===void 0?null:o;return[function(){return c(t())},f===null?void 0:function(){return c(f())}]},[t,o,s,n]);var u=Le(e,a[0],a[1]);return $e(function(){i.hasValue=!0,i.value=u},[u]),Ve(u),u};C.exports=V;var Ie=C.exports;const Te=q(Ie),B={BASE_URL:"/redteamtoolkit/",DEV:!1,MODE:"production",PROD:!0,SSR:!1},{useDebugValue:Be}=x,{useSyncExternalStoreWithSelector:Fe}=Te;let O=!1;const Me=e=>e;function ze(e,t=Me,o){(B?"production":void 0)!=="production"&&o&&!O&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),O=!0);const s=Fe(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,o);return Be(s),s}const A=e=>{(B?"production":void 0)!=="production"&&typeof e!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const t=typeof e=="function"?ve(e):e,o=(s,n)=>ze(t,s,n);return Object.assign(o,t),o},qe=e=>e?A(e):A,F=qe(e=>({user:null,isAuthenticated:!1,login:async(t,o)=>{if(t==="demo@example.com"&&o==="demo")e({user:{id:"1",email:t,name:"Demo User",role:"analyst"},isAuthenticated:!0});else throw new Error("Invalid credentials")},logout:()=>{e({user:null,isAuthenticated:!1})}}));function Ue(){const{user:e,logout:t}=F();return r.jsx("div",{className:"h-16 bg-[#181818] border-b border-gray-800",children:r.jsxs("div",{className:"h-full px-4 flex items-center justify-between",children:[r.jsx("div",{className:"flex items-center flex-1",children:r.jsxs("div",{className:"max-w-lg w-full lg:max-w-xs relative",children:[r.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:r.jsx(ue,{className:"h-5 w-5 text-gray-400","aria-hidden":"true"})}),r.jsx("input",{type:"text",className:"block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md leading-5 bg-gray-900 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-gray-800 focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] sm:text-sm",placeholder:"Search..."})]})}),r.jsxs("div",{className:"ml-4 flex items-center space-x-4",children:[r.jsx("button",{className:"p-1 rounded-full text-gray-400 hover:text-white focus:outline-none",children:r.jsx(se,{className:"h-6 w-6"})}),r.jsx("div",{className:"relative",children:r.jsxs("button",{className:"flex items-center space-x-2 text-sm text-gray-300 hover:text-white",children:[r.jsx(he,{className:"h-8 w-8 rounded-full p-1 border border-gray-700"}),r.jsx("span",{children:(e==null?void 0:e.name)||"User"})]})})]})]})})}function He(){return r.jsxs("div",{className:"h-screen flex bg-[#181818]",children:[r.jsx(xe,{}),r.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[r.jsx(Ue,{}),r.jsx("main",{className:"flex-1 overflow-auto bg-[#181818]",children:r.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8",children:r.jsx(U,{})})})]})]})}const We=x.lazy(()=>j(()=>import("./Dashboard-fPqGn_3u.js"),__vite__mapDeps([0,1]))),Ke=x.lazy(()=>j(()=>import("./Login-D53IUGBs.js"),__vite__mapDeps([2,1]))),Ze=x.lazy(()=>j(()=>import("./Recon-CFnDEF--.js"),__vite__mapDeps([3,1,4,5,6,7]))),Je=x.lazy(()=>j(()=>import("./BruteForce-S2Khbfdc.js"),__vite__mapDeps([8,1,4,6,5,7]))),Ye=x.lazy(()=>j(()=>import("./Reports-DESgB3eQ.js"),__vite__mapDeps([9,7,5,1]))),Ge=x.lazy(()=>j(()=>import("./Monitoring-FUElKE9C.js"),__vite__mapDeps([10,1,6,5]))),Qe=x.lazy(()=>j(()=>import("./Settings-iFcEE_Sp.js"),__vite__mapDeps([11,1])));function Xe({children:e}){const{isAuthenticated:t}=F();return t?r.jsx(r.Fragment,{children:e}):r.jsx(K,{to:"/login"})}function et(){return r.jsx(H,{children:r.jsx(x.Suspense,{fallback:r.jsx("div",{className:"h-screen w-screen flex items-center justify-center bg-[#181818]",children:r.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-t-2 border-[#8B5CF6]"})}),children:r.jsxs(W,{children:[r.jsx(v,{path:"/login",element:r.jsx(Ke,{})}),r.jsxs(v,{path:"/",element:r.jsx(Xe,{children:r.jsx(He,{})}),children:[r.jsx(v,{index:!0,element:r.jsx(We,{})}),r.jsx(v,{path:"recon",element:r.jsx(Ze,{})}),r.jsx(v,{path:"bruteforce",element:r.jsx(Je,{})}),r.jsx(v,{path:"monitoring",element:r.jsx(Ge,{})}),r.jsx(v,{path:"reports",element:r.jsx(Ye,{})}),r.jsx(v,{path:"settings",element:r.jsx(Qe,{})})]})]})})})}P(document.getElementById("root")).render(r.jsx(g.StrictMode,{children:r.jsx(et,{})}));export{oe as A,se as B,ae as D,ie as F,fe as S,me as a,p as b,qe as c,ue as d,r as j,F as u};
