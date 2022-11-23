import{s as i,j as b,a as t,r as o,R as Q}from"./index.9878dbd3.js";function G({className:e,onClick:r,children:n}){return b(U,{className:e,onClick:r,children:[t(Z,{}),n]})}const U=i.button`
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
`,Z=i.div`
  margin-right: 4px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 10px 6px 0;
  border-color: transparent #ffe transparent transparent;
`;function ee(e){const[r,n]=o.exports.useState(null),a=o.exports.useRef(0),x=o.exports.useCallback(u=>{u!==a.current&&(console.log(`current width: ${u}px`),n(u),a.current=u)},[]);return o.exports.useEffect(()=>{if(!e.current)return;const u=k=>{k.forEach(y=>{x(y.contentRect.width)})},m=e.current,v=new ResizeObserver(u);return v.observe(m),()=>{v.unobserve(m)}},[e,x]),r}const te=e=>{var r,n;return typeof e=="object"?{before:(r=e.before)!=null?r:0,after:(n=e.after)!=null?n:0}:typeof e=="number"?{before:e,after:e}:{before:0,after:0}},re=e=>{var r,n;return typeof e=="object"?{previous:(r=e.previous)!=null?r:!1,next:(n=e.next)!=null?n:!1}:typeof e=="boolean"?{previous:e,next:e}:{previous:!1,next:!1}},j=(e,r)=>`${e}_${r}`,ie=e=>+e.slice(e.lastIndexOf("_")+1),ne=(e,r)=>e.size===r.size&&Array.from(e).every(n=>r.has(n));function oe(e,{total:r,carouselKey:n}){const[a,x]=o.exports.useState(new Set),u=o.exports.useRef(a),m=Math.min(...Array.from(a));return o.exports.useEffect(()=>{if(!e.current)return;const v=f=>{const g=new Set(u.current);f.forEach(I=>{const S=ie(I.target.id);I.intersectionRatio>.9?g.add(S):g.delete(S)}),!ne(g,u.current)&&(x(g),u.current=g)},k=new IntersectionObserver(v,{root:e.current,threshold:[0,.9,1]}),y=Array.from({length:r}).map((f,g)=>document.querySelector(`#${j(n,g)}`)).filter(f=>!!f);return y.forEach(f=>{k.observe(f)}),()=>{y.forEach(f=>{k.unobserve(f)})}},[n,r,e]),m}function L({className:e,carouselKey:r,autoplay:n,perView:a,gap:x=0,peek:u,startAt:m,rewind:v=!0,disabledIndicator:k,disabledSideNavigation:y,children:f}){const g=o.exports.useMemo(()=>te(u),[u]),I=o.exports.useMemo(()=>re(y),[y]),S=o.exports.useRef(null),R=ee(S),[{slideWidth:E,sliderPaddingRight:P,gapWidth:q},F]=o.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[T,W]=o.exports.useState(!1),w=o.exports.useCallback(h=>{const p=S.current;if(!p)return;const D=j(r,h),M=p.querySelector(`#${D}`);if(!M)return;const H=p.scrollLeft,X=p.getBoundingClientRect().left,J=M.getBoundingClientRect().left;p.scrollTo({left:H+J-X})},[r]),$=o.exports.useMemo(()=>Q.Children.toArray(f).map((h,p)=>({child:h,slideId:j(r,p)})),[r,f]),C=oe(S,{carouselKey:r,total:$.length}),z=C===0,O=v||!z,N=z?$.length-1:C-1,A=C===$.length-1,V=v||!A,B=A?0:C+1,Y=o.exports.useCallback(()=>{w(N)},[N,w]),_=o.exports.useCallback(()=>{w(B)},[B,w]);return o.exports.useEffect(()=>{if(!n||T||!V)return;const h=setInterval(()=>{_()},n);return()=>{clearInterval(h)}},[n,V,T,_]),o.exports.useEffect(()=>{if(!a)return;if(a<1)throw new Error("perView must be 1 or more.");if(!R)return;const h=a>1?(a-1)*(x!=null?x:0):0,p=(R-h)/a;F({slideWidth:p,sliderPaddingRight:(a-1)*R,gapWidth:a>1?x:0})},[x,a,R]),o.exports.useEffect(()=>{!m||w(m)},[w,m]),b(ae,{className:e,onMouseEnter:()=>{W(!0)},onMouseLeave:()=>{W(!1)},children:[b(ce,{ref:S,gapWidth:q,peek:g,children:[$.map(({slideId:h,child:p})=>b(K,{id:h,width:E!=null?E:void 0,children:[p,t(le,{multipleSlide:!!a&&a>1})]},h)),!!P&&t(se,{inserted:P})]}),!I.previous&&O&&t(fe,{onClick:Y,children:"Go to previous slide"}),!I.next&&V&&t(xe,{onClick:_,children:"Go to next slide"}),!k&&t(de,{children:t(pe,{children:$.map(({slideId:h},p)=>t(ue,{children:b(he,{isActive:C===p,onClick:()=>{w(p)},children:["Go to ",p+1," slide"]})},h))})})]})}const se=i.div`
  padding-left: ${({inserted:e})=>e}px;
`,le=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({multipleSlide:e})=>e?"start":"center"};
`,K=i.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,ae=i.div`
  position: relative;
  height: 100%;
