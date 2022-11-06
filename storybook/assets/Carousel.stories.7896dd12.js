var A=Object.defineProperty;var c=(e,n)=>A(e,"name",{value:n,configurable:!0});import{H as i}from"./styled-components.browser.esm.f63de47c.js";import{r as p,R as E,a as y,j as r}from"./jsx-runtime.fed61fc8.js";import{C as v}from"./CircleTriangleButton.4d6c5c7c.js";import{I as w}from"./Image.08b113d0.js";import"./iframe.7a0652e4.js";const f=c((e,n)=>`${e}_${n}`,"createSlideId"),k=c((e,n)=>n===e-1?0:n+1,"getNextSlideIndex"),L=c((e,n)=>n===0?e-1:n-1,"getPrevSlideIndex");function d({className:e,carouselKey:n,options:{autoplay:h}={},children:C}){const m=p.exports.useRef(null),u=p.exports.useCallback(t=>{const o=m.current;if(!o)return;const a=o.querySelector(`#${t}`);!a||o.scrollTo({left:o.scrollLeft+a.getBoundingClientRect().left})},[]),l=p.exports.useMemo(()=>E.Children.toArray(C).map((t,o)=>({child:t,slideId:f(n,o)})),[n,C]),[x,j]=p.exports.useState(l[0].slideId);p.exports.useEffect(()=>{if(!m.current)return;const t=c(s=>{s.forEach(I=>{!I.isIntersecting||j(I.target.id)})},"callback"),o=new IntersectionObserver(t,{root:m.current,threshold:1}),a=l.map(({slideId:s})=>document.querySelector(`#${s}`)).filter(s=>!!s);return a.forEach(s=>{o.observe(s)}),()=>{a.forEach(s=>{o.unobserve(s)})}},[n,l]);const[_,S]=p.exports.useState(!1);return p.exports.useEffect(()=>{if(!h||_)return;const t=l.findIndex(a=>a.slideId===x);if(t<0)return;const o=setInterval(()=>{const a=f(n,k(l.length,t));u(a)},h);return()=>{clearInterval(o)}},[h,n,x,_,u,l]),y(B,{className:e,onMouseEnter:()=>{S(!0)},onMouseLeave:()=>{S(!1)},children:[r(R,{ref:m,children:l.map(({slideId:t,child:o},a)=>y(O,{id:t,children:[o,r(M,{}),r(K,{onClick:()=>{const s=f(n,L(l.length,a));u(s)},children:"Go to previous slide"}),r(q,{onClick:()=>{const s=f(n,k(l.length,a));u(s)},children:"Go to next slide"})]},t))}),r(T,{children:r(W,{className:e,children:l.map(({slideId:t},o)=>r($,{children:y(G,{isActive:x===t,onClick:()=>{u(t)},children:["Go to ",o+1," slide"]})},t))})})]})}c(d,"Carousel");const M=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
`,O=i.li`
  position: relative;
  flex: 0 0 100%;
  width: 100%;
`,B=i.div`
  position: relative;
  padding-top: 75%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;
`,R=i.ol`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`,T=i.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
`,W=i.ol`
  display: inline-block;
`,$=i.li`
  display: inline-block;
`,G=i.button`
  display: inline-block;
  cursor: pointer;
  width: 16px;
  height: 16px;
  background-color: ${({isActive:e})=>e?"#ffe":"#333"};
  border-radius: 50%;
  border: none;
  margin: 0 4px 24px;
  font-size: 0;
  transition: transform 0.1s;
`,K=i(v)`
  margin-top: 37.5%;
  transform: translateY(-50%);
  position: absolute;
  top: 0;
  left: 8px;
`,q=i(v)`
  margin-top: 37.5%;
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 0;
  right: 8px;
`;try{d.displayName="Carousel",d.__docgenInfo={description:"",displayName:"Carousel",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}},options:{defaultValue:null,description:"",name:"options",required:!1,type:{name:"CarouselOptions"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:d.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const N=i.div`
  max-width: 600px;
`,P=i.div`
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
`,H=c((e,n)=>r(N,{children:r(e,{...n})}),"withStyleWrapper"),U={parameters:{storySource:{source:`import type {
  ComponentStoryObj,
  ComponentMeta,
  DecoratorFn,
} from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { Carousel } from '@/components/Carousel/Carousel';
import { Image } from '@/components/Image/Image';

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

const IMAGE_LIST = [
  { src: 'images/sky_00009.jpg', caption: 'sky_00009' },
  { src: 'images/sky_00023.jpg', caption: 'sky_00023' },
  { src: 'images/sky_00036.jpg', caption: 'sky_00036' },
  { src: 'images/sky_00037.jpg', caption: 'sky_00037' },
  { src: 'images/sky_00200.jpg', caption: 'sky_00200' },
];

export const ImageCarousel = () => (
  <Carousel carouselKey="carousel-image">
    {IMAGE_LIST.map(({ src, caption }) => (
      <Image key={src} src={src} caption={caption} />
    ))}
  </Carousel>
);
`,locationsMap:{"additional-children":{startLoc:{col:34,line:69},endLoc:{col:1,line:74},startBody:{col:34,line:69},endBody:{col:1,line:74}},"image-carousel":{startLoc:{col:29,line:84},endLoc:{col:1,line:90},startBody:{col:29,line:84},endBody:{col:1,line:90}}}}},component:d,decorators:[H]},b=c(({index:e})=>r(P,{even:e%2===0,children:r("span",{children:e+1})}),"Item"),g=Array.from({length:4}).map((e,n)=>r(b,{index:n},n)),X={args:{carouselKey:"carousel-main",children:g}},Z={args:{carouselKey:"carousel-auto-play",children:g,options:{autoplay:3e3}}},ee=c(()=>y(d,{carouselKey:"carousel-additional-children",children:[g,r(b,{index:g.length})]}),"AdditionalChildren"),Y=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],ne=c(()=>r(d,{carouselKey:"carousel-image",children:Y.map(({src:e,caption:n})=>r(w,{src:e,caption:n},e))}),"ImageCarousel"),te=["Main","AutoPlay","AdditionalChildren","ImageCarousel"];export{ee as AdditionalChildren,Z as AutoPlay,ne as ImageCarousel,X as Main,te as __namedExportsOrder,U as default};
//# sourceMappingURL=Carousel.stories.7896dd12.js.map
