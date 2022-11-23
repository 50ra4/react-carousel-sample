import{s as r,j as b,a as t,r as l,R as M}from"./index.1c97aeca.js";function j({className:e,onClick:n,children:c}){return b(K,{className:e,onClick:n,children:[t(L,{}),c]})}const K=r.button`
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
`,L=r.div`
  margin-right: 4px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 10px 6px 0;
  border-color: transparent #ffe transparent transparent;
`;function O(e){const[n,c]=l.exports.useState(null),o=l.exports.useRef(0),p=l.exports.useCallback(d=>{d!==o.current&&(console.log(`current width: ${d}px`),c(d),o.current=d)},[]);return l.exports.useEffect(()=>{if(!e.current)return;const d=y=>{y.forEach(a=>{p(a.contentRect.width)})},f=e.current,u=new ResizeObserver(d);return u.observe(f),()=>{u.unobserve(f)}},[e,p]),n}const _=(e,n)=>`${e}_${n}`,V=e=>+e.slice(e.lastIndexOf("_")+1);function Y(e,{total:n,carouselKey:c}){const[o,p]=l.exports.useState(new Set),d=Math.min(...Array.from(o));return l.exports.useEffect(()=>{if(!e.current)return;const f=a=>{p(w=>{const k=new Set(w);return a.forEach(I=>{const C=V(I.target.id);I.intersectionRatio>.9?k.add(C):k.delete(C)}),k})},u=new IntersectionObserver(f,{root:e.current,threshold:[0,.9,1]}),y=Array.from({length:n}).map((a,w)=>document.querySelector(`#${_(c,w)}`)).filter(a=>!!a);return y.forEach(a=>{u.observe(a)}),()=>{y.forEach(a=>{u.unobserve(a)})}},[c,n,e]),d}function P({className:e,carouselKey:n,autoplay:c,perView:o,gap:p=0,children:d}){const f=l.exports.useRef(null),u=O(f),[{slideWidth:y,sliderPaddingRight:a,gapWidth:w},k]=l.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[I,C]=l.exports.useState(!1),R=l.exports.useCallback(i=>{const s=f.current;if(!s)return;const A=_(n,i),W=s.querySelector(`#${A}`);if(!W)return;const B=s.scrollLeft,z=s.getBoundingClientRect().left,G=W.getBoundingClientRect().left;s.scrollTo({left:B+G-z})},[n]),v=l.exports.useMemo(()=>M.Children.toArray(d).map((i,s)=>({child:i,slideId:_(n,s)})),[n,d]),S=Y(f,{carouselKey:n,total:v.length}),T=l.exports.useCallback(()=>{const i=S===0?v.length-1:S-1;R(i)},[S,R,v.length]),$=l.exports.useCallback(()=>{const i=S===v.length-1?0:S+1;R(i)},[S,R,v.length]);return l.exports.useEffect(()=>{if(!c||I)return;const i=setInterval(()=>{$()},c);return()=>{clearInterval(i)}},[c,I,$]),l.exports.useEffect(()=>{if(!o)return;if(o<1)throw new Error("perView must be 1 or more.");if(!u)return;const i=o>1?(o-1)*(p!=null?p:0):0,s=(u-i)/o;k({slideWidth:s,sliderPaddingRight:(o-1)*u,gapWidth:o>1?p:0})},[p,o,u]),b(H,{className:e,onMouseEnter:()=>{C(!0)},onMouseLeave:()=>{C(!1)},children:[b(N,{ref:f,gapWidth:w,children:[v.map(({slideId:i,child:s})=>b(E,{id:i,width:y!=null?y:void 0,children:[s,t(F,{multipleSlide:!!o&&o>1})]},i)),!!a&&t(q,{inserted:a})]}),t(U,{onClick:T,children:"Go to previous slide"}),t(Z,{onClick:$,children:"Go to next slide"}),t(X,{children:t(D,{children:v.map(({slideId:i},s)=>t(J,{children:b(Q,{isActive:S===s,onClick:()=>{R(s)},children:["Go to ",s+1," slide"]})},i))})})]})}const q=r.div`
  padding-left: ${({inserted:e})=>e}px;
`,F=r.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({multipleSlide:e})=>e?"start":"center"};
`,E=r.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,H=r.div`
  position: relative;
  height: 100%;
