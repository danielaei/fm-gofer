!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.FMGofer=t():e.FMGofer=t()}(this,(function(){return(()=>{"use strict";var e={d:(t,o)=>{for(var r in o)e.o(o,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:o[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}e.r(t),e.d(t,{PerformScriptWithOption:()=>m,PerformScript:()=>d});var r=function(){return"object"===o(window.fmGofer)&&null!==window.fmGofer},n=function(){return r()?window.fmGofer.callbackName:null},i=function(){window.fmGofer={promises:{},callbackName:null}},l=function(e,t,o,r){var n={resolve:e,reject:t};0!==o&&(n.timeoutID=setTimeout((function(){t(r)}),o));var i="xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}));return window.fmGofer.promises[i]=n,i},f=function(e){return window.fmGofer.promises[e]},u=function(e){return delete window.fmGofer.promises[e]},c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";try{"0"===o&&(o=!1);var r=f(e);r.timeoutID&&clearTimeout(r.timeoutID),o?r.reject(t):r.resolve(t),u(e)}catch(e){console.error(e),alert(e)}},a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"fmGoferD7738642C91848E08720EAC24EDDA483";if("string"!=typeof e||!e)throw new Error("callbackName must be a non-empty string");r||i(),window[e]=c,window.fmGofer.callbackName=e},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,f=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:3e3,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"The FM script call timed out";if("number"!=typeof u)throw new Error("timeout must be a number");if("string"!=typeof c)throw new Error("timeoutMessage must be a string");return new Promise((function(m,d){r()||i(),n()||a();var p,s,x=l(m,d,u,c),w=JSON.stringify({promiseID:x,callbackName:n(),parameter:t});try{p=setInterval((function(){"object"===o(window.FileMaker)&&(clearTimeout(s),clearInterval(p),window.FileMaker.PerformScriptWithOption(e,w,f))}),5),s=setTimeout((function(){throw clearInterval(p),new Error("window.FileMaker not found")}),2e3)}catch(e){throw clearInterval(p),clearTimeout(s),e}}))},d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"The FM script call timed out",n=void 0;return m(e,t,n,o,r)};return t})()}));