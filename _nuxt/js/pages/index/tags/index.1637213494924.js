(window.webpackJsonp=window.webpackJsonp||[]).push([[19,5],{282:function(t,e,r){var content=r(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("a1325b18",content,!0,{sourceMap:!1})},283:function(t,e,r){"use strict";r(282)},284:function(t,e,r){var n=r(51)(!1);n.push([t.i,".column-flex[data-v-2b5223c8]{display:flex;flex-direction:column}",""]),t.exports=n},286:function(t,e,r){"use strict";r.r(e);var n={name:"List",props:{title:{type:String,default:""},flexList:{type:Boolean,default:!1}}},o=(r(283),r(22)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container list",class:{"column-flex":t.flexList}},[t.title?r("h1",{staticClass:"title"},[t._v("\n    "+t._s(t.title)+"\n  ")]):t._e(),t._v(" "),t._t("default")],2)}),[],!1,null,"2b5223c8",null);e.default=component.exports},290:function(t,e,r){"use strict";var n=r(2),o=r(13),c=r(30),l=r(19),f=r(4),d=r(291),v=r(136),h=r(292),m=r(293),x=r(79),_=r(294),w=[],y=w.sort,k=f((function(){w.sort(void 0)})),C=f((function(){w.sort(null)})),E=v("sort"),A=!f((function(){if(x)return x<70;if(!(h&&h>3)){if(m)return!0;if(_)return _<603;var code,t,e,r,n="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)w.push({k:t+r,v:e})}for(w.sort((function(a,b){return b.v-a.v})),r=0;r<w.length;r++)t=w[r].k.charAt(0),n.charAt(n.length-1)!==t&&(n+=t);return"DGBEFHACIJK"!==n}}));n({target:"Array",proto:!0,forced:k||!C||!E||!A},{sort:function(t){void 0!==t&&o(t);var e=c(this);if(A)return void 0===t?y.call(e):y.call(e,t);var r,n,f=[],v=l(e.length);for(n=0;n<v;n++)n in e&&f.push(e[n]);for(r=(f=d(f,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:String(e)>String(r)?1:-1}}(t))).length,n=0;n<r;)e[n]=f[n++];for(;n<v;)delete e[n++];return e}})},291:function(t,e){var r=Math.floor,n=function(t,e){var l=t.length,f=r(l/2);return l<8?o(t,e):c(n(t.slice(0,f),e),n(t.slice(f),e),e)},o=function(t,e){for(var element,r,n=t.length,i=1;i<n;){for(r=i,element=t[i];r&&e(t[r-1],element)>0;)t[r]=t[--r];r!==i++&&(t[r]=element)}return t},c=function(t,e,r){for(var n=t.length,o=e.length,c=0,l=0,f=[];c<n||l<o;)c<n&&l<o?f.push(r(t[c],e[l])<=0?t[c++]:e[l++]):f.push(c<n?t[c++]:e[l++]);return f};t.exports=n},292:function(t,e,r){var n=r(64).match(/firefox\/(\d+)/i);t.exports=!!n&&+n[1]},293:function(t,e,r){var n=r(64);t.exports=/MSIE|Trident/.test(n)},294:function(t,e,r){var n=r(64).match(/AppleWebKit\/(\d+)\./);t.exports=!!n&&+n[1]},308:function(t,e,r){var content=r(322);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("1cfe0ec6",content,!0,{sourceMap:!1})},319:function(t,e,r){"use strict";var n=r(2),o=r(320),c=r(30),l=r(19),f=r(57),d=r(102);n({target:"Array",proto:!0},{flat:function(){var t=arguments.length?arguments[0]:void 0,e=c(this),r=l(e.length),n=d(e,0);return n.length=o(n,e,e,r,0,void 0===t?1:f(t)),n}})},320:function(t,e,r){"use strict";var n=r(80),o=r(19),c=r(25),l=function(t,e,source,r,f,d,v,h){for(var element,m=f,x=0,_=!!v&&c(v,h,3);x<r;){if(x in source){if(element=_?_(source[x],x,e):source[x],d>0&&n(element))m=l(t,e,element,o(element.length),m,d-1)-1;else{if(m>=9007199254740991)throw TypeError("Exceed the acceptable array length");t[m]=element}m++}x++}return m};t.exports=l},321:function(t,e,r){"use strict";r(308)},322:function(t,e,r){var n=r(51)(!1);n.push([t.i,".tag-wrap[data-v-708a719c]{text-align:center;margin:2rem}.tag-wrap .tag[data-v-708a719c]{font-size:1.8rem;flex:2;color:#333;font-weight:700;display:inline-block}.tag-wrap .tag+.tag[data-v-708a719c]{margin-left:2rem;margin-bottom:1rem}main.colorscheme-dark .tag[data-v-708a719c]{color:#dadada}@media (prefers-color-scheme:dark){main.colorscheme-auto .tag[data-v-708a719c]{color:#dadada}}",""]),t.exports=n},348:function(t,e,r){"use strict";r.r(e);var n=r(8),o=(r(319),r(41),r(33),r(290),r(45),{name:"Tags",asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,e.next=3,r("articles",{deep:!0}).only(["tags"]).fetch();case 3:return n=e.sent,e.abrupt("return",{tags:n});case 5:case"end":return e.stop()}}),e)})))()},computed:{sortedTags:function(){var t=this.tags.map((function(t){return t.tags||[]})).flat(),e={};t.forEach((function(t){e[t]=(e[t]||0)+1}));var r=[];for(var n in e)r.push({name:n,count:e[n]});return r.sort((function(a,b){return b.count-a.count})),r}}}),c=(r(321),r(22)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("List",{attrs:{title:"Tags"}},[r("div",{staticClass:"tag-wrap"},t._l(t.sortedTags,(function(e){return r("NuxtLink",{key:e.name,staticClass:"tag title",attrs:{to:{name:"index-tags-slug",params:{slug:e.name}}}},[t._v("\n      "+t._s(e.name)+"("+t._s(e.count)+")\n    ")])})),1)])}),[],!1,null,"708a719c",null);e.default=component.exports;installComponents(component,{List:r(286).default})}}]);