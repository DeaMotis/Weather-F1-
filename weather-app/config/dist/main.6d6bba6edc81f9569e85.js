/*! For license information please see main.6d6bba6edc81f9569e85.js.LICENSE.txt */
(()=>{"use strict";var t,e,r,n={545:(t,e,r)=>{var n=r(540),o=r(338),a=r(83);const i=function(t){var e=t.data,r=e.main,o=e.weather,a=e.name;return n.createElement("div",null,n.createElement("h2",null,"Погода в ",a),n.createElement("p",null,"Температура: ",r.temp," °C"),n.createElement("p",null,"Описание: ",o[0].description))},c=function(t){var e=t.cities,r=t.onCityChange;return n.createElement("select",{onChange:function(t){return r(t.target.value)}},n.createElement("option",{value:""},"Выберите город"),e.map((function(t){return n.createElement("option",{key:t,value:t},t)})))};function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function l(){l=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",f=a.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,r){return t[e]=r}}function h(t,e,r,n){var a=e&&e.prototype instanceof b?e:b,i=Object.create(a.prototype),c=new T(n||[]);return o(i,"_invoke",{value:_(t,r,c)}),i}function p(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=h;var v="suspendedStart",y="suspendedYield",d="executing",m="completed",g={};function b(){}function w(){}function E(){}var x={};s(x,i,(function(){return this}));var L=Object.getPrototypeOf,O=L&&L(L(F([])));O&&O!==r&&n.call(O,i)&&(x=O);var S=E.prototype=b.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(o,a,i,c){var l=p(t[o],t,a);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==u(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){f.value=t,i(f)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function _(e,r,n){var o=v;return function(a,i){if(o===d)throw Error("Generator is already running");if(o===m){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var u=P(c,n);if(u){if(u===g)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var l=p(e,r,n);if("normal"===l.type){if(o=n.done?m:y,l.arg===g)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function P(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,P(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),g;var a=p(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,g;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,g):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,g)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function F(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(u(e)+" is not iterable")}return w.prototype=E,o(S,"constructor",{value:E,configurable:!0}),o(E,"constructor",{value:w,configurable:!0}),w.displayName=s(E,f,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,E):(t.__proto__=E,s(t,f,"GeneratorFunction")),t.prototype=Object.create(S),t},e.awrap=function(t){return{__await:t}},j(k.prototype),s(k.prototype,c,(function(){return this})),e.AsyncIterator=k,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new k(h(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},j(S),s(S,f,"Generator"),s(S,i,(function(){return this})),s(S,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=F,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,g):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),g},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),g}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:F(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),g}},e}function f(t,e,r,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function s(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],u=!0,l=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(l)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return h(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n}const p=function(){var t=s((0,n.useState)([]),2),e=t[0],r=t[1],o=s((0,n.useState)(""),2),u=(o[0],o[1]),h=s((0,n.useState)(null),2),p=h[0],v=h[1];s((0,n.useState)("bfefdb8a01b37af196eb9862aec3cbb9"),1)[0],(0,n.useEffect)((function(){r(["Москва","Санкт-Петербург","Казань","Новосибирск","Екатеринбург"])}),[]);var y=function(){var t,e=(t=l().mark((function t(e){var r;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a.A.get("https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric");case 3:r=t.sent,v(r.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error("Error fetching weather data:",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(t){f(a,n,o,i,c,"next",t)}function c(t){f(a,n,o,i,c,"throw",t)}i(void 0)}))});return function(t){return e.apply(this,arguments)}}();return n.createElement("div",{className:"App"},n.createElement(c,{cities:e,onCityChange:function(t){u(t),y(t)}}),p&&n.createElement(i,{data:p}))};var v;o.createRoot(document.getElementById("root")).render(n.createElement(n.StrictMode,null,n.createElement(p,null))),v&&v instanceof Function&&r.e(237).then(r.bind(r,237)).then((function(t){var e=t.getCLS,r=t.getFID,n=t.getFCP,o=t.getLCP,a=t.getTTFB;e(v),r(v),n(v),o(v),a(v)}))}},o={};function a(t){var e=o[t];if(void 0!==e)return e.exports;var r=o[t]={exports:{}};return n[t](r,r.exports,a),r.exports}a.m=n,t=[],a.O=(e,r,n,o)=>{if(!r){var i=1/0;for(f=0;f<t.length;f++){for(var[r,n,o]=t[f],c=!0,u=0;u<r.length;u++)(!1&o||i>=o)&&Object.keys(a.O).every((t=>a.O[t](r[u])))?r.splice(u--,1):(c=!1,o<i&&(i=o));if(c){t.splice(f--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var f=t.length;f>0&&t[f-1][2]>o;f--)t[f]=t[f-1];t[f]=[r,n,o]},a.d=(t,e)=>{for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},a.f={},a.e=t=>Promise.all(Object.keys(a.f).reduce(((e,r)=>(a.f[r](t,e),e)),[])),a.u=t=>t+".5de07726f1f31da512c3.js",a.miniCssF=t=>{},a.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),e={},r="Weather-F1-:",a.l=(t,n,o,i)=>{if(e[t])e[t].push(n);else{var c,u;if(void 0!==o)for(var l=document.getElementsByTagName("script"),f=0;f<l.length;f++){var s=l[f];if(s.getAttribute("src")==t||s.getAttribute("data-webpack")==r+o){c=s;break}}c||(u=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.setAttribute("data-webpack",r+o),c.src=t),e[t]=[n];var h=(r,n)=>{c.onerror=c.onload=null,clearTimeout(p);var o=e[t];if(delete e[t],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((t=>t(n))),r)return r(n)},p=setTimeout(h.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=h.bind(null,c.onerror),c.onload=h.bind(null,c.onload),u&&document.head.appendChild(c)}},a.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.p="/",(()=>{var t={792:0};a.f.j=(e,r)=>{var n=a.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise(((r,o)=>n=t[e]=[r,o]));r.push(n[2]=o);var i=a.p+a.u(e),c=new Error;a.l(i,(r=>{if(a.o(t,e)&&(0!==(n=t[e])&&(t[e]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;c.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",c.name="ChunkLoadError",c.type=o,c.request=i,n[1](c)}}),"chunk-"+e,e)}},a.O.j=e=>0===t[e];var e=(e,r)=>{var n,o,[i,c,u]=r,l=0;if(i.some((e=>0!==t[e]))){for(n in c)a.o(c,n)&&(a.m[n]=c[n]);if(u)var f=u(a)}for(e&&e(r);l<i.length;l++)o=i[l],a.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return a.O(f)},r=self.webpackChunkWeather_F1_=self.webpackChunkWeather_F1_||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var i=a.O(void 0,[632],(()=>a(545)));i=a.O(i)})();