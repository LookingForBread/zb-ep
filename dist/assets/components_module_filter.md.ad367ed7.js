import{_ as s,c as t,o as a,a as n}from"./app.847af6fa.js";const D=JSON.parse('{"title":"BaseFilter-\u641C\u7D22\u533A\u57DF","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u5C5E\u6027","slug":"\u5C5E\u6027","link":"#\u5C5E\u6027","children":[]},{"level":2,"title":"\u65B9\u6CD5","slug":"\u65B9\u6CD5","link":"#\u65B9\u6CD5","children":[]},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6","link":"#\u4E8B\u4EF6","children":[]}],"relativePath":"components/module/filter.md"}'),e={name:"components/module/filter.md"},l=n(`<h1 id="basefilter-\u641C\u7D22\u533A\u57DF" tabindex="-1">BaseFilter-\u641C\u7D22\u533A\u57DF <a class="header-anchor" href="#basefilter-\u641C\u7D22\u533A\u57DF" aria-hidden="true">#</a></h1><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">BaseFilter</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:filterOptions</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">props.tableOptions.baseFilterOptions</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">:showFilter</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">true</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#C792EA;">@doFilter</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">doFilter</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">BaseFilter</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u5C5E\u6027" tabindex="-1">\u5C5E\u6027 <a class="header-anchor" href="#\u5C5E\u6027" aria-hidden="true">#</a></h2><table><thead><tr><th>\u540D\u79F0</th><th style="text-align:center;">\u63CF\u8FF0</th><th style="text-align:right;">\u53EF\u9009\u503C</th><th style="text-align:right;">\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>filterOptions</td><td style="text-align:center;">\u52A8\u6001\u7EC4\u4EF6\u5185\u5BB9</td><td style="text-align:right;">[\u7EC4\u4EF6\u6570\u7EC4]</td><td style="text-align:right;">[]</td></tr><tr><td>showRest</td><td style="text-align:center;">\u662F\u5426\u663E\u793A\u91CD\u7F6E\u6309\u94AE</td><td style="text-align:right;">Boolean</td><td style="text-align:right;">false</td></tr></tbody></table><h2 id="\u65B9\u6CD5" tabindex="-1">\u65B9\u6CD5 <a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a></h2><table><thead><tr><th>\u540D\u79F0</th><th style="text-align:center;">\u63CF\u8FF0</th><th style="text-align:right;">\u53C2\u6570\u7C7B\u578B</th></tr></thead><tbody><tr><td>doFilter</td><td style="text-align:center;">\u6267\u884C\u641C\u7D22</td><td style="text-align:right;">null</td></tr><tr><td>clearFilter</td><td style="text-align:center;">\u6E05\u7A7A\u641C\u7D22\u6761\u4EF6</td><td style="text-align:right;">null</td></tr></tbody></table><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">//\u6DFB\u52A0ref</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">BaseFilter</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">filter</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#FFCB6B;">BaseFilter</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;">//js</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> filter </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">filter</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">doFilter</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">filter</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">clearFilter</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th>\u540D\u79F0</th><th style="text-align:center;">\u63CF\u8FF0</th><th style="text-align:right;">\u53EF\u9009\u503C</th></tr></thead><tbody><tr><td>doFilter</td><td style="text-align:center;">\u70B9\u51FB\u641C\u7D22\u89E6\u53D1</td><td style="text-align:right;">Function(data)</td></tr></tbody></table>`,9),r=[l];function p(o,c,i,d,y,F){return a(),t("div",null,r)}const b=s(e,[["render",p]]);export{D as __pageData,b as default};