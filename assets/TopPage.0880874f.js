import{s as i,j as m,a as t,r as o,R as O}from"./index.912ef669.js";function T({className:e,onClick:r,children:n}){return m(Y,{className:e,onClick:r,children:[t(q,{}),n]})}const Y=i.button`
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
`,q=i.div`
  margin-right: 4px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 10px 6px 0;
  border-color: transparent #ffe transparent transparent;
`;function F(e){const[r,n]=o.exports.useState(null),a=o.exports.useRef(0),g=o.exports.useCallback(f=>{f!==a.current&&(console.log(`current width: ${f}px`),n(f),a.current=f)},[]);return o.exports.useEffect(()=>{if(!e.current)return;const f=v=>{v.forEach(h=>{g(h.contentRect.width)})},k=e.current,x=new ResizeObserver(f);return x.observe(k),()=>{x.unobserve(k)}},[e,g]),r}const H=e=>{var r,n;return typeof e=="object"?{before:(r=e.before)!=null?r:0,after:(n=e.after)!=null?n:0}:typeof e=="number"?{before:e,after:e}:{before:0,after:0}},X=e=>{var r,n;return typeof e=="object"?{previous:(r=e.previous)!=null?r:!1,next:(n=e.next)!=null?n:!1}:typeof e=="boolean"?{previous:e,next:e}:{previous:!1,next:!1}},_=(e,r)=>`${e}_${r}`,D=e=>+e.slice(e.lastIndexOf("_")+1);function J(e,{total:r,carouselKey:n}){const[a,g]=o.exports.useState(new Set),f=Math.min(...Array.from(a));return o.exports.useEffect(()=>{if(!e.current)return;const k=h=>{g($=>{const b=new Set($);return h.forEach(y=>{const I=D(y.target.id);y.intersectionRatio>.9?b.add(I):b.delete(I)}),b})},x=new IntersectionObserver(k,{root:e.current,threshold:[0,.9,1]}),v=Array.from({length:r}).map((h,$)=>document.querySelector(`#${_(n,$)}`)).filter(h=>!!h);return v.forEach(h=>{x.observe(h)}),()=>{v.forEach(h=>{x.unobserve(h)})}},[n,r,e]),f}function W({className:e,carouselKey:r,autoplay:n,perView:a,gap:g=0,peek:f,disabledIndicator:k,disabledSideNavigation:x,children:v}){const h=o.exports.useMemo(()=>H(f),[f]),$=o.exports.useMemo(()=>X(x),[x]),b=o.exports.useRef(null),y=F(b),[{slideWidth:I,sliderPaddingRight:E,gapWidth:A},B]=o.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[P,V]=o.exports.useState(!1),C=o.exports.useCallback(s=>{const c=b.current;if(!c)return;const N=_(r,s),K=c.querySelector(`#${N}`);if(!K)return;const z=c.scrollLeft,G=c.getBoundingClientRect().left,L=K.getBoundingClientRect().left;c.scrollTo({left:z+L-G})},[r]),S=o.exports.useMemo(()=>O.Children.toArray(v).map((s,c)=>({child:s,slideId:_(r,c)})),[r,v]),w=J(b,{carouselKey:r,total:S.length}),M=o.exports.useCallback(()=>{const s=w===0?S.length-1:w-1;C(s)},[w,C,S.length]),R=o.exports.useCallback(()=>{const s=w===S.length-1?0:w+1;C(s)},[w,C,S.length]);return o.exports.useEffect(()=>{if(!n||P)return;const s=setInterval(()=>{R()},n);return()=>{clearInterval(s)}},[n,P,R]),o.exports.useEffect(()=>{if(!a)return;if(a<1)throw new Error("perView must be 1 or more.");if(!y)return;const s=a>1?(a-1)*(g!=null?g:0):0,c=(y-s)/a;B({slideWidth:c,sliderPaddingRight:(a-1)*y,gapWidth:a>1?g:0})},[g,a,y]),m(Z,{className:e,onMouseEnter:()=>{V(!0)},onMouseLeave:()=>{V(!1)},children:[m(ee,{ref:b,gapWidth:A,peek:h,children:[S.map(({slideId:s,child:c})=>m(j,{id:s,width:I!=null?I:void 0,children:[c,t(U,{multipleSlide:!!a&&a>1})]},s)),!!E&&t(Q,{inserted:E})]}),!$.previous&&t(oe,{onClick:M,children:"Go to previous slide"}),!$.next&&t(se,{onClick:R,children:"Go to next slide"}),!k&&t(te,{children:t(re,{children:S.map(({slideId:s},c)=>t(ie,{children:m(ne,{isActive:w===c,onClick:()=>{C(c)},children:["Go to ",c+1," slide"]})},s))})})]})}const Q=i.div`
  padding-left: ${({inserted:e})=>e}px;
`,U=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({multipleSlide:e})=>e?"start":"center"};
`,j=i.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,Z=i.div`
  position: relative;
  height: 100%;
