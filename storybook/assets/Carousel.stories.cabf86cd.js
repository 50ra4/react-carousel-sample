var w=Object.defineProperty;var d=(t,e)=>w(t,"name",{value:e,configurable:!0});import{r as p,a as h,j as a}from"./jsx-runtime.51789e05.js";import{H as i}from"./styled-components.browser.esm.58ad928d.js";import"./iframe.7e0574f0.js";const m=d((t,e)=>`${t}_${e}`,"createSlideId"),S=d((t,e)=>e===t.length-1?t[0]:t[e+1],"getNextCarouselItem");function g({className:t,carouselKey:e,items:c,options:{autoplay:x}={}}){const f=p.exports.useRef(null),u=p.exports.useCallback(o=>{var n,s;const r=(s=(n=f.current)==null?void 0:n.querySelector(`#${o}`))!=null?s:void 0;!r||r.scrollIntoView()},[]),l=p.exports.useMemo(()=>c.map(o=>({...o,slideId:m(e,o.key)})),[e,c]),[b,k]=p.exports.useState(l[0].slideId);p.exports.useEffect(()=>{if(!f.current)return;const o=d(s=>{s.forEach(C=>{!C.isIntersecting||k(C.target.id)})},"callback"),r=new IntersectionObserver(o,{root:f.current,threshold:1}),n=l.map(({slideId:s})=>document.querySelector(`#${s}`)).filter(s=>!!s);return n.forEach(s=>{r.observe(s)}),()=>{n.forEach(s=>{r.unobserve(s)})}},[e,l]);const[y,v]=p.exports.useState(!1);return p.exports.useEffect(()=>{if(!x||y)return;const o=l.findIndex(n=>n.slideId===b);if(o<0)return;const r=setInterval(()=>{const n=m(e,S(l,o).key);u(n)},x);return()=>{clearInterval(r)}},[x,e,b,y,u,l]),h(A,{ref:f,className:t,onMouseEnter:()=>{v(!0)},onMouseLeave:()=>{v(!1)},children:[a(O,{children:l.map(({slideId:o},r)=>h(N,{id:o,children:[a(E,{}),a(j,{onClick:()=>{const n=m(e,r===0?c[c.length-1].key:c[r-1].key);u(n)},children:"Go to previous slide"}),a(B,{onClick:()=>{const n=m(e,S(l,r).key);u(n)},children:"Go to next slide"})]},o))}),a(R,{children:a(q,{className:t,children:l.map(({slideId:o,caption:r})=>a(T,{children:h($,{onClick:()=>{u(o)},children:["Go to ",r]})},o))})})]})}d(g,"Carousel");const E=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
`,N=i.li`
  position: relative;
  flex: 0 0 100%;
  width: 100%;
  background-color: #f99;
  counter-increment: item;

  &:nth-child(even) {
    background-color: #99f;
  }

  &:before {
    content: counter(item);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -40%, 70px);
    color: #fff;
    font-size: 2em;
  }
`,A=i.div`
  position: relative;
  padding-top: 75%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;
`,O=i.ol`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  counter-reset: item;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`,R=i.aside`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
`,q=i.ol`
  display: inline-block;
`,T=i.li`
  display: inline-block;
`,$=i.button`
  display: inline-block;
  cursor: pointer;
  width: 16px;
  height: 16px;
  background-color: #333;
  border-radius: 50%;
  border: none;
  margin: 0 4px 24px;
  font-size: 0;
  transition: transform 0.1s;
`,I=d(({className:t,onClick:e,children:c})=>h(M,{className:t,onClick:e,children:[a(V,{}),c]}),"ArrowButton"),M=i.button`
  cursor: pointer;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 0;
  outline: 0;
  border: none;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
`,V=i.div`
  margin-right: 7.5px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 12.5px 10px 0;
  border-color: transparent #ffe transparent transparent;
`,j=i(I)`
  margin-top: 37.5%;
  transform: translateY(-50%);
  position: absolute;
  top: 0;
  left: 8px;
`,B=i(I)`
  margin-top: 37.5%;
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 0;
  right: 8px;
`;try{g.displayName="Carousel",g.__docgenInfo={description:"",displayName:"Carousel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"CarouselItem[]"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"CarouselOptions"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:g.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const G=d((t,e)=>a("div",{style:{maxWidth:"600px"},children:a(t,{...e})}),"withGlobalStyle"),P={component:g,decorators:[G]},_=Array.from({length:4}).map((t,e)=>({key:`${e+1}`,caption:`slide${e+1}`})),W={args:{carouselKey:"carousel-main-story",items:_}},D={args:{carouselKey:"carousel-auto-play-story",items:_,options:{autoplay:3e3}}},F=["Main","AutoPlay"];export{D as AutoPlay,W as Main,F as __namedExportsOrder,P as default};
//# sourceMappingURL=Carousel.stories.cabf86cd.js.map
