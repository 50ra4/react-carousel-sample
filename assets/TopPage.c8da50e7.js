import{s as i,j as m,a as t,r as d,R as U}from"./index.b1e3771d.js";import{u as Z,P as ee}from"./PageTemplate.2e0dc182.js";function N({className:e,onClick:r,children:l}){return m(te,{className:e,onClick:r,children:[t(re,{}),l]})}const te=i.button`
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
`,re=i.div`
  margin-right: 4px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 10px 6px 0;
  border-color: transparent #ffe transparent transparent;
`,ie=e=>{var r,l;return typeof e=="object"?{before:(r=e.before)!=null?r:0,after:(l=e.after)!=null?l:0}:typeof e=="number"?{before:e,after:e}:{before:0,after:0}},T=(e,r)=>`${e}_${r}`,ne=e=>+e.slice(e.lastIndexOf("_")+1),oe=(e,r)=>e.size===r.size&&Array.from(e).every(l=>r.has(l));function le(e,{total:r,carouselKey:l}){const[c,g]=d.exports.useState(new Set),w=d.exports.useRef(c),v=Math.min(...Array.from(c));return d.exports.useEffect(()=>{if(!e.current)return;const C=f=>{const x=new Set(w.current);f.forEach(E=>{const k=ne(E.target.id);E.intersectionRatio>.9?x.add(k):x.delete(k)}),!oe(x,w.current)&&(g(x),w.current=x)},b=new IntersectionObserver(C,{root:e.current,threshold:[0,.9,1]}),h=Array.from({length:r}).map((f,x)=>document.querySelector(`#${T(l,x)}`)).filter(f=>!!f);return h.forEach(f=>{b.observe(f)}),()=>{h.forEach(f=>{b.unobserve(f)})}},[l,r,e]),{currentSlideIndex:v,isDisplayedLastSlide:c.has(r-1)}}function O({className:e,carouselKey:r,autoplay:l,perView:c,gap:g=0,peek:w,startAt:v,rewind:C=!0,bound:b,slideWidth:h,disabledIndicator:f,disabledPreviousButton:x,disabledNextButton:E,children:k}){const B=d.exports.useMemo(()=>ie(w),[w]),P=d.exports.useRef(null),y=Z(P),[R,L]=d.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[A,W]=d.exports.useState(!1),S=d.exports.useCallback(u=>{const p=P.current;if(!p)return;const _=T(r,u),F=p.querySelector(`#${_}`);if(!F)return;const X=p.scrollLeft,J=p.getBoundingClientRect().left,Q=F.getBoundingClientRect().left;p.scrollTo({left:X+Q-J})},[r]),I=d.exports.useMemo(()=>U.Children.toArray(k).map((u,p)=>({child:u,slideId:T(r,p)})),[r,k]),{currentSlideIndex:$,isDisplayedLastSlide:q}=le(P,{carouselKey:r,total:I.length}),z=$===0,Y=C||!z,M=z?I.length-1:$-1,G=$===I.length-1||!!b&&q,j=C||!G,D=G?0:$+1,H=d.exports.useCallback(()=>{S(M)},[M,S]),K=d.exports.useCallback(()=>{S(D)},[D,S]);return d.exports.useEffect(()=>{if(!l||A||!j)return;const u=setInterval(()=>{K()},l);return()=>{clearInterval(u)}},[l,j,A,K]),d.exports.useEffect(()=>{if(!(!c||!h))throw new Error("both perView and slideWidth cannot be set.")},[c,h]),d.exports.useEffect(()=>{if(!c)return;if(c<1)throw new Error("perView must be 1 or more.");if(!y)return;const u=c>1?(c-1)*(g!=null?g:0):0,p=(y-u)/c;L({slideWidth:p,sliderPaddingRight:b?0:(c-1)*y,gapWidth:c>1?g:0,multipleSlide:c>1})},[b,g,c,y]),d.exports.useEffect(()=>{!h||!y||L({slideWidth:h,sliderPaddingRight:b?0:y-h,gapWidth:g,multipleSlide:y!==h})},[b,g,h,y]),d.exports.useEffect(()=>{!v||S(v)},[S,v]),m(de,{className:e,onMouseEnter:()=>{W(!0)},onMouseLeave:()=>{W(!1)},children:[m(ce,{ref:P,gapWidth:R.gapWidth,peek:B,children:[I.map(({slideId:u,child:p})=>{var _;return m(V,{id:u,width:(_=R.slideWidth)!=null?_:void 0,children:[p,t(ae,{multipleSlide:!!R.multipleSlide})]},u)}),t(se,{inserted:R.sliderPaddingRight||B.after})]}),!x&&Y&&t(ge,{onClick:H,children:"Go to previous slide"}),!E&&j&&t(xe,{onClick:K,children:"Go to next slide"}),!f&&t(pe,{children:t(ue,{children:I.map(({slideId:u},p)=>t(he,{children:m(fe,{isActive:$===p,onClick:()=>{S(p)},children:["Go to ",p+1," slide"]})},u))})})]})}const se=i.div`
  padding-left: ${({inserted:e})=>e}px;
`,ae=i.div`
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
`,de=i.div`
  position: relative;
  height: 100%;
`,ce=i.ol`
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
`,ge=i(N)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,xe=i(N)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;function s({className:e,count:r}){return t(me,{className:e,even:r%2===0,children:t("span",{children:r})})}const me=i.div`
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
`;function be({className:e,src:r,caption:l}){return m(ye,{className:e,children:[t("div",{}),t("img",{src:r,alt:l})]})}const ye=i.div`
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
`;function Se({className:e,title:r,children:l}){return m(we,{className:e,children:[t("h3",{children:r}),l]})}const we=i.section`
  & > h3 {
    line-height: 32px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 24px;
    padding: 8px 8px 16px;
  }
`,a=Array.from({length:8}).map((e,r)=>r+1),ve=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}];function _e(){return m(ee,{title:"React Carousel Sample",children:[t(ke,{title:"full width",children:t(Ie,{carouselKey:"full-width",autoplay:1e4,children:a.map(e=>t(s,{count:e},e))})}),t($e,{children:m(Ce,{children:[t(n,{title:"autoplay 5s",children:t(o,{carouselKey:"autoplay-5s",perView:2,gap:1,autoplay:5e3,children:a.map(e=>t(s,{count:e},e))})}),t(n,{title:"images",children:t(o,{carouselKey:"images",children:ve.map(({src:e,caption:r})=>t(be,{src:e,caption:r},e))})}),t(n,{title:"perView 2",children:t(o,{carouselKey:"perView-2",perView:2,children:a.map(e=>t(s,{count:e},e))})}),t(n,{title:"perView 4",children:t(o,{carouselKey:"perView-4",perView:4,children:a.map(e=>t(s,{count:e},e))})}),t(n,{title:"perView 5",children:t(o,{carouselKey:"perView-5",perView:5,children:a.map(e=>t(s,{count:e},e))})}),t(n,{title:"gap 5",children:t(o,{carouselKey:"gap-5",perView:3,gap:5,children:a.map(e=>t(s,{count:e},e))})}),t(n,{title:"gap 10",children:t(o,{carouselKey:"gap-10",perView:3,gap:10,children:a.map(e=>t(s,{count:e},e))})}),t(n,{title:"peek before 20",children:t(o,{carouselKey:"peek-before-20",perView:3,gap:1,peek:{before:20},children:a.map(e=>t(s,{count:e},e))})}),t(n,{title:"peek after 20",children:t(o,{carouselKey:"peek-after-20",perView:3,gap:1,peek:{after:20},bound:!0,children:a.map(e=>t(s,{count:e},e))})}),t(n,{title:"peek 20",children:t(o,{carouselKey:"peek-20",perView:3,gap:1,peek:20,children:a.map(e=>t(s,{count:e},e))})}),t(n,{title:"disabled indicator",children:t(o,{carouselKey:"disabled-indicator",perView:3,gap:1,disabledIndicator:!0,children:a.map(e=>t(s,{count:e},e))})}),t(n,{title:"hide previous button",children:t(o,{carouselKey:"disabled-previous-button",perView:3,gap:1,disabledPreviousButton:!0,children:a.map(e=>t(s,{count:e},e))})}),t(n,{title:"hide next button",children:t(o,{carouselKey:"disabled-next-button",perView:3,gap:1,disabledNextButton:!0,children:a.map(e=>t(s,{count:e},e))})}),t(n,{title:"start at 3",children:t(o,{carouselKey:"start-at-3",perView:3,gap:1,startAt:2,children:a.map(e=>t(s,{count:e},e))})}),t(n,{title:"not rewind",children:t(o,{carouselKey:"not-rewind",perView:2,gap:1,rewind:!1,children:a.map(e=>t(s,{count:e},e))})}),t(n,{title:"bound",children:t(o,{carouselKey:"bound",perView:3,gap:1,bound:!0,children:a.map(e=>t(s,{count:e},e))})}),t(n,{title:"slide width 140",children:t(o,{carouselKey:"slide-width",slideWidth:140,gap:1,children:a.map(e=>t(s,{count:e},e))})})]})})]})}const n=i(Se)`
  background-color: #fff;
`,ke=i(n)`
  margin: 16px 0;
`,Ie=i(O)`
  width: 100%;
  height: 300px;
`,$e=i.div`
  margin: 16px 0;
`,o=i(O)``,Ce=i.div`
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
`;export{_e as default};
