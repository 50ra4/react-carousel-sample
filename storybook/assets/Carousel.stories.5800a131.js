var E=Object.defineProperty;var c=(t,e)=>E(t,"name",{value:e,configurable:!0});import{H as l}from"./styled-components.browser.esm.2f3189aa.js";import{C as w}from"./CarouselSampleSlide.6b310ddf.js";import{r as p,R as B,a as f,j as s}from"./jsx-runtime.74e17f5d.js";import{C as b}from"./CircleTriangleButton.f0f14664.js";import{I as L}from"./Image.ff512634.js";import"./iframe.30b03abf.js";const y=c((t,e)=>`${t}_${e}`,"createSlideId"),k=c((t,e)=>e===t-1?0:e+1,"getNextSlideIndex"),M=c((t,e)=>e===0?t-1:e-1,"getPrevSlideIndex");function d({className:t,carouselKey:e,autoplay:x,children:S}){const m=p.exports.useRef(null),u=p.exports.useCallback(n=>{const o=m.current;if(!o)return;const a=o.querySelector(`#${n}`);if(!a)return;const r=o.scrollLeft,g=o.getBoundingClientRect().left,j=a.getBoundingClientRect().left;o.scrollTo({left:r+j-g})},[]),i=p.exports.useMemo(()=>B.Children.toArray(S).map((n,o)=>({child:n,slideId:y(e,o)})),[e,S]),[C,A]=p.exports.useState(i[0].slideId);p.exports.useEffect(()=>{if(!m.current)return;const n=c(r=>{r.forEach(g=>{!g.isIntersecting||A(g.target.id)})},"callback"),o=new IntersectionObserver(n,{root:m.current,threshold:1}),a=i.map(({slideId:r})=>document.querySelector(`#${r}`)).filter(r=>!!r);return a.forEach(r=>{o.observe(r)}),()=>{a.forEach(r=>{o.unobserve(r)})}},[e,i]);const[_,I]=p.exports.useState(!1);return p.exports.useEffect(()=>{if(!x||_)return;const n=i.findIndex(a=>a.slideId===C);if(n<0)return;const o=setInterval(()=>{const a=y(e,k(i.length,n));u(a)},x);return()=>{clearInterval(o)}},[x,e,C,_,u,i]),f(T,{className:t,onMouseEnter:()=>{I(!0)},onMouseLeave:()=>{I(!1)},children:[s(P,{ref:m,children:i.map(({slideId:n,child:o},a)=>f(O,{id:n,children:[o,s(R,{}),s(N,{onClick:()=>{const r=y(e,M(i.length,a));u(r)},children:"Go to previous slide"}),s($,{onClick:()=>{const r=y(e,k(i.length,a));u(r)},children:"Go to next slide"})]},n))}),s(W,{children:s(G,{className:t,children:i.map(({slideId:n},o)=>s(K,{children:f(q,{isActive:C===n,onClick:()=>{u(n)},children:["Go to ",o+1," slide"]})},n))})})]})}c(d,"Carousel");const R=l.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: center;
`,O=l.li`
  position: relative;
  flex: 0 0 100%;
  width: 100%;
`,T=l.div`
  position: relative;
  padding-top: 75%;
  filter: drop-shadow(0 0 10px #0003);
  perspective: 100px;
`,P=l.ol`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`,W=l.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
`,G=l.ol`
  display: inline-block;
`,K=l.li`
  display: inline-block;
`,q=l.button`
  display: inline-block;
  cursor: pointer;
  width: 16px;
  height: 16px;
  background-color: ${({isActive:t})=>t?"#ffe":"#333"};
  border-radius: 50%;
  border: none;
  margin: 0 4px 24px;
  font-size: 0;
  transition: transform 0.1s;
`,N=l(b)`
  margin-top: 37.5%;
  transform: translateY(-50%);
  position: absolute;
  top: 0;
  left: 8px;
`,$=l(b)`
  margin-top: 37.5%;
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 0;
  right: 8px;
`;try{d.displayName="Carousel",d.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:d.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const H=l.div`
  max-width: 600px;
`,Y=c((t,e)=>s(H,{children:s(t,{...e})}),"withStyleWrapper"),ee={parameters:{storySource:{source:`import type {
  ComponentStoryObj,
  ComponentMeta,
  DecoratorFn,
} from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { CarouselSampleSlide } from './CarouselSampleSlide';
import { Carousel } from '@/components/Carousel/Carousel';
import { Image } from '@/components/Image/Image';

const StyledWrapper = styled.div\`
  max-width: 600px;
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
  <CarouselSampleSlide count={index + 1} />
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
    autoplay: 3000,
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

const SampleImage = styled(Image)\`
  height: calc(100% - 2px);
\`;

export const ImageCarousel = () => (
  <Carousel carouselKey="carousel-image">
    {IMAGE_LIST.map(({ src, caption }) => (
      <SampleImage key={src} src={src} caption={caption} />
    ))}
  </Carousel>
);
`,locationsMap:{"additional-children":{startLoc:{col:34,line:52},endLoc:{col:1,line:57},startBody:{col:34,line:52},endBody:{col:1,line:57}},"image-carousel":{startLoc:{col:29,line:71},endLoc:{col:1,line:77},startBody:{col:29,line:71},endBody:{col:1,line:77}}}}},component:d,decorators:[Y]},v=c(({index:t})=>s(w,{count:t+1}),"Item"),h=Array.from({length:4}).map((t,e)=>s(v,{index:e},e)),te={args:{carouselKey:"carousel-main",children:h}},oe={args:{carouselKey:"carousel-auto-play",children:h,autoplay:3e3}},ne=c(()=>f(d,{carouselKey:"carousel-additional-children",children:[h,s(v,{index:h.length})]}),"AdditionalChildren"),V=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],D=l(L)`
  height: calc(100% - 2px);
`,re=c(()=>s(d,{carouselKey:"carousel-image",children:V.map(({src:t,caption:e})=>s(D,{src:t,caption:e},t))}),"ImageCarousel"),se=["Main","AutoPlay","AdditionalChildren","ImageCarousel"];export{ne as AdditionalChildren,oe as AutoPlay,re as ImageCarousel,te as Main,se as __namedExportsOrder,ee as default};
//# sourceMappingURL=Carousel.stories.5800a131.js.map
