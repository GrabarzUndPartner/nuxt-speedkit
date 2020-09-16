(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{176:function(e,t,n){"use strict";n.r(t);var r={components:{OrganismPreviewContainer:n(56).default}},o=n(2),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("organism-preview-container",{scopedSlots:e._u([{key:"title",fn:function(){return[n("p",[e._v("Critical - v-font")])]},proxy:!0}])},[[n("div",[n("ul",[n("li",{directives:[{name:"font",rawName:"v-font",value:e.$fonts.getFont("Comic Neue",400,"normal").isCritical(),expression:"$fonts.getFont('Comic Neue', 400, 'normal').isCritical()"}],attrs:{id:"criticalFontAssignSimple"}},[e._v("\n            font assign simple\n          ")]),e._v(" "),n("hr"),e._v(" "),n("li",{directives:[{name:"font",rawName:"v-font",value:e.$fonts.getFont("Comic Neue",700,"normal").addSelector("strong").isCritical(),expression:"$fonts.getFont('Comic Neue', 700, 'normal').addSelector('strong').isCritical()"}],attrs:{id:"criticalFontAssignBySingleSelector"}},[e._v("\n            font assign by "),n("strong",[e._v("single selector")])]),e._v(" "),n("li",[n("span",{directives:[{name:"font",rawName:"v-font",value:[e.$fonts.getFont("Comic Neue",700,"normal").addSelector("strong").isCritical(),e.$fonts.getFont("Comic Neue",700,"italic").addSelector("i").isCritical()],expression:"[\n                $fonts.getFont('Comic Neue', 700, 'normal').addSelector('strong').isCritical(),\n                $fonts.getFont('Comic Neue', 700, 'italic').addSelector('i').isCritical()\n              ]"}],attrs:{id:"criticalFontAssignByMultipleVariances"}},[e._v("font assign by "),n("strong",[e._v("multiple")]),e._v(" "),n("i",[e._v("variances")])])]),e._v(" "),n("hr"),e._v(" "),n("li",[n("span",{directives:[{name:"font",rawName:"v-font",value:[e.$fonts.getFont("Comic Neue",700,"normal").addSelector("strong, b").isCritical()],expression:"[\n                $fonts.getFont('Comic Neue', 700, 'normal').addSelector('strong, b').isCritical()\n              ]"}],attrs:{id:"criticalFontAssignByMultipleSelectorsString"}},[e._v("font assign by "),n("strong",[e._v("multiple")]),e._v(" "),n("b",[e._v("selectors (String)")])])]),e._v(" "),n("li",[n("span",{directives:[{name:"font",rawName:"v-font",value:[e.$fonts.getFont("Comic Neue",400,"italic").addSelector(["i","em"]).isCritical()],expression:"[\n                $fonts.getFont('Comic Neue', 400, 'italic').addSelector(['i', 'em']).isCritical()\n              ]"}],attrs:{id:"criticalFontAssignByMultipleSelectorsArray"}},[e._v("font assign by "),n("i",[e._v("multiple")]),e._v(" "),n("em",[e._v("selectors (Array)")])])]),e._v(" "),n("hr"),e._v(" "),n("li",[n("span",{directives:[{name:"font",rawName:"v-font",value:[e.$fonts.getFont("Comic Neue",700,"italic").addSelector("strong > i").isCritical()],expression:"[\n                $fonts.getFont('Comic Neue', 700, 'italic').addSelector('strong > i').isCritical()\n              ]"}],attrs:{id:"criticalFontAssignByDeepSelector"}},[e._v("font assign by "),n("strong",[n("i",[e._v("deep")])]),e._v(" selector")])])])])]],2),e._v(" "),n("organism-preview-container",{scopedSlots:e._u([{key:"title",fn:function(){return[n("p",[e._v("Lazy - v-font")])]},proxy:!0}])},[[n("div",[n("ul",[n("li",{directives:[{name:"font",rawName:"v-font",value:e.$fonts.getFont("Montserrat Alternates",400,"normal"),expression:"$fonts.getFont('Montserrat Alternates', 400, 'normal')"}],attrs:{id:"lazyFontAssignSimple"}},[e._v("\n            Basic font assign\n          ")]),e._v(" "),n("hr"),e._v(" "),n("li",{directives:[{name:"font",rawName:"v-font",value:e.$fonts.getFont("Montserrat Alternates",700,"normal").addSelector("strong"),expression:"$fonts.getFont('Montserrat Alternates', 700, 'normal').addSelector('strong')"}],attrs:{id:"lazyFontAssignBySingleSelector"}},[e._v("\n            font assign by "),n("strong",[e._v("single selector")])]),e._v(" "),n("li",[n("span",{directives:[{name:"font",rawName:"v-font",value:[e.$fonts.getFont("Montserrat Alternates",700,"normal").addSelector("strong"),e.$fonts.getFont("Montserrat Alternates",700,"italic").addSelector("i")],expression:"[\n                $fonts.getFont('Montserrat Alternates', 700, 'normal').addSelector('strong'),\n                $fonts.getFont('Montserrat Alternates', 700, 'italic').addSelector('i')\n              ]"}],attrs:{id:"lazyFontAssignByMultipleVariances"}},[e._v("font assign by "),n("strong",[e._v("multiple")]),e._v(" "),n("i",[e._v("variances")])])]),e._v(" "),n("hr"),e._v(" "),n("li",[n("span",{directives:[{name:"font",rawName:"v-font",value:[e.$fonts.getFont("Montserrat Alternates",700,"normal").addSelector("strong, b")],expression:"[\n                $fonts.getFont('Montserrat Alternates', 700, 'normal').addSelector('strong, b')\n              ]"}],attrs:{id:"lazyFontAssignByMultipleSelectorsString"}},[e._v("font assign by "),n("strong",[e._v("multiple")]),e._v(" "),n("b",[e._v("selectors (String)")])])]),e._v(" "),n("li",[n("span",{directives:[{name:"font",rawName:"v-font",value:[e.$fonts.getFont("Montserrat Alternates",400,"italic").addSelector(["i","em"])],expression:"[\n                $fonts.getFont('Montserrat Alternates', 400, 'italic').addSelector(['i', 'em'])\n              ]"}],attrs:{id:"lazyFontAssignByMultipleSelectorsArray"}},[e._v("font assign by "),n("i",[e._v("multiple")]),e._v(" "),n("em",[e._v("selectors (Array)")])])]),e._v(" "),n("hr"),e._v(" "),n("li",[n("span",{directives:[{name:"font",rawName:"v-font",value:[e.$fonts.getFont("Montserrat Alternates",700,"italic").addSelector("strong > i")],expression:"[\n                $fonts.getFont('Montserrat Alternates', 700, 'italic').addSelector('strong > i')\n              ]"}],attrs:{id:"lazyFontAssignByDeepSelector"}},[e._v("font assign by "),n("strong",[n("i",[e._v("deep")]),e._v(" selector")])])])])])]],2)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{OrganismPreviewContainer:n(56).default})},55:function(e,t,n){var content=n(58);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("7cd8545d",content,!0,{sourceMap:!1})},56:function(e,t,n){"use strict";n.r(t);var r={},o=(n(57),n(2)),component=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"preview-container"},[t("div",{staticClass:"preview-container__preview"},[this._t("default")],2),this._v(" "),t("div",{staticClass:"preview-container__info"},[this._t("title",[t("p",[this._v("Preview Info")])])],2)])}),[],!1,null,"633167c2",null);t.default=component.exports},57:function(e,t,n){"use strict";var r=n(55);n.n(r).a},58:function(e,t,n){(t=n(8)(!1)).push([e.i,".preview-container[data-v-633167c2]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:50px 0}.preview-container[data-v-633167c2]:first-child{margin-top:0}.preview-container[data-v-633167c2]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-633167c2]{flex-direction:row}}@media (min-width:992px){.preview-container[data-v-633167c2]{flex-direction:row}}.preview-container>div[data-v-633167c2]{display:flex;align-items:center;justify-content:center;width:100vw;height:50vh}@media (orientation:landscape){.preview-container>div[data-v-633167c2]{width:50vw;height:100vh}}@media (min-width:992px){.preview-container>div[data-v-633167c2]{width:50vw;height:100vh}}.preview-container .preview-container__info[data-v-633167c2]{font-size:2em}.preview-container .preview-container__info p[data-v-633167c2]{line-height:1.375;text-align:center}.preview-container .preview-container__preview[data-v-633167c2]{font-size:1.125em;--bg-opacity:1;background-color:#edf2f7;background-color:rgba(237,242,247,var(--bg-opacity))}@media (prefers-color-scheme:dark){.preview-container .preview-container__preview[data-v-633167c2]{background-color:#2d3748;background-color:rgba(45,55,72,var(--bg-opacity))}}.preview-container .preview-container__preview>article[data-v-633167c2],.preview-container .preview-container__preview>div[data-v-633167c2]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.preview-container .preview-container__preview>div>ul[data-v-633167c2]{padding:0;margin:0;list-style:none}.preview-container .preview-container__preview>div>ul li[data-v-633167c2]{margin:.625em 0}.preview-container .preview-container__preview>iframe[data-v-633167c2]{position:relative;width:100%;height:100%}",""]),e.exports=t}}]);