__NUXT_JSONP__("/wiki/content/Tools-ss+bbr", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa){return {data:[{},{article:{slug:H,title:I,layout:"page",date:p,toc:[{id:q,depth:v,text:q},{id:r,depth:v,text:r},{id:s,depth:v,text:s}],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:a,value:"环境CentOS 7"}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:j,props:{href:J,rel:[K,L,M],target:N},children:[{type:a,value:J}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"使用环境: 虚拟化：KVM、Xen等。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"注: OpenVZ不支持锐速或者ddr 。"}]},{type:a,value:c},{type:b,tag:w,props:{id:q},children:[{type:b,tag:j,props:{href:"#%E4%B8%8B%E8%BD%BD%E6%9B%B4%E6%8D%A2%E5%86%85%E6%A0%B8",ariaHidden:x,tabIndex:y},children:[{type:b,tag:d,props:{className:[z,A]},children:[]}]},{type:a,value:q}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"最新内核查看这里："},{type:b,tag:j,props:{href:O,rel:[K,L,M],target:N},children:[{type:a,value:O}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"运行以下命令："}]},{type:a,value:c},{type:b,tag:k,props:{className:[l]},children:[{type:b,tag:m,props:{className:[n,"language-text"]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"rpm --import https:\u002F\u002Fwww.elrepo.org\u002FRPM-GPG-KEY-elrepo.org\n\nrpm -Uvh http:\u002F\u002Fwww.elrepo.org\u002Felrepo-release-7.0-2.el7.elrepo.noarch.rpm\n\nyum --enablerepo=elrepo-kernel install kernel-ml -y\n"}]}]}]},{type:a,value:c},{type:b,tag:w,props:{id:r},children:[{type:b,tag:j,props:{href:"#%E6%9F%A5%E7%9C%8B%E5%86%85%E6%A0%B8%E6%98%AF%E5%90%A6%E5%AE%89%E8%A3%85%E6%88%90%E5%8A%9F",ariaHidden:x,tabIndex:y},children:[{type:b,tag:d,props:{className:[z,A]},children:[]}]},{type:a,value:r}]},{type:a,value:c},{type:b,tag:k,props:{className:[l]},children:[{type:b,tag:m,props:{className:[n,t]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{className:[f,u]},children:[{type:a,value:"rpm"}]},{type:a,value:" -qa "},{type:b,tag:d,props:{className:[f,o]},children:[{type:a,value:P}]},{type:a,value:h},{type:b,tag:d,props:{className:[f,u]},children:[{type:a,value:"grep"}]},{type:a,value:" kernel\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"如下图，内核4.11已经在了，在第三个位置"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:"img",props:{alt:"2018030124233ax.jpg",src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F2018030124233ax.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"删除旧内核(可选)，根据上面内容输入旧内核的前面几个字母，用tab键补全"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:"rpm -ev 旧内核"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"更新 grub 系统引导文件并重启，下面的【default 2】表示将第三个内核设置为默认运行, 选择最新内核就对了，"},{type:b,tag:"strong",props:{},children:[{type:a,value:"至于你的是哪个，请运行下面的第一行代码后"}]},{type:a,value:"，自己认真观察，换成正确的数字，请务必记得，是从0开始算起。执行以下代码："}]},{type:a,value:c},{type:b,tag:k,props:{className:[l]},children:[{type:b,tag:m,props:{className:[n,t]},children:[{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{className:[f,u]},children:[{type:a,value:"egrep"}]},{type:a,value:" ^menuentry \u002Fetc\u002Fgrub2.cfg "},{type:b,tag:d,props:{className:[f,o]},children:[{type:a,value:P}]},{type:a,value:h},{type:b,tag:d,props:{className:[f,u]},children:[{type:a,value:"cut"}]},{type:a,value:" -f "},{type:b,tag:d,props:{className:[f,Q]},children:[{type:a,value:R}]},{type:a,value:" -d "},{type:b,tag:d,props:{className:[f,"punctuation"]},children:[{type:a,value:"\\"}]},{type:a,value:"'\n\ngrub2-set-default "},{type:b,tag:d,props:{className:[f,Q]},children:[{type:a,value:R}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"重启服务器。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"注意，某些服务商（如Digital Ocean）可能需要首先将VPS配置为可自定义内核，然后grub2的配置才会生效。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"另外，如果你是设置了默认内核后，再删除旧内核，请务必在开机前先重新设置一次默认内核，因为，位置变了，不再是原来的2了。"}]},{type:a,value:c},{type:b,tag:w,props:{id:s},children:[{type:b,tag:j,props:{href:"#%E5%BC%80%E5%90%AFbbr",ariaHidden:x,tabIndex:y},children:[{type:b,tag:d,props:{className:[z,A]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"开机后 uname -r 看看是不是内核就是你刚才选的那个。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"执行 "},{type:b,tag:i,props:{},children:[{type:a,value:"lsmod | grep bbr"}]},{type:a,value:"，如果结果中没有 tcp_bbr 的话就先执行以下代码"}]},{type:a,value:c},{type:b,tag:k,props:{className:[l]},children:[{type:b,tag:m,props:{className:[n,t]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"modprobe tcp_bbr\n\n"},{type:b,tag:d,props:{className:[f,B,C]},children:[{type:a,value:D}]},{type:a,value:h},{type:b,tag:d,props:{className:[f,E]},children:[{type:a,value:"\"tcp_bbr\""}]},{type:a,value:h},{type:b,tag:d,props:{className:[f,o]},children:[{type:a,value:F}]},{type:a,value:" \u002Fetc\u002Fmodules-load.d\u002Fmodules.conf\n\n"},{type:b,tag:d,props:{className:[f,B,C]},children:[{type:a,value:D}]},{type:a,value:h},{type:b,tag:d,props:{className:[f,E]},children:[{type:a,value:"\"net.core.default_qdisc=fq\""}]},{type:a,value:h},{type:b,tag:d,props:{className:[f,o]},children:[{type:a,value:F}]},{type:a,value:" \u002Fetc\u002Fsysctl.conf\n\n"},{type:b,tag:d,props:{className:[f,B,C]},children:[{type:a,value:D}]},{type:a,value:h},{type:b,tag:d,props:{className:[f,E]},children:[{type:a,value:"\"net.ipv4.tcp_congestion_control=bbr\""}]},{type:a,value:h},{type:b,tag:d,props:{className:[f,o]},children:[{type:a,value:F}]},{type:a,value:" \u002Fetc\u002Fsysctl.conf\n\nsysctl -p\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"观察BBR是否开启成功，执行以下代码："}]},{type:a,value:c},{type:b,tag:k,props:{className:[l]},children:[{type:b,tag:m,props:{className:[n,t]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"sysctl net.ipv4.tcp_available_congestion_control\nsysctl net.ipv4.tcp_congestion_control\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"如果结果都有bbr, 则证明你的内核已开启bbr"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"看到有 tcp_bbr 模块即说明bbr已启动"}]}]},dir:"\u002Fwiki\u002FTools",path:S,extension:".md",createdAt:T,updatedAt:T},prev:{slug:U,title:V,date:G},next:{slug:W,title:X,date:p},scrollTop:Y,sideCategory:[{folderName:"Tools",articles:[{slug:"Tools-2017-12-11",title:"cocoapods 私有库重名解决方法",date:"2017-12-11T18:06:43.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2017-12-11"},{slug:"Tools-2017-12-21",title:"fir.im 如何将 installUrl 转换为可以直接安装的链接？",date:"2017-12-21T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2017-12-21"},{slug:"Tools-2018-07-04",title:"vscode重装",date:"2018-07-04T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2018-07-04"},{slug:"Tools-Increase-speed-git-clone",title:"github clone提速",date:G,path:"\u002Fwiki\u002FTools\u002FTools-Increase-speed-git-clone"},{slug:"Tools-Log Guru",title:" Log Guru",date:Z,path:"\u002Fwiki\u002FTools\u002FTools-Log Guru"},{slug:"Tools-charles",title:"charles抓包https",date:"2017-02-02T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-charles"},{slug:"Tools-cocoapods import导入时没有提示的解决办法",title:"cocoapods import导入时没有提示的解决办法",date:"2017-09-07T10:21:59.000Z",path:"\u002Fwiki\u002FTools\u002FTools-cocoapods import导入时没有提示的解决办法"},{slug:"Tools-cocoapods-missing required architecture i386",title:"cocoapods-missing required architecture i386",date:"2017-11-27T10:34:10.000Z",path:"\u002Fwiki\u002FTools\u002FTools-cocoapods-missing required architecture i386"},{slug:"Tools-git-change-remote",title:"git切换远程服务",date:g,path:"\u002Fwiki\u002FTools\u002FTools-git-change-remote"},{slug:"Tools-gn-2x-img",title:"使用imageMagick生成@2x图片脚本",date:_,path:"\u002Fwiki\u002FTools\u002FTools-gn-2x-img"},{slug:"Tools-gitbook入门",title:"gitbook入门",date:"2018-05-24T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-gitbook入门"},{slug:"Tools-gollum-install",title:"gollum搭建笔记",date:"2019-06-03T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-gollum-install"},{slug:"Tools-how-to-manager-github-stars",title:"Github管理stars的方法",date:_,path:"\u002Fwiki\u002FTools\u002FTools-how-to-manager-github-stars"},{slug:"Tools-lldb",title:"lldb: chisel",date:"2017-11-26T13:00:35.000Z",path:"\u002Fwiki\u002FTools\u002FTools-lldb"},{slug:U,title:V,date:G,path:"\u002Fwiki\u002FTools\u002FTools-macOS上安装Composer"},{slug:"Tools-npm换源",title:"npm换源",date:$,path:"\u002Fwiki\u002FTools\u002FTools-npm换源"},{slug:"Tools-proxy-setting",title:"Mac OSX终端走shadowsocks代理 ",date:$,path:"\u002Fwiki\u002FTools\u002FTools-proxy-setting"},{slug:H,title:I,date:p,path:S},{slug:"Tools-the_silver_searcher",title:"the_silver_searcher",date:Z,path:"\u002Fwiki\u002FTools\u002FTools-the_silver_searcher"},{slug:"Tools-update-cocoapods",title:"更新cocoapods",date:"2017-08-10T11:24:52.000Z",path:"\u002Fwiki\u002FTools\u002FTools-update-cocoapods"},{slug:"Tools-whistle",title:"whistle",date:"2017-09-20T09:52:30.000Z",path:"\u002Fwiki\u002FTools\u002FTools-whistle"},{slug:"Tools-xcode-refactor",title:"xcode refactor",date:"2017-05-20T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-xcode-refactor"},{slug:"Tools-在线API团队协作工具",title:"在线API团队协作工具",date:"2017-08-22T10:49:27.000Z",path:"\u002Fwiki\u002FTools\u002FTools-在线API团队协作工具"},{slug:W,title:X,date:p,path:"\u002Fwiki\u002FTools\u002FTools-正则"},{slug:"Tools-正则2",title:"正则:断言",date:"2018-02-26T16:48:45.000Z",path:"\u002Fwiki\u002FTools\u002FTools-正则2"}],children:[{folderName:"fastlane",articles:[{slug:"fastlane-2017-09-11-3",title:" pem:生成推送证书",date:g,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-2017-09-11-3"},{slug:"fastlane-2017-09-11-7",title:"init:安装和初始化",date:"2017-06-22T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-2017-09-11-7"},{slug:"fastlane-fastlane-cer",title:"cert证书",date:g,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-fastlane-cer"},{slug:"fastlane-fastlane-gym",title:"gym自动打包",date:g,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-fastlane-gym"},{slug:"fastlane-frameit",title:"frameit:自动截图",date:g,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-frameit"},{slug:"fastlane-frameit:截图套壳",title:"frameit:截图套壳",date:g,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-frameit:截图套壳"},{slug:"fastlane-produce 配置appid",title:"produce 配置appid",date:g,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-produce 配置appid"},{slug:"fastlane-sigh resign:重签名",title:"sigh resign:重签名",date:g,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-sigh resign:重签名"},{slug:"fastlane-sign:签名",title:"sign:签名",date:g,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-sign:签名"},{slug:"fastlane-snapshot 自动截图",title:"snapshot 自动截图",date:g,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-snapshot 自动截图"}],children:[]},{folderName:"kettle",articles:[{slug:"kettle-install-macos",title:"Macos Kettle的安装使用",date:"2021-09-26T09:23:22.000Z",path:"\u002Fwiki\u002FTools\u002Fkettle\u002Fkettle-install-macos"}],children:[]},{folderName:"rsa",articles:[{slug:"rsa-ios-rsa",title:"iOS RSA加密解密测试",date:aa,path:"\u002Fwiki\u002FTools\u002Frsa\u002Frsa-ios-rsa"},{slug:"rsa-rsa-ext",title:"证书文件名、扩展名的解释",date:aa,path:"\u002Fwiki\u002FTools\u002Frsa\u002Frsa-rsa-ext"}],children:[]}]}]}],fetch:{},mutations:Y}}("text","element","\n","span","p","token","2017-06-30T10:32:11.000Z"," ","code","a","div","nuxt-content-highlight","pre","line-numbers","operator","2017-07-12T11:22:15.000Z","下载更换内核","查看内核是否安装成功","开启bbr","language-bash","function",2,"h2","true",-1,"icon","icon-link","builtin","class-name","echo","string","\u003E\u003E","2017-07-11T20:59:30.000Z","Tools-ss+bbr","ss+bbr提速","http:\u002F\u002Fwww.bandwagonhost.net\u002F268.html","nofollow","noopener","noreferrer","_blank","http:\u002F\u002Felrepo.org\u002Flinux\u002Fkernel\u002Fel7\u002Fx86_64\u002FRPMS\u002F","|","number","2","\u002Fwiki\u002FTools\u002FTools-ss+bbr","2021-11-18T07:37:48.008Z","Tools-macOS上安装Composer","macOS上安装Composer","Tools-正则","正则",void 0,"2017-12-04T20:20:43.000Z","2018-04-11T13:32:11.000Z","2018-05-31T00:00:00.000Z","2017-08-02T09:49:02.000Z")));