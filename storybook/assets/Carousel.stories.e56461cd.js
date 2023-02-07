var te=Object.defineProperty;var o=(e,t)=>te(e,"name",{value:t,configurable:!0});import{H as f}from"./styled-components.browser.esm.c6c31070.js";import{C as U}from"./CarouselSampleSlide.632b84fc.js";import{r as s,R as ne,a as I,j as c}from"./jsx-runtime.382116be.js";import{C as z}from"./CircleTriangleButton.148f6430.js";import{P as re}from"./Picture.7639e517.js";import"./iframe.39ac29c2.js";const A=o(e=>{const[t]=e instanceof ResizeObserverSize?[e]:e;return t||null},"toResizeObserverSize");function oe({ref:e,callback:t}){s.exports.useEffect(()=>{const r=e.current;if(!r)return;const n=o(m=>{const i=m.find(h=>h.target===r);!i||t({borderBoxSize:A(i.borderBoxSize),contentBoxSize:A(i.contentBoxSize),contentRect:i.contentRect,devicePixelContentBoxSize:A(i.devicePixelContentBoxSize),target:r})},"callbackFn"),a=e.current,l=new ResizeObserver(n);return l.observe(a),()=>{l.unobserve(a)}},[t,e])}o(oe,"useResizeObserver");function se(e,t){let r,n;return(...a)=>{clearTimeout(r);const l=+new Date;n||(n=l);const m=t-(l-n);r=window.setTimeout(()=>{e(...a),n=void 0},m)}}o(se,"audit");const ae=o(({borderBoxSize:e,contentRect:t})=>{var r,n;return(n=(r=e==null?void 0:e.inlineSize)!=null?r:t==null?void 0:t.width)!=null?n:null},"toWidth");function le(e,{duration:t=250}={}){const[r,n]=s.exports.useState(null),a=s.exports.useRef(0),l=s.exports.useMemo(()=>se(m=>{const i=ae(m);!i||a.current!==i&&(a.current=i,n(i))},t),[t]);return oe({ref:e,callback:l}),r}o(le,"useContentWidth");function ie(e){const[t,r]=s.exports.useState(!1);return s.exports.useEffect(()=>{const n=e.current;if(!n)return;const a=o(()=>{r(!0)},"handleMouseEnter"),l=o(()=>{r(!1)},"handleMouseLeave");return n.addEventListener("mouseenter",a),n.addEventListener("mouseleave",l),()=>{n.removeEventListener("mouseleave",a),n.removeEventListener("mouseleave",l)}},[e]),t}o(ie,"useIsHover");const ue=o(e=>{var t,r;switch(typeof e){case"object":return{before:(t=e.before)!=null?t:0,after:(r=e.after)!=null?r:0};case"number":return{before:e,after:e};default:return{before:0,after:0}}},"persePeekOption"),K=o((e,t)=>`${e}_${t}`,"createSlideId"),ce=o(e=>+e.slice(e.lastIndexOf("_")+1),"slideId2SlideIndex"),de=o((e,t)=>e.size===t.size&&Array.from(e).every(r=>t.has(r)),"isEqualSlideIndexes");function pe(e,{total:t,carouselKey:r}){const[n,a]=s.exports.useState(new Set),l=s.exports.useRef(n),m=Math.min(...Array.from(n));return s.exports.useEffect(()=>{if(!e.current)return;const i=o(y=>{const g=new Set(l.current);y.forEach(k=>{const w=ce(k.target.id);k.intersectionRatio>.9?g.add(w):g.delete(w)}),!de(g,l.current)&&(a(g),l.current=g)},"callback"),h=new IntersectionObserver(i,{root:e.current,threshold:[0,.9,1]}),b=Array.from({length:t}).map((y,g)=>document.querySelector(`#${K(r,g)}`)).filter(y=>!!y);return b.forEach(y=>{h.observe(y)}),()=>{b.forEach(y=>{h.unobserve(y)})}},[r,t,e]),{currentSlideIndex:m,isDisplayedLastSlide:n.has(t-1)}}o(pe,"useCurrentSlideIndex");function x({className:e,carouselKey:t,autoplay:r,perView:n,gap:a=0,peek:l,startAt:m,rewind:i=!0,bound:h,slideWidth:b,disabledIndicator:y,disabledPreviousButton:g,disabledNextButton:k,children:w}){const O=s.exports.useRef(null),j=s.exports.useMemo(()=>ue(l),[l]),V=s.exports.useRef(null),S=le(V),q=ie(O),C=s.exports.useCallback(d=>{const u=V.current;if(!u)return;const $=K(t,d),D=u.querySelector(`#${$}`);if(!D)return;const Q=u.scrollLeft,Z=u.getBoundingClientRect().left,ee=D.getBoundingClientRect().left;u.scrollTo({left:Q+ee-Z})},[t]),v=s.exports.useMemo(()=>ne.Children.toArray(w).map((d,u)=>({child:d,slideId:K(t,u)})),[t,w]),{currentSlideIndex:_,isDisplayedLastSlide:G}=pe(V,{carouselKey:t,total:v.length}),T=_===0,H=i||!T,L=T?v.length-1:_-1,W=_===v.length-1||!!h&&G,P=i||!W,N=W?0:_+1,Y=s.exports.useCallback(()=>{C(L)},[L,C]),B=s.exports.useCallback(()=>{C(N)},[N,C]);s.exports.useEffect(()=>{if(!r||q||!P)return;const d=setInterval(()=>{B()},r);return()=>{clearInterval(d)}},[r,P,q,B]),s.exports.useEffect(()=>{if(n&&n<1)throw new Error("perView must be 1 or more.");if(n&&b)throw new Error("both perView and slideWidth cannot be set.")},[n,b]);const{slideWidth:M,sliderPaddingRight:F}=s.exports.useMemo(()=>{const d={sliderPaddingRight:0};if(!S)return d;if(n){const u=n>1?(n-1)*(a!=null?a:0):0;return{slideWidth:(S-u)/n,sliderPaddingRight:h?0:(n-1)*S}}return b?{slideWidth:b,sliderPaddingRight:h?0:S-b}:d},[h,a,n,b,S]),X=!!n&&n>1?a:0,J=S!==M;return s.exports.useEffect(()=>{!m||C(m)},[C,m]),I(ye,{ref:O,className:e,children:[I(he,{ref:V,gapWidth:X,peek:j,children:[v.map(({slideId:d,child:u})=>I(R,{id:d,width:M,children:[u,c(me,{isMultipleSlide:J})]},d)),c(fe,{inserted:F||j.after})]}),!g&&H&&c(Se,{onClick:Y,children:"Go to previous slide"}),!k&&P&&c(we,{onClick:B,children:"Go to next slide"}),!y&&c(be,{children:c(ge,{children:v.map(({slideId:d},u)=>c(Ce,{children:I(xe,{isActive:_===u,onClick:()=>{C(u)},children:["Go to ",u+1," slide"]})},d))})})]})}o(x,"Carousel");const fe=f.div`
  padding-left: ${({inserted:e})=>e}px;
`,me=f.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({isMultipleSlide:e})=>e?"start":"center"};
`,R=f.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,ye=f.div`
  position: relative;
  height: 100%;
