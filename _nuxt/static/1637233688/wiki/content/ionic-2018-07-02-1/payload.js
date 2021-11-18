__NUXT_JSONP__("/wiki/content/ionic-2018-07-02-1", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){return {data:[{},{article:{slug:m,title:n,layout:"page",date:d,toc:[],body:{type:"root",children:[{type:b,tag:e,props:{},children:[{type:a,value:"解决方法见"},{type:b,tag:"a",props:{href:o,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:o}]}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:l,props:{},children:[{type:a,value:" \u003Ciframe class=\"all-iframe\" [src]=\"srcUrl\"\u003E\u003C\u002Fiframe\u003E  \n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"ionic有安全显示,不能设置任意url,包括img、iframe等。"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"处理方法:"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"1.在对应ts文件中，导入DomSanitizer"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"import {DomSanitizer} from '@angular\u002Fplatform-browser';\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"2.引用DomSanitizer"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:l,props:{},children:[{type:a,value:"export class WebPage {\n  srcUrl:any;\n  constructor(private sanitizer: DomSanitizer) {\n    this.srcUrl = this.sanitizer.bypassSecurityTrustResourceUrl(navParams.get('url'));\n  }\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"注意：srcUrl类型为any，不能是string了。"}]}]},dir:"\u002Fwiki\u002Fionic",path:p,extension:".md",createdAt:q,updatedAt:q},prev:{slug:r,title:s,date:t},next:{slug:u,title:v,date:d},scrollTop:w,sideCategory:[{folderName:"ionic",articles:[{slug:m,title:n,date:d,path:p},{slug:"ionic-2018-09-06",title:"取整\u002F取小数、与数值比较",date:x,path:"\u002Fwiki\u002Fionic\u002Fionic-2018-09-06"},{slug:"ionic-2018-09-07",title:"null\u002Fundefined\u002F空字符串的数值比较",date:y,path:"\u002Fwiki\u002Fionic\u002Fionic-2018-09-07"},{slug:r,title:s,date:t,path:"\u002Fwiki\u002Fionic\u002Fionic-chrome跨域"},{slug:"ionic-handell-tag-a",title:"遍历\u003Ca\u003E标签,处理跳转操作",date:"2018-09-05 16:47",path:"\u002Fwiki\u002Fionic\u002Fionic-handell-tag-a"},{slug:"ionic-ionic-cli",title:"cli 常用命令",date:f,path:"\u002Fwiki\u002Fionic\u002Fionic-ionic-cli"},{slug:"ionic-ionic-example",title:"ionic-example",date:f,path:"\u002Fwiki\u002Fionic\u002Fionic-ionic-example"},{slug:u,title:v,date:d,path:"\u002Fwiki\u002Fionic\u002Fionic-ionic-http"},{slug:"ionic-ionic-py-error",title:"mac: python2环境问题",date:f,path:"\u002Fwiki\u002Fionic\u002Fionic-ionic-py-error"},{slug:"ionic-ionic3-no-provider-error",title:"ionic3 解决Error: No provider for Http!",date:f,path:"\u002Fwiki\u002Fionic\u002Fionic-ionic3-no-provider-error"},{slug:"ionic-letin-lefof",title:"ts:for..in与for..of",date:x,path:"\u002Fwiki\u002Fionic\u002Fionic-letin-lefof"},{slug:"ionic-node-js-reinstall",title:"[转]Mac OSX下重装node.js",date:"2018-06-20T00:00:00.000Z",path:"\u002Fwiki\u002Fionic\u002Fionic-node-js-reinstall"},{slug:"ionic-pip",title:"pip使用举例",date:d,path:"\u002Fwiki\u002Fionic\u002Fionic-pip"},{slug:"ionic-promise",title:"ES6 promise",date:y,path:"\u002Fwiki\u002Fionic\u002Fionic-promise"},{slug:"ionic-segment",title:"配置可滑动的segment",date:"2018-07-06T00:00:00.000Z",path:"\u002Fwiki\u002Fionic\u002Fionic-segment"},{slug:"ionic-summary-1",title:"开发小结(一)",date:"2018-07-22 16:41",path:"\u002Fwiki\u002Fionic\u002Fionic-summary-1"}],children:[{folderName:"Tutorial",articles:[{slug:"Tutorial-ionic-Components",title:"3.组件(一)",date:"2018-05-22T00:00:00.000Z",path:"\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-Components"},{slug:"Tutorial-ionic-add-page",title:"1.Adding Pages",date:z,path:"\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-add-page"},{slug:"Tutorial-ionic-components-6",title:"6.组件(四):下拉刷新上上拉加载",date:d,path:"\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-components-6"},{slug:"Tutorial-ionic-componets-2",title:"4.组件(二)",date:"2018-05-23T00:00:00.000Z",path:"\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-componets-2"},{slug:"Tutorial-ionic-componets-3",title:"5.组件(三):模态、导航、popover",date:f,path:"\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-componets-3"},{slug:"Tutorial-ionic-device",title:"6.真机调试",date:f,path:"\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-device"},{slug:"Tutorial-ionic-hello-world",title:"1.安装、启动、项目结构",date:z,path:"\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-hello-world"}],children:[]}]}]}],fetch:{},mutations:w}}("text","element","\n","2018-07-02T00:00:00.000Z","p","2018-05-24T00:00:00.000Z","div","nuxt-content-highlight","pre","language-text","line-numbers","code","ionic-2018-07-02-1","url不安全问题 caused by: unsafe value used in a resource URL context","https:\u002F\u002Fblog.csdn.net\u002Fu010564430\u002Farticle\u002Fdetails\u002F53815702","\u002Fwiki\u002Fionic\u002Fionic-2018-07-02-1","2021-11-18T11:07:10.249Z","ionic-chrome跨域","Mac上chrome跨域请求","2018-06-30T11:31:23.000Z","ionic-ionic-http","报错: Unexpected value 'Http' imported ..",void 0,"2018-09-06T00:00:00.000Z","2018-09-07T00:00:00.000Z","2018-05-06T00:00:00.000Z")));