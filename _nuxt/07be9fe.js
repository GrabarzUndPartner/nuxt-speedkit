(window.webpackJsonp=window.webpackJsonp||[]).push([[30,32],{224:function(t,e,n){var content=n(234);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("4a8cdcb4",content,!0,{sourceMap:!1})},225:function(t,e,n){var content=n(236);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("4a2c1250",content,!0,{sourceMap:!1})},233:function(t,e,n){"use strict";var o=n(224);n.n(o).a},234:function(t,e,n){(e=n(54)(!1)).push([t.i,"",""]),t.exports=e},235:function(t,e,n){"use strict";var o=n(225);n.n(o).a},236:function(t,e,n){(e=n(54)(!1)).push([t.i,"",""]),t.exports=e},237:function(t,e,n){"use strict";n.r(e);n(227),n(9),n(113),n(22),n(29);var o=n(239),r=n(241),c=n(243),l={components:{CustomImage:n(242).a},props:{src:{type:String,default:function(){return null}},sources:{type:Array,default:function(){return null}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},width:{type:Number,default:function(){return null}},height:{type:Number,default:function(){return null}}},methods:{onLoad:function(t){this.$emit("load",t.target)}}},f=(n(233),n(16)),d=Object(f.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[t._l(t.sources,(function(source,e){return n("source",t._b({key:e},"source",source,!1))})),t._v(" "),n("custom-image",t._b({on:{load:t.onLoad}},"custom-image",{src:t.src,width:t.width,height:t.height,alt:t.alt,title:t.title},!1))],2)}),[],!1,null,"149d885e",null).exports,h=new Set,m={components:{ImageContainer:r.a,CustomNoScript:c.a,CustomPicture:d},props:{sources:{type:Array,default:function(){return[]}},placeholder:{type:String,default:function(){return null}},alt:{type:String,default:function(){return""}},title:{type:String,default:function(){return""}},width:{type:Number,default:function(){return null}},height:{type:Number,default:function(){return null}}},data:function(){return{init:!1,loading:!1}},computed:{pictureSources:function(){return this.init?(h.add(JSON.stringify(this.sources)),this.sources):null},hasSlot:function(){return this.$slots.caption}},methods:{onRequestHiRes:function(){this.loading=!0,this.init=!0},onVisible:function(){this.loading=Object(o.a)()||h.has(JSON.stringify(this.sources)),this.init=Object(o.a)()||h.has(JSON.stringify(this.sources))},onLoad:function(){this.loading=!1,this.$emit("load")}}},y=(n(235),Object(f.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("image-container",{attrs:{loading:t.loading},on:{visible:t.onVisible,requestHiRes:t.onRequestHiRes},scopedSlots:t._u([{key:"caption",fn:function(){return[t._t("caption")]},proxy:!0}],null,!0)},[[n("custom-picture",t._b({on:{load:t.onLoad}},"custom-picture",{src:t.placeholder,sources:t.pictureSources,width:t.width,height:t.height,alt:t.alt,title:t.title},!1)),t._v(" "),t.init?t._e():n("custom-no-script",[n("custom-picture",t._b({},"custom-picture",{src:t.placeholder,sources:t.sources,width:t.width,height:t.height,alt:t.alt,title:t.title},!1))],1)]],2)}),[],!1,null,"4835165f",null));e.default=y.exports},276:function(t,e,n){var content=n(315);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(55).default)("6594d35b",content,!0,{sourceMap:!1})},314:function(t,e,n){"use strict";var o=n(276);n.n(o).a},315:function(t,e,n){(e=n(54)(!1)).push([t.i,".component-image-text>>>img{width:100%;height:100%;-o-object-fit:scale-down;object-fit:scale-down}@media (min-width:768px){.component-image-text{display:flex}.component-image-text>*{width:50%}}.component-image-text .text{padding:2%}",""]),t.exports=e},354:function(t,e,n){"use strict";n.r(e);var o={components:{LazyPicture:n(237).default},props:{picture:{type:Object,default:function(){return{}}},text:{type:String,default:function(){return"Headline"}}}},r=(n(314),n(16)),component=Object(r.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"component-image-text"},[e("lazy-picture",this._b({},"lazy-picture",this.picture,!1)),this._v(" "),e("div",{directives:[{name:"font",rawName:"v-font",value:[this.$fonts.getFont("Comic Neue",400,"normal"),this.$fonts.getFont("Montserrat Alternates",700,"normal").addSelector("h2")],expression:"[\n      $fonts.getFont('Comic Neue', 400, 'normal'),\n      $fonts.getFont('Montserrat Alternates', 700, 'normal').addSelector('h2')]"}],staticClass:"text",domProps:{innerHTML:this._s(this.text)}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);