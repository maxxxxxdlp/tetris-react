import{f7 as i,e as n,y as t,c as l,l as p,a as y}from"./index-Bv0Hohk0.js";import{m as u}from"./MultiOriginJSONSupport-BZQTWpeF.js";import{j as c}from"./PortalLayer-DaNsTDLt.js";import"./portalItemUtils-JWUEQXnE.js";let e=class extends c(u(p)){constructor(r){super(r),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise((r,o)=>{i(()=>{const s=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let a="Unknown layer type";s&&(a+=" "+s),o(new y("layer:unknown-layer-type",a,{layerType:s}))})}))}read(r,o){super.read({resourceInfo:r},o)}write(r,o){return null}};n([t({readOnly:!0})],e.prototype,"resourceInfo",void 0),n([t({type:["show","hide"]})],e.prototype,"listMode",void 0),n([t({json:{read:!1},readOnly:!0,value:"unknown"})],e.prototype,"type",void 0),e=n([l("esri.layers.UnknownLayer")],e);const h=e;export{h as default};
