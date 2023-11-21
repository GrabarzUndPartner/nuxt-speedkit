import{_ as n,o as e,c as l,k as s,a as o,t as p,R as t}from"./chunks/framework._u06EGUx.js";const f=JSON.parse('{"title":"Usage","description":"","frontmatter":{"title":"Usage"},"headers":[],"relativePath":"v1/guide/usage.md","filePath":"v1/guide/usage.md"}'),c={name:"v1/guide/usage.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),E=t(`<p>The following tools are provided to optimize your webpage:</p><h2 id="critical-prop-for-critical-components" tabindex="-1">Critical prop for critical components <a class="header-anchor" href="#critical-prop-for-critical-components" aria-label="Permalink to &quot;Critical prop for critical components&quot;">​</a></h2><p>A critical component is visible in the viewport when the web page is initially loaded. This can be communicated to the automated background process via a critical prop. The flag is passed on to all child components. This means that only the main component (organism) must be provided with it. With the help of this flag, the corresponding static resources (images &amp; fonts) are also declared as preload tags in the page head. All other components and their associated resources, that do not have a positive critical prop, are lazy loaded on demand.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">component</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">:critical</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;true&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">component</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">:critical</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;true&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>In the current version, the critical flag must be set manually on the components. Automation would be conceivable in the future. However, according to current knowledge, this would have a massive impact on deployment times when using Puppeteer or similar tools. We are still collecting ideas here. If you know of a more efficient way, please send us a feature request.</p></div><h2 id="font-declaration" tabindex="-1">Font declaration <a class="header-anchor" href="#font-declaration" aria-label="Permalink to &quot;Font declaration&quot;">​</a></h2><p>The integration of fonts is component-based directly in the Vue template. All fonts, which have been declared in <code>nuxt.config</code>, can be assigned directly to the corresponding HTML element or component. In addition, subselectors and media queries can be defined, which enable viewport-based declarations or rich-text declarations. The cool thing about this is that it saves the additional declaration in the CSS. You no longer have to keep the template and the CSS with its corresponding selectors for fonts in sync. Yeah! This is extremely helpful, especially when it comes to theming.</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#FDAEB7;font-style:italic;">component</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-font</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;$fonts.getFont(…)&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#B31D28;font-style:italic;">component</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-font</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;$fonts.getFont(…)&quot;</span><span style="color:#24292E;"> /&gt;</span></span></code></pre></div><p><a href="/v1/directives/v-font.html">Learn more</a> about directive <code>v-font</code>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Fonts are no longer declared via CSS with the help of this module. They may even no longer be explicitly defined via CSS, as otherwise the loading behaviour would be negatively affected in the worst case.</p></div><h2 id="import-components" tabindex="-1">Import components <a class="header-anchor" href="#import-components" aria-label="Permalink to &quot;Import components&quot;">​</a></h2><p>Until now, the components available in the page were always declared via the attribute <code>components</code>. The import was done statically (<code>import component from &#39;@/component&#39;;</code>) or dynamically (<code>import(&#39;@/component&#39;)</code>). <code>nuxt-speedkit</code> provides a new attribute named <code>speedkitComponents</code> that only allows dynamic imports. This ensures that only the components visible in the viewport are executed on initial load and the remaining components outside the viewport are executed on demand. In the background, the module by <a href="https://github.com/maoberlehner/vue-lazy-hydration" target="_blank" rel="noreferrer">Markus Oberlehner</a> is used in a standardised way.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">speedkitComponents</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">Stage</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@/components/organisms/Stage&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">speedkitComponents</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">Stage</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/components/organisms/Stage&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>Whether a component is in the viewport or not is determined in the background by the intersection observer. If the initialisation is to take place earlier, e.g. when scrolling, this can be adjusted accordingly via the <code>rootMargin</code> option in the <a href="/v1/guide/options.html#components">nuxt.config</a>.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Although the attribute &quot;speedkitComponents&quot; can be filled in every component, we recommend its explicit use only in pages and layout. The use within components can only make sense in explicit special cases. Here we recommend the general use of static imports.</p></div><h2 id="speedkit-components" tabindex="-1">Speedkit Components <a class="header-anchor" href="#speedkit-components" aria-label="Permalink to &quot;Speedkit Components&quot;">​</a></h2><p>In order to be able to load further static resources such as pictures, iFrames or Youtube videos in the iFrame in a performance-optimised way, we provide the following components. The speedkit components can be imported via the namespace <code>#speedkit/components</code>.</p><ul><li><a href="/v1/components/speedkit-layer.html">SpeedkitLayer</a></li><li><a href="/v1/components/speedkit-picture.html">SpeedkitPicture</a></li><li><a href="/v1/components/experimental/speedkit-picture.html">SpeedkitPicture (Experimental)</a></li><li><a href="/v1/components/speedkit-iframe.html">SpeedkitIframe</a></li><li><a href="/v1/components/speedkit-youtube.html">SpeedkitYoutube</a></li><li><a href="/v1/components/experimental/speedkit-youtube.html">SpeedkitYoutube (Experimental)</a></li></ul><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">speedkit-picture</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> SpeedkitPicture </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;#speedkit/components/SpeedkitPicture&#39;</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  components: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    SpeedkitPicture</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">speedkit-picture</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> SpeedkitPicture </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;#speedkit/components/SpeedkitPicture&#39;</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  components: {</span></span>
<span class="line"><span style="color:#24292E;">    SpeedkitPicture</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The speedkit components will be expanded in the future. If you have explicit wishes, please send us a feature request or directly a pull request with the corresponding feature 😃</p></div><h2 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h2><p>You can check out a sample integration of <code>nuxt-speedkit</code> at <a href="https://github.com/GrabarzUndPartner/nuxt-custom-speedkit" target="_blank" rel="noreferrer">Nuxt Speedkit Example</a>.</p><p>:sandbox{src=&quot;<a href="https://codesandbox.io/embed/github/GrabarzUndPartner/nuxt-speedkit-example/tree/main/?hidenavigation=1&amp;theme=dark%22%7D" target="_blank" rel="noreferrer">https://codesandbox.io/embed/github/GrabarzUndPartner/nuxt-speedkit-example/tree/main/?hidenavigation=1&amp;theme=dark&quot;}</a></p><h2 id="browser-compatibility" tabindex="-1">Browser compatibility <a class="header-anchor" href="#browser-compatibility" aria-label="Permalink to &quot;Browser compatibility&quot;">​</a></h2><p>You can use <code>nuxt-speedkit</code> with <strong>Internet Explorer 11</strong> browser.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Note that there is no optimization based on preloads in IE 11.</p></div><p>You need the following polyfills:</p><ul><li><a href="https://www.npmjs.com/package/object-fit-images" target="_blank" rel="noreferrer"><code>object-fit-images</code></a></li><li><a href="https://www.npmjs.com/package/picturefill" target="_blank" rel="noreferrer"><code>picturefill</code></a></li><li><a href="https://www.npmjs.com/package/intersection-observer" target="_blank" rel="noreferrer"><code>intersection-observer</code></a></li></ul><p>The PostCSS Plugin <a href="https://github.com/ronik-design/postcss-object-fit-images" target="_blank" rel="noreferrer"><code>postcss-object-fit-images</code></a> and following <code>build.transpile</code> entries for <code>@nuxt/image</code>:</p><ul><li><code>@nuxt/image</code></li><li><code>image-meta</code></li></ul><p>For the polyfills, it is recommended to integrate them as a <a href="https://nuxtjs.org/docs/2.x/directory-structure/plugins" target="_blank" rel="noreferrer">plugin</a>, polyfills loading must follow a specific order.</p><p>You can see a live example at <a href="https://grabarzundpartner.github.io/nuxt-speedkit-example/" target="_blank" rel="noreferrer">Nuxt Speedkit Example</a>.</p><h3 id="example-1" tabindex="-1">Example <a class="header-anchor" href="#example-1" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ieIRn" id="tab-n3T171w" checked="checked"><label for="tab-n3T171w">plugins/polyfills.js</label><input type="radio" name="group-ieIRn" id="tab-f-0q8-o"><label for="tab-f-0q8-o">nuxt.config.js</label></div><div class="blocks"><div class="language-js vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">async</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">function</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">polyfills</span><span style="color:#E1E4E8;"> (){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;IntersectionObserver&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> global)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;intersection-observer&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;objectFit&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> document.documentElement.style)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;object-fit-images&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;HTMLPictureElement&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> global </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;picturefill&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">in</span><span style="color:#E1E4E8;"> global)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;picturefill&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;picturefill/dist/plugins/mutation/pf.mutation.js&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">polyfills</span><span style="color:#E1E4E8;"> ();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">async</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">function</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">polyfills</span><span style="color:#24292E;"> (){</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;IntersectionObserver&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> global)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;intersection-observer&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;objectFit&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> document.documentElement.style)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;object-fit-images&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;HTMLPictureElement&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> global </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;picturefill&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">in</span><span style="color:#24292E;"> global)) {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;picturefill&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;picturefill/dist/plugins/mutation/pf.mutation.js&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">polyfills</span><span style="color:#24292E;"> ();</span></span></code></pre></div><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">build</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">transpile</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;@nuxt/image&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;image-meta&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">postcss</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">plugins</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;postcss-object-fit-images&#39;</span><span style="color:#E1E4E8;">: {}</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">plugins</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    { src: </span><span style="color:#9ECBFF;">&quot;@/plugins/polyfills.js&quot;</span><span style="color:#E1E4E8;">, mode: </span><span style="color:#9ECBFF;">&quot;client&quot;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ]</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">build</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">transpile</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;@nuxt/image&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;image-meta&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">postcss</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">plugins</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;postcss-object-fit-images&#39;</span><span style="color:#24292E;">: {}</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">plugins</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    { src: </span><span style="color:#032F62;">&quot;@/plugins/polyfills.js&quot;</span><span style="color:#24292E;">, mode: </span><span style="color:#032F62;">&quot;client&quot;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">  ]</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div>`,34);function y(a,d,m,h,u,g){return e(),l("div",null,[s("h1",r,[o(p(a.$frontmatter.title)+" ",1),i]),E])}const v=n(c,[["render",y]]);export{f as __pageData,v as default};
