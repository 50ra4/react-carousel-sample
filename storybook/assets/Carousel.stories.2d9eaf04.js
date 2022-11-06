var E=Object.defineProperty;var c=(n,e)=>E(n,"name",{value:e,configurable:!0});import{H as i}from"./styled-components.browser.esm.b7304d66.js";import{r as d,R as w,a as h,j as s}from"./jsx-runtime.39290ffa.js";import{C as _}from"./CircleTriangleButton.b44c1eae.js";import"./iframe.e8340a2b.js";const m=c((n,e)=>`${n}_${e}`,"createSlideId"),I=c((n,e)=>e===n-1?0:e+1,"getNextSlideIndex"),O=c((n,e)=>e===0?n-1:e-1,"getPrevSlideIndex");function u({className:n,carouselKey:e,options:{autoplay:x}={},children:C}){const f=d.exports.useRef(null),p=d.exports.useCallback(t=>{const o=f.current;if(!o)return;const l=o.querySelector(`#${t}`);!l||o.scrollTo({left:o.scrollLeft+l.getBoundingClientRect().left})},[]),a=d.exports.useMemo(()=>w.Children.toArray(C).map((t,o)=>({child:t,slideId:m(e,o)})),[e,C]),[g,k]=d.exports.useState(a[0].slideId);d.exports.useEffect(()=>{if(!f.current)return;const t=c(r=>{r.forEach(b=>{!b.isIntersecting||k(b.target.id)})},"callback"),o=new IntersectionObserver(t,{root:f.current,threshold:1}),l=a.map(({slideId:r})=>document.querySelector(`#${r}`)).filter(r=>!!r);return l.forEach(r=>{o.observe(r)}),()=>{l.forEach(r=>{o.unobserve(r)})}},[e,a]);const[S,v]=d.exports.useState(!1);return d.exports.useEffect(()=>{if(!x||S)return;const t=a.findIndex(l=>l.slideId===g);if(t<0)return;const o=setInterval(()=>{const l=m(e,I(a.length,t));p(l)},x);return()=>{clearInterval(o)}},[x,e,g,S,p,a]),h(M,{className:n,onMouseEnter:()=>{v(!0)},onMouseLeave:()=>{v(!1)},children:[s(j,{ref:f,children:a.map(({slideId:t,child:o},l)=>h(B,{id:t,children:[o,s(R,{}),s(q,{onClick:()=>{const r=m(e,O(a.length,l));p(r)},children:"Go to previous slide"}),s(N,{onClick:()=>{const r=m(e,I(a.length,l));p(r)},children:"Go to next slide"})]},t))}),s(L,{children:s(T,{className:n,children:a.map(({slideId:t},o)=>s(W,{children:h($,{isActive:g===t,onClick:()=>{p(t)},children:["Go to ",o+1," slide"]})},t))})})]})}c(u,"Carousel");const R=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
`,B=i.li`
  position: relative;
  flex: 0 0 100%;
  width: 100%;
`,M=i.div`
  position: relative;
  padding-top: 75%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;
`,j=i.ol`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`,L=i.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
`,T=i.ol`
  display: inline-block;
`,W=i.li`
  display: inline-block;
`,$=i.button`
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
`,q=i(_)`
  margin-top: 37.5%;
  transform: translateY(-50%);
  position: absolute;
  top: 0;
  left: 8px;
`,N=i(_)`
  margin-top: 37.5%;
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 0;
  right: 8px;
`;try{u.displayName="Carousel",u.__docgenInfo={description:"",displayName:"Carousel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"CarouselOptions"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:u.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const P=i.div`
  max-width: 600px;
`,H=i.div`
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
`,K=c((n,e)=>s(P,{children:s(n,{...e})}),"withStyleWrapper"),F={parameters:{storySource:{source:`import type {
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
`,locationsMap:{"additional-children":{startLoc:{col:34,line:68},endLoc:{col:1,line:73},startBody:{col:34,line:68},endBody:{col:1,line:73}}}}},component:u,decorators:[K]},A=c(({index:n})=>s(H,{even:n%2===0,children:s("span",{children:n+1})}),"Item"),y=Array.from({length:4}).map((n,e)=>s(A,{index:e},e)),J={args:{carouselKey:"carousel-main",children:y}},Q={args:{carouselKey:"carousel-auto-play",children:y,options:{autoplay:3e3}}},U=c(()=>h(u,{carouselKey:"carousel-additional-children",children:[y,s(A,{index:y.length})]}),"AdditionalChildren"),X=["Main","AutoPlay","AdditionalChildren"];export{U as AdditionalChildren,Q as AutoPlay,J as Main,X as __namedExportsOrder,F as default};
//# sourceMappingURL=Carousel.stories.2d9eaf04.js.map
