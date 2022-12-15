var Z=Object.defineProperty;var i=(e,t)=>Z(e,"name",{value:t,configurable:!0});import{H as p}from"./styled-components.browser.esm.c2e8fc7f.js";import{C as N}from"./CarouselSampleSlide.fb369710.js";import{r,R as ee,a as _,j as c}from"./jsx-runtime.2deb86f4.js";import{C as D}from"./CircleTriangleButton.737e81dc.js";import{P as te}from"./Picture.2e79a07d.js";import"./iframe.17a24bff.js";function ne(e,t){let o,n;return(...d)=>{clearTimeout(o);const s=+new Date;n||(n=s);const h=t-(s-n);o=window.setTimeout(()=>{e(...d),n=void 0},h)}}i(ne,"audit");function re(e){const[t,o]=r.exports.useState(null),n=r.exports.useRef(0),d=r.exports.useCallback(s=>{s!==n.current&&(o(s),n.current=s)},[]);return r.exports.useEffect(()=>{if(!e.current)return;const s=ne(d,250),h=i(m=>{m.forEach(u=>{s(u.contentRect.width)})},"callback"),b=e.current,y=new ResizeObserver(h);return y.observe(b),()=>{y.unobserve(b)}},[e,d]),t}i(re,"useContentWidth");const oe=i(e=>{var t,o;switch(typeof e){case"object":return{before:(t=e.before)!=null?t:0,after:(o=e.after)!=null?o:0};case"number":return{before:e,after:e};default:return{before:0,after:0}}},"persePeekOption"),V=i((e,t)=>`${e}_${t}`,"createSlideId"),se=i(e=>+e.slice(e.lastIndexOf("_")+1),"slideId2SlideIndex"),ae=i((e,t)=>e.size===t.size&&Array.from(e).every(o=>t.has(o)),"isEqualSlideIndexes");function ie(e,{total:t,carouselKey:o}){const[n,d]=r.exports.useState(new Set),s=r.exports.useRef(n),h=Math.min(...Array.from(n));return r.exports.useEffect(()=>{if(!e.current)return;const b=i(u=>{const g=new Set(s.current);u.forEach(I=>{const w=se(I.target.id);I.intersectionRatio>.9?g.add(w):g.delete(w)}),!ae(g,s.current)&&(d(g),s.current=g)},"callback"),y=new IntersectionObserver(b,{root:e.current,threshold:[0,.9,1]}),m=Array.from({length:t}).map((u,g)=>document.querySelector(`#${V(o,g)}`)).filter(u=>!!u);return m.forEach(u=>{y.observe(u)}),()=>{m.forEach(u=>{y.unobserve(u)})}},[o,t,e]),{currentSlideIndex:h,isDisplayedLastSlide:n.has(t-1)}}i(ie,"useCurrentSlideIndex");function C({className:e,carouselKey:t,autoplay:o,perView:n,gap:d=0,peek:s,startAt:h,rewind:b=!0,bound:y,slideWidth:m,disabledIndicator:u,disabledPreviousButton:g,disabledNextButton:I,children:w}){const K=r.exports.useMemo(()=>oe(s),[s]),P=r.exports.useRef(null),S=re(P),[R,E]=r.exports.useState(!1),x=r.exports.useCallback(l=>{const a=P.current;if(!a)return;const M=V(t,l),$=a.querySelector(`#${M}`);if(!$)return;const J=a.scrollLeft,Q=a.getBoundingClientRect().left,U=$.getBoundingClientRect().left;a.scrollTo({left:J+U-Q})},[t]),v=r.exports.useMemo(()=>ee.Children.toArray(w).map((l,a)=>({child:l,slideId:V(t,a)})),[t,w]),{currentSlideIndex:k,isDisplayedLastSlide:G}=ie(P,{carouselKey:t,total:v.length}),T=k===0,H=b||!T,O=T?v.length-1:k-1,W=k===v.length-1||!!y&&G,B=b||!W,q=W?0:k+1,Y=r.exports.useCallback(()=>{x(O)},[O,x]),A=r.exports.useCallback(()=>{x(q)},[q,x]);r.exports.useEffect(()=>{if(!o||R||!B)return;const l=setInterval(()=>{A()},o);return()=>{clearInterval(l)}},[o,B,R,A]),r.exports.useEffect(()=>{if(n&&n<1)throw new Error("perView must be 1 or more.");if(n&&m)throw new Error("both perView and slideWidth cannot be set.")},[n,m]);const{slideWidth:L,sliderPaddingRight:z}=r.exports.useMemo(()=>{const l={sliderPaddingRight:0};if(!S)return l;if(n){const a=n>1?(n-1)*(d!=null?d:0):0;return{slideWidth:(S-a)/n,sliderPaddingRight:y?0:(n-1)*S}}return m?{slideWidth:m,sliderPaddingRight:y?0:S-m}:l},[y,d,n,m,S]),F=!!n&&n>1?d:0,X=S!==L;return r.exports.useEffect(()=>{!h||x(h)},[x,h]),_(de,{className:e,onMouseEnter:()=>{E(!0)},onMouseLeave:()=>{E(!1)},children:[_(ue,{ref:P,gapWidth:F,peek:K,children:[v.map(({slideId:l,child:a})=>_(j,{id:l,width:L,children:[a,c(ce,{isMultipleSlide:X})]},l)),c(le,{inserted:z||K.after})]}),!g&&H&&c(he,{onClick:Y,children:"Go to previous slide"}),!I&&B&&c(ge,{onClick:A,children:"Go to next slide"}),!u&&c(pe,{children:c(fe,{children:v.map(({slideId:l},a)=>c(me,{children:_(ye,{isActive:k===a,onClick:()=>{x(a)},children:["Go to ",a+1," slide"]})},l))})})]})}i(C,"Carousel");const le=p.div`
  padding-left: ${({inserted:e})=>e}px;
`,ce=p.div`
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
`,de=p.div`
  position: relative;
  height: 100%;
`,ue=p.ol`
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
`,pe=p.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,fe=p.ol`
  display: inline-block;
`,me=p.li`
  display: inline-block;
`,ye=p.button`
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
`,he=p(D)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,ge=p(D)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;try{C.displayName="Carousel",C.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},perView:{defaultValue:null,description:"a number of slides visible on the slider. default: 1",name:"perView",required:!1,type:{name:"number"}},gap:{defaultValue:{value:"0"},description:"add margin between slides. But 0 when perView is 1. default: 0",name:"gap",required:!1,type:{name:"number"}},peek:{defaultValue:null,description:"The value of the future slider which have to be visible in the current view. default: 0",name:"peek",required:!1,type:{name:"PeekOption"}},startAt:{defaultValue:null,description:"Start at specific slide number. default: 0",name:"startAt",required:!1,type:{name:"number"}},rewind:{defaultValue:{value:"true"},description:"allow looping. default: true",name:"rewind",required:!1,type:{name:"boolean"}},bound:{defaultValue:null,description:"stop running perView number of slides from the end",name:"bound",required:!1,type:{name:"boolean"}},slideWidth:{defaultValue:null,description:"sets the width of the slide. However, it cannot be used together with the preview.",name:"slideWidth",required:!1,type:{name:"number"}},disabledIndicator:{defaultValue:null,description:"hide Indicator. default: false",name:"disabledIndicator",required:!1,type:{name:"boolean"}},disabledPreviousButton:{defaultValue:null,description:"hide PreviousButton. default: false",name:"disabledPreviousButton",required:!1,type:{name:"boolean"}},disabledNextButton:{defaultValue:null,description:"hide NextButton. default: false",name:"disabledNextButton",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:C.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const be=p.div`
  max-width: 600px;
  height: 450px;
`,xe=i((e,t)=>c(be,{children:c(e,{...t})}),"withStyleWrapper"),Ae={parameters:{storySource:{source:`import type {
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
`,locationsMap:{"additional-children":{startLoc:{col:34,line:49},endLoc:{col:1,line:56},startBody:{col:34,line:49},endBody:{col:1,line:56}},"picture-carousel":{startLoc:{col:31,line:66},endLoc:{col:1,line:72},startBody:{col:31,line:66},endBody:{col:1,line:72}}}}},component:C,decorators:[xe]},f=Array.from({length:4}).map((e,t)=>c(N,{count:t+1},t)),Ve={args:{carouselKey:"carousel-main",children:f}},je={args:{carouselKey:"carousel-auto-play",children:f,autoplay:3e3}},Ke=i(()=>_(C,{carouselKey:"carousel-additional-children",children:[f,Array.from({length:4}).map((e,t)=>c(N,{count:t+1+4},t))]}),"AdditionalChildren"),Se=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],Re=i(()=>c(C,{carouselKey:"carousel-picture",children:Se.map(({src:e,caption:t})=>c(te,{src:e,caption:t},e))}),"PictureCarousel"),Ee={args:{carouselKey:"carousel-perview-3",children:f,perView:3}},Te={args:{carouselKey:"carousel-gap-5",children:f,perView:3,gap:5}},Oe={args:{carouselKey:"carousel-peek-before-20",children:f,perView:3,peek:{before:20}}},We={args:{carouselKey:"carousel-disabled-indicator",children:f,perView:3,disabledIndicator:!0}},qe={args:{carouselKey:"carousel-disabled-side-button",children:f,perView:3,disabledPreviousButton:!0,disabledNextButton:!0}},Le={args:{carouselKey:"carousel-startAt",children:f,perView:3,startAt:1}},Me={args:{carouselKey:"carousel-no-rewind",children:f,perView:3,rewind:!1}},$e={args:{carouselKey:"carousel-bound",children:f,perView:3,bound:!0}},Ne={args:{carouselKey:"carousel-slide-width-140",children:f,slideWidth:640,gap:1}},De=["Main","AutoPlay","AdditionalChildren","PictureCarousel","PerView3","Gap5","PeekBefore20","DisabledIndicator","DisabledSideButton","StartAt","NoRewind","Bound","SlideWidth145"];export{Ke as AdditionalChildren,je as AutoPlay,$e as Bound,We as DisabledIndicator,qe as DisabledSideButton,Te as Gap5,Ve as Main,Me as NoRewind,Oe as PeekBefore20,Ee as PerView3,Re as PictureCarousel,Ne as SlideWidth145,Le as StartAt,De as __namedExportsOrder,Ae as default};
//# sourceMappingURL=Carousel.stories.1cba48f2.js.map
