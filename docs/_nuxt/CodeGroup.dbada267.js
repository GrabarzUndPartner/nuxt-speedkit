import o from"./TabsHeader.d7fb35e7.js";import{a as b,V as c,x as u}from"./entry.47059eb0.js";const v=(n,i)=>n.type&&n.type.tag&&n.type.tag===i,x=b({data(){return{activeTabIndex:0,counter:0}},render(){var d,p;const n=((p=(d=this.$slots)==null?void 0:d.default)==null?void 0:p.call(d))||[],i=n.map((e,r)=>{var a,t,s;return{label:((a=e==null?void 0:e.props)==null?void 0:a.filename)||((t=e==null?void 0:e.props)==null?void 0:t.label)||`${r}`,active:((s=e==null?void 0:e.props)==null?void 0:s.active)||!1,component:e}});return c("div",{class:{"code-group":!0,"first-tab":this.activeTabIndex===0}},[c(o,{ref:"tabs-header",activeTabIndex:this.activeTabIndex,tabs:i,"onUpdate:activeTabIndex":e=>this.activeTabIndex=e}),c("div",{class:"code-group-content",text:this.activeTabIndex},n.map((e,r)=>{var a,t;return c("div",{style:{display:r===this.activeTabIndex?"block":"none"},class:{"":!v(e,"code")}},[v(e,"code")?e:c("div",{class:{"preview-canvas":!0}},[((t=(a=e.children)==null?void 0:a.default)==null?void 0:t.call(a))||e.children])])}))])}}),h=u(x,[["__scopeId","data-v-3d961ac0"]]);export{h as default};
