import{s as i,j as m,a as t,r as s,R as Z}from"./index.3d78c112.js";function G({className:e,onClick:r,children:n}){return m(ee,{className:e,onClick:r,children:[t(te,{}),n]})}const ee=i.button`
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
`,te=i.div`
  margin-right: 4px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 10px 6px 0;
  border-color: transparent #ffe transparent transparent;
`;function re(e){const[r,n]=s.exports.useState(null),a=s.exports.useRef(0),x=s.exports.useCallback(u=>{u!==a.current&&(console.log(`current width: ${u}px`),n(u),a.current=u)},[]);return s.exports.useEffect(()=>{if(!e.current)return;const u=y=>{y.forEach(w=>{x(w.contentRect.width)})},b=e.current,v=new ResizeObserver(u);return v.observe(b),()=>{v.unobserve(b)}},[e,x]),r}const ie=e=>{var r,n;return typeof e=="object"?{before:(r=e.before)!=null?r:0,after:(n=e.after)!=null?n:0}:typeof e=="number"?{before:e,after:e}:{before:0,after:0}},ne=e=>{var r,n;return typeof e=="object"?{previous:(r=e.previous)!=null?r:!1,next:(n=e.next)!=null?n:!1}:typeof e=="boolean"?{previous:e,next:e}:{previous:!1,next:!1}},K=(e,r)=>`${e}_${r}`,oe=e=>+e.slice(e.lastIndexOf("_")+1),se=(e,r)=>e.size===r.size&&Array.from(e).every(n=>r.has(n));function le(e,{total:r,carouselKey:n}){const[a,x]=s.exports.useState(new Set),u=s.exports.useRef(a),b=Math.min(...Array.from(a));return s.exports.useEffect(()=>{if(!e.current)return;const v=f=>{const g=new Set(u.current);f.forEach(k=>{const I=oe(k.target.id);k.intersectionRatio>.9?g.add(I):g.delete(I)}),!se(g,u.current)&&(x(g),u.current=g)},y=new IntersectionObserver(v,{root:e.current,threshold:[0,.9,1]}),w=Array.from({length:r}).map((f,g)=>document.querySelector(`#${K(n,g)}`)).filter(f=>!!f);return w.forEach(f=>{y.observe(f)}),()=>{w.forEach(f=>{y.unobserve(f)})}},[n,r,e]),{currentSlideIndex:b,isDisplayedLastSlide:a.has(r-1)}}function D({className:e,carouselKey:r,autoplay:n,perView:a,gap:x=0,peek:u,startAt:b,rewind:v=!0,bound:y,disabledIndicator:w,disabledSideButton:f,children:g}){const k=s.exports.useMemo(()=>ie(u),[u]),I=s.exports.useMemo(()=>ne(f),[f]),R=s.exports.useRef(null),E=re(R),[{slideWidth:_,sliderPaddingRight:F,gapWidth:O},q]=s.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[B,P]=s.exports.useState(!1),S=s.exports.useCallback(h=>{const p=R.current;if(!p)return;const X=K(r,h),M=p.querySelector(`#${X}`);if(!M)return;const J=p.scrollLeft,Q=p.getBoundingClientRect().left,U=M.getBoundingClientRect().left;p.scrollTo({left:J+U-Q})},[r]),$=s.exports.useMemo(()=>Z.Children.toArray(g).map((h,p)=>({child:h,slideId:K(r,p)})),[r,g]),{currentSlideIndex:C,isDisplayedLastSlide:N}=le(R,{carouselKey:r,total:$.length}),W=C===0,Y=v||!W,z=W?$.length-1:C-1,L=C===$.length-1||!!y&&N,j=v||!L,A=L?0:C+1,H=s.exports.useCallback(()=>{S(z)},[z,S]),V=s.exports.useCallback(()=>{S(A)},[A,S]);return s.exports.useEffect(()=>{if(!n||B||!j)return;const h=setInterval(()=>{V()},n);return()=>{clearInterval(h)}},[n,j,B,V]),s.exports.useEffect(()=>{if(!a)return;if(a<1)throw new Error("perView must be 1 or more.");if(!E)return;const h=a>1?(a-1)*(x!=null?x:0):0,p=(E-h)/a;q({slideWidth:p,sliderPaddingRight:y?0:(a-1)*E,gapWidth:a>1?x:0})},[y,x,a,E]),s.exports.useEffect(()=>{!b||S(b)},[S,b]),m(de,{className:e,onMouseEnter:()=>{P(!0)},onMouseLeave:()=>{P(!1)},children:[m(pe,{ref:R,gapWidth:O,peek:k,children:[$.map(({slideId:h,child:p})=>m(T,{id:h,width:_!=null?_:void 0,children:[p,t(ce,{multipleSlide:!!a&&a>1})]},h)),t(ae,{inserted:F||k.after})]}),!I.previous&&Y&&t(ge,{onClick:H,children:"Go to previous slide"}),!I.next&&j&&t(me,{onClick:V,children:"Go to next slide"}),!w&&t(ue,{children:t(he,{children:$.map(({slideId:h},p)=>t(fe,{children:m(xe,{isActive:C===p,onClick:()=>{S(p)},children:["Go to ",p+1," slide"]})},h))})})]})}const ae=i.div`
  padding-left: ${({inserted:e})=>e}px;
`,ce=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({multipleSlide:e})=>e?"start":"center"};
`,T=i.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,de=i.div`
  position: relative;
  height: 100%;
