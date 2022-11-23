import{s as i,j as b,a as t,r as o,R as Y}from"./index.d1c4da68.js";function W({className:e,onClick:r,children:n}){return b(q,{className:e,onClick:r,children:[t(F,{}),n]})}const q=i.button`
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
`,F=i.div`
  margin-right: 4px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 10px 6px 0;
  border-color: transparent #ffe transparent transparent;
`;function H(e){const[r,n]=o.exports.useState(null),c=o.exports.useRef(0),g=o.exports.useCallback(f=>{f!==c.current&&(console.log(`current width: ${f}px`),n(f),c.current=f)},[]);return o.exports.useEffect(()=>{if(!e.current)return;const f=v=>{v.forEach(h=>{g(h.contentRect.width)})},x=e.current,m=new ResizeObserver(f);return m.observe(x),()=>{m.unobserve(x)}},[e,g]),r}const X=e=>{var r,n;return typeof e=="object"?{before:(r=e.before)!=null?r:0,after:(n=e.after)!=null?n:0}:typeof e=="number"?{before:e,after:e}:{before:0,after:0}},D=e=>{var r,n;return typeof e=="object"?{previous:(r=e.previous)!=null?r:!1,next:(n=e.next)!=null?n:!1}:typeof e=="boolean"?{previous:e,next:e}:{previous:!1,next:!1}},j=(e,r)=>`${e}_${r}`,J=e=>+e.slice(e.lastIndexOf("_")+1);function Q(e,{total:r,carouselKey:n}){const[c,g]=o.exports.useState(new Set),f=Math.min(...Array.from(c));return o.exports.useEffect(()=>{if(!e.current)return;const x=h=>{g(C=>{const I=new Set(C);return h.forEach(y=>{const S=J(y.target.id);y.intersectionRatio>.9?I.add(S):I.delete(S)}),I})},m=new IntersectionObserver(x,{root:e.current,threshold:[0,.9,1]}),v=Array.from({length:r}).map((h,C)=>document.querySelector(`#${j(n,C)}`)).filter(h=>!!h);return v.forEach(h=>{m.observe(h)}),()=>{v.forEach(h=>{m.unobserve(h)})}},[n,r,e]),f}function B({className:e,carouselKey:r,autoplay:n,perView:c,gap:g=0,peek:f,startAt:x,disabledIndicator:m,disabledSideNavigation:v,children:h}){const C=o.exports.useMemo(()=>X(f),[f]),I=o.exports.useMemo(()=>D(v),[v]),y=o.exports.useRef(null),S=H(y),[{slideWidth:R,sliderPaddingRight:V,gapWidth:M},N]=o.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[K,P]=o.exports.useState(!1),w=o.exports.useCallback(l=>{const d=y.current;if(!d)return;const A=j(r,l),T=d.querySelector(`#${A}`);if(!T)return;const G=d.scrollLeft,L=d.getBoundingClientRect().left,O=T.getBoundingClientRect().left;d.scrollTo({left:G+O-L})},[r]),k=o.exports.useMemo(()=>Y.Children.toArray(h).map((l,d)=>({child:l,slideId:j(r,d)})),[r,h]),$=Q(y,{carouselKey:r,total:k.length}),z=o.exports.useCallback(()=>{const l=$===0?k.length-1:$-1;w(l)},[$,w,k.length]),_=o.exports.useCallback(()=>{const l=$===k.length-1?0:$+1;w(l)},[$,w,k.length]);return o.exports.useEffect(()=>{if(!n||K)return;const l=setInterval(()=>{_()},n);return()=>{clearInterval(l)}},[n,K,_]),o.exports.useEffect(()=>{if(!c)return;if(c<1)throw new Error("perView must be 1 or more.");if(!S)return;const l=c>1?(c-1)*(g!=null?g:0):0,d=(S-l)/c;N({slideWidth:d,sliderPaddingRight:(c-1)*S,gapWidth:c>1?g:0})},[g,c,S]),o.exports.useEffect(()=>{!x||w(x)},[w,x]),b(ee,{className:e,onMouseEnter:()=>{P(!0)},onMouseLeave:()=>{P(!1)},children:[b(te,{ref:y,gapWidth:M,peek:C,children:[k.map(({slideId:l,child:d})=>b(E,{id:l,width:R!=null?R:void 0,children:[d,t(Z,{multipleSlide:!!c&&c>1})]},l)),!!V&&t(U,{inserted:V})]}),!I.previous&&t(se,{onClick:z,children:"Go to previous slide"}),!I.next&&t(le,{onClick:_,children:"Go to next slide"}),!m&&t(re,{children:t(ie,{children:k.map(({slideId:l},d)=>t(ne,{children:b(oe,{isActive:$===d,onClick:()=>{w(d)},children:["Go to ",d+1," slide"]})},l))})})]})}const U=i.div`
  padding-left: ${({inserted:e})=>e}px;
`,Z=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({multipleSlide:e})=>e?"start":"center"};
`,E=i.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,ee=i.div`
  position: relative;
  height: 100%;
