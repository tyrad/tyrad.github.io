__NUXT_JSONP__("/wiki/content/web-2018-09-03", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH){return {data:[{},{article:{slug:aj,title:ak,layout:"page",date:al,toc:[{id:I,depth:J,text:I},{id:K,depth:J,text:K},{id:L,depth:A,text:L},{id:M,depth:A,text:M},{id:am,depth:A,text:an},{id:N,depth:J,text:N},{id:O,depth:A,text:O},{id:P,depth:A,text:P},{id:ao,depth:A,text:ap},{id:aq,depth:A,text:ar},{id:Q,depth:J,text:Q}],body:{type:"root",children:[{type:b,tag:g,props:{},children:[{type:b,tag:l,props:{href:"https:\u002F\u002Faotu.io\u002Fnotes\u002F2017\u002F11\u002F27\u002Fiphonex\u002Findex.html",rel:[R,S,T],target:U},children:[{type:a,value:"原文地址: https:\u002F\u002Faotu.io\u002Fnotes\u002F2017\u002F11\u002F27\u002Fiphonex\u002Findex.html"}]}]},{type:a,value:e},{type:b,tag:V,props:{id:I},children:[{type:b,tag:l,props:{href:"#%E5%89%8D%E8%A8%80",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:I}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"iPhoneX 取消了物理按键，改成底部小黑条，这一改动导致网页出现了比较尴尬的屏幕适配问题。对于网页而言，顶部（刘海部位）的适配问题浏览器已经做了处理，所以我们只需要关注底部与小黑条的适配问题即可（即常见的吸底导航、返回顶部等各种相对底部 fixed 定位的元素）。"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"笔者通过查阅了一些官方文档，以及结合实际项目中的一些处理经验，整理了一套简单的适配方案分享给大家，希望对大家有所帮助，以下是处理前后效果图:"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:W,props:{alt:"2018090317702iphonex_3.png",src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F2018090317702iphonex_3.png"},children:[]}]},{type:a,value:e},{type:b,tag:V,props:{id:K},children:[{type:b,tag:l,props:{href:"#%E9%80%82%E9%85%8D%E4%B9%8B%E5%89%8D%E9%9C%80%E8%A6%81%E4%BA%86%E8%A7%A3%E7%9A%84%E5%87%A0%E4%B8%AA%E6%96%B0%E7%9F%A5%E8%AF%86",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:K}]},{type:a,value:e},{type:b,tag:B,props:{id:L},children:[{type:b,tag:l,props:{href:"#%E5%AE%89%E5%85%A8%E5%8C%BA%E5%9F%9F",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:L}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"安全区域指的是一个可视窗口范围，处于安全区域的内容不受圆角（corners）、齐刘海（sensor housing）、小黑条（Home Indicator）影响，如下图蓝色区域："}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:W,props:{alt:"2018090367223iphonex_4.png",src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F2018090367223iphonex_4.png"},children:[]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"也就是说，我们要做好适配，必须保证页面可视、可操作区域是在安全区域内。"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:ag},{type:b,tag:l,props:{href:"https:\u002F\u002Fdeveloper.apple.com\u002Fios\u002Fhuman-interface-guidelines\u002Foverview\u002Fiphone-x\u002F",rel:[R,S,T],target:U},children:[{type:a,value:"Human Interface Guidelines - iPhoneX"}]}]},{type:a,value:e},{type:b,tag:B,props:{id:M},children:[{type:b,tag:l,props:{href:"#viewport-fit",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:M}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"iOS11 新增特性，苹果公司为了适配 iPhoneX 对现有 viewport meta 标签的一个扩展，用于设置网页在可视窗口的布局方式，可设置三个值："}]},{type:a,value:e},{type:b,tag:"ul",props:{},children:[{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:"contain: 可视窗口完全包含网页内容（左图）"}]},{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:"cover：网页内容完全覆盖可视窗口（右图）"}]},{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:"auto：默认值，跟 contain 表现一致"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:W,props:{alt:"2018090338782iphonex_1.png",src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F2018090338782iphonex_1.png"},children:[]}]},{type:a,value:e},{type:b,tag:X,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"注意：网页默认不添加扩展的表现是 viewport-fit=contain，需要适配 iPhoneX 必须设置 viewport-fit=cover，这是适配的关键步骤。"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:ag},{type:b,tag:l,props:{href:"https:\u002F\u002Fwww.w3.org\u002FTR\u002Fcss-round-display-1\u002F#viewport-fit-descriptor",rel:[R,S,T],target:U},children:[{type:a,value:"viewport-fit-descriptor"}]}]},{type:a,value:e},{type:b,tag:B,props:{id:am},children:[{type:b,tag:l,props:{href:"#env-%E5%92%8C-constant",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:an}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"iOS11 新增特性，Webkit 的一个 CSS 函数，用于设定安全区域与边界的距离，有四个预定义的变量："}]},{type:a,value:e},{type:b,tag:"ol",props:{},children:[{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:"safe-area-inset-left：安全区域距离左边边界距离"}]},{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:"safe-area-inset-right：安全区域距离右边边界距离"}]},{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:"safe-area-inset-top：安全区域距离顶部边界距离"}]},{type:a,value:e},{type:b,tag:C,props:{},children:[{type:a,value:"safe-area-inset-bottom：安全区域距离底部边界距离"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"这里我们只需要关注 safe-area-inset-bottom 这个变量，因为它对应的就是小黑条的高度（横竖屏时值不一样）。"}]},{type:a,value:e},{type:b,tag:X,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"注意：当 viewport-fit=contain 时 env() 是不起作用的，必须要配合 viewport-fit=cover 使用。对于不支持env() 的浏览器，浏览器将会忽略它。"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"在这之前，笔者使用的是 constant()，后来，官方文档加了这么一段注释（坑）："}]},{type:a,value:e},{type:b,tag:X,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"The env() function shipped in iOS 11 with the name constant(). Beginning with Safari Technology Preview 41 and the iOS 11.2 beta, constant() has been removed and replaced with env(). You can use the CSS fallback mechanism to support both versions, if necessary, but should prefer env() going forward."}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"这就意味着，之前使用的 constant() 在 iOS11.2 之后就不能使用的，但我们还是需要做向后兼容，像这样："}]},{type:a,value:e},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,ah]},children:[{type:b,tag:z,props:{},children:[{type:a,value:"padding-bottom: constant(safe-area-inset-bottom); \u002F* 兼容 iOS \u003C 11.2 *\u002F\npadding-bottom: env(safe-area-inset-bottom); \u002F* 兼容 iOS \u003E= 11.2 *\u002F\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"注意：env() 跟 constant() 需要同时存在，而且顺序不能换。"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:ag},{type:b,tag:l,props:{href:"https:\u002F\u002Fwebkit.org\u002Fblog\u002F7929\u002Fdesigning-websites-for-iphone-x\u002F?hmsr=funteas.com&utm_medium=funteas.com&utm_source=funteas.com",rel:[R,S,T],target:U},children:[{type:a,value:"Designing Websites for iPhone X"}]}]},{type:a,value:e},{type:b,tag:V,props:{id:N},children:[{type:b,tag:l,props:{href:"#%E5%A6%82%E4%BD%95%E9%80%82%E9%85%8D",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:N}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"了解了以上所说的几个知识点，接下来我们适配的思路就很清晰了。"}]},{type:a,value:e},{type:b,tag:B,props:{id:O},children:[{type:b,tag:l,props:{href:"#%E7%AC%AC%E4%B8%80%E6%AD%A5%EF%BC%9A%E8%AE%BE%E7%BD%AE%E7%BD%91%E9%A1%B5%E5%9C%A8%E5%8F%AF%E8%A7%86%E7%AA%97%E5%8F%A3%E7%9A%84%E5%B8%83%E5%B1%80%E6%96%B9%E5%BC%8F",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:O}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"新增 viweport-fit 属性，使得页面内容完全覆盖整个窗口："}]},{type:a,value:e},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,"language-xml"]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,as]},children:[{type:b,tag:c,props:{className:[d,as]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"\u003C"}]},{type:a,value:"meta"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:"name"}]},{type:b,tag:c,props:{className:[d,au]},children:[{type:b,tag:c,props:{className:[d,f,av]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Y}]},{type:a,value:"viewport"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Y}]}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,at]},children:[{type:a,value:"content"}]},{type:b,tag:c,props:{className:[d,au]},children:[{type:b,tag:c,props:{className:[d,f,av]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Y}]},{type:a,value:"width=device-width, viewport-fit=cover"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Y}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"\u003E"}]}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:B,props:{id:P},children:[{type:b,tag:l,props:{href:"#%E7%AC%AC%E4%BA%8C%E6%AD%A5%EF%BC%9A%E9%A1%B5%E9%9D%A2%E4%B8%BB%E4%BD%93%E5%86%85%E5%AE%B9%E9%99%90%E5%AE%9A%E5%9C%A8%E5%AE%89%E5%85%A8%E5%8C%BA%E5%9F%9F%E5%86%85",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:P}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"这一步根据实际页面场景选择，如果不设置这个值，可能存在小黑条遮挡页面最底部内容的情况。"}]},{type:a,value:e},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,D]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,"selector"]},children:[{type:a,value:"body"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:B,props:{id:ao},children:[{type:b,tag:l,props:{href:"#%E7%AC%AC%E4%B8%89%E6%AD%A5%EF%BC%9Afixed-%E5%85%83%E7%B4%A0%E7%9A%84%E9%80%82%E9%85%8D",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:ap}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"类型一：fixed 完全吸底元素（bottom = 0），比如下图这两种情况："}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:W,props:{alt:"2018090349973iphonex_2.png",src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F2018090349973iphonex_2.png"},children:[]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"可以通过加内边距 padding 扩展高度："}]},{type:a,value:e},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,D]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"或者通过计算函数 calc 覆盖原来高度："}]},{type:a,value:e},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,D]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ad]},children:[{type:a,value:ae}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ax}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ad]},children:[{type:a,value:ae}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:X,props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"注意，这个方案需要吸底条必须是有背景色的，因为扩展的部分背景是跟随外容器的，否则出现镂空情况。"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"还有一种方案就是，可以通过新增一个新的元素（空的颜色块，主要用于小黑条高度的占位），然后吸底元素可以不改变高度只需要调整位置，像这样："}]},{type:a,value:e},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,D]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"空的颜色块"}]},{type:a,value:e},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,ah]},children:[{type:b,tag:z,props:{},children:[{type:a,value:"{\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n  height: constant(safe-area-inset-bottom);\n  height: env(safe-area-inset-bottom);\n  background-color: #fff;\n}\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"类型二：fixed 非完全吸底元素（bottom ≠ 0），比如 “返回顶部”、“侧边广告” 等"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"像这种只是位置需要对应向上调整，可以仅通过外边距 margin 来处理:"}]},{type:a,value:e},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,D]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"或者，你也可以通过计算函数 calc 覆盖原来 bottom 值："}]},{type:a,value:e},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,D]},children:[{type:b,tag:z,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:E}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ad]},children:[{type:a,value:ae}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:o}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,$]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,aa]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,ad]},children:[{type:a,value:ae}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:H}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:B,props:{id:aq},children:[{type:b,tag:l,props:{href:"#%E4%BD%A0%E4%B9%9F%E5%8F%AF%E4%BB%A5%E4%BD%BF%E7%94%A8-supports-%E9%9A%94%E7%A6%BB%E5%85%BC%E5%AE%B9%E6%A0%B7%E5%BC%8F",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:ar}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"写到这里，我们常见的两种类型的 fixed 元素适配方案已经了解了吧。如果我们只希望 iPhoneX 才需要新增适配样式，我们可以配合 @supports 来隔离兼容样式，当然这个处理对页面展示实际不会有任何影响："}]},{type:a,value:e},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,ah]},children:[{type:b,tag:z,props:{},children:[{type:a,value:"@supports (bottom: constant(safe-area-inset-bottom)) or (bottom: env(safe-area-inset-bottom)) {\n  div {\n    margin-bottom: constant(safe-area-inset-bottom);\n    margin-bottom: env(safe-area-inset-bottom);\n  }\n}\n"}]}]}]},{type:a,value:e},{type:b,tag:V,props:{id:Q},children:[{type:b,tag:l,props:{href:"#%E5%86%99%E5%9C%A8%E6%9C%80%E5%90%8E",ariaHidden:r,tabIndex:s},children:[{type:b,tag:c,props:{className:[t,u]},children:[]}]},{type:a,value:Q}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"以上几种方案仅供参考，笔者认为，现阶段适配处理起来是有点折腾，但是至少能解决，具体需要根据页面实际场景，在不影响用户体验与操作的大前提下不断尝试与探索，才能更完美的适配。"}]}]},dir:"\u002Fwiki\u002Fweb",path:aB,extension:".md",createdAt:aC,updatedAt:aC},prev:{slug:"ionic-segment",title:"配置可滑动的segment",date:"2018-07-06T00:00:00.000Z"},next:{slug:"ionic-2018-09-06",title:"取整\u002F取小数、与数值比较",date:"2018-09-06T00:00:00.000Z"},scrollTop:aD,sideCategory:[{folderName:"web",articles:[{slug:"web-2018-01-12",title:"form表单重置",date:"2018-01-12T17:24:01.000Z",path:"\u002Fwiki\u002Fweb\u002Fweb-2018-01-12"},{slug:"web-2018-02-27",title:"免邀请码推广App思路(Web端参数与App数据同步)",date:"2018-02-27T11:08:27.000Z",path:"\u002Fwiki\u002Fweb\u002Fweb-2018-02-27"},{slug:aj,title:ak,date:al,path:aB},{slug:"web-chrome-plugin-dev",title:"chrome插件开发: 撸一个灯塔答题辅助",date:"2018-02-26T16:04:08.000Z",path:"\u002Fwiki\u002Fweb\u002Fweb-chrome-plugin-dev"},{slug:"web-safarx",title:"iOS safari的input标签设置readonly仍然出现光标",date:"2017-07-31T15:45:21.000Z",path:"\u002Fwiki\u002Fweb\u002Fweb-safarx"},{slug:"web-外部js使用el表达式",title:"外部js使用el表达式",date:"2017-07-27T16:24:49.000Z",path:"\u002Fwiki\u002Fweb\u002Fweb-外部js使用el表达式"},{slug:"web-表单验证",title:"原生表单验证",date:"2017-07-21T09:42:59.000Z",path:"\u002Fwiki\u002Fweb\u002Fweb-表单验证"},{slug:"web-谷歌 HTML:CSS 规范",title:"(转)谷歌 HTML\u002FCSS 规范",date:"2017-01-13 21:23",path:"\u002Fwiki\u002Fweb\u002Fweb-谷歌 HTML:CSS 规范"}],children:[{folderName:"css",articles:[{slug:"css3-2018-12-09",title:"img自适应容器的方法,及图片尺寸的自适应(object-fit)",date:aE,path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-2018-12-09"},{slug:"css3-border-css3",title:"border(css3)",date:ai,path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-border-css3"},{slug:"css3-calc",title:"calc()",date:"2017-07-31T16:18:08.000Z",path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-calc"},{slug:"css3-css-func",title:"函数",date:ai,path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-css-func"},{slug:"css3-dom-scrollto",title:"dom元素滚动scrollTo",date:aF,path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-dom-scrollto"},{slug:"css3-display",title:"display",date:aG,path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-display"},{slug:"css3-flex-review",title:"flex效果一览",date:aG,path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-flex-review"},{slug:"css3-position",title:"position",date:"2018-07-22T20:31:50.000Z",path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-position"},{slug:"css3-text",title:"Text各种属性总结",date:ai,path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-text"},{slug:"css3-v-center",title:"文字图片垂直方向居中",date:aF,path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-v-center"},{slug:"css3-vh",title:"vh",date:aE,path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-vh"},{slug:"css3-word-wrap",title:"word-wrap",date:"2017-06-28T14:55:35.000Z",path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fcss3-word-wrap"},{slug:"web-css-selector",title:"css选择器效果一览",date:"2019-04-29T00:00:00.000Z",path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fweb-css-selector"},{slug:"web-css-world",title:"《css世界》笔记",date:"2019-05-08T00:00:00.000Z",path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fweb-css-world"},{slug:"web-flex-shrink-demo",title:"flex实战:使用flex-shrink举例",date:"2019-11-24T00:00:00.000Z",path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fweb-flex-shrink-demo"},{slug:"web-html-anchor-positon",title:"调整锚点跳转偏移(转)",date:"2019-07-02T09:12:21.000Z",path:"\u002Fwiki\u002Fweb\u002Fcss\u002Fweb-html-anchor-positon"}],children:[]},{folderName:"es6",articles:[{slug:"Object-keys",title:"Object.keys()、hasOwnProperty",date:"2021-09-16T22:08:19.000Z",path:"\u002Fwiki\u002Fweb\u002Fes6\u002FObject-keys"},{slug:"es6-js-sort",title:"sort()",date:aH,path:"\u002Fwiki\u002Fweb\u002Fes6\u002Fes6-js-sort"},{slug:"es6-js模板字符串",title:"js模板字符串",date:"2017-07-19T16:17:25.000Z",path:"\u002Fwiki\u002Fweb\u002Fes6\u002Fes6-js模板字符串"},{slug:"findIndex",title:"find、findIndex、some",date:"2021-09-16T22:32:24.000Z",path:"\u002Fwiki\u002Fweb\u002Fes6\u002FfindIndex"}],children:[]},{folderName:"jQuery",articles:[{slug:"jQuery-center-select",title:"select居中方法(weui-select)",date:"2017-07-20T15:49:31.000Z",path:"\u002Fwiki\u002Fweb\u002FjQuery\u002FjQuery-center-select"},{slug:"jQuery-jQuery-data",title:"id绑定object",date:"2017-07-28T14:55:35.000Z",path:"\u002Fwiki\u002Fweb\u002FjQuery\u002FjQuery-jQuery-data"}],children:[]},{folderName:"js",articles:[{slug:"encodeuri-vs-encodeuricomponent",title:"encodeURI 和 encodeURIComponent",date:"2021-09-16T21:23:52.000Z",path:"\u002Fwiki\u002Fweb\u002Fjs\u002Fencodeuri-vs-encodeuricomponent"},{slug:"js-typeof",title:"typeof",date:aH,path:"\u002Fwiki\u002Fweb\u002Fjs\u002Fjs-typeof"},{slug:"web-js-class-click",title:"html添加class点击的n种实现方法",date:"2019-06-27T00:00:00.000Z",path:"\u002Fwiki\u002Fweb\u002Fjs\u002Fweb-js-class-click"},{slug:"web-js-deep-copy",title:"js深拷贝的几种方法",date:"2019-06-30T00:00:00.000Z",path:"\u002Fwiki\u002Fweb\u002Fjs\u002Fweb-js-deep-copy"},{slug:"web-typeof-eval",title:"判断字符串对应的变量名是否存在",date:"2017-07-28T08:24:49.000Z",path:"\u002Fwiki\u002Fweb\u002Fjs\u002Fweb-typeof-eval"},{slug:"web-理解js中的this指向",title:"(转)彻底理解 JS 中 this 的指向",date:"2017-08-20T22:08:24.000Z",path:"\u002Fwiki\u002Fweb\u002Fjs\u002Fweb-理解js中的this指向"}],children:[]},{folderName:"调试技巧",articles:[{slug:"webstorm-debugger",title:"webstorm调试技巧",date:"2021-09-15T09:45:17.000Z",path:"\u002Fwiki\u002Fweb\u002F调试技巧\u002Fwebstorm-debugger"}],children:[]},{folderName:"适配",articles:[{slug:"适配-image-layout",date:"2020-12-11T03:43:24.000Z",title:"图片配置",path:"\u002Fwiki\u002Fweb\u002F适配\u002F适配-image-layout"},{slug:"适配-ios上数字键盘小数点键盘适配",date:"2020-10-26T07:33:23.000Z",title:"iOS上数字键盘、小数点键盘",path:"\u002Fwiki\u002Fweb\u002F适配\u002F适配-ios上数字键盘小数点键盘适配"},{slug:"适配-viewport适配布局",date:"2020-10-26T06:51:25.000Z",title:"Viewport适配布局(转载)",path:"\u002Fwiki\u002Fweb\u002F适配\u002F适配-viewport适配布局"},{slug:"适配-图片比例显示",date:"2020-12-15T04:13:50.000Z",title:"图片比例显示(padding)",path:"\u002Fwiki\u002Fweb\u002F适配\u002F适配-图片比例显示"}],children:[]}]}]}],fetch:{},mutations:aD}}("text","element","span","token","\n","punctuation","p"," ","(",")","function","a","\n  ","property",":","safe-area-inset-bottom",";","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","line-numbers","code",3,"h3","li","language-css","{","constant","env","}","前言",2,"适配之前需要了解的几个新知识","安全区域","viewport-fit","如何适配","第一步：设置网页在可视窗口的布局方式","第二步：页面主体内容限定在安全区域内","写在最后","nofollow","noopener","noreferrer","_blank","h2","img","blockquote","\"","padding-bottom","calc","number","unit","px","假设值","operator","+","margin-bottom","更详细说明，参考文档：","language-text","2019-04-30T00:00:00.000Z","web-2018-09-03","[转] h5: iPhoneX适配","2018-09-03T00:00:00.000Z","env-和-constant","env() 和 constant()","第三步：fixed-元素的适配","第三步：fixed 元素的适配","你也可以使用-supports-隔离兼容样式","你也可以使用 @supports 隔离兼容样式","tag","attr-name","attr-value","attr-equals","=","height","60","bottom","50","\u002Fwiki\u002Fweb\u002Fweb-2018-09-03","2021-11-18T07:37:48.016Z",void 0,"2018-12-09T00:00:00.000Z","2018-09-07T00:00:00.000Z","2018-07-22T21:41:33.000Z","2017-07-19T09:33:17.000Z")));