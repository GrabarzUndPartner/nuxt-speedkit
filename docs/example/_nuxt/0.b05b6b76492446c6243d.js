(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(t,e,r){"use strict";var n=r(38),o=r(41),c=r(196),l=r.n(c),h=r(17),d=r(28);let m;function f(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var y=0;function v(t){return"__private_"+y+++"_"+t}const w=l()();var x=v("list");m=Symbol.iterator;class j{constructor(t){Object.defineProperty(this,x,{writable:!0,value:[]}),f(this,x)[x]=f(this,x)[x].concat(Array.from(t||f(this,x)[x]).map((t=>new d.a(t))))}[m](){return f(this,x)[x].values()}get key(){return f(this,x)[x].map((source=>source.key)).join("-")}get list(){return f(this,x)[x]}get sorted(){return f(this,x)[x].sort(((a,b)=>w(a.media,b.media)))}get style(){return f(this,x)[x].map((({media:t,width:e,height:r,style:n})=>`\n      @media ${t} { .${this.className}::before { padding-top: calc((1 / (${e} / ${r})) * 100%); } }\n      @supports (aspect-ratio: 1) {\n        @media ${t} { .${this.className} { aspect-ratio: ${e} / ${r}; } }\n      }\n      ${n}\n    `)).reverse().join(" ")}get className(){return`picture-${Object(h.a)(this.sorted.map((({src:t})=>t)).join(","))}`}get classNames(){return{picture:this.className,image:f(this,x)[x].map((source=>source.className))}}getFormats(t,e,r){return this.sorted.reduce(((n,source)=>n.concat(t.map((t=>source.modify({format:t,preload:t.includes(e)&&r}))))),[])}async getMeta(t,e){const r=await Promise.all(this.sorted.map((source=>{var r;const n=t.getSizes(source.src,Object.assign({sizes:source.sizes,modifiers:source.getModifiers()},source.getOptions()));return source.getMeta(n.src,null==e||null==(r=e.nuxt)?void 0:r._img)})));return new j(r)}toJSON(){return f(this,x)[x]}static create(...t){return new this(...t)}}var O=r(18),$=r(39);const S=new Map([["jpg","jpeg"]]);var k={props:{source:{type:d.a,required:!0},crossorigin:{type:[Boolean,String],default(){return this.$speedkit.crossorigin},validator:t=>["anonymous","use-credentials","",!0,!1].includes(t)}},data:()=>({config:null}),fetchKey(){return`source-${this.source.key}`},fetch(){this.config=this.$img.getSizes(this.source.src,Object.assign({sizes:this.source.sizes,modifiers:this.source.getModifiers()},this.source.getOptions()))},head(){const t=new d.a(this.source);return this.config&&t.preload?{link:[t.getPreload(this.config.srcset,this.config.sizes,Object($.getCrossorigin)(this.crossorigin))]}:{}},computed:{srcset(){return this.config.srcset||this.config.src},type(){return`image/${S.get(this.source.format)||this.source.format}`}}},N=r(7),_=Object(N.a)(k,(function(){var t=this;return(0,t._self._c)("source",{attrs:{srcset:t.srcset,sizes:t.config.sizes,media:t.source.media,type:t.type}})}),[],!1,null,null,null).exports;const z=["avif","webp","png","jpg","gif"];var C={components:{PictureSource:_,BaseImage:o.a},props:{sources:{type:[Array,j],required:!0},formats:{type:Array,default(){return this.$speedkit.targetFormats}},loadingSpinner:{type:O.a,default:void 0},title:{type:String,default:null},alt:{type:String,default:null},crossorigin:{type:[Boolean,String],default(){return this.$speedkit.crossorigin},validator:t=>["anonymous","use-credentials","",!0,!1].includes(t)}},data:()=>({metaSources:{},classNames:{}}),async fetch(){const{ssrContext:t}=this.$nuxt.context;this.metaSources=await this.sourceList.getMeta(this.$img,t),this.classNames=this.metaSources.classNames},head(){return{style:this.style}},fetchKey(t){const e=`picture-${this.sourceList.key}`;return`${e}-${t(e)}`},computed:{sourceList(){return j.create(this.sources)},formatSources(){const t=Array.from(new Set(z.map((t=>this.formats.find((e=>e.includes(t))))))).filter(Boolean),e=z.find((t=>this.formats.find((e=>e.includes(t)))));return this.sourceList.getFormats(t,e,this.isCritical)},style(){if(!this.metaSources)return[];const t=this.metaSources.length&&new j(this.metaSources)||this.metaSources;return[{hid:this.classNames.picture,type:"text/css",cssText:t.style}]}},methods:{onLoad(t){this.$emit("load",t)}}},M=(r(197),Object(N.a)(C,(function(){var t=this,e=t._self._c;return e("picture",{staticClass:"nuxt-speedkit-picture",class:t.classNames.picture},[t._l(t.formatSources,(function(source){return e("picture-source",{key:source.key,attrs:{source:source,crossorigin:t.crossorigin}})})),t._v(" "),e("base-image",{class:t.classNames.image,attrs:{title:t.title,alt:t.alt,"loading-spinner":t.loadingSpinner,crossorigin:t.crossorigin,width:"0",height:"0"},on:{load:t.onLoad}})],2)}),[],!1,null,"ce9c9924",null).exports),P={inheritAttrs:!1,props:{hydrate:{type:Boolean,default:!0}},render(t){return this.hydrate?t(M,{props:Object.assign({},this.$attrs,{critical:this.isCritical}),on:this.$listeners}):t(n.a,{props:{never:!0}},[t("noscript",{class:"nuxt-speedkit-picture-noscript"},[t(M,{props:Object.assign({},this.$attrs,{critical:this.hydrate}),on:this.$listeners})])])}},L=Object(N.a)(P,undefined,undefined,!1,null,null,null);e.a=L.exports},196:function(t,e){const r=/(!?\(\s*min(-device-)?-width)(.|\n)+\(\s*max(-device)?-width/i,n=/(!?\(\s*max(-device)?-width)(.|\n)+\(\s*min(-device)?-width/i,o=x(r,n,/\(\s*min(-device)?-width/i),c=x(n,r,/\(\s*max(-device)?-width/i),l=/(!?\(\s*min(-device)?-height)(.|\n)+\(\s*max(-device)?-height/i,h=/(!?\(\s*max(-device)?-height)(.|\n)+\(\s*min(-device)?-height/i,d=x(l,h,/\(\s*min(-device)?-height/i),m=x(h,l,/\(\s*max(-device)?-height/i),f=/print/i,y=/^print$/i,v=Number.MAX_VALUE;function w(t){if(null===(t=/(-?\d*\.?\d+)(ch|em|ex|px|rem)/.exec(t)))return v;let e=t[1];switch(t[2]){case"ch":e=8.8984375*parseFloat(e);break;case"em":case"rem":e=16*parseFloat(e);break;case"ex":e=8.296875*parseFloat(e);break;case"px":e=parseFloat(e)}return+e}function x(t,e,r){return function(n){return!!t.test(n)||!e.test(n)&&r.test(n)}}function j(a,b){const t=f.test(a),e=y.test(a),r=f.test(b),n=y.test(b);return t&&r?!e&&n?1:e&&!n?-1:a.localeCompare(b):t?1:r?-1:null}t.exports=function(t){const e=(t||{}).unitlessMqAlwaysFirst;function r(a,b){const t=j(a,b);if(null!==t)return t;const r=o(a)||d(a),n=c(a)||m(a),l=o(b)||d(b),h=c(b)||m(b);if(!e||(r||n)&&(l||h)){if(r&&h)return-1;if(n&&l)return 1;const t=w(a),e=w(b);return t===v&&e===v?a.localeCompare(b):t===v?1:e===v?-1:t>e?n?-1:1:t<e?n?1:-1:a.localeCompare(b)}return r||n||l||h?l||h?-1:1:a.localeCompare(b)}return r.desktopFirst=function(a,b){const t=j(a,b);if(null!==t)return t;const r=o(a)||d(a),n=c(a)||m(a),l=o(b)||d(b),h=c(b)||m(b);if(!e||(r||n)&&(l||h)){if(r&&h)return 1;if(n&&l)return-1;const t=w(a),e=w(b);return t===v&&e===v?a.localeCompare(b):t===v?1:e===v?-1:t>e?n?-1:1:t<e?n?1:-1:-a.localeCompare(b)}return r||n||l||h?l||h?-1:1:a.localeCompare(b)},r}},197:function(t,e,r){"use strict";r(98)},198:function(t,e,r){var n=r(8)((function(i){return i[1]}));n.push([t.i,'\n.nuxt-speedkit-picture[data-v-ce9c9924]{position:relative;box-sizing:border-box;display:block;width:100%;}.nuxt-speedkit-picture img[data-v-ce9c9924]{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.nuxt-speedkit-picture[data-v-ce9c9924]:before{position:relative;box-sizing:border-box;display:block;content:""}@supports (aspect-ratio:1){.nuxt-speedkit-picture[data-v-ce9c9924]{position:initial;position:unset;}.nuxt-speedkit-picture img[data-v-ce9c9924]{position:initial;position:unset;top:initial;top:unset;right:initial;right:unset;bottom:initial;bottom:unset;left:initial;left:unset}.nuxt-speedkit-picture[data-v-ce9c9924]:before{display:none}}',""]),n.locals={},t.exports=n},28:function(t,e,r){"use strict";r.d(e,"a",(function(){return k}));var n=r(17),o=r(47);function c(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var l=0;function h(t){return"__private_"+l+++"_"+t}var d=h("src"),m=h("sizes"),f=h("media"),y=h("width"),v=h("height"),w=h("format"),x=h("quality"),j=h("preload"),O=h("modifiers"),$=h("provider"),S=h("preset");class k{constructor({src:t,sizes:e,width:r,height:n,media:o="all",quality:l=70,format:h=null,preload:k=!1,modifiers:N={},provider:_,preset:z}){Object.defineProperty(this,d,{writable:!0,value:null}),Object.defineProperty(this,m,{writable:!0,value:null}),Object.defineProperty(this,f,{writable:!0,value:null}),Object.defineProperty(this,y,{writable:!0,value:null}),Object.defineProperty(this,v,{writable:!0,value:null}),Object.defineProperty(this,w,{writable:!0,value:null}),Object.defineProperty(this,x,{writable:!0,value:null}),Object.defineProperty(this,j,{writable:!0,value:!1}),Object.defineProperty(this,O,{writable:!0,value:{}}),Object.defineProperty(this,$,{writable:!0,value:void 0}),Object.defineProperty(this,S,{writable:!0,value:void 0}),c(this,d)[d]=t,c(this,m)[m]=e,c(this,f)[f]=o,c(this,y)[y]=r,c(this,v)[v]=n,c(this,w)[w]=h,c(this,x)[x]=l,c(this,j)[j]=k,c(this,O)[O]=N,c(this,$)[$]=_,c(this,S)[S]=z}get key(){return Object(n.a)(JSON.stringify(this.toJSON()))}get src(){return c(this,d)[d]}get sizes(){return c(this,m)[m]}get media(){return c(this,f)[f]}get width(){return c(this,y)[y]}get height(){return c(this,v)[v]}get ratio(){return c(this,y)[y]/c(this,v)[v]}get format(){var t;const e=Object(o.a)(c(this,d)[d]);return null!=(t=c(this,w)[w])&&t.includes(e)?e:c(this,w)[w]||e}get quality(){return c(this,x)[x]}get preload(){return c(this,j)[j]}get modifiers(){return c(this,O)[O]}get provider(){return c(this,$)[$]}get preset(){return c(this,S)[S]}get className(){return`image-${Object(n.a)(this.src)}`}get style(){return`\n      @supports (aspect-ratio: 1) {\n        @media ${this.media} { .${this.className} { aspect-ratio: ${this.width} / ${this.height}; } }\n      }\n    `}getModifiers(){return Object.assign({},this.modifiers,{format:this.format,quality:this.quality})}getOptions(){return{provider:this.provider,preset:this.preset}}getMeta(t,e){return Object(o.b)(new k(Object.assign({},this.toJSON())),t,e)}getPreload(t,e,r){const n={rel:"preload",as:"image",imagesrcset:t,imagesizes:e,media:this.media};return r&&(n.crossorigin=r),n}modify(t){return new k(Object.assign({},this.toJSON(),t))}toJSON(){return{src:c(this,d)[d],sizes:c(this,m)[m],media:c(this,f)[f],width:c(this,y)[y],height:c(this,v)[v],format:c(this,w)[w],quality:c(this,x)[x],preload:c(this,j)[j],modifiers:c(this,O)[O],provider:c(this,$)[$],preset:c(this,S)[S]}}static create(...t){return new this(...t)}}},29:function(t,e,r){var content=r(49);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("bcf1c8da",content,!0,{sourceMap:!1})},39:function(t,e){t.exports={getCrossorigin:function(t,e){return t=void 0===(t=!0===t?"anonymous":t)?e||"anonymous":t}}},41:function(t,e,r){"use strict";var n=r(28),o=r(18),c=r(39),l={inheritAttrs:!1,props:{source:{type:[n.a,Object],default:null},title:{type:String,required:!0},alt:{type:String,default:null},crossorigin:{type:[Boolean,String],default(){return this.$speedkit.crossorigin},validator:t=>["anonymous","use-credentials","",!0,!1].includes(t)},loadingSpinner:{type:o.a,default(){return this.$speedkit.loader()}}},data:()=>({className:null,loading:!0,config:null,meta:null}),fetchKey(t){let e;var r;this.source?e=`image-${null==(r=new n.a(this.source))?void 0:r.key}`:e="image";return`${e}-${t(e)}`},async fetch(){if(this.source){var t;const source=new n.a(this.source);this.config=this.$img.getSizes(source.src,Object.assign({sizes:source.sizes,modifiers:source.getModifiers()},source.getOptions()));const{ssrContext:e}=this.$nuxt.context;this.meta=await source.getMeta(this.config.src,(null==e||null==(t=e.nuxt)?void 0:t._img)||{}),this.className=this.meta.className}},head(){return{style:this.style,link:this.preload,noscript:[{hid:"img-nojs",innerHTML:"<style>img { content-visibility: unset !important; }</style>"}],__dangerouslyDisableSanitizers:["noscript"]}},computed:{classNames(){const t=[{loading:this.loading}].concat(this.className);return this.loadingSpinner&&t.push(this.loadingSpinner.className),t},srcset(){var t,e;return(null==(t=this.config)?void 0:t.srcset)||(null==(e=this.config)?void 0:e.src)},sizes(){var t;return null==(t=this.config)?void 0:t.sizes},width(){var t;return this.$attrs.width||(null==(t=this.meta)?void 0:t.width)},height(){var t;return this.$attrs.height||(null==(t=this.meta)?void 0:t.height)},loadingMode(){return this.isCritical?"eager":"lazy"},decodingMode(){return this.source&&"svg"===new n.a(this.source).format?"sync":"async"},style(){return[this.loadingSpinner&&{hid:this.loadingSpinner.className,type:"text/css",cssText:this.loadingSpinner.style},this.meta&&{hid:this.className,type:"text/css",cssText:new n.a(this.meta).style}].filter(Boolean)},preload(){return this.config&&this.isCritical?[new n.a(this.source).getPreload(this.config.srcset,this.config.sizes,Object(c.getCrossorigin)(this.crossorigin))]:[]}},mounted(){this.loading=!this.$el.complete},methods:{getCrossorigin:c.getCrossorigin,onLoad(t){this.loading=!1,this.$emit("load",t.target.currentSrc)}}},h=(r(48),r(7)),component=Object(h.a)(l,(function(){var t=this;return(0,t._self._c)("img",t._g(t._b({staticClass:"nuxt-speedkit-image",class:t.classNames,attrs:{srcset:t.srcset,sizes:t.sizes,width:t.width,height:t.height,title:t.title,alt:t.alt||t.title,loading:t.loadingMode,decoding:t.decodingMode,crossorigin:t.getCrossorigin(t.crossorigin)}},"img",t.$attrs,!1),Object.assign({},t.$listeners,{load:t.onLoad})))}),[],!1,null,"0f93470e",null);e.a=component.exports},47:function(t,e,r){"use strict";(function(t,n){r.d(e,"a",(function(){return l})),r.d(e,"b",(function(){return h}));var o=r(21);const c=["avif","webp","png","jpg","gif"],l=t=>{const{pathname:e}=Object(o.parseURL)(t),r=/[.]/.exec(e)&&/[^.]+$/.exec(e)[0];return c.includes(r)?r:"jpg"},h=async(source,e,c)=>{if(t.Image){source=source.modify({src:e});const r=await new Promise((e=>{const img=new t.Image;img.onload=()=>e(img),img.src=source.src}));return source.modify({width:r.naturalWidth,height:r.naturalHeight})}{let t=e;Object.entries(c||{}).length&&(t=Object.entries(c||{}).find((([,e])=>e.endsWith(t)))[0]),source=source.modify({src:Object(o.joinURL)(n.env.NUXT_SPEEDKIT_INTERAL_URL,t)});const l=await fetch(source.src),h=(await r.e(22).then(r.t.bind(null,107,7))).default,{width:d,height:m}=h(await l.buffer());return source.modify({width:d,height:m})}}}).call(this,r(0),r(37))},48:function(t,e,r){"use strict";r(29)},49:function(t,e,r){var n=r(8)((function(i){return i[1]}));n.push([t.i,"\n.nuxt-speedkit-image[data-v-0f93470e]{content-visibility:auto;display:block;width:100%;height:auto;-o-object-fit:cover;object-fit:cover}",""]),n.locals={},t.exports=n},98:function(t,e,r){var content=r(198);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(9).default)("237408ca",content,!0,{sourceMap:!1})}}]);