__NUXT_JSONP__("/wiki/content/Linux-centos-install-config", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y){return {data:[{},{article:{slug:C,title:D,layout:"page",date:E,toc:[{id:m,depth:q,text:m},{id:n,depth:q,text:n},{id:o,depth:q,text:o}],body:{type:"root",children:[{type:b,tag:r,props:{id:m},children:[{type:b,tag:s,props:{ariaHidden:t,href:"#%E4%BF%AE%E6%94%B9ssh%E7%AB%AF%E5%8F%A3%E5%8F%B7",tabIndex:u},children:[{type:b,tag:d,props:{className:[v,w]},children:[]}]},{type:a,value:m}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"1). 修改"},{type:b,tag:f,props:{},children:[{type:a,value:"etc\u002Fssh\u002Fsshd_config"}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"2). 修改内容,将"},{type:b,tag:f,props:{},children:[{type:a,value:"#Port=22"}]},{type:a,value:"去掉"},{type:b,tag:f,props:{},children:[{type:a,value:"#"}]},{type:a,value:"注释,并添加新的支持的端口，例如"},{type:b,tag:f,props:{},children:[{type:a,value:F}]},{type:a,value:" （需要保证端口可以正常访问，防火墙、安全策略等）"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,p]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,x]},children:[{type:a,value:"#Port=22   "}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,G,H]},children:[{type:a,value:I}]},{type:b,tag:d,props:{className:[e,y]},children:[{type:a,value:J}]},{type:b,tag:d,props:{className:[e,K]},children:[{type:a,value:"22"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,G,H]},children:[{type:a,value:I}]},{type:b,tag:d,props:{className:[e,y]},children:[{type:a,value:J}]},{type:b,tag:d,props:{className:[e,K]},children:[{type:a,value:F}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"3). 重启sshd "},{type:b,tag:f,props:{},children:[{type:a,value:"service sshd restart"}]}]},{type:a,value:c},{type:b,tag:r,props:{id:n},children:[{type:b,tag:s,props:{ariaHidden:t,href:"#%E5%AE%89%E8%A3%85%E5%BF%85%E8%A6%81%E7%9A%84%E4%BE%9D%E8%B5%96",tabIndex:u},children:[{type:b,tag:d,props:{className:[v,w]},children:[]}]},{type:a,value:n}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"根据个人喜好和需要安装依赖包"}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:a,value:c},{type:b,tag:L,props:{},children:[{type:a,value:M}]},{type:a,value:c},{type:b,tag:L,props:{},children:[{type:a,value:"git"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:r,props:{id:o},children:[{type:b,tag:s,props:{ariaHidden:t,href:"#docker",tabIndex:u},children:[{type:b,tag:d,props:{className:[v,w]},children:[]}]},{type:a,value:o}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"先检查更新："}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,"language-text"]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"sudo yum check-update\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"使用脚本安装docker"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,p]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:N}]},{type:a,value:" -fsSL https:\u002F\u002Fget.docker.com\u002F "},{type:b,tag:d,props:{className:[e,y]},children:[{type:a,value:"|"}]},{type:a,value:" "},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:"sh"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"启动"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,p]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,x]},children:[{type:a,value:"# 启动"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:z}]},{type:a,value:" systemctl start docker\n"},{type:b,tag:d,props:{className:[e,x]},children:[{type:a,value:"# 检查状态"}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:z}]},{type:a,value:" systemctl status docker\n"}]}]}]},{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"开机启动"}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,p]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[e,l]},children:[{type:a,value:z}]},{type:a,value:" systemctl "},{type:b,tag:d,props:{className:[e,"builtin","class-name"]},children:[{type:a,value:"enable"}]},{type:a,value:" docker\n"}]}]}]}]},dir:"\u002Fwiki\u002FLinux",path:O,extension:".md",createdAt:P,updatedAt:P},prev:{slug:Q,title:R,date:S},next:{slug:"Go-gin部署前后端分离项目",date:"2020-10-26T08:17:19.000Z",title:"Gin部署前后端分离项目(转载)"},scrollTop:T,sideCategory:[{folderName:"Linux",articles:[{slug:"Linux-2019-02-26",title:"(转)AWS ec2使用教程",date:A,path:"\u002Fwiki\u002FLinux\u002FLinux-2019-02-26"},{slug:"Linux-2019-03-06",title:"yum 404问题",date:A,path:"\u002Fwiki\u002FLinux\u002FLinux-2019-03-06"},{slug:"Linux-Apache反向代理到ngrok",title:"Apache反向代理到ngrok",date:"2017-07-18T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-Apache反向代理到ngrok"},{slug:"Linux-CentOS LAMP 环境配置 + wordpress (阿里云ECS)",title:"CentOS LAMP 环境配置 + wordpress (阿里云ECS)",date:U,path:"\u002Fwiki\u002FLinux\u002FLinux-CentOS LAMP 环境配置 + wordpress (阿里云ECS)"},{slug:"Linux-CentOS LAMP 配置https",title:"CentOS LAMP 配置https",date:U,path:"\u002Fwiki\u002FLinux\u002FLinux-CentOS LAMP 配置https"},{slug:"Linux-SSH-Keys",title:"How To Set Up SSH Keys",date:"2017-08-19T16:14:59.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-SSH-Keys"},{slug:"Linux-centOS LNMP 环境配置",title:"centOS LNMP 环境配置",date:V,path:"\u002Fwiki\u002FLinux\u002FLinux-centOS LNMP 环境配置"},{slug:C,title:D,date:E,path:O},{slug:Q,title:R,date:S,path:"\u002Fwiki\u002FLinux\u002FLinux-centos-vue-springbot-env"},{slug:"Linux-fabric",title:"fabric部署网站应用",date:"2018-01-13T14:22:40.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-fabric"},{slug:"Linux-google-cloud-ss",title:"Google Cloud安装SS服务",date:W,path:"\u002Fwiki\u002FLinux\u002FLinux-google-cloud-ss"},{slug:"Linux-install-ngrok",title:"ngrok",date:"2017-07-13T18:19:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-install-ngrok"},{slug:"Linux-install-redis-by-homebrew",title:"homebrew安装redis以及常用命令",date:X,path:"\u002Fwiki\u002FLinux\u002FLinux-install-redis-by-homebrew"},{slug:"Linux-macOS JAVA开发环境配置",title:"macOS JAVA开发环境配置",date:"2016-10-01T17:15:33.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-macOS JAVA开发环境配置"},{slug:"Linux-macOS上kafka搭建",title:"macOS环境kafka环境搭建[译]",date:"2019-05-28T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-macOS上kafka搭建"},{slug:"Linux-macOS上搭建RAP环境",title:"macOS上搭建RAP环境",date:Y,path:"\u002Fwiki\u002FLinux\u002FLinux-macOS上搭建RAP环境"},{slug:"Linux-macOS同时启动多个tomcat",title:"macOS同时启动多个tomcat",date:Y,path:"\u002Fwiki\u002FLinux\u002FLinux-macOS同时启动多个tomcat"},{slug:"Linux-pd-centos-java",title:"pd安装centOS虚拟机并配置Java环境",date:V,path:"\u002Fwiki\u002FLinux\u002FLinux-pd-centos-java"},{slug:"Linux-speed-test",title:"测试延迟 tcping、httpstat",date:A,path:"\u002Fwiki\u002FLinux\u002FLinux-speed-test"},{slug:"Linux-su命令提示Authentication failure的解决办法",title:"su命令提示Authentication failure的解决办法",date:"2017-09-13T10:18:11.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-su命令提示Authentication failure的解决办法"},{slug:"Linux-tomcat配置https自签名证书 && iOS访问https接口",title:"tomcat配置https自签名证书 && iOS访问https接口",date:"2016-12-06 20:08",path:"\u002Fwiki\u002FLinux\u002FLinux-tomcat配置https自签名证书 && iOS访问https接口"},{slug:"Linux-tomcat配置自签名的https",title:"tomcat配置自签名的https.md",date:B,path:"\u002Fwiki\u002FLinux\u002FLinux-tomcat配置自签名的https"},{slug:"Linux-type-speed",title:"打字训练",date:"2019-08-01T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-type-speed"},{slug:"Linux-vps免密的一些配置",date:"2020-11-11T08:27:38.000Z",title:"Vps免密的一些配置",path:"\u002Fwiki\u002FLinux\u002FLinux-vps免密的一些配置"},{slug:"Linux-yum-aliyun-repo",title:"将yum源更换为国内的阿里云源",date:"2017-07-14T12:57:48.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-yum-aliyun-repo"}],children:[{folderName:"Docker",articles:[{slug:"Docker-2019-03-07",title:"nginx + php + mysql 环境搭建",date:X,path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-2019-03-07"},{slug:"Docker-Docker基础笔记",title:"Docker基础笔记",date:B,path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-Docker基础笔记"},{slug:"Docker-docker-nginx-how-to-vist-localhost",title:"docker(nginx)内访问宿主机localhost",date:"2019-01-29T10:24:51.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-nginx-how-to-vist-localhost"},{slug:"Docker-docker-posgres",title:"docker中使用postgresSQL",date:"2019-05-22T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-posgres"},{slug:"Docker-docker-redis",title:"docker中使用redis",date:"2019-05-23T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-redis"},{slug:"Docker-docker-spring-boot",title:"springboot项目打包成docker",date:"2019-06-12T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-spring-boot"},{slug:"Docker-onlyoffice-usage",title:"OnlyOffice\u002FDocumentServer搭建",date:"2019-01-05T12:20:26.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-onlyoffice-usage"}],children:[]},{folderName:"Linux命令",articles:[{slug:"Linux命令-chown和chmod的区别",date:"2020-10-23T07:35:41.000Z",title:"Chown和chmod的区别",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-chown和chmod的区别"},{slug:"Linux命令-curl",title:N,date:"2017-08-31T20:49:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-curl"},{slug:"Linux命令-diff",title:"diff",date:"2017-09-03T21:05:20.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-diff"},{slug:"Linux命令-different-bin-sbin",title:"\u002Fbin,\u002Fsbin,\u002Fusr\u002Fsbin,\u002Fusr\u002Fbin目录区别",date:"2019-01-29T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-different-bin-sbin"},{slug:"Linux命令-linux-alias",title:"alias",date:"2017-07-14T21:19:45.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-linux-alias"},{slug:"Linux命令-nano",title:"nano",date:"2017-08-19T15:28:42.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-nano"},{slug:"Linux命令-passwd",date:"2020-10-26T08:44:41.000Z",title:"Passwd",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-passwd"},{slug:"Linux命令-rm",title:"rm递归删除",date:"2018-01-19T08:37:24.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-rm"},{slug:"Linux命令-scp",title:"scp",date:"2017-07-10T22:58:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-scp"},{slug:"Linux命令-sed",title:"sed",date:"2017-11-26T15:32:39.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-sed"},{slug:"Linux命令-tail",title:"tail",date:"2017-08-28T09:51:05.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-tail"},{slug:"Linux命令-vim-keycue",title:"vim常用快捷键",date:"2019-01-18T08:41:24.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-vim-keycue"},{slug:"Linux命令-vim",title:"vim",date:"2017-07-14T22:58:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-vim"}],children:[]},{folderName:"centos",articles:[{slug:"centos-yum安装提示无可用包",title:"yum安装提示无可用包",date:"2020-05-17T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002Fcentos\u002Fcentos-yum安装提示无可用包"}],children:[]},{folderName:"nginx",articles:[{slug:"nginx-google-cloud-nginx",title:"nginx安装配置(Google Cloud，centos7)",date:W,path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-google-cloud-nginx"},{slug:"nginx-nginx-https-config",title:"nginx中的https配置小记",date:"2020-03-07T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-nginx-https-config"},{slug:"nginx-nginx-setting",title:"nginx相关配置",date:B,path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-nginx-setting"}],children:[]},{folderName:"插件工具",articles:[{slug:"插件工具-ServerStatus",title:"安装serverstatus监听服务器状态",date:"2018-03-08T12:30:38.000Z",path:"\u002Fwiki\u002FLinux\u002F插件工具\u002F插件工具-ServerStatus"},{slug:"插件工具-htop",title:M,date:"2018-07-22T16:04:52.000Z",path:"\u002Fwiki\u002FLinux\u002F插件工具\u002F插件工具-htop"}],children:[]},{folderName:"搞机",articles:[{slug:"搞机-斐讯n1刷机",title:"斐讯n1刷入armbian记录",date:"2019-04-22T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002F搞机\u002F搞机-斐讯n1刷机"}],children:[]}]}]}],fetch:{},mutations:T}}("text","element","\n","span","token","code","p","div","nuxt-content-highlight","pre","line-numbers","function","修改ssh端口号","安装必要的依赖","docker","language-bash",2,"h2","a","true",-1,"icon","icon-link","comment","operator","sudo","2019-02-26T00:00:00.000Z","2018-09-04T13:53:00.000Z","Linux-centos-install-config","CentOS装机配置","2020-07-17T00:00:00.000Z","33333","assign-left","variable","Port","=","number","li","htop","curl","\u002Fwiki\u002FLinux\u002FLinux-centos-install-config","2021-12-27T10:01:01.246Z","Linux-centos-vue-springbot-env","CentOS环境下打包配置(vue\u002Fspringbot)","2020-03-08T00:00:00.000Z",void 0,"2017-06-04T00:00:00.000Z","2017-07-14T10:51:30.000Z","2018-02-28T21:34:42.000Z","2019-03-07T00:00:00.000Z","2017-08-24T10:24:01.000Z")));