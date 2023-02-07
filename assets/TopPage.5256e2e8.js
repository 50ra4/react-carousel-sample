import{s as i,j as b,a as t,r as d,R as te}from"./index.966476c7.js";import{u as re}from"./useContentWidth.c8c02f09.js";import{P as ie}from"./PageTemplate.90ed0289.js";function H({className:e,onClick:r,children:o}){return b(ne,{className:e,onClick:r,children:[t(oe,{}),o]})}const ne=i.button`
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
`,oe=i.div`
  margin-right: 4px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 10px 6px 0;
  border-color: transparent #ffe transparent transparent;
`;function se(e){const[r,o]=d.exports.useState(!1);return d.exports.useEffect(()=>{const n=e.current;if(!n)return;const h=()=>{o(!0)},g=()=>{o(!1)};return n.addEventListener("mouseenter",h),n.addEventListener("mouseleave",g),()=>{n.removeEventListener("mouseleave",h),n.removeEventListener("mouseleave",g)}},[e]),r}const le=e=>{var r,o;switch(typeof e){case"object":return{before:(r=e.before)!=null?r:0,after:(o=e.after)!=null?o:0};case"number":return{before:e,after:e};default:return{before:0,after:0}}},K=(e,r)=>`${e}_${r}`,ae=e=>+e.slice(e.lastIndexOf("_")+1),ce=(e,r)=>e.size===r.size&&Array.from(e).every(o=>r.has(o));function de(e,{total:r,carouselKey:o}){const[n,h]=d.exports.useState(new Set),g=d.exports.useRef(n),S=Math.min(...Array.from(n));return d.exports.useEffect(()=>{if(!e.current)return;const $=f=>{const m=new Set(g.current);f.forEach(E=>{const k=ae(E.target.id);E.intersectionRatio>.9?m.add(k):m.delete(k)}),!ce(m,g.current)&&(h(m),g.current=m)},y=new IntersectionObserver($,{root:e.current,threshold:[0,.9,1]}),x=Array.from({length:r}).map((f,m)=>document.querySelector(`#${K(o,m)}`)).filter(f=>!!f);return x.forEach(f=>{y.observe(f)}),()=>{x.forEach(f=>{y.unobserve(f)})}},[o,r,e]),{currentSlideIndex:S,isDisplayedLastSlide:n.has(r-1)}}function T({className:e,carouselKey:r,autoplay:o,perView:n,gap:h=0,peek:g,startAt:S,rewind:$=!0,bound:y,slideWidth:x,disabledIndicator:f,disabledPreviousButton:m,disabledNextButton:E,children:k}){const V=d.exports.useRef(null),L=d.exports.useMemo(()=>le(g),[g]),R=d.exports.useRef(null),w=re(R),B=se(V),v=d.exports.useCallback(u=>{const p=R.current;if(!p)return;const D=K(r,u),F=p.querySelector(`#${D}`);if(!F)return;const Z=p.scrollLeft,O=p.getBoundingClientRect().left,ee=F.getBoundingClientRect().left;p.scrollTo({left:Z+ee-O})},[r]),I=d.exports.useMemo(()=>te.Children.toArray(k).map((u,p)=>({child:u,slideId:K(r,p)})),[r,k]),{currentSlideIndex:C,isDisplayedLastSlide:q}=de(R,{carouselKey:r,total:I.length}),M=C===0,U=$||!M,A=M?I.length-1:C-1,z=C===I.length-1||!!y&&q,P=$||!z,W=z?0:C+1,Y=d.exports.useCallback(()=>{v(A)},[A,v]),_=d.exports.useCallback(()=>{v(W)},[W,v]);d.exports.useEffect(()=>{if(!o||B||!P)return;const u=setInterval(()=>{_()},o);return()=>{clearInterval(u)}},[o,P,B,_]),d.exports.useEffect(()=>{if(n&&n<1)throw new Error("perView must be 1 or more.");if(n&&x)throw new Error("both perView and slideWidth cannot be set.")},[n,x]);const{slideWidth:G,sliderPaddingRight:X}=d.exports.useMemo(()=>{const u={sliderPaddingRight:0};if(!w)return u;if(n){const p=n>1?(n-1)*(h!=null?h:0):0;return{slideWidth:(w-p)/n,sliderPaddingRight:y?0:(n-1)*w}}return x?{slideWidth:x,sliderPaddingRight:y?0:w-x}:u},[y,h,n,x,w]),J=!!n&&n>1?h:0,Q=w!==G;return d.exports.useEffect(()=>{!S||v(S)},[v,S]),b(he,{ref:V,className:e,children:[b(fe,{ref:R,gapWidth:J,peek:L,children:[I.map(({slideId:u,child:p})=>b(j,{id:u,width:G,children:[p,t(ue,{isMultipleSlide:Q})]},u)),t(pe,{inserted:X||L.after})]}),!m&&U&&t(ye,{onClick:Y,children:"Go to previous slide"}),!E&&P&&t(ve,{onClick:_,children:"Go to next slide"}),!f&&t(ge,{children:t(xe,{children:I.map(({slideId:u},p)=>t(me,{children:b(be,{isActive:C===p,onClick:()=>{v(p)},children:["Go to ",p+1," slide"]})},u))})})]})}const pe=i.div`
  padding-left: ${({inserted:e})=>e}px;
`,ue=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({isMultipleSlide:e})=>e?"start":"center"};
`,j=i.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,he=i.div`
  position: relative;
  height: 100%;