`,N=r.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > ${E} + ${E} {
    margin-left: ${({gapWidth:e})=>e||0}px;
  }
`,X=r.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,D=r.ol`
  display: inline-block;
`,J=r.li`
  display: inline-block;
`,Q=r.button`
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
`,U=r(j)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,Z=r(j)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;function g({className:e,count:n}){return t(ee,{className:e,even:n%2===0,children:t("span",{children:n})})}const ee=r.div`
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
`;function te({className:e,src:n,caption:c}){return t(ne,{className:e,children:t("img",{src:n,alt:c})})}const ne=r.div`
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
`;function re({className:e,title:n,children:c}){return b(ie,{className:e,children:[t("h3",{children:n}),c]})}const ie=r.section`
  & > h3 {
    line-height: 32px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 24px;
    padding: 8px 8px 16px;
  }
`,x=Array.from({length:4}).map((e,n)=>n+1),oe=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}];function fe(){return t(se,{children:b(le,{children:[t(ce,{children:"React Carousel Sample"}),t(ae,{title:"full width",children:t(de,{carouselKey:"full-width",children:x.map(e=>t(g,{count:e},e))})}),t(pe,{children:b(ue,{children:[t(h,{title:"autoplay 3s",children:b(m,{carouselKey:"autoplay-3s",autoplay:3e3,children:[x.map(e=>t(g,{count:e},e)),x.map(e=>t(g,{count:e+4},e))]})}),t(h,{title:"autoplay 5s",children:t(m,{carouselKey:"autoplay-5s",autoplay:5e3,children:x.map(e=>t(g,{count:e},e))})}),t(h,{title:"images",children:t(m,{carouselKey:"images",children:oe.map(({src:e,caption:n})=>t(te,{src:e,caption:n},e))})}),t(h,{title:"perView 2",children:t(m,{carouselKey:"perView-2",perView:2,autoplay:5e3,children:x.map(e=>t(g,{count:e},e))})}),t(h,{title:"perView 4",children:t(m,{carouselKey:"perView-4",perView:4,autoplay:5e3,children:x.map(e=>t(g,{count:e},e))})}),t(h,{title:"perView 5",children:t(m,{carouselKey:"perView-5",perView:5,autoplay:5e3,children:x.map(e=>t(g,{count:e},e))})}),t(h,{title:"gap 5",children:t(m,{carouselKey:"gap-5",perView:3,gap:5,autoplay:5e3,children:x.map(e=>t(g,{count:e},e))})}),t(h,{title:"gap 10",children:t(m,{carouselKey:"gap-10",perView:3,gap:10,autoplay:5e3,children:x.map(e=>t(g,{count:e},e))})})]})})]})})}const se=r.main`
  background-color: #eee;
  min-height: 100vh;
`,le=r.div`
  max-width: 1280px;
  @media (min-width: 1280px) {
    margin: 0 auto;
  }
`,ce=r.h2`
  background-color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 32px;
  padding: 8px 0;
`,h=r(re)`
  background-color: #fff;
`,ae=r(h)`
  margin: 16px 0;
`,de=r(P)`
  width: 100%;
  height: 300px;
`,pe=r.div`
  margin: 16px 0;
`,m=r(P)``,ue=r.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;

  padding: 0;
  margin: 0 -8px -8px 0;

  & > ${h} {
    margin: 0 8px 8px 0;

    & > ${m} {
      width: 300px;
      height: 225px;
    }
  }
`;export{fe as default};
