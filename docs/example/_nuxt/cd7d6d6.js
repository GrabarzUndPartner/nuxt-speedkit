(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{349:function(t,e,r){"use strict";(function(t){r(49),r(25),r(18),r(9),r(357),r(358),r(360),r(361),r(362),r(363),r(364),r(365),r(366),r(367),r(368),r(369),r(370),r(371),r(372),r(373),r(374),r(26),r(34),r(65),r(84);var n=r(133),o=r(392),c=r(46),l=r(375),f=r(393),d=r(53),h=new f.a;function m(t){return t.type===Object(l.a)("webp")}e.a={props:{sources:{type:Array,default:function(){return[]}},preload:{type:Array,default:function(){return[]}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},crossorigin:{type:String,default:function(){return this.$crossorigin}}},data:function(){return{imageSources:this.sources,inProgress:!0,visible:!1,style:{}}},head:function(){var e=this,data={};if(this.preload.length&&(this.isCritical||this.visible)){var source=this.getPreloadSource();h.getPromise(Object(d.a)(source.srcset),(function(r,n){Object(o.b)()?data={link:[Object(c.b)(source,e.crossorigin,r)]}:function(e,r,n){var c=e.srcset,l=e.sizes;void 0===n&&(n=function(){});if(Object(o.a)()){var img=new t.Image;img.sizes=l,img.srcset=c,img.crossorigin=r,img.onload=n}else n()}(source,e.crossorigin,r)})).then((function(t){return e.onPreload(t)}))}return data},watch:{sources:function(){this.imageSources.length||(this.imageSources=this.sources)}},mounted:function(){var t=this;Object(n.a)(this.$el,(function(e){t.visible=!0,t.$emit("enter",e)}))},destroyed:function(){Object(n.b)(this.$el)},methods:{onPreload:function(e){var r=this;this.style.backgroundImage="url("+this.$refs.image.currentSrc+")",this.imageSources=this.preload,this.inProgress=!1,this.$emit("load"),t.requestAnimationFrame((function(){!function(e,r){"objectFitImages"in t&&t.objectFitImages(r);"picturefill"in t&&t.picturefill({elements:e})}(r.$el,r.$refs.image)}))},getPreloadSource:function(){var t=function(t){return t.filter((function(source){return!m(source)||m(source)&&o.c}))}(this.preload),e=Array.from(new Set(t.map((function(t){return t.type})))).shift(),r=t.filter((function(source){return source.type===e})).reduce((function(t,source){return t.srcset.push(source.srcset),t.sizes.push(source.sizes),t}),{srcset:[],sizes:[]}),n=r.srcset,c=r.sizes;return{srcset:n.join(", "),sizes:c.join(", "),type:e}}}}}).call(this,r(19))},375:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n={webp:"image/webp",jpg:"image/jpeg",png:"image/png"};function o(t){return n[String(t)]}},376:function(t,e,r){var content=r(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("32d47245",content,!0,{sourceMap:!1})},377:function(t,e,r){var content=r(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("3bcf2470",content,!0,{sourceMap:!1})},392:function(t,e,r){"use strict";(function(t){r.d(e,"c",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"a",(function(){return f}));var n=r(105);var o,c=!(!(o=t.document.createElement("canvas")).getContext||!o.getContext("2d"))&&0===o.toDataURL("image/webp").indexOf("data:image/webp");function l(){if(Object(n.a)())return!1;var e=t.document.createElement("link").relList;return function(element,e){var r={};t.document&&(r=t.document.createElement(element));return e in r}("link","imageSrcset")&&!!(e&&e.supports&&e.supports("preload"))}function f(){return"HTMLPictureElement"in t}}).call(this,r(19))},393:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(34),r(18),r(141),r(9),r(25),r(142),r(143),r(144),r(145),r(146),r(147),r(148),r(149),r(150),r(151),r(152),r(153),r(154),r(26);var n=r(139),o=function(){function t(){this.map=new Map}return t.prototype.getPromise=function(t,e){if(!this.map.has(t)){var r=new n.a;this.map.set(t,r.promise),e(r.resolve,r.reject)}return this.map.get(t)},t}()},394:function(t,e,r){"use strict";r(376)},395:function(t,e,r){var n=r(22)(!1);n.push([t.i,"picture[data-v-fb5c2d90]{display:block;height:inherit;overflow:hidden;background-size:cover}picture img[data-v-fb5c2d90]{display:block;width:100%;height:100%;filter:blur(0);transition-duration:.35s;transition-property:filter,transform;transform:scale(1);-o-object-fit:cover;object-fit:cover}picture img.in-progress[data-v-fb5c2d90]{filter:blur(10px);transform:scale(1.1)}",""]),t.exports=n},396:function(t,e,r){"use strict";r(377)},397:function(t,e,r){var n=r(22)(!1);n.push([t.i,".nuxt-speedkit__noscript[data-v-7b49c021]{display:block;height:inherit}",""]),t.exports=n},412:function(t,e,r){"use strict";r(89),r(43),r(416),r(417),r(90),r(418),r(66),r(57),r(67);var n=r(419),o=r(351),c=r(12);r(18),r(9),r(25),r(26),r(420),r(421),r(34),r(353),r(84),r(27),r(242),r(49),r(357),r(358),r(360),r(361),r(362),r(363),r(364),r(365),r(366),r(367),r(368),r(369),r(370),r(371),r(372),r(373),r(374),r(68),r(47),r(39);function l(t,e){return Promise.all(t.map(function(){var t=Object(c.a)(regeneratorRuntime.mark((function t(source){var r,n,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(source);case 2:return r=t.sent,n=r[0].url,o=r[1],t.abrupt("return",f(n,d(o)));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())).then(h)}function f(t,e){var r=e.min;return{size:e,media:r.media,breakpoint:r.breakpoint,width:e.max.width,url:t}}function d(t){var e=Array.from(t).sort((function(a,b){return a.width>b.width?1:-1})),r=e.shift();return{min:r,max:e.pop()||r}}function h(t){return t.sort((function(a,b){return a.width<b.width?1:-1}))}var m=r(375),v=r(46),y=r(414),w=r(415);function _(){_=function(t,e){return new r(t,void 0,e)};var t=RegExp.prototype,e=new WeakMap;function r(t,n,c){var l=new RegExp(t,n);return e.set(l,c||e.get(t)),Object(o.a)(l,r.prototype)}function c(t,r){var g=e.get(r);return Object.keys(g).reduce((function(e,r){return e[r]=t[g[r]],e}),Object.create(null))}return Object(n.a)(r,RegExp),r.prototype.exec=function(e){var r=t.exec.call(this,e);return r&&(r.groups=c(r,this)),r},r.prototype[Symbol.replace]=function(r,n){if("string"==typeof n){var o=e.get(this);return t[Symbol.replace].call(this,r,n.replace(/\$<([^>]+)>/g,(function(t,e){return"$"+o[e]})))}if("function"==typeof n){var l=this;return t[Symbol.replace].call(this,r,(function(){var t=arguments;return"object"!=typeof t[t.length-1]&&(t=[].slice.call(t)).push(c(t,l)),n.apply(this,t)}))}return t[Symbol.replace].call(this,r,n)},_.apply(this,arguments)}var x={components:{CustomPicture:y.a,CustomNoScript:w.a},props:{sources:{type:Array,default:function(){return[]}},alt:{type:String,default:null},title:{type:String,default:null},crossorigin:{type:String,default:function(){return this.$crossorigin}}},data:function(){return{placeholders:[],resolvedSources:this.getSources()}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchMeta();case 2:t.placeholders=e.sent;case 3:case"end":return e.stop()}}),e)})))()},head:function(){return{noscript:[Object(v.c)(".nuxt-speedkit__experimental__speedkit-picture > noscript.nuxt-speedkit__noscript + picture { display:none; } .nuxt-speedkit__experimental__speedkit-picture > noscript.nuxt-speedkit__noscript > picture > img { filter: none; }",!0)],__dangerouslyDisableSanitizers:["noscript"]}},computed:{hasSlot:function(){return this.$slots.caption}},watch:{sources:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.fetchMeta();case 2:t.placeholders=e.sent;case 3:case"end":return e.stop()}}),e)})))()}},methods:{fetchMeta:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.next=6;break;case 3:return e.abrupt("return",e.sent);case 6:return e.abrupt("return",l(t.sources,(function(e){var r=e.src,n=e.sizes;return Promise.all([t.$img(r,{width:30}),t.$img.sizes(r,n)])})));case 7:case"end":return e.stop()}}),e)})))()},getSources:function(){var t,e=this;return(t=this.sources,Array.from(new Set(["webp"].concat(t.map((function(source){return t=source.src,(e=t.match(_(/\.(png|jpe?g)/i,{ext:1})))&&e.groups.ext||"jpg";var t,e}))).map((function(t){return"jpeg"===t?"jpg":t}))))).map((function(t){return e.sources.map((function(source){return[source]})).map((function(r,n){var o=r[0],c=o.src,l=o.sizes,f=e.$img.sizes(c,l,{format:t}),d=f.sort((function(a,b){return a.width>b.width?-1:1}));return{media:n<e.sources.length-1&&"(min-width: "+f[f.length-1].width+"px)",srcset:d.map((function(t){var e=t.width,r=t.url;return e?r+" "+e+"w":r})).join(", "),sizes:d.map((function(t){var e=t.width,r=t.media;return r?r+" "+e+"px":e+"px"})).join(", "),type:Object(m.a)(f[0].format)}}))})).flat()}}},j=(r(436),r(8)),component=Object(j.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("figure",{staticClass:"nuxt-speedkit__experimental__speedkit-picture"},[r("custom-no-script",[r("custom-picture",{attrs:{sources:t.resolvedSources,alt:t.alt,title:t.title,crossorigin:t.crossorigin}})],1),t._v(" "),r("custom-picture",t._g({attrs:{sources:t.placeholders,preload:t.resolvedSources,alt:t.alt,title:t.title,crossorigin:t.crossorigin}},t.$listeners)),t._v(" "),t.hasSlot?r("figcaption",[t._t("caption")],2):t._e()],1)}),[],!1,null,"386e2f9d",null);e.a=component.exports},414:function(t,e,r){"use strict";var n=r(349).a,o=(r(394),r(8)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("picture",{style:t.style},[t._l(t.imageSources,(function(source,t){return r("source",{key:t,attrs:{srcset:source.dataURI||source.srcset||source.url,media:source.media,sizes:source.sizes,type:source.type}})})),t._v(" "),r("img",{ref:"image",class:{"in-progress":t.inProgress},attrs:{loading:"lazy",alt:t.alt,title:t.title,crossorigin:t.crossorigin}})],2)}),[],!1,null,"fb5c2d90",null);e.a=component.exports},415:function(t,e,r){"use strict";r(396);var n=r(8),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{staticClass:"nuxt-speedkit__noscript",inlineTemplate:{render:function(){var t=this,e=t.$createElement;t._self._c;return t._t("default")},staticRenderFns:[]}})}),[],!1,null,"7b49c021",null);e.a=component.exports},422:function(t,e,r){var content=r(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("546f0ade",content,!0,{sourceMap:!1})},436:function(t,e,r){"use strict";r(422)},437:function(t,e,r){var n=r(22)(!1);n.push([t.i,".nuxt-speedkit__experimental__speedkit-picture[data-v-386e2f9d]{width:100%;height:inherit;margin:0}",""]),t.exports=n}}]);