`,ee=i.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > ${j} + ${j} {
    margin-left: ${({gapWidth:e})=>e!=null?e:0}px;
  }

  scroll-padding: ${({peek:{before:e,after:r}})=>!e&&!r?"0":`0 ${r}px 0 ${e}px`};
  padding: ${({peek:{before:e,after:r}})=>!e&&!r?"0":`0 ${r}px 0 ${e}px`};
`,te=i.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,re=i.ol`
  display: inline-block;
`,ie=i.li`
  display: inline-block;
`,ne=i.button`
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
`,oe=i(T)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,se=i(T)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;function p({className:e,count:r}){return t(le,{className:e,even:r%2===0,children:t("span",{children:r})})}const le=i.div`
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
`;function ae({className:e,src:r,caption:n}){return t(ce,{className:e,children:t("img",{src:r,alt:n})})}const ce=i.div`
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
`;function de({className:e,title:r,children:n}){return m(pe,{className:e,children:[t("h3",{children:r}),n]})}const pe=i.section`
  & > h3 {
    line-height: 32px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 24px;
    padding: 8px 8px 16px;
  }
`,u=Array.from({length:4}).map((e,r)=>r+1),ue=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}];function Se(){return t(he,{children:m(fe,{children:[t(ge,{children:"React Carousel Sample"}),t(xe,{title:"full width",children:t(be,{carouselKey:"full-width",autoplay:1e4,children:u.map(e=>t(p,{count:e},e))})}),t(me,{children:m(ve,{children:[t(l,{title:"autoplay 5s",children:t(d,{carouselKey:"autoplay-5s",autoplay:5e3,children:u.map(e=>t(p,{count:e},e))})}),t(l,{title:"images",children:t(d,{carouselKey:"images",children:ue.map(({src:e,caption:r})=>t(ae,{src:e,caption:r},e))})}),t(l,{title:"perView 2",children:t(d,{carouselKey:"perView-2",perView:2,children:u.map(e=>t(p,{count:e},e))})}),t(l,{title:"perView 4",children:t(d,{carouselKey:"perView-4",perView:4,children:u.map(e=>t(p,{count:e},e))})}),t(l,{title:"perView 5",children:t(d,{carouselKey:"perView-5",perView:5,children:u.map(e=>t(p,{count:e},e))})}),t(l,{title:"gap 5",children:t(d,{carouselKey:"gap-5",perView:3,gap:5,children:u.map(e=>t(p,{count:e},e))})}),t(l,{title:"gap 10",children:t(d,{carouselKey:"gap-10",perView:3,gap:10,children:u.map(e=>t(p,{count:e},e))})}),t(l,{title:"peek before 20",children:t(d,{carouselKey:"peek-before-20",perView:3,gap:1,peek:{before:20},children:u.map(e=>t(p,{count:e},e))})}),t(l,{title:"peek after 20",children:t(d,{carouselKey:"peek-after-20",perView:3,gap:1,peek:{after:20},children:u.map(e=>t(p,{count:e},e))})}),t(l,{title:"peek 20",children:t(d,{carouselKey:"peek-20",perView:3,gap:1,peek:20,children:u.map(e=>t(p,{count:e},e))})}),t(l,{title:"disabled indicator",children:t(d,{carouselKey:"disabled-indicator",perView:3,gap:1,disabledIndicator:!0,children:u.map(e=>t(p,{count:e},e))})}),t(l,{title:"hide previous button",children:t(d,{carouselKey:"disabled-previous-button",perView:3,gap:1,disabledSideNavigation:{previous:!0},children:u.map(e=>t(p,{count:e},e))})}),t(l,{title:"hide next button",children:t(d,{carouselKey:"disabled-next-button",perView:3,gap:1,disabledSideNavigation:{next:!0},children:u.map(e=>t(p,{count:e},e))})}),t(l,{title:"hide side button",children:t(d,{carouselKey:"disabled-side-button",perView:3,gap:1,disabledSideNavigation:!0,children:u.map(e=>t(p,{count:e},e))})})]})})]})})}const he=i.main`
  background-color: #eee;
  min-height: 100vh;
`,fe=i.div`
  max-width: 1280px;
  @media (min-width: 1280px) {
    margin: 0 auto;
  }
`,ge=i.h2`
  background-color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 32px;
  padding: 8px 0;
`,l=i(de)`
  background-color: #fff;
`,xe=i(l)`
  margin: 16px 0;
`,be=i(W)`
  width: 100%;
  height: 300px;
`,me=i.div`
  margin: 16px 0;
`,d=i(W)``,ve=i.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;

  padding: 0;
  margin: 0 -8px -8px 0;

  & > ${l} {
    margin: 0 8px 8px 0;

    & > ${d} {
      width: 300px;
      height: 225px;
    }
  }
`;export{Se as default};
