!function(t){function e(data){for(var e,r,l=data[0],f=data[1],d=data[2],i=0,h=[];i<l.length;i++)r=l[i],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&h.push(o[r][0]),o[r]=0;for(e in f)Object.prototype.hasOwnProperty.call(f,e)&&(t[e]=f[e]);for(m&&m(data);h.length;)h.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var t,i=0;i<c.length;i++){for(var e=c[i],n=!0,r=1;r<e.length;r++){var f=e[r];0!==o[f]&&(n=!1)}n&&(c.splice(i--,1),t=l(l.s=e[0]))}return t}var r={},o={4:0},c=[];function l(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var c,script=document.createElement("script");script.charset="utf-8",script.timeout=120,l.nc&&script.setAttribute("nonce",l.nc),script.src=function(t){return l.p+""+{0:"2e68c9d",1:"07d9f2b",2:"d597421",3:"8899359",6:"36f904e",7:"06e504c",8:"e4f65eb",9:"016a785",10:"9af92b5",11:"a832bc2",12:"7a98695",13:"1c43c8d",14:"bc62ff2",15:"da279f1",16:"9ec4e86",18:"d059376",19:"ce59f7d",20:"d0128b7",21:"144e500",22:"d19dfa7",23:"30bc0cc",24:"645ca39"}[t]+".js"}(t);var f=new Error;c=function(e){script.onerror=script.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+c+")",f.name="ChunkLoadError",f.type=r,f.request=c,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:script})}),12e4);script.onerror=script.onload=c,document.head.appendChild(script)}return Promise.all(e)},l.m=t,l.c=r,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)l.d(n,r,function(e){return t[e]}.bind(null,r));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return l.d(e,"a",e),e},l.o=function(object,t){return Object.prototype.hasOwnProperty.call(object,t)},l.p="/example/_nuxt/",l.oe=function(t){throw console.error(t),t};var f=window.webpackJsonp=window.webpackJsonp||[],d=f.push.bind(f);f.push=e,f=f.slice();for(var i=0;i<f.length;i++)e(f[i]);var m=d;c.push([221,5,17]),n()}(Array(39).concat([function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return l}));var r=n(43);function o(t,e,n){var o=t.srcset,c=t.sizes;return void 0===n&&(n=function(){}),{hid:Object(r.a)(o),rel:"preload",as:"image",crossorigin:e,imageSrcset:o,imageSizes:c,callback:n}}function c(t,e,n,o){return void 0===o&&(o=function(){}),{hid:Object(r.a)((t.family+"-"+t.weight+"-"+t.style+"-"+e).toLowerCase()),rel:"preload",as:"font",crossorigin:n,href:t.src,type:t.type,media:e,callback:o}}function l(t,e){return void 0===e&&(e=!1),e?(html='<style type="text/css">'+t+"</style>",{hid:Object(r.a)(html),innerHTML:html}):{hid:Object(r.a)(t),type:"text/css",cssText:t};var html}},,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(10),n(40);function r(t){return function(t){var e=0;if(0===t.length)return e;for(var i=0;i<t.length;i++)e=(e<<5)-e+t.charCodeAt(i),e&=e;return e}(t).toString(16)}},,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";(function(t){n.d(e,"d",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return h}));n(33);var r={device:{hardwareConcurrency:{min:2,max:48},deviceMemory:{min:2}},timing:{fcp:500,dcl:800},lighthouseDetectionByUserAgent:!1},o=r,c=f(o);function l(t){void 0===t&&(t={}),o={device:Object.assign({},r.device,t.device||{}),timing:Object.assign({},r.timing,t.timing||{}),lighthouseDetectionByUserAgent:o.lighthouseDetectionByUserAgent||r.lighthouseDetectionByUserAgent},o=Object.assign({},r,t),c=f(o)}function f(e){void 0===e&&(e={});var n=t.navigator||{};return{hardwareConcurrency:n.hardwareConcurrency||e.device.hardwareConcurrency.min,deviceMemory:n.deviceMemory||e.device.deviceMemory.min,userAgent:n.userAgent||""}}function d(){return h()&&m()&&!(o.lighthouseDetectionByUserAgent&&/(Speed Insights)|(Chrome-Lighthouse)/.test(c.userAgent))&&!0}function m(){return c.hardwareConcurrency>=o.device.hardwareConcurrency.min&&c.hardwareConcurrency<=o.device.hardwareConcurrency.max&&c.deviceMemory>=o.device.deviceMemory.min}function h(){if(t.performance){var e=performance.getEntriesByName("first-contentful-paint"),n=performance.getEntriesByType("resource");if(e.length)return e[0].startTime<o.timing.fcp;if(n.length)return n.reduce((function(t,e){return(!t||t<e.responseEnd)&&(t=e.responseEnd),t}),null)<o.timing.dcl}return!1}}).call(this,n(16))},,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));n(30),n(115),n(10),n(31),n(116),n(117),n(118),n(119),n(120),n(121),n(122),n(123),n(124),n(125),n(126),n(127),n(128),n(49),n(41);var r=new Map;var o=function(t,e){if(void 0===t&&(t="0%"),void 0===e&&(e=[0]),"undefined"==typeof IntersectionObserver)return null;var n=new IntersectionObserver((function(t){t.forEach((function(t){if(t.isIntersecting||t.intersectionRatio>0){var e=t.target;!function(t){r.get(t)(),r.delete(t)}(e),n.unobserve(e)}}))}),{rootMargin:t,threshold:e});return n}("0%");function c(t,e){o&&(r.set(t,e),o.observe(t))}function l(t){r.delete(t)}},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(220),n(10);var r=Symbol("pending"),o=Symbol("fulfilled"),c=Symbol("rejected"),l=function(){var t=this;this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n,t.state=r})).then((function(e){return t.state=o,e})).catch((function(e){throw t.state=c,new Error(e)}))}},,,,,,,,,,,,,,,function(t,e,n){"use strict";(function(t){n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return o}));n(75),n(32),n(40);function r(e){return new RegExp(e.regex).test(t.navigator.userAgent)}function o(){return"undefined"!=typeof InstallTrigger}}).call(this,n(16))},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){var content=n(258);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("286468aa",content,!0,{sourceMap:!1})},,function(t,e,n){var content=n(262);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("fce5e0e0",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(264);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("c5304096",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(266);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("a887cd6c",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(268);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("32d24c78",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(270);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("18889a2a",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(272);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("336a7560",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(274);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("751477be",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(276);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("7af26a97",content,!0,{sourceMap:!1})},function(t,e,n){var content=n(278);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("b44de92e",content,!0,{sourceMap:!1})},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-300.c21933f.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-regular.4632f3d.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-500.4ff6e5b.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-600.07a3480.woff2"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-700.e38cff2.woff2"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-300.fc11716.woff2"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-300italic.fe29961.woff2"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-regular.d9479e8.woff2"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-italic.2de7bfe.woff2"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-700.4b08e01.woff2"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-700italic.cd92541.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300.3799f02.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300italic.60cbad5.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-regular.dfa745d.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-italic.f9b07b1.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700.9088e5b.woff2"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700italic.d0b458a.woff2"},,,,,,,function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(134),n(26),n(33);var r=n(203),o=function(){function t(t){void 0===t&&(t=[]),this.list=t.map((function(t){return t.variances=t.variances.map((function(t){return Object.assign({style:"normal",weight:400},t)})),t}))}return t.prototype.getFont=function(t,e,style,n){void 0===e&&(e=400),void 0===style&&(style="normal"),void 0===n&&(n={selector:null,media:null});var o=this.list.find((function(e){return e.family===t}));if(!o)throw new Error("font family "+t+" not found, please define in module options");return function(t,e,style,n){void 0===n&&(n={selector:null,media:null});var o=t.variances.find((function(t){return t.weight===e&&t.style===style})),c=o.src,l=o.type;return new r.a(t.family,{src:c,type:l,fallbackFamily:t.fallback},n,e,style)}(o,e,style,n)},t}()},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return m}));n(54),n(134),n(131),n(65),n(26),n(37),n(33),n(32),n(31),n(70),n(162),n(219),n(42);var r=n(7),o=n(64),c=n(213),l=n(204),f=n(114),d=Object(c.a)("rootSelector"),m=function(){function e(t,e,n,r,style){var c=e.src,l=e.type,m=e.fallbackFamily,h=n.media,v=n.selector;void 0===r&&(r=400),void 0===style&&(style="normal"),Object.defineProperty(this,d,{writable:!0,value:void 0}),this.family=t,this.style=style,this.weight=r,this.src=c,this.type="font/"+l,this.fallbackFamily=m,Object(o.a)(this,d)[d]="",this.selector=v||"",this.media=h||null,this.loaded=new f.a}var n=e.prototype;return n.load=function(){var e=Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o=this;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.document.fonts.ready;case 2:if((n=e.sent).check(this.style+" "+this.weight+" 12px '"+this.family+"'")){e.next=7;break}return r=Array.from(n).find((function(t){return t.family.replace(/"(.*)"/,"$1")===o.family&&t.style===o.style&&_(t.weight)===_(o.weight)})),e.next=7,r.load();case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),n.getKey=function(){var data=Object.assign({},this);return delete data.src,Object(l.a)(JSON.stringify(data))},n.getCSSText=function(){var t=h(Object(o.a)(this,d)[d],this.selector).trim();return v(t+" {\n        font-family: "+this.fallbackFamily.join(", ")+";\n        font-weight: "+this.weight+";\n        font-style: "+this.style+";\n      }\n      .font-active"+t+" {\n        font-family: "+['"'+this.family+'"'].concat(this.fallbackFamily).join(", ")+";\n      }",this.media)},n.getNoScriptCSSText=function(){return v(h(Object(o.a)(this,d)[d],this.selector).trim()+" {\n        font-family: "+['"'+this.family+'"'].concat(this.fallbackFamily).join(", ")+";\n        font-weight: "+this.weight+";\n        font-style: "+this.style+";\n      }",this.media)},n.setRootSelector=function(t){Object(o.a)(this,d)[d]=t.name+'="'+t.value+'"'},e}();function h(t,e){return e.split(", ").map((function(e){return"["+t+"] "+e.trim()})).join(", ")}function v(style,t){return t&&"@media "+t+" { "+style+" }"||style}function _(t){switch(t=String(t)){case"400":return"normal";case"700":return"bold";default:return t}}}).call(this,n(16))},function(t,e,n){"use strict";(function(t,r){n.d(e,"a",(function(){return o}));n(10),n(40);function o(e){return"btoa"in t?t.btoa(e):r.from(e).toString("base64")}}).call(this,n(16),n(305).Buffer)},,,,,,function(t,e,n){"use strict";n(37),n(10);var r={props:{label:{type:String,default:"Button Label"}},methods:{onClick:function(t){this.$emit("click",t)}}},o=(n(257),n(4)),c=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"atom-base-button",on:{click:t.onClick}},[t._t("default",[n("span",[t._v(t._s(t.label))])])],2)}),[],!1,null,null,null).exports,l=n(211),f=n(39),d={components:{BaseButton:c,SpeedkitLayer:l.a},data:function(){return{hydrate:!1}},head:function(){return{noscript:[Object(f.c)(".info_layer > div { animation-delay: initial !important; }",!0)],__dangerouslyDisableSanitizers:["noscript"]}}},m=(n(261),{speedkitComponents:{GoogleLighthouse:function(){return Promise.resolve().then(n.bind(null,311))},OrganismPageHeader:function(){return Promise.resolve().then(n.bind(null,309))}},components:{InfoLayer:Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("speedkit-layer",{staticClass:"info_layer"},[n("div",[n("p",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}]},[t._v("\n      Sorry, but you will have a limited user experience due to a…\n    ")]),t._v(" "),n("ul",{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Quicksand",700,"normal"),expression:"$getFont('Quicksand', 700, 'normal')"}]},[n("li",{attrs:{id:"nuxt-speedkit__message__nojs"}},[t._v("\n        disabled javascript\n      ")]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__message__unsupported-browser"}},[t._v("\n        outdated browser\n      ")]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__message__outdated-device"}},[t._v("\n        outdated device\n      ")]),t._v(" "),n("li",{attrs:{id:"nuxt-speedkit__message__slow-connection"}},[t._v("\n        slow connection\n      ")])]),t._v(" "),n("div",{staticClass:"info_layer__buttons"},[n("base-button",{attrs:{id:"nuxt-speedkit__button__init-nojs"}},[n("label",{attrs:{for:"nuxt-speedkit__speedkit-layer__close"}},[t._v("\n          OK\n        ")])]),t._v(" "),n("base-button",{attrs:{id:"nuxt-speedkit__button__init-font",onclick:"window.__NUXT_SPEEDKIT_FONT_INIT__ = true;"}},[n("label",{attrs:{for:"nuxt-speedkit__speedkit-layer__close"}},[t._v("\n          No\n        ")])]),t._v(" "),n("base-button",{attrs:{id:"nuxt-speedkit__button__init-app",label:"Yes",onclick:"window.__NUXT_SPEEDKIT_AUTO_INIT__ = true;"}})],1)])])}),[],!1,null,"81f1d7b4",null).exports},data:function(){return{pageHeader:{menu:{lists:[{links:[{title:"Home",to:"/"}]},{headline:"Test",links:[{title:"v-font",to:"/tests/v-font/"},{title:"v-font (media)",to:"/tests/v-font-media/"},{title:"SpeedkitPicture",to:"/tests/speedkit-picture/"},{title:"SpeedkitYoutube",to:"/tests/speedkit-youtube/"},{title:"SpeedkitIframe",to:"/tests/speedkit-iframe/"}]},{headline:"Experimental",links:[{title:"Home",to:"/experimental/"},{title:"SpeedkitYoutube",to:"/experimental/speedkit-youtube/"},{title:"SpeedkitPicture (5 Pictures)",to:"/experimental/speedkit-picture/5/"}]}]}}}},head:function(){return{title:this.$route.name+" | nuxt-speedkit",meta:[{hid:"description",name:"description",content:this.$route.name+" - description"}]}}}),h=(n(275),Object(o.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("organism-page-header",t._b({},"organism-page-header",t.pageHeader,!1)),t._v(" "),n("Nuxt"),t._v(" "),n("info-layer",{attrs:{critical:""}}),t._v(" "),n("GithubCorner"),t._v(" "),n("google-lighthouse")],1)}),[],!1,null,null,null));e.a=h.exports;installComponents(h,{GithubCorner:n(310).default})},,function(t,e,n){"use strict";n(54),n(30),n(26),n(37),n(10),n(31),n(41),n(42);var r=n(7),o=n(86),c="font-active",l=function(t,e){t.directive(e,{bind:function(t,e,n){var r=n.context.fontCollection.add(n,[].concat(e.value));n.elm.setAttribute(r.name,r.value)},update:function(t,e,n){n.context.fontActive&&t.classList.add(c)},inserted:function(t,e,n){!function(t){var rect=t.getBoundingClientRect();return rect.bottom<0||rect.right<0||rect.left>window.innerWidth||rect.top>window.innerHeight}(t)?f(t,e,n):Object(o.a)(t,(function(){return f(t,e,n)}))},unbind:function(t,e,n){Object(o.b)(t)}})};function f(t,e,n){return d.apply(this,arguments)}function d(){return(d=Object(r.a)(regeneratorRuntime.mark((function t(e,n,r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=[].concat(n.value),t.next=3,Promise.all(o.map((function(t){return t.load()})));case 3:e.classList.add(c),r.context.fontActive=!0,r.context.$emit("load:font",o);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}n(33),n(158),n(52),n(131),n(65),n(115),n(301),n(116),n(117),n(118),n(119),n(120),n(121),n(122),n(123),n(124),n(125),n(126),n(127),n(128),n(165);var m=n(43),h=n(39),v=function(){function t(){this.list=[]}var e=t.prototype;return e.add=function(t,e){var n={name:"data-font",value:""+_(t.tag,JSON.stringify(e.map((function(t){return t.getKey()}))))};return this.list=[].concat(this.list).concat(e.map((function(t){return t.setRootSelector(n),t}))),n},e.getHeadDescription=function(t,e){return{link:this.getPreloadDescriptions(t,e),style:this.getStyleDescriptions(),noscript:this.getNoScriptStyleDescriptions(),__dangerouslyDisableSanitizers:["style","noscript"]}},e.getPreloadDescriptions=function(t,e){return Array.from(this.list.reduce((function(t,e){return t}),new Map).values())},e.getStyleDescriptions=function(){return y([Object(h.c)(this.list.map((function(t){return t.getCSSText()})).join(" "))])},e.getNoScriptStyleDescriptions=function(){return y([Object(h.c)(this.list.map((function(t){return t.getNoScriptCSSText()})).join(" "),!0)])},e.toJSON=function(){return this.list},t}();function _(t,e){return Object(m.a)(t+"_"+e).padStart(9,"-")}function y(t){return t.filter((function(t){return"0"!==t.hid}))}var k=n(201),w={install:function(t){var e=this;t.mixin({provide:function(){return{criticalParent:this.critical||this.criticalParent}},inject:{criticalParent:{default:function(){return e.critical||!1}}},props:{critical:{type:Boolean,default:function(){return!1}}},data:function(){return{fontActive:!1,fontCollection:new v}},head:function(){return this.fontCollection.getHeadDescription?this.fontCollection.getHeadDescription(this.isCritical,this.$crossorigin):{}},computed:{isCritical:function(){return this.criticalParent||this.critical}},beforeCreate:function(){var t=Object.entries(this.$options.speedkitComponents||{}).reduce((function(t,e){var n,r=e[0],o=e[1];return Object.assign(t,((n={})[r]=Object(k.a)(o,{rootMargin:"0%"}),n))}),{});Object.assign(this.$options.components,t)}})}},x=!1;e.a={install:function(t,e){x||(x=!0,l(t,"font"),w.install(t))}}},,,,,,,,,function(t,e,n){n(222),t.exports=n(223)},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";n(168)},function(t,e,n){var r=n(14)(!1);r.push([t.i,".atom-base-button{color:currentColor;cursor:pointer;background:transparent;border:.0625em solid;border-radius:.3125em;outline:none;transition:transform .1s ease-in;-webkit-appearance:none;-moz-appearance:none;appearance:none;will-change:transform}.atom-base-button>*{display:block;padding:.625em 1.25em;cursor:pointer}.atom-base-button:hover{transform:scale(1.05)}.atom-base-button:active{transform:scale(.95)}",""]),t.exports=r},,,function(t,e,n){"use strict";n(170)},function(t,e,n){var r=n(14)(!1);r.push([t.i,".info_layer[data-v-81f1d7b4] #nuxt-speedkit__speedkit-layer__content{position:fixed;top:0;left:0;z-index:1000;width:100%;height:100%;background-color:rgb(0 0 0/25%);opacity:0;-webkit-animation-name:fade-in-data-v-81f1d7b4;animation-name:fade-in-data-v-81f1d7b4;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-delay:3s;animation-delay:3s;-webkit-backdrop-filter:blur(.4375em);backdrop-filter:blur(.4375em);-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.info_layer[data-v-81f1d7b4] #nuxt-speedkit__speedkit-layer__content>div{padding:10px;color:#fff;text-align:center;background-color:rgb(0 0 0/60%);box-shadow:0 0 .625em rgb(0 0 0/60%);transform:translateY(-100%);-webkit-animation-name:fall-down-data-v-81f1d7b4;animation-name:fall-down-data-v-81f1d7b4;-webkit-animation-duration:.2s;animation-duration:.2s;-webkit-animation-delay:.5s;animation-delay:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.info_layer.nuxt-speedkit__speedkit-layer--visible[data-v-81f1d7b4] #nuxt-speedkit__speedkit-layer__content{-webkit-animation-delay:0s;-webkit-animation-delay:initial;animation-delay:0s}ul[data-v-81f1d7b4]{padding:0;margin:0}ul>li[data-v-81f1d7b4]{display:none}.info_layer__buttons[data-v-81f1d7b4]{margin:.625em 0}.info_layer__buttons>*[data-v-81f1d7b4]{margin:0 .3125em}@-webkit-keyframes fade-in-data-v-81f1d7b4{to{opacity:1}}@keyframes fade-in-data-v-81f1d7b4{to{opacity:1}}@-webkit-keyframes fall-down-data-v-81f1d7b4{to{transform:translateY(0)}}@keyframes fall-down-data-v-81f1d7b4{to{transform:translateY(0)}}",""]),t.exports=r},function(t,e,n){"use strict";n(171)},function(t,e,n){var r=n(14)(!1);r.push([t.i,".nuxt-speedkit__lighthouse[data-v-33cc96f6]{--pi:3.14159265358979;--score:0;position:fixed;top:0;right:0;z-index:1;display:block;width:60px;font-family:Arial,Helvetica,sans-serif;text-align:center;pointer-events:none;background-color:#fff}.nuxt-speedkit__lighthouse.ready[data-v-33cc96f6]{pointer-events:all}.nuxt-speedkit__lighthouse>svg[data-v-33cc96f6]{display:block;width:50px;height:50px;margin:5px}.nuxt-speedkit__lighthouse>svg circle[data-v-33cc96f6]{fill:transparent;stroke:var(--color-status);stroke-width:10;transform:rotate(-90deg);transform-origin:50%}.nuxt-speedkit__lighthouse>svg circle.pending[data-v-33cc96f6]{stroke-dasharray:calc(var(--pi)*1.35*45);stroke-dashoffset:calc(var(--pi)*2*45);-webkit-animation:nuxt-speedkit-lighthouse-rotating 1s linear infinite;animation:nuxt-speedkit-lighthouse-rotating 1s linear infinite}.nuxt-speedkit__lighthouse>svg circle.ready[data-v-33cc96f6]{fill:var(--color-status);fill-opacity:.1;stroke-dasharray:calc(var(--pi)*2*45);stroke-dashoffset:calc(var(--pi)*2*45);-webkit-animation:nuxt-speedkit-lighthouse-stroke-data-v-33cc96f6 var(--duration) ease-out forwards;animation:nuxt-speedkit-lighthouse-stroke-data-v-33cc96f6 var(--duration) ease-out forwards}.nuxt-speedkit__lighthouse>svg line[data-v-33cc96f6]{stroke:var(--color-status);stroke-width:10}.nuxt-speedkit__lighthouse>svg text[data-v-33cc96f6]{font-size:32px;fill:var(--color-status)}.nuxt-speedkit__lighthouse span[data-v-33cc96f6]{font-size:12px;text-decoration:underline}.nuxt-speedkit__lighthouse svg[data-v-33cc96f6]{display:inline;width:12px;height:12px;margin-left:3px}@-webkit-keyframes nuxt-speedkit-lighthouse-stroke-data-v-33cc96f6{to{stroke-dashoffset:var(--radian)}}@keyframes nuxt-speedkit-lighthouse-stroke-data-v-33cc96f6{to{transform:rotate(270deg)}}",""]),t.exports=r},function(t,e,n){"use strict";n(172)},function(t,e,n){var r=n(14)(!1);r.push([t.i,"",""]),t.exports=r},function(t,e,n){"use strict";n(173)},function(t,e,n){var r=n(14)(!1);r.push([t.i,"ul[data-v-4822952f]{padding:0;list-style:none}li[data-v-4822952f]{margin:.625em 0}a[data-v-4822952f]{position:relative;display:block;padding:.3125em .625em;color:currentColor;text-decoration:none;border-radius:.1875em;outline:none;opacity:.8;transition:opacity .2s linear,background .2s linear}a.nuxt-link-exact-active[data-v-4822952f],a[data-v-4822952f]:hover{background:rgb(255 255 255/40%);opacity:1}",""]),t.exports=r},function(t,e,n){"use strict";n(174)},function(t,e,n){var r=n(14)(!1);r.push([t.i,"html.js--menu-open{overflow:hidden}",""]),t.exports=r},function(t,e,n){"use strict";n(175)},function(t,e,n){var r=n(14)(!1);r.push([t.i,".menu[data-v-263c6bfc]{color:#000}@media (prefers-color-scheme:dark){.menu[data-v-263c6bfc]{color:#fff}}.menu .menu__toggle[data-v-263c6bfc]{position:absolute;top:.625em;left:.625em;padding:.625em;cursor:pointer;background:rgb(255 255 255/40%);outline:none;transition:background .2s linear}@media (prefers-color-scheme:dark){.menu .menu__toggle[data-v-263c6bfc]{background:rgb(0 0 0/40%)}}.menu .menu__toggle svg[data-v-263c6bfc]{display:block;width:1.875em}.menu .menu__toggle path[data-v-263c6bfc]{fill:#333;transition:opacity .2s linear,transform .2s linear;transform-origin:center}@media (prefers-color-scheme:dark){.menu .menu__toggle path[data-v-263c6bfc]{fill:#fff}}.menu .menu__toggle #close path[data-v-263c6bfc]:first-child,.menu .menu__toggle #close path[data-v-263c6bfc]:nth-child(2){transform:rotate(0deg)}@media (hover:hover) and (pointer:fine){.menu .menu__toggle:hover #open path[data-v-263c6bfc]{opacity:.6}.menu .menu__toggle:hover #open path[data-v-263c6bfc]:first-child{transform:translateY(-4%)}.menu .menu__toggle:hover #open path[data-v-263c6bfc]:nth-child(2){transform:translateY(4%)}.menu .menu__toggle:hover #close path[data-v-263c6bfc]:first-child{transform:rotate(15deg)}.menu .menu__toggle:hover #close path[data-v-263c6bfc]:nth-child(2){transform:rotate(-15deg)}}.menu input:checked~.menu__toggle[data-v-263c6bfc]{background:transparent}.menu input:checked~.menu__toggle #open path[data-v-263c6bfc]{opacity:0}.menu input:checked~.menu__toggle #open path[data-v-263c6bfc]:first-child{transform:translateY(-10%)}.menu input:checked~.menu__toggle #open path[data-v-263c6bfc]:nth-child(2){transform:translateY(10%)}.menu input:checked~.menu__toggle #close path[data-v-263c6bfc]:first-child{transform:rotate(45deg)}.menu input:checked~.menu__toggle #close path[data-v-263c6bfc]:nth-child(2){transform:rotate(-45deg)}@media (hover:hover) and (pointer:fine){.menu input:checked~.menu__toggle:hover #open path[data-v-263c6bfc]{opacity:.2}.menu input:checked~.menu__toggle:hover #open path[data-v-263c6bfc]:first-child{transform:translateY(-8%)}.menu input:checked~.menu__toggle:hover #open path[data-v-263c6bfc]:nth-child(2){transform:translateY(8%)}.menu input:checked~.menu__toggle:hover #close path[data-v-263c6bfc]:first-child{transform:rotate(30deg)}.menu input:checked~.menu__toggle:hover #close path[data-v-263c6bfc]:nth-child(2){transform:rotate(-30deg)}}.menu .menu__title[data-v-263c6bfc]{display:block;font-size:1.125em;font-weight:400;text-align:right;text-transform:uppercase;opacity:.4}.menu .menu__headline[data-v-263c6bfc]{display:block;margin-left:.625em;font-size:1.125em;color:#333}@media (prefers-color-scheme:dark){.menu .menu__headline[data-v-263c6bfc]{color:rgb(255 255 255/80%)}}.menu .menu-button[data-v-263c6bfc]{position:absolute;top:0;padding:0}.menu .menu__content[data-v-263c6bfc]{position:fixed;top:0}.menu .menu__content>label[data-v-263c6bfc]{position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer}.menu .menu__content[data-v-263c6bfc]{width:100%;height:100%;pointer-events:none;transition:-webkit-backdrop-filter .2s ease-in .2s;transition:backdrop-filter .2s ease-in .2s;transition:backdrop-filter .2s ease-in .2s,-webkit-backdrop-filter .2s ease-in .2s;-webkit-backdrop-filter:none;backdrop-filter:none}.menu .menu__content>div[data-v-263c6bfc]{display:flex;height:100%}.menu .menu__content>div>div[data-v-263c6bfc]{padding:3.125em 1.25em 1.25em;overflow:auto;text-align:left;background:hsla(0,0%,100%,.5);transition:transform .2s ease-in;transform:translateX(-100%)}@media (prefers-color-scheme:dark){.menu .menu__content>div>div[data-v-263c6bfc]{background:rgba(0,0,0,.5)}}.menu input[data-v-263c6bfc]{display:none}.menu input:checked+.menu__content[data-v-263c6bfc]{display:block;pointer-events:auto;transition-delay:0s;-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}.menu input:checked+.menu__content>div>div[data-v-263c6bfc]{transition-delay:.2s;transform:translateX(0)}",""]),t.exports=r},function(t,e,n){"use strict";n(176)},function(t,e,n){var r=n(14)(!1);r.push([t.i,".page-header[data-v-44c547e4]{position:fixed;top:0;left:0;z-index:1}.page-header .overview-link[data-v-44c547e4]{display:inline-block;padding:.55556em;font-size:1.125em;color:#f5f7fa;text-decoration:none;background-color:#2c3e50;border-radius:0 0 .27778em 0;box-shadow:0 0 .27778em hsla(0,0%,100%,.6)}@media (prefers-color-scheme:dark){.page-header .overview-link[data-v-44c547e4]{color:#2f495e;background-color:#fff;box-shadow:0 0 .27778em rgba(0,0,0,.6)}}",""]),t.exports=r},function(t,e,n){"use strict";n(177)},function(t,e,n){var r=n(14)(!1);r.push([t.i,"html{height:-webkit-fill-available;height:-moz-available;height:stretch}body{min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:0;font-size:5vw;color:#000;background-color:#fff}@media (prefers-color-scheme:dark){body{color:#fff;background-color:#333}}@media (min-width:375px){body{font-size:4.26667vw}}@media (min-width:414px){body{font-size:3.86473vw}}@media (min-width:768px){body{font-size:2.08333vw}}@media (min-width:992px){body{font-size:16px}}",""]),t.exports=r},function(t,e,n){"use strict";n(178)},function(t,e,n){var r=n(14)(!1);r.push([t.i,".atom-github-corner{position:fixed;top:0;right:0}.atom-github-corner:hover .octo-arm{-webkit-animation:octocat-wave .56s ease-in-out;animation:octocat-wave .56s ease-in-out}@media (max-width:500px){.atom-github-corner .octo-arm{-webkit-animation:octocat-wave .56s ease-in-out;animation:octocat-wave .56s ease-in-out}.atom-github-corner:hover .octo-arm{-webkit-animation:none;animation:none}}@-webkit-keyframes octocat-wave{0%,to{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}@keyframes octocat-wave{0%,to{transform:rotate(0)}20%,60%{transform:rotate(-25deg)}40%,80%{transform:rotate(10deg)}}",""]),t.exports=r},,,,function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-300.c7342fb.woff"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-regular.5589694.woff"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-500.e16bfdc.woff"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-600.6891aed.woff"},function(t,e,n){t.exports=n.p+"fonts/quicksand-v21-latin-700.82849a6.woff"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-300.58b1806.woff"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-300italic.23c3f1f.woff"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-regular.040426f.woff"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-italic.79db67a.woff"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-700.22fb8af.woff"},function(t,e,n){t.exports=n.p+"fonts/merriweather-v22-latin-700italic.f87f3d8.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300.3020f48.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-300italic.3a4e0ee.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-regular.949959a.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-italic.fa400a7.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700.49de2c7.woff"},function(t,e,n){t.exports=n.p+"fonts/montserrat-alternates-v12-latin-700italic.c7b87f9.woff"},,,,,,,,,,,function(t,e,n){"use strict";n.r(e);var r={props:{tag:{type:String,default:"h1"},content:{type:String,default:"Headline"}}},o=(n(265),n(4)),c=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.tag,{directives:[{name:"font",rawName:"v-font",value:t.$getFont("Quicksand",700,"normal"),expression:"$getFont('Quicksand', 700, 'normal')"}],tag:"component",staticClass:"atom-headline"},[t._t("default",[t._v(t._s(t.content))])],2)}),[],!1,null,null,null).exports,l={props:{items:{type:Array,default:function(){return[{title:"Link 1."},{title:"Link 2."},{title:"Link 3."}]}}}},f=(n(267),{components:{Headline:c,LinkList:Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{directives:[{name:"font",rawName:"v-font",value:[t.$getFont("Quicksand",400,"normal")],expression:"[\n    $getFont('Quicksand', 400, 'normal'),\n  ]"}]},t._l(t.items,(function(e,r){return n("li",{key:r},[n("nuxt-link",t._b({},"nuxt-link",e,!1),[t._v("\n      "+t._s(e.title)+"\n    ")])],1)})),0)}),[],!1,null,"4822952f",null).exports},props:{lists:{type:Array,default:function(){return[{headline:"Preview",links:[{title:"Item",to:"/"}]}]}}},data:function(){return{open:!1}},watch:{open:function(t){document.documentElement.classList.toggle("js--menu-open",t)}},mounted:function(){var t=this;this.$router.afterEach((function(e,n){t.open=!1}))}}),d=(n(269),n(271),{components:{OrganismMenu:Object(o.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"menu"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.open,expression:"open"}],attrs:{id:"menu-control",type:"checkbox",name:"menu-control"},domProps:{checked:Array.isArray(t.open)?t._i(t.open,null)>-1:t.open},on:{change:function(e){var n=t.open,r=e.target,o=!!r.checked;if(Array.isArray(n)){var c=t._i(n,null);r.checked?c<0&&(t.open=n.concat([null])):c>-1&&(t.open=n.slice(0,c).concat(n.slice(c+1)))}else t.open=o}}}),t._v(" "),n("div",{staticClass:"menu__content",attrs:{"aria-label":"Menu"}},[n("label",{attrs:{for:"menu-control"}}),t._v(" "),n("div",[n("div",t._l(t.lists,(function(e,r){var o=e.headline,c=e.links;return n("nav",{key:r},[o?n("headline",{staticClass:"menu__headline",attrs:{tag:"span",type:"menu",content:o}}):t._e(),t._v(" "),n("link-list",{attrs:{items:c,"aria-label":"Menu"}})],1)})),0)])]),t._v(" "),n("label",{staticClass:"menu__toggle",attrs:{for:"menu-control"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 120 120"}},[n("g",{attrs:{id:"open"}},[n("g",[n("path",{attrs:{d:"M0 10h120v16.67H0z"}}),t._v(" "),n("path",{attrs:{d:"M0 93.33h120V110H0z"}})])]),t._v(" "),n("g",{attrs:{id:"close"}},[n("path",{attrs:{d:"M0 51.67h120v16.67H0z"}}),t._v(" "),n("path",{attrs:{d:"M0 51.67h120v16.67H0z"}})])])])])}),[],!1,null,"263c6bfc",null).exports},props:{menu:{type:Object,default:function(){return{lists:[]}}}}}),m=(n(273),Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"page-header"},[n("organism-menu",t._b({},"organism-menu",t.menu,!1))],1)}),[],!1,null,"44c547e4",null));e.default=m.exports},function(t,e,n){"use strict";n.r(e);var r={props:{title:{type:String,default:"View source on GitHub"},target:{type:String,default:"_blank"},url:{type:String,default:"https://github.com/GrabarzUndPartner/nuxt-speedkit"}}},o=(n(277),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"atom-github-corner",attrs:{href:t.url,"aria-label":t.title,title:t.title,target:t.target}},[n("svg",{staticStyle:{position:"absolute",top:"0",right:"0",color:"#fff",border:"0",fill:"#151513"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[n("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),n("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),n("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){"use strict";n.r(e);n(10);var r={components:{LighthouseWidget:function(){return n.e(22).then(n.bind(null,559))}},created:function(){this.$router.beforeEach((function(t,e,n){!("lh"in t.query)&&"lh"in e.query&&(t.query.lh=e.query.lh,n({path:t.path,query:t.query})),n()}))}},o=(n(263),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return"lh"in t.$route.query?n("lighthouse-widget",t._b({},"lighthouse-widget",t.$attrs,!1)):t._e()}),[],!1,null,"33cc96f6",null);e.default=component.exports}]));