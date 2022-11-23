import{s as n,j as m,a as t,r as s,R as G}from"./index.13de7360.js";function W({className:e,onClick:r,children:i}){return m(L,{className:e,onClick:r,children:[t(O,{}),i]})}const L=n.button`
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
`,O=n.div`
  margin-right: 4px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 10px 6px 0;
  border-color: transparent #ffe transparent transparent;
`;function Y(e){const[r,i]=s.exports.useState(null),l=s.exports.useRef(0),u=s.exports.useCallback(p=>{p!==l.current&&(console.log(`current width: ${p}px`),i(p),l.current=p)},[]);return s.exports.useEffect(()=>{if(!e.current)return;const p=x=>{x.forEach(c=>{u(c.contentRect.width)})},b=e.current,y=new ResizeObserver(p);return y.observe(b),()=>{y.unobserve(b)}},[e,u]),r}const q=e=>{var r,i;return typeof e=="object"?{before:(r=e.before)!=null?r:0,after:(i=e.after)!=null?i:0}:typeof e=="number"?{before:e,after:e}:{before:0,after:0}},_=(e,r)=>`${e}_${r}`,F=e=>+e.slice(e.lastIndexOf("_")+1);function H(e,{total:r,carouselKey:i}){const[l,u]=s.exports.useState(new Set),p=Math.min(...Array.from(l));return s.exports.useEffect(()=>{if(!e.current)return;const b=c=>{u(v=>{const w=new Set(v);return c.forEach(I=>{const C=F(I.target.id);I.intersectionRatio>.9?w.add(C):w.delete(C)}),w})},y=new IntersectionObserver(b,{root:e.current,threshold:[0,.9,1]}),x=Array.from({length:r}).map((c,v)=>document.querySelector(`#${_(i,v)}`)).filter(c=>!!c);return x.forEach(c=>{y.observe(c)}),()=>{x.forEach(c=>{y.unobserve(c)})}},[i,r,e]),p}function A({className:e,carouselKey:r,autoplay:i,perView:l,gap:u=0,peek:p,children:b}){const y=s.exports.useMemo(()=>q(p),[p]),x=s.exports.useRef(null),c=Y(x),[{slideWidth:v,sliderPaddingRight:w,gapWidth:I},C]=s.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[E,P]=s.exports.useState(!1),$=s.exports.useCallback(o=>{const a=x.current;if(!a)return;const V=_(r,o),T=a.querySelector(`#${V}`);if(!T)return;const z=a.scrollLeft,K=a.getBoundingClientRect().left,M=T.getBoundingClientRect().left;a.scrollTo({left:z+M-K})},[r]),S=s.exports.useMemo(()=>G.Children.toArray(b).map((o,a)=>({child:o,slideId:_(r,a)})),[r,b]),k=H(x,{carouselKey:r,total:S.length}),B=s.exports.useCallback(()=>{const o=k===0?S.length-1:k-1;$(o)},[k,$,S.length]),R=s.exports.useCallback(()=>{const o=k===S.length-1?0:k+1;$(o)},[k,$,S.length]);return s.exports.useEffect(()=>{if(!i||E)return;const o=setInterval(()=>{R()},i);return()=>{clearInterval(o)}},[i,E,R]),s.exports.useEffect(()=>{if(!l)return;if(l<1)throw new Error("perView must be 1 or more.");if(!c)return;const o=l>1?(l-1)*(u!=null?u:0):0,a=(c-o)/l;C({slideWidth:a,sliderPaddingRight:(l-1)*c,gapWidth:l>1?u:0})},[u,l,c]),m(D,{className:e,onMouseEnter:()=>{P(!0)},onMouseLeave:()=>{P(!1)},children:[m(J,{ref:x,gapWidth:I,peek:y,children:[S.map(({slideId:o,child:a})=>m(j,{id:o,width:v!=null?v:void 0,children:[a,t(X,{multipleSlide:!!l&&l>1})]},o)),!!w&&t(N,{inserted:w})]}),t(te,{onClick:B,children:"Go to previous slide"}),t(re,{onClick:R,children:"Go to next slide"}),t(Q,{children:t(U,{children:S.map(({slideId:o},a)=>t(Z,{children:m(ee,{isActive:k===a,onClick:()=>{$(a)},children:["Go to ",a+1," slide"]})},o))})})]})}const N=n.div`
  padding-left: ${({inserted:e})=>e}px;
`,X=n.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({multipleSlide:e})=>e?"start":"center"};
`,j=n.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,D=n.div`
  position: relative;
  height: 100%;
