import{r as x,s as d,a as u,j as f}from"./index.966476c7.js";const a=e=>{const[t]=e instanceof ResizeObserverSize?[e]:e;return t||null};function b({ref:e,callback:t}){x.exports.useEffect(()=>{const n=e.current;if(!n)return;const o=c=>{const r=c.find(l=>l.target===n);!r||t({borderBoxSize:a(r.borderBoxSize),contentBoxSize:a(r.contentBoxSize),contentRect:r.contentRect,devicePixelContentBoxSize:a(r.devicePixelContentBoxSize),target:n})},s=e.current,i=new ResizeObserver(o);return i.observe(s),()=>{i.unobserve(s)}},[t,e])}function z(e,t){let n,o;return(...s)=>{clearTimeout(n);const i=+new Date;o||(o=i);const c=t-(i-o);n=window.setTimeout(()=>{e(...s),o=void 0},c)}}function g({title:e,children:t}){return u(v,{children:f(h,{children:[u(m,{children:e}),t]})})}const v=d.main`
  background-color: #eee;
  min-height: 100vh;
`,h=d.div`
  max-width: 1280px;
  @media (min-width: 1280px) {
    margin: 0 auto;
  }
`,m=d.h2`
  background-color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 32px;
  padding: 8px 0;
  position: sticky;
  top: 0;
  z-index: 1200;
`;export{g as P,z as a,b as u};
