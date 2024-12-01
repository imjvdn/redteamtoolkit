import{c as o,r as d,j as e,b as u,A as h}from"./index-ZoobU0rr.js";import{_ as i,X as f,a as l,C as j}from"./dialog-DyZn_ADX.js";import{f as g}from"./formatDistanceToNow-aDLjEcHe.js";import{A as p}from"./alert-triangle-CHs9pMze.js";import{P as N}from"./plus-C_SrRkkh.js";const x=o(s=>({targets:[],activeScans:0,addTarget:t=>{const a={id:crypto.randomUUID(),domain:t,status:"pending",createdAt:new Date().toISOString(),findings:[]};s(n=>({targets:[a,...n.targets],activeScans:n.activeScans+1}))},removeTarget:t=>{s(a=>({targets:a.targets.filter(n=>n.id!==t)}))},updateTarget:(t,a)=>{s(n=>({targets:n.targets.map(r=>r.id===t?{...r,...a}:r)}))}}));function y({isOpen:s,onClose:t}){const[a,n]=d.useState(""),r=x(c=>c.addTarget),m=c=>{c.preventDefault(),a.trim()&&(r(a.trim()),n(""),t())};return e.jsxs(i,{open:s,onClose:t,className:"relative z-50",children:[e.jsx("div",{className:"fixed inset-0 bg-black/30","aria-hidden":"true"}),e.jsx("div",{className:"fixed inset-0 flex items-center justify-center p-4",children:e.jsxs(i.Panel,{className:"mx-auto max-w-md rounded-lg bg-gray-900 p-6 border border-gray-800",children:[e.jsxs("div",{className:"flex items-center justify-between mb-4",children:[e.jsx(i.Title,{className:"text-lg font-medium text-white",children:"New Reconnaissance Scan"}),e.jsx("button",{onClick:t,className:"text-gray-400 hover:text-white",children:e.jsx(f,{className:"h-5 w-5"})})]}),e.jsxs("form",{onSubmit:m,className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"domain",className:"block text-sm font-medium text-gray-300",children:"Target Domain"}),e.jsx("input",{type:"text",id:"domain",value:a,onChange:c=>n(c.target.value),className:"mt-1 block w-full rounded-md border border-gray-700 bg-gray-800 text-white px-3 py-2 text-sm focus:border-[#8B5CF6] focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]",placeholder:"example.com"})]}),e.jsxs("div",{className:"flex justify-end space-x-3",children:[e.jsx("button",{type:"button",onClick:t,className:"px-4 py-2 text-sm text-gray-300 hover:text-white",children:"Cancel"}),e.jsx("button",{type:"submit",className:"px-4 py-2 bg-[#8B5CF6] text-white rounded-md hover:bg-[#7C3AED] text-sm",children:"Start Scan"})]})]})]})})]})}function b({target:s,onRemove:t}){const a=()=>{switch(s.status){case"scanning":return e.jsx(h,{className:"h-5 w-5 text-[#3B82F6] animate-pulse"});case"completed":return e.jsx(j,{className:"h-5 w-5 text-green-500"});case"failed":return e.jsx(l,{className:"h-5 w-5 text-red-500"});default:return e.jsx(p,{className:"h-5 w-5 text-yellow-500"})}},n=s.findings.filter(r=>r.severity==="critical").length;return e.jsxs("div",{className:"bg-gray-900 rounded-lg border border-gray-800 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsxs("div",{className:"flex items-center space-x-2",children:[a(),e.jsx("h3",{className:"text-white font-medium",children:s.domain})]}),e.jsx("button",{onClick:()=>t(s.id),className:"text-gray-400 hover:text-white",children:e.jsx(l,{className:"h-5 w-5"})})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-gray-400",children:"Status"}),e.jsx("span",{className:u("capitalize",s.status==="scanning"&&"text-[#3B82F6]",s.status==="completed"&&"text-green-500",s.status==="failed"&&"text-red-500",s.status==="pending"&&"text-yellow-500"),children:s.status})]}),e.jsxs("div",{className:"flex justify-between text-sm",children:[e.jsx("span",{className:"text-gray-400",children:"Started"}),e.jsx("span",{className:"text-white",children:g(new Date(s.createdAt),{addSuffix:!0})})]}),n>0&&e.jsxs("div",{className:"mt-3 flex items-center justify-between text-sm",children:[e.jsx("span",{className:"text-red-500",children:"Critical Findings"}),e.jsx("span",{className:"text-red-500 font-medium",children:n})]})]})]})}function D(){const[s,t]=d.useState(!1),{targets:a,removeTarget:n}=x();return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-white",children:"Reconnaissance"}),e.jsx("p",{className:"text-gray-400 mt-1",children:"Scan and analyze target domains for security assessment"})]}),e.jsxs("button",{onClick:()=>t(!0),className:"flex items-center space-x-2 px-4 py-2 bg-[#8B5CF6] text-white rounded-md hover:bg-[#7C3AED]",children:[e.jsx(N,{className:"h-5 w-5"}),e.jsx("span",{children:"New Scan"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[a.map(r=>e.jsx(b,{target:r,onRemove:n},r.id)),a.length===0&&e.jsx("div",{className:"col-span-full flex flex-col items-center justify-center py-12 bg-gray-900 rounded-lg border border-gray-800",children:e.jsxs("div",{className:"text-gray-400 text-center",children:[e.jsx("p",{className:"mt-2",children:"No reconnaissance scans yet"}),e.jsx("button",{onClick:()=>t(!0),className:"mt-4 text-[#8B5CF6] hover:text-[#7C3AED]",children:"Start your first scan"})]})})]}),e.jsx(y,{isOpen:s,onClose:()=>t(!1)})]})}export{D as default};
//# sourceMappingURL=Recon-Bhg64fGz.js.map