`,J=n.ol`
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
`,Q=n.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,U=n.ol`
  display: inline-block;
`,Z=n.li`
  display: inline-block;
`,ee=n.button`
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
`,te=n(W)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,re=n(W)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;function f({className:e,count:r}){return t(ne,{className:e,even:r%2===0,children:t("span",{children:r})})}const ne=n.div`
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
`;function ie({className:e,src:r,caption:i}){return t(oe,{className:e,children:t("img",{src:r,alt:i})})}const oe=n.div`
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
`;function se({className:e,title:r,children:i}){return m(le,{className:e,children:[t("h3",{children:r}),i]})}const le=n.section`
  & > h3 {
    line-height: 32px;
    vertical-align: middle;
    font-weight: bold;
    font-size: 24px;
    padding: 8px 8px 16px;
  }
`,g=Array.from({length:4}).map((e,r)=>r+1),ce=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}];function me(){return t(ae,{children:m(de,{children:[t(pe,{children:"React Carousel Sample"}),t(he,{title:"full width",children:t(ue,{carouselKey:"full-width",autoplay:1e4,children:g.map(e=>t(f,{count:e},e))})}),t(fe,{children:m(ge,{children:[t(d,{title:"autoplay 5s",children:t(h,{carouselKey:"autoplay-5s",autoplay:5e3,children:g.map(e=>t(f,{count:e},e))})}),t(d,{title:"images",children:t(h,{carouselKey:"images",children:ce.map(({src:e,caption:r})=>t(ie,{src:e,caption:r},e))})}),t(d,{title:"perView 2",children:t(h,{carouselKey:"perView-2",perView:2,children:g.map(e=>t(f,{count:e},e))})}),t(d,{title:"perView 4",children:t(h,{carouselKey:"perView-4",perView:4,children:g.map(e=>t(f,{count:e},e))})}),t(d,{title:"perView 5",children:t(h,{carouselKey:"perView-5",perView:5,children:g.map(e=>t(f,{count:e},e))})}),t(d,{title:"gap 5",children:t(h,{carouselKey:"gap-5",perView:3,gap:5,children:g.map(e=>t(f,{count:e},e))})}),t(d,{title:"gap 10",children:t(h,{carouselKey:"gap-10",perView:3,gap:10,children:g.map(e=>t(f,{count:e},e))})}),t(d,{title:"peek before 20",children:t(h,{carouselKey:"peek-before-20",perView:3,gap:1,peek:{before:20},children:g.map(e=>t(f,{count:e},e))})}),t(d,{title:"peek after 20",children:t(h,{carouselKey:"peek-after-20",perView:3,gap:1,peek:{after:20},children:g.map(e=>t(f,{count:e},e))})}),t(d,{title:"peek 20",children:t(h,{carouselKey:"peek-20",perView:3,gap:1,peek:20,children:g.map(e=>t(f,{count:e},e))})})]})})]})})}const ae=n.main`
  background-color: #eee;
  min-height: 100vh;
`,de=n.div`
  max-width: 1280px;
  @media (min-width: 1280px) {
    margin: 0 auto;
  }
`,pe=n.h2`
  background-color: #fff;
  text-align: center;
  line-height: 48px;
  font-weight: bold;
  font-size: 32px;
  padding: 8px 0;
`,d=n(se)`
  background-color: #fff;
`,he=n(d)`
  margin: 16px 0;
`,ue=n(A)`
  width: 100%;
  height: 300px;
`,fe=n.div`
  margin: 16px 0;
`,h=n(A)``,ge=n.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-wrap: wrap;
  flex-direction: row;

  padding: 0;
  margin: 0 -8px -8px 0;

  & > ${d} {
    margin: 0 8px 8px 0;

    & > ${h} {
      width: 300px;
      height: 225px;
    }
  }
`;export{me as default};
