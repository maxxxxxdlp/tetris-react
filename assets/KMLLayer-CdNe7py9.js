import{bq as S,ad as J,e2 as z,b1 as A,U as W,cE as M,iG as x,iH as w,iI as k,iJ as D,af as I,c1 as H,eD as U,R as _,B as g,A as G,bY as j,bd as L,bo as V,V as O,e as i,y as l,iK as q,i as $,c as C,gt as B,eE as Y,eF as Q,eG as X,d7 as Z,dk as ee,d as te,b0 as se,l as re}from"./index-Bv0Hohk0.js";import{m as ie}from"./MultiOriginJSONSupport-BZQTWpeF.js";import{u as oe}from"./OperationalLayer-CgleBBYh.js";import{j as le}from"./PortalLayer-DaNsTDLt.js";import{d as ne}from"./commonProperties-71l2LJ6s.js";import"./jsonUtils-CvVppPa6.js";import"./FeatureSet-DZOCMyA1.js";import"./portalItemUtils-JWUEQXnE.js";import"./UniqueValueRenderer-C8B84zcF.js";import"./diffUtils-D_LMLEpD.js";import"./FieldsIndex-j25pkYvJ.js";import"./UnknownTimeZone-81r46adS.js";import"./heatmapUtils-CpfvS1IE.js";const ae={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function R(e){var d;const t=e.folders||[],s=t.slice(),r=new Map,n=new Map,c=new Map,p=new Map,b=new Map,f={esriGeometryPoint:n,esriGeometryPolyline:c,esriGeometryPolygon:p};(((d=e.featureCollection)==null?void 0:d.layers)||[]).forEach(o=>{const v=S(o);v.featureSet.features=[];const h=o.featureSet.geometryType;r.set(h,v);const m=o.layerDefinition.objectIdField;h==="esriGeometryPoint"?P(n,m,o.featureSet.features):h==="esriGeometryPolyline"?P(c,m,o.featureSet.features):h==="esriGeometryPolygon"&&P(p,m,o.featureSet.features)}),e.groundOverlays&&e.groundOverlays.forEach(o=>{b.set(o.id,o)}),t.forEach(o=>{o.networkLinkIds.forEach(v=>{const h=ye(v,o.id,e.networkLinks);h&&s.push(h)})}),s.forEach(o=>{var v;if(o.featureInfos){o.points=S(r.get("esriGeometryPoint")),o.polylines=S(r.get("esriGeometryPolyline")),o.polygons=S(r.get("esriGeometryPolygon")),o.mapImages=[];for(const h of o.featureInfos)switch(h.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const m=f[h.type].get(h.id);m&&((v=o[ae[h.type]])==null||v.featureSet.features.push(m));break}case"GroundOverlay":{const m=b.get(h.id);m&&o.mapImages.push(m);break}}o.fullExtent=F([o])}});const u=F(s);return{folders:t,sublayers:s,extent:u}}function T(e,t,s,r){var p;const n=(p=J)==null?void 0:p.findCredential(e);e=z(e,{token:n==null?void 0:n.token});const c=A.kmlServiceUrl;return W(c,{query:{url:e,model:"simple",folders:"",refresh:s!==0||void 0,outSR:JSON.stringify(t)},responseType:"json",signal:r})}function K(e,t,s=null,r=[]){const n=[],c={},p=t.sublayers,b=new Set(t.folders.map(f=>f.id));return p.forEach(f=>{var d;const u=new e;if(s?u.read(f,s):u.read(f),r.length&&b.has(u.id)&&(u.visible=r.includes(u.id)),c[f.id]=u,f.parentFolderId!=null&&f.parentFolderId!==-1){const o=c[f.parentFolderId];o.sublayers||(o.sublayers=[]),(d=o.sublayers)==null||d.unshift(u)}else n.unshift(u)}),n}function P(e,t,s){s.forEach(r=>{e.set(r.attributes[t],r)})}function ue(e,t){let s;return t.some(r=>r.id===e&&(s=r,!0)),s}function ye(e,t,s){const r=ue(e,s);return r&&(r.parentFolderId=t,r.networkLink=r),r}function F(e){var r,n,c,p,b,f;const t=M(x),s=M(x);for(const u of e){if((n=(r=u.polygons)==null?void 0:r.featureSet)!=null&&n.features)for(const d of u.polygons.featureSet.features)w(t,d.geometry),k(s,t);if((p=(c=u.polylines)==null?void 0:c.featureSet)!=null&&p.features)for(const d of u.polylines.featureSet.features)w(t,d.geometry),k(s,t);if((f=(b=u.points)==null?void 0:b.featureSet)!=null&&f.features)for(const d of u.points.featureSet.features)w(t,d.geometry),k(s,t);if(u.mapImages)for(const d of u.mapImages)w(t,d.extent),k(s,t)}return D(s,x)?void 0:{xmin:s[0],ymin:s[1],zmin:s[2],xmax:s[3],ymax:s[4],zmax:s[5],spatialReference:I.WGS84}}var E;let y=E=class extends H.EventedMixin(U(B)){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.id=null,this.networkLink=null,this.parent=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.layer=null,this.addHandles([_(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},g),_(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},g),G(()=>this.sublayers,(t,s)=>{if(s)for(const r of s)r.layer=r.parent=null;if(t)for(const r of t)r.parent=this,r.layer=this.layer},g),G(()=>this.layer,t=>{if(this.sublayers)for(const s of this.sublayers)s.layer=t},g)])}initialize(){j(()=>this.networkLink).then(()=>j(()=>this.visible===!0)).then(()=>this.load())}load(e){var r;if(!this.networkLink||this.networkLink.viewFormat)return;const t=e!=null?e.signal:null,s=this._fetchService(((r=this._get("networkLink"))==null?void 0:r.href)??"",t).then(n=>{var b;const c=F(n.sublayers);this.fullExtent=L.fromJSON(c),this.sourceJSON=n;const p=V(O.ofType(E),K(E,n));this.sublayers?this.sublayers.addMany(p):this.sublayers=p,(b=this.layer)==null||b.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(s),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,t){return!!t.visibility}_fetchService(e,t){return T(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then(s=>R(s.data))}};i([l()],y.prototype,"description",void 0),i([l({type:L})],y.prototype,"fullExtent",void 0),i([l()],y.prototype,"id",void 0),i([l({readOnly:!0,value:null})],y.prototype,"networkLink",void 0),i([l({json:{write:{allowNull:!0}}})],y.prototype,"parent",void 0),i([l({type:O.ofType(y),json:{write:{allowNull:!0}}})],y.prototype,"sublayers",void 0),i([l({value:null,json:{read:{source:"name",reader:e=>q(e)}}})],y.prototype,"title",void 0),i([l({value:!0})],y.prototype,"visible",null),i([$("visible",["visibility"])],y.prototype,"readVisible",null),i([l()],y.prototype,"sourceJSON",void 0),i([l()],y.prototype,"layer",void 0),y=E=i([C("esri.layers.support.KMLSublayer")],y);const N=y,pe=["kml","xml"];let a=class extends Y(Q(X(oe(le(ie(re)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new Z({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.outSpatialReference=I.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([G(()=>this.sublayers,(e,t)=>{t&&t.forEach(s=>{s.parent=null,s.layer=null}),e&&e.forEach(s=>{s.parent=this,s.layer=this})},g),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}readSublayersFromItemOrWebMap(e,t){this._visibleFolders=t.visibleFolders}readSublayers(e,t,s){return K(N,t,s,this._visibleFolders)}writeSublayers(e,t){const s=[],r=e.toArray();for(;r.length;){const n=r[0];n.networkLink||(n.visible&&s.push(n.id),n.sublayers&&r.push(...n.sublayers.toArray())),r.shift()}t.visibleFolders=s}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?ee(this.url,pe)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,t=[],s=r=>{r.visible&&(t.push(r),r.sublayers&&r.sublayers.forEach(s))};return e&&e.forEach(s),t}get fullExtent(){return this._recomputeFullExtent()}load(e){const t=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(te).then(()=>this._fetchService(t))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const t=await Promise.resolve().then(()=>this.resourceInfo?{ssl:!1,data:this.resourceInfo}:T(this.url??"",this.outSpatialReference,this.refreshInterval,e)),s=R(t.data);s&&this.read(s,{origin:"service"})}_recomputeFullExtent(){let e=null;this.extent!=null&&(e=this.extent.clone());const t=s=>{if(s.sublayers)for(const r of s.sublayers.items)t(r),r.visible&&r.fullExtent&&(e!=null?e.union(r.fullExtent):e=r.fullExtent.clone())};return t(this),e}};i([l({readOnly:!0})],a.prototype,"allSublayers",void 0),i([l({type:I})],a.prototype,"outSpatialReference",void 0),i([l({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),i([l({readOnly:!0,json:{read:!1,write:!1}})],a.prototype,"legendEnabled",void 0),i([l({type:["show","hide","hide-children"]})],a.prototype,"listMode",void 0),i([l({type:["KML"]})],a.prototype,"operationalLayerType",void 0),i([l({})],a.prototype,"resourceInfo",void 0),i([l({type:O.ofType(N),json:{write:{ignoreOrigin:!0}}})],a.prototype,"sublayers",void 0),i([$(["web-map","portal-item"],"sublayers",["visibleFolders"])],a.prototype,"readSublayersFromItemOrWebMap",null),i([$("service","sublayers",["sublayers"])],a.prototype,"readSublayers",null),i([se("sublayers")],a.prototype,"writeSublayers",null),i([l({readOnly:!0,json:{read:!1}})],a.prototype,"type",void 0),i([l({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],a.prototype,"title",null),i([l(ne)],a.prototype,"url",void 0),i([l({readOnly:!0})],a.prototype,"visibleSublayers",null),i([l({type:L})],a.prototype,"extent",void 0),i([l()],a.prototype,"fullExtent",null),a=i([C("esri.layers.KMLLayer")],a);const Pe=a;export{Pe as default};
