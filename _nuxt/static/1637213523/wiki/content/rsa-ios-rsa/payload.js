__NUXT_JSONP__("/wiki/content/rsa-ios-rsa", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai){return {data:[{},{article:{slug:M,title:N,layout:"page",date:B,collection:O,toc:[{id:C,depth:P,text:C},{id:D,depth:P,text:D}],body:{type:"root",children:[{type:b,tag:Q,props:{id:C},children:[{type:b,tag:A,props:{href:"#%E7%94%9F%E6%88%90%E8%87%AA%E7%AD%BE%E5%90%8D%E8%AF%81%E4%B9%A6",ariaHidden:R,tabIndex:S},children:[{type:b,tag:c,props:{className:[T,U]},children:[]}]},{type:a,value:C}]},{type:a,value:f},{type:b,tag:"blockquote",props:{},children:[{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"转自: "},{type:b,tag:A,props:{href:V,rel:[H,I,J],target:K},children:[{type:a,value:V}]}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"生成环境是在mac系统下，使用openssl进行生成，首先打开终端，按下面这些步骤依次来做："}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"1). 生成模长为1024bit的私钥文件private_key.pem"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:o,props:{},children:[{type:a,value:"openssl genrsa -out private_key.pem 1024\n"}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"2). 生成证书请求文件rsaCertReq.csr"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:o,props:{},children:[{type:a,value:"openssl req -new -key private_key.pem -out rsaCerReq.csr\n注意：这一步会提示输入国家、省份、mail等信息，可以根据实际情况填写，或者全部不用填写，直接全部敲回车.\n"}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"3). 生成证书rsaCert.crt，并设置有效时间为1年"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:o,props:{},children:[{type:a,value:"openssl x509 -req -days 3650 -in rsaCerReq.csr -signkey private_key.pem -out rsaCert.crt\n"}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"4). 生成供iOS使用的公钥文件public_key.der"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:o,props:{},children:[{type:a,value:"openssl x509 -outform der -in rsaCert.crt -out public_key.der\n"}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"5). 生成供iOS使用的私钥文件private_key.p12"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:o,props:{},children:[{type:a,value:"openssl pkcs12 -export -out private_key.p12 -inkey private_key.pem -in rsaCert.crt\n注意：这一步会提示给私钥文件设置密码，直接输入想要设置密码即可，然后敲回车，然后再验证刚才设置的密码，再次输入密码，然后敲回车，完毕！\n在解密时，private_key.p12文件需要和这里设置的密码配合使用，因此需要牢记此密码.\n"}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"6). 生成供Java使用的公钥rsa_public_key.pem"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:o,props:{},children:[{type:a,value:"openssl rsa -in private_key.pem -out rsa_public_key.pem -pubout\n"}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"7). 生成供Java使用的私钥pkcs8_private_key.pem"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:o,props:{},children:[{type:a,value:"openssl pkcs8 -topk8 -in private_key.pem -out pkcs8_private_key.pem -nocrypt\n"}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"其中: public_key.der和private_key.p12就是iOS需要用到的文件"}]},{type:a,value:f},{type:b,tag:Q,props:{id:D},children:[{type:b,tag:A,props:{href:"#%E5%8A%A0%E5%AF%86%E8%A7%A3%E5%AF%86%E6%B5%8B%E8%AF%95",ariaHidden:R,tabIndex:S},children:[{type:b,tag:c,props:{className:[T,U]},children:[]}]},{type:a,value:D}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:"RSAEncryptor"}]},{type:a,value:"类的代码参考的这里: "},{type:b,tag:A,props:{href:W,rel:[H,I,J],target:K},children:[{type:a,value:W}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"base64需要稍微修改下。"}]},{type:a,value:f},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,"language-objc"]},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"-"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,"keyword"]},children:[{type:a,value:"void"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:"touchesBegan"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:"NSSet"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\u003C"}]},{type:a,value:"UITouch "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\u003E"}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:"touches withEvent"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:"UIEvent "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:"event"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"{"}]},{type:a,value:"\n    \n    RSAEncryptor "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:"rsa "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"RSAEncryptor alloc"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:" init"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:"publicKeyPath "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"@\"public_key\""}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"@\"der\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"@\"public key: %@\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:" publicKeyPath"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"rsa loadPublicKeyFromFile"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"publicKeyPath"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:"privateKeyPath "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"@\"private_key\""}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"@\"p12\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"@\"private key: %@\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:" privateKeyPath"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"rsa loadPrivateKeyFromFile"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"privateKeyPath password"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"@\"\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"\u002F\u002F密码不对就会崩溃"}]},{type:a,value:"\n            \n    NSString "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:"securityText "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"@\"hello world\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\n    NSString "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:"encryptedString "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"rsa rsaEncryptString"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"securityText"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"@\"加密结果: %@\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:" encryptedString"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:q}]},{type:a,value:"result "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:y}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"rsa rsaDecryptString"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"encryptedString"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,E]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"@\"解密结果: %@\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:" result"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"}"}]},{type:a,value:"\n\n"}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"示例代码: "},{type:b,tag:A,props:{href:_,rel:[H,I,J],target:K},children:[{type:a,value:_}]}]}]},dir:"\u002Fwiki\u002FTools\u002Frsa",path:$,extension:".md",createdAt:aa,updatedAt:aa},prev:{slug:"Error-2017-07-31",title:"Undefined symbols for architecture ..",date:"2017-07-31T08:52:40.000Z"},next:{slug:ab,title:ac,date:B},scrollTop:ad,sideCategory:[{folderName:"Tools",articles:[{slug:"Tools-2017-12-11",title:"cocoapods 私有库重名解决方法",date:"2017-12-11T18:06:43.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2017-12-11"},{slug:"Tools-2017-12-21",title:"fir.im 如何将 installUrl 转换为可以直接安装的链接？",date:"2017-12-21T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2017-12-21"},{slug:"Tools-2018-07-04",title:"vscode重装",date:"2018-07-04T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2018-07-04"},{slug:"Tools-Increase-speed-git-clone",title:"github clone提速",date:ae,path:"\u002Fwiki\u002FTools\u002FTools-Increase-speed-git-clone"},{slug:"Tools-Log Guru",title:" Log Guru",date:af,path:"\u002Fwiki\u002FTools\u002FTools-Log Guru"},{slug:"Tools-charles",title:"charles抓包https",date:"2017-02-02T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-charles"},{slug:"Tools-cocoapods import导入时没有提示的解决办法",title:"cocoapods import导入时没有提示的解决办法",date:"2017-09-07T10:21:59.000Z",path:"\u002Fwiki\u002FTools\u002FTools-cocoapods import导入时没有提示的解决办法"},{slug:"Tools-cocoapods-missing required architecture i386",title:"cocoapods-missing required architecture i386",date:"2017-11-27T10:34:10.000Z",path:"\u002Fwiki\u002FTools\u002FTools-cocoapods-missing required architecture i386"},{slug:"Tools-git-change-remote",title:"git切换远程服务",date:n,path:"\u002Fwiki\u002FTools\u002FTools-git-change-remote"},{slug:"Tools-gitbook入门",title:"gitbook入门",date:"2018-05-24T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-gitbook入门"},{slug:"Tools-gn-2x-img",title:"使用imageMagick生成@2x图片脚本",date:ag,path:"\u002Fwiki\u002FTools\u002FTools-gn-2x-img"},{slug:"Tools-gollum-install",title:"gollum搭建笔记",date:"2019-06-03T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-gollum-install"},{slug:"Tools-how-to-manager-github-stars",title:"Github管理stars的方法",date:ag,path:"\u002Fwiki\u002FTools\u002FTools-how-to-manager-github-stars"},{slug:"Tools-lldb",title:"lldb: chisel",date:"2017-11-26T13:00:35.000Z",path:"\u002Fwiki\u002FTools\u002FTools-lldb"},{slug:"Tools-macOS上安装Composer",title:"macOS上安装Composer",date:ae,path:"\u002Fwiki\u002FTools\u002FTools-macOS上安装Composer"},{slug:"Tools-npm换源",title:"npm换源",date:ah,path:"\u002Fwiki\u002FTools\u002FTools-npm换源"},{slug:"Tools-proxy-setting",title:"Mac OSX终端走shadowsocks代理 ",date:ah,path:"\u002Fwiki\u002FTools\u002FTools-proxy-setting"},{slug:"Tools-ss+bbr",title:"ss+bbr提速",date:ai,path:"\u002Fwiki\u002FTools\u002FTools-ss+bbr"},{slug:"Tools-the_silver_searcher",title:"the_silver_searcher",date:af,path:"\u002Fwiki\u002FTools\u002FTools-the_silver_searcher"},{slug:"Tools-update-cocoapods",title:"更新cocoapods",date:"2017-08-10T11:24:52.000Z",path:"\u002Fwiki\u002FTools\u002FTools-update-cocoapods"},{slug:"Tools-whistle",title:"whistle",date:"2017-09-20T09:52:30.000Z",path:"\u002Fwiki\u002FTools\u002FTools-whistle"},{slug:"Tools-xcode-refactor",title:"xcode refactor",date:"2017-05-20T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-xcode-refactor"},{slug:"Tools-在线API团队协作工具",title:"在线API团队协作工具",date:"2017-08-22T10:49:27.000Z",path:"\u002Fwiki\u002FTools\u002FTools-在线API团队协作工具"},{slug:"Tools-正则",title:"正则",date:ai,path:"\u002Fwiki\u002FTools\u002FTools-正则"},{slug:"Tools-正则2",title:"正则:断言",date:"2018-02-26T16:48:45.000Z",path:"\u002Fwiki\u002FTools\u002FTools-正则2"}],children:[{folderName:"fastlane",articles:[{slug:"fastlane-2017-09-11-3",title:" pem:生成推送证书",date:n,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-2017-09-11-3"},{slug:"fastlane-2017-09-11-7",title:"init:安装和初始化",date:"2017-06-22T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-2017-09-11-7"},{slug:"fastlane-fastlane-cer",title:"cert证书",date:n,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-fastlane-cer"},{slug:"fastlane-fastlane-gym",title:"gym自动打包",date:n,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-fastlane-gym"},{slug:"fastlane-frameit",title:"frameit:自动截图",date:n,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-frameit"},{slug:"fastlane-frameit:截图套壳",title:"frameit:截图套壳",date:n,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-frameit:截图套壳"},{slug:"fastlane-produce 配置appid",title:"produce 配置appid",date:n,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-produce 配置appid"},{slug:"fastlane-sigh resign:重签名",title:"sigh resign:重签名",date:n,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-sigh resign:重签名"},{slug:"fastlane-sign:签名",title:"sign:签名",date:n,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-sign:签名"},{slug:"fastlane-snapshot 自动截图",title:"snapshot 自动截图",date:n,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-snapshot 自动截图"}],children:[]},{folderName:"kettle",articles:[{slug:"kettle-install-macos",title:"Macos Kettle的安装使用",date:"2021-09-26T09:23:22.000Z",path:"\u002Fwiki\u002FTools\u002Fkettle\u002Fkettle-install-macos"}],children:[]},{folderName:O,articles:[{slug:M,title:N,date:B,path:$},{slug:ab,title:ac,date:B,path:"\u002Fwiki\u002FTools\u002Frsa\u002Frsa-rsa-ext"}],children:[]}]}]}],fetch:{},mutations:ad}}("text","element","span","token","punctuation","\n","operator","p",";",":","[","]","string","2017-06-30T10:32:11.000Z","code"," ","*","div","nuxt-content-highlight","pre","line-numbers","language-text","(",")","=","\n    ","a","2017-08-02T09:49:02.000Z","生成自签名证书","加密解密测试","function","NSLog",",","nofollow","noopener","noreferrer","_blank","\n    \n    NSString ","rsa-ios-rsa","iOS RSA加密解密测试","rsa",2,"h2","true",-1,"icon","icon-link","http:\u002F\u002Fwww.jianshu.com\u002Fp\u002F74a796ec5038","https:\u002F\u002Fgist.github.com\u002Flvjian700\u002F204c23226fdffd6a505d","NSBundle mainBundle"," pathForResource"," ofType","http:\u002F\u002Fgit.oschina.net\u002Ftyrad\u002FrsaDemo","\u002Fwiki\u002FTools\u002Frsa\u002Frsa-ios-rsa","2021-11-18T05:30:57.452Z","rsa-rsa-ext","证书文件名、扩展名的解释",void 0,"2017-07-11T20:59:30.000Z","2017-12-04T20:20:43.000Z","2018-04-11T13:32:11.000Z","2018-05-31T00:00:00.000Z","2017-07-12T11:22:15.000Z")));