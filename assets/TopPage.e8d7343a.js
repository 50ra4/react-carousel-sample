import{s as n,j as b,a as t,r as d,R as ee}from"./index.e88e0cab.js";import{u as te}from"./useContentWidth.da83be1f.js";import{P as re}from"./PageTemplate.e7139140.js";function F({className:e,onClick:r,children:o}){return b(ie,{className:e,onClick:r,children:[t(ne,{}),o]})}const ie=n.button`
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
`,ne=n.div`
  margin-right: 4px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 10px 6px 0;
  border-color: transparent #ffe transparent transparent;
`;function oe(e){const[r,o]=d.exports.useState(!1);return d.exports.useEffect(()=>{const i=e.current;if(!i)return;const h=()=>{o(!0)},g=()=>{o(!1)};return i.addEventListener("mouseenter",h),i.addEventListener("mouseleave",g),()=>{i.removeEventListener("mouseleave",h),i.removeEventListener("mouseleave",g)}},[e]),r}const se=e=>{var r,o;switch(typeof e){case"object":return{before:(r=e.before)!=null?r:0,after:(o=e.after)!=null?o:0};case"number":return{before:e,after:e};default:return{before:0,after:0}}},j=(e,r)=>`${e}_${r}`,le=e=>+e.slice(e.lastIndexOf("_")+1),ae=(e,r)=>e.size===r.size&&Array.from(e).every(o=>r.has(o));function ce(e,{total:r,carouselKey:o}){const[i,h]=d.exports.useState(new Set),g=d.exports.useRef(i),S=Math.min(...Array.from(i));return d.exports.useEffect(()=>{if(!e.current)return;const $=f=>{const m=new Set(g.current);f.forEach(E=>{const k=le(E.target.id);E.intersectionRatio>.9?m.add(k):m.delete(k)}),!ae(m,g.current)&&(h(m),g.current=m)},y=new IntersectionObserver($,{root:e.current,threshold:[0,.9,1]}),x=Array.from({length:r}).map((f,m)=>document.querySelector(`#${j(o,m)}`)).filter(f=>!!f);return x.forEach(f=>{y.observe(f)}),()=>{x.forEach(f=>{y.unobserve(f)})}},[o,r,e]),{currentSlideIndex:S,isDisplayedLastSlide:i.has(r-1)}}function H({className:e,carouselKey:r,autoplay:o,perView:i,gap:h=0,peek:g,startAt:S,rewind:$=!0,bound:y,slideWidth:x,disabledIndicator:f,disabledPreviousButton:m,disabledNextButton:E,children:k}){const T=d.exports.useRef(null),L=d.exports.useMemo(()=>se(g),[g]),R=d.exports.useRef(null),w=te(R),V=oe(T),v=d.exports.useCallback(u=>{const p=R.current;if(!p)return;const G=j(r,u),D=p.querySelector(`#${G}`);if(!D)return;const U=p.scrollLeft,Z=p.getBoundingClientRect().left,O=D.getBoundingClientRect().left;p.scrollTo({left:U+O-Z})},[r]),I=d.exports.useMemo(()=>ee.Children.toArray(k).map((u,p)=>({child:u,slideId:j(r,p)})),[r,k]),{currentSlideIndex:C,isDisplayedLastSlide:N}=ce(R,{carouselKey:r,total:I.length}),B=C===0,q=$||!B,M=B?I.length-1:C-1,A=C===I.length-1||!!y&&N,P=$||!A,z=A?0:C+1,Y=d.exports.useCallback(()=>{v(M)},[M,v]),_=d.exports.useCallback(()=>{v(z)},[z,v]);d.exports.useEffect(()=>{if(!o||V||!P)return;const u=setInterval(()=>{_()},o);return()=>{clearInterval(u)}},[o,P,V,_]),d.exports.useEffect(()=>{if(i&&i<1)throw new Error("perView must be 1 or more.");if(i&&x)throw new Error("both perView and slideWidth cannot be set.")},[i,x]);const{slideWidth:W,sliderPaddingRight:X}=d.exports.useMemo(()=>{const u={sliderPaddingRight:0};if(!w)return u;if(i){const p=i>1?(i-1)*(h!=null?h:0):0;return{slideWidth:(w-p)/i,sliderPaddingRight:y?0:(i-1)*w}}return x?{slideWidth:x,sliderPaddingRight:y?0:w-x}:u},[y,h,i,x,w]),J=!!i&&i>1?h:0,Q=w!==W;return d.exports.useEffect(()=>{!S||v(S)},[v,S]),b(ue,{ref:T,className:e,children:[b(he,{ref:R,gapWidth:J,peek:L,children:[I.map(({slideId:u,child:p})=>b(K,{id:u,width:W,children:[p,t(pe,{isMultipleSlide:Q})]},u)),t(de,{inserted:X||L.after})]}),!m&&q&&t(be,{onClick:Y,children:"Go to previous slide"}),!E&&P&&t(ye,{onClick:_,children:"Go to next slide"}),!f&&t(fe,{children:t(ge,{children:I.map(({slideId:u},p)=>t(xe,{children:b(me,{isActive:C===p,onClick:()=>{v(p)},children:["Go to ",p+1," slide"]})},u))})})]})}const de=n.div`
  padding-left: ${({inserted:e})=>e}px;
`,pe=n.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({isMultipleSlide:e})=>e?"start":"center"};
`,K=n.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,ue=n.div`
  position: relative;
  height: 100%;
