import{e as r,y as s,c as p}from"./index-Bv0Hohk0.js";function a(t){return"portalItem"in t}const y=t=>{let i=class extends t{get apiKey(){var e;return this._isOverridden("apiKey")?this._get("apiKey"):a(this)?(e=this.portalItem)==null?void 0:e.apiKey:null}set apiKey(e){e!=null?this._override("apiKey",e):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return r([s({type:String})],i.prototype,"apiKey",null),i=r([p("esri.layers.mixins.APIKeyMixin")],i),i};export{y as i};
