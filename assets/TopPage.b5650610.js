import{s as i,j as y,a as t,r as n,R as U}from"./index.ff88109f.js";function F({className:e,onClick:r,children:o}){return y(Z,{className:e,onClick:r,children:[t(ee,{}),o]})}const Z=i.button`
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
`,ee=i.div`
  margin-right: 4px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 10px 6px 0;
  border-color: transparent #ffe transparent transparent;
`;function te(e){const[r,o]=n.exports.useState(null),l=n.exports.useRef(0),h=n.exports.useCallback(u=>{u!==l.current&&(console.log(`current width: ${u}px`),o(u),l.current=u)},[]);return n.exports.useEffect(()=>{if(!e.current)return;const u=g=>{g.forEach(f=>{h(f.contentRect.width)})},w=e.current,v=new ResizeObserver(u);return v.observe(w),()=>{v.unobserve(w)}},[e,h]),r}const re=e=>{var r,o;return typeof e=="object"?{before:(r=e.before)!=null?r:0,after:(o=e.after)!=null?o:0}:typeof e=="number"?{before:e,after:e}:{before:0,after:0}},T=(e,r)=>`${e}_${r}`,ie=e=>+e.slice(e.lastIndexOf("_")+1),ne=(e,r)=>e.size===r.size&&Array.from(e).every(o=>r.has(o));function oe(e,{total:r,carouselKey:o}){const[l,h]=n.exports.useState(new Set),u=n.exports.useRef(l),w=Math.min(...Array.from(l));return n.exports.useEffect(()=>{if(!e.current)return;const v=m=>{const b=new Set(u.current);m.forEach(R=>{const I=ie(R.target.id);R.intersectionRatio>.9?b.add(I):b.delete(I)}),!ne(b,u.current)&&(h(b),u.current=b)},g=new IntersectionObserver(v,{root:e.current,threshold:[0,.9,1]}),f=Array.from({length:r}).map((m,b)=>document.querySelector(`#${T(o,b)}`)).filter(m=>!!m);return f.forEach(m=>{g.observe(m)}),()=>{f.forEach(m=>{g.unobserve(m)})}},[o,r,e]),{currentSlideIndex:w,isDisplayedLastSlide:l.has(r-1)}}function N({className:e,carouselKey:r,autoplay:o,perView:l,gap:h=0,peek:u,startAt:w,rewind:v=!0,bound:g,slideWidth:f,disabledIndicator:m,disabledPreviousButton:b,disabledNextButton:R,children:I}){const W=n.exports.useMemo(()=>re(u),[u]),E=n.exports.useRef(null),S=te(E),[_,B]=n.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[z,L]=n.exports.useState(!1),k=n.exports.useCallback(x=>{const p=E.current;if(!p)return;const P=T(r,x),D=p.querySelector(`#${P}`);if(!D)return;const X=p.scrollLeft,J=p.getBoundingClientRect().left,Q=D.getBoundingClientRect().left;p.scrollTo({left:X+Q-J})},[r]),$=n.exports.useMemo(()=>U.Children.toArray(I).map((x,p)=>({child:x,slideId:T(r,p)})),[r,I]),{currentSlideIndex:C,isDisplayedLastSlide:q}=oe(E,{carouselKey:r,total:$.length}),A=C===0,Y=v||!A,M=A?$.length-1:C-1,G=C===$.length-1||!!g&&q,j=v||!G,O=G?0:C+1,H=n.exports.useCallback(()=>{k(M)},[M,k]),K=n.exports.useCallback(()=>{k(O)},[O,k]);return n.exports.useEffect(()=>{if(!o||z||!j)return;const x=setInterval(()=>{K()},o);return()=>{clearInterval(x)}},[o,j,z,K]),n.exports.useEffect(()=>{if(!(!l||!f))throw new Error("both perView and slideWidth cannot be set.")},[l,f]),n.exports.useEffect(()=>{if(!l)return;if(l<1)throw new Error("perView must be 1 or more.");if(!S)return;const x=l>1?(l-1)*(h!=null?h:0):0,p=(S-x)/l;B({slideWidth:p,sliderPaddingRight:g?0:(l-1)*S,gapWidth:l>1?h:0,multipleSlide:l>1})},[g,h,l,S]),n.exports.useEffect(()=>{!f||!S||B({slideWidth:f,sliderPaddingRight:g?0:S-f,gapWidth:h,multipleSlide:S>f})},[g,h,f,S]),n.exports.useEffect(()=>{!w||k(w)},[k,w]),y(ce,{className:e,onMouseEnter:()=>{L(!0)},onMouseLeave:()=>{L(!1)},children:[y(ae,{ref:E,gapWidth:_.gapWidth,peek:W,children:[$.map(({slideId:x,child:p})=>{var P;return y(V,{id:x,width:(P=_.slideWidth)!=null?P:void 0,children:[p,t(le,{multipleSlide:!!_.multipleSlide})]},x)}),t(se,{inserted:_.sliderPaddingRight||W.after})]}),!b&&Y&&t(fe,{onClick:H,children:"Go to previous slide"}),!R&&j&&t(xe,{onClick:K,children:"Go to next slide"}),!m&&t(de,{children:t(pe,{children:$.map(({slideId:x},p)=>t(ue,{children:y(he,{isActive:C===p,onClick:()=>{k(p)},children:["Go to ",p+1," slide"]})},x))})})]})}const se=i.div`
  padding-left: ${({inserted:e})=>e}px;
`,le=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({multipleSlide:e})=>e?"start":"center"};
`,V=i.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,ce=i.div`
  position: relative;
  height: 100%;
