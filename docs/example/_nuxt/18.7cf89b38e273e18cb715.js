(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{10:function(e,t,n){var content=n(13);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("0579fc98",content,!0,{sourceMap:!1})},11:function(e,t,n){"use strict";var r={},o=(n(12),n(7)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("document-section",{staticClass:"preview-container"},[t("div",{staticClass:"preview"},[t("div",[e._t("default")],2)]),e._v(" "),t("document-heading",{staticClass:"info"},[t("span",{directives:[{name:"font",rawName:"v-font",value:e.$getFont("Quicksand",400,"normal"),expression:"$getFont('Quicksand', 400, 'normal')"}]},[e._t("title",(function(){return[t("p",[e._v("Preview Info")])]}))],2)])],1)}),[],!1,null,"14ecf71b",null);t.a=component.exports},12:function(e,t,n){"use strict";n(10)},13:function(e,t,n){var r=n(8)((function(i){return i[1]}));r.push([e.i,".preview-container[data-v-14ecf71b]{display:flex;flex-direction:column;min-height:100vh;min-height:-webkit-fill-available;min-height:-moz-available;min-height:stretch;margin:calc(50 / 16 * 1em) 0;}.preview-container[data-v-14ecf71b]:first-child{margin-top:0}.preview-container[data-v-14ecf71b]:last-child{margin-bottom:0}@media (orientation:landscape){.preview-container[data-v-14ecf71b]{flex-direction:row;}}@media (min-width:992px){.preview-container[data-v-14ecf71b]{flex-direction:row;}}.preview-container>.info[data-v-14ecf71b],.preview-container>.preview[data-v-14ecf71b]{display:flex;align-items:center;justify-content:center;width:100%;height:50vh;margin:0;overflow:hidden;}@media (orientation:landscape){.preview-container>.info[data-v-14ecf71b],.preview-container>.preview[data-v-14ecf71b]{width:50vw;height:100vh;}}@media (min-width:992px){.preview-container>.info[data-v-14ecf71b],.preview-container>.preview[data-v-14ecf71b]{width:50vw;height:100vh;}}.preview-container .info[data-v-14ecf71b]{font-size:calc(32 / 16 * 1em);}.preview-container .info p[data-v-14ecf71b]{line-height:1.375;text-align:center}.preview-container .info button[data-v-14ecf71b]{width:90%;margin:0 auto}.preview-container .preview[data-v-14ecf71b]{font-size:calc(18 / 16 * 1em);--bg-opacity:1;background-color:rgba(0,0,0,.4);}@media (color-index: 48){.preview-container .preview[data-v-14ecf71b]{background-color:hsla(0,0%,100%,.4);}}@media (color: 48842621){.preview-container .preview[data-v-14ecf71b]{background-color:hsla(0,0%,100%,.4);}}@media (prefers-color-scheme:dark){.preview-container .preview[data-v-14ecf71b]{background-color:hsla(0,0%,100%,.4);}}.preview-container .preview[data-v-14ecf71b] img,.preview-container .preview img[data-v-14ecf71b]{width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.preview-container .preview[data-v-14ecf71b] picture{width:100%;height:100%}.preview-container .preview>article[data-v-14ecf71b]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;text-align:center}.preview-container .preview>div[data-v-14ecf71b]{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%;}.preview-container .preview>div[data-v-14ecf71b] .list{padding:0;margin:0;list-style:none;}.preview-container .preview>div[data-v-14ecf71b] .list>*{margin:calc(10 / 16 * 1em) 0}.preview-container .preview>div[data-v-14ecf71b] .test-iframe{position:relative;width:100%;height:100%}",""]),r.locals={},e.exports=r},16:function(e,t,n){var content=n(24);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("5dc605c6",content,!0,{sourceMap:!1})},23:function(e,t,n){"use strict";n(16)},24:function(e,t,n){var r=n(8)((function(i){return i[1]}));r.push([e.i,"button[data-v-7154b60e]{padding:0;margin:0;overflow:visible;font:inherit;line-height:normal;color:inherit;background:transparent;border:none;-webkit-font-smoothing:inherit;-moz-osx-font-smoothing:inherit;}button[data-v-7154b60e]::-moz-focus-inner{padding:0;border:0}",""]),r.locals={},e.exports=r},25:function(e,t,n){"use strict";var r={},o=(n(23),n(7)),component=Object(o.a)(r,(function(){var e=this;return(0,e._self._c)("button",e._g(e._b({},"button",e.$attrs,!1),e.$listeners),[e._t("default")],2)}),[],!1,null,"7154b60e",null);t.a=component.exports},282:function(e,t,n){"use strict";n.r(t);var r=n(62),o=n(11),l={components:{DefaultVimeo:r.a,OrganismPreviewContainer:o.a},props:{vimeoUrl:{type:String,default:"https://vimeo.com/440265549"},title:{type:String,default:"Vimeo"},autoplay:{type:Boolean,default:!1}},computed:{vimeo(){return{url:this.vimeoUrl,autoplay:this.autoplay}}}},c=n(7),component=Object(c.a)(l,(function(){var e=this,t=e._self._c;return t("organism-preview-container",{scopedSlots:e._u([{key:"default",fn:function(){return[t("div",[t("default-vimeo",e._b({},"default-vimeo",e.vimeo,!1))],1)]},proxy:!0},{key:"title",fn:function(){return[t("p",{domProps:{innerHTML:e._s(e.title)}})]},proxy:!0}])})}),[],!1,null,null,null);t.default=component.exports},31:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));const r=new(n(26).a),o=()=>({hid:"vimeo",src:"https://player.vimeo.com/api/player.js",async:!0,defer:!0,callback:()=>r.resolve(e.Vimeo)}),l=()=>r.promise}).call(this,n(0))},32:function(e,t,n){var content=n(54);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("5d6c6336",content,!0,{sourceMap:!1})},33:function(e,t,n){var content=n(56);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("148cd0bd",content,!0,{sourceMap:!1})},53:function(e,t,n){"use strict";n(32)},54:function(e,t,n){var r=n(8)((function(i){return i[1]}));r.push([e.i,"\n.player[data-v-0f9099e4]{position:relative;width:100%;padding:0;margin:0;}.player button[data-v-0f9099e4]{display:block;width:100%;cursor:pointer}.ready .player button[data-v-0f9099e4]{pointer-events:none;visibility:hidden}.player iframe[data-v-0f9099e4]{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;height:100%;margin:auto}.iframe-mode .player[data-v-0f9099e4]{aspect-ratio:16/9;}",""]),r.locals={},e.exports=r},55:function(e,t,n){"use strict";n(33)},56:function(e,t,n){var r=n(8)((function(i){return i[1]}));r.push([e.i,"\n.loading-spinner[data-v-d0a9b4d2],.play[data-v-d0a9b4d2]{position:absolute;top:0;right:0;bottom:0;left:0;display:flex;align-items:center;justify-content:center;background:rgba(0,0,0,.2)}.loading-spinner svg[data-v-d0a9b4d2]{display:block;width:64px}[data-v-d0a9b4d2] button{--color-background:rgba(30,30,30,0.7000000000000001);--color-foreground:#fff;--transition-duration:0.1s;}[data-v-d0a9b4d2] button:focus,[data-v-d0a9b4d2] button:hover{--color-background:rgba(30,30,30,0.9);--color-foreground:#00adef;--transition-duration:0.2s}.play span[data-v-d0a9b4d2]{position:absolute;top:50%;left:50%;display:flex;align-items:center;justify-content:center;width:6.5em;height:4em;color:var(--color-foreground);background:var(--color-background);border-radius:.5em;transition:opacity var(--transition-duration),background-color var(--transition-duration),color var(--transition-duration);transform:translate(-50%,-50%);}.play span svg[data-v-d0a9b4d2]{display:block;width:2em;height:2em;fill:currentColor}",""]),r.locals={},e.exports=r},62:function(e,t,n){"use strict";var r=n(17),o=n(19),l=n(18),c=n(2),d=n(25),v=n(31);const f=new class{constructor(){this.api=void 0,this.players=[]}play(e){return this.pausePlayers(e),e.play()}pausePlayers(e){return Promise.all(this.players.filter((t=>!e||e&&t!==e)).map((async function(e){!await e.getPaused()&&e.pause()})))}async createPlayer(...e){this.api=await Object(v.b)();const t=new this.api.Player(...e);return t.on("playing",(()=>this.pausePlayers(t))),this.add(t),t}add(e){this.players.push(e)}remove(e){this.players=this.players.filter((p=>p!==e)),e.destroy()}};var h={components:{SpeedkitPicture:o.a,DefaultButton:d.a},inheritAttrs:!1,props:{autoplay:{type:Boolean,default:!1},mute:{type:Boolean,default:void 0},url:{type:String,required:!0},title:{type:String,required:!1,default:null},options:{type:Object,default:()=>({})},posterLoadingSpinner:{type:l.a,default:void 0},posterSizes:{type:Object,default:()=>({default:"100vw",xxs:"100vw",xs:"100vw",sm:"100vw",md:"100vw",lg:"100vw",xl:"100vw",xxl:"100vw"})}},data(){return{inert:!1,videoData:null,src:null,videoId:new URL(this.url).pathname.replace("/",""),script:[],player:null,ready:!1,loading:!1,playing:!1,iframeMode:!1,isTouchDevice:Object(c.b)()}},fetchKey(){return`vimeo-${Object(r.a)(this.videoId)}`},async fetch(){const{withQuery:e}=await Promise.resolve().then(n.bind(null,21)),{get:t}=await n.e(16).then(n.t.bind(null,267,7));try{const n=e("https://vimeo.com/api/oembed.json",{url:this.url,width:1920,height:1080}),{data:data}=await t(n);this.videoData=data}catch(e){this.iframeMode=!0,this.src=this.playerSrc}},head(){return{script:this.script}},computed:{playerTitle(){return this.title||this.videoData&&this.videoData.title},pictureComponent(){return this.videoData?o.a:"picture"},poster(){var e;return this.videoData?{formats:this.$speedkit.targetFormats,title:this.playerTitle,sources:[{format:"jpg",src:this.videoData&&(null==(e=this.videoData.thumbnail_url)?void 0:e.replace("https://i.vimeocdn.com","vimeo")),sizes:this.posterSizes,media:"all"}],loadingSpinner:this.posterLoadingSpinner}:null},playerSrc(){const e=Object.assign({dnt:1,autopause:0},this.options,{playsinline:1,autoplay:Number(this.autoplay),muted:Number(this.isTouchDevice||this.mute||!1)});return`https://player.vimeo.com/video/${this.videoId}?`+Object.entries(e).map((([e,t])=>`${e}=${t}`)).join("&")}},watch:{ready(){this.inert=!1}},mounted(){this.inert=!0,this.autoplay&&this.onInit()},destroyed(){this.player&&f.remove(this.player)},methods:{onInit(){this.loading=!0,this.src=this.playerSrc,this.script=[Object(v.a)()],this.iframeMode&&(this.$refs.player.src=String(this.$refs.player.src))},onPlayerStateChange(e){e.playing?this.playing=!0:(e.ended||e.pause)&&(this.playing=!1),this.$emit("playing",this.playing)},async onLoad(e){e.target.src&&this.script.length&&(await Object(v.b)(),this.player=await f.createPlayer(this.$refs.player),this.player.on("playing",(()=>this.onPlayerStateChange({playing:!0}))),this.player.on("pause",(()=>this.onPlayerStateChange({pause:!0}))),this.player.on("ended",(()=>this.onPlayerStateChange({ended:!0}))),await this.player.ready(),f.play(this.player),this.loading=!1,this.ready=!0,this.$emit("ready",{iframe:this.player.element,player:this.player}))}}},y=(n(53),n(7)),m={components:{BaseVimeo:Object(y.a)(h,(function(){var e=this,t=e._self._c;return t("div",{class:{ready:e.ready,playing:e.playing,"iframe-mode":e.iframeMode}},[e._t("background",null,null,{playing:e.playing,videoData:e.videoData}),e._v(" "),t("div",{staticClass:"player"},[t("iframe",{key:e.src,ref:"player",attrs:{inert:e.inert,title:e.playerTitle,src:e.src,frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture"},on:{load:e.onLoad}}),e._v(" "),t("default-button",{attrs:{"aria-label":"Play Video"},on:{click:e.onInit}},[t(e.pictureComponent,e._b({tag:"component",staticClass:"poster"},"component",e.poster,!1)),e._v(" "),e.loading?e._t("loading-spinner"):e._e(),e._v(" "),e.ready||e.loading?e._e():e._t("play")],2)],1),e._v(" "),e._t("default",null,null,{playing:e.playing,videoData:e.videoData})],2)}),[],!1,null,"0f9099e4",null).exports},inheritAttrs:!1},w=(n(55),Object(y.a)(m,(function(){var e=this,t=e._self._c;return t("base-vimeo",e._g(e._b({staticClass:"nuxt-speedkit-vimeo",scopedSlots:e._u([{key:"loading-spinner",fn:function(){return[e._t("loading-spinner",(function(){return[t("div",{staticClass:"loading-spinner"},[t("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:"#fff"}},[t("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[t("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[t("circle",{attrs:{"stroke-opacity":".5",cx:"18",cy:"18",r:"18"}}),e._v(" "),t("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[t("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"}})],1)])])])])]}))]},proxy:!0},{key:"play",fn:function(){return[e._t("play",(function(){return[t("div",{staticClass:"play"},[t("span",[t("svg",{attrs:{viewBox:"0 0 20 20",preserveAspectRatio:"xMidYMid",focusable:"false"}},[t("polygon",{staticClass:"fill",attrs:{points:"1,0 20,10 1,20"}})])])])]}))]},proxy:!0},{key:"default",fn:function(t){return[e._t("default",null,null,t)]}}],null,!0)},"base-vimeo",e.$attrs,!1),e.$listeners))}),[],!1,null,"d0a9b4d2",null));t.a=w.exports}}]);