import{_ as s,c as t,o as e,a}from"./app.847af6fa.js";const A=JSON.parse('{"title":"setObjectValue \u52A8\u6001\u6570\u7EC4\u8D4B\u503C(object)","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53C2\u6570","slug":"\u53C2\u6570","link":"#\u53C2\u6570","children":[]}],"relativePath":"components/method/setObjectValue.md"}'),n={name:"components/method/setObjectValue.md"},l=a(`<h1 id="setobjectvalue-\u52A8\u6001\u6570\u7EC4\u8D4B\u503C-object" tabindex="-1">setObjectValue \u52A8\u6001\u6570\u7EC4\u8D4B\u503C(object) <a class="header-anchor" href="#setobjectvalue-\u52A8\u6001\u6570\u7EC4\u8D4B\u503C-object" aria-hidden="true">#</a></h1><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">//\u5411\u52A8\u6001\u7EC4\u4EF6\u4E2D\u586B\u5145\u503C</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getCurrentInstance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> proxy </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getCurrentInstance</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">proxy</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$util</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setObjectValue</span><span style="color:#A6ACCD;">(source</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> arg)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u53C2\u6570" tabindex="-1">\u53C2\u6570 <a class="header-anchor" href="#\u53C2\u6570" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:center;">\u540D\u79F0</th><th style="text-align:center;">\u63CF\u8FF0</th><th>\u5FC5\u586B</th><th style="text-align:center;">\u9ED8\u8BA4\u503C</th><th>\u7C7B\u578B</th></tr></thead><tbody><tr><td style="text-align:center;">source</td><td style="text-align:center;">\u5F85\u8D4B\u503C\u7684\u6570\u636E\u6E90</td><td>\u662F</td><td style="text-align:center;">\u65E0</td><td>Array</td></tr><tr><td style="text-align:center;">arg</td><td style="text-align:center;">\u53D6\u503C\u7684\u6570\u636E\u6E90</td><td>\u662F</td><td style="text-align:center;">\u65E0</td><td>Object</td></tr></tbody></table>`,4),o=[l];function p(r,c,d,i,y,D){return e(),t("div",null,o)}const C=s(n,[["render",p]]);export{A as __pageData,C as default};