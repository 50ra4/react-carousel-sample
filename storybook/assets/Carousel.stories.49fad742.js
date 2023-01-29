var ee=Object.defineProperty;var o=(e,t)=>ee(e,"name",{value:t,configurable:!0});import{H as p}from"./styled-components.browser.esm.b58b4dd6.js";import{C as D}from"./CarouselSampleSlide.53b616ca.js";import{r as s,R as te,a as k,j as u}from"./jsx-runtime.b89dfcbe.js";import{C as z}from"./CircleTriangleButton.6c56f54a.js";import{P as ne}from"./Picture.aa18bbe7.js";import"./iframe.3954f10b.js";const E=o(e=>{const[t]=e instanceof ResizeObserverSize?[e]:e;return t||null},"toResizeObserverSize");function re({ref:e,callback:t}){s.exports.useEffect(()=>{const r=e.current;if(!r)return;const n=o(m=>{const l=m.find(h=>h.target===r);!l||t({borderBoxSize:E(l.borderBoxSize),contentBoxSize:E(l.contentBoxSize),contentRect:l.contentRect,devicePixelContentBoxSize:E(l.devicePixelContentBoxSize),target:r})},"callbackFn"),a=e.current,i=new ResizeObserver(n);return i.observe(a),()=>{i.unobserve(a)}},[t,e])}o(re,"useResizeObserver");function oe(e,t){let r,n;return(...a)=>{clearTimeout(r);const i=+new Date;n||(n=i);const m=t-(i-n);r=window.setTimeout(()=>{e(...a),n=void 0},m)}}o(oe,"audit");const se=o(({borderBoxSize:e,contentRect:t})=>{var r,n;return(n=(r=e==null?void 0:e.inlineSize)!=null?r:t==null?void 0:t.width)!=null?n:null},"toWidth");function ae(e,{duration:t=250}={}){const[r,n]=s.exports.useState(null),a=s.exports.useRef(0),i=s.exports.useMemo(()=>oe(m=>{const l=se(m);!l||a.current!==l&&(a.current=l,n(l))},t),[t]);return re({ref:e,callback:i}),r}o(ae,"useContentWidth");function ie(e){const[t,r]=s.exports.useState(!1);return s.exports.useEffect(()=>{const n=e.current;if(!n)return;const a=o(()=>{r(!0)},"handleMouseEnter"),i=o(()=>{r(!1)},"handleMouseLeave");return n.addEventListener("mouseenter",a),n.addEventListener("mouseleave",i),()=>{n.removeEventListener("mouseleave",a),n.removeEventListener("mouseleave",i)}},[e]),t}o(ie,"useIsHover");const le=o(e=>{var t,r;switch(typeof e){case"object":return{before:(t=e.before)!=null?t:0,after:(r=e.after)!=null?r:0};case"number":return{before:e,after:e};default:return{before:0,after:0}}},"persePeekOption"),V=o((e,t)=>`${e}_${t}`,"createSlideId"),ce=o(e=>+e.slice(e.lastIndexOf("_")+1),"slideId2SlideIndex"),de=o((e,t)=>e.size===t.size&&Array.from(e).every(r=>t.has(r)),"isEqualSlideIndexes");function ue(e,{total:t,carouselKey:r}){const[n,a]=s.exports.useState(new Set),i=s.exports.useRef(n),m=Math.min(...Array.from(n));return s.exports.useEffect(()=>{if(!e.current)return;const l=o(y=>{const b=new Set(i.current);y.forEach(I=>{const v=ce(I.target.id);I.intersectionRatio>.9?b.add(v):b.delete(v)}),!de(b,i.current)&&(a(b),i.current=b)},"callback"),h=new IntersectionObserver(l,{root:e.current,threshold:[0,.9,1]}),g=Array.from({length:t}).map((y,b)=>document.querySelector(`#${V(r,b)}`)).filter(y=>!!y);return g.forEach(y=>{h.observe(y)}),()=>{g.forEach(y=>{h.unobserve(y)})}},[r,t,e]),{currentSlideIndex:m,isDisplayedLastSlide:n.has(t-1)}}o(ue,"useCurrentSlideIndex");function C({className:e,carouselKey:t,autoplay:r,perView:n,gap:a=0,peek:i,startAt:m,rewind:l=!0,bound:h,slideWidth:g,disabledIndicator:y,disabledPreviousButton:b,disabledNextButton:I,children:v}){const R=s.exports.useRef(null),K=s.exports.useMemo(()=>le(i),[i]),P=s.exports.useRef(null),S=ae(P),O=ie(R),x=s.exports.useCallback(d=>{const c=P.current;if(!c)return;const $=V(t,d),N=c.querySelector(`#${$}`);if(!N)return;const Q=c.scrollLeft,U=c.getBoundingClientRect().left,Z=N.getBoundingClientRect().left;c.scrollTo({left:Q+Z-U})},[t]),w=s.exports.useMemo(()=>te.Children.toArray(v).map((d,c)=>({child:d,slideId:V(t,c)})),[t,v]),{currentSlideIndex:_,isDisplayedLastSlide:G}=ue(P,{carouselKey:t,total:w.length}),L=_===0,H=l||!L,T=L?w.length-1:_-1,W=_===w.length-1||!!h&&G,B=l||!W,M=W?0:_+1,F=s.exports.useCallback(()=>{x(T)},[T,x]),A=s.exports.useCallback(()=>{x(M)},[M,x]);s.exports.useEffect(()=>{if(!r||O||!B)return;const d=setInterval(()=>{A()},r);return()=>{clearInterval(d)}},[r,B,O,A]),s.exports.useEffect(()=>{if(n&&n<1)throw new Error("perView must be 1 or more.");if(n&&g)throw new Error("both perView and slideWidth cannot be set.")},[n,g]);const{slideWidth:q,sliderPaddingRight:Y}=s.exports.useMemo(()=>{const d={sliderPaddingRight:0};if(!S)return d;if(n){const c=n>1?(n-1)*(a!=null?a:0):0;return{slideWidth:(S-c)/n,sliderPaddingRight:h?0:(n-1)*S}}return g?{slideWidth:g,sliderPaddingRight:h?0:S-g}:d},[h,a,n,g,S]),X=!!n&&n>1?a:0,J=S!==q;return s.exports.useEffect(()=>{!m||x(m)},[x,m]),k(me,{ref:R,className:e,children:[k(ye,{ref:P,gapWidth:X,peek:K,children:[w.map(({slideId:d,child:c})=>k(j,{id:d,width:q,children:[c,u(fe,{isMultipleSlide:J})]},d)),u(pe,{inserted:Y||K.after})]}),!b&&H&&u(Se,{onClick:F,children:"Go to previous slide"}),!I&&B&&u(Ce,{onClick:A,children:"Go to next slide"}),!y&&u(he,{children:u(ge,{children:w.map(({slideId:d},c)=>u(be,{children:k(xe,{isActive:_===c,onClick:()=>{x(c)},children:["Go to ",c+1," slide"]})},d))})})]})}o(C,"Carousel");const pe=p.div`
  padding-left: ${({inserted:e})=>e}px;
`,fe=p.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({isMultipleSlide:e})=>e?"start":"center"};
`,j=p.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,me=p.div`
  position: relative;
  height: 100%;
