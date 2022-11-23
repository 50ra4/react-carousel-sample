var B=Object.defineProperty;var u=(e,t)=>B(e,"name",{value:t,configurable:!0});import{H as c}from"./styled-components.browser.esm.91e879e8.js";import{C as w}from"./CarouselSampleSlide.e7a23be5.js";import{r as o,R as L,a as k,j as a}from"./jsx-runtime.2af2b29f.js";import{C as E}from"./CircleTriangleButton.2ae09a6e.js";import{P as T}from"./Picture.b05cd35d.js";import"./iframe.3bbf71b5.js";function $(e){const[t,m]=o.exports.useState(null),i=o.exports.useRef(0),f=o.exports.useCallback(r=>{r!==i.current&&(console.log(`current width: ${r}px`),m(r),i.current=r)},[]);return o.exports.useEffect(()=>{if(!e.current)return;const r=u(x=>{x.forEach(s=>{f(s.contentRect.width)})},"callback"),p=e.current,d=new ResizeObserver(r);return d.observe(p),()=>{d.unobserve(p)}},[e,f]),t}u($,"useContentWidth");const P=u((e,t)=>`${e}_${t}`,"createSlideId"),K=u(e=>+e.slice(e.lastIndexOf("_")+1),"slideId2SlideIndex");function V(e,{total:t,carouselKey:m}){const[i,f]=o.exports.useState(new Set),r=Math.min(...Array.from(i));return o.exports.useEffect(()=>{if(!e.current)return;const p=u(s=>{f(_=>{const C=new Set(_);return s.forEach(b=>{const y=K(b.target.id);b.intersectionRatio>.9?C.add(y):C.delete(y)}),C})},"callback"),d=new IntersectionObserver(p,{root:e.current,threshold:[0,.9,1]}),x=Array.from({length:t}).map((s,_)=>document.querySelector(`#${P(m,_)}`)).filter(s=>!!s);return x.forEach(s=>{d.observe(s)}),()=>{x.forEach(s=>{d.unobserve(s)})}},[m,t,e]),r}u(V,"useCurrentSlideIndex");function S({className:e,carouselKey:t,autoplay:m,perView:i,children:f}){const r=o.exports.useRef(null),p=$(r),[d,x]=o.exports.useState(null),[s,_]=o.exports.useState(0),[C,b]=o.exports.useState(!1),y=o.exports.useCallback(n=>{const l=r.current;if(!l)return;const j=P(t,n),A=l.querySelector(`#${j}`);if(!A)return;const O=l.scrollLeft,M=l.getBoundingClientRect().left,W=A.getBoundingClientRect().left;l.scrollTo({left:O+W-M})},[t]),h=o.exports.useMemo(()=>L.Children.toArray(f).map((n,l)=>({child:n,slideId:P(t,l)})),[t,f]),g=V(r,{carouselKey:t,total:h.length}),R=o.exports.useCallback(()=>{const n=g===0?h.length-1:g-1;y(n)},[g,y,h.length]),I=o.exports.useCallback(()=>{const n=g===h.length-1?0:g+1;y(n)},[g,y,h.length]);return o.exports.useEffect(()=>{if(!m||C)return;const n=setInterval(()=>{I()},m);return()=>{clearInterval(n)}},[m,C,I]),o.exports.useEffect(()=>{if(!i)return;if(i<1)throw new Error("perView must be 1 or more.");if(!p)return;const n=p/i;x(n),_((i-1)*p)},[i,p]),k(Y,{className:e,onMouseEnter:()=>{b(!0)},onMouseLeave:()=>{b(!1)},children:[k(H,{ref:r,children:[h.map(({slideId:n,child:l})=>k(N,{id:n,width:d!=null?d:void 0,children:[l,a(G,{multipleSlide:!!i&&i>1})]},n)),!!s&&a(q,{inserted:s})]}),a(J,{onClick:R,children:"Go to previous slide"}),a(Q,{onClick:I,children:"Go to next slide"}),a(z,{children:a(D,{children:h.map(({slideId:n},l)=>a(F,{children:k(X,{isActive:g===l,onClick:()=>{y(l)},children:["Go to ",l+1," slide"]})},n))})})]})}u(S,"Carousel");const q=c.div`
  padding-left: ${({inserted:e})=>e}px;
`,G=c.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  scroll-snap-align: ${({multipleSlide:e})=>e?"start":"center"};
`,N=c.li`
  position: relative;
  flex: 0 0 auto;
  width: ${({width:e})=>e?`${e}px`:"100%"};
`,Y=c.div`
  position: relative;
  height: 100%;
`,H=c.ol`
  height: 100%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
`,z=c.div`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  transform: translateY(-24px);
`,D=c.ol`
  display: inline-block;
`,F=c.li`
  display: inline-block;
`,X=c.button`
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
`,J=c(E)`
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 8px;
`,Q=c(E)`
  transform: translateY(-50%) rotate(180deg);
  position: absolute;
  top: 50%;
  right: 8px;
`;try{S.displayName="Carousel",S.__docgenInfo={description:"",displayName:"Carousel",props:{autoplay:{defaultValue:null,description:"autoplay milliseconds. default: no autoplay",name:"autoplay",required:!1,type:{name:"number"}},perView:{defaultValue:null,description:"",name:"perView",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},carouselKey:{defaultValue:null,description:"",name:"carouselKey",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Carousel/Carousel.tsx#Carousel"]={docgenInfo:S.__docgenInfo,name:"Carousel",path:"src/presentation/components/Carousel/Carousel.tsx#Carousel"})}catch{}const U=c.div`
  max-width: 600px;
  height: 450px;
`,Z=u((e,t)=>a(U,{children:a(e,{...t})}),"withStyleWrapper"),ie={parameters:{storySource:{source:`import type {
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
`,locationsMap:{"additional-children":{startLoc:{col:34,line:49},endLoc:{col:1,line:56},startBody:{col:34,line:49},endBody:{col:1,line:56}},"picture-carousel":{startLoc:{col:31,line:66},endLoc:{col:1,line:72},startBody:{col:31,line:66},endBody:{col:1,line:72}}}}},component:S,decorators:[Z]},v=Array.from({length:4}).map((e,t)=>a(w,{count:t+1},t)),ce={args:{carouselKey:"carousel-main",children:v}},ue={args:{carouselKey:"carousel-auto-play",children:v,autoplay:3e3}},pe=u(()=>k(S,{carouselKey:"carousel-additional-children",children:[v,Array.from({length:4}).map((e,t)=>a(w,{count:t+1+4},t))]}),"AdditionalChildren"),ee=[{src:"images/sky_00009.jpg",caption:"sky_00009"},{src:"images/sky_00023.jpg",caption:"sky_00023"},{src:"images/sky_00036.jpg",caption:"sky_00036"},{src:"images/sky_00037.jpg",caption:"sky_00037"},{src:"images/sky_00200.jpg",caption:"sky_00200"}],de=u(()=>a(S,{carouselKey:"carousel-picture",children:ee.map(({src:e,caption:t})=>a(T,{src:e,caption:t},e))}),"PictureCarousel"),me={args:{carouselKey:"carousel-perview-3",children:v,perView:3}},ye=["Main","AutoPlay","AdditionalChildren","PictureCarousel","PerView3"];export{pe as AdditionalChildren,ue as AutoPlay,ce as Main,me as PerView3,de as PictureCarousel,ye as __namedExportsOrder,ie as default};
//# sourceMappingURL=Carousel.stories.11839fc9.js.map
