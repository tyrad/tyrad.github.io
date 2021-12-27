__NUXT_JSONP__("/wiki/content/fastlane-fastlane-cer", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X){return {data:[{},{article:{slug:C,description:"",title:D,layout:"page",date:d,collection:E,toc:[{id:i,depth:j,text:i},{id:h,depth:j,text:h},{id:y,depth:j,text:y},{id:k,depth:j,text:k}],body:{type:F,children:[{type:a,value:c},{type:b,tag:l,props:{id:i},children:[{type:b,tag:g,props:{href:"#%E7%AE%80%E4%BB%8B",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:i}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:g,props:{href:z,rel:[G,H,I],target:J},children:[{type:a,value:A}]},{type:a,value:"主要用来创建和维护iOS "},{type:b,tag:e,props:{},children:[{type:a,value:"code signing certificates"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:A}]},{type:a,value:"专注于代码签名,你可为不同的环境(开发\u002F生产)创建新的"},{type:b,tag:e,props:{},children:[{type:a,value:"code signing identitie"}]},{type:a,value:",或使用本地存在的"},{type:b,tag:e,props:{},children:[{type:a,value:" code signing identitie"}]},{type:a,value:"。"}]},{type:a,value:c},{type:a,value:c},{type:b,tag:l,props:{id:h},children:[{type:b,tag:g,props:{href:"#%E4%BD%BF%E7%94%A8",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:h}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"#默认是生产环境\nfastlane cert\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"这将检查您的本地计算机上是否安装了任何可用的签名证书。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"只有在需要创建新的证书的时候，证书才会被创建"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:"创建一个新的私钥"}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:"创建一个新的签名请求"}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:"生成,下载和安装证书"}]},{type:a,value:c},{type:b,tag:w,props:{},children:[{type:a,value:"将所有生成的文件导入到钥匙串中"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"证书永远不会撤销您现有的证书。 如果您不能再创建证书，证书将引发异常，这意味着您必须撤销其中一个现有证书，为新的证书腾出空间。"}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:"table",props:{},children:[{type:b,tag:"thead",props:{},children:[{type:b,tag:B,props:{},children:[{type:b,tag:K,props:{},children:[{type:a,value:"举例"}]},{type:b,tag:K,props:{},children:[]}]}]},{type:b,tag:"tbody",props:{},children:[{type:b,tag:B,props:{},children:[{type:b,tag:x,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"--development"}]}]},{type:b,tag:x,props:{},children:[{type:a,value:"创建开发证书"}]}]},{type:b,tag:B,props:{},children:[{type:b,tag:x,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"--force"}]}]},{type:b,tag:x,props:{},children:[{type:a,value:"创建证书,即使有一个已经存在了"}]}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"传递Apple ID:"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"fastlane cert -u cert@krausefx.com\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"查看有关可用命令的列表:"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"fastlane cert --help\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"请记住，证书无法从"},{type:b,tag:e,props:{},children:[{type:a,value:"Apple Developer Portal"}]},{type:a,value:"下载现有证书+私钥,私钥永远不会离开您的计算机。"}]},{type:a,value:c},{type:b,tag:l,props:{id:y},children:[{type:b,tag:g,props:{href:"#%E9%85%8D%E5%90%88sigh%E4%BD%BF%E7%94%A8",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:"配合"},{type:b,tag:e,props:{},children:[{type:a,value:"sigh"}]},{type:a,value:h}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:A}]},{type:a,value:"在fastlane中和sigh配合起来使用时变得非常有意思。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"fastfile:"}]},{type:a,value:c},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"lane :beta do\n  cert\n  sigh(force: true)\nend\n"}]}]}]},{type:a,value:c},{type:b,tag:l,props:{id:k},children:[{type:b,tag:g,props:{href:"#%E5%8F%82%E8%80%83",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:k}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:g,props:{href:z,rel:[G,H,I],target:J},children:[{type:a,value:z}]}]}]},excerpt:{type:F,children:[]},dir:"\u002Fwiki\u002FTools\u002Ffastlane",path:L,extension:".md",createdAt:M,updatedAt:M},prev:{slug:N,title:O,date:d},next:{slug:P,title:Q,date:d},scrollTop:R,sideCategory:[{folderName:"Tools",articles:[{slug:"Tools-2017-12-11",title:"cocoapods 私有库重名解决方法",date:"2017-12-11T18:06:43.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2017-12-11"},{slug:"Tools-2017-12-21",title:"fir.im 如何将 installUrl 转换为可以直接安装的链接？",date:"2017-12-21T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2017-12-21"},{slug:"Tools-2018-07-04",title:"vscode重装",date:"2018-07-04T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2018-07-04"},{slug:"Tools-Increase-speed-git-clone",title:"github clone提速",date:S,path:"\u002Fwiki\u002FTools\u002FTools-Increase-speed-git-clone"},{slug:"Tools-Log Guru",title:" Log Guru",date:T,path:"\u002Fwiki\u002FTools\u002FTools-Log Guru"},{slug:"Tools-charles",title:"charles抓包https",date:"2017-02-02T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-charles"},{slug:"Tools-cocoapods import导入时没有提示的解决办法",title:"cocoapods import导入时没有提示的解决办法",date:"2017-09-07T10:21:59.000Z",path:"\u002Fwiki\u002FTools\u002FTools-cocoapods import导入时没有提示的解决办法"},{slug:"Tools-cocoapods-missing required architecture i386",title:"cocoapods-missing required architecture i386",date:"2017-11-27T10:34:10.000Z",path:"\u002Fwiki\u002FTools\u002FTools-cocoapods-missing required architecture i386"},{slug:"Tools-git-change-remote",title:"git切换远程服务",date:d,path:"\u002Fwiki\u002FTools\u002FTools-git-change-remote"},{slug:"Tools-gitbook入门",title:"gitbook入门",date:"2018-05-24T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-gitbook入门"},{slug:"Tools-gn-2x-img",title:"使用imageMagick生成@2x图片脚本",date:U,path:"\u002Fwiki\u002FTools\u002FTools-gn-2x-img"},{slug:"Tools-gollum-install",title:"gollum搭建笔记",date:"2019-06-03T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-gollum-install"},{slug:"Tools-how-to-manager-github-stars",title:"Github管理stars的方法",date:U,path:"\u002Fwiki\u002FTools\u002FTools-how-to-manager-github-stars"},{slug:"Tools-lldb",title:"lldb: chisel",date:"2017-11-26T13:00:35.000Z",path:"\u002Fwiki\u002FTools\u002FTools-lldb"},{slug:"Tools-macOS上安装Composer",title:"macOS上安装Composer",date:S,path:"\u002Fwiki\u002FTools\u002FTools-macOS上安装Composer"},{slug:"Tools-npm换源",title:"npm换源",date:V,path:"\u002Fwiki\u002FTools\u002FTools-npm换源"},{slug:"Tools-proxy-setting",title:"Mac OSX终端走shadowsocks代理 ",date:V,path:"\u002Fwiki\u002FTools\u002FTools-proxy-setting"},{slug:"Tools-ss+bbr",title:"ss+bbr提速",date:W,path:"\u002Fwiki\u002FTools\u002FTools-ss+bbr"},{slug:"Tools-the_silver_searcher",title:"the_silver_searcher",date:T,path:"\u002Fwiki\u002FTools\u002FTools-the_silver_searcher"},{slug:"Tools-update-cocoapods",title:"更新cocoapods",date:"2017-08-10T11:24:52.000Z",path:"\u002Fwiki\u002FTools\u002FTools-update-cocoapods"},{slug:"Tools-whistle",title:"whistle",date:"2017-09-20T09:52:30.000Z",path:"\u002Fwiki\u002FTools\u002FTools-whistle"},{slug:"Tools-xcode-refactor",title:"xcode refactor",date:"2017-05-20T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-xcode-refactor"},{slug:"Tools-在线API团队协作工具",title:"在线API团队协作工具",date:"2017-08-22T10:49:27.000Z",path:"\u002Fwiki\u002FTools\u002FTools-在线API团队协作工具"},{slug:"Tools-正则",title:"正则",date:W,path:"\u002Fwiki\u002FTools\u002FTools-正则"},{slug:"Tools-正则2",title:"正则:断言",date:"2018-02-26T16:48:45.000Z",path:"\u002Fwiki\u002FTools\u002FTools-正则2"}],children:[{folderName:E,articles:[{slug:N,title:O,date:d,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-2017-09-11-3"},{slug:"fastlane-2017-09-11-7",title:"init:安装和初始化",date:"2017-06-22T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-2017-09-11-7"},{slug:C,title:D,date:d,path:L},{slug:P,title:Q,date:d,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-fastlane-gym"},{slug:"fastlane-frameit",title:"frameit:自动截图",date:d,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-frameit"},{slug:"fastlane-frameit:截图套壳",title:"frameit:截图套壳",date:d,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-frameit:截图套壳"},{slug:"fastlane-produce 配置appid",title:"produce 配置appid",date:d,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-produce 配置appid"},{slug:"fastlane-sigh resign:重签名",title:"sigh resign:重签名",date:d,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-sigh resign:重签名"},{slug:"fastlane-sign:签名",title:"sign:签名",date:d,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-sign:签名"},{slug:"fastlane-snapshot 自动截图",title:"snapshot 自动截图",date:d,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-snapshot 自动截图"}],children:[]},{folderName:"kettle",articles:[{slug:"kettle-install-macos",title:"Macos Kettle的安装使用",date:"2021-09-26T09:23:22.000Z",path:"\u002Fwiki\u002FTools\u002Fkettle\u002Fkettle-install-macos"}],children:[]},{folderName:"rsa",articles:[{slug:"rsa-ios-rsa",title:"iOS RSA加密解密测试",date:X,path:"\u002Fwiki\u002FTools\u002Frsa\u002Frsa-ios-rsa"},{slug:"rsa-rsa-ext",title:"证书文件名、扩展名的解释",date:X,path:"\u002Fwiki\u002FTools\u002Frsa\u002Frsa-rsa-ext"}],children:[]}]}]}],fetch:{},mutations:R}}("text","element","\n","2017-06-30T10:32:11.000Z","code","p","a","使用","简介",2,"参考","h2","true",-1,"span","icon","icon-link","div","nuxt-content-highlight","pre","language-text","line-numbers","li","td","配合sigh使用","https:\u002F\u002Fgithub.com\u002Ffastlane\u002Ffastlane\u002Ftree\u002Fmaster\u002Fcert","cert","tr","fastlane-fastlane-cer","cert证书","fastlane","root","nofollow","noopener","noreferrer","_blank","th","\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-fastlane-cer","2021-12-27T10:01:01.258Z","fastlane-2017-09-11-3"," pem:生成推送证书","fastlane-fastlane-gym","gym自动打包",void 0,"2017-07-11T20:59:30.000Z","2017-12-04T20:20:43.000Z","2018-04-11T13:32:11.000Z","2018-05-31T00:00:00.000Z","2017-07-12T11:22:15.000Z","2017-08-02T09:49:02.000Z")));