const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/sideNav-zQ2NtQ9K.js","assets/vendor-BtQO_-CK.js","assets/ProjectMember-Dzn3g_B8.js","assets/styles-sAMJ7xpl.js","assets/TaskCreation-3K7eV4tQ.js","assets/TaskRoutes-CpDOhjap.js","assets/dataRenderLayoutOrg-C-TeOEEx.js","assets/EmployTaskTable-BmwwcJT_.js","assets/dataRenderLayoutAgent-Dp-FLcUH.js","assets/TaskDetails-B19lDABh.js","assets/EmployCompleteTask-C20oX7e6.js","assets/EmployeTable-DlQJ15z4.js","assets/LoginPage-21fC9243.js","assets/TeamLeadTaskTable-B12Gi2v4.js"])))=>i.map(i=>d[i]);
import{r as c,j as p,a as e,D as Y,b as ge,c as q,d as G,B as T,e as J,s as I,f as g,T as M,u as F,g as W,h as v,I as O,R as y,O as K,S as Q,i as fe,G as R,k as be,l as ye,L as ve,m as we,n as Se,o as xe,p as Ce,q as ke,t as Te,F as Z,v as Ee,w as Pe,x as ee,y as re,z as Ae,A as De,C as Ie,M as te,E as j,H as _e,J as ne,K as se,N as je,P as Le,Q as Ne,U as Me,V as $e,W as Oe,X as ze,Y as Re,Z as Be,_ as We,$ as Fe,a0 as Ue,a1 as E,a2 as U,a3 as He,a4 as Ve}from"./vendor-BtQO_-CK.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function l(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(n){if(n.ep)return;n.ep=!0;const t=l(n);fetch(n.href,t)}})();const Ye="modulepreload",qe=function(o){return"/"+o},oe={},D=function(a,l,r){let n=Promise.resolve();if(l&&l.length>0){document.getElementsByTagName("link");const t=document.querySelector("meta[property=csp-nonce]"),i=(t==null?void 0:t.nonce)||(t==null?void 0:t.getAttribute("nonce"));n=Promise.all(l.map(s=>{if(s=qe(s),s in oe)return;oe[s]=!0;const d=s.endsWith(".css"),f=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${f}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":Ye,d||(m.as="script",m.crossOrigin=""),m.href=s,i&&m.setAttribute("nonce",i),document.head.appendChild(m),d)return new Promise((b,h)=>{m.addEventListener("load",b),m.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})}))}return n.then(()=>a()).catch(t=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=t,window.dispatchEvent(i),!i.defaultPrevented)throw t})},ie=c.createContext(null),le=()=>{const o=c.useContext(ie);if(!o)throw new Error("useAppContext must be used within an AppContextProvider");return o},X=({open:o,onClose:a,onConfirm:l})=>p(J,{open:o,onClose:a,children:[e(Y,{children:"Confirm Logout"}),e(q,{children:e(ge,{children:"Are you sure you want to log out?"})}),p(G,{children:[e(T,{onClick:a,color:"primary",children:"Cancel"}),e(T,{onClick:l,color:"secondary",children:"Logout"})]})]}),L="https://subhani.manikanta.info/api/v1",P="faf61ac9d4fdb0000025bdf7375e4fc90200123",$="faf61ac9d4fdb0000025bdf7375e4fc90200456",B="faf61ac9d4fdb0000025bdf7375e4fc90200789",Ge=I(g)({display:"flex",height:"8vh",alignItems:"center",justifyContent:"space-between",background:"#29315a",padding:"0 2rem",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.1)"}),Je=I(M)({fontSize:"24px",color:"white",fontWeight:"bold",textTransform:"uppercase"}),Ke=()=>{v.get(P)?v.remove(P):v.get($)?v.remove($):v.get(B)&&v.remove(B)},Qe=()=>{const[o,a]=c.useState(!1),l=F();return p(Ge,{children:[e(Je,{variant:"h6",children:"Manager"}),e(W,{title:"Logout",children:e(T,{variant:"contained",color:"secondary",onClick:()=>{a(!0)},children:"Logout"})}),e(X,{open:o,onClose:()=>{a(!1)},onConfirm:()=>{Ke(),a(!1),l("/login")}})]})};function Xe(o){const[a,l]=c.useState(1),[r,n]=c.useState(!1),[t,i]=c.useState(!1),[s,d]=c.useState(""),[f,m]=c.useState(5e7),b=e(y.Fragment,{children:e(O,{size:"small","aria-label":"close",color:"inherit",onClick:()=>i(!t),children:e(T,{children:"close"})})}),h=[{id:1,name:"dashboard",path:"/"},{id:2,name:"Users",path:"/admin-dashboard/users"},{id:12,name:"Filed Executive",path:"/admin-dashboard/field-executive"},{id:3,name:"Country Master",path:"/admin-dashboard/country"},{id:4,name:"State Master",path:"/admin-dashboard/state"},{id:5,name:"District Master",path:"/admin-dashboard/district"},{id:6,name:"Parliment Master",path:"/admin-dashboard/parliment"},{id:7,name:"Assembly Master",path:"/admin-dashboard/assembly"},{id:8,name:"Mandal Master",path:"/admin-dashboard/mandal"},{id:9,name:"Polling Station Master",path:"/admin-dashboard/polling-station"},{id:10,name:"Task Creation Master",path:"/admin-dashboard/task-creation"},{id:11,name:"Task Allocation",path:"/admin-dashboard/task-allocation"}];function k(u){const S=["http://localhost:3001","'http://localhost:5173'"];for(const C of S)if(u.startsWith(C)){let x=u.substring(C.length);return x.endsWith("/")&&(x=x.slice(0,-1)),x}return u}return c.useEffect(()=>{const u=window.location.href,S=k(u);console.log(S);const C=h==null?void 0:h.find(x=>{var _;return(_=x==null?void 0:x.path)==null?void 0:_.includes(S)});l(C==null?void 0:C.id)},[]),p(ie.Provider,{value:{currentTab:a,setCurrentTab:l,navigationArray:h,hideDurationNotifier:f,setHiderDurationNotifier:m,notifyMessage:s,setNotifyMessage:d,openNotifer:t,setOpenNotifier:i,showMiniNav:r,setShowMiniNav:n},children:[p(g,{sx:{display:"flex",flexDirection:"column",width:"100%",height:"100vh",overflow:"hidden"},children:[e(Qe,{}),e(g,{sx:{height:"92vh",display:"flex",flexDirection:"column",overflow:"hidden"},children:e(K,{})})]}),e(Q,{open:t,autoHideDuration:f,onClose:()=>i(!t),message:s,action:b})]})}const ce=c.createContext(null),Pt=()=>{const o=c.useContext(ce);if(!o)throw new Error("useAppContext must be used within an AppContextProvider");return o},Ze=I(g)({display:"flex",height:"8vh",alignItems:"center",justifyContent:"space-between",background:"#29315a",padding:"0 2rem",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.1)"}),et=I(M)({fontSize:"24px",color:"white",fontWeight:"bold",textTransform:"uppercase"});I(fe)({color:"white",marginLeft:"0.5rem","& .MuiInputBase-input":{padding:"0.5rem",color:"white"},"& .MuiInputBase-input::placeholder":{color:"#B0B0B0"}});const tt=()=>{const[o,a]=c.useState(!1);return p(Ze,{children:[e(et,{variant:"h6",children:"Team Lead"}),e(g,{children:e(W,{title:"Logout",children:e(T,{variant:"contained",color:"secondary",onClick:()=>a(!0),children:"Logout"})})}),e(X,{open:o,onClose:()=>a(!1),onConfirm:()=>{v.remove($),window.location.href="/login"}})]})};function nt(o){const[a,l]=c.useState(1),[r,n]=c.useState(!1),[t,i]=c.useState(!1),[s,d]=c.useState(""),[f,m]=c.useState(5e7),b=e(y.Fragment,{children:e(O,{size:"small","aria-label":"close",color:"inherit",onClick:()=>i(!t),children:e(T,{children:"close"})})}),h=[{id:1,name:"dashboard",path:"/"},{id:2,name:"Users",path:"/admin-dashboard/users"},{id:12,name:"Filed Executive",path:"/admin-dashboard/field-executive"},{id:3,name:"Country Master",path:"/admin-dashboard/country"},{id:4,name:"State Master",path:"/admin-dashboard/state"},{id:5,name:"District Master",path:"/admin-dashboard/district"},{id:6,name:"Parliment Master",path:"/admin-dashboard/parliment"},{id:7,name:"Assembly Master",path:"/admin-dashboard/assembly"},{id:8,name:"Mandal Master",path:"/admin-dashboard/mandal"},{id:9,name:"Polling Station Master",path:"/admin-dashboard/polling-station"},{id:10,name:"Task Creation Master",path:"/admin-dashboard/task-creation"},{id:11,name:"Task Allocation",path:"/admin-dashboard/task-allocation"}];function k(u){const S=["http://localhost:3001","'http://localhost:5173'"];for(const C of S)if(u.startsWith(C)){let x=u.substring(C.length);return x.endsWith("/")&&(x=x.slice(0,-1)),x}return u}return c.useEffect(()=>{const u=window.location.href,S=k(u);console.log(S);const C=h==null?void 0:h.find(x=>{var _;return(_=x==null?void 0:x.path)==null?void 0:_.includes(S)});l(C==null?void 0:C.id)},[]),p(ce.Provider,{value:{currentTab:a,setCurrentTab:l,navigationArray:h,hideDurationNotifier:f,setHiderDurationNotifier:m,notifyMessage:s,setNotifyMessage:d,openNotifer:t,setOpenNotifier:i,showMiniNav:r,setShowMiniNav:n},children:[p(g,{sx:{display:"flex",flexDirection:"column",width:"100%"},children:[e(tt,{}),e(R,{container:!0,sx:{minHeight:"90vh",background:"#fff",overflow:"auto"},children:e(K,{})})]}),e(Q,{open:t,autoHideDuration:f,onClose:()=>i(!t),message:s,action:b})]})}const de=c.createContext(null),At=()=>{const o=c.useContext(de);if(!o)throw new Error("useAppContext must be used within an AppContextProvider");return o},ot=I(g)({display:"flex",height:"8vh",alignItems:"center",justifyContent:"space-between",background:"#29315a",padding:"0 2rem",boxShadow:"0 4px 10px rgba(0, 0, 0, 0.1)"}),at=I(M)({fontSize:"24px",color:"white",fontWeight:"bold",textTransform:"uppercase"}),rt=()=>{const[o,a]=c.useState(!1);return p(ot,{children:[e(at,{variant:"h6",children:"Employee"}),e(W,{title:"Logout",children:e(T,{variant:"contained",color:"secondary",onClick:()=>a(!0),children:"Logout"})}),e(X,{open:o,onClose:()=>a(!1),onConfirm:()=>{v.remove("employeeCookies"),window.location.href="/login"}})]})};function st(){const[o,a]=c.useState(1),[l,r]=c.useState(!1),[n,t]=c.useState(!1),[i,s]=c.useState(""),[d,f]=c.useState(5e7),m=e(y.Fragment,{children:e(O,{size:"small","aria-label":"close",color:"inherit",onClick:()=>t(!n),children:e(T,{children:"close"})})}),b=[{id:1,name:"Pendingtask",path:"/employee-task/EmployTask"},{id:2,name:"Completedtask",path:"/employee-task/CompletedTask"}];return p(de.Provider,{value:{currentTab:o,setCurrentTab:a,hideDurationNotifier:d,navigationArray:b,setHiderDurationNotifier:f,notifyMessage:i,setNotifyMessage:s,openNotifer:n,setOpenNotifier:t,showMiniNav:l,setShowMiniNav:r},children:[p(g,{sx:{display:"flex",flexDirection:"column",width:"100%",height:"100vh",overflow:"hidden"},children:[e(rt,{}),e(g,{sx:{height:"92vh",display:"flex",flexDirection:"column",overflow:"hidden"},children:e(K,{})})]}),e(Q,{open:n,autoHideDuration:d,onClose:()=>t(!n),message:i,action:m})]})}function V(o){const a=F(),l=be(),{darkMode:r,routes:n,showMiniNav:t,setShowMiniNav:i}=o;ye();const{currentTab:s,setCurrentTab:d}=le();y.useEffect(()=>{if((n==null?void 0:n.length)>0){const b=n.find(h=>l.pathname.startsWith(h.path));b&&b.id!==s&&(d(b.id),localStorage.setItem("currentTab",JSON.stringify(b.id)))}},[l.pathname,n,s,d]);const f=(b,h)=>{localStorage.setItem("currentTab",JSON.stringify(b)),d(b),a(`${h}`)},m=b=>{var u;const{item:h}=b,k=s===(h==null?void 0:h.id)||!s&&((u=n[0])==null?void 0:u.id)===(h==null?void 0:h.id);return p(Se,{onClick:()=>f(h==null?void 0:h.id,h==null?void 0:h.path),component:"li",sx:{width:"100%",background:k?"linear-gradient(to right, #f26729 2%, #333333 1%)":"transparent",clipPath:k?"polygon(0 0, 10% , 20% 100%, 0 100%)":"none",height:"40px",marginBottom:"10px",gap:2,cursor:"pointer",color:k?"grey":"black","&:hover":{backgroundColor:k?"grey":"#333333",color:"black"}},children:[e(g,{sx:{color:k?"white":"inherit",display:"flex",justifyContent:"center",alignItems:"center","&:hover":{color:"white"}},children:h==null?void 0:h.icon}),e(we,{primary:h==null?void 0:h.name,sx:{fontSize:"20px",textTransform:"capitalize",whiteSpace:"nowrap",color:"white",overflow:"hidden",textOverflow:"ellipsis","&:hover":{color:"white"}}})]},h==null?void 0:h.id)};return p(g,{sx:{display:"flex",flexDirection:"column",alignItems:"center",height:"92vh",boxShadow:"0rem 1.25rem 1.6875rem 0rem rgba(0, 0, 0, 0.05)",position:t?"absolute":"relative",zIndex:"1000",width:"100%",backgroundColor:"#0A152F"},children:[t&&e(xe,{sx:{color:"white",alignSelf:"flex-end"},onClick:()=>i(!t)}),e(Ce,{sx:{borderColor:"gray",width:"100%"}}),p(ve,{sx:{width:"100%",height:"100%",gap:2,background:"#29315a"},children:[" ",n==null?void 0:n.map(b=>e(m,{item:b},b.id))]})]})}const it=Object.freeze(Object.defineProperty({__proto__:null,default:V},Symbol.toStringTag,{value:"Module"}));function he({children:o}){const a=[{id:1,name:"Projects",path:"/projects/project-table",icon:e(g,{sx:{display:"flex",alignItems:"center",justifyContent:"center","&:hover svg":{color:"white"}},children:e(Z,{})})},{id:2,name:"Employee",path:"/projects/Employee",icon:e(g,{sx:{display:"flex",alignItems:"center",justifyContent:"center","&:hover svg":{color:"white"}},children:e(Z,{})})}],{darkMode:l,activeTab:r,setActiveTab:n,showMiniNav:t,setShowMiniNav:i}=le(),s=c.useRef(null),[d,f]=c.useState(!1),[m,b]=c.useState(!1),h=()=>{b(!m)};return c.useEffect(()=>{const k=()=>{if(s.current){const{scrollTop:S}=s.current;S>1?(f(!0),console.log(`on:${S}`)):(f(!1),console.log(`off:${S}`))}},u=s.current;return u&&u.addEventListener("scroll",k),()=>{u&&u.removeEventListener("scroll",k)}},[]),p(R,{container:!0,sx:{height:"92vh",background:l?"#010101":"#fff",overflow:"hidden"},children:[e(R,{item:!0,xs:0,md:0,lg:2.5,m:0,p:0,sx:{display:{xs:"none",lg:"block"},height:"auto",overflow:"auto"},children:e(V,{darkMode:l,activeTab:r,setActiveTab:n,routes:a,showMiniNav:t,setShowMiniNav:i})}),p(R,{item:!0,xs:12,md:12,lg:0,sx:{display:{xs:"block",lg:"none"}},children:[e(O,{edge:"start",color:"inherit","aria-label":"menu",onClick:h,sx:{ml:2,alignItems:"center",textAlign:"right"},children:e(ke,{sx:{color:"#29315a"}})}),e(Te,{anchor:"left",open:m,onClose:h,sx:{"& .MuiDrawer-paper":{boxSizing:"border-box",width:250,mt:6}},children:e(V,{darkMode:l,activeTab:r,setActiveTab:n,routes:a,showMiniNav:t,setShowMiniNav:i})})]}),e(R,{item:!0,xs:12,md:12,lg:9.5,sx:{ml:{lg:"auto"},overflowY:"auto",height:"92vh"},ref:s,children:o})]})}const lt=()=>e(he,{children:e("div",{children:e("h1",{children:" Hi hello How are you"})})}),ct=({open:o,onClose:a,onSubmit:l})=>{const r=Ee({initialValues:{projectName:"",Status:""},validationSchema:Pe({projectName:ee().required("Project Name is required"),Status:ee().required("Status is required")}),onSubmit:t=>{l(t),r.resetForm(),a()}}),n=()=>{r.resetForm(),a()};return p(J,{open:o,onClose:n,children:[e(Y,{children:"Add Project"}),e(q,{children:p("form",{onSubmit:r.handleSubmit,children:[e(re,{fullWidth:!0,id:"projectName",name:"projectName",label:"Project Name",value:r.values.projectName,onChange:r.handleChange,error:r.touched.projectName&&!!r.errors.projectName,helperText:r.touched.projectName&&r.errors.projectName,margin:"dense",onBlur:r.handleBlur}),p(Ae,{fullWidth:!0,margin:"dense",error:r.touched.Status&&!!r.errors.Status,children:[e(De,{id:"Status-label",children:"Project Status"}),p(Ie,{labelId:"Status-label",id:"Status",name:"Status",value:r.values.Status,onChange:r.handleChange,label:"Project Status",onBlur:r.handleBlur,children:[e(te,{value:"Active",children:"Active"}),e(te,{value:"Inactive",children:"Inactive"})]}),r.touched.Status&&r.errors.Status&&e("div",{style:{marginLeft:"1.4em",color:"#d32f2f",fontSize:"12px"},children:r.errors.Status})]})]})}),p(G,{children:[e(T,{onClick:n,color:"secondary",children:"Cancel"}),e(T,{onClick:r.submitForm,color:"primary",children:"Submit"})]})]})},dt=async(o,a,l,r)=>{var t,i,s;const n=v.get(P);try{return(await j.get(`${L}/GetProject/projects`,{headers:{Authorization:`Bearer ${n}`},params:{page:a,pageSize:l,search:r}})).data}catch(d){throw((t=d.response)==null?void 0:t.status)===401&&o("Your session has expired. Please log in again."),new Error(((s=(i=d.response)==null?void 0:i.data)==null?void 0:s.message)||"Error updating task")}},Dt=async(o,a,l,r,n)=>{var i,s,d;const t=v.get(P);try{return(await j.get(`${L}/ProjectEmployee/${o}`,{headers:{Authorization:`Bearer ${t}`},params:{page:a,pageSize:l,search:r}})).data}catch(f){throw((i=f.response)==null?void 0:i.status)===401&&n("Your session has expired. Please log in again."),new Error(((d=(s=f.response)==null?void 0:s.data)==null?void 0:d.message)||"Error updating task")}},It=async(o,a,l,r)=>{var t,i,s;const n=v.get(P);try{return(await j.get(`${L}/Employee/GetEmployee1?page=${a}&limit=${l}&search=${encodeURIComponent(r)}`,{headers:{Authorization:`Bearer ${n}`}})).data}catch(d){throw((t=d.response)==null?void 0:t.status)===401&&o("Your session has expired. Please log in again."),new Error(((s=(i=d.response)==null?void 0:i.data)==null?void 0:s.message)||"Error updating task")}},_t=async(o,a=1,l="")=>{var n,t,i;const r=v.get(P);try{return(await j.get(`${L}/Employee/GetEmployee`,{headers:{Authorization:`Bearer ${r}`},params:{page:a,searchTerm:l}})).data}catch(s){throw((n=s.response)==null?void 0:n.status)===401&&o("Your session has expired. Please log in again."),new Error(((i=(t=s.response)==null?void 0:t.data)==null?void 0:i.message)||"Error updating task")}},jt=async(o,a,l,r,n)=>{var t,i,s;try{return(await j.post(`${L}/ProjectEmployee/${a}`,{Emp_Id:l,Role_Id:r,Degesination:n},{headers:{"Content-Type":"application/json"}})).data}catch(d){throw((t=d.response)==null?void 0:t.status)===401&&o("Your session has expired. Please log in again."),new Error(((s=(i=d.response)==null?void 0:i.data)==null?void 0:s.message)||"Error updating task")}},Lt=async(o,a,l,r)=>{var n,t,i;try{const s=v.get(P);return(await j.patch(`${L}/ProjectEmployee/${a}/${l}`,r,{headers:{Authorization:`Bearer ${s}`}})).data}catch(s){throw((n=s.response)==null?void 0:n.status)===401&&o("Your session has expired. Please log in again."),new Error(((i=(t=s.response)==null?void 0:t.data)==null?void 0:i.message)||"Error updating task")}},Nt=async(o,a)=>{var r,n,t;const l=v.get(P);try{return(await j.post(`${L}/Employee/post`,a,{headers:{Authorization:`Bearer ${l}`}})).data}catch(i){throw((r=i.response)==null?void 0:r.status)===401&&o("Your session has expired. Please log in again."),new Error(((t=(n=i.response)==null?void 0:n.data)==null?void 0:t.message)||"Error updating member")}},ht=async(o,a)=>{var r,n,t;const l=v.get(P);try{return(await j.post(`${L}/GetProject/addProject`,a,{headers:{Authorization:`Bearer ${l}`}})).data}catch(i){throw((r=i.response)==null?void 0:r.status)===401&&o("Your session has expired. Please log in again."),new Error(((t=(n=i.response)==null?void 0:n.data)==null?void 0:t.message)||"Error adding task")}},ut=({open:o,onClose:a,message:l})=>{const r=F(),[n,t]=c.useState(10);return c.useEffect(()=>{let s;return o&&(t(10),s=window.setInterval(()=>{t(d=>d<=1?(window.clearInterval(s),r("/login"),0):d-1)},1e3)),()=>{s&&window.clearInterval(s)}},[o,r]),p(J,{open:o,onClose:a,children:[e(Y,{children:"Warning"}),p(q,{children:[e(M,{variant:"body1",children:l}),p(M,{variant:"body2",children:["You will be redirected to the login page in ",n," seconds."]})]}),e(G,{children:e(T,{onClick:()=>{a(),r("/login")},color:"primary",children:"Go to Login"})})]})},pt=()=>{const[o,a]=c.useState(!1),[l,r]=c.useState(""),n=F();return{showWarningDialog:d=>{r(d),a(!0)},DialogComponent:e(ut,{open:o,onClose:()=>{a(!1),r(""),n("/login")},message:l})}},A=I(_e)(({theme:o})=>({[`&.${ne.head}`]:{backgroundColor:"#f26729",color:"white",padding:"1em 8px"},[`&.${ne.body}`]:{fontSize:12,padding:"6px 8px"}})),ae=I(se)(({theme:o})=>({"&:nth-of-type(odd)":{backgroundColor:o.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}));function mt(){const[o,a]=c.useState([]),[l,r]=c.useState(!0),[n,t]=c.useState(!1),[i,s]=c.useState(null),[d,f]=c.useState(""),[m,b]=c.useState(1),[h,k]=c.useState(5),[u,S]=c.useState(1),{showWarningDialog:C,DialogComponent:x}=pt(),_=async(w=1,N="")=>{r(!0);try{const z=await dt(C,w,h,N);z.success&&(a(z.data),S(z.pagination.totalPages))}catch{s("Failed to fetch projects")}finally{r(!1)}};c.useEffect(()=>{_(m,d)},[m,d]);const ue=async w=>{try{const N={Project_Name:w.projectName,Status:w.Status},z=await ht(C,N);_(m,d)}catch(N){console.error("Error adding project:",N)}},pe=w=>{f(w.target.value),b(1)},me=w=>w?new Date(w).toISOString().split("T")[0]:"";return p(he,{children:[p(g,{sx:{display:"flex",flexDirection:"column",width:"100%",paddingLeft:2,paddingRight:2,marginTop:-6,overflow:"auto"},children:[e(je,{}),p(g,{sx:{display:"flex",justifyContent:"space-between",zIndex:200,marginTop:"4em",marginBottom:"-3em"},children:[e(re,{label:"Search Projects",variant:"outlined",value:d,onChange:pe,size:"small"}),e(T,{variant:"contained",color:"primary",onClick:()=>t(!0),children:"Add Project"})]}),e(ct,{open:n,onClose:()=>t(!1),onSubmit:ue}),p(g,{component:"main",sx:{flexGrow:1,bgcolor:"background.default",width:"100%"},children:[e(Le,{}),e(We,{component:Ne,children:p(Me,{sx:{minWidth:700},"aria-label":"customized table",children:[e($e,{children:p(se,{children:[e(A,{children:"S.No"}),e(A,{align:"center",children:"Project Name"}),e(A,{align:"center",children:"Created Date"}),e(A,{align:"center",children:"Status"}),e(A,{align:"center",children:"Actions"})]})}),e(Oe,{children:o.length>0?o.map((w,N)=>p(ae,{children:[e(A,{component:"th",scope:"row",children:N+1}),e(A,{align:"center",children:e(ze,{style:{textDecoration:"none"},to:`/projects/project-member/${w.Project_Id}`,children:w==null?void 0:w.Project_Name})}),e(A,{align:"center",children:me(w==null?void 0:w.createdAt)}),e(A,{align:"center",children:w==null?void 0:w.Status}),p(A,{align:"center",children:[e(W,{title:"Edit",placement:"top",children:e(O,{style:{marginRight:"5px"},children:e(Re,{color:"blue"})})}),e(W,{title:"Delete",placement:"top",children:e(O,{children:e(Be,{color:"red"})})})]})]},w.Project_Id)):e(ae,{children:e(A,{colSpan:5,align:"center",children:e(M,{variant:"body1",color:"textSecondary",children:"No projects found"})})})})]})}),e(g,{sx:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:2},children:p(M,{variant:"body2",component:"div",children:[e(T,{disabled:m===1,onClick:()=>b(m-1),children:"Previous"}),"Page ",m," of ",u," | Total Projects: ",o.length,e(T,{disabled:o.length<h||m===u,onClick:()=>b(m+1),children:"Next"})]})})]})]}),x]})}const H=()=>{let o="",a="";if(v.get(P)?(o=v.get(P),a="manager"):v.get($)?(o=v.get($),a="teamlead"):v.get(B)&&(o=v.get(B),a="member"),o){const l=Fe(o),r=Date.now()/1e3;return l.exp<r?(a=="manager"?v.remove(P):a=="teamlead"?v.remove($):a=="member"&&v.remove(B),!1):(console.log(a),a)}};y.lazy(()=>D(()=>import("./sideNav-zQ2NtQ9K.js"),__vite__mapDeps([0,1])));y.lazy(()=>D(()=>Promise.resolve().then(()=>it),void 0));const gt=y.lazy(()=>D(()=>import("./ProjectMember-Dzn3g_B8.js"),__vite__mapDeps([2,1,3]))),ft=y.lazy(()=>D(()=>import("./TaskCreation-3K7eV4tQ.js"),__vite__mapDeps([4,1,3,5,6]))),bt=y.lazy(()=>D(()=>import("./EmployTaskTable-BmwwcJT_.js"),__vite__mapDeps([7,1,3,8,0,5]))),yt=y.lazy(()=>D(()=>import("./TaskDetails-B19lDABh.js"),__vite__mapDeps([9,1,6,5]))),vt=y.lazy(()=>D(()=>import("./EmployCompleteTask-C20oX7e6.js"),__vite__mapDeps([10,1,3,8,0]))),wt=y.lazy(()=>D(()=>import("./EmployeTable-DlQJ15z4.js"),__vite__mapDeps([11,1]))),St=y.lazy(()=>D(()=>import("./LoginPage-21fC9243.js"),__vite__mapDeps([12,1]))),xt=y.lazy(()=>D(()=>import("./TeamLeadTaskTable-B12Gi2v4.js"),__vite__mapDeps([13,1,3,5,6])));function Ct(){const[o,a]=c.useState(!1),l=Ue([{path:"projects",element:H()=="manager"?e(y.Suspense,{fallback:e(g,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(E,{})}),children:e(Xe,{darkMode:o,setDarkMode:a})}):e(U,{to:"/login"}),children:[{path:"",element:e(y.Suspense,{fallback:e(g,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(E,{})}),children:e(lt,{})})},{path:"project-table",element:e(y.Suspense,{fallback:e(g,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(E,{})}),children:e(mt,{})})},{path:"project-member/:id",element:e(y.Suspense,{fallback:e(g,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(E,{})}),children:e(gt,{})})},{path:"Employee",element:e(y.Suspense,{fallback:e(g,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(E,{})}),children:e(wt,{})})}]},{path:"org-dashboard",element:H()=="teamlead"?e(y.Suspense,{fallback:e(g,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(E,{})}),children:e(nt,{darkMode:o,setDarkMode:a})}):e(U,{to:"/login"}),children:[{path:"task-table",element:e(y.Suspense,{fallback:e(g,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(E,{})}),children:e(ft,{})})},{path:"task-table/task-details/:Task_details_Id",element:e(y.Suspense,{fallback:e(g,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(E,{})}),children:e(yt,{})})},{path:"own-task",element:e(y.Suspense,{fallback:e(g,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(E,{})}),children:e(xt,{})})}]},{path:"employee-task",element:H()=="member"?e(y.Suspense,{fallback:e(g,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(E,{})}),children:e(st,{})}):e(U,{to:"/login"}),children:[{path:"EmployTask",element:e(y.Suspense,{fallback:e(g,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(E,{})}),children:e(bt,{})})},{path:"CompletedTask",element:e(y.Suspense,{fallback:e(g,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(E,{})}),children:e(vt,{})})}]},{path:"/login",element:e(y.Suspense,{fallback:e(g,{display:"flex",justifyContent:"center",alignItems:"center",height:"100%",width:"100%",padding:"2em",children:e(E,{})}),children:e(St,{})})}]);return e(He,{router:l})}const kt=c.createContext({superAdminToken:null,adminToken:null,userToken:null,agentToken:null,setSuperAdminToken:()=>{},setAdminToken:()=>{},setUserToken:()=>{},setAgentToken:()=>{}}),Tt=({children:o})=>{const[a,l]=c.useState(localStorage.getItem("superAdminToken")),[r,n]=c.useState(localStorage.getItem("adminToken")),[t,i]=c.useState(localStorage.getItem("userToken")),[s,d]=c.useState(localStorage.getItem("agentToken")),f=(u,S)=>{S?(localStorage.setItem(u,S),console.log(`Token set in localStorage for ${u}:`,S)):(localStorage.removeItem(u),console.log(`Token removed from localStorage for ${u}`))},m=u=>{l(u),f("superAdminToken",u)},b=u=>{n(u),f("adminToken",u)},h=u=>{i(u),f("userToken",u)},k=u=>{d(u),f("agentToken",u)};return e(kt.Provider,{value:{superAdminToken:a,adminToken:r,userToken:t,agentToken:s,setSuperAdminToken:m,setAdminToken:b,setUserToken:h,setAgentToken:k},children:o})};Ve.createRoot(document.getElementById("root")).render(e(Tt,{children:e(Ct,{})}));export{L as A,he as D,jt as a,Dt as b,At as c,It as d,Nt as e,P as f,_t as g,Pt as h,B as m,Lt as p,$ as t,pt as u};
