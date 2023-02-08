import{j as r,a as i,r as s,s as a}from"./index.942a3542.js";import{P as m,a as h,u as v}from"./PageTemplate.87939c0b.js";function y(){return r(m,{title:"ResizeObserver",children:[i(c,{color:"lemonchiffon"}),i(c,{color:"lavender",contentBox:!0})]})}const p=t=>Object.entries(t).map(([o,n])=>({name:o,size:n})),d=t=>{const{blockSize:o,inlineSize:n}=t;return p({blockSize:o,inlineSize:n})};function c({className:t,...o}){const n=s.exports.useRef(null),[e,b]=s.exports.useState(null),u=s.exports.useMemo(()=>h(b,100),[]);v({ref:n,callback:u});const f=s.exports.useMemo(()=>{if(!e)return[];const l=e.borderBoxSize?{title:"borderBoxSize",list:d(e.borderBoxSize)}:null,x=e.contentBoxSize?{title:"contentBoxSize",list:d(e.contentBoxSize)}:null,z=e.contentRect?{title:"contentBoxSize",list:p(e.contentRect.toJSON())}:null,S=e.devicePixelContentBoxSize?{title:"devicePixelContentBoxSize",list:d(e.devicePixelContentBoxSize)}:null;return[l,x,z,S].filter(g=>!!g)},[e]);return r(B,{...o,ref:n,className:t,children:[r("p",{children:["box-sizing: ",o.contentBox?"content-box":"border-box"]}),i("div",{children:f.map(({title:l,list:x})=>i(w,{title:l,list:x},l))})]})}const B=a.div`
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

  & > div {
    display: flex;
    justify-content: flex-start;
    align-content: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 0 -8px -8px 0;

    & > * {
      margin: 0 8px 8px 0;
    }
  }
`;function w({title:t,list:o}){return o.length?r(O,{children:[i("h3",{children:t}),i("dl",{children:o.map(({name:n,size:e})=>r("div",{children:[i("dt",{children:n}),i("dd",{children:e})]},n))})]}):null}const O=a.section`
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
        flex: 1 1 auto;
      }
    }
    & > div + div {
      border-top: 1px solid #000;
    }
  }
`;export{y as default};
