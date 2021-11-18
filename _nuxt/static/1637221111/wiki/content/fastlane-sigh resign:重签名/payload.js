__NUXT_JSONP__("/wiki/content/fastlane-sigh%20resign:%E9%87%8D%E7%AD%BE%E5%90%8D", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T){return {data:[{},{article:{slug:n,description:"",title:o,layout:"page",date:d,collection:p,toc:[{id:q,depth:r,text:s},{id:l,depth:r,text:l}],body:{type:t,children:[{type:a,value:c},{type:b,tag:u,props:{id:q},children:[{type:b,tag:m,props:{href:"#%E9%87%8D%E7%AD%BE%E5%90%8Dresign",ariaHidden:v,tabIndex:w},children:[{type:b,tag:x,props:{className:[y,z]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"上篇讲到, 将ipa文件和配置文件放到一个文件夹,"},{type:b,tag:f,props:{},children:[{type:a,value:"cd"}]},{type:a,value:"到这个文件夹,简单一行命令就可以实现重签名:"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"fastlane sigh resign\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"appstore上的应用是经过加壳的,不能直接进行重签名。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"为了简单,这里从pp助手下载一个简单的越狱应用进行重签名。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:A,props:{alt:"20170626711081.png",src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F20170626711081.png"},children:[]}]},{type:a,value:c},{type:b,tag:u,props:{id:l},children:[{type:b,tag:m,props:{href:"#%E5%A4%9Atarget%E5%BA%94%E7%94%A8",ariaHidden:v,tabIndex:w},children:[{type:b,tag:x,props:{className:[y,z]},children:[]}]},{type:a,value:l}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"这里再尝试对斗鱼tv的越狱包重签名:"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"[15:07:43]: Signing Identity: 12E2894A64337A985227E191F515BAB9EDE7BBF8\n\u002FUsers\u002Ftyrad\u002F.rvm\u002Fgems\u002Fruby-2.2.5\u002Fgems\u002Ffastlane-2.41.0\u002Fsigh\u002Flib\u002Fassets\u002Fresign.sh \u002FUsers\u002Ftyrad\u002FDesktop\u002Fsnapshot-fastlane\u002FfastlaneResignDemo\u002Foo.ipa 12E2894A64337A985227E191F515BAB9EDE7BBF8 -p \u002FUsers\u002Ftyrad\u002FDesktop\u002Fsnapshot-fastlane\u002FfastlaneResignDemo\u002FInHouse_com.tyrad.fastlaneResignDemo.mobileprovision          \u002FUsers\u002Ftyrad\u002FDesktop\u002Fsnapshot-fastlane\u002FfastlaneResignDemo\u002Foo.ipa\nsecurity: SecPolicySetValue: One or more parameters passed to a function were not valid.\nNo provisioning profile for nested application: '_floatsignTemp\u002FPayload\u002FDYZB.app\u002FPlugIns\u002FDYReplayKitExt.appex' with bundle identifier 'tv.douyu.live.DYReplayKitLiveExt'\nUse the -p option (example: -p com.example.app=xxxx.mobileprovision)\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"报错: No provisioning profile for nested application: ....DYReplayKitExt.appex"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"原因是这个应用是多target应用。这个问题官方文档已经给出答案了:"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:m,props:{href:B,rel:[C,D,E],target:F},children:[{type:a,value:B}]},{type:a,value:c},{type:b,tag:m,props:{href:G,rel:[C,D,E],target:F},children:[{type:a,value:G}]}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"resign(\n  ipa: \"path\u002Fto\u002Fipa\", # can omit if using the `ipa` action\n  signing_identity: \"iPhone Distribution: Luka Mirosevic (0123456789)\",\n  provisioning_profile: {\n    \"com.example.awesome-app\" =\u003E \"App.mobileprovision\",\n    \"com.example.awesome-app.app-extension\" =\u003E \"Extension.mobileprovision\"\n  }\n)\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:"strong",props:{},children:[{type:a,value:"重签名方法:"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"增加了两个appid,并把他们放到一个app group里。\n"},{type:b,tag:A,props:{alt:"20170626228442.png",src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F20170626228442.png"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"编辑fastfile:"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"fastlane_version \"2.41.0\"\ndefault_platform :ios\nplatform :ios do\n  desc \"测试重签名\"\n  lane :resignDemo do\n    resign(\n     ipa: \".\u002Fbb.ipa\", # can omit if using the `ipa` action\n     signing_identity: \"D711135202520B8C69693B8DFAFFAS55A884\",\n     provisioning_profile: {      \n        \"tv.douyu.live\" =\u003E \".\u002F1.mobileprovision\",\n        \"tv.douyu.live.DYReplayKitLiveExt\" =\u003E \".\u002F2.mobileprovision\",\n        \"tv.douyu.live.DYReplayKitExtUI\" =\u003E \".\u002F3.mobileprovision\"\n    })\n  end \nend\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"运行:"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"fastlane \n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"签名成功。"}]}]},excerpt:{type:t,children:[]},dir:"\u002Fwiki\u002FTools\u002Ffastlane",path:H,extension:".md",createdAt:I,updatedAt:I},prev:{slug:J,title:K,date:d},next:{slug:L,title:M,date:d},scrollTop:N,sideCategory:[{folderName:"Tools",articles:[{slug:"Tools-2017-12-11",title:"cocoapods 私有库重名解决方法",date:"2017-12-11T18:06:43.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2017-12-11"},{slug:"Tools-2017-12-21",title:"fir.im 如何将 installUrl 转换为可以直接安装的链接？",date:"2017-12-21T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2017-12-21"},{slug:"Tools-2018-07-04",title:"vscode重装",date:"2018-07-04T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2018-07-04"},{slug:"Tools-Increase-speed-git-clone",title:"github clone提速",date:O,path:"\u002Fwiki\u002FTools\u002FTools-Increase-speed-git-clone"},{slug:"Tools-Log Guru",title:" Log Guru",date:P,path:"\u002Fwiki\u002FTools\u002FTools-Log Guru"},{slug:"Tools-charles",title:"charles抓包https",date:"2017-02-02T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-charles"},{slug:"Tools-cocoapods import导入时没有提示的解决办法",title:"cocoapods import导入时没有提示的解决办法",date:"2017-09-07T10:21:59.000Z",path:"\u002Fwiki\u002FTools\u002FTools-cocoapods import导入时没有提示的解决办法"},{slug:"Tools-cocoapods-missing required architecture i386",title:"cocoapods-missing required architecture i386",date:"2017-11-27T10:34:10.000Z",path:"\u002Fwiki\u002FTools\u002FTools-cocoapods-missing required architecture i386"},{slug:"Tools-git-change-remote",title:"git切换远程服务",date:d,path:"\u002Fwiki\u002FTools\u002FTools-git-change-remote"},{slug:"Tools-gn-2x-img",title:"使用imageMagick生成@2x图片脚本",date:Q,path:"\u002Fwiki\u002FTools\u002FTools-gn-2x-img"},{slug:"Tools-gitbook入门",title:"gitbook入门",date:"2018-05-24T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-gitbook入门"},{slug:"Tools-gollum-install",title:"gollum搭建笔记",date:"2019-06-03T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-gollum-install"},{slug:"Tools-how-to-manager-github-stars",title:"Github管理stars的方法",date:Q,path:"\u002Fwiki\u002FTools\u002FTools-how-to-manager-github-stars"},{slug:"Tools-lldb",title:"lldb: chisel",date:"2017-11-26T13:00:35.000Z",path:"\u002Fwiki\u002FTools\u002FTools-lldb"},{slug:"Tools-macOS上安装Composer",title:"macOS上安装Composer",date:O,path:"\u002Fwiki\u002FTools\u002FTools-macOS上安装Composer"},{slug:"Tools-npm换源",title:"npm换源",date:R,path:"\u002Fwiki\u002FTools\u002FTools-npm换源"},{slug:"Tools-proxy-setting",title:"Mac OSX终端走shadowsocks代理 ",date:R,path:"\u002Fwiki\u002FTools\u002FTools-proxy-setting"},{slug:"Tools-ss+bbr",title:"ss+bbr提速",date:S,path:"\u002Fwiki\u002FTools\u002FTools-ss+bbr"},{slug:"Tools-the_silver_searcher",title:"the_silver_searcher",date:P,path:"\u002Fwiki\u002FTools\u002FTools-the_silver_searcher"},{slug:"Tools-update-cocoapods",title:"更新cocoapods",date:"2017-08-10T11:24:52.000Z",path:"\u002Fwiki\u002FTools\u002FTools-update-cocoapods"},{slug:"Tools-whistle",title:"whistle",date:"2017-09-20T09:52:30.000Z",path:"\u002Fwiki\u002FTools\u002FTools-whistle"},{slug:"Tools-xcode-refactor",title:"xcode refactor",date:"2017-05-20T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-xcode-refactor"},{slug:"Tools-在线API团队协作工具",title:"在线API团队协作工具",date:"2017-08-22T10:49:27.000Z",path:"\u002Fwiki\u002FTools\u002FTools-在线API团队协作工具"},{slug:"Tools-正则",title:"正则",date:S,path:"\u002Fwiki\u002FTools\u002FTools-正则"},{slug:"Tools-正则2",title:"正则:断言",date:"2018-02-26T16:48:45.000Z",path:"\u002Fwiki\u002FTools\u002FTools-正则2"}],children:[{folderName:p,articles:[{slug:"fastlane-2017-09-11-3",title:" pem:生成推送证书",date:d,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-2017-09-11-3"},{slug:"fastlane-2017-09-11-7",title:"init:安装和初始化",date:"2017-06-22T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-2017-09-11-7"},{slug:"fastlane-fastlane-cer",title:"cert证书",date:d,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-fastlane-cer"},{slug:"fastlane-fastlane-gym",title:"gym自动打包",date:d,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-fastlane-gym"},{slug:"fastlane-frameit",title:"frameit:自动截图",date:d,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-frameit"},{slug:"fastlane-frameit:截图套壳",title:"frameit:截图套壳",date:d,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-frameit:截图套壳"},{slug:J,title:K,date:d,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-produce 配置appid"},{slug:n,title:o,date:d,path:H},{slug:L,title:M,date:d,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-sign:签名"},{slug:"fastlane-snapshot 自动截图",title:"snapshot 自动截图",date:d,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-snapshot 自动截图"}],children:[]},{folderName:"kettle",articles:[{slug:"kettle-install-macos",title:"Macos Kettle的安装使用",date:"2021-09-26T09:23:22.000Z",path:"\u002Fwiki\u002FTools\u002Fkettle\u002Fkettle-install-macos"}],children:[]},{folderName:"rsa",articles:[{slug:"rsa-ios-rsa",title:"iOS RSA加密解密测试",date:T,path:"\u002Fwiki\u002FTools\u002Frsa\u002Frsa-ios-rsa"},{slug:"rsa-rsa-ext",title:"证书文件名、扩展名的解释",date:T,path:"\u002Fwiki\u002FTools\u002Frsa\u002Frsa-rsa-ext"}],children:[]}]}]}],fetch:{},mutations:N}}("text","element","\n","2017-06-30T10:32:11.000Z","p","code","div","nuxt-content-highlight","pre","language-text","line-numbers","多target应用","a","fastlane-sigh resign:重签名","sigh resign:重签名","fastlane","重签名resign",2,"重签名(Resign)","root","h2","true",-1,"span","icon","icon-link","img","https:\u002F\u002Fdocs.fastlane.tools\u002Factions\u002F#resign","nofollow","noopener","noreferrer","_blank","https:\u002F\u002Fgithub.com\u002Ffastlane\u002Ffastlane\u002Fissues\u002F7783","\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-sigh resign:重签名","2021-11-18T07:37:48.008Z","fastlane-produce 配置appid","produce 配置appid","fastlane-sign:签名","sign:签名",void 0,"2017-07-11T20:59:30.000Z","2017-12-04T20:20:43.000Z","2018-04-11T13:32:11.000Z","2018-05-31T00:00:00.000Z","2017-07-12T11:22:15.000Z","2017-08-02T09:49:02.000Z")));