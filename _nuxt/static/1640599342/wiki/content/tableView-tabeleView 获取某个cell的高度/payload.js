__NUXT_JSONP__("/wiki/content/tableView-tabeleView%20%E8%8E%B7%E5%8F%96%E6%9F%90%E4%B8%AAcell%E7%9A%84%E9%AB%98%E5%BA%A6", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as){return {data:[{},{article:{slug:D,title:E,layout:"page",date:F,collection:G,toc:[],body:{type:"root",children:[{type:b,tag:z,props:{},children:[{type:a,value:"tabeleView 获取某个cell的高度(cell高度是动态计算的)。"}]},{type:a,value:o},{type:b,tag:z,props:{},children:[{type:a,value:"可以直接使用:"}]},{type:a,value:o},{type:b,tag:H,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,L]},children:[{type:b,tag:M,props:{},children:[{type:a,value:"CGRect frame "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:"tableView rectForRowAtIndexPath"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"indexPath"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:o}]}]}]},{type:a,value:o},{type:b,tag:z,props:{},children:[{type:a,value:"但是需要注意的是它比较费资源,如果用kvo监听tableview的高度的方法里并且获取这个frame,直接崩溃。"}]},{type:a,value:o},{type:b,tag:H,props:{className:[I]},children:[{type:b,tag:J,props:{className:[K,L]},children:[{type:b,tag:M,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"configureActions"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"myOrderTableView addObserver"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:n}]},{type:a,value:" forKeyPath"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:Q}]},{type:a,value:" options"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"NSKeyValueObservingOptionNew context"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,"constant"]},children:[{type:a,value:"NULL"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:N}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"observeValueForKeyPath"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"NSString "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"keyPath\n                      ofObject"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"object\n                        change"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"NSDictionary"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:S}]},{type:a,value:"NSKeyValueChangeKey"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:","}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:T}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"change\n                       context"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"context"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n    \n    "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:C}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:"keyPath isEqualToString"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,P]},children:[{type:a,value:Q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n        \n        "},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\u002F\u002FDLog(@\"contentOffset is changed! new = %@\",[change valueForKey:NSKeyValueChangeNewKey]);"}]},{type:a,value:"\n        CGFloat offset_Y "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"myOrderTableView"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"contentOffset"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"y"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\u002F\u002FDLog(@\" %@\",@(offset_Y));"}]},{type:a,value:"\n        CGFloat cellAddressHeight "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"50.0f"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\u002F\u002F[self.myOrderTableView rectForRowAtIndexPath:[NSIndexPath indexPathForRow:0 inSection:0]].size.height;"}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:C}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:T}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:W}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:X}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\u002F\u002F设置显示"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:$}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"1"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"else"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:S}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:W}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:X}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"\u002F\u002F设置隐藏"}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:$}]},{type:a,value:aa},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:ab}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,w]},children:[{type:a,value:"0"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:o}]}]}]}]},dir:"\u002Fwiki\u002FiOS\u002FtableView",path:af,extension:".md",createdAt:ag,updatedAt:ag},prev:{slug:ah,title:ai,date:aj},next:{slug:ak,title:al,date:am},scrollTop:an,sideCategory:[{folderName:"iOS",articles:[{slug:"iOS-Swift-ObjectMapper 指南",title:"Swift-ObjectMapper 指南",date:"2016-05-23 16:13",path:"\u002Fwiki\u002FiOS\u002FiOS-Swift-ObjectMapper 指南"},{slug:"iOS-URL Schemes && Universal Links 简单使用",title:"URL Schemes && Universal Links 简单使用",date:"2017-02-14T00:00:00.000Z",path:"\u002Fwiki\u002FiOS\u002FiOS-URL Schemes && Universal Links 简单使用"},{slug:"iOS-YYModel",title:"YYModel几种使用场景",date:ao,path:"\u002Fwiki\u002FiOS\u002FiOS-YYModel"},{slug:"iOS-ios-useful-link",title:"'实用链接",date:"2017-07-14T16:58:04.000Z",path:"\u002Fwiki\u002FiOS\u002FiOS-ios-useful-link"},{slug:"iOS-mrpeak杂货铺-iOS应用层架构之CDD",title:"(转)mrpeak杂货铺-iOS应用层架构之CDD",date:ap,path:"\u002Fwiki\u002FiOS\u002FiOS-mrpeak杂货铺-iOS应用层架构之CDD"},{slug:"iOS-检测离屏渲染与绘制高性能圆角",title:"(待)检测离屏渲染与绘制高性能圆角",date:"2017-08-17T10:03:56.000Z",path:"\u002Fwiki\u002FiOS\u002FiOS-检测离屏渲染与绘制高性能圆角"},{slug:"iOS-深度重构UIViewController",title:"(转)mrpeak杂货铺-深度重构UIViewController",date:"2017-11-19T21:33:42.000Z",path:"\u002Fwiki\u002FiOS\u002FiOS-深度重构UIViewController"},{slug:"iOS-添加字体库",title:"使用第三方字体",date:ap,path:"\u002Fwiki\u002FiOS\u002FiOS-添加字体库"}],children:[{folderName:"3part",articles:[{slug:"3part-umeng-install",title:"快速集成友盟分享",date:"2018-03-01 16:11",path:"\u002Fwiki\u002FiOS\u002F3part\u002F3part-umeng-install"},{slug:"3part-快速集成微信支付",title:"快速集成微信\u002F支付宝\u002F银联",date:"2017-11-17T16:19:25.000Z",path:"\u002Fwiki\u002FiOS\u002F3part\u002F3part-快速集成微信支付"},{slug:"3part-快速集成百度地图",title:"集成百度地图、百度导航",date:"2017-08-11T11:24:43.000Z",path:"\u002Fwiki\u002FiOS\u002F3part\u002F3part-快速集成百度地图"},{slug:"3part-阿里云视频点播集成",date:"2020-10-26T01:10:15.000Z",title:"阿里云视频点播VOD",path:"\u002Fwiki\u002FiOS\u002F3part\u002F3part-阿里云视频点播集成"}],children:[]},{folderName:"Autolayout",articles:[{slug:"Autolayout-baseline",title:"label底部对齐、顶部对齐",date:aq,path:"\u002Fwiki\u002FiOS\u002FAutolayout\u002FAutolayout-baseline"}],children:[]},{folderName:"Error",articles:[{slug:"Error-2017-07-31",title:"Undefined symbols for architecture ..",date:"2017-07-31T08:52:40.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-2017-07-31"},{slug:"Error-Shell-Script-Invocation-Error",title:"'Shell Script Invocation Error'",date:"2017-07-20T14:27:04.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-Shell-Script-Invocation-Error"},{slug:"Error-gesture",title:"tableViewCell的点击和tapGestureRecognizer冲突的处理",date:"2016-11-19T21:33:42.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-gesture"},{slug:"Error-崩溃分析",date:"2020-11-11T07:28:34.000Z",title:"崩溃分析(转载)",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-崩溃分析"},{slug:"Error-竖屏下视频全屏播放",title:"(转)竖屏下视频全屏播放",date:"2017-08-01T15:23:01.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-竖屏下视频全屏播放"},{slug:"Error-证书过期或者移除对app的影响",title:"证书过期或者移除对app的影响",date:"2018-01-11T13:49:33.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-证书过期或者移除对app的影响"}],children:[]},{folderName:"Objective-C",articles:[{slug:"Objective-C-KVO - Observe property of an object contained in a NSArray",title:"KVO - Observe property of an object contained in a NSArray",date:"2017-09-28 22:26",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-KVO - Observe property of an object contained in a NSArray"},{slug:"Objective-C-NSArrayFilter",title:"NSArray: filteredArrayUsingPredicate",date:"2017-09-14 16:24",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-NSArrayFilter"},{slug:"Objective-C-NSRecursiveLock",date:"2020-10-27T00:52:16.000Z",title:"NSRecursiveLock",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-NSRecursiveLock"},{slug:"Objective-C-NSStringCompareOptions",title:"NSStringCompareOptions",date:"2017-07-10T17:13:25.000Z",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-NSStringCompareOptions"},{slug:"Objective-C-containsObject-or-removeObject",title:"containsObject or removeObject",date:"2015年04月12日09:55:35",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-containsObject-or-removeObject"},{slug:"Objective-C-get-lunarholidays",title:"节气、节假日计算",date:"2017-07-13T09:30:26.000Z",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-get-lunarholidays"},{slug:"Objective-C-use-dispatch_queue_t-with-strong",title:"dispatch_queue_t 用strong来修饰",date:ao,path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-use-dispatch_queue_t-with-strong"},{slug:"Objective-C-农历",title:"农历",date:"2017-07-11T13:12:46.000Z",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-农历"},{slug:"Objective-C-常用的宏",title:"常用的宏",date:"2015-03-04 11:11",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-常用的宏"}],children:[]},{folderName:"StatusBar",articles:[{slug:"StatusBar-how-to-detect-touches-in-status-bar",title:"获取StatusBar的点击事件",date:ar,path:"\u002Fwiki\u002FiOS\u002FStatusBar\u002FStatusBar-how-to-detect-touches-in-status-bar"},{slug:"StatusBar-ios-status-bar-style",title:"修改StatusBarStyle以及statusBar的背景颜色",date:ar,path:"\u002Fwiki\u002FiOS\u002FStatusBar\u002FStatusBar-ios-status-bar-style"}],children:[]},{folderName:"UIKit",articles:[{slug:"UIKit-UIAlertController修改文字对齐方式",date:"2020-10-23T08:07:07.000Z",title:"UIAlertController修改文字对齐方式",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-UIAlertController修改文字对齐方式"},{slug:"UIKit-UIDynamic Animator",title:"UIDynamic Animator",date:"2016-07-20T16:13:11.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-UIDynamic Animator"},{slug:ah,title:ai,date:aj,path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-UISplit​View​Controller 学习笔记"},{slug:ak,title:al,date:am,path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-searchBar-style"},{slug:"UIKit-uioffset",title:"UIOffset",date:"2017-08-02T15:30:01.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-uioffset"},{slug:"UIKit-屏幕旋转.md",date:"2020-11-09T06:04:42.000Z",title:"屏幕旋转",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-屏幕旋转.md"},{slug:"UIKit-离屏渲染",title:"(转)关于iOS离屏渲染的深入研究",date:"2020-04-06T00:00:00.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-离屏渲染"},{slug:"UIKit-给WebView添加个粗糙的加载动画",title:"给UIWebView添加个粗糙的加载动画",date:"2017-02-10T00:00:00.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-给WebView添加个粗糙的加载动画"}],children:[]},{folderName:"UITextFeild",articles:[{slug:"UITextFeild-2018-01-16",title:"修改光标颜色和clear button的颜色",date:"2018-01-16T15:44:44.000Z",path:"\u002Fwiki\u002FiOS\u002FUITextFeild\u002FUITextFeild-2018-01-16"},{slug:"UITextFeild-uitextfeild-select-all",title:"默认选中文本",date:"2017-07-07 04:44",path:"\u002Fwiki\u002FiOS\u002FUITextFeild\u002FUITextFeild-uitextfeild-select-all"}],children:[]},{folderName:"keyboard",articles:[{slug:"keyboard-disable-3rd-keyboard",title:"禁用第三方键盘",date:aq,path:"\u002Fwiki\u002FiOS\u002Fkeyboard\u002Fkeyboard-disable-3rd-keyboard"}],children:[]},{folderName:"loc",articles:[{slug:"loc-2018-01-22",title:"CLPlacemark中文",date:"2018-01-22T14:36:49.000Z",path:"\u002Fwiki\u002FiOS\u002Floc\u002Floc-2018-01-22"},{slug:"loc-sim-locaiton-ios",title:"真机或模拟器修改定位位置",date:"2017-08-11T10:29:01.000Z",path:"\u002Fwiki\u002FiOS\u002Floc\u002Floc-sim-locaiton-ios"}],children:[]},{folderName:G,articles:[{slug:"tableView-cell-seprateLine",title:"cell分割线的颜色",date:"2017-08-08T15:26:14.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-cell-seprateLine"},{slug:"tableView-compare-NSIndexPath",title:"compare NSIndexPath",date:"2017-08-15T17:01:49.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-compare-NSIndexPath"},{slug:D,title:E,date:F,path:af},{slug:"tableView-taleview-headerfooterView-xib",title:"xib UITableViewHeaderFooterView",date:"2017-08-18T09:47:36.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-taleview-headerfooterView-xib"},{slug:"tableView-结合layoutMargins做tableViewCell的适配",title:"结合layoutMargins做cell的适配",date:"2017-08-20T21:55:52.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-结合layoutMargins做tableViewCell的适配"}],children:[]},{folderName:"xib",articles:[{slug:"xib-如何替换已有的控件",title:"如何替换已有的控件",date:"2017-09-07T10:51:38.000Z",path:"\u002Fwiki\u002FiOS\u002Fxib\u002Fxib-如何替换已有的控件"}],children:[]},{folderName:"代码片段",articles:[{slug:"代码片段-分割小说章节",title:"分割小说章节",date:"2017-01-18T15:12:12.000Z",path:"\u002Fwiki\u002FiOS\u002F代码片段\u002F代码片段-分割小说章节"},{slug:"代码片段-截图 截长图 高清图",title:"截图 截长图 高清图",date:"2016-05-04 22:38",path:"\u002Fwiki\u002FiOS\u002F代码片段\u002F代码片段-截图 截长图 高清图"},{slug:"代码片段-读取未知类型的txt文件",title:"读取未知类型的txt文件 ",date:"2017-01-16 20:12",path:"\u002Fwiki\u002FiOS\u002F代码片段\u002F代码片段-读取未知类型的txt文件"}],children:[]},{folderName:"包管理工具",articles:[{slug:"包管理工具-spm-introduce",date:"2020-11-18T08:08:33.000Z",title:"Swift Package Manager介绍",path:"\u002Fwiki\u002FiOS\u002F包管理工具\u002F包管理工具-spm-introduce"},{slug:"包管理工具-spm-resource-handle",date:"2020-11-19T00:58:59.000Z",title:"SWift Package Manager资源文件管理",path:"\u002Fwiki\u002FiOS\u002F包管理工具\u002F包管理工具-spm-resource-handle"}],children:[]},{folderName:"日历",articles:[{slug:"日历-FSCalendar",title:"FSCalendar",date:"2017-07-11T08:48:12.000Z",path:"\u002Fwiki\u002FiOS\u002F日历\u002F日历-FSCalendar"}],children:[]},{folderName:"适配",articles:[{slug:"适配-NFC初试",title:"NFC初试",date:"2017-06-07 18:31",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-NFC初试"},{slug:"适配-iOS11 Xcode9新功能新特性",title:"iOS11 Xcode9新功能新特性",date:as,path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS11 Xcode9新功能新特性"},{slug:"适配-iOS11 tableView适配不完全指南",title:"iOS11 tableView适配不完全指南",date:"2017-09-19 12:33",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS11 tableView适配不完全指南"},{slug:"适配-iOS11刘海屏EdgeProtect相关",date:"2020-10-26T06:00:25.000Z",title:"iOS11刘海屏EdgeProtect相关",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS11刘海屏EdgeProtect相关"},{slug:"适配-iOS11适配参考",title:"iOS11 适配参考",date:as,path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS11适配参考"},{slug:"适配-iOS14hidesBottomBarWhenPushed兼容问题",date:"2020-10-23T08:53:49.000Z",title:"iOS14 hidesBottomBarWhenPushed兼容问题",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS14hidesBottomBarWhenPushed兼容问题"},{slug:"适配-touch-id",title:"touch Id",date:"2017-08-04T13:46:10.000Z",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-touch-id"}],children:[]},{folderName:"问与答",articles:[{slug:"问与答-为什么ui操作要在主线程",date:"2020-11-16T03:38:48.000Z",title:"为什么ui操作要在主线程",path:"\u002Fwiki\u002FiOS\u002F问与答\u002F问与答-为什么ui操作要在主线程"}],children:[]}]}]}],fetch:{},mutations:an}}("text","element","span","token","punctuation","operator"," ","keyword",":",".",";","(",")","self","\n","=","{","}","\n            ","[","]","comment","number","\n        ","addressTipsHidden ","p","void","*","if","tableView-tabeleView 获取某个cell的高度","tabeleView 获取某个cell的高度","2017-05-09T10:36:29.000Z","tableView","div","nuxt-content-highlight","pre","language-objc","line-numbers","code","-","\n    ","string","@\"contentOffset\"","id","\u003C","\u003E","offset_Y "," cellAddressHeight ","&&","=="," YES"," NO","UIView animateWithDuration","0.3"," animations","^","\n                ","addressTipsLabel","alpha ","\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-tabeleView 获取某个cell的高度","2021-12-27T10:01:01.266Z","UIKit-UISplit​View​Controller 学习笔记","UISplit​View​Controller 学习笔记","2017-04-07T00:00:00.000Z","UIKit-searchBar-style","如何修改searchBar的样式","2017-05-14T19:01:01.000Z",void 0,"2017-08-31T09:32:08.000Z","2017-10-27T18:01:13.000Z","2017-08-19T16:10:51.000Z","2016-07-01T14:19:23.000Z","2017-09-20T15:20:33.000Z")));