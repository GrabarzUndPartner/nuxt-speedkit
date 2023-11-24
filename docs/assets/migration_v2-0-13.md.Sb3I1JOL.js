import{_ as i,o as a,c as t,k as e,a as n,t as l,R as d}from"./chunks/framework.6mkheZcS.js";const v=JSON.parse('{"title":"Migrate from v2.0.x to v2.0.13","description":"","frontmatter":{"title":"Migrate from v2.0.x to v2.0.13"},"headers":[],"relativePath":"migration/v2-0-13.md","filePath":"migration/v2-0-13.md"}'),h={name:"migration/v2-0-13.md"},o={id:"frontmatter-title",tabindex:"-1"},p=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),r=d(`<p>With the change to version <code>2.0.13</code> there are the following changes:</p><h2 id="speedkitlayer" tabindex="-1">SpeedkitLayer <a class="header-anchor" href="#speedkitlayer" aria-label="Permalink to &quot;SpeedkitLayer&quot;">​</a></h2><h3 id="hardware-performance-check-removed" tabindex="-1">Hardware performance check removed <a class="header-anchor" href="#hardware-performance-check-removed" aria-label="Permalink to &quot;Hardware performance check removed&quot;">​</a></h3><p>The hardware check for showing the <code>SpeedkitLayer</code> has been removed.</p><p>The option <code>device</code> from module and the use of the message (<code>#nuxt-speedkit-message-outdated-device</code>) in the SpeedkitLayer, are no longer valid and must be removed.</p><p>Alternatively, it now waits for a free <code>idle</code> slot when initializing the JS,</p><ul><li>if a free slot is available, the JS is initialized</li><li>if no free slot is available, the message <code>#nuxt-speedkit-message-weak-hardware</code> is showed in the SpeedkitLayer.</li></ul><p>The old message <code>#nuxt-speedkit-message-outdated-device</code> must be replaced by the new <code>#nuxt-speedkit-message-weak-hardware</code>. (<a href="#messages">See Messages</a>)</p><h3 id="messages" tabindex="-1">Messages <a class="header-anchor" href="#messages" aria-label="Permalink to &quot;Messages&quot;">​</a></h3><ol><li><p><code>outdated-device</code> to <code>weak-hardware</code></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nuxt-speedkit-message-outdated-device&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  outdated device</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>replaced with</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nuxt-speedkit-message-weak-hardware&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  weak hardware</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></li><li><p><code>slow-connection</code> to <code>reduced-bandwidth</code></p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nuxt-speedkit-message-slow-connection&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  slow-connection</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><p>replaced with</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;nuxt-speedkit-message-reduced-bandwidth&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  reduced-bandwidth</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">li</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div></li></ol><h3 id="button-interactions" tabindex="-1">Button Interactions <a class="header-anchor" href="#button-interactions" aria-label="Permalink to &quot;Button Interactions&quot;">​</a></h3><p>Button <code>#nuxt-speedkit-button-init-font</code> has been replaced by <code>#nuxt-speedkit-button-init-reduced-view</code>.</p><p><code>#nuxt-speedkit-button-init-reduced-view</code> does the following when clicked:</p><ol><li>Sets the CSS class <code>nuxt-speedkit-reduced-view</code> on the <code>html</code> tag.</li><li>Activates all fonts by setting the class <code>font-active</code> on all elements with the attribute <code>data-font</code>.</li><li>Converts all not activated pictures (<code>:hydrate=&quot;false&quot;</code>) from <code>noscript</code> to <code>picture</code>.</li></ol><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The CSS class <code>nuxt-speedkit-reduced-view</code> is removed again at app initialization.</p></div>`,15);function c(s,k,E,g,u,m){return a(),t("div",null,[e("h1",o,[n(l(s.$frontmatter.title)+" ",1),p]),r])}const b=i(h,[["render",c]]);export{v as __pageData,b as default};
