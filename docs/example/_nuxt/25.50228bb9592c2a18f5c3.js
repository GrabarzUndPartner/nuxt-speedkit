(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{193:function(t,e,r){var content=r(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(180).default)("5dc605c6",content,!0,{sourceMap:!1})},230:function(t,e,r){"use strict";r(193)},231:function(t,e,r){var n=r(179)((function(i){return i[1]}));n.push([t.i,"button[data-v-7154b60e]{padding:0;margin:0;overflow:visible;font:inherit;line-height:normal;color:inherit;background:transparent;border:none;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;}button[data-v-7154b60e]::-moz-focus-inner{padding:0;border:0}",""]),n.locals={},t.exports=n},233:function(t,e,r){"use strict";var n={},o=(r(230),r(178)),component=Object(o.a)(n,(function(){var t=this;return(0,t._self._c)("button",t._g(t._b({},"button",t.$attrs,!1),t.$listeners),[t._t("default")],2)}),[],!1,null,"7154b60e",null);e.a=component.exports},250:function(t,e,r){"use strict";(function(t){r.d(e,"a",(function(){return o})),r.d(e,"b",(function(){return l}));var n=new(r(237).a);t.onYouTubeIframeAPIReady=function(e){n.resolve(t.YT)};var o=function(){return{hid:"youtube",src:"https://www.youtube.com/iframe_api",async:!0,defer:!0}},l=function(){return n.promise}}).call(this,r(26))},251:function(t,e,r){var content=r(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(180).default)("f72aca8e",content,!0,{sourceMap:!1})},252:function(t,e,r){var content=r(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(180).default)("2901928f",content,!0,{sourceMap:!1})},303:function(t,e,r){"use strict";r(251)},304:function(t,e,r){var n=r(179)((function(i){return i[1]}));n.push([t.i,"\ndiv[data-v-438322ee]{position:relative;width:100%;padding:0;margin:0}button[data-v-438322ee]{display:block;width:100%;cursor:pointer;}.ready button[data-v-438322ee]{pointer-events:none;visibility:hidden;}.click-overlay[data-v-438322ee],.player[data-v-438322ee]{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto}.player[data-v-438322ee]{display:flex;justify-content:center;background:#000;}.player>div[data-v-438322ee]{position:relative;width:-webkit-min-content;width:-moz-min-content;width:min-content}.player img[data-v-438322ee],.player svg[data-v-438322ee]{display:block;width:auto}",""]),n.locals={},t.exports=n},305:function(t,e,r){"use strict";r(252)},306:function(t,e,r){var n=r(179)((function(i){return i[1]}));n.push([t.i,"\n.loading-spinner[data-v-7ae747b9]{position:absolute;top:0;right:0;bottom:0;left:0;width:64px;margin:auto;}.loading-spinner circle[data-v-7ae747b9]{stroke-dasharray:5,177;stroke-width:6px;-webkit-animation:stroke-7ae747b9 1.3333s ease infinite;animation:stroke-7ae747b9 1.3333s ease infinite}[data-v-7ae747b9] button{--color-background:#212121;--color-foreground:#fff;--transition-duration:0.1s;}[data-v-7ae747b9] button:focus,[data-v-7ae747b9] button:hover{--color-background:red;--color-foreground:#fff;--transition-duration:0.2s}.play[data-v-7ae747b9]{position:absolute;top:0;right:0;bottom:0;left:0;width:68px;margin:auto;pointer-events:none;}.play path[data-v-7ae747b9]{transition:fill var(--transition-duration) cubic-bezier(.4,0,1,1),fill-opacity var(--transition-duration) cubic-bezier(.4,0,1,1);}.play path[data-v-7ae747b9]:first-child{fill:var(--color-background);fill-opacity:.8}.play path[data-v-7ae747b9]:last-child{fill:var(--color-foreground)}@-webkit-keyframes stroke-7ae747b9{50%{stroke-dasharray:137,45;stroke-dashoffset:0}to{stroke-dashoffset:-182}}@keyframes stroke-7ae747b9{50%{stroke-dasharray:137,45;stroke-dashoffset:0}to{stroke-dashoffset:-182}}@-webkit-keyframes hue-7ae747b9{to{filter:hue-rotate(1turn)}}@keyframes hue-7ae747b9{to{filter:hue-rotate(1turn)}}",""]),n.locals={},t.exports=n},309:function(t,e,r){"use strict";var n=r(71),o=(r(117),r(70),r(69),r(113),r(114),r(279),r(240),r(115),r(196),r(191),r(184),r(200),r(216)),l=r(217),c=r(75),d=r(233),f=r(250),h=r(218),y=(r(202),r(203),r(204),r(205),r(206),r(207),r(208),r(209),r(210),r(211),r(212),r(213),r(214),r(215),r(119),r(188),r(118),function(){function t(){this.api=void 0,this.players=new Map}var e=t.prototype;return e.play=function(t){return this.pausePlayers(),t.playVideo()},e.pausePlayers=function(t){var e=this;Array.from(this.players.values()).filter((function(e){return!t||t&&e!==t})).filter((function(t){return t.getPlayerState})).forEach((function(t){t.getPlayerState()===e.api.PlayerState.PLAYING&&t.pauseVideo()}))},e.createPlayer=function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(){var e,r,n,o,l=this,c=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(f.b)();case 2:for(this.api=t.sent,e=c.length,r=new Array(e),n=0;n<e;n++)r[n]=c[n];return(o=Object(h.a)(this.api.Player,r)).addEventListener("onStateChange",(function(t){var data=t.data;l.api.PlayerState.PLAYING===data&&l.pausePlayers(o)})),this.add(o),t.abrupt("return",o);case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}(),e.add=function(t){this.players.set(t.id,t)},e.remove=function(t){this.players.delete(t.id),t.destroy()},t}()),v=new y,m={components:{SpeedkitPicture:l.a,DefaultButton:d.a},inheritAttrs:!1,props:{autoplay:{type:Boolean,default:!1},mute:{type:Boolean,default:void 0},url:{type:String,required:!0},title:{type:String,required:!0},host:{type:String,default:"https://www.youtube-nocookie.com"},options:{type:Object,default:function(){return{}}},posterLoadingSpinner:{type:o.a,default:void 0},posterSizes:{type:Object,default:function(){return{default:"100vw",xxs:"100vw",xs:"100vw",sm:"100vw",md:"100vw",lg:"100vw",xl:"100vw",xxl:"100vw"}}}},data:function(){return{src:null,videoId:new URL(this.url).searchParams.get("v"),script:[],player:null,ready:!1,loading:!1,playing:!1,landscape:!1,isTouchDevice:Object(c.b)()}},head:function(){return{script:this.script}},computed:{pictureDataset:function(){return{formats:this.$speedkit.targetFormats,title:this.title,sources:[{src:"/youtube/vi/"+this.videoId+"/maxresdefault.jpg",sizes:this.posterSizes,media:"all"}],loadingSpinner:this.posterLoadingSpinner}}},mounted:function(){this.autoplay&&this.onInit()},destroyed:function(){this.player&&v.remove(this.player)},methods:{reset:function(){this.src=null,this.ready=!1,this.playing=!1},onInit:function(){this.loading=!0;var t=Object.assign({rel:0,enablejsapi:1,autoplay:0,modestbranding:1,showinfo:0,iv_load_policy:3},this.options,{playsinline:1,mute:Number(this.isTouchDevice)||Number(this.mute)});this.src=this.host+"/embed/"+this.videoId+"?"+Object.entries(t).map((function(t){return t[0]+"="+t[1]})).join("&"),this.script=[Object(f.a)()]},onLoad:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.createPlayer(t.$refs.player,{videoId:t.videoId,host:t.host,events:{onReady:function(e){e.target.mute(),v.play(e.target),t.loading=!1,t.ready=!0,t.$emit("ready",{iframe:e.target.getIframe(),player:t.player})},onStateChange:function(e){return t.onPlayerStateChange(v.api,e.data)}}});case 2:t.player=e.sent;case 3:case"end":return e.stop()}}),e)})))()},onPlayerStateChange:function(t,e){e===t.PlayerState.PLAYING?this.playing=!0:e!==t.PlayerState.ENDED&&e!==t.PlayerState.PAUSED||(this.playing=!1),this.$emit("playing",this.playing)}}},w=(r(303),r(178)),k={components:{BaseYoutube:Object(w.a)(m,(function(){var t=this,e=t._self._c;return e("div",{class:{ready:t.ready,playing:t.playing},attrs:{show:t.ready}},[t.src?e("iframe",{ref:"player",staticClass:"player",attrs:{title:t.title,src:t.src,frameborder:"0",allow:"accelerometer; fullscreen; clipboard-write; encrypted-media; gyroscope; picture-in-picture"},on:{load:t.onLoad}}):t._e(),t._v(" "),e("default-button",{on:{click:t.onInit}},[e("speedkit-picture",t._b({staticClass:"poster",attrs:{title:t.title}},"speedkit-picture",t.pictureDataset,!1)),t._v(" "),t.loading?t._t("loading-spinner"):t._e(),t._v(" "),t.ready||t.loading?t._e():t._t("play")],2)],1)}),[],!1,null,"438322ee",null).exports},inheritAttrs:!1},_=(r(305),Object(w.a)(k,(function(){var t=this,e=t._self._c;return e("base-youtube",t._g(t._b({staticClass:"nuxt-speedkit-youtube",scopedSlots:t._u([{key:"loading-spinner",fn:function(){return[t._t("loading-spinner",(function(){return[e("svg",{staticClass:"loader loading-spinner",attrs:{viewBox:"0 0 64 64",version:"1.1",xmlns:"http://www.w3.org/2000/svg"}},[e("circle",{attrs:{cx:"32",cy:"32",r:"29",fill:"transparent",stroke:"#ddd","stroke-width":"2"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 32 32",to:"360 32 32",begin:"0s",dur:"1.555s",repeatCount:"indefinite"}})],1)])]}))]},proxy:!0},{key:"play",fn:function(){return[t._t("play",(function(){return[e("svg",{staticClass:"play",attrs:{version:"1.1",viewBox:"0 0 68 48"}},[e("path",{attrs:{d:"M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z",fill:"#f00"}}),t._v(" "),e("path",{attrs:{d:"M 45,24 27,14 27,34",fill:"#fff"}})])]}))]},proxy:!0}],null,!0)},"base-youtube",t.$attrs,!1),t.$listeners))}),[],!1,null,"7ae747b9",null));e.a=_.exports},376:function(t,e,r){var content=r(519);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(180).default)("314909dd",content,!0,{sourceMap:!1})},518:function(t,e,r){"use strict";r(376)},519:function(t,e,r){var n=r(179)((function(i){return i[1]}));n.push([t.i,".video-youtube[data-v-3ce58774]{padding:0 10%}",""]),n.locals={},t.exports=n},558:function(t,e,r){"use strict";r.r(e);var n={components:{SpeedkitYoutube:r(309).a},inheritAttrs:!1,props:{text:{type:String,default:null}}},o=(r(518),r(178)),component=Object(o.a)(n,(function(){var t=this,e=t._self._c;return e("document-section",{directives:[{name:"font",rawName:"v-font",value:[t.$getFont("Merriweather",400)],expression:"[\n    $getFont('Merriweather', 400),\n  ]"}],staticClass:"video-youtube"},[e("speedkit-youtube",t._b({},"speedkit-youtube",t.$attrs,!1)),t._v(" "),t.text?e("p",{domProps:{innerHTML:t._s(t.text)}}):t._e()],1)}),[],!1,null,"3ce58774",null);e.default=component.exports}}]);