`,fe=i.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > ${j} + ${j} {
    margin-left: ${({gapWidth:e})=>e!=null?e:0}px;
  }

  scroll-padding-left: ${({peek:{before:e}})=>e}px;
  scroll-padding-right: ${({peek:{after:e}})=>e}px;
  padding-left: ${({peek:{before:e}})=>e}px;
  padding-right: ${({peek:{after:e}})=>e}px;
`,ge=i.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,xe=i.ol`
  display: inline-block;
`,me=i.li`
  display: inline-block;
`,be=i.button`
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
  filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.2));
`,ye=i(H)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,ve=i(H)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;function we({children:e,...r}){return t(T,{...r,children:e})}function l({className:e,count:r}){return t(Se,{className:e,even:r%2===0,children:t("span",{children:r})})}const Se=i.div`
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
`;function ke({className:e,src:r,caption:o}){return b(Ie,{className:e,children:[t("div",{}),t("img",{src:r,alt:o})]})}const Ie=i.div`
  position: relative;
  height: 100%;
  width: 100%;

  & > div {
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
`;function Ce({className:e,title:r,children:o}){return b($e,{className:e,children:[t("h3",{children:r}),o]})}const $e=i.section`
  & > h3 {
    line-height: 32px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 24px;
    padding: 8px 8px 16px;
  }
`,a=Array.from({length:8}).map((e,r)=>r+1),Ee=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}];function Be(){return b(ie,{title:"React Carousel Sample",children:[t(Re,{title:"full width",children:t(Pe,{carouselKey:"full-width",autoplay:1e4,children:a.map(e=>t(l,{count:e},e))})}),t(_e,{children:b(Ke,{children:[t(s,{title:"autoplay 5s",children:t(c,{carouselKey:"autoplay-5s",perView:2,gap:1,autoplay:5e3,children:a.map(e=>t(l,{count:e},e))})}),t(s,{title:"images",children:t(c,{carouselKey:"images",children:Ee.map(({src:e,caption:r})=>t(ke,{src:e,caption:r},e))})}),t(s,{title:"perView 2",children:t(c,{carouselKey:"perView-2",perView:2,children:a.map(e=>t(l,{count:e},e))})}),t(s,{title:"perView 4",children:t(c,{carouselKey:"perView-4",perView:4,children:a.map(e=>t(l,{count:e},e))})}),t(s,{title:"perView 5",children:t(c,{carouselKey:"perView-5",perView:5,children:a.map(e=>t(l,{count:e},e))})}),t(s,{title:"gap 5",children:t(c,{carouselKey:"gap-5",perView:3,gap:5,children:a.map(e=>t(l,{count:e},e))})}),t(s,{title:"gap 10",children:t(c,{carouselKey:"gap-10",perView:3,gap:10,children:a.map(e=>t(l,{count:e},e))})}),t(s,{title:"peek before 20",children:t(c,{carouselKey:"peek-before-20",perView:3,gap:1,peek:{before:20},children:a.map(e=>t(l,{count:e},e))})}),t(s,{title:"peek after 20",children:t(c,{carouselKey:"peek-after-20",perView:3,gap:1,peek:{after:20},bound:!0,children:a.map(e=>t(l,{count:e},e))})}),t(s,{title:"peek 20",children:t(c,{carouselKey:"peek-20",perView:3,gap:1,peek:20,children:a.map(e=>t(l,{count:e},e))})}),t(s,{title:"disabled indicator",children:t(c,{carouselKey:"disabled-indicator",perView:3,gap:1,disabledIndicator:!0,children:a.map(e=>t(l,{count:e},e))})}),t(s,{title:"hide previous button",children:t(c,{carouselKey:"disabled-previous-button",perView:3,gap:1,disabledPreviousButton:!0,children:a.map(e=>t(l,{count:e},e))})}),t(s,{title:"hide next button",children:t(c,{carouselKey:"disabled-next-button",perView:3,gap:1,disabledNextButton:!0,children:a.map(e=>t(l,{count:e},e))})}),t(s,{title:"start at 3",children:t(c,{carouselKey:"start-at-3",perView:3,gap:1,startAt:2,children:a.map(e=>t(l,{count:e},e))})}),t(s,{title:"not rewind",children:t(c,{carouselKey:"not-rewind",perView:2,gap:1,rewind:!1,children:a.map(e=>t(l,{count:e},e))})}),t(s,{title:"bound",children:t(c,{carouselKey:"bound",perView:3,gap:1,bound:!0,children:a.map(e=>t(l,{count:e},e))})}),t(s,{title:"slide width 140",children:t(c,{carouselKey:"slide-width",slideWidth:140,gap:1,children:a.map(e=>t(l,{count:e},e))})}),t(s,{title:"Custom UI",children:t(N,{carouselKey:"custom-ui",perView:2,children:a.map(e=>t(l,{count:e},e))})})]})})]})}const s=i(Ce)`
  background-color: #fff;
`,Re=i(s)`
  margin: 16px 0;
`,Pe=i(T)`
  width: 100%;
  height: 300px;
`,_e=i.div`
  margin: 16px 0;
`,c=i(T)``,N=i(we)``,Ke=i.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;

  padding: 0;
  margin: 0 -8px -8px 0;

  & > ${s} {
    margin: 0 8px 8px 0;

    & > ${c}, & > ${N} {
      width: calc(calc(1280px - 24px) / 4);
      height: 225px;
    }
  }
`;export{Be as default};
