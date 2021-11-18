__NUXT_JSONP__("/wiki/content/z-iOSRe-%E8%B6%8A%E7%8B%B1%E6%89%8B%E6%9C%BA%E5%85%8D%E5%AF%86%E7%99%BB%E5%BD%95", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){return {data:[{},{article:{slug:q,title:r,layout:"page",date:s,toc:[{id:g,depth:t,text:g},{id:h,depth:t,text:h}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"(macos)"}]},{type:a,value:c},{type:b,tag:u,props:{id:g},children:[{type:b,tag:j,props:{href:"#%E8%B6%8A%E7%8B%B1%E6%9C%BA%E5%85%8D%E5%AF%86%E7%99%BB%E5%BD%95ssh",ariaHidden:v,tabIndex:w},children:[{type:b,tag:f,props:{className:[x,y]},children:[]}]},{type:a,value:g}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"1). 一般如果用到了git管理,"},{type:b,tag:e,props:{},children:[{type:a,value:".ssh"}]},{type:a,value:"目录下会有秘钥,如果没有可以手动生成ssh秘钥,秘钥位置为"},{type:b,tag:e,props:{},children:[{type:a,value:".\u002F.ssh\u002Fid_rsa.pub"}]},{type:a,value:":"}]},{type:a,value:c},{type:b,tag:k,props:{className:[l]},children:[{type:b,tag:m,props:{className:[n,o]},children:[{type:b,tag:e,props:{},children:[{type:a,value:"ssh-keygen -t rsa -b "},{type:b,tag:f,props:{className:[i,"number"]},children:[{type:a,value:"4096"}]},{type:a,value:" -C "},{type:b,tag:f,props:{className:[i,"string"]},children:[{type:a,value:"\"邮箱地址\""}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"2). 复制并重命名（如果没有authorized_keys）"}]},{type:a,value:c},{type:b,tag:k,props:{className:[l]},children:[{type:b,tag:m,props:{className:[n,o]},children:[{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{className:[i,z]},children:[{type:a,value:"cp"}]},{type:a,value:" ~\u002F.ssh\u002Fid_ras.pub   ~\u002Fauthorized_keys\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"3). 放到手机"},{type:b,tag:e,props:{},children:[{type:a,value:"var\u002Froot\u002F.ssh"}]},{type:a,value:"目录,没有目录就手动创建"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"4). 使用scp拷贝到设备:"}]},{type:a,value:c},{type:b,tag:k,props:{className:[l]},children:[{type:b,tag:m,props:{className:[n,o]},children:[{type:b,tag:e,props:{},children:[{type:b,tag:f,props:{className:[i,z]},children:[{type:a,value:"scp"}]},{type:a,value:"  ~\u002Fauthorized_keys  root@xx.xx.xx.xx:\u002Fvar\u002Froot\u002F.ssh\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"如果需要制定端口就"},{type:b,tag:e,props:{},children:[{type:a,value:"scp -P 端口 ...."}]}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"eg: linux上免密登录也一样,eg"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"scp authorized_keys "},{type:b,tag:j,props:{href:"mailto:root@xx.xxx.xxx.xx"},children:[{type:a,value:"root@xx.xxx.xxx.xx"}]},{type:a,value:":\u002Froot\u002F.ssh"}]},{type:a,value:c},{type:b,tag:u,props:{id:h},children:[{type:b,tag:j,props:{href:"#%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%BF%9E%E6%8E%A5%E7%9A%84%E9%85%8D%E7%BD%AE",ariaHidden:v,tabIndex:w},children:[{type:b,tag:f,props:{className:[x,y]},children:[]}]},{type:a,value:h}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"详情搜索下wiki页面的  ‘Vps免密的一些配置’ 文章"}]}]},dir:"\u002Fwiki\u002Fz-iOSRe",path:A,extension:".md",createdAt:B,updatedAt:B},prev:{slug:"ionic-promise",title:"ES6 promise",date:"2018-09-07T00:00:00.000Z"},next:{slug:"杂记-micosoft-remove-desktop-cannot-cpoy",title:"micosoft remove desktop：无法向服务器拷贝文件解决",date:"2019-04-25T00:00:00.000Z"},scrollTop:C,sideCategory:[{folderName:"z-iOSRe",articles:[{slug:"z-iOSRe-Dynamic Libraries",title:"Dynamic Libraries",date:"2018-02-13T15:29:03.000Z",path:"\u002Fwiki\u002Fz-iOSRe\u002Fz-iOSRe-Dynamic Libraries"},{slug:"z-iOSRe-GDB使用",title:"LLDB+debugserver",date:"2018-02-17T10:33:51.000Z",path:"\u002Fwiki\u002Fz-iOSRe\u002Fz-iOSRe-GDB使用"},{slug:"z-iOSRe-class-dump",title:"安装class-dump",date:p,path:"\u002Fwiki\u002Fz-iOSRe\u002Fz-iOSRe-class-dump"},{slug:"z-iOSRe-dyld_decache",title:"dyld_decache",date:"2018-02-20T00:00:00.000Z",path:"\u002Fwiki\u002Fz-iOSRe\u002Fz-iOSRe-dyld_decache"},{slug:"z-iOSRe-reveal-app",title:"Reveal+越狱手机,查看app UI层级",date:"2017-12-21T00:00:00.000Z",path:"\u002Fwiki\u002Fz-iOSRe\u002Fz-iOSRe-reveal-app"},{slug:"z-iOSRe-ssh-pwd",title:"Jailbreak:修改ssh密码",date:p,path:"\u002Fwiki\u002Fz-iOSRe\u002Fz-iOSRe-ssh-pwd"},{slug:"z-iOSRe-theos-usage",title:"theos安装使用",date:p,path:"\u002Fwiki\u002Fz-iOSRe\u002Fz-iOSRe-theos-usage"},{slug:"z-iOSRe-砸壳",title:"(转)一键砸壳",date:"2018-02-22T19:31:39.000Z",path:"\u002Fwiki\u002Fz-iOSRe\u002Fz-iOSRe-砸壳"},{slug:q,title:r,date:s,path:A}],children:[]}]}],fetch:{},mutations:C}}("text","element","\n","p","code","span","越狱机免密登录ssh","服务器连接的配置","token","a","div","nuxt-content-highlight","pre","language-bash","line-numbers","2018-01-23T00:00:00.000Z","z-iOSRe-越狱手机免密登录","免密登录","2019-03-05T00:00:00.000Z",2,"h2","true",-1,"icon","icon-link","function","\u002Fwiki\u002Fz-iOSRe\u002Fz-iOSRe-越狱手机免密登录","2021-11-18T07:37:48.016Z",void 0)));