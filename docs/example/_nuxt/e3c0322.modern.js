(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{101:function(e,t,n){var content=n(104);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(6).default)("295b85b1",content,!0,{sourceMap:!1})},102:function(e,t,n){"use strict";n(103);var r=n(2),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{directives:[{name:"font",rawName:"v-font",value:this.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,"ee1123ec",null);t.a=component.exports},103:function(e,t,n){"use strict";n(101)},104:function(e,t,n){(t=n(5)(!1)).push([e.i,".preview-container[data-v-ee1123ec]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-ee1123ec]:first-child{margin-top:0}.preview-container[data-v-ee1123ec]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-ee1123ec]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-ee1123ec]{flex-direction:row}}.preview-container>div[data-v-ee1123ec]{display:flex;align-items:center;justify-content:center;width:100vw;height:50vh}@media (orientation:landscape){.preview-container>div[data-v-ee1123ec]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-ee1123ec]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-ee1123ec]{font-size:2em}.preview-container .preview-container__info p[data-v-ee1123ec]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-ee1123ec]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-ee1123ec]{font-size:1.125em;--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-ee1123ec]{background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}}.preview-container .preview-container__preview>article[data-v-ee1123ec]{text-align:center}.preview-container .preview-container__preview>article[data-v-ee1123ec],.preview-container .preview-container__preview>div[data-v-ee1123ec]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-ee1123ec]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-ee1123ec]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-ee1123ec]{position:relative;width:100%;height:100%}",""]),e.exports=t},107:function(e,t,n){"use strict";(function(e){let r;function l(){return r||(r=new Promise(t=>{const img=new e.Image;img.onload=()=>t(!0),img.onerror=()=>t(!1),img.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"})),r}function c(element,t){let n={};return e.document&&(n=e.document.createElement(element)),t in n}n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return c}))}).call(this,n(3))},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(16);var l=n(10),c=n(107);const h=new class{constructor(){this.map=new Map}getEntry(e){return this.map.has(e)||this.map.set(e,new r.a),this.map.get(e)}};function o(e,t,n){const r=Object(l.a)(e.srcset),o=h.getEntry(r);return o.promise.then(()=>t()),Object(c.a)("link","imageSrcset")?{link:[d(e,r,o.resolve,n)]}:function(e,t,n){const img=new Image;img.onload=t,img.crossorigin=n,img.srcset=e.srcset}(e,o.resolve,n)}function d(e,t,n,r){return{hid:t,rel:"preload",as:"image",crossorigin:r,callback:n,imageSrcset:e.srcset}}},133:function(e,t,n){e.exports=(()=>{const e=n(134);return{sources:[{srcset:n(135).srcSet,type:"image/webp"},{srcset:e.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(n(136)),width:e.width,height:e.height}})()},134:function(e,t,n){e.exports={srcSet:n.p+"img/5238f49-480.jpg 480w,"+n.p+"img/4c3220c-768.jpg 768w,"+n.p+"img/0467060-960.jpg 960w,"+n.p+"img/13e89ef-1080.jpg 1080w,"+n.p+"img/e26a129-1200.jpg 1200w,"+n.p+"img/f3aa693-1280.jpg 1280w",images:[{path:n.p+"img/5238f49-480.jpg",width:480,height:270},{path:n.p+"img/4c3220c-768.jpg",width:768,height:432},{path:n.p+"img/0467060-960.jpg",width:960,height:540},{path:n.p+"img/13e89ef-1080.jpg",width:1080,height:608},{path:n.p+"img/e26a129-1200.jpg",width:1200,height:675},{path:n.p+"img/f3aa693-1280.jpg",width:1280,height:720}],src:n.p+"img/5238f49-480.jpg",toString:function(){return n.p+"img/5238f49-480.jpg"},width:480,height:270}},135:function(e,t,n){e.exports={srcSet:n.p+"img/21cdd72-480.webp 480w,"+n.p+"img/7a9a549-768.webp 768w,"+n.p+"img/8483d94-960.webp 960w,"+n.p+"img/7bc431b-1080.webp 1080w,"+n.p+"img/cbc6434-1200.webp 1200w,"+n.p+"img/d2e6913-1280.webp 1280w",images:[{path:n.p+"img/21cdd72-480.webp",width:480,height:270},{path:n.p+"img/7a9a549-768.webp",width:768,height:432},{path:n.p+"img/8483d94-960.webp",width:960,height:540},{path:n.p+"img/7bc431b-1080.webp",width:1080,height:608},{path:n.p+"img/cbc6434-1200.webp",width:1200,height:675},{path:n.p+"img/d2e6913-1280.webp",width:1280,height:720}],src:n.p+"img/21cdd72-480.webp",toString:function(){return n.p+"img/21cdd72-480.webp"},width:480,height:270}},136:function(e,t,n){var r={src:n.p+"img/f312213.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cpath fill='%23746d47' d='M0 0h1280v720H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath d='M122.5 797.5l-75-540 1310 415z'/%3E%3Cpath fill='%23ccc3a8' d='M1267.5-77.5l90 580-1435-395z'/%3E%3Cpath fill='%23ff0' d='M22.5-32.5l85 830-185-215z'/%3E%3Cpath fill='%230f0514' d='M1187.5 797.5l-135-665-580 665z'/%3E%3Cpath fill='%23ff0' d='M1252.5 782.5l-30-850 135 405z'/%3E%3Cpath fill='%23938300' d='M212.5 447.5l-80 220 585-10z'/%3E%3Cpath fill='%23ffedce' d='M1182.5 487.5l75-490-185 420z'/%3E%3Cpath fill='%23ff0' d='M17.5 107.5l-95 600 165 10z'/%3E%3Cpath fill='%239ba1b5' d='M952.5 497.5l-10-575h-610z'/%3E%3Cpath fill='%2343404f' d='M1102.5 227.5l-795 105 755 270z'/%3E%3Cpath fill='%23c0ae77' d='M132.5 302.5l45-380 395 430z'/%3E%3Cpath fill='%23040000' d='M1237.5 797.5v-295l-210 5z'/%3E%3Cpath fill='%230c0c1e' d='M42.5 437.5v-165l415 235z'/%3E%3Cpath fill='%23ff0' d='M1357.5 522.5l-115-415v690zm-1435-480l90 460 40-540z'/%3E%3Cpath fill='%230e0000' d='M112.5 652.5l-145 145 570-120z'/%3E%3Cpath fill='%23451d15' d='M1157.5 207.5l-160-40-30 325z'/%3E%3Cpath fill='%23fff' d='M777.5-2.5l-10 70 225 15z'/%3E%3Cpath fill='%23ff0' d='M637.5 602.5l-65 45-5-90z'/%3E%3Cpath fill='%23090000' d='M477.5 632.5v-90l-315 10z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:720,width:1280,type:"jpg"}};e.exports=r.preview,e.exports=Object.assign(e.exports,r)},170:function(e,t,n){e.exports=(()=>{const e=n(171);return{sources:[{srcset:n(172).srcSet,type:"image/webp"},{srcset:e.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(n(173)),width:e.width,height:e.height}})()},171:function(e,t,n){e.exports={srcSet:n.p+"img/989de56-480.jpg 480w,"+n.p+"img/860842d-768.jpg 768w,"+n.p+"img/8ede879-960.jpg 960w,"+n.p+"img/df666a4-1080.jpg 1080w,"+n.p+"img/0683296-1200.jpg 1200w,"+n.p+"img/984bf0c-1280.jpg 1280w",images:[{path:n.p+"img/989de56-480.jpg",width:480,height:270},{path:n.p+"img/860842d-768.jpg",width:768,height:432},{path:n.p+"img/8ede879-960.jpg",width:960,height:540},{path:n.p+"img/df666a4-1080.jpg",width:1080,height:608},{path:n.p+"img/0683296-1200.jpg",width:1200,height:675},{path:n.p+"img/984bf0c-1280.jpg",width:1280,height:720}],src:n.p+"img/989de56-480.jpg",toString:function(){return n.p+"img/989de56-480.jpg"},width:480,height:270}},172:function(e,t,n){e.exports={srcSet:n.p+"img/6e81844-480.webp 480w,"+n.p+"img/000570c-768.webp 768w,"+n.p+"img/542b50c-960.webp 960w,"+n.p+"img/b4b2178-1080.webp 1080w,"+n.p+"img/14fed16-1200.webp 1200w,"+n.p+"img/76320eb-1280.webp 1280w",images:[{path:n.p+"img/6e81844-480.webp",width:480,height:270},{path:n.p+"img/000570c-768.webp",width:768,height:432},{path:n.p+"img/542b50c-960.webp",width:960,height:540},{path:n.p+"img/b4b2178-1080.webp",width:1080,height:608},{path:n.p+"img/14fed16-1200.webp",width:1200,height:675},{path:n.p+"img/76320eb-1280.webp",width:1280,height:720}],src:n.p+"img/6e81844-480.webp",toString:function(){return n.p+"img/6e81844-480.webp"},width:480,height:270}},173:function(e,t,n){var r={src:n.p+"img/36b4356.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cpath fill='%231e2133' d='M0 0h1280v720H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23c8cdde' d='M1032.5 287.5l-805 315 275-435z'/%3E%3Cpath d='M-77.5 702.5l460 90-315-870z'/%3E%3Cpath fill='%231143a5' d='M227.5 37.5l150 280 350-85z'/%3E%3Cpath fill='%2300000a' d='M1302.5 267.5l-1275 475 1280-25z'/%3E%3Cpath fill='%23ebe1e7' d='M757.5 407.5l-140-115 245-125z'/%3E%3Cpath fill='%23000008' d='M1177.5 497.5l180-485-755-90z'/%3E%3Cpath fill='%23beb7b8' d='M572.5 247.5l-410 310 385-125z'/%3E%3Cpath fill='%235b5755' d='M947.5 237.5l-525 305 555-150z'/%3E%3Cpath fill='%23030000' d='M-22.5 797.5l445-460-420-415z'/%3E%3Cpath fill='%2300043a' d='M792.5-77.5h-670l525 380z'/%3E%3Cpath fill='%233ba5f9' d='M412.5 262.5l155 5-215-155z'/%3E%3Cpath fill='%236f6c74' d='M177.5 492.5l125 100 355-100z'/%3E%3Cpath fill='%23191906' d='M552.5 352.5l100-80-85 190z'/%3E%3Cpath fill='%23040a47' d='M922.5 167.5l435 185-215 445z'/%3E%3Cpath fill='%23070714' d='M467.5 507.5l20-125-50 35z'/%3E%3Cpath fill='%23cecbcd' d='M677.5 272.5l-385 215 190-200z'/%3E%3Cpath fill='%23fff' d='M907.5 397.5h45l15-55z'/%3E%3Cpath fill='%2354524c' d='M937.5 257.5l-130-125 70 270z'/%3E%3Cpath fill='%23060200' d='M1222.5 797.5l-1270-125 870-145z'/%3E%3Cpath fill='%23eae4dd' d='M727.5 212.5l130 5-120 125z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:720,width:1280,type:"jpg"}};e.exports=r.preview,e.exports=Object.assign(e.exports,r)},195:function(e,t,n){"use strict";n.r(t);var r=n(149),l=n(102),c={components:{SpeedkitYoutube:r.a,OrganismPreviewContainer:l.a},data:()=>({iframe:{id:"cLKvbhfVBUU",poster:Object.assign({alt:"Alt Text",title:"Title Text",caption:null},n(133))}})},h=n(2),o=Object(h.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("speedkit-youtube",e._b({},"speedkit-youtube",e.iframe,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("Critical"),n("br"),e._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports,d={components:{SpeedkitYoutube:r.a,OrganismPreviewContainer:l.a},data:()=>({iframe:{id:"VBafwg16xpU",poster:Object.assign({alt:"Alt Text",title:"Title Text",caption:null},n(170))}})},w={components:{Critical:o,Lazy:Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("speedkit-youtube",e._b({},"speedkit-youtube",e.iframe,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports}},f=Object(h.a)(w,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("critical",{attrs:{critical:""}}),this._v(" "),t("lazy")],1)}),[],!1,null,null,null);t.default=f.exports}}]);