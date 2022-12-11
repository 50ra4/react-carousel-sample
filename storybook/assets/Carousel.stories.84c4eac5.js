var Q=Object.defineProperty;var l=(e,t)=>Q(e,"name",{value:t,configurable:!0});import{H as f}from"./styled-components.browser.esm.05370dc2.js";import{C as D}from"./CarouselSampleSlide.2eed3299.js";import{r,R as U,a as k,j as c}from"./jsx-runtime.a215cc8e.js";import{C as G}from"./CircleTriangleButton.9d3ec52c.js";import{P as Z}from"./Picture.147722ee.js";import"./iframe.35887d6c.js";function ee(e,t){let o,n;return(...i)=>{clearTimeout(o);const s=+new Date;n||(n=s);const h=t-(s-n);o=window.setTimeout(()=>{e(...i),n=void 0},h)}}l(ee,"audit");function te(e){const[t,o]=r.exports.useState(null),n=r.exports.useRef(0),i=r.exports.useCallback(s=>{s!==n.current&&(o(s),n.current=s)},[]);return r.exports.useEffect(()=>{if(!e.current)return;const s=ee(i,250),h=l(d=>{d.forEach(u=>{s(u.contentRect.width)})},"callback"),x=e.current,y=new ResizeObserver(h);return y.observe(x),()=>{y.unobserve(x)}},[e,i]),t}l(te,"useContentWidth");const ne=l(e=>{var t,o;return typeof e=="object"?{before:(t=e.before)!=null?t:0,after:(o=e.after)!=null?o:0}:typeof e=="number"?{before:e,after:e}:{before:0,after:0}},"persePeekOption"),E=l((e,t)=>`${e}_${t}`,"createSlideId"),re=l(e=>+e.slice(e.lastIndexOf("_")+1),"slideId2SlideIndex"),oe=l((e,t)=>e.size===t.size&&Array.from(e).every(o=>t.has(o)),"isEqualSlideIndexes");function se(e,{total:t,carouselKey:o}){const[n,i]=r.exports.useState(new Set),s=r.exports.useRef(n),h=Math.min(...Array.from(n));return r.exports.useEffect(()=>{if(!e.current)return;const x=l(u=>{const g=new Set(s.current);u.forEach(I=>{const w=re(I.target.id);I.intersectionRatio>.9?g.add(w):g.delete(w)}),!oe(g,s.current)&&(i(g),s.current=g)},"callback"),y=new IntersectionObserver(x,{root:e.current,threshold:[0,.9,1]}),d=Array.from({length:t}).map((u,g)=>document.querySelector(`#${E(o,g)}`)).filter(u=>!!u);return d.forEach(u=>{y.observe(u)}),()=>{d.forEach(u=>{y.unobserve(u)})}},[o,t,e]),{currentSlideIndex:h,isDisplayedLastSlide:n.has(t-1)}}l(se,"useCurrentSlideIndex");function C({className:e,carouselKey:t,autoplay:o,perView:n,gap:i=0,peek:s,startAt:h,rewind:x=!0,bound:y,slideWidth:d,disabledIndicator:u,disabledPreviousButton:g,disabledNextButton:I,children:w}){const O=r.exports.useMemo(()=>ne(s),[s]),P=r.exports.useRef(null),b=te(P),[B,R]=r.exports.useState({slideWidth:null,sliderPaddingRight:0,gapWidth:0}),[T,W]=r.exports.useState(!1),S=r.exports.useCallback(p=>{const a=P.current;if(!a)return;const A=E(t,p),M=a.querySelector(`#${A}`);if(!M)return;const F=a.scrollLeft,X=a.getBoundingClientRect().left,J=M.getBoundingClientRect().left;a.scrollTo({left:F+J-X})},[t]),v=r.exports.useMemo(()=>U.Children.toArray(w).map((p,a)=>({child:p,slideId:E(t,a)})),[t,w]),{currentSlideIndex:_,isDisplayedLastSlide:H}=se(P,{carouselKey:t,total:v.length}),$=_===0,Y=x||!$,q=$?v.length-1:_-1,L=_===v.length-1||!!y&&H,V=x||!L,N=L?0:_+1,z=r.exports.useCallback(()=>{S(q)},[q,S]),j=r.exports.useCallback(()=>{S(N)},[N,S]);return r.exports.useEffect(()=>{if(!o||T||!V)return;const p=setInterval(()=>{j()},o);return()=>{clearInterval(p)}},[o,V,T,j]),r.exports.useEffect(()=>{if(!(!n||!d))throw new Error("both perView and slideWidth cannot be set.")},[n,d]),r.exports.useEffect(()=>{if(!n)return;if(n<1)throw new Error("perView must be 1 or more.");if(!b)return;const p=n>1?(n-1)*(i!=null?i:0):0,a=(b-p)/n;R({slideWidth:a,sliderPaddingRight:y?0:(n-1)*b,gapWidth:n>1?i:0,multipleSlide:n>1})},[y,i,n,b]),r.exports.useEffect(()=>{!d||!b||R({slideWidth:d,sliderPaddingRight:y?0:b-d,gapWidth:i,multipleSlide:b!==d})},[y,i,d,b]),r.exports.useEffect(()=>{!h||S(h)},[S,h]),k(le,{className:e,onMouseEnter:()=>{W(!0)},onMouseLeave:()=>{W(!1)},children:[k(ce,{ref:P,gapWidth:B.gapWidth,peek:O,children:[v.map(({slideId:p,child:a})=>{var A;return k(K,{id:p,width:(A=B.slideWidth)!=null?A:void 0,children:[a,c(ie,{multipleSlide:!!B.multipleSlide})]},p)}),c(ae,{inserted:B.sliderPaddingRight||O.after})]}),!g&&Y&&c(me,{onClick:z,children:"Go to previous slide"}),!I&&V&&c(ye,{onClick:j,children:"Go to next slide"}),!u&&c(de,{children:c(ue,{children:v.map(({slideId:p},a)=>c(pe,{children:k(fe,{isActive:_===a,onClick:()=>{S(a)},children:["Go to ",a+1," slide"]})},p))})})]})}l(C,"Carousel");const ae=f.div`
  padding-left: ${({inserted:e})=>e}px;
`,ie=f.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({multipleSlide:e})=>e?"start":"center"};
`,K=f.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,le=f.div`
  position: relative;
  height: 100%;