`,ye=p.ol`
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
`,he=p.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,ge=p.ol`
  display: inline-block;
`,be=p.li`
  display: inline-block;
`,xe=p.button`
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
`,Se=p(z)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,Ce=p(z)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;try{C.displayName="Carousel",C.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},perView:{defaultValue:null,description:"a number of slides visible on the slider. default: 1",name:"perView",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"0"},description:"add margin between slides. But 0 when perView is 1. default: 0",name:"gap",required:!1,type:{name:"number"}},peek:{defaultValue:null,description:"The value of the future slider which have to be visible in the current view. default: 0",name:"peek",required:!1,type:{name:"PeekOption"}},startAt:{defaultValue:null,description:"Start at specific slide number. default: 0",name:"startAt",required:!1,type:{name:"number"}},rewind:{defaultValue:{value:"true"},description:"allow looping. default: true",name:"rewind",required:!1,type:{name:"boolean"}},bound:{defaultValue:null,description:"stop running perView number of slides from the end",name:"bound",required:!1,type:{name:"boolean"}},slideWidth:{defaultValue:null,description:"sets the width of the slide. However, it cannot be used together with the preview.",name:"slideWidth",required:!1,type:{name:"number"}},disabledIndicator:{defaultValue:null,description:"hide Indicator. default: false",name:"disabledIndicator",required:!1,type:{name:"boolean"}},disabledPreviousButton:{defaultValue:null,description:"hide PreviousButton. default: false",name:"disabledPreviousButton",required:!1,type:{name:"boolean"}},disabledNextButton:{defaultValue:null,description:"hide NextButton. default: false",name:"disabledNextButton",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:C.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const ve=p.div`
  max-width: 600px;
  height: 450px;
