import{x as G,af as T,hk as J,bu as U,G as z,i1 as N,e as n,y as c,c as F,S as I,kH as Y,g as v,fB as K,kI as B,u as C,A as R,J as $,R as V,aB as D,cW as A,q as E,aw as Q,cD as W,j_ as j,kJ as X,j$ as k,kK as ee,kL as te,kE as b,kM as P,a as q,kN as re,C as x,P as Z,w as se,kO as ie,kP as oe,I as ae}from"./index-Bv0Hohk0.js";import{a as ne,b as le,T as ue}from"./HeatmapDensity.glsl-DVt7Ha1B.js";import{n as ce}from"./LayerView3D-BHAdUlxy.js";import{E as de,c as pe}from"./query-Cal2QOnU.js";import{h as he}from"./EventedSet-DaMEJEva.js";import{j as ye}from"./commonProperties-71l2LJ6s.js";import{m as me}from"./FeatureEffect-DsB_OIRS.js";import{d as fe}from"./FeatureFilter-x-ktONiu.js";import{o as L}from"./floorFilterUtils-DZ5C6FQv.js";import{p as M,n as ge}from"./popupUtils-D-6l6-mq.js";import{u as Fe}from"./LayerView-xIua26SL.js";import{i as we}from"./RefreshableLayerView-ByEXgiMo.js";class _e extends G{constructor(t,e,s,i,o,l){super(t.usedMemory,t.displayedFeatures,t.totalFeatures,t.maximumFeatures,t.nodes,t.core),this.storedFeatures=e,this.totalVertices=s,this.partial=i,this.mode=o,this.symbolComplexity=l}}class be{constructor(t){this._controller=t,this._handle=new ve(e=>t.schedule(e))}destroy(){this._handle.destroy()}invoke(t,e){return t.buffer&&t.buffer.byteLength!==0?(t.options.sourceSpatialReference&&t.options.sourceSpatialReference instanceof T&&(t.options={...t.options,sourceSpatialReference:t.options.sourceSpatialReference.toJSON()}),this._handle.invoke(t,e).then(s=>{let i=0,o=0;const l=T.fromJSON(s.spatialReference);s.spatialReference=l;const d=async u=>{const a=s.fields;if(a){for(;i<a.length;)if(a[i]=U.fromJSON(a[i]),i++,u.madeProgress())return this._controller.reschedule(m=>d(m))}const y=s.features;for(;o<y.length;){const m=y[o];++o,m.uid=z.generateUID();const p=m.geometry;if(p!=null&&(p.spatialReference=l,xe(p),u.madeProgress()))return this._controller.reschedule(f=>d(f))}return s};return this._controller.schedule(u=>d(u))})):Promise.resolve(null)}}function xe(r){switch(r.type){case"polyline":r.paths.reduce((t,e)=>t+e.length,0)<N&&(r.paths=r.hasZ||r.hasM?r.paths.map(t=>t.map(e=>[e[0],e[1],e[2]])):r.paths.map(t=>t.map(e=>[e[0],e[1]])));break;case"polygon":r.rings.reduce((t,e)=>t+e.length,0)<N&&(r.rings=r.hasZ||r.hasM?r.rings.map(t=>t.map(e=>[e[0],e[1],e[2]])):r.rings.map(t=>t.map(e=>[e[0],e[1]])))}}class ve extends J{constructor(t){super("PBFDecoderWorker","_parseFeatureQuery",{_parseFeatureQuery:e=>[e.buffer]},t)}}let g=class extends I{constructor(r){super(r)}get implicitFields(){var s;if(!((s=this.layer.outFields)==null?void 0:s.includes("*")))return new Set;const t=new Set(this.layerView.requiredFields),e=new Set(this.layerView.availableFields);return Y(e,t)}get queryFeaturesDehydrated(){var o;const{layer:r}=this,t=r.capabilities,e=t&&t.query,s=e&&e.supportsFormatPBF,i=r.parsedUrl;if(s){this._decoder==null&&(this._decoder=new be(this.controller));const l={sourceSpatialReference:((o=r.spatialReference)==null?void 0:o.toJSON())??null,applyTransform:!0,maxStringAttributeFields:this.implicitFields,maxStringAttributeLength:H};return(d,u)=>de(i,d,"pbf",this._createRequestOptions(u)).then(a=>(v(u),this._decoder!=null?this._decoder.invoke({buffer:a.data,options:l},u.signal):Promise.reject(K())))}return(l,d)=>pe(i,l,r.spatialReference,this._createRequestOptions(d)).then(u=>B(u.data,{maxStringAttributeFields:this.implicitFields,maxStringAttributeLength:H}))}queryFeatureCount(r,t){return this.layer.queryFeatureCount(r,t)}destroy(){this._decoder=C(this._decoder)}_createRequestOptions(r){return{...r,query:{...this.layer.customParameters,token:this.layer.apiKey,...r==null?void 0:r.query}}}};n([c({constructOnly:!0})],g.prototype,"layer",void 0),n([c({constructOnly:!0})],g.prototype,"layerView",void 0),n([c({constructOnly:!0})],g.prototype,"controller",void 0),n([c({readOnly:!0})],g.prototype,"implicitFields",null),n([c({readOnly:!0})],g.prototype,"queryFeaturesDehydrated",null),g=n([F("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],g);let w=class extends I{constructor(r){super(r)}queryFeaturesDehydrated(r,t){return this.layer.queryFeatures(r,t)}queryFeatureCount(r,t){return this.layer.queryFeatureCount(r,t)}};n([c({constructOnly:!0})],w.prototype,"layer",void 0),n([c({readOnly:!0})],w.prototype,"queryFeaturesDehydrated",null),w=n([F("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceMeshQuery3D")],w);let O=class extends I{constructor(r){super(r)}queryFeaturesDehydrated(r,t){return this.layer.queryFeatures(r,t)}};n([c({constructOnly:!0})],O.prototype,"layer",void 0),O=n([F("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileServiceQuery3D")],O);let _=class extends I{constructor(r){super(r)}queryFeaturesDehydrated(r,t){return this.source.queryFeaturesJSON(r,t).then(B,e=>{if(e&&e.name==="query-features-json:unsupported")return this.layer.queryFeatures(r,t);throw e})}queryFeatureCount(r,t){return this.layer.queryFeatureCount(r,t)}};function Re(r,t){const{layer:e}=r;return e.type==="feature"&&e.source.type==="feature-layer"?e.infoFor3D!=null?new w({layer:e}):new g({layer:e,layerView:r,controller:t}):e.type==="feature"&&e.source.type==="memory"||e.type==="csv"||e.type==="geojson"||e.type==="oriented-imagery"||e.type==="wfs"?new _({layer:e,source:e.source}):e.type==="ogc-feature"?new O({layer:e}):null}n([c({constructOnly:!0})],_.prototype,"layer",void 0),n([c({constructOnly:!0})],_.prototype,"source",void 0),_=n([F("esri.views.3d.layers.support.featureTileQuery3D.FeatureTileClientQuery3D")],_);const H=1024;class qe{constructor(t){this._memoryCache=null,this._capabilities=null;const e=t.layerView.layer;this._layerView=t.layerView,this.objectIdField=e.objectIdField,this.globalIdField="globalIdField"in e?e.globalIdField:null,this._returnZ=t.returnZ,this._returnM=t.returnM;const s=this._layerView.view.resourceController;this.query=Re(this._layerView,s.normal),s&&this._memoryCacheEnabled&&(this._memoryCache=s.memoryController.newCache(`fl-${e.uid}`))}get _memoryCacheEnabled(){switch(this._layerView.layer.source.type){case"feature-layer":case"ogc-feature":case"oriented-imagery":return!0;case"csv":case"geojson":case"memory":case"wfs":return!1}}destroy(){this._memoryCache=C(this._memoryCache),this.query.destroy()}createQuery(){const t=this._layerView.layer.createQuery();return t.outFields=this._layerView.availableFields,t.returnZ=this._returnZ,t.returnM=this._returnM,t.outSpatialReference=this.tilingScheme.spatialReference,t}get memoryCache(){return this._memoryCache}get viewingMode(){return this._layerView.view.state.viewingMode}get tilingScheme(){return this._layerView.view.featureTiles.tilingScheme}get scheduler(){const t=this._layerView.view.resourceController;return t?t.scheduler:null}get geometryType(){return this._layerView.layer.geometryType}get fullExtent(){return this._layerView.layer.fullExtent}get tileMaxRecordCount(){return this._layerView.layer.capabilities.query.tileMaxRecordCount}get maxRecordCount(){return this._layerView.layer.capabilities.query.maxRecordCount}get capabilities(){return this._capabilities!=null||(this._capabilities=ne(this._layerView.layer)),this._capabilities}logFetchError(t,e){t.error("#fetchTile()",this._layerView.layer,(e==null?void 0:e.message)??e)}}const Oe=r=>{let t=class extends r{constructor(...e){super(...e),this._updatingRequiredFieldsPromise=null,this.dataUpdating=!1,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){this.addHandles([R(()=>{var s;const e=this.layer;return[e&&"elevationInfo"in e?(s=e.elevationInfo)==null?void 0:s.featureExpressionInfo:null,e&&"displayField"in e?e.displayField:null,e&&"timeInfo"in e&&e.timeInfo,e&&"renderer"in e&&e.renderer,e&&"labelingInfo"in e&&e.labelingInfo,e&&"floorInfo"in e&&e.floorInfo,this.filter,this.featureEffect,this.timeExtent]},()=>this._handleRequiredFieldsChange(),$),V(()=>{var e;return(e=this.view)==null?void 0:e.floors},"change",()=>this._handleRequiredFieldsChange()),V(()=>{const e=this.layer;return e&&"sublayers"in e?e.sublayers:null},"change",()=>this._handleRequiredFieldsChange())])}get availableFields(){if(!this.layer)return[];const{layer:e,layer:{fieldsIndex:s},requiredFields:i}=this;return"outFields"in e&&e.outFields?D(s,[...A(s,e.outFields),...i]):D(s,i)}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(e){this._override("featureEffect",e)}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(e){E.getLogger(this).error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(e){throw new Error("missing implementation")}createQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},s=this.filter!=null?this.filter.createQuery(e):new Q(e);if("floorInfo"in this.layer&&this.layer.floorInfo){const i=L(this);i!=null&&(s.where=s.where?`(${s.where}) AND (${i})`:i)}return this.timeExtent!=null&&(s.timeExtent=s.timeExtent!=null?s.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),s}createAggregateQuery(){const e={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return new Q(e)}queryFeatures(e,s){throw new Error("missing implementation")}queryObjectIds(e,s){throw new Error("missing implementation")}queryFeatureCount(e,s){throw new Error("missing implementation")}queryExtent(e,s){throw new Error("missing implementation")}async fetchPopupFeaturesFromGraphics(e,s){return this._validateFetchPopupFeatures(e,s),this._fetchPopupFeatures(e,s)}_loadArcadeModules(e){var s;return(s=e.expressionInfos)!=null&&s.length||Array.isArray(e.content)&&e.content.some(i=>i.type==="expression")?W():Promise.resolve()}_handleRequiredFieldsChange(){const e=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",e),e.then(()=>{this._updatingRequiredFieldsPromise===e&&this._set("_updatingRequiredFieldsPromise",null)})}async _updateRequiredFields(){if(!this.layer||!this.view)return;const e=this.view.type==="3d",{layer:s,layer:{fieldsIndex:i,objectIdField:o}}=this,l="renderer"in s&&s.renderer,d="orderBy"in s&&s.orderBy,u="featureReduction"in s?s.featureReduction:null,a=new Set,y=await Promise.allSettled([l?l.collectRequiredFields(a,i):null,j(a,s),e&&"elevationInfo"in s?X(a,s):null,this.filter!=null?k(a,s,this.filter):null,e||this.featureEffect==null?null:k(a,s,this.featureEffect.filter),!e&&u?ee(a,s,u):null,!e&&d?te(a,s,d):null]);if("timeInfo"in s&&s.timeInfo&&this.timeExtent&&b(a,s.fieldsIndex,[s.timeInfo.startField,s.timeInfo.endField]),"floorInfo"in s&&s.floorInfo&&b(a,s.fieldsIndex,[s.floorInfo.floorField]),s.type==="feature"&&e&&s.infoFor3D!=null&&(s.globalIdField==null&&E.getLogger(this).error("globalIdField missing on 3DObjectFeatureLayer"),b(a,s.fieldsIndex,[s.globalIdField])),s.type==="subtype-group"){P(a,i,s.subtypeField);const p=s.sublayers.map(f=>{var S;return Promise.all([(S=f.renderer)==null?void 0:S.collectRequiredFields(a,i),j(a,f)])});await Promise.allSettled(p)}s.type==="catalog-footprint"&&b(a,i,[s.parent.itemSourceField,s.parent.itemTypeField]);for(const p of y)p.status==="rejected"&&E.getLogger(this).error(p.reason);P(a,i,o),e&&"displayField"in s&&s.displayField&&P(a,i,s.displayField);const m=Array.from(a).sort();this._set("requiredFields",m)}_validateFetchPopupFeatures(e,s){if(s!=null)for(const i of e){const o=i.origin&&"layer"in i.origin?i.origin.layer:i.layer;if("popupEnabled"in o&&!o.popupEnabled)throw new q("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:o});if(i.isAggregate){const l="featureReduction"in o?o.featureReduction:null;if(!(l&&"popupTemplate"in l&&l.popupEnabled&&l.popupTemplate))throw new q("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:o})}else if("popupTemplate"in o&&!M(o,s))throw new q("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:o})}}_popupFeatureHasRequiredFields(e,s){return re(s,e)}async _fetchPopupFeatures(e,s){var d;const i=new Array(e.length),o=new Map,l=await this._createPopupQuery(e.map(u=>{var a;return((a=u.origin)==null?void 0:a.layer)??u.layer}),s);for(let u=0;u<e.length;u++){const a=e[u];if(a.isAggregate){i[u]=a;continue}const y=((d=a.origin)==null?void 0:d.layer)??a.layer;if(!y||!("popupEnabled"in y))continue;const m=A(this.layer.fieldsIndex,l.outFields),p=M(y,s);if(p==null)continue;const f=await this._loadArcadeModules(p);v(s),f&&f.arcadeUtils.hasGeometryOperations(p)||!this._popupFeatureHasRequiredFields(a,m)?o.set(a.getObjectId(),{graphic:a,index:u}):i[u]=a}if(this.layer.type==="stream"||o.size===0)return i.filter(Boolean);l.objectIds=Array.from(o.keys());try{const u=await this.layer.queryFeatures(l,s);for(const a of u.features){const{graphic:{geometry:y,origin:m},index:p}=o.get(a.getObjectId());a.geometry||(a.geometry=y),a.origin=m,i[p]=a}}catch{}return i.filter(Boolean)}async _createPopupQuery(e,s){const i=this.layer.createQuery(),o=new Set;let l=!1;const d=e??[this.layer];for(const u of d){if(!("popupEnabled"in u))continue;const a=M(u,s);if(a==null)continue;const y=await this._loadArcadeModules(a);v(s);const m=y&&y.arcadeUtils.hasGeometryOperations(a);l=!(this.layer.geometryType!=="point"&&!m);const p=await ge(this.layer,a);v(s);for(const f of p)o.add(f)}if(i.returnGeometry=l,i.returnZ=l,i.returnM=l,i.outFields=Array.from(o),i.outSpatialReference=this.view.spatialReference,"floorInfo"in this.layer&&this.layer.floorInfo){const u=L(this);u!=null&&(i.where=i.where?`(${i.where}) AND (${u})`:u)}return i}canResume(){return!!super.canResume()&&(this.timeExtent==null||!this.timeExtent.isEmpty)}getTest(){return{createPopupQuery:e=>this._createPopupQuery(void 0,e)}}get test(){return this.getTest()}};return n([c()],t.prototype,"_updatingRequiredFieldsPromise",void 0),n([c({readOnly:!0})],t.prototype,"availableFields",null),n([c({readOnly:!0})],t.prototype,"dataUpdating",void 0),n([c({type:me})],t.prototype,"featureEffect",null),n([c({type:fe})],t.prototype,"filter",void 0),n([c(ye)],t.prototype,"timeExtent",void 0),n([c()],t.prototype,"layer",void 0),n([c({type:Number})],t.prototype,"maximumNumberOfFeatures",null),n([c({readOnly:!0,type:Boolean})],t.prototype,"maximumNumberOfFeaturesExceeded",null),n([c({readOnly:!0})],t.prototype,"requiredFields",void 0),n([c()],t.prototype,"suspended",void 0),n([c()],t.prototype,"view",void 0),t=n([F("esri.views.layers.FeatureLayerView")],t),t};let h=class extends we(le(Oe(ce(Fe)))){constructor(r){super(r),this._controllerTotal=0,this._processorTotal=0,this._needsRefresh=!1,this.suspendResumeExtentMode="data"}initialize(){this.addHandles([R(()=>this._updatingRequiredFieldsPromise,r=>this._updatingHandles.addPromise(r),$),R(()=>({controller:this.controller,suspended:this.suspended}),({controller:r,suspended:t})=>{r&&!t&&this._needsRefresh&&(r.refetch(),this._needsRefresh=!1)})])}destroy(){this._updatingHandles.removeAll(),this._fetcherContext=C(this._fetcherContext)}get maximumNumberOfFeatures(){var r;return((r=this.controller)==null?void 0:r.maximumNumberOfFeatures)??this._get("maximumNumberOfFeatures")}set maximumNumberOfFeatures(r){this._set("maximumNumberOfFeatures",r),this.controller&&(this.controller.maximumNumberOfFeatures=r)}get maximumNumberOfFeaturesExceeded(){return!!this.controller&&!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded)}get updatingProgressValue(){var e,s;let r=0;if((e=this.controller)!=null&&e.updating){const i=this.controller.updatingRemaining,o=Math.max(this.controller.updatingTotal,this._controllerTotal);o>0&&(r=(o-i)/o,this._controllerTotal=o)}let t=0;if((s=this.processor)!=null&&s.updating){const i=this.processor.updatingRemaining,o=Math.max(i,this._processorTotal);o>0&&(t=(o-i)/o,this._processorTotal=o)}return .5*(r+t)}get updatePolicy(){if(!this.controller)return x.ASYNC;switch(this.controller.mode){case"snapshot":{const r=Ie.get(this.layer.geometryType);return r==null||this.controller.serviceDataCount>r?x.ASYNC:x.SYNC}case"tiles":return x.ASYNC}}get hasZ(){const r=this.layer,t=r.capabilities&&r.capabilities.data;return!(!t||!t.supportsZ)&&("returnZ"in r&&r.returnZ!=null?r.returnZ:t.supportsZ)}get hasM(){const r=this.layer,t=r.capabilities&&r.capabilities.data;return!(!t||!t.supportsM)&&"returnM"in r&&r.returnM!=null&&r.returnM}setVisibility(r,t){var e;(e=this.processor)==null||e.setObjectIdVisibility(r,t)}createQuery(){return super.createQuery()}queryFeatures(r,t){const e=()=>super.queryFeatures(r,t);return this.layer.geometryType==="mesh"?this._queryFeaturesMesh(this._ensureQuery(r),e):e()}beforeSetController(r){r.maximumNumberOfFeatures=this.maximumNumberOfFeatures}createController(){this._fetcherContext=new qe({layerView:this,returnZ:this.hasZ,returnM:this.hasM});const r=new ue({layerView:this,context:this._fetcherContext,graphics:new he,extent:this.clippingExtent});return this._updatingHandles.add(()=>r.serviceDataExtent,t=>{this.processor&&(this.processor.dataExtent=t)},Z),this.addHandles(R(()=>this.suspended,t=>{t?r.suspend():r.resume()},$)),this._updatingHandles.add(()=>{var t;return(t=this.processor)==null?void 0:t.displayFeatureLimit},t=>r.displayFeatureLimit=t,Z),this.addHandles(se(()=>!this.updating,()=>{this._controllerTotal=0,this._processorTotal=0})),r}async doRefresh(r){const{controller:t,processor:e,suspended:s}=this;r&&t&&(s?this._needsRefresh=!0:(t.refetch(),this._needsRefresh=!1)),e.refreshFilter()}_popupFeatureHasRequiredFields(r,t){if(!super._popupFeatureHasRequiredFields(r,t))return!1;const e=ie(r,this.layer.objectIdField);if(e==null)return!0;const s=this.controller.getMissingAttributesForFeature(e);if(s==null)return!0;for(const i of t)if(s.has(i))return!1;return!0}get usedMemory(){var r,t;return(((r=this.processor)==null?void 0:r.usedMemory)??0)+(((t=this.controller)==null?void 0:t.memoryForUnusedFeatures)??0)}get unloadedMemory(){var i,o,l,d;const r=((i=this.processor)==null?void 0:i.unprocessedMemoryEstimate)??0,t=((o=this.controller)==null?void 0:o.expectedFeatureDiff)??0,e=((l=this.processor)==null?void 0:l.loadedFeatures)??0,s=e+t>0?e/(e+t):1;return r+t*(((d=this.processor)==null?void 0:d.usedMemoryPerFeature)??0)*s}get ignoresMemoryFactor(){var r;return(r=this.controller)==null?void 0:r.hasMaximumNumberOfFeaturesOverride}async _queryFeaturesMesh(r,t){await this._validateQueryFeaturesMesh(r);const e=await t();if(r!=null&&r.outStatistics||this.graphics3DProcessor==null)return e;const s=this.layer.objectIdField,i=this.graphics3DProcessor.graphics3DGraphicsByObjectID,o=[];for(const l of e.features)if(l.geometry){const d=i.get(l.attributes[s]);d&&(l.geometry=oe(d.graphic.geometry),o.push(l))}else o.push(l);return e.features=o,e}async _validateQueryFeaturesMesh(r){if(!r)return;const t=s=>{throw new q("feature-layer-view:unsupported-query",`Queries on Mesh feature collection layers do not support '${s}'`)},e=["quantizationParameters","geometryPrecision","maxAllowableOffset"];for(const s of e)r[s]!=null&&t(s);"returnM"in r&&r.returnM&&t("returnM"),"returnCentroid"in r&&r.returnCentroid&&t("returnCentroid"),r.outSpatialReference==null||r.outSpatialReference.equals(this.view.spatialReference)||t("outSpatialReference")}get performanceInfo(){var s,i,o,l,d,u;const r=(s=this.controller)==null?void 0:s.displayFeatureLimit,t=r!=null?r.averageSymbolComplexity:void 0,e=t!=null?`f:${t.verticesPerFeature},v:${t.verticesPerCoordinate}`:"n/a";return new _e(super.performanceInfo,((o=(i=this.controller)==null?void 0:i.performanceInfo)==null?void 0:o.storedFeatures)??0,((d=(l=this.controller)==null?void 0:l.performanceInfo)==null?void 0:d.totalVertices)??0,this.maximumNumberOfFeaturesExceeded,((u=this.controller)==null?void 0:u.mode)??"n/a",e)}get test(){var r;return{updatePolicy:this.updatePolicy,controller:this.controller,loadedGraphics:(r=this.controller)==null?void 0:r.graphics,...this.getTest()}}};n([c()],h.prototype,"layer",void 0),n([c()],h.prototype,"controller",void 0),n([c()],h.prototype,"_controllerTotal",void 0),n([c()],h.prototype,"_processorTotal",void 0),n([c()],h.prototype,"_needsRefresh",void 0),n([c()],h.prototype,"maximumNumberOfFeatures",null),n([c()],h.prototype,"maximumNumberOfFeaturesExceeded",null),n([c(ae)],h.prototype,"updatingProgress",void 0),n([c({readOnly:!0})],h.prototype,"updatingProgressValue",null),n([c({readOnly:!0})],h.prototype,"updatePolicy",null),n([c({readOnly:!0})],h.prototype,"hasZ",null),n([c({readOnly:!0})],h.prototype,"hasM",null),n([c()],h.prototype,"suspendResumeExtentMode",void 0),h=n([F("esri.views.3d.layers.FeatureLayerViewBase3D")],h);const Ie=new Map([["point",5e3],["polygon",500],["polyline",1e3]]),je=h;export{je as w};