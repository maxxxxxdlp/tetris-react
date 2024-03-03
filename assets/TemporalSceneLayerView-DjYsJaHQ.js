import{e as l,y as c,c as h,q as u}from"./index-Bv0Hohk0.js";import{x as E}from"./WhereClause-DN7niXzF.js";import{L as g,D as x,Q as y}from"./I3SUtil-CS_iMtLE.js";import{t as F}from"./QueryEngine-DfAP_JpM.js";import{j as D}from"./commonProperties-71l2LJ6s.js";import{d as w}from"./FeatureFilter-x-ktONiu.js";const I="updating";function N(n){return n==="updating"?null:n}function S(n){return n==="updating"}const O=n=>{let r=class extends n{constructor(){super(...arguments),this._definitionExpressionErrors=0,this._maxDefinitionExpressionErrors=20,this.logError=t=>{this._definitionExpressionErrors<this._maxDefinitionExpressionErrors&&u.getLogger(this).error("Error while evaluating definitionExpression: "+t),this._definitionExpressionErrors++,this._definitionExpressionErrors===this._maxDefinitionExpressionErrors&&u.getLogger(this).error("Further errors are ignored")}}get parsedDefinitionExpression(){var t;if(!((t=this.i3slayer)!=null&&t.definitionExpression))return null;try{const e=E.create(this.i3slayer.definitionExpression,this.i3slayer.fieldsIndex);if(!e.isStandardized)return u.getLogger(this).error("definitionExpression is using non standard function"),null;const i=[],s=e.fieldNames;return g(s,this.i3slayer.fields,{missingFields:i}),i.length>0?(u.getLogger(this).error(`definitionExpression references unknown fields: ${i.join(", ")}`),null):(this._definitionExpressionErrors=0,e)}catch(e){return u.getLogger(this).error("Failed to parse definitionExpression: "+e),null}}get definitionExpressionFields(){return this.parsedDefinitionExpression?this.parsedDefinitionExpression.fieldNames:[]}_evaluateClause(t,e){try{return t.testFeature(e)}catch(i){return this.logError(i),!1}}_addDefinitionExpressionToQuery(t){if(!this.parsedDefinitionExpression)return t;const e=this.i3slayer.definitionExpression,i=t.clone();return i.where?i.where=`(${e}) AND (${i.where})`:i.where=e,i}};return l([c({readOnly:!0})],r.prototype,"parsedDefinitionExpression",null),l([c({readOnly:!0})],r.prototype,"definitionExpressionFields",null),r=l([h("esri.views.3d.layers.support.DefinitionExpressionSceneLayerView")],r),r},j=n=>{let r=class extends n{constructor(){super(...arguments),this.timeExtent=null}get mergedFilter(){var s;const{filter:t,timeExtent:e}=this;if(e==null)return t;const i=(t==null?void 0:t.clone())??new w;return e!=null&&(i.timeExtent=((s=i.timeExtent)==null?void 0:s.intersection(e))??e),i}getTimeFilterDependencies(){const{timeInfo:t}=this.i3slayer;if(t==null)return[];const{startField:e,endField:i}=t;return[e,i]}addTimeFilter(t,e){if(e==null)return;const{timeInfo:i}=this.i3slayer;if(i==null)return;const{startField:s,endField:o,useTime:a}=i;if(!a||s==null&&o==null)return;const d=i.toJSON(),p=e.toJSON();t.push((m,f)=>this._timeFilter(m,f,d,p))}_timeFilter(t,e,i,s){var f;const o=(f=e.attributeInfo)==null?void 0:f.attributeData;if(o==null)return;const{startTimeField:a,endTimeField:d}=i;if(a!=null&&o[a]==null||d!=null&&o[d]==null)return;const p=F(i,s,new _(o));if(p==null)return;const{featureIds:m}=e;x(t,m,p)}};return l([c(D)],r.prototype,"timeExtent",void 0),l([c()],r.prototype,"mergedFilter",null),r=l([h("esri.views.3d.layers.support.TemporalSceneLayerView")],r),r};class _{constructor(r){this.attributeData=r}getAttribute(r,t){return y(this.attributeData[t],r)}getAttributeAsTimestamp(r,t){const e=this.getAttribute(r,t);return typeof e=="string"?new Date(e).getTime():typeof e=="number"||e==null?e:null}}export{N as a,S as b,I as n,O as t,j as u};
