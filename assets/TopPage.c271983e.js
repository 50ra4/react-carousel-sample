import{s as i,j as b,a as t,r as o,R as O}from"./index.66e9b682.js";function W({className:e,onClick:r,children:n}){return b(Y,{className:e,onClick:r,children:[t(F,{}),n]})}const Y=i.button`
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
`;function H(e){const[r,n]=o.exports.useState(null),l=o.exports.useRef(0),f=o.exports.useCallback(h=>{h!==l.current&&(console.log(`current width: ${h}px`),n(h),l.current=h)},[]);return o.exports.useEffect(()=>{if(!e.current)return;const h=v=>{v.forEach(y=>{f(y.contentRect.width)})},m=e.current,C=new ResizeObserver(h);return C.observe(m),()=>{C.unobserve(m)}},[e,f]),r}const X=e=>{var r,n;return typeof e=="object"?{before:(r=e.before)!=null?r:0,after:(n=e.after)!=null?n:0}:typeof e=="number"?{before:e,after:e}:{before:0,after:0}},D=e=>{var r,n;return typeof e=="object"?{previous:(r=e.previous)!=null?r:!1,next:(n=e.next)!=null?n:!1}:typeof e=="boolean"?{previous:e,next:e}:{previous:!1,next:!1}},_=(e,r)=>`${e}_${r}`,J=e=>+e.slice(e.lastIndexOf("_")+1),Q=(e,r)=>e.size===r.size&&Array.from(e).every(n=>r.has(n));function U(e,{total:r,carouselKey:n}){const[l,f]=o.exports.useState(new Set),h=o.exports.useRef(l),m=Math.min(...Array.from(l));return o.exports.useEffect(()=>{if(!e.current)return;const C=g=>{const x=new Set(h.current);g.forEach(S=>{const w=J(S.target.id);S.intersectionRatio>.9?x.add(w):x.delete(w)}),!Q(x,h.current)&&(f(x),h.current=x)},v=new IntersectionObserver(C,{root:e.current,threshold:[0,.9,1]}),y=Array.from({length:r}).map((g,x)=>document.querySelector(`#${_(n,x)}`)).filter(g=>!!g);return y.forEach(g=>{v.observe(g)}),()=>{y.forEach(g=>{v.unobserve(g)})}},[n,r,e]),m}function z({className:e,carouselKey:r,autoplay:n,perView:l,gap:f=0,peek:h,startAt:m,disabledIndicator:C,disabledSideNavigation:v,children:y}){const g=o.exports.useMemo(()=>X(h),[h]),x=o.exports.useMemo(()=>D(v),[v]),S=o.exports.useRef(null),w=H(S),[{slideWidth:R,sliderPaddingRight:V,gapWidth:A},B]=o.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[K,P]=o.exports.useState(!1),k=o.exports.useCallback(a=>{const d=S.current;if(!d)return;const N=_(r,a),T=d.querySelector(`#${N}`);if(!T)return;const G=d.scrollLeft,L=d.getBoundingClientRect().left,q=T.getBoundingClientRect().left;d.scrollTo({left:G+q-L})},[r]),I=o.exports.useMemo(()=>O.Children.toArray(y).map((a,d)=>({child:a,slideId:_(r,d)})),[r,y]),$=U(S,{carouselKey:r,total:I.length}),M=o.exports.useCallback(()=>{const a=$===0?I.length-1:$-1;k(a)},[$,k,I.length]),E=o.exports.useCallback(()=>{const a=$===I.length-1?0:$+1;k(a)},[$,k,I.length]);return o.exports.useEffect(()=>{if(!n||K)return;const a=setInterval(()=>{E()},n);return()=>{clearInterval(a)}},[n,K,E]),o.exports.useEffect(()=>{if(!l)return;if(l<1)throw new Error("perView must be 1 or more.");if(!w)return;const a=l>1?(l-1)*(f!=null?f:0):0,d=(w-a)/l;B({slideWidth:d,sliderPaddingRight:(l-1)*w,gapWidth:l>1?f:0})},[f,l,w]),o.exports.useEffect(()=>{!m||k(m)},[k,m]),b(te,{className:e,onMouseEnter:()=>{P(!0)},onMouseLeave:()=>{P(!1)},children:[b(re,{ref:S,gapWidth:A,peek:g,children:[I.map(({slideId:a,child:d})=>b(j,{id:a,width:R!=null?R:void 0,children:[d,t(ee,{multipleSlide:!!l&&l>1})]},a)),!!V&&t(Z,{inserted:V})]}),!x.previous&&t(le,{onClick:M,children:"Go to previous slide"}),!x.next&&t(ae,{onClick:E,children:"Go to next slide"}),!C&&t(ie,{children:t(ne,{children:I.map(({slideId:a},d)=>t(oe,{children:b(se,{isActive:$===d,onClick:()=>{k(d)},children:["Go to ",d+1," slide"]})},a))})})]})}const Z=i.div`
  padding-left: ${({inserted:e})=>e}px;
`,ee=i.div`
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
`,te=i.div`
  position: relative;
  height: 100%;
`,re=i.ol`
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
`,ie=i.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,ne=i.ol`
  display: inline-block;
`,oe=i.li`
  display: inline-block;
`,se=i.button`
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
`,le=i(W)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,ae=i(W)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;function p({className:e,count:r}){return t(ce,{className:e,even:r%2===0,children:t("span",{children:r})})}const ce=i.div`
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
`;function de({className:e,src:r,caption:n}){return t(pe,{className:e,children:t("img",{src:r,alt:n})})}const pe=i.div`
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
`;function ue({className:e,title:r,children:n}){return b(he,{className:e,children:[t("h3",{children:r}),n]})}const he=i.section`
  & > h3 {
    line-height: 32px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 24px;
    padding: 8px 8px 16px;
  }
`,u=Array.from({length:4}).map((e,r)=>r+1),fe=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}];function ke(){return t(ge,{children:b(xe,{children:[t(me,{children:"React Carousel Sample"}),t(be,{title:"full width",children:t(ve,{carouselKey:"full-width",autoplay:1e4,children:u.map(e=>t(p,{count:e},e))})}),t(ye,{children:b(Se,{children:[t(s,{title:"autoplay 5s",children:t(c,{carouselKey:"autoplay-5s",autoplay:5e3,children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"images",children:t(c,{carouselKey:"images",children:fe.map(({src:e,caption:r})=>t(de,{src:e,caption:r},e))})}),t(s,{title:"perView 2",children:t(c,{carouselKey:"perView-2",perView:2,children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"perView 4",children:t(c,{carouselKey:"perView-4",perView:4,children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"perView 5",children:t(c,{carouselKey:"perView-5",perView:5,children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"gap 5",children:t(c,{carouselKey:"gap-5",perView:3,gap:5,children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"gap 10",children:t(c,{carouselKey:"gap-10",perView:3,gap:10,children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"peek before 20",children:t(c,{carouselKey:"peek-before-20",perView:3,gap:1,peek:{before:20},children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"peek after 20",children:t(c,{carouselKey:"peek-after-20",perView:3,gap:1,peek:{after:20},children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"peek 20",children:t(c,{carouselKey:"peek-20",perView:3,gap:1,peek:20,children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"disabled indicator",children:t(c,{carouselKey:"disabled-indicator",perView:3,gap:1,disabledIndicator:!0,children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"hide previous button",children:t(c,{carouselKey:"disabled-previous-button",perView:3,gap:1,disabledSideNavigation:{previous:!0},children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"hide next button",children:t(c,{carouselKey:"disabled-next-button",perView:3,gap:1,disabledSideNavigation:{next:!0},children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"hide side button",children:t(c,{carouselKey:"disabled-side-button",perView:3,gap:1,disabledSideNavigation:!0,children:u.map(e=>t(p,{count:e},e))})}),t(s,{title:"start at 3",children:t(c,{carouselKey:"start-at-3",perView:3,gap:1,startAt:2,children:u.map(e=>t(p,{count:e},e))})})]})})]})})}const ge=i.main`
  background-color: #eee;
  min-height: 100vh;
`,xe=i.div`
  max-width: 1280px;
  @media (min-width: 1280px) {
    margin: 0 auto;
  }
`,me=i.h2`
  background-color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 32px;
  padding: 8px 0;
`,s=i(ue)`
  background-color: #fff;
`,be=i(s)`
  margin: 16px 0;
`,ve=i(z)`
  width: 100%;
  height: 300px;
`,ye=i.div`
  margin: 16px 0;
`,c=i(z)``,Se=i.div`
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
      width: 300px;
      height: 225px;
    }
  }
`;export{ke as default};
