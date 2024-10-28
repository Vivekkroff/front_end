import{n as G,o as F,aa as j,a5 as J,m as _e,r,j as u,a as t,p as K,x as Q,q as I,t as X,a6 as Z,a7 as ee,y as te,d as x,z as ae,ab as Te,ac as De,s as ne,H as Se,J as Y,K as re,B as $,U as Ee,V as fe,W as ye,X as be,b as V,Y as Ie,ad as ke,ae as Ce,Q as Ae,T as U,N as xe,P as we}from"./vendor-DSVVCEiu.js";import{a as ve}from"./styles-k6wuRl1O.js";import{c as Be,g as se,u as Pe,a as qe,i as Fe}from"./TaskRoutes-Q1yI3VwZ.js";import{D as Le}from"./dataRenderLayoutOrg-B96TnFJq.js";import{u as $e}from"./dialogService-D9zk_gbl.js";import"./index-Di7kcznu.js";const W=()=>new Date().toTimeString().slice(0,5),O=()=>new Date().toISOString().split("T")[0],He=G({Task_Details:F().required("Task Details are required"),Start_Date:j().required("Start Date is required").test("is-future-date","Start Date cannot be in the past",function(n){const s=new Date,o=new Date(s.getFullYear(),s.getMonth(),s.getDate());return n>=o}),Start_Time:F().matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,"Invalid time format").required("Start Time is required").test("is-future-time","You cannot select a past time",function(n){const{Start_Date:s}=this.parent,o=new Date,d=new Date(s);return d.setHours(parseInt(n.split(":")[0],10)),d.setMinutes(parseInt(n.split(":")[1],10)),d>=o}),Assigned_Emp_Id:J().required("Assigned employe is required"),End_Time:F().matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,"Invalid time format").required("End Time is required").test("is-end-time-valid","End Time must be after Start Time",function(n){const{Start_Date:s,Start_Time:o,End_Date:d}=this.parent,e=new Date(s),c=new Date(d),S=new Date(`${e.toISOString().split("T")[0]}T${o}:00`),h=new Date(`${c.toISOString().split("T")[0]}T${n}:00`);console.log("Start DateTime:",S),console.log("End DateTime:",h);const p=e.getFullYear()===c.getFullYear()&&e.getMonth()===c.getMonth()&&e.getDate()===c.getDate();if(console.log("Same Day:",p),p){const E=parseInt(o.split(":")[0],10),T=parseInt(o.split(":")[1],10),v=parseInt(n.split(":")[0],10),C=parseInt(n.split(":")[1],10),w=E*60+T;return v*60+C<=w?this.createError({path:"End_Time",message:"End Time must be after Start Time"}):!0}return c>e})}),Ne=({open:n,onClose:s,projectId:o,fetchTasks:d})=>{const e=_e({initialValues:{Task_Details:"",Start_Date:O(),Start_Time:W(),End_Date:O(),End_Time:W(),Assigned_Emp_Id:null},validationSchema:He,onSubmit:async m=>{const i={Project_Id:o,Start_Date:m.Start_Date,Start_Time:m.Start_Time,Task_Details:m.Task_Details,End_Date:m.End_Date,End_Time:m.End_Time,Assigned_Emp_Id:m.Assigned_Emp_Id};try{const A=await Be(i);d(),s()}catch(A){console.error("Error creating task:",A)}}}),[c,S]=r.useState([]),[h,p]=r.useState(!0),[E,T]=r.useState(null),[v,C]=r.useState(""),[w,L]=r.useState(0),[B,q]=r.useState(0);return r.useEffect(()=>{n&&(async()=>{p(!0);try{const i=await se(o,v,10,B);S(i)}catch(i){T("Failed to fetch project employees."),console.error("Error fetching employees:",i)}finally{p(!1)}})()},[n,o,v,w]),u(ae,{open:n,onClose:s,children:[t(K,{children:"Add New Task"}),u("form",{onSubmit:e.handleSubmit,children:[u(Q,{children:[t(I,{autoFocus:!0,margin:"dense",label:"Task Details",type:"text",fullWidth:!0,variant:"outlined",name:"Task_Details",value:e.values.Task_Details,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.Task_Details&&!!e.errors.Task_Details,helperText:e.touched.Task_Details&&e.errors.Task_Details}),t(I,{margin:"dense",label:"Start Date",type:"date",fullWidth:!0,variant:"outlined",name:"Start_Date",value:e.values.Start_Date,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.Start_Date&&!!e.errors.Start_Date,helperText:e.touched.Start_Date&&e.errors.Start_Date,InputLabelProps:{shrink:!0},inputProps:{min:O()}}),t(I,{margin:"dense",label:"Start Time",type:"time",fullWidth:!0,variant:"outlined",name:"Start_Time",value:e.values.Start_Time,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.Start_Time&&!!e.errors.Start_Time,helperText:e.touched.Start_Time&&e.errors.Start_Time,InputLabelProps:{shrink:!0},inputProps:{min:W()}}),t(I,{margin:"dense",label:"End Date",type:"date",fullWidth:!0,variant:"outlined",name:"End_Date",value:e.values.End_Date,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.End_Date&&!!e.errors.End_Date,helperText:e.touched.End_Date&&e.errors.End_Date,InputLabelProps:{shrink:!0},inputProps:{min:O()}}),t(I,{margin:"dense",label:"End Time",type:"time",fullWidth:!0,variant:"outlined",name:"End_Time",value:e.values.End_Time,onChange:e.handleChange,onBlur:e.handleBlur,error:e.touched.End_Time&&!!e.errors.End_Time,helperText:e.touched.End_Time&&e.errors.End_Time,InputLabelProps:{shrink:!0}}),u(X,{fullWidth:!0,margin:"dense",error:e.touched.Assigned_Emp_Id&&!!e.errors.Assigned_Emp_Id,children:[t(Z,{options:c,getOptionLabel:m=>m.Employee.Employee_name,onChange:(m,i)=>{e.setFieldValue("Assigned_Emp_Id",i?i.Emp_Id:"")},onInputChange:(m,i)=>{C(i),q(0),S([])},onScroll:m=>{const i=m.target;i.scrollHeight===i.scrollTop+i.clientHeight&&!h&&q(_=>_+1)},renderInput:m=>t(I,{...m,label:"Assigned Employee",variant:"outlined",error:e.touched.Assigned_Emp_Id&&!!e.errors.Assigned_Emp_Id}),loading:h,filterOptions:(m,{inputValue:i})=>m.filter(A=>A.Employee.Employee_name.toLowerCase().includes(i.toLowerCase()))}),t(ee,{children:e.touched.Assigned_Emp_Id&&e.errors.Assigned_Emp_Id?typeof e.errors.Assigned_Emp_Id=="string"?t("span",{children:e.errors.Assigned_Emp_Id}):Array.isArray(e.errors.Assigned_Emp_Id)?t("span",{children:e.errors.Assigned_Emp_Id.join(", ")}):null:null})]})]}),u(te,{children:[t(x,{onClick:s,color:"secondary",children:"Cancel"}),t(x,{type:"submit",color:"primary",children:"Add Task"})]})]})]})},Oe=G({Task_Details:F().required("Task Details are required"),createdAt:F().required("Created date is required"),Start_Date:j().required("Start Date is required"),End_Date:j().required("End Date is required"),Start_Time:F().matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,"Invalid time format").required("Start Time is required"),End_Time:F().matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,"Invalid time format").required("End Time is required"),Assigned_Emp_Id:J().required("Assigned employee is required")}).test("startDateTime","Start date and time cannot be earlier than the created date/time",function(n){const{Start_Date:s,Start_Time:o,createdAt:d}=n;if(console.log("Start_Date:",s),console.log("Start_Time:",o),console.log("createdAt:",d),s&&o&&d){const e=new Date(d),[c,S]=o.split(":"),h=new Date(s);if(h.setHours(Number(c),Number(S),0,0),console.log("createdAtDate:",e),console.log("startDateTime:",h),h<e)return console.log("Start date/time is earlier than createdAt."),this.createError({path:"Start_Date",message:"Start date/time is earlier than created date/time"})}return!0}).test("endDateTime","Start date/time cannot be after end date/time",function(n){const{Start_Date:s,Start_Time:o,End_Date:d,End_Time:e}=n;if(console.log("Start_Date:",s),console.log("Start_Time:",o),console.log("End_Date:",d),console.log("End_Time:",e),s&&o&&d&&e){const[c,S]=o.split(":"),[h,p]=e.split(":"),E=new Date(s),T=new Date(d);if(E.setHours(Number(c),Number(S),0,0),T.setHours(Number(h),Number(p),0,0),console.log("startDateTime:",E),console.log("endDateTime:",T),E>T)return console.log("Start date/time is after end date/time."),this.createError({path:"End_Time",message:"Start date/time is after end date/time"})}return!0}).test("endDateTimeCheck","End date/time cannot be earlier than start date/time",function(n){const{Start_Date:s,Start_Time:o,End_Date:d,End_Time:e}=n;if(console.log("Start_Date:",s),console.log("Start_Time:",o),console.log("End_Date:",d),console.log("End_Time:",e),s&&o&&d&&e){const[c,S]=o.split(":"),[h,p]=e.split(":"),E=new Date(s),T=new Date(d);if(E.setHours(Number(c),Number(S),0,0),T.setHours(Number(h),Number(p),0,0),console.log("startDateTime:",E),console.log("endDateTime:",T),T<E)return console.log("End date/time is earlier than start date/time."),this.createError({path:"End_Date",message:"End date/time is earlier than start date/time"})}return!0});function Me({open:n,onClose:s,task:o,fetchTasks:d,projectId:e}){const[c,S]=r.useState(!1),[h,p]=r.useState("");r.useEffect(()=>{p("")},[n]);const E=async _=>{S(!0),p("");try{await Pe(_.Task_details_Id,_),d(),s()}catch(g){p("Error updating task"),console.error("Error updating task:",g)}finally{S(!1)}};function T(_){const g=new Date(_),P=`0${g.getMonth()+1}`.slice(-2),y=`0${g.getDate()}`.slice(-2);return`${g.getFullYear()}-${P}-${y}`}const[v,C]=r.useState([]),[w,L]=r.useState(""),[B,q]=r.useState(0),[m,i]=r.useState(0);r.useEffect(()=>{n&&(async()=>{try{const g=await se(e,w,10,m);C(g)}catch(g){p("Failed to fetch project employees."),console.error("Error fetching employees:",g)}})()},[n,e,w,B]);function A(_,g){throw new Error("Function not implemented.")}return u(ae,{open:n,onClose:s,children:[t(K,{children:"Edit Task"}),t(Q,{children:t(Te,{initialValues:o,enableReinitialize:!0,validationSchema:Oe,onSubmit:E,validateOnChange:!0,validateOnBlur:!0,children:({values:_,handleChange:g,handleSubmit:P,handleBlur:y,touched:D,errors:l})=>u(De,{children:[h&&t("p",{style:{color:"red"},children:h}),t(I,{fullWidth:!0,label:"Task Details",name:"Task_Details",value:_.Task_Details,onChange:g,margin:"dense",onBlur:y,error:D.Task_Details&&!!l.Task_Details,helperText:D.Task_Details&&typeof l.Task_Details=="string"?l.Task_Details:void 0}),t(I,{fullWidth:!0,label:"Start Date",type:"date",name:"Start_Date",value:T(_.Start_Date),onChange:g,onBlur:y,margin:"dense",InputLabelProps:{shrink:!0},error:D.Start_Date&&!!l.Start_Date,helperText:D.Start_Date&&typeof l.Start_Date=="string"?l.Start_Date:void 0}),t(I,{fullWidth:!0,label:"End Date",type:"date",name:"End_Date",value:T(_.End_Date),onChange:g,margin:"dense",onBlur:y,InputLabelProps:{shrink:!0},error:D.End_Date&&!!l.End_Date,helperText:D.End_Date&&typeof l.End_Date=="string"?l.End_Date:void 0}),t(I,{fullWidth:!0,label:"Start Time",type:"time",onBlur:y,name:"Start_Time",value:_.Start_Time,onChange:g,margin:"dense",InputLabelProps:{shrink:!0},error:D.Start_Time&&!!l.Start_Time,helperText:D.Start_Time&&typeof l.Start_Time=="string"?l.Start_Time:void 0}),t(I,{fullWidth:!0,label:"End Time",type:"time",name:"End_Time",onBlur:y,value:_.End_Time,onChange:g,margin:"dense",InputLabelProps:{shrink:!0},error:D.End_Time&&!!l.End_Time,helperText:D.End_Time&&typeof l.End_Time=="string"?l.End_Time:void 0}),u(X,{fullWidth:!0,margin:"dense",error:D.Assigned_Emp_Id&&!!l.Assigned_Emp_Id,children:[t(Z,{options:v,getOptionLabel:k=>k.Employee.Employee_name,onChange:(k,b)=>{A("Assigned_Emp_Id",b?b.Emp_Id:"")},onInputChange:(k,b)=>{L(b),i(0),C([])},onScroll:k=>{const b=k.target;b.scrollHeight===b.scrollTop+b.clientHeight&&!c&&i(M=>M+1)},renderInput:k=>t(I,{...k,label:"Assigned Employee",variant:"outlined",error:D.Assigned_Emp_Id&&!!l.Assigned_Emp_Id}),loading:c,filterOptions:(k,{inputValue:b})=>k.filter(H=>H.Employee.Employee_name.toLowerCase().includes(b.toLowerCase()))}),t(ee,{children:D.Assigned_Emp_Id&&l.Assigned_Emp_Id?typeof l.Assigned_Emp_Id=="string"?t("span",{children:l.Assigned_Emp_Id}):Array.isArray(l.Assigned_Emp_Id)?t("span",{children:l.Assigned_Emp_Id.join(", ")}):null:null})]}),u(te,{children:[t(x,{onClick:s,disabled:c,children:"Cancel"}),t(x,{type:"submit",variant:"contained",color:"primary",disabled:c,children:c?"Saving...":"Save"})]})]})})})]})}const f=ne(Se)(({theme:n})=>({[`&.${Y.head}`]:{backgroundColor:"#f26729",color:"white",padding:"1em 8px"},[`&.${Y.body}`]:{fontSize:12,padding:"4px 8px"}})),We=ne(re)(({theme:n})=>({"&:nth-of-type(odd)":{backgroundColor:n.palette.action.hover},"&:last-child td, &:last-child th":{border:0}}));function Ge(){const[n,s]=r.useState([]),[o,d]=r.useState(null),[e,c]=r.useState(!1),[S,h]=r.useState(null),[p,E]=r.useState(null),[T,v]=r.useState(null),[C,w]=r.useState(null),[L,B]=r.useState(""),[q,m]=r.useState(""),[i,A]=r.useState(1),[_,g]=r.useState(0),[P]=r.useState(5),y=r.useRef(null),[D,l]=r.useState(null),[k,b]=r.useState(!1),{showWarningDialog:H,DialogComponent:M}=$e(),N=async()=>{try{const a=await qe(q,i,P,H);s(a.tasks),g(a.total),E(a.projectId),v(a.projectName)}catch{d("Failed to fetch tasks.")}};r.useEffect(()=>{N()},[q,i,P,100]);const ie=()=>{console.log("Button clicked: Opening Add Task Form"),h(null),c(!0)},oe=()=>{console.log("Closing Add Task Form"),c(!1)},le=a=>{l(a),b(!0)},de=()=>{b(!1)},ce=a=>{a.target.files&&a.target.files[0]&&(w(a.target.files[0]),B(""))},me=async()=>{if(C)try{const a=await Fe(p,C);B(a.message),w(null),y.current&&(y.current.value=""),N()}catch(a){B(a.message)}else B("Please select a file to upload.")},ue=()=>{y.current&&y.current.click()},pe=a=>{m(a.target.value),A(1)},z=a=>{A(a)},ge=a=>a?new Date(a).toISOString().split("T")[0]:"";return u(Le,{children:[u($,{sx:{width:"100%",paddingLeft:2,paddingRight:2,marginTop:1,overflow:"auto"},children:[t(xe,{}),t($,{sx:{display:"flex",flexDirection:"column"},children:u(ve,{sx:{marginTop:"0 em"},children:[t(U,{variant:"h6",component:"div",sx:{flex:"1 1 1",color:"black",marginLeft:"1em"},children:T}),u($,{sx:{marginTop:2},children:[t(x,{type:"button",style:{zIndex:"200"},onClick:ie,children:"Add Task"}),t("input",{type:"file",accept:".xlsx, .xls",onChange:ce,style:{display:"none"},ref:y}),t(x,{variant:"contained",style:{zIndex:"200"},color:"primary",onClick:ue,children:"Select File"}),t(x,{variant:"contained",style:{zIndex:"200"},color:"secondary",onClick:me,disabled:!C,sx:{marginLeft:2},children:"Upload Tasks"}),L&&t("p",{children:L})," "]}),t(I,{variant:"outlined",placeholder:"Search tasks...",value:q,size:"small",onChange:pe,sx:{zIndex:200}})]})}),u($,{component:"main",sx:{flexGrow:1,bgcolor:"background.default",marginTop:"-4em",width:"100%"},children:[t(we,{}),t(Ae,{component:Ee,children:u(fe,{sx:{minWidth:700},"aria-label":"customized table",children:[t(ye,{children:u(re,{children:[t(f,{children:"S.No"}),t(f,{align:"center",children:"Employ name"}),t(f,{align:"center",children:"Start Date"}),t(f,{align:"center",children:"Start Time"}),t(f,{align:"center",children:"Task"}),t(f,{align:"center",children:"Status"}),t(f,{align:"center",children:"Actions"})]})}),t(be,{children:n==null?void 0:n.map((a,he)=>{var R;return u(We,{children:[u(f,{component:"th",scope:"row",children:[he+1+(i-1)*P," "]}),t(f,{align:"center",children:(R=a==null?void 0:a.Employee)==null?void 0:R.Employee_name}),t(f,{align:"center",children:ge(a==null?void 0:a.Start_Date)}),t(f,{align:"center",children:a==null?void 0:a.Start_Time}),t(f,{align:"center",children:a==null?void 0:a.Task_Details}),t(f,{align:"center",children:a==null?void 0:a.Status}),t(f,{style:{textAlign:"center"},children:u(x,{children:[t(V,{title:"View Details",placement:"top",children:t(Ie,{style:{marginTop:"0.8em",marginRight:"0.8em"},to:`/org-dashboard/task-table/task-details/${a.Task_details_Id}`,children:t(ke,{})})}),t(V,{title:"Edit",placement:"top",children:t(Ce,{onClick:()=>le(a)})})]})})]},a.Task_details_Id)})})]})}),u($,{sx:{display:"flex",justifyContent:"center",marginTop:2},children:[t(x,{onClick:()=>z(i-1),disabled:i===1,children:"Previous"}),u(U,{sx:{margin:"0 1em"},children:["Page ",i," of ",Math.ceil(_/P)]}),t(x,{onClick:()=>z(i+1),disabled:i*P>=_,children:"Next"})]}),t(Ne,{open:e,onClose:oe,fetchTasks:N,projectId:p}),D&&t(Me,{open:k,onClose:de,task:D,projectId:p,fetchTasks:N})]})]}),M]})}export{Ge as default};
