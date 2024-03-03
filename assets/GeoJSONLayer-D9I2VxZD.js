import{e as r,y as i,c as b,gt as _,O as $,bd as O,a as m,j,fa as w,E as J,ej as I,q as f,eE as N,eG as R,eF as P,af as E,d as q,hF as g,bz as T,dl as v,_ as k,aw as h,eO as D,bu as G,bI as Z,l as z}from"./index-Bv0Hohk0.js";import"./UniqueValueRenderer-C8B84zcF.js";import{m as C,u as Q}from"./jsonUtils-CvVppPa6.js";import{m as L}from"./MultiOriginJSONSupport-BZQTWpeF.js";import{l as V}from"./clientSideDefaults-H6zD17YE.js";import{d as A}from"./FeatureSet-DZOCMyA1.js";import{e as B}from"./CustomParametersMixin-DKqLR8tC.js";import{p as M}from"./FeatureEffectLayer-xcthoMRe.js";import{c as U}from"./FeatureReductionLayer-CENesjyy.js";import{u as W}from"./OperationalLayer-CgleBBYh.js";import{c as H}from"./OrderedLayer-CeeaGzzr.js";import{j as K}from"./PortalLayer-DaNsTDLt.js";import{f as X}from"./TemporalLayer-C1KR7WBT.js";import{f as Y,I as ee,m as te,c as re,g as ie,y as oe,p as se,d as ne}from"./commonProperties-71l2LJ6s.js";import{p as ae}from"./FeatureTemplate-BU0tvyV1.js";import{s as le}from"./fieldProperties-QeW_-2Ss.js";import{C as ue}from"./LabelClass-DPzxJqvN.js";import{i as pe}from"./labelingInfo-B67D2ZxN.js";import{p as de}from"./popupUtils-Cu5Z_JS9.js";import"./diffUtils-D_LMLEpD.js";import"./FieldsIndex-j25pkYvJ.js";import"./UnknownTimeZone-81r46adS.js";import"./heatmapUtils-CpfvS1IE.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./FeatureEffect-DsB_OIRS.js";import"./FeatureFilter-x-ktONiu.js";import"./FeatureReductionSelection-CsTr2Kpw.js";import"./featureLayerUtils-pwhGpgI4.js";import"./featureQueryAll-Dvpwrv0X.js";import"./AttachmentQuery-B5Jh59Bx.js";import"./RelationshipQuery-QRZ1tsX4.js";import"./MD5-C9MwAd2G.js";import"./portalItemUtils-JWUEQXnE.js";import"./TimeInfo-Cqort3EX.js";let u=class extends _{constructor(){super(...arguments),this.type="geojson",this.refresh=$(async e=>{await this.load();const{extent:t,timeExtent:s}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,s&&(this.sourceJSON.timeInfo.timeExtent=[s.start,s.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(s=>A.fromJSON(s))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(s=>({count:s.count,extent:O.fromJSON(s.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new m("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,s=[],n=[],l=[];if(e.addFeatures)for(const a of e.addFeatures)s.push(this._serializeFeature(a));if(e.deleteFeatures)for(const a of e.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[t]!=null&&n.push(a.attributes[t]);if(e.updateFeatures)for(const a of e.updateFeatures)l.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:s,updates:l,deletes:n}).then(({extent:a,timeExtent:p,featureEditResults:c})=>(this.sourceJSON.extent=a,p&&(this.sourceJSON.timeInfo.timeExtent=[p.start,p.end]),this._createEditsResult(c)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new m("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,s=this._geometryForSerialization(e);return s?{geometry:s.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return t==null?null:t.type==="mesh"||t.type==="extent"?j.fromExtent(t.extent):t}async _startWorker(e){this._connection=await w("GeoJSONSourceWorker",{strategy:J("feature-layers-workers")?"dedicated":"local",signal:e,registryTarget:this});const{fields:t,spatialReference:s,hasZ:n,geometryType:l,objectIdField:a,url:p,timeInfo:c,customParameters:F}=this.layer,S=this.layer.originOf("spatialReference")==="defaults",x={url:p,customParameters:F,fields:t&&t.map(y=>y.toJSON()),geometryType:I.toJSON(l),hasZ:n,objectIdField:a,timeInfo:c?c.toJSON():null,spatialReference:S?null:s&&s.toJSON()},d=await this._connection.invoke("load",x,{signal:e});for(const y of d.warnings)f.getLogger(this.layer).warn("#load()",`$${y.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:y});d.featureErrors.length&&f.getLogger(this.layer).warn("#load()",`Encountered ${d.featureErrors.length} validation errors while loading features. (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{errors:d.featureErrors}),this.sourceJSON=d.layerDefinition,this.capabilities=V(this.sourceJSON.hasZ,!0)}};r([i()],u.prototype,"capabilities",void 0),r([i()],u.prototype,"type",void 0),r([i({constructOnly:!0})],u.prototype,"layer",void 0),r([i()],u.prototype,"sourceJSON",void 0),u=r([b("esri.layers.graphics.sources.GeoJSONSource")],u);const he=le();let o=class extends H(B(U(M(N(X(R(P(W(K(L(z))))))))))){constructor(e){super(e),this.copyright=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new u({layer:this}),this.spatialReference=E.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson"}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){const t=this.loadFromPortal({supportedTypes:["GeoJson"],supportsData:!1},e).catch(q).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),g(this.renderer,this.fieldsIndex),T(this.timeInfo,this.fieldsIndex)});return this.addResolvingPromise(t),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?v(this.url):null}set renderer(e){g(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=v(e);this._set("url",t.path),t.query&&(this.customParameters={...this.customParameters,...t.query})}async applyEdits(e,t){const{applyEdits:s}=await k(()=>import("./editingSupport-BPET0oPi.js"),__vite__mapDeps([0,1,2,3]));await this.load();const n=await s(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(e,t){return super.on(e,t)}createPopupTemplate(e){return de(this,e)}createQuery(){var l;const e=new h,t=(l=this.capabilities)==null?void 0:l.data;e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:s,timeExtent:n}=this;return e.timeExtent=s!=null&&n!=null?n.offset(-s.value,s.unit):n||null,e}getFieldDomain(e,t){var s;return(s=this.getField(e))==null?void 0:s.domain}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(h.from(e)||this.createQuery(),t)).then(s=>{if(s!=null&&s.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(h.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(h.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(h.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return t!=null&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};r([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",null),r([i({type:String})],o.prototype,"copyright",void 0),r([i({readOnly:!0})],o.prototype,"createQueryVersion",null),r([i(D("dateFieldsTimeReference"))],o.prototype,"dateFieldsTimeZone",void 0),r([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),r([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),r([i({type:String})],o.prototype,"displayField",void 0),r([i({type:Boolean})],o.prototype,"editingEnabled",void 0),r([i(Y)],o.prototype,"elevationInfo",void 0),r([i({type:[G],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),r([i(he.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([i({type:O,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),r([i({type:["point","polygon","polyline","multipoint"],json:{read:{reader:I.read}}})],o.prototype,"geometryType",void 0),r([i({type:Boolean})],o.prototype,"hasZ",void 0),r([i(ee)],o.prototype,"id",void 0),r([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),r([i(te)],o.prototype,"labelsVisible",void 0),r([i({type:[ue],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:pe},write:!0}})],o.prototype,"labelingInfo",void 0),r([i(re)],o.prototype,"legendEnabled",void 0),r([i({type:["show","hide"]})],o.prototype,"listMode",void 0),r([i({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],o.prototype,"objectIdField",void 0),r([i(ie)],o.prototype,"opacity",void 0),r([i({type:["GeoJSON"]})],o.prototype,"operationalLayerType",void 0),r([i({readOnly:!0})],o.prototype,"parsedUrl",null),r([i(oe)],o.prototype,"popupEnabled",void 0),r([i({type:Z,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({types:C,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:Q}}}})],o.prototype,"renderer",null),r([i(se)],o.prototype,"screenSizePerspectiveEnabled",void 0),r([i({readOnly:!0})],o.prototype,"source",void 0),r([i({type:E})],o.prototype,"spatialReference",void 0),r([i({type:[ae]})],o.prototype,"templates",void 0),r([i()],o.prototype,"title",void 0),r([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),r([i(ne)],o.prototype,"url",null),o=r([b("esri.layers.GeoJSONLayer")],o);const Me=o;export{Me as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/editingSupport-BPET0oPi.js","assets/index-Bv0Hohk0.js","assets/index-85K7yr-5.css","assets/EditBusLayer-CAsf3J8a.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
