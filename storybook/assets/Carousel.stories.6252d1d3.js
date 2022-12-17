var ee=Object.defineProperty;var a=(e,t)=>ee(e,"name",{value:t,configurable:!0});import{H as m}from"./styled-components.browser.esm.48f8c355.js";import{C as W}from"./CarouselSampleSlide.571b66f1.js";import{r as o,R as te,a as _,j as p}from"./jsx-runtime.0570b1b6.js";import{C as D}from"./CircleTriangleButton.fde053e1.js";import{P as ne}from"./Picture.ff948d98.js";import"./iframe.e5eaa3f6.js";function re(e,t){let r,n;return(...i)=>{clearTimeout(r);const c=+new Date;n||(n=c);const f=t-(c-n);r=window.setTimeout(()=>{e(...i),n=void 0},f)}}a(re,"audit");const R=a(e=>{const[t]=e instanceof Array?e:[e];if(!t)return null;const{blockSize:r,inlineSize:n}=t;return{blockSize:r,inlineSize:n}},"toResizeObserverSize");function oe(e,{duration:t}={duration:50}){const[r,n]=o.exports.useState(null);return o.exports.useEffect(()=>{const i=e.current;if(!i)return;const c=re(s=>{n({borderBoxSize:R(s.borderBoxSize),contentBoxSize:R(s.contentBoxSize),contentRect:s.contentRect,devicePixelContentBoxSize:R(s.devicePixelContentBoxSize),target:i})},t),f=a(s=>{const d=s.find(h=>h.target===e.current);!d||c(d)},"callback"),g=e.current,b=new ResizeObserver(f);return b.observe(g),()=>{b.unobserve(g)}},[t,e]),r}a(oe,"useResizeObserver");function se(e,{duration:t=250}={}){const r=oe(e,{duration:t});return o.exports.useMemo(()=>{var n,i,c,f;return(f=(c=(n=r==null?void 0:r.borderBoxSize)==null?void 0:n.inlineSize)!=null?c:(i=r==null?void 0:r.contentRect)==null?void 0:i.width)!=null?f:null},[r])}a(se,"useContentWidth");const ae=a(e=>{var t,r;switch(typeof e){case"object":return{before:(t=e.before)!=null?t:0,after:(r=e.after)!=null?r:0};case"number":return{before:e,after:e};default:return{before:0,after:0}}},"persePeekOption"),V=a((e,t)=>`${e}_${t}`,"createSlideId"),ie=a(e=>+e.slice(e.lastIndexOf("_")+1),"slideId2SlideIndex"),le=a((e,t)=>e.size===t.size&&Array.from(e).every(r=>t.has(r)),"isEqualSlideIndexes");function ce(e,{total:t,carouselKey:r}){const[n,i]=o.exports.useState(new Set),c=o.exports.useRef(n),f=Math.min(...Array.from(n));return o.exports.useEffect(()=>{if(!e.current)return;const g=a(d=>{const h=new Set(c.current);d.forEach(B=>{const w=ie(B.target.id);B.intersectionRatio>.9?h.add(w):h.delete(w)}),!le(h,c.current)&&(i(h),c.current=h)},"callback"),b=new IntersectionObserver(g,{root:e.current,threshold:[0,.9,1]}),s=Array.from({length:t}).map((d,h)=>document.querySelector(`#${V(r,h)}`)).filter(d=>!!d);return s.forEach(d=>{b.observe(d)}),()=>{s.forEach(d=>{b.unobserve(d)})}},[r,t,e]),{currentSlideIndex:f,isDisplayedLastSlide:n.has(t-1)}}a(ce,"useCurrentSlideIndex");function C({className:e,carouselKey:t,autoplay:r,perView:n,gap:i=0,peek:c,startAt:f,rewind:g=!0,bound:b,slideWidth:s,disabledIndicator:d,disabledPreviousButton:h,disabledNextButton:B,children:w}){const K=o.exports.useMemo(()=>ae(c),[c]),I=o.exports.useRef(null),S=se(I),[E,O]=o.exports.useState(!1),x=o.exports.useCallback(u=>{const l=I.current;if(!l)return;const z=V(t,u),N=l.querySelector(`#${z}`);if(!N)return;const Q=l.scrollLeft,U=l.getBoundingClientRect().left,Z=N.getBoundingClientRect().left;l.scrollTo({left:Q+Z-U})},[t]),v=o.exports.useMemo(()=>te.Children.toArray(w).map((u,l)=>({child:u,slideId:V(t,l)})),[t,w]),{currentSlideIndex:k,isDisplayedLastSlide:G}=ce(I,{carouselKey:t,total:v.length}),T=k===0,H=g||!T,M=T?v.length-1:k-1,q=k===v.length-1||!!b&&G,P=g||!q,L=q?0:k+1,Y=o.exports.useCallback(()=>{x(M)},[M,x]),A=o.exports.useCallback(()=>{x(L)},[L,x]);o.exports.useEffect(()=>{if(!r||E||!P)return;const u=setInterval(()=>{A()},r);return()=>{clearInterval(u)}},[r,P,E,A]),o.exports.useEffect(()=>{if(n&&n<1)throw new Error("perView must be 1 or more.");if(n&&s)throw new Error("both perView and slideWidth cannot be set.")},[n,s]);const{slideWidth:$,sliderPaddingRight:F}=o.exports.useMemo(()=>{const u={sliderPaddingRight:0};if(!S)return u;if(n){const l=n>1?(n-1)*(i!=null?i:0):0;return{slideWidth:(S-l)/n,sliderPaddingRight:b?0:(n-1)*S}}return s?{slideWidth:s,sliderPaddingRight:b?0:S-s}:u},[b,i,n,s,S]),X=!!n&&n>1?i:0,J=S!==$;return o.exports.useEffect(()=>{!f||x(f)},[x,f]),_(pe,{className:e,onMouseEnter:()=>{O(!0)},onMouseLeave:()=>{O(!1)},children:[_(fe,{ref:I,gapWidth:X,peek:K,children:[v.map(({slideId:u,child:l})=>_(j,{id:u,width:$,children:[l,p(ue,{isMultipleSlide:J})]},u)),p(de,{inserted:F||K.after})]}),!h&&H&&p(ge,{onClick:Y,children:"Go to previous slide"}),!B&&P&&p(xe,{onClick:A,children:"Go to next slide"}),!d&&p(me,{children:p(ye,{children:v.map(({slideId:u},l)=>p(he,{children:_(be,{isActive:k===l,onClick:()=>{x(l)},children:["Go to ",l+1," slide"]})},u))})})]})}a(C,"Carousel");const de=m.div`
  padding-left: ${({inserted:e})=>e}px;
`,ue=m.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({isMultipleSlide:e})=>e?"start":"center"};
`,j=m.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,pe=m.div`
  position: relative;
  height: 100%;
