var r=Object.defineProperty;var n=(e,t)=>r(e,"name",{value:t,configurable:!0});import{H as s}from"./styled-components.browser.esm.2d8d5b59.js";import{j as i}from"./jsx-runtime.b5cb7a18.js";function a({className:e,src:t,caption:o}){return i(p,{className:e,children:i("img",{src:t,alt:o})})}n(a,"Image");const p=s.div`
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
`;try{a.displayName="Image",a.__docgenInfo={description:"",displayName:"Image",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},caption:{defaultValue:null,description:"",name:"caption",required:!0,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/presentation/components/Image/Image.tsx#Image"]={docgenInfo:a.__docgenInfo,name:"Image",path:"src/presentation/components/Image/Image.tsx#Image"})}catch{}export{a as I};
//# sourceMappingURL=Image.3056ec73.js.map
