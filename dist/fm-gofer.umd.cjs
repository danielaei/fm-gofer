(function(i,a){typeof exports=="object"&&typeof module<"u"?a(exports):typeof define=="function"&&define.amd?define(["exports"],a):(i=typeof globalThis<"u"?globalThis:i||self,a(i.FMGofer={}))})(this,function(i){"use strict";const x="The FM script call timed out",l="fmGoferCallbackD7738642C91848E08720EAC24EDDA483";function I(){return"xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,o=>{var r=Math.random()*16|0,e=o=="x"?r:r&3|8;return e.toString(16)})}function v(){return typeof window.fmGofer=="object"&&window.fmGofer!==null&&!Array.isArray(window.fmGofer)}function h(){v()||(window.fmGofer={promises:{},callbackName:l},window[l]=G)}function D(t,o,r,e){const n=I(),f={resolve:t,reject:o};return r!==0&&(f.timeoutID=setTimeout(()=>{f.fmOnReadyIntervalID&&clearInterval(f.fmOnReadyIntervalID),d(n),o(e)},r)),window.fmGofer.promises[n]=f,n}function b(t){return window.fmGofer.promises[t]}function d(t){var r,e;const o=(e=(r=window.fmGofer)==null?void 0:r.promises)==null?void 0:e[t];return o&&(o.timeoutID&&clearTimeout(o.timeoutID),o.fmOnReadyIntervalID&&clearInterval(o.fmOnReadyIntervalID)),delete window.fmGofer.promises[t]}function G(t,o,r){try{r==="0"&&(r="");const e=b(t);if(typeof e>"u")throw new Error(`No promise found for promiseID ${t}.`);e.timeoutID&&clearTimeout(e.timeoutID),r?e.reject(o):e.resolve(o),d(t)}catch(e){console.error(e)}}function M(t,o,r){let e;return{promise:new Promise((f,s)=>{if(typeof window.FileMaker=="object"){window.FileMaker.PerformScriptWithOption(t,o,r);return}const m=5,u=2e3;let c=0;e=setInterval(()=>{c+=m,c>u&&(clearInterval(e),s(`window.FileMaker not found within ${u} ms`)),typeof window.FileMaker=="object"&&(clearInterval(e),window.FileMaker.PerformScriptWithOption(t,o,r),f())},m)}),intervalID:e}}function p(t,o,r,e=15e3,n=x){if(typeof t!="string"||!t)throw new Error("script must be a string");if(typeof e!="number")throw new Error("timeout must be a number");if(typeof n!="string")throw new Error("timeoutMessage must be a string");return new Promise(async(f,s)=>{h();const m=D(f,s,e,n),u={promiseID:m,callbackName:l,parameter:o},c=JSON.stringify(u);try{const{promise:w,intervalID:P}=M(t,c,r);window.fmGofer.promises[m].fmOnReadyIntervalID=P,await w}catch(w){d(m),s(w)}})}function y(t,o=void 0,r=15e3,e=x){return p(t,o,void 0,r,e)}const O={PerformScript:y,PerformScriptWithOption:p};i.PerformScript=y,i.PerformScriptWithOption=p,i.default=O,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});