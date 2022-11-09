import{s as n,j as p,a as o,r as d,R}from"./index.0df12460.js";function C({className:t,onClick:e,children:a}){return p(E,{className:t,onClick:e,children:[o($,{}),a]})}const E=n.button`
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
`,$=n.div`
  margin-right: 4px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 10px 6px 0;
  border-color: transparent #ffe transparent transparent;
`,u=(t,e)=>`${t}_${e}`,w=(t,e)=>e===t-1?0:e+1,B=(t,e)=>e===0?t-1:e-1;function x({className:t,carouselKey:e,autoplay:a,children:S}){const f=d.exports.useRef(null),h=d.exports.useCallback(r=>{const i=f.current;if(!i)return;const l=i.querySelector(`#${r}`);if(!l)return;const s=i.scrollLeft,g=i.getBoundingClientRect().left,j=l.getBoundingClientRect().left;i.scrollTo({left:s+j-g})},[]),c=d.exports.useMemo(()=>R.Children.toArray(S).map((r,i)=>({child:r,slideId:u(e,i)})),[e,S]),[y,_]=d.exports.useState(c[0].slideId);d.exports.useEffect(()=>{if(!f.current)return;const r=s=>{s.forEach(g=>{!g.isIntersecting||_(g.target.id)})},i=new IntersectionObserver(r,{root:f.current,threshold:1}),l=c.map(({slideId:s})=>document.querySelector(`#${s}`)).filter(s=>!!s);return l.forEach(s=>{i.observe(s)}),()=>{l.forEach(s=>{i.unobserve(s)})}},[e,c]);const[k,I]=d.exports.useState(!1);return d.exports.useEffect(()=>{if(!a||k)return;const r=c.findIndex(l=>l.slideId===y);if(r<0)return;const i=setInterval(()=>{const l=u(e,w(c.length,r));h(l)},a);return()=>{clearInterval(i)}},[a,e,y,k,h,c]),p(A,{className:t,onMouseEnter:()=>{I(!0)},onMouseLeave:()=>{I(!1)},children:[o(P,{ref:f,children:c.map(({slideId:r,child:i},l)=>p(z,{id:r,children:[i,o(T,{}),o(H,{onClick:()=>{const s=u(e,B(c.length,l));h(s)},children:"Go to previous slide"}),o(Y,{onClick:()=>{const s=u(e,w(c.length,l));h(s)},children:"Go to next slide"})]},r))}),o(G,{children:o(L,{className:t,children:c.map(({slideId:r},i)=>o(M,{children:p(q,{isActive:y===r,onClick:()=>{h(r)},children:["Go to ",i+1," slide"]})},r))})})]})}const T=n.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
`,z=n.li`
  position: relative;
  flex: 0 0 100%;
  width: 100%;
`,A=n.div`
  position: relative;
  padding-top: 75%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;
`,P=n.ol`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`,G=n.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
`,L=n.ol`
  display: inline-block;
`,M=n.li`
  display: inline-block;
`,q=n.button`
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
`,H=n(C)`
  margin-top: 37.5%;
  transform: translateY(-50%);
  position: absolute;
  top: 0;
  left: 8px;
`,Y=n(C)`
  margin-top: 37.5%;
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 0;
  right: 8px;
`;function m({className:t,count:e}){return o(N,{className:t,even:e%2===0,children:o("span",{children:e})})}const N=n.div`
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
`;function O({className:t,src:e,caption:a}){return o(W,{className:t,children:o("img",{src:e,alt:a})})}const W=n.div`
  position: relative;
  height: 100%;
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
`;function X({className:t,title:e,children:a}){return p(D,{className:t,children:[o("h3",{children:e}),a]})}const D=n.section`
  & > h3 {
    line-height: 32px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 24px;
    padding: 8px 8px 16px;
  }
`,b=Array.from({length:4}).map((t,e)=>e+1),F=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}];function Z(){return o(J,{children:p(U,{children:[o(Q,{children:"Carousel Sample"}),o(v,{title:"basic",children:o(x,{carouselKey:"basic",children:b.map(t=>o(m,{count:t},t))})}),o(v,{title:"autoplay 3s",children:p(x,{carouselKey:"autoplay-3s",autoplay:3e3,children:[b.map(t=>o(m,{count:t},t)),b.map(t=>o(m,{count:t+4},t))]})}),o(v,{title:"autoplay 5s",children:o(x,{carouselKey:"autoplay-5s",autoplay:5e3,children:b.map(t=>o(m,{count:t},t))})}),o(v,{title:"images",children:o(x,{carouselKey:"images",children:F.map(({src:t,caption:e})=>o(O,{src:t,caption:e},t))})})]})})}const J=n.main`
  background-color: #eee;
`,Q=n.h2`
  background-color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 32px;
  padding: 8px 0;
`,v=n(X)`
  background-color: #fff;
  margin-top: 8px;
`,U=n.div`
  max-width: 400px;
  @media (min-width: 400px) {
    margin: 0 auto;
  }
`;export{Z as default};
