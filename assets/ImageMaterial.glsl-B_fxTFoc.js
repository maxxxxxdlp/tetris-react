import{sK as I,sL as O,sM as b,a0 as l,sN as c,sO as S,sP as A,sQ as x,sR as C,sS as p,no as y,sT as D,sU as u,sV as w,_ as N,sW as R,qt as E,e as r,sX as o,iU as P,sY as V,sZ as M,s_ as L,s$ as F,t0 as U,t1 as j,t2 as z,t3 as B,t4 as W,t5 as G,t6 as H,t7 as q,t8 as Q,t9 as k,ta as K,ir as _,tb as m,tc as X,td as Y,te as Z,tf as J,tg as tt,sh as et,th as st,ti as at,j6 as it,tj as rt}from"./index-Bv0Hohk0.js";function T(s){const t=new I,{vertex:e,fragment:a}=t;return O(e,s),t.include(b,s),t.attributes.add(l.POSITION,"vec3"),t.attributes.add(l.UV0,"vec2"),s.perspectiveInterpolation&&t.attributes.add(l.PERSPECTIVEDIVIDE,"float"),t.varyings.add("vpos","vec3"),s.multipassEnabled&&t.varyings.add("depth","float"),e.code.add(c`
    void main(void) {
      vpos = position;
      ${s.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0;
      gl_Position = transformPosition(proj, view, vpos);

      ${s.perspectiveInterpolation?"gl_Position *= perspectiveDivide;":""}
    }
  `),t.include(S,s),t.include(A,s),a.uniforms.add(new x("tex",n=>n.texture),new C("opacity",n=>n.opacity)),t.varyings.add("vTexCoord","vec2"),s.output===p.Alpha?a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${s.multipassEnabled?"terrainDepthTest(depth);":""}

      float alpha = texture(tex, vTexCoord).a * opacity;
      if (alpha  < ${c.float(y)}) {
        discard;
      }

      fragColor = vec4(alpha);
    }
    `):(a.include(D),a.code.add(c`
    void main() {
      discardBySlice(vpos);
      ${s.multipassEnabled?"terrainDepthTest(depth);":""}
      fragColor = texture(tex, vTexCoord) * opacity;

      if (fragColor.a < ${c.float(y)}) {
        discard;
      }

      fragColor = highlightSlice(fragColor, vpos);
      ${s.transparencyPassType===u.Color?"fragColor = premultiplyAlpha(fragColor);":""}
    }
    `)),t}const ot=Object.freeze(Object.defineProperty({__proto__:null,build:T},Symbol.toStringTag,{value:"Module"}));class g extends V{initializeProgram(t){return new M(t.rctx,g.shader.get().build(this.configuration),$)}_setPipelineState(t,e){const a=this.configuration,n=t===u.NONE,d=t===u.FrontFace;return L({blending:a.output!==p.Color&&a.output!==p.Alpha||!a.transparent?null:n?nt:F(t),culling:U(a.cullFace),depthTest:{func:j(t)},depthWrite:n?a.writeDepth?z:null:B(t),colorWrite:W,stencilWrite:a.hasOccludees?G:null,stencilTest:a.hasOccludees?e?H:q:null,polygonOffset:n||d?null:Q(a.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipeline(t){return t?this._occludeePipelineState:super.getPipeline()}}g.shader=new w(ot,()=>N(()=>Promise.resolve().then(()=>ut),void 0));const nt=R(E.ONE,E.ONE_MINUS_SRC_ALPHA);class i extends k{constructor(){super(...arguments),this.output=p.Color,this.cullFace=P.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=u.NONE,this.multipassEnabled=!1,this.cullAboveGround=!1,this.perspectiveInterpolation=!0}}r([o({count:p.COUNT})],i.prototype,"output",void 0),r([o({count:P.COUNT})],i.prototype,"cullFace",void 0),r([o()],i.prototype,"hasSlicePlane",void 0),r([o()],i.prototype,"transparent",void 0),r([o()],i.prototype,"enableOffset",void 0),r([o()],i.prototype,"writeDepth",void 0),r([o()],i.prototype,"hasOccludees",void 0),r([o({count:u.COUNT})],i.prototype,"transparencyPassType",void 0),r([o()],i.prototype,"multipassEnabled",void 0),r([o()],i.prototype,"cullAboveGround",void 0),r([o()],i.prototype,"perspectiveInterpolation",void 0),r([o({constValue:!1})],i.prototype,"occlusionPass",void 0);const $=new Map([[l.POSITION,0],[l.UV0,2],[l.PERSPECTIVEDIVIDE,3]]);class ht extends K{constructor(t){super(t,new ct),this.supportsEdges=!0,this.produces=new Map([[_.OPAQUE_MATERIAL,e=>e===p.Highlight||m(e)&&!this.parameters.transparent],[_.TRANSPARENT_MATERIAL,e=>m(e)&&this.parameters.transparent&&this.parameters.writeDepth],[_.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>m(e)&&this.parameters.transparent&&!this.parameters.writeDepth],[_.DRAPED_MATERIAL,e=>X(e)]]),this._vertexAttributeLocations=$,this._configuration=new i}getConfiguration(t,e){return this._configuration.output=t,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=e.transparencyPassType,this._configuration.enableOffset=e.camera.relativeElevation<Y,this._configuration.multipassEnabled=e.multipassEnabled,this._configuration.cullAboveGround=e.multipassTerrain.cullAboveGround,this._configuration.perspectiveInterpolation=this.parameters.perspectiveInterpolation,this._configuration}createGLMaterial(t){return new lt(t)}createBufferWriter(){const t=Z.clone();return this.parameters.perspectiveInterpolation&&t.f32(l.PERSPECTIVEDIVIDE),new pt(t)}}class lt extends J{constructor(t){super({...t,...t.material.parameters})}_updateParameters(t){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(g,t)}_updateOccludeeState(t){t.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:t.hasOccludees}),this._updateParameters(t))}beginSlot(t){return this._output!==p.Color&&this._output!==p.Alpha||this._updateOccludeeState(t),this._updateParameters(t)}}class pt extends tt{write(t,e,a,n,d){for(const h of this.vertexBufferLayout.fields.keys()){const f=a.attributes.get(h);if(f)if(h===l.PERSPECTIVEDIVIDE){et(f.size===1);const v=n.getField(h,st);v&&at(f,v,d)}else it(h,f,t,e,n,d)}}}class ct extends rt{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=P.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0,this.perspectiveInterpolation=!1}}const ut=Object.freeze(Object.defineProperty({__proto__:null,build:T},Symbol.toStringTag,{value:"Module"}));export{ht as T};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
