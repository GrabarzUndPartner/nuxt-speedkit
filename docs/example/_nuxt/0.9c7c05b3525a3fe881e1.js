(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{212:function(t,e,n){"use strict";n(110);var r,o=n(253),c=n(70),l=(n(112),n(184),n(183),n(68),n(113),n(108),n(69),n(256),n(257),n(258),n(259),n(260),n(261),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(109),n(179),n(220),n(194),n(275)),h=n(213),d=n(229),f=n(221),m=n(222),y=(n(190),n(230),n(186),n(329),n(214),n(189),n(471)),v=n.n(y),j=n(196),O=n(239),w=v()(),x=Object(m.a)("list");r=Symbol.iterator;var k=function(){function t(t){Object.defineProperty(this,x,{writable:!0,value:[]}),Object(f.a)(this,x)[x]=Object(f.a)(this,x)[x].concat(Array.from(t||Object(f.a)(this,x)[x]).map((function(t){return new O.a(t)})))}var e=t.prototype;return e[r]=function(){return Object(f.a)(this,x)[x].values()},e.getFormats=function(t,e,n){return this.sorted.reduce((function(r,source){return r.concat(t.map((function(t){return source.modify({format:t,preload:t.includes(e)&&n})})))}),[])},e.getMeta=function(){var e=Object(c.a)(regeneratorRuntime.mark((function e(n,r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(this.sorted.map((function(source){var t,e=n.getSizes(source.src,Object.assign({sizes:source.sizes,modifiers:source.getModifiers()},source.getOptions()));return source.getMeta(e.src,null==r||null==(t=r.nuxt)?void 0:t._img)})));case 2:return o=e.sent,e.abrupt("return",new t(o));case 4:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}(),e.toJSON=function(){return Object(f.a)(this,x)[x]},t.create=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Object(h.a)(this,e)},Object(d.a)(t,[{key:"key",get:function(){return Object(f.a)(this,x)[x].map((function(source){return source.key})).join("-")}},{key:"list",get:function(){return Object(f.a)(this,x)[x]}},{key:"sorted",get:function(){return Object(f.a)(this,x)[x].sort((function(a,b){return w(a.media,b.media)}))}},{key:"style",get:function(){var t=this;return Object(f.a)(this,x)[x].map((function(e){var n=e.media,r=e.width,o=e.height,c=e.style;return"\n      @media "+n+" { ."+t.className+"::before { padding-top: calc((1 / ("+r+" / "+o+")) * 100%); } }\n      @supports (aspect-ratio: 1) {\n        @media "+n+" { ."+t.className+" { aspect-ratio: "+r+" / "+o+"; } }\n      }\n      "+c+"\n    "})).reverse().join(" ")}},{key:"className",get:function(){return"picture-"+Object(j.a)(this.sorted.map((function(t){return t.src})).join(","))}},{key:"classNames",get:function(){return{picture:this.className,image:Object(f.a)(this,x)[x].map((function(source){return source.className}))}}}]),t}(),S=n(211),N=(n(197),n(198),n(199),n(200),n(201),n(202),n(203),n(204),n(205),n(206),n(207),n(208),n(209),n(210),n(255)),z=new Map([["jpg","jpeg"]]),$={props:{source:{type:O.a,required:!0},crossorigin:{type:[Boolean,String],default:function(){return this.$speedkit.crossorigin},validator:function(t){return["anonymous","use-credentials","",!0,!1].includes(t)}}},data:function(){return{config:null}},fetchKey:function(){return"source-"+this.source.key},fetch:function(){this.config=this.$img.getSizes(this.source.src,Object.assign({sizes:this.source.sizes,modifiers:this.source.getModifiers()},this.source.getOptions()))},head:function(){var t=new O.a(this.source);return this.config&&t.preload?{link:[t.getPreload(this.config.srcset,this.config.sizes,Object(N.getCrossorigin)(this.crossorigin))]}:{}},computed:{srcset:function(){return this.config.srcset||this.config.src},type:function(){return"image/"+(z.get(this.source.format)||this.source.format)}}},_=n(173),C=Object(_.a)($,(function(){var t=this;return(0,t._self._c)("source",{attrs:{srcset:t.srcset,sizes:t.config.sizes,media:t.source.media,type:t.type}})}),[],!1,null,null,null).exports,M=["avif","webp","png","jpg","gif"],P={components:{PictureSource:C,BaseImage:l.a},props:{sources:{type:[Array,k],required:!0},formats:{type:Array,default:function(){return this.$speedkit.targetFormats}},loadingSpinner:{type:S.a,default:void 0},title:{type:String,default:null},alt:{type:String,default:null},crossorigin:{type:[Boolean,String],default:function(){return this.$speedkit.crossorigin},validator:function(t){return["anonymous","use-credentials","",!0,!1].includes(t)}}},data:function(){return{metaSources:{},classNames:{}}},fetch:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$nuxt.context.ssrContext,e.next=3,t.sourceList.getMeta(t.$img,n);case 3:t.metaSources=e.sent,t.classNames=t.metaSources.classNames;case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{style:this.style}},fetchKey:function(t){var e="picture-"+this.sourceList.key;return e+"-"+t(e)},computed:{sourceList:function(){return k.create(this.sources)},formatSources:function(){var t=this,e=Array.from(new Set(M.map((function(e){return t.formats.find((function(t){return t.includes(e)}))})))).filter(Boolean),n=M.find((function(e){return t.formats.find((function(t){return t.includes(e)}))}));return this.sourceList.getFormats(e,n,this.isCritical)},style:function(){if(!this.metaSources)return[];var t=this.metaSources.length&&new k(this.metaSources)||this.metaSources;return[{hid:this.classNames.picture,type:"text/css",cssText:t.style}]}},methods:{onLoad:function(t){this.$emit("load",t)}}},L=(n(472),Object(_.a)(P,(function(){var t=this,e=t._self._c;return e("picture",{staticClass:"nuxt-speedkit-picture",class:t.classNames.picture},[t._l(t.formatSources,(function(source){return e("picture-source",{key:source.key,attrs:{source:source,crossorigin:t.crossorigin}})})),t._v(" "),e("base-image",{class:t.classNames.image,attrs:{title:t.title,alt:t.alt,"loading-spinner":t.loadingSpinner,crossorigin:t.crossorigin,width:"0",height:"0"},on:{load:t.onLoad}})],2)}),[],!1,null,"ce9c9924",null).exports),A={inheritAttrs:!1,props:{hydrate:{type:Boolean,default:!0}},render:function(t){return this.hydrate?t(L,{props:Object.assign({},this.$attrs,{critical:this.isCritical}),on:this.$listeners}):t(o.a,{props:{never:!0}},[t("noscript",{class:"nuxt-speedkit-picture-noscript"},[t(L,{props:Object.assign({},this.$attrs,{critical:this.hydrate}),on:this.$listeners})])])}},R=Object(_.a)(A,undefined,undefined,!1,null,null,null);e.a=R.exports},239:function(t,e,n){"use strict";n.d(e,"a",(function(){return z}));var r=n(213),o=n(229),c=n(221),l=n(222),h=(n(110),n(230),n(184),n(194),n(196)),d=n(285),f=Object(l.a)("src"),m=Object(l.a)("sizes"),y=Object(l.a)("media"),v=Object(l.a)("width"),j=Object(l.a)("height"),O=Object(l.a)("format"),w=Object(l.a)("quality"),x=Object(l.a)("preload"),k=Object(l.a)("modifiers"),S=Object(l.a)("provider"),N=Object(l.a)("preset"),z=function(){function t(t){var e=t.src,n=t.sizes,r=t.width,o=t.height,l=t.media,h=void 0===l?"all":l,d=t.quality,z=void 0===d?70:d,$=t.format,_=void 0===$?null:$,C=t.preload,M=void 0!==C&&C,P=t.modifiers,L=void 0===P?{}:P,A=t.provider,R=void 0===A?void 0:A,F=t.preset,J=void 0===F?void 0:F;Object.defineProperty(this,f,{writable:!0,value:null}),Object.defineProperty(this,m,{writable:!0,value:null}),Object.defineProperty(this,y,{writable:!0,value:null}),Object.defineProperty(this,v,{writable:!0,value:null}),Object.defineProperty(this,j,{writable:!0,value:null}),Object.defineProperty(this,O,{writable:!0,value:null}),Object.defineProperty(this,w,{writable:!0,value:null}),Object.defineProperty(this,x,{writable:!0,value:!1}),Object.defineProperty(this,k,{writable:!0,value:{}}),Object.defineProperty(this,S,{writable:!0,value:void 0}),Object.defineProperty(this,N,{writable:!0,value:void 0}),Object(c.a)(this,f)[f]=e,Object(c.a)(this,m)[m]=n,Object(c.a)(this,y)[y]=h,Object(c.a)(this,v)[v]=r,Object(c.a)(this,j)[j]=o,Object(c.a)(this,O)[O]=_,Object(c.a)(this,w)[w]=z,Object(c.a)(this,x)[x]=M,Object(c.a)(this,k)[k]=L,Object(c.a)(this,S)[S]=R,Object(c.a)(this,N)[N]=J}var e=t.prototype;return e.getModifiers=function(){return Object.assign({},this.modifiers,{format:this.format,quality:this.quality})},e.getOptions=function(){return{provider:this.provider,preset:this.preset}},e.getMeta=function(e,n){return Object(d.b)(new t(Object.assign({},this.toJSON())),e,n)},e.getPreload=function(t,e,n){var r={rel:"preload",as:"image",imagesrcset:t,imagesizes:e,media:this.media};return n&&(r.crossorigin=n),r},e.modify=function(e){return new t(Object.assign({},this.toJSON(),e))},e.toJSON=function(){return{src:Object(c.a)(this,f)[f],sizes:Object(c.a)(this,m)[m],media:Object(c.a)(this,y)[y],width:Object(c.a)(this,v)[v],height:Object(c.a)(this,j)[j],format:Object(c.a)(this,O)[O],quality:Object(c.a)(this,w)[w],preload:Object(c.a)(this,x)[x],modifiers:Object(c.a)(this,k)[k],provider:Object(c.a)(this,S)[S],preset:Object(c.a)(this,N)[N]}},t.create=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return Object(r.a)(this,e)},Object(o.a)(t,[{key:"key",get:function(){return Object(h.a)(JSON.stringify(this.toJSON()))}},{key:"src",get:function(){return Object(c.a)(this,f)[f]}},{key:"sizes",get:function(){return Object(c.a)(this,m)[m]}},{key:"media",get:function(){return Object(c.a)(this,y)[y]}},{key:"width",get:function(){return Object(c.a)(this,v)[v]}},{key:"height",get:function(){return Object(c.a)(this,j)[j]}},{key:"ratio",get:function(){return Object(c.a)(this,v)[v]/Object(c.a)(this,j)[j]}},{key:"format",get:function(){var t,e=Object(d.a)(Object(c.a)(this,f)[f]);return null!=(t=Object(c.a)(this,O)[O])&&t.includes(e)?e:Object(c.a)(this,O)[O]||e}},{key:"quality",get:function(){return Object(c.a)(this,w)[w]}},{key:"preload",get:function(){return Object(c.a)(this,x)[x]}},{key:"modifiers",get:function(){return Object(c.a)(this,k)[k]}},{key:"provider",get:function(){return Object(c.a)(this,S)[S]}},{key:"preset",get:function(){return Object(c.a)(this,N)[N]}},{key:"className",get:function(){return"image-"+Object(h.a)(this.src)}},{key:"style",get:function(){return"\n      @supports (aspect-ratio: 1) {\n        @media "+this.media+" { ."+this.className+" { aspect-ratio: "+this.width+" / "+this.height+"; } }\n      }\n    "}}]),t}()},240:function(t,e,n){var content=n(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(175).default)("bcf1c8da",content,!0,{sourceMap:!1})},255:function(t,e){t.exports={getCrossorigin:function(t,e){return t=void 0===(t=!0===t?"anonymous":t)?e||"anonymous":t}}},275:function(t,e,n){"use strict";n(110);var r=n(70),o=(n(112),n(184),n(190),n(183),n(68),n(239)),c=n(211),l=n(255),h={inheritAttrs:!1,props:{source:{type:[o.a,Object],default:null},title:{type:String,required:!0},alt:{type:String,default:null},crossorigin:{type:[Boolean,String],default:function(){return this.$speedkit.crossorigin},validator:function(t){return["anonymous","use-credentials","",!0,!1].includes(t)}},loadingSpinner:{type:c.a,default:function(){return this.$speedkit.loader()}}},data:function(){return{className:null,loading:!0,config:null,meta:null}},fetchKey:function(t){var e,n;this.source?e="image-"+(null==(n=new o.a(this.source))?void 0:n.key):e="image";return e+"-"+t(e)},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,source,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.source){e.next=8;break}return source=new o.a(t.source),t.config=t.$img.getSizes(source.src,Object.assign({sizes:source.sizes,modifiers:source.getModifiers()},source.getOptions())),r=t.$nuxt.context.ssrContext,e.next=6,source.getMeta(t.config.src,(null==r||null==(n=r.nuxt)?void 0:n._img)||{});case 6:t.meta=e.sent,t.className=t.meta.className;case 8:case"end":return e.stop()}}),e)})))()},head:function(){return{style:this.style,link:this.preload,noscript:[{hid:"img-nojs",innerHTML:"<style>img { content-visibility: unset !important; }</style>"}],__dangerouslyDisableSanitizers:["noscript"]}},computed:{classNames:function(){var t=[{loading:this.loading}].concat(this.className);return this.loadingSpinner&&t.push(this.loadingSpinner.className),t},srcset:function(){var t,e;return(null==(t=this.config)?void 0:t.srcset)||(null==(e=this.config)?void 0:e.src)},sizes:function(){var t;return null==(t=this.config)?void 0:t.sizes},width:function(){var t;return this.$attrs.width||(null==(t=this.meta)?void 0:t.width)},height:function(){var t;return this.$attrs.height||(null==(t=this.meta)?void 0:t.height)},loadingMode:function(){return this.isCritical?"eager":"lazy"},decodingMode:function(){return this.source&&"svg"===new o.a(this.source).format?"sync":"async"},style:function(){return[this.loadingSpinner&&{hid:this.loadingSpinner.className,type:"text/css",cssText:this.loadingSpinner.style},this.meta&&{hid:this.className,type:"text/css",cssText:new o.a(this.meta).style}].filter(Boolean)},preload:function(){return this.config&&this.isCritical?[new o.a(this.source).getPreload(this.config.srcset,this.config.sizes,Object(l.getCrossorigin)(this.crossorigin))]:[]}},mounted:function(){this.loading=!this.$el.complete},methods:{getCrossorigin:l.getCrossorigin,onLoad:function(t){this.loading=!1,this.$emit("load",t.target.currentSrc)}}},d=(n(286),n(173)),component=Object(d.a)(h,(function(){var t=this;return(0,t._self._c)("img",t._g(t._b({staticClass:"nuxt-speedkit-image",class:t.classNames,attrs:{srcset:t.srcset,sizes:t.sizes,width:t.width,height:t.height,title:t.title,alt:t.alt||t.title,loading:t.loadingMode,decoding:t.decodingMode,crossorigin:t.getCrossorigin(t.crossorigin)}},"img",t.$attrs,!1),Object.assign({},t.$listeners,{load:t.onLoad})))}),[],!1,null,"0f93470e",null);e.a=component.exports},285:function(t,e,n){"use strict";(function(t,r){n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return d}));var o=n(70),c=(n(112),n(71),n(184),n(217),n(220),n(68),n(215),n(195),n(252),n(69),n(108),n(109),n(218)),l=["avif","webp","png","jpg","gif"],h=function(t){var e=Object(c.parseURL)(t).pathname,n=/[.]/.exec(e)&&/[^.]+$/.exec(e)[0];return l.includes(n)?n:"jpg"},d=function(){var e=Object(o.a)(regeneratorRuntime.mark((function e(source,o,l){var h,d,f,m,y,v,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.Image){e.next=8;break}return source=source.modify({src:o}),e.next=4,new Promise((function(e){var img=new t.Image;img.onload=function(){return e(img)},img.src=source.src}));case 4:return h=e.sent,e.abrupt("return",source.modify({width:h.naturalWidth,height:h.naturalHeight}));case 8:return d=o,Object.entries(l||{}).length&&(d=Object.entries(l||{}).find((function(t){return t[1].endsWith(d)}))[0]),source=source.modify({src:Object(c.joinURL)(r.env.NUXT_SPEEDKIT_INTERAL_URL,d)}),e.next=13,fetch(source.src);case 13:return f=e.sent,e.next=16,n.e(26).then(n.t.bind(null,361,7));case 16:return m=e.sent.default,e.t0=m,e.next=20,f.buffer();case 20:return e.t1=e.sent,y=(0,e.t0)(e.t1),v=y.width,j=y.height,e.abrupt("return",source.modify({width:v,height:j}));case 25:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()}).call(this,n(26),n(250))},286:function(t,e,n){"use strict";n(240)},287:function(t,e,n){var r=n(174)((function(i){return i[1]}));r.push([t.i,"\n.nuxt-speedkit-image[data-v-0f93470e]{content-visibility:auto;display:block;width:100%;height:auto;-o-object-fit:cover;object-fit:cover}",""]),r.locals={},t.exports=r},352:function(t,e,n){var content=n(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(175).default)("237408ca",content,!0,{sourceMap:!1})},471:function(t,e){const n=/(!?\(\s*min(-device-)?-width)(.|\n)+\(\s*max(-device)?-width/i,r=/(!?\(\s*max(-device)?-width)(.|\n)+\(\s*min(-device)?-width/i,o=O(n,r,/\(\s*min(-device)?-width/i),c=O(r,n,/\(\s*max(-device)?-width/i),l=/(!?\(\s*min(-device)?-height)(.|\n)+\(\s*max(-device)?-height/i,h=/(!?\(\s*max(-device)?-height)(.|\n)+\(\s*min(-device)?-height/i,d=O(l,h,/\(\s*min(-device)?-height/i),f=O(h,l,/\(\s*max(-device)?-height/i),m=/print/i,y=/^print$/i,v=Number.MAX_VALUE;function j(t){if(null===(t=/(-?\d*\.?\d+)(ch|em|ex|px|rem)/.exec(t)))return v;let e=t[1];switch(t[2]){case"ch":e=8.8984375*parseFloat(e);break;case"em":case"rem":e=16*parseFloat(e);break;case"ex":e=8.296875*parseFloat(e);break;case"px":e=parseFloat(e)}return+e}function O(t,e,n){return function(r){return!!t.test(r)||!e.test(r)&&n.test(r)}}function w(a,b){const t=m.test(a),e=y.test(a),n=m.test(b),r=y.test(b);return t&&n?!e&&r?1:e&&!r?-1:a.localeCompare(b):t?1:n?-1:null}t.exports=function(t){const e=(t||{}).unitlessMqAlwaysFirst;function n(a,b){const t=w(a,b);if(null!==t)return t;const n=o(a)||d(a),r=c(a)||f(a),l=o(b)||d(b),h=c(b)||f(b);if(!e||(n||r)&&(l||h)){if(n&&h)return-1;if(r&&l)return 1;const t=j(a),e=j(b);return t===v&&e===v?a.localeCompare(b):t===v?1:e===v?-1:t>e?r?-1:1:t<e?r?1:-1:a.localeCompare(b)}return n||r||l||h?l||h?-1:1:a.localeCompare(b)}return n.desktopFirst=function(a,b){const t=w(a,b);if(null!==t)return t;const n=o(a)||d(a),r=c(a)||f(a),l=o(b)||d(b),h=c(b)||f(b);if(!e||(n||r)&&(l||h)){if(n&&h)return 1;if(r&&l)return-1;const t=j(a),e=j(b);return t===v&&e===v?a.localeCompare(b):t===v?1:e===v?-1:t>e?r?-1:1:t<e?r?1:-1:-a.localeCompare(b)}return n||r||l||h?l||h?-1:1:a.localeCompare(b)},n}},472:function(t,e,n){"use strict";n(352)},473:function(t,e,n){var r=n(174)((function(i){return i[1]}));r.push([t.i,'\n.nuxt-speedkit-picture[data-v-ce9c9924]{position:relative;box-sizing:border-box;display:block;width:100%;}.nuxt-speedkit-picture img[data-v-ce9c9924]{position:absolute;top:0;right:0;bottom:0;left:0;box-sizing:border-box}.nuxt-speedkit-picture[data-v-ce9c9924]:before{position:relative;box-sizing:border-box;display:block;content:""}@supports (aspect-ratio:1){.nuxt-speedkit-picture[data-v-ce9c9924]{position:initial;position:unset;}.nuxt-speedkit-picture img[data-v-ce9c9924]{position:initial;position:unset;top:initial;top:unset;right:initial;right:unset;bottom:initial;bottom:unset;left:initial;left:unset}.nuxt-speedkit-picture[data-v-ce9c9924]:before{display:none}}',""]),r.locals={},t.exports=r}}]);