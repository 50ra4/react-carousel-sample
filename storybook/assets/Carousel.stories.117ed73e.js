var C=Object.defineProperty;var l=(t,e)=>C(t,"name",{value:e,configurable:!0});import{r as x,a as p,j as r}from"./jsx-runtime.7b535610.js";import{U as m,H as o}from"./styled-components.browser.esm.9a38c199.js";import"./iframe.de9c2573.js";const d=l((t,e)=>`${t}_${e}`,"createSlideId");function u({className:t,carouselKey:e,items:n}){const h=x.exports.useRef(null),f=x.exports.useCallback(s=>{var a,g;const i=(g=(a=h.current)==null?void 0:a.querySelector(`#${s}`))!=null?g:void 0;!i||i.scrollIntoView()},[]);return p(w,{ref:h,className:t,children:[r(k,{children:n.map(({key:s},i)=>p(y,{id:d(e,s),children:[r(c,{}),r(T,{onClick:()=>{const a=d(e,i===0?n[n.length-1].key:n[i-1].key);f(a)},children:"Go to previous slide"}),r(E,{onClick:()=>{const a=d(e,i===n.length-1?n[0].key:n[i+1].key);f(a)},children:"Go to next slide"})]},s))}),r($,{children:r(N,{className:t,children:n.map(({key:s,caption:i})=>r(I,{children:p(A,{onClick:()=>{const a=d(e,s);f(a)},children:["Go to ",i]})},s))})})]})}l(u,"Carousel");const _=m`
  75% {
    left: 0;
  }
  95% {
    left: 100%;
  }
  98% {
    left: 100%;
  }
  99% {
    left: 0;
  }
`,S=m`
  75% {
    left: 0;
  }
  95% {
    left: -300%;
  }
  98% {
    left: -300%;
  }
  99% {
    left: 0;
  }
`,b=m`
  96% {
    scroll-snap-align: center;
  }
  97% {
    scroll-snap-align: none;
  }
  99% {
    scroll-snap-align: none;
  }
  100% {
    scroll-snap-align: center;
  }
`,c=o.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
`,y=o.li`
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
`,w=o.div`
  position: relative;
  padding-top: 75%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;

  /* animation
  @media (prefers-reduced-motion: reduce) {
    ${c} {
      animation-name: none;
    }
  }

  @media (hover: hover) {
    ${c} {
      animation-name: ${_}, ${b};
      animation-timing-function: ease;
      animation-duration: 4s;
      animation-iteration-count: infinite;
    }

    ${y}:last-child {
      ${c} {
        animation-name: ${S}, ${b};
      }
    }
  }

  &:hover,
  &:focus-within {
    ${c} {
      animation-name: none;
    }
  } 
  */
`,k=o.ol`
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
`,$=o.aside`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
`,N=o.ol`
  display: inline-block;
`,I=o.li`
  display: inline-block;
`,A=o.button`
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
`,v=l(({className:t,onClick:e,children:n})=>p(O,{className:t,onClick:e,children:[r(R,{}),n]}),"ArrowButton"),O=o.button`
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
`,R=o.div`
  margin-right: 7.5px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 12.5px 10px 0;
  border-color: transparent #ffe transparent transparent;
`,T=o(v)`
  margin-top: 37.5%;
  transform: translateY(-50%);
  position: absolute;
  top: 0;
  left: 8px;
`,E=o(v)`
  margin-top: 37.5%;
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 0;
  right: 8px;
`;try{u.displayName="Carousel",u.__docgenInfo={description:"",displayName:"Carousel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"CarouselItem[]"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:u.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const j=l((t,e)=>r("div",{style:{maxWidth:"600px"},children:r(t,{...e})}),"withGlobalStyle"),z={component:u,decorators:[j]},q=Array.from({length:4}).map((t,e)=>({key:`${e+1}`,caption:`slide${e+1}`})),L={args:{carouselKey:"carousel-main-story",items:q}},H=["Main"];export{L as Main,H as __namedExportsOrder,z as default};
//# sourceMappingURL=Carousel.stories.117ed73e.js.map
