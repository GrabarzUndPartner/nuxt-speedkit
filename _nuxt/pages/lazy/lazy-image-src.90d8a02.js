(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{216:function(e,t,n){var content=n(219);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(56).default)("7d9112ab",content,!0,{sourceMap:!1})},217:function(e,t,n){"use strict";(function(e){e.IntersectionObserver=e.IntersectionObserver||function(){function e(){}var t=e.prototype;return t.observe=function(){},t.unobserve=function(){},e}(),t.a={abstract:!0,props:{root:{type:e.HTMLElement,default:function(){return null}},rootMargin:{type:String,default:function(){return"0px"}},threshold:{type:Array,default:function(){return[0]}}},created:function(){var e,t=this;if(!this.$attrs.critical||!this.$options.critical){var n={root:(e=this).root,rootMargin:e.rootMargin,threshold:e.threshold};this.observer=new IntersectionObserver((function(e){var n=e[0];return t.onIntersect(n)}),n)}},mounted:function(){this.observer&&this.observer.observe(this.$el)},destroyed:function(){this.observer&&this.observer.disconnect()},methods:{onIntersect:function(e){e.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter:function(e){this.$emit("enter",e)}},render:function(){try{return this.$slots.default[0]}catch(e){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,n(22))},218:function(e,t,n){"use strict";var r=n(216);n.n(r).a},219:function(e,t,n){(t=n(55)(!1)).push([e.i,".preview-container{display:flex;flex-direction:column;height:100%;margin:50px 0}.preview-container:first-child{margin-top:0}.preview-container:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container{flex-direction:row}}@media (min-width:1024px){.preview-container{flex-direction:row}}.preview-container>div{flex:0 0 50%}.preview-container .preview-container__info{display:flex;align-items:center;justify-content:center;font-size:7.72947vw}@media (min-width:768px){.preview-container .preview-container__info{font-size:4.16667vw}}@media (min-width:1024px){.preview-container .preview-container__info{font-size:32px}}.preview-container .preview-container__info p{line-height:1.375;text-align:center}.preview-container .preview-container__preview{background:#eee}.preview-container .preview-container__preview>article{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:4.83092vw}@media (min-width:768px){.preview-container .preview-container__preview>article{font-size:2.60417vw}}@media (min-width:1024px){.preview-container .preview-container__preview>article{font-size:20px}}.preview-container .preview-container__preview>div{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>figure,.preview-container .preview-container__preview>iframe{position:relative;width:100%;height:100%}.preview-container .preview-container__preview>figure img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}",""]),e.exports=t},220:function(e,t,n){"use strict";n.r(t);var r={},o=(n(218),n(21)),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,null,null);t.default=component.exports},221:function(e,t,n){var content=n(228);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(56).default)("80409e3c",content,!0,{sourceMap:!1})},222:function(e,t,n){var content=n(231);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(56).default)("7a80f00b",content,!0,{sourceMap:!1})},223:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(57);function r(e){return[].concat(e).sort((function(a,b){return a.density-b.density||a.width-b.width}))}},224:function(e,t,n){"use strict";var r=n(217).a,o=n(21),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);t.a=component.exports},225:function(e,t,n){"use strict";n.r(t);n(12),n(31);var r=n(6);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var l=new Map;function f(e){if("undefined"==typeof IntersectionObserver)return null;var t=JSON.stringify(e);if(l.has(t))return l.get(t);var n=new IntersectionObserver((function(e){e.forEach((function(e){(e.isIntersecting||e.intersectionRatio>0)&&e.target.hydrate&&e.target.hydrate()}))}),e);return l.set(t,n),n}function h(e,t){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){o(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({render:function(t){var n=this.$el?this.$el.tagName:"div";return this.$el||e._resolve(),t(n)}},t)}function v(component){var e,t=new Promise((function(t){e=t}));return t._resolve=function(){e("function"==typeof component?component():component)},t}var d="undefined"==typeof window;Boolean,Boolean,Boolean,Boolean,Boolean;var w=n(226),m=n.n(w),y=n(224),_=(n(215),n(32),n(33),n(223)),x=new Map;function O(e,t){return Array.isArray(e)?function(e,t){return j(Object(_.a)(e)[0].url,t)}(e,t):j(e,t)}function j(e,t){return S.apply(this,arguments)}function S(){return(S=Object(r.a)(regeneratorRuntime.mark((function e(t,n){var r,o,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(x.has(t)){e.next=7;break}return e.next=3,n(t);case 3:r=e.sent,o=r.width,c=r.height,x.set(t,{width:o,height:c});case 7:return e.abrupt("return",x.get(t));case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $=n(21),I=Object($.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("noscript",{inlineTemplate:{render:function(){var e=this.$createElement;this._self._c;return this._t("default")},staticRenderFns:[]}})}),[],!1,null,null,null).exports,z={components:{IntersectionObserver:y.a,CustomNoScript:I,CustomImage:function(component){if(d)return component;var e=v(component),t=h(e);return function(){return{component:e,delay:0,loading:t}}}((function(){return n.e(1).then(n.bind(null,276))}))},props:{src:{type:String,default:function(){return null}},srcset:{type:Array,default:function(){return null}},seo:{type:Boolean,default:function(){return!0}}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e.src||e.srcset,e.$getImageSizeFromUrl);case 2:n=t.sent,e.width=n.width,e.height=n.height;case 5:case"end":return t.stop()}}),t)})))()},data:function(){return{width:0,height:0,lazy:{src:null,srcset:null}}},computed:{preparedSrcset:function(){return m.a.stringify(Object(_.a)(this.srcset||[]))||null},hasSlot:function(){return this.$slots.caption}},created:function(){},methods:{load:function(){this.lazy.src=this.src,this.lazy.srcset=this.srcset},onEnter:function(){this.load()}}},E=(n(227),Object($.a)(z,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("intersection-observer",{on:{enter:e.onEnter}},[n("figure",[e._t("default",[n("custom-image",e._b({},"custom-image",Object.assign({},e.$attrs,{width:e.width,height:e.height,src:e.src,srcset:e.preparedSrcset}),!1))]),e._v(" "),n("custom-no-script",[n("custom-image",e._b({},"custom-image",Object.assign({},e.$attrs,{width:e.width,height:e.height,src:e.src,srcset:e.preparedSrcset}),!1))],1),e._v(" "),e.hasSlot?n("figcaption",[e._t("caption")],2):e._e()],2)])}),[],!1,null,"7bea74bb",null));t.default=E.exports},226:function(e,t,n){"use strict";const r=/^\d+$/;t.parse=e=>{return(t=e.split(",").map(e=>{const t={};return e.trim().split(/\s+/).forEach((element,e)=>{if(0===e)return void(t.url=element);const n=element.slice(0,element.length-1),o=element[element.length-1],c=parseInt(n,10),l=parseFloat(n);if("w"===o&&r.test(n))t.width=c;else if("h"===o&&r.test(n))t.height=c;else{if("x"!==o||Number.isNaN(l))throw new Error("Invalid srcset descriptor: "+element);t.density=l}}),t})).sort().filter((element,e)=>JSON.stringify(element)!==JSON.stringify(t[e-1]));var t},t.stringify=e=>[...new Set(e.map(element=>{if(!element.url)throw new Error("URL is required");const e=[element.url];return element.width&&e.push(element.width+"w"),element.height&&e.push(element.height+"h"),element.density&&e.push(element.density+"x"),e.join(" ")}))].join(", ")},227:function(e,t,n){"use strict";var r=n(221);n.n(r).a},228:function(e,t,n){(t=n(55)(!1)).push([e.i,"figure[data-v-7bea74bb]{margin:0}",""]),e.exports=t},230:function(e,t,n){"use strict";var r=n(222);n.n(r).a},231:function(e,t,n){(t=n(55)(!1)).push([e.i,".organism-spacer{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;font-size:7.72947vw}@media (min-width:768px){.organism-spacer{font-size:4.16667vw}}@media (min-width:1024px){.organism-spacer{font-size:32px}}.organism-spacer>span{display:block;font-size:44px;text-align:center}.organism-spacer p{line-height:1.375;text-align:center}",""]),e.exports=t},232:function(e,t,n){"use strict";n.r(t);var r={props:{title:{type:String,default:"Scroll down"}}},o=(n(230),n(21)),component=Object(o.a)(r,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"organism-spacer"},[t("p",[this._v("Scroll down")]),this._v(" "),t("span",[this._v("↓")])])}],!1,null,null,null);t.default=component.exports},296:function(e,t,n){"use strict";n.r(t);var r={data:function(){return{imageA:{caption:null,alt:"Alt Text",title:"Title Text",src:"img/lazy-1080.jpg"}}}},o=n(21),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("organism-spacer"),e._v(" "),n("organism-preview-container",{scopedSlots:e._u([{key:"title",fn:function(){return[n("p",[e._v("LazyImage - SRC")])]},proxy:!0}])},[[n("LazyImage",e._b({},"LazyImage",e.imageA,!1))]],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OrganismSpacer:n(232).default,LazyImage:n(225).default,OrganismPreviewContainer:n(220).default})}}]);