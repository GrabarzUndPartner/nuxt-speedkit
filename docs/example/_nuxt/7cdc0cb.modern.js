(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{101:function(e,t,n){var content=n(104);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(6).default)("295b85b1",content,!0,{sourceMap:!1})},102:function(e,t,n){"use strict";n(103);var r=n(2),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{directives:[{name:"font",rawName:"v-font",value:this.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,"ee1123ec",null);t.a=component.exports},103:function(e,t,n){"use strict";n(101)},104:function(e,t,n){(t=n(5)(!1)).push([e.i,".preview-container[data-v-ee1123ec]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-ee1123ec]:first-child{margin-top:0}.preview-container[data-v-ee1123ec]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-ee1123ec]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-ee1123ec]{flex-direction:row}}.preview-container>div[data-v-ee1123ec]{display:flex;align-items:center;justify-content:center;width:100vw;height:50vh}@media (orientation:landscape){.preview-container>div[data-v-ee1123ec]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-ee1123ec]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-ee1123ec]{font-size:2em}.preview-container .preview-container__info p[data-v-ee1123ec]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-ee1123ec]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-ee1123ec]{font-size:1.125em;--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-ee1123ec]{background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}}.preview-container .preview-container__preview>article[data-v-ee1123ec]{text-align:center}.preview-container .preview-container__preview>article[data-v-ee1123ec],.preview-container .preview-container__preview>div[data-v-ee1123ec]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-ee1123ec]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-ee1123ec]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-ee1123ec]{position:relative;width:100%;height:100%}",""]),e.exports=t},107:function(e,t,n){"use strict";(function(e){let r;function l(){return r||(r=new Promise(t=>{const img=new e.Image;img.onload=()=>t(!0),img.onerror=()=>t(!1),img.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA"})),r}function c(element,t){let n={};return e.document&&(n=e.document.createElement(element)),t in n}n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return c}))}).call(this,n(3))},118:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(17);var l=n(10),c=n(107);const h=new class{constructor(){this.map=new Map}getEntry(e){return this.map.has(e)||this.map.set(e,new r.a),this.map.get(e)}};function o(e,t,n){const r=Object(l.a)(e.srcset),o=h.getEntry(r);return o.promise.then(()=>t()),Object(c.a)("link","imageSrcset")?{link:[d(e,r,o.resolve,n)]}:function(e,t,n){const img=new Image;img.onload=t,img.crossorigin=n,img.srcset=e.srcset}(e,o.resolve,n)}function d(e,t,n,r){return{hid:t,rel:"preload",as:"image",crossorigin:r,callback:n,imageSrcset:e.srcset}}},133:function(e,t,n){e.exports=(()=>{const e=n(134);return{sources:[{srcset:n(135).srcSet,type:"image/webp"},{srcset:e.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(n(136)),width:e.width,height:e.height}})()},134:function(e,t,n){e.exports={srcSet:n.p+"img/5238f49-480.jpg 480w,"+n.p+"img/4c3220c-768.jpg 768w,"+n.p+"img/0467060-960.jpg 960w,"+n.p+"img/13e89ef-1080.jpg 1080w,"+n.p+"img/e26a129-1200.jpg 1200w,"+n.p+"img/f3aa693-1280.jpg 1280w",images:[{path:n.p+"img/5238f49-480.jpg",width:480,height:270},{path:n.p+"img/4c3220c-768.jpg",width:768,height:432},{path:n.p+"img/0467060-960.jpg",width:960,height:540},{path:n.p+"img/13e89ef-1080.jpg",width:1080,height:608},{path:n.p+"img/e26a129-1200.jpg",width:1200,height:675},{path:n.p+"img/f3aa693-1280.jpg",width:1280,height:720}],src:n.p+"img/5238f49-480.jpg",toString:function(){return n.p+"img/5238f49-480.jpg"},width:480,height:270}},135:function(e,t,n){e.exports={srcSet:n.p+"img/21cdd72-480.webp 480w,"+n.p+"img/7a9a549-768.webp 768w,"+n.p+"img/8483d94-960.webp 960w,"+n.p+"img/7bc431b-1080.webp 1080w,"+n.p+"img/cbc6434-1200.webp 1200w,"+n.p+"img/d2e6913-1280.webp 1280w",images:[{path:n.p+"img/21cdd72-480.webp",width:480,height:270},{path:n.p+"img/7a9a549-768.webp",width:768,height:432},{path:n.p+"img/8483d94-960.webp",width:960,height:540},{path:n.p+"img/7bc431b-1080.webp",width:1080,height:608},{path:n.p+"img/cbc6434-1200.webp",width:1200,height:675},{path:n.p+"img/d2e6913-1280.webp",width:1280,height:720}],src:n.p+"img/21cdd72-480.webp",toString:function(){return n.p+"img/21cdd72-480.webp"},width:480,height:270}},136:function(e,t,n){var r={src:n.p+"img/f312213.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cpath fill='%23746d47' d='M0 0h1280v720H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath d='M62.5 242.5l45 555 1250-120z'/%3E%3Cpath fill='%23cbc7bd' d='M737.5 352.5l620-390-1435 110z'/%3E%3Cpath fill='%23ffff81' d='M1357.5 587.5l-275-170 180-495z'/%3E%3Cpath fill='%23ff0' d='M-77.5 542.5l95-600 90 855z'/%3E%3Cpath fill='%230d0913' d='M1232.5 797.5l-1140-405 1150 70z'/%3E%3Cpath fill='%23ff0' d='M1247.5 797.5l110-395-115-385z'/%3E%3Cpath fill='%238e8200' d='M762.5 662.5l-640-225 20 225z'/%3E%3Cpath fill='%23e7cddd' d='M1257.5 62.5l-95 495-55-450z'/%3E%3Cpath fill='%23c6b275' d='M127.5-77.5l415 360-355 55z'/%3E%3Cpath fill='%23ff0' d='M82.5 797.5l-160-175 105-505z'/%3E%3Cpath fill='%2342485b' d='M542.5 167.5l-110 370 685-105z'/%3E%3Cpath fill='%2322061e' d='M1062.5 87.5l-120 195 150 280z'/%3E%3Cpath fill='%23aeaebb' d='M942.5 7.5l10 350-670-435z'/%3E%3Cpath fill='%2316161c' d='M42.5 222.5v205l270 190z'/%3E%3Cpath fill='%23ff0' d='M32.5 607.5l15-670-125 245z'/%3E%3Cpath fill='%231a0a07' d='M712.5 412.5l605 355-725-35z'/%3E%3Cpath fill='%23ff0' d='M1242.5-77.5l115 340-110 395z'/%3E%3Cpath fill='%23b2aa1e' d='M27.5 57.5l540 35-420 85z'/%3E%3Cpath fill='%23160000' d='M27.5 797.5l580-95-510-60z'/%3E%3Cpath fill='%23a79000' d='M577.5 547.5l-460-5 270-70z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:720,width:1280,type:"jpg"}};e.exports=r.preview,e.exports=Object.assign(e.exports,r)},173:function(e,t,n){e.exports=(()=>{const e=n(174);return{sources:[{srcset:n(175).srcSet,type:"image/webp"},{srcset:e.srcSet,type:"image/jpeg"}],placeholder:(({src:e,preview:t})=>({url:e,base64:t}))(n(176)),width:e.width,height:e.height}})()},174:function(e,t,n){e.exports={srcSet:n.p+"img/989de56-480.jpg 480w,"+n.p+"img/860842d-768.jpg 768w,"+n.p+"img/8ede879-960.jpg 960w,"+n.p+"img/df666a4-1080.jpg 1080w,"+n.p+"img/0683296-1200.jpg 1200w,"+n.p+"img/984bf0c-1280.jpg 1280w",images:[{path:n.p+"img/989de56-480.jpg",width:480,height:270},{path:n.p+"img/860842d-768.jpg",width:768,height:432},{path:n.p+"img/8ede879-960.jpg",width:960,height:540},{path:n.p+"img/df666a4-1080.jpg",width:1080,height:608},{path:n.p+"img/0683296-1200.jpg",width:1200,height:675},{path:n.p+"img/984bf0c-1280.jpg",width:1280,height:720}],src:n.p+"img/989de56-480.jpg",toString:function(){return n.p+"img/989de56-480.jpg"},width:480,height:270}},175:function(e,t,n){e.exports={srcSet:n.p+"img/6e81844-480.webp 480w,"+n.p+"img/000570c-768.webp 768w,"+n.p+"img/542b50c-960.webp 960w,"+n.p+"img/b4b2178-1080.webp 1080w,"+n.p+"img/14fed16-1200.webp 1200w,"+n.p+"img/76320eb-1280.webp 1280w",images:[{path:n.p+"img/6e81844-480.webp",width:480,height:270},{path:n.p+"img/000570c-768.webp",width:768,height:432},{path:n.p+"img/542b50c-960.webp",width:960,height:540},{path:n.p+"img/b4b2178-1080.webp",width:1080,height:608},{path:n.p+"img/14fed16-1200.webp",width:1200,height:675},{path:n.p+"img/76320eb-1280.webp",width:1280,height:720}],src:n.p+"img/6e81844-480.webp",toString:function(){return n.p+"img/6e81844-480.webp"},width:480,height:270}},176:function(e,t,n){var r={src:n.p+"img/36b4356.jpg",preview:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1280 720'%3E%3Cpath fill='%231e2133' d='M0 0h1280v720H0z'/%3E%3Cg fill-opacity='.5'%3E%3Cpath fill='%23cdd1e1' d='M232.5 602.5l270-420 535 95z'/%3E%3Cpath fill='%23000008' d='M1357.5 752.5l-1435-30 1390-425z'/%3E%3Cpath fill='%23154bb1' d='M377.5 307.5l335-60-505-210z'/%3E%3Cpath fill='%23dbd2dc' d='M617.5 282.5l245-120-105 280z'/%3E%3Cpath d='M432.5 327.5l-415-400-90 865z'/%3E%3Cpath fill='%23000006' d='M632.5-42.5l560 535 165-485z'/%3E%3Cpath fill='%23c1bcbe' d='M582.5 227.5l-50 195-355 135z'/%3E%3Cpath fill='%235a5559' d='M982.5 217.5l-15 175-550 125z'/%3E%3Cpath fill='%2301093d' d='M122.5-77.5l780 145-270 220z'/%3E%3Cpath fill='%23389fed' d='M407.5 252.5l180 25-240-165z'/%3E%3Cpath fill='%2363606e' d='M477.5 387.5l145 140-370 65z'/%3E%3Cpath fill='%23020745' d='M1357.5 272.5l-455-105 315 630z'/%3E%3Cpath d='M122.5 797.5l165-875-365 115zm535-525l-105 160 20-105z'/%3E%3Cpath fill='%23030000' d='M142.5 797.5l950-125-870-115z'/%3E%3Cpath fill='%23eae4de' d='M727.5 217.5l150-5-155 125z'/%3E%3Cpath fill='%236d7584' d='M247.5 362.5l-85 205 70-45z'/%3E%3Cpath fill='%23555550' d='M807.5 102.5l35 300 150-20z'/%3E%3Cpath fill='%23faf7f8' d='M532.5 372.5l-5-80 80-15z'/%3E%3Cpath fill='%23e8e8ef' d='M962.5 377.5l-60 30 75-85z'/%3E%3C/g%3E%3C/svg%3E",dimensions:{height:720,width:1280,type:"jpg"}};e.exports=r.preview,e.exports=Object.assign(e.exports,r)},202:function(e,t,n){"use strict";n.r(t);var r=n(151),l=n(102),c={components:{SpeedkitYoutube:r.a,OrganismPreviewContainer:l.a},data:()=>({iframe:{id:"cLKvbhfVBUU",poster:Object.assign({alt:"Alt Text",title:"Title Text",caption:null},n(133))}})},h=n(2),o=Object(h.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("speedkit-youtube",e._b({},"speedkit-youtube",e.iframe,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("Critical"),n("br"),e._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports,d={components:{SpeedkitYoutube:r.a,OrganismPreviewContainer:l.a},data:()=>({iframe:{id:"VBafwg16xpU",poster:Object.assign({alt:"Alt Text",title:"Title Text",caption:null},n(173))}})},w={components:{Critical:o,Lazy:Object(h.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("div",[n("speedkit-youtube",e._b({},"speedkit-youtube",e.iframe,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("SpeedkitYoutube")])]},proxy:!0}])})}),[],!1,null,null,null).exports}},f=Object(h.a)(w,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("critical",{attrs:{critical:""}}),this._v(" "),t("lazy")],1)}),[],!1,null,null,null);t.default=f.exports}}]);