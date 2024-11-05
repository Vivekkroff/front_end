import{l as Z,v as se,w as X,a5 as J,x as O,r as n,a as e,j as d,G as c,a6 as V,y as N,z as W,M as B,a7 as K,B as k,f as H,D as ee,d as te,g as $,I as Q,a8 as le,c as re,e as ae,a9 as ie,C as de,s as ne,H as ce,J as Y,K as oe,_ as me,Q as he,U as ue,V as ge,W as pe,Y as Ee,Z as fe,aa as _e}from"./vendor-BtQO_-CK.js";import{S as Ie}from"./styles-sAMJ7xpl.js";import{u as G,a as be,g as U,p as De,D as Se,b as ye}from"./index-IdKhXTeo.js";const Re=g=>{const{fetchEmployees:p,onClose:s}=g,{id:C}=Z(),{showWarningDialog:D,DialogComponent:S}=G(),a=se({initialValues:{Emp_Id:null,Role_Id:null,Degesination:""},validationSchema:X({Emp_Id:J().required("Employee is required"),Role_Id:J().required("Role is required"),Degesination:O().required("Designation is required")}),onSubmit:async r=>{try{const{Emp_Id:t,Role_Id:o,Degesination:m}=r,i=await be(D,Number(C),Number(t),Number(o),m);console.log(i),i&&i.success?(console.log("Success:",i.message),p(),s()):a.setFieldError("Emp_Id",i.message||"Unexpected response format. Please try again.")}catch(t){if(console.error("Complete Error Object:",t),t.status===409){if(t.data&&t.data.message){const o=t.data.message;o.includes("A team lead for the designation")?a.setFieldError("Role_Id",o):o.includes("Employee is already assigned to this project.")?a.setFieldError("Emp_Id",o):a.setFieldError("Emp_Id",o||"An error occurred.")}}else t.data&&t.data.message?a.setFieldError("Emp_Id",t.data.message||"An error occurred."):a.setFieldError("Emp_Id","An unexpected error occurred. Please try again.")}}}),[q,y]=n.useState([]),[I,x]=n.useState(["Developer","Tester","DB","Devops","BA"]),[_,b]=n.useState(!0),[R,T]=n.useState(null),[P,v]=n.useState(1),[j,w]=n.useState(!0),[A,F]=n.useState("");n.useEffect(()=>{(async()=>{b(!0),T(null);try{const t=await U(D,P,A);y(o=>[...o,...t.data]),w(t.data.length>0)}catch(t){T(t.message)}finally{b(!1)}})()},[P,A]);const M=r=>{r.currentTarget.scrollHeight===r.currentTarget.scrollTop+r.currentTarget.clientHeight&&j&&!_&&v(o=>o+1)};return e(H,{component:"form",onSubmit:a.handleSubmit,sx:{display:"flex",flexDirection:"column",gap:2,width:"30em"},children:d(c,{container:!0,xs:12,spacing:2,children:[e(c,{item:!0,xs:12,sm:6,children:e(V,{options:q,getOptionLabel:r=>r.Employee_name,onChange:(r,t)=>{a.setFieldValue("Emp_Id",t?t.Emp_Id:null)},onBlur:r=>{a.handleBlur(r),a.setFieldTouched("Emp_Id",!0)},onInputChange:(r,t)=>{F(t),y([]),v(1)},renderInput:r=>e(N,{...r,label:"Select Employee",variant:"outlined",error:a.touched.Emp_Id&&!!a.errors.Emp_Id,helperText:a.touched.Emp_Id&&a.errors.Emp_Id}),loading:_,noOptionsText:_?"Loading...":"No options",ListboxProps:{onScroll:M}})}),e(c,{item:!0,xs:12,sm:6,children:d(W,{fullWidth:!0,size:"small",children:[d(N,{select:!0,label:"Role",id:"Role_Id",name:"Role_Id",value:a.values.Role_Id||"",onChange:a.handleChange,onBlur:a.handleBlur,error:a.touched.Role_Id&&!!a.errors.Role_Id,children:[e(B,{value:2,children:"Team Lead"}),e(B,{value:3,children:"Member"})]}),e(K,{error:a.touched.Role_Id&&!!a.errors.Role_Id,children:a.touched.Role_Id&&a.errors.Role_Id})]})}),e(c,{item:!0,xs:12,children:d(W,{fullWidth:!0,size:"small",children:[e(N,{select:!0,label:"Designation",id:"Degesination",name:"Degesination",value:a.values.Degesination||"",onChange:a.handleChange,onBlur:a.handleBlur,error:a.touched.Degesination&&!!a.errors.Degesination,children:I.map((r,t)=>e(B,{value:r,children:r},t))}),a.touched.Degesination&&a.errors.Degesination&&e(K,{error:!0,children:a.errors.Degesination})]})}),e(c,{item:!0,xs:12,children:e(k,{color:"primary",variant:"contained",type:"submit",children:"Register"})}),S]})})},xe=({open:g,onClose:p,fetchEmployees:s})=>d(ae,{open:g,onClose:p,children:[d(c,{xs:12,container:!0,spacing:2,paddingTop:2,justifyContent:"space-between",sx:{display:"flex"},children:[e(c,{children:e(ee,{sx:{paddingLeft:"40px",color:"primary.main",fontWeight:"bold",fontSize:"1.5em"},children:"Add New Member"})}),e(c,{children:e(te,{children:e($,{title:"Close",sx:{color:"red"},children:e(Q,{children:e(le,{onClick:()=>p(!1),sx:{fontSize:"1.4em"}})})})})})]}),e(re,{children:e(Re,{fetchEmployees:s,onClose:p})})]}),Ce=({open:g,onClose:p,employee:s})=>{const[C,D]=n.useState([]),[S,a]=n.useState(1),[q,y]=n.useState(!0),[I,x]=n.useState(""),[_,b]=n.useState(!1),{showWarningDialog:R,DialogComponent:T}=G(),[P]=n.useState(["Developer","Tester","DB","Devops","BA"]),v={ProjectMember_Id:s==null?void 0:s.ProjectMember_Id,Emp_Id:(s==null?void 0:s.Emp_Id)||"",Employee_name:(s==null?void 0:s.Employee_name)||"",Role_Id:(s==null?void 0:s.Role_Id)||"",Degesination:(s==null?void 0:s.Degesination)||""},j=X().shape({Emp_Id:O().required("Employee is required"),Role_Id:O().required("Role is required"),Degesination:O().required("Designation is required")}),w=async(r,t)=>{try{(await De(R,s.Project_Id,r.ProjectMember_Id,{Emp_Id:r.Emp_Id,Role_Id:r.Role_Id,Degesination:r.Degesination})).success&&p(!0)}catch(o){if(console.log("Complete Error Object:",o),t.setSubmitting(!1),o.message){const m=o.message;m.includes("A team lead with the designation")?t.setFieldError("Role_Id",m):m.includes("Employee is already assigned to this project.")?t.setFieldError("Emp_Id",m):t.setFieldError("Emp_Id",m||"An error occurred.")}else if(o.response){const{status:m,data:i}=o.response;if(m===409){if(i&&i.message){const E=i.message;E.includes("A team lead for the designation")?t.setFieldError("Role_Id",E):E.includes("Employee is already assigned to this project.")?t.setFieldError("Emp_Id",E):t.setFieldError("Emp_Id",E||"An error occurred.")}}else i&&i.message?t.setFieldError("Emp_Id",i.message||"An error occurred."):t.setFieldError("Emp_Id","An unexpected error occurred. Please try again.")}else t.setFieldError("Emp_Id","Network error. Please try again.")}},A=async()=>{b(!0);try{const r=await U(R,S,I);D(t=>S===1?r.data:[...t,...r.data]),y(r.data.length>0)}finally{b(!1)}},F=async()=>{b(!0);try{const r=await U(R,S,s==null?void 0:s.Employee_name);D(t=>S===1?r.data:[...t,...r.data]),y(r.data.length>0)}finally{b(!1)}};n.useEffect(()=>{g&&F()},[g]),n.useEffect(()=>{A()},[S,I]);const M=r=>{r.currentTarget.scrollHeight===r.currentTarget.scrollTop+r.currentTarget.clientHeight&&q&&!_&&a(o=>o+1)};return d(ae,{open:g,onClose:()=>p(!1),PaperProps:{style:{width:"30em"}},children:[e(ee,{children:"Edit Member"}),e(re,{children:e(ie,{initialValues:v,validationSchema:j,onSubmit:w,enableReinitialize:!0,children:({values:r,handleChange:t,handleBlur:o,handleSubmit:m,errors:i,touched:E,setFieldValue:L})=>d("form",{onSubmit:m,children:[d(c,{container:!0,spacing:2,children:[e(c,{item:!0,xs:12,sm:6,children:e(V,{options:C,value:C.find(h=>h.Emp_Id===r.Emp_Id)||null,getOptionLabel:h=>h.Employee_name,onInputChange:(h,f)=>{x(f),a(1),f===""&&x("")},onChange:(h,f)=>{L("Emp_Id",(f==null?void 0:f.Emp_Id)||""),L("Employee_name",(f==null?void 0:f.Employee_name)||"")},renderInput:h=>e(N,{...h,label:"Employee Name",variant:"outlined",error:E.Emp_Id&&!!i.Emp_Id,helperText:E.Emp_Id&&i.Emp_Id?String(i.Emp_Id):"",onBlur:o}),ListboxProps:{onScroll:M},isOptionEqualToValue:(h,f)=>h.Emp_Id===f.Emp_Id})}),e(c,{item:!0,xs:12,sm:6,children:e(W,{fullWidth:!0,children:d(N,{select:!0,label:"Role",id:"Role_Id",name:"Role_Id",value:r.Role_Id,onChange:t,onBlur:o,error:E.Role_Id&&!!i.Role_Id,helperText:E.Role_Id&&i.Role_Id?String(i.Role_Id):"",children:[e(B,{value:2,children:"Team Lead"}),e(B,{value:3,children:"Member"})]})})}),e(c,{item:!0,xs:12,children:e(W,{fullWidth:!0,children:e(de,{label:"Designation",id:"Degesination",name:"Degesination",value:r.Degesination,onChange:t,onBlur:o,error:E.Degesination&&!!i.Degesination,children:P.map(h=>e(B,{value:h,children:h},h))})})})]}),d(te,{children:[e(k,{onClick:()=>p(!1),color:"secondary",children:"Cancel"}),e(k,{type:"submit",color:"primary",children:"Save"})]})]})})}),T]})},u=ne(ce)(({theme:g})=>({[`&.${Y.head}`]:{backgroundColor:"#f26729",color:"white",padding:"1em 8px"},[`&.${Y.body}`]:{fontSize:12,padding:"6px 8px"}})),Te=ne(oe)(({theme:g})=>({"&:nth-of-type(odd)":{backgroundColor:g.palette.action.hover},"&:last-child td, &:last-child th":{border:0}})),Fe=()=>{const{id:g}=Z(),[p,s]=n.useState([]),[C,D]=n.useState(!1),[S,a]=n.useState(!0),[q,y]=n.useState(null),[I,x]=n.useState(0),[_,b]=n.useState(5),[R,T]=n.useState(""),[P,v]=n.useState(0),{showWarningDialog:j,DialogComponent:w}=G(),[A,F]=n.useState(!1),[M,r]=n.useState(null),t=()=>{D(!0)},o=(l=!1)=>{D(!1)},m=async()=>{a(!0),y(null);try{const l=await ye(Number(g),I+1,_,R,j);s(l.data),v(l.total)}catch(l){y(l.message)}finally{a(!1)}};n.useEffect(()=>{m()},[g,I,_,R]);const i=(l,z)=>{x(z)},E=l=>{b(parseInt(l.target.value,10)),x(0)},L=l=>{T(l.target.value),x(0)},h=l=>{r(l),F(!0)},f=(l=!1)=>{F(!1),r(null),l&&m()};return e(Se,{children:d(H,{sx:{width:"auto",overflow:"auto",paddingLeft:2,paddingRight:2},children:[e(c,{container:!0,spacing:2,children:e(c,{item:!0,xs:12,padding:2,sx:{marginTop:"1.4em"},children:d(H,{sx:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[e(c,{children:e(Ie,{value:R,onChange:L,placeholder:"Search by Employee Name",size:"small"})}),e(c,{children:e(k,{variant:"contained",color:"primary",onClick:t,children:"Add New Member"})}),e(xe,{open:C,onClose:l=>o(l),fetchEmployees:m})]})})}),e(me,{component:he,children:d(ue,{sx:{minWidth:700},"aria-label":"customized table",children:[e(ge,{children:d(oe,{children:[e(u,{children:"S.No"}),e(u,{align:"center",children:"Emp Id"}),e(u,{align:"center",children:"Project Name"}),e(u,{align:"center",children:"Employee Name"}),e(u,{align:"center",children:"Role"}),e(u,{align:"center",children:"Designation"}),e(u,{align:"center",children:"Actions"})]})}),e(pe,{children:p==null?void 0:p.map((l,z)=>d(Te,{children:[e(u,{component:"th",scope:"row",children:I*_+z+1}),e(u,{align:"center",children:l.Emp_Id}),e(u,{align:"center",children:l.Project_Name}),e(u,{align:"center",children:l.Employee_name}),e(u,{align:"center",children:l.Role_Name}),e(u,{align:"center",children:l.Degesination}),d(u,{align:"center",children:[e($,{title:"Edit",placement:"top",children:e(Q,{onClick:()=>h(l),children:e(Ee,{color:"blue"})})}),e($,{title:"Delete",placement:"top",children:e(Q,{children:e(fe,{color:"red"})})})]})]},l.Emp_Id))})]})}),e(_e,{component:"div",count:P,page:I,onPageChange:i,rowsPerPage:_,onRowsPerPageChange:E}),w,e(Ce,{open:A,onClose:f,employee:M})]})})};export{Fe as default};
