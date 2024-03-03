import{e as a,y as r,c as D,S as k,d5 as m,bq as W,hj as de,io as je,m8 as Ue,fc as Ne,m9 as Be,kQ as $e,gB as We,gC as te,kR as qe,kT as Je,kU as Ze,ma as Ke,ba as Ae,mb as Qe,is as F,mc as q,md as Xe,me as Ye,mf as ee,kO as et,e$ as T,d3 as ce,lK as z,eZ as G,mg as he,c1 as He,h as ge,mh as me,lD as ie,d9 as J,hc as tt,mi as it,mj as nt,eY as B,mk as x,f3 as _e,q as ne,ml as ye,X as Z,eR as K,P as R,L as fe,K as st,lr as at,Q as ve,cJ as ot,mm as rt,mn as be,mo as lt,aj as v,mp as ut,mq as dt,mr as De,A as Me,ms as U,hf as ct,J as ht,u as E,hg as pt,mt as se,mu as Ce,fI as we,mv as gt,mw as vt,k7 as ae,iZ as $,fj as mt,V as _t}from"./index-Bv0Hohk0.js";import{a as Oe,f as oe,s as yt}from"./LineVisualElement-BA2FWRBH.js";import{t as re,u as Te,f as Ie}from"./LineOfSightAnalysisTarget-DuX2cHd3.js";import{e as ke,d as xe,a as Fe,o as ft,x as Pe,b as bt,v as Ct}from"./ShadedColorMaterial.glsl-Cak3Vz2U.js";import{c as wt,x as Le}from"./Laserlines.glsl-CW436qzp.js";import"./persistable-CqahfBmp.js";import"./MD5-C9MwAd2G.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-DX05oFmI.js";let A=class extends k{constructor(e){super(e),this.target=null,this.intersectedGraphic=null,this.intersectedLocation=null,this.elevationAlignedTargetLocation=null,this.visible=void 0}};a([r()],A.prototype,"target",void 0),a([r()],A.prototype,"intersectedGraphic",void 0),a([r()],A.prototype,"intersectedLocation",void 0),a([r()],A.prototype,"elevationAlignedTargetLocation",void 0),a([r({type:Boolean})],A.prototype,"visible",void 0),A=a([D("esri.views.3d.analysis.LineOfSightAnalysisResult")],A);let H=class extends k{constructor(e){super(e),this.elevationAlignedTargetLocation=null,this.inputPoints={isValid:!1,observer:m(),observerSurfaceNormal:null,observerFeatureId:null,target:m(),targetSurfaceNormal:null,targetFeatureId:null,observerAdjusted:m(),targetAdjusted:m()},this.computationResult={start:m(),end:m(),intersection:m(),isValid:!1,isTargetVisible:!1},this.result=null}notifyResultChanged(){this.notifyChange("computationResult")}notifyInputPointsChanged(){this.notifyChange("inputPoints")}};a([r()],H.prototype,"target",void 0),a([r()],H.prototype,"elevationAlignedTargetLocation",void 0),a([r()],H.prototype,"inputPoints",void 0),a([r()],H.prototype,"computationResult",void 0),a([r()],H.prototype,"result",void 0),H=a([D("esri.views.3d.analysis.LineOfSight.LineOfSightComputation")],H);var pe;let I=pe=class extends k{constructor(t){super(t)}clone(){return new pe({type:this.type,id:W(this.id),mapPoint:W(this.mapPoint),renderPoint:de(this.renderPoint),normal:W(this.normal),ray:W(this.ray),graphic:this.graphic})}equals(t){return this.type===t.type&&this.id===t.id&&je(this.mapPoint,t.mapPoint)&&Ue(this.renderPoint,t.renderPoint)&&Ne(this.normal,t.normal)&&Be(this.ray,t.ray)&&this.graphic===t.graphic}};a([r()],I.prototype,"type",void 0),a([r({constructOnly:!0})],I.prototype,"id",void 0),a([r({constructOnly:!0})],I.prototype,"mapPoint",void 0),a([r({constructOnly:!0})],I.prototype,"renderPoint",void 0),a([r({constructOnly:!0})],I.prototype,"normal",void 0),a([r({constructOnly:!0})],I.prototype,"graphic",void 0),a([r({constructOnly:!0})],I.prototype,"ray",void 0),I=pe=a([D("esri.views.3d.analysis.LineOfSight.LineOfSightIntersectionResult")],I);let j=class extends k{constructor(e){super(e),this._terrainIntersectionOptionsLayerUids=new Set(["terrain"])}initialize(){this.intersector=We(this.view.state.viewingMode),this.intersector.options.hud=!1,this.intersector.options.store=te.MIN}getScreenPointIntersection(e){const i=qe(e,Je.get()),n=Ze(this.view.state.camera,i,le);return this._getRayIntersection(n)}_getRayIntersection(e,i){if(e==null||this.view.sceneIntersectionHelper==null)return null;const{intersector:n}=this;n.options.store=te.MIN,this.view.sceneIntersectionHelper.intersectToolIntersectorRay(e,n,i);const s=n.results.min,o=m();if(!s.getIntersectionPoint(o)||(i==null?void 0:i.maxDistance)!=null&&Ke(o,e.origin)>i.maxDistance**2)return null;const l=this.view.renderCoordsHelper.fromRenderCoords(o,new Ae({spatialReference:this.view.spatialReference})),h=de(s.normal);if(Qe(s))return new I({type:F.OBJECT,id:`${s.target.layerUid}/${s.target.nodeIndex}/${s.target.componentIndex}`,mapPoint:l,renderPoint:o,normal:h,ray:q(e),graphic:null});if(Xe(s))return new I({type:F.OBJECT,id:`${s.target.layerUid}/${s.target.graphicUid}`,mapPoint:l,renderPoint:o,normal:h,ray:q(e),graphic:null});if(Ye(s))return new I({type:F.TERRAIN,id:s.target.lij.slice(),mapPoint:l,renderPoint:o,normal:h,ray:q(e),graphic:null});const d=ee(s,this.view);if(d!=null){const c=d.layer,u=d.sourceLayer;let p;return u&&u.type==="scene"?p=et(d,u.objectIdField):p=d.uid,new I({type:F.OBJECT,id:`${c==null?void 0:c.uid}/${p}`,mapPoint:l,renderPoint:o,normal:h,ray:q(e),graphic:d})}return null}updateFromGroundIntersection(e,i,n){const s=Ot,o=Tt,l=It,h=Ve;T(o,e),this.view.renderCoordsHelper.worldUpAtPosition(o,l),ce(l,l);const d=this.view.basemapTerrain.visibleElevationBounds,c=(i>=0?1:-1)*((d?Math.abs(d.max-d.min):100)+Math.abs(i));z(h,l,c),G(s,o,h),he(s,o,le);const u=this._getRayIntersection(le,{include:this._terrainIntersectionOptionsLayerUids,maxDistance:c});if(u!=null){const p=Ve;return z(p,l,i),G(n,u.renderPoint,p),de(u.normal)}return T(n,e),null}};a([r()],j.prototype,"view",void 0),a([r()],j.prototype,"intersector",void 0),j=a([D("esri.views.3d.analysis.LineOfSight.LineOfSightRayIntersector")],j);const Ot=m(),Tt=m(),It=m(),Ve=m(),le=$e();let y=class extends He.EventedMixin(k){constructor(t){super(t),this.updateOnCameraChange=!0,this._observerGroundOffsetRenderSpace=0,this._effectiveObserverElevationMode="absolute-height",this._observerFeatureId=null,this._updatingHandles=new ge,this._frameTask=me,this._computationHandles=new ie,this._externalObserverUpdate=!0}initialize(){var e;const t=(e=this.view.resourceController)==null?void 0:e.scheduler;this._frameTask=t?t.registerTask(J.LINE_OF_SIGHT_TOOL):me,this._intersector=new j({view:this.view}),this.addHandles([this._connectObserver(),this._connectComputations(),this._connectTargets()])}destroy(){this._computationHandles.destroy(),this._computations.removeAll(),this._updatingHandles.destroy()}get updating(){return this._frameTask.updating||this._updatingHandles.updating}get priority(){return this._frameTask.priority}set priority(t){this._frameTask.priority=t}get _computations(){return this.analysisViewData.computations}get _elevationAlignedObserverPositionRenderSpace(){return this.analysisViewData.observerEngineLocation}set _elevationAlignedObserverPositionRenderSpace(t){this.analysisViewData.observerEngineLocation=t}get _screenPixelSize(){return this.view.state.camera.computeScreenPixelSizeAt(this._elevationAlignedObserverPositionRenderSpace)}_computeResult(t){const e=t.computation,{inputPoints:i,computationResult:n}=e,{observerAdjusted:s,targetAdjusted:o}=i,{start:l,end:h}=n;T(l,s),T(h,o),this._canCompute(e)?this._computeIntersection(t):this._interpolateIntersection(t),e.notifyResultChanged(),this.emit("result-changed",{target:t.computation.target,result:e.result})}_updateAdjustedPointsFromFeatures(t){const e=this.view,{sceneIntersectionHelper:i}=e,{inputPoints:n}=t,{observerAdjusted:s,observerFeatureId:o,targetFeatureId:l,targetAdjusted:h}=n;if(o==null&&l==null)return;const d=tt(s,h),c=this._intersector.intersector,u=he(n.observer,n.target,Re);c.options.store=te.ALL,i.intersectToolIntersectorRay(u,c);let p=null,g=null,C=null,f=null;for(const w of c.results.all){const _=ee(w,this.view);if(_==null||w.distanceInRenderSpace==null)continue;const L=re(_);L!=null&&(o!=null&&L===o&&(p==null&&(p=this._getFeatureDistanceThreshold(w,e,d)),w.distanceInRenderSpace<p&&(C=w)),l!=null&&L===l&&(g==null&&(g=this._getFeatureDistanceThreshold(w,e,d)),f==null&&w.distanceInRenderSpace<d&&d-w.distanceInRenderSpace<g&&(f=w)))}C!=null&&C.getIntersectionPoint(s)&&(n.observerSurfaceNormal=C.getTransformedNormal(m())),f!=null&&f.getIntersectionPoint(h)&&(n.targetSurfaceNormal=f.getTransformedNormal(m()))}_getFeatureDistanceThreshold(t,e,i){if(it(t)){const n=nt(t,e);if(n!=null)return Math.min(n*Lt,i)}return 1e-5*i}_adjustStartEndPositions(t){const e=this._screenPixelSize,i=this.view,{inputPoints:n}=t,{observer:s,observerSurfaceNormal:o,target:l,targetSurfaceNormal:h,observerAdjusted:d,targetAdjusted:c}=n,u=Q;T(d,s),T(c,l),this._updateAdjustedPointsFromFeatures(t),o!=null?T(u,o):B(u,c,d);const p=e;ce(u,u),z(u,u,Math.min(p,1)),G(d,d,u),h!=null?T(u,h):B(u,d,c);const g=i.state.camera.computeScreenPixelSizeAt(c);ce(u,u),z(u,u,Math.min(g,1)),G(c,c,u)}_computeIntersection({computation:t,interpolationInfo:e}){const{view:i}=this,{sceneIntersectionHelper:n,renderCoordsHelper:s}=i;if(n==null)return;const o=this._intersector.intersector,{computationResult:l,inputPoints:h}=t,{observer:d,target:c}=h,{start:u,end:p}=l,g=he(u,p,Re);o.options.store=te.MIN,n.intersectToolIntersectorRay(g,o);const C=o.results.min,f=l.intersection,w=Q;let _=!0;if(C!=null&&C.getIntersectionPoint(f)){T(e.originalIntersection,f),T(e.originalObserver,u),T(e.originalTarget,p),s.fromRenderCoords(f,w,i.spatialReference);const P=1-x(p,c)/x(u,c);_=x(d,f)>=P*x(d,c)}const L=new Ae(w,i.spatialReference);{const{result:P,target:S}=t;P!=null?(P.target=S,P.intersectedGraphic=_?null:ee(C,i),P.intersectedLocation=_?null:L,P.visible=_):t.result=new A({target:S,elevationAlignedTargetLocation:t.elevationAlignedTargetLocation,intersectedGraphic:_?null:ee(C,i),intersectedLocation:_?null:L,visible:_})}l.isValid=h.isValid=!0,l.isTargetVisible=_}_interpolateIntersection({computation:t,interpolationInfo:e}){const{computationResult:i,inputPoints:n}=t,{start:s,end:o,intersection:l}=i,{originalIntersection:h,originalObserver:d,originalTarget:c}=e;if(T(l,h),n.isValid){const u=Q,p=x(d,h)/x(d,c);_e(u,s,d),z(u,u,1-p),G(l,l,u),_e(u,o,c),z(u,u,p),G(l,l,u),i.isValid=!0}else t.result=null,i.isValid=!1,i.isTargetVisible=!1}_canCompute(t){const e=this.analysisViewData.elevationAlignedObserver,i=this.view.frustum;if(e==null||t.elevationAlignedTargetLocation==null||i==null)return!1;const{observerAdjusted:n,targetAdjusted:s}=t.inputPoints,o=i.intersectsPoint(n),l=i.intersectsPoint(s);return o&&l}_onObserverPositionChange(t,e,i,n,s){if(this._externalObserverUpdate=s,t==null)return this.analysisViewData.elevationAlignedObserver=null,void(this._observerFeatureId=null);if(e==null)return Oe(this.analysis,t.spatialReference,ne.getLogger(this)),void(this.analysisViewData.elevationAlignedObserver=null);const o=this._getEffectiveElevationInfo(e,i),{absoluteZ:l,elevation:h}=ye(e.x,e.y,e.z,this.view.spatialReference,this.view,o),d=e.clone();d.z=l,this._effectiveObserverElevationMode=o.mode,this.analysisViewData.elevationAlignedObserver=d;const c=m();this.view.renderCoordsHelper.toRenderCoords(d,c),this._elevationAlignedObserverPositionRenderSpace=c,this._observerGroundOffsetRenderSpace=l-h,this._observerFeatureId=re(n),this.priority=J.LINE_OF_SIGHT_TOOL_INTERACTIVE}_onObserverRenderSpacePositionChangeForComputation(t,e,i,n,s){const{inputPoints:o}=t;switch(T(o.observer,e),o.observerFeatureId=s,o.observerSurfaceNormal=null,n){case"on-the-ground":case"relative-to-ground":{const l=this._intersector.updateFromGroundIntersection(o.observer,i,o.observer);o.observerFeatureId==null&&(o.observerSurfaceNormal=l)}}this._adjustStartEndPositions(t),t.notifyInputPointsChanged(),this.priority=J.LINE_OF_SIGHT_TOOL_INTERACTIVE}_onTargetPositionChange(t,e,i,n,s,o=!0){const l=t.inputPoints;if(o&&(l.isValid=!1),i==null)return e!=null&&Oe(this.analysis,e.spatialReference,ne.getLogger(this)),t.elevationAlignedTargetLocation=null,void t.notifyInputPointsChanged();const h=this._getEffectiveElevationInfo(i,n),{absoluteZ:d,elevation:c}=ye(i.x,i.y,i.z,this.view.spatialReference,this.view,h),u=i.clone();switch(u.z=d,t.elevationAlignedTargetLocation=u,this.view.renderCoordsHelper.toRenderCoords(t.elevationAlignedTargetLocation,l.target),l.targetFeatureId=re(s),l.targetSurfaceNormal=null,h.mode){case"on-the-ground":case"relative-to-ground":{const p=this._intersector.updateFromGroundIntersection(l.target,d-c,l.target);l.targetFeatureId==null&&(l.targetSurfaceNormal=p)}}this._adjustStartEndPositions(t),t.notifyInputPointsChanged(),this.priority=J.LINE_OF_SIGHT_TOOL_INTERACTIVE}_connectComputationToTarget(t){return Z([this._updatingHandles.add(()=>({computation:t,targetPosition:t.target.position,targetElevationInfo:t.target.elevationInfo,targetFeatureInfo:t.target.feature,projectedTargetPosition:K(t.target.position,this.view.spatialReference)}),({computation:e,targetPosition:i,targetElevationInfo:n,targetFeatureInfo:s,projectedTargetPosition:o})=>{o.pending==null?this._onTargetPositionChange(e,i,o.geometry,n,s):this._updatingHandles.addPromise(o.pending)},R)])}_connectComputationToObserver(t){return this._updatingHandles.add(()=>({computation:t,observer:this.analysisViewData.elevationAlignedObserver}),({computation:e})=>{this._externalObserverUpdate&&(e.inputPoints.isValid=!1,e.notifyInputPointsChanged())},R)}_connectComputationToRenderSpaceObserver(t){return this._updatingHandles.add(()=>({computation:t,observer:this._elevationAlignedObserverPositionRenderSpace,observerGroundOffset:this._observerGroundOffsetRenderSpace,observerElevationMode:this._effectiveObserverElevationMode,observerFeatureId:this._observerFeatureId}),({computation:e,observer:i,observerGroundOffset:n,observerElevationMode:s,observerFeatureId:o})=>{this._onObserverRenderSpacePositionChangeForComputation(e,i,n,s,o)},R)}_connectComputationToCamera(t){return this._updatingHandles.add(()=>({camera:this.view.state.camera,isDirty:this._isCameraDirty}),({isDirty:e})=>{!this.updateOnCameraChange||t.inputPoints.isValid&&!e||t.notifyInputPointsChanged()})}_connectComputationToSlicePlane(t){return this._updatingHandles.add(()=>this.view.slicePlane,()=>{t.inputPoints.isValid=!1,t.notifyInputPointsChanged()})}_connectComputationToElevation(t){const e=(i,n)=>{const s=this.analysis.observer,o=t.target;let l=null,h=null,d=null,c=null,u=null,p=null;if((s==null?void 0:s.position)!=null){const g=K(s.position,this.view.spatialReference);if(g.pending!=null)return this._updatingHandles.addPromise(g.pending),void g.pending.finally(()=>e(i,n));l=g.geometry,h=s.elevationInfo,d=s.feature}if(o.position!=null){const g=K(o.position,this.view.spatialReference);if(g.pending!=null)return this._updatingHandles.addPromise(g.pending),void g.pending.finally(()=>e(i,n));c=g.geometry,u=o.elevationInfo,p=o.feature}l==null&&c==null||(rt(i,n,X,this.view.spatialReference),l!=null&&be(X,l)&&this._onObserverPositionChange(s!=null?s.position:null,l,h,d,!1),c!=null&&be(X,c)&&this._onTargetPositionChange(t,o.position,c,u,p,!1),l!=null&&c!=null&&lt(X,l,c)&&t.notifyInputPointsChanged())};return this.view.elevationProvider.on("elevation-change",({extent:i,spatialReference:n})=>e(i,n))}_connectComputationToTask(t){let e=null;const i={computation:t,interpolationInfo:{originalIntersection:m(),originalObserver:m(),originalTarget:m()}};return Z([this._updatingHandles.add(()=>t.inputPoints,()=>{e=fe(e),e=st(async n=>{await at(this._frameTask.schedule(()=>this._computeResult(i),n))})},{initial:!0,equals:()=>!1}),ve(()=>e=fe(e))])}_connectComputation(t){const e=this._computationHandles;e.has(t)||e.add([this._connectComputationToTarget(t),this._connectComputationToObserver(t),this._connectComputationToRenderSpaceObserver(t),this._connectComputationToCamera(t),this._connectComputationToSlicePlane(t),this._connectComputationToElevation(t),this._connectComputationToTask(t)],t)}_disconnectComputation(t){this._computationHandles.remove(t)}_onComputationCollectionChange({added:t,removed:e}){for(const i of e)this._disconnectComputation(i);for(const i of t)this._connectComputation(i)}_onTargetCollectionChange({added:t,removed:e}){for(const i of e)this._removeTarget(i);for(const i of t)this._addTarget(i)}_onCursorTargetChange(t,e){e!=null&&this._removeTarget(e),t!=null&&this._addTarget(t)}_addTarget(t){this._computations.some(e=>e.target===t)||this._computations.add(new H({target:t}))}_removeTarget(t){const e=this._computations.findIndex(i=>i.target===t);this._computations.removeAt(e)}_connectObserver(){return Z([this._updatingHandles.add(()=>({observerPosition:this.analysis.observer!=null?this.analysis.observer.position:null,projectedObserverPosition:K(this.analysis.observer!=null?this.analysis.observer.position:null,this.view.spatialReference),observerElevationInfo:this.analysis.observer!=null?this.analysis.observer.elevationInfo:null,observerFeatureInfo:this.analysis.observer!=null?this.analysis.observer.feature:null}),({observerPosition:t,projectedObserverPosition:e,observerElevationInfo:i,observerFeatureInfo:n})=>{e.pending==null?this._onObserverPositionChange(t,e.geometry,i,n,!0):this._updatingHandles.addPromise(e.pending)},R)])}_connectComputations(){return this._updatingHandles.addOnCollectionChange(()=>this._computations,t=>this._onComputationCollectionChange(t),{initial:!0,final:!0})}_connectTargets(){return Z([this._updatingHandles.addOnCollectionChange(()=>this.analysis.targets,t=>this._onTargetCollectionChange(t),{initial:!0,final:!0}),this._updatingHandles.add(()=>this.analysisViewData.cursorTarget,(t,e)=>{this._onCursorTargetChange(t,e)})])}get _isCameraDirty(){const t=this.analysisViewData.elevationAlignedObserver,{view:e}=this,{renderCoordsHelper:i}=e;if(t==null||i==null)return!1;const n=Q;i.toRenderCoords(t,n);const s=e.state.camera.computeScreenPixelSizeAt(n);return Math.abs((s-this._screenPixelSize)/this._screenPixelSize)>Pt}_getEffectiveElevationInfo(t,e){return t.hasZ?e??{mode:"absolute-height",offset:0}:{mode:"on-the-ground",offset:0}}};a([r({constructOnly:!0})],y.prototype,"analysis",void 0),a([r({constructOnly:!0})],y.prototype,"analysisViewData",void 0),a([r({constructOnly:!0})],y.prototype,"view",void 0),a([r()],y.prototype,"updating",null),a([r()],y.prototype,"priority",null),a([r()],y.prototype,"updateOnCameraChange",void 0),a([r()],y.prototype,"_computations",null),a([r()],y.prototype,"_elevationAlignedObserverPositionRenderSpace",null),a([r()],y.prototype,"_observerGroundOffsetRenderSpace",void 0),a([r()],y.prototype,"_effectiveObserverElevationMode",void 0),a([r()],y.prototype,"_observerFeatureId",void 0),a([r()],y.prototype,"_screenPixelSize",null),a([r({readOnly:!0})],y.prototype,"_updatingHandles",void 0),a([r()],y.prototype,"_frameTask",void 0),a([r()],y.prototype,"_isCameraDirty",null),y=a([D("esri.views.3d.analysis.LineOfSight.LineOfSightController")],y);const Pt=.1,Q=m(),Re=$e(),X=ot(),Lt=.05;let Vt=class{constructor(){this.glowWidth=8,this.innerWidth=.75}};const Rt=new Vt;function St(t){const e=t.accentColor;return{glowColor:e,innerColor:ut(e),globalAlpha:.75*e.a}}class Et{constructor(){this.size=.5}}const $t=new Et;function Se(t){return dt(t.accentColor,.75)}class At{constructor(){this.size=.5,this.visibleColor=new v([3,252,111,.75]),this.occludedColor=new v([252,3,69,.75]),this.undefinedColor=new v([127,127,127,.75])}}const Ht=new At;let Dt=class{constructor(){this.innerWidth=2,this.outerWidth=8,this.visibleInnerColor=new v([3,252,111,1]),this.visibleOuterColor=new v([3,252,111,.15]),this.occludedInnerColor=new v([252,3,69,1]),this.occludedOuterColor=new v([252,3,69,.1]),this.undefinedInnerColor=new v([255,255,255,1]),this.undefinedOuterColor=new v([127,127,127,.2])}};const Y=new Dt;function ze(t,e){let i=null;const n=t.events.on("grab-changed",s=>{i!=null&&(i.remove(),i=null),s.action==="start"&&(i=t.disableDisplay()),e&&e(s)});return ve(()=>{i==null||i.remove(),n.remove()})}class Mt extends ke{constructor(e,i){const n=xe(Se(e.effectiveTheme)),s=De(n,$t.size,32,32),o=new Fe(s);super({view:e,renderObjects:[o],metadata:i,elevationInfo:{mode:"absolute-height",offset:0}}),ze(this),this.themeHandle=Me(()=>({color:Se(e.effectiveTheme)}),l=>{n.setParameters(l)})}destroy(){this.themeHandle.remove(),super.destroy()}}let kt=class extends ke{constructor(e,i){const{size:n,visibleColor:s,occludedColor:o,undefinedColor:l}=Ht;super({view:e,renderObjects:[ue(n,s,U.Custom1),ue(n,o,U.Custom2),ue(n,l,U.Custom3)],metadata:i,elevationInfo:{mode:"absolute-height",offset:0}}),ze(this)}};function ue(t,e,i){return new Fe(De(xe(v.toUnitRGBA(e)),t,32,32),i)}var M;(function(t){t.Ready="ready",t.Creating="creating",t.Created="created"})(M||(M={}));let O=class extends ft{constructor(e){super(e),this.removeIncompleteOnCancel=!1,this.analysisViewData=null,this._latestPointerMovePointerType=null,this._laserlineVisualElement=null,this._grabbedManipulator=null,this._analysisHandles=new ie,this._updatingHandles=new ge,this._manipulatorHandles=new ie,this._targetTrackerManipulator=null}initialize(){this._intersector=new j({view:this.view}),this.addHandles(Me(()=>this.state,e=>{e===M.Created&&this.finishToolCreation()},ht)),this._observerManipulator=this._createObserverManipulator(),this._createLaserLine(),this.addHandles([this._updatingHandles.add(()=>{var e;return(e=this.analysisViewData)==null?void 0:e.elevationAlignedObserver},e=>this._onObserverLocationChange(e),R),this._updatingHandles.add(()=>St(this.view.effectiveTheme),({glowColor:e,innerColor:i,globalAlpha:n})=>this._updateLaserLineStyle(e,i,n),R),this._updatingHandles.add(()=>this._laserLineRendererDependencies(),e=>this._updateLaserLineRenderer(e)),this._connectComputations(),this._updatingHandles.addWhen(()=>!this._shouldRenderTracker,()=>this._clearCursorTracker(),R)])}destroy(){this._updatingHandles=E(this._updatingHandles),this._manipulatorHandles=E(this._manipulatorHandles),this._analysisHandles=E(this._analysisHandles),this._observerManipulator=null,this._clearCursorTracker(),this._removeLaserLine(),this._intersector=null,this._set("analysis",null)}get state(){var e;return this.active?this.hasGrabbedManipulators?M.Created:M.Creating:((e=this.analysis.observer)==null?void 0:e.position)!=null?M.Created:M.Ready}get cursor(){return this.active&&this._showTracker?"crosshair":null}get updating(){return this.analysisViewData!=null&&this.analysisViewData.updating||this._updatingHandles.updating}get _showTracker(){return this.active&&this._latestPointerMovePointerType==="mouse"}get _shouldRenderTracker(){var e;return this._showTracker&&((e=this.analysis.observer)==null?void 0:e.position)!=null&&!this.hasGrabbedManipulators}continue(){this.view.activeTool=this}stop(){this.view.activeTool=null}onEditableChange(){this.analysisViewData.editable=this.internallyEditable}onInputEvent(e){switch(e.type){case"immediate-double-click":this._doubleClickHandler(e);break;case"key-down":this._keyDownHandler(e);break;case"pointer-move":this._pointerMoveHandler(e)}}onInputEventAfter(e){e.type==="immediate-click"&&this._clickHandler(e)}onShow(){}onHide(){}onDeactivate(){this._clearCursorTracker()}_connectComputations(){return this._updatingHandles.addOnCollectionChange(()=>this.analysisViewData.computations,e=>this._onComputationsCollectionChange(e),{initial:!0,final:!0})}_onComputationsCollectionChange({added:e,removed:i}){for(const n of i)this._disconnectComputation(n);for(const n of e)this._connectComputation(n)}_connectComputation(e){if(this.destroyed)return void ne.getLogger(this).warn("Attempting to connect an analysis to a destroyed LineOfSight tool. Ignoring.");const i=this._analysisHandles;if(i.has(e))return;const n=this._createTargetManipulator(e.target);this._targetTrackerManipulator==null&&n.metadata.target===this.analysisViewData.cursorTarget&&(this._targetTrackerManipulator=n,this._targetTrackerManipulator.available=!1,this._targetTrackerManipulator.interactive=!1,this._updateLaserLineRenderer()),i.add([this._updatingHandles.add(()=>this._getLineOfSightManipulatorStateDependencies(e),()=>this._updateManipulatorState(n,e),R),this._updatingHandles.add(()=>e.elevationAlignedTargetLocation,s=>this._onTargetLocationChange(s,n),R)],e)}_disconnectComputation(e){if(this.destroyed)return void ne.getLogger(this).warn("Attempting to disconnect an analysis from a destroyed LineOfSight tool. Ignoring.");this._analysisHandles.remove(e);const i=this._getTargetManipulator(e.target);i!=null&&(this.manipulators.remove(i),this._manipulatorHandles.remove(i),this._targetTrackerManipulator!=null&&this._targetTrackerManipulator===i&&(this._targetTrackerManipulator=null))}_clearCursorTracker(){this.analysisViewData.cursorTarget=E(this.analysisViewData.cursorTarget)}_createTargetManipulator(e){const i={target:e,type:"target"},n=new kt(this.view,i);return this._manipulatorHandles.add([this._createTargetManipulatorDragPipeline(n),n.events.on("grab-changed",s=>this._manipulatorGrabChanged(n,s)),n.events.on("immediate-click",s=>this._manipulatorClick(n,s))],n),this.manipulators.add(n),e.position!=null?n.elevationAlignedLocation=e.position:n.available=!1,n}_getTargetManipulator(e){let i=null;return this.manipulators.forEach(n=>{const s=n.manipulator;i==null&&s.metadata.type==="target"&&s.metadata.target===e&&(i=s)}),i}_createObserverManipulator(){const e=new Mt(this.view,{type:"observer",intersection:null});return this._manipulatorHandles.add([this._createObserverManipulatorDragPipeline(e),e.events.on("grab-changed",i=>this._manipulatorGrabChanged(e,i)),e.events.on("immediate-click",i=>this._manipulatorClick(e,i))],e),this.manipulators.add(e),e}_screenToIntersection(){return e=>{const i=this._intersector.getScreenPointIntersection(e.screenEnd);return i==null?null:{...e,intersection:i}}}_createTargetManipulatorDragPipeline(e){return Pe(e,(i,n,s)=>{n.next(this._screenToIntersection()).next(this._updateTargetDragStep(e)).next(()=>this._updateLaserLineRenderer()),s.next(this._cancelTargetDragStep(e.metadata.target)).next(()=>this._updateLaserLineRenderer())})}_createObserverManipulatorDragPipeline(e){return Pe(e,(i,n,s)=>{n.next(this._screenToIntersection()).next(this._updateObserverDragStep()).next(()=>this._updateLaserLineRenderer()),s.next(this._cancelObserverDragStep()).next(()=>this._updateLaserLineRenderer())})}_updateObserverDragStep(){return e=>(e.intersection.mapPoint!=null?(this.analysis.observer==null&&(this.analysis.observer=new Te),this._updateFromIntersection(this.analysis.observer,e.intersection)):this.analysis.observer=null,e)}_cancelObserverDragStep(){var i;const e=((i=this.analysis.observer)==null?void 0:i.position)!=null?this.analysis.observer.clone():null;return n=>(this.analysis.observer=e,n)}_updateTargetDragStep(e){return i=>{this._updateFromIntersection(e.metadata.target,i.intersection);const n=i.intersection.mapPoint;return n!=null&&(e.elevationAlignedLocation=n),i}}_cancelTargetDragStep(e){var n;const i=(n=e.position)==null?void 0:n.clone();return s=>(e.position=i,s)}_manipulatorGrabChanged(e,i){switch(i.action){case"start":this._grabbedManipulator=e;break;case"end":this._grabbedManipulator===e&&(this._grabbedManipulator=null)}}_updateManipulatorState(e,i){const{isValid:n,isTargetVisible:s}=i.computationResult;e.state=n?s?U.Custom1:U.Custom2:U.Custom3}_getLineOfSightManipulatorStateDependencies(e){const{isValid:i,isTargetVisible:n}=e.computationResult;return{isValid:i,isTargetVisible:n}}_laserLineRendererDependencies(){return{laserlineVisualElement:this._laserlineVisualElement,grabbedManipulator:this._grabbedManipulator,shouldRenderTracker:this._shouldRenderTracker,observerPosition:this.analysis.observer!=null?this.analysis.observer.position:null,visible:this.visible}}_updateLaserLineRenderer(e=this._laserLineRendererDependencies()){const{laserlineVisualElement:i,grabbedManipulator:n,shouldRenderTracker:s,observerPosition:o,visible:l}=e;if(i==null)return;const h=n??(s&&o!=null?this._targetTrackerManipulator:null);h!=null&&l?(i.visible=!0,i.heightManifoldTarget=h.renderLocation,h!==this._observerManipulator?i.lineVerticalPlaneSegment=pt(this._observerManipulator.renderLocation,h.renderLocation,xt):i.lineVerticalPlaneSegment=null):(i.visible=!1,i.heightManifoldTarget=null,i.lineVerticalPlaneSegment=null)}_createLaserLine(){this._removeLaserLine();const{glowWidth:e,innerWidth:i}=Rt;this._laserlineVisualElement=new wt({view:this.view,attached:!0,visible:this.visible,style:{glowWidth:e,innerWidth:i},isDecoration:!0})}_removeLaserLine(){this._laserlineVisualElement!=null&&(this._laserlineVisualElement.destroy(),this._laserlineVisualElement=null)}_updateLaserLineStyle(e,i,n){const s=this._laserlineVisualElement;if(s==null)return;const o=s.style;s.style={...o,glowColor:v.toUnitRGB(e),innerColor:v.toUnitRGB(i),globalAlpha:n}}_onObserverLocationChange(e){e!=null?(this._observerManipulator.metadata.intersection=null,this._observerManipulator.available=!0,this._observerManipulator.elevationAlignedLocation=e):this._observerManipulator.available=!1}_onTargetLocationChange(e,i){e!=null?(i.elevationAlignedLocation=e,i!==this._targetTrackerManipulator&&(i.available=!0)):i.available=!1}_addPointFromClickEvent(e){var n;const i=this._intersector.getScreenPointIntersection(e);if((i==null?void 0:i.mapPoint)!=null)if(((n=this.analysis.observer)==null?void 0:n.position)!=null){this._clearCursorTracker();const s=new Ie;this._updateFromIntersection(s,i),this.analysis.targets.add(s)}else{const s=new Te;this._updateFromIntersection(s,i),this.analysis.observer=s}}_clickHandler(e){this.active&&e.button!==se.Right&&(this._addPointFromClickEvent(Ce(e)),e.stopPropagation())}_doubleClickHandler(e){this.active&&e.button!==se.Right&&(this.stop(),e.stopPropagation())}_keyDownHandler(e){this.active&&e.key==="Escape"&&(this.stop(),e.stopPropagation())}_pointerMoveHandler(e){var s;if(this.hasGrabbedManipulators||(this._latestPointerMovePointerType=e.pointerType,this._updateLaserLineRenderer(),!this._showTracker||((s=this.analysis.observer)==null?void 0:s.position)==null))return;const i=Ce(e),n=this._intersector.getScreenPointIntersection(i);(n==null?void 0:n.mapPoint)!=null&&(this.analysisViewData.cursorTarget==null&&(this.analysisViewData.cursorTarget=new Ie),this._updateFromIntersection(this.analysisViewData.cursorTarget,n),this._updateLaserLineRenderer())}_updateFromIntersection(e,i){if(i.mapPoint==null)return e.position=null,e.elevationInfo=null,void(e.feature=null);switch(i.type){case F.OBJECT:if(i.graphic!=null){const s=i.graphic,o=gt(s);o.mode==="on-the-ground"&&(o.mode="relative-to-ground",o.offset=0),e.elevationInfo=new we(o),e.feature=s}else e.elevationInfo=null,e.feature=null;break;case F.TERRAIN:e.elevationInfo=new we({mode:"on-the-ground"}),e.feature=null;break;default:e.elevationInfo=null,e.feature=null}const n=i.mapPoint.clone();n.z=vt(this.view,n,{mode:"absolute-height",offset:0},e.elevationInfo),e.position=n}_manipulatorClick(e,i){if(e.metadata.type==="observer"||e.grabbing||e.dragging||i.button!==se.Right||this.analysis.targets.length<=1)return;const{target:n}=e.metadata;this.analysis.targets.remove(n),i.stopPropagation()}get testInfo(){return{laserLineVisualElement:this._laserlineVisualElement,getTargetManipulator:e=>this._getTargetManipulator(e)}}};a([r({constructOnly:!0})],O.prototype,"view",void 0),a([r({constructOnly:!0})],O.prototype,"analysis",void 0),a([r({readOnly:!0})],O.prototype,"state",null),a([r({readOnly:!0})],O.prototype,"cursor",null),a([r()],O.prototype,"removeIncompleteOnCancel",void 0),a([r({readOnly:!0})],O.prototype,"updating",null),a([r({constructOnly:!0})],O.prototype,"analysisViewData",void 0),a([r({readOnly:!0})],O.prototype,"_showTracker",null),a([r()],O.prototype,"_latestPointerMovePointerType",void 0),a([r()],O.prototype,"_shouldRenderTracker",null),a([r()],O.prototype,"_laserlineVisualElement",void 0),a([r()],O.prototype,"_grabbedManipulator",void 0),O=a([D("esri.views.3d.interactive.analysisTools.lineOfSight.LineOfSightTool")],O);const xt=ct();class Ft{constructor(e,i,n,s){this.visibleLineVisualElement=e,this.occludedLineVisualElement=i,this.undefinedLineVisualElement=n,this.targetVisualElement=s}destroy(){this.visibleLineVisualElement.destroy(),this.occludedLineVisualElement.destroy(),this.undefinedLineVisualElement.destroy(),this.targetVisualElement.destroy()}}let V=class extends k{constructor(t){super(t),this._lineOfSightVisualElements=new Array,this._computationHandles=new ie,this._updatingHandles=new ge}initialize(){this.addHandles(this._connectComputations()),this._createObserverVisualization()}destroy(){this._updatingHandles=E(this._updatingHandles),this._computationHandles=E(this._computationHandles),this._observerVisualElement=E(this._observerVisualElement)}get visible(){return this.analysisViewData.visible}get updating(){return this._updatingHandles.updating}get interactiveAndEditable(){return this.analysisViewData.interactive&&this.analysisViewData.editable}get test(){return{disablePartialOcclusion:()=>{for(const t of this._lineOfSightVisualElements)t.visibleLineVisualElement.renderOccluded=ae.Occlude,t.occludedLineVisualElement.renderOccluded=ae.Occlude,t.undefinedLineVisualElement.renderOccluded=ae.Occlude},visualizations:this._lineOfSightVisualElements}}_createLineOfSightVisualization(){const t=Y,e=this.view,i=this.isDecoration,n={view:e,attached:!0,width:t.outerWidth,innerWidth:t.innerWidth,isDecoration:i},s=v.toUnitRGBA(t.visibleOuterColor),o=v.toUnitRGBA(t.visibleInnerColor),l=v.toUnitRGBA(t.occludedOuterColor),h=v.toUnitRGBA(t.occludedInnerColor),d=v.toUnitRGBA(t.undefinedOuterColor),c=v.toUnitRGBA(t.undefinedInnerColor),u=new oe({...n,color:s,innerColor:o}),p=new oe({...n,color:l,innerColor:h}),g=new oe({...n,color:d,innerColor:c}),C=new Le({view:e,attached:!0,...Ee,size:8,isDecoration:i}),f=new Ft(u,p,g,C);return this._lineOfSightVisualElements.push(f),f}_destroyLineOfSightVisualization(t){t.destroy(),this._lineOfSightVisualElements.splice(this._lineOfSightVisualElements.indexOf(t),1)}_updateLineOfSightVisualization(t,e,i){const n=Y,{computationResult:s,inputPoints:o}=t,{start:l,end:h,intersection:d,isValid:c,isTargetVisible:u}=s,{observer:p}=o,g=Ut;g[12]=p[0],g[13]=p[1],g[14]=p[2];const C=B(zt,l,p),f=B(Gt,h,p),w=B(jt,d,p),{visibleLineVisualElement:_,occludedLineVisualElement:L,undefinedLineVisualElement:P,targetVisualElement:S}=e,Ge=this.analysisViewData.elevationAlignedObserver==null||t.elevationAlignedTargetLocation==null,N=this.visible&&!Ge;_.visible=N,L.visible=N,P.visible=N,S.visible=N,S.attached=!i.interactiveAndEditable,N&&(_.geometry=null,L.geometry=null,P.geometry=null,S.geometry=t.elevationAlignedTargetLocation,c?u?(_.geometry=[[$(C),$(f)]],_.transform=g,_.color=v.toUnitRGBA(n.visibleOuterColor),S.color=v.toUnitRGBA(n.visibleInnerColor)):(_.geometry=[[$(C),$(w)]],_.transform=g,_.color=v.toUnitRGBA(n.occludedOuterColor),L.geometry=[[$(w),$(f)]],L.transform=g,S.color=v.toUnitRGBA(n.occludedInnerColor)):(P.geometry=[[$(C),$(f)]],P.transform=g,S.color=v.toUnitRGBA(n.undefinedInnerColor)))}_getLineOfSightVisualizationDependencies(t){const{computationResult:e}=t,{occludedOuterColor:i,visibleOuterColor:n}=Y;return{computationResult:e,occludedOuterColor:i,visibleOuterColor:n,visible:this.visible,interactiveAndEditable:this.interactiveAndEditable}}_connectComputation(t){const e=this._computationHandles;if(e.has(t))return;const i=this._createLineOfSightVisualization();e.add([this._updatingHandles.add(()=>this._getLineOfSightVisualizationDependencies(t),n=>this._updateLineOfSightVisualization(t,i,n),{initial:!0,equals:()=>!1}),ve(()=>this._destroyLineOfSightVisualization(i))],t)}_disconnectComputation(t){this._computationHandles.remove(t)}_connectComputations(){return this._updatingHandles.addOnCollectionChange(()=>this.analysisViewData.computations,t=>this._onComputationsCollectionChange(t),{initial:!0,final:!0})}_onComputationsCollectionChange({added:t,removed:e}){for(const i of e)this._disconnectComputation(i);for(const i of t)this._connectComputation(i)}_createObserverVisualization(){const t=v.toUnitRGBA(Y.visibleInnerColor),e=new Le({view:this.view,color:t,...Ee,isDecoration:this.isDecoration});this._observerVisualElement=e,this.addHandles(this._updatingHandles.add(()=>({observer:this.analysisViewData.elevationAlignedObserver,interactiveAndEditable:this.interactiveAndEditable,visible:this.visible}),({observer:i,interactiveAndEditable:n,visible:s})=>{i!=null&&!n&&s?(e.geometry=i,this._observerVisualElement.attached=!0):e.attached=!1},R))}};a([r({constructOnly:!0})],V.prototype,"analysis",void 0),a([r({constructOnly:!0})],V.prototype,"analysisViewData",void 0),a([r({constructOnly:!0})],V.prototype,"view",void 0),a([r({readOnly:!0})],V.prototype,"visible",null),a([r({constructOnly:!0})],V.prototype,"isDecoration",void 0),a([r()],V.prototype,"updating",null),a([r()],V.prototype,"interactiveAndEditable",null),a([r()],V.prototype,"test",null),V=a([D("esri.views.3d.analysis.LineOfSight.LineOfSightVisualization")],V);const Ee={size:6,pixelSnappingEnabled:!1,primitive:"circle",elevationInfo:{mode:"absolute-height",offset:0},outlineSize:0},zt=m(),Gt=m(),jt=m(),Ut=mt();let b=class extends yt(He.EventedMixin(k)){constructor(t){super(t),this.type="line-of-sight-view-3d",this.analysis=null,this.tool=null,this.computations=new _t,this.elevationAlignedObserver=null,this.observerEngineLocation=m(),this.cursorTarget=null,this.editable=!0}initialize(){const t=this.view,e=this.analysis;this._analysisController=new y({analysis:e,analysisViewData:this,view:t}),this._analysisVisualization=new V({analysis:e,analysisViewData:this,view:t,isDecoration:!this.parent}),this.addHandles([this._analysisController.on("result-changed",i=>{i.target!==this.cursorTarget&&this.emit("result-changed",i)}),bt(this,O)])}destroy(){Ct(this),this._analysisController=E(this._analysisController),this._analysisVisualization=E(this._analysisVisualization)}get results(){return this.computations.map(t=>t.result)}get priority(){return this._analysisController.priority}set priority(t){this._analysisController.priority=t}get updating(){return this._analysisController!=null&&this._analysisController.updating||this._analysisVisualization!=null&&this._analysisVisualization.updating}getResultForTarget(t){var e;return(e=this.computations.find(i=>i.target===t))==null?void 0:e.result}get testInfo(){return{visualization:this._analysisVisualization,controller:this._analysisController}}};a([r({readOnly:!0})],b.prototype,"type",void 0),a([r({constructOnly:!0,nonNullable:!0})],b.prototype,"analysis",void 0),a([r()],b.prototype,"tool",void 0),a([r({readOnly:!0})],b.prototype,"results",null),a([r()],b.prototype,"priority",null),a([r()],b.prototype,"computations",void 0),a([r()],b.prototype,"elevationAlignedObserver",void 0),a([r()],b.prototype,"observerEngineLocation",void 0),a([r()],b.prototype,"cursorTarget",void 0),a([r()],b.prototype,"updating",null),a([r()],b.prototype,"editable",void 0),a([r()],b.prototype,"_analysisController",void 0),a([r()],b.prototype,"_analysisVisualization",void 0),b=a([D("esri.views.3d.analysis.LineOfSightAnalysisView3D")],b);const oi=b;export{oi as default};
