import{_ as t,o as i,c as a,k as e,a as n,t as l,R as d}from"./chunks/framework.DAPI8gNX.js";const b=JSON.parse('{"title":"Options","description":"","frontmatter":{"title":"Options"},"headers":[],"relativePath":"v1/guide/options.md","filePath":"v1/guide/options.md"}'),o={name:"v1/guide/options.md"},r={id:"frontmatter-title",tabindex:"-1"},h=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),p=d(`<h2 id="crossorigin" tabindex="-1"><code>crossorigin</code> <a class="header-anchor" href="#crossorigin" aria-label="Permalink to &quot;\`crossorigin\`&quot;">​</a></h2><ul><li>Type: <code>String</code><ul><li>Default: <code>&#39;anonymous&#39;</code></li><li>String values: <code>&#39;anonymous&#39;</code>, <code>&#39;use-credentials&#39;</code> or <code>undefined</code> <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin" target="_blank" rel="noreferrer">learn more</a></li></ul></li></ul><p>Sets the global <code>crossorigin</code> value of the nuxt-speedkit preloads.<br> The default value is the <code>crossorigin</code> from the <a href="https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-render#crossorigin" target="_blank" rel="noreferrer">Render Configuration</a>.</p><h2 id="detection" tabindex="-1"><code>detection</code> <a class="header-anchor" href="#detection" aria-label="Permalink to &quot;\`detection\`&quot;">​</a></h2><ul><li>Type: <code>Object</code></li></ul><p>These options can be used to define which initial checks are to be carried out when using the <a href="/v1/components/speedkit-layer.html"><code>SpeedkitLayer</code></a>.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  performance</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  browserSupport</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><table><thead><tr><th>Key</th><th>Type</th><th>Required</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>performance</code></td><td><code>Boolean</code></td><td>yes</td><td>Checks whether the minimum <a href="/v1/guide/options.html#performancemetrics">performance requirement</a> has been met. If this is not the case, the <a href="/v1/components/speedkit-layer.html"><code>SpeedkitLayer</code></a> is displayed.</td><td><code>true</code></td></tr><tr><td><code>browserSupport</code></td><td><code>Boolean</code></td><td>yes</td><td>Überprüft, ob die Webseite über einen supported Browser besucht wird. Handelt es sich hierbei um einen unsupported Browser, wird der <a href="/v1/components/speedkit-layer.html"><code>SpeedkitLayer</code></a> eingeblendet.</td><td><code>true</code></td></tr></tbody></table><p>::alert{type=&quot;info&quot;} For the browser support detection, the default <a href="https://github.com/browserslist/browserslist" target="_blank" rel="noreferrer">Browserslist</a> of the NuxtJS configuration is used. ::</p><h2 id="performancemetrics" tabindex="-1"><code>performanceMetrics</code> <a class="header-anchor" href="#performancemetrics" aria-label="Permalink to &quot;\`performanceMetrics\`&quot;">​</a></h2><ul><li>Type: <code>Object</code></li></ul><p>With the help of the metrics, the actual performance check on client side can be configured. An explicit lighthouse check via user agent can be optionally added.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  device</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    hardwareConcurrency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">48</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    deviceMemory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  timing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    fcp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    dcl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1200</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // fallback if fcp is not available (safari)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  lighthouseDetectionByUserAgent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="device" tabindex="-1"><code>device</code> <a class="header-anchor" href="#device" aria-label="Permalink to &quot;\`device\`&quot;">​</a></h3><ul><li>Type: <code>Object</code></li></ul><p>Describes the minimum hardware requirements that a device should meet to display the website.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  hardwareConcurrency</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">max</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">48</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  deviceMemory</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">min</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><table><thead><tr><th>Key</th><th>Type</th><th>Required</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>hardwareConcurrency</code></td><td><code>Object</code></td><td>yes</td><td>min/max number of CPUs</td><td><code>{ min: 2, max: 48 }</code></td></tr><tr><td><code>deviceMemory</code></td><td><code>Object</code></td><td>yes</td><td>min size of memory</td><td><code>{ min: 2 }</code></td></tr></tbody></table><h3 id="timing" tabindex="-1"><code>timing</code> <a class="header-anchor" href="#timing" aria-label="Permalink to &quot;\`timing\`&quot;">​</a></h3><ul><li>Type: <code>Object</code></li></ul><p>Defines the max. time (ms) for the FCP. If the specified value is exceeded, the <a href="/components/speedkit-layer.html"><code>SpeedkitLayer</code></a> is displayed. If the browser does not yet grant access to the FCP, the DCL is evaluated as an alternative.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fcp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">800</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  dcl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1200</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> // fallback if fcp is not available (safari)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><table><thead><tr><th>Key</th><th>Type</th><th>Required</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>fcp</code></td><td><code>Number</code></td><td>yes</td><td>Max. First contentful paint duration in ms <a href="https://developer.mozilla.org/en-US/docs/Glossary/First_contentful_paint" target="_blank" rel="noreferrer">learn More</a></td><td><code>800</code></td></tr><tr><td><code>dcl</code></td><td><code>Number</code></td><td>yes</td><td>Max. Dom content load duration in ms</td><td><code>1200</code></td></tr></tbody></table><h3 id="lighthousedetectionbyuseragent" tabindex="-1"><code>lighthouseDetectionByUserAgent</code> <a class="header-anchor" href="#lighthousedetectionbyuseragent" aria-label="Permalink to &quot;\`lighthouseDetectionByUserAgent\`&quot;">​</a></h3><ul><li>Type: <code>Boolean</code><ul><li>Default: <code>false</code></li></ul></li></ul><p>Fallback to detect lighthouse user agent when the other ressources like the hardware detect don&#39;t work anymore.</p><p>::alert{type=&quot;warning&quot;} We recommend that you disable the explicit lighthouse check . In the description of the <a href="/v1/components/speedkit-layer.html">SpeedkitLayer</a> you will find a more detailed description of the trick that can be used to detect a lighthouse test. ::</p><h2 id="fonts" tabindex="-1"><code>fonts</code> <a class="header-anchor" href="#fonts" aria-label="Permalink to &quot;\`fonts\`&quot;">​</a></h2><ul><li>Type: <code>Array</code></li></ul><p>List of all font families used in the project. Only the fonts that are listed in the configuration can be retrieved and integrated via <a href="/v1/directives/v-font.html"><code>$fonts.getFont(...)</code></a>.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    family: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Font A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    locals: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Font A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fallback: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Arial&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;sans-serif&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    variances: […]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    family: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Font B&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    locals: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Font B&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    fallback: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Arial&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;sans-serif&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    variances: […]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><h3 id="font-family" tabindex="-1">Font-Family <a class="header-anchor" href="#font-family" aria-label="Permalink to &quot;Font-Family&quot;">​</a></h3><ul><li>Type: <code>Object</code></li></ul><p>Describes a font family with all its variants.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  family</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Font A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  locals</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Font A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  fallback</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Arial&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;sans-serif&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">],</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  variances</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: […]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><table><thead><tr><th>Key</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>family</code></td><td><code>String</code></td><td>yes</td><td>name of the font family</td></tr><tr><td><code>locals</code></td><td><code>Array</code></td><td>yes</td><td>system font name of the specified font family</td></tr><tr><td><code>fallback</code></td><td><code>Array</code></td><td>yes</td><td>fallback fonts e.g. <code>[&#39;Arial&#39;, &#39;sans-serif&#39;]</code></td></tr><tr><td><code>variances</code></td><td><code>Array</code></td><td>yes</td><td>list of font family variants (e.g. Bold, Italic)</td></tr></tbody></table><p>::alert{type=&quot;warning&quot;} Prevent sizing discrepancy between your custom and fallback font for perfect swap and reduction of layout shifts. <a href="https://meowni.ca/font-style-matcher/">more</a> ::</p><h3 id="font-variance" tabindex="-1">Font-Variance <a class="header-anchor" href="#font-variance" aria-label="Permalink to &quot;Font-Variance&quot;">​</a></h3><ul><li>Type: <code>Object</code></li></ul><p>A font variant describes an instance of a font family and is used to generate the <code>FontFace</code> declaration. Font variants differ in <a href="https://developer.mozilla.org/de/docs/Web/CSS/font-style" target="_blank" rel="noreferrer"><code>style</code></a> and <a href="https://developer.mozilla.org/de/docs/Web/CSS/font-weight" target="_blank" rel="noreferrer"><code>weight</code></a>.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  style</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;normal&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  weight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">400</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  sources</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@/assets/fonts/font-a-regular.woff&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;woff&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@/assets/fonts/font-a-regular.woff2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;woff2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><table><thead><tr><th>Key</th><th>Type</th><th>Required</th><th>Description</th></tr></thead><tbody><tr><td><code>style</code></td><td><code>String</code></td><td>yes</td><td><code>font-style</code> of FontFace, e.g. <code>normal</code>, <code>italic</code></td></tr><tr><td><code>weight</code></td><td><code>String</code> or <code>Number</code></td><td>yes</td><td><code>font-weight</code> of FontFace, e.g. <code>400</code>, <code>normal</code></td></tr><tr><td><code>sources</code></td><td><code>Array</code></td><td>yes</td><td>list of all font files assigned to the variant (<a href="#sources"><code>sources</code></a>)</td></tr></tbody></table><h3 id="sources" tabindex="-1"><code>sources</code> <a class="header-anchor" href="#sources" aria-label="Permalink to &quot;\`sources\`&quot;">​</a></h3><ul><li>Type: <code>Array</code></li></ul><p>List of all available font files of a font family variation.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@/assets/fonts/font-a-regular.woff&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;woff&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  { src: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;@/assets/fonts/font-a-regular.woff2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;woff2&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre></div><table><thead><tr><th>Key</th><th>Type</th><th>Required</th><th>Value</th></tr></thead><tbody><tr><td><code>src</code></td><td><code>String</code></td><td>yes</td><td>path to a font file, the use of aliases is possible</td></tr><tr><td><code>type</code></td><td><code>String</code></td><td>yes</td><td>file format of the specified file, e.g. <code>woff</code>, <code>woff2</code>, …</td></tr></tbody></table><h2 id="componentautoimport" tabindex="-1"><code>componentAutoImport</code> <a class="header-anchor" href="#componentautoimport" aria-label="Permalink to &quot;\`componentAutoImport\`&quot;">​</a></h2><ul><li>Type: <code>Boolean</code><ul><li>Default: <code>false</code></li></ul></li></ul><p>With this attribute all components that can be found under <code>#speedkit/components</code> can be registered globally. <a href="https://github.com/nuxt/components" target="_blank" rel="noreferrer">Learn more @nuxt/components</a></p><h3 id="available-components" tabindex="-1">Available components <a class="header-anchor" href="#available-components" aria-label="Permalink to &quot;Available components&quot;">​</a></h3><table><thead><tr><th>Global Name</th><th>Import Path</th><th></th></tr></thead><tbody><tr><td><code>SpeedkitIframe</code></td><td><code>#speedkit/components/SpeedkitIframe</code></td><td><a href="https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/SpeedkitIframe.vue" target="_blank" rel="noreferrer">Source</a></td></tr><tr><td><code>SpeedkitLayer</code></td><td><code>#speedkit/components/SpeedkitLayer</code></td><td><a href="https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/SpeedkitLayer.vue" target="_blank" rel="noreferrer">Source</a></td></tr><tr><td><code>SpeedkitPicture</code></td><td><code>#speedkit/components/SpeedkitPicture</code></td><td><a href="https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/SpeedkitPicture.vue" target="_blank" rel="noreferrer">Source</a></td></tr><tr><td><code>SpeedkitYoutube</code></td><td><code>#speedkit/components/SpeedkitYoutube</code></td><td><a href="https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/SpeedkitYoutube.vue" target="_blank" rel="noreferrer">Source</a></td></tr><tr><td><code>AbstractIntersectionObserver</code></td><td><code>#speedkit/components/abstracts/IntersectionObserver</code></td><td><a href="https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/abstracts/IntersectionObserver.vue" target="_blank" rel="noreferrer">Source</a></td></tr><tr><td><code>AbstractOnlySsr</code></td><td><code>#speedkit/components/abstracts/OnlySsr</code></td><td><a href="https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/abstracts/OnlySsr.vue" target="_blank" rel="noreferrer">Source</a></td></tr><tr><td><code>ExperimentalSpeedkitPicture</code></td><td><code>#speedkit/components/experimental/SpeedkitPicture</code></td><td><a href="https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/experimental/SpeedkitPicture.vue" target="_blank" rel="noreferrer">Source</a></td></tr><tr><td><code>ExperimentalSpeedkitYoutube</code></td><td><code>#speedkit/components/experimental/SpeedkitYoutube</code></td><td><a href="https://github.com/GrabarzUndPartner/nuxt-speedkit/blob/main/lib/components/experimental/SpeedkitYoutube.vue" target="_blank" rel="noreferrer">Source</a></td></tr></tbody></table><h2 id="componentprefix" tabindex="-1"><code>componentPrefix</code> <a class="header-anchor" href="#componentprefix" aria-label="Permalink to &quot;\`componentPrefix\`&quot;">​</a></h2><ul><li>Type: <code>String</code><ul><li>Default: <code>undefined</code></li></ul></li></ul><p>Defines a prefix for the module components, important for auto import e.g. option <code>componentAutoImport</code>.</p><p><strong>Example:</strong> <code>SpeedkitPicture</code> =&gt; <code>PrefixSpeedkitPicture</code></p><h2 id="lazyoffset" tabindex="-1"><code>lazyOffset</code> <a class="header-anchor" href="#lazyoffset" aria-label="Permalink to &quot;\`lazyOffset\`&quot;">​</a></h2><ul><li>Type: <code>Object</code></li></ul><p>Global option for the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API" target="_blank" rel="noreferrer"><code>IntersectionObserver</code></a> built into the <code>nuxt-speedkit</code>.</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // rootMargin for speedkitComponents components</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  component</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // rootMargin for SpeedkitPicture and SpeedkitImage</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  asset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;0%&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><table><thead><tr><th>Key</th><th>Type</th><th>Required</th><th>Description</th><th>Default</th></tr></thead><tbody><tr><td><code>component</code></td><td><code>String</code></td><td>yes</td><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin" target="_blank" rel="noreferrer"><code>rootMargin</code></a> value for <code>speedkitComponents</code></td><td><code>0%</code></td></tr><tr><td><code>asset</code></td><td><code>String</code></td><td>yes</td><td><a href="https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin" target="_blank" rel="noreferrer"><code>rootMargin</code></a> value for all static ressources (<code>v-font</code> und <code>SpeedkitPicture</code>)</td><td><code>0%</code></td></tr></tbody></table><h2 id="disablenuxtimage" tabindex="-1"><code>disableNuxtImage</code> <a class="header-anchor" href="#disablenuxtimage" aria-label="Permalink to &quot;\`disableNuxtImage\`&quot;">​</a></h2><ul><li>Type: <code>Boolean</code><ul><li>Default: <code>false</code></li></ul></li></ul><p>If set, <code>@nuxt/image</code> will not be integrated.</p><p>⚠️  The following components can no longer be used:<br></p><ul><li><a href="/v1/components/experimental/speedkit-picture.html">SpeedkitPicture (Experimental)</a></li><li><a href="/v1/components/experimental/speedkit-youtube.html">SpeedkitYoutube (Experimental)</a></li></ul>`,66);function c(s,k,E,g,y,u){return i(),a("div",null,[e("h1",r,[n(l(s.$frontmatter.title)+" ",1),h]),p])}const m=t(o,[["render",c]]);export{b as __pageData,m as default};
