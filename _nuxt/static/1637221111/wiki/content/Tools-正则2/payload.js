__NUXT_JSONP__("/wiki/content/Tools-%E6%AD%A3%E5%88%992", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA){return {data:[{},{article:{slug:V,title:W,layout:"page",date:X,toc:[],body:{type:"root",children:[{type:b,tag:q,props:{},children:[{type:a,value:"正则表达式中，用于查找某些内容之前或者之后的东西，叫做断言。"}]},{type:a,value:g},{type:b,tag:q,props:{},children:[{type:b,tag:m,props:{},children:[{type:a,value:"(?=exp)"}]},{type:a,value:"用于匹配的位置前面能匹配到的值\n"},{type:b,tag:m,props:{},children:[{type:a,value:"(?\u003C=exp)"}]},{type:a,value:"用于匹配的位置后面能匹配到的值\n"},{type:b,tag:m,props:{},children:[{type:a,value:"(?!exp)"}]},{type:a,value:"用于匹配值后面不能是exp\n"},{type:b,tag:m,props:{},children:[{type:a,value:"(?\u003C!exp)"}]},{type:a,value:"用于匹配值前面不能是exp"}]},{type:a,value:g},{type:b,tag:q,props:{},children:[{type:a,value:"举例1:"}]},{type:a,value:g},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,"language-text"]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"\u002F\u002Foc提取出 `\u003C` 和 `\u003E` 中间的json字符串\nNSString *searchText = @\"警方调查后发现真的是逃犯\\\"\\n\u003C{\\\"link\\\":{\\\"to\\\":\\\"problem\\\",\\\"key_val\\\":\\\"501\\\",\\\"text\\\":\\\"详情\\\"}}\u003E\";\nNSString *regex = @\"(?\u003C=\u003C).*?(?=\u003E)\" ;\nNSRange range = [searchText rangeOfString:regex options:NSRegularExpressionSearch];\nif (range.location != NSNotFound) {\n     NSLog(@\"%@\", [searchText substringWithRange:range]);\n}\n"}]}]}]},{type:a,value:g},{type:b,tag:q,props:{},children:[{type:a,value:"举例2:"}]},{type:a,value:g},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,Y]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"\u002F\u002Fjs提取 `答案1`和`答案2`"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:_}]},{type:a,value:" testString2 "},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,"template-string"]},children:[{type:b,tag:c,props:{className:[d,$,p]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"***** \n我是一个问题\n答案1\n答案2\n*****"}]},{type:b,tag:c,props:{className:[d,$,p]},children:[{type:a,value:aa}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:_}]},{type:a,value:" res "},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:B}]},{type:a,value:" testString2"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,O,l,P]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,ad]},children:[{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,ae,af]},children:[{type:b,tag:c,props:{className:[d,s,e]},children:[{type:a,value:"(?\u003C="}]},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"\\n"}]},{type:a,value:"我是一个问题"},{type:b,tag:c,props:{className:[d,s,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,"charset"]},children:[{type:b,tag:c,props:{className:[d,ag,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,Q,I]},children:[{type:a,value:"\\s"}]},{type:b,tag:c,props:{className:[d,Q,I]},children:[{type:a,value:"\\S"}]},{type:b,tag:c,props:{className:[d,ag,e]},children:[{type:a,value:D}]}]},{type:b,tag:c,props:{className:[d,R,t]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,s,e]},children:[{type:a,value:"(?="}]},{type:b,tag:c,props:{className:[d,S,H]},children:[{type:a,value:"\\*"}]},{type:b,tag:c,props:{className:[d,R,t]},children:[{type:a,value:"{5}"}]},{type:b,tag:c,props:{className:[d,s,e]},children:[{type:a,value:i}]}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:"g"}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,Z]},children:[{type:a,value:"\u002F\u002F返回数组"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,aj,I]},children:[{type:a,value:aj}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,O,l,P]},children:[{type:a,value:"log"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"res"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:q,props:{},children:[{type:a,value:"其他swift:"}]},{type:a,value:g},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,ak]},children:[{type:b,tag:m,props:{},children:[{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"func"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"for"}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:K}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"-"}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"\u003E"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:"\n        \n        "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"do"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:U}]},{type:a,value:" regex "},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"try"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"NSRegularExpression"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"pattern"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:U}]},{type:a,value:" results "},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:B}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:"\n                                        range"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"NSRange"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:a},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"startIndex"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:am}]},{type:a,value:" results"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"map"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:"\n                "},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:a},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"Range"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"$"},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"0"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:an},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"!"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"catch"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:U}]},{type:a,value:" error "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:M}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"print"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"invalid regex: "},{type:b,tag:c,props:{className:[d,"interpolation"]},children:[{type:b,tag:c,props:{className:[d,ap,aq]},children:[{type:a,value:ar}]},{type:a,value:"error"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"localizedDescription"},{type:b,tag:c,props:{className:[d,ap,aq]},children:[{type:a,value:i}]}]},{type:a,value:"\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:am}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:"\n    "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:N}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:q,props:{},children:[{type:a,value:"或者直接："}]},{type:a,value:g},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,ak]},children:[{type:b,tag:m,props:{},children:[{type:a,value:p},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"of"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"109\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:" options"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"NSString"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"CompareOptions"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"init"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"rawValue"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"1024"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:q,props:{},children:[{type:a,value:"1024表示的是"},{type:b,tag:m,props:{},children:[{type:a,value:"NSRegularExpressionSearch"}]},{type:a,value:"的枚举"}]},{type:a,value:g},{type:b,tag:q,props:{},children:[{type:a,value:"js举例"}]},{type:a,value:g},{type:b,tag:x,props:{className:[y]},children:[{type:b,tag:z,props:{className:[A,Y]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"reg "},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,ad]},children:[{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,ae,af]},children:[{type:a,value:"POLYGON"},{type:b,tag:c,props:{className:[d,S,H]},children:[{type:a,value:ar}]},{type:b,tag:c,props:{className:[d,s,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,Q,I]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,R,t]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,s,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,S,H]},children:[{type:a,value:"\\)"}]}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,ai]},children:[{type:a,value:"gi"}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:E}]},{type:a,value:ab},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"POLYGON((118.257206432 35.142103492,118.261146368 35.1419743060001,118.261430013 35.1417178180001,118.260999498 35.137444895,118.260715327 35.1372872520001,118.256472888 35.1374869860001,118.257093814 35.1420241000001,118.257206432 35.142103492)),POLYGON((118.261576135 35.1385784340001,118.266236568 35.1384064650001,118.266269116 35.1384018200001,118.266129093 35.1371199160001,118.266007014 35.1370334690001,118.261688791 35.137240954,118.261460704 35.137432776,118.261576135 35.1385784340001))\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,O,l,P]},children:[{type:a,value:ac}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"reg"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:" \n\n\n"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"2"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"POLYGON((118.257206432 35.142103492,118.261146368 …3814 35.1420241000001,118.257206432 35.142103492)\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:"\"POLYGON((118.261576135 35.1385784340001,118.266236…0704 35.137432776,118.261576135 35.1385784340001)\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:g}]}]}]}]},dir:"\u002Fwiki\u002FTools",path:as,extension:".md",createdAt:at,updatedAt:at},prev:{slug:"Python玩法-运行shell脚本",title:"运行shell脚本",date:"2018-01-12T17:24:01.000Z"},next:{slug:"React Native-RN-install",title:"环境搭建",date:"2018-03-02T22:03:01.000Z"},scrollTop:au,sideCategory:[{folderName:"Tools",articles:[{slug:"Tools-2017-12-11",title:"cocoapods 私有库重名解决方法",date:"2017-12-11T18:06:43.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2017-12-11"},{slug:"Tools-2017-12-21",title:"fir.im 如何将 installUrl 转换为可以直接安装的链接？",date:"2017-12-21T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2017-12-21"},{slug:"Tools-2018-07-04",title:"vscode重装",date:"2018-07-04T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2018-07-04"},{slug:"Tools-Increase-speed-git-clone",title:"github clone提速",date:av,path:"\u002Fwiki\u002FTools\u002FTools-Increase-speed-git-clone"},{slug:"Tools-Log Guru",title:" Log Guru",date:aw,path:"\u002Fwiki\u002FTools\u002FTools-Log Guru"},{slug:"Tools-charles",title:"charles抓包https",date:"2017-02-02T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-charles"},{slug:"Tools-cocoapods import导入时没有提示的解决办法",title:"cocoapods import导入时没有提示的解决办法",date:"2017-09-07T10:21:59.000Z",path:"\u002Fwiki\u002FTools\u002FTools-cocoapods import导入时没有提示的解决办法"},{slug:"Tools-cocoapods-missing required architecture i386",title:"cocoapods-missing required architecture i386",date:"2017-11-27T10:34:10.000Z",path:"\u002Fwiki\u002FTools\u002FTools-cocoapods-missing required architecture i386"},{slug:"Tools-git-change-remote",title:"git切换远程服务",date:o,path:"\u002Fwiki\u002FTools\u002FTools-git-change-remote"},{slug:"Tools-gn-2x-img",title:"使用imageMagick生成@2x图片脚本",date:ax,path:"\u002Fwiki\u002FTools\u002FTools-gn-2x-img"},{slug:"Tools-gitbook入门",title:"gitbook入门",date:"2018-05-24T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-gitbook入门"},{slug:"Tools-gollum-install",title:"gollum搭建笔记",date:"2019-06-03T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-gollum-install"},{slug:"Tools-how-to-manager-github-stars",title:"Github管理stars的方法",date:ax,path:"\u002Fwiki\u002FTools\u002FTools-how-to-manager-github-stars"},{slug:"Tools-lldb",title:"lldb: chisel",date:"2017-11-26T13:00:35.000Z",path:"\u002Fwiki\u002FTools\u002FTools-lldb"},{slug:"Tools-macOS上安装Composer",title:"macOS上安装Composer",date:av,path:"\u002Fwiki\u002FTools\u002FTools-macOS上安装Composer"},{slug:"Tools-npm换源",title:"npm换源",date:ay,path:"\u002Fwiki\u002FTools\u002FTools-npm换源"},{slug:"Tools-proxy-setting",title:"Mac OSX终端走shadowsocks代理 ",date:ay,path:"\u002Fwiki\u002FTools\u002FTools-proxy-setting"},{slug:"Tools-ss+bbr",title:"ss+bbr提速",date:az,path:"\u002Fwiki\u002FTools\u002FTools-ss+bbr"},{slug:"Tools-the_silver_searcher",title:"the_silver_searcher",date:aw,path:"\u002Fwiki\u002FTools\u002FTools-the_silver_searcher"},{slug:"Tools-update-cocoapods",title:"更新cocoapods",date:"2017-08-10T11:24:52.000Z",path:"\u002Fwiki\u002FTools\u002FTools-update-cocoapods"},{slug:"Tools-whistle",title:"whistle",date:"2017-09-20T09:52:30.000Z",path:"\u002Fwiki\u002FTools\u002FTools-whistle"},{slug:"Tools-xcode-refactor",title:"xcode refactor",date:"2017-05-20T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-xcode-refactor"},{slug:"Tools-在线API团队协作工具",title:"在线API团队协作工具",date:"2017-08-22T10:49:27.000Z",path:"\u002Fwiki\u002FTools\u002FTools-在线API团队协作工具"},{slug:"Tools-正则",title:"正则",date:az,path:"\u002Fwiki\u002FTools\u002FTools-正则"},{slug:V,title:W,date:X,path:as}],children:[{folderName:"fastlane",articles:[{slug:"fastlane-2017-09-11-3",title:" pem:生成推送证书",date:o,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-2017-09-11-3"},{slug:"fastlane-2017-09-11-7",title:"init:安装和初始化",date:"2017-06-22T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-2017-09-11-7"},{slug:"fastlane-fastlane-cer",title:"cert证书",date:o,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-fastlane-cer"},{slug:"fastlane-fastlane-gym",title:"gym自动打包",date:o,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-fastlane-gym"},{slug:"fastlane-frameit",title:"frameit:自动截图",date:o,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-frameit"},{slug:"fastlane-frameit:截图套壳",title:"frameit:截图套壳",date:o,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-frameit:截图套壳"},{slug:"fastlane-produce 配置appid",title:"produce 配置appid",date:o,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-produce 配置appid"},{slug:"fastlane-sigh resign:重签名",title:"sigh resign:重签名",date:o,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-sigh resign:重签名"},{slug:"fastlane-sign:签名",title:"sign:签名",date:o,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-sign:签名"},{slug:"fastlane-snapshot 自动截图",title:"snapshot 自动截图",date:o,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-snapshot 自动截图"}],children:[]},{folderName:"kettle",articles:[{slug:"kettle-install-macos",title:"Macos Kettle的安装使用",date:"2021-09-26T09:23:22.000Z",path:"\u002Fwiki\u002FTools\u002Fkettle\u002Fkettle-install-macos"}],children:[]},{folderName:"rsa",articles:[{slug:"rsa-ios-rsa",title:"iOS RSA加密解密测试",date:aA,path:"\u002Fwiki\u002FTools\u002Frsa\u002Frsa-ios-rsa"},{slug:"rsa-rsa-ext",title:"证书文件名、扩展名的解释",date:aA,path:"\u002Fwiki\u002FTools\u002Frsa\u002Frsa-rsa-ext"}],children:[]}]}]}],fetch:{},mutations:au}}("text","element","span","token","punctuation"," ","\n","keyword",")",".","(","function","code",":","2017-06-30T10:32:11.000Z","string","p","operator","group","number","builtin",",","\n            ","div","nuxt-content-highlight","pre","line-numbers","=","[","]",";","regex-delimiter","\u002F","escape","class-name","String","in"," text","{","}","method","property-access","charclass","quantifier","special-escape"," regex","let","Tools-正则2","正则:断言","2018-02-26T16:48:45.000Z","language-js","comment","var","template-punctuation","`","\n\n","match","regex","regex-source","language-regex","charset-punctuation","*?","regex-flags","console","language-swift","matches","return","range","\n        ","delimiter","variable","\\(","\u002Fwiki\u002FTools\u002FTools-正则2","2021-11-18T07:37:48.008Z",void 0,"2017-07-11T20:59:30.000Z","2017-12-04T20:20:43.000Z","2018-04-11T13:32:11.000Z","2018-05-31T00:00:00.000Z","2017-07-12T11:22:15.000Z","2017-08-02T09:49:02.000Z")));