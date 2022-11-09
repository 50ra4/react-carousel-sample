import{s as o,j as d,a as n,r as p,R}from"./index.e8736cb8.js";function C({className:t,onClick:e,children:a}){return d(E,{className:t,onClick:e,children:[n($,{}),a]})}const E=o.button`
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
`,$=o.div`
  margin-right: 4px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 10px 6px 0;
  border-color: transparent #ffe transparent transparent;
`,x=(t,e)=>`${t}_${e}`,w=(t,e)=>e===t-1?0:e+1,B=(t,e)=>e===0?t-1:e-1;function m({className:t,carouselKey:e,autoplay:a,children:S}){const g=p.exports.useRef(null),h=p.exports.useCallback(r=>{const i=g.current;if(!i)return;const l=i.querySelector(`#${r}`);if(!l)return;const s=i.scrollLeft,u=i.getBoundingClientRect().left,j=l.getBoundingClientRect().left;i.scrollTo({left:s+j-u})},[]),c=p.exports.useMemo(()=>R.Children.toArray(S).map((r,i)=>({child:r,slideId:x(e,i)})),[e,S]),[y,_]=p.exports.useState(c[0].slideId);p.exports.useEffect(()=>{if(!g.current)return;const r=s=>{s.forEach(u=>{!u.isIntersecting||_(u.target.id)})},i=new IntersectionObserver(r,{root:g.current,threshold:1}),l=c.map(({slideId:s})=>document.querySelector(`#${s}`)).filter(s=>!!s);return l.forEach(s=>{i.observe(s)}),()=>{l.forEach(s=>{i.unobserve(s)})}},[e,c]);const[k,I]=p.exports.useState(!1);return p.exports.useEffect(()=>{if(!a||k)return;const r=c.findIndex(l=>l.slideId===y);if(r<0)return;const i=setInterval(()=>{const l=x(e,w(c.length,r));h(l)},a);return()=>{clearInterval(i)}},[a,e,y,k,h,c]),d(A,{className:t,onMouseEnter:()=>{I(!0)},onMouseLeave:()=>{I(!1)},children:[n(P,{ref:g,children:c.map(({slideId:r,child:i},l)=>d(z,{id:r,children:[i,n(T,{}),n(H,{onClick:()=>{const s=x(e,B(c.length,l));h(s)},children:"Go to previous slide"}),n(W,{onClick:()=>{const s=x(e,w(c.length,l));h(s)},children:"Go to next slide"})]},r))}),n(G,{children:n(L,{className:t,children:c.map(({slideId:r},i)=>n(M,{children:d(q,{isActive:y===r,onClick:()=>{h(r)},children:["Go to ",i+1," slide"]})},r))})})]})}const T=o.div`
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
  padding-top: 75%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;
`,P=o.ol`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`,G=o.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
`,L=o.ol`
  display: inline-block;
`,M=o.li`
  display: inline-block;
`,q=o.button`
  display: inline-block;
  cursor: pointer;
  width: 16px;
  height: 16px;
  background-color: ${({isActive:t})=>t?"#ffe":"#333"};
  border-radius: 50%;
  border: none;
  margin: 0 4px 24px;
  font-size: 0;
  transition: transform 0.1s;
`,H=o(C)`
  margin-top: 37.5%;
  transform: translateY(-50%);
  position: absolute;
  top: 0;
  left: 8px;
`,W=o(C)`
  margin-top: 37.5%;
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 0;
  right: 8px;
`;function b({className:t,count:e}){return n(Y,{className:t,even:e%2===0,children:n("span",{children:e})})}const Y=o.div`
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
`,v=Array.from({length:4}).map((t,e)=>e+1),F=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}];function K(){return d(J,{children:[n(Q,{children:"Carousel Sample"}),n(U,{children:d(V,{children:[n(f,{title:"basic",children:n(m,{carouselKey:"basic",children:v.map(t=>n(b,{count:t},t))})}),n(f,{title:"autoplay 3s",children:d(m,{carouselKey:"autoplay-3s",autoplay:3e3,children:[v.map(t=>n(b,{count:t},t)),v.map(t=>n(b,{count:t+4},t))]})}),n(f,{title:"autoplay 5s",children:n(m,{carouselKey:"autoplay-5s",autoplay:5e3,children:v.map(t=>n(b,{count:t},t))})}),n(f,{title:"images",children:n(m,{carouselKey:"images",children:F.map(({src:t,caption:e})=>n(N,{src:t,caption:e},t))})})]})})]})}const J=o.main`
  background-color: #eee;
  min-height: 100vh;
`,Q=o.h2`
  background-color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 32px;
  padding: 8px 0;
`,f=o(X)`
  background-color: #fff;
  width: 300px;
`,U=o.div`
  margin: 16px;
`,V=o.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;

  padding: 0;
  margin: 0 -8px -8px 0;

  & > ${f} {
    margin: 0 8px 8px 0;
  }
`;export{K as default};
