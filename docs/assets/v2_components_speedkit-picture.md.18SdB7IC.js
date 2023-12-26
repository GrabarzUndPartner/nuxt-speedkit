import{_ as a,o as e,c as t,k as i,a as n,t as l,R as p}from"./chunks/framework.Qe9ip4JT.js";const F=JSON.parse('{"title":"SpeedkitPicture","description":"","frontmatter":{"title":"SpeedkitPicture"},"headers":[],"relativePath":"v2/components/speedkit-picture.md","filePath":"v2/components/speedkit-picture.md"}'),h={name:"v2/components/speedkit-picture.md"},r={id:"frontmatter-title",tabindex:"-1"},o=i("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),d=p(`<p>The <code>SpeedkitPicture</code> is a <code>picture</code> implementation based on the module <a href="https://image.nuxtjs.org/" target="_blank" rel="noreferrer"><code>@nuxt/image</code></a>.<br> It uses the provided API <code>$img</code>.</p><h2 id="features" tabindex="-1">Features <a class="header-anchor" href="#features" aria-label="Permalink to &quot;Features&quot;">​</a></h2><p>With the current implementation of <code>SpeedkitPicture</code> we can cover the following functionality:</p><ul><li>generation of multiple sources with multiple image resolutions (srcset)</li><li>breakpoint-based differentiation of multiple image resolutions and ratios (srcset + media-rule)</li><li>optimized preloading of critical image resources</li><li>lazy load of non-critical image resources</li><li>base path support</li><li>lazy hydration support</li><li>load and optimize remote images from custom domains</li><li>full SEO support</li></ul><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>The <code>SpeedkitPicture</code> is used to automatically generate and display different image sizes and/or image ratios for different viewports.</p><p>The specified resources can be given by absolute path (static folder) or complete URL. <a href="https://image.nuxtjs.org/" target="_blank" rel="noreferrer"><code>nuxt/image</code></a> downloads the resources fully automatically and stores the generated and optimized renditions in the destination folder.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Important: For using <code>SpeedkitPicture</code> do not disable <code>@nuxt/image</code> via <code>disableNuxtImage</code>.</p></div><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">speedkit-picture</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-bind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">picture</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">onLoadPicture</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SpeedkitPicture </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#speedkit/components/SpeedkitPicture&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  components: { SpeedkitPicture },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      picture: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        sources: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/img/landscape.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sizes: { sm: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, md: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, lg: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, xl: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, xxl: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, media: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;(orientation: landscape)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/img/portrait.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sizes: { default: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, xxs: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, xs: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, media: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;(orientation: portrait)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Image Title&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        alt: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Image Alt&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    onLoadPicture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Picture loaded!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  sources</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [ … ],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  formats</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;avif&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;webp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;jpg|jpeg|png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  loadingSpinner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> LoadingSpinner</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">( … ),</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  alt</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Image Alt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Image Title&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="hydrate" tabindex="-1"><code>hydrate</code> <a class="header-anchor" href="#hydrate" aria-label="Permalink to &quot;\`hydrate\`&quot;">​</a></h3><ul><li>Type: <code>Boolean</code><ul><li>Default: <code>true</code></li></ul></li></ul><p>The initialization of the <code>SpeedkitPicture</code> in the client can be controlled manually.<br> Here for the property <code>hydrate</code> must be set externally. If <code>true</code> the <code>SpeedkitPicture</code> is initialized.</p><h3 id="sources" tabindex="-1"><code>sources</code> <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;\`sources\`&quot;">​</a></h3><ul><li>Type: <code>Array</code></li></ul><p>List of resources used.</p><p>The definitions in the <code>sources</code> are equivalent to the <a href="/v2/components/speedkit-image.html#source"><code>SpeedkitImage (source)</code></a>.</p><p>The only differences are:</p><ul><li>The <code>media</code> property can be used. This allows even more dependencies for the display, e.g. <code>(orientation: portrait)</code>.</li><li>The <code>format</code> property is not used. Instead <code>formats</code> is used for setting the output formats.</li></ul><p><strong>Example</strong></p><p>In the following example, two different image ratios are used.</p><ul><li><code>landscape.jpg</code> is applied at a viewport of <code>996px</code> with an image size of <code>996px (100vw)</code> by orientation <code>landscape</code>.</li><li><code>portrait.jpg</code> is applied below <code>768px</code> and has two viewport dependent image sizes, at <code>(min-width: 768px)</code> the width <code>768px</code> and everything below that the width <code>320px</code> by orientation <code>portrait</code></li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/img/landscape.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sizes: { md: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, media: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;(orientation: landscape)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;/img/portrait.png&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sizes: { default: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, sm: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;100vw&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }, media: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;(orientation: portrait)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h3 id="formats" tabindex="-1"><code>formats</code> <a class="header-anchor" href="#formats" aria-label="Permalink to &quot;\`formats\`&quot;">​</a></h3><ul><li>Type: <code>Array</code><ul><li>Default: <code>[&#39;webp&#39;, &#39;avif&#39;, &#39;jpg|jpeg|png|gif&#39;]</code></li></ul></li></ul><blockquote><p>Overrides the <a href="/v2/guide/options.html#pictureformats"><code>pictureFormats</code></a> property defined in the module options.</p></blockquote><p>Defines the formats that are to be generated and provided as source in the Picture.<br> Is used to offer the correct image type for the browser.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Formats can also be specified as OR condition (<code>jpg|jpeg|png|gif</code>). This is important when using JPGs and PNGs with the same <code>format</code> configuration.</p></div><h3 id="loadingspinner" tabindex="-1"><code>loadingSpinner</code> <a class="header-anchor" href="#loadingspinner" aria-label="Permalink to &quot;\`loadingSpinner\`&quot;">​</a></h3><ul><li>Type: <a href="/v2/classes/loading-spinner.html"><code>LoadingSpinner</code></a><ul><li>Default: <code>undefined</code></li></ul></li></ul><p>Sets a loading spinner definition of type <a href="/v2/classes/loading-spinner.html"><code>LoadingSpinner</code></a>, this describes the visual appearance of the loading state of the <code>SpeedkitImage</code> contained in the <code>SpeedkitPicture</code>.</p><h3 id="alt" tabindex="-1"><code>alt</code> <a class="header-anchor" href="#alt" aria-label="Permalink to &quot;\`alt\`&quot;">​</a></h3><ul><li>Type: <code>String</code></li></ul><p>Image alternative Text.</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt" target="_blank" rel="noreferrer">MDN - HTMLImageElement.alt</a></p><h3 id="title" tabindex="-1"><code>title</code> <a class="header-anchor" href="#title" aria-label="Permalink to &quot;\`title\`&quot;">​</a></h3><ul><li>Type: <code>String</code></li></ul><p>Image Title.</p><p><a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/title" target="_blank" rel="noreferrer">MDN - HTMLElement.title</a></p><h3 id="crossorigin" tabindex="-1"><code>crossorigin</code> <a class="header-anchor" href="#crossorigin" aria-label="Permalink to &quot;\`crossorigin\`&quot;">​</a></h3><ul><li>Type: <code>String</code>, <code>Boolean</code></li></ul><p>If not set, the global crossorigin is used <code>this.$speedkit.crossorigin</code>.</p><p><a href="https://nuxt-speedkit.grabarzundpartner.dev/options#crossorigin" target="_blank" rel="noreferrer">Learn more about <code>crossorigin</code> option</a></p><p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin" target="_blank" rel="noreferrer">MDN - HTML.Attributes.crossorigin</a></p><h3 id="sortsources" tabindex="-1"><code>sortSources</code> <a class="header-anchor" href="#sortsources" aria-label="Permalink to &quot;\`sortSources\`&quot;">​</a></h3><ul><li>Type: <code>Boolean</code><ul><li>Default: <code>true</code></li></ul></li></ul><p>If set, the sources are sorted by the <code>media</code> properties.</p><p>This is made possible by <a href="https://www.npmjs.com/package/sort-css-media-queries" target="_blank" rel="noreferrer"><code>sort-css-media-queries</code></a>.</p><h3 id="critical" tabindex="-1"><code>critical</code> <a class="header-anchor" href="#critical" aria-label="Permalink to &quot;\`critical\`&quot;">​</a></h3><ul><li>Type: <code>Boolean</code><ul><li>Default: <code>$parent.isCritical</code></li></ul></li></ul><p>Set component as critical component.</p><p><a href="/v2/guide/usage.html#critical-prop-for-critical-components">Learn more about critical components</a></p><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">speedkit-picture</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  @load</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;console.log(&#39;Loaded!&#39;)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span></code></pre></div><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>load</code></td><td>Triggered when the image resource has been completely loaded.</td></tr></tbody></table>`,57);function k(s,c,E,g,u,y){return e(),t("div",null,[i("h1",r,[n(l(s.$frontmatter.title)+" ",1),o]),d])}const f=a(h,[["render",k]]);export{F as __pageData,f as default};
