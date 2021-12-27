__NUXT_JSONP__("/wiki/content/Objective-C-%E5%B8%B8%E7%94%A8%E7%9A%84%E5%AE%8F", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T){return {data:[{},{article:{slug:w,description:u,title:x,layout:"page",date:y,toc:[{id:r,depth:e,text:r},{id:s,depth:e,text:s},{id:z,depth:e,text:A},{id:B,depth:e,text:C},{id:D,depth:e,text:E},{id:t,depth:e,text:t}],body:{type:F,children:[{type:a,tag:v,props:{},children:[{type:b,value:u}]},{type:b,value:c},{type:b,value:" \n"},{type:a,tag:f,props:{id:r},children:[{type:a,tag:d,props:{href:"#%E5%B8%B8%E7%94%A8%E5%AE%8F",ariaHidden:g,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:r}]},{type:b,value:c},{type:a,tag:l,props:{className:[m]},children:[{type:a,tag:n,props:{className:[o,p]},children:[{type:a,tag:q,props:{},children:[{type:b,value:"\u002F\u002F屏幕宽高\n#define kScreenWidth   [UIScreen mainScreen].bounds.size.width\n#define kScreenHeight  [UIScreen mainScreen].bounds.size.height \n\n\u002F\u002F颜色\n#define YJColor(r,g,b) [UIColor colorWithRed:r\u002F255.0f green:g\u002F255.0f blue:b\u002F255.0f alpha:1]\n#define YJRandomColor [UIColor colorWithRed:arc4random()%255\u002F255.0 green:arc4random()%255\u002F255.0 blue:arc4random()%255\u002F255.0 alpha:1];\n#define HEXCOLOR(c)  [UIColor colorWithRed:((c\u003E\u003E16)&0xFF)\u002F255.0 green:((c\u003E\u003E8)&0xFF)\u002F255.0 blue:(c&0xFF)\u002F255.0 alpha:1.0];\n \n \n#define NSStringFromBool(b) (b ? @\"YES\" : @\"NO\")\n\n \n\u002F\u002FweakSelf\n#define WS(weakSelf) __weak __typeof(&*self)weakSelf = self \n\n\u002F\u002FStringValue\n#define StringValue(s) ([s isKindOfClass:[NSNull class]] || [s isEqual:[NSNull null]] || s == nil)?@\"\":s\n\n#define IsNilOrNull(_ref)   (((_ref) == nil) || ([(_ref) isEqual:[NSNull null]])) \n\n#define IsPortrait ([UIApplication sharedApplication].statusBarOrientation == UIInterfaceOrientationPortrait || [UIApplication sharedApplication].statusBarOrientation == UIInterfaceOrientationPortraitUpsideDown)\n\n\u002F\u002F角度转弧度 弧度转角度\n#define DEGREES_TO_RADIANS(d) (d * M_PI \u002F 180) \n#define Radian_To_Degrees(r) (r*180.0)\u002F(M_PI)\n"}]}]}]},{type:b,value:c},{type:a,tag:f,props:{id:s},children:[{type:a,tag:d,props:{href:"#%E6%B2%99%E7%9B%92",ariaHidden:g,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:s}]},{type:b,value:c},{type:a,tag:l,props:{className:[m]},children:[{type:a,tag:n,props:{className:[o,p]},children:[{type:a,tag:q,props:{},children:[{type:b,value:"#define kPathTemp                   NSTemporaryDirectory()\n#define kPathDocument               [NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES) objectAtIndex:0]\n#define kPathCache                  [NSSearchPathForDirectoriesInDomains(NSCachesDirectory, NSUserDomainMask, YES) objectAtIndex:0]\n"}]}]}]},{type:b,value:c},{type:a,tag:f,props:{id:z},children:[{type:a,tag:d,props:{href:"#system-version",ariaHidden:g,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:A}]},{type:b,value:c},{type:a,tag:l,props:{className:[m]},children:[{type:a,tag:n,props:{className:[o,p]},children:[{type:a,tag:q,props:{},children:[{type:b,value:"\u002F\u002F选自YYText\nstatic double _YYDeviceSystemVersion() {\n    static double version;\n    static dispatch_once_t onceToken;\n    dispatch_once(&onceToken, ^{\n        version = [UIDevice currentDevice].systemVersion.doubleValue;\n    });\n    return version;\n}\n\n#ifndef kSystemVersion\n#define kSystemVersion _YYDeviceSystemVersion()\n#endif\n\n#ifndef kiOS6Later\n#define kiOS6Later (kSystemVersion \u003E= 6)\n#endif\n\n#ifndef kiOS7Later\n#define kiOS7Later (kSystemVersion \u003E= 7)\n#endif\n\n#ifndef kiOS8Later\n#define kiOS8Later (kSystemVersion \u003E= 8)\n#endif\n\n#ifndef kiOS9Later\n#define kiOS9Later (kSystemVersion \u003E= 9)\n#endif\n"}]}]}]},{type:b,value:c},{type:a,tag:f,props:{id:B},children:[{type:a,tag:d,props:{href:"#dlog",ariaHidden:g,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:C}]},{type:b,value:c},{type:a,tag:l,props:{className:[m]},children:[{type:a,tag:n,props:{className:[o,p]},children:[{type:a,tag:q,props:{},children:[{type:b,value:"#ifdef DEBUG\n#define LRString [NSString stringWithFormat:@\"%s\", __FILE__].lastPathComponent\n#define DLog(...) printf(\"%s: [%s:%d]: %s\\n\\n\",[[NSString yj_stringDate] UTF8String], [LRString UTF8String] ,__LINE__, [[NSString stringWithFormat:__VA_ARGS__] UTF8String]);\n#else\n#define DLog(...)\n#endif \n\n\u002F\u002F yj_stringDate 是NSString的类别方法\n+ (NSString *)yj_stringDate {\n    NSDateFormatter *dateFormatter = [[NSDateFormatter alloc] init];\n    [dateFormatter setDateFormat:@\"YYYY-MM-dd hh:mm:ss\"];\n    NSString *dateString = [dateFormatter stringFromDate:[NSDate date]];\n    return dateString;\n}\n"}]}]}]},{type:b,value:c},{type:a,tag:f,props:{id:D},children:[{type:a,tag:d,props:{href:"#%E7%B3%BB%E7%BB%9F%E5%AE%8F",ariaHidden:g,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:E}]},{type:b,value:c},{type:a,tag:l,props:{className:[m]},children:[{type:a,tag:n,props:{className:[o,p]},children:[{type:a,tag:q,props:{},children:[{type:b,value:"\u002F\u002F ARC \n#if __has_feature(objc_arc) \n    \u002F\u002Farc\n#else \n    \u002F\u002Fmrc \n#endif\n#ifdef __OBJC__\n    \u002F\u002F Objectice-C \n#endif\n\n#if TARGET_OS_IPHONE \n    \u002F\u002F iPhone \n#endif \n\n#if TARGET_IPHONE_SIMULATOR \n    \u002F\u002FSimulator\n#endif  \n\n\u002F\u002F描述方法iOS10引入\n- (void)myMethod NS_AVAILABLE_IOS(10_0);\n\n\u002F\u002F描述方法iOS2引入iOS6废弃\n- (void)myMethod2  NS_DEPRECATED_IOS(2_0, 6_0) ;\n\n\u002F\u002F描述方法被禁用\n\u002F\u002Fhttp:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F4924285\u002Fhow-to-deprecate-a-method-in-xcode\n\u002F\u002FIt defined in usr\u002Finclude\u002FAvailabilityMacros.h:\n\u002F\u002F#define DEPRECATED_ATTRIBUTE        __attribute__((deprecated))\n\u002F\u002F#define DEPRECATED_MSG_ATTRIBUTE(msg) __attribute((deprecated((msg))))\n-(void)foo:(id)x  DEPRECATED_ATTRIBUTE；\n- (void)bar:(id)x DEPRECATED_MSG_ATTRIBUTE(\"Use baz: method instead.\")\n\n"}]}]}]},{type:b,value:c},{type:a,tag:f,props:{id:t},children:[{type:a,tag:d,props:{href:"#%E8%A1%A5%E5%85%85",ariaHidden:g,tabIndex:h},children:[{type:a,tag:i,props:{className:[j,k]},children:[]}]},{type:b,value:t}]},{type:b,value:c},{type:a,tag:v,props:{},children:[{type:a,tag:d,props:{href:"http:\u002F\u002Fwww.jianshu.com\u002Fp\u002F213b3b96cafe",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:b,value:"设置view圆角和边框 "}]}]},{type:b,value:c},{type:a,tag:l,props:{className:[m]},children:[{type:a,tag:n,props:{className:[o,p]},children:[{type:a,tag:q,props:{},children:[{type:b,value:"#define LRViewBorderRadius(View, Radius, Width, Color)\\\n\\\n[View.layer setCornerRadius:(Radius)];\\\n[View.layer setMasksToBounds:YES];\\\n[View.layer setBorderWidth:(Width)];\\\n[View.layer setBorderColor:[Color CGColor]]\n"}]}]}]}]},excerpt:{type:F,children:[{type:a,tag:v,props:{},children:[{type:b,value:u}]}]},dir:"\u002Fwiki\u002FiOS\u002FObjective-C",path:G,extension:".md",createdAt:H,updatedAt:H},prev:{slug:I,date:J,title:K},next:{slug:L,title:M,date:N},scrollTop:O,sideCategory:[{folderName:"iOS",articles:[{slug:"iOS-Swift-ObjectMapper 指南",title:"Swift-ObjectMapper 指南",date:"2016-05-23 16:13",path:"\u002Fwiki\u002FiOS\u002FiOS-Swift-ObjectMapper 指南"},{slug:"iOS-URL Schemes && Universal Links 简单使用",title:"URL Schemes && Universal Links 简单使用",date:"2017-02-14T00:00:00.000Z",path:"\u002Fwiki\u002FiOS\u002FiOS-URL Schemes && Universal Links 简单使用"},{slug:"iOS-YYModel",title:"YYModel几种使用场景",date:P,path:"\u002Fwiki\u002FiOS\u002FiOS-YYModel"},{slug:"iOS-ios-useful-link",title:"'实用链接",date:"2017-07-14T16:58:04.000Z",path:"\u002Fwiki\u002FiOS\u002FiOS-ios-useful-link"},{slug:"iOS-mrpeak杂货铺-iOS应用层架构之CDD",title:"(转)mrpeak杂货铺-iOS应用层架构之CDD",date:Q,path:"\u002Fwiki\u002FiOS\u002FiOS-mrpeak杂货铺-iOS应用层架构之CDD"},{slug:"iOS-检测离屏渲染与绘制高性能圆角",title:"(待)检测离屏渲染与绘制高性能圆角",date:"2017-08-17T10:03:56.000Z",path:"\u002Fwiki\u002FiOS\u002FiOS-检测离屏渲染与绘制高性能圆角"},{slug:"iOS-深度重构UIViewController",title:"(转)mrpeak杂货铺-深度重构UIViewController",date:"2017-11-19T21:33:42.000Z",path:"\u002Fwiki\u002FiOS\u002FiOS-深度重构UIViewController"},{slug:"iOS-添加字体库",title:"使用第三方字体",date:Q,path:"\u002Fwiki\u002FiOS\u002FiOS-添加字体库"}],children:[{folderName:"3part",articles:[{slug:"3part-umeng-install",title:"快速集成友盟分享",date:"2018-03-01 16:11",path:"\u002Fwiki\u002FiOS\u002F3part\u002F3part-umeng-install"},{slug:"3part-快速集成微信支付",title:"快速集成微信\u002F支付宝\u002F银联",date:"2017-11-17T16:19:25.000Z",path:"\u002Fwiki\u002FiOS\u002F3part\u002F3part-快速集成微信支付"},{slug:"3part-快速集成百度地图",title:"集成百度地图、百度导航",date:"2017-08-11T11:24:43.000Z",path:"\u002Fwiki\u002FiOS\u002F3part\u002F3part-快速集成百度地图"},{slug:"3part-阿里云视频点播集成",date:"2020-10-26T01:10:15.000Z",title:"阿里云视频点播VOD",path:"\u002Fwiki\u002FiOS\u002F3part\u002F3part-阿里云视频点播集成"}],children:[]},{folderName:"Autolayout",articles:[{slug:"Autolayout-baseline",title:"label底部对齐、顶部对齐",date:R,path:"\u002Fwiki\u002FiOS\u002FAutolayout\u002FAutolayout-baseline"}],children:[]},{folderName:"Error",articles:[{slug:"Error-2017-07-31",title:"Undefined symbols for architecture ..",date:"2017-07-31T08:52:40.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-2017-07-31"},{slug:"Error-Shell-Script-Invocation-Error",title:"'Shell Script Invocation Error'",date:"2017-07-20T14:27:04.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-Shell-Script-Invocation-Error"},{slug:"Error-gesture",title:"tableViewCell的点击和tapGestureRecognizer冲突的处理",date:"2016-11-19T21:33:42.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-gesture"},{slug:I,date:J,title:K,path:"\u002Fwiki\u002FiOS\u002FError\u002FError-崩溃分析"},{slug:"Error-竖屏下视频全屏播放",title:"(转)竖屏下视频全屏播放",date:"2017-08-01T15:23:01.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-竖屏下视频全屏播放"},{slug:"Error-证书过期或者移除对app的影响",title:"证书过期或者移除对app的影响",date:"2018-01-11T13:49:33.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-证书过期或者移除对app的影响"}],children:[]},{folderName:"Objective-C",articles:[{slug:"Objective-C-KVO - Observe property of an object contained in a NSArray",title:"KVO - Observe property of an object contained in a NSArray",date:"2017-09-28 22:26",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-KVO - Observe property of an object contained in a NSArray"},{slug:"Objective-C-NSArrayFilter",title:"NSArray: filteredArrayUsingPredicate",date:"2017-09-14 16:24",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-NSArrayFilter"},{slug:"Objective-C-NSRecursiveLock",date:"2020-10-27T00:52:16.000Z",title:"NSRecursiveLock",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-NSRecursiveLock"},{slug:"Objective-C-NSStringCompareOptions",title:"NSStringCompareOptions",date:"2017-07-10T17:13:25.000Z",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-NSStringCompareOptions"},{slug:L,title:M,date:N,path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-containsObject-or-removeObject"},{slug:"Objective-C-get-lunarholidays",title:"节气、节假日计算",date:"2017-07-13T09:30:26.000Z",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-get-lunarholidays"},{slug:"Objective-C-use-dispatch_queue_t-with-strong",title:"dispatch_queue_t 用strong来修饰",date:P,path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-use-dispatch_queue_t-with-strong"},{slug:"Objective-C-农历",title:"农历",date:"2017-07-11T13:12:46.000Z",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-农历"},{slug:w,title:x,date:y,path:G}],children:[]},{folderName:"StatusBar",articles:[{slug:"StatusBar-how-to-detect-touches-in-status-bar",title:"获取StatusBar的点击事件",date:S,path:"\u002Fwiki\u002FiOS\u002FStatusBar\u002FStatusBar-how-to-detect-touches-in-status-bar"},{slug:"StatusBar-ios-status-bar-style",title:"修改StatusBarStyle以及statusBar的背景颜色",date:S,path:"\u002Fwiki\u002FiOS\u002FStatusBar\u002FStatusBar-ios-status-bar-style"}],children:[]},{folderName:"UIKit",articles:[{slug:"UIKit-UIAlertController修改文字对齐方式",date:"2020-10-23T08:07:07.000Z",title:"UIAlertController修改文字对齐方式",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-UIAlertController修改文字对齐方式"},{slug:"UIKit-UIDynamic Animator",title:"UIDynamic Animator",date:"2016-07-20T16:13:11.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-UIDynamic Animator"},{slug:"UIKit-UISplit​View​Controller 学习笔记",title:"UISplit​View​Controller 学习笔记",date:"2017-04-07T00:00:00.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-UISplit​View​Controller 学习笔记"},{slug:"UIKit-searchBar-style",title:"如何修改searchBar的样式",date:"2017-05-14T19:01:01.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-searchBar-style"},{slug:"UIKit-uioffset",title:"UIOffset",date:"2017-08-02T15:30:01.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-uioffset"},{slug:"UIKit-屏幕旋转.md",date:"2020-11-09T06:04:42.000Z",title:"屏幕旋转",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-屏幕旋转.md"},{slug:"UIKit-离屏渲染",title:"(转)关于iOS离屏渲染的深入研究",date:"2020-04-06T00:00:00.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-离屏渲染"},{slug:"UIKit-给WebView添加个粗糙的加载动画",title:"给UIWebView添加个粗糙的加载动画",date:"2017-02-10T00:00:00.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-给WebView添加个粗糙的加载动画"}],children:[]},{folderName:"UITextFeild",articles:[{slug:"UITextFeild-2018-01-16",title:"修改光标颜色和clear button的颜色",date:"2018-01-16T15:44:44.000Z",path:"\u002Fwiki\u002FiOS\u002FUITextFeild\u002FUITextFeild-2018-01-16"},{slug:"UITextFeild-uitextfeild-select-all",title:"默认选中文本",date:"2017-07-07 04:44",path:"\u002Fwiki\u002FiOS\u002FUITextFeild\u002FUITextFeild-uitextfeild-select-all"}],children:[]},{folderName:"keyboard",articles:[{slug:"keyboard-disable-3rd-keyboard",title:"禁用第三方键盘",date:R,path:"\u002Fwiki\u002FiOS\u002Fkeyboard\u002Fkeyboard-disable-3rd-keyboard"}],children:[]},{folderName:"loc",articles:[{slug:"loc-2018-01-22",title:"CLPlacemark中文",date:"2018-01-22T14:36:49.000Z",path:"\u002Fwiki\u002FiOS\u002Floc\u002Floc-2018-01-22"},{slug:"loc-sim-locaiton-ios",title:"真机或模拟器修改定位位置",date:"2017-08-11T10:29:01.000Z",path:"\u002Fwiki\u002FiOS\u002Floc\u002Floc-sim-locaiton-ios"}],children:[]},{folderName:"tableView",articles:[{slug:"tableView-cell-seprateLine",title:"cell分割线的颜色",date:"2017-08-08T15:26:14.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-cell-seprateLine"},{slug:"tableView-compare-NSIndexPath",title:"compare NSIndexPath",date:"2017-08-15T17:01:49.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-compare-NSIndexPath"},{slug:"tableView-tabeleView 获取某个cell的高度",title:"tabeleView 获取某个cell的高度",date:"2017-05-09T10:36:29.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-tabeleView 获取某个cell的高度"},{slug:"tableView-taleview-headerfooterView-xib",title:"xib UITableViewHeaderFooterView",date:"2017-08-18T09:47:36.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-taleview-headerfooterView-xib"},{slug:"tableView-结合layoutMargins做tableViewCell的适配",title:"结合layoutMargins做cell的适配",date:"2017-08-20T21:55:52.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-结合layoutMargins做tableViewCell的适配"}],children:[]},{folderName:"xib",articles:[{slug:"xib-如何替换已有的控件",title:"如何替换已有的控件",date:"2017-09-07T10:51:38.000Z",path:"\u002Fwiki\u002FiOS\u002Fxib\u002Fxib-如何替换已有的控件"}],children:[]},{folderName:"代码片段",articles:[{slug:"代码片段-分割小说章节",title:"分割小说章节",date:"2017-01-18T15:12:12.000Z",path:"\u002Fwiki\u002FiOS\u002F代码片段\u002F代码片段-分割小说章节"},{slug:"代码片段-截图 截长图 高清图",title:"截图 截长图 高清图",date:"2016-05-04 22:38",path:"\u002Fwiki\u002FiOS\u002F代码片段\u002F代码片段-截图 截长图 高清图"},{slug:"代码片段-读取未知类型的txt文件",title:"读取未知类型的txt文件 ",date:"2017-01-16 20:12",path:"\u002Fwiki\u002FiOS\u002F代码片段\u002F代码片段-读取未知类型的txt文件"}],children:[]},{folderName:"包管理工具",articles:[{slug:"包管理工具-spm-introduce",date:"2020-11-18T08:08:33.000Z",title:"Swift Package Manager介绍",path:"\u002Fwiki\u002FiOS\u002F包管理工具\u002F包管理工具-spm-introduce"},{slug:"包管理工具-spm-resource-handle",date:"2020-11-19T00:58:59.000Z",title:"SWift Package Manager资源文件管理",path:"\u002Fwiki\u002FiOS\u002F包管理工具\u002F包管理工具-spm-resource-handle"}],children:[]},{folderName:"日历",articles:[{slug:"日历-FSCalendar",title:"FSCalendar",date:"2017-07-11T08:48:12.000Z",path:"\u002Fwiki\u002FiOS\u002F日历\u002F日历-FSCalendar"}],children:[]},{folderName:"适配",articles:[{slug:"适配-NFC初试",title:"NFC初试",date:"2017-06-07 18:31",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-NFC初试"},{slug:"适配-iOS11 Xcode9新功能新特性",title:"iOS11 Xcode9新功能新特性",date:T,path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS11 Xcode9新功能新特性"},{slug:"适配-iOS11 tableView适配不完全指南",title:"iOS11 tableView适配不完全指南",date:"2017-09-19 12:33",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS11 tableView适配不完全指南"},{slug:"适配-iOS11刘海屏EdgeProtect相关",date:"2020-10-26T06:00:25.000Z",title:"iOS11刘海屏EdgeProtect相关",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS11刘海屏EdgeProtect相关"},{slug:"适配-iOS11适配参考",title:"iOS11 适配参考",date:T,path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS11适配参考"},{slug:"适配-iOS14hidesBottomBarWhenPushed兼容问题",date:"2020-10-23T08:53:49.000Z",title:"iOS14 hidesBottomBarWhenPushed兼容问题",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS14hidesBottomBarWhenPushed兼容问题"},{slug:"适配-touch-id",title:"touch Id",date:"2017-08-04T13:46:10.000Z",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-touch-id"}],children:[]},{folderName:"问与答",articles:[{slug:"问与答-为什么ui操作要在主线程",date:"2020-11-16T03:38:48.000Z",title:"为什么ui操作要在主线程",path:"\u002Fwiki\u002FiOS\u002F问与答\u002F问与答-为什么ui操作要在主线程"}],children:[]}]}]}],fetch:{},mutations:O}}("element","text","\n","a",2,"h2","true",-1,"span","icon","icon-link","div","nuxt-content-highlight","pre","language-text","line-numbers","code","常用宏","沙盒","补充","记录下iOS开发中的常见的宏。","p","Objective-C-常用的宏","常用的宏","2015-03-04 11:11","system-version","System Version","dlog","DLog","系统宏","系统宏:","root","\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-常用的宏","2021-12-27T10:01:01.262Z","Error-崩溃分析","2020-11-11T07:28:34.000Z","崩溃分析(转载)","Objective-C-containsObject-or-removeObject","containsObject or removeObject","2015年04月12日09:55:35",void 0,"2017-08-31T09:32:08.000Z","2017-10-27T18:01:13.000Z","2017-08-19T16:10:51.000Z","2016-07-01T14:19:23.000Z","2017-09-20T15:20:33.000Z")));