import{r as f,s as u,a as p,j as h}from"./index.3be6d876.js";function m(e,t){let o,n;return(...r)=>{clearTimeout(o);const s=+new Date;n||(n=s);const c=t-(s-n);o=window.setTimeout(()=>{e(...r),n=void 0},c)}}const a=e=>{const[t]=e instanceof Array?e:[e];if(!t)return null;const{blockSize:o,inlineSize:n}=t;return{blockSize:o,inlineSize:n}};function w(e,{duration:t}={duration:50}){const[o,n]=f.exports.useState(null);return f.exports.useEffect(()=>{const r=e.current;if(!r)return;const s=m(i=>{n({borderBoxSize:a(i.borderBoxSize),contentBoxSize:a(i.contentBoxSize),contentRect:i.contentRect,devicePixelContentBoxSize:a(i.devicePixelContentBoxSize),target:r})},t),c=i=>{const x=i.find(b=>b.target===e.current);!x||s(x)},l=e.current,d=new ResizeObserver(c);return d.observe(l),()=>{d.unobserve(l)}},[t,e]),o}function R({title:e,children:t}){return p(v,{children:h(g,{children:[p(z,{children:e}),t]})})}const v=u.main`
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
`;export{R as P,w as u};
