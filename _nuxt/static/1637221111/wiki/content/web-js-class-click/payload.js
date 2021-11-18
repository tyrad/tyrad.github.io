__NUXT_JSONP__("/wiki/content/web-js-class-click", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at){return {data:[{},{article:{slug:L,title:M,layout:"page",date:N,collection:"js\u002Fts",toc:[{id:O,depth:P,text:Q},{id:R,depth:P,text:S}],body:{type:"root",children:[{type:b,tag:u,props:{},children:[{type:a,value:"原生js添加html添加class点击的n种实现方法"}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:"内容参考:  "},{type:b,tag:D,props:{href:"https:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F19655189\u002Fjavascript-click-event-listener-on-class",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"stackoverflow：JavaScript click event listener on class?"}]}]},{type:a,value:f},{type:b,tag:T,props:{id:O},children:[{type:b,tag:D,props:{href:"#%E6%96%B9%E6%B3%951",ariaHidden:U,tabIndex:V},children:[{type:b,tag:c,props:{className:[W,X]},children:[]}]},{type:a,value:Q}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:"通过选择器获取,然后添加时间"}]},{type:a,value:f},{type:b,tag:Y,props:{className:[Z]},children:[{type:b,tag:_,props:{className:[$,aa]},children:[{type:b,tag:E,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F1. 通过选择器获取class,任意"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:F}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x,y]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,o,j,m]},children:[{type:a,value:"querySelectorAll"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F旧的浏览器不识别`getElementsByClassName`,因此可能返回`undefined`. 如：IE6, IE7, IE8"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:F}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x,y]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,o,j,m]},children:[{type:a,value:ad}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F2. 遍历"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k,G]},children:[{type:a,value:"for"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:F}]},{type:a,value:" item "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"of"}]},{type:a,value:" x"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"\n    item"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,"method-variable","function-variable",o,j,m]},children:[{type:a,value:"onclick"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"clickHandler"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"\n        event"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,o,j,m]},children:[{type:a,value:"stopPropagation"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F若支持es6,也可以按如下方式循环"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"known-class-name","class-name"]},children:[{type:a,value:"Array"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,k,"module"]},children:[{type:a,value:"from"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"classname"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,o,j,m]},children:[{type:a,value:"forEach"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:b}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"\n    element"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,o,j,m]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:" myFunction"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:"此外注意:"}]},{type:a,value:f},{type:b,tag:"blockquote",props:{},children:[{type:a,value:f},{type:b,tag:u,props:{},children:[{type:b,tag:E,props:{},children:[{type:a,value:ad}]},{type:a,value:" doesnt return an array, but a HTMLCollection in most, or a NodeList is some browsers (Mozilla ref). Both of these types are Array-Like, (meaning that they have a length property and the objects can be accessed via their index), but are not strictly an Array or inherited from an Array. (meaning other methods that can be performed on an Array cannot be performed on these types)"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:T,props:{id:R},children:[{type:b,tag:D,props:{href:"#%E6%96%B9%E6%B3%952",ariaHidden:U,tabIndex:V},children:[{type:b,tag:c,props:{className:[W,X]},children:[]}]},{type:a,value:S}]},{type:a,value:f},{type:b,tag:u,props:{},children:[{type:a,value:"可以监听子元素"}]},{type:a,value:f},{type:b,tag:Y,props:{className:[Z]},children:[{type:b,tag:_,props:{className:[$,aa]},children:[{type:b,tag:E,props:{},children:[{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F举例1"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:J}]},{type:a,value:" base "},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,x,y]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,o,j,m]},children:[{type:a,value:"querySelector"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"'#base'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F the container for the variable content"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:J}]},{type:a,value:" selector "},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"'.card'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F any css selector for children"}]},{type:a,value:"\n\nbase"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,o,j,m]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F find the closest parent of the event target that"}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F matches the selector"}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:J}]},{type:a,value:" closest "},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:v}]},{type:a,value:" event"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,o,j,m]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"selector"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,k,G]},children:[{type:a,value:ai}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:"closest "},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"&&"}]},{type:a,value:" base"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,o,j,m]},children:[{type:a,value:"contains"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F handle class event"}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F\u002F举例2"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,x,y]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"body"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,o,j,m]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,k,G]},children:[{type:a,value:ai}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:aj},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"className"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"==="}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"'databox'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"\n        "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"alert"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"this"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:B},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:"false"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:f}]}]}]}]},dir:"\u002Fwiki\u002Fweb\u002Fjs",path:ak,extension:".md",createdAt:al,updatedAt:al},prev:{slug:"Spring-springboot-jsonconvert",title:"springboot之Json转换类型嵌套问题",date:"2019-06-17T00:00:00.000Z"},next:{slug:am,title:an,date:ao},scrollTop:ap,sideCategory:[{folderName:"web",articles:[{slug:"web-2018-01-12",title:"form表单重置",date:"2018-01-12T17:24:01.000Z",path:"\u002Fwiki\u002Fweb\u002Fweb-2018-01-12"},{slug:"web-2018-02-27",title:"免邀请码推广App思路(Web端参数与App数据同步)",date:"2018-02-27T11:08:27.000Z",path:"\u002Fwiki\u002Fweb\u002Fweb-2018-02-27"},{slug:"web-2018-09-03",title:"[转] h5: iPhoneX适配",date:"2018-09-03T00:00:00.000Z",path:"\u002Fwiki\u002Fweb\u002Fweb-2018-09-03"},{slug:"web-chrome-plugin-dev",title:"chrome插件开发: 撸一个灯塔答题辅助",date:"2018-02-26T16:04:08.000Z",path:"\u002Fwiki\u002Fweb\u002Fweb-chrome-plugin-dev"},{slug:"web-safarx",title:"iOS safari的input标签设置readonly仍然出现光标",date:"2017-07-31T15:45:21.000Z",path:"\u002Fwiki\u002Fweb\u002Fweb-safarx"},{slug:"web-外部js使用el表达式",title:"外部js使用el表达式",date:"2017-07-27T16:24:49.000Z",path:"\u002Fwiki\u002Fweb\u002Fweb-外部js使用el表达式"},{slug:"web-表单验证",title:"原生表单验证",date:"2017-07-21T09:42:59.000Z",path:"\u002Fwiki\u002Fweb\u002Fweb-表单验证"},{slug:"web-谷歌 HTML:CSS 规范",title:"(转)谷歌 HTML\u002FCSS 规范",date:"2017-01-13 21:23",path:"\u002Fwiki\u002Fweb\u002Fweb-谷歌 HTML:CSS 规范"}],children:[{folderName:"css",articles:[{slug:"css3-2018-12-09",title:"img自适应容器的方法,及图片尺寸的自适应(object-fit)",date:aq,path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-2018-12-09"},{slug:"css3-border-css3",title:"border(css3)",date:K,path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-border-css3"},{slug:"css3-calc",title:"calc()",date:"2017-07-31T16:18:08.000Z",path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-calc"},{slug:"css3-css-func",title:"函数",date:K,path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-css-func"},{slug:"css3-dom-scrollto",title:"dom元素滚动scrollTo",date:ar,path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-dom-scrollto"},{slug:"css3-display",title:"display",date:as,path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-display"},{slug:"css3-flex-review",title:"flex效果一览",date:as,path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-flex-review"},{slug:"css3-position",title:"position",date:"2018-07-22T20:31:50.000Z",path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-position"},{slug:"css3-text",title:"Text各种属性总结",date:K,path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-text"},{slug:"css3-v-center",title:"文字图片垂直方向居中",date:ar,path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-v-center"},{slug:"css3-vh",title:"vh",date:aq,path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-vh"},{slug:"css3-word-wrap",title:"word-wrap",date:"2017-06-28T14:55:35.000Z",path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-word-wrap"},{slug:"web-css-selector",title:"css选择器效果一览",date:"2019-04-29T00:00:00.000Z",path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fweb-css-selector"},{slug:"web-css-world",title:"《css世界》笔记",date:"2019-05-08T00:00:00.000Z",path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fweb-css-world"},{slug:"web-flex-shrink-demo",title:"flex实战:使用flex-shrink举例",date:"2019-11-24T00:00:00.000Z",path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fweb-flex-shrink-demo"},{slug:"web-html-anchor-positon",title:"调整锚点跳转偏移(转)",date:"2019-07-02T09:12:21.000Z",path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fweb-html-anchor-positon"}],children:[]},{folderName:"es6",articles:[{slug:"Object-keys",title:"Object.keys()、hasOwnProperty",date:"2021-09-16T22:08:19.000Z",path:"\u002Fwiki\u002Fweb\u002Fes6\u002FObject-keys"},{slug:"es6-js-sort",title:"sort()",date:at,path:"\u002Fwiki\u002Fweb\u002Fes6\u002Fes6-js-sort"},{slug:"es6-js模板字符串",title:"js模板字符串",date:"2017-07-19T16:17:25.000Z",path:"\u002Fwiki\u002Fweb\u002Fes6\u002Fes6-js模板字符串"},{slug:"findIndex",title:"find、findIndex、some",date:"2021-09-16T22:32:24.000Z",path:"\u002Fwiki\u002Fweb\u002Fes6\u002FfindIndex"}],children:[]},{folderName:"jQuery",articles:[{slug:"jQuery-center-select",title:"select居中方法(weui-select)",date:"2017-07-20T15:49:31.000Z",path:"\u002Fwiki\u002Fweb\u002FjQuery\u002FjQuery-center-select"},{slug:"jQuery-jQuery-data",title:"id绑定object",date:"2017-07-28T14:55:35.000Z",path:"\u002Fwiki\u002Fweb\u002FjQuery\u002FjQuery-jQuery-data"}],children:[]},{folderName:"js",articles:[{slug:"encodeuri-vs-encodeuricomponent",title:"encodeURI 和 encodeURIComponent",date:"2021-09-16T21:23:52.000Z",path:"\u002Fwiki\u002Fweb\u002Fjs\u002Fencodeuri-vs-encodeuricomponent"},{slug:"js-typeof",title:"typeof",date:at,path:"\u002Fwiki\u002Fweb\u002Fjs\u002Fjs-typeof"},{slug:L,title:M,date:N,path:ak},{slug:am,title:an,date:ao,path:"\u002Fwiki\u002Fweb\u002Fjs\u002Fweb-js-deep-copy"},{slug:"web-typeof-eval",title:"判断字符串对应的变量名是否存在",date:"2017-07-28T08:24:49.000Z",path:"\u002Fwiki\u002Fweb\u002Fjs\u002Fweb-typeof-eval"},{slug:"web-理解js中的this指向",title:"(转)彻底理解 JS 中 this 的指向",date:"2017-08-20T22:08:24.000Z",path:"\u002Fwiki\u002Fweb\u002Fjs\u002Fweb-理解js中的this指向"}],children:[]},{folderName:"调试技巧",articles:[{slug:"webstorm-debugger",title:"webstorm调试技巧",date:"2021-09-15T09:45:17.000Z",path:"\u002Fwiki\u002Fweb\u002F调试技巧\u002Fwebstorm-debugger"}],children:[]},{folderName:"适配",articles:[{slug:"适配-image-layout",date:"2020-12-11T03:43:24.000Z",title:"图片配置",path:"\u002Fwiki\u002Fweb\u002F适配\u002F适配-image-layout"},{slug:"适配-ios上数字键盘小数点键盘适配",date:"2020-10-26T07:33:23.000Z",title:"iOS上数字键盘、小数点键盘",path:"\u002Fwiki\u002Fweb\u002F适配\u002F适配-ios上数字键盘小数点键盘适配"},{slug:"适配-viewport适配布局",date:"2020-10-26T06:51:25.000Z",title:"Viewport适配布局(转载)",path:"\u002Fwiki\u002Fweb\u002F适配\u002F适配-viewport适配布局"},{slug:"适配-图片比例显示",date:"2020-12-15T04:13:50.000Z",title:"图片比例显示(padding)",path:"\u002Fwiki\u002Fweb\u002F适配\u002F适配-图片比例显示"}],children:[]}]}]}],fetch:{},mutations:ap}}("text","element","span","token","punctuation","\n"," ","(",")","function","keyword",".","property-access","comment","method",";","operator","string","{","}","p","=","\n  ","dom","variable","document","parameter","\n    ",",","a","code","let","control-flow","addEventListener","'click'","var","2019-04-30T00:00:00.000Z","web-js-class-click","html添加class点击的n种实现方法","2019-06-27T00:00:00.000Z","方法1",2,"方法1:","方法2","方法2:","h2","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","language-js","line-numbers"," x ","\".vdr-stick\"","getElementsByClassName","\n\n","event","target","closest","if","evt","\u002Fwiki\u002Fweb\u002Fjs\u002Fweb-js-class-click","2021-11-18T07:37:48.016Z","web-js-deep-copy","js深拷贝的几种方法","2019-06-30T00:00:00.000Z",void 0,"2018-12-09T00:00:00.000Z","2018-09-07T00:00:00.000Z","2018-07-22T21:41:33.000Z","2017-07-19T09:33:17.000Z")));