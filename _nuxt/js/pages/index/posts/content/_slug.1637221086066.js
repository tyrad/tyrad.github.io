(window.webpackJsonp=window.webpackJsonp||[]).push([[15,2,7],{287:function(t,e,r){"use strict";r.r(e);r(44);var n={name:"ArticleHeader",props:{article:{type:Object,default:{}},isWikiHeader:{type:Boolean,default:!1}},computed:{wikiCategory:function(){var path=this.article.path;return path=(path=path.slice("/wiki/".length)).substr(0,path.indexOf("/")),console.log(path),path}}},o=r(22),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("div",{staticClass:"post-title"},[r("h1",{staticClass:"title"},[t._v(t._s(t.article.title))])]),t._v(" "),r("div",{staticClass:"post-meta"},[r("div",{staticClass:"date"},[r("span",{staticClass:"posted-on"},[r("fa",{staticClass:"fa",attrs:{icon:["fa","calendar-alt"]}}),t._v(" "),r("time",{attrs:{datetime:"2020-06-25 11:32:22"}},[t._v("\n                "+t._s(t._f("toParseTime")(t.article.date))+"\n              ")])],1)]),t._v(" "),!t.isWikiHeader&&t.article.categories&&t.article.categories.length>0?r("div",{staticClass:"categories"},[r("fa",{staticClass:"fa",attrs:{icon:["fa","folder"]}}),t._v(" "),t._l(t.article.categories,(function(e,n){return r("span",{key:n},[r("NuxtLink",{attrs:{to:{name:"index-categories-slug",params:{slug:e}}}},[t._v(" "+t._s(e)+" ")]),t._v(" "),n!==t.article.categories.length-1?r("span",{staticClass:"separator"},[t._v("•")]):t._e()],1)}))],2):r("div",{staticClass:"categories"},[r("fa",{staticClass:"fa",attrs:{icon:["fa","folder"]}}),t._v(" "),r("NuxtLink",{attrs:{to:{name:"wiki",hash:"#"+t.wikiCategory}}},[t._v(" "+t._s(t.wikiCategory))])],1),t._v(" "),t.article.tags&&t.article.tags.length>0?r("div",{staticClass:"tags"},[r("fa",{staticClass:"fa",attrs:{icon:["fa","tag"]}}),t._v(" "),t._l(t.article.tags,(function(e,n){return r("span",{key:n},[r("NuxtLink",{attrs:{to:{name:"index-tags-slug",params:{slug:e}}}},[t._v(" "+t._s(e)+" ")]),t._v(" "),n!==t.article.tags.length-1?r("span",{staticClass:"separator"},[t._v("•")]):t._e()],1)}))],2):t._e()])])}),[],!1,null,"17b8de7f",null);e.default=component.exports},295:function(t,e,r){var content=r(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(52).default)("03540e68",content,!0,{sourceMap:!1})},302:function(t,e,r){"use strict";r(295)},303:function(t,e,r){var n=r(51)(!1);n.push([t.i,".flex[data-v-28cd3b67]{display:flex}.justify-between[data-v-28cd3b67]{justify-content:space-between}",""]),t.exports=n},309:function(t,e,r){"use strict";r.r(e);var n={name:"PrevNext",props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}},routerName:{type:String,default:"index-posts-content-slug"}}},o=(r(302),r(22)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex justify-between"},[t.prev?r("NuxtLink",{staticClass:"font-bold text-primary hover:underline",attrs:{to:{name:t.routerName,params:{slug:t.prev.slug}}}},[t._v("\n    上一篇"+t._s(t.prev.title)+"\n  ")]):r("span",[t._v(" ")]),t._v(" "),t.next?r("NuxtLink",{staticClass:"font-bold hover:underline",attrs:{to:{name:t.routerName,params:{slug:t.next.slug}}}},[t._v("\n    下一篇"+t._s(t.next.title)+"\n  ")]):r("span",[t._v(" ")])],1)}),[],!1,null,"28cd3b67",null);e.default=component.exports},349:function(t,e,r){"use strict";r.r(e);var n=r(23),o=r(8),l=(r(39),r(46),r(24),r(44),r(16),r(30),r(38),r(53),r(54),r(29),r(45),r(287)),c=r(135);function d(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var h={components:{ArticleHeader:l.default},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,l,c,d,article,f,h,v,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,o=t.params,l=t.error,c=o.scrollTop,e.next=4,r("articles",{deep:!0}).where({slug:o.slug}).limit(1).fetch();case 4:return 0===(d=e.sent).length&&l({statusCode:404,message:""}),article=d[0],e.next=9,r("articles",{deep:!0}).only(["title","slug"]).sortBy("date","asc").surround(o.slug).fetch();case 9:return f=e.sent,h=Object(n.a)(f,2),v=h[0],m=h[1],e.abrupt("return",{article:article,prev:v,next:m,scrollTop:c});case 14:case"end":return e.stop()}}),e)})))()},data:function(){return{pageLoaded:!1,hTags:[]}},computed:{slug:function(){return this.article.slug},tocVisible:function(){return!(!this.article||!0===this.article.hideToc||!this.article.toc||0===this.article.toc.length||!1)}},watch:{slug:function(){var t=this;this.pageLoaded=!0,this.$nextTick((function(){t.handleTocFixed()}))}},mounted:function(){this.hashScrollInitial(),this.pageLoaded=!0,this.handleTocFixed()},destroyed:function(){window.removeEventListener("scroll",this.onScroll)},methods:{hashScrollInitial:function(){var t=this.$route.hash;if(t){var e=document.getElementById(decodeURI(t).substr(1));e&&window.scrollTo(0,e.offsetTop+this.$refs["body-wrapper"].offsetTop)}},handleTocFixed:function(){this.hTags=this.$refs.contents.querySelectorAll("h1,h2,h3,h4,h5"),window.addEventListener("scroll",this.onScroll),this.onScroll()},onScroll:function(){var t=this.$refs["body-wrapper"].offsetTop,e=this.$refs["toc-slider"];(document.documentElement.scrollTop||document.body.scrollTop)>t-15?e.classList.add("toc-fixed"):e.classList.remove("toc-fixed");var r=window.pageYOffset-t,n=Array.from(this.hTags).filter((function(i){return i.offsetTop<r}));if(0!==n.length){var o,l=n.pop(),f=d(e.querySelectorAll("a"));try{for(f.s();!(o=f.n()).done;){o.value.classList.remove("highlighted")}}catch(t){f.e(t)}finally{f.f()}var h=e.querySelector("a[href='#".concat(l.id,"']"));h&&(h.classList.add("highlighted"),Object(c.a)(h))}}}},v=r(22),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"container post"},[r("article",[r("ArticleHeader",{attrs:{article:t.article}}),t._v(" "),r("aside",{ref:"body-wrapper",attrs:{id:"body-wrapper"}},[r("div",{ref:"contents",staticClass:"body-content co-width-10",class:{"co-width-12":t.pageLoaded&&!t.tocVisible},attrs:{id:"contents"}},[r("nuxt-content",{attrs:{document:t.article}}),t._v(" "),r("prev-next",{attrs:{prev:t.prev,next:t.next}})],1),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.pageLoaded&&t.tocVisible,expression:"pageLoaded && tocVisible"}],staticClass:"sidebar co-width-2",staticStyle:{"padding-left":"12px"}},[r("div",{ref:"toc-slider",staticClass:"toc-fixed"},[r("nav",{attrs:{id:"TableOfContents"}},[r("ul",t._l(t.article.toc,(function(link){return r("li",{key:link.id,class:{"py-2":2===link.depth,"ml-2 pb-2":3===link.depth},style:{"text-indent":8*(link.depth-1)+"px"}},[r("a",{attrs:{href:"#"+link.id}},[t._v(" "+t._s(link.text)+" ")])])})),0)]),t._v(" "),r("a",{attrs:{href:"#",id:"tap-to-top"}},[r("fa",{attrs:{icon:["fa","arrow-up"]}})],1)])])])],1)])}),[],!1,null,"50af5a00",null);e.default=component.exports;installComponents(component,{ArticleHeader:r(287).default,PrevNext:r(309).default})}}]);