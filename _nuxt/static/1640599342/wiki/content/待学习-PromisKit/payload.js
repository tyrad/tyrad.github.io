__NUXT_JSONP__("/wiki/content/%E5%BE%85%E5%AD%A6%E4%B9%A0-PromisKit", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj){return {data:[{},{article:{slug:H,draft:true,date:I,title:J,toc:[{id:K,depth:w,text:L},{id:M,depth:w,text:N},{id:O,depth:w,text:P}],body:{type:"root",children:[{type:b,tag:i,props:{},children:[{type:a,value:"\u003E 本文由 [简悦 SimpRead]("},{type:b,tag:d,props:{href:Q,rel:[e,f,g],target:h},children:[{type:a,value:Q}]},{type:a,value:") 转码， 原文地址 [github.com]("},{type:b,tag:d,props:{href:R,rel:[e,f,g],target:h},children:[{type:a,value:R}]},{type:a,value:")"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fmxcl\u002FPromiseKit\u002Fblob\u002Fgh-pages\u002Fpublic\u002Fimg\u002Flogo-tight.png",rel:[e,f,g],target:h},children:[{type:b,tag:l,props:{alt:m,src:"https:\u002F\u002Fgithub.com\u002Fmxcl\u002FPromiseKit\u002Fraw\u002Fgh-pages\u002Fpublic\u002Fimg\u002Flogo-tight.png"},children:[]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fcocoapods.org\u002Fpods\u002FPromiseKit",rel:[e,f,g],target:h},children:[{type:b,tag:l,props:{alt:m,src:"https:\u002F\u002Fcamo.githubusercontent.com\u002Fc15ee18886b7426341e502b764d0a76d81970b57\u002F68747470733a2f2f696d672e736869656c64732e696f2f636f636f61706f64732f762f50726f6d6973654b69742e7376673f6c6162656c3d76657273696f6e"},children:[]}]},{type:a,value:t},{type:b,tag:d,props:{href:S,rel:[e,f,g],target:h},children:[{type:b,tag:l,props:{alt:m,src:S},children:[]}]},{type:a,value:t},{type:b,tag:d,props:{href:T,rel:[e,f,g],target:h},children:[{type:b,tag:l,props:{alt:m,src:T},children:[]}]},{type:a,value:t},{type:b,tag:d,props:{href:U,rel:[e,f,g],target:h},children:[{type:b,tag:l,props:{alt:m,src:U},children:[]}]},{type:a,value:t},{type:b,tag:d,props:{href:V,rel:[e,f,g],target:h},children:[{type:b,tag:l,props:{alt:m,src:"https:\u002F\u002Fcamo.githubusercontent.com\u002Fb9838a922b5c46736da485cc0ff2c06eaf350995\u002F68747470733a2f2f7472617669732d63692e6f72672f6d78636c2f50726f6d6973654b69742e7376673f6272616e63683d6d6173746572"},children:[]}]}]},{type:a,value:c},{type:b,tag:"hr",props:{},children:[]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Promises simplify asynchronous programming, freeing you up to focus on the more important things. They are easy to learn, easy to master and result in clearer, more readable code. Your co-workers will thank you."}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"UIApplication.shared.isNetworkActivityIndicatorVisible = true\n\nlet fetchImage = URLSession.shared.dataTask(.promise, with: url).compactMap{ UIImage(data: $0.data) }\nlet fetchLocation = CLLocationManager.requestLocation().lastValue\n\nfirstly {\n    when(fulfilled: fetchImage, fetchLocation)\n}.done { image, location in\n    self.imageView.image = image\n    self.label.text = \"\\\\(location)\"\n}.ensure {\n    UIApplication.shared.isNetworkActivityIndicatorVisible = false\n}.catch { error in\n    self.show(UIAlertController(for: error), sender: self)\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"PromiseKit is a thoughtful and complete implementation of promises for any platform that has a "},{type:b,tag:j,props:{},children:[{type:a,value:"swiftc"}]},{type:a,value:". It has "},{type:b,tag:u,props:{},children:[{type:a,value:"excellent"}]},{type:a,value:" Objective-C bridging and "},{type:b,tag:u,props:{},children:[{type:a,value:"delightful"}]},{type:a,value:" specializations for iOS, macOS, tvOS and watchOS. It is a top-100 pod used in many of the most popular apps in the world."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fcodecov.io\u002Fgh\u002Fmxcl\u002FPromiseKit",rel:[e,f,g],target:h},children:[{type:b,tag:l,props:{alt:m,src:"https:\u002F\u002Fcamo.githubusercontent.com\u002Fc6e5c784c54f92152d6984a9f5e5b3b5e10549bf\u002F68747470733a2f2f636f6465636f762e696f2f67682f6d78636c2f50726f6d6973654b69742f6272616e63682f6d61737465722f67726170682f62616467652e737667"},children:[]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"We are testing PromiseKit 7 alpha, it is Swift 5 only. It is tagged and thus importable in all package managers."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{href:"http:\u002F\u002Fmxcl.dev\u002FPromiseKit\u002Fnews\u002F2018\u002F02\u002FPromiseKit-6.0-Released\u002F",rel:[e,f,g],target:h},children:[{type:a,value:"Release notes and migration guide"}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"In your "},{type:b,tag:d,props:{href:"https:\u002F\u002Fguides.cocoapods.org\u002Fsyntax\u002Fpodfile.html",rel:[e,f,g],target:h},children:[{type:a,value:W}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"use\\_frameworks!\n\ntarget \"Change Me!\" do\n  pod \"PromiseKit\", \"~\u003E 6.8\"\nend\n"}]}]}]},{type:a,value:c},{type:b,tag:X,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"The above gives an Xcode warning? See our "},{type:b,tag:d,props:{href:y,rel:[e,f,g],target:h},children:[{type:a,value:z}]},{type:a,value:n}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"PromiseKit 6, 5 and 4 support Xcode 8.3, 9.x and 10.0; Swift 3.1, 3.2, 3.3, 3.4, 4.0, 4.1, 4.2, 4.3 and 5.0 (development snapshots); iOS, macOS, tvOS, watchOS, Linux and Android; CocoaPods, Carthage and SwiftPM; ("},{type:b,tag:d,props:{href:V,rel:[e,f,g],target:h},children:[{type:a,value:"CI Matrix"}]},{type:a,value:")."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"For Carthage, SwiftPM, Accio, etc., or for instructions when using older Swifts or Xcodes, see our "},{type:b,tag:d,props:{href:y,rel:[e,f,g],target:h},children:[{type:a,value:z}]},{type:a,value:". We recommend "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002FCarthage\u002FCarthage",rel:[e,f,g],target:h},children:[{type:a,value:"Carthage"}]},{type:a,value:" or "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002FJamitLabs\u002FAccio",rel:[e,f,g],target:h},children:[{type:a,value:"Accio"}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"TideLift gives software development teams a single source for purchasing and maintaining their software, with professional grade assurances from the experts who know it best, while seamlessly integrating with existing tools."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Ftidelift.com\u002Fsubscription\u002Fpkg\u002Fcocoapods-promisekit?utm_source=cocoapods-promisekit&utm_medium=referral&utm_campaign=readme",rel:[e,f,g],target:h},children:[{type:a,value:"Get Professional Support for PromiseKit with TideLift"}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Hey there, I’m Max Howell. I’m a prolific producer of open source software and probably you already use some of it (I created "},{type:b,tag:d,props:{href:"https:\u002F\u002Fbrew.sh\u002F",rel:[e,f,g],target:h},children:[{type:b,tag:j,props:{},children:[{type:a,value:"brew"}]}]},{type:a,value:"). I work full-time on open source and it’s hard; currently "},{type:b,tag:u,props:{},children:[{type:a,value:"I earn less than minimum wage"}]},{type:a,value:". Please help me continue my work, I appreciate it 🙏🏻"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fwww.patreon.com\u002Fmxcl",rel:[e,f,g],target:h},children:[{type:b,tag:l,props:{alt:m,src:"https:\u002F\u002Fcamo.githubusercontent.com\u002Fc11c9bdf1f6c2a1d80afb11859984a61f0fadfa6\u002F68747470733a2f2f63352e70617472656f6e2e636f6d2f65787465726e616c2f6c6f676f2f6265636f6d655f615f706174726f6e5f627574746f6e4032782e706e67"},children:[]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{href:"http:\u002F\u002Fmxcl.dev\u002F#donate",rel:[e,f,g],target:h},children:[{type:a,value:"Other ways to say thanks"}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"Handbook\n"},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fmxcl\u002FPromiseKit\u002Fblob\u002Fmaster\u002FDocumentation\u002FGettingStarted.md",rel:[e,f,g],target:h},children:[{type:a,value:"Getting Started"}]}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fmxcl\u002FPromiseKit\u002Fblob\u002Fmaster\u002FDocumentation\u002FCommonPatterns.md",rel:[e,f,g],target:h},children:[{type:a,value:"Promises: Common Patterns"}]}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fmxcl\u002FPromiseKit\u002Fblob\u002Fmaster\u002FDocumentation\u002FFAQ.md",rel:[e,f,g],target:h},children:[{type:a,value:"Frequently Asked Questions"}]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"Manual\n"},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:d,props:{href:y,rel:[e,f,g],target:h},children:[{type:a,value:z}]}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fmxcl\u002FPromiseKit\u002Fblob\u002Fmaster\u002FDocumentation\u002FObjectiveC.md",rel:[e,f,g],target:h},children:[{type:a,value:"Objective-C Guide"}]}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:d,props:{href:Y,rel:[e,f,g],target:h},children:[{type:a,value:"Troubleshooting"}]},{type:a,value:" (e.g., solutions to common compile errors)"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fmxcl\u002FPromiseKit\u002Fblob\u002Fmaster\u002FDocumentation\u002FAppendix.md",rel:[e,f,g],target:h},children:[{type:a,value:"Appendix"}]}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fmxcl.dev\u002FPromiseKit\u002Freference\u002Fv6\u002FClasses\u002FPromise.html",rel:[e,f,g],target:h},children:[{type:a,value:"API Reference"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Promises are only as useful as the asynchronous tasks they represent. Thus, we have converted (almost) all of Apple’s APIs to promises. The default CocoaPod provides Promises and the extensions for Foundation and UIKit. The other extensions are available by specifying additional subspecs in your "},{type:b,tag:j,props:{},children:[{type:a,value:W}]},{type:a,value:", e.g.:"}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"pod \"PromiseKit\u002FMapKit\"          # MKDirections().calculate().then { \u002F\\*…\\*\u002F }\npod \"PromiseKit\u002FCoreLocation\"    # CLLocationManager.requestLocation().then { \u002F\\*…\\*\u002F }\n"}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"All our extensions are separate repositories at the "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002FPromiseKit",rel:[e,f,g],target:h},children:[{type:a,value:"PromiseKit organization"}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:A,props:{id:K},children:[{type:b,tag:d,props:{href:Z,ariaHidden:B,tabIndex:C},children:[{type:b,tag:D,props:{className:[E,F]},children:[]}]},{type:b,tag:d,props:{href:Z},children:[]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Then don’t have them:"}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"pod \"PromiseKit\u002FCorePromise\", \"~\u003E 6.8\"\n"}]}]}]},{type:a,value:c},{type:b,tag:X,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:u,props:{},children:[{type:a,value:"Note:"}]},{type:a,value:" Carthage installations come with no extensions by default."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:A,props:{id:M},children:[{type:b,tag:d,props:{href:_,ariaHidden:B,tabIndex:C},children:[{type:b,tag:D,props:{className:[E,F]},children:[]}]},{type:b,tag:d,props:{href:_},children:[]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Promise chains commonly start with a network operation. Thus, we offer extensions for "},{type:b,tag:j,props:{},children:[{type:a,value:G}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"\u002F\u002F pod 'PromiseKit\u002FFoundation'  # https:\u002F\u002Fgithub.com\u002FPromiseKit\u002FFoundation\n\nfirstly {\n    URLSession.shared.dataTask(.promise, with: try makeUrlRequest()).validate()\n    \u002F\u002F ^^ we provide \\`.validate()\\` so that eg. 404s get converted to errors\n}.map {\n    try JSONDecoder().decode(Foo.self, with: $0.data)\n}.done { foo in\n    \u002F\u002F…\n}.catch { error in\n    \u002F\u002F…\n}\n\nfunc makeUrlRequest() throws -\u003E URLRequest {\n    var rq = URLRequest(url: url)\n    rq.httpMethod = \"POST\"\n    rq.addValue(\"application\u002Fjson\", forHTTPHeaderField: \"Content-Type\")\n    rq.addValue(\"application\u002Fjson\", forHTTPHeaderField: \"Accept\")\n    rq.httpBody = try JSONEncoder().encode(obj)\n    return rq\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"And "},{type:b,tag:d,props:{href:"http:\u002F\u002Fgithub.com\u002FPromiseKit\u002FAlamofire-",rel:[e,f,g],target:h},children:[{type:a,value:"Alamofire"}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:o,props:{className:[p]},children:[{type:b,tag:q,props:{className:[r,s]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"\u002F\u002F pod 'PromiseKit\u002FAlamofire'  # https:\u002F\u002Fgithub.com\u002FPromiseKit\u002FAlamofire-\n\nfirstly {\n    Alamofire\n        .request(\"http:\u002F\u002Fexample.com\", method: .post, parameters: params)\n        .responseDecodable(Foo.self)\n}.done { foo in\n    \u002F\u002F…\n}.catch { error in\n    \u002F\u002F…\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Nowadays, considering that:"}]},{type:a,value:c},{type:b,tag:v,props:{},children:[{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"We almost always POST JSON"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"We now have "},{type:b,tag:j,props:{},children:[{type:a,value:"JSONDecoder"}]}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"PromiseKit now has "},{type:b,tag:j,props:{},children:[{type:a,value:"map"}]},{type:a,value:" and other functional primitives"}]},{type:a,value:c},{type:b,tag:k,props:{},children:[{type:a,value:"PromiseKit (like Alamofire, but not raw-"},{type:b,tag:j,props:{},children:[{type:a,value:G}]},{type:a,value:") also defaults to having callbacks go to the main thread"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"We recommend vanilla "},{type:b,tag:j,props:{},children:[{type:a,value:G}]},{type:a,value:". It uses fewer black boxes and sticks closer to the metal. Alamofire was essential until the three bullet points above became true, but nowadays it isn’t really necessary."}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"Please check our "},{type:b,tag:d,props:{href:Y,rel:[e,f,g],target:h},children:[{type:a,value:"Troubleshooting Guide"}]},{type:a,value:", and if after that you still have a question, ask at our "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgitter.im\u002Fmxcl\u002FPromiseKit",rel:[e,f,g],target:h},children:[{type:a,value:"Gitter chat channel"}]},{type:a,value:" or on "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fmxcl\u002FPromiseKit\u002Fissues\u002Fnew",rel:[e,f,g],target:h},children:[{type:a,value:"our bug tracker"}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:A,props:{id:O},children:[{type:b,tag:d,props:{href:$,ariaHidden:B,tabIndex:C},children:[{type:b,tag:D,props:{className:[E,F]},children:[]}]},{type:b,tag:d,props:{href:$},children:[]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{href:aa,rel:[e,f,g],target:h},children:[{type:a,value:aa}]}]}]},dir:"\u002Fwiki\u002F0\u002F待学习",path:ab,extension:".md",createdAt:ac,updatedAt:ac},prev:{slug:ad,date:ae,title:af},next:{slug:ag,date:ah,title:ai},scrollTop:aj,sideCategory:[{folderName:"0",articles:[{slug:"0-z",date:"2020-11-11T09:59:03.000Z",title:"待补充",path:"\u002Fwiki\u002F0\u002F0-z"},{slug:"0-搞懂git",date:"2020-11-13T03:14:51.000Z",title:"一文搞懂git",path:"\u002Fwiki\u002F0\u002F0-搞懂git"}],children:[{folderName:"书单",articles:[{slug:"书单-参考书单",date:"2020-11-11T09:53:19.000Z",title:"(转载)书单",path:"\u002Fwiki\u002F0\u002F书单\u002F书单-参考书单"}],children:[]},{folderName:"待学习",articles:[{slug:ad,date:ae,title:af,path:"\u002Fwiki\u002F0\u002F待学习\u002F待学习-HBDNavigationBar"},{slug:H,date:I,title:J,path:ab},{slug:"待学习-apns指南",date:"2020-10-26T05:47:15.000Z",title:"Apns指南",path:"\u002Fwiki\u002F0\u002F待学习\u002F待学习-apns指南"},{slug:"待学习-iOS14隐私适配及部分解决方案",date:"2020-10-23T09:09:09.000Z",title:"iOS14隐私适配及部分解决方案",path:"\u002Fwiki\u002F0\u002F待学习\u002F待学习-iOS14隐私适配及部分解决方案"},{slug:"待学习-rumtime源码解读",date:"2020-11-18T08:42:16.000Z",title:"rumtime源码解读",path:"\u002Fwiki\u002F0\u002F待学习\u002F待学习-rumtime源码解读"},{slug:ag,date:ah,title:ai,path:"\u002Fwiki\u002F0\u002F待学习\u002F待学习-then"}],children:[]}]}]}],fetch:{},mutations:aj}}("text","element","\n","a","nofollow","noopener","noreferrer","_blank","p","code","li","img","",".","div","nuxt-content-highlight","pre","language-text","line-numbers"," ","em","ul",2,":","https:\u002F\u002Fgithub.com\u002Fmxcl\u002FPromiseKit\u002Fblob\u002Fmaster\u002FDocumentation\u002FInstallation.md","Installation Guide","h2","true",-1,"span","icon","icon-link","URLSession","待学习-PromisKit","2020-10-23T08:42:16.000Z","PromisKit","i-dont-want-the-extensions","I don't want the extensions!","choose-your-networking-library","Choose Your Networking Library","security--vulnerability-reporting-or-disclosure","Security & Vulnerability Reporting or Disclosure","http:\u002F\u002Fksria.com\u002Fsimpread\u002F","https:\u002F\u002Fgithub.com\u002Fmxcl\u002FPromiseKit","https:\u002F\u002Fcamo.githubusercontent.com\u002F98c220d03f8bf6b21af781b82d06fbf5e755d0be\u002F68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c616e6775616765732d53776966742532302537432532304f626a432d6f72616e67652e737667","https:\u002F\u002Fcamo.githubusercontent.com\u002F3dd4a24e33f01ed9376e333f35ddd306208eda86\u002F68747470733a2f2f696d672e736869656c64732e696f2f62616467652f737570706f7274732d436f636f61506f64732532302537432532304361727468616765253230253743253230416363696f2532302537432532305377696674504d2d677265656e2e737667","https:\u002F\u002Fcamo.githubusercontent.com\u002Fefcda9fe2c564128d079066be8138688f3f0465f\u002F68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706c6174666f726d732d6d61634f53253230253743253230694f5325323025374325323077617463684f5325323025374325323074764f532532302537432532304c696e75782d6c69676874677265792e737667","https:\u002F\u002Ftravis-ci.org\u002Fmxcl\u002FPromiseKit","Podfile","blockquote","https:\u002F\u002Fgithub.com\u002Fmxcl\u002FPromiseKit\u002Fblob\u002Fmaster\u002FDocumentation\u002FTroubleshooting.md","#i-dont-want-the-extensions","#choose-your-networking-library","#security--vulnerability-reporting-or-disclosure","https:\u002F\u002Ftidelift.com\u002Fsecurity","\u002Fwiki\u002F0\u002F待学习\u002F待学习-PromisKit","2021-12-27T10:01:01.242Z","待学习-HBDNavigationBar","2020-10-23T08:26:24.000Z","HBDNavigationBar","待学习-then","2020-10-23T08:42:25.000Z","Then",void 0)));