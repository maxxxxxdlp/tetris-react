import{bq as c,a as f,q as u}from"./index-Bv0Hohk0.js";import{C as p}from"./LabelClass-DPzxJqvN.js";const l=()=>u.getLogger("esri.layers.support.labelingInfo"),b=/\[([^\[\]]+)\]/gi;function h(e,t,o){return e?e.map(n=>{var i;const r=new p;if(r.read(n,o),r.labelExpression){const s=t.fields||((i=t.layerDefinition)==null?void 0:i.fields)||this.fields;r.labelExpression=r.labelExpression.replaceAll(b,(d,a)=>`[${m(a,s)}]`)}return r}):null}function m(e,t){if(!t)return e;const o=e.toLowerCase();for(let n=0;n<t.length;n++){const r=t[n].name;if(r.toLowerCase()===o)return r}return e}const y={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null,esriGeometryEnvelope:null};function v(e,t){const o=c(e);return o.some(n=>g(n,t))?[]:o}function g(e,t){const o=e.labelPlacement,n=y[t];if(!e.symbol)return l().warn("No ILabelClass symbol specified."),!0;if(!n)return l().error(new f("labeling:unsupported-geometry-type",`Unable to create labels for layer, geometry type '${t}' is not supported`)),!0;if(!n.includes(o)){const r=n[0];o&&l().warn(`Found invalid label placement type ${o} for ${t}. Defaulting to ${r}`),e.labelPlacement=r}return!1}export{v as c,h as i};
