var ee=Object.defineProperty;var s=(e,t)=>ee(e,"name",{value:t,configurable:!0});import{H as p}from"./styled-components.browser.esm.078dbe64.js";import{C as D}from"./CarouselSampleSlide.54400601.js";import{r as o,R as te,a as k,j as u}from"./jsx-runtime.f7b1c7fb.js";import{C as z}from"./CircleTriangleButton.f0cdb917.js";import{P as ne}from"./Picture.3d7ca04d.js";import"./iframe.641b3e44.js";const V=s(e=>{const[t]=e instanceof ResizeObserverSize?[e]:e;return t||null},"toResizeObserverSize");function re({ref:e,callback:t}){o.exports.useEffect(()=>{const r=e.current;if(!r)return;const n=s(m=>{const i=m.find(h=>h.target===r);!i||t({borderBoxSize:V(i.borderBoxSize),contentBoxSize:V(i.contentBoxSize),contentRect:i.contentRect,devicePixelContentBoxSize:V(i.devicePixelContentBoxSize),target:r})},"callbackFn"),a=e.current,c=new ResizeObserver(n);return c.observe(a),()=>{c.unobserve(a)}},[t,e])}s(re,"useResizeObserver");function oe(e,t){let r,n;return(...a)=>{clearTimeout(r);const c=+new Date;n||(n=c);const m=t-(c-n);r=window.setTimeout(()=>{e(...a),n=void 0},m)}}s(oe,"audit");const se=s(({borderBoxSize:e,contentRect:t})=>{var r,n;return(n=(r=e==null?void 0:e.inlineSize)!=null?r:t==null?void 0:t.width)!=null?n:null},"toWidth");function ae(e,{duration:t=250}={}){const[r,n]=o.exports.useState(null),a=o.exports.useRef(0),c=o.exports.useMemo(()=>oe(m=>{const i=se(m);!i||a.current!==i&&(a.current=i,n(i))},t),[t]);return re({ref:e,callback:c}),r}s(ae,"useContentWidth");const ie=s(e=>{var t,r;switch(typeof e){case"object":return{before:(t=e.before)!=null?t:0,after:(r=e.after)!=null?r:0};case"number":return{before:e,after:e};default:return{before:0,after:0}}},"persePeekOption"),j=s((e,t)=>`${e}_${t}`,"createSlideId"),le=s(e=>+e.slice(e.lastIndexOf("_")+1),"slideId2SlideIndex"),ce=s((e,t)=>e.size===t.size&&Array.from(e).every(r=>t.has(r)),"isEqualSlideIndexes");function de(e,{total:t,carouselKey:r}){const[n,a]=o.exports.useState(new Set),c=o.exports.useRef(n),m=Math.min(...Array.from(n));return o.exports.useEffect(()=>{if(!e.current)return;const i=s(y=>{const b=new Set(c.current);y.forEach(I=>{const w=le(I.target.id);I.intersectionRatio>.9?b.add(w):b.delete(w)}),!ce(b,c.current)&&(a(b),c.current=b)},"callback"),h=new IntersectionObserver(i,{root:e.current,threshold:[0,.9,1]}),g=Array.from({length:t}).map((y,b)=>document.querySelector(`#${j(r,b)}`)).filter(y=>!!y);return g.forEach(y=>{h.observe(y)}),()=>{g.forEach(y=>{h.unobserve(y)})}},[r,t,e]),{currentSlideIndex:m,isDisplayedLastSlide:n.has(t-1)}}s(de,"useCurrentSlideIndex");function C({className:e,carouselKey:t,autoplay:r,perView:n,gap:a=0,peek:c,startAt:m,rewind:i=!0,bound:h,slideWidth:g,disabledIndicator:y,disabledPreviousButton:b,disabledNextButton:I,children:w}){const R=o.exports.useMemo(()=>ie(c),[c]),P=o.exports.useRef(null),S=ae(P),[E,O]=o.exports.useState(!1),x=o.exports.useCallback(d=>{const l=P.current;if(!l)return;const $=j(t,d),N=l.querySelector(`#${$}`);if(!N)return;const Q=l.scrollLeft,U=l.getBoundingClientRect().left,Z=N.getBoundingClientRect().left;l.scrollTo({left:Q+Z-U})},[t]),v=o.exports.useMemo(()=>te.Children.toArray(w).map((d,l)=>({child:d,slideId:j(t,l)})),[t,w]),{currentSlideIndex:_,isDisplayedLastSlide:G}=de(P,{carouselKey:t,total:v.length}),T=_===0,F=i||!T,W=T?v.length-1:_-1,M=_===v.length-1||!!h&&G,B=i||!M,q=M?0:_+1,H=o.exports.useCallback(()=>{x(W)},[W,x]),A=o.exports.useCallback(()=>{x(q)},[q,x]);o.exports.useEffect(()=>{if(!r||E||!B)return;const d=setInterval(()=>{A()},r);return()=>{clearInterval(d)}},[r,B,E,A]),o.exports.useEffect(()=>{if(n&&n<1)throw new Error("perView must be 1 or more.");if(n&&g)throw new Error("both perView and slideWidth cannot be set.")},[n,g]);const{slideWidth:L,sliderPaddingRight:Y}=o.exports.useMemo(()=>{const d={sliderPaddingRight:0};if(!S)return d;if(n){const l=n>1?(n-1)*(a!=null?a:0):0;return{slideWidth:(S-l)/n,sliderPaddingRight:h?0:(n-1)*S}}return g?{slideWidth:g,sliderPaddingRight:h?0:S-g}:d},[h,a,n,g,S]),X=!!n&&n>1?a:0,J=S!==L;return o.exports.useEffect(()=>{!m||x(m)},[x,m]),k(fe,{className:e,onMouseEnter:()=>{O(!0)},onMouseLeave:()=>{O(!1)},children:[k(me,{ref:P,gapWidth:X,peek:R,children:[v.map(({slideId:d,child:l})=>k(K,{id:d,width:L,children:[l,u(pe,{isMultipleSlide:J})]},d)),u(ue,{inserted:Y||R.after})]}),!b&&F&&u(xe,{onClick:H,children:"Go to previous slide"}),!I&&B&&u(Se,{onClick:A,children:"Go to next slide"}),!y&&u(ye,{children:u(he,{children:v.map(({slideId:d},l)=>u(ge,{children:k(be,{isActive:_===l,onClick:()=>{x(l)},children:["Go to ",l+1," slide"]})},d))})})]})}s(C,"Carousel");const ue=p.div`
  padding-left: ${({inserted:e})=>e}px;
`,pe=p.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({isMultipleSlide:e})=>e?"start":"center"};
`,K=p.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,fe=p.div`
  position: relative;
  height: 100%;
