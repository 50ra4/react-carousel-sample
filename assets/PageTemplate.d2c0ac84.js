import{r as f,s as u,a as p,j as b}from"./index.fd437455.js";function h(e,t){let r,n;return(...i)=>{clearTimeout(r);const s=+new Date;n||(n=s);const c=t-(s-n);r=window.setTimeout(()=>{e(...i),n=void 0},c)}}const a=e=>{const[t]=e instanceof ResizeObserverSize?[e]:e;return t||null};function R(e,{duration:t}={duration:50}){const[r,n]=f.exports.useState(null);return f.exports.useEffect(()=>{const i=e.current;if(!i)return;const s=h(o=>{n({borderBoxSize:a(o.borderBoxSize),contentBoxSize:a(o.contentBoxSize),contentRect:o.contentRect,devicePixelContentBoxSize:a(o.devicePixelContentBoxSize),target:i})},t),c=o=>{const x=o.find(v=>v.target===i);!x||s(x)},d=e.current,l=new ResizeObserver(c);return l.observe(d),()=>{l.unobserve(d)}},[t,e]),r}function w({title:e,children:t}){return p(m,{children:b(g,{children:[p(z,{children:e}),t]})})}const m=u.main`
  background-color: #eee;
  min-height: 100vh;
`,g=u.div`
  max-width: 1280px;
  @media (min-width: 1280px) {
    margin: 0 auto;
  }
`,z=u.h2`
  background-color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 32px;
  padding: 8px 0;
  position: sticky;
  top: 0;
  z-index: 1200;
`;export{w as P,R as u};
