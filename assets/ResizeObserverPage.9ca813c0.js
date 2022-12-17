import{j as r,a as i,r as s,s as a}from"./index.7aa945fa.js";import{P as g,a as h,u as B}from"./PageTemplate.6b811ce1.js";function j(){return r(g,{title:"ResizeObserver",children:[i(x,{color:"lemonchiffon"}),i(x,{color:"lavender",contentBox:!0})]})}const p=t=>Object.entries(t).map(([o,n])=>({name:o,size:n})),c=t=>{const{blockSize:o,inlineSize:n}=t;return p({blockSize:o,inlineSize:n})};function x({className:t,...o}){const n=s.exports.useRef(null),[e,b]=s.exports.useState(null),u=s.exports.useMemo(()=>h(b,100),[]);B({ref:n,callback:u});const z=s.exports.useMemo(()=>{if(!e)return[];const l=e.borderBoxSize?{title:"borderBoxSize",list:c(e.borderBoxSize)}:null,d=e.contentBoxSize?{title:"contentBoxSize",list:c(e.contentBoxSize)}:null,S=e.contentRect?{title:"contentBoxSize",list:p(e.contentRect.toJSON())}:null,f=e.devicePixelContentBoxSize?{title:"devicePixelContentBoxSize",list:c(e.devicePixelContentBoxSize)}:null;return[l,d,S,f].filter(m=>!!m)},[e]);return r(P,{...o,ref:n,className:t,children:[r("p",{children:["box-sizing: ",o.contentBox?"content-box":"border-box"]}),z.map(({title:l,list:d})=>i(v,{title:l,list:d},l))]})}function v({title:t,list:o}){return o.length?r(O,{children:[i("h3",{children:t}),i("dl",{children:o.map(({name:n,size:e})=>r("div",{children:[i("dt",{children:n}),i("dd",{children:e})]},n))})]}):null}const O=a.section`
  margin: 8px 0;

  & > h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 4px;
  }

  & > dl {
    border: 1px solid #000;
    & > div {
      display: flex;
      & > * {
        padding: 2px 4px;
      }

      & > dt {
        min-width: 120px;
        margin-right: 10px;
      }
      & > dd {
        border-left: 1px solid #000;
        text-align: right;
      }
    }
    & > div + div {
      border-top: 1px solid #000;
    }
  }
`,P=a.div`
  width: 90%;
  padding: 10px 15px 20px 5px;
  box-sizing: ${({contentBox:t})=>t?"content-box":"border-box"};
  & > * {
    box-sizing: border-box;
  }
  border: 5px solid #000;
  background-color: ${({color:t})=>t};
  margin-top: 8px;

  & > p {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 4px;
  }
`;export{j as default};
