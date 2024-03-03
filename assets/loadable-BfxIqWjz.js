import{dp as t}from"./index-Bv0Hohk0.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */const o=new WeakMap,a=new WeakMap;function p(e){a.set(e,new Promise(n=>o.set(e,n)))}function i(e){o.get(e)()}function s(e){return a.get(e)}async function c(e){return await s(e),t(e),new Promise(n=>requestAnimationFrame(()=>n()))}export{i as a,c,p as s};
