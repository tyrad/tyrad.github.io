(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{279:function(t,e,l){var content=l(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(45).default)("c5f66cce",content,!0,{sourceMap:!1})},289:function(t,e,l){"use strict";l.r(e);var r={name:"Tree",props:{treeData:{type:Array,default:function(){return[]}}}},n=(l(293),l(22)),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ul",t._l(t.treeData,(function(e){return l("li",{key:e.folderName,staticClass:"directory"},[l("a",{attrs:{href:"#","data-role":"directory"}},[l("fa",{staticClass:"fa",attrs:{icon:["fas","angle-down"]}}),t._v("\n      "+t._s(e.folderName)+"\n    ")],1),t._v(" "),l("ul",{staticStyle:{display:"block"}},[t._l(e.articles,(function(e){return l("li",{key:e.title,staticClass:"file"},[l("NuxtLink",{staticClass:"title",attrs:{to:{name:"wiki-content-slug",params:{slug:e.slug,path:e.path}}}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)})),t._v(" "),l("li",{staticClass:"directory"},[e.children&&e.children.length>0?l("Tree",{attrs:{"tree-data":e.children}}):t._e()],1)],2)])})),0)}),[],!1,null,"7aea14c0",null);e.default=component.exports;installComponents(component,{Tree:l(289).default})},293:function(t,e,l){"use strict";l(279)},294:function(t,e,l){var r=l(44)(!1);r.push([t.i,"a[data-v-7aea14c0]{font-weight:400;word-break:break-all}a[data-v-7aea14c0],main.colorscheme-dark a[data-v-7aea14c0]{color:inherit}li[data-v-7aea14c0]{margin:5px;line-height:1.5}li ul[data-v-7aea14c0]{padding-left:0}",""]),t.exports=r}}]);