`,ce=i.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > ${K} + ${K} {
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
`,fe=i(G)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,xe=i(G)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;function c({className:e,count:r}){return t(ge,{className:e,even:r%2===0,children:t("span",{children:r})})}const ge=i.div`
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
`;function me({className:e,src:r,caption:n}){return t(be,{className:e,children:t("img",{src:r,alt:n})})}const be=i.div`
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
`;function ve({className:e,title:r,children:n}){return b(ye,{className:e,children:[t("h3",{children:r}),n]})}const ye=i.section`
  & > h3 {
    line-height: 32px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 24px;
    padding: 8px 8px 16px;
  }
`,d=Array.from({length:8}).map((e,r)=>r+1),Se=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}];function _e(){return t(we,{children:b(ke,{children:[t(Ie,{children:"React Carousel Sample"}),t($e,{title:"full width",children:t(Ce,{carouselKey:"full-width",autoplay:1e4,children:d.map(e=>t(c,{count:e},e))})}),t(Re,{children:b(Ee,{children:[t(s,{title:"autoplay 5s",children:t(l,{carouselKey:"autoplay-5s",perView:2,gap:1,autoplay:5e3,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"images",children:t(l,{carouselKey:"images",children:Se.map(({src:e,caption:r})=>t(me,{src:e,caption:r},e))})}),t(s,{title:"perView 2",children:t(l,{carouselKey:"perView-2",perView:2,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"perView 4",children:t(l,{carouselKey:"perView-4",perView:4,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"perView 5",children:t(l,{carouselKey:"perView-5",perView:5,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"gap 5",children:t(l,{carouselKey:"gap-5",perView:3,gap:5,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"gap 10",children:t(l,{carouselKey:"gap-10",perView:3,gap:10,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"peek before 20",children:t(l,{carouselKey:"peek-before-20",perView:3,gap:1,peek:{before:20},children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"peek after 20",children:t(l,{carouselKey:"peek-after-20",perView:3,gap:1,peek:{after:20},children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"peek 20",children:t(l,{carouselKey:"peek-20",perView:3,gap:1,peek:20,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"disabled indicator",children:t(l,{carouselKey:"disabled-indicator",perView:3,gap:1,disabledIndicator:!0,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"hide previous button",children:t(l,{carouselKey:"disabled-previous-button",perView:3,gap:1,disabledSideNavigation:{previous:!0},children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"hide next button",children:t(l,{carouselKey:"disabled-next-button",perView:3,gap:1,disabledSideNavigation:{next:!0},children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"hide side button",children:t(l,{carouselKey:"disabled-side-button",perView:3,gap:1,disabledSideNavigation:!0,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"start at 3",children:t(l,{carouselKey:"start-at-3",perView:3,gap:1,startAt:2,children:d.map(e=>t(c,{count:e},e))})}),t(s,{title:"not rewind",children:t(l,{carouselKey:"not-rewind",perView:2,gap:1,rewind:!1,children:d.map(e=>t(c,{count:e},e))})})]})})]})})}const we=i.main`
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
`,s=i(ve)`
  background-color: #fff;
`,$e=i(s)`
  margin: 16px 0;
`,Ce=i(L)`
  width: 100%;
  height: 300px;
`,Re=i.div`
  margin: 16px 0;
`,l=i(L)``,Ee=i.div`
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
      width: 300px;
      height: 225px;
    }
  }
`;export{_e as default};
