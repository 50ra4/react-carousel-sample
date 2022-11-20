import{s as n,j as d,a as t,r as c,R as T}from"./index.d7d3cc85.js";function C({className:e,onClick:o,children:l}){return d(B,{className:e,onClick:o,children:[t(P,{}),l]})}const B=n.button`
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
`,P=n.div`
  margin-right: 4px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 10px 6px 0;
  border-color: transparent #ffe transparent transparent;
`,I=(e,o)=>`${e}_${o}`,z=e=>+e.slice(e.lastIndexOf("_")+1);function _({className:e,carouselKey:o,autoplay:l,children:S}){const[p,j]=c.exports.useState(0),f=c.exports.useRef(null),h=c.exports.useCallback(i=>{const r=f.current;if(!r)return;const g=I(o,i),s=r.querySelector(`#${g}`);if(!s)return;const x=r.scrollLeft,$=r.getBoundingClientRect().left,E=s.getBoundingClientRect().left;r.scrollTo({left:x+E-$})},[o]),a=c.exports.useMemo(()=>T.Children.toArray(S).map((i,r)=>({child:i,slideId:I(o,r)})),[o,S]),R=c.exports.useCallback(()=>{const i=p===0?a.length-1:p-1;h(i)},[p,h,a.length]),v=c.exports.useCallback(()=>{const i=p===a.length-1?0:p+1;h(i)},[p,h,a.length]);c.exports.useEffect(()=>{if(!f.current)return;const i=s=>{s.forEach(x=>{!x.isIntersecting||j(z(x.target.id))})},r=new IntersectionObserver(i,{root:f.current,threshold:1}),g=a.map(({slideId:s})=>document.querySelector(`#${s}`)).filter(s=>!!s);return g.forEach(s=>{r.observe(s)}),()=>{g.forEach(s=>{r.unobserve(s)})}},[a]);const[k,w]=c.exports.useState(!1);return c.exports.useEffect(()=>{if(!l||k)return;const i=setInterval(()=>{v()},l);return()=>{clearInterval(i)}},[l,k,v]),d(L,{className:e,onMouseEnter:()=>{w(!0)},onMouseLeave:()=>{w(!1)},children:[t(M,{ref:f,children:a.map(({slideId:i,child:r})=>d(G,{id:i,children:[r,t(A,{})]},i))}),t(H,{onClick:R,children:"Go to previous slide"}),t(N,{onClick:v,children:"Go to next slide"}),t(W,{children:t(Y,{children:a.map(({slideId:i},r)=>t(q,{children:d(F,{isActive:p===r,onClick:()=>{h(r)},children:["Go to ",r+1," slide"]})},i))})})]})}const A=n.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
`,G=n.li`
  position: relative;
  flex: 0 0 100%;
  width: 100%;
`,L=n.div`
  position: relative;
  height: 100%;
`,M=n.ol`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`,W=n.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,Y=n.ol`
  display: inline-block;
`,q=n.li`
  display: inline-block;
`,F=n.button`
  display: inline-block;
  cursor: pointer;
  width: 16px;
  height: 16px;
  background-color: ${({isActive:e})=>e?"#ffe":"#333"};
  border-radius: 50%;
  border: none;
  margin: 0 4px;
  font-size: 0;
  transition: transform 0.1s;
`,H=n(C)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,N=n(C)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;function m({className:e,count:o}){return t(O,{className:e,even:o%2===0,children:t("span",{children:o})})}const O=n.div`
  flex: 0 0 100%;
  height: 100%;
  background-color: ${({even:e})=>e?"#99f":"#f99"};
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    color: #fff;
    font-size: 2em;
  }
`;function K({className:e,src:o,caption:l}){return t(X,{className:e,children:t("img",{src:o,alt:l})})}const X=n.div`
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
`;function D({className:e,title:o,children:l}){return d(J,{className:e,children:[t("h3",{children:o}),l]})}const J=n.section`
  & > h3 {
    line-height: 32px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 24px;
    padding: 8px 8px 16px;
  }
`,b=Array.from({length:4}).map((e,o)=>o+1),Q=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}];function re(){return t(U,{children:d(V,{children:[t(Z,{children:"React Carousel Sample"}),t(ee,{title:"full width",children:t(te,{carouselKey:"full-width",children:b.map(e=>t(m,{count:e},e))})}),t(ne,{children:d(oe,{children:[t(u,{title:"autoplay 3s",children:d(y,{carouselKey:"autoplay-3s",autoplay:3e3,children:[b.map(e=>t(m,{count:e},e)),b.map(e=>t(m,{count:e+4},e))]})}),t(u,{title:"autoplay 5s",children:t(y,{carouselKey:"autoplay-5s",autoplay:5e3,children:b.map(e=>t(m,{count:e},e))})}),t(u,{title:"images",children:t(y,{carouselKey:"images",children:Q.map(({src:e,caption:o})=>t(K,{src:e,caption:o},e))})})]})})]})})}const U=n.main`
  background-color: #eee;
  min-height: 100vh;
`,V=n.div`
  max-width: 1280px;
  @media (min-width: 1280px) {
    margin: 0 auto;
  }
`,Z=n.h2`
  background-color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 32px;
  padding: 8px 0;
`,u=n(D)`
  background-color: #fff;
`,ee=n(u)`
  margin: 16px 0;
`,te=n(_)`
  width: 100%;
  height: 300px;
`,ne=n.div`
  margin: 16px 0;
`,y=n(_)``,oe=n.div`
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
`;export{re as default};
