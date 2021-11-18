__NUXT_JSONP__("/wiki/content/fastlane-frameit", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av){return {data:[{},{article:{slug:T,description:"",title:U,layout:"page",date:i,collection:V,toc:[{id:z,depth:A,text:z},{id:B,depth:A,text:B},{id:C,depth:x,text:C},{id:D,depth:x,text:D},{id:E,depth:x,text:E},{id:F,depth:x,text:F},{id:W,depth:A,text:X},{id:G,depth:A,text:G},{id:H,depth:x,text:H}],body:{type:Y,children:[{type:a,value:d},{type:b,tag:I,props:{id:z},children:[{type:b,tag:j,props:{href:"#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E4%BD%BF%E7%94%A8%E8%87%AA%E5%8A%A8%E6%88%AA%E5%9B%BE%E5%8A%9F%E8%83%BD%EF%BC%9F",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:z}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"因为截图是个没技术含量又费时的过程,如果比如app实现了国际化,多种语言多个模拟器,一张张截图、分类,真实是个苦差事。"}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"使用fastlane的snapshot能很方便地实现多语言、多模拟器的屏幕截图,截图完成后还会自动生成一个漂亮的html网页,以展示捕获的所有屏幕。"}]},{type:a,value:d},{type:b,tag:I,props:{id:B},children:[{type:b,tag:j,props:{href:"#%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:B}]},{type:a,value:d},{type:b,tag:y,props:{id:C},children:[{type:b,tag:j,props:{href:"#%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:C}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"fastlane 截图功能用到了Xcode7引入的"},{type:b,tag:h,props:{},children:[{type:a,value:"UI Tests"}]},{type:a,value:"功能。"}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"如果不了解,建议看看这篇文章"},{type:b,tag:j,props:{href:"https:\u002F\u002Fonevcat.com\u002F2015\u002F09\u002Fui-testing\u002F",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"WWDC15 Session笔记 - Xcode 7 UI 测试初窥"}]},{type:a,value:"。"}]},{type:a,value:d},{type:a,value:d},{type:a,value:d},{type:a,value:d},{type:a,value:d},{type:a,value:d},{type:b,tag:y,props:{id:D},children:[{type:b,tag:j,props:{href:"#%E5%B7%A5%E7%A8%8B%E9%85%8D%E7%BD%AE",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:D}]},{type:a,value:d},{type:b,tag:"ol",props:{},children:[{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"在项目中添加一个新的"},{type:b,tag:h,props:{},children:[{type:a,value:Z}]},{type:a,value:"(建议语言选择Swift,导入Swift文件更简单)"}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"进入工程目录，运行"},{type:b,tag:h,props:{},children:[{type:a,value:"fastlane snapshot init"}]},{type:a,value:", 运行成功后在fastlane文件夹下生成一些新文件，其中包括"},{type:b,tag:h,props:{},children:[{type:a,value:_}]}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"添加"},{type:b,tag:h,props:{},children:[{type:a,value:_}]},{type:a,value:"这个文件添加到 "},{type:b,tag:h,props:{},children:[{type:a,value:Z}]},{type:a,value:" 中"}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"在测试类中,点击左下角的录制按钮,录制交互动作"}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"在测试类中,要添加截屏的位置添加代码"},{type:b,tag:h,props:{},children:[{type:a,value:"snapshot(\"01LoginScreen\")"}]}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"在测试类的"},{type:b,tag:h,props:{},children:[{type:a,value:"setUp()"}]},{type:a,value:"方法中添加如下代码:"}]},{type:a,value:d},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,$]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[e,J]},children:[{type:a,value:aa}]},{type:a,value:ab},{type:b,tag:c,props:{className:[e,ac]},children:[{type:a,value:ad}]},{type:a,value:K},{type:b,tag:c,props:{className:[e,q]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,q]},children:[{type:a,value:"setupSnapshot"}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:k}]},{type:a,value:"app"},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:"\napp"},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[e,q]},children:[{type:a,value:"launch"}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:d}]}]}]},{type:a,value:d}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:y,props:{id:E},children:[{type:b,tag:j,props:{href:"#%E6%88%AA%E5%B1%8F",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:E}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"为了满足实际需要,需要先配置"},{type:b,tag:h,props:{},children:[{type:a,value:"Snapfile"}]},{type:a,value:" 文件。"}]},{type:a,value:d},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,"language-ruby"]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"devices"},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:M}]},{type:a,value:N},{type:b,tag:c,props:{className:[e,r]},children:[{type:a,value:"\"iPhone 6\""}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:O}]},{type:a,value:N},{type:b,tag:c,props:{className:[e,r]},children:[{type:a,value:"\"iPhone 6 Plus\""}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:O}]},{type:a,value:N},{type:b,tag:c,props:{className:[e,r]},children:[{type:a,value:"\"iPhone 5\""}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:"\n\nlanguages"},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:M}]},{type:a,value:af},{type:b,tag:c,props:{className:[e,r]},children:[{type:a,value:"\"en-US\""}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:O}]},{type:a,value:af},{type:b,tag:c,props:{className:[e,r]},children:[{type:a,value:"\"zh-Hans\""}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,Q]},children:[{type:a,value:"#scheme \"snapshotExample\""}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,Q]},children:[{type:a,value:"#截图文件数据位置"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,Q]},children:[{type:a,value:"#output_directory \"..\u002Fscreenshots\""}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"执行"},{type:b,tag:h,props:{},children:[{type:a,value:"fastlane snapshot"}]},{type:a,value:"就可以执行截屏脚本了。"}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"接下来耐心等待就可以了。成功后会还生成一个html文件。"}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:b,tag:ag,props:{alt:"20170624210471.png",src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F20170624210471.png"},children:[]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:b,tag:ag,props:{alt:"2017062451023htmlPagePreviewFade.jpg",src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F2017062451023htmlPagePreviewFade.jpg"},children:[]}]},{type:a,value:d},{type:b,tag:y,props:{id:F},children:[{type:b,tag:j,props:{href:"#%E9%87%8D%E7%BD%AE%E6%A8%A1%E6%8B%9F%E5%99%A8",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:F}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"截图工具提供了我们重置所有模拟器的方法。\n如果你截图过程中遇到了奇怪的问题,这个命令可能会很有帮助。"}]},{type:a,value:d},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,R]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"fastlane snapshot reset_simulators\n"}]}]}]},{type:a,value:d},{type:b,tag:I,props:{id:W},children:[{type:b,tag:j,props:{href:"#%E4%B8%8A%E4%BC%A0%E5%AF%BC%E5%85%A5app-store",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:X}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"假设一开始,就执行了 "},{type:b,tag:h,props:{},children:[{type:a,value:"fastlane init"}]},{type:a,value:",那么截图默认会在"},{type:b,tag:h,props:{},children:[{type:a,value:".\u002Ffastlane\u002Fscreenshots"}]},{type:a,value:"文件夹。"}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"此时上传只需要一行命令:"}]},{type:a,value:d},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,R]},children:[{type:b,tag:h,props:{},children:[{type:a,value:" fastlane deliver\n"}]}]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"然后按提示进行操作就可以了。"}]},{type:a,value:d},{type:b,tag:I,props:{id:G},children:[{type:b,tag:j,props:{href:"#%E8%87%AA%E5%B7%B1%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:G}]},{type:a,value:d},{type:b,tag:y,props:{id:H},children:[{type:b,tag:j,props:{href:"#%E5%A4%9A%E8%AF%AD%E8%A8%80%E6%B5%8B%E8%AF%95%E6%88%AA%E5%9B%BE%E5%A4%B1%E8%B4%A5",ariaHidden:m,tabIndex:n},children:[{type:b,tag:c,props:{className:[o,p]},children:[]}]},{type:a,value:H}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"原因是自己的ui test方法没有写好。"}]},{type:a,value:d},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,$]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[e,J]},children:[{type:a,value:"func"}]},{type:a,value:K},{type:b,tag:c,props:{className:[e,q]},children:[{type:a,value:"testSnapshots"}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:"{"}]},{type:a,value:S},{type:b,tag:c,props:{className:[e,J]},children:[{type:a,value:aa}]},{type:a,value:ab},{type:b,tag:c,props:{className:[e,ac]},children:[{type:a,value:ad}]},{type:a,value:K},{type:b,tag:c,props:{className:[e,q]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:S},{type:b,tag:c,props:{className:[e,q]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[e,r]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:"\n     app"},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:L}]},{type:a,value:"buttons"},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[e,r]},children:[{type:a,value:"\"myButton\""}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[e,q]},children:[{type:a,value:"tap"}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:S},{type:b,tag:c,props:{className:[e,q]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[e,r]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,f]},children:[{type:a,value:"}"}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"app.buttons[\"myButton\"]"}]},{type:a,value:"获取到当前屏幕上所有的按钮的代理,并去寻找"},{type:b,tag:h,props:{},children:[{type:a,value:"myButton"}]},{type:a,value:"按钮,但是不同语言中按钮的名字是不一样的,这样就到导致了截图失败。"}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"解决方法,设置控件的"},{type:b,tag:h,props:{},children:[{type:a,value:"identifier"}]},{type:a,value:",可以在代码或者Interface Builder中进行设置:"}]},{type:a,value:d},{type:b,tag:t,props:{className:[u]},children:[{type:b,tag:v,props:{className:[w,R]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"self.myButton.accessibilityIdentifier = @\"myButton\";\n"}]}]}]}]},excerpt:{type:Y,children:[]},dir:"\u002Fwiki\u002FTools\u002Ffastlane",path:aj,extension:".md",createdAt:ak,updatedAt:ak},prev:{slug:al,title:am,date:i},next:{slug:an,title:ao,date:i},scrollTop:ap,sideCategory:[{folderName:"Tools",articles:[{slug:"Tools-2017-12-11",title:"cocoapods 私有库重名解决方法",date:"2017-12-11T18:06:43.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2017-12-11"},{slug:"Tools-2017-12-21",title:"fir.im 如何将 installUrl 转换为可以直接安装的链接？",date:"2017-12-21T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2017-12-21"},{slug:"Tools-2018-07-04",title:"vscode重装",date:"2018-07-04T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2018-07-04"},{slug:"Tools-Increase-speed-git-clone",title:"github clone提速",date:aq,path:"\u002Fwiki\u002FTools\u002FTools-Increase-speed-git-clone"},{slug:"Tools-Log Guru",title:" Log Guru",date:ar,path:"\u002Fwiki\u002FTools\u002FTools-Log Guru"},{slug:"Tools-charles",title:"charles抓包https",date:"2017-02-02T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-charles"},{slug:"Tools-cocoapods import导入时没有提示的解决办法",title:"cocoapods import导入时没有提示的解决办法",date:"2017-09-07T10:21:59.000Z",path:"\u002Fwiki\u002FTools\u002FTools-cocoapods import导入时没有提示的解决办法"},{slug:"Tools-cocoapods-missing required architecture i386",title:"cocoapods-missing required architecture i386",date:"2017-11-27T10:34:10.000Z",path:"\u002Fwiki\u002FTools\u002FTools-cocoapods-missing required architecture i386"},{slug:"Tools-git-change-remote",title:"git切换远程服务",date:i,path:"\u002Fwiki\u002FTools\u002FTools-git-change-remote"},{slug:"Tools-gitbook入门",title:"gitbook入门",date:"2018-05-24T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-gitbook入门"},{slug:"Tools-gn-2x-img",title:"使用imageMagick生成@2x图片脚本",date:as,path:"\u002Fwiki\u002FTools\u002FTools-gn-2x-img"},{slug:"Tools-gollum-install",title:"gollum搭建笔记",date:"2019-06-03T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-gollum-install"},{slug:"Tools-how-to-manager-github-stars",title:"Github管理stars的方法",date:as,path:"\u002Fwiki\u002FTools\u002FTools-how-to-manager-github-stars"},{slug:"Tools-lldb",title:"lldb: chisel",date:"2017-11-26T13:00:35.000Z",path:"\u002Fwiki\u002FTools\u002FTools-lldb"},{slug:"Tools-macOS上安装Composer",title:"macOS上安装Composer",date:aq,path:"\u002Fwiki\u002FTools\u002FTools-macOS上安装Composer"},{slug:"Tools-npm换源",title:"npm换源",date:at,path:"\u002Fwiki\u002FTools\u002FTools-npm换源"},{slug:"Tools-proxy-setting",title:"Mac OSX终端走shadowsocks代理 ",date:at,path:"\u002Fwiki\u002FTools\u002FTools-proxy-setting"},{slug:"Tools-ss+bbr",title:"ss+bbr提速",date:au,path:"\u002Fwiki\u002FTools\u002FTools-ss+bbr"},{slug:"Tools-the_silver_searcher",title:"the_silver_searcher",date:ar,path:"\u002Fwiki\u002FTools\u002FTools-the_silver_searcher"},{slug:"Tools-update-cocoapods",title:"更新cocoapods",date:"2017-08-10T11:24:52.000Z",path:"\u002Fwiki\u002FTools\u002FTools-update-cocoapods"},{slug:"Tools-whistle",title:"whistle",date:"2017-09-20T09:52:30.000Z",path:"\u002Fwiki\u002FTools\u002FTools-whistle"},{slug:"Tools-xcode-refactor",title:"xcode refactor",date:"2017-05-20T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-xcode-refactor"},{slug:"Tools-在线API团队协作工具",title:"在线API团队协作工具",date:"2017-08-22T10:49:27.000Z",path:"\u002Fwiki\u002FTools\u002FTools-在线API团队协作工具"},{slug:"Tools-正则",title:"正则",date:au,path:"\u002Fwiki\u002FTools\u002FTools-正则"},{slug:"Tools-正则2",title:"正则:断言",date:"2018-02-26T16:48:45.000Z",path:"\u002Fwiki\u002FTools\u002FTools-正则2"}],children:[{folderName:V,articles:[{slug:"fastlane-2017-09-11-3",title:" pem:生成推送证书",date:i,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-2017-09-11-3"},{slug:"fastlane-2017-09-11-7",title:"init:安装和初始化",date:"2017-06-22T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-2017-09-11-7"},{slug:"fastlane-fastlane-cer",title:"cert证书",date:i,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-fastlane-cer"},{slug:al,title:am,date:i,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-fastlane-gym"},{slug:T,title:U,date:i,path:aj},{slug:an,title:ao,date:i,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-frameit:截图套壳"},{slug:"fastlane-produce 配置appid",title:"produce 配置appid",date:i,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-produce 配置appid"},{slug:"fastlane-sigh resign:重签名",title:"sigh resign:重签名",date:i,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-sigh resign:重签名"},{slug:"fastlane-sign:签名",title:"sign:签名",date:i,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-sign:签名"},{slug:"fastlane-snapshot 自动截图",title:"snapshot 自动截图",date:i,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-snapshot 自动截图"}],children:[]},{folderName:"kettle",articles:[{slug:"kettle-install-macos",title:"Macos Kettle的安装使用",date:"2021-09-26T09:23:22.000Z",path:"\u002Fwiki\u002FTools\u002Fkettle\u002Fkettle-install-macos"}],children:[]},{folderName:"rsa",articles:[{slug:"rsa-ios-rsa",title:"iOS RSA加密解密测试",date:av,path:"\u002Fwiki\u002FTools\u002Frsa\u002Frsa-ios-rsa"},{slug:"rsa-rsa-ext",title:"证书文件名、扩展名的解释",date:av,path:"\u002Fwiki\u002FTools\u002Frsa\u002Frsa-rsa-ext"}],children:[]}]}]}],fetch:{},mutations:ap}}("text","element","span","\n","token","punctuation","p","code","2017-06-30T10:32:11.000Z","a","(",")","true",-1,"icon","icon-link","function","string","li","div","nuxt-content-highlight","pre","line-numbers",3,"h3","为什么要使用自动截图功能？",2,"如何使用","准备工作","工程配置","截屏","重置模拟器","自己遇到的问题","多语言测试截图失败","h2","keyword"," ",".","[","\n   ",",","]","comment","language-text","\n     ","fastlane-frameit","frameit:自动截图","fastlane","上传导入app-store","上传导入App Store","root","UI Test target","SnapshotHelper.swift","language-swift","let"," app ","operator","=","XCUIApplication","\n  ","img","snapshot","\"1Page\"","\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-frameit","2021-11-18T05:30:57.452Z","fastlane-fastlane-gym","gym自动打包","fastlane-frameit:截图套壳","frameit:截图套壳",void 0,"2017-07-11T20:59:30.000Z","2017-12-04T20:20:43.000Z","2018-04-11T13:32:11.000Z","2018-05-31T00:00:00.000Z","2017-07-12T11:22:15.000Z","2017-08-02T09:49:02.000Z")));