import{c as h,j as e,A as g,S as u,d as p,a as y}from"./index-Bl9ujxBh.js";import{r as d}from"./vendor-Dtv5IgXk.js";import{A as j}from"./alert-triangle-BcON6RyK.js";import{f}from"./formatDistanceToNow-aDLjEcHe.js";const v=h(a=>({events:[],addEvent:r=>{const s={id:crypto.randomUUID(),timestamp:new Date().toISOString(),...r};a(i=>({events:[s,...i.events]}))},updateEventStatus:(r,s)=>{a(i=>({events:i.events.map(l=>l.id===r?{...l,status:s}:l)}))},removeEvent:r=>{a(s=>({events:s.events.filter(i=>i.id!==r)}))}}));function C(){const{events:a,updateEventStatus:r}=v(),[s,i]=d.useState(""),[l,o]=d.useState("all"),c=a.filter(t=>{const n=t.description.toLowerCase().includes(s.toLowerCase())||t.source.toLowerCase().includes(s.toLowerCase()),m=l==="all"||t.status===l;return n&&m}),x=t=>{switch(t){case"critical":return"text-red-500";case"high":return"text-orange-500";case"medium":return"text-yellow-500";case"low":return"text-green-500";default:return"text-gray-500"}};return e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{children:[e.jsx("h1",{className:"text-2xl font-bold text-white",children:"Security Monitoring"}),e.jsx("p",{className:"text-gray-400 mt-1",children:"Monitor and respond to security events in real-time"})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-gray-900 p-6 rounded-lg border border-gray-800",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-lg font-medium text-white",children:"Active Alerts"}),e.jsx(j,{className:"h-6 w-6 text-[#8B5CF6]"})]}),e.jsx("p",{className:"mt-2 text-3xl font-bold text-white",children:a.filter(t=>t.status==="new").length}),e.jsx("p",{className:"text-sm text-gray-400",children:"Requiring attention"})]}),e.jsxs("div",{className:"bg-gray-900 p-6 rounded-lg border border-gray-800",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-lg font-medium text-white",children:"Under Investigation"}),e.jsx(g,{className:"h-6 w-6 text-[#3B82F6]"})]}),e.jsx("p",{className:"mt-2 text-3xl font-bold text-white",children:a.filter(t=>t.status==="investigating").length}),e.jsx("p",{className:"text-sm text-gray-400",children:"Being analyzed"})]}),e.jsxs("div",{className:"bg-gray-900 p-6 rounded-lg border border-gray-800",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-lg font-medium text-white",children:"Resolved"}),e.jsx(u,{className:"h-6 w-6 text-green-500"})]}),e.jsx("p",{className:"mt-2 text-3xl font-bold text-white",children:a.filter(t=>t.status==="resolved").length}),e.jsx("p",{className:"text-sm text-gray-400",children:"Successfully handled"})]})]}),e.jsxs("div",{className:"bg-gray-900 rounded-lg border border-gray-800",children:[e.jsx("div",{className:"p-4 border-b border-gray-800",children:e.jsxs("div",{className:"flex flex-col sm:flex-row gap-4",children:[e.jsxs("div",{className:"flex-1 relative",children:[e.jsx("div",{className:"absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none",children:e.jsx(p,{className:"h-5 w-5 text-gray-400"})}),e.jsx("input",{type:"text",value:s,onChange:t=>i(t.target.value),className:"block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md leading-5 bg-gray-800 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-gray-700 focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] sm:text-sm",placeholder:"Search events..."})]}),e.jsxs("select",{value:l,onChange:t=>o(t.target.value),className:"block w-full sm:w-48 px-3 py-2 border border-gray-700 rounded-md leading-5 bg-gray-800 text-gray-300 focus:outline-none focus:bg-gray-700 focus:border-[#8B5CF6] focus:ring-1 focus:ring-[#8B5CF6] sm:text-sm",children:[e.jsx("option",{value:"all",children:"All Status"}),e.jsx("option",{value:"new",children:"New"}),e.jsx("option",{value:"investigating",children:"Investigating"}),e.jsx("option",{value:"resolved",children:"Resolved"})]})]})}),e.jsxs("div",{className:"overflow-x-auto",children:[e.jsxs("table",{className:"min-w-full divide-y divide-gray-800",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider",children:"Event"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider",children:"Source"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider",children:"Severity"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider",children:"Status"}),e.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider",children:"Time"}),e.jsx("th",{className:"px-6 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider",children:"Actions"})]})}),e.jsx("tbody",{className:"divide-y divide-gray-800",children:c.map(t=>e.jsxs("tr",{children:[e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"text-white",children:t.description})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:"text-gray-300",children:t.source})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsx("span",{className:y("capitalize",x(t.severity)),children:t.severity})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:e.jsxs("select",{value:t.status,onChange:n=>r(t.id,n.target.value),className:"block w-full px-2 py-1 text-sm border border-gray-700 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#8B5CF6]",children:[e.jsx("option",{value:"new",children:"New"}),e.jsx("option",{value:"investigating",children:"Investigating"}),e.jsx("option",{value:"resolved",children:"Resolved"})]})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-gray-300",children:f(new Date(t.timestamp),{addSuffix:!0})}),e.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-right",children:e.jsx("button",{className:"text-[#8B5CF6] hover:text-[#7C3AED] text-sm",onClick:()=>{},children:"View Details"})})]},t.id))})]}),c.length===0&&e.jsx("div",{className:"text-center py-6",children:e.jsx("p",{className:"text-gray-400",children:"No security events found"})})]})]})]})}export{C as default};