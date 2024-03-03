import{aW as _,dK as P,a as I,K as j,ar as R,q as V,dl as L,U as A,aP as b,aO as G,bS as M,cM as Q,h0 as Z,h1 as U,af as Y,dS as J,dT as K,dI as W,dk as B}from"./index-Bv0Hohk0.js";import{e as H,n as z}from"./date-M6n_RqpC.js";import{t as X}from"./json-Wa8cmqdu.js";import{m as ee}from"./FeatureStore-DfMqUozf.js";import{$ as te,x as ie}from"./QueryEngine-DfAP_JpM.js";import{a as ne}from"./number-BciFTi3o.js";import{i as re,o as se}from"./clientSideDefaults-H6zD17YE.js";import{Z as w}from"./FieldsIndex-j25pkYvJ.js";import"./BoundsStore-sO8GTsfn.js";import"./PooledRBush-1Fb0hpVC.js";import"./quickselect-BfFUODyN.js";import"./optimizedFeatureQueryEngineAdapter-DJZQbCrA.js";import"./WhereClause-DN7niXzF.js";import"./TimeOnly-B0m-iz0l.js";import"./UnknownTimeZone-81r46adS.js";import"./QueryEngineCapabilities-CTDe3LlQ.js";import"./utils-DpxLp-CG.js";import"./heatmapUtils-CpfvS1IE.js";import"./utils-DuuxkxDB.js";import"./utils-CNh-hAjn.js";import"./ClassBreaksDefinition-BI_2pPxM.js";const E=/^\s*"([\S\s]*)"\s*$/,S=/""/g,O=`
`,oe=[","," ",";","|","	"];function*$(r,t,e){let i=0;for(;i<=r.length;){const n=r.indexOf(t,i),s=r.substring(i,n>-1?n:void 0);i+=s.length+t.length,e&&!s.trim()||(yield s)}}function q(r){const t=r.includes(`\r
`)?`\r
`:O;return $(r,t,!0)}function C(r,t){return $(r,t,!1)}function ae(r,t,e){r=r.trim(),t=t==null?void 0:t.trim();const i=[],n=Array.from(new Set([e==null?void 0:e.delimiter,...oe])).filter(o=>o!=null);for(const o of n){const a=N(r,o).length,d=N(t,o).length??a;a>1&&i.push({weight:Math.min(a,d),delimiter:o})}const s=i.sort(({weight:o},{weight:a})=>a-o).map(({delimiter:o})=>o);for(const o of s){const a=le(k(r,o).names,e==null?void 0:e.longitudeField,e==null?void 0:e.latitudeField);if(a.longitudeFieldName&&a.latitudeFieldName)return{delimiter:o,locationInfo:a}}return{delimiter:s[0],locationInfo:null}}function*v(r,t,e,i=()=>Object.create(null)){const n=q(r);n.next();let s="",o="",a=0,d=i(),u=0;e:for(const h of n){const m=C(h,e);for(const y of m)if(s+=o+y,o="",a+=D(y),a%2==0){if(a>0){const g=E.exec(s);if(!g){d=i(),u=0,s="",a=0;continue e}d[t[u]]=g[1].replaceAll(S,'"'),u++}else d[t[u]]=s,u++;s="",a=0}else o=e;a===0?(yield d,d=i(),u=0):o=O}}function k(r,t){const e=N(r,t).filter(n=>n!=null),i=e.map(n=>_(n));for(let n=i.length-1;n>=0;n--)i[n]||(i.splice(n,1),e.splice(n,1));return{names:i,aliases:e}}function N(r,t){if(!(r!=null&&r.length))return[];const e=[];let i="",n="",s=0;const o=C(r,t);for(const a of o)if(i+=n+a,n="",s+=D(a),s%2==0){if(s>0){const d=E.exec(i);d&&e.push(d[1].replaceAll(S,'"'))}else e.push(i);i="",s=0}else n=t;return e}function D(r){let t=0,e=0;for(e=r.indexOf('"',e);e>=0;)t++,e=r.indexOf('"',e+1);return t}function le(r,t,e){var o,a;t=(o=_(t))==null?void 0:o.toLowerCase(),e=(a=_(e))==null?void 0:a.toLowerCase();const i=r.map(d=>d.toLowerCase()),n=t?r[i.indexOf(t)]:null,s=e?r[i.indexOf(e)]:null;return{longitudeFieldName:n||r[i.indexOf(fe.find(d=>i.includes(d)))],latitudeFieldName:s||r[i.indexOf(ue.find(d=>i.includes(d)))]}}function ce(r,t,e,i,n){const s=[],o=v(r,e,t),a=[];for(const d of o){if(a.length===10)break;a.push(d)}for(let d=0;d<e.length;d++){const u=e[d],h=i[d];if(u===n.longitudeFieldName||u===n.latitudeFieldName)s.push({name:u,type:"esriFieldTypeDouble",alias:h});else{let m;switch(de(a.map(y=>y[u]))){case"integer":m="esriFieldTypeInteger";break;case"double":m="esriFieldTypeDouble";break;case"date":m="esriFieldTypeDate";break;default:m="esriFieldTypeString"}s.push({name:u,type:m,alias:h,length:P(m)})}}return s}function de(r){if(!r.length)return"string";const t=/[^+\-.,0-9]/;return r.map(e=>{if(e!==""){if(!t.test(e)){let i=x(e);if(!isNaN(i))return/[.,]/.test(e)||!Number.isInteger(i)||i>214783647||i<-214783648?"double":"integer";if(e.includes("E")&&(i=Number(e),!Number.isNaN(i)||e.includes(",")&&(e=e.replace(",","."),i=Number(e),!Number.isNaN(i))))return"double"}return H(e)?"date":"string"}}).reduce((e,i)=>e===void 0?i:i===void 0?e:e===i?i:e==="string"||i==="string"?"string":e==="double"||i==="double"?"double":void 0)}const x=function(){const r=ne(),t=new RegExp("^"+r.regexp+"$"),e=new RegExp("["+r.group+"\\s\\xa0]","g"),i=r.factor;return n=>{const s=t.exec(n);if(r.factor=i,!s)return NaN;let o=s[1];if(!s[1]){if(!s[2])return NaN;o=s[2],r.factor*=-1}return o=o.replace(e,"").replace(r.decimal,"."),+o*r.factor}}(),ue=["lat","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],fe=["lon","lng","long","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"],me=se("esriGeometryPoint"),pe=["csv"],he=[0,0];class ye{constructor(t,e){this.x=t,this.y=e}}class Le{constructor(){this._queryEngine=null,this._snapshotFeatures=async t=>{const e=await this._fetch(t);return this._createFeatures(e)}}destroy(){var t;(t=this._queryEngine)==null||t.destroy(),this._queryEngine=null}async load(t,e={}){var d;this._loadOptions=t;const[i]=await Promise.all([this._fetch(e.signal),this._checkProjection((d=t==null?void 0:t.parsingOptions)==null?void 0:d.spatialReference)]),n=ge(i,t);this._locationInfo=n.locationInfo,this._delimiter=n.delimiter,this._queryEngine=this._createQueryEngine(n);const s=await this._createFeatures(i);this._queryEngine.featureStore.addMany(s);const{fullExtent:o,timeExtent:a}=await this._queryEngine.fetchRecomputedExtents();if(n.layerDefinition.extent=o,a){const{start:u,end:h}=a;n.layerDefinition.timeInfo.timeExtent=[u,h]}return n}async applyEdits(){throw new I("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(t,e.signal)}async queryFeatureCount(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(t,e.signal)}async queryObjectIds(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(t,e.signal)}async queryExtent(t={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(t,e.signal)}async querySnapping(t,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(t,e.signal)}async refresh(t){var n;this._loadOptions.customParameters=t,(n=this._snapshotTask)==null||n.abort(),this._snapshotTask=j(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),s&&this._queryEngine.featureStore.addMany(s)},s=>{this._queryEngine.featureStore.clear(),R(s)||V.getLogger("esri.layers.CSVLayer").error(new I("csv-layer:refresh","An error occurred during refresh",{error:s}))}),await this._waitSnapshotComplete();const{fullExtent:e,timeExtent:i}=await this._queryEngine.fetchRecomputedExtents();return{extent:e,timeExtent:i}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(t){const{url:e,customParameters:i}=this._loadOptions;if(!e)throw new I("csv-layer:invalid-source","url not defined");const n=L(e);return(await A(n.path,{query:{...n.query,...i},responseType:"text",signal:t})).data}_createQueryEngine(t){const{objectIdField:e,fields:i,extent:n,timeInfo:s}=t.layerDefinition,o=new ee({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new te({fieldsIndex:w.fromLayerJSON({fields:i,dateFieldsTimeReference:{timeZoneIANA:b}}),geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:s,objectIdField:e,spatialReference:n.spatialReference||{wkid:4326},cacheSpatialQueries:!0,featureStore:o})}async _createFeatures(t){const{latitudeFieldName:e,longitudeFieldName:i}=this._locationInfo,{objectIdField:n,fieldsIndex:s,spatialReference:o}=this._queryEngine;let a=[];const d=[],u=s.fields.filter(l=>l.name!==n).map(l=>l.name);let h=0;const m={};for(const l of s.fields)if(l.type!=="esriFieldTypeOID"&&l.type!=="esriFieldTypeGlobalID"){const p=G(l);p!==void 0&&(m[l.name]=p)}const y=v(t,u,this._delimiter,re(m,n));for(const l of y){const p=this._parseCoordinateValue(l[e]),F=this._parseCoordinateValue(l[i]);if(F!=null&&p!=null&&!isNaN(p)&&!isNaN(F)){l[e]=p,l[i]=F;for(const c in l)if(c!==e&&c!==i){if(s.isDateField(c))l[c]=z(l[c]);else if(s.isNumericField(c)){const f=x(l[c]);isNaN(f)?l[c]=null:l[c]=f}}l[n]=h,h++,a.push(new ye(F,p)),d.push(l)}}if(!M({wkid:4326},o))if(Q(o))for(const l of a)[l.x,l.y]=Z(l.x,l.y,he);else a=U(X,a,Y.WGS84,o,null,null);const g=[];for(let l=0;l<a.length;l++){const{x:p,y:F}=a[l],c=d[l];c[n]=l+1,g.push(new J(new K([],[p,F]),c,null,c[n]))}return g}_parseCoordinateValue(t){if(t==null||t==="")return null;let e=x(t);return(isNaN(e)||Math.abs(e)>181)&&(e=parseFloat(t)),e}async _checkProjection(t){try{await ie(W,t)}catch{throw new I("csv-layer:projection-not-supported","Projection not supported")}}}function ge(r,t){var l,p,F;const e=t.parsingOptions||{},i={delimiter:e.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:e.latitudeField,longitudeFieldName:e.longitudeField}},n=i.layerDefinition={name:B(t.url,pe)||"csv",dateFieldsTimeReference:{timeZoneIANA:b},drawingInfo:me,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:e.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:e.spatialReference||{wkid:4326}}},s=q(r),o=(l=s.next().value)==null?void 0:l.trim(),a=(p=s.next().value)==null?void 0:p.trim();if(!o)throw new I("csv-layer:empty-csv","CSV is empty",{csv:r});const{delimiter:d,locationInfo:u}=ae(o,a,e);if(!d)throw new I("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:o,secondLine:a,parsingOptions:e});if(!u)throw new I("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:o,secondLine:a,parsingOptions:e});i.locationInfo=u,i.delimiter=d;const{names:h,aliases:m}=k(o,d),y=ce(r,i.delimiter,h,m,i.locationInfo);if((F=e.fields)!=null&&F.length){const c=new w(e.fields);for(const f of y){const T=c.get(f.name);T&&Object.assign(f,T)}}if(!y.some(c=>c.type==="esriFieldTypeOID"&&(n.objectIdField=c.name,!0))){const c={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};n.objectIdField=c.name,y.unshift(c)}n.fields=y;const g=new w(n.fields);if(i.locationInfo&&(i.locationInfo.latitudeFieldName=g.get(i.locationInfo.latitudeFieldName).name,i.locationInfo.longitudeFieldName=g.get(i.locationInfo.longitudeFieldName).name),n.timeInfo){const c=n.timeInfo;if(c.startTimeField){const f=g.get(c.startTimeField);f?(c.startTimeField=f.name,f.type="esriFieldTypeDate"):c.startTimeField=null}if(c.endTimeField){const f=g.get(c.endTimeField);f?(c.endTimeField=f.name,f.type="esriFieldTypeDate"):c.endTimeField=null}if(c.trackIdField){const f=g.get(c.trackIdField);c.trackIdField=f?f.name:null}c.startTimeField||c.endTimeField||(n.timeInfo=null)}return i}export{Le as default};
