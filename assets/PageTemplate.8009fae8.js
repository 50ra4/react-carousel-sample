import{r as n,s as r,a as u,j as h}from"./index.d6788143.js";function b(t){const[o,l]=n.exports.useState(null),s=n.exports.useRef(0),i=n.exports.useCallback(e=>{e!==s.current&&(console.log(`current width: ${e}px`),l(e),s.current=e)},[]);return n.exports.useEffect(()=>{if(!t.current)return;const e=d=>{d.forEach(p=>{i(p.contentRect.width)})},c=t.current,a=new ResizeObserver(e);return a.observe(c),()=>{a.unobserve(c)}},[t,i]),o}function v({title:t,children:o}){return u(x,{children:h(f,{children:[u(g,{children:t}),o]})})}const x=r.main`
  background-color: #eee;
  min-height: 100vh;
`,f=r.div`
  max-width: 1280px;
  @media (min-width: 1280px) {
    margin: 0 auto;
  }
`,g=r.h2`
  background-color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 32px;
  padding: 8px 0;
  position: sticky;
  top: 0;
`;export{v as P,b as u};
