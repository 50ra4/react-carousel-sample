import{j as r,a as i,r as s,s as p}from"./index.3be6d876.js";import{P as f,u as g}from"./PageTemplate.b1f5d12a.js";function P(){return r(f,{title:"ResizeObserver",children:[i(x,{color:"lemonchiffon"}),i(x,{color:"lavender",contentBox:!0})]})}const a=t=>Object.entries(t).map(([o,n])=>({name:o,size:n})),c=t=>{const{blockSize:o,inlineSize:n}=t;return a({blockSize:o,inlineSize:n})};function x({className:t,...o}){const n=s.exports.useRef(null),e=g(n,{duration:100}),b=s.exports.useMemo(()=>{if(!e)return[];const d=e.borderBoxSize?{title:"borderBoxSize",list:c(e.borderBoxSize)}:null,l=e.contentBoxSize?{title:"contentBoxSize",list:c(e.contentBoxSize)}:null,z=e.contentRect?{title:"contentBoxSize",list:a(e.contentRect.toJSON())}:null,u=e.devicePixelContentBoxSize?{title:"devicePixelContentBoxSize",list:c(e.devicePixelContentBoxSize)}:null;return[d,l,z,u].filter(S=>!!S)},[e]);return r(B,{...o,ref:n,className:t,children:[r("p",{children:["box-sizing: ",o.contentBox?"content-box":"border-box"]}),b.map(({title:d,list:l})=>i(h,{title:d,list:l},d))]})}function h({title:t,list:o}){return o.length?r(m,{children:[i("h3",{children:t}),i("dl",{children:o.map(({name:n,size:e})=>r("div",{children:[i("dt",{children:n}),i("dd",{children:e})]},n))})]}):null}const m=p.section`
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
`,B=p.div`
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
`;export{P as default};
