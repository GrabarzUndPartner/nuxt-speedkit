import{_ as e,D as t,c as p,m as s,a as i,t as l,I as h,w as k,U as E,o as r}from"./chunks/framework.C0u-Tt6Q.js";const S=JSON.parse('{"title":"SpeedkitYoutube","description":"","frontmatter":{"title":"SpeedkitYoutube"},"headers":[],"relativePath":"v1/components/speedkit-youtube.md","filePath":"v1/components/speedkit-youtube.md"}'),d={name:"v1/components/speedkit-youtube.md"},o={id:"frontmatter-title",tabindex:"-1"},g=s("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),y=E(`<blockquote><p>Please note the privacy policy when using. <a href="https://developers.google.com/youtube/v3" target="_blank" rel="noreferrer">Google Youtube-API</a> is integrated via dependency <a href="https://www.npmjs.com/package/youtube-player" target="_blank" rel="noreferrer"><code>youtube-player</code></a>.</p></blockquote><p>Since the <a href="/v1/components/experimental/speedkit-youtube.html"><code>SpeedkitYoutube</code> (Experimental)</a> is still marked as experimental, we still offer the simplified version called <code>SpeedkitYoutube</code>. Here, all resources that are generated fully automatically in the experimental module must be defined manually.</p><p>Except for the manual resource definition for the poster, all other <a href="/v1/components/experimental/speedkit-youtube.html#features">features</a> of <a href="/v1/components/experimental/speedkit-youtube.html"><code>SpeedkitYoutube</code> (Experimental)</a> are identical.</p><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>The <code>SpeedkitYoutube</code> differs from the <a href="/v1/components/experimental/speedkit-youtube.html"><code>SpeedkitYoutube</code> (Experimental)</a> in the definition of the <code>poster</code>.<br> A <code>SpeedkitPicture</code> must be additionally defined in the <code>poster</code> property.</p><p><a href="/v1/components/speedkit-picture.html">Learn more about <code>SpeedkitPicture</code></a></p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">speedkit-youtube</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-bind</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">youtube</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">playing</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">onPlaying</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> SpeedkitYoutube </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#speedkit/components/SpeedkitYoutube&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> default</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  components: { SpeedkitYoutube },</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  data</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      youtube: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        id: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;youtube-id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        host: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://www.youtube-nocookie.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        config: { … },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        poster: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          placeholders: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;data:image/jpeg;base64,…&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          sources: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              sizes: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                { width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">414</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;poster-414.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                { width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">576</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, media: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;(min-width: 576px)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;poster-576.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                { width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">768</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, media: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;(min-width: 768px)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;poster-768.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                { width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, media: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;(min-width: 1024px)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;poster-1024.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                { width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1280</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, media: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;(min-width: 1200px)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;poster-1280.jpg&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              format: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;webp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              sizes: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                { width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">414</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;poster-414.webp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                { width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">576</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, media: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;(min-width: 576px)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;poster-576.webp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                { width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">768</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, media: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;(min-width: 768px)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;poster-768.webp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                { width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1024</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, media: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;(min-width: 1024px)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;poster-1024.webp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">                { width: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1280</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, media: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;(min-width: 1200px)&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, url: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;poster-1280.webp&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">              ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          ],</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          alt: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Youtube Alt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">          title: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Youtube Title&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  methods: {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    onPlaying</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Youtube Player playing!&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="properties" tabindex="-1">Properties <a class="header-anchor" href="#properties" aria-label="Permalink to &quot;Properties&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  id</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;youtube-id&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  autoplay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  host</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;https://www.youtube-nocookie.com&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  config</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: { … }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>All properties except <code>poster</code> are identical to <code>SpeedkitYoutube</code>.</p><p>Learn more about <a href="/v1/components/experimental/speedkit-youtube.html#events"><code>SpeedkitYoutube</code> (Experimental) - Properties</a>.</p><h3 id="poster" tabindex="-1"><code>poster</code> <a class="header-anchor" href="#poster" aria-label="Permalink to &quot;\`poster\`&quot;">​</a></h3>`,13),c=s("code",null,"Object",-1),u=s("a",{href:"/v1/components/speedkit-picture.html"},"SpeedkitPicture",-1),F=s("p",null,"Poster is displayed as long as the player is not playing.",-1),m=s("h2",{id:"events",tabindex:"-1"},[i("Events "),s("a",{class:"header-anchor",href:"#events","aria-label":'Permalink to "Events"'},"​")],-1),b=s("p",null,[i("More on events at "),s("a",{href:"/v1/components/experimental/speedkit-youtube.html#events"},[s("code",null,"SpeedkitYoutube"),i(" (Experimental) - Events")]),i(".")],-1);function C(a,f,B,_,v,x){const n=t("badge");return r(),p("div",null,[s("h1",o,[i(l(a.$frontmatter.title)+" ",1),g]),y,s("ul",null,[s("li",null,[i("Type: "),c,i(" The "),u,i(" is used as the configuration. "),s("ul",null,[s("li",null,[h(n,null,{default:k(()=>[i("required")]),_:1})])])])]),F,m,b])}const P=e(d,[["render",C]]);export{S as __pageData,P as default};
