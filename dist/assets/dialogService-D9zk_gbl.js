import{u,r as i,j as g,a as t,p as w,x as D,T as d,d as p,y as C,z as f}from"./vendor-DSVVCEiu.js";const m=({open:n,onClose:o,message:l})=>{const e=u(),[r,c]=i.useState(10);return i.useEffect(()=>{let a;return n&&(c(10),a=window.setInterval(()=>{c(s=>s<=1?(window.clearInterval(a),e("/login"),0):s-1)},1e3)),()=>{a&&window.clearInterval(a)}},[n,e]),g(f,{open:n,onClose:o,children:[t(w,{children:"Warning"}),g(D,{children:[t(d,{variant:"body1",children:l}),g(d,{variant:"body2",children:["You will be redirected to the login page in ",r," seconds."]})]}),t(C,{children:t(p,{onClick:()=>{o(),e("/login")},color:"primary",children:"Go to Login"})})]})},y=()=>{const[n,o]=i.useState(!1),[l,e]=i.useState(""),r=u();return{showWarningDialog:s=>{e(s),o(!0)},DialogComponent:t(m,{open:n,onClose:()=>{o(!1),e(""),r("/login")},message:l})}};export{y as u};
