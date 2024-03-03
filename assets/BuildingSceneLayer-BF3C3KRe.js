import{e as t,y as i,c as a,bp as d,bq as y,V as j,c7 as D,mI as Q,cm as Y,gt as ee,c0 as te,q as b,U as re,eG as ie,d7 as se,a as q,b8 as oe,d as le,eN as ae,f4 as P,f5 as ne,f6 as pe,i as V,af as ye,l as ue}from"./index-Bv0Hohk0.js";import{m as de}from"./MultiOriginJSONSupport-BZQTWpeF.js";import{_ as K}from"./BuildingComponentSublayer-D20R9pYM.js";import{d as c}from"./BuildingGroupSublayer-CAmO_Jyo.js";import{i as ce}from"./APIKeyMixin-0dcGhBjP.js";import{l as me}from"./ArcGISService-uQPwYVuT.js";import{e as he}from"./CustomParametersMixin-DKqLR8tC.js";import{u as fe}from"./OperationalLayer-CgleBBYh.js";import{j as ge}from"./PortalLayer-DaNsTDLt.js";import{L as ve,P as U}from"./SceneService-BtSnxDkz.js";import{s as be}from"./associatedFeatureServiceUtils-ClJUwXCV.js";import{v as Se,c as we,w as $e,f as xe}from"./commonProperties-71l2LJ6s.js";import"./UniqueValueRenderer-C8B84zcF.js";import"./diffUtils-D_LMLEpD.js";import"./jsonUtils-CvVppPa6.js";import"./FieldsIndex-j25pkYvJ.js";import"./UnknownTimeZone-81r46adS.js";import"./heatmapUtils-CpfvS1IE.js";import"./FeatureLayer-Bl4Oa2Ns.js";import"./FormTemplate-FSyxNdA8.js";import"./editsZScale-BIAQdbBN.js";import"./queryZScale-DalU9HM9.js";import"./FeatureSet-DZOCMyA1.js";import"./EditBusLayer-CAsf3J8a.js";import"./FeatureEffectLayer-xcthoMRe.js";import"./FeatureEffect-DsB_OIRS.js";import"./FeatureFilter-x-ktONiu.js";import"./FeatureLayerBase-DdVIldVS.js";import"./featureLayerUtils-pwhGpgI4.js";import"./featureQueryAll-Dvpwrv0X.js";import"./AttachmentQuery-B5Jh59Bx.js";import"./RelationshipQuery-QRZ1tsX4.js";import"./LayerFloorInfo-D_j1_8Sf.js";import"./serviceCapabilitiesUtils-JAuO7eFe.js";import"./FeatureReductionLayer-CENesjyy.js";import"./FeatureReductionSelection-CsTr2Kpw.js";import"./LabelClass-DPzxJqvN.js";import"./MD5-C9MwAd2G.js";import"./OrderedLayer-CeeaGzzr.js";import"./TemporalLayer-C1KR7WBT.js";import"./TimeInfo-Cqort3EX.js";import"./FeatureTemplate-BU0tvyV1.js";import"./FeatureType-BD0awc-y.js";import"./fieldProperties-QeW_-2Ss.js";import"./labelingInfo-B67D2ZxN.js";import"./versionUtils-C_5-kApp.js";import"./styleUtils-B6WLKgkA.js";import"./TopFeaturesQuery-DK9IN5Vy.js";import"./popupUtils-Cu5Z_JS9.js";import"./interfaces-CL2NbQte.js";import"./portalItemUtils-JWUEQXnE.js";import"./capabilities-CVH7PnKh.js";import"./I3SIndexInfo-C9hHhxPX.js";import"./I3SLayerDefinitions-mJYKJt0E.js";import"./I3SUtil-CS_iMtLE.js";import"./I3SBinaryReader-DZo_O6Xi.js";import"./popupUtils-D-6l6-mq.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./jsonContext-_jbLKix2.js";import"./resourceUtils-SWypRT5P.js";import"./resourceUtils-yTEArpxg.js";import"./saveAPIKeyUtils-BtwYHPDB.js";import"./saveUtils-QPZnc6es.js";let S=class extends d{constructor(){super(...arguments),this.type=null}};t([i({type:String,readOnly:!0,json:{write:!0}})],S.prototype,"type",void 0),S=t([a("esri.layers.support.BuildingFilterAuthoringInfo")],S);const G=S;var T;let h=T=class extends d{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new T({filterType:this.filterType,filterValues:y(this.filterValues)})}};t([i({type:String,json:{write:!0}})],h.prototype,"filterType",void 0),t([i({type:[String],json:{write:!0}})],h.prototype,"filterValues",void 0),h=T=t([a("esri.layers.support.BuildingFilterAuthoringInfoType")],h);const Oe=h;var F;const je=j.ofType(Oe);let w=F=class extends d{clone(){return new F({filterTypes:y(this.filterTypes)})}};t([i({type:je,json:{write:!0}})],w.prototype,"filterTypes",void 0),w=F=t([a("esri.layers.support.BuildingFilterAuthoringInfoBlock")],w);const Be=w;var _;const Ie=j.ofType(Be);let f=_=class extends G{constructor(){super(...arguments),this.type="checkbox"}clone(){return new _({filterBlocks:y(this.filterBlocks)})}};t([i({type:["checkbox"]})],f.prototype,"type",void 0),t([i({type:Ie,json:{write:!0}})],f.prototype,"filterBlocks",void 0),f=_=t([a("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],f);const C=f;let $=class extends d{};t([i({readOnly:!0,json:{read:!1}})],$.prototype,"type",void 0),$=t([a("esri.layers.support.BuildingFilterMode")],$);const B=$;var A;let x=A=class extends B{constructor(){super(...arguments),this.type="solid"}clone(){return new A}};t([i({type:["solid"],readOnly:!0,json:{write:!0}})],x.prototype,"type",void 0),x=A=t([a("esri.layers.support.BuildingFilterModeSolid")],x);const L=x;var k;let g=k=class extends B{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new k({edges:y(this.edges)})}};t([D({wireFrame:"wire-frame"})],g.prototype,"type",void 0),t([i(Q)],g.prototype,"edges",void 0),g=k=t([a("esri.layers.support.BuildingFilterModeWireFrame")],g);const H=g;var E;let O=E=class extends B{constructor(){super(...arguments),this.type="x-ray"}clone(){return new E}};t([i({type:["x-ray"],readOnly:!0,json:{write:!0}})],O.prototype,"type",void 0),O=E=t([a("esri.layers.support.BuildingFilterModeXRay")],O);const J=O;var N;const Te={nonNullable:!0,types:{key:"type",base:B,typeMap:{solid:L,"wire-frame":H,"x-ray":J}},json:{read:e=>{switch(e==null?void 0:e.type){case"solid":return L.fromJSON(e);case"wireFrame":return H.fromJSON(e);case"x-ray":return J.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let m=N=class extends d{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new L,this.title=""}clone(){return new N({filterExpression:this.filterExpression,filterMode:y(this.filterMode),title:this.title})}};t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"filterExpression",void 0),t([i(Te)],m.prototype,"filterMode",void 0),t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],m.prototype,"title",void 0),m=N=t([a("esri.layers.support.BuildingFilterBlock")],m);const Fe=m;var M;const _e=j.ofType(Fe);let u=M=class extends d{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=Y(),this.name=null}clone(){return new M({description:this.description,filterBlocks:y(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:y(this.filterAuthoringInfo)})}};t([i({type:String,json:{write:!0}})],u.prototype,"description",void 0),t([i({type:_e,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"filterBlocks",void 0),t([i({types:{key:"type",base:G,typeMap:{checkbox:C}},json:{read:e=>(e==null?void 0:e.type)==="checkbox"?C.fromJSON(e):null,write:!0}})],u.prototype,"filterAuthoringInfo",void 0),t([i({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"id",void 0),t([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],u.prototype,"name",void 0),u=M=t([a("esri.layers.support.BuildingFilter")],u);const Ae=u;let p=class extends d{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};t([i({type:String})],p.prototype,"fieldName",void 0),t([i({type:String})],p.prototype,"modelName",void 0),t([i({type:String})],p.prototype,"label",void 0),t([i({type:Number})],p.prototype,"min",void 0),t([i({type:Number})],p.prototype,"max",void 0),t([i({json:{read:e=>Array.isArray(e)&&(e.every(r=>typeof r=="string")||e.every(r=>typeof r=="number"))?e.slice():null}})],p.prototype,"mostFrequentValues",void 0),t([i({type:[Number]})],p.prototype,"subLayerIds",void 0),p=t([a("esri.layers.support.BuildingFieldStatistics")],p);let v=class extends ee.LoadableMixin(te(d)){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||this.loadStatus==="loading"?this._get("fields"):(b.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this._fetchService(r)),Promise.resolve(this)}async _fetchService(e){const r=(await re(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(r,{origin:"service"})}};t([i({constructOnly:!0,type:String})],v.prototype,"url",void 0),t([i({readOnly:!0,type:[p],json:{read:{source:"summary"}}})],v.prototype,"fields",null),v=t([a("esri.layers.support.BuildingSummaryStatistics")],v);const W=v,X=j.ofType(Ae),Z=y(c.sublayersProperty);var z;const I=(z=Z.json)==null?void 0:z.origins;I&&(I["web-scene"]={type:[K],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},I["portal-item"]={type:[K],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let s=class extends ve(me(fe(ge(ie(de(he(ce(ue)))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new se({getCollections:()=>[this.sublayers],getChildrenFunction:r=>r.type==="building-group"?r.sublayers:null}),this.sublayers=null,this._sublayerOverrides=null,this.filters=new X,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return typeof e=="string"?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,r,o){const l=c.readSublayers(e,r,o);return c.forEachSublayer(l,n=>n.layer=this),this._sublayerOverrides&&(this.applySublayerOverrides(l,this._sublayerOverrides),this._sublayerOverrides=null),l}applySublayerOverrides(e,{overrides:r,context:o}){c.forEachSublayer(e,l=>l.read(r.get(l.id),o))}readSublayerOverrides(e,r){var l;const o=new Map;for(const n of e)n!=null&&typeof n=="object"&&typeof n.id=="number"?o.set(n.id,n):(l=r.messages)==null||l.push(new q("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:n}));return{overrides:o,context:r}}writeSublayerOverrides(e,r,o){const l=[];c.forEachSublayer(this.sublayers,n=>{const R=n.write({},o);Object.keys(R).length>1&&l.push(R)}),l.length>0&&(r.sublayers=l)}writeUnappliedOverrides(e,r){r.sublayers=[],e.overrides.forEach(o=>{r.sublayers.push(y(o))})}write(e,r){return e=super.write(e,r),!r||r.origin!=="web-scene"&&r.origin!=="portal-item"||(this.sublayers?this.writeSublayerOverrides(this.sublayers,e,r):this._sublayerOverrides&&this.writeUnappliedOverrides(this._sublayerOverrides,e)),e}read(e,r){if(super.read(e,r),r&&(r.origin==="web-scene"||r.origin==="portal-item")&&e!=null&&Array.isArray(e.sublayers)){const o=this.readSublayerOverrides(e.sublayers,r);this.sublayers?this.applySublayerOverrides(this.sublayers,o):this._sublayerOverrides=o}}readSummaryStatistics(e,r){var o;if(typeof r.statisticsHRef=="string"){const l=oe((o=this.parsedUrl)==null?void 0:o.path,r.statisticsHRef);return new W({url:l})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const r=e!=null?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(le).then(()=>this._fetchService(r)).then(()=>this._fetchAssociatedFeatureService(r));return this.addResolvingPromise(o),Promise.resolve(this)}loadAll(){return ae(this,e=>{c.forEachSublayer(this.sublayers,r=>{r.type!=="building-group"&&e(r)}),this.summaryStatistics&&e(this.summaryStatistics)})}async saveAs(e,r){return this._debouncedSaveOperations(U.SAVE_AS,{...r,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(U.SAVE,e)}validateLayer(e){if(!e.layerType||e.layerType!=="Building")throw new q("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:r}=await be(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=r}catch(r){b.getLogger(this).warn("Associated feature service item could not be loaded",r)}}_validateElevationInfo(){const e=this.elevationInfo,r="Building scene layers";P(b.getLogger(this),ne(r,"absolute-height",e)),P(b.getLogger(this),pe(r,e))}};t([i({type:["BuildingSceneLayer"]})],s.prototype,"operationalLayerType",void 0),t([i({readOnly:!0})],s.prototype,"allSublayers",void 0),t([i(Z)],s.prototype,"sublayers",void 0),t([V("service","sublayers")],s.prototype,"readSublayers",null),t([i({type:X,nonNullable:!0,json:{write:!0}})],s.prototype,"filters",void 0),t([i({type:String,json:{write:!0}})],s.prototype,"activeFilterId",void 0),t([i({readOnly:!0,type:W})],s.prototype,"summaryStatistics",void 0),t([V("summaryStatistics",["statisticsHRef"])],s.prototype,"readSummaryStatistics",null),t([i({type:[String],json:{read:!1}})],s.prototype,"outFields",void 0),t([i(Se)],s.prototype,"fullExtent",void 0),t([i(we)],s.prototype,"legendEnabled",void 0),t([i({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),t([i($e(ye))],s.prototype,"spatialReference",void 0),t([i(xe)],s.prototype,"elevationInfo",null),t([i({json:{read:!1},readOnly:!0})],s.prototype,"type",void 0),t([i()],s.prototype,"associatedFeatureServiceItem",void 0),s=t([a("esri.layers.BuildingSceneLayer")],s);const Ct=s;export{Ct as default};