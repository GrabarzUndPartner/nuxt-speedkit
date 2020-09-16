(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{272:function(t,e,r){"use strict";(function(t){r(24),r(34),r(120),r(33);var n=r(6),o=r(321);e.a={props:{url:{type:String,default:function(){return null}},statsMetric:{type:String,default:function(){return"performance"}}},data:function(){return{stats:Object(o.b)()}},computed:{style:function(){return{"--color-status":this.color,"--radian":45*this.radian,"--duration":1e3/(2*Math.PI)*this.radian+"ms"}},stateClasses:function(){return{pending:this.stats.isPending(),fail:this.stats.isFailed(),ready:this.stats.isReady()}},title:function(){return("\n        Performance: "+100*this.stats.getScoreOfMetric("performance")+"\n        SEO: "+100*this.stats.getScoreOfMetric("seo")+"\n        Accessibility: "+100*this.stats.getScoreOfMetric("accessibility")+"\n        Best Practices: "+100*this.stats.getScoreOfMetric("best-practices")+"\n      ").trim().replace(/( )+/g,"$1")},score:function(){return this.stats.getScoreOfMetric(this.statsMetric)},radian:function(){return 2*Math.PI*(1-this.score)},color:function(){return this.stats.getStateColorByMetric(this.statsMetric)},reportUrl:function(){return"https://lighthouse-dot-webdotdevsite.appspot.com/lh/html?url="+t.encodeURI(this.url)}},watch:{$route:function(t,e){this.$route.query.lh&&this.getMetrics()}},mounted:function(){this.getMetrics()},methods:{getMetrics:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e.stats=Object(o.b)(),r.prev=1,r.next=4,Object(o.a)(e.url||t.location.href);case 4:e.stats=r.sent,r.next=10;break;case 7:r.prev=7,r.t0=r.catch(1),e.stats=r.t0;case 10:case"end":return r.stop()}}),r,null,[[1,7]])})))()}}}}).call(this,r(23))},273:function(t,e,r){var content=r(309);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(55).default)("6f6e8f02",content,!0,{sourceMap:!1})},308:function(t,e,r){"use strict";var n=r(273);r.n(n).a},309:function(t,e,r){(e=r(54)(!1)).push([t.i,".lighthouse[data-v-2157d25e]{--pi:3.14159265358979;--score:0;position:fixed;top:0;right:0;z-index:1;display:block;width:60px;font-family:Arial,Helvetica,sans-serif;text-align:center;pointer-events:none;background-color:#fff}.lighthouse.ready[data-v-2157d25e]{pointer-events:all}.lighthouse>svg[data-v-2157d25e]{display:block;width:50px;height:50px;margin:5px}.lighthouse>svg circle[data-v-2157d25e]{fill:transparent;stroke:var(--color-status);stroke-width:10;transform:rotate(-90deg);transform-origin:50%}.lighthouse>svg circle.pending[data-v-2157d25e]{stroke-dasharray:calc(1.35*var(--pi)*45);stroke-dashoffset:calc(2*var(--pi)*45);-webkit-animation:rotating-data-v-2157d25e 1s linear infinite;animation:rotating-data-v-2157d25e 1s linear infinite}.lighthouse>svg circle.ready[data-v-2157d25e]{fill:var(--color-status);fill-opacity:.1;stroke-dasharray:calc(2*var(--pi)*45);stroke-dashoffset:calc(2*var(--pi)*45);-webkit-animation:stroke-data-v-2157d25e var(--duration) ease-out forwards;animation:stroke-data-v-2157d25e var(--duration) ease-out forwards}.lighthouse>svg line[data-v-2157d25e]{stroke:var(--color-status);stroke-width:10}.lighthouse>svg text[data-v-2157d25e]{font-size:32px;fill:var(--color-status)}.lighthouse span[data-v-2157d25e]{font-size:12px;text-decoration:underline}.lighthouse span svg[data-v-2157d25e]{display:inline;width:12px;height:12px;margin-left:3px}@-webkit-keyframes stroke-data-v-2157d25e{to{stroke-dashoffset:var(--radian)}}@keyframes stroke-data-v-2157d25e{to{stroke-dashoffset:var(--radian)}}@-webkit-keyframes rotating-data-v-2157d25e{to{transform:rotate(270deg)}}@keyframes rotating-data-v-2157d25e{to{transform:rotate(270deg)}}",""]),t.exports=e},321:function(t,e,r){"use strict";r.d(e,"a",(function(){return m})),r.d(e,"b",(function(){return w}));r(9),r(33);var n,o=r(6),c=(r(57),r(61),r(62),Symbol("ready")),l=Symbol("fail"),d=Symbol("pending"),h=((n={})[c]={pass:"#0CCE6B",average:"#FFA400",fail:"#FF4E42"},n[l]="#FF4E42",n[d]="#BDBDBD",n),f=function(){function t(t,data){this.state=t,this.data=data||{lhrSlim:[]}}var e=t.prototype;return e.isPending=function(){return this.state===d},e.isFailed=function(){return this.state===l},e.isReady=function(){return this.state===c},e.getScoreOfMetric=function(t){return(this.data.lhrSlim.find((function(e){return e.id===t}))||{score:-1}).score},e.getStateColorByMetric=function(t){switch(this.state){case c:return(e=this.getScoreOfMetric(t))>=.9?h[c].pass:e>=.5?h[c].average:h[c].fail;case l:return h[l];default:return h[d]}var e},t}();var v=function(t){var e,r;function n(){return t.apply(this,arguments)||this}return r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r,n}(f),y=null;function m(t){return fetch("https://lighthouse-dot-webdotdevsite.appspot.com/lh/newaudit",{method:"POST",mode:"cors",cache:"no-cache",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer",body:JSON.stringify({replace:!0,save:!0,url:t}),signal:k()}).then(x).catch((function(t){if(t.state)return t;throw w()}))}function w(){return new v(d)}function k(){return y&&y.abort(),(y=new AbortController).signal}function x(t){return M.apply(this,arguments)}function M(){return(M=Object(o.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.ok){t.next=2;break}throw new v(l);case 2:return t.t0=f,t.t1=c,t.next=6,e.json();case 6:return t.t2=t.sent,t.abrupt("return",new t.t0(t.t1,t.t2));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},356:function(t,e,r){"use strict";r.r(e);var n=r(272).a,o=(r(308),r(16)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"lighthouse",class:{ready:t.stats.isReady()},style:t.style,attrs:{href:t.reportUrl,target:"_blank",title:t.title}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",version:"1.1",viewBox:"0 0 100 100"}},[r("circle",{class:t.stateClasses,attrs:{cx:"50",cy:"50",r:"45"}}),t._v(" "),t.stats.isFailed()?r("line",{attrs:{x1:"18",y1:"18",x2:"82",y2:"82"}}):t._e(),t._v(" "),t.stats.isReady()?r("text",{attrs:{x:"50",y:"50","text-anchor":"middle","alignment-baseline":"central"}},[t._v("\n      "+t._s(Math.round(100*t.score))+"\n    ")]):t._e()]),t._v(" "),t.stats.isReady()?r("span",[t._v("\n    Report"),r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}})])]):t._e()])}),[],!1,null,"2157d25e",null);e.default=component.exports}}]);