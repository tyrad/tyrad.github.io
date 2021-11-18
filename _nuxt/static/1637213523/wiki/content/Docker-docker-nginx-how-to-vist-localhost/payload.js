__NUXT_JSONP__("/wiki/content/Docker-docker-nginx-how-to-vist-localhost", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X){return {data:[{},{article:{slug:r,title:s,layout:"page",date:t,collection:u,toc:[{id:j,depth:v,text:j},{id:w,depth:v,text:x}],body:{type:"root",children:[{type:b,tag:y,props:{id:j},children:[{type:b,tag:k,props:{href:"#macos",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:j}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"开发中会遇到ip地址不方便暴露的情况。"}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"解决方法见: "},{type:b,tag:k,props:{href:D,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:D}]}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"核心是"},{type:b,tag:h,props:{},children:[{type:a,value:E}]}]},{type:a,value:d},{type:b,tag:"blockquote",props:{},children:[{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"You can get your current IP address as shown here:\n"},{type:b,tag:h,props:{},children:[{type:a,value:"ifconfig en0 | grep inet | grep -v inet6 | awk '{print $2}'"}]},{type:a,value:"\nThen you can use the "},{type:b,tag:h,props:{},children:[{type:a,value:E}]},{type:a,value:" flag with docker run:\n"},{type:b,tag:h,props:{},children:[{type:a,value:"docker run --add-host localnode:$(ifconfig en0 | grep inet | grep -v inet6 | awk '{print \\$2}') ..."}]},{type:a,value:"\nIn your proxypass use localnode instead of localhost."}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"尝试可行:"}]},{type:a,value:d},{type:b,tag:F,props:{className:[G]},children:[{type:b,tag:H,props:{className:[I,J]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:c,props:{className:[e,l]},children:[{type:a,value:"#登录"}]},{type:a,value:"\ndocker run  -it  --rm --add-host localhost:"},{type:b,tag:c,props:{className:[e,m]},children:[{type:b,tag:c,props:{className:[e,m]},children:[{type:a,value:"$("}]},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:"ifconfig"}]},{type:a,value:" en0 "},{type:b,tag:c,props:{className:[e,n]},children:[{type:a,value:o}]},{type:a,value:i},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:K}]},{type:a,value:" inet "},{type:b,tag:c,props:{className:[e,n]},children:[{type:a,value:o}]},{type:a,value:i},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:K}]},{type:a,value:" -v inet6 "},{type:b,tag:c,props:{className:[e,n]},children:[{type:a,value:o}]},{type:a,value:i},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:"awk"}]},{type:a,value:i},{type:b,tag:c,props:{className:[e,"string"]},children:[{type:a,value:"'{print $2}'"}]},{type:b,tag:c,props:{className:[e,m]},children:[{type:a,value:")"}]}]},{type:a,value:"  nginx "},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:"bash"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,l]},children:[{type:a,value:"#安装ping "}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:L}]},{type:a,value:" update \n"},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:L}]},{type:a,value:i},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:"install"}]},{type:a,value:" inetutils-ping\n"},{type:b,tag:c,props:{className:[e,l]},children:[{type:a,value:"#测试"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:"ping"}]},{type:a,value:" localhost\n"}]}]}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"此外，还有一种方法：启动nginx容器，添加配置"},{type:b,tag:h,props:{},children:[{type:a,value:"--network=host"}]},{type:a,value:"，使得所有容器端口都对应属主机端口，不存在映射关系。"}]},{type:a,value:d},{type:b,tag:"ul",props:{},children:[{type:a,value:d},{type:b,tag:M,props:{},children:[{type:a,value:"可以使用localhost"}]},{type:a,value:d},{type:b,tag:M,props:{},children:[{type:a,value:"不需要添加 -p 参数"}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:y,props:{id:w},children:[{type:b,tag:k,props:{href:"#--network-host",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:x}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"不适用macos。"}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"使用例如:"}]},{type:a,value:d},{type:b,tag:F,props:{className:[G]},children:[{type:b,tag:H,props:{className:[I,J]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"docker run -d --name nginx --network "},{type:b,tag:c,props:{className:[e,g]},children:[{type:a,value:"host"}]},{type:a,value:" nginx\n"}]}]}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"本机和宿主机公用端口,也不需要诸如"},{type:b,tag:h,props:{},children:[{type:a,value:"-p 80:80"}]},{type:a,value:"之类的端口映射。"}]},{type:a,value:d},{type:b,tag:f,props:{},children:[{type:a,value:"这在设置反向代理为localhost时有用。"}]}]},dir:"\u002Fwiki\u002FLinux\u002FDocker",path:N,extension:".md",createdAt:O,updatedAt:O},prev:{slug:P,title:Q,date:R},next:{slug:"代码段-springboot-download-config",title:"(spring boot)虚拟目录配置、文件下载",date:"2019-01-29T17:23:27.000Z"},scrollTop:S,sideCategory:[{folderName:"Linux",articles:[{slug:"Linux-2019-02-26",title:"(转)AWS ec2使用教程",date:p,path:"\u002Fwiki\u002FLinux\u002FLinux-2019-02-26"},{slug:"Linux-2019-03-06",title:"yum 404问题",date:p,path:"\u002Fwiki\u002FLinux\u002FLinux-2019-03-06"},{slug:"Linux-Apache反向代理到ngrok",title:"Apache反向代理到ngrok",date:"2017-07-18T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-Apache反向代理到ngrok"},{slug:"Linux-CentOS LAMP 环境配置 + wordpress (阿里云ECS)",title:"CentOS LAMP 环境配置 + wordpress (阿里云ECS)",date:T,path:"\u002Fwiki\u002FLinux\u002FLinux-CentOS LAMP 环境配置 + wordpress (阿里云ECS)"},{slug:"Linux-CentOS LAMP 配置https",title:"CentOS LAMP 配置https",date:T,path:"\u002Fwiki\u002FLinux\u002FLinux-CentOS LAMP 配置https"},{slug:"Linux-SSH-Keys",title:"How To Set Up SSH Keys",date:"2017-08-19T16:14:59.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-SSH-Keys"},{slug:"Linux-centOS LNMP 环境配置",title:"centOS LNMP 环境配置",date:U,path:"\u002Fwiki\u002FLinux\u002FLinux-centOS LNMP 环境配置"},{slug:"Linux-centos-install-config",title:"CentOS装机配置",date:"2020-07-17T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-centos-install-config"},{slug:"Linux-centos-vue-springbot-env",title:"CentOS环境下打包配置(vue\u002Fspringbot)",date:"2020-03-08T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-centos-vue-springbot-env"},{slug:"Linux-fabric",title:"fabric部署网站应用",date:"2018-01-13T14:22:40.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-fabric"},{slug:"Linux-google-cloud-ss",title:"Google Cloud安装SS服务",date:V,path:"\u002Fwiki\u002FLinux\u002FLinux-google-cloud-ss"},{slug:"Linux-install-ngrok",title:"ngrok",date:"2017-07-13T18:19:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-install-ngrok"},{slug:"Linux-install-redis-by-homebrew",title:"homebrew安装redis以及常用命令",date:W,path:"\u002Fwiki\u002FLinux\u002FLinux-install-redis-by-homebrew"},{slug:"Linux-macOS JAVA开发环境配置",title:"macOS JAVA开发环境配置",date:"2016-10-01T17:15:33.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-macOS JAVA开发环境配置"},{slug:"Linux-macOS上kafka搭建",title:"macOS环境kafka环境搭建[译]",date:"2019-05-28T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-macOS上kafka搭建"},{slug:"Linux-macOS上搭建RAP环境",title:"macOS上搭建RAP环境",date:X,path:"\u002Fwiki\u002FLinux\u002FLinux-macOS上搭建RAP环境"},{slug:"Linux-macOS同时启动多个tomcat",title:"macOS同时启动多个tomcat",date:X,path:"\u002Fwiki\u002FLinux\u002FLinux-macOS同时启动多个tomcat"},{slug:"Linux-pd-centos-java",title:"pd安装centOS虚拟机并配置Java环境",date:U,path:"\u002Fwiki\u002FLinux\u002FLinux-pd-centos-java"},{slug:"Linux-speed-test",title:"测试延迟 tcping、httpstat",date:p,path:"\u002Fwiki\u002FLinux\u002FLinux-speed-test"},{slug:"Linux-su命令提示Authentication failure的解决办法",title:"su命令提示Authentication failure的解决办法",date:"2017-09-13T10:18:11.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-su命令提示Authentication failure的解决办法"},{slug:"Linux-tomcat配置https自签名证书 && iOS访问https接口",title:"tomcat配置https自签名证书 && iOS访问https接口",date:"2016-12-06 20:08",path:"\u002Fwiki\u002FLinux\u002FLinux-tomcat配置https自签名证书 && iOS访问https接口"},{slug:"Linux-tomcat配置自签名的https",title:"tomcat配置自签名的https.md",date:q,path:"\u002Fwiki\u002FLinux\u002FLinux-tomcat配置自签名的https"},{slug:"Linux-type-speed",title:"打字训练",date:"2019-08-01T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-type-speed"},{slug:"Linux-vps免密的一些配置",date:"2020-11-11T08:27:38.000Z",title:"Vps免密的一些配置",path:"\u002Fwiki\u002FLinux\u002FLinux-vps免密的一些配置"},{slug:"Linux-yum-aliyun-repo",title:"将yum源更换为国内的阿里云源",date:"2017-07-14T12:57:48.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-yum-aliyun-repo"}],children:[{folderName:u,articles:[{slug:"Docker-2019-03-07",title:"nginx + php + mysql 环境搭建",date:W,path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-2019-03-07"},{slug:"Docker-Docker基础笔记",title:"Docker基础笔记",date:q,path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-Docker基础笔记"},{slug:r,title:s,date:t,path:N},{slug:"Docker-docker-posgres",title:"docker中使用postgresSQL",date:"2019-05-22T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-posgres"},{slug:"Docker-docker-redis",title:"docker中使用redis",date:"2019-05-23T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-redis"},{slug:"Docker-docker-spring-boot",title:"springboot项目打包成docker",date:"2019-06-12T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-spring-boot"},{slug:"Docker-onlyoffice-usage",title:"OnlyOffice\u002FDocumentServer搭建",date:"2019-01-05T12:20:26.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-onlyoffice-usage"}],children:[]},{folderName:"Linux命令",articles:[{slug:"Linux命令-chown和chmod的区别",date:"2020-10-23T07:35:41.000Z",title:"Chown和chmod的区别",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-chown和chmod的区别"},{slug:"Linux命令-curl",title:"curl",date:"2017-08-31T20:49:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-curl"},{slug:"Linux命令-diff",title:"diff",date:"2017-09-03T21:05:20.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-diff"},{slug:P,title:Q,date:R,path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-different-bin-sbin"},{slug:"Linux命令-linux-alias",title:"alias",date:"2017-07-14T21:19:45.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-linux-alias"},{slug:"Linux命令-nano",title:"nano",date:"2017-08-19T15:28:42.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-nano"},{slug:"Linux命令-passwd",date:"2020-10-26T08:44:41.000Z",title:"Passwd",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-passwd"},{slug:"Linux命令-rm",title:"rm递归删除",date:"2018-01-19T08:37:24.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-rm"},{slug:"Linux命令-scp",title:"scp",date:"2017-07-10T22:58:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-scp"},{slug:"Linux命令-sed",title:"sed",date:"2017-11-26T15:32:39.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-sed"},{slug:"Linux命令-tail",title:"tail",date:"2017-08-28T09:51:05.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-tail"},{slug:"Linux命令-vim-keycue",title:"vim常用快捷键",date:"2019-01-18T08:41:24.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-vim-keycue"},{slug:"Linux命令-vim",title:"vim",date:"2017-07-14T22:58:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-vim"}],children:[]},{folderName:"centos",articles:[{slug:"centos-yum安装提示无可用包",title:"yum安装提示无可用包",date:"2020-05-17T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002Fcentos\u002Fcentos-yum安装提示无可用包"}],children:[]},{folderName:"nginx",articles:[{slug:"nginx-google-cloud-nginx",title:"nginx安装配置(Google Cloud，centos7)",date:V,path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-google-cloud-nginx"},{slug:"nginx-nginx-https-config",title:"nginx中的https配置小记",date:"2020-03-07T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-nginx-https-config"},{slug:"nginx-nginx-setting",title:"nginx相关配置",date:q,path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-nginx-setting"}],children:[]},{folderName:"插件工具",articles:[{slug:"插件工具-ServerStatus",title:"安装serverstatus监听服务器状态",date:"2018-03-08T12:30:38.000Z",path:"\u002Fwiki\u002FLinux\u002F插件工具\u002F插件工具-ServerStatus"},{slug:"插件工具-htop",title:"htop",date:"2018-07-22T16:04:52.000Z",path:"\u002Fwiki\u002FLinux\u002F插件工具\u002F插件工具-htop"}],children:[]},{folderName:"搞机",articles:[{slug:"搞机-斐讯n1刷机",title:"斐讯n1刷入armbian记录",date:"2019-04-22T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002F搞机\u002F搞机-斐讯n1刷机"}],children:[]}]}]}],fetch:{},mutations:S}}("text","element","span","\n","token","p","function","code"," ","macos","a","comment","variable","operator","|","2019-02-26T00:00:00.000Z","2018-09-04T13:53:00.000Z","Docker-docker-nginx-how-to-vist-localhost","docker(nginx)内访问宿主机localhost","2019-01-29T10:24:51.000Z","Docker",2,"--network-host","--network host","h2","true",-1,"icon","icon-link","https:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F27810076\u002Fhow-do-i-access-a-server-on-localhost-with-nginx-docker-container","--add-host","div","nuxt-content-highlight","pre","language-bash","line-numbers","grep","apt-get","li","\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-nginx-how-to-vist-localhost","2021-11-18T05:30:57.444Z","Linux命令-different-bin-sbin","\u002Fbin,\u002Fsbin,\u002Fusr\u002Fsbin,\u002Fusr\u002Fbin目录区别","2019-01-29T00:00:00.000Z",void 0,"2017-06-04T00:00:00.000Z","2017-07-14T10:51:30.000Z","2018-02-28T21:34:42.000Z","2019-03-07T00:00:00.000Z","2017-08-24T10:24:01.000Z")));