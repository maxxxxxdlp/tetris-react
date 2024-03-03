import{q1 as Pe,q2 as ke,a6 as Te,q3 as Re,U as Oe,q4 as $e,L as Ie,e2 as oe,fa as Ne,k0 as Ve,d as qe,lP as Y,ar as Fe,es as re,q5 as De,q6 as We,q7 as He,oE as ne,oq as C,q8 as B,q9 as se,qa as Be,qb as le,qc as Ge,qd as ee,qe as Je,qf as Ke,a_ as Ye,g as je,cI as Xe,qg as Qe,ni as Ze,qh as et,qi as tt,qj as G,qk as z,it as $,iS as N,ql as it,qm as nt,qn as st,qo as Ce,qp as ce,mx as q,qq as at,qr as ot,qs as ue,oj as E,py as Le,oo as H,qt as Z,E as he,a as rt,qu as lt,qv as ct,bY as ut,A as ht,J as dt,M as ft,u as de,e as V,y as F,c as _t}from"./index-Bv0Hohk0.js";import{t as O}from"./Rect-BAnET0xx.js";import{n as pt}from"./pbf-lkSPrDyg.js";import{o as mt}from"./constants-D5zmR9t2.js";import{r as gt}from"./vec4f32-CjrfB-0a.js";import{l as fe}from"./StyleRepository-C8YFuEOG.js";import{n as yt}from"./LayerView3D-BHAdUlxy.js";import{c as vt}from"./TiledLayerView3D-D6_3wV1r.js";import{u as xt}from"./LayerView-xIua26SL.js";let wt=class{constructor(e,i,t){this._scale=e,this._shift=i,this._levelShift=t}getLevelRowColumn(e){const i=this.getLevelShift(e[0]),t=this._shift+i;return t?[e[0]-i,e[1]>>t,e[2]>>t]:e}getLevelShift(e){return Math.min(e,this._levelShift)}getOffset(e,i){let t=0,n=0;const s=this._shift+this.getLevelShift(e[0]);if(s){const a=(1<<s)-1,o=i/(this._scale*(1<<s-1));t=(e[2]&a)*o,n=(e[1]&a)*o}return[t,n]}getScale(e){return this._scale*(1<<this._shift+this.getLevelShift(e))}},j=class{constructor(e,i){this._width=0,this._height=0,this._free=[],this._width=e,this._height=i,this._free.push(new O(0,0,e,i))}get width(){return this._width}get height(){return this._height}allocate(e,i){if(e>this._width||i>this._height)return new O;let t=null,n=-1;for(let s=0;s<this._free.length;++s){const a=this._free[s];e<=a.width&&i<=a.height&&(t===null||a.y<=t.y&&a.x<=t.x)&&(t=a,n=s)}return t===null?new O:(this._free.splice(n,1),t.width<t.height?(t.width>e&&this._free.push(new O(t.x+e,t.y,t.width-e,i)),t.height>i&&this._free.push(new O(t.x,t.y+i,t.width,t.height-i))):(t.width>e&&this._free.push(new O(t.x+e,t.y,t.width-e,t.height)),t.height>i&&this._free.push(new O(t.x,t.y+i,e,t.height-i))),new O(t.x,t.y,e,i))}release(e){for(let i=0;i<this._free.length;++i){const t=this._free[i];if(t.y===e.y&&t.height===e.height&&t.x+t.width===e.x)t.width+=e.width;else if(t.x===e.x&&t.width===e.width&&t.y+t.height===e.y)t.height+=e.height;else if(e.y===t.y&&e.height===t.height&&e.x+e.width===t.x)t.x=e.x,t.width+=e.width;else{if(e.x!==t.x||e.width!==t.width||e.y+e.height!==t.y)continue;t.y=e.y,t.height+=e.height}this._free.splice(i,1),this.release(e)}this._free.push(e)}},_e=class{constructor(e,i,t){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,this.width=e,this.height=i,this._glyphSource=t,this._binPack=new j(e-4,i-4),this._glyphData.push(new Uint8Array(e*i)),this._dirties.push(!0),this._textures.push(void 0)}getGlyphItems(e,i){const t=[],n=this._glyphSource,s=new Set,a=1/256;for(const r of i){const l=Math.floor(r*a);s.add(l)}const o=[];return s.forEach(r=>{const l=e+r;if(this._rangePromises.has(l))o.push(this._rangePromises.get(l));else{const h=n.getRange(e,r).then(()=>{this._rangePromises.delete(l)},()=>{this._rangePromises.delete(l)});this._rangePromises.set(l,h),o.push(h)}}),Promise.all(o).then(()=>{let r=this._glyphIndex[e];r||(r={},this._glyphIndex[e]=r);for(const l of i){const h=r[l];if(h){t[l]={sdf:!0,rect:h.rect,metrics:h.metrics,page:h.page,code:l};continue}const f=n.getGlyph(e,l);if(!(f!=null&&f.metrics))continue;const d=f.metrics;let c;if(d.width===0)c=new O(0,0,0,0);else{const m=d.width+6,g=d.height+2*3;let p=m%4?4-m%4:4,w=g%4?4-g%4:4;p===1&&(p=5),w===1&&(w=5),c=this._binPack.allocate(m+p,g+w),c.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new j(this.width-4,this.height-4),c=this._binPack.allocate(m+p,g+w));const v=this._glyphData[this._currentPage],b=f.bitmap;let x,y;if(b)for(let S=0;S<g;S++){x=m*S,y=this.width*(c.y+S+1)+c.x;for(let P=0;P<m;P++)v[y+P+1]=b.at(x+P)}}r[l]={rect:c,metrics:d,tileIDs:null,page:this._currentPage},t[l]={sdf:!0,rect:c,metrics:d,page:this._currentPage,code:l},this._dirties[this._currentPage]=!0}return t})}removeGlyphs(e){for(const i in this._glyphIndex){const t=this._glyphIndex[i];if(!t)continue;let n;for(const s in t)if(n=t[s],n.tileIDs.delete(e),n.tileIDs.size===0){const a=this._glyphData[n.page],o=n.rect;let r,l;for(let h=0;h<o.height;h++)for(r=this.width*(o.y+h)+o.x,l=0;l<o.width;l++)a[r+l]=0;delete t[s],this._dirties[n.page]=!0}}}bind(e,i,t,n=0){if(!this._textures[t]){const a=new Pe;a.pixelFormat=ke.ALPHA,a.wrapMode=Te.CLAMP_TO_EDGE,a.width=this.width,a.height=this.height,this._textures[t]=new Re(e,a,new Uint8Array(this.width*this.height))}const s=this._textures[t];s.setSamplingMode(i),this._dirties[t]&&s.setData(this._glyphData[t]),e.bindTexture(s,n),this._dirties[t]=!1}destroy(){this.dispose()}dispose(){this._glyphData.length=0,this._binPack=null;for(const e of this._textures)e&&e.dispose();this._textures.length=0}},ie=class{constructor(e){if(this._metrics=[],!e)return void(this._allBitmaps=null);const i=new Map;let t=0;for(;e.next();)switch(e.tag()){case 1:{const a=e.getMessage();for(;a.next();)switch(a.tag()){case 3:{const o=a.getMessage();let r,l,h,f,d,c,_;for(;o.next();)switch(o.tag()){case 1:r=o.getUInt32();break;case 2:l=o.getBytes();break;case 3:h=o.getUInt32();break;case 4:f=o.getUInt32();break;case 5:d=o.getSInt32();break;case 6:c=o.getSInt32();break;case 7:_=o.getUInt32();break;default:o.skip()}if(o.release(),r){const m=(l==null?void 0:l.length)??0;this._metrics[r]={width:h,height:f,left:d,top:c,advance:_,startOffset:t,length:m},i.set(r,l),t+=m}break}default:a.skip()}a.release();break}default:e.skip()}const n=new Uint8Array(t),s=this._metrics;for(const[a,o]of i){const{startOffset:r,length:l}=s[a];if(o)for(let h=0;h<l;++h)n[r+h]=o[h]}this._allBitmaps=n}getMetrics(e){return this._metrics[e]}getBitmap(e){if(!this._allBitmaps)return;const i=this._metrics[e];if(i===void 0)return;const{startOffset:t,length:n}=i;return n!==0?new St(this._allBitmaps,t,n):void 0}},bt=class{constructor(){this._ranges=[]}get ranges(){return this._ranges}getRange(e){return this._ranges[e]}addRange(e,i){this._ranges[e]=i}},pe=class{constructor(e){this._glyphInfo={},this._baseURL=e}getRange(e,i){const t=this._getFontStack(e);if(t.getRange(i))return Promise.resolve();const n=256*i,s=n+255;if(this._baseURL){const a=this._baseURL.replace("{fontstack}",e).replace("{range}",n+"-"+s);return Oe(a,{responseType:"array-buffer"}).then(o=>{t.addRange(i,new ie(new pt(new Uint8Array(o.data),new DataView(o.data))))}).catch(()=>{t.addRange(i,new ie)})}return t.addRange(i,new ie),Promise.resolve()}getGlyph(e,i){const t=this._getFontStack(e);if(!t)return;const n=Math.floor(i/256),s=t.getRange(n);return s?{metrics:s.getMetrics(i),bitmap:s.getBitmap(i)}:void 0}_getFontStack(e){let i=this._glyphInfo[e];return i||(i=this._glyphInfo[e]=new bt),i}},St=class{constructor(e,i,t){this._array=e,this._start=i,this.length=t}at(e){return 0<=e&&e<this.length?this._array[this._start+e]:void 0}};function Mt(u,e){const i=e==="Butt",t=e==="Square",n=!i&&!t;u.length%2==1&&(u=[...u,...u]);const s=mt,a=2*s;let o=0;for(const p of u)o+=p;const r=Math.round(o*s),l=new Float32Array(r*a),h=.5*s;let f=0,d=0,c=.5,_=!0;for(const p of u){for(f=d,d+=p*s;c<=d;){let w=.5;for(;w<a;){const v=(w-.5)*r+c-.5,b=n?(w-s)*(w-s):Math.abs(w-s);l[v]=_?i?Math.max(Math.max(f+h-c,b),Math.max(c-d+h,b)):b:n?Math.min((c-f)*(c-f)+b,(c-d)*(c-d)+b):t?Math.min(Math.max(c-f,b),Math.max(d-c,b)):Math.min(Math.max(c-f+h,b),Math.max(d+h-c,b)),w++}c++}_=!_}const m=l.length,g=new Uint8Array(4*m);for(let p=0;p<m;++p){const w=(n?Math.sqrt(l[p]):l[p])/s;$e(w,g,4*p)}return[g,r,a]}const Pt="dasharray-";let me=class Ee{constructor(e,i,t=0){this._size=[],this._mosaicsData=[],this._textures=[],this._dirties=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects={},this.pixelRatio=1,(e<=0||i<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=e,this._pageHeight=i,t>0&&(this._maxItemSize=t),this._binPack=new j(e-4,i-4)}destroy(){this.dispose()}dispose(){this._binPack=null,this._mosaicsData.length=0,this._mosaicRects={};for(const e of this._textures)e&&e.dispose();this._textures.length=0}getWidth(e){return e>=this._size.length?-1:this._size[e][0]}getHeight(e){return e>=this._size.length?-1:this._size[e][1]}getPageSize(e){return e>=this._size.length?null:this._size[e]}setSpriteSource(e){if(this.dispose(),this.pixelRatio=e.devicePixelRatio,this._mosaicsData.length===0){this._binPack=new j(this._pageWidth-4,this._pageHeight-4);const i=Math.floor(this._pageWidth),t=Math.floor(this._pageHeight),n=new Uint32Array(i*t);this._mosaicsData[0]=n,this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0)}this._sprites=e}getSpriteItem(e,i=!1){let t,n,s=this._mosaicRects[e];if(s)return s;if(!this._sprites||this._sprites.loadStatus!=="loaded"||(e&&e.startsWith(Pt)?([t,n]=this._rasterizeDash(e),i=!0):t=this._sprites.getSpriteInfo(e),!(t!=null&&t.width)||!t.height||t.width<0||t.height<0))return null;const a=t.width,o=t.height,[r,l,h]=this._allocateImage(a,o);return r.width<=0?null:(this._copy(r,t,l,h,i,n),s={type:"sprite",rect:r,width:a,height:o,sdf:t.sdf,simplePattern:!1,rasterizationScale:t.pixelRatio,page:l},this._mosaicRects[e]=s,s)}getSpriteItems(e){const i={};for(const t of e)i[t.name]=this.getSpriteItem(t.name,t.repeat);return i}getMosaicItemPosition(e,i){const t=this.getSpriteItem(e,i),n=t&&t.rect;if(!n)return null;n.width=t.width,n.height=t.height;const s=t.width,a=t.height,o=2;return{tl:[n.x+o,n.y+o],br:[n.x+o+s,n.y+o+a],page:t.page}}bind(e,i,t=0,n=0){if(t>=this._size.length||t>=this._mosaicsData.length)return;if(!this._textures[t]){const a=new Pe;a.wrapMode=Te.CLAMP_TO_EDGE,a.width=this._size[t][0],a.height=this._size[t][1],this._textures[t]=new Re(e,a,new Uint8Array(this._mosaicsData[t].buffer))}const s=this._textures[t];s.setSamplingMode(i),this._dirties[t]&&s.setData(new Uint8Array(this._mosaicsData[t].buffer)),e.bindTexture(s,n),this._dirties[t]=!1}static _copyBits(e,i,t,n,s,a,o,r,l,h,f){let d=n*i+t,c=r*a+o;if(f){c-=a;for(let _=-1;_<=h;_++,d=((_+h)%h+n)*i+t,c+=a)for(let m=-1;m<=l;m++)s[c+m]=e[d+(m+l)%l]}else for(let _=0;_<h;_++){for(let m=0;m<l;m++)s[c+m]=e[d+m];d+=i,c+=a}}_copy(e,i,t,n,s,a){if(!this._sprites||this._sprites.loadStatus!=="loaded"||t>=this._mosaicsData.length)return;const o=new Uint32Array(a?a.buffer:this._sprites.image.buffer),r=this._mosaicsData[t];r&&o||console.error("Source or target images are uninitialized!");const l=2,h=a?i.width:this._sprites.width;Ee._copyBits(o,h,i.x,i.y,r,n[0],e.x+l,e.y+l,i.width,i.height,s),this._dirties[t]=!0}_allocateImage(e,i){e+=2,i+=2;const t=Math.max(e,i);if(this._maxItemSize&&this._maxItemSize<t){const o=new O(0,0,e,i);return this._mosaicsData.push(new Uint32Array(e*i)),this._dirties.push(!0),this._size.push([e,i]),this._textures.push(void 0),[o,this._mosaicsData.length-1,[e,i]]}let n=e%4?4-e%4:4,s=i%4?4-i%4:4;n===1&&(n=5),s===1&&(s=5);const a=this._binPack.allocate(e+n,i+s);return a.width<=0?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new j(this._pageWidth-4,this._pageHeight-4),this._allocateImage(e,i)):[a,this._currentPage,[this._pageWidth,this._pageHeight]]}_rasterizeDash(e){const i=/\[(.*?)\]/,t=e.match(i);if(!t)return null;const n=t[1].split(",").map(Number),s=e.slice(e.lastIndexOf("-")+1),[a,o,r]=Mt(n,s);return[{x:0,y:0,width:o,height:r,sdf:!0,pixelRatio:1},new Uint8Array(a.buffer)]}},Tt=class{constructor(e,i,t,n){this._layer=e,this._styleRepository=i,this.devicePixelRatio=t,this._sourceDataMaxLOD=n,this._spriteMosaic=null,this._glyphMosaic=null,this._connection=null,this._spriteSourceAbortController=null,this._startOptionsInputSignal=null,this._inputSignalEventListener=null}destroy(){var e,i,t;(e=this._connection)==null||e.close(),this._connection=null,this._styleRepository=null,this._layer=null,(i=this._spriteMosaic)==null||i.destroy(),this._spriteMosaic=null,this._glyphMosaic=null,this._spriteSourceAbortController=Ie(this._spriteSourceAbortController),this._spriteSourcePromise=null,this._inputSignalEventListener&&((t=this._startOptionsInputSignal)==null||t.removeEventListener("abort",this._inputSignalEventListener)),this._startOptionsInputSignal=null,this._inputSignalEventListener=null}get spriteMosaic(){return this._spriteSourcePromise.then(()=>this._spriteMosaic)}get glyphMosaic(){return this._glyphMosaic}async start(e){this._requestSprite(e);const i=this._layer.currentStyleInfo.glyphsUrl,t=new pe(i?oe(i,{...this._layer.customParameters,token:this._layer.apiKey}):null);this._glyphMosaic=new _e(1024,1024,t),this._broadcastPromise=Ne("WorkerTileHandler",{client:this,schedule:e.schedule,signal:e.signal}).then(n=>{var s;if(this._layer&&((s=this._connection)==null||s.close(),this._connection=n,this._layer&&!this._connection.closed)){const a=n.broadcast("setStyle",{style:this._layer.currentStyleInfo.style,sourceDataMaxLOD:this._sourceDataMaxLOD},e);Promise.all(a).catch(o=>Ve(o))}})}_requestSprite(e){var a,o;(a=this._spriteSourceAbortController)==null||a.abort();const i=new AbortController;this._spriteSourceAbortController=i;const t=e==null?void 0:e.signal;this._inputSignalEventListener&&((o=this._startOptionsInputSignal)==null||o.removeEventListener("abort",this._inputSignalEventListener)),this._startOptionsInputSignal=null,t&&(this._inputSignalEventListener=Rt(i),t.addEventListener("abort",this._inputSignalEventListener,{once:!0}));const{signal:n}=i,s={...e,signal:n};this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,s),this._spriteSourcePromise.then(r=>{qe(n),this._spriteMosaic=new me(1024,1024,250),this._spriteMosaic.setSpriteSource(r)})}async updateStyle(e){return await this._broadcastPromise,this._broadcastPromise=Promise.all(this._connection.broadcast("updateStyle",e)),this._broadcastPromise}setSpriteSource(e){const i=new me(1024,1024,250);return i.setSpriteSource(e),this._spriteMosaic=i,this._spriteSourcePromise=Promise.resolve(e),this._spriteSourceAbortController=null,i}async setStyle(e,i,t){await this._broadcastPromise,this._styleRepository=e,this._sourceDataMaxLOD=t,this._requestSprite();const n=new pe(this._layer.currentStyleInfo.glyphsUrl?oe(this._layer.currentStyleInfo.glyphsUrl,{...this._layer.customParameters,token:this._layer.apiKey}):null);return this._glyphMosaic=new _e(1024,1024,n),this._broadcastPromise=Promise.all(this._connection.broadcast("setStyle",{style:i,sourceDataMaxLOD:this._sourceDataMaxLOD})),this._broadcastPromise}async fetchTileData(e,i){const t=await this._getRefKeys(e,i);return this._getSourcesData(Object.keys(this._layer.sourceNameToSource),t,i)}async fetchTilePBFs(e){const i=Object.keys(this._layer.sourceNameToSource),t={},n=await this._getRefKeys(e,t),s=[],a=[];for(let o=0;o<n.length;o++)if(n[o].value==null||i[o]==null)a.push(null);else{const r=n[o].value,l=this._getTilePayload(r,i[o],t);l.then(h=>{s.push({...h,key:r})}),a.push(l)}return Promise.all(a).then(()=>s)}async parseTileData(e,i){const t=e&&e.data;if(!t)return null;const{sourceName2DataAndRefKey:n,transferList:s}=t;return Object.keys(n).length===0?null:this._broadcastPromise.then(()=>this._connection.invoke("createTileAndParse",{key:e.key.id,sourceName2DataAndRefKey:n,styleLayerUIDs:e.styleLayerUIDs},{...i,transferList:s}))}async getSprites(e){return await this._spriteSourcePromise,this._spriteMosaic.getSpriteItems(e)}getGlyphs(e){return this._glyphMosaic.getGlyphItems(e.font,e.codePoints)}async _getTilePayload(e,i,t){const n=Y.pool.acquire(e.id),s=this._layer.sourceNameToSource[i],{level:a,row:o,col:r}=n;Y.pool.release(n);try{return{protobuff:await s.requestTile(a,o,r,t),sourceName:i}}catch(l){if(Fe(l))throw l;return{protobuff:null,sourceName:i}}}async _getRefKeys(e,i){const t=this._layer.sourceNameToSource,n=new Array;for(const s in t){const a=t[s].getRefKey(e,i);n.push(a)}return re(n)}_getSourcesData(e,i,t){const n=[];for(let s=0;s<i.length;s++)if(i[s].value==null||e[s]==null)n.push(null);else{const a=i[s].value,o=this._getTilePayload(a,e[s],t);n.push(o)}return re(n).then(s=>{const a={},o=[];for(let r=0;r<s.length;r++){const l=s[r].value;if(l&&l.protobuff&&l.protobuff.byteLength>0){const h=i[r].value.id;a[l.sourceName]={refKey:h,protobuff:l.protobuff},o.push(l.protobuff)}}return{sourceName2DataAndRefKey:a,transferList:o}})}};function Rt(u){return()=>u.abort()}function It(u,e,i,t,n,s){const{iconRotationAlignment:a,textRotationAlignment:o,iconTranslate:r,iconTranslateAnchor:l,textTranslate:h,textTranslateAnchor:f}=t;let d=0;for(const c of u.colliders){const[_,m]=c.partIndex===0?r:h,g=c.partIndex===0?l:f,p=c.minLod<=s&&s<=c.maxLod;d+=p?0:1,c.enabled=p,c.xScreen=c.xTile*n[0]+c.yTile*n[3]+n[6],c.yScreen=c.xTile*n[1]+c.yTile*n[4]+n[7],g===B.MAP?(c.xScreen+=i*_-e*m,c.yScreen+=e*_+i*m):(c.xScreen+=_,c.yScreen+=m),C.VIEWPORT===(c.partIndex===0?a:o)?(c.dxScreen=c.dxPixels,c.dyScreen=c.dyPixels):(c.dxScreen=i*(c.dxPixels+c.width/2)-e*(c.dyPixels+c.height/2)-c.width/2,c.dyScreen=e*(c.dxPixels+c.width/2)+i*(c.dyPixels+c.height/2)-c.height/2)}u.colliders.length>0&&d===u.colliders.length&&(u.unique.show=!1)}let Dt=class{constructor(e,i,t,n,s,a){this._symbols=e,this._styleRepository=n,this._zoom=s,this._currentLayerCursor=0,this._currentSymbolCursor=0,this._styleProps=new Map,this._allNeededMatrices=new Map,this._gridIndex=new De(i,t,We),this._si=Math.sin(Math.PI*a/180),this._co=Math.cos(Math.PI*a/180);for(const o of e)for(const r of o.symbols)this._allNeededMatrices.has(r.tile)||this._allNeededMatrices.set(r.tile,He(r.tile.transforms.tileUnitsToPixels))}work(e){const i=this._gridIndex;function t(s){const a=s.xScreen+s.dxScreen,o=s.yScreen+s.dyScreen,r=a+s.width,l=o+s.height,[h,f,d,c]=i.getCellSpan(a,o,r,l);for(let _=f;_<=c;_++)for(let m=h;m<=d;m++){const g=i.cells[_][m];for(const p of g){const w=p.xScreen+p.dxScreen,v=p.yScreen+p.dyScreen,b=w+p.width,x=v+p.height;if(!(r<w||a>b||l<v||o>x))return!0}}return!1}const n=performance.now();for(;this._currentLayerCursor<this._symbols.length;this._currentLayerCursor++,this._currentSymbolCursor=0){const s=this._symbols[this._currentLayerCursor],a=this._getProperties(s.styleLayerUID);for(;this._currentSymbolCursor<s.symbols.length;this._currentSymbolCursor++){if(this._currentSymbolCursor%100==99&&performance.now()-n>e)return!1;const o=s.symbols[this._currentSymbolCursor];if(!o.unique.show)continue;It(o,this._si,this._co,a,this._allNeededMatrices.get(o.tile),this._zoom);const r=o.unique;if(!r.show)continue;const{iconAllowOverlap:l,iconIgnorePlacement:h,textAllowOverlap:f,textIgnorePlacement:d}=a;for(const c of o.colliders){if(!c.enabled)continue;const _=r.parts[c.partIndex];_.show&&!(c.partIndex?f:l)&&t(c)&&(c.hard?r.show=!1:_.show=!1)}if(r.show)for(const c of o.colliders){if(!c.enabled||(c.partIndex?d:h)||!r.parts[c.partIndex].show)continue;const _=c.xScreen+c.dxScreen,m=c.yScreen+c.dyScreen,g=_+c.width,p=m+c.height,[w,v,b,x]=this._gridIndex.getCellSpan(_,m,g,p);for(let y=v;y<=x;y++)for(let S=w;S<=b;S++)this._gridIndex.cells[y][S].push(c)}}}return!0}_getProperties(e){const i=this._styleProps.get(e);if(i)return i;const t=this._zoom,n=this._styleRepository.getStyleLayerByUID(e),s=n.getLayoutValue("symbol-placement",t)!==ne.POINT;let a=n.getLayoutValue("icon-rotation-alignment",t);a===C.AUTO&&(a=s?C.MAP:C.VIEWPORT);let o=n.getLayoutValue("text-rotation-alignment",t);o===C.AUTO&&(o=s?C.MAP:C.VIEWPORT);const r=n.getPaintValue("icon-translate",t),l=n.getPaintValue("icon-translate-anchor",t),h=n.getPaintValue("text-translate",t),f=n.getPaintValue("text-translate-anchor",t),d={iconAllowOverlap:n.getLayoutValue("icon-allow-overlap",t),iconIgnorePlacement:n.getLayoutValue("icon-ignore-placement",t),textAllowOverlap:n.getLayoutValue("text-allow-overlap",t),textIgnorePlacement:n.getLayoutValue("text-ignore-placement",t),iconRotationAlignment:a,textRotationAlignment:o,iconTranslateAnchor:l,iconTranslate:r,textTranslateAnchor:f,textTranslate:h};return this._styleProps.set(e,d),d}};function Ct(u,e){if(u.priority-e.priority)return u.priority-e.priority;const i=u.tile.key,t=e.tile.key;return i.world-t.world?i.world-t.world:i.level-t.level?i.level-t.level:i.row-t.row?i.row-t.row:i.col-t.col?i.col-t.col:u.xTile-e.xTile?u.xTile-e.xTile:u.yTile-e.yTile}let Lt=class{get running(){return this._running}constructor(e,i,t,n,s,a){this._visibleTiles=e,this._symbolRepository=i,this._createCollisionJob=t,this._assignTileSymbolsOpacity=n,this._symbolLayerSorter=s,this._isLayerVisible=a,this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}setScreenSize(e,i){this._screenWidth===e&&this._screenHeight===i||this.restart(),this._screenWidth=e,this._screenHeight=i}restart(){this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}continue(e){if(this._selectionJob||(this._selectionJob=this._createSelectionJob()),!this._selectionJobCompleted){const i=performance.now();if(!this._selectionJob.work(e)||(this._selectionJobCompleted=!0,(e=Math.max(0,e-(performance.now()-i)))===0))return!1}if(this._collisionJob||(this._collisionJob=this._createCollisionJob(this._selectionJob.sortedSymbols,this._screenWidth,this._screenHeight)),!this._collisionJobCompleted){const i=performance.now();if(!this._collisionJob.work(e)||(this._collisionJobCompleted=!0,(e=Math.max(0,e-(performance.now()-i)))===0))return!1}if(this._opacityJob||(this._opacityJob=this._createOpacityJob()),!this._opacityJobCompleted){const i=performance.now();if(!this._opacityJob.work(e)||(this._opacityJobCompleted=!0,(e=Math.max(0,e-(performance.now()-i)))===0))return!1}return this._running=!1,!0}_createSelectionJob(){const e=this._symbolRepository.uniqueSymbols;for(let r=0;r<e.length;r++){const l=e[r];for(let h=0;h<l.uniqueSymbols.length;h++){const f=l.uniqueSymbols[h];for(const d of f.tileSymbols)d.selectedForRendering=!1}}const i=[];let t=0,n=0;const s=this._isLayerVisible;function a(r){let l;const h=performance.now();for(;n<e.length;n++,t=0){const f=e[n],d=f.styleLayerUID;if(!s(d)){i[n]||(i[n]={styleLayerUID:d,symbols:[]});continue}i[n]=i[n]||{styleLayerUID:d,symbols:[]};const c=i[n];for(;t<f.uniqueSymbols.length;t++){if(l=f.uniqueSymbols[t],t%100==99&&performance.now()-h>r)return!1;let _=null,m=!1,g=!1;for(const p of l.tileSymbols)if(!g||!m){const w=p.tile;(!_||w.isCoverage||w.neededForCoverage&&!m)&&(_=p,(w.neededForCoverage||w.isCoverage)&&(g=!0),w.isCoverage&&(m=!0))}if(_.selectedForRendering=!0,g){c.symbols.push(_),l.show=!0;for(const p of l.parts)p.show=!0}else l.show=!1}}for(const f of i)f.symbols.sort(Ct);return!0}const o=this._symbolLayerSorter;return{work:a,get sortedSymbols(){return i.sort(o)}}}_createOpacityJob(){const e=this._assignTileSymbolsOpacity,i=this._visibleTiles;let t=0;function n(s,a){const o=s.symbols;for(const[r,l]of o)Et(l,a);e(s,a);for(const r of s.childrenTiles)n(r,a)}return{work(s){const a=performance.now();for(;t<i.length;t++){if(performance.now()-a>s)return!1;const o=i[t];o.parentTile==null&&n(o,performance.now())}return!0}}}};function Et(u,e){for(const i of u){const t=i.unique;for(const n of t.parts){const s=n.targetOpacity>.5?1:-1;n.startOpacity+=s*((e-n.startTime)/se),n.startOpacity=Math.min(Math.max(n.startOpacity,0),1),n.startTime=e,n.targetOpacity=t.show&&n.show?1:0}}}const Ut=32,At=8,zt=64;let kt=class{constructor(e,i,t){this.tileCoordRange=e,this._visibleTiles=i,this._createUnique=t,this._tiles=new Map,this._uniqueSymbolsReferences=new Map}get uniqueSymbols(){return this._uniqueSymbolLayerArray==null&&(this._uniqueSymbolLayerArray=this._createUniqueSymbolLayerArray()),this._uniqueSymbolLayerArray}get uniqueSymbolsReferences(){return this._uniqueSymbolsReferences}add(e,i){this._uniqueSymbolLayerArray=null;let t=this._tiles.get(e.id);t||(t={symbols:new Map},this._tiles.set(e.id,t));const n=new Map;if(i)for(const o of i)t.symbols.has(o)&&(n.set(o,t.symbols.get(o)),t.symbols.delete(o));else for(const[o,r]of e.layerData)t.symbols.has(o)&&(n.set(o,t.symbols.get(o)),t.symbols.delete(o));this._removeSymbols(n);const s=e.symbols,a=new Map;for(const[o,r]of s){let l=r.length;if(l>=Ut){let h=this.tileCoordRange;do h/=2,l/=4;while(l>At&&h>zt);const f=new De(this.tileCoordRange,this.tileCoordRange,h);a.set(o,{flat:r,index:f}),t.symbols.set(o,{flat:r,index:f});for(const d of r)f.getCell(d.xTile,d.yTile).push(d)}else a.set(o,{flat:r}),t.symbols.set(o,{flat:r})}this._addSymbols(e.key,s)}deleteStyleLayers(e){this._uniqueSymbolLayerArray=null;for(const[i,t]of this._tiles){const n=new Map;for(const s of e)t.symbols.has(s)&&(n.set(s,t.symbols.get(s)),t.symbols.delete(s));this._removeSymbols(n),t.symbols.size===0&&this._tiles.delete(i)}}removeTile(e){this._uniqueSymbolLayerArray=null;const i=this._tiles.get(e.id);if(!i)return;const t=new Map;for(const[n,s]of e.symbols)i.symbols.has(n)&&(t.set(n,i.symbols.get(n)),i.symbols.delete(n));this._removeSymbols(t),i.symbols.size===0&&this._tiles.delete(e.id)}querySymbols(e,i,t,n){const s=[],a=this.uniqueSymbols;for(const o of a){const r=o.styleLayerUID,l=o.uniqueSymbols;for(const h of l){const f=h.tileSymbols.find(d=>d.selectedForRendering);f&&Be(f,e,i*(window.devicePixelRatio||1),t)&&s.push({vtlSymbol:f,styleLayerUID:r,tileKey:f.tile.key})}}return s}_removeSymbols(e){for(const[i,{flat:t}]of e)for(const n of t){const s=n.unique,a=s.tileSymbols,o=a.length-1;for(let r=0;r<o;r++)if(a[r]===n){a[r]=a[o];break}if(a.length=o,o===0){const r=this._uniqueSymbolsReferences.get(i);r.delete(s),r.size===0&&this._uniqueSymbolsReferences.delete(i)}n.unique=null}}_addSymbols(e,i){if(i.size===0)return;const t=this._visibleTiles;for(const n of t)n.parentTile||n.key.world!==e.world||n.key.level===e.level&&!n.key.equals(e)||this._matchSymbols(n,e,i);for(const[n,s]of i)for(const a of s)if(a.unique==null){const o=this._createUnique();a.unique=o,o.tileSymbols.push(a);let r=this._uniqueSymbolsReferences.get(n);r||(r=new Set,this._uniqueSymbolsReferences.set(n,r)),r.add(o)}}_matchSymbols(e,i,t){if(e.key.level>i.level){const s=e.key.level-i.level;if(e.key.row>>s!==i.row||e.key.col>>s!==i.col)return}if(i.level>e.key.level){const s=i.level-e.key.level;if(i.row>>s!==e.key.row||i.col>>s!==e.key.col)return}if(i.equals(e.key)){for(const s of e.childrenTiles)this._matchSymbols(s,i,t);return}const n=new Map;for(const[s,a]of t){const o=[];for(const f of a){const d=le(this.tileCoordRange,f.xTile,i.level,i.col,e.key.level,e.key.col),c=le(this.tileCoordRange,f.yTile,i.level,i.row,e.key.level,e.key.row);d>=0&&d<this.tileCoordRange&&c>=0&&c<this.tileCoordRange&&o.push({symbol:f,xTransformed:d,yTransformed:c})}const r=[],l=e.key.level<i.level?1:1<<e.key.level-i.level,h=this._tiles.get(e.id).symbols.get(s);if(h){const f=h.flat;for(const d of o){let c,_=!1;const m=d.xTransformed,g=d.yTransformed;c=h.index!=null?h.index.getCell(m,g):f;const p=d.symbol,w=p.hash;for(const v of c)if(w===v.hash&&Math.abs(m-v.xTile)<=l&&Math.abs(g-v.yTile)<=l){const b=v.unique;p.unique=b,b.tileSymbols.push(p),_=!0;break}_||r.push(p)}}r.length>0&&n.set(s,r)}for(const s of e.childrenTiles)this._matchSymbols(s,i,n)}_createUniqueSymbolLayerArray(){const e=this._uniqueSymbolsReferences,i=new Array(e.size);let t,n=0;for(const[s,a]of e){const o=new Array(a.size);t=0;for(const r of a)o[t++]=r;i[n]={styleLayerUID:s,uniqueSymbols:o},n++}return i}};function Ot(u){const e=[],i=new kt(4096,e,()=>{const n=new Je;return n.show=!1,n.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),n.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),n}),t=new Lt(e,i,(n,s,a)=>new Dt(n,s,a,u.styleRepository,u.key.level,0),(n,s)=>{Ge(n,s,!1)},()=>0,n=>{const s=u.styleRepository.getStyleLayerByUID(n).getLayoutProperty("visibility");return!s||s.getValue()!==ee.NONE});e.push(u),i.add(u),t.setScreenSize(512,512),t.continue(1/0)}let $t=class extends Ke{constructor(){super(...arguments),this._fullCacheLodInfos=null,this._levelByScale={}}getTileParentId(e){const i=Y.pool.acquire(e),t=i.level===0?null:Y.getId(i.level-1,i.row>>1,i.col>>1,i.world);return Y.pool.release(i),t}getTileCoverage(e,i,t=!0,n){const s=super.getTileCoverage(e,i,t,n);if(!s)return s;const a=1<<s.lodInfo.level;return s.spans=s.spans.filter(o=>o.row>=0&&o.row<a),s}scaleToLevel(e){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[e])return this._levelByScale[e];{const i=this._fullCacheLodInfos;if(e>i[0].scale)return i[0].level;let t,n;for(let s=0;s<i.length-1;s++)if(n=i[s+1],e>n.scale)return t=i[s],t.level+(t.scale-e)/(t.scale-n.scale);return i[i.length-1].level}}_initializeFullCacheLODs(e){let i;if(e[0].level===0)i=e.map(t=>({level:t.level,resolution:t.resolution,scale:t.scale}));else{const t=this.tileInfo.size[0],n=this.tileInfo.spatialReference;i=Ye.create({size:t,spatialReference:n}).lods.map(s=>({level:s.level,resolution:s.resolution,scale:s.scale}))}for(let t=0;t<i.length;t++)this._levelByScale[i[t].scale]=i[t].level;this._fullCacheLodInfos=i}},ge=class extends Tt{constructor(e,i,t,n){super(e,i,t,e.tileInfo.lods.length-1),this._memCache=n,this._ongoingTileRequests=new Map,this._ongoingRequestToController=new Map,this._tileInfoView=new $t(e.tileInfo,e.fullExtent)}destroy(){super.destroy(),this._ongoingRequestToController.forEach(e=>e.abort()),this._ongoingRequestToController.clear(),this._ongoingTileRequests.clear()}async getVectorTile(e,i,t,n){const s=new Y(e,i,t,0);let a=this._memCache.get(s.id);if(a!=null)return a.retain(),a;const o=await this._getVectorTileData(s);if(je(n),!this._layer)return null;if(a=this._memCache.get(s.id),a!=null)return a.retain(),a;const r=this._layer.tileInfo.getTileBounds(Xe(),s),l=this._tileInfoView.getTileResolution(e);return a=new Qe(s,l,r[0],r[3],512,512,this._styleRepository,this._memCache),o?(a.setData(o),a.retain(),this._memCache.put(s.id,a,a.usedMemory,Ze)):a.setData(null),a.neededForCoverage=!0,a.transforms.tileUnitsToPixels=et(1/8,0,0,0,1/8,0,0,0,1),Ot(a),a}_getVectorTileData(e){const i=e.id;if(this._ongoingTileRequests.has(i))return this._ongoingTileRequests.get(i);const t=new AbortController,n={signal:t.signal},s=this._getParsedVectorTileData(e,n).then(a=>(this._ongoingTileRequests.delete(i),this._ongoingRequestToController.delete(i),a)).catch(()=>(this._ongoingTileRequests.delete(i),this._ongoingRequestToController.delete(i),null));return this._ongoingTileRequests.set(i,s),this._ongoingRequestToController.set(i,t),s}_getParsedVectorTileData(e,i){return this.fetchTileData(e,i).then(t=>this.parseTileData({key:e,data:t},i))}},X=class{constructor(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}prepareState(e,i){}draw(e,i,t){}drawMany(e,i,t){for(const n of i)n.visible&&this.draw(e,n,t)}},Nt=class extends X{constructor(){super(...arguments),this._color=gt(1,0,0,1),this._patternMatrix=tt(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),this._vao=null)}drawMany(e,i){const{context:t,painter:n,requestRender:s,allowDelayedRender:a}=e;this._loadWGLResources(e);const o=e.displayLevel,r=e.styleLayer,l=r.backgroundMaterial,h=n.vectorTilesMaterialManager,f=r.getPaintValue("background-color",o),d=r.getPaintValue("background-opacity",o),c=r.getPaintValue("background-pattern",o),_=c!==void 0,m=1|window.devicePixelRatio,g=e.spriteMosaic;let p,w;const v=m>Ce?2:1,b=this._programOptions;b.pattern=_;const x=h.getMaterialProgram(t,l,b);if(!a||s==null||x.compiled){if(t.bindVAO(this._vao),t.useProgram(x),_){const y=g.getMosaicItemPosition(c,!0);if(y!=null){const{tl:S,br:P,page:M}=y;p=P[0]-S[0],w=P[1]-S[1];const I=g.getPageSize(M);I!=null&&(g.bind(t,G.LINEAR,M,z),x.setUniform4f("u_tlbr",S[0],S[1],P[0],P[1]),x.setUniform2fv("u_mosaicSize",I),x.setUniform1i("u_texture",z))}x.setUniform1f("u_opacity",d)}else{const y=f[3]*d;this._color[0]=y*f[0],this._color[1]=y*f[1],this._color[2]=y*f[2],this._color[3]=y,x.setUniform4fv("u_color",this._color)}x.setUniform1f("u_depth",r.z||0);for(const y of i){if(x.setUniform1f("u_coord_range",y.rangeX),x.setUniformMatrix3fv("u_dvsMat3",y.transforms.displayViewScreenMat3),_){const S=Math.max(2**(Math.round(o)-y.key.level),1),P=v*y.width*S,M=P/ce(p),I=P/ce(w);this._patternMatrix[0]=M,this._patternMatrix[4]=I,x.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}t.setStencilFunction($.EQUAL,0,255),t.drawArrays(N.TRIANGLE_STRIP,0,4)}}else s()}_loadWGLResources(e){if(this._vao)return;const{context:i,styleLayer:t}=e,n=t.backgroundMaterial,s=new Int8Array([0,0,1,0,0,1,1,1]),a=it.createVertex(i,nt.STATIC_DRAW,s),o=new st(i,n.getAttributeLocations(),n.getLayoutInfo(),{geometry:a});this._vao=o}},Vt=class extends X{constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(e,i){const{context:t,displayLevel:n,requiredLevel:s,state:a,painter:o,spriteMosaic:r,styleLayerUID:l,requestRender:h,allowDelayedRender:f}=e;if(!i.some(x=>{var y;return((y=x.layerData.get(l))==null?void 0:y.circleIndexCount)??!1}))return;const d=e.styleLayer,c=d.circleMaterial,_=o.vectorTilesMaterialManager,m=1.2,g=d.getPaintValue("circle-translate",n),p=d.getPaintValue("circle-translate-anchor",n),w=this._programOptions,v=_.getMaterialProgram(t,c,w);if(f&&h!=null&&!v.compiled)return void h();t.useProgram(v),v.setUniformMatrix3fv("u_displayMat3",p===B.VIEWPORT?a.displayMat3:a.displayViewMat3),v.setUniform2fv("u_circleTranslation",g),v.setUniform1f("u_depth",d.z),v.setUniform1f("u_antialiasingWidth",m);let b=-1;for(const x of i){if(!x.layerData.has(l))continue;x.key.level!==b&&(b=x.key.level,c.setDataUniforms(v,n,d,b,r));const y=x.layerData.get(l);if(!y.circleIndexCount)continue;y.prepareForRendering(t);const S=y.vao;S!=null&&(t.bindVAO(S),v.setUniformMatrix3fv("u_dvsMat3",x.transforms.displayViewScreenMat3),s!==x.key.level?t.setStencilFunction($.EQUAL,x.stencilRef,255):t.setStencilFunction($.GREATER,255,255),t.drawElements(N.TRIANGLES,y.circleIndexCount,q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*y.circleIndexStart),x.triangleCount+=y.circleIndexCount/3)}}};const ye=1/65536;let qt=class extends X{constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(e,i){const{displayLevel:t,renderPass:n,spriteMosaic:s,styleLayerUID:a}=e;let o=!1;for(const v of i)if(v.layerData.has(a)){const b=v.layerData.get(a);if(b.fillIndexCount>0||b.outlineIndexCount>0){o=!0;break}}if(!o)return;const r=e.styleLayer,l=r.getPaintProperty("fill-pattern"),h=l!==void 0,f=h&&l.isDataDriven;let d;if(h&&!f){const v=l.getValue(t);d=s.getMosaicItemPosition(v,!0)}const c=!h&&r.getPaintValue("fill-antialias",t);let _=!0,m=1;if(!h){const v=r.getPaintProperty("fill-color"),b=r.getPaintProperty("fill-opacity");if(!(v!=null&&v.isDataDriven)&&!(b!=null&&b.isDataDriven)){const x=r.getPaintValue("fill-color",t);m=r.getPaintValue("fill-opacity",t)*x[3],m>=1&&(_=!1)}}if(_&&n==="opaque")return;const g=r.getPaintValue("fill-translate",t),p=r.getPaintValue("fill-translate-anchor",t);(_||n!=="translucent")&&this._drawFill(e,a,r,i,g,p,h,d,f);const w=!r.hasDataDrivenOutlineColor&&r.outlineUsesFillColor&&m<1;c&&n!=="opaque"&&!w&&this._drawOutline(e,a,r,i,g,p)}_drawFill(e,i,t,n,s,a,o,r,l){if(o&&!l&&r==null)return;const{context:h,displayLevel:f,state:d,painter:c,pixelRatio:_,spriteMosaic:m,requestRender:g,allowDelayedRender:p}=e,w=t.fillMaterial,v=c.vectorTilesMaterialManager,b=_>Ce?2:1,x=this._fillProgramOptions;x.pattern=o;const y=v.getMaterialProgram(h,w,x);if(p&&g!=null&&!y.compiled)return void g();if(h.useProgram(y),r!=null){const{page:P}=r,M=m.getPageSize(P);M!=null&&(m.bind(h,G.LINEAR,P,z),y.setUniform2fv("u_mosaicSize",M),y.setUniform1i("u_texture",z))}y.setUniformMatrix3fv("u_displayMat3",a===B.VIEWPORT?d.displayMat3:d.displayViewMat3),y.setUniform2fv("u_fillTranslation",s),y.setUniform1f("u_depth",t.z+ye);let S=-1;for(const P of n){if(!P.layerData.has(i))continue;P.key.level!==S&&(S=P.key.level,w.setDataUniforms(y,f,t,S,m));const M=P.layerData.get(i);if(!M.fillIndexCount)continue;M.prepareForRendering(h);const I=M.fillVAO;if(I!=null){if(h.bindVAO(I),y.setUniformMatrix3fv("u_dvsMat3",P.transforms.displayViewScreenMat3),h.setStencilFunction($.EQUAL,P.stencilRef,255),o){const T=Math.max(2**(Math.round(f)-P.key.level),1),D=P.rangeX/(b*P.width*T);y.setUniform1f("u_patternFactor",D)}if(l){const T=M.patternMap;if(!T)continue;for(const[D,L]of T){const W=m.getPageSize(D);W!=null&&(m.bind(h,G.LINEAR,D,z),y.setUniform2fv("u_mosaicSize",W),y.setUniform1i("u_texture",z),h.drawElements(N.TRIANGLES,L[1],q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*L[0]))}}else h.drawElements(N.TRIANGLES,M.fillIndexCount,q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*M.fillIndexStart);P.triangleCount+=M.fillIndexCount/3}}}_drawOutline(e,i,t,n,s,a){const{context:o,displayLevel:r,state:l,painter:h,pixelRatio:f,spriteMosaic:d,requestRender:c,allowDelayedRender:_}=e,m=t.outlineMaterial,g=h.vectorTilesMaterialManager,p=.75/f,w=this._outlineProgramOptions,v=g.getMaterialProgram(o,m,w);if(_&&c!=null&&!v.compiled)return void c();o.useProgram(v),v.setUniformMatrix3fv("u_displayMat3",a===B.VIEWPORT?l.displayMat3:l.displayViewMat3),v.setUniform2fv("u_fillTranslation",s),v.setUniform1f("u_depth",t.z+ye),v.setUniform1f("u_outline_width",p);let b=-1;for(const x of n){if(!x.layerData.has(i))continue;x.key.level!==b&&(b=x.key.level,m.setDataUniforms(v,r,t,b,d));const y=x.layerData.get(i);if(y.prepareForRendering(o),!y.outlineIndexCount)continue;const S=y.outlineVAO;S!=null&&(o.bindVAO(S),v.setUniformMatrix3fv("u_dvsMat3",x.transforms.displayViewScreenMat3),o.setStencilFunction($.EQUAL,x.stencilRef,255),o.drawElements(N.TRIANGLES,y.outlineIndexCount,q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*y.outlineIndexStart),x.triangleCount+=y.outlineIndexCount/3)}}},Ft=class extends X{constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(e,i){const{context:t,displayLevel:n,state:s,painter:a,pixelRatio:o,spriteMosaic:r,styleLayerUID:l,requestRender:h,allowDelayedRender:f}=e;if(!i.some(T=>{var D;return((D=T.layerData.get(l))==null?void 0:D.lineIndexCount)??!1}))return;const d=e.styleLayer,c=d.lineMaterial,_=a.vectorTilesMaterialManager,m=d.getPaintValue("line-translate",n),g=d.getPaintValue("line-translate-anchor",n),p=d.getPaintProperty("line-pattern"),w=p!==void 0,v=w&&p.isDataDriven;let b,x;if(w&&!v){const T=p.getValue(n);b=r.getMosaicItemPosition(T)}let y=!1;if(!w){const T=d.getPaintProperty("line-dasharray");if(x=T!==void 0,y=x&&T.isDataDriven,x&&!y){const D=T.getValue(n),L=d.getDashKey(D,d.getLayoutValue("line-cap",n));b=r.getMosaicItemPosition(L)}}const S=1/o,P=this._programOptions;P.pattern=w,P.sdf=x;const M=_.getMaterialProgram(t,c,P);if(f&&h!=null&&!M.compiled)return void h();if(t.useProgram(M),M.setUniformMatrix3fv("u_displayViewMat3",s.displayViewMat3),M.setUniformMatrix3fv("u_displayMat3",g===B.VIEWPORT?s.displayMat3:s.displayViewMat3),M.setUniform2fv("u_lineTranslation",m),M.setUniform1f("u_depth",d.z),M.setUniform1f("u_antialiasing",S),b&&b!=null){const{page:T}=b,D=r.getPageSize(T);D!=null&&(r.bind(t,G.LINEAR,T,z),M.setUniform2fv("u_mosaicSize",D),M.setUniform1i("u_texture",z))}let I=-1;for(const T of i){if(!T.layerData.has(l))continue;T.key.level!==I&&(I=T.key.level,c.setDataUniforms(M,n,d,I,r));const D=2**(n-I)/o;M.setUniform1f("u_zoomFactor",D);const L=T.layerData.get(l);if(!L.lineIndexCount)continue;L.prepareForRendering(t);const W=L.vao;if(W!=null){if(t.bindVAO(W),M.setUniformMatrix3fv("u_dvsMat3",T.transforms.displayViewScreenMat3),t.setStencilFunction($.EQUAL,T.stencilRef,255),v||y){const Q=L.patternMap;if(!Q)continue;for(const[R,J]of Q){const A=r.getPageSize(R);A!=null&&(r.bind(t,G.LINEAR,R,z),M.setUniform2fv("u_mosaicSize",A),M.setUniform1i("u_texture",z),t.drawElements(N.TRIANGLES,J[1],q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*J[0]))}}else t.drawElements(N.TRIANGLES,L.lineIndexCount,q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*L.lineIndexStart);T.triangleCount+=L.lineIndexCount/3}}}};const Wt=256/360;function Ht(u,e){return(u%=e)>=0?u:u+e}function ve(u){return Ht(u*Wt,256)}const Bt=1/65536;let Gt=class extends X{constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=at()}dispose(){}drawMany(e,i){const t=e.styleLayer;this._drawIcons(e,t,i),this._drawText(e,t,i)}_drawIcons(e,i,t){const{context:n,displayLevel:s,painter:a,spriteMosaic:o,state:r,styleLayerUID:l,requestRender:h,allowDelayedRender:f}=e,d=i.iconMaterial,c=a.vectorTilesMaterialManager;let _,m=!1;for(const M of t)if(M.layerData.has(l)&&(_=M.layerData.get(l),_.iconPerPageElementsMap.size>0)){m=!0;break}if(!m)return;const g=i.getPaintValue("icon-translate",s),p=i.getPaintValue("icon-translate-anchor",s);let w=i.getLayoutValue("icon-rotation-alignment",s);w===C.AUTO&&(w=i.getLayoutValue("symbol-placement",s)===ne.POINT?C.VIEWPORT:C.MAP);const v=w===C.MAP,b=i.getLayoutValue("icon-keep-upright",s)&&v,x=_.isIconSDF,y=this._iconProgramOptions;y.sdf=x;const S=c.getMaterialProgram(n,d,y);if(f&&h!=null&&!S.compiled)return void h();n.useProgram(S),S.setUniformMatrix3fv("u_displayViewMat3",w===C.MAP?r.displayViewMat3:r.displayMat3),S.setUniformMatrix3fv("u_displayMat3",p===B.VIEWPORT?r.displayMat3:r.displayViewMat3),S.setUniform2fv("u_iconTranslation",g),S.setUniform1f("u_depth",i.z),S.setUniform1f("u_mapRotation",ve(r.rotation)),S.setUniform1f("u_keepUpright",b?1:0),S.setUniform1f("u_level",10*s),S.setUniform1i("u_texture",z),S.setUniform1f("u_fadeDuration",se/1e3);let P=-1;for(const M of t){if(!M.layerData.has(l)||(M.key.level!==P&&(P=M.key.level,d.setDataUniforms(S,s,i,P,o)),_=M.layerData.get(l),_.iconPerPageElementsMap.size===0))continue;_.prepareForRendering(n),_.updateOpacityInfo();const I=_.iconVAO;if(I!=null){n.bindVAO(I),S.setUniformMatrix3fv("u_dvsMat3",M.transforms.displayViewScreenMat3),S.setUniform1f("u_time",(performance.now()-_.lastOpacityUpdate)/1e3);for(const[T,D]of _.iconPerPageElementsMap)this._renderIconRange(e,S,D,T,M)}}}_renderIconRange(e,i,t,n,s){const{context:a,spriteMosaic:o}=e;this._spritesTextureSize[0]=o.getWidth(n)/4,this._spritesTextureSize[1]=o.getHeight(n)/4,i.setUniform2fv("u_mosaicSize",this._spritesTextureSize),o.bind(a,G.LINEAR,n,z),this._setStencilState(e,s),a.drawElements(N.TRIANGLES,t[1],q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),s.triangleCount+=t[1]/3}_drawText(e,i,t){const{context:n,displayLevel:s,glyphMosaic:a,painter:o,pixelRatio:r,spriteMosaic:l,state:h,styleLayerUID:f,requestRender:d,allowDelayedRender:c}=e,_=i.textMaterial,m=o.vectorTilesMaterialManager;let g,p=!1;for(const A of t)if(A.layerData.has(f)&&(g=A.layerData.get(f),g.glyphPerPageElementsMap.size>0)){p=!0;break}if(!p)return;const w=i.getPaintProperty("text-opacity");if(w&&!w.isDataDriven&&w.getValue(s)===0)return;const v=i.getPaintProperty("text-color"),b=!v||v.isDataDriven||v.getValue(s)[3]>0,x=i.getPaintProperty("text-halo-width"),y=i.getPaintProperty("text-halo-color"),S=(!x||x.isDataDriven||x.getValue(s)>0)&&(!y||y.isDataDriven||y.getValue(s)[3]>0);if(!b&&!S)return;const P=24/8;let M=i.getLayoutValue("text-rotation-alignment",s);M===C.AUTO&&(M=i.getLayoutValue("symbol-placement",s)===ne.POINT?C.VIEWPORT:C.MAP);const I=M===C.MAP,T=i.getLayoutValue("text-keep-upright",s)&&I,D=.8*P/r;this._glyphTextureSize||(this._glyphTextureSize=ot(a.width/4,a.height/4));const L=i.getPaintValue("text-translate",s),W=i.getPaintValue("text-translate-anchor",s),Q=this._sdfProgramOptions,R=m.getMaterialProgram(n,_,Q);if(c&&d!=null&&!R.compiled)return void d();n.useProgram(R),R.setUniformMatrix3fv("u_displayViewMat3",M===C.MAP?h.displayViewMat3:h.displayMat3),R.setUniformMatrix3fv("u_displayMat3",W===B.VIEWPORT?h.displayMat3:h.displayViewMat3),R.setUniform2fv("u_textTranslation",L),R.setUniform1f("u_depth",i.z+Bt),R.setUniform2fv("u_mosaicSize",this._glyphTextureSize),R.setUniform1f("u_mapRotation",ve(h.rotation)),R.setUniform1f("u_keepUpright",T?1:0),R.setUniform1f("u_level",10*s),R.setUniform1i("u_texture",ue),R.setUniform1f("u_antialiasingWidth",D),R.setUniform1f("u_fadeDuration",se/1e3);let J=-1;for(const A of t){if(!A.layerData.has(f)||(A.key.level!==J&&(J=A.key.level,_.setDataUniforms(R,s,i,J,l)),g=A.layerData.get(f),g.glyphPerPageElementsMap.size===0))continue;g.prepareForRendering(n),g.updateOpacityInfo();const ae=g.textVAO;if(ae==null)continue;n.bindVAO(ae),R.setUniformMatrix3fv("u_dvsMat3",A.transforms.displayViewScreenMat3),this._setStencilState(e,A);const Ue=(performance.now()-g.lastOpacityUpdate)/1e3;R.setUniform1f("u_time",Ue),g.glyphPerPageElementsMap.forEach((Ae,ze)=>{this._renderGlyphRange(n,Ae,ze,a,R,S,b,A)})}}_renderGlyphRange(e,i,t,n,s,a,o,r){n.bind(e,G.LINEAR,t,ue),a&&(s.setUniform1f("u_halo",1),e.drawElements(N.TRIANGLES,i[1],q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i[0]),r.triangleCount+=i[1]/3),o&&(s.setUniform1f("u_halo",0),e.drawElements(N.TRIANGLES,i[1],q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i[0]),r.triangleCount+=i[1]/3)}_setStencilState(e,i){const{context:t,is3D:n,stencilSymbols:s}=e;if(t.setStencilTestEnabled(!0),s)return t.setStencilWriteMask(255),void t.setStencilFunction($.ALWAYS,i.stencilRef,255);t.setStencilWriteMask(0),n?t.setStencilFunction($.EQUAL,i.stencilRef,255):t.setStencilFunction($.GREATER,255,255)}};const Jt={vtlBackground:Nt,vtlFill:qt,vtlLine:Ft,vtlCircle:Vt,vtlSymbol:Gt},Kt={background:{"background.frag":`#ifdef PATTERN
uniform lowp float u_opacity;
uniform lowp sampler2D u_texture;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#else
uniform lowp vec4 u_color;
#endif
void main() {
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = u_opacity * color;
#else
gl_FragColor = u_color;
#endif
}`,"background.vert":`precision mediump float;
attribute vec2 a_pos;
uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;
#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
uniform mediump vec4 u_tlbr;
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
#endif
void main() {
gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);
#ifdef PATTERN
v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
v_tlbr             = u_tlbr / u_mosaicSize.xyxy;
#endif
}`},circle:{"circle.frag":`precision lowp float;
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
void main()
{
mediump float dist = length(v_offset);
mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);
lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));
gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);
}`,"circle.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_circleTranslation;
uniform mediump float u_depth;
uniform mediump float u_antialiasingWidth;
void main()
{
#pragma main
v_color = color * opacity;
v_stroke_color = stroke_color * stroke_opacity;
v_stroke_width = stroke_width;
v_radius = radius;
v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));
mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);
v_offset = offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},fill:{"fill.frag":`precision lowp float;
#ifdef PATTERN
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
varying lowp vec4 v_color;
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = v_color[3] * color;
#else
gl_FragColor = v_color;
#endif
}`,"fill.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;
#ifdef PATTERN
#include <util/util.glsl>
uniform mediump vec2 u_mosaicSize;
uniform mediump float u_patternFactor;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
varying lowp vec4 v_color;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef PATTERN
float patternWidth = nextPOT(tlbr.z - tlbr.x);
float patternHeight = nextPOT(tlbr.w - tlbr.y);
float scaleX = 1.0 / (patternWidth * u_patternFactor);
float scaleY = 1.0 / (patternHeight * u_patternFactor);
mat3 patterMat = mat3(scaleX, 0.0,    0.0,
0.0,    -scaleY, 0.0,
0.0,    0.0,    1.0);
v_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;
v_tlbr             = tlbr / u_mosaicSize.xyxy;
#endif
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},icon:{"icon.frag":`precision mediump float;
uniform lowp sampler2D u_texture;
#ifdef SDF
uniform lowp vec4 u_color;
uniform lowp vec4 u_outlineColor;
#endif
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
varying lowp vec4 v_color;
#ifdef SDF
varying mediump flaot v_halo_width;
#endif
#include <util/encoding.glsl>
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;
const float softEdgeRatio = 0.248062016;
float size = max(v_size.x, v_size.y);
float dist = d * softEdgeRatio * size;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
if (v_halo_width > 0.25) {
lowp vec4 outlinePixelColor = u_outlineColor;
const float outlineLimitRatio = (16.0 / 86.0);
float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));
outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);
gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor;
#endif
}`,"icon.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
#ifdef SDF
varying mediump float v_halo_width;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_iconTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
const float C_OFFSET_PRECISION = 1.0 / 8.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;
uniform highp float u_time;
void main()
{
#pragma main
v_color = color;
v_opacity = opacity;
#ifdef SDF
v_halo_width = halo_width;
#endif
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_opacity *= interpolatedOpacity;
mediump float a_angle         = a_levelInfo[1];
mediump float a_minLevel      = a_levelInfo[2];
mediump float a_maxLevel      = a_levelInfo[3];
mediump vec2 a_tex            = a_texAngleRange.xy;
mediump float delta_z = 0.0;
mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_opacity, 0.0);
vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;
v_size = abs(offset);
#ifdef SDF
offset = (120.0 / 86.0) * offset;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
v_tex = a_tex.xy / u_mosaicSize;
}`},line:{"line.frag":`precision lowp float;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying mediump float v_blur;
#if defined (PATTERN) || defined(SDF)
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
uniform sampler2D u_texture;
uniform mediump float u_antialiasing;
#endif
#ifdef SDF
#include <util/encoding.glsl>
#endif
void main()
{
mediump float fragDist = length(v_normal) * v_lineHalfWidth;
lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);
#ifdef PATTERN
mediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
gl_FragColor = alpha * v_color[3] * color;
#elif defined(SDF)
mediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY =  0.5 + 0.25 * v_normal.y;
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);
gl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
#else
gl_FragColor = alpha * v_color;
#endif
}`,"line.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec4 a_extrude_offset;
attribute vec4 a_dir_normal;
attribute vec2 a_accumulatedDistance;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_lineTranslation;
uniform mediump float u_antialiasing;
uniform mediump float u_depth;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
const float scale = 1.0 / 31.0;
const mediump float tileCoordRatio = 8.0;
#if defined (SDF)
const mediump float sdfPatternHalfWidth = 15.5;
#endif
#if defined (PATTERN) || defined(SDF)
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
#endif
varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth;
varying mediump float v_blur;
void main()
{
#pragma main
v_color = color * opacity;
v_blur = blur + u_antialiasing;
v_normal = a_dir_normal.zw * scale;
#if defined (PATTERN) || defined(SDF)
v_tlbr          = tlbr / u_mosaicSize.xyxy;
v_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);
#if defined (PATTERN)
v_widthRatio = width / v_patternSize.y;
#else
v_widthRatio = width / sdfPatternHalfWidth / 2.0;
#endif
#endif
v_lineHalfWidth = (width + u_antialiasing) * 0.5;
mediump vec2 dir = a_dir_normal.xy * scale;
mediump vec2 offset_ = a_extrude_offset.zw * scale * offset;
mediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
#if defined (PATTERN) || defined(SDF)
v_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);
#endif
}`},outline:{"outline.frag":`varying lowp vec4 v_color;
varying mediump vec2 v_normal;
void main()
{
lowp float dist = abs(v_normal.y);
lowp float alpha = smoothstep(1.0, 0.0, dist);
gl_FragColor = alpha * v_color;
}`,"outline.vert":`attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;
#pragma header
varying lowp vec4 v_color;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_fillTranslation;
uniform mediump float u_depth;
uniform mediump float u_outline_width;
varying lowp vec2 v_normal;
const float scale = 1.0 / 15.0;
void main()
{
#pragma main
v_color = color * opacity;
v_normal = a_xnormal;
mediump vec2 dist = u_outline_width * scale * a_offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},text:{"text.frag":`uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;
void main()
{
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);
gl_FragColor = alpha * v_color;
}`,"text.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_textTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying lowp vec2 v_tex;
const float offsetPrecision = 1.0 / 8.0;
const mediump float edgePos = 0.75;
uniform mediump float u_antialiasingWidth;
varying mediump float v_edgeDistance;
varying mediump float v_edgeWidth;
uniform lowp float u_halo;
const float sdfFontScale = 1.0 / 24.0;
const float sdfPixel = 3.0;
uniform highp float u_time;
void main()
{
#pragma main
if (u_halo > 0.5)
{
v_color = halo_color * opacity;
halo_width *= sdfPixel;
halo_blur *= sdfPixel;
}
else
{
v_color = color * opacity;
halo_width = 0.0;
halo_blur = 0.0;
}
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_color *= interpolatedOpacity;
mediump float a_angle       = a_levelInfo[1];
mediump float a_minLevel    = a_levelInfo[2];
mediump float a_maxLevel    = a_levelInfo[3];
mediump vec2 a_tex          = a_texAngleRange.xy;
mediump float a_visMinAngle    = a_texAngleRange.z;
mediump float a_visMaxAngle    = a_texAngleRange.w;
mediump float delta_z = 0.0;
mediump float angle = mod(a_angle + u_mapRotation, 256.0);
if (a_visMinAngle < a_visMaxAngle)
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));
}
else
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));
}
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_color[3], 0.0);
v_tex = a_tex.xy / u_mosaicSize;
v_edgeDistance = edgePos - halo_width / size;
v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}`},util:{"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`,"util.glsl":`float nextPOT(in float x) {
return pow(2.0, ceil(log2(abs(x))));
}`}};let Yt=class{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e,i=new Map){if(i.has(e))return i.get(e);const t=this._read(e);if(!t)throw new Error(`cannot find shader file ${e}`);const n=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let s=n.exec(t);const a=[];for(;s!=null;)a.push({path:s[1],start:s.index,length:s[0].length}),s=n.exec(t);let o=0,r="";return a.forEach(l=>{r+=t.slice(o,l.start),r+=i.has(l.path)?"":this._resolve(l.path,i),o=l.start+l.length}),r+=t.slice(o),i.set(e,r),r}_read(e){return this._readFile(e)}};function jt(u){let e=Kt;return u.split("/").forEach(i=>{e&&(e=e[i])}),e}const Xt=new Yt(jt);function U(u){return Xt.resolveIncludes(u)}function Qt(u){const{options:e,value:i}=u;return typeof e[i]=="number"}function te(u){let e="";for(const i in u){const t=u[i];if(typeof t=="boolean")t&&(e+=`#define ${i}
`);else if(typeof t=="number")e+=`#define ${i} ${t.toFixed()}
`;else if(typeof t=="object")if(Qt(t)){const{value:n,options:s,namespace:a}=t,o=a?`${a}_`:"";for(const r in s)e+=`#define ${o}${r} ${s[r].toFixed()}
`;e+=`#define ${i} ${o}${n}
`}else{const n=t.options;let s=0;for(const a in n)e+=`#define ${n[a]} ${(s++).toFixed()}
`;e+=`#define ${i} ${n[t.value]}
`}}return e}const xe=u=>te({PATTERN:u.pattern}),Zt={shaders:u=>({vertexShader:xe(u)+U("background/background.vert"),fragmentShader:xe(u)+U("background/background.frag")})},ei={shaders:u=>({vertexShader:U("circle/circle.vert"),fragmentShader:U("circle/circle.frag")})},we=u=>te({PATTERN:u.pattern}),ti={shaders:u=>({vertexShader:we(u)+U("fill/fill.vert"),fragmentShader:we(u)+U("fill/fill.frag")})},ii={shaders:u=>({vertexShader:U("outline/outline.vert"),fragmentShader:U("outline/outline.frag")})},be=u=>te({SDF:u.sdf}),ni={shaders:u=>({vertexShader:be(u)+U("icon/icon.vert"),fragmentShader:be(u)+U("icon/icon.frag")})},Se=u=>te({PATTERN:u.pattern,SDF:u.sdf}),si={shaders:u=>({vertexShader:Se(u)+U("line/line.vert"),fragmentShader:Se(u)+U("line/line.frag")})},ai={shaders:u=>({vertexShader:U("text/text.vert"),fragmentShader:U("text/text.frag")})};class oi{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getMaterialProgram(e,i,t){const n=i.key<<3|this._getMaterialOptionsValue(i.type,t);if(this._programByKey.has(n))return this._programByKey.get(n);const s=this._getProgramTemplate(i.type),{shaders:a}=s,{vertexShader:o,fragmentShader:r}=a(t),l=i.getShaderHeader(),h=i.getShaderMain(),f=o.replace("#pragma header",l).replace("#pragma main",h),d=e.programCache.acquire(f,r,i.getAttributeLocations());return this._programByKey.set(n,d),d}_getMaterialOptionsValue(e,i){switch(e){case E.BACKGROUND:return(i.pattern?1:0)<<1;case E.FILL:return(i.pattern?1:0)<<1;case E.OUTLINE:return 0;case E.LINE:{const t=i;return(t.sdf?1:0)<<2|(t.pattern?1:0)<<1}case E.ICON:return(i.sdf?1:0)<<1;case E.CIRCLE:case E.TEXT:default:return 0}}_getProgramTemplate(e){switch(e){case E.BACKGROUND:return Zt;case E.CIRCLE:return ei;case E.FILL:return ti;case E.ICON:return ni;case E.LINE:return si;case E.OUTLINE:return ii;case E.TEXT:return ai;default:return null}}}const K=1e-6;class Me{constructor(e,i){this.spriteMosaic=e,this.glyphMosaic=i,this._brushCache=new Map,this._vtlMaterialManager=new oi}dispose(){this._brushCache&&(this._brushCache.forEach(e=>e.dispose()),this._brushCache=null),this._vtlMaterialManager=Le(this._vtlMaterialManager),this.spriteMosaic.dispose(),this.glyphMosaic.dispose()}get vectorTilesMaterialManager(){return this._vtlMaterialManager}drawSymbols(e,i,t){const n=t.layers;e.renderPass="translucent";for(let s=0;s<n.length;s++){const a=n[s];if(a.type!==H.SYMBOL)continue;const o=a.getLayoutProperty("visibility");if(o&&o.getValue()===ee.NONE)continue;const r=e.displayLevel;a.minzoom!==void 0&&a.minzoom>r+K||a.maxzoom!==void 0&&a.maxzoom<=r-K||(e.styleLayerUID=a.uid,e.styleLayer=a,this._drawWithBrush(e,i,"vtlSymbol"))}}drawBackground(e,i,t){if(t.backgroundBucketIds.length===0)return;const{context:n,displayLevel:s,requiredLevel:a}=e;i.key.level=a,n.setBlendingEnabled(!0),n.setDepthTestEnabled(!1),n.setStencilTestEnabled(!1),e.renderPass="background",t.backgroundBucketIds.forEach(o=>{const r=t.getLayerById(o);if(r.type!==H.BACKGROUND)return;const l=r.getLayoutProperty("visibility");l&&l.getValue()===ee.NONE||r.minzoom!==void 0&&r.minzoom>s+K||r.maxzoom!==void 0&&r.maxzoom<=s-K||(e.styleLayerUID=r.uid,e.styleLayer=r,this._drawWithBrush(e,i,"vtlBackground"))})}drawTile(e,i,t,n){const{context:s}=e,a=t.layers;s.setBlendingEnabled(!1),s.setDepthTestEnabled(!0),s.setDepthWriteEnabled(!0),s.setDepthFunction($.LEQUAL),e.renderPass="opaque";for(let o=a.length-1;o>=0;o--){const r=a[o];n!=null&&n!==r.type||this._renderStyleLayer(r,e,i,!1)}s.setDepthWriteEnabled(!1),s.setBlendingEnabled(!0),s.setBlendFunctionSeparate(Z.ONE,Z.ONE_MINUS_SRC_ALPHA,Z.ONE,Z.ONE_MINUS_SRC_ALPHA),e.renderPass="translucent";for(let o=0;o<a.length;o++){const r=a[o];n!=null&&n!==r.type||this._renderStyleLayer(r,e,i,!1)}s.setDepthTestEnabled(!1),s.bindVAO()}_renderStyleLayer(e,i,t,n){if(!(n||e&&t.layerData.has(e.uid)))return;const s=e.getLayoutProperty("visibility");if(s&&s.getValue()===ee.NONE)return;const{renderPass:a}=i;let o;switch(e.type){case H.BACKGROUND:if(a!=="background")return;o="vtlBackground";break;case H.FILL:if(a!=="opaque"&&i.renderPass!=="translucent")return;o="vtlFill";break;case H.LINE:if(a!=="translucent")return;o="vtlLine";break;case H.CIRCLE:if(a!=="translucent")return;o="vtlCircle";break;case H.SYMBOL:if(a!=="translucent")return;o="vtlSymbol"}const r=i.displayLevel;if(e.minzoom!==void 0&&e.minzoom>r+K||e.maxzoom!==void 0&&e.maxzoom<=r-K)return;const{context:l}=i;l.setStencilTestEnabled(!1),l.setStencilWriteMask(0),i.styleLayerUID=e.uid,i.styleLayer=e,this._drawWithBrush(i,t,o)}_drawWithBrush(e,i,t){if(!this._brushCache.has(t)){const n=Jt[t];this._brushCache.set(t,new n)}this._brushCache.get(t).drawMany(e,[i])}}let k=class extends vt(yt(xt)){constructor(){super(...arguments),this._tileHandlerController=null,this.type="vector-tile-3d",this.levelShift=he("disable-feature:vtl-level-shift")?0:1}initialize(){if(this.layer.fullExtent==null)return void this.addResolvingPromise(Promise.reject(new rt("vectortilelayerview:full-extent-undefined","This layer view's layer does not define a fullExtent.")));const{basemapTerrain:u,spatialReference:e,state:i,viewingMode:t}=this.view,n=t==="local"&&!lt(e)||ct.force512VTL,s=this.layer.tileInfo.spatialReference.isGeographic,a=n?this.layer.tileInfo:this.layer.tileInfo.getOrCreateCompatible(256,s?1:2),o=this._getTileInfoSupportError(a,this.layer.fullExtent);if(o!=null)return this.addResolvingPromise(Promise.reject(o));const r=ut(()=>{var g,p;return(p=(g=this.view)==null?void 0:g.basemapTerrain)==null?void 0:p.tilingSchemeLocked}).then(()=>{var S,P,M;const g=u.tilingScheme,p=g.pixelSize,w=p===256?1:2,v=(S=u.spatialReference)!=null&&S.isGeographic&&p===256?1:0,b=(P=u.spatialReference)!=null&&P.isGeographic||p!==256?0:1;let x;if(this.schemaHelper=new wt(w,v,this.levelShift+b),p===256){const I=this.layer.tileInfo.spatialReference.isGeographic;x=this.layer.tileInfo.getOrCreateCompatible(256,I?1:2)}else x=(M=this.view.spatialReference)!=null&&M.isGeographic?this.layer.tileInfo.getOrCreateCompatible(512,.5):this.layer.tileInfo;const y=this._getTileInfoCompatibilityError(x,g);if(y)throw y;this.tileInfo=x});this._tileHandlerController=new AbortController;const l=this.view.resourceController;this._memCache=l.memoryController.newCache(`vtl-${this.layer.uid}`,g=>{g.release()}),this.addHandles(ht(()=>this.view.qualitySettings.memoryLimit,g=>this._memCache.maxSize=Math.ceil(g/10*1048576),dt));const h=new fe(this.layer.currentStyleInfo.style);this._tileHandler=new ge(this.layer,h,i.contentPixelRatio,this._memCache);const f=this._tileHandlerController.signal,d=ri(l),c=this._tileHandler.start({signal:f,schedule:d}),_=this._tileHandler.spriteMosaic;_.then(g=>{!ft(f)&&this._tileHandler&&(this.painter=new Me(g,this._tileHandler.glyphMosaic))}),c.then(()=>this._tileHandlerController=null),this._updatingHandles.add(()=>{var g;return{style:this.layer.currentStyleInfo.style,pixelRatio:(g=this.view.state)==null?void 0:g.contentPixelRatio}},({style:g,pixelRatio:p})=>{this._tileHandlerController&&this._tileHandlerController.abort(),this._tileHandlerController=new AbortController,this._memCache.clear();const w=new fe(g),v=new ge(this.layer,w,p,this._memCache),b=v.start({signal:this._tileHandlerController.signal,schedule:d}),x=v.spriteMosaic;b.then(()=>this._tileHandlerController=null),this._updatingHandles.addPromise(Promise.all([b,x]).then(([,y])=>{const S=this._tileHandler,P=this.painter;this.painter=new Me(y,v.glyphMosaic),this._tileHandler=v,this.emit("data-changed"),S.destroy(),P&&P.dispose()}))});const m=Promise.all([r,c,_]);this.addResolvingPromise(m)}destroy(){this.painter=Le(this.painter),this._tileHandlerController=Ie(this._tileHandlerController),this._tileHandler=de(this._tileHandler),this._memCache=de(this._memCache)}get contentZoom(){return he("disable-feature:vtl-level-shift")?1:this.view.qualitySettings.tiledSurface.vtlContentZoom}get displayLevelRange(){const u=this.tileInfo.lods,e=this.layer.minScale||u[0].scale,i=this.layer.maxScale||u[u.length-1].scale,t=this.levelRangeFromScaleRange(e,i);return this.layer.maxScale?t.maxLevel++:t.maxLevel+=this.levelShift,t}get dataScaleRange(){const u=this.tileInfo.lods;return{minScale:u[0].scale,maxScale:u[u.length-1].scale}}get dataLevelRange(){const{minScale:u,maxScale:e}=this.dataScaleRange,i=this.levelRangeFromScaleRange(u,e);return i.minLevel===1&&this.tileInfo.size[0]===256&&(i.minLevel=0),i.maxLevel+=this.levelShift,i}async fetchTile(u,e,i,t){return this._tileHandler.getVectorTile(u,e,i,t)}};V([F()],k.prototype,"layer",void 0),V([F()],k.prototype,"levelShift",void 0),V([F()],k.prototype,"contentZoom",null),V([F()],k.prototype,"displayLevelRange",null),V([F()],k.prototype,"tileInfo",void 0),V([F()],k.prototype,"dataScaleRange",null),V([F()],k.prototype,"dataLevelRange",null),V([F()],k.prototype,"updatingProgressValue",void 0),k=V([_t("esri.views.3d.layers.VectorTileLayerView3D")],k);const Oi=k;function ri(u){return e=>u.immediate.schedule(e)}export{Oi as default};
