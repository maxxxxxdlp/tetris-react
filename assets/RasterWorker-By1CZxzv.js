import{bd as a,ba as l,ed as c}from"./index-Bv0Hohk0.js";import{u as i,f as m,m as f,S as u,L as p,h as S,W as d,E as x,U as O,D as y,R as h,a as J,s as N}from"./dataUtils-tOrpKPXg.js";import{R as B,i as b}from"./utils-D3i6CC6-.js";import{M as P,T as k,e as g}from"./rasterProjectionHelper-C2k94LqZ.js";class R{convertVectorFieldData(e){const t=i.fromJSON(e.pixelBlock),s=m(t,e.type);return Promise.resolve(s!=null?s.toJSON():null)}computeStatisticsHistograms(e){const t=i.fromJSON(e.pixelBlock),s=f(t);return Promise.resolve(s)}async decode(e){const t=await u(e.data,e.options);return t&&t.toJSON()}symbolize(e){e.pixelBlock=i.fromJSON(e.pixelBlock),e.extent=e.extent?a.fromJSON(e.extent):null;const t=this.symbolizer.symbolize(e);return Promise.resolve(t!=null?t.toJSON():null)}async updateSymbolizer(e){var t;this.symbolizer=p.fromJSON(e.symbolizerJSON),e.histograms&&((t=this.symbolizer)==null?void 0:t.rendererJSON.type)==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=e.histograms)}async updateRasterFunction(e){this.rasterFunction=B(e.rasterFunctionJSON)}async process(e){var s;const t=this.rasterFunction.process({extent:a.fromJSON(e.extent),primaryPixelBlocks:e.primaryPixelBlocks.map(o=>o!=null?i.fromJSON(o):null),primaryPixelSizes:(s=e.primaryPixelSizes)==null?void 0:s.map(o=>o!=null?l.fromJSON(o):null),primaryRasterIds:e.primaryRasterIds});return t!=null?t.toJSON():null}stretch(e){const t=this.symbolizer.simpleStretch(i.fromJSON(e.srcPixelBlock),e.stretchParams);return Promise.resolve(t==null?void 0:t.toJSON())}estimateStatisticsHistograms(e){const t=S(i.fromJSON(e.srcPixelBlock));return Promise.resolve(t)}split(e){const t=d(i.fromJSON(e.srcPixelBlock),e.tileSize,e.maximumPyramidLevel??0,e.useBilinear===!1);return t&&t.forEach((s,o)=>{t.set(o,s==null?void 0:s.toJSON())}),Promise.resolve(t)}clipTile(e){const t=i.fromJSON(e.pixelBlock),s=x({...e,pixelBlock:t});return Promise.resolve(s==null?void 0:s.toJSON())}async mosaicAndTransform(e){const t=e.srcPixelBlocks.map(n=>n?new i(n):null),s=O(t,e.srcMosaicSize,{blockWidths:e.blockWidths,alignmentInfo:e.alignmentInfo,clipOffset:e.clipOffset,clipSize:e.clipSize});let o,r=s;return e.coefs&&(r=y(s,e.destDimension,e.coefs,e.sampleSpacing,e.interpolation)),e.projectDirections&&e.gcsGrid&&(o=h(e.destDimension,e.gcsGrid),r=J(r,e.isUV?"vector-uv":"vector-magdir",o)),{pixelBlock:r==null?void 0:r.toJSON(),localNorthDirections:o}}async createFlowMesh(e,t){const s={data:new Float32Array(e.flowData.buffer),mask:new Uint8Array(e.flowData.maskBuffer),width:e.flowData.width,height:e.flowData.height},{vertexData:o,indexData:r}=await N(e.meshType,e.simulationSettings,s,t.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:r.buffer},transferList:[o.buffer,r.buffer]}}async getProjectionOffsetGrid(e){const t=a.fromJSON(e.projectedExtent),s=a.fromJSON(e.srcBufferExtent);let o=null;e.datumTransformationSteps&&(o=new c({steps:e.datumTransformationSteps})),(e.includeGCSGrid||P(t.spatialReference,s.spatialReference,o))&&await k();const r=e.rasterTransform?b(e.rasterTransform):null;return g({...e,projectedExtent:t,srcBufferExtent:s,datumTransformation:o,rasterTransform:r})}}export{R as default};