import{s as i,j as x,a as t,r as p,R as ee}from"./index.4bcebcc2.js";import{u as te}from"./useContentWidth.4caa224a.js";import{P as re}from"./PageTemplate.37dfa1d8.js";function F({className:e,onClick:r,children:s}){return x(ie,{className:e,onClick:r,children:[t(ne,{}),s]})}const ie=i.button`
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
`,ne=i.div`
  margin-right: 4px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 10px 6px 0;
  border-color: transparent #ffe transparent transparent;
`,oe=e=>{var r,s;switch(typeof e){case"object":return{before:(r=e.before)!=null?r:0,after:(s=e.after)!=null?s:0};case"number":return{before:e,after:e};default:return{before:0,after:0}}},j=(e,r)=>`${e}_${r}`,se=e=>+e.slice(e.lastIndexOf("_")+1),le=(e,r)=>e.size===r.size&&Array.from(e).every(s=>r.has(s));function ae(e,{total:r,carouselKey:s}){const[c,m]=p.exports.useState(new Set),w=p.exports.useRef(c),v=Math.min(...Array.from(c));return p.exports.useEffect(()=>{if(!e.current)return;const $=u=>{const g=new Set(w.current);u.forEach(P=>{const k=se(P.target.id);P.intersectionRatio>.9?g.add(k):g.delete(k)}),!le(g,w.current)&&(m(g),w.current=g)},b=new IntersectionObserver($,{root:e.current,threshold:[0,.9,1]}),f=Array.from({length:r}).map((u,g)=>document.querySelector(`#${j(s,g)}`)).filter(u=>!!u);return f.forEach(u=>{b.observe(u)}),()=>{f.forEach(u=>{b.unobserve(u)})}},[s,r,e]),{currentSlideIndex:v,isDisplayedLastSlide:c.has(r-1)}}function N({className:e,carouselKey:r,autoplay:s,perView:c,gap:m=0,peek:w,startAt:v,rewind:$=!0,bound:b,slideWidth:f,disabledIndicator:u,disabledPreviousButton:g,disabledNextButton:P,children:k}){const T=p.exports.useMemo(()=>oe(w),[w]),R=p.exports.useRef(null),S=te(R),[V,B]=p.exports.useState(!1),y=p.exports.useCallback(h=>{const d=R.current;if(!d)return;const G=j(r,h),D=d.querySelector(`#${G}`);if(!D)return;const U=d.scrollLeft,Z=d.getBoundingClientRect().left,O=D.getBoundingClientRect().left;d.scrollTo({left:U+O-Z})},[r]),I=p.exports.useMemo(()=>ee.Children.toArray(k).map((h,d)=>({child:h,slideId:j(r,d)})),[r,k]),{currentSlideIndex:C,isDisplayedLastSlide:q}=ae(R,{carouselKey:r,total:I.length}),L=C===0,Y=$||!L,M=L?I.length-1:C-1,A=C===I.length-1||!!b&&q,_=$||!A,z=A?0:C+1,H=p.exports.useCallback(()=>{y(M)},[M,y]),E=p.exports.useCallback(()=>{y(z)},[z,y]);p.exports.useEffect(()=>{if(!s||V||!_)return;const h=setInterval(()=>{E()},s);return()=>{clearInterval(h)}},[s,_,V,E]),p.exports.useEffect(()=>{if(c&&c<1)throw new Error("perView must be 1 or more.");if(c&&f)throw new Error("both perView and slideWidth cannot be set.")},[c,f]);const{slideWidth:W,sliderPaddingRight:X}=p.exports.useMemo(()=>{const h={sliderPaddingRight:0};if(!S)return h;if(c){const d=c>1?(c-1)*(m!=null?m:0):0;return{slideWidth:(S-d)/c,sliderPaddingRight:b?0:(c-1)*S}}return f?{slideWidth:f,sliderPaddingRight:b?0:S-f}:h},[b,m,c,f,S]),J=!!c&&c>1?m:0,Q=S!==W;return p.exports.useEffect(()=>{!v||y(v)},[y,v]),x(pe,{className:e,onMouseEnter:()=>{B(!0)},onMouseLeave:()=>{B(!1)},children:[x(he,{ref:R,gapWidth:J,peek:T,children:[I.map(({slideId:h,child:d})=>x(K,{id:h,width:W,children:[d,t(de,{isMultipleSlide:Q})]},h)),t(ce,{inserted:X||T.after})]}),!g&&Y&&t(me,{onClick:H,children:"Go to previous slide"}),!P&&_&&t(be,{onClick:E,children:"Go to next slide"}),!u&&t(ue,{children:t(fe,{children:I.map(({slideId:h},d)=>t(ge,{children:x(xe,{isActive:C===d,onClick:()=>{y(d)},children:["Go to ",d+1," slide"]})},h))})})]})}const ce=i.div`
  padding-left: ${({inserted:e})=>e}px;
`,de=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({isMultipleSlide:e})=>e?"start":"center"};
`,K=i.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,pe=i.div`
  position: relative;
  height: 100%;
`,he=i.ol`
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
`,ue=i.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,fe=i.ol`
  display: inline-block;
`,ge=i.li`
  display: inline-block;
`,xe=i.button`
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
`,me=i(F)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,be=i(F)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;function l({className:e,count:r}){return t(ye,{className:e,even:r%2===0,children:t("span",{children:r})})}const ye=i.div`
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
`;function we({className:e,src:r,caption:s}){return x(Se,{className:e,children:[t("div",{}),t("img",{src:r,alt:s})]})}const Se=i.div`
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
`;function ve({className:e,title:r,children:s}){return x(ke,{className:e,children:[t("h3",{children:r}),s]})}const ke=i.section`
  & > h3 {
    line-height: 32px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 24px;
    padding: 8px 8px 16px;
  }
`,a=Array.from({length:8}).map((e,r)=>r+1),Ie=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}];function Te(){return x(re,{title:"React Carousel Sample",children:[t(Ce,{title:"full width",children:t($e,{carouselKey:"full-width",autoplay:1e4,children:a.map(e=>t(l,{count:e},e))})}),t(Pe,{children:x(Re,{children:[t(n,{title:"autoplay 5s",children:t(o,{carouselKey:"autoplay-5s",perView:2,gap:1,autoplay:5e3,children:a.map(e=>t(l,{count:e},e))})}),t(n,{title:"images",children:t(o,{carouselKey:"images",children:Ie.map(({src:e,caption:r})=>t(we,{src:e,caption:r},e))})}),t(n,{title:"perView 2",children:t(o,{carouselKey:"perView-2",perView:2,children:a.map(e=>t(l,{count:e},e))})}),t(n,{title:"perView 4",children:t(o,{carouselKey:"perView-4",perView:4,children:a.map(e=>t(l,{count:e},e))})}),t(n,{title:"perView 5",children:t(o,{carouselKey:"perView-5",perView:5,children:a.map(e=>t(l,{count:e},e))})}),t(n,{title:"gap 5",children:t(o,{carouselKey:"gap-5",perView:3,gap:5,children:a.map(e=>t(l,{count:e},e))})}),t(n,{title:"gap 10",children:t(o,{carouselKey:"gap-10",perView:3,gap:10,children:a.map(e=>t(l,{count:e},e))})}),t(n,{title:"peek before 20",children:t(o,{carouselKey:"peek-before-20",perView:3,gap:1,peek:{before:20},children:a.map(e=>t(l,{count:e},e))})}),t(n,{title:"peek after 20",children:t(o,{carouselKey:"peek-after-20",perView:3,gap:1,peek:{after:20},bound:!0,children:a.map(e=>t(l,{count:e},e))})}),t(n,{title:"peek 20",children:t(o,{carouselKey:"peek-20",perView:3,gap:1,peek:20,children:a.map(e=>t(l,{count:e},e))})}),t(n,{title:"disabled indicator",children:t(o,{carouselKey:"disabled-indicator",perView:3,gap:1,disabledIndicator:!0,children:a.map(e=>t(l,{count:e},e))})}),t(n,{title:"hide previous button",children:t(o,{carouselKey:"disabled-previous-button",perView:3,gap:1,disabledPreviousButton:!0,children:a.map(e=>t(l,{count:e},e))})}),t(n,{title:"hide next button",children:t(o,{carouselKey:"disabled-next-button",perView:3,gap:1,disabledNextButton:!0,children:a.map(e=>t(l,{count:e},e))})}),t(n,{title:"start at 3",children:t(o,{carouselKey:"start-at-3",perView:3,gap:1,startAt:2,children:a.map(e=>t(l,{count:e},e))})}),t(n,{title:"not rewind",children:t(o,{carouselKey:"not-rewind",perView:2,gap:1,rewind:!1,children:a.map(e=>t(l,{count:e},e))})}),t(n,{title:"bound",children:t(o,{carouselKey:"bound",perView:3,gap:1,bound:!0,children:a.map(e=>t(l,{count:e},e))})}),t(n,{title:"slide width 140",children:t(o,{carouselKey:"slide-width",slideWidth:140,gap:1,children:a.map(e=>t(l,{count:e},e))})})]})})]})}const n=i(ve)`
  background-color: #fff;
`,Ce=i(n)`
  margin: 16px 0;
`,$e=i(N)`
  width: 100%;
  height: 300px;
`,Pe=i.div`
  margin: 16px 0;
`,o=i(N)``,Re=i.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;

  padding: 0;
  margin: 0 -8px -8px 0;

  & > ${n} {
    margin: 0 8px 8px 0;

    & > ${o} {
      width: calc(calc(1280px - 24px) / 4);
      height: 225px;
    }
  }
`;export{Te as default};
