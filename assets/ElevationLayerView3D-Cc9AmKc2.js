import{a as p,e as i,y,c as u}from"./index-Bv0Hohk0.js";import{n as h}from"./LayerView3D-BHAdUlxy.js";import{c as v}from"./TiledLayerView3D-D6_3wV1r.js";import{u as f}from"./LayerView-xIua26SL.js";let e=class extends v(h(f)){constructor(){super(...arguments),this.type="elevation-3d"}get tileInfo(){return this.layer.tileInfo}initialize(){var s,a,o,l,n;const t=(a=(s=this.view)==null?void 0:s.map)==null?void 0:a.allLayers,d=t&&t.includes(this.layer),r=(n=(l=(o=this.view)==null?void 0:o.map)==null?void 0:l.ground)==null?void 0:n.layers,m=r&&r.includes(this.layer);if(d&&!m){const c=new p("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added to layers in map.ground");this.addResolvingPromise(Promise.reject(c))}this._addTilingSchemeMatchPromise()}};i([y()],e.prototype,"layer",void 0),i([y()],e.prototype,"tileInfo",null),e=i([u("esri.views.3d.layers.ElevationLayerView3D")],e);const P=e;export{P as default};
