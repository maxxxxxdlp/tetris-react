import{e as t,y as i,c as T,gt as U,O as J,bd as C,a as k,ej as h,es as W,fa as Y,E as X,q as D,aP as H,eE as L,eF as Q,eG as G,af as P,hF as I,bz as V,bu as j,bU as z,dl as M,aw as m,eO as Z,b0 as A,eP as f,bI as B,l as K}from"./index-Bv0Hohk0.js";import"./UniqueValueRenderer-C8B84zcF.js";import{m as ee,u as te}from"./jsonUtils-CvVppPa6.js";import{m as re}from"./MultiOriginJSONSupport-BZQTWpeF.js";import{l as ie,o as oe}from"./clientSideDefaults-H6zD17YE.js";import{v as se,Y as ae,z as ne,W as le,S as pe}from"./wfsUtils-D7Nrvpsz.js";import{d as de}from"./FeatureSet-DZOCMyA1.js";import{e as ue}from"./CustomParametersMixin-DKqLR8tC.js";import{p as ye}from"./FeatureEffectLayer-xcthoMRe.js";import{c as me}from"./FeatureReductionLayer-CENesjyy.js";import{u as ce}from"./OperationalLayer-CgleBBYh.js";import{c as fe}from"./OrderedLayer-CeeaGzzr.js";import{j as he}from"./PortalLayer-DaNsTDLt.js";import{f as ge}from"./TemporalLayer-C1KR7WBT.js";import{f as we,m as ve,c as Fe,b as be,y as xe,p as Oe,d as Se}from"./commonProperties-71l2LJ6s.js";import{s as Ie}from"./fieldProperties-QeW_-2Ss.js";import{C as Re}from"./LabelClass-DPzxJqvN.js";import{i as Te}from"./labelingInfo-B67D2ZxN.js";import{p as Ce}from"./popupUtils-Cu5Z_JS9.js";import"./diffUtils-D_LMLEpD.js";import"./FieldsIndex-j25pkYvJ.js";import"./UnknownTimeZone-81r46adS.js";import"./heatmapUtils-CpfvS1IE.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./geojson-D0Tx971m.js";import"./date-M6n_RqpC.js";import"./xmlUtils-CtUoQO7q.js";import"./FeatureEffect-DsB_OIRS.js";import"./FeatureFilter-x-ktONiu.js";import"./FeatureReductionSelection-CsTr2Kpw.js";import"./featureLayerUtils-pwhGpgI4.js";import"./featureQueryAll-Dvpwrv0X.js";import"./AttachmentQuery-B5Jh59Bx.js";import"./RelationshipQuery-QRZ1tsX4.js";import"./MD5-C9MwAd2G.js";import"./portalItemUtils-JWUEQXnE.js";import"./TimeInfo-Cqort3EX.js";let d=class extends U{constructor(){super(...arguments),this._connection=null,this._workerHandler=null,this.capabilities=ie(!1,!1),this.type="wfs",this.refresh=J(async()=>{await this.load();const e={customParameters:this.layer.customParameters,maxRecordCount:this.layer.maxRecordCount,maxTotalRecordCount:this.layer.maxTotalRecordCount,maxPageCount:this.layer.maxPageCount},{extent:r}=await this._workerHandler.refresh(e);return r&&(this.sourceJSON.extent=r),{dataChanged:!0,updates:{extent:this.sourceJSON.extent}}})}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._startWorker({signal:r})),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null,this._workerHandler=null}async openPorts(){return await this.load(),this._connection.openPorts()}async queryFeatures(e,r={}){const s=await this.queryFeaturesJSON(e,r);return de.fromJSON(s)}async queryFeaturesJSON(e,r={}){return await this.load(r),this._workerHandler.queryFeatures(e?e.toJSON():void 0,r)}async queryFeatureCount(e,r={}){return await this.load(r),this._workerHandler.queryFeatureCount(e?e.toJSON():void 0,r)}async queryObjectIds(e,r={}){return await this.load(r),this._workerHandler.queryObjectIds(e?e.toJSON():void 0,r)}async queryExtent(e,r={}){await this.load(r);const s=await this._workerHandler.queryExtent(e?e.toJSON():void 0,r);return{count:s.count,extent:C.fromJSON(s.extent)}}async querySnapping(e,r={}){return await this.load(r),this._workerHandler.querySnapping(e,r)}async _createLoadOptions(e){var O,S;const{url:r,customParameters:s,name:n,namespaceUri:l,fields:a,geometryType:u,maxRecordCount:y,maxPageCount:g,maxTotalRecordCount:w,swapXY:v}=this.layer,c=this.layer.originOf("spatialReference")==="defaults"?void 0:this.layer.spatialReference;if(!r)throw new k("wfs-layer:missing-url","WFSLayer must be created with a url");this.wfsCapabilities||(this.wfsCapabilities=await se(r,{customParameters:s,...e}));const $=["fields","geometryType","name","namespaceUri","swapXY"].some(F=>this.layer[F]==null),p=$?await ae(this.wfsCapabilities,n,l,{spatialReference:c,customParameters:s,signal:e==null?void 0:e.signal}):{...ne(a??[]),geometryType:u,name:n,namespaceUri:l,spatialReference:c,swapXY:v},q=le(this.wfsCapabilities.readFeatureTypes(),p.name,p.namespaceUri),E=h.toJSON(p.geometryType),{operations:x}=this.wfsCapabilities,_=x.GetFeature.url,N=x.GetFeature.outputFormat;return{customParameters:s,featureType:q,fields:((O=p.fields)==null?void 0:O.map(F=>F.toJSON()))??[],geometryField:p.geometryField,geometryType:E,getFeatureUrl:_,getFeatureOutputFormat:N,maxRecordCount:y,maxPageCount:g,maxTotalRecordCount:w,objectIdField:p.objectIdField,spatialReference:(S=p.spatialReference)==null?void 0:S.toJSON(),swapXY:!!p.swapXY}}async _startWorker(e){const[r,s]=await W([this._createLoadOptions(e),Y("WFSSourceWorker",{...e,strategy:X("feature-layers-workers")?"dedicated":"local",registryTarget:this})]),n=r.error||s.error||null,l=s.value||null;if(n)throw l&&l.close(),n;const a=r.value;this._connection=s.value,this._workerHandler=this._connection.createInvokeProxy();const u=await this._workerHandler.load(a,e);for(const y of u.warnings)D.getLogger(this.layer).warn("#load()",`${y.message} (title: '${this.layer.title||"no title"}', id: '${this.layer.id??"no id"}')`,{warning:y});this.sourceJSON={dateFieldsTimeReference:{timeZoneIANA:H},extent:u.extent,fields:a.fields,geometryType:a.geometryType,objectIdField:a.objectIdField,geometryField:a.geometryField,drawingInfo:oe(a.geometryType),name:a.featureType.title,wfsInfo:{name:a.featureType.name,featureUrl:a.getFeatureUrl,maxFeatures:a.maxRecordCount,swapXY:a.swapXY,supportedSpatialReferences:a.featureType.supportedSpatialReferences,version:"2.0.0",wfsNamespace:a.featureType.namespaceUri}}}};t([i()],d.prototype,"capabilities",void 0),t([i({constructOnly:!0})],d.prototype,"layer",void 0),t([i()],d.prototype,"sourceJSON",void 0),t([i()],d.prototype,"type",void 0),t([i()],d.prototype,"wfsCapabilities",void 0),d=t([T("esri.layers.graphics.sources.WFSSource")],d);var b;const R=Ie();let o=b=class extends fe(ue(me(ye(L(ge(Q(G(ce(he(re(K))))))))))){static fromWFSLayerInfo(e){const{customParameters:r,fields:s,geometryField:n,geometryType:l,name:a,namespaceUri:u,objectIdField:y,spatialReference:g,swapXY:w,url:v,wfsCapabilities:c}=e;return new b({customParameters:r,fields:s,geometryField:n,geometryType:l,name:a,namespaceUri:u,objectIdField:y,spatialReference:g,swapXY:w,url:v,wfsCapabilities:c})}constructor(e){super(e),this.copyright=null,this.customParameters=null,this.dateFieldsTimeZone=null,this.definitionExpression=null,this.displayField=null,this.elevationInfo=null,this.featureUrl=void 0,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="WFS",this.maxRecordCount=3e3,this.maxPageCount=10,this.maxTotalRecordCount=2e5,this.mode=0,this.name=null,this.namespaceUri=null,this.outFields=null,this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new d({layer:this}),this.spatialReference=P.WGS84,this.spatialReferences=[4326],this.swapXY=void 0,this.title="WFS",this.type="wfs",this.url=null,this.version=void 0}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WFS"]},e).then(()=>this.source.load(e)).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo","spatialReference","name","namespaceUri"],"service"),I(this.renderer,this.fieldsIndex),V(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){var e;return(e=this.source)==null?void 0:e.capabilities}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}writeFields(e,r,s){const n=e.filter(l=>l.name!==pe);this.geometryField&&n.unshift(new j({name:this.geometryField,alias:this.geometryField,type:"geometry"})),z(s,n.map(l=>l.toJSON()),r)}get parsedUrl(){return M(this.url)}set renderer(e){I(e,this.fieldsIndex),this._set("renderer",e)}get wfsCapabilities(){var e;return(e=this.source)==null?void 0:e.wfsCapabilities}set wfsCapabilities(e){this.source&&(this.source.wfsCapabilities=e)}createPopupTemplate(e){return Ce(this,e)}createQuery(){const e=new m;e.returnGeometry=!0,e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:s}=this;return e.timeExtent=r!=null&&s!=null?s.offset(-r.value,r.unit):s||null,e}getFieldDomain(e,r){var s;return(s=this.getField(e))==null?void 0:s.domain}getField(e){var r;return(r=this.fieldsIndex)==null?void 0:r.get(e)}queryFeatures(e,r){return this.load().then(()=>this.source.queryFeatures(m.from(e)||this.createQuery(),r)).then(s=>{if(s!=null&&s.features)for(const n of s.features)n.layer=n.sourceLayer=this;return s})}queryObjectIds(e,r){return this.load().then(()=>this.source.queryObjectIds(m.from(e)||this.createQuery(),r))}queryFeatureCount(e,r){return this.load().then(()=>this.source.queryFeatureCount(m.from(e)||this.createQuery(),r))}queryExtent(e,r){return this.load().then(()=>this.source.queryExtent(m.from(e)||this.createQuery(),r))}async hasDataChanged(){try{const{dataChanged:e,updates:r}=await this.source.refresh();return r!=null&&this.read(r,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}};t([i({readOnly:!0})],o.prototype,"capabilities",null),t([i({type:String})],o.prototype,"copyright",void 0),t([i({readOnly:!0})],o.prototype,"createQueryVersion",null),t([i({json:{name:"wfsInfo.customParameters",write:{overridePolicy:e=>({enabled:!!(e&&Object.keys(e).length>0),ignoreOrigin:!0})}}})],o.prototype,"customParameters",void 0),t([i(Z("dateFieldsTimeReference"))],o.prototype,"dateFieldsTimeZone",void 0),t([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),t([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),t([i({type:String})],o.prototype,"displayField",void 0),t([i(we)],o.prototype,"elevationInfo",void 0),t([i({type:String,readOnly:!0,json:{name:"wfsInfo.featureUrl",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"featureUrl",void 0),t([i({type:[j],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),t([A("fields")],o.prototype,"writeFields",null),t([i(R.fieldsIndex)],o.prototype,"fieldsIndex",void 0),t([i({type:C,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),t([i()],o.prototype,"geometryField",void 0),t([i({type:String,json:{read:{source:"layerDefinition.geometryType",reader:h.read},write:{target:"layerDefinition.geometryType",writer:h.write,ignoreOrigin:!0},origins:{service:{read:h.read}}}})],o.prototype,"geometryType",void 0),t([i({type:String})],o.prototype,"id",void 0),t([i(ve)],o.prototype,"labelsVisible",void 0),t([i({type:[Re],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:Te},write:!0}})],o.prototype,"labelingInfo",void 0),t([i(Fe)],o.prototype,"legendEnabled",void 0),t([i({type:["show","hide"]})],o.prototype,"listMode",void 0),t([i({type:String})],o.prototype,"objectIdField",void 0),t([i({type:["WFS"]})],o.prototype,"operationalLayerType",void 0),t([i({type:f,json:{name:"wfsInfo.maxFeatures",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"maxRecordCount",void 0),t([i({type:f})],o.prototype,"maxPageCount",void 0),t([i({type:f})],o.prototype,"maxTotalRecordCount",void 0),t([i({type:[0],readOnly:!0,json:{origins:{"web-map":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],o.prototype,"mode",void 0),t([i({type:String,json:{name:"wfsInfo.name",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"name",void 0),t([i({type:String,json:{name:"wfsInfo.wfsNamespace",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"namespaceUri",void 0),t([i(be)],o.prototype,"opacity",void 0),t([i(R.outFields)],o.prototype,"outFields",void 0),t([i({readOnly:!0})],o.prototype,"parsedUrl",null),t([i(xe)],o.prototype,"popupEnabled",void 0),t([i({type:B,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),t([i({types:ee,json:{origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:te,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:{ignoreOrigin:!0}}})],o.prototype,"renderer",null),t([i(Oe)],o.prototype,"screenSizePerspectiveEnabled",void 0),t([i({readOnly:!0})],o.prototype,"source",void 0),t([i({type:P,json:{name:"layerDefinition.spatialReference",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"extent.spatialReference"}}}})],o.prototype,"spatialReference",void 0),t([i({readOnly:!0,type:[f],json:{name:"wfsInfo.supportedSpatialReferences",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"spatialReferences",void 0),t([i({type:Boolean,value:!1,json:{name:"wfsInfo.swapXY",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"swapXY",void 0),t([i({json:{write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"name"}}}})],o.prototype,"title",void 0),t([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),t([i(Se)],o.prototype,"url",void 0),t([i({type:String,readOnly:!0,json:{name:"wfsInfo.version",write:{ignoreOrigin:!0,isRequired:!0}}})],o.prototype,"version",void 0),t([i()],o.prototype,"wfsCapabilities",null),o=b=t([T("esri.layers.WFSLayer")],o);const yt=o;export{yt as default};