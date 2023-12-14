import{_ as s,o as a,c as i,k as t,a as n,t as o,R as r}from"./chunks/framework.DAPI8gNX.js";const y=JSON.parse('{"title":"Migrate from v2 to v3","description":"","frontmatter":{"title":"Migrate from v2 to v3"},"headers":[],"relativePath":"migration/v3.md","filePath":"migration/v3.md"}'),h={name:"migration/v3.md"},d={id:"frontmatter-title",tabindex:"-1"},l=t("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),p=r(`<p>With <code>v3</code> the documentation was changed. You can find the previous version <a href="https://nuxt-speedkit.grabarzundpartner.dev/" target="_blank" rel="noreferrer">here</a>.</p><h2 id="deprecations" tabindex="-1">Deprecations <a class="header-anchor" href="#deprecations" aria-label="Permalink to &quot;Deprecations&quot;">​</a></h2><h3 id="components" tabindex="-1">Components <a class="header-anchor" href="#components" aria-label="Permalink to &quot;Components&quot;">​</a></h3><table><thead><tr><th>Component</th><th></th></tr></thead><tbody><tr><td><code>abstracts/ComponentObserver</code></td><td>replaced with composable <a href="/composables/useComponentObserver.html"><code>useComponentObserver</code></a></td></tr><tr><td><code>abstracts/AbstractOnlySsr</code></td><td>removed</td></tr></tbody></table><h3 id="options" tabindex="-1">options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;options&quot;">​</a></h3><table><thead><tr><th>Option</th><th></th></tr></thead><tbody><tr><td><code>loader</code></td><td>removed</td></tr><tr><td><code>componentAutoImport</code></td><td>removed</td></tr><tr><td><code>componentPrefix</code></td><td>removed</td></tr></tbody></table><h2 id="components-1" tabindex="-1">Components <a class="header-anchor" href="#components-1" aria-label="Permalink to &quot;Components&quot;">​</a></h2><h3 id="speedkitpicture-speedkitimage" tabindex="-1"><code>SpeedkitPicture</code> &amp; <code>SpeedkitImage</code> <a class="header-anchor" href="#speedkitpicture-speedkitimage" aria-label="Permalink to &quot;\`SpeedkitPicture\` &amp; \`SpeedkitImage\`&quot;">​</a></h3><p>Die Eigenschaft <code>loader</code> wurde entfernt.</p><h2 id="directives" tabindex="-1">Directives <a class="header-anchor" href="#directives" aria-label="Permalink to &quot;Directives&quot;">​</a></h2><h3 id="v-font" tabindex="-1"><code>v-font</code> <a class="header-anchor" href="#v-font" aria-label="Permalink to &quot;\`v-font\`&quot;">​</a></h3><p>Wenn die Directive <code>v-font</code> verwendet wird, muss das Composable <code>useFont</code> verwendet werden, um die Funktion <code>$getFont</code> im template bereitzustellen.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-font</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$getFont(…)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">span</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> useFonts </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#speedkit/composables/fonts&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$getFont</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useFonts</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,13);function k(e,c,E,m,g,u){return a(),i("div",null,[t("h1",d,[n(o(e.$frontmatter.title)+" ",1),l]),p])}const v=s(h,[["render",k]]);export{y as __pageData,v as default};
