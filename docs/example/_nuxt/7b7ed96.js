!function(t){function e(data){for(var e,o,f=data[0],l=data[1],d=data[2],i=0,m=[];i<f.length;i++)o=f[i],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);for(h&&h(data);m.length;)m.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var t,i=0;i<c.length;i++){for(var e=c[i],n=!0,o=1;o<e.length;o++){var l=e[o];0!==r[l]&&(n=!1)}n&&(c.splice(i--,1),t=f(f.s=e[0]))}return t}var o={},r={1:0},c=[];function f(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,f),n.l=!0,n.exports}f.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,o){n=r[t]=[e,o]}));e.push(n[2]=o);var c,script=document.createElement("script");script.charset="utf-8",script.timeout=120,f.nc&&script.setAttribute("nonce",f.nc),script.src=function(t){return f.p+""+{0:"774dfff",3:"59e55b4",4:"655d54c",5:"7a35627",6:"537e371",7:"b6c94ac",8:"0b4d1c8",9:"5cc30ff",10:"bbd859f",11:"5f164e4",12:"e6af88d",13:"b1c418f",14:"f864579",15:"a52cda5",16:"0a4cfff",17:"c41f953",18:"ad533fe",19:"f877dff",20:"0c136a3",21:"947b310",22:"3a8bc1d",23:"8efa31a",24:"f86e543",25:"05fa4ce",26:"c48df31",27:"08a7676",28:"cb034e9",29:"b060613",31:"384d700",32:"0550376",33:"b918abd",34:"2f52149"}[t]+".js"}(t);var l=new Error;c=function(e){script.onerror=script.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+c+")",l.name="ChunkLoadError",l.type=o,l.request=c,n[1](l)}r[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:script})}),12e4);script.onerror=script.onload=c,document.head.appendChild(script)}return Promise.all(e)},f.m=t,f.c=o,f.d=function(t,e,n){f.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},f.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},f.t=function(t,e){if(1&e&&(t=f(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(f.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)f.d(n,o,function(e){return t[e]}.bind(null,o));return n},f.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return f.d(e,"a",e),e},f.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},f.p="/example/_nuxt/",f.oe=function(t){throw console.error(t),t};var l=window.webpackJsonp=window.webpackJsonp||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var i=0;i<l.length;i++)e(l[i]);var h=d;c.push([194,2,30]),n()}(Array(58).concat([function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));n(7),n(53);function o(t){var e=0;if(0===t.length)return e;for(var i=0;i<t.length;i++){e=(e<<5)-e+t.charCodeAt(i),e&=e}return e}function r(t){return o(t).toString(16)}},,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return f}));n(42),n(113),n(7),n(20),n(43),n(26);var o=new Map;var r=function(t,e){if(void 0===t&&(t="0%"),void 0===e&&(e=[0]),"undefined"==typeof IntersectionObserver)return null;var n=new IntersectionObserver((function(t){t.forEach((function(t){if(t.isIntersecting||t.intersectionRatio>0){var e=t.target;!function(t){o.get(t)(),o.delete(t)}(e),n.unobserve(e)}}))}),{rootMargin:t,threshold:e});return n}("0%");function c(t,e){r&&(o.set(t,e),r.observe(t))}function f(t){o.delete(t)}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return f})),n.d(e,"a",(function(){return d}));n(65);var o={device:{hardwareConcurrency:{min:2,max:48},deviceMemory:{min:2}},timing:{fcp:500,dcl:800},lighthouseDetectionByUserAgent:!1},r=o,c=l(r);function f(t){void 0===t&&(t={}),r={device:Object.assign({},o.device,t.device||{}),timing:Object.assign({},o.timing,t.timing||{}),lighthouseDetectionByUserAgent:r.lighthouseDetectionByUserAgent||o.lighthouseDetectionByUserAgent},r=Object.assign({},o,t),c=l(r)}function l(e){void 0===e&&(e={});var n=t.navigator||{};return{hardwareConcurrency:n.hardwareConcurrency||e.device.hardwareConcurrency.min,deviceMemory:n.deviceMemory||e.device.deviceMemory.min,userAgent:n.userAgent||""}}function d(){return function(){if(t.performance){var e=performance.getEntriesByName("first-contentful-paint"),n=performance.getEntriesByType("resource");if(e.length)return e[0].startTime<r.timing.fcp;if(n.length)return n.reduce((function(t,e){return(!t||t<e.responseEnd)&&(t=e.responseEnd),t}),null)<r.timing.dcl}return!1}()&&c.hardwareConcurrency>=r.device.hardwareConcurrency.min&&c.hardwareConcurrency<=r.device.hardwareConcurrency.max&&c.deviceMemory>=r.device.deviceMemory.min&&!(r.lighthouseDetectionByUserAgent&&/(Speed Insights)|(Chrome-Lighthouse)/.test(c.userAgent))&&!0}}).call(this,n(15))},,,,,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(7);var o=function(){var t=this;this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var content=n(231);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("73089ea0",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(233);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("c5304096",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(235);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("a111a1a6",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(237);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("7af26a97",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(239);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("b44de92e",content,!0,{sourceMap:!1})},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-300.a1a2f34.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-regular.37cb9c1.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-500.4738c50.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-600.3146a88.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-700.8e119b1.woff2"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-300.4ac811c.woff2"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-300italic.5399b46.woff2"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-regular.3c76b16.woff2"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-italic.7477896.woff2"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-700.acf5c4d.woff2"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-700italic.36a3d53.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300.2387319.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300italic.0a03499.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-regular.0c99547.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-italic.2a4c48d.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700.ea59e2f.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700italic.977866f.woff2"},,,,,,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(114),n(19);var o=n(180),r=function(){function t(t){void 0===t&&(t=[]),this.list=t.map((function(t){return t.variances=t.variances.map((function(t){return Object.assign({style:"normal",weight:400},t)})),t}))}return t.prototype.getFont=function(t,e,style,n){void 0===e&&(e=400),void 0===style&&(style="normal"),void 0===n&&(n={selector:null,media:null});var r=this.list.find((function(e){return e.family===t}));if(!r)throw new Error("font family "+t+" not found, please define in module options");return function(t,e,style,n){void 0===n&&(n={selector:null,media:null});var r=t.variances.find((function(t){return t.weight===e&&t.style===style})),c=r.src,f=r.type;return new o.a(t.family,{src:c,type:f,fallbackFamily:t.fallback},n,e,style)}(r,e,style,n)},t}()},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return h}));n(49),n(114),n(173),n(72),n(19),n(7),n(32),n(20),n(73),n(193),n(26),n(29);var o=n(3),r=n(74),c=n(181),f=n(182),l=n(116),d=Object(c.a)("rootSelector"),h=function(){function e(t,e,n,o,style){var c=e.src,f=e.type,h=e.fallbackFamily,m=n.media,v=n.selector;void 0===o&&(o=400),void 0===style&&(style="normal"),Object.defineProperty(this,d,{writable:!0,value:void 0}),this.family=t,this.style=style,this.weight=o,this.src=c,this.type="font/"+f,this.fallbackFamily=h,Object(r.a)(this,d)[d]="",this.selector=v||"",this.media=m||null,this.loaded=new l.a}var n=e.prototype;return n.load=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(){var n,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.document.fonts.check(this.style+" "+this.weight+" 12px '"+this.family+"'")){e.next=4;break}return n=Array.from(t.document.fonts.keys()).find((function(t){return t.family===o.family&&t.style===o.style&&m(t.weight)===m(o.weight)})),e.next=4,n.load();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.getKey=function(){var data=Object.assign({},this);return delete data.src,Object(f.a)(JSON.stringify(data))},n.getCSSText=function(){var style,t,e=function(t,e){return e.split(", ").map((function(e){return"["+t+"] "+e.trim()})).join(", ")}(Object(r.a)(this,d)[d],this.selector).trim();return style=e+" {\n        font-family: "+this.fallbackFamily.join(", ")+";\n        font-weight: "+this.weight+";\n        font-style: "+this.style+";\n      }\n      .font-active"+e+" {\n        font-family: "+['"'+this.family+'"'].concat(this.fallbackFamily).join(", ")+";\n      }",(t=this.media)&&"@media "+t+" { "+style+" }"||style},n.setRootSelector=function(t){Object(r.a)(this,d)[d]=t},e}();function m(t){switch(t=String(t)){case"400":return"normal";case"700":return"bold";default:return t}}}).call(this,n(15))},,function(t,e,n){"use strict";(function(t,o){n.d(e,"a",(function(){return r}));n(7),n(53);function r(e){return"btoa"in t?t.btoa(e):o.from(e).toString("base64")}}).call(this,n(15),n(267).Buffer)},,function(t,e,n){"use strict";n(51),n(7);var o={components:{SpeedkitLayer:n(185).a},data:function(){return{text:"Your connection is too slow…",buttonLabel:"Anyway (OK)"}}},r=(n(230),n(8)),c={speedkitComponents:{GoogleLighthouse:function(){return Promise.resolve().then(n.bind(null,273))},OrganismPageHeader:function(){return Promise.resolve().then(n.bind(null,274))}},components:{InfoLayer:Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("speedkit-layer",{staticClass:"info_layer"},[e("div",[e("p",[this._v(this._s(this.text))]),this._v(" "),e("button",{staticClass:"info_layer__button nuxt-speedkit__speedkit-layer__button",attrs:{onclick:"window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;"}},[this._v("\n      "+this._s(this.buttonLabel)+"\n    ")])])])}),[],!1,null,null,null).exports},head:function(){return{title:this.$route.name+" | nuxt-speedkit",meta:[{hid:"description",name:"description",content:this.$route.name+" - description"}]}}},f=(n(236),Object(r.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("google-lighthouse"),this._v(" "),e("organism-page-header",{attrs:{critical:""}}),this._v(" "),e("Nuxt"),this._v(" "),e("info-layer"),this._v(" "),e("GithubCorner")],1)}),[],!1,null,null,null));e.a=f.exports;installComponents(f,{GithubCorner:n(272).default})},,function(t,e,n){"use strict";n(49),n(19),n(7),n(20),n(26),n(29);var o=n(3),r=n(77),c=function(t,e){t.directive(e,{bind:function(t,e,n){var o=n.context.fontCollection.add(n,[].concat(e.value));t.setAttribute(""+o,!0),n.context.isCritical&&t.classList.add("font-active")},inserted:function(t,e,n){Object(r.a)(t,Object(o.a)(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return r=[].concat(e.value),o.next=3,Promise.all(r.map((function(t){return t.load()})));case 3:t.classList.add("font-active"),n.context.$emit("load:font",r);case 5:case"end":return o.stop()}}),o)}))))},unbind:function(t,e,n){Object(r.b)(t)}})},f=(n(65),n(142),n(173),n(72),n(113),n(263),n(147),n(58)),l=function(){function t(){this.list=[]}var e=t.prototype;return e.add=function(t,e){var n="data-f"+function(t,e){return Object(f.b)(t+"_"+e).padStart(9,"-")}(t.tag,JSON.stringify(e.map((function(t){return t.getKey()}))));return this.list=[].concat(this.list).concat(e.map((function(t){return t.setRootSelector(n),t}))),n},e.getPreloadLinks=function(t){return Array.from(this.list.reduce((function(t,e){return t}),new Map).values())},e.getStyleTag=function(){if(this.list.length){var t=this.list.map((function(t){return t.getCSSText()})).join(" ");return[{hid:Object(f.b)(t),type:"text/css",cssText:t}]}return[]},e.toJSON=function(){return this.list},t}();var d=n(178),h={install:function(t){var e=this;t.mixin({provide:function(){return{criticalParent:this.critical||this.criticalParent}},inject:{criticalParent:{default:function(){return e.critical||!1}}},props:{critical:{type:Boolean,default:function(){return!1}}},data:function(){return{fontCollection:new l}},head:function(){return{link:this.fontCollection.getPreloadLinks?this.fontCollection.getPreloadLinks(this.isCritical):[],style:this.fontCollection.getStyleTag?this.fontCollection.getStyleTag():[],__dangerouslyDisableSanitizers:["style"]}},computed:{isCritical:function(){return this.criticalParent||this.critical}},beforeCreate:function(){var t=Object.entries(this.$options.speedkitComponents||{}).reduce((function(t,e){var n,o=e[0],r=e[1];return Object.assign(t,((n={})[o]=Object(d.a)(r,{rootMargin:"0%"}),n))}),{});Object.assign(this.$options.components,t)}})}},m=!1;e.a={install:function(t,e){m||(m=!0,c(t,"font"),h.install(t))}}},,,,,,,,function(t,e,n){n(195),t.exports=n(196)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n(150)},function(t,e,n){(e=n(24)(!1)).push([t.i,".info_layer{position:fixed;top:0;left:0;z-index:1000;width:100%;height:100%;background-color:rgba(0,0,0,.25);opacity:0;-webkit-animation-name:fade-in;animation-name:fade-in;-webkit-backdrop-filter:blur(.4375em);backdrop-filter:blur(.4375em);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.info_layer,.info_layer>div{-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-delay:.5s;animation-delay:.5s}.info_layer>div{padding:10px;font-family:sans-serif;font-weight:700;color:#f5f7fa;text-align:center;background-color:#2c3e50;box-shadow:0 0 .625em hsla(0,0%,100%,.6);transform:translateY(-50%);-webkit-animation-name:fall-down;animation-name:fall-down;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@media (prefers-color-scheme:dark){.info_layer>div{color:#2f495e;background-color:#fff;box-shadow:0 0 .625em rgba(0,0,0,.6)}}@-webkit-keyframes fade-in{to{opacity:1}}@keyframes fade-in{to{opacity:1}}@-webkit-keyframes fall-down{to{transform:translateY(0)}}@keyframes fall-down{to{transform:translateY(0)}}",""]),t.exports=e},function(t,e,n){"use strict";n(151)},function(t,e,n){(e=n(24)(!1)).push([t.i,".nuxt-speedkit__lighthouse[data-v-33cc96f6]{--pi:3.14159265358979;--score:0;position:fixed;top:0;right:0;z-index:1;display:block;width:60px;font-family:Arial,Helvetica,sans-serif;text-align:center;pointer-events:none;background-color:#fff}.nuxt-speedkit__lighthouse.ready[data-v-33cc96f6]{pointer-events:all}.nuxt-speedkit__lighthouse>svg[data-v-33cc96f6]{display:block;width:50px;height:50px;margin:5px}.nuxt-speedkit__lighthouse>svg circle[data-v-33cc96f6]{fill:transparent;stroke:var(--color-status);stroke-width:10;transform:rotate(-90deg);transform-origin:50%}.nuxt-speedkit__lighthouse>svg circle.pending[data-v-33cc96f6]{stroke-dasharray:calc(var(--pi)*1.35*45);stroke-dashoffset:calc(var(--pi)*2*45);-webkit-animation:nuxt-speedkit-lighthouse-rotating 1s linear infinite;animation:nuxt-speedkit-lighthouse-rotating 1s linear infinite}.nuxt-speedkit__lighthouse>svg circle.ready[data-v-33cc96f6]{fill:var(--color-status);fill-opacity:.1;stroke-dasharray:calc(var(--pi)*2*45);stroke-dashoffset:calc(var(--pi)*2*45);-webkit-animation:nuxt-speedkit-lighthouse-stroke-data-v-33cc96f6 var(--duration) ease-out forwards;animation:nuxt-speedkit-lighthouse-stroke-data-v-33cc96f6 var(--duration) ease-out forwards}.nuxt-speedkit__lighthouse>svg line[data-v-33cc96f6]{stroke:var(--color-status);stroke-width:10}.nuxt-speedkit__lighthouse>svg text[data-v-33cc96f6]{font-size:32px;fill:var(--color-status)}.nuxt-speedkit__lighthouse span[data-v-33cc96f6]{font-size:12px;text-decoration:underline}.nuxt-speedkit__lighthouse svg[data-v-33cc96f6]{display:inline;width:12px;height:12px;margin-left:3px}@-webkit-keyframes nuxt-speedkit-lighthouse-stroke-data-v-33cc96f6{to{stroke-dashoffset:var(--radian)}}@keyframes nuxt-speedkit-lighthouse-stroke-data-v-33cc96f6{to{transform:rotate(270deg)}}",""]),t.exports=e},function(t,e,n){"use strict";n(152)},function(t,e,n){(e=n(24)(!1)).push([t.i,".page-header[data-v-779a62e4]{position:fixed;top:0;left:0;z-index:1}.page-header .overview-link[data-v-779a62e4]{display:inline-block;padding:.55556em;font-size:1.125em;color:#f5f7fa;text-decoration:none;background-color:#2c3e50;border-radius:0 0 .27778em 0;box-shadow:0 0 .27778em hsla(0,0%,100%,.6)}@media (prefers-color-scheme:dark){.page-header .overview-link[data-v-779a62e4]{color:#2f495e;background-color:#fff;box-shadow:0 0 .27778em rgba(0,0,0,.6)}}",""]),t.exports=e},function(t,e,n){"use strict";n(153)},function(t,e,n){(e=n(24)(!1)).push([t.i,"html{height:-webkit-fill-available;height:-moz-available;height:stretch}body{min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:0;font-size:5vw;color:#2f495e;background-color:#fff}@media (prefers-color-scheme:dark){body{color:#f5f7fa;background-color:#2c3e50}}@media (min-width:375px){body{font-size:4.26667vw}}@media (min-width:414px){body{font-size:3.86473vw}}@media (min-width:768px){body{font-size:2.08333vw}}@media (min-width:992px){body{font-size:16px}}",""]),t.exports=e},function(t,e,n){"use strict";n(154)},function(t,e,n){(e=n(24)(!1)).push([t.i,".atom-github-corner{position:fixed;top:0;right:0}.atom-github-corner:hover .octo-arm{-webkit-animation:octocat-wave .56s ease-in-out;animation:octocat-wave .56s ease-in-out}@media (max-width:500px){.atom-github-corner .octo-arm{-webkit-animation:octocat-wave .56s ease-in-out;animation:octocat-wave .56s ease-in-out}.atom-github-corner:hover .octo-arm{-webkit-animation:none;animation:none}}@-webkit-keyframes octocat-wave{0%,to{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@keyframes octocat-wave{0%,to{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}",""]),t.exports=e},,,,function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-300.225df8e.woff"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-regular.f410294.woff"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-500.751ea22.woff"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-600.34ecec7.woff"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-700.20c9772.woff"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-300.7bf3d7e.woff"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-300italic.e560d0b.woff"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-regular.b38f92c.woff"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-italic.cb3a9d6.woff"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-700.ac901f8.woff"},function(t,e,n){t.exports=n.p+"fonts/comic-neue-v1-latin-700italic.5829751.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300.cb208c2.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300italic.8191cc0.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-regular.14f9c88.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-italic.05827e5.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700.bb59602.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700italic.dd03d8e.woff"},,,,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:"View source on GitHub"},url:{type:String,default:"https://github.com/GrabarzUndPartner/nuxt-speedkit"}}},r=(n(238),n(8)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"atom-github-corner",attrs:{href:this.url,"aria-label":this.title,title:this.title}},[e("svg",{staticStyle:{position:"absolute",top:"0",right:"0",color:"#fff",border:"0",fill:"#151513"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[e("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),e("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),e("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);n(7);var o={components:{LighthouseWidget:function(){return n.e(32).then(n.bind(null,400))}},created:function(){this.$router.beforeEach((function(t,e,n){!("lh"in t.query)&&"lh"in e.query&&(t.query.lh=e.query.lh,n({path:t.path,query:t.query})),n()}))}},r=(n(232),n(8)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return"lh"in this.$route.query?e("lighthouse-widget",this._b({},"lighthouse-widget",this.$attrs,!1)):this._e()}),[],!1,null,"33cc96f6",null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);n(234);var o=n(8),component=Object(o.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("header",{directives:[{name:"font",rawName:"v-font",value:this.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"page-header"},["/"!==this.$route.path?e("nuxt-link",{staticClass:"overview-link",attrs:{to:"/"}},[e("span",[this._v("← Back")])]):this._e()],1)}),[],!1,null,"779a62e4",null);e.default=component.exports}]));