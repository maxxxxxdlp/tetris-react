import{a as n,br as c,ff as u,fg as p,U as g}from"./index-Bv0Hohk0.js";async function w(a,s,e,i){if(!s)throw new n("post:missing-guid","guid for version is missing");const t=c(a),o=e.toJSON(),r=u(t.query,{query:p({...o,f:"json"}),...i,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const d=`${t.path}/versions/${s}/deleteForwardEdits`,{data:f}=await g(d,r);return f.success}export{w as deleteForwardEdits};