if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,c)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const t={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return t;default:return e(r)}}))).then((e=>{const r=c(...e);return s.default||(s.default=r),s}))})))}}define("./service-worker.js",["./workbox-6881a531"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_merged_assets/_static/noscript.css",revision:"1a5e2651bf419b6261b64869ca95af04"},{url:"490f016e.css",revision:"1753244dada61e9655aa180c07b74687"},{url:"5cbbbada.css",revision:"d585ae57a24792582365be2a82e071d5"},{url:"a0513237.css",revision:"a3d8fa08c801b54cf7b24db2c5e670d1"},{url:"b8c01bc2.css",revision:"93ea8bd0b5fbfa74d10ceb56c127a465"}],{}),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
