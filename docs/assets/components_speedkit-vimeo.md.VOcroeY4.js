import{_ as n,o as e,c as l,k as s,a as p,t as o,R as t}from"./chunks/framework._u06EGUx.js";const v=JSON.parse('{"title":"SpeedkitVimeo","description":"","frontmatter":{"title":"SpeedkitVimeo"},"headers":[],"relativePath":"components/speedkit-vimeo.md","filePath":"components/speedkit-vimeo.md"}'),c={name:"components/speedkit-vimeo.md"},r={id:"frontmatter-title",tabindex:"-1"},i=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),E=t(`<p>We have integrated <code>SpeedkitVimeo</code> as an example to show how iFrame content must be integrated in a performance-optimized manner. For this purpose, a separate IntersectionObserver has been implemented, which detects a longer dwell time of the component in the viewport. The iFrame is initialized only after a positive detection. This prevents immense data from having to be loaded when simply scrolling through the page. So that no empty space is visible to the user, we use the functionality of the <a href="/components/speedkit-picture.html"><code>SpeedkitPicture</code></a> and preload the corresponding Vimeo poster in different renditions, so the illusion is perfect for the user and he does not notice anything of the optimized lazy load procedure.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>The <code>SpeedkitVimeo</code> is used to initialise Vimeo videos with <a href="https://developer.vimeo.com/player/sdk/" target="_blank" rel="noreferrer"><code>Vimeo Player-SDK</code></a>.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>The SDK is not part of <code>nuxt-speedkit</code> and will be loaded by an external script.</p></div><p>The <code>url</code> of the Vimeo video must be specified.</p><p>The <code>SpeedkitPicture</code> is used for the poster, so the generation of the poster is automated, you can define the image sizes with <a href="/components/speedkit-image.html#source"><code>sizes</code> (What is <code>sizes</code>?)</a>.</p><p><a href="/components/speedkit-picture.html">Learn more about <code>SpeedkitPicture</code></a></p><p>::alert{type=&quot;warning&quot;} Important: For using <code>SpeedkitVimeo</code> do not disable <code>@nuxt/image</code> via <code>disableNuxtImage</code> ::</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">speedkit-vimeo</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">v-bind</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{</span></span>
<span class="line"><span style="color:#9ECBFF;">        url,</span></span>
<span class="line"><span style="color:#9ECBFF;">        title,</span></span>
<span class="line"><span style="color:#9ECBFF;">        options,</span></span>
<span class="line"><span style="color:#9ECBFF;">        posterSizes</span></span>
<span class="line"><span style="color:#9ECBFF;">      }&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">@playing</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;onPlaying&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> SpeedkitVimeo </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;#speedkit/components/SpeedkitVimeo&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#B392F0;">defineProps</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  url: { type: String, default: </span><span style="color:#9ECBFF;">&#39;&lt;vimeo-url&gt;&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  title: { type: String, default: </span><span style="color:#9ECBFF;">&#39;Vimeo Title&#39;</span><span style="color:#E1E4E8;"> },</span></span>
<span class="line"><span style="color:#E1E4E8;">  options: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: String,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        controls: </span><span style="color:#79B8FF;">false</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  posterSizes: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    type: Object,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">default</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">        default: </span><span style="color:#9ECBFF;">&#39;100vw&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        md: </span><span style="color:#9ECBFF;">&#39;50vw&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">      };</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">onPlaying</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;Vimeo Player playing!&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">speedkit-vimeo</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">v-bind</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{</span></span>
<span class="line"><span style="color:#032F62;">        url,</span></span>
<span class="line"><span style="color:#032F62;">        title,</span></span>
<span class="line"><span style="color:#032F62;">        options,</span></span>
<span class="line"><span style="color:#032F62;">        posterSizes</span></span>
<span class="line"><span style="color:#032F62;">      }&quot;</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">@playing</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;onPlaying&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> SpeedkitVimeo </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;#speedkit/components/SpeedkitVimeo&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">defineProps</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  url: { type: String, default: </span><span style="color:#032F62;">&#39;&lt;vimeo-url&gt;&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  title: { type: String, default: </span><span style="color:#032F62;">&#39;Vimeo Title&#39;</span><span style="color:#24292E;"> },</span></span>
<span class="line"><span style="color:#24292E;">  options: {</span></span>
<span class="line"><span style="color:#24292E;">    type: String,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        controls: </span><span style="color:#005CC5;">false</span></span>
<span class="line"><span style="color:#24292E;">      };</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  posterSizes: {</span></span>
<span class="line"><span style="color:#24292E;">    type: Object,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">default</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        default: </span><span style="color:#032F62;">&#39;100vw&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        md: </span><span style="color:#032F62;">&#39;50vw&#39;</span></span>
<span class="line"><span style="color:#24292E;">      };</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">onPlaying</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;Vimeo Player playing!&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">url</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;&lt;vimeo-url&gt;&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">title</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;Player Title&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">autoplay</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">mute</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">posterSizes</span><span style="color:#E1E4E8;">: { … },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">options</span><span style="color:#E1E4E8;">: { … }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">url</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;&lt;vimeo-url&gt;&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">title</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;Player Title&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">autoplay</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">mute</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">posterSizes</span><span style="color:#24292E;">: { … },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">options</span><span style="color:#24292E;">: { … }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h3 id="url" tabindex="-1"><code>url</code> <a class="header-anchor" href="#url" aria-label="Permalink to &quot;\`url\`&quot;">​</a></h3><ul><li>Type: <code>String</code></li></ul><p>Sets a video via the vimeo url.</p><h3 id="title" tabindex="-1"><code>title</code> <a class="header-anchor" href="#title" aria-label="Permalink to &quot;\`title\`&quot;">​</a></h3><ul><li>Type: <code>String</code></li></ul><p>Sets the title for the player iframe and poster.</p><h3 id="autoplay" tabindex="-1"><code>autoplay</code> <a class="header-anchor" href="#autoplay" aria-label="Permalink to &quot;\`autoplay\`&quot;">​</a></h3><ul><li>Type: <code>Boolean</code><ul><li>Default: <code>false</code></li></ul></li></ul><p>When set starts video in autoplay. It is required that the component is integrated via <a href="/guide/usage.html#import-components"><code>SpeedkitHydrate</code></a> or is only activated when entering the visible area.</p><h3 id="mute" tabindex="-1"><code>mute</code> <a class="header-anchor" href="#mute" aria-label="Permalink to &quot;\`mute\`&quot;">​</a></h3><ul><li>Type: <code>Boolean</code><ul><li>Default: <code>false</code></li></ul></li></ul><p>When set the player is muted.</p><h3 id="postersizes" tabindex="-1"><code>posterSizes</code> <a class="header-anchor" href="#postersizes" aria-label="Permalink to &quot;\`posterSizes\`&quot;">​</a></h3><ul><li>Type: <code>String</code><ul><li>Default: <code>{ default: &#39;100vw&#39;, xxs: &#39;100vw&#39;, xs: &#39;100vw&#39;, sm: &#39;100vw&#39;, md: &#39;100vw&#39;, lg: &#39;100vw&#39;, xl: &#39;100vw&#39;, xxl: &#39;100vw&#39; }</code></li></ul></li></ul><p>Sets the image sizes of the poster.</p><p><a href="/components/speedkit-image.html#source">Learn more about <code>sizes</code></a></p><h3 id="options" tabindex="-1"><code>options</code> <a class="header-anchor" href="#options" aria-label="Permalink to &quot;\`options\`&quot;">​</a></h3><ul><li>Type: <code>Object</code></li></ul><p>Overrides the vimeo player options. These will be the same as the vimeo player embed options.</p><p><a href="https://developer.vimeo.com/player/sdk/embed" target="_blank" rel="noreferrer">Learn more about Vimeo Player Parameters</a></p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>For <code>autoplay</code> and <code>mute</code> the component properties are used.</p><p>Option <code>playsinline</code> is always set, <code>mute</code> is set automatically for touch devices.<br> This is important for autoplay on mobile devices.</p></div><h2 id="slots" tabindex="-1">Slots <a class="header-anchor" href="#slots" aria-label="Permalink to &quot;Slots&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#default</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;{ videoData }&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  {{videoData.title}}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#loading-spinner</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  Loading…</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">#play</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;Click!&lt;/</span><span style="color:#85E89D;">span</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#default</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;{ videoData }&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  {{videoData.title}}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#loading-spinner</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  Loading…</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">#play</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;Click!&lt;/</span><span style="color:#22863A;">span</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>default</code></td><td>Used to display more information about the video below the player.<br>The slot has a scoped property <code>videoData</code>. <br>This contains the result from the Vimeo <code>oembed</code> api.<br><br><a href="https://developer.vimeo.com/api/oembed/videos#table-2" target="_blank" rel="noreferrer">https://developer.vimeo.com/api/oembed/videos#table-2</a></td></tr><tr><td><code>loading-spinner</code></td><td>Overwrites the loading spinner.</td></tr><tr><td><code>play</code></td><td>Overwrites the play button.</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">speedkit-vimeo</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">@ready</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;console.log(&#39;Player Ready!&#39;)&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">@playing</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;console.log(&#39;Player Playing!&#39;)&quot;</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#E1E4E8;">/&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">speedkit-vimeo</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">@ready</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;console.log(&#39;Player Ready!&#39;)&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">@playing</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;console.log(&#39;Player Playing!&#39;)&quot;</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#24292E;">/&gt;</span></span></code></pre></div><table><thead><tr><th>Name</th><th>Description</th></tr></thead><tbody><tr><td><code>ready</code></td><td>Triggered when <code>Vimeo Player-SDK</code> is completely loaded.</td></tr><tr><td><code>playing</code></td><td>Triggered when video is finished loading and playing.</td></tr><tr><td><code>beforePlayer</code></td><td>Used to place elements in the player container (before).</td></tr><tr><td><code>afterPlayer</code></td><td>Used to place elements in the player container (after).</td></tr></tbody></table>`,39);function y(a,d,h,u,m,g){return e(),l("div",null,[s("h1",r,[p(o(a.$frontmatter.title)+" ",1),i]),E])}const f=n(c,[["render",y]]);export{v as __pageData,f as default};
