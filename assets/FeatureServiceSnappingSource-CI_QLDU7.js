import{lm as D,ln as J,lo as q,d4 as Z,d5 as G,e as r,y as a,c as I,S as O,d6 as B,A as _,B as L,fz as F,P as S,lp as K,Q,j as Y,T as X,h as W,O as ee,L as te,gL as ie,fl as ne,cF as N,ej as se,hk as re,jp as ae,a_ as oe,ba as le,eV as de,lq as ue,g as V,fk as pe,lr as f,R as he,Y as A,J as ce,ls as ye,K as fe,_ as ge}from"./index-Bv0Hohk0.js";import{v as _e,t as ve}from"./DimensionAnalysisView3D-D2aIUzKu.js";import{a as we,o as me}from"./queryEngineUtils-CQ4WW713.js";import{d as Se}from"./TileTreeDebugger-Csj5aKb9.js";import"./LineVisualElement-BA2FWRBH.js";import"./LengthDimension-3241MIUx.js";import"./Segment-CNSGf7Bh.js";import"./unitFormatUtils-CrXkRIq7.js";import"./geometryEngine-DM06toa8.js";import"./geometryEngineBase-DlPZ98f0.js";import"./hydrated-k8s1tmfD.js";import"./RightAngleQuadVisualElement-BIwVXGBk.js";import"./ShadedColorMaterial.glsl-Cak3Vz2U.js";import"./ToolIntersector-DHrjlBzv.js";import"./ImageMaterial.glsl-B_fxTFoc.js";import"./vec4f32-CjrfB-0a.js";import"./Laserlines.glsl-CW436qzp.js";import"./EditGeometryOperations-DfElYoDB.js";import"./FeatureFilter-x-ktONiu.js";import"./floorFilterUtils-DZ5C6FQv.js";import"./dehydratedFeatureComparison-BQojOjzo.js";import"./VertexSnappingCandidate-21jrbxKo.js";function b(e,t){return J(t.extent,U),q(U,Z(Ie,e.x,e.y,0))}const U=D(),Ie=G();let y=class extends O{get tiles(){const t=this.tilesCoveringView,n=this.pointOfInterest!=null?this.pointOfInterest:this.view.center;return t.sort((s,i)=>b(n,s)-b(n,i)),t}_scaleEnabled(){return B(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||this.tileInfo==null)return[];if(!this._scaleEnabled)return[];const{spans:t,lodInfo:n}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:s}=n,i=[];for(const{row:o,colFrom:l,colTo:v}of t)for(let d=l;d<=v;d++){const u=n.normalizeCol(d),m=new F(null,s,o,u);this.tileInfo.updateTileInfo(m),i.push(m)}return i}get tileInfo(){var t;return((t=this.view.featuresTilingScheme)==null?void 0:t.tileInfo)??null}get tileSize(){return this.tileInfo!=null?this.tileInfo.size[0]:256}constructor(t){super(t),this.pointOfInterest=null}initialize(){this.addHandles(_(()=>{var t,n;return(n=(t=this.view)==null?void 0:t.state)==null?void 0:n.viewpoint},()=>this.notifyChange("tilesCoveringView"),L))}};r([a({readOnly:!0})],y.prototype,"tiles",null),r([a({readOnly:!0})],y.prototype,"_scaleEnabled",null),r([a({readOnly:!0})],y.prototype,"tilesCoveringView",null),r([a({readOnly:!0})],y.prototype,"tileInfo",null),r([a({readOnly:!0})],y.prototype,"tileSize",null),r([a({constructOnly:!0})],y.prototype,"view",void 0),r([a({constructOnly:!0})],y.prototype,"layer",void 0),r([a()],y.prototype,"pointOfInterest",void 0),y=r([I("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],y);let g=class extends O{get tiles(){const e=this.tilesCoveringView,t=this._effectivePointOfInterest;if(t!=null){const n=e.map(s=>b(t,s));for(let s=1;s<n.length;s++)if(n[s-1]>n[s])return e.sort((i,o)=>b(t,i)-b(t,o)),e.slice()}return e}get tilesCoveringView(){var e,t;return this._filterTiles((t=(e=this.view.featureTiles)==null?void 0:e.tiles)==null?void 0:t.toArray()).map(He)}get tileInfo(){var e,t;return((t=(e=this.view.featureTiles)==null?void 0:e.tilingScheme)==null?void 0:t.toTileInfo())??null}get tileSize(){var e;return((e=this.view.featureTiles)==null?void 0:e.tileSize)??256}get _effectivePointOfInterest(){var t;const e=this.pointOfInterest;return e??((t=this.view.pointsOfInterest)==null?void 0:t.focus.location)}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles(_(()=>this.view.featureTiles,e=>{this.removeHandles(j),e&&this.addHandles(e.addClient(),j)},S))}_filterTiles(e){return e==null?[]:e.filter(t=>{const n=t.measures;if(n.visibility===K.VISIBLE_ON_SURFACE){const s=n.screenRect;return Math.abs(s[3]-s[1])>be}return!1})}};function He({lij:[e,t,n],extent:s}){return new F(`${e}/${t}/${n}`,e,t,n,s)}r([a({readOnly:!0})],g.prototype,"tiles",null),r([a({readOnly:!0})],g.prototype,"tilesCoveringView",null),r([a({readOnly:!0})],g.prototype,"tileInfo",null),r([a({readOnly:!0})],g.prototype,"tileSize",null),r([a({constructOnly:!0})],g.prototype,"view",void 0),r([a()],g.prototype,"pointOfInterest",void 0),r([a()],g.prototype,"_effectivePointOfInterest",null),g=r([I("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],g);const be=50,j="feature-tiles";let k=class extends Se{constructor(e){super(e)}initialize(){const e=setInterval(()=>this._fetchDebugInfo(),2e3);this.addHandles(Q(()=>clearInterval(e)))}getTiles(){if(!this._debugInfo)return[];const e=new Map,t=new Map;this._debugInfo.storedTiles.forEach(i=>{e.set(i.data.id,i.featureCount)}),this._debugInfo.pendingTiles.forEach(i=>{e.set(i.data.id,i.featureCount),t.set(i.data.id,i.state)});const n=i=>{const o=t.get(i),l=e.get(i)??"?";return o?`${o}:${l}
${i}`:`store:${l}
${i}`},s=new Map;return this._debugInfo.storedTiles.forEach(i=>{s.set(i.data.id,i.data)}),this._debugInfo.pendingTiles.forEach(i=>{s.set(i.data.id,i.data)}),Array.from(s.values()).map(i=>({lij:[i.level,i.row,i.col],geometry:Y.fromExtent(X(i.extent,this.view.spatialReference)),label:n(i.id)}))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then(e=>{this._debugInfo=e,this.update()})}};r([a({constructOnly:!0})],k.prototype,"handle",void 0),k=r([I("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],k);let c=class extends O{get updating(){return this._updatingHandles.updating||this._workerHandleUpdating}constructor(e){super(e),this._updatingHandles=new W,this._suspendController=null,this.schedule=null,this.hasZ=!1,this.elevationAlignPointsInFeatures=async t=>{const n=[];for(const{points:s}of t.pointsInFeatures)for(const{z:i}of s)n.push(i);return{elevations:n,drapedObjectIds:new Set,failedObjectIds:new Set}},this.queryForSymbologySnapping=async()=>({candidates:[],sourceCandidateIndices:[]}),this.availability=0,this._workerHandleUpdating=!0,this._editId=0,this.updateOutFields=ee(async(t,n)=>{await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateOutFields",[...t],n)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},n))})}destroy(){this._suspendController=te(this._suspendController),this._workerHandle.destroy(),this._updatingHandles.destroy()}initialize(){this._workerHandle=new Oe(this.schedule,{alignElevation:async(e,{signal:t})=>({result:await this.elevationAlignPointsInFeatures(e.query,t)}),getSymbologyCandidates:async(e,{signal:t})=>({result:await this.queryForSymbologySnapping(e,t)})}),this.addHandles([this._workerHandle.on("notify-updating",({updating:e})=>this._workerHandleUpdating=e),this._workerHandle.on("notify-availability",({availability:e})=>this._set("availability",e))])}async setup(e,t){var i;const n=this._serviceInfoFromLayer(e.layer);if(n==null)return;const s={configuration:this._convertConfiguration(e.configuration),serviceInfo:n,spatialReference:e.spatialReference.toJSON(),hasZ:this.hasZ,elevationInfo:(i=e.layer.elevationInfo)==null?void 0:i.toJSON()};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setup",s,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const n=this._convertConfiguration(e);await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("configure",n,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh",{},e)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const{point:n,filter:s,coordinateHelper:i}=e,o={...e,point:ie(n[0],n[1],n[2],i.spatialReference.toJSON()),filter:s==null?void 0:s.toJSON()};return this._workerHandle.invoke(o,t)}async updateTiles(e,t){const n={tiles:e.tiles,tileInfo:e.tileInfo!=null?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles",n,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async applyEdits(e,t){var l,v,d;const n=this._editId++,s={id:n};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("beginApplyEdits",s,t));const i=await this._updatingHandles.addPromise(ne(e.result,t)),o={id:n,edits:{addedFeatures:((l=i.addedFeatures)==null?void 0:l.map(({objectId:u})=>u).filter(N))??[],deletedFeatures:((v=i.deletedFeatures)==null?void 0:v.map(({objectId:u,globalId:m})=>({objectId:u,globalId:m})))??[],updatedFeatures:((d=i.updatedFeatures)==null?void 0:d.map(({objectId:u})=>u).filter(N))??[]}};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("endApplyEdits",o,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}getDebugInfo(e){return this._workerHandle.invokeMethod("getDebugInfo",{},e)}async notifyElevationSourceChange(){await this._workerHandle.invokeMethod("notifyElevationSourceChange",{})}async notifySymbologyChange(){await this._workerHandle.invokeMethod("notifySymbologyChange",{})}async setSymbologySnappingSupported(e){await this._workerHandle.invokeMethod("setSymbologySnappingSupported",e)}async setSuspended(e){var t;(t=this._suspendController)==null||t.abort(),this._suspendController=new AbortController,await this._workerHandle.invokeMethod("setSuspended",e,this._suspendController.signal)}_convertConfiguration(e){return{filter:e.filter!=null?e.filter.toJSON():null,customParameters:e.customParameters,viewType:e.viewType}}_serviceInfoFromLayer(e){var t,n;return e.geometryType==="multipatch"||e.geometryType==="mesh"?null:{url:((t=e.parsedUrl)==null?void 0:t.path)??"",fieldsIndex:e.fieldsIndex.toJSON(),geometryType:se.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:(n=e.timeInfo)==null?void 0:n.toJSON()}}};r([a({constructOnly:!0})],c.prototype,"schedule",void 0),r([a({constructOnly:!0})],c.prototype,"hasZ",void 0),r([a({constructOnly:!0})],c.prototype,"elevationAlignPointsInFeatures",void 0),r([a({constructOnly:!0})],c.prototype,"queryForSymbologySnapping",void 0),r([a({readOnly:!0})],c.prototype,"updating",null),r([a({readOnly:!0})],c.prototype,"availability",void 0),r([a()],c.prototype,"_workerHandleUpdating",void 0),c=r([I("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],c);class Oe extends re{constructor(t,n){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},t,{strategy:"dedicated",client:n})}}let w=class extends O{get tiles(){return[new F("0/0/0",0,0,0,ae(-1e8,-1e8,1e8,1e8))]}get tileInfo(){return new oe({origin:new le({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new de({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}constructor(e){super(e),this.pointOfInterest=null}};r([a({readOnly:!0})],w.prototype,"tiles",null),r([a({readOnly:!0})],w.prototype,"tileInfo",null),r([a({readOnly:!0})],w.prototype,"tileSize",null),r([a({constructOnly:!0})],w.prototype,"layer",void 0),r([a()],w.prototype,"pointOfInterest",void 0),w=r([I("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],w);let p=class extends O{get _updateTilesParameters(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get _layerView(){var e;return(e=this.view)==null?void 0:e.allLayerViews.find(t=>t.layer===this._layer)}get _isSuspended(){var e;return ue(this._layer)&&!this.layerSource.sublayerSources.some(t=>t.enabled&&t.layer.visible)?!0:!!this.view&&(((e=this._layerView)==null?void 0:e.suspended)!==!1||!this.layerSource.enabled)}get updating(){var e;return((e=this._workerHandle)==null?void 0:e.updating)||this._updatingHandles.updating}get _outFields(){var m,T,C,$,P,E,M,z;const{view:e,_layerView:t,layerSource:n}=this,{layer:s}=n,{fieldsIndex:i,timeInfo:o,floorInfo:l,subtypeField:v}=s,d=t&&"filter"in t?t.filter:null,u=d!=null&&d.where&&d.where!=="1=1"?this._getOrLoadWhereFields(d.where,i):[];if(d!=null&&d.timeExtent&&o){const{startField:h,endField:H}=o,x=((m=i.get(h))==null?void 0:m.name)??h,R=((T=i.get(H))==null?void 0:T.name)??H;x&&u.push(x),R&&u.push(R)}if(e!=null&&e.map&&_e(e.map)&&((C=e.map.utilityNetworks)!=null&&C.find(h=>h.isUtilityLayer(s)))){const h=($=s.fieldsIndex.get("assetGroup"))==null?void 0:$.name,H=(P=s.fieldsIndex.get("assetType"))==null?void 0:P.name;h&&H&&(u.push(h),u.push(H))}if(s&&(l!=null&&l.floorField)&&((E=e==null?void 0:e.floors)!=null&&E.length)){const h=((M=i.get(l.floorField))==null?void 0:M.name)??l.floorField;h&&u.push(h)}if(v){const h=((z=i.get(v))==null?void 0:z.name)??v;h&&u.push(h)}return new Set(u)}get configuration(){const{view:e}=this,{apiKey:t,customParameters:n}=this._layer,s=e!=null?e.type:"2d";return{filter:this._layer.createQuery(),customParameters:t?{...n,token:t}:n,viewType:s}}get availability(){var e;return((e=this._workerHandle)==null?void 0:e.availability)??0}get _layer(){return this.layerSource.layer}constructor(e){super(e),this._updatingHandles=new W,this._workerHandle=null,this._debug=null,this._memoizedMakeGetGroundElevation=ve(me)}initialize(){let e;const t=this.view;if(t==null||t.destroyed)this._tilesOfInterest=new w({layer:this._layer}),e=this._workerHandle=new c;else switch(t.type){case"2d":this._tilesOfInterest=new y({view:t,layer:this._layer}),e=this._workerHandle=new c;break;case"3d":{const{resourceController:n}=t,s=this._layer;this._tilesOfInterest=new g({view:t}),e=this._workerHandle=new c({schedule:i=>n.immediate.schedule(i),hasZ:this._layer.hasZ&&(this._layer.returnZ??!0),elevationAlignPointsInFeatures:async(i,o)=>{const l=await t.whenLayerView(s);return V(o),l.elevationAlignPointsInFeatures(i,o)},queryForSymbologySnapping:async(i,o)=>{const l=await t.whenLayerView(s);return V(o),l.queryForSymbologySnapping(i,o)}}),this.addHandles([t.elevationProvider.on("elevation-change",({context:i})=>{const{elevationInfo:o}=s;pe(i,o)&&f(e.notifyElevationSourceChange())}),_(()=>s.elevationInfo,()=>f(e.notifyElevationSourceChange()),S),_(()=>{var i,o;return(o=(i=this._layerView)==null?void 0:i.processor)==null?void 0:o.renderer},()=>f(e.notifySymbologyChange()),S),_(()=>{var i;return((i=this._layerView)==null?void 0:i.symbologySnappingSupported)??!1},i=>f(e.setSymbologySnappingSupported(i)),S),he(()=>{var i;return(i=this._layerView)==null?void 0:i.layer},["edits","apply-edits","graphic-update"],()=>e.notifySymbologyChange())]);break}}this.addHandles([A(e)]),f(e.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null)),this._updatingHandles.add(()=>this._updateTilesParameters,()=>f(e.updateTiles(this._updateTilesParameters,null)),S),this.addHandles([_(()=>this.configuration,n=>f(e.configure(n,null)),L),_(()=>this._outFields,n=>f(e.updateOutFields(n)),S),_(()=>this._isSuspended,n=>f(e.setSuspended(n)),ce)]),t!=null&&this.addHandles(_(()=>ye.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES,n=>{n&&!this._debug?(this._debug=new k({view:t,handle:e}),this.addHandles(A(this._debug),"debug")):!n&&this._debug&&this.removeHandles("debug")},S)),this.addHandles(this.layerSource.layer.on("apply-edits",n=>{f(e.applyEdits(n,null))}))}destroy(){this._updatingHandles.destroy()}refresh(){var e;(e=this._workerHandle)==null||e.refresh(null)}async fetchCandidates(e,t){const{coordinateHelper:n,point:s}=e;this._tilesOfInterest.pointOfInterest=n.arrayToPoint(s);const i=this._memoizedMakeGetGroundElevation(this.view,n.spatialReference);return(await this._workerHandle.fetchCandidates({...e},t)).candidates.map(o=>we(o,i))}getDebugInfo(e){return this._workerHandle.getDebugInfo(e)}_getOrLoadWhereFields(e,t){const{_whereModule:n}=this;if(!this._loadWhereModuleTask&&!n){const s=fe(async()=>{const i=await ge(()=>import("./WhereClause-DN7niXzF.js").then(o=>o.W),__vite__mapDeps([0,1,2,3,4]));return this._whereModule=i.WhereClause,this._whereModule});return this._loadWhereModuleTask=s,this._updatingHandles.addPromise(s.promise),[]}if(!n)return[];try{return n.create(e,t).fieldNames}catch{return[]}}};r([a({constructOnly:!0})],p.prototype,"spatialReference",void 0),r([a({constructOnly:!0})],p.prototype,"layerSource",void 0),r([a({constructOnly:!0})],p.prototype,"view",void 0),r([a()],p.prototype,"_tilesOfInterest",void 0),r([a({readOnly:!0})],p.prototype,"_updateTilesParameters",null),r([a()],p.prototype,"_layerView",null),r([a()],p.prototype,"_isSuspended",null),r([a({readOnly:!0})],p.prototype,"updating",null),r([a()],p.prototype,"_outFields",null),r([a({readOnly:!0})],p.prototype,"configuration",null),r([a({readOnly:!0})],p.prototype,"availability",null),r([a()],p.prototype,"_loadWhereModuleTask",void 0),r([a()],p.prototype,"_whereModule",void 0),p=r([I("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],p);export{p as FeatureServiceSnappingSource};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/WhereClause-DN7niXzF.js","assets/TimeOnly-B0m-iz0l.js","assets/index-Bv0Hohk0.js","assets/index-85K7yr-5.css","assets/UnknownTimeZone-81r46adS.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
