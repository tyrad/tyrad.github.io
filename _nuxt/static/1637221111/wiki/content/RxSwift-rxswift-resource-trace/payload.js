__NUXT_JSONP__("/wiki/content/RxSwift-rxswift-resource-trace", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S){return {data:[{},{article:{slug:u,title:v,layout:"page",date:o,collection:p,toc:[],body:{type:"root",children:[{type:b,tag:k,props:{},children:[{type:a,value:"RxSwift开启资源计数的方法:"}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"1). pod文件最后添加:"}]},{type:a,value:g},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,"language-ruby"]},children:[{type:b,tag:A,props:{},children:[{type:a,value:"post_install "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:"installer"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:"\n  installer"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"pods_project"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"targets"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:"target"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:D}]},{type:a,value:" target"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'RxSwift'"}]},{type:a,value:"\n      target"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"build_configurations"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:B}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:"config"},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:l}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:D}]},{type:a,value:" config"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'Debug'"}]},{type:a,value:"\n          config"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"build_settings"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'OTHER_SWIFT_FLAGS'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"||"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"="}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'-D'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:","}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"'TRACE_RESOURCES'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:I}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:"\n      "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:"\n  "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"并重新install"}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"2). 找到项目中的RxSwift target，在它的Debug配置中，添加-D TRACE_RESOURCES编译参数（貌似默认就配置上了？）"}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:b,tag:"img",props:{alt:"20190919156886153331737.png",src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F20190919156886153331737.png"},children:[]}]},{type:a,value:g},{type:b,tag:k,props:{},children:[{type:a,value:"3). 打印"}]},{type:a,value:g},{type:b,tag:w,props:{className:[x]},children:[{type:b,tag:y,props:{className:[z,"language-swift"]},children:[{type:b,tag:A,props:{},children:[{type:b,tag:c,props:{className:[d,"function"]},children:[{type:a,value:"print"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"("}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\"Resource tracing: "},{type:b,tag:c,props:{className:[d,"interpolation"]},children:[{type:b,tag:c,props:{className:[d,J,K]},children:[{type:a,value:"\\("}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,L]},children:[{type:a,value:"Resources"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"total"},{type:b,tag:c,props:{className:[d,J,K]},children:[{type:a,value:M}]}]},{type:a,value:"\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:g}]}]}]}]},dir:"\u002Fwiki\u002FSwift\u002FRxSwift",path:N,extension:".md",createdAt:O,updatedAt:O},prev:{slug:"基础笔记-php-替代语法"},next:{slug:"python-day-by-day-python-day-by-day-1",title:"1.语法拾遗、函数、模块",date:"2019-11-13T00:00:00.000Z"},scrollTop:P,sideCategory:[{folderName:"Swift",articles:[{slug:"Swift-2018-04-25",title:"使用snapkit实现简单的动画",date:"2018-04-25T11:18:58.000Z",path:"\u002Fwiki\u002FSwift\u002FSwift-2018-04-25"},{slug:"Swift-NSClassFromString-replace-method-in-swift",title:"NSClassFromString替代方法",date:r,path:"\u002Fwiki\u002FSwift\u002FSwift-NSClassFromString-replace-method-in-swift"},{slug:"Swift-load-gif",title:"加载gif图片",date:"2018-09-05T00:00:00.000Z",path:"\u002Fwiki\u002FSwift\u002FSwift-load-gif"},{slug:"Swift-objectmapper-EnumTransform",title:"objectmapper:EnumTransform",date:"2018-06-08T00:00:00.000Z",path:"\u002Fwiki\u002FSwift\u002FSwift-objectmapper-EnumTransform"}],children:[{folderName:"3rd",articles:[{slug:"3rd-Alamofire",title:"Alamofire",date:r,path:"\u002Fwiki\u002FSwift\u002F3rd\u002F3rd-Alamofire"},{slug:"3rd-moya",title:"Moya",date:r,path:"\u002Fwiki\u002FSwift\u002F3rd\u002F3rd-moya"}],children:[]},{folderName:p,articles:[{slug:"RxSwift-rxswift-base-operator-combine",title:"RxSwift:(三)常用的操作符-Observable合并",date:"2019-09-20T00:00:00.000Z",path:"\u002Fwiki\u002FSwift\u002FRxSwift\u002FRxSwift-rxswift-base-operator-combine"},{slug:"RxSwift-rxswift-base-operator",title:"RxSwift:(三)常用的操作符",date:o,path:"\u002Fwiki\u002FSwift\u002FRxSwift\u002FRxSwift-rxswift-base-operator"},{slug:"RxSwift-rxswift-base",title:"RxSwift:(一)概念理解",date:"2018-04-11T00:00:00.000Z",path:"\u002Fwiki\u002FSwift\u002FRxSwift\u002FRxSwift-rxswift-base"},{slug:u,title:v,date:o,path:N},{slug:"RxSwift-rxswift-todo-example",title:"RxSwift:(二)TODO demo项目总结",date:o,path:"\u002Fwiki\u002FSwift\u002FRxSwift\u002FRxSwift-rxswift-todo-example"}],children:[]},{folderName:"arcgis",articles:[{slug:"arcgis-arcgis-create-map",title:"(一)构建地图",date:Q,path:"\u002Fwiki\u002FSwift\u002Farcgis\u002Farcgis-arcgis-create-map"},{slug:"arcgis-arcgis-display-info",title:"(三)Display information",date:R,path:"\u002Fwiki\u002FSwift\u002Farcgis\u002Farcgis-arcgis-display-info"},{slug:"arcgis-arcgis-layer-types",title:"(二)Layer types",date:R,path:"\u002Fwiki\u002FSwift\u002Farcgis\u002Farcgis-arcgis-layer-types"}],children:[]},{folderName:"arcgis-basic",articles:[{slug:"arcgis-basic-arcgis iOS SDK 使用(一)",title:"arcgis iOS SDK Tutorials(一)",date:s,path:"\u002Fwiki\u002FSwift\u002Farcgis-basic\u002Farcgis-basic-arcgis iOS SDK 使用(一)"},{slug:"arcgis-basic-arcgis-features-and-graphics",title:"基础(二):Features and graphics",date:t,path:"\u002Fwiki\u002FSwift\u002Farcgis-basic\u002Farcgis-basic-arcgis-features-and-graphics"},{slug:"arcgis-basic-arcgis-install",title:"arcgis iOS SDK 安装集成",date:s,path:"\u002Fwiki\u002FSwift\u002Farcgis-basic\u002Farcgis-basic-arcgis-install"},{slug:"arcgis-basic-arcgis-spatial-references",title:"基础(四):Spatial references",date:Q,path:"\u002Fwiki\u002FSwift\u002Farcgis-basic\u002Farcgis-basic-arcgis-spatial-references"},{slug:"arcgis-basic-arcgis-symbols-and-renderers",title:"基础(三):symbols and renderers",date:t,path:"\u002Fwiki\u002FSwift\u002Farcgis-basic\u002Farcgis-basic-arcgis-symbols-and-renderers"},{slug:"arcgis-basic-argcgis-ios-Layer-types",title:"基础(一):Layer types",date:t,path:"\u002Fwiki\u002FSwift\u002Farcgis-basic\u002Farcgis-basic-argcgis-ios-Layer-types"}],children:[]},{folderName:"arcgis-dev",articles:[{slug:"arcgis-dev-arcgis-draw",title:"绘制点、线、面,以及使用callout",date:"2018-04-17T09:32:27.000Z",path:"\u002Fwiki\u002FSwift\u002Farcgis-dev\u002Farcgis-dev-arcgis-draw"}],children:[]},{folderName:"wkwebview",articles:[{slug:"wkwebview-2018-04-24",title:"wkwebview本地url拼接参数的正确姿势",date:"2018-04-24T12:29:50.000Z",path:"\u002Fwiki\u002FSwift\u002Fwkwebview\u002Fwkwebview-2018-04-24"},{slug:"wkwebview-swift-with-jscore",title:"Swift与jscontext的交互",date:S,path:"\u002Fwiki\u002FSwift\u002Fwkwebview\u002Fwkwebview-swift-with-jscore"},{slug:"wkwebview-wkuidelegate",title:"WKUIDelegate",date:S,path:"\u002Fwiki\u002FSwift\u002Fwkwebview\u002Fwkwebview-wkuidelegate"},{slug:"wkwebview-wkwebview-cross-dom",title:"wkwebview跨域问题",date:"2018-04-20T09:30:15.000Z",path:"\u002Fwiki\u002FSwift\u002Fwkwebview\u002Fwkwebview-wkwebview-cross-dom"},{slug:"wkwebview-wkwebview-js",title:"WKWebView与js交互",date:"2018-04-03T00:00:00.000Z",path:"\u002Fwiki\u002FSwift\u002Fwkwebview\u002Fwkwebview-wkwebview-js"}],children:[]},{folderName:"奇淫巧技",articles:[{slug:"奇淫巧技-实现类似前端的asyncawait方法",date:"2020-10-23T08:32:55.000Z",title:"实现类似前端的async、await方法",path:"\u002Fwiki\u002FSwift\u002F奇淫巧技\u002F奇淫巧技-实现类似前端的asyncawait方法"}],children:[]},{folderName:"语法",articles:[{slug:"语法-==和===",date:"2020-10-26T09:01:34.000Z",title:"==和===区别",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-==和==="},{slug:"语法-ObjectIdentifier",date:"2020-11-11T08:59:35.000Z",title:"ObjectIdentifier",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-ObjectIdentifier"},{slug:"语法-Tuples",title:"元组",date:s,path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-Tuples"},{slug:"语法-canImport",date:"2020-11-12T06:46:10.000Z",title:"使用CanImport检查模块是否可用",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-canImport"},{slug:"语法-discardableResult",date:"2020-10-26T08:59:35.000Z",title:"DiscardableResult",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-discardableResult"},{slug:"语法-swift-protocal-let",date:"2020-10-26T08:38:25.000Z",title:"Let in Protocal ",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-swift-protocal-let"},{slug:"语法-swift-string-seprateby",title:"字符串分割(sperateByCharacterSet)",date:"2018-09-06T00:00:00.000Z",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-swift-string-seprateby"},{slug:"语法-带有私有设置方法的公有属性",date:"2020-11-11T01:54:54.000Z",title:"带有私有设置方法的公有属性",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-带有私有设置方法的公有属性"},{slug:"语法-遍历枚举值",date:"2020-11-12T06:14:44.000Z",title:"遍历枚举值(CaseIterable)",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-遍历枚举值"}],children:[]}]}]}],fetch:{},mutations:P}}("text","element","span","token","punctuation","keyword","\n"," ","operator",".","p","|","string","end","2019-09-19T00:00:00.000Z","RxSwift","do","2018-04-11 12:33","2018-04-04T00:00:00.000Z","2018-04-08T09:10:36.000Z","RxSwift-rxswift-resource-trace","RxSwift: Resource Trace","div","nuxt-content-highlight","pre","line-numbers","code","each","\n    ","if","name ","==","\n        ","[","]","delimiter","variable","builtin",")","\u002Fwiki\u002FSwift\u002FRxSwift\u002FRxSwift-rxswift-resource-trace","2021-11-18T07:37:48.004Z",void 0,"2018-04-08T00:00:00.000Z","2018-04-09T14:51:54.000Z","2018-04-02T00:00:00.000Z")));