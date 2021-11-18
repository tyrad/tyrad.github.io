__NUXT_JSONP__("/wiki/content/%E9%80%82%E9%85%8D-NFC%E5%88%9D%E8%AF%95", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am){return {data:[{},{article:{slug:G,description:"iPhone6开始开始支持NFC(Near Field Communication ),但是最近苹果最近开放了NFC的部分接口。\n可以实现检测NFC标签(NFC tags)并读取包含NDEF(NFC Data Exchange Format)数据。\n最起码能当读卡器玩了吧。",title:H,layout:"page",date:I,toc:[{id:n,depth:p,text:n},{id:J,depth:p,text:K},{id:o,depth:p,text:o}],body:{type:L,children:[{type:b,tag:f,props:{},children:[{type:a,value:M},{type:b,tag:g,props:{},children:[{type:a,value:N}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:P}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:Q}]},{type:a,value:c},{type:a,value:c},{type:b,tag:q,props:{id:n},children:[{type:b,tag:j,props:{href:"#%E6%A6%82%E8%BF%B0",ariaHidden:r,tabIndex:s},children:[{type:b,tag:d,props:{className:[t,u]},children:[]}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:"Core NFC"}]},{type:a,value:"可以读取NFC tags，提供给用户有关其物理环境和实体对象的更多信息。例如，小明在逛商场，他可以通过应用程序的NFC功能获取到一些相关的商品信息。"}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Note\n读取"},{type:b,tag:g,props:{},children:[{type:a,value:"NFC NDEF tag"}]},{type:a,value:"当前只支持到iPhone7\u002F7+"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"使用Core NFC，您可以读取符合NFC数据交换格式（NDEF）的五种标签(type1到5)。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"想要阅读标签，需要创建一个"},{type:b,tag:g,props:{},children:[{type:a,value:"NFCNDEFReaderSession"}]},{type:a,value:"的实例并设置代理。session会对NFC标签进行轮询，当找到"},{type:b,tag:g,props:{},children:[{type:a,value:R}]},{type:a,value:"的消息时,会通过代理回调。代理收到消息后会，我们将session置为invalid("},{type:b,tag:g,props:{},children:[{type:a,value:"[session invalidateSession]"}]},{type:a,value:")."}]},{type:a,value:c},{type:b,tag:q,props:{id:J},children:[{type:b,tag:j,props:{href:"#%E5%88%A4%E6%96%AD%E6%98%AF%E5%90%A6%E6%94%AF%E6%8C%81nfc",ariaHidden:r,tabIndex:s},children:[{type:b,tag:d,props:{className:[t,u]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"见官方文档: "},{type:b,tag:j,props:{href:S,rel:[w,x,y],target:z},children:[{type:a,value:S}]}]},{type:a,value:c},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,T]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"\u002F\u002F#import \u003CCoreNFC\u002FCoreNFC.h\u003E\n+ (BOOL)checkNFCSupport{    \n    if (@available(iOS 11, *)) {\n        return NFCNDEFReaderSession.readingAvailable;\n    } else {\n        return NO;\n    }\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:q,props:{id:o},children:[{type:b,tag:j,props:{href:"#%E5%AE%9E%E7%8E%B0",ariaHidden:r,tabIndex:s},children:[{type:b,tag:d,props:{className:[t,u]},children:[]}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"调试环境 Xcode9 beta + iPhone7"}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"需要注意的CoreNFC当前没有X86的版本,需要真机调试,否则报错。。。\n"},{type:b,tag:k,props:{alt:"2017060763145coreNFC.png",src:"http:\u002F\u002Fupload-images.jianshu.io\u002Fupload_images\u002F1196804-525a969e51c01b68.png?imageMogr2\u002Fauto-orient\u002Fstrip%7CimageView2\u002F2\u002Fw\u002F1240"},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:U,props:{},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"新建AppleId,勾选"},{type:b,tag:g,props:{},children:[{type:a,value:"NFC Tag Reading"}]},{type:b,tag:k,props:{alt:"2017060729452.png",src:"http:\u002F\u002Fupload-images.jianshu.io\u002Fupload_images\u002F1196804-7273b7d5179740fe.png?imageMogr2\u002Fauto-orient\u002Fstrip%7CimageView2\u002F2\u002Fw\u002F1240"},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"新建工程配置好BundleId,与AppleId相匹配。添加"},{type:b,tag:k,props:{alt:"20170607628875.png",src:"http:\u002F\u002Fupload-images.jianshu.io\u002Fupload_images\u002F1196804-032784fde1c5910c.png?imageMogr2\u002Fauto-orient\u002Fstrip%7CimageView2\u002F2\u002Fw\u002F1240"},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:g,props:{},children:[{type:a,value:".entitlements"}]},{type:a,value:"文件添加内容:"}]},{type:a,value:c},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,"language-xml"]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"    "},{type:b,tag:d,props:{className:[e,h]},children:[{type:b,tag:d,props:{className:[e,h]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:E}]},{type:a,value:V}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:l}]}]},{type:a,value:"com.apple.developer.nfc.readersession.formats"},{type:b,tag:d,props:{className:[e,h]},children:[{type:b,tag:d,props:{className:[e,h]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:F}]},{type:a,value:V}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:l}]}]},{type:a,value:W},{type:b,tag:d,props:{className:[e,h]},children:[{type:b,tag:d,props:{className:[e,h]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:E}]},{type:a,value:X}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:l}]}]},{type:a,value:"\n        "},{type:b,tag:d,props:{className:[e,h]},children:[{type:b,tag:d,props:{className:[e,h]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:E}]},{type:a,value:Y}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:l}]}]},{type:a,value:R},{type:b,tag:d,props:{className:[e,h]},children:[{type:b,tag:d,props:{className:[e,h]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:F}]},{type:a,value:Y}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:l}]}]},{type:a,value:W},{type:b,tag:d,props:{className:[e,h]},children:[{type:b,tag:d,props:{className:[e,h]},children:[{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:F}]},{type:a,value:X}]},{type:b,tag:d,props:{className:[e,i]},children:[{type:a,value:l}]}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:k,props:{alt:"20170607123073.png",src:"http:\u002F\u002Fupload-images.jianshu.io\u002Fupload_images\u002F1196804-17ebea26b26f358b.png?imageMogr2\u002Fauto-orient\u002Fstrip%7CimageView2\u002F2\u002Fw\u002F1240"},children:[]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:k,props:{alt:"20170607170904.png",src:"http:\u002F\u002Fupload-images.jianshu.io\u002Fupload_images\u002F1196804-1c9f4ccc3a5aa1e9.png?imageMogr2\u002Fauto-orient\u002Fstrip%7CimageView2\u002F2\u002Fw\u002F1240"},children:[]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"代码实现比较简单"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:A,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,T]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"    #import \u003CCoreNFC\u002FCoreNFC.h\u003E\n    \n    @interface ViewController ()\u003CNFCNDEFReaderSessionDelegate\u003E\n    \n    @end\n    \n    @implementation ViewController\n    \n    - (IBAction)clicked:(id)sender {\n        \n        NFCNDEFReaderSession *session = [[NFCNDEFReaderSession alloc] initWithDelegate:self queue:nil invalidateAfterFirstRead:NO];\n        \u002F\u002FNSLog(@\" ready ? %@\", @([session  isReady]));\n        [session beginSession];\n    }\n    \n    #pragma mark - NFCNDEFReaderSessionDelegate\n    \n    - (void) readerSession:(nonnull NFCNDEFReaderSession *)session didDetectNDEFs:(nonnull NSArray\u003CNFCNDEFMessage *\u003E *)messages {\n        for (NFCNDEFMessage *message in messages) {\n            for (NFCNDEFPayload *payload in message.records) {\n                NSLog(@\"Payload data:%@\",payload.payload);\n                \u002F\u002F[session invalidateSession];\n            }\n        }\n    }\n    \n    - (void)readerSession:(NFCNDEFReaderSession *)session didInvalidateWithError:(NSError *)error{\n        NSLog(@\"%@\",error);\n    }\n"}]}]}]},{type:a,value:c},{type:b,tag:U,props:{start:5},children:[{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"运行"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:k,props:{alt:"2017060793692img.png",src:"http:\u002F\u002Fupload-images.jianshu.io\u002Fupload_images\u002F1196804-937b3d5dcb2237bd.png?imageMogr2\u002Fauto-orient\u002Fstrip%7CimageView2\u002F2\u002Fw\u002F1240"},children:[]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"ok,先这样了。 明天用公司的卡片试试。。"}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"参考\n"},{type:b,tag:j,props:{href:Z,rel:[w,x,y],target:z},children:[{type:a,value:Z}]},{type:a,value:c},{type:b,tag:j,props:{href:_,rel:[w,x,y],target:z},children:[{type:a,value:_}]}]},{type:a,value:c}]}]},excerpt:{type:L,children:[{type:b,tag:f,props:{},children:[{type:a,value:M},{type:b,tag:g,props:{},children:[{type:a,value:N}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:P}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:Q}]}]},dir:"\u002Fwiki\u002FiOS\u002F适配",path:$,extension:".md",createdAt:aa,updatedAt:aa},prev:{slug:ab,date:ac,title:ad},next:{slug:ae,title:af,date:ag},scrollTop:ah,sideCategory:[{folderName:"iOS",articles:[{slug:"iOS-Swift-ObjectMapper 指南",title:"Swift-ObjectMapper 指南",date:"2016-05-23 16:13",path:"\u002Fwiki\u002FiOS\u002FiOS-Swift-ObjectMapper 指南"},{slug:"iOS-URL Schemes && Universal Links 简单使用",title:"URL Schemes && Universal Links 简单使用",date:"2017-02-14T00:00:00.000Z",path:"\u002Fwiki\u002FiOS\u002FiOS-URL Schemes && Universal Links 简单使用"},{slug:"iOS-YYModel",title:"YYModel几种使用场景",date:ai,path:"\u002Fwiki\u002FiOS\u002FiOS-YYModel"},{slug:"iOS-ios-useful-link",title:"'实用链接",date:"2017-07-14T16:58:04.000Z",path:"\u002Fwiki\u002FiOS\u002FiOS-ios-useful-link"},{slug:"iOS-mrpeak杂货铺-iOS应用层架构之CDD",title:"(转)mrpeak杂货铺-iOS应用层架构之CDD",date:aj,path:"\u002Fwiki\u002FiOS\u002FiOS-mrpeak杂货铺-iOS应用层架构之CDD"},{slug:"iOS-检测离屏渲染与绘制高性能圆角",title:"(待)检测离屏渲染与绘制高性能圆角",date:"2017-08-17T10:03:56.000Z",path:"\u002Fwiki\u002FiOS\u002FiOS-检测离屏渲染与绘制高性能圆角"},{slug:"iOS-深度重构UIViewController",title:"(转)mrpeak杂货铺-深度重构UIViewController",date:"2017-11-19T21:33:42.000Z",path:"\u002Fwiki\u002FiOS\u002FiOS-深度重构UIViewController"},{slug:"iOS-添加字体库",title:"使用第三方字体",date:aj,path:"\u002Fwiki\u002FiOS\u002FiOS-添加字体库"}],children:[{folderName:"3part",articles:[{slug:"3part-umeng-install",title:"快速集成友盟分享",date:"2018-03-01 16:11",path:"\u002Fwiki\u002FiOS\u002F3part\u002F3part-umeng-install"},{slug:"3part-快速集成微信支付",title:"快速集成微信\u002F支付宝\u002F银联",date:"2017-11-17T16:19:25.000Z",path:"\u002Fwiki\u002FiOS\u002F3part\u002F3part-快速集成微信支付"},{slug:"3part-快速集成百度地图",title:"集成百度地图、百度导航",date:"2017-08-11T11:24:43.000Z",path:"\u002Fwiki\u002FiOS\u002F3part\u002F3part-快速集成百度地图"},{slug:"3part-阿里云视频点播集成",date:"2020-10-26T01:10:15.000Z",title:"阿里云视频点播VOD",path:"\u002Fwiki\u002FiOS\u002F3part\u002F3part-阿里云视频点播集成"}],children:[]},{folderName:"Autolayout",articles:[{slug:"Autolayout-baseline",title:"label底部对齐、顶部对齐",date:ak,path:"\u002Fwiki\u002FiOS\u002FAutolayout\u002FAutolayout-baseline"}],children:[]},{folderName:"Error",articles:[{slug:"Error-2017-07-31",title:"Undefined symbols for architecture ..",date:"2017-07-31T08:52:40.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-2017-07-31"},{slug:"Error-Shell-Script-Invocation-Error",title:"'Shell Script Invocation Error'",date:"2017-07-20T14:27:04.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-Shell-Script-Invocation-Error"},{slug:"Error-gesture",title:"tableViewCell的点击和tapGestureRecognizer冲突的处理",date:"2016-11-19T21:33:42.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-gesture"},{slug:"Error-崩溃分析",date:"2020-11-11T07:28:34.000Z",title:"崩溃分析(转载)",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-崩溃分析"},{slug:"Error-竖屏下视频全屏播放",title:"(转)竖屏下视频全屏播放",date:"2017-08-01T15:23:01.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-竖屏下视频全屏播放"},{slug:"Error-证书过期或者移除对app的影响",title:"证书过期或者移除对app的影响",date:"2018-01-11T13:49:33.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-证书过期或者移除对app的影响"}],children:[]},{folderName:"Objective-C",articles:[{slug:"Objective-C-KVO - Observe property of an object contained in a NSArray",title:"KVO - Observe property of an object contained in a NSArray",date:"2017-09-28 22:26",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-KVO - Observe property of an object contained in a NSArray"},{slug:"Objective-C-NSArrayFilter",title:"NSArray: filteredArrayUsingPredicate",date:"2017-09-14 16:24",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-NSArrayFilter"},{slug:"Objective-C-NSRecursiveLock",date:"2020-10-27T00:52:16.000Z",title:"NSRecursiveLock",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-NSRecursiveLock"},{slug:"Objective-C-NSStringCompareOptions",title:"NSStringCompareOptions",date:"2017-07-10T17:13:25.000Z",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-NSStringCompareOptions"},{slug:"Objective-C-containsObject-or-removeObject",title:"containsObject or removeObject",date:"2015年04月12日09:55:35",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-containsObject-or-removeObject"},{slug:"Objective-C-get-lunarholidays",title:"节气、节假日计算",date:"2017-07-13T09:30:26.000Z",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-get-lunarholidays"},{slug:"Objective-C-use-dispatch_queue_t-with-strong",title:"dispatch_queue_t 用strong来修饰",date:ai,path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-use-dispatch_queue_t-with-strong"},{slug:"Objective-C-农历",title:"农历",date:"2017-07-11T13:12:46.000Z",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-农历"},{slug:"Objective-C-常用的宏",title:"常用的宏",date:"2015-03-04 11:11",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-常用的宏"}],children:[]},{folderName:"StatusBar",articles:[{slug:"StatusBar-how-to-detect-touches-in-status-bar",title:"获取StatusBar的点击事件",date:al,path:"\u002Fwiki\u002FiOS\u002FStatusBar\u002FStatusBar-how-to-detect-touches-in-status-bar"},{slug:"StatusBar-ios-status-bar-style",title:"修改StatusBarStyle以及statusBar的背景颜色",date:al,path:"\u002Fwiki\u002FiOS\u002FStatusBar\u002FStatusBar-ios-status-bar-style"}],children:[]},{folderName:"UIKit",articles:[{slug:"UIKit-UIAlertController修改文字对齐方式",date:"2020-10-23T08:07:07.000Z",title:"UIAlertController修改文字对齐方式",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-UIAlertController修改文字对齐方式"},{slug:"UIKit-UIDynamic Animator",title:"UIDynamic Animator",date:"2016-07-20T16:13:11.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-UIDynamic Animator"},{slug:"UIKit-UISplit​View​Controller 学习笔记",title:"UISplit​View​Controller 学习笔记",date:"2017-04-07T00:00:00.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-UISplit​View​Controller 学习笔记"},{slug:"UIKit-searchBar-style",title:"如何修改searchBar的样式",date:"2017-05-14T19:01:01.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-searchBar-style"},{slug:"UIKit-uioffset",title:"UIOffset",date:"2017-08-02T15:30:01.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-uioffset"},{slug:"UIKit-屏幕旋转.md",date:"2020-11-09T06:04:42.000Z",title:"屏幕旋转",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-屏幕旋转.md"},{slug:"UIKit-离屏渲染",title:"(转)关于iOS离屏渲染的深入研究",date:"2020-04-06T00:00:00.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-离屏渲染"},{slug:"UIKit-给WebView添加个粗糙的加载动画",title:"给UIWebView添加个粗糙的加载动画",date:"2017-02-10T00:00:00.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-给WebView添加个粗糙的加载动画"}],children:[]},{folderName:"UITextFeild",articles:[{slug:"UITextFeild-2018-01-16",title:"修改光标颜色和clear button的颜色",date:"2018-01-16T15:44:44.000Z",path:"\u002Fwiki\u002FiOS\u002FUITextFeild\u002FUITextFeild-2018-01-16"},{slug:"UITextFeild-uitextfeild-select-all",title:"默认选中文本",date:"2017-07-07 04:44",path:"\u002Fwiki\u002FiOS\u002FUITextFeild\u002FUITextFeild-uitextfeild-select-all"}],children:[]},{folderName:"keyboard",articles:[{slug:"keyboard-disable-3rd-keyboard",title:"禁用第三方键盘",date:ak,path:"\u002Fwiki\u002FiOS\u002Fkeyboard\u002Fkeyboard-disable-3rd-keyboard"}],children:[]},{folderName:"loc",articles:[{slug:"loc-2018-01-22",title:"CLPlacemark中文",date:"2018-01-22T14:36:49.000Z",path:"\u002Fwiki\u002FiOS\u002Floc\u002Floc-2018-01-22"},{slug:"loc-sim-locaiton-ios",title:"真机或模拟器修改定位位置",date:"2017-08-11T10:29:01.000Z",path:"\u002Fwiki\u002FiOS\u002Floc\u002Floc-sim-locaiton-ios"}],children:[]},{folderName:"tableView",articles:[{slug:"tableView-cell-seprateLine",title:"cell分割线的颜色",date:"2017-08-08T15:26:14.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-cell-seprateLine"},{slug:"tableView-compare-NSIndexPath",title:"compare NSIndexPath",date:"2017-08-15T17:01:49.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-compare-NSIndexPath"},{slug:"tableView-tabeleView 获取某个cell的高度",title:"tabeleView 获取某个cell的高度",date:"2017-05-09T10:36:29.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-tabeleView 获取某个cell的高度"},{slug:"tableView-taleview-headerfooterView-xib",title:"xib UITableViewHeaderFooterView",date:"2017-08-18T09:47:36.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-taleview-headerfooterView-xib"},{slug:"tableView-结合layoutMargins做tableViewCell的适配",title:"结合layoutMargins做cell的适配",date:"2017-08-20T21:55:52.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-结合layoutMargins做tableViewCell的适配"}],children:[]},{folderName:"xib",articles:[{slug:"xib-如何替换已有的控件",title:"如何替换已有的控件",date:"2017-09-07T10:51:38.000Z",path:"\u002Fwiki\u002FiOS\u002Fxib\u002Fxib-如何替换已有的控件"}],children:[]},{folderName:"代码片段",articles:[{slug:"代码片段-分割小说章节",title:"分割小说章节",date:"2017-01-18T15:12:12.000Z",path:"\u002Fwiki\u002FiOS\u002F代码片段\u002F代码片段-分割小说章节"},{slug:"代码片段-截图 截长图 高清图",title:"截图 截长图 高清图",date:"2016-05-04 22:38",path:"\u002Fwiki\u002FiOS\u002F代码片段\u002F代码片段-截图 截长图 高清图"},{slug:"代码片段-读取未知类型的txt文件",title:"读取未知类型的txt文件 ",date:"2017-01-16 20:12",path:"\u002Fwiki\u002FiOS\u002F代码片段\u002F代码片段-读取未知类型的txt文件"}],children:[]},{folderName:"包管理工具",articles:[{slug:"包管理工具-spm-introduce",date:"2020-11-18T08:08:33.000Z",title:"Swift Package Manager介绍",path:"\u002Fwiki\u002FiOS\u002F包管理工具\u002F包管理工具-spm-introduce"},{slug:ab,date:ac,title:ad,path:"\u002Fwiki\u002FiOS\u002F包管理工具\u002F包管理工具-spm-resource-handle"}],children:[]},{folderName:"日历",articles:[{slug:"日历-FSCalendar",title:"FSCalendar",date:"2017-07-11T08:48:12.000Z",path:"\u002Fwiki\u002FiOS\u002F日历\u002F日历-FSCalendar"}],children:[]},{folderName:"适配",articles:[{slug:G,title:H,date:I,path:$},{slug:"适配-iOS11 Xcode9新功能新特性",title:"iOS11 Xcode9新功能新特性",date:am,path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS11 Xcode9新功能新特性"},{slug:ae,title:af,date:ag,path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS11 tableView适配不完全指南"},{slug:"适配-iOS11刘海屏EdgeProtect相关",date:"2020-10-26T06:00:25.000Z",title:"iOS11刘海屏EdgeProtect相关",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS11刘海屏EdgeProtect相关"},{slug:"适配-iOS11适配参考",title:"iOS11 适配参考",date:am,path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS11适配参考"},{slug:"适配-iOS14hidesBottomBarWhenPushed兼容问题",date:"2020-10-23T08:53:49.000Z",title:"iOS14 hidesBottomBarWhenPushed兼容问题",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS14hidesBottomBarWhenPushed兼容问题"},{slug:"适配-touch-id",title:"touch Id",date:"2017-08-04T13:46:10.000Z",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-touch-id"}],children:[]},{folderName:"问与答",articles:[{slug:"问与答-为什么ui操作要在主线程",date:"2020-11-16T03:38:48.000Z",title:"为什么ui操作要在主线程",path:"\u002Fwiki\u002FiOS\u002F问与答\u002F问与答-为什么ui操作要在主线程"}],children:[]}]}]}],fetch:{},mutations:ah}}("text","element","\n","span","token","p","code","tag","punctuation","a","img","\u003E","li","概述","实现",2,"h2","true",-1,"icon","icon-link","blockquote","nofollow","noopener","noreferrer","_blank","div","nuxt-content-highlight","pre","line-numbers","\u003C","\u003C\u002F","适配-NFC初试","NFC初试","2017-06-07 18:31","判断是否支持nfc","判断是否支持NFC","root","iPhone6开始开始支持NFC(","Near Field Communication"," ),但是最近苹果最近开放了NFC的部分接口。","可以实现检测NFC标签(NFC tags)并读取包含NDEF(NFC Data Exchange Format)数据。","最起码能当读卡器玩了吧。","NDEF","https:\u002F\u002Fdeveloper.apple.com\u002Fdocumentation\u002Fcorenfc\u002Fnfcndefreadersession\u002F2915854-readingavailable","language-text","ol","key","\n    ","array","string","https:\u002F\u002Fdeveloper.apple.com\u002Fdocumentation\u002Fcorenfc","https:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F44380305\u002Fios-11-core-nfc-any-sample-code","\u002Fwiki\u002FiOS\u002F适配\u002F适配-NFC初试","2021-11-18T07:37:48.012Z","包管理工具-spm-resource-handle","2020-11-19T00:58:59.000Z","SWift Package Manager资源文件管理","适配-iOS11 tableView适配不完全指南","iOS11 tableView适配不完全指南","2017-09-19 12:33",void 0,"2017-08-31T09:32:08.000Z","2017-10-27T18:01:13.000Z","2017-08-19T16:10:51.000Z","2016-07-01T14:19:23.000Z","2017-09-20T15:20:33.000Z")));