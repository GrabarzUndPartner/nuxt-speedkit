(window.webpackJsonp=window.webpackJsonp||[]).push([[31,32],{224:function(t,e,n){var content=n(234);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("4a8cdcb4",content,!0,{sourceMap:!1})},225:function(t,e,n){var content=n(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("4a2c1250",content,!0,{sourceMap:!1})},233:function(t,e,n){"use strict";var o=n(224);n.n(o).a},234:function(t,e,n){(e=n(54)(!1)).push([t.i,"",""]),t.exports=e},235:function(t,e,n){"use strict";var o=n(225);n.n(o).a},236:function(t,e,n){(e=n(54)(!1)).push([t.i,"",""]),t.exports=e},237:function(t,e,n){"use strict";n.r(e);n(227),n(9),n(113),n(22),n(29);var o=n(239),r=n(241),c=n(243),l={components:{CustomImage:n(242).a},props:{src:{type:String,default:function(){return null}},sources:{type:Array,default:function(){return null}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},width:{type:Number,default:function(){return null}},height:{type:Number,default:function(){return null}}},methods:{onLoad:function(t){this.$emit("load",t.target)}}},f=(n(233),n(16)),d=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[t._l(t.sources,(function(source,e){return n("source",t._b({key:e},"source",source,!1))})),t._v(" "),n("custom-image",t._b({on:{load:t.onLoad}},"custom-image",{src:t.src,width:t.width,height:t.height,alt:t.alt,title:t.title},!1))],2)}),[],!1,null,"149d885e",null).exports,h=new Set,m={components:{ImageContainer:r.a,CustomNoScript:c.a,CustomPicture:d},props:{sources:{type:Array,default:function(){return[]}},placeholder:{type:String,default:function(){return null}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},width:{type:Number,default:function(){return null}},height:{type:Number,default:function(){return null}}},data:function(){return{init:!1,loading:!1}},computed:{pictureSources:function(){return this.init?(h.add(JSON.stringify(this.sources)),this.sources):null},hasSlot:function(){return this.$slots.caption}},methods:{onRequestHiRes:function(){this.loading=!0,this.init=!0},onVisible:function(){this.loading=Object(o.a)()||h.has(JSON.stringify(this.sources)),this.init=Object(o.a)()||h.has(JSON.stringify(this.sources))},onLoad:function(){this.loading=!1,this.$emit("load")}}},y=(n(235),Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("image-container",{attrs:{loading:t.loading},on:{visible:t.onVisible,requestHiRes:t.onRequestHiRes},scopedSlots:t._u([{key:"caption",fn:function(){return[t._t("caption")]},proxy:!0}],null,!0)},[[n("custom-picture",t._b({on:{load:t.onLoad}},"custom-picture",{src:t.placeholder,sources:t.pictureSources,width:t.width,height:t.height,alt:t.alt,title:t.title},!1)),t._v(" "),t.init?t._e():n("custom-no-script",[n("custom-picture",t._b({},"custom-picture",{src:t.placeholder,sources:t.sources,width:t.width,height:t.height,alt:t.alt,title:t.title},!1))],1)]],2)}),[],!1,null,"4835165f",null));e.default=y.exports},274:function(t,e,n){var content=n(311);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("304792f2",content,!0,{sourceMap:!1})},310:function(t,e,n){"use strict";var o=n(274);n.n(o).a},311:function(t,e,n){(e=n(54)(!1)).push([t.i,'.component-stage{position:relative;height:100vh;max-height:100%;margin:0;overflow:hidden}.component-stage .claim{font-size:.6em;text-transform:none}.component-stage picture:before{display:block;padding-top:56.25%;content:""}.component-stage img{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.component-stage h1{position:absolute;top:50%;left:50%;padding:20px;color:#fff;background:rgba(0,0,0,.4);transform:translate(-50%,-50%)}',""]),t.exports=e},352:function(t,e,n){"use strict";n.r(e);var o={components:{LazyPicture:n(237).default},props:{picture:{type:Object,default:function(){return{}}},headline:{type:String,default:function(){return"Headline"}},claim:{type:String,default:function(){return"Claim"}}}},r=(n(310),n(16)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-stage"},[n("lazy-picture",t._b({},"lazy-picture",t.picture,!1)),t._v(" "),n("h1",{directives:[{name:"font",rawName:"v-font",value:[t.$fonts.getFont("Montserrat Alternates",700,"normal").addSelector("span").isCritical(),t.$fonts.getFont("Comic Neue",300,"italic").addSelector("span.claim").isCritical()],expression:"[\n      $fonts.getFont('Montserrat Alternates', 700, 'normal').addSelector('span').isCritical(),\n      $fonts.getFont('Comic Neue', 300, 'italic').addSelector('span.claim').isCritical()\n    ]"}]},[n("span",[t._v(t._s(t.headline))]),n("br"),t._v(" "),n("span",{staticClass:"claim"},[t._v(t._s(t.claim))])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);