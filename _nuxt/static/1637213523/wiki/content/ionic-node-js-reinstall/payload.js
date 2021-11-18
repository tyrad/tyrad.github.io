__NUXT_JSONP__("/wiki/content/ionic-node-js-reinstall", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y){return {data:[{},{article:{slug:E,title:F,layout:"page",date:G,toc:[{id:v,depth:w,text:v},{id:x,depth:3,text:x},{id:H,depth:w,text:I},{id:y,depth:w,text:y},{id:z,depth:w,text:z}],body:{type:"root",children:[{type:b,tag:g,props:{},children:[{type:b,tag:h,props:{href:J,rel:[K,L,M],target:N},children:[{type:a,value:J}]}]},{type:a,value:c},{type:b,tag:A,props:{id:v},children:[{type:b,tag:h,props:{href:"#%E5%8D%B8%E8%BD%BD%E8%80%81%E7%89%88%E6%9C%AC%E7%9A%84node%E5%92%8Cnvm",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:"h3",props:{id:x},children:[{type:b,tag:h,props:{href:"#%E5%8D%B8%E8%BD%BDnode",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"如果是从brew安装的, 运行brew uninstall node"},{type:b,tag:B,props:{},children:[]},{type:a,value:"\n删除~\u002F目录下所有node和node_modules"},{type:b,tag:B,props:{},children:[]},{type:a,value:"\n删除\u002Fusr\u002Flocal\u002Flib中的所有node和node_modules"},{type:b,tag:B,props:{},children:[]},{type:a,value:"\n删除\u002Fusr\u002Flocal\u002Flib中的所有node和node_modules的文件夹"},{type:b,tag:B,props:{},children:[]},{type:a,value:"\n在\u002Fusr\u002Flocal\u002Fbin中, 删除所有node的可执行文件(node和npm)"}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:b,tag:"strong",props:{},children:[{type:a,value:"手动删除文件，整理成脚本是这个样子:"}]}]},{type:a,value:c},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,"language-shell"]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:" -rf ~\u002F.npm\n"},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:" -rf ~\u002Fnode_modules\n"},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:" -rf ~\u002F.node-gyp\n"},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:" \u002Fusr\u002Flocal\u002Fbin\u002Fnode\n"},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:" \u002Fusr\u002Flocal\u002Fbin\u002Fnpm\n"},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:j}]},{type:a,value:k},{type:b,tag:d,props:{className:[e,f]},children:[{type:a,value:l}]},{type:a,value:" \u002Fusr\u002Flocal\u002Flib\u002Fdtrace\u002Fnode.d\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"参考文章: "},{type:b,tag:h,props:{href:"https:\u002F\u002Fwww.zhihu.com\u002Fquestion\u002F27389115\u002Fanswer\u002F36434788",rel:[K,L,M],target:N},children:[{type:a,value:"如何删除node.js？"}]}]},{type:a,value:c},{type:b,tag:A,props:{id:H},children:[{type:b,tag:h,props:{href:"#%E5%8D%B8%E8%BD%BDnvm",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"我之前是手动安装的nvm，nvm的目录结构比较简单，删除这三个就可以了"}]},{type:a,value:c},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,C]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"rm -rf ~\u002F.nvm\nrm -rf ~\u002F.npm\nrm -rf ~\u002F.bower\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"还需要删除下.bash_profile文件中的配置(用brew安装后还需要重新加上，但不太一样)"}]},{type:a,value:c},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,C]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"# vim .bash_profile\nexport NVM_DIR=\"$HOME\u002F.nvm\"\n[ -s \"$NVM_DIR\u002Fnvm.sh\" ] && . \"$NVM_DIR\u002Fnvm.sh\" # This loads nvm\n"}]}]}]},{type:a,value:c},{type:b,tag:A,props:{id:y},children:[{type:b,tag:h,props:{href:"#%E6%B8%85%E7%90%86%E5%B9%B2%E5%87%80%E5%90%8E%E7%9A%84%E7%A1%AE%E8%AE%A4",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"重启终端后，挨个测试几个命令应该都是找不到，才算是正确的:"}]},{type:a,value:c},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,C]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"nvm\nnode\nnpm\n"}]}]}]},{type:a,value:c},{type:b,tag:A,props:{id:z},children:[{type:b,tag:h,props:{href:"#%E9%87%8D%E6%96%B0%E5%AE%89%E8%A3%85",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,C]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"# 使用brew安装nvm\nbrew install nvm\n# vim .bash_profile后增加下面这两行\nexport NVM_DIR=\"$HOME\u002F.nvm\"\nsource $(brew --prefix nvm)\u002Fnvm.sh\n# 使用nvm安装node.js\nnvm install node\n# 校验\n$ nvm --version\n0.31.0\n$ node -v\nv5.7.1\n$ npm -v\n3.6.0\n$ nvm list\n-\u003E       v5.7.1\ndefault -\u003E node (-\u003E v5.7.1)\nnode -\u003E stable (-\u003E v5.7.1) (default)\nstable -\u003E 5.7 (-\u003E v5.7.1) (default)\niojs -\u003E N\u002FA (default)\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"(ps: 安装nvm可能会按提示要求创建目录)"}]}]},dir:"\u002Fwiki\u002Fionic",path:O,extension:".md",createdAt:P,updatedAt:P},prev:{slug:Q,title:R,date:i},next:{slug:S,title:T,date:U},scrollTop:V,sideCategory:[{folderName:"ionic",articles:[{slug:"ionic-2018-07-02-1",title:"url不安全问题 caused by: unsafe value used in a resource URL context",date:D,path:"\u002Fwiki\u002Fionic\u002Fionic-2018-07-02-1"},{slug:"ionic-2018-09-06",title:"取整\u002F取小数、与数值比较",date:W,path:"\u002Fwiki\u002Fionic\u002Fionic-2018-09-06"},{slug:"ionic-2018-09-07",title:"null\u002Fundefined\u002F空字符串的数值比较",date:X,path:"\u002Fwiki\u002Fionic\u002Fionic-2018-09-07"},{slug:S,title:T,date:U,path:"\u002Fwiki\u002Fionic\u002Fionic-chrome跨域"},{slug:"ionic-handell-tag-a",title:"遍历\u003Ca\u003E标签,处理跳转操作",date:"2018-09-05 16:47",path:"\u002Fwiki\u002Fionic\u002Fionic-handell-tag-a"},{slug:"ionic-ionic-cli",title:"cli 常用命令",date:i,path:"\u002Fwiki\u002Fionic\u002Fionic-ionic-cli"},{slug:"ionic-ionic-example",title:"ionic-example",date:i,path:"\u002Fwiki\u002Fionic\u002Fionic-ionic-example"},{slug:"ionic-ionic-http",title:"报错: Unexpected value 'Http' imported ..",date:D,path:"\u002Fwiki\u002Fionic\u002Fionic-ionic-http"},{slug:"ionic-ionic-py-error",title:"mac: python2环境问题",date:i,path:"\u002Fwiki\u002Fionic\u002Fionic-ionic-py-error"},{slug:Q,title:R,date:i,path:"\u002Fwiki\u002Fionic\u002Fionic-ionic3-no-provider-error"},{slug:"ionic-letin-lefof",title:"ts:for..in与for..of",date:W,path:"\u002Fwiki\u002Fionic\u002Fionic-letin-lefof"},{slug:E,title:F,date:G,path:O},{slug:"ionic-pip",title:"pip使用举例",date:D,path:"\u002Fwiki\u002Fionic\u002Fionic-pip"},{slug:"ionic-promise",title:"ES6 promise",date:X,path:"\u002Fwiki\u002Fionic\u002Fionic-promise"},{slug:"ionic-segment",title:"配置可滑动的segment",date:"2018-07-06T00:00:00.000Z",path:"\u002Fwiki\u002Fionic\u002Fionic-segment"},{slug:"ionic-summary-1",title:"开发小结(一)",date:"2018-07-22 16:41",path:"\u002Fwiki\u002Fionic\u002Fionic-summary-1"}],children:[{folderName:"Tutorial",articles:[{slug:"Tutorial-ionic-Components",title:"3.组件(一)",date:"2018-05-22T00:00:00.000Z",path:"\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-Components"},{slug:"Tutorial-ionic-add-page",title:"1.Adding Pages",date:Y,path:"\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-add-page"},{slug:"Tutorial-ionic-components-6",title:"6.组件(四):下拉刷新上上拉加载",date:D,path:"\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-components-6"},{slug:"Tutorial-ionic-componets-2",title:"4.组件(二)",date:"2018-05-23T00:00:00.000Z",path:"\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-componets-2"},{slug:"Tutorial-ionic-componets-3",title:"5.组件(三):模态、导航、popover",date:i,path:"\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-componets-3"},{slug:"Tutorial-ionic-device",title:"6.真机调试",date:i,path:"\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-device"},{slug:"Tutorial-ionic-hello-world",title:"1.安装、启动、项目结构",date:Y,path:"\u002Fwiki\u002Fionic\u002FTutorial\u002FTutorial-ionic-hello-world"}],children:[]}]}]}],fetch:{},mutations:V}}("text","element","\n","span","token","function","p","a","2018-05-24T00:00:00.000Z","sudo"," ","rm","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","line-numbers","code","卸载老版本的node和nvm",2,"卸载node","清理干净后的确认","重新安装","h2","br","language-text","2018-07-02T00:00:00.000Z","ionic-node-js-reinstall","[转]Mac OSX下重装node.js","2018-06-20T00:00:00.000Z","卸载nvm","卸载.nvm","http:\u002F\u002Flinyehui.me\u002F2016\u002F03\u002F03\u002Freinstall-nodejs-on-osx\u002F","nofollow","noopener","noreferrer","_blank","\u002Fwiki\u002Fionic\u002Fionic-node-js-reinstall","2021-11-18T05:30:57.460Z","ionic-ionic3-no-provider-error","ionic3 解决Error: No provider for Http!","ionic-chrome跨域","Mac上chrome跨域请求","2018-06-30T11:31:23.000Z",void 0,"2018-09-06T00:00:00.000Z","2018-09-07T00:00:00.000Z","2018-05-06T00:00:00.000Z")));