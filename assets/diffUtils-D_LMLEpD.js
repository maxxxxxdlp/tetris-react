import{V,az as D,S}from"./index-Bv0Hohk0.js";const k=new Set(["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"]);function d(e){return e instanceof S}function g(e){return e instanceof V?Object.keys(e.items):d(e)?D(e).keys():e?Object.keys(e):[]}function p(e,n){return e instanceof V?e.items[n]:e[n]}function O(e,n){return!(!Array.isArray(e)||!Array.isArray(n))&&e.length!==n.length}function c(e){return e?e.declaredClass:null}function j(e,n){var b;const t=e.diff;if(t&&typeof t=="function")return t(e,n);const l=g(e),i=g(n);if(l.length===0&&i.length===0)return;if(!l.length||!i.length||O(e,n))return{type:"complete",oldValue:e,newValue:n};const s=i.filter(o=>!l.includes(o)),w=l.filter(o=>!i.includes(o)),m=l.filter(o=>i.includes(o)&&p(e,o)!==p(n,o)).concat(s,w).sort(),h=c(e);if(h&&k.has(h)&&m.length)return{type:"complete",oldValue:e,newValue:n};let a;const A=d(e)&&d(n);for(const o of m){const r=p(e,o),f=p(n,o);let u;if((A||typeof r!="function"&&typeof f!="function")&&r!==f&&(r!=null||f!=null)){if(t&&t[o]&&typeof t[o]=="function")u=(b=t[o])==null?void 0:b.call(t,r,f);else if(r instanceof Date&&f instanceof Date){if(r.getTime()===f.getTime())continue;u={type:"complete",oldValue:r,newValue:f}}else u=typeof r=="object"&&typeof f=="object"&&c(r)===c(f)?j(r,f):{type:"complete",oldValue:r,newValue:f};u!=null&&(a!=null?a.diff[o]=u:a={type:"partial",diff:{[o]:u}})}}return a}function T(e,n){return P(e,n)}function P(e,n){if(e==null)return!1;const t=n.split(".");let l=e;for(const i of t){if(l.type==="complete")return!0;if(l.type!=="partial")return!1;{const s=l.diff[i];if(!s)return!1;l=s}}return!0}function v(e,n){if(!e)return!1;if(e.type==="partial"){const t=Object.keys(e.diff);return t.length===1&&t[0]===n}return!1}function x(e,n){if(typeof e!="function"&&typeof n!="function"&&(e!=null||n!=null))return e==null||n==null||typeof e=="object"&&typeof n=="object"&&c(e)!==c(n)?{type:"complete",oldValue:e,newValue:n}:j(e,n)}function y(e){if(e==null)return!0;switch(e.type){case"complete":return!1;case"collection":{const n=e;for(const t of n.added)if(!y(t))return!1;for(const t of n.removed)if(!y(t))return!1;for(const t of n.changed)if(!y(t))return!1;return!0}case"partial":for(const n in e.diff)if(!y(e.diff[n]))return!1;return!0}}export{v as d,y as h,x as m,P as p,T as s};