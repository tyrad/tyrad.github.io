__NUXT_JSONP__("/wiki/content/Error-%E5%B4%A9%E6%BA%83%E5%88%86%E6%9E%90", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae){return {data:[{},{article:{slug:y,draft:false,date:z,title:A,toc:[{id:B,depth:o,text:C},{id:D,depth:o,text:E},{id:F,depth:o,text:G},{id:H,depth:o,text:I},{id:J,depth:o,text:K},{id:v,depth:o,text:v}],body:{type:"root",children:[{type:b,tag:L,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"原文地址 "},{type:b,tag:h,props:{href:"https:\u002F\u002Fwww.jianshu.com\u002Fp\u002Fd64def39e552",rel:[M,N,O],target:P},children:[{type:a,value:"www.jianshu.com"}]},{type:a,value:"\n在调试过程中，相对于莫名的 bug 让人难受，其实如果是 carsh 其实更好捕捉，但是，如果发布到 AppStore 上线之后崩溃了，其实我们也可以很好的定位到具体的问题，并利用一些手段进行修复。首先我们需要 App 中接入统计系统，在应用崩溃时记录下崩溃的日志，并且与服务器进行同步，目前百度统计以及友盟应该算是大家用的表较多的第三方工具，按照文档接入对方的 SDK 后，当上线应用在此碰到崩溃问题时，你就可以查看崩溃日志来定位问题并给他们一个合理的解释。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:Q,props:{id:"首先，firstly，沐浴更衣，准备素材。"},children:[{type:b,tag:h,props:{href:"#%E9%A6%96%E5%85%88%EF%BC%8Cfirstly%EF%BC%8C%E6%B2%90%E6%B5%B4%E6%9B%B4%E8%A1%A3%EF%BC%8C%E5%87%86%E5%A4%87%E7%B4%A0%E6%9D%90%E3%80%82",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:"首先，Firstly，沐浴更衣，准备素材。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"创建一个文件夹，命名为"},{type:b,tag:e,props:{},children:[{type:a,value:"I am the most handsome"}]},{type:a,value:"，起其他名字可能会影响解析结果哦，如下图所示。"}]},{type:a,value:c},{type:b,tag:p,props:{id:B},children:[{type:b,tag:h,props:{href:"#1%E3%80%81dysm-%E6%96%87%E4%BB%B6",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"斋戒沐浴，摆好祭品，大喊一声，太上老君急急如律令，找到打包时生成的"},{type:b,tag:e,props:{},children:[{type:a,value:".xcarchive"}]},{type:a,value:"的文件包（"},{type:b,tag:e,props:{},children:[{type:a,value:"Window -\u003E Organizer"}]},{type:a,value:"），对，就是它："}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"然后"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"显示包内容 -\u003E dSYMs -\u003E MangoDemo.app.dSYM"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"，好的，把它拷贝到你刚刚创建好的文件夹（为了显示自己的与众不同，我顺便改了文件名）。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002F\u002Fimg\u002F20201118085457.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:p,props:{id:D},children:[{type:b,tag:h,props:{href:"#2%E3%80%81crash-%E6%97%A5%E5%BF%97",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"然后，还需要你统计到的 Crash 日志，我们以系统标准格式为准，一些三方平台统计到的信息展示方式会略有不同，我们还是追本溯源，回归本质，同样的，把你的 Crash 日志拷贝到文件夹里："}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002F\u002Fimg\u002F20201118085735.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"然后我们看一下这个 Crash 日志里面都是些啥玩意，如下图："}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F4408163-e7ea3dc825604cf9.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:"h6",props:{id:"只需要这两样东西，我们就能准确的定位到-app-crash-的具体位置。"},children:[{type:b,tag:h,props:{href:"#%E5%8F%AA%E9%9C%80%E8%A6%81%E8%BF%99%E4%B8%A4%E6%A0%B7%E4%B8%9C%E8%A5%BF%EF%BC%8C%E6%88%91%E4%BB%AC%E5%B0%B1%E8%83%BD%E5%87%86%E7%A1%AE%E7%9A%84%E5%AE%9A%E4%BD%8D%E5%88%B0-app-crash-%E7%9A%84%E5%85%B7%E4%BD%93%E4%BD%8D%E7%BD%AE%E3%80%82",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:"只需要这两样东西，我们就能准确的定位到 App Crash 的具体位置。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F4408163-83dae8aca95a3bad.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:Q,props:{id:"然后，the-second-step，我们开始分析。"},children:[{type:b,tag:h,props:{href:"#%E7%84%B6%E5%90%8E%EF%BC%8Cthe-second-step%EF%BC%8C%E6%88%91%E4%BB%AC%E5%BC%80%E5%A7%8B%E5%88%86%E6%9E%90%E3%80%82",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:"然后，The Second Step，我们开始分析。"}]},{type:a,value:c},{type:b,tag:p,props:{id:F},children:[{type:b,tag:h,props:{href:"#1%E3%80%81%E6%97%A0%E6%95%8C%E8%87%AA%E5%8A%A8%E5%8C%96-xcode-%E5%B8%AE%E5%BF%99%E5%88%86%E6%9E%90%E5%A4%A7%E6%B3%95",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"找到一台苹果设备，插上。"}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"选择"},{type:b,tag:e,props:{},children:[{type:a,value:"Window"}]},{type:a,value:R},{type:b,tag:e,props:{},children:[{type:a,value:"Devices and Simulators"}]},{type:a,value:R},{type:b,tag:e,props:{},children:[{type:a,value:"View Device Logs"}]}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"将你的 Crash 日志拖到当前面板左侧。"}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"Xcode 将对你拖入的日志自动进行符号化。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"当然，这是有前提条件的："}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"崩溃对应的应用包以及 dSYM 文件。"}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"崩溃的应用包和 dSYM 文件一一对应。"}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"崩溃时该应用程序运行的操作系统的符号表。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"也就是说，如果这个包是你 Archive 的，直接拖进去，就可以看到符号化的日志啦。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F4408163-891e782477bd3f42.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:p,props:{id:H},children:[{type:b,tag:h,props:{href:"#2%E3%80%81symbolicatecrash-%E4%B8%89%E4%BD%8D%E4%B8%80%E4%BD%93",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"根据刚才的折腾，你的文件夹里已经有两个文件了，我们还需要第三个文件"},{type:b,tag:e,props:{},children:[{type:a,value:S}]},{type:a,value:"。打开你的终端，输入命令："},{type:b,tag:w,props:{},children:[]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"find \u002FApplications\u002FXcode.app -name symbolicatecrash -type f"}]},{type:b,tag:w,props:{},children:[]},{type:a,value:"\n会出现"},{type:b,tag:e,props:{},children:[{type:a,value:S}]},{type:a,value:"文件的路径："}]},{type:a,value:c},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"\u002FApplications\u002FXcode.app\u002FContents\u002FDeveloper\u002FPlatforms\u002FWatchSimulator.platform\u002FDeveloper\u002FLibrary\u002FPrivateFrameworks\u002FDVTFoundation.framework\u002Fsymbolicatecrash\n\u002FApplications\u002FXcode.app\u002FContents\u002FDeveloper\u002FPlatforms\u002FAppleTVSimulator.platform\u002FDeveloper\u002FLibrary\u002FPrivateFrameworks\u002FDVTFoundation.framework\u002Fsymbolicatecrash\n\u002FApplications\u002FXcode.app\u002FContents\u002FDeveloper\u002FPlatforms\u002FiPhoneSimulator.platform\u002FDeveloper\u002FLibrary\u002FPrivateFrameworks\u002FDVTFoundation.framework\u002Fsymbolicatecrash\n\u002FApplications\u002FXcode.app\u002FContents\u002FSharedFrameworks\u002FDVTFoundation.framework\u002FVersions\u002FA\u002FResources\u002Fsymbolicatecrash\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"选择第一个即可，找到这个文件，拷贝到对应的文件夹中，目前文件夹元素如下："}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F4408163-c641457b4010927a.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"cd"}]},{type:a,value:"到当前的文件夹，执行命令："}]},{type:a,value:c},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:e,props:{},children:[{type:a,value:".\u002Fsymbolicatecrash .\u002FMangoDemo.crash .\u002FMangoDemo.dSYM \u003E SymbolCrash.crash\n"}]}]}]},{type:a,value:c},{type:b,tag:L,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"执行此命令可能会报错"},{type:b,tag:e,props:{},children:[{type:a,value:"Error: \"DEVELOPER_DIR\" is not defined at .\u002Fsymbolicatecrash line 69."}]},{type:a,value:"。执行命令"},{type:b,tag:e,props:{},children:[{type:a,value:"export DEVELOPER_DIR=\u002FApplications\u002FXCode.app\u002FContents\u002FDeveloper"}]},{type:a,value:"即可。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"结果如图："}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F4408163-0a0e57ed8d423266.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"打开"},{type:b,tag:e,props:{},children:[{type:a,value:"SymbolCrash.crash"}]},{type:a,value:"文件："}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F4408163-4192139ba5fa87fa.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"符号化成功，你就能完美的定位到错误的地址啦。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F4408163-c4026aad65bfa2bc.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:p,props:{id:J},children:[{type:b,tag:h,props:{href:"#3%E3%80%81%E4%B8%80%E8%A1%8C%E4%B8%80%E8%A1%8C%E6%85%A2%E6%85%A2%E5%88%86%E6%9E%90%E5%A4%A7%E6%B3%95%EF%BC%88atos-%E7%AC%A6%E5%8F%B7%E5%8C%96%EF%BC%89",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"这种分析方式呢，有我们的"},{type:b,tag:e,props:{},children:[{type:a,value:"dSYM"}]},{type:a,value:"文件，以及"},{type:b,tag:e,props:{},children:[{type:a,value:"Crash"}]},{type:a,value:"文件就可以啦，然后使用"},{type:b,tag:e,props:{},children:[{type:a,value:"atos"}]},{type:a,value:"命令推导出完美的符号化信息。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F4408163-78813a78e1f59d3f.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"首先我们看一下需要用到的信息："}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F4408163-37e266b6801d33b8.png"},children:[]}]},{type:a,value:c},{type:b,tag:x,props:{},children:[{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"load address"}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"address to symbolicate"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"有了上述信息，执行命令："}]},{type:a,value:c},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"atos -arch \u003CBinary Architecture\u003E -o \u003CPath to dSYM file\u003E\u002FContents\u002FResources\u002FDWARF\u002F\u003Cbinary image name\u003E -l \u003Cload address\u003E \u003Caddress to symbolicate\u003E`\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"举个例子，以我的 Crash 日志为例："}]},{type:a,value:c},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"atos -arch arm64 -o MangoDemo.dSYM\u002FContents\u002FResources\u002FDWARF\u002FMangoDemo -l 0x100e10000 0x100ebb1d4\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"输出结果："}]},{type:a,value:c},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,u]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"-[IReaderSDkFristViewController crashTest] (in MangoDemo) (IReaderSDkFristViewController.m:103)\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"符号化完成。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F4408163-e038299373523eae.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:p,props:{id:v},children:[{type:b,tag:h,props:{href:"#4%E3%80%81%E5%B7%A5%E5%85%B7%E5%88%86%E6%9E%90",ariaHidden:i,tabIndex:j},children:[{type:b,tag:k,props:{className:[l,m]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fpan.baidu.com\u002Fshare\u002Finit?surl=i5NZRMl",rel:[M,N,O],target:P},children:[{type:a,value:"解析工具"}]},{type:b,tag:w,props:{},children:[]},{type:a,value:"\n提取码：cwnh"},{type:b,tag:w,props:{},children:[]},{type:a,value:"\n其实在大多数情况下，我们使用解析工具其实来的更快一些，下载解析工具，打开后填入参数，如图："}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{alt:g,src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002F\u002Fimg\u002F4408163-b0fd81766d479ed0.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"分析原理和结果是一致的，大家怎么方便怎么来就行啦。打住，手工。"}]}]},dir:"\u002Fwiki\u002FiOS\u002FError",path:T,extension:".md",createdAt:U,updatedAt:U},prev:{slug:V,date:W,title:X},next:{slug:Y,title:Z,date:_},scrollTop:$,sideCategory:[{folderName:"iOS",articles:[{slug:"iOS-Swift-ObjectMapper 指南",title:"Swift-ObjectMapper 指南",date:"2016-05-23 16:13",path:"\u002Fwiki\u002FiOS\u002FiOS-Swift-ObjectMapper 指南"},{slug:"iOS-URL Schemes && Universal Links 简单使用",title:"URL Schemes && Universal Links 简单使用",date:"2017-02-14T00:00:00.000Z",path:"\u002Fwiki\u002FiOS\u002FiOS-URL Schemes && Universal Links 简单使用"},{slug:"iOS-YYModel",title:"YYModel几种使用场景",date:aa,path:"\u002Fwiki\u002FiOS\u002FiOS-YYModel"},{slug:"iOS-ios-useful-link",title:"'实用链接",date:"2017-07-14T16:58:04.000Z",path:"\u002Fwiki\u002FiOS\u002FiOS-ios-useful-link"},{slug:"iOS-mrpeak杂货铺-iOS应用层架构之CDD",title:"(转)mrpeak杂货铺-iOS应用层架构之CDD",date:ab,path:"\u002Fwiki\u002FiOS\u002FiOS-mrpeak杂货铺-iOS应用层架构之CDD"},{slug:"iOS-检测离屏渲染与绘制高性能圆角",title:"(待)检测离屏渲染与绘制高性能圆角",date:"2017-08-17T10:03:56.000Z",path:"\u002Fwiki\u002FiOS\u002FiOS-检测离屏渲染与绘制高性能圆角"},{slug:"iOS-深度重构UIViewController",title:"(转)mrpeak杂货铺-深度重构UIViewController",date:"2017-11-19T21:33:42.000Z",path:"\u002Fwiki\u002FiOS\u002FiOS-深度重构UIViewController"},{slug:"iOS-添加字体库",title:"使用第三方字体",date:ab,path:"\u002Fwiki\u002FiOS\u002FiOS-添加字体库"}],children:[{folderName:"3part",articles:[{slug:"3part-umeng-install",title:"快速集成友盟分享",date:"2018-03-01 16:11",path:"\u002Fwiki\u002FiOS\u002F3part\u002F3part-umeng-install"},{slug:"3part-快速集成微信支付",title:"快速集成微信\u002F支付宝\u002F银联",date:"2017-11-17T16:19:25.000Z",path:"\u002Fwiki\u002FiOS\u002F3part\u002F3part-快速集成微信支付"},{slug:"3part-快速集成百度地图",title:"集成百度地图、百度导航",date:"2017-08-11T11:24:43.000Z",path:"\u002Fwiki\u002FiOS\u002F3part\u002F3part-快速集成百度地图"},{slug:"3part-阿里云视频点播集成",date:"2020-10-26T01:10:15.000Z",title:"阿里云视频点播VOD",path:"\u002Fwiki\u002FiOS\u002F3part\u002F3part-阿里云视频点播集成"}],children:[]},{folderName:"Autolayout",articles:[{slug:"Autolayout-baseline",title:"label底部对齐、顶部对齐",date:ac,path:"\u002Fwiki\u002FiOS\u002FAutolayout\u002FAutolayout-baseline"}],children:[]},{folderName:"Error",articles:[{slug:"Error-2017-07-31",title:"Undefined symbols for architecture ..",date:"2017-07-31T08:52:40.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-2017-07-31"},{slug:"Error-Shell-Script-Invocation-Error",title:"'Shell Script Invocation Error'",date:"2017-07-20T14:27:04.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-Shell-Script-Invocation-Error"},{slug:"Error-gesture",title:"tableViewCell的点击和tapGestureRecognizer冲突的处理",date:"2016-11-19T21:33:42.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-gesture"},{slug:y,date:z,title:A,path:T},{slug:"Error-竖屏下视频全屏播放",title:"(转)竖屏下视频全屏播放",date:"2017-08-01T15:23:01.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-竖屏下视频全屏播放"},{slug:"Error-证书过期或者移除对app的影响",title:"证书过期或者移除对app的影响",date:"2018-01-11T13:49:33.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-证书过期或者移除对app的影响"}],children:[]},{folderName:"Objective-C",articles:[{slug:"Objective-C-KVO - Observe property of an object contained in a NSArray",title:"KVO - Observe property of an object contained in a NSArray",date:"2017-09-28 22:26",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-KVO - Observe property of an object contained in a NSArray"},{slug:"Objective-C-NSArrayFilter",title:"NSArray: filteredArrayUsingPredicate",date:"2017-09-14 16:24",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-NSArrayFilter"},{slug:V,date:W,title:X,path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-NSRecursiveLock"},{slug:"Objective-C-NSStringCompareOptions",title:"NSStringCompareOptions",date:"2017-07-10T17:13:25.000Z",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-NSStringCompareOptions"},{slug:"Objective-C-containsObject-or-removeObject",title:"containsObject or removeObject",date:"2015年04月12日09:55:35",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-containsObject-or-removeObject"},{slug:"Objective-C-get-lunarholidays",title:"节气、节假日计算",date:"2017-07-13T09:30:26.000Z",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-get-lunarholidays"},{slug:"Objective-C-use-dispatch_queue_t-with-strong",title:"dispatch_queue_t 用strong来修饰",date:aa,path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-use-dispatch_queue_t-with-strong"},{slug:"Objective-C-农历",title:"农历",date:"2017-07-11T13:12:46.000Z",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-农历"},{slug:Y,title:Z,date:_,path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-常用的宏"}],children:[]},{folderName:"StatusBar",articles:[{slug:"StatusBar-how-to-detect-touches-in-status-bar",title:"获取StatusBar的点击事件",date:ad,path:"\u002Fwiki\u002FiOS\u002FStatusBar\u002FStatusBar-how-to-detect-touches-in-status-bar"},{slug:"StatusBar-ios-status-bar-style",title:"修改StatusBarStyle以及statusBar的背景颜色",date:ad,path:"\u002Fwiki\u002FiOS\u002FStatusBar\u002FStatusBar-ios-status-bar-style"}],children:[]},{folderName:"UIKit",articles:[{slug:"UIKit-UIAlertController修改文字对齐方式",date:"2020-10-23T08:07:07.000Z",title:"UIAlertController修改文字对齐方式",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-UIAlertController修改文字对齐方式"},{slug:"UIKit-UIDynamic Animator",title:"UIDynamic Animator",date:"2016-07-20T16:13:11.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-UIDynamic Animator"},{slug:"UIKit-UISplit​View​Controller 学习笔记",title:"UISplit​View​Controller 学习笔记",date:"2017-04-07T00:00:00.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-UISplit​View​Controller 学习笔记"},{slug:"UIKit-searchBar-style",title:"如何修改searchBar的样式",date:"2017-05-14T19:01:01.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-searchBar-style"},{slug:"UIKit-uioffset",title:"UIOffset",date:"2017-08-02T15:30:01.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-uioffset"},{slug:"UIKit-屏幕旋转.md",date:"2020-11-09T06:04:42.000Z",title:"屏幕旋转",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-屏幕旋转.md"},{slug:"UIKit-离屏渲染",title:"(转)关于iOS离屏渲染的深入研究",date:"2020-04-06T00:00:00.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-离屏渲染"},{slug:"UIKit-给WebView添加个粗糙的加载动画",title:"给UIWebView添加个粗糙的加载动画",date:"2017-02-10T00:00:00.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-给WebView添加个粗糙的加载动画"}],children:[]},{folderName:"UITextFeild",articles:[{slug:"UITextFeild-2018-01-16",title:"修改光标颜色和clear button的颜色",date:"2018-01-16T15:44:44.000Z",path:"\u002Fwiki\u002FiOS\u002FUITextFeild\u002FUITextFeild-2018-01-16"},{slug:"UITextFeild-uitextfeild-select-all",title:"默认选中文本",date:"2017-07-07 04:44",path:"\u002Fwiki\u002FiOS\u002FUITextFeild\u002FUITextFeild-uitextfeild-select-all"}],children:[]},{folderName:"keyboard",articles:[{slug:"keyboard-disable-3rd-keyboard",title:"禁用第三方键盘",date:ac,path:"\u002Fwiki\u002FiOS\u002Fkeyboard\u002Fkeyboard-disable-3rd-keyboard"}],children:[]},{folderName:"loc",articles:[{slug:"loc-2018-01-22",title:"CLPlacemark中文",date:"2018-01-22T14:36:49.000Z",path:"\u002Fwiki\u002FiOS\u002Floc\u002Floc-2018-01-22"},{slug:"loc-sim-locaiton-ios",title:"真机或模拟器修改定位位置",date:"2017-08-11T10:29:01.000Z",path:"\u002Fwiki\u002FiOS\u002Floc\u002Floc-sim-locaiton-ios"}],children:[]},{folderName:"tableView",articles:[{slug:"tableView-cell-seprateLine",title:"cell分割线的颜色",date:"2017-08-08T15:26:14.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-cell-seprateLine"},{slug:"tableView-compare-NSIndexPath",title:"compare NSIndexPath",date:"2017-08-15T17:01:49.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-compare-NSIndexPath"},{slug:"tableView-tabeleView 获取某个cell的高度",title:"tabeleView 获取某个cell的高度",date:"2017-05-09T10:36:29.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-tabeleView 获取某个cell的高度"},{slug:"tableView-taleview-headerfooterView-xib",title:"xib UITableViewHeaderFooterView",date:"2017-08-18T09:47:36.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-taleview-headerfooterView-xib"},{slug:"tableView-结合layoutMargins做tableViewCell的适配",title:"结合layoutMargins做cell的适配",date:"2017-08-20T21:55:52.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-结合layoutMargins做tableViewCell的适配"}],children:[]},{folderName:"xib",articles:[{slug:"xib-如何替换已有的控件",title:"如何替换已有的控件",date:"2017-09-07T10:51:38.000Z",path:"\u002Fwiki\u002FiOS\u002Fxib\u002Fxib-如何替换已有的控件"}],children:[]},{folderName:"代码片段",articles:[{slug:"代码片段-分割小说章节",title:"分割小说章节",date:"2017-01-18T15:12:12.000Z",path:"\u002Fwiki\u002FiOS\u002F代码片段\u002F代码片段-分割小说章节"},{slug:"代码片段-截图 截长图 高清图",title:"截图 截长图 高清图",date:"2016-05-04 22:38",path:"\u002Fwiki\u002FiOS\u002F代码片段\u002F代码片段-截图 截长图 高清图"},{slug:"代码片段-读取未知类型的txt文件",title:"读取未知类型的txt文件 ",date:"2017-01-16 20:12",path:"\u002Fwiki\u002FiOS\u002F代码片段\u002F代码片段-读取未知类型的txt文件"}],children:[]},{folderName:"包管理工具",articles:[{slug:"包管理工具-spm-introduce",date:"2020-11-18T08:08:33.000Z",title:"Swift Package Manager介绍",path:"\u002Fwiki\u002FiOS\u002F包管理工具\u002F包管理工具-spm-introduce"},{slug:"包管理工具-spm-resource-handle",date:"2020-11-19T00:58:59.000Z",title:"SWift Package Manager资源文件管理",path:"\u002Fwiki\u002FiOS\u002F包管理工具\u002F包管理工具-spm-resource-handle"}],children:[]},{folderName:"日历",articles:[{slug:"日历-FSCalendar",title:"FSCalendar",date:"2017-07-11T08:48:12.000Z",path:"\u002Fwiki\u002FiOS\u002F日历\u002F日历-FSCalendar"}],children:[]},{folderName:"适配",articles:[{slug:"适配-NFC初试",title:"NFC初试",date:"2017-06-07 18:31",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-NFC初试"},{slug:"适配-iOS11 Xcode9新功能新特性",title:"iOS11 Xcode9新功能新特性",date:ae,path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS11 Xcode9新功能新特性"},{slug:"适配-iOS11 tableView适配不完全指南",title:"iOS11 tableView适配不完全指南",date:"2017-09-19 12:33",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS11 tableView适配不完全指南"},{slug:"适配-iOS11刘海屏EdgeProtect相关",date:"2020-10-26T06:00:25.000Z",title:"iOS11刘海屏EdgeProtect相关",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS11刘海屏EdgeProtect相关"},{slug:"适配-iOS11适配参考",title:"iOS11 适配参考",date:ae,path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS11适配参考"},{slug:"适配-iOS14hidesBottomBarWhenPushed兼容问题",date:"2020-10-23T08:53:49.000Z",title:"iOS14 hidesBottomBarWhenPushed兼容问题",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS14hidesBottomBarWhenPushed兼容问题"},{slug:"适配-touch-id",title:"touch Id",date:"2017-08-04T13:46:10.000Z",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-touch-id"}],children:[]},{folderName:"问与答",articles:[{slug:"问与答-为什么ui操作要在主线程",date:"2020-11-16T03:38:48.000Z",title:"为什么ui操作要在主线程",path:"\u002Fwiki\u002FiOS\u002F问与答\u002F问与答-为什么ui操作要在主线程"}],children:[]}]}]}],fetch:{},mutations:$}}("text","element","\n","p","code","img","","a","true",-1,"span","icon","icon-link","li",2,"h2","div","nuxt-content-highlight","pre","language-text","line-numbers","4、工具分析","br","ul","Error-崩溃分析","2020-11-11T07:28:34.000Z","崩溃分析(转载)","1、dysm-文件","1、dYSM 文件","2、crash-日志","2、Crash 日志","1、无敌自动化-xcode-帮忙分析大法","1、无敌自动化 Xcode 帮忙分析大法","2、symbolicatecrash-三位一体","2、symbolicatecrash 三位一体","3、一行一行慢慢分析大法（atos-符号化）","3、一行一行慢慢分析大法（atos 符号化）","blockquote","nofollow","noopener","noreferrer","_blank","h1"," -\u003E ","symbolicatecrash","\u002Fwiki\u002FiOS\u002FError\u002FError-崩溃分析","2021-11-18T07:37:48.012Z","Objective-C-NSRecursiveLock","2020-10-27T00:52:16.000Z","NSRecursiveLock","Objective-C-常用的宏","常用的宏","2015-03-04 11:11",void 0,"2017-08-31T09:32:08.000Z","2017-10-27T18:01:13.000Z","2017-08-19T16:10:51.000Z","2016-07-01T14:19:23.000Z","2017-09-20T15:20:33.000Z")));