import{r as l,m as d,n as u,p as o,q as p}from"./index-Bv0Hohk0.js";const m=()=>p.getLogger("esri.intl.substitute");function h(e,t,r={}){const{format:n={}}=r;return l(e,s=>b(s,t,n))}function b(e,t,r){let n,s;const a=e.indexOf(":");if(a===-1?n=e.trim():(n=e.slice(0,a).trim(),s=e.slice(a+1).trim()),!n)return"";const i=d(n,t);if(i==null)return"";const f=(s?r==null?void 0:r[s]:null)??(r==null?void 0:r[n]);return f?g(i,f):s?w(i,s):c(i)}function g(e,t){switch(t.type){case"date":return o(e,t.intlOptions);case"number":return u(e,t.intlOptions);default:return m().warn("missing format descriptor for key {key}"),c(e)}}function w(e,t){switch(t.toLowerCase()){case"dateformat":return o(e);case"numberformat":return u(e);default:return m().warn(`inline format is unsupported since 4.12: ${t}`),/^(dateformat|datestring)/i.test(t)?o(e):/^numberformat/i.test(t)?u(e):c(e)}}function c(e){switch(typeof e){case"string":return e;case"number":return u(e);case"boolean":return""+e;default:return e instanceof Date?o(e):""}}export{h as s};
