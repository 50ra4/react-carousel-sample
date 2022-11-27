var Q=Object.defineProperty;var l=(e,t)=>Q(e,"name",{value:t,configurable:!0});import{H as p}from"./styled-components.browser.esm.04f1d24a.js";import{C as D}from"./CarouselSampleSlide.586ae1e2.js";import{r as n,R as U,a as k,j as i}from"./jsx-runtime.1bbe840e.js";import{C as G}from"./CircleTriangleButton.c5faef40.js";import{P as Z}from"./Picture.6550fb97.js";import"./iframe.4251b69a.js";function ee(e){const[t,s]=n.exports.useState(null),r=n.exports.useRef(0),c=n.exports.useCallback(a=>{a!==r.current&&(console.log(`current width: ${a}px`),s(a),r.current=a)},[]);return n.exports.useEffect(()=>{if(!e.current)return;const a=l(m=>{m.forEach(d=>{c(d.contentRect.width)})},"callback"),g=e.current,x=new ResizeObserver(a);return x.observe(g),()=>{x.unobserve(g)}},[e,c]),t}l(ee,"useContentWidth");const te=l(e=>{var t,s;return typeof e=="object"?{before:(t=e.before)!=null?t:0,after:(s=e.after)!=null?s:0}:typeof e=="number"?{before:e,after:e}:{before:0,after:0}},"persePeekOption"),E=l((e,t)=>`${e}_${t}`,"createSlideId"),ne=l(e=>+e.slice(e.lastIndexOf("_")+1),"slideId2SlideIndex"),re=l((e,t)=>e.size===t.size&&Array.from(e).every(s=>t.has(s)),"isEqualSlideIndexes");function oe(e,{total:t,carouselKey:s}){const[r,c]=n.exports.useState(new Set),a=n.exports.useRef(r),g=Math.min(...Array.from(r));return n.exports.useEffect(()=>{if(!e.current)return;const x=l(y=>{const h=new Set(a.current);y.forEach(I=>{const w=ne(I.target.id);I.intersectionRatio>.9?h.add(w):h.delete(w)}),!re(h,a.current)&&(c(h),a.current=h)},"callback"),m=new IntersectionObserver(x,{root:e.current,threshold:[0,.9,1]}),d=Array.from({length:t}).map((y,h)=>document.querySelector(`#${E(s,h)}`)).filter(y=>!!y);return d.forEach(y=>{m.observe(y)}),()=>{d.forEach(y=>{m.unobserve(y)})}},[s,t,e]),{currentSlideIndex:g,isDisplayedLastSlide:r.has(t-1)}}l(oe,"useCurrentSlideIndex");function C({className:e,carouselKey:t,autoplay:s,perView:r,gap:c=0,peek:a,startAt:g,rewind:x=!0,bound:m,slideWidth:d,disabledIndicator:y,disabledPreviousButton:h,disabledNextButton:I,children:w}){const O=n.exports.useMemo(()=>te(a),[a]),P=n.exports.useRef(null),b=ee(P),[B,R]=n.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[W,$]=n.exports.useState(!1),S=n.exports.useCallback(u=>{const o=P.current;if(!o)return;const A=E(t,u),M=o.querySelector(`#${A}`);if(!M)return;const F=o.scrollLeft,X=o.getBoundingClientRect().left,J=M.getBoundingClientRect().left;o.scrollTo({left:F+J-X})},[t]),v=n.exports.useMemo(()=>U.Children.toArray(w).map((u,o)=>({child:u,slideId:E(t,o)})),[t,w]),{currentSlideIndex:_,isDisplayedLastSlide:H}=oe(P,{carouselKey:t,total:v.length}),T=_===0,Y=x||!T,q=T?v.length-1:_-1,L=_===v.length-1||!!m&&H,V=x||!L,N=L?0:_+1,z=n.exports.useCallback(()=>{S(q)},[q,S]),j=n.exports.useCallback(()=>{S(N)},[N,S]);return n.exports.useEffect(()=>{if(!s||W||!V)return;const u=setInterval(()=>{j()},s);return()=>{clearInterval(u)}},[s,V,W,j]),n.exports.useEffect(()=>{if(!(!r||!d))throw new Error("both perView and slideWidth cannot be set.")},[r,d]),n.exports.useEffect(()=>{if(!r)return;if(r<1)throw new Error("perView must be 1 or more.");if(!b)return;const u=r>1?(r-1)*(c!=null?c:0):0,o=(b-u)/r;R({slideWidth:o,sliderPaddingRight:m?0:(r-1)*b,gapWidth:r>1?c:0,multipleSlide:r>1})},[m,c,r,b]),n.exports.useEffect(()=>{!d||!b||R({slideWidth:d,sliderPaddingRight:m?0:b-d,gapWidth:c,multipleSlide:b!==d})},[m,c,d,b]),n.exports.useEffect(()=>{!g||S(g)},[S,g]),k(le,{className:e,onMouseEnter:()=>{$(!0)},onMouseLeave:()=>{$(!1)},children:[k(ie,{ref:P,gapWidth:B.gapWidth,peek:O,children:[v.map(({slideId:u,child:o})=>{var A;return k(K,{id:u,width:(A=B.slideWidth)!=null?A:void 0,children:[o,i(ae,{multipleSlide:!!B.multipleSlide})]},u)}),i(se,{inserted:B.sliderPaddingRight||O.after})]}),!h&&Y&&i(fe,{onClick:z,children:"Go to previous slide"}),!I&&V&&i(me,{onClick:j,children:"Go to next slide"}),!y&&i(ce,{children:i(de,{children:v.map(({slideId:u},o)=>i(ue,{children:k(pe,{isActive:_===o,onClick:()=>{S(o)},children:["Go to ",o+1," slide"]})},u))})})]})}l(C,"Carousel");const se=p.div`
  padding-left: ${({inserted:e})=>e}px;
`,ae=p.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({multipleSlide:e})=>e?"start":"center"};
`,K=p.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,le=p.div`
  position: relative;
  height: 100%;