`,te=i.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > ${E} + ${E} {
    margin-left: ${({gapWidth:e})=>e!=null?e:0}px;
  }

  scroll-padding: ${({peek:{before:e,after:r}})=>!e&&!r?"0":`0 ${r}px 0 ${e}px`};
  padding: ${({peek:{before:e,after:r}})=>!e&&!r?"0":`0 ${r}px 0 ${e}px`};
`,re=i.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,ie=i.ol`
  display: inline-block;
`,ne=i.li`
  display: inline-block;
`,oe=i.button`
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
`,se=i(W)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,le=i(W)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;function p({className:e,count:r}){return t(ae,{className:e,even:r%2===0,children:t("span",{children:r})})}const ae=i.div`
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
`;function ce({className:e,src:r,caption:n}){return t(de,{className:e,children:t("img",{src:r,alt:n})})}const de=i.div`
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
`;function pe({className:e,title:r,children:n}){return b(ue,{className:e,children:[t("h3",{children:r}),n]})}const ue=i.section`
  & > h3 {
    line-height: 32px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 24px;
    padding: 8px 8px 16px;
  }
`,u=Array.from({length:4}).map((e,r)=>r+1),he=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}];function we(){return t(fe,{children:b(ge,{children:[t(xe,{children:"React Carousel Sample"}),t(be,{title:"full width",children:t(me,{carouselKey:"full-width",autoplay:1e4,children:u.map(e=>t(p,{count:e},e))})}),t(ve,{children:b(ye,{children:[t(s,{title:"autoplay 5s",children:t(a,{carouselKey:"autoplay-5s",autoplay:5e3,children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"images",children:t(a,{carouselKey:"images",children:he.map(({src:e,caption:r})=>t(ce,{src:e,caption:r},e))})}),t(s,{title:"perView 2",children:t(a,{carouselKey:"perView-2",perView:2,children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"perView 4",children:t(a,{carouselKey:"perView-4",perView:4,children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"perView 5",children:t(a,{carouselKey:"perView-5",perView:5,children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"gap 5",children:t(a,{carouselKey:"gap-5",perView:3,gap:5,children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"gap 10",children:t(a,{carouselKey:"gap-10",perView:3,gap:10,children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"peek before 20",children:t(a,{carouselKey:"peek-before-20",perView:3,gap:1,peek:{before:20},children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"peek after 20",children:t(a,{carouselKey:"peek-after-20",perView:3,gap:1,peek:{after:20},children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"peek 20",children:t(a,{carouselKey:"peek-20",perView:3,gap:1,peek:20,children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"disabled indicator",children:t(a,{carouselKey:"disabled-indicator",perView:3,gap:1,disabledIndicator:!0,children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"hide previous button",children:t(a,{carouselKey:"disabled-previous-button",perView:3,gap:1,disabledSideNavigation:{previous:!0},children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"hide next button",children:t(a,{carouselKey:"disabled-next-button",perView:3,gap:1,disabledSideNavigation:{next:!0},children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"hide side button",children:t(a,{carouselKey:"disabled-side-button",perView:3,gap:1,disabledSideNavigation:!0,children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"start at 3",children:t(a,{carouselKey:"start-at-3",perView:3,gap:1,startAt:2,children:u.map(e=>t(p,{count:e},e))})})]})})]})})}const fe=i.main`
  background-color: #eee;
  min-height: 100vh;
`,ge=i.div`
  max-width: 1280px;
  @media (min-width: 1280px) {
    margin: 0 auto;
  }
`,xe=i.h2`
  background-color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 32px;
  padding: 8px 0;
`,s=i(pe)`
  background-color: #fff;
`,be=i(s)`
  margin: 16px 0;
`,me=i(B)`
  width: 100%;
  height: 300px;
`,ve=i.div`
  margin: 16px 0;
`,a=i(B)``,ye=i.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;

  padding: 0;
  margin: 0 -8px -8px 0;

  & > ${s} {
    margin: 0 8px 8px 0;

    & > ${a} {
      width: 300px;
      height: 225px;
    }
  }
`;export{we as default};
