import{_ as r,c as a,m as e,a as o,t as i,V as n,o as s,a3 as l}from"./chunks/framework.FSyrRipt.js";const x=JSON.parse('{"title":"Introduction","description":"","frontmatter":{"outline":"deep","title":"Introduction"},"headers":[],"relativePath":"v1/index.md","filePath":"v1/index.md"}'),d={name:"v1/index.md"},c={id:"frontmatter-title",tabindex:"-1"},u=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),h=n('<img src="'+l+'" width="1280" height="640" alt=""><p><a href="https://www.npmjs.com/package/nuxt-speedkit" target="_blank" rel="noreferrer">Module</a> for <a href="https://nuxtjs.org" target="_blank" rel="noreferrer">NuxtJS</a>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>You are reading Nuxt Speedkit v1 docs. <a href="/">For Nuxt 3 go to the v3 docs</a></p></div><p>Nuxt Speedkit takes over the lighthouse performance optimization of your generated website.</p><p>In order to achieve a performance score of 100/100, only the resources that are necessary in the current viewport may be loaded. Concepts already exist for the loading of javascript components and images. However, there is not yet a practicable concept for loading fonts dynamically. This module provides a holistic approach to load all necessary resources on demand, including fonts, based on the current viewport.</p><p>This module implements the lazy-hydration concept of <a href="https://github.com/maoberlehner/vue-lazy-hydration" target="_blank" rel="noreferrer">Markus Oberlehner</a> and embeds a <a href="https://github.com/StephanGerbeth/image" target="_blank" rel="noreferrer">modified version</a> of <a href="https://github.com/nuxt/image" target="_blank" rel="noreferrer">nuxt/image</a>.</p><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h2><ul><li>NodeJS <code>&gt;= 12.x.x</code></li><li>NuxtJS <code>&gt;= 2.15.0</code></li></ul><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><ul><li>dynamic loading of viewport based page resources like fonts (subselectors, media queries), components, pictures</li><li>optional loading prevention of resources at low bandwidth or weak hardware</li><li>prevents the loading of unnecessary resources (including components) that are outside the current viewport.</li><li>optional info layer concept to inform users about a reduced UX when bandwidth or hardware is compromised.</li></ul><h2 id="results" tabindex="-1">Results <a class="header-anchor" href="#results" aria-label="Permalink to &quot;Results&quot;">​</a></h2><ul><li>delivery of the minimum required resources based on the current viewport</li><li>if you use the tools as specified you will get a lighthouse performance score of 100/100</li></ul>',12);function p(t,m,f,g,_,b){return s(),a("div",null,[e("h1",c,[o(i(t.$frontmatter.title)+" ",1),u]),h])}const k=r(d,[["render",p]]);export{x as __pageData,k as default};
