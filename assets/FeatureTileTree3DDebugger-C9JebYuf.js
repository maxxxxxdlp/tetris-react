import{h as d,P as g,e as r,y as s,j as p,c as l}from"./index-Bv0Hohk0.js";import{d as c}from"./TileTreeDebugger-Csj5aKb9.js";let i=class extends c{get updating(){var t;return((t=this._watchUpdatingTracking)==null?void 0:t.updating)??!1}constructor(t){super(t),this._watchUpdatingTracking=new d}initialize(){const{featureTiles:t}=this.view;this.addHandles(t.addClient()),this._watchUpdatingTracking.addOnCollectionChange(()=>t==null?void 0:t.tiles,()=>this.update(),g)}destroy(){this._watchUpdatingTracking.destroy()}getTiles(){const t=e=>{const[a,o,n]=e.lij;return p.fromExtent(this.view.featureTiles.tilingScheme.getExtentGeometry(a,o,n))};return this.view.featureTiles.tiles.toArray().sort((e,a)=>e.loadPriority-a.loadPriority).map(e=>({...e,geometry:t(e)}))}};r([s()],i.prototype,"_watchUpdatingTracking",void 0),r([s()],i.prototype,"updating",null),r([s()],i.prototype,"view",void 0),i=r([l("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],i);export{i as FeatureTileTree3DDebugger};
