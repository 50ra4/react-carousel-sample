import{s as o,j as d,a as n,r as p,R as $}from"./index.cda9435d.js";function C({className:t,onClick:e,children:a}){return d(E,{className:t,onClick:e,children:[n(B,{}),a]})}const E=o.button`
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  font-size: 0;
  outline: 0;
  border: none;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`,B=o.div`
  margin-right: 4px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 10px 6px 0;
  border-color: transparent #ffe transparent transparent;
`,x=(t,e)=>`${t}_${e}`,I=(t,e)=>e===t-1?0:e+1,T=(t,e)=>e===0?t-1:e-1;function _({className:t,carouselKey:e,autoplay:a,children:S}){const f=p.exports.useRef(null),h=p.exports.useCallback(r=>{const i=f.current;if(!i)return;const l=i.querySelector(`#${r}`);if(!l)return;const s=i.scrollLeft,g=i.getBoundingClientRect().left,R=l.getBoundingClientRect().left;i.scrollTo({left:s+R-g})},[]),c=p.exports.useMemo(()=>$.Children.toArray(S).map((r,i)=>({child:r,slideId:x(e,i)})),[e,S]),[v,j]=p.exports.useState(c[0].slideId);p.exports.useEffect(()=>{if(!f.current)return;const r=s=>{s.forEach(g=>{!g.isIntersecting||j(g.target.id)})},i=new IntersectionObserver(r,{root:f.current,threshold:1}),l=c.map(({slideId:s})=>document.querySelector(`#${s}`)).filter(s=>!!s);return l.forEach(s=>{i.observe(s)}),()=>{l.forEach(s=>{i.unobserve(s)})}},[e,c]);const[k,w]=p.exports.useState(!1);return p.exports.useEffect(()=>{if(!a||k)return;const r=c.findIndex(l=>l.slideId===v);if(r<0)return;const i=setInterval(()=>{const l=x(e,I(c.length,r));h(l)},a);return()=>{clearInterval(i)}},[a,e,v,k,h,c]),d(A,{className:t,onMouseEnter:()=>{w(!0)},onMouseLeave:()=>{w(!1)},children:[n(G,{ref:f,children:c.map(({slideId:r,child:i},l)=>d(z,{id:r,children:[i,n(P,{}),n(q,{onClick:()=>{const s=x(e,T(c.length,l));h(s)},children:"Go to previous slide"}),n(F,{onClick:()=>{const s=x(e,I(c.length,l));h(s)},children:"Go to next slide"})]},r))}),n(L,{children:n(M,{children:c.map(({slideId:r},i)=>n(W,{children:d(Y,{isActive:v===r,onClick:()=>{h(r)},children:["Go to ",i+1," slide"]})},r))})})]})}const P=o.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
`,z=o.li`
  position: relative;
  flex: 0 0 100%;
  width: 100%;
`,A=o.div`
  position: relative;
  height: 100%;
`,G=o.ol`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`,L=o.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,M=o.ol`
  display: inline-block;
`,W=o.li`
  display: inline-block;
`,Y=o.button`
  display: inline-block;
  cursor: pointer;
  width: 16px;
  height: 16px;
  background-color: ${({isActive:t})=>t?"#ffe":"#333"};
  border-radius: 50%;
  border: none;
  margin: 0 4px;
  font-size: 0;
  transition: transform 0.1s;
`,q=o(C)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,F=o(C)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;function m({className:t,count:e}){return n(H,{className:t,even:e%2===0,children:n("span",{children:e})})}const H=o.div`
  flex: 0 0 100%;
  height: 100%;
  background-color: ${({even:t})=>t?"#99f":"#f99"};
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    color: #fff;
    font-size: 2em;
  }
`;function N({className:t,src:e,caption:a}){return n(O,{className:t,children:n("img",{src:e,alt:a})})}const O=o.div`
  position: relative;
  height: calc(100% - 2px);
  width: 100%;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.1) inset;
  }

  & > img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;function X({className:t,title:e,children:a}){return d(D,{className:t,children:[n("h3",{children:e}),a]})}const D=o.section`
  & > h3 {
    line-height: 32px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 24px;
    padding: 8px 8px 16px;
  }
`,b=Array.from({length:4}).map((t,e)=>e+1),J=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}];function ot(){return n(Q,{children:d(U,{children:[n(V,{children:"React Carousel Sample"}),n(Z,{title:"full width",children:n(K,{carouselKey:"full-width",children:b.map(t=>n(m,{count:t},t))})}),n(tt,{children:d(et,{children:[n(u,{title:"autoplay 3s",children:d(y,{carouselKey:"autoplay-3s",autoplay:3e3,children:[b.map(t=>n(m,{count:t},t)),b.map(t=>n(m,{count:t+4},t))]})}),n(u,{title:"autoplay 5s",children:n(y,{carouselKey:"autoplay-5s",autoplay:5e3,children:b.map(t=>n(m,{count:t},t))})}),n(u,{title:"images",children:n(y,{carouselKey:"images",children:J.map(({src:t,caption:e})=>n(N,{src:t,caption:e},t))})})]})})]})})}const Q=o.main`
  background-color: #eee;
  min-height: 100vh;
`,U=o.div`
  max-width: 1280px;
  @media (min-width: 1280px) {
    margin: 0 auto;
  }
`,V=o.h2`
  background-color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 32px;
  padding: 8px 0;
`,u=o(X)`
  background-color: #fff;
`,Z=o(u)`
  margin: 16px 0;
`,K=o(_)`
  width: 100%;
  height: 300px;
`,tt=o.div`
  margin: 16px 0;
`,y=o(_)``,et=o.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;

  padding: 0;
  margin: 0 -8px -8px 0;

  & > ${u} {
    margin: 0 8px 8px 0;

    & > ${y} {
      width: 300px;
      height: 225px;
    }
  }
`;export{ot as default};
