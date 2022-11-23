import{s as r,j as h,a as t,r as i,R as z}from"./index.5d0b930c.js";function E({className:e,onClick:n,children:s}){return h(G,{className:e,onClick:n,children:[t(M,{}),s]})}const G=r.button`
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
`,M=r.div`
  margin-right: 4px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 10px 6px 0;
  border-color: transparent #ffe transparent transparent;
`;function V(e){const[n,s]=i.exports.useState(null),d=i.exports.useRef(0),x=i.exports.useCallback(l=>{l!==d.current&&(console.log(`current width: ${l}px`),s(l),d.current=l)},[]);return i.exports.useEffect(()=>{if(!e.current)return;const l=w=>{w.forEach(c=>{x(c.contentRect.width)})},p=e.current,u=new ResizeObserver(l);return u.observe(p),()=>{u.unobserve(p)}},[e,x]),n}const _=(e,n)=>`${e}_${n}`,L=e=>+e.slice(e.lastIndexOf("_")+1);function O(e,{total:n,carouselKey:s}){const[d,x]=i.exports.useState(new Set),l=Math.min(...Array.from(d));return i.exports.useEffect(()=>{if(!e.current)return;const p=c=>{x(I=>{const k=new Set(I);return c.forEach(C=>{const f=L(C.target.id);C.intersectionRatio>.9?k.add(f):k.delete(f)}),k})},u=new IntersectionObserver(p,{root:e.current,threshold:[0,.9,1]}),w=Array.from({length:n}).map((c,I)=>document.querySelector(`#${_(s,I)}`)).filter(c=>!!c);return w.forEach(c=>{u.observe(c)}),()=>{w.forEach(c=>{u.unobserve(c)})}},[s,n,e]),l}function j({className:e,carouselKey:n,autoplay:s,perView:d,children:x}){const l=i.exports.useRef(null),p=V(l),[u,w]=i.exports.useState(null),[c,I]=i.exports.useState(0),[k,C]=i.exports.useState(!1),f=i.exports.useCallback(o=>{const a=l.current;if(!a)return;const P=_(n,o),$=a.querySelector(`#${P}`);if(!$)return;const T=a.scrollLeft,A=a.getBoundingClientRect().left,B=$.getBoundingClientRect().left;a.scrollTo({left:T+B-A})},[n]),m=i.exports.useMemo(()=>z.Children.toArray(x).map((o,a)=>({child:o,slideId:_(n,a)})),[n,x]),b=O(l,{carouselKey:n,total:m.length}),W=i.exports.useCallback(()=>{const o=b===0?m.length-1:b-1;f(o)},[b,f,m.length]),R=i.exports.useCallback(()=>{const o=b===m.length-1?0:b+1;f(o)},[b,f,m.length]);return i.exports.useEffect(()=>{if(!s||k)return;const o=setInterval(()=>{R()},s);return()=>{clearInterval(o)}},[s,k,R]),i.exports.useEffect(()=>{if(!d)return;if(d<1)throw new Error("perView must be 1 or more.");if(!p)return;const o=p/d;w(o),I((d-1)*p)},[d,p]),h(H,{className:e,onMouseEnter:()=>{C(!0)},onMouseLeave:()=>{C(!1)},children:[h(K,{ref:l,children:[m.map(({slideId:o,child:a})=>h(F,{id:o,width:u!=null?u:void 0,children:[a,t(q,{multipleSlide:!!d&&d>1})]},o)),!!c&&t(Y,{inserted:c})]}),t(Q,{onClick:W,children:"Go to previous slide"}),t(U,{onClick:R,children:"Go to next slide"}),t(N,{children:t(X,{children:m.map(({slideId:o},a)=>t(D,{children:h(J,{isActive:b===a,onClick:()=>{f(a)},children:["Go to ",a+1," slide"]})},o))})})]})}const Y=r.div`
  padding-left: ${({inserted:e})=>e}px;
`,q=r.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({multipleSlide:e})=>e?"start":"center"};
`,F=r.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,H=r.div`
  position: relative;
  height: 100%;
`,K=r.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`,N=r.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,X=r.ol`
  display: inline-block;
`,D=r.li`
  display: inline-block;
`,J=r.button`
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
`,Q=r(E)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,U=r(E)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;function y({className:e,count:n}){return t(Z,{className:e,even:n%2===0,children:t("span",{children:n})})}const Z=r.div`
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
`;function ee({className:e,src:n,caption:s}){return t(te,{className:e,children:t("img",{src:n,alt:s})})}const te=r.div`
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
`;function ne({className:e,title:n,children:s}){return h(re,{className:e,children:[t("h3",{children:n}),s]})}const re=r.section`
  & > h3 {
    line-height: 32px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 24px;
    padding: 8px 8px 16px;
  }
`,v=Array.from({length:4}).map((e,n)=>n+1),oe=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}];function he(){return t(ie,{children:h(se,{children:[t(le,{children:"React Carousel Sample"}),t(ce,{title:"full width",children:t(ae,{carouselKey:"full-width",children:v.map(e=>t(y,{count:e},e))})}),t(de,{children:h(pe,{children:[t(g,{title:"autoplay 3s",children:h(S,{carouselKey:"autoplay-3s",autoplay:3e3,children:[v.map(e=>t(y,{count:e},e)),v.map(e=>t(y,{count:e+4},e))]})}),t(g,{title:"autoplay 5s",children:t(S,{carouselKey:"autoplay-5s",autoplay:5e3,children:v.map(e=>t(y,{count:e},e))})}),t(g,{title:"images",children:t(S,{carouselKey:"images",children:oe.map(({src:e,caption:n})=>t(ee,{src:e,caption:n},e))})}),t(g,{title:"perView 2",children:t(S,{carouselKey:"perView-2",perView:2,autoplay:5e3,children:v.map(e=>t(y,{count:e},e))})}),t(g,{title:"perView 4",children:t(S,{carouselKey:"perView-4",perView:4,autoplay:5e3,children:v.map(e=>t(y,{count:e},e))})}),t(g,{title:"perView 5",children:t(S,{carouselKey:"perView-5",perView:5,autoplay:5e3,children:v.map(e=>t(y,{count:e},e))})})]})})]})})}const ie=r.main`
  background-color: #eee;
  min-height: 100vh;
`,se=r.div`
  max-width: 1280px;
  @media (min-width: 1280px) {
    margin: 0 auto;
  }
`,le=r.h2`
  background-color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 32px;
  padding: 8px 0;
`,g=r(ne)`
  background-color: #fff;
`,ce=r(g)`
  margin: 16px 0;
`,ae=r(j)`
  width: 100%;
  height: 300px;
`,de=r.div`
  margin: 16px 0;
`,S=r(j)``,pe=r.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;

  padding: 0;
  margin: 0 -8px -8px 0;

  & > ${g} {
    margin: 0 8px 8px 0;

    & > ${S} {
      width: 300px;
      height: 225px;
    }
  }
`;export{he as default};
