(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{285:function(t,e,n){"use strict";n.r(e);var l={name:"ArticleList",props:{preLink:{type:Object,default:function(){return null}},title:{type:String,default:""},articles:{type:Array,default:function(){return[]}},routerName:{type:String,default:"index-posts-content-slug"}}},r=n(22),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container list"},[t.title?n("h1",{staticClass:"title"},[t.preLink?n("NuxtLink",{attrs:{to:{name:t.preLink.path}}},[t._v("\n      "+t._s(t.preLink.name)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1):t._e(),t._v(" "),n("ul",t._l(t.articles,(function(e){return n("li",{key:e.title},[n("span",{staticClass:"date"},[t._v(t._s(t._f("toParseTime")(e.date)))]),t._v(" "),n("NuxtLink",{staticClass:"title",attrs:{to:{name:t.routerName,params:{slug:e.slug,path:e.path}}}},[t._v("\n        "+t._s(e.title)+"\n      ")])],1)})),0),t._v(" "),t._t("default")],2)}),[],!1,null,"2e7aaca2",null);e.default=component.exports}}]);