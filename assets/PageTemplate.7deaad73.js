import{r as i,s as a,a as l,j as f}from"./index.ee1d0c7d.js";function x(e,o){let r,n;return(...s)=>{clearTimeout(r);const t=+new Date;n||(n=t);const c=o-(t-n);r=window.setTimeout(()=>{e(...s),n=void 0},c)}}function w(e){const[o,r]=i.exports.useState(null),n=i.exports.useRef(0),s=i.exports.useCallback(t=>{t!==n.current&&(r(t),n.current=t)},[]);return i.exports.useEffect(()=>{if(!e.current)return;const t=x(s,250),c=p=>{p.forEach(h=>{t(h.contentRect.width)})},u=e.current,d=new ResizeObserver(c);return d.observe(u),()=>{d.unobserve(u)}},[e,s]),o}function k({title:e,children:o}){return l(m,{children:f(v,{children:[l(b,{children:e}),o]})})}const m=a.main`
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
`;export{k as P,w as u};