`,he=f.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;

  & > ${R} + ${R} {
    margin-left: ${({gapWidth:e})=>e!=null?e:0}px;
  }

  scroll-padding-left: ${({peek:{before:e}})=>e}px;
  scroll-padding-right: ${({peek:{after:e}})=>e}px;
  padding-left: ${({peek:{before:e}})=>e}px;
  padding-right: ${({peek:{after:e}})=>e}px;
`,be=f.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,ge=f.ol`
  display: inline-block;
`,Ce=f.li`
  display: inline-block;
`,xe=f.button`
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
`,Se=f(z)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,we=f(z)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;function E({children:e,...t}){return c(x,{...t,children:e})}o(E,"CustomUICarousel");try{x.displayName="Carousel",x.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},perView:{defaultValue:null,description:"a number of slides visible on the slider. default: 1",name:"perView",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"0"},description:"add margin between slides. But 0 when perView is 1. default: 0",name:"gap",required:!1,type:{name:"number"}},peek:{defaultValue:null,description:"The value of the future slider which have to be visible in the current view. default: 0",name:"peek",required:!1,type:{name:"PeekOption"}},startAt:{defaultValue:null,description:"Start at specific slide number. default: 0",name:"startAt",required:!1,type:{name:"number"}},rewind:{defaultValue:{value:"true"},description:"allow looping. default: true",name:"rewind",required:!1,type:{name:"boolean"}},bound:{defaultValue:null,description:"stop running perView number of slides from the end",name:"bound",required:!1,type:{name:"boolean"}},slideWidth:{defaultValue:null,description:"sets the width of the slide. However, it cannot be used together with the preview.",name:"slideWidth",required:!1,type:{name:"number"}},disabledIndicator:{defaultValue:null,description:"hide Indicator. default: false",name:"disabledIndicator",required:!1,type:{name:"boolean"}},disabledPreviousButton:{defaultValue:null,description:"hide PreviousButton. default: false",name:"disabledPreviousButton",required:!1,type:{name:"boolean"}},disabledNextButton:{defaultValue:null,description:"hide NextButton. default: false",name:"disabledNextButton",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:x.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}try{E.displayName="CustomUICarousel",E.__docgenInfo={description:"",displayName:"CustomUICarousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},perView:{defaultValue:null,description:"a number of slides visible on the slider. default: 1",name:"perView",required:!1,type:{name:"number"}},gap:{defaultValue:null,description:"add margin between slides. But 0 when perView is 1. default: 0",name:"gap",required:!1,type:{name:"number"}},peek:{defaultValue:null,description:"The value of the future slider which have to be visible in the current view. default: 0",name:"peek",required:!1,type:{name:"PeekOption"}},startAt:{defaultValue:null,description:"Start at specific slide number. default: 0",name:"startAt",required:!1,type:{name:"number"}},rewind:{defaultValue:null,description:"allow looping. default: true",name:"rewind",required:!1,type:{name:"boolean"}},bound:{defaultValue:null,description:"stop running perView number of slides from the end",name:"bound",required:!1,type:{name:"boolean"}},slideWidth:{defaultValue:null,description:"sets the width of the slide. However, it cannot be used together with the preview.",name:"slideWidth",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#CustomUICarousel"]={docgenInfo:E.__docgenInfo,name:"CustomUICarousel",path:"src/presentation/components/Carousel/Carousel.tsx#CustomUICarousel"})}catch{}const ve=f.div`
  max-width: 600px;
  height: 450px;
`,_e=o((e,t)=>c(ve,{children:c(e,{...t})}),"withStyleWrapper"),Oe={parameters:{storySource:{source:`import type {
  ComponentStoryObj,
  ComponentMeta,
  DecoratorFn,
} from '@storybook/react';
import React from 'react';
import styled from 'styled-components';
import { CarouselSampleSlide } from './CarouselSampleSlide';
import { Carousel, CustomUICarousel } from '@/components/Carousel/Carousel';
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

export const CustomUI: ComponentStoryObj<typeof CustomUICarousel> = {
  args: {
    carouselKey: 'custom-ui',
    children,
    perView: 3,
  },
};
`,locationsMap:{"additional-children":{startLoc:{col:34,line:49},endLoc:{col:1,line:56},startBody:{col:34,line:49},endBody:{col:1,line:56}},"picture-carousel":{startLoc:{col:31,line:66},endLoc:{col:1,line:72},startBody:{col:31,line:66},endBody:{col:1,line:72}}}}},component:x,decorators:[_e]},p=Array.from({length:4}).map((e,t)=>c(U,{count:t+1},t)),je={args:{carouselKey:"carousel-main",children:p}},qe={args:{carouselKey:"carousel-auto-play",children:p,autoplay:3e3}},Te=o(()=>I(x,{carouselKey:"carousel-additional-children",children:[p,Array.from({length:4}).map((e,t)=>c(U,{count:t+1+4},t))]}),"AdditionalChildren"),Ie=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],Le=o(()=>c(x,{carouselKey:"carousel-picture",children:Ie.map(({src:e,caption:t})=>c(re,{src:e,caption:t},e))}),"PictureCarousel"),We={args:{carouselKey:"carousel-perview-3",children:p,perView:3}},Ne={args:{carouselKey:"carousel-gap-5",children:p,perView:3,gap:5}},Me={args:{carouselKey:"carousel-peek-before-20",children:p,perView:3,peek:{before:20}}},$e={args:{carouselKey:"carousel-disabled-indicator",children:p,perView:3,disabledIndicator:!0}},De={args:{carouselKey:"carousel-disabled-side-button",children:p,perView:3,disabledPreviousButton:!0,disabledNextButton:!0}},Ue={args:{carouselKey:"carousel-startAt",children:p,perView:3,startAt:1}},ze={args:{carouselKey:"carousel-no-rewind",children:p,perView:3,rewind:!1}},Ge={args:{carouselKey:"carousel-bound",children:p,perView:3,bound:!0}},He={args:{carouselKey:"carousel-slide-width-140",children:p,slideWidth:640,gap:1}},Ye={args:{carouselKey:"custom-ui",children:p,perView:3}},Fe=["Main","AutoPlay","AdditionalChildren","PictureCarousel","PerView3","Gap5","PeekBefore20","DisabledIndicator","DisabledSideButton","StartAt","NoRewind","Bound","SlideWidth145","CustomUI"];export{Te as AdditionalChildren,qe as AutoPlay,Ge as Bound,Ye as CustomUI,$e as DisabledIndicator,De as DisabledSideButton,Ne as Gap5,je as Main,ze as NoRewind,Me as PeekBefore20,We as PerView3,Le as PictureCarousel,He as SlideWidth145,Ue as StartAt,Fe as __namedExportsOrder,Oe as default};
//# sourceMappingURL=Carousel.stories.e56461cd.js.map