`,me=p.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > ${K} + ${K} {
    margin-left: ${({gapWidth:e})=>e!=null?e:0}px;
  }

  scroll-padding-left: ${({peek:{before:e}})=>e}px;
  scroll-padding-right: ${({peek:{after:e}})=>e}px;
  padding-left: ${({peek:{before:e}})=>e}px;
  padding-right: ${({peek:{after:e}})=>e}px;
`,ye=p.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,he=p.ol`
  display: inline-block;
`,ge=p.li`
  display: inline-block;
`,be=p.button`
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
`,xe=p(z)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,Se=p(z)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;try{C.displayName="Carousel",C.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},perView:{defaultValue:null,description:"a number of slides visible on the slider. default: 1",name:"perView",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"0"},description:"add margin between slides. But 0 when perView is 1. default: 0",name:"gap",required:!1,type:{name:"number"}},peek:{defaultValue:null,description:"The value of the future slider which have to be visible in the current view. default: 0",name:"peek",required:!1,type:{name:"PeekOption"}},startAt:{defaultValue:null,description:"Start at specific slide number. default: 0",name:"startAt",required:!1,type:{name:"number"}},rewind:{defaultValue:{value:"true"},description:"allow looping. default: true",name:"rewind",required:!1,type:{name:"boolean"}},bound:{defaultValue:null,description:"stop running perView number of slides from the end",name:"bound",required:!1,type:{name:"boolean"}},slideWidth:{defaultValue:null,description:"sets the width of the slide. However, it cannot be used together with the preview.",name:"slideWidth",required:!1,type:{name:"number"}},disabledIndicator:{defaultValue:null,description:"hide Indicator. default: false",name:"disabledIndicator",required:!1,type:{name:"boolean"}},disabledPreviousButton:{defaultValue:null,description:"hide PreviousButton. default: false",name:"disabledPreviousButton",required:!1,type:{name:"boolean"}},disabledNextButton:{defaultValue:null,description:"hide NextButton. default: false",name:"disabledNextButton",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:C.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const Ce=p.div`
  max-width: 600px;
  height: 450px;
`,we=s((e,t)=>u(Ce,{children:u(e,{...t})}),"withStyleWrapper"),Ke={parameters:{storySource:{source:`import type {
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
`,locationsMap:{"additional-children":{startLoc:{col:34,line:49},endLoc:{col:1,line:56},startBody:{col:34,line:49},endBody:{col:1,line:56}},"picture-carousel":{startLoc:{col:31,line:66},endLoc:{col:1,line:72},startBody:{col:31,line:66},endBody:{col:1,line:72}}}}},component:C,decorators:[we]},f=Array.from({length:4}).map((e,t)=>u(D,{count:t+1},t)),Re={args:{carouselKey:"carousel-main",children:f}},Ee={args:{carouselKey:"carousel-auto-play",children:f,autoplay:3e3}},Oe=s(()=>k(C,{carouselKey:"carousel-additional-children",children:[f,Array.from({length:4}).map((e,t)=>u(D,{count:t+1+4},t))]}),"AdditionalChildren"),ve=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],Te=s(()=>u(C,{carouselKey:"carousel-picture",children:ve.map(({src:e,caption:t})=>u(ne,{src:e,caption:t},e))}),"PictureCarousel"),We={args:{carouselKey:"carousel-perview-3",children:f,perView:3}},Me={args:{carouselKey:"carousel-gap-5",children:f,perView:3,gap:5}},qe={args:{carouselKey:"carousel-peek-before-20",children:f,perView:3,peek:{before:20}}},Le={args:{carouselKey:"carousel-disabled-indicator",children:f,perView:3,disabledIndicator:!0}},$e={args:{carouselKey:"carousel-disabled-side-button",children:f,perView:3,disabledPreviousButton:!0,disabledNextButton:!0}},Ne={args:{carouselKey:"carousel-startAt",children:f,perView:3,startAt:1}},De={args:{carouselKey:"carousel-no-rewind",children:f,perView:3,rewind:!1}},ze={args:{carouselKey:"carousel-bound",children:f,perView:3,bound:!0}},Ge={args:{carouselKey:"carousel-slide-width-140",children:f,slideWidth:640,gap:1}},Fe=["Main","AutoPlay","AdditionalChildren","PictureCarousel","PerView3","Gap5","PeekBefore20","DisabledIndicator","DisabledSideButton","StartAt","NoRewind","Bound","SlideWidth145"];export{Oe as AdditionalChildren,Ee as AutoPlay,ze as Bound,Le as DisabledIndicator,$e as DisabledSideButton,Me as Gap5,Re as Main,De as NoRewind,qe as PeekBefore20,We as PerView3,Te as PictureCarousel,Ge as SlideWidth145,Ne as StartAt,Fe as __namedExportsOrder,Ke as default};
//# sourceMappingURL=Carousel.stories.696f7e55.js.map