`,we=o((e,t)=>u(ve,{children:u(e,{...t})}),"withStyleWrapper"),Re={parameters:{storySource:{source:`import type {
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
`,locationsMap:{"additional-children":{startLoc:{col:34,line:49},endLoc:{col:1,line:56},startBody:{col:34,line:49},endBody:{col:1,line:56}},"picture-carousel":{startLoc:{col:31,line:66},endLoc:{col:1,line:72},startBody:{col:31,line:66},endBody:{col:1,line:72}}}}},component:C,decorators:[we]},f=Array.from({length:4}).map((e,t)=>u(D,{count:t+1},t)),Ke={args:{carouselKey:"carousel-main",children:f}},Oe={args:{carouselKey:"carousel-auto-play",children:f,autoplay:3e3}},Le=o(()=>k(C,{carouselKey:"carousel-additional-children",children:[f,Array.from({length:4}).map((e,t)=>u(D,{count:t+1+4},t))]}),"AdditionalChildren"),_e=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],Te=o(()=>u(C,{carouselKey:"carousel-picture",children:_e.map(({src:e,caption:t})=>u(ne,{src:e,caption:t},e))}),"PictureCarousel"),We={args:{carouselKey:"carousel-perview-3",children:f,perView:3}},Me={args:{carouselKey:"carousel-gap-5",children:f,perView:3,gap:5}},qe={args:{carouselKey:"carousel-peek-before-20",children:f,perView:3,peek:{before:20}}},$e={args:{carouselKey:"carousel-disabled-indicator",children:f,perView:3,disabledIndicator:!0}},Ne={args:{carouselKey:"carousel-disabled-side-button",children:f,perView:3,disabledPreviousButton:!0,disabledNextButton:!0}},De={args:{carouselKey:"carousel-startAt",children:f,perView:3,startAt:1}},ze={args:{carouselKey:"carousel-no-rewind",children:f,perView:3,rewind:!1}},Ge={args:{carouselKey:"carousel-bound",children:f,perView:3,bound:!0}},He={args:{carouselKey:"carousel-slide-width-140",children:f,slideWidth:640,gap:1}},Fe=["Main","AutoPlay","AdditionalChildren","PictureCarousel","PerView3","Gap5","PeekBefore20","DisabledIndicator","DisabledSideButton","StartAt","NoRewind","Bound","SlideWidth145"];export{Le as AdditionalChildren,Oe as AutoPlay,Ge as Bound,$e as DisabledIndicator,Ne as DisabledSideButton,Me as Gap5,Ke as Main,ze as NoRewind,qe as PeekBefore20,We as PerView3,Te as PictureCarousel,He as SlideWidth145,De as StartAt,Fe as __namedExportsOrder,Re as default};
//# sourceMappingURL=Carousel.stories.49fad742.js.map
