(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{278:function(e,t,n){var content=n(281);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("295b85b1",content,!0,{sourceMap:!1})},279:function(e,t,n){"use strict";n(280);var r=n(8),component=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{directives:[{name:"font",rawName:"v-font",value:this.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}],staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,"ee1123ec",null);t.a=component.exports},280:function(e,t,n){"use strict";n(278)},281:function(e,t,n){(t=n(25)(!1)).push([e.i,".preview-container[data-v-ee1123ec]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-ee1123ec]:first-child{margin-top:0}.preview-container[data-v-ee1123ec]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-ee1123ec]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-ee1123ec]{flex-direction:row}}.preview-container>div[data-v-ee1123ec]{display:flex;align-items:center;justify-content:center;width:100vw;height:50vh}@media (orientation:landscape){.preview-container>div[data-v-ee1123ec]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-ee1123ec]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-ee1123ec]{font-size:2em}.preview-container .preview-container__info p[data-v-ee1123ec]{line-height:1.375;text-align:center}.preview-container .preview-container__info button[data-v-ee1123ec]{width:90%;margin:0 auto}.preview-container .preview-container__preview[data-v-ee1123ec]{font-size:1.125em;--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-ee1123ec]{background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}}.preview-container .preview-container__preview>article[data-v-ee1123ec]{text-align:center}.preview-container .preview-container__preview>article[data-v-ee1123ec],.preview-container .preview-container__preview>div[data-v-ee1123ec]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-ee1123ec]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-ee1123ec]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-ee1123ec]{position:relative;width:100%;height:100%}",""]),e.exports=t},300:function(e,t,n){var content=n(307);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("7a80f00b",content,!0,{sourceMap:!1})},306:function(e,t,n){"use strict";n(300)},307:function(e,t,n){(t=n(25)(!1)).push([e.i,".organism-spacer{min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;font-size:2em}.organism-spacer>div{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh}.organism-spacer>div>span{display:block;font-size:1.375em;text-align:center}.organism-spacer>div p{line-height:1.375;text-align:center}",""]),e.exports=t},309:function(e,t,n){"use strict";var r={props:{title:{type:String,default:"Scroll down"}}},o=(n(306),n(8)),component=Object(o.a)(r,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"organism-spacer"},[t("div",[t("p",[this._v("Scroll down")]),this._v(" "),t("span",[this._v("↓")])])])}],!1,null,null,null);t.a=component.exports},398:function(e,t,n){"use strict";n.r(t);var r=n(309),o={components:{OrganismPreviewContainer:n(279).a},data:function(){return{content:"<p>This is a <strong>RichText</strong> with different <i>font variants</i>.</p>"}}},c=n(8),l=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[n("article",{directives:[{name:"font",rawName:"v-font",value:[e.$getFont("Comic Neue",400,"normal"),e.$getFont("Comic Neue",700,"normal",{selector:"b, strong"}),e.$getFont("Comic Neue",400,"italic",{selector:"i, em"})],expression:"[\n        $getFont('Comic Neue', 400, 'normal'),\n        $getFont('Comic Neue', 700, 'normal', {selector: 'b, strong'}),\n        $getFont('Comic Neue', 400, 'italic', {selector: 'i, em'})\n      ]"}],domProps:{innerHTML:e._s(e.content)}})]},proxy:!0},{key:"title",fn:function(){return[n("p",[e._v("Font extended usage")])]},proxy:!0}])})}),[],!1,null,null,null).exports,v={components:{OrganismSpacer:r.a,Lazy:l}},d=Object(c.a)(v,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("organism-spacer"),this._v(" "),t("lazy")],1)}),[],!1,null,null,null);t.default=d.exports}}]);