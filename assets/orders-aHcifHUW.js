import{a4 as k,E as y,a5 as V,w as r,o as l,b as s,at as d,a as i,e as h,F as b,au as g,a9 as n}from"./index-Dsjc_XRY.js";import{b as u}from"./route-block-B_A1xBdJ.js";import{V as v}from"./VContainer-BeX49FVe.js";import{V as m}from"./VCol-Bdx9YZ18.js";import{V as w}from"./VDivider-Bmk_tYnt.js";import{V as x}from"./VDataTable-Caew8HJR.js";import{V as A}from"./VRow-BwbPyCZM.js";import"./VPagination-DV8hxMen.js";import"./VList-BFXdMfK-.js";const B=d("h1",{class:"text-center"},"訂單管理",-1),D={__name:"orders",setup(C){const{apiAuth:p}=g(),_=k(),c=y([]),f=[{title:"編號",key:"_id"},{title:"帳號",key:"user.account"},{title:"日期",key:"createdAt",value:t=>new Date(t.createdAt).toLocaleString()},{title:"商品",key:"cart",sortable:!1},{title:"金額",key:"price",value:t=>t.cart.reduce((a,e)=>a+e.quantity*e.p_id.price,0)}];return(async()=>{var t,a;try{const{data:e}=await p.get("/order/all");c.value.push(...e.result)}catch(e){console.log(e),_({text:((a=(t=e==null?void 0:e.response)==null?void 0:t.data)==null?void 0:a.message)||"發生錯誤",snackbarProps:{color:"red"}})}})(),(t,a)=>(l(),V(v,null,{default:r(()=>[s(A,null,{default:r(()=>[s(m,{cols:"12"},{default:r(()=>[B]),_:1}),s(w),s(m,{cols:"12"},{default:r(()=>[s(x,{items:c.value,headers:f},{"item.cart":r(e=>[d("ul",null,[(l(!0),i(b,null,h(e.item.cart,o=>(l(),i("li",{key:o._id},n(o.p_id.name)+" * "+n(o.quantity),1))),128))])]),_:2},1032,["items"])]),_:1})]),_:1})]),_:1}))}};typeof u=="function"&&u(D);export{D as default};