`,ie=p.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > ${K} + ${K} {
    margin-left: ${({gapWidth:e})=>e!=null?e:0}px;
  }

  scroll-padding: ${({peek:{before:e,after:t}})=>!e&&!t?"0":`0 ${t}px 0 ${e}px`};
  padding: ${({peek:{before:e,after:t}})=>!e&&!t?"0":`0 ${t}px 0 ${e}px`};
`,ce=p.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,de=p.ol`
  display: inline-block;
`,ue=p.li`
  display: inline-block;
`,pe=p.button`
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
  filter: drop-shadow(4px 4px 2px rgba(0, 0, 0, 0.2));
`,fe=p(G)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,me=p(G)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;try{C.displayName="Carousel",C.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},perView:{defaultValue:null,description:"a number of slides visible on the slider. default: 1",name:"perView",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"0"},description:"add margin between slides. But 0 when perView is 1. default: 0",name:"gap",required:!1,type:{name:"number"}},peek:{defaultValue:null,description:"The value of the future slider which have to be visible in the current view. default: 0",name:"peek",required:!1,type:{name:"PeekOption"}},startAt:{defaultValue:null,description:"Start at specific slide number. default: 0",name:"startAt",required:!1,type:{name:"number"}},rewind:{defaultValue:{value:"true"},description:"allow looping. default: true",name:"rewind",required:!1,type:{name:"boolean"}},bound:{defaultValue:null,description:"stop running perView number of slides from the end",name:"bound",required:!1,type:{name:"boolean"}},slideWidth:{defaultValue:null,description:"sets the width of the slide. However, it cannot be used together with the preview.",name:"slideWidth",required:!1,type:{name:"number"}},disabledIndicator:{defaultValue:null,description:"hide Indicator. default: false",name:"disabledIndicator",required:!1,type:{name:"boolean"}},disabledPreviousButton:{defaultValue:null,description:"hide PreviousButton. default: false",name:"disabledPreviousButton",required:!1,type:{name:"boolean"}},disabledNextButton:{defaultValue:null,description:"hide NextButton. default: false",name:"disabledNextButton",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:C.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const ye=p.div`
  max-width: 600px;
  height: 450px;
`,he=l((e,t)=>i(ye,{children:i(e,{...t})}),"withStyleWrapper"),Ie={parameters:{storySource:{source:`import type {
  ComponentStoryObj,
  ComponentMeta,
  DecoratorFn,
} from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { CarouselSampleSlide } from './CarouselSampleSlide';
import { Carousel } from '@/components/Carousel/Carousel';
import { Picture } from '@/components/Picture/Picture';

const StyledWrapper = styled.div\`
  max-width: 600px;
  height: 450px;
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

const children = Array.from({ length: 4 }).map((_, i) => (
  <CarouselSampleSlide key={i} count={i + 1} />
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
    {Array.from({ length: 4 }).map((_, i) => (
      <CarouselSampleSlide key={i} count={i + 1 + 4} />
    ))}
  </Carousel>
);

const IMAGE_LIST = [
  { src: 'images/sky_00009.jpg', caption: 'sky_00009' },
  { src: 'images/sky_00023.jpg', caption: 'sky_00023' },
  { src: 'images/sky_00036.jpg', caption: 'sky_00036' },
  { src: 'images/sky_00037.jpg', caption: 'sky_00037' },
  { src: 'images/sky_00200.jpg', caption: 'sky_00200' },
];

export const PictureCarousel = () => (
  <Carousel carouselKey="carousel-picture">
    {IMAGE_LIST.map(({ src, caption }) => (
      <Picture key={src} src={src} caption={caption} />
    ))}
  </Carousel>
);

export const PerView3: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-perview-3',
    children,
    perView: 3,
  },
};

export const Gap5: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-gap-5',
    children,
    perView: 3,
    gap: 5,
  },
};

export const PeekBefore20: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-peek-before-20',
    children,
    perView: 3,
    peek: { before: 20 },
  },
};

export const DisabledIndicator: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-disabled-indicator',
    children,
    perView: 3,
    disabledIndicator: true,
  },
};

export const DisabledSideButton: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-disabled-side-button',
    children,
    perView: 3,
    disabledPreviousButton: true,
    disabledNextButton: true,
  },
};

export const StartAt: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-startAt',
    children,
    perView: 3,
    startAt: 1,
  },
};

export const NoRewind: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-no-rewind',
    children,
    perView: 3,
    rewind: false,
  },
};

export const Bound: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-bound',
    children,
    perView: 3,
    bound: true,
  },
};

export const SlideWidth145: ComponentStoryObj<typeof Carousel> = {
  args: {
    carouselKey: 'carousel-slide-width-140',
    children,
    slideWidth: 640,
    gap: 1,
  },
};
`,locationsMap:{"additional-children":{startLoc:{col:34,line:49},endLoc:{col:1,line:56},startBody:{col:34,line:49},endBody:{col:1,line:56}},"picture-carousel":{startLoc:{col:31,line:66},endLoc:{col:1,line:72},startBody:{col:31,line:66},endBody:{col:1,line:72}}}}},component:C,decorators:[he]},f=Array.from({length:4}).map((e,t)=>i(D,{count:t+1},t)),Pe={args:{carouselKey:"carousel-main",children:f}},Be={args:{carouselKey:"carousel-auto-play",children:f,autoplay:3e3}},Ae=l(()=>k(C,{carouselKey:"carousel-additional-children",children:[f,Array.from({length:4}).map((e,t)=>i(D,{count:t+1+4},t))]}),"AdditionalChildren"),ge=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],Ve=l(()=>i(C,{carouselKey:"carousel-picture",children:ge.map(({src:e,caption:t})=>i(Z,{src:e,caption:t},e))}),"PictureCarousel"),je={args:{carouselKey:"carousel-perview-3",children:f,perView:3}},Ee={args:{carouselKey:"carousel-gap-5",children:f,perView:3,gap:5}},Ke={args:{carouselKey:"carousel-peek-before-20",children:f,perView:3,peek:{before:20}}},Oe={args:{carouselKey:"carousel-disabled-indicator",children:f,perView:3,disabledIndicator:!0}},Re={args:{carouselKey:"carousel-disabled-side-button",children:f,perView:3,disabledPreviousButton:!0,disabledNextButton:!0}},We={args:{carouselKey:"carousel-startAt",children:f,perView:3,startAt:1}},$e={args:{carouselKey:"carousel-no-rewind",children:f,perView:3,rewind:!1}},Te={args:{carouselKey:"carousel-bound",children:f,perView:3,bound:!0}},qe={args:{carouselKey:"carousel-slide-width-140",children:f,slideWidth:640,gap:1}},Le=["Main","AutoPlay","AdditionalChildren","PictureCarousel","PerView3","Gap5","PeekBefore20","DisabledIndicator","DisabledSideButton","StartAt","NoRewind","Bound","SlideWidth145"];export{Ae as AdditionalChildren,Be as AutoPlay,Te as Bound,Oe as DisabledIndicator,Re as DisabledSideButton,Ee as Gap5,Pe as Main,$e as NoRewind,Ke as PeekBefore20,je as PerView3,Ve as PictureCarousel,qe as SlideWidth145,We as StartAt,Le as __namedExportsOrder,Ie as default};
//# sourceMappingURL=Carousel.stories.cee840aa.js.map
