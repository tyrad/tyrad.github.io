__NUXT_JSONP__("/wiki/content/Tutorial-ionic-device", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T){return {data:[{},{article:{slug:v,title:w,layout:"page",date:f,collection:x,toc:[{id:y,depth:z,text:A},{id:B,depth:s,text:C},{id:D,depth:s,text:E},{id:F,depth:s,text:G},{id:H,depth:z,text:I}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"使用"},{type:b,tag:e,props:{},children:[{type:a,value:"ionic serve"}]},{type:a,value:"或模拟器在浏览器中测试您的应用程序在您的应用程序开发过程中快速，轻松和方便，但最终您将不得不在设备上进行测试。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"它不仅是准确测试应用程序行为和执行方式的唯一方式，而且许多Ionic Native插件只有在实际硬件上运行时才能正常工作。"}]},{type:a,value:c},{type:b,tag:J,props:{id:y},children:[{type:b,tag:g,props:{href:"#android-devices",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:A}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"部署到Android设备是一个相当简单的过程。如果您有一个可行的Android开发环境，则可以开始使用了。"}]},{type:a,value:c},{type:b,tag:t,props:{id:B},children:[{type:b,tag:g,props:{href:"#requirements",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:C}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:"Java JDK"}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:"Android Studio"}]},{type:a,value:c},{type:b,tag:u,props:{},children:[{type:a,value:"Updated Android SDK tools, platform and component dependencies. Available through Android Studio’s SDK Manager"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:t,props:{id:D},children:[{type:b,tag:g,props:{href:"#production-builds",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:E}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"ionic cordova run android --prod --release\n# or\nionic cordova build android --prod --release\n"}]}]}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"(Mac上)问题:\nionic 2 - Error Could not find an installed version of Gradle either in Android Studio"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"解决方法: "},{type:b,tag:e,props:{},children:[{type:a,value:"brew install gradle"}]},{type:a,value:" (速度慢需要挂代理)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"此命令会将 minify your app’s code as Ionic’s source，并从APK中删除任何调试功能。将应用程序部署到Google Play商店时通常会使用此功能。"}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"...\nSubproject Path: app\nCould not unzip \u002FUsers\u002Ftyrad\u002F.gradle\u002Fwrapper\u002Fdists\u002Fgradle-4.1-all\u002Fbzyivzo6n839fup2jbap0tjew\u002Fgradle-4.1-all.zip to \u002FUsers\u002Ftyrad\u002F.gradle\u002Fwrapper\u002Fdists\u002Fgradle-4.1-all\u002Fbzyivzo6n839fup2jbap0tjew.\nReason: error in opening zip file\nException in thread \"main\" \njava.util.zip.ZipException: error in opening zip file\n....\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:g,props:{href:"https:\u002F\u002Fgithub.com\u002Fionic-team\u002Fionic-cli\u002Fissues\u002F2787",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"解决方法"}]},{type:a,value:"删除"},{type:b,tag:e,props:{},children:[{type:a,value:"rm gradle-4.1-all.zip"}]}]},{type:a,value:c},{type:b,tag:t,props:{id:F},children:[{type:b,tag:g,props:{href:"#sign-android-apk",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:G}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"略"}]},{type:a,value:c},{type:b,tag:J,props:{id:H},children:[{type:b,tag:g,props:{href:"#ios",ariaHidden:h,tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"ionic cordova build ios --prod\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"发现编译报错如下,但是不影响"},{type:b,tag:e,props:{},children:[{type:a,value:"platforms\u002Fios"}]},{type:a,value:"下的iOS项目文件的正常使用。"}]},{type:a,value:c},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:e,props:{},children:[{type:a,value:" typescript error \n            Type MyviewsPage in \u002FUsers\u002Ftyrad\u002FDesktop\u002Fangular5\u002Fionic\u002FappTutorial\u002Fsrc\u002Fpages\u002Fmyviews\u002Fmyviews.ts is part of \n            the declarations of 2 modules: AppModule in \n            \u002FUsers\u002Ftyrad\u002FDesktop\u002Fangular5\u002Fionic\u002FappTutorial\u002Fsrc\u002Fapp\u002Fapp.module.ts and MyviewsPageModule in \n            \u002FUsers\u002Ftyrad\u002FDesktop\u002Fangular5\u002Fionic\u002FappTutorial\u002Fsrc\u002Fpages\u002Fmyviews\u002Fmyviews.module.ts! Please consider moving \n            MyviewsPage in \u002FUsers\u002Ftyrad\u002FDesktop\u002Fangular5\u002Fionic\u002FappTutorial\u002Fsrc\u002Fpages\u002Fmyviews\u002Fmyviews.ts to a higher \n            module that imports AppModule in \u002FUsers\u002Ftyrad\u002FDesktop\u002Fangular5\u002Fionic\u002FappTutorial\u002Fsrc\u002Fapp\u002Fapp.module.ts and \n            MyviewsPageModule in \u002FUsers\u002Ftyrad\u002FDesktop\u002Fangular5\u002Fionic\u002FappTutorial\u002Fsrc\u002Fpages\u002Fmyviews\u002Fmyviews.module.ts. \n            You can also create a new NgModule that exports and includes MyviewsPage in \n            \u002FUsers\u002Ftyrad\u002FDesktop\u002Fangular5\u002Fionic\u002FappTutorial\u002Fsrc\u002Fpages\u002Fmyviews\u002Fmyviews.ts then import that NgModule in \n            AppModule in \u002FUsers\u002Ftyrad\u002FDesktop\u002Fangular5\u002Fionic\u002FappTutorial\u002Fsrc\u002Fapp\u002Fapp.module.ts and MyviewsPageModule in \n            \u002FUsers\u002Ftyrad\u002FDesktop\u002Fangular5\u002Fionic\u002FappTutorial\u002Fsrc\u002Fpages\u002Fmyviews\u002Fmyviews.module.ts. \n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"app.module.ts"}]},{type:a,value:"中移除了相应的引用，问题解决。"}]}]},dir:"\u002Fwiki\u002Fionic\u002FTutorial",path:K,extension:".md",createdAt:L,updatedAt:L},prev:{slug:M,title:N,date:f},next:{slug:O,title:P,date:m},scrollTop:Q,sideCategory:[{folderName:"ionic",articles:[{slug:"ionic-2018-07-02-1",title:"url不安全问题 caused by: unsafe value used in a resource URL context",date:m,path:"\u002Fwiki\u002Fionic\u002Fionic-2018-07-02-1"},{slug:"ionic-2018-09-06",title:"取整\u002F取小数、与数值比较",date:R,path:"\u002Fwiki\u002Fionic\u002Fionic-2018-09-06"},{slug:"ionic-2018-09-07",title:"null\u002Fundefined\u002F空字符串的数值比较",date:S,path:"\u002Fwiki\u002Fionic\u002Fionic-2018-09-07"},{slug:"ionic-chrome跨域",title:"Mac上chrome跨域请求",date:"2018-06-30T11:31:23.000Z",path:"\u002Fwiki\u002Fionic\u002Fionic-chrome跨域"},{slug:"ionic-handell-tag-a",title:"遍历\u003Ca\u003E标签,处理跳转操作",date:"2018-09-05 16:47",path:"\u002Fwiki\u002Fionic\u002Fionic-handell-tag-a"},{slug:"ionic-ionic-cli",title:"cli 常用命令",date:f,path:"\u002Fwiki\u002Fionic\u002Fionic-ionic-cli"},{slug:"ionic-ionic-example",title:"ionic-example",date:f,path:"\u002Fwiki\u002Fionic\u002Fionic-ionic-example"},{slug:"ionic-ionic-http",title:"报错: Unexpected value 'Http' imported ..",date:m,path:"\u002Fwiki\u002Fionic\u002Fionic-ionic-http"},{slug:"ionic-ionic-py-error",title:"mac: python2环境问题",date:f,path:"\u002Fwiki\u002Fionic\u002Fionic-ionic-py-error"},{slug:"ionic-ionic3-no-provider-error",title:"ionic3 解决Error: No provider for Http!",date:f,path:"\u002Fwiki\u002Fionic\u002Fionic-ionic3-no-provider-error"},{slug:"ionic-letin-lefof",title:"ts:for..in与for..of",date:R,path:"\u002Fwiki\u002Fionic\u002Fionic-letin-lefof"},{slug:"ionic-node-js-reinstall",title:"[转]Mac OSX下重装node.js",date:"2018-06-20T00:00:00.000Z",path:"\u002Fwiki\u002Fionic\u002Fionic-node-js-reinstall"},{slug:"ionic-pip",title:"pip使用举例",date:m,path:"\u002Fwiki\u002Fionic\u002Fionic-pip"},{slug:"ionic-promise",title:"ES6 promise",date:S,path:"\u002Fwiki\u002Fionic\u002Fionic-promise"},{slug:"ionic-segment",title:"配置可滑动的segment",date:"2018-07-06T00:00:00.000Z",path:"\u002Fwiki\u002Fionic\u002Fionic-segment"},{slug:"ionic-summary-1",title:"开发小结(一)",date:"2018-07-22 16:41",path:"\u002Fwiki\u002Fionic\u002Fionic-summary-1"}],children:[{folderName:x,articles:[{slug:"Tutorial-ionic-Components",title:"3.组件(一)",date:"2018-05-22T00:00:00.000Z",path:"\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-Components"},{slug:"Tutorial-ionic-add-page",title:"1.Adding Pages",date:T,path:"\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-add-page"},{slug:O,title:P,date:m,path:"\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-components-6"},{slug:"Tutorial-ionic-componets-2",title:"4.组件(二)",date:"2018-05-23T00:00:00.000Z",path:"\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-componets-2"},{slug:M,title:N,date:f,path:"\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-componets-3"},{slug:v,title:w,date:f,path:K},{slug:"Tutorial-ionic-hello-world",title:"1.安装、启动、项目结构",date:T,path:"\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-hello-world"}],children:[]}]}]}],fetch:{},mutations:Q}}("text","element","\n","p","code","2018-05-24T00:00:00.000Z","a","true",-1,"span","icon","icon-link","2018-07-02T00:00:00.000Z","div","nuxt-content-highlight","pre","language-text","line-numbers",3,"h3","li","Tutorial-ionic-device","6.真机调试","Tutorial","android-devices",2,"Android Devices","requirements","Requirements","production-builds","Production Builds","sign-android-apk","Sign Android APK","ios","iOS","h2","\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-device","2021-12-27T10:01:01.266Z","Tutorial-ionic-componets-3","5.组件(三):模态、导航、popover","Tutorial-ionic-components-6","6.组件(四):下拉刷新上上拉加载",void 0,"2018-09-06T00:00:00.000Z","2018-09-07T00:00:00.000Z","2018-05-06T00:00:00.000Z")));