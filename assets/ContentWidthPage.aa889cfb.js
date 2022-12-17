import{a as o,r,j as s,s as a}from"./index.7aa945fa.js";import{u as i}from"./useContentWidth.55de7241.js";import{P as c}from"./PageTemplate.6b811ce1.js";const d=Array.from({length:11}).map((t,e)=>(e+1)*100+220).reverse();function x(){return o(c,{title:"Check useContentWidth",children:d.map(t=>o(h,{maxWidth:t},t))})}function h({maxWidth:t}){const e=r.exports.useRef(null),n=i(e);return s(l,{ref:e,max:t,children:["width: ",n,"px"]})}const l=a.div`
  height: 100px;
  width: 100%;
  max-width: ${({max:t})=>t}px;

  background-color: #000;
  color: #fff;
  font-weight: bold;
  font-size: 36px;

  margin-top: 16px;
`;export{x as default};