`,he=n.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > ${K} + ${K} {
    margin-left: ${({gapWidth:e})=>e!=null?e:0}px;
  }

  scroll-padding-left: ${({peek:{before:e}})=>e}px;
  scroll-padding-right: ${({peek:{after:e}})=>e}px;
  padding-left: ${({peek:{before:e}})=>e}px;
  padding-right: ${({peek:{after:e}})=>e}px;
`,fe=n.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,ge=n.ol`
  display: inline-block;
`,xe=n.li`
  display: inline-block;
`,me=n.button`
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
`,be=n(F)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,ye=n(F)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;function a({className:e,count:r}){return t(ve,{className:e,even:r%2===0,children:t("span",{children:r})})}const ve=n.div`
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
`;function we({className:e,src:r,caption:o}){return b(Se,{className:e,children:[t("div",{}),t("img",{src:r,alt:o})]})}const Se=n.div`
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
`;function ke({className:e,title:r,children:o}){return b(Ie,{className:e,children:[t("h3",{children:r}),o]})}const Ie=n.section`
  & > h3 {
    line-height: 32px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 24px;
    padding: 8px 8px 16px;
  }
`,c=Array.from({length:8}).map((e,r)=>r+1),Ce=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}];function Le(){return b(re,{title:"React Carousel Sample",children:[t($e,{title:"full width",children:t(Ee,{carouselKey:"full-width",autoplay:1e4,children:c.map(e=>t(a,{count:e},e))})}),t(Re,{children:b(Pe,{children:[t(s,{title:"autoplay 5s",children:t(l,{carouselKey:"autoplay-5s",perView:2,gap:1,autoplay:5e3,children:c.map(e=>t(a,{count:e},e))})}),t(s,{title:"images",children:t(l,{carouselKey:"images",children:Ce.map(({src:e,caption:r})=>t(we,{src:e,caption:r},e))})}),t(s,{title:"perView 2",children:t(l,{carouselKey:"perView-2",perView:2,children:c.map(e=>t(a,{count:e},e))})}),t(s,{title:"perView 4",children:t(l,{carouselKey:"perView-4",perView:4,children:c.map(e=>t(a,{count:e},e))})}),t(s,{title:"perView 5",children:t(l,{carouselKey:"perView-5",perView:5,children:c.map(e=>t(a,{count:e},e))})}),t(s,{title:"gap 5",children:t(l,{carouselKey:"gap-5",perView:3,gap:5,children:c.map(e=>t(a,{count:e},e))})}),t(s,{title:"gap 10",children:t(l,{carouselKey:"gap-10",perView:3,gap:10,children:c.map(e=>t(a,{count:e},e))})}),t(s,{title:"peek before 20",children:t(l,{carouselKey:"peek-before-20",perView:3,gap:1,peek:{before:20},children:c.map(e=>t(a,{count:e},e))})}),t(s,{title:"peek after 20",children:t(l,{carouselKey:"peek-after-20",perView:3,gap:1,peek:{after:20},bound:!0,children:c.map(e=>t(a,{count:e},e))})}),t(s,{title:"peek 20",children:t(l,{carouselKey:"peek-20",perView:3,gap:1,peek:20,children:c.map(e=>t(a,{count:e},e))})}),t(s,{title:"disabled indicator",children:t(l,{carouselKey:"disabled-indicator",perView:3,gap:1,disabledIndicator:!0,children:c.map(e=>t(a,{count:e},e))})}),t(s,{title:"hide previous button",children:t(l,{carouselKey:"disabled-previous-button",perView:3,gap:1,disabledPreviousButton:!0,children:c.map(e=>t(a,{count:e},e))})}),t(s,{title:"hide next button",children:t(l,{carouselKey:"disabled-next-button",perView:3,gap:1,disabledNextButton:!0,children:c.map(e=>t(a,{count:e},e))})}),t(s,{title:"start at 3",children:t(l,{carouselKey:"start-at-3",perView:3,gap:1,startAt:2,children:c.map(e=>t(a,{count:e},e))})}),t(s,{title:"not rewind",children:t(l,{carouselKey:"not-rewind",perView:2,gap:1,rewind:!1,children:c.map(e=>t(a,{count:e},e))})}),t(s,{title:"bound",children:t(l,{carouselKey:"bound",perView:3,gap:1,bound:!0,children:c.map(e=>t(a,{count:e},e))})}),t(s,{title:"slide width 140",children:t(l,{carouselKey:"slide-width",slideWidth:140,gap:1,children:c.map(e=>t(a,{count:e},e))})})]})})]})}const s=n(ke)`
  background-color: #fff;
`,$e=n(s)`
  margin: 16px 0;
`,Ee=n(H)`
  width: 100%;
  height: 300px;
`,Re=n.div`
  margin: 16px 0;
`,l=n(H)``,Pe=n.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;

  padding: 0;
  margin: 0 -8px -8px 0;

  & > ${s} {
    margin: 0 8px 8px 0;

    & > ${l} {
      width: calc(calc(1280px - 24px) / 4);
      height: 225px;
    }
  }
`;export{Le as default};
