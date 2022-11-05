var k=Object.defineProperty;var c=(n,e)=>k(n,"name",{value:e,configurable:!0});import{H as i}from"./styled-components.browser.esm.cc1d519e.js";import{r as d,R as O,a as f,j as r}from"./jsx-runtime.7e156888.js";import"./iframe.71fb1e69.js";const x=c((n,e)=>`${n}_${e}`,"createSlideId"),I=c((n,e)=>e===n-1?0:e+1,"getNextSlideIndex"),E=c((n,e)=>e===0?n-1:e-1,"getPrevSlideIndex");function m({className:n,carouselKey:e,options:{autoplay:p}={},children:C}){const h=d.exports.useRef(null),u=d.exports.useCallback(o=>{var a,t;const s=(t=(a=h.current)==null?void 0:a.querySelector(`#${o}`))!=null?t:void 0;!s||s.scrollIntoView()},[]),l=d.exports.useMemo(()=>O.Children.toArray(C).map((o,s)=>({child:o,slideId:x(e,s)})),[e,C]),[g,A]=d.exports.useState(l[0].slideId);d.exports.useEffect(()=>{if(!h.current)return;const o=c(t=>{t.forEach(b=>{!b.isIntersecting||A(b.target.id)})},"callback"),s=new IntersectionObserver(o,{root:h.current,threshold:1}),a=l.map(({slideId:t})=>document.querySelector(`#${t}`)).filter(t=>!!t);return a.forEach(t=>{s.observe(t)}),()=>{a.forEach(t=>{s.unobserve(t)})}},[e,l]);const[S,v]=d.exports.useState(!1);return d.exports.useEffect(()=>{if(!p||S)return;const o=l.findIndex(a=>a.slideId===g);if(o<0)return;const s=setInterval(()=>{const a=x(e,I(l.length,o));u(a)},p);return()=>{clearInterval(s)}},[p,e,g,S,u,l]),f(j,{ref:h,className:n,onMouseEnter:()=>{v(!0)},onMouseLeave:()=>{v(!1)},children:[r(M,{children:l.map(({slideId:o,child:s},a)=>f(R,{id:o,children:[s,r(N,{}),r(P,{onClick:()=>{const t=x(e,E(l.length,a));u(t)},children:"Go to previous slide"}),r(z,{onClick:()=>{const t=x(e,I(l.length,a));u(t)},children:"Go to next slide"})]},o))}),r(W,{children:r($,{className:n,children:l.map(({slideId:o},s)=>r(B,{children:f(L,{isActive:g===o,onClick:()=>{u(o)},children:["Go to ",s+1," slide"]})},o))})})]})}c(m,"Carousel");const N=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
`,R=i.li`
  position: relative;
  flex: 0 0 100%;
  width: 100%;
`,j=i.div`
  position: relative;
  padding-top: 75%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;
`,M=i.ol`
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
`,W=i.aside`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
`,$=i.ol`
  display: inline-block;
`,B=i.li`
  display: inline-block;
`,L=i.button`
  display: inline-block;
  cursor: pointer;
  width: 16px;
  height: 16px;
  background-color: ${({isActive:n})=>n?"#ffe":"#333"};
  border-radius: 50%;
  border: none;
  margin: 0 4px 24px;
  font-size: 0;
  transition: transform 0.1s;
`,_=c(({className:n,onClick:e,children:p})=>f(T,{className:n,onClick:e,children:[r(q,{}),p]}),"ArrowButton"),T=i.button`
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
`,q=i.div`
  margin-right: 7.5px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 12.5px 10px 0;
  border-color: transparent #ffe transparent transparent;
`,P=i(_)`
  margin-top: 37.5%;
  transform: translateY(-50%);
  position: absolute;
  top: 0;
  left: 8px;
`,z=i(_)`
  margin-top: 37.5%;
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 0;
  right: 8px;
`;try{m.displayName="Carousel",m.__docgenInfo={description:"",displayName:"Carousel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"CarouselOptions"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:m.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const H=i.div`
  max-width: 600px;
`,K=i.div`
  flex: 0 0 100%;
  height: 100%;
  background-color: ${({even:n})=>n?"#99f":"#f99"};
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    color: #fff;
    font-size: 2em;
  }
`,V=c((n,e)=>r(H,{children:r(n,{...e})}),"withStyleWrapper"),J={parameters:{storySource:{source:`import type {
  ComponentStoryObj,
  ComponentMeta,
  DecoratorFn,
} from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Carousel } from '@/components/Carousel/Carousel';

const StyledWrapper = styled.div\`
  max-width: 600px;
\`;

const SampleContainer = styled.div<{ even?: boolean }>\`
  flex: 0 0 100%;
  height: 100%;
  background-color: \${({ even }) => (even ? '#99f' : '#f99')};
  display: flex;
  justify-content: center;
  align-items: center;

  & > * {
    color: #fff;
    font-size: 2em;
  }
\`;

const withStyleWrapper: DecoratorFn = (Story, context) => {
  return (
    <StyledWrapper>
      <Story {...context} />
    </StyledWrapper>
  );
};

export default {
  component: Carousel,
  decorators: [withStyleWrapper],
} as ComponentMeta<typeof Carousel>;

const Item = ({ index }: { index: number }) => (
  <SampleContainer even={index % 2 === 0}>
    <span>{index + 1}</span>
  </SampleContainer>
);

const children = Array.from({ length: 4 }).map((_, i) => (
  <Item key={i} index={i} />
));

export const Main: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-main',
    children,
  },
};

export const AutoPlay: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-auto-play',
    children,
    options: {
      autoplay: 3000,
    },
  },
};

export const AdditionalChildren = () => (
  <Carousel carouselKey="carousel-additional-children">
    {children}
    <Item index={children.length} />
  </Carousel>
);
`,locationsMap:{"additional-children":{startLoc:{col:34,line:68},endLoc:{col:1,line:73},startBody:{col:34,line:68},endBody:{col:1,line:73}}}}},component:m,decorators:[V]},w=c(({index:n})=>r(K,{even:n%2===0,children:r("span",{children:n+1})}),"Item"),y=Array.from({length:4}).map((n,e)=>r(w,{index:e},e)),Q={args:{carouselKey:"carousel-main",children:y}},U={args:{carouselKey:"carousel-auto-play",children:y,options:{autoplay:3e3}}},X=c(()=>f(m,{carouselKey:"carousel-additional-children",children:[y,r(w,{index:y.length})]}),"AdditionalChildren"),Z=["Main","AutoPlay","AdditionalChildren"];export{X as AdditionalChildren,U as AutoPlay,Q as Main,Z as __namedExportsOrder,J as default};
//# sourceMappingURL=Carousel.stories.7f0800ad.js.map
