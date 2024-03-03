import{H as p,a as n,e as i,y as o,c as h}from"./index-Bv0Hohk0.js";import{n as u}from"./LayerView3D-BHAdUlxy.js";import{c as m}from"./TiledLayerView3D-D6_3wV1r.js";import{u as f}from"./LayerView-xIua26SL.js";import{i as c}from"./RefreshableLayerView-ByEXgiMo.js";import{S as y,U as d}from"./MapServiceLayerViewHelper-BxCjZWnv.js";import{r as g}from"./drapedUtils-aoEEgHJS.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./sublayerUtils-BA9xuOZk.js";import"./popupUtils-D-6l6-mq.js";let t=class extends c(m(u(f))){constructor(){super(...arguments),this.type="tile-3d",this._popupHighlightHelper=null}get imageFormatIsOpaque(){return this.layer.tileInfo.format==="jpg"}get hasMixedImageFormats(){return this.layer.tileInfo.format==="mixed"}get tileInfo(){return this.layer.tileInfo}initialize(){var e,r;if(this.layer.type==="web-tile"){const s=(e=this.layer.fullExtent)==null?void 0:e.spatialReference,l=(r=this.layer.tileInfo)==null?void 0:r.spatialReference;if(s==null||l==null||!p(s,l)){const a=this.layer.originOf("fullExtent")==="defaults"||this.layer.fullExtent==null?"SceneView requires fullExtent to be specified by the user on WebTileLayer":"SceneView requires fullExtent to be specified in the same spatial reference as tileInfo on WebTileLayer";this.addResolvingPromise(Promise.reject(new n("layerview:incompatible-fullextent",a)))}}y(this,this.layer)&&(this._popupHighlightHelper=new d({createFetchPopupFeaturesQueryGeometry:(s,l)=>g(s,l,this.view),layerView:this,updatingHandles:this._updatingHandles})),this._addTilingSchemeMatchPromise()}destroy(){var e;(e=this._popupHighlightHelper)==null||e.destroy()}async fetchPopupFeaturesAtLocation(e,r){return this._popupHighlightHelper?this._popupHighlightHelper.fetchPopupFeaturesAtLocation(e,r):[]}async doRefresh(){this.suspended||this.emit("data-changed")}};i([o()],t.prototype,"imageFormatIsOpaque",null),i([o()],t.prototype,"hasMixedImageFormats",null),i([o()],t.prototype,"layer",void 0),i([o()],t.prototype,"tileInfo",null),t=i([h("esri.views.3d.layers.TileLayerView3D")],t);const L=t;export{L as default};