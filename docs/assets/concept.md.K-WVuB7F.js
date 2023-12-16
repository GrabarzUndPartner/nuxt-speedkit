import{_ as t,o as i,c as o,k as e,a as n,t as r,R as s}from"./chunks/framework.F0Jkbgo1.js";const v=JSON.parse('{"title":"Concept","description":"","frontmatter":{"title":"Concept"},"headers":[],"relativePath":"concept.md","filePath":"concept.md"}'),l={name:"concept.md"},h={id:"frontmatter-title",tabindex:"-1"},d=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{$frontmatter.title}}"'},"​",-1),c=s('<h2 id="current-situation" tabindex="-1">Current Situation <a class="header-anchor" href="#current-situation" aria-label="Permalink to &quot;Current Situation&quot;">​</a></h2><p>The loading behavior of webpages based on NuxtJS is designed in such a way that all necessary Javascript resources are preloaded and directly initialized with the initial load of the page. However, this behavior creates a negative impact on the Lighthouse Performance Score (TTI) for larger pages that have an increased initial load of additional resources, such as fonts, images, plugins, modules (@nuxtjs/i18n, ...).</p><h2 id="excursus" tabindex="-1">Excursus <a class="header-anchor" href="#excursus" aria-label="Permalink to &quot;Excursus&quot;">​</a></h2><p>The Lighthouse Test is not a tool to make a general statement about the quality of a website programming. Lighthouse rather tries to map a metric for the usability of a page from the user&#39;s point of view. This includes accessibility, best practices, SEO and of course performance.</p><p>This last point is often misinterpreted by developers. If you want to implement features that increase usability for the user (interactions/more complex animations, ...), this will always have an impact on performance in the Lighthouse Test for larger website projects, as the corresponding Javascript must be loaded for this. Finally, Lighthouse does also not rate the design, but the accessibility (size of click areas, etc.) of a website. You should therefore not ask yourself the following question: &quot;How can I fully optimize my JavaScript to achieve a Lighthouse score of 100/100?&quot;. You have to ask yourself much more the question: &quot;What is especially important to a user with low bandwidth or weak hardware on my site?&quot;.</p><p>The answer to this is relatively simple: the content must be accessible and you must be able to get to the information you need quickly.</p><p>No more and no less.</p><p>The user doesn&#39;t need any fancy slider animations and parallax effects that can only be implemented with certain libraries. Or a softload mechanism to get to more pages in a more elegant and animated way, but which initially needs an increased amount of javascript logic. All he wants is that information is retrievable reasonably fast and he can click through the presence.</p><h2 id="problem" tabindex="-1">Problem <a class="header-anchor" href="#problem" aria-label="Permalink to &quot;Problem&quot;">​</a></h2><p>The good news is that the NuxtJS SSR build provides the right foundation. The content is already in the form of HTML and CSS and can be used without Javascript. But what is missing</p><ul><li>is a fully automated preload logic that allows component and viewport based handling and prioritization of the individual resources (FCP, LCP, CLS)</li><li>is a logic that enables a perfomance-oriented initialization of the javascript (TTI, TBT)</li></ul><p>These two central points are handled by <strong>Nuxt Speedkit</strong> and enable a fast and resource-saving loading behavior of the website.</p><h2 id="approach" tabindex="-1">Approach <a class="header-anchor" href="#approach" aria-label="Permalink to &quot;Approach&quot;">​</a></h2><p>Over a longer period of time, we analyzed the Google Lighthouse test in more detail and approached the topic with the help of use cases. We did not start with the best case for page content (one image, one font, minimal javascript), but with the worst case (many images, many fonts, large Javascript files, ...). So we avoided to develop only a solution for simple SinglePages. Our claim was much more to create a generalistic, performant solution even with a CMS connection and dynamic component compositions per page. All our thoughts are based on <a href="https://www.slideshare.net/patrickmeenan/http2-prioritization" target="_blank" rel="noreferrer">HTTP/2 request prioritization</a> and the lazy hydration approach. Initial resources are prioritized by preload and all further data is reloaded viewport-based.</p><h2 id="insights-solutions" tabindex="-1">Insights &amp; Solutions <a class="header-anchor" href="#insights-solutions" aria-label="Permalink to &quot;Insights &amp; Solutions&quot;">​</a></h2><p>During the tests, we gained the following insights, which we would like to share with you, but which also allow us to draw conclusions regarding the performance optimization of the initial loading process and which have been incorporated into the <strong>Nuxt Speedkit</strong> solution.</p><h3 id="critical-render-path" tabindex="-1">Critical Render Path <a class="header-anchor" href="#critical-render-path" aria-label="Permalink to &quot;Critical Render Path&quot;">​</a></h3><p>The <a href="https://developers.google.com/web/fundamentals/performance/critical-rendering-path" target="_blank" rel="noreferrer">critical render path</a> is the core of a high-performance and efficient loading and rendering behavior of a website. It is important that components and resources in the viewport are loaded and executed with priority so that the user can be provided with a functioning page as quickly as possible. A browser is not able to recognize this fully automatically to dynamically adapt the loading behavior. Some attempts have been made in the past to systematically identify the critical render path.However, this has the consequence that every generated page in a virtual browser has to be analyzed in given viewport sizes, which slows down the deployment process and makes it more error-prone. For this reason, we (the developers) will be forced to provide the build process with appropriate hints in the form of a Critical Attribute on the affected component, so that an automated optimization by preloads, lazy hydration, etc. can be performed in response.</p><h3 id="font-loading" tabindex="-1">Font Loading <a class="header-anchor" href="#font-loading" aria-label="Permalink to &quot;Font Loading&quot;">​</a></h3><p>Fonts are the great mystery on the Internet. For more complex designs it is not uncommon that more than 6 font files have to be loaded. It would be desirable if there were many more variable fonts, but the reality is usually different. Often, developers are forced to register tons of fonts with different font styles. So it can happen that the website needs a total count of 12 font files, which have to be loaded initially to achieve the right visual result on the whole page.</p><p>This is a real performance problem. If you look for solutions, you like to hear</p><ul><li>don&#39;t use WebFonts that have to be loaded</li><li>use another optimized font</li><li>reduce the number of used fonts</li><li>embed the fonts via Base64</li></ul><p>You will find some articles about font loading. But most of them are more than 3 years old. Summary: not much happened here. A nice and recommendable list of different strategies can be found at <a href="https://github.com/zachleat/web-font-loading-recipes" target="_blank" rel="noreferrer">web-font-loading-recipes</a> or <a href="https://www.zachleat.com/web/comprehensive-webfonts/" target="_blank" rel="noreferrer">comprehensive-webfonts</a>. From this it can be deduced that there is still no universal solution to the problem. However, it is possible to approach the issue very efficiently by using a preload strategy and setting classes accordingly. However, this does not make the handling of the fonts any easier. On the one hand, the preloads have to be defined per page and on the other hand, the CSS in the respective component has to be activated with the corresponding font declaration per class on demand. This is manageable for smaller projects in a 1 person team. But if several people are working in parallel, it can quickly become a nightmare. This will inevitably lead to the fact that the approach will not be accepted by the team and the optimization will be optimized out of the project in the long run.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>A few words about Google Fonts: If possible, the FontFaces should always be included directly as Woff/Woff2 files via inline style. The loading mechanism via external CSS file, as it is the case with Google Fonts, creates an additional network roundtrip, which delays the loading of the actual font files.</p></div><p>The strategy mentioned above makes sense, but is hardly implementable with the current tools. For this reason, we are introducing Directive <code>v-font</code>, which takes care of the outlined behavior in a fully automated way and thus represents a truly relevant solution even on larger projects. Combined with the lazy hydration approach, the relevant fonts can be declared and loaded per component. The preloads are controlled via the critical attribute. With the help of this loading strategy, a FOUT (flash of unstyled text) and CLS can be massively reduced or eliminated. If no javascript is activated on the end device, all fonts are automatically activated via CSS.</p><h3 id="image-loading" tabindex="-1">Image Loading <a class="header-anchor" href="#image-loading" aria-label="Permalink to &quot;Image Loading&quot;">​</a></h3><p>For image compression and different image formats, the module <a href="https://marquez.co/docs/nuxt-optimized-images/" target="_blank" rel="noreferrer">nuxt-optimized-images</a> was popularly used in the nuxt world in the past. The downside, however, is that this approach is not particularly CMS and deployment friendly. With each image change, a full build process had to be initiated. For this reason, we use the <a href="https://image.NuxtJS.org" target="_blank" rel="noreferrer">nuxt-image</a> module, as this takes advantage of a change in NuxtJS as of version 2.13.0. In this version update, the build was split into two separate processes (javascript compilation + page generation). With <a href="https://marquez.co/docs/nuxt-optimized-images/" target="_blank" rel="noreferrer">nuxt-optimized-images</a> the full build process had to be run for every image change. This is no longer the case with <a href="https://image.NuxtJS.org" target="_blank" rel="noreferrer">nuxt-image</a>. Here only the page generation process is necessary. As a result, deployment times for all content changes can be massively reduced.</p><p>We use the module in its complete form. However, we have redeveloped the nuxt-image and nuxt-picture components, as the current version does not fully meet our requirements. For example, we lacked an appropriate preloading and lazy hydration strategy. Although there is a native loading attribute on the image element that allows prioritization, the use for websites with a lot of images is still not optimal, because the <a href="https://web.dev/browser-level-image-lazy-loading/#improved-data-savings-and-distance-from-viewport-thresholds" target="_blank" rel="noreferrer">distance-from-viewport threshold</a> is still too generous and the loading performance can deteriorate unintentionally. For this we have implemented a corresponding SEO-compliant alternative, which loads the images only when the viewport is reached, but also provides the image sources for search engines via no-script tag. This way all relevant images can be displayed even if Javascript is disabled. Furthermore you can also define multiple image sources in the picture, so it is possible to display an image in portait mode with a 9/16 aspect-ratio (multiple renditions) and in landscape mode with a 16/9 aspect-ratio (multiple renditions).</p><h3 id="javascript-loading" tabindex="-1">Javascript Loading <a class="header-anchor" href="#javascript-loading" aria-label="Permalink to &quot;Javascript Loading&quot;">​</a></h3><p>NuxtJS follows the approach to load the core files (page, app, payload, vendor, state, etc.) as fast and efficient as possible via (module-)preload from the client. This also makes total sense if you want to deliver an SPA. For the SSR build, however, we modified the delivery a bit. The many parallel downloads (fonts, images, js, ...) have a negative impact from a performance perspective. This effect increases when the javascript files grow in size due to modules and plugins. It would make sense if the initial package is kept small and only the absolutely necessary resources that can trigger the further initialization process are transferred via dynamic import. This leaves enough bandwidth to load the remaining resources (fonts, images).</p><p>This loading behavior only makes sense with an SSR build, since the full page-related static content can already be delivered and rendered with the HTML and the included CSS. This means that the user does not notice any time lags and the page is still usable. Another advantage: If the bandwidth is low, a basic functionality of the page (links, ...) can be ensured thanks to the SSR build.</p><h3 id="requestidlecallback" tabindex="-1">RequestIdleCallback <a class="header-anchor" href="#requestidlecallback" aria-label="Permalink to &quot;RequestIdleCallback&quot;">​</a></h3><p>The <a href="https://developer.mozilla.org/en-US/docs/Web/API/IdleDeadline/timeRemaining" target="_blank" rel="noreferrer">TimeRemaining function</a> of the IdleDeadline object continuously returns a value &lt;= 10 in the Lighthouse Test (simulated Motorola G4). This can be seen as an indicator for weak hardware on the end device and allows the following conclusion. If there are not enough hardware resources available to execute the JavaScript quickly, this process is suppressed. Who needs optional functionality that takes a long time to initialize and possibly leads to a temporary freeze in the browser.</p><p>We use this effect by executing the intial javascript process and the component initialization in the RequestIdleCallback, if we get a time slot &gt;10ms from the device. Hereby we achieve a massive reduction of the TTI/TBT in the Lighthouse Test and on weak hardware, because the javascript execution is simply paused in the worst case until sufficient resources are available. This also prevents blocking of the MainThread.</p><p>Side effect: The timeslots in the Google Lighthouse Test are always &lt;= 10ms, so no javascript will be initialized.</p><h3 id="speedkitlayer" tabindex="-1">SpeedkitLayer <a class="header-anchor" href="#speedkitlayer" aria-label="Permalink to &quot;SpeedkitLayer&quot;">​</a></h3><p>With the solutions described above, the user gets a functioning webpage displayed very quickly. However, the following situation can also occur on the end device:</p><ul><li>no Javascript enabled</li><li>reduced bandwidth</li><li>weak hardware</li><li>unsupported browser</li></ul><p>The reduced bandwidth or weak hardware should get a focus especially when larger amounts of data have to be transferred and executed, e.g. a ThreeJS component with more complex 3D objects. In this case, we should inform the user that the experience will be negatively affected and that there may be waiting times.</p><p>For this purpose, we provide an InfoLayer that is displayed when a minimum FCP time is exceeded, when the number of available CPU cores falls below a minimum level, when javascript is disabled or the users opens the page by an unsupported browser. The user can decide in this dialog box whether he wants to load the remaining resources despite the restrictions. If the user declines this dialog, only the fonts and images for the page will be loaded and no further javascript will be loaded or executed.</p><h3 id="conclusion" tabindex="-1">Conclusion <a class="header-anchor" href="#conclusion" aria-label="Permalink to &quot;Conclusion&quot;">​</a></h3><p>The findings and solutions described above have been incorporated and systematized in the <strong>Nuxt Speedkit</strong> module. Only in combination can they unfold their full functionality and ensure an overall optimization of the loading behavior. Overall we have reduced the following timing metrics ...</p><ul><li>FCP</li><li>LCP</li><li>TTI</li><li>TBT</li></ul><p>With this module we enable every developer in the NuxtJS context to achieve a Lighthouse Performance Score 100/100 and drastically reduce the development time for website performance optimization.</p>',44);function p(a,u,m,f,g,b){return i(),o("div",null,[e("h1",h,[n(r(a.$frontmatter.title)+" ",1),d]),c])}const y=t(l,[["render",p]]);export{v as __pageData,y as default};
