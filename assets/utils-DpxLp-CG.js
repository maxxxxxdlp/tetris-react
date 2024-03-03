import{cz as z,cA as D,ba as G,cB as A,cC as E,aU as L,cD as O,af as U,aD as V}from"./index-Bv0Hohk0.js";import{l as Z,u as j}from"./heatmapUtils-CpfvS1IE.js";import{Z as B}from"./utils-DuuxkxDB.js";import{c as T,B as P}from"./utils-CNh-hAjn.js";let m=null;const R=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function Y(t,e,o){return t.x<0?t.x+=e:t.x>o&&(t.x-=e),t}function H(t,e,o,s){const r=z(o)?D(o):null,c=r?Math.round((r.valid[1]-r.valid[0])/e.scale[0]):null;return t.map(i=>{const a=new G(i.geometry);return A(e,a,a,a.hasZ,a.hasM),i.geometry=r?Y(a,c??0,s[0]):a,i})}function J(t,e=18,o,s,r){const c=new Float64Array(s*r);e=Math.round(V(e));let i=Number.POSITIVE_INFINITY,a=Number.NEGATIVE_INFINITY;const M=j(o);for(const{geometry:h,attributes:N}of t){const{x:$,y:u}=h,I=Math.max(0,$-e),g=Math.max(0,u-e),F=Math.min(r,u+e),b=Math.min(s,$+e),p=+M(N);for(let f=g;f<F;f++)for(let d=I;d<b;d++){const y=f*s+d,w=Z(d-$,f-u,e)*p,l=c[y]+=w;i=Math.min(i,l),a=Math.max(a,l)}}return{min:i,max:a}}function _(t){const e=R.exec(t);if(!e)return null;const{hh:o,mm:s,ss:r,ms:c}=e.groups;return Number(o)*E.hours+Number(s)*E.minutes+Number(r)*E.seconds+Number(c||0)}async function K(t,e,o=!0){if(!e)return[];const{field:s,field2:r,field3:c,fieldDelimiter:i,fieldInfos:a,timeZone:M}=t,h=s&&(a==null?void 0:a.find(l=>l.name.toLowerCase()===s.toLowerCase())),N=!!h&&L(h),$=!!h&&B(h),u=t.valueExpression,I=t.normalizationType,g=t.normalizationField,F=t.normalizationTotal,b=[],p=t.viewInfoParams;let f=null,d=null;if(u){if(!m){const{arcadeUtils:l}=await O();m=l}m.hasGeometryOperations(u)&&await m.enableGeometryOperations(),f=m.createFunction(u),d=p?m.getViewInfo({viewingMode:p.viewingMode,scale:p.scale,spatialReference:new U(p.spatialReference)}):null}const y=t.fieldInfos,w=!(e[0]&&"declaredClass"in e[0]&&e[0].declaredClass==="esri.Graphic")&&y?{fields:y}:null;return e.forEach(l=>{const x=l.attributes;let n;if(u){const v=w?{...l,layer:w}:l,C=m.createExecContext(v,d,M);n=m.executeFunction(f,C)}else x&&(n=x[s],r?(n=`${T(n)}${i}${T(x[r])}`,c&&(n=`${n}${i}${T(x[c])}`)):typeof n=="string"&&o&&($?n=n?new Date(n).getTime():null:N&&(n=n?_(n):null)));if(I&&typeof n=="number"&&isFinite(n)){const v=x&&parseFloat(x[g]);n=P(n,I,v,F)}b.push(n)}),b}export{K as b,H as j,_ as w,J as x};