`,ce=f.ol`
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
`,de=f.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,ue=f.ol`
  display: inline-block;
`,pe=f.li`
  display: inline-block;
`,fe=f.button`
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
`,me=f(G)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,ye=f(G)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;try{C.displayName="Carousel",C.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},perView:{defaultValue:null,description:"a number of slides visible on the slider. default: 1",name:"perView",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"0"},description:"add margin between slides. But 0 when perView is 1. default: 0",name:"gap",required:!1,type:{name:"number"}},peek:{defaultValue:null,description:"The value of the future slider which have to be visible in the current view. default: 0",name:"peek",required:!1,type:{name:"PeekOption"}},startAt:{defaultValue:null,description:"Start at specific slide number. default: 0",name:"startAt",required:!1,type:{name:"number"}},rewind:{defaultValue:{value:"true"},description:"allow looping. default: true",name:"rewind",required:!1,type:{name:"boolean"}},bound:{defaultValue:null,description:"stop running perView number of slides from the end",name:"bound",required:!1,type:{name:"boolean"}},slideWidth:{defaultValue:null,description:"sets the width of the slide. However, it cannot be used together with the preview.",name:"slideWidth",required:!1,type:{name:"number"}},disabledIndicator:{defaultValue:null,description:"hide Indicator. default: false",name:"disabledIndicator",required:!1,type:{name:"boolean"}},disabledPreviousButton:{defaultValue:null,description:"hide PreviousButton. default: false",name:"disabledPreviousButton",required:!1,type:{name:"boolean"}},disabledNextButton:{defaultValue:null,description:"hide NextButton. default: false",name:"disabledNextButton",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:C.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const he=f.div`
  max-width: 600px;
  height: 450px;
`,ge=l((e,t)=>c(he,{children:c(e,{...t})}),"withStyleWrapper"),Pe={parameters:{storySource:{source:`import type {
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
`,locationsMap:{"additional-children":{startLoc:{col:34,line:49},endLoc:{col:1,line:56},startBody:{col:34,line:49},endBody:{col:1,line:56}},"picture-carousel":{startLoc:{col:31,line:66},endLoc:{col:1,line:72},startBody:{col:31,line:66},endBody:{col:1,line:72}}}}},component:C,decorators:[ge]},m=Array.from({length:4}).map((e,t)=>c(D,{count:t+1},t)),Be={args:{carouselKey:"carousel-main",children:m}},Ae={args:{carouselKey:"carousel-auto-play",children:m,autoplay:3e3}},Ve=l(()=>k(C,{carouselKey:"carousel-additional-children",children:[m,Array.from({length:4}).map((e,t)=>c(D,{count:t+1+4},t))]}),"AdditionalChildren"),be=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],je=l(()=>c(C,{carouselKey:"carousel-picture",children:be.map(({src:e,caption:t})=>c(Z,{src:e,caption:t},e))}),"PictureCarousel"),Ee={args:{carouselKey:"carousel-perview-3",children:m,perView:3}},Ke={args:{carouselKey:"carousel-gap-5",children:m,perView:3,gap:5}},Oe={args:{carouselKey:"carousel-peek-before-20",children:m,perView:3,peek:{before:20}}},Re={args:{carouselKey:"carousel-disabled-indicator",children:m,perView:3,disabledIndicator:!0}},Te={args:{carouselKey:"carousel-disabled-side-button",children:m,perView:3,disabledPreviousButton:!0,disabledNextButton:!0}},We={args:{carouselKey:"carousel-startAt",children:m,perView:3,startAt:1}},$e={args:{carouselKey:"carousel-no-rewind",children:m,perView:3,rewind:!1}},qe={args:{carouselKey:"carousel-bound",children:m,perView:3,bound:!0}},Le={args:{carouselKey:"carousel-slide-width-140",children:m,slideWidth:640,gap:1}},Ne=["Main","AutoPlay","AdditionalChildren","PictureCarousel","PerView3","Gap5","PeekBefore20","DisabledIndicator","DisabledSideButton","StartAt","NoRewind","Bound","SlideWidth145"];export{Ve as AdditionalChildren,Ae as AutoPlay,qe as Bound,Re as DisabledIndicator,Te as DisabledSideButton,Ke as Gap5,Be as Main,$e as NoRewind,Oe as PeekBefore20,Ee as PerView3,je as PictureCarousel,Le as SlideWidth145,We as StartAt,Ne as __namedExportsOrder,Pe as default};
//# sourceMappingURL=Carousel.stories.84c4eac5.js.map
