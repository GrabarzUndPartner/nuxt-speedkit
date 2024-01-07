import{_ as s,c as t,m as e,a,t as n,U as o,o as l}from"./chunks/framework.C0u-Tt6Q.js";const f=JSON.parse('{"title":"Usage","description":"","frontmatter":{"title":"Usage"},"headers":[],"relativePath":"guide/usage.md","filePath":"guide/usage.md"}'),p={name:"guide/usage.md"},r={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),d=o(`<p>The following tools are provided to optimize your webpage:</p><h2 id="critical-prop-for-critical-components" tabindex="-1">Critical prop for critical components <a class="header-anchor" href="#critical-prop-for-critical-components" aria-label="Permalink to &quot;Critical prop for critical components&quot;">​</a></h2><p>A critical component is visible in the viewport when the web page is initially loaded. This can be communicated to the automated background process via a critical prop. The flag is passed on to all child components. This means that only the main component (organism) must be provided with it. With the help of this flag, the corresponding static resources (images &amp; fonts) are also declared as preload tags in the page head. All other components and their associated resources, that do not have a positive critical prop, are lazy loaded on demand.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">component</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> critical</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>In the current version, the critical flag must be set manually on the components. Automation would be conceivable in the future. However, according to current knowledge, this would have a massive impact on deployment times when using Puppeteer or similar tools. We are still collecting ideas here. If you know of a more efficient way, please send us a feature request.</p></div><h2 id="font-declaration" tabindex="-1">Font declaration <a class="header-anchor" href="#font-declaration" aria-label="Permalink to &quot;Font declaration&quot;">​</a></h2><p>The integration of fonts is component-based directly in the Vue template. All fonts, which have been declared in <code>nuxt.config</code>, can be assigned directly to the corresponding HTML element or component. In addition, subselectors and media queries can be defined, which enable viewport-based declarations or rich-text declarations. The cool thing about this is that it saves the additional declaration in the CSS. You no longer have to keep the template and the CSS with its corresponding selectors for fonts in sync. Yeah! This is extremely helpful, especially when it comes to theming.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">element</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-font</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;$getFont(…)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span></code></pre></div><p><a href="/directives/v-font.html">Learn more</a> about directive <code>v-font</code>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Fonts are no longer explicitly defined via CSS, otherwise the loading behavior of the fonts cannot be controlled and an optimized loading behavior of the page can no longer be guaranteed.</p></div><h2 id="import-components" tabindex="-1">Import components <a class="header-anchor" href="#import-components" aria-label="Permalink to &quot;Import components&quot;">​</a></h2><p>Until now, components were imported either statically (<code>import component from &#39;@/component&#39;;</code>) or dynamically (<code>import(&#39;@/component&#39;)</code>). However, with these two variants, hydration cannot be controlled. As a result, all components are also initialized on initial load. <code>nuxt-speedkit</code> offers a corresponding loader for this feature request. Each async component import should be enclosed with this loader in a page or layout.</p><ul><li>&#39;Ensures that components are initialized only when needed in the visible viewport.&#39;</li><li>&#39;Optimizes initialization of critical components on initial page load (critical components are initially in the visible viewport).&#39;</li></ul><p>In the background, the module <a href="https://github.com/freddy38510/vue3-lazy-hydration" target="_blank" rel="noreferrer"><code>vue3-lazy-hydration</code></a> inspired by <code>vue-lazy-hydration</code> from <a href="https://github.com/maoberlehner/vue-lazy-hydration" target="_blank" rel="noreferrer">Markus Oberlehner</a> is used in a standardised way.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> speedkitHydrate </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#speedkit/hydrate&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  components: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Stage: </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">speedkitHydrate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@/components/organisms/Stage&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><p>Whether a component is in the viewport or not is determined in the background by the intersection observer. If the initialisation is to take place earlier, e.g. when scrolling, this can be adjusted accordingly via the <code>rootMargin</code> option in the <a href="/guide/options.html#lazyoffset">nuxt.config</a>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Although the <code>#speedkit/hydrate</code> function can be used in any component, we recommend its explicit use only in pages and layout. Its use within components can be useful only in explicit special cases. Here we recommend the general use of static imports.</p></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>With <code>NODE-ENV (development)</code>, the components are included directly. <br>This is relevant for the hot reload of the imported vue files.</p></div><h2 id="speedkit-components" tabindex="-1">Speedkit Components <a class="header-anchor" href="#speedkit-components" aria-label="Permalink to &quot;Speedkit Components&quot;">​</a></h2><p>In order to be able to load further static resources such as pictures, iFrames or Vimeo/Youtube videos in the iFrame in a performance-optimised way, we provide the following components. The speedkit components can be imported via the namespace <code>#speedkit/components</code>.</p><ul><li><a href="/components/speedkit-layer.html">SpeedkitLayer</a></li><li><a href="/components/speedkit-picture.html">SpeedkitPicture</a></li><li><a href="/components/speedkit-image.html">SpeedkitImage</a></li><li><a href="/components/speedkit-iframe.html">SpeedkitIframe</a></li><li><a href="/components/speedkit-vimeo.html">SpeedkitVimeo</a></li><li><a href="/components/speedkit-youtube.html">SpeedkitYoutube</a></li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">speedkit-picture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SpeedkitPicture </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#speedkit/components/SpeedkitPicture&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  components: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    SpeedkitPicture</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The speedkit components will be expanded in the future. If you have explicit wishes, please send us a feature request or directly a pull request with the corresponding feature 😃</p></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>You can check out a sample integration of <code>nuxt-speedkit</code> at <a href="https://github.com/GrabarzUndPartner/nuxt-speedkit-example" target="_blank" rel="noreferrer">Nuxt Speedkit Example</a>.</p><iframe class="embed-sandbox" src="//codesandbox.io/embed/github/GrabarzUndPartner/nuxt-speedkit-example/tree/main/?hidenavigation=1&amp;theme=dark"></iframe>`,26);function c(i,k,m,g,u,E){return l(),t("div",null,[e("h1",r,[a(n(i.$frontmatter.title)+" ",1),h]),d])}const b=s(p,[["render",c]]);export{f as __pageData,b as default};
