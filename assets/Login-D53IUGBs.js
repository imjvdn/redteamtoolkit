import{u as x,j as e,S as m}from"./index-Bl9ujxBh.js";import{r as s,u as p}from"./vendor-Dtv5IgXk.js";function y(){const[r,o]=s.useState(""),[a,i]=s.useState(""),[n,l]=s.useState(""),c=p(),d=x(t=>t.login),u=async t=>{t.preventDefault();try{await d(r,a),c("/")}catch{l("Invalid credentials")}};return e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-[#181818] py-12 px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"max-w-md w-full space-y-8",children:[e.jsxs("div",{children:[e.jsx("div",{className:"flex justify-center",children:e.jsx(m,{className:"h-12 w-12 text-[#8B5CF6]"})}),e.jsx("h2",{className:"mt-6 text-center text-3xl font-extrabold text-white",children:"Red Team Toolkit"}),e.jsx("p",{className:"mt-2 text-center text-sm text-gray-400",children:"Sign in to access the security dashboard"})]}),e.jsxs("form",{className:"mt-8 space-y-6",onSubmit:u,children:[e.jsxs("div",{className:"rounded-md shadow-sm -space-y-px",children:[e.jsx("div",{children:e.jsx("input",{type:"email",required:!0,value:r,onChange:t=>o(t.target.value),className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white rounded-t-md focus:outline-none focus:ring-[#8B5CF6] focus:border-[#8B5CF6] focus:z-10 sm:text-sm bg-gray-900",placeholder:"Email address"})}),e.jsx("div",{children:e.jsx("input",{type:"password",required:!0,value:a,onChange:t=>i(t.target.value),className:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-700 placeholder-gray-500 text-white rounded-b-md focus:outline-none focus:ring-[#8B5CF6] focus:border-[#8B5CF6] focus:z-10 sm:text-sm bg-gray-900",placeholder:"Password"})})]}),n&&e.jsx("div",{className:"text-red-500 text-sm text-center",children:n}),e.jsx("div",{children:e.jsx("button",{type:"submit",className:"group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#8B5CF6] hover:bg-[#7C3AED] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B5CF6]",children:"Sign in"})})]})]})})}export{y as default};