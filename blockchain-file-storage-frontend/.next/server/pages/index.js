"use strict";(()=>{var e={};e.id=405,e.ids=[405,888,660],e.modules={370:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{config:()=>g,default:()=>p,getServerSideProps:()=>f,getStaticPaths:()=>x,getStaticProps:()=>h,reportWebVitals:()=>_,routeModule:()=>w,unstable_getServerProps:()=>j,unstable_getServerSideProps:()=>y,unstable_getStaticParams:()=>N,unstable_getStaticPaths:()=>S,unstable_getStaticProps:()=>b});var l=a(93),r=a(244),n=a(323),o=a(209),i=a.n(o),c=a(337),d=a.n(c),u=a(52),m=e([u]);u=(m.then?(await m)():m)[0];let p=(0,n.l)(u,"default"),h=(0,n.l)(u,"getStaticProps"),x=(0,n.l)(u,"getStaticPaths"),f=(0,n.l)(u,"getServerSideProps"),g=(0,n.l)(u,"config"),_=(0,n.l)(u,"reportWebVitals"),b=(0,n.l)(u,"unstable_getStaticProps"),S=(0,n.l)(u,"unstable_getStaticPaths"),N=(0,n.l)(u,"unstable_getStaticParams"),j=(0,n.l)(u,"unstable_getServerProps"),y=(0,n.l)(u,"unstable_getServerSideProps"),w=new l.PagesRouteModule({definition:{kind:r.x.PAGES,page:"/index",pathname:"/",bundlePath:"",filename:""},components:{App:d(),Document:i()},userland:u});s()}catch(e){s(e)}})},52:(e,t,a)=>{a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{default:()=>Home});var l=a(997),r=a(689),n=a(844),o=a(197),i=a(840),c=a.n(i),d=a(103);!function(){var e=Error("Cannot find module '../components/ui'");throw e.code="MODULE_NOT_FOUND",e}();var u=e([n,o]);function Home(){let[e,t]=(0,r.useState)(null),[a,s]=(0,r.useState)(null),[i,u]=(0,r.useState)(null),[m,p]=(0,r.useState)(null),[h,x]=(0,r.useState)([]);(0,r.useEffect)(()=>{checkIfWalletIsConnected()},[]);let checkIfWalletIsConnected=async()=>{try{let e=new(c()),a=await e.connect(),l=new n.ethers.providers.Web3Provider(a),r=await l.listAccounts();s(l),t(r[0])}catch(e){console.log("No wallet connected")}},uploadFileToBlockchain=async()=>{if(!i){alert("Please select a file to upload!");return}let e=new n.ethers.Contract("YOUR_CONTRACT_ADDRESS",d,a.getSigner());try{let t=await e.uploadFile(i.name,m);await t.wait(),x([...h,{name:i.name,hash:m}]),alert("File uploaded successfully!")}catch(e){console.error("Error uploading file:",e)}};return(0,l.jsxs)("div",{className:"min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4",children:[(0,l.jsxs)(o.motion.div,{initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.5},className:"text-center",children:[l.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Blockchain File Storage"}),l.jsx("p",{className:"text-lg mt-4",children:"Upload your files securely to the blockchain"}),e?(0,l.jsxs)("p",{className:"text-green-600 mt-4",children:["Connected: ",e]}):l.jsx(Object(function(){var e=Error("Cannot find module '../components/ui'");throw e.code="MODULE_NOT_FOUND",e}()),{onClick:checkIfWalletIsConnected,className:"mt-4",children:"Connect Wallet"})]}),e&&(0,l.jsxs)(o.motion.div,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.3,duration:.5},className:"w-full max-w-lg mt-6",children:[(0,l.jsxs)(Object(function(){var e=Error("Cannot find module '../components/ui'");throw e.code="MODULE_NOT_FOUND",e}()),{children:[l.jsx("h2",{className:"text-xl font-semibold mb-2",children:"Upload a File"}),l.jsx(Object(function(){var e=Error("Cannot find module '../components/ui'");throw e.code="MODULE_NOT_FOUND",e}()),{type:"file",onChange:e=>{let t=e.target.files[0];u(t);let a=n.ethers.utils.keccak256(n.ethers.utils.toUtf8Bytes(t.name));p(a)},className:"mb-4"}),l.jsx(Object(function(){var e=Error("Cannot find module '../components/ui'");throw e.code="MODULE_NOT_FOUND",e}()),{onClick:uploadFileToBlockchain,children:"Upload to Blockchain"}),i&&(0,l.jsxs)("p",{className:"mt-2 text-gray-700",children:["File selected: ",i.name]})]}),(0,l.jsxs)("div",{className:"mt-8",children:[l.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Uploaded Files"}),l.jsx("ul",{className:"space-y-2",children:h.map((e,t)=>(0,l.jsxs)("li",{className:"bg-white shadow rounded p-4",children:[l.jsx("strong",{children:e.name}),(0,l.jsxs)("p",{className:"text-sm text-gray-600",children:["Hash: ",e.hash]})]},t))})]})]})]})}[n,o]=u.then?(await u)():u,s()}catch(e){s(e)}})},785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},840:e=>{e.exports=require("web3modal")},844:e=>{e.exports=import("ethers")},197:e=>{e.exports=import("framer-motion")},17:e=>{e.exports=require("path")},103:e=>{e.exports=JSON.parse('{"compilerOptions":{"baseUrl":".","paths":{"@/*":["./*"]}},"exclude":["node_modules"]}')}};var t=require("../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),a=t.X(0,[514,209,337,450],()=>__webpack_exec__(370));module.exports=a})();