`,pe=i.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > ${T} + ${T} {
    margin-left: ${({gapWidth:e})=>e!=null?e:0}px;
  }

  scroll-padding: ${({peek:{before:e,after:r}})=>!e&&!r?"0":`0 ${r}px 0 ${e}px`};
  padding: ${({peek:{before:e,after:r}})=>!e&&!r?"0":`0 ${r}px 0 ${e}px`};
`,ue=i.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,he=i.ol`
  display: inline-block;
`,fe=i.li`
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
`,ge=i(G)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,me=i(G)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;function c({className:e,count:r}){return t(be,{className:e,even:r%2===0,children:t("span",{children:r})})}const be=i.div`
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
`;function ye({className:e,src:r,caption:n}){return m(ve,{className:e,children:[t("div",{}),t("img",{src:r,alt:n})]})}const ve=i.div`
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
`;function Se({className:e,title:r,children:n}){return m(we,{className:e,children:[t("h3",{children:r}),n]})}const we=i.section`
  & > h3 {
    line-height: 32px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 24px;
    padding: 8px 8px 16px;
  }
`,d=Array.from({length:8}).map((e,r)=>r+1),ke=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}];function Te(){return t(Ie,{children:m($e,{children:[t(Ce,{children:"React Carousel Sample"}),t(Re,{title:"full width",children:t(Ee,{carouselKey:"full-width",autoplay:1e4,children:d.map(e=>t(c,{count:e},e))})}),t(_e,{children:m(je,{children:[t(o,{title:"autoplay 5s",children:t(l,{carouselKey:"autoplay-5s",perView:2,gap:1,autoplay:5e3,children:d.map(e=>t(c,{count:e},e))})}),t(o,{title:"images",children:t(l,{carouselKey:"images",children:ke.map(({src:e,caption:r})=>t(ye,{src:e,caption:r},e))})}),t(o,{title:"perView 2",children:t(l,{carouselKey:"perView-2",perView:2,children:d.map(e=>t(c,{count:e},e))})}),t(o,{title:"perView 4",children:t(l,{carouselKey:"perView-4",perView:4,children:d.map(e=>t(c,{count:e},e))})}),t(o,{title:"perView 5",children:t(l,{carouselKey:"perView-5",perView:5,children:d.map(e=>t(c,{count:e},e))})}),t(o,{title:"gap 5",children:t(l,{carouselKey:"gap-5",perView:3,gap:5,children:d.map(e=>t(c,{count:e},e))})}),t(o,{title:"gap 10",children:t(l,{carouselKey:"gap-10",perView:3,gap:10,children:d.map(e=>t(c,{count:e},e))})}),t(o,{title:"peek before 20",children:t(l,{carouselKey:"peek-before-20",perView:3,gap:1,peek:{before:20},children:d.map(e=>t(c,{count:e},e))})}),t(o,{title:"peek after 20",children:t(l,{carouselKey:"peek-after-20",perView:3,gap:1,peek:{after:20},bound:!0,children:d.map(e=>t(c,{count:e},e))})}),t(o,{title:"peek 20",children:t(l,{carouselKey:"peek-20",perView:3,gap:1,peek:20,children:d.map(e=>t(c,{count:e},e))})}),t(o,{title:"disabled indicator",children:t(l,{carouselKey:"disabled-indicator",perView:3,gap:1,disabledIndicator:!0,children:d.map(e=>t(c,{count:e},e))})}),t(o,{title:"hide previous button",children:t(l,{carouselKey:"disabled-previous-button",perView:3,gap:1,disabledSideButton:{previous:!0},children:d.map(e=>t(c,{count:e},e))})}),t(o,{title:"hide next button",children:t(l,{carouselKey:"disabled-next-button",perView:3,gap:1,disabledSideButton:{next:!0},children:d.map(e=>t(c,{count:e},e))})}),t(o,{title:"hide side button",children:t(l,{carouselKey:"disabled-side-button",perView:3,gap:1,disabledSideButton:!0,children:d.map(e=>t(c,{count:e},e))})}),t(o,{title:"start at 3",children:t(l,{carouselKey:"start-at-3",perView:3,gap:1,startAt:2,children:d.map(e=>t(c,{count:e},e))})}),t(o,{title:"not rewind",children:t(l,{carouselKey:"not-rewind",perView:2,gap:1,rewind:!1,children:d.map(e=>t(c,{count:e},e))})}),t(o,{title:"bound",children:t(l,{carouselKey:"bound",perView:3,gap:1,bound:!0,children:d.map(e=>t(c,{count:e},e))})})]})})]})})}const Ie=i.main`
  background-color: #eee;
  min-height: 100vh;
`,$e=i.div`
  max-width: 1280px;
  @media (min-width: 1280px) {
    margin: 0 auto;
  }
`,Ce=i.h2`
  background-color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 32px;
  padding: 8px 0;
`,o=i(Se)`
  background-color: #fff;
`,Re=i(o)`
  margin: 16px 0;
`,Ee=i(D)`
  width: 100%;
  height: 300px;
`,_e=i.div`
  margin: 16px 0;
`,l=i(D)``,je=i.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;

  padding: 0;
  margin: 0 -8px -8px 0;

  & > ${o} {
    margin: 0 8px 8px 0;

    & > ${l} {
      width: calc(calc(1280px - 24px) / 4);
      height: 225px;
    }
  }
`;export{Te as default};
