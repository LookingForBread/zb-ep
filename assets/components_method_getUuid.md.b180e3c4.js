import{_ as s,c as n,o as a,a as e}from"./app.91c50ef4.js";const A=JSON.parse('{"title":"getUUID \u83B7\u53D6 UUID","description":"","frontmatter":{},"headers":[],"relativePath":"components/method/getUuid.md"}'),o={name:"components/method/getUuid.md"},p=e(`<h1 id="getuuid-\u83B7\u53D6-uuid" tabindex="-1">getUUID \u83B7\u53D6 UUID <a class="header-anchor" href="#getuuid-\u83B7\u53D6-uuid" aria-hidden="true">#</a></h1><div class="language-javascript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre><code><span class="line"><span style="color:#676E95;">//\u751F\u6210UUID</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">getCurrentInstance</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> proxy </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">getCurrentInstance</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">let</span><span style="color:#A6ACCD;"> uuid </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> proxy</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">$util</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getUUID</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,2),l=[p];function t(r,c,D,i,y,F){return a(),n("div",null,l)}const C=s(o,[["render",t]]);export{A as __pageData,C as default};
