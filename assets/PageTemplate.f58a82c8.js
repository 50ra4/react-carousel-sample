import{r as i,s as a,a as l,j as f}from"./index.37afef24.js";function x(t,o){let r,n;return(...s)=>{clearTimeout(r);const e=+new Date;n||(n=e);const c=o-(e-n);r=window.setTimeout(()=>{t(...s),n=void 0},c)}}function w(t){const[o,r]=i.exports.useState(null),n=i.exports.useRef(0),s=i.exports.useCallback(e=>{e!==n.current&&(r(e),n.current=e)},[]);return i.exports.useEffect(()=>{if(!t.current)return;const e=x(s,250),c=p=>{p.forEach(h=>{e(h.contentRect.width)})},u=t.current,d=new ResizeObserver(c);return d.observe(u),()=>{d.unobserve(u)}},[t,s]),o}function k({title:t,children:o}){return l(m,{children:f(v,{children:[l(b,{children:t}),o]})})}const m=a.main`
  background-color: #eee;
  min-height: 100vh;
`,v=a.div`
  max-width: 1280px;
  @media (min-width: 1280px) {
    margin: 0 auto;
  }
`,b=a.h2`
  background-color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 32px;
  padding: 8px 0;
  position: sticky;
  top: 0;
  z-index: 1200;
`;export{k as P,w as u};
