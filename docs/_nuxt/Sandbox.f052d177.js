import v from"./TabsHeader.d7fb35e7.js";import{a as x,al as h,r as n,f as g,o as r,i as l,c as S,u as c,l as k,x as y}from"./entry.47059eb0.js";const $={class:"sandbox"},w=["src"],B={key:2},C=x({__name:"Sandbox",props:{src:{type:String,default:""},repo:{type:String,default:""},branch:{type:String,default:""},dir:{type:String,default:""},file:{type:String,default:"app.vue"}},setup(i){const e=i,p=h(),o={CodeSandBox:()=>`https://codesandbox.io/embed/github/${e.repo}/tree/${e.branch}/${e.dir}?hidenavigation=1&theme=${p.value}`,StackBlitz:()=>`https://stackblitz.com/github/${e.repo}/tree/${e.branch}/${e.dir}?embed=1&file=${e.file}&theme=${p.value}`},u=Object.keys(o).map(a=>({label:a})),d=n(-1),b=n(),s=n(""),t=n(""),f=a=>{t.value=a,s.value=e.src||o[t.value](),localStorage.setItem("docus_sandbox",a)},m=a=>{d.value=a,f(u[a].label)};return g(()=>{t.value=window.localStorage.getItem("docus_sandbox")||"CodeSandBox",s.value=e.src||o[t.value](),d.value=Object.keys(o).indexOf(t.value)}),(a,I)=>{const _=v;return r(),l("div",$,[i.src?k("",!0):(r(),S(_,{key:0,ref_key:"tabs",ref:b,"active-tab-index":c(d),tabs:c(u),"onUpdate:activeTabIndex":m},null,8,["active-tab-index","tabs"])),c(s)?(r(),l("iframe",{key:1,src:c(s),title:"Sandbox editor",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"},null,8,w)):(r(),l("span",B,"Loading Sandbox..."))])}}}),O=y(C,[["__scopeId","data-v-fecef2a9"]]);export{O as default};