`,ae=i.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > ${V} + ${V} {
    margin-left: ${({gapWidth:e})=>e!=null?e:0}px;
  }

  scroll-padding: ${({peek:{before:e,after:r}})=>!e&&!r?"0":`0 ${r}px 0 ${e}px`};
  padding: ${({peek:{before:e,after:r}})=>!e&&!r?"0":`0 ${r}px 0 ${e}px`};
`,de=i.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,pe=i.ol`
  display: inline-block;
`,ue=i.li`
  display: inline-block;
`,he=i.button`
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
`,fe=i(F)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,xe=i(F)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;function a({className:e,count:r}){return t(ge,{className:e,even:r%2===0,children:t("span",{children:r})})}const ge=i.div`
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
`;function me({className:e,src:r,caption:o}){return y(be,{className:e,children:[t("div",{}),t("img",{src:r,alt:o})]})}const be=i.div`
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
`;function ye({className:e,title:r,children:o}){return y(we,{className:e,children:[t("h3",{children:r}),o]})}const we=i.section`
  & > h3 {
    line-height: 32px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 24px;
    padding: 8px 8px 16px;
  }
`,d=Array.from({length:8}).map((e,r)=>r+1),Se=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}];function je(){return t(ve,{children:y(ke,{children:[t(Ie,{children:"React Carousel Sample"}),t($e,{title:"full width",children:t(Ce,{carouselKey:"full-width",autoplay:1e4,children:d.map(e=>t(a,{count:e},e))})}),t(Re,{children:y(Ee,{children:[t(s,{title:"autoplay 5s",children:t(c,{carouselKey:"autoplay-5s",perView:2,gap:1,autoplay:5e3,children:d.map(e=>t(a,{count:e},e))})}),t(s,{title:"images",children:t(c,{carouselKey:"images",children:Se.map(({src:e,caption:r})=>t(me,{src:e,caption:r},e))})}),t(s,{title:"perView 2",children:t(c,{carouselKey:"perView-2",perView:2,children:d.map(e=>t(a,{count:e},e))})}),t(s,{title:"perView 4",children:t(c,{carouselKey:"perView-4",perView:4,children:d.map(e=>t(a,{count:e},e))})}),t(s,{title:"perView 5",children:t(c,{carouselKey:"perView-5",perView:5,children:d.map(e=>t(a,{count:e},e))})}),t(s,{title:"gap 5",children:t(c,{carouselKey:"gap-5",perView:3,gap:5,children:d.map(e=>t(a,{count:e},e))})}),t(s,{title:"gap 10",children:t(c,{carouselKey:"gap-10",perView:3,gap:10,children:d.map(e=>t(a,{count:e},e))})}),t(s,{title:"peek before 20",children:t(c,{carouselKey:"peek-before-20",perView:3,gap:1,peek:{before:20},children:d.map(e=>t(a,{count:e},e))})}),t(s,{title:"peek after 20",children:t(c,{carouselKey:"peek-after-20",perView:3,gap:1,peek:{after:20},bound:!0,children:d.map(e=>t(a,{count:e},e))})}),t(s,{title:"peek 20",children:t(c,{carouselKey:"peek-20",perView:3,gap:1,peek:20,children:d.map(e=>t(a,{count:e},e))})}),t(s,{title:"disabled indicator",children:t(c,{carouselKey:"disabled-indicator",perView:3,gap:1,disabledIndicator:!0,children:d.map(e=>t(a,{count:e},e))})}),t(s,{title:"hide previous button",children:t(c,{carouselKey:"disabled-previous-button",perView:3,gap:1,disabledPreviousButton:!0,children:d.map(e=>t(a,{count:e},e))})}),t(s,{title:"hide next button",children:t(c,{carouselKey:"disabled-next-button",perView:3,gap:1,disabledNextButton:!0,children:d.map(e=>t(a,{count:e},e))})}),t(s,{title:"start at 3",children:t(c,{carouselKey:"start-at-3",perView:3,gap:1,startAt:2,children:d.map(e=>t(a,{count:e},e))})}),t(s,{title:"not rewind",children:t(c,{carouselKey:"not-rewind",perView:2,gap:1,rewind:!1,children:d.map(e=>t(a,{count:e},e))})}),t(s,{title:"bound",children:t(c,{carouselKey:"bound",perView:3,gap:1,bound:!0,children:d.map(e=>t(a,{count:e},e))})}),t(s,{title:"slide width 140",children:t(c,{carouselKey:"slide-width",slideWidth:140,gap:1,children:d.map(e=>t(a,{count:e},e))})})]})})]})})}const ve=i.main`
  background-color: #eee;
  min-height: 100vh;
`,ke=i.div`
  max-width: 1280px;
  @media (min-width: 1280px) {
    margin: 0 auto;
  }
`,Ie=i.h2`
  background-color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 32px;
  padding: 8px 0;
`,s=i(ye)`
  background-color: #fff;
`,$e=i(s)`
  margin: 16px 0;
`,Ce=i(N)`
  width: 100%;
  height: 300px;
`,Re=i.div`
  margin: 16px 0;
`,c=i(N)``,Ee=i.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;

  padding: 0;
  margin: 0 -8px -8px 0;

  & > ${s} {
    margin: 0 8px 8px 0;

    & > ${c} {
      width: calc(calc(1280px - 24px) / 4);
      height: 225px;
    }
  }
`;export{je as default};
