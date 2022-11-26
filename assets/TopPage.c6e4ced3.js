import{s as i,j as y,a as t,r as o,R as U}from"./index.f6f715f3.js";function F({className:e,onClick:r,children:n}){return y(Z,{className:e,onClick:r,children:[t(ee,{}),n]})}const Z=i.button`
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
`;function te(e){const[r,n]=o.exports.useState(null),a=o.exports.useRef(0),h=o.exports.useCallback(u=>{u!==a.current&&(console.log(`current width: ${u}px`),n(u),a.current=u)},[]);return o.exports.useEffect(()=>{if(!e.current)return;const u=g=>{g.forEach(f=>{h(f.contentRect.width)})},S=e.current,w=new ResizeObserver(u);return w.observe(S),()=>{w.unobserve(S)}},[e,h]),r}const re=e=>{var r,n;return typeof e=="object"?{before:(r=e.before)!=null?r:0,after:(n=e.after)!=null?n:0}:typeof e=="number"?{before:e,after:e}:{before:0,after:0}},ie=e=>{var r,n;return typeof e=="object"?{previous:(r=e.previous)!=null?r:!1,next:(n=e.next)!=null?n:!1}:typeof e=="boolean"?{previous:e,next:e}:{previous:!1,next:!1}},P=(e,r)=>`${e}_${r}`,ne=e=>+e.slice(e.lastIndexOf("_")+1),oe=(e,r)=>e.size===r.size&&Array.from(e).every(n=>r.has(n));function se(e,{total:r,carouselKey:n}){const[a,h]=o.exports.useState(new Set),u=o.exports.useRef(a),S=Math.min(...Array.from(a));return o.exports.useEffect(()=>{if(!e.current)return;const w=m=>{const b=new Set(u.current);m.forEach(I=>{const $=ne(I.target.id);I.intersectionRatio>.9?b.add($):b.delete($)}),!oe(b,u.current)&&(h(b),u.current=b)},g=new IntersectionObserver(w,{root:e.current,threshold:[0,.9,1]}),f=Array.from({length:r}).map((m,b)=>document.querySelector(`#${P(n,b)}`)).filter(m=>!!m);return f.forEach(m=>{g.observe(m)}),()=>{f.forEach(m=>{g.unobserve(m)})}},[n,r,e]),{currentSlideIndex:S,isDisplayedLastSlide:a.has(r-1)}}function q({className:e,carouselKey:r,autoplay:n,perView:a,gap:h=0,peek:u,startAt:S,rewind:w=!0,bound:g,slideWidth:f,disabledIndicator:m,disabledSideButton:b,children:I}){const $=o.exports.useMemo(()=>re(u),[u]),B=o.exports.useMemo(()=>ie(b),[b]),E=o.exports.useRef(null),v=te(E),[_,W]=o.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[z,L]=o.exports.useState(!1),k=o.exports.useCallback(x=>{const p=E.current;if(!p)return;const j=P(r,x),D=p.querySelector(`#${j}`);if(!D)return;const X=p.scrollLeft,J=p.getBoundingClientRect().left,Q=D.getBoundingClientRect().left;p.scrollTo({left:X+Q-J})},[r]),C=o.exports.useMemo(()=>U.Children.toArray(I).map((x,p)=>({child:x,slideId:P(r,p)})),[r,I]),{currentSlideIndex:R,isDisplayedLastSlide:N}=se(E,{carouselKey:r,total:C.length}),A=R===0,Y=w||!A,M=A?C.length-1:R-1,G=R===C.length-1||!!g&&N,K=w||!G,O=G?0:R+1,H=o.exports.useCallback(()=>{k(M)},[M,k]),V=o.exports.useCallback(()=>{k(O)},[O,k]);return o.exports.useEffect(()=>{if(!n||z||!K)return;const x=setInterval(()=>{V()},n);return()=>{clearInterval(x)}},[n,K,z,V]),o.exports.useEffect(()=>{if(!(!a||!f))throw new Error("both perView and slideWidth cannot be set.")},[a,f]),o.exports.useEffect(()=>{if(!a)return;if(a<1)throw new Error("perView must be 1 or more.");if(!v)return;const x=a>1?(a-1)*(h!=null?h:0):0,p=(v-x)/a;W({slideWidth:p,sliderPaddingRight:g?0:(a-1)*v,gapWidth:a>1?h:0,multipleSlide:a>1})},[g,h,a,v]),o.exports.useEffect(()=>{!f||!v||W({slideWidth:f,sliderPaddingRight:g?0:v-f,gapWidth:h,multipleSlide:v>f})},[g,h,f,v]),o.exports.useEffect(()=>{!S||k(S)},[k,S]),y(ce,{className:e,onMouseEnter:()=>{L(!0)},onMouseLeave:()=>{L(!1)},children:[y(de,{ref:E,gapWidth:_.gapWidth,peek:$,children:[C.map(({slideId:x,child:p})=>{var j;return y(T,{id:x,width:(j=_.slideWidth)!=null?j:void 0,children:[p,t(ae,{multipleSlide:!!_.multipleSlide})]},x)}),t(le,{inserted:_.sliderPaddingRight||$.after})]}),!B.previous&&Y&&t(xe,{onClick:H,children:"Go to previous slide"}),!B.next&&K&&t(ge,{onClick:V,children:"Go to next slide"}),!m&&t(pe,{children:t(ue,{children:C.map(({slideId:x},p)=>t(he,{children:y(fe,{isActive:R===p,onClick:()=>{k(p)},children:["Go to ",p+1," slide"]})},x))})})]})}const le=i.div`
  padding-left: ${({inserted:e})=>e}px;
`,ae=i.div`
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
`,ce=i.div`
  position: relative;
  height: 100%;
`,de=i.ol`
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
`,pe=i.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,ue=i.ol`
  display: inline-block;
`,he=i.li`
  display: inline-block;
`,fe=i.button`
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
`,xe=i(F)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,ge=i(F)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;function c({className:e,count:r}){return t(me,{className:e,even:r%2===0,children:t("span",{children:r})})}const me=i.div`
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
`;function be({className:e,src:r,caption:n}){return y(ye,{className:e,children:[t("div",{}),t("img",{src:r,alt:n})]})}const ye=i.div`
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
`;function Se({className:e,title:r,children:n}){return y(ve,{className:e,children:[t("h3",{children:r}),n]})}const ve=i.section`
  & > h3 {
    line-height: 32px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 24px;
    padding: 8px 8px 16px;
  }
`,d=Array.from({length:8}).map((e,r)=>r+1),we=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}];function Ve(){return t(ke,{children:y(Ie,{children:[t($e,{children:"React Carousel Sample"}),t(Ce,{title:"full width",children:t(Re,{carouselKey:"full-width",autoplay:1e4,children:d.map(e=>t(c,{count:e},e))})}),t(Ee,{children:y(_e,{children:[t(s,{title:"autoplay 5s",children:t(l,{carouselKey:"autoplay-5s",perView:2,gap:1,autoplay:5e3,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"images",children:t(l,{carouselKey:"images",children:we.map(({src:e,caption:r})=>t(be,{src:e,caption:r},e))})}),t(s,{title:"perView 2",children:t(l,{carouselKey:"perView-2",perView:2,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"perView 4",children:t(l,{carouselKey:"perView-4",perView:4,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"perView 5",children:t(l,{carouselKey:"perView-5",perView:5,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"gap 5",children:t(l,{carouselKey:"gap-5",perView:3,gap:5,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"gap 10",children:t(l,{carouselKey:"gap-10",perView:3,gap:10,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"peek before 20",children:t(l,{carouselKey:"peek-before-20",perView:3,gap:1,peek:{before:20},children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"peek after 20",children:t(l,{carouselKey:"peek-after-20",perView:3,gap:1,peek:{after:20},bound:!0,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"peek 20",children:t(l,{carouselKey:"peek-20",perView:3,gap:1,peek:20,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"disabled indicator",children:t(l,{carouselKey:"disabled-indicator",perView:3,gap:1,disabledIndicator:!0,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"hide previous button",children:t(l,{carouselKey:"disabled-previous-button",perView:3,gap:1,disabledSideButton:{previous:!0},children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"hide next button",children:t(l,{carouselKey:"disabled-next-button",perView:3,gap:1,disabledSideButton:{next:!0},children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"hide side button",children:t(l,{carouselKey:"disabled-side-button",perView:3,gap:1,disabledSideButton:!0,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"start at 3",children:t(l,{carouselKey:"start-at-3",perView:3,gap:1,startAt:2,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"not rewind",children:t(l,{carouselKey:"not-rewind",perView:2,gap:1,rewind:!1,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"bound",children:t(l,{carouselKey:"bound",perView:3,gap:1,bound:!0,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"slide width 140",children:t(l,{carouselKey:"slide-width",slideWidth:140,gap:1,children:d.map(e=>t(c,{count:e},e))})})]})})]})})}const ke=i.main`
  background-color: #eee;
  min-height: 100vh;
`,Ie=i.div`
  max-width: 1280px;
  @media (min-width: 1280px) {
    margin: 0 auto;
  }
`,$e=i.h2`
  background-color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 32px;
  padding: 8px 0;
`,s=i(Se)`
  background-color: #fff;
`,Ce=i(s)`
  margin: 16px 0;
`,Re=i(q)`
  width: 100%;
  height: 300px;
`,Ee=i.div`
  margin: 16px 0;
`,l=i(q)``,_e=i.div`
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
`;export{Ve as default};
