(window.webpackJsonp=window.webpackJsonp||[]).push([[26,2,8],{287:function(t,e,r){"use strict";r.r(e);r(44);var n={name:"ArticleHeader",props:{article:{type:Object,default:{}},isWikiHeader:{type:Boolean,default:!1}},computed:{wikiCategory:function(){var path=this.article.path;return path=(path=path.slice("/wiki/".length)).substr(0,path.indexOf("/")),console.log(path),path}}},o=r(22),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"post-title"},[r("h1",{staticClass:"title"},[t._v(t._s(t.article.title))])]),t._v(" "),r("div",{staticClass:"post-meta"},[r("div",{staticClass:"date"},[r("span",{staticClass:"posted-on"},[r("fa",{staticClass:"fa",attrs:{icon:["fa","calendar-alt"]}}),t._v(" "),r("time",{attrs:{datetime:"2020-06-25 11:32:22"}},[t._v("\n                "+t._s(t._f("toParseTime")(t.article.date))+"\n              ")])],1)]),t._v(" "),!t.isWikiHeader&&t.article.categories&&t.article.categories.length>0?r("div",{staticClass:"categories"},[r("fa",{staticClass:"fa",attrs:{icon:["fa","folder"]}}),t._v(" "),t._l(t.article.categories,(function(e,n){return r("span",{key:n},[r("NuxtLink",{attrs:{to:{name:"index-categories-slug",params:{slug:e}}}},[t._v(" "+t._s(e)+" ")]),t._v(" "),n!==t.article.categories.length-1?r("span",{staticClass:"separator"},[t._v("•")]):t._e()],1)}))],2):r("div",{staticClass:"categories"},[r("fa",{staticClass:"fa",attrs:{icon:["fa","folder"]}}),t._v(" "),r("NuxtLink",{attrs:{to:{name:"wiki",hash:"#"+t.wikiCategory}}},[t._v(" "+t._s(t.wikiCategory))])],1),t._v(" "),t.article.tags&&t.article.tags.length>0?r("div",{staticClass:"tags"},[r("fa",{staticClass:"fa",attrs:{icon:["fa","tag"]}}),t._v(" "),t._l(t.article.tags,(function(e,n){return r("span",{key:n},[r("NuxtLink",{attrs:{to:{name:"index-tags-slug",params:{slug:e}}}},[t._v(" "+t._s(e)+" ")]),t._v(" "),n!==t.article.tags.length-1?r("span",{staticClass:"separator"},[t._v("•")]):t._e()],1)}))],2):t._e()])])}),[],!1,null,"17b8de7f",null);e.default=component.exports},288:function(t,e,r){var content=r(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("613f2bb0",content,!0,{sourceMap:!1})},297:function(t,e,r){"use strict";r.r(e);var n=r(135),o={name:"Tree",props:{treeData:{type:Array,default:function(){return[]}},selected:{type:String,default:null}},watch:{selected:function(){}},mounted:function(){},methods:{updateScroll:function(){var t=document.getElementsByClassName("side-highlighted");t.length&&Object(n.a)(t[0])}}},c=(r(300),r(22)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",t._l(t.treeData,(function(e){return r("li",{key:e.folderName,staticClass:"directory"},[r("a",{attrs:{href:"#","data-role":"directory"}},[r("fa",{staticClass:"fa",attrs:{icon:["fa","angle-down"]}}),t._v("\n      "+t._s(e.folderName)+"\n    ")],1),t._v(" "),r("ul",{staticStyle:{display:"block"}},[t._l(e.articles,(function(e){return r("li",{key:e.title,staticClass:"file"},[r("NuxtLink",{staticClass:"title",class:{"side-highlighted":e.title===t.selected},attrs:{to:{name:"wiki-content-slug",params:{slug:e.slug,path:e.path}}}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)})),t._v(" "),r("li",{staticClass:"directory"},[e.children&&e.children.length>0?r("Tree",{attrs:{"tree-data":e.children,selected:t.selected}}):t._e()],1)],2)])})),0)}),[],!1,null,"358b86fc",null);e.default=component.exports;installComponents(component,{Tree:r(297).default})},298:function(t,e,r){"use strict";e.a={methods:{mxGoBack:function(){this.mxHasHistory()?this.$router.go(-1):this.$router.push("/")},mxHasHistory:function(){return window.history.length>2},mxGohome:function(){this.$router.push("/")}}}},299:function(t,e,r){"use strict";var n=r(23);r(47),r(100),r(16),r(29),r(39),r(44),r(30),r(46),r(24),r(38),r(53),r(54);function o(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){d=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(d)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}e.a={sortArticles:function(t){var e,r=[],c=o(t);try{for(c.s();!(e=c.n()).done;){var article=e.value,path=article.path,l=path.substr("/wiki/".length,path.length).split("/");l.pop();var d,f=r,h=o(l.entries());try{for(h.s();!(d=h.n()).done;){var v=Object(n.a)(d.value,2),m=v[0],p=v[1],y=this.getFolder(p,f);f=y.children,m===l.length-1&&y.articles.push(article)}}catch(t){h.e(t)}finally{h.f()}}}catch(t){c.e(t)}finally{c.f()}return r},getFolder:function(t,e){var r=e.filter((function(e){return e.folderName===t}));if(0===r.length){var n={folderName:t,articles:[],children:[]};return e.push(n),n}return r[0]}}},300:function(t,e,r){"use strict";r(288)},301:function(t,e,r){var n=r(51)(!1);n.push([t.i,"a[data-v-358b86fc]{font-weight:400;word-break:break-all;color:inherit}.side-highlighted[data-v-358b86fc]{color:#1565c0}main.colorscheme-dark a[data-v-358b86fc]{color:inherit}main.colorscheme-dark .side-highlighted[data-v-358b86fc]{color:#1565c0}li[data-v-358b86fc]{margin:5px;line-height:1.5}li ul[data-v-358b86fc]{padding-left:0}",""]),t.exports=n},307:function(t,e,r){var content=r(317);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("7d957ac6",content,!0,{sourceMap:!1})},316:function(t,e,r){"use strict";r(307)},317:function(t,e,r){var n=r(51)(!1);n.push([t.i,".wiki-content-aside[data-v-468ad0ce]{margin:0;padding-right:0;max-width:100%!important;padding-bottom:20px}",""]),t.exports=n},342:function(t,e,r){"use strict";r.r(e);var n=r(23),o=r(8),c=(r(45),r(39),r(46),r(24),r(44),r(16),r(30),r(38),r(53),r(54),r(29),r(287)),l=r(298),d=r(299),f=r(135);function h(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var m=function(){var t=Object(o.a)(regeneratorRuntime.mark((function t(e,r){var n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return(n=e.substring("/wiki/".length)).indexOf("/")>-1&&(n=n.substring(0,n.indexOf("/"))),t.next=4,r("wiki",{deep:!0}).only(["title","date","slug","path"]).fetch();case 4:return o=t.sent,c=d.a.sortArticles(o),t.abrupt("return",c.filter((function(t){return t.folderName===n})));case 7:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),y={components:{ArticleHeader:c.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,c,l,d,article,f,h,v,y,w;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,c=t.error,l=o.scrollTop,e.next=4,r("wiki",{deep:!0}).where({slug:o.slug}).limit(1).fetch();case 4:return 0===(d=e.sent).length&&c({statusCode:404,message:""}),article=d[0],e.next=9,m(article.dir,r);case 9:return f=e.sent,e.next=12,r("wiki",{deep:!0}).only(["title","slug","date"]).sortBy("date","asc").surround(o.slug).fetch();case 12:return h=e.sent,v=Object(n.a)(h,2),y=v[0],w=v[1],e.abrupt("return",{article:article,prev:y,next:w,scrollTop:l,sideCategory:f});case 17:case"end":return e.stop()}}),e)})))()},mixins:[l.a],data:function(){return{pageLoaded:!1,hTags:[]}},computed:{slug:function(){return this.article.slug},tocVisible:function(){return!(!this.article||!0===this.article.hideToc||!this.article.toc||0===this.article.toc.length||!1)}},watch:{slug:function(){var t=this;this.pageLoaded=!0,this.$nextTick((function(){t.handleTocFixed(),t.updateLeftSideSelected()}))}},mounted:function(){this.hashScrollInitial(),this.pageLoaded=!0,this.handleTocFixed(),this.updateLeftSideSelected()},destroyed:function(){window.removeEventListener("scroll",this.onScroll)},methods:{updateLeftSideSelected:function(){var t=document.getElementsByClassName("side-highlighted");t.length&&Object(f.a)(t[0])},clickToTop:function(){this.$refs["wiki-content"].scrollTop=0},hashScrollInitial:function(){var t=this.$route.hash;if(t){var e=document.getElementById(decodeURI(t).substr(1));e&&window.scrollTo(0,e.offsetTop+this.$refs["body-wrapper"].offsetTop)}},handleTocFixed:function(){this.hTags=this.$refs.contents.querySelectorAll("h1,h2,h3,h4,h5"),this.$refs["wiki-content"].addEventListener("scroll",this.onScroll),this.onScroll()},onScroll:function(){var t=this.$refs["body-wrapper"].offsetTop,e=this.$refs["toc-slider"],r=this.$refs["wiki-content"].scrollTop;r>t-15?e.classList.add("toc-fixed"):e.classList.remove("toc-fixed");var n=r-t,o=Array.from(this.hTags).filter((function(i){return i.offsetTop<n}));if(0!==o.length){var c,l=o.pop(),d=h(e.querySelectorAll("a"));try{for(d.s();!(c=d.n()).done;){c.value.classList.remove("highlighted")}}catch(t){d.e(t)}finally{d.f()}var v=e.querySelector("a[href='#".concat(l.id,"']"));v&&(v.classList.add("highlighted"),Object(f.a)(v))}}}},w=(r(316),r(22)),component=Object(w.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("div",{ref:"aside",staticClass:"wiki-category-aside"},[r("div",{staticClass:"navigation"},[r("div",{on:{click:t.mxGoBack}},[r("fa",{staticClass:"fa",attrs:{icon:["fa","arrow-left"]}}),t._v(" "),r("span",{staticStyle:{"margin-left":"8px"}},[t._v("Go back")])],1),t._v(" "),r("div",{staticStyle:{padding:"0 20px"},on:{click:t.mxGohome}},[t._v("\n        Home\n      ")])]),t._v(" "),r("Tree",{attrs:{treeData:t.sideCategory,selected:t.article.title}})],1),t._v(" "),r("div",{ref:"wiki-content",staticClass:"wiki-content-aside"},[r("section",{staticClass:"container post",staticStyle:{width:"100%"}},[r("article",[r("ArticleHeader",{attrs:{article:t.article}}),t._v(" "),r("aside",{ref:"body-wrapper",attrs:{id:"body-wrapper"}},[r("div",{ref:"contents",staticClass:"body-content co-width-10",class:{"co-width-12":t.pageLoaded&&!t.tocVisible},attrs:{id:"contents"}},[r("nuxt-content",{attrs:{document:t.article}})],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.pageLoaded&&t.tocVisible,expression:"pageLoaded && tocVisible"}],staticClass:"sidebar co-width-2",staticStyle:{"padding-left":"12px"}},[r("div",{ref:"toc-slider",staticClass:"toc-fixed"},[r("nav",{attrs:{id:"TableOfContents"}},[r("ul",t._l(t.article.toc,(function(link){return r("li",{key:link.id,class:{"py-2":2===link.depth,"ml-2 pb-2":3===link.depth},style:{"text-indent":8*(link.depth-1)+"px"}},[r("a",{attrs:{href:"#"+link.id}},[t._v(" "+t._s(link.text)+" ")])])})),0)]),t._v(" "),r("a",{attrs:{href:"#",id:"tap-to-top"},on:{click:t.clickToTop}},[r("fa",{attrs:{icon:["fa","arrow-up"]}})],1)])])])],1)])])])}),[],!1,null,"468ad0ce",null);e.default=component.exports;installComponents(component,{Tree:r(297).default,ArticleHeader:r(287).default})}}]);