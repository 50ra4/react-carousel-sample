var o=Object.defineProperty;var r=(e,t)=>o(e,"name",{value:t,configurable:!0});import{H as c}from"./styled-components.browser.esm.7ba4bdb4.js";import{j as n}from"./jsx-runtime.259f2320.js";function i({className:e,src:t,caption:a}){return n(s,{className:e,children:n("img",{src:t,alt:a})})}r(i,"Picture");const s=c.div`
  position: relative;
  height: calc(100% - 2px);
  width: 100%;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.1) inset;
  }

  & > img {
    object-fit: contain;
    height: 100%;
    width: 100%;
  }
`;try{i.displayName="Picture",i.__docgenInfo={description:"",displayName:"Picture",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},caption:{defaultValue:null,description:"",name:"caption",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Picture/Picture.tsx#Picture"]={docgenInfo:i.__docgenInfo,name:"Picture",path:"src/presentation/components/Picture/Picture.tsx#Picture"})}catch{}export{i as P};
//# sourceMappingURL=Picture.430408e2.js.map