`,fe=m.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > ${j} + ${j} {
    margin-left: ${({gapWidth:e})=>e!=null?e:0}px;
  }

  scroll-padding-left: ${({peek:{before:e}})=>e}px;
  scroll-padding-right: ${({peek:{after:e}})=>e}px;
  padding-left: ${({peek:{before:e}})=>e}px;
  padding-right: ${({peek:{after:e}})=>e}px;
`,me=m.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,ye=m.ol`
  display: inline-block;
`,he=m.li`
  display: inline-block;
`,be=m.button`
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
`,ge=m(D)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,xe=m(D)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;try{C.displayName="Carousel",C.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},perView:{defaultValue:null,description:"a number of slides visible on the slider. default: 1",name:"perView",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"0"},description:"add margin between slides. But 0 when perView is 1. default: 0",name:"gap",required:!1,type:{name:"number"}},peek:{defaultValue:null,description:"The value of the future slider which have to be visible in the current view. default: 0",name:"peek",required:!1,type:{name:"PeekOption"}},startAt:{defaultValue:null,description:"Start at specific slide number. default: 0",name:"startAt",required:!1,type:{name:"number"}},rewind:{defaultValue:{value:"true"},description:"allow looping. default: true",name:"rewind",required:!1,type:{name:"boolean"}},bound:{defaultValue:null,description:"stop running perView number of slides from the end",name:"bound",required:!1,type:{name:"boolean"}},slideWidth:{defaultValue:null,description:"sets the width of the slide. However, it cannot be used together with the preview.",name:"slideWidth",required:!1,type:{name:"number"}},disabledIndicator:{defaultValue:null,description:"hide Indicator. default: false",name:"disabledIndicator",required:!1,type:{name:"boolean"}},disabledPreviousButton:{defaultValue:null,description:"hide PreviousButton. default: false",name:"disabledPreviousButton",required:!1,type:{name:"boolean"}},disabledNextButton:{defaultValue:null,description:"hide NextButton. default: false",name:"disabledNextButton",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:C.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const Se=m.div`
  max-width: 600px;
  height: 450px;
`,Ce=a((e,t)=>p(Se,{children:p(e,{...t})}),"withStyleWrapper"),Ve={parameters:{storySource:{source:`import type {
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
`,locationsMap:{"additional-children":{startLoc:{col:34,line:49},endLoc:{col:1,line:56},startBody:{col:34,line:49},endBody:{col:1,line:56}},"picture-carousel":{startLoc:{col:31,line:66},endLoc:{col:1,line:72},startBody:{col:31,line:66},endBody:{col:1,line:72}}}}},component:C,decorators:[Ce]},y=Array.from({length:4}).map((e,t)=>p(W,{count:t+1},t)),je={args:{carouselKey:"carousel-main",children:y}},Ke={args:{carouselKey:"carousel-auto-play",children:y,autoplay:3e3}},Ee=a(()=>_(C,{carouselKey:"carousel-additional-children",children:[y,Array.from({length:4}).map((e,t)=>p(W,{count:t+1+4},t))]}),"AdditionalChildren"),we=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],Oe=a(()=>p(C,{carouselKey:"carousel-picture",children:we.map(({src:e,caption:t})=>p(ne,{src:e,caption:t},e))}),"PictureCarousel"),Te={args:{carouselKey:"carousel-perview-3",children:y,perView:3}},Me={args:{carouselKey:"carousel-gap-5",children:y,perView:3,gap:5}},qe={args:{carouselKey:"carousel-peek-before-20",children:y,perView:3,peek:{before:20}}},Le={args:{carouselKey:"carousel-disabled-indicator",children:y,perView:3,disabledIndicator:!0}},$e={args:{carouselKey:"carousel-disabled-side-button",children:y,perView:3,disabledPreviousButton:!0,disabledNextButton:!0}},ze={args:{carouselKey:"carousel-startAt",children:y,perView:3,startAt:1}},Ne={args:{carouselKey:"carousel-no-rewind",children:y,perView:3,rewind:!1}},We={args:{carouselKey:"carousel-bound",children:y,perView:3,bound:!0}},De={args:{carouselKey:"carousel-slide-width-140",children:y,slideWidth:640,gap:1}},Ge=["Main","AutoPlay","AdditionalChildren","PictureCarousel","PerView3","Gap5","PeekBefore20","DisabledIndicator","DisabledSideButton","StartAt","NoRewind","Bound","SlideWidth145"];export{Ee as AdditionalChildren,Ke as AutoPlay,We as Bound,Le as DisabledIndicator,$e as DisabledSideButton,Me as Gap5,je as Main,Ne as NoRewind,qe as PeekBefore20,Te as PerView3,Oe as PictureCarousel,De as SlideWidth145,ze as StartAt,Ge as __namedExportsOrder,Ve as default};
//# sourceMappingURL=Carousel.stories.6252d1d3.js.map
