(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(t,e,r){(e=r(8)(!1)).push([t.i,"",""]),t.exports=e},101:function(t,e,r){"use strict";var n=r(80);r.n(n).a},102:function(t,e,r){(e=r(8)(!1)).push([t.i,"",""]),t.exports=e},109:function(t,e,r){"use strict";r.r(e);var n={computed:{loading(){return this.isCritical?"eager":"lazy"}},methods:{onLoad(t){this.$emit("load",t.target)}}},o=(r(97),r(3)),component=Object(o.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("img",{attrs:{loading:this.loading},on:{load:this.onLoad}})}),[],!1,null,"be5dc6da",null);e.default=component.exports},50:function(t,e,r){"use strict";(function(t){t.IntersectionObserver=t.IntersectionObserver||class{observe(){}unobserve(){}},e.a={abstract:!0,props:{root:{type:t.HTMLElement,default:()=>null},rootMargin:{type:String,default:()=>"0px"},threshold:{type:Array,default:()=>[0]}},created(){if(!this.$attrs.critical||!this.$options.critical){const t=(({root:t,rootMargin:e,threshold:r})=>({root:t,rootMargin:e,threshold:r}))(this);this.observer=new IntersectionObserver(([t])=>this.onIntersect(t),t)}},mounted(){this.observer&&this.observer.observe(this.$el)},destroyed(){this.observer&&this.observer.disconnect()},methods:{onIntersect(t){t.isIntersecting&&(this.observer.unobserve(this.$el),this.triggerEnter())},triggerEnter(t){this.$emit("enter",t)}},render(){try{return this.$slots.default[0]}catch(t){throw new Error("IntersectionObserver.vue can only render one, and exactly one child component.")}}}}).call(this,r(4))},54:function(t,e,r){var content=r(61);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("80409e3c",content,!0,{sourceMap:!1})},56:function(t,e,r){"use strict";function n(t){return[].concat(t).sort((a,b)=>a.density-b.density||a.width-b.width)}r.d(e,"a",(function(){return n}))},57:function(t,e,r){"use strict";var n=r(50).a,o=r(3),component=Object(o.a)(n,void 0,void 0,!1,null,null,null);e.a=component.exports},58:function(t,e,r){"use strict";r.r(e);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var c=new Map;function l(t){if("undefined"==typeof IntersectionObserver)return null;var e=JSON.stringify(t);if(c.has(e))return c.get(e);var r=new IntersectionObserver((function(t){t.forEach((function(t){(t.isIntersecting||t.intersectionRatio>0)&&t.target.hydrate&&t.target.hydrate()}))}),t);return c.set(e,r),r}function h(t,e){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({render:function(e){var r=this.$el?this.$el.tagName:"div";return this.$el||t._resolve(),e(r)}},e)}function f(component){var t,e=new Promise((function(e){t=e}));return e._resolve=function(){t("function"==typeof component?component():component)},e}var d="undefined"==typeof window;Boolean,Boolean,Boolean,Boolean,Boolean;var m=r(59),v=r.n(m),y=r(57),w=r(56);const _=new Map;function O(t,e){return Array.isArray(t)?function(t,e){return x(Object(w.a)(t)[0].url,e)}(t,e):x(t,e)}async function x(t,e){if(!_.has(t)){const{width:r,height:n}=await e(t);_.set(t,{width:r,height:n})}return _.get(t)}var j=r(3),$=Object(j.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("noscript",{inlineTemplate:{render:function(){var t=this.$createElement;this._self._c;return this._t("default")},staticRenderFns:[]}})}),[],!1,null,null,null).exports,I={components:{IntersectionObserver:y.a,CustomNoScript:$,CustomImage:function(component){if(d)return component;var t=f(component),e=h(t);return function(){return{component:t,delay:0,loading:e}}}(()=>r.e(0).then(r.bind(null,109)))},props:{src:{type:String,default:()=>null},srcset:{type:Array,default:()=>null},seo:{type:Boolean,default:()=>!0}},async fetch(){({width:this.width,height:this.height}=await O(this.src||this.srcset,this.$getImageSizeFromUrl))},data:()=>({width:0,height:0,lazy:{src:null,srcset:null}}),computed:{preparedSrcset(){return v.a.stringify(Object(w.a)(this.srcset||[]))||null},hasSlot(){return this.$slots.caption}},created(){},methods:{load(){({src:this.lazy.src,srcset:this.lazy.srcset}=this)},onEnter(){this.load()}}},S=(r(60),Object(j.a)(I,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("intersection-observer",{on:{enter:t.onEnter}},[r("figure",[t._t("default",[r("custom-image",t._b({},"custom-image",Object.assign({},t.$attrs,{width:t.width,height:t.height,src:t.src,srcset:t.preparedSrcset}),!1))]),t._v(" "),r("custom-no-script",[r("custom-image",t._b({},"custom-image",Object.assign({},t.$attrs,{width:t.width,height:t.height,src:t.src,srcset:t.preparedSrcset}),!1))],1),t._v(" "),t.hasSlot?r("figcaption",[t._t("caption")],2):t._e()],2)])}),[],!1,null,"7bea74bb",null));e.default=S.exports},59:function(t,e,r){"use strict";const n=/^\d+$/;e.parse=t=>{return(e=t.split(",").map(t=>{const e={};return t.trim().split(/\s+/).forEach((element,t)=>{if(0===t)return void(e.url=element);const r=element.slice(0,element.length-1),o=element[element.length-1],c=parseInt(r,10),l=parseFloat(r);if("w"===o&&n.test(r))e.width=c;else if("h"===o&&n.test(r))e.height=c;else{if("x"!==o||Number.isNaN(l))throw new Error("Invalid srcset descriptor: "+element);e.density=l}}),e})).sort().filter((element,t)=>JSON.stringify(element)!==JSON.stringify(e[t-1]));var e},e.stringify=t=>[...new Set(t.map(element=>{if(!element.url)throw new Error("URL is required");const t=[element.url];return element.width&&t.push(element.width+"w"),element.height&&t.push(element.height+"h"),element.density&&t.push(element.density+"x"),t.join(" ")}))].join(", ")},60:function(t,e,r){"use strict";var n=r(54);r.n(n).a},61:function(t,e,r){(e=r(8)(!1)).push([t.i,"figure[data-v-7bea74bb]{margin:0}",""]),t.exports=e},66:function(t,e,r){"use strict";r.r(e);var n=r(95),o=r.n(n);function c(t){return t=t.map(source=>(source.media=source.media||"all",source)),o()(t,"media").reverse()}var l=r(109),h=r(59),f=r.n(h),d=r(56),m={props:{srcset:{type:Array,default:()=>null}},computed:{preparedSrcset(){return f.a.stringify(Object(d.a)(this.srcset||[]))||null}}},v=(r(99),r(3)),y=Object(v.a)(m,(function(){var t=this.$createElement;return(this._self._c||t)("source",this._b({attrs:{srcset:this.preparedSrcset}},"source",this.$attrs,!1))}),[],!1,null,"61ed09b6",null).exports,w=r(58),_={components:{CustomImage:l.default,CustomSource:y,LazyImage:w.default},props:{sources:{type:Array,default:()=>[]}},computed:{fallbackImage(){const t=c(this.sources)[0];return{src:t.src,srcset:t.srcset}},sortedSources(){return t=c(this.sources),e="image/webp",t.sort((a,b)=>a.media===b.media&&a.type===e?-1:null);var t,e}}},O=(r(101),Object(v.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("lazy-image",t._b({attrs:{src:t.fallbackImage.src,srcset:t.fallbackImage.srcset},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.width,o=e.height;return[r("picture",[t._l(t.sortedSources,(function(source,e){return r("custom-source",t._b({key:e},"custom-source",source,!1))})),t._v(" "),r("custom-image",t._b({attrs:{src:t.fallbackImage.src,srcset:t.fallbackImage.srcset,width:n,height:o}},"custom-image",t.$attrs,!1))],2)]}},{key:"caption",fn:function(){return[t._t("caption")]},proxy:!0}],null,!0)},"lazy-image",t.$attrs,!1))}),[],!1,null,"4fc46199",null));e.default=O.exports},78:function(t,e,r){var content=r(98);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("39a00948",content,!0,{sourceMap:!1})},79:function(t,e,r){var content=r(100);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("03907b63",content,!0,{sourceMap:!1})},80:function(t,e,r){var content=r(102);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("5d244eae",content,!0,{sourceMap:!1})},95:function(t,e,r){var n=r(96),o=["blank","all","minWidth","minHeight","maxWidth","maxHeight","print"];function c(t){return function(a,b){var e=a.sortVal,r=b.sortVal,n=a.item.__media,o=b.item.__media;if(t=void 0!==t&&t,e===r){if(n.match(/print/))return 1;if(o.match(/print/))return-1}return t?r-e:e-r}}function l(t,e,r){switch(function(t,e,r){return t&&t.length&&"string"!=typeof t?("object"!==e||r&&"string"==typeof r)&&function(t,e,r){for(var n=!0,i=0,o=t.length;i<o;i++)if(typeof t[i]!==e||r&&!t[i].hasOwnProperty(r)){n=!1;break}return n}(t,e,r)?"all":"some":"none"}(t,e,r)){case"none":return[];case"some":return t}var l=function(){for(var t={},i=0,e=o.length;i<e;i++)t[o[i]]=[];return t}();return t=function(t,e,r){for(var o=[],c={},i=0,l=t.length;i<l;i++)"string"===e?c=n({},{__media:t[i]}):(c=n({},t[i])).__media=t[i][r],o.push(c);return o}(t,e,r),function(t,e){for(var i=0,r=e.length;i<r;i++){var n=e[i],o=n.__media,c="blank",l=o.match(/\d+/g);o.match(/min-width/)?c="minWidth":o.match(/min-height/)?c="minHeight":o.match(/max-width/)?c="maxWidth":o.match(/max-height/)?c="maxHeight":o.match(/print/)?c="print":o.match(/all/)&&(c="all"),t[c].push({item:n,sortVal:l?l[0]:0})}}(l,t),function(t){var e;for(var r in t)t.hasOwnProperty(r)&&(e=c(!1),"maxWidth"!==r&&"maxHeight"!==r||(e=c(!0)),t[r].sort(e))}(l),function(t,e,r){var n=[];function c(t){for(var r,i=0,o=t.length;i<o;i++)"string"===e?r=t[i].item.__media:delete(r=t[i].item).__media,n.push(r)}for(var i=0,l=o.length;i<l;i++)c(t[o[i]]);return n}(l,e)}t.exports=function(t,e){return t?e?l(t,"object",e):l(t,"string"):[]}},96:function(t,e){t.exports=function(){for(var t={},i=0;i<arguments.length;i++){var source=arguments[i];for(var e in source)r.call(source,e)&&(t[e]=source[e])}return t};var r=Object.prototype.hasOwnProperty},97:function(t,e,r){"use strict";var n=r(78);r.n(n).a},98:function(t,e,r){(e=r(8)(!1)).push([t.i,"img[data-v-be5dc6da]{display:block}",""]),t.exports=e},99:function(t,e,r){"use strict";var n=r(79);r.n(n).a}}]);