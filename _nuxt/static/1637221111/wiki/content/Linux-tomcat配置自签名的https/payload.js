__NUXT_JSONP__("/wiki/content/Linux-tomcat%E9%85%8D%E7%BD%AE%E8%87%AA%E7%AD%BE%E5%90%8D%E7%9A%84https", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return {data:[{},{article:{slug:m,title:n,layout:"page",date:k,toc:[],body:{type:"root",children:[{type:a,tag:j,props:{},children:[{type:b,value:"1). "},{type:a,tag:d,props:{},children:[{type:b,value:"ssh-keygen -f server.key"}]},{type:b,value:"生成秘钥对,按提示输入,可空"}]},{type:b,value:c},{type:a,tag:e,props:{className:[f]},children:[{type:a,tag:g,props:{className:[h,i]},children:[{type:a,tag:d,props:{},children:[{type:b,value:"➜  ssh-keygen -f server.key\n➜  ls\nserver.key     server.key.pub\n"}]}]}]},{type:b,value:c},{type:a,tag:j,props:{},children:[{type:b,value:"2). 生成证书请求文件(csr),注意 Common Name 一定要对应服务器地址,如"},{type:a,tag:d,props:{},children:[{type:b,value:"10.10.38.65"}]},{type:b,value:"."}]},{type:b,value:c},{type:a,tag:e,props:{className:[f]},children:[{type:a,tag:g,props:{className:[h,i]},children:[{type:a,tag:d,props:{},children:[{type:b,value:"openssl req -new -key server.key -out request.csr\n....\n➜  ls\nrequest.csr    server.key     server.key.pub\n"}]}]}]},{type:b,value:c},{type:a,tag:j,props:{},children:[{type:b,value:"3). 生成ssl证书"}]},{type:b,value:c},{type:a,tag:e,props:{className:[f]},children:[{type:a,tag:g,props:{className:[h,i]},children:[{type:a,tag:d,props:{},children:[{type:b,value:"➜ openssl x509 -req -days 365 -in request.csr -signkey server.key -out server.crt\n#提示信息\nSignature ok\nsubject=\u002FC=cn\u002FST=sd\u002FL=jn\u002FO=th\u002FOU=th\u002FCN=10.10.38.65\nGetting Private key\n➜ ls  #新增了 server.crt\nrequest.csr    server.crt     server.key     server.key.pub\n"}]}]}]},{type:b,value:c},{type:a,tag:j,props:{},children:[{type:b,value:"4). 转成p12"}]},{type:b,value:c},{type:a,tag:e,props:{className:[f]},children:[{type:a,tag:g,props:{className:[h,i]},children:[{type:a,tag:d,props:{},children:[{type:b,value:"➜  openssl pkcs12 -export -inkey server.key -in server.crt -out server.p12\nEnter Export Password: 123\nVerifying - Enter Export Password: 123\n#可以发现新生成了`server.pfx`的p12文件\n"}]}]}]},{type:b,value:c},{type:a,tag:e,props:{className:[f]},children:[{type:a,tag:g,props:{className:[h,i]},children:[{type:a,tag:d,props:{},children:[{type:b,value:"\u003CConnector port=\"443\" maxHttpHeaderSize=\"8192\" maxThreads=\"150\" minSpareThreads=\"25\" maxSpareThreads=\"75\" enableLookups=\"false\" disableUploadTimeout=\"true\" acceptCount=\"100\" scheme=\"https\" secure=\"true\" SSLEnabled=\"true\" clientAuth=\"false\" sslProtocol=\"TLS\" keystoreFile=\"conf\u002Fmydomain.pfx\" keystorePass=\"your_keystore_password\" keystoreType=\"PKCS12\"\u002F\u003E\n"}]}]}]},{type:b,value:c},{type:a,tag:j,props:{},children:[{type:b,value:"5).  导出为.p12文件导入到.keystore中,p12密码为123, 导出.keystore密码为123456"}]},{type:b,value:c},{type:a,tag:e,props:{className:[f]},children:[{type:a,tag:g,props:{className:[h,i]},children:[{type:a,tag:d,props:{},children:[{type:b,value:"keytool -importkeystore -v -srckeystore server.p12 -srcstoretype pkcs12 -srcstorepass 123 -destkeystore server.keystore -deststoretype jks -deststorepass 123456\n#发现目录下生成了server.keystore\n"}]}]}]}]},dir:"\u002Fwiki\u002FLinux",path:o,extension:".md",createdAt:p,updatedAt:p},prev:{slug:"Mac-重装nodejs_npm",title:"nodejs、npm、nvm",date:"2018-06-01T00:00:00.000Z"},next:{slug:"Mac-2018-12-08",title:"macOS已安装软件一览",date:"2018-12-08T21:14:02.000Z"},scrollTop:q,sideCategory:[{folderName:"Linux",articles:[{slug:"Linux-2019-02-26",title:"(转)AWS ec2使用教程",date:l,path:"\u002Fwiki\u002FLinux\u002FLinux-2019-02-26"},{slug:"Linux-2019-03-06",title:"yum 404问题",date:l,path:"\u002Fwiki\u002FLinux\u002FLinux-2019-03-06"},{slug:"Linux-Apache反向代理到ngrok",title:"Apache反向代理到ngrok",date:"2017-07-18T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-Apache反向代理到ngrok"},{slug:"Linux-CentOS LAMP 环境配置 + wordpress (阿里云ECS)",title:"CentOS LAMP 环境配置 + wordpress (阿里云ECS)",date:r,path:"\u002Fwiki\u002FLinux\u002FLinux-CentOS LAMP 环境配置 + wordpress (阿里云ECS)"},{slug:"Linux-CentOS LAMP 配置https",title:"CentOS LAMP 配置https",date:r,path:"\u002Fwiki\u002FLinux\u002FLinux-CentOS LAMP 配置https"},{slug:"Linux-SSH-Keys",title:"How To Set Up SSH Keys",date:"2017-08-19T16:14:59.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-SSH-Keys"},{slug:"Linux-centOS LNMP 环境配置",title:"centOS LNMP 环境配置",date:s,path:"\u002Fwiki\u002FLinux\u002FLinux-centOS LNMP 环境配置"},{slug:"Linux-centos-install-config",title:"CentOS装机配置",date:"2020-07-17T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-centos-install-config"},{slug:"Linux-centos-vue-springbot-env",title:"CentOS环境下打包配置(vue\u002Fspringbot)",date:"2020-03-08T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-centos-vue-springbot-env"},{slug:"Linux-fabric",title:"fabric部署网站应用",date:"2018-01-13T14:22:40.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-fabric"},{slug:"Linux-google-cloud-ss",title:"Google Cloud安装SS服务",date:t,path:"\u002Fwiki\u002FLinux\u002FLinux-google-cloud-ss"},{slug:"Linux-install-ngrok",title:"ngrok",date:"2017-07-13T18:19:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-install-ngrok"},{slug:"Linux-install-redis-by-homebrew",title:"homebrew安装redis以及常用命令",date:u,path:"\u002Fwiki\u002FLinux\u002FLinux-install-redis-by-homebrew"},{slug:"Linux-macOS JAVA开发环境配置",title:"macOS JAVA开发环境配置",date:"2016-10-01T17:15:33.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-macOS JAVA开发环境配置"},{slug:"Linux-macOS上kafka搭建",title:"macOS环境kafka环境搭建[译]",date:"2019-05-28T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-macOS上kafka搭建"},{slug:"Linux-macOS上搭建RAP环境",title:"macOS上搭建RAP环境",date:v,path:"\u002Fwiki\u002FLinux\u002FLinux-macOS上搭建RAP环境"},{slug:"Linux-macOS同时启动多个tomcat",title:"macOS同时启动多个tomcat",date:v,path:"\u002Fwiki\u002FLinux\u002FLinux-macOS同时启动多个tomcat"},{slug:"Linux-pd-centos-java",title:"pd安装centOS虚拟机并配置Java环境",date:s,path:"\u002Fwiki\u002FLinux\u002FLinux-pd-centos-java"},{slug:"Linux-speed-test",title:"测试延迟 tcping、httpstat",date:l,path:"\u002Fwiki\u002FLinux\u002FLinux-speed-test"},{slug:"Linux-su命令提示Authentication failure的解决办法",title:"su命令提示Authentication failure的解决办法",date:"2017-09-13T10:18:11.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-su命令提示Authentication failure的解决办法"},{slug:"Linux-tomcat配置https自签名证书 && iOS访问https接口",title:"tomcat配置https自签名证书 && iOS访问https接口",date:"2016-12-06 20:08",path:"\u002Fwiki\u002FLinux\u002FLinux-tomcat配置https自签名证书 && iOS访问https接口"},{slug:m,title:n,date:k,path:o},{slug:"Linux-type-speed",title:"打字训练",date:"2019-08-01T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-type-speed"},{slug:"Linux-vps免密的一些配置",date:"2020-11-11T08:27:38.000Z",title:"Vps免密的一些配置",path:"\u002Fwiki\u002FLinux\u002FLinux-vps免密的一些配置"},{slug:"Linux-yum-aliyun-repo",title:"将yum源更换为国内的阿里云源",date:"2017-07-14T12:57:48.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-yum-aliyun-repo"}],children:[{folderName:"Docker",articles:[{slug:"Docker-2019-03-07",title:"nginx + php + mysql 环境搭建",date:u,path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-2019-03-07"},{slug:"Docker-Docker基础笔记",title:"Docker基础笔记",date:k,path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-Docker基础笔记"},{slug:"Docker-docker-nginx-how-to-vist-localhost",title:"docker(nginx)内访问宿主机localhost",date:"2019-01-29T10:24:51.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-nginx-how-to-vist-localhost"},{slug:"Docker-docker-posgres",title:"docker中使用postgresSQL",date:"2019-05-22T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-posgres"},{slug:"Docker-docker-redis",title:"docker中使用redis",date:"2019-05-23T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-redis"},{slug:"Docker-docker-spring-boot",title:"springboot项目打包成docker",date:"2019-06-12T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-spring-boot"},{slug:"Docker-onlyoffice-usage",title:"OnlyOffice\u002FDocumentServer搭建",date:"2019-01-05T12:20:26.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-onlyoffice-usage"}],children:[]},{folderName:"Linux命令",articles:[{slug:"Linux命令-chown和chmod的区别",date:"2020-10-23T07:35:41.000Z",title:"Chown和chmod的区别",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-chown和chmod的区别"},{slug:"Linux命令-curl",title:"curl",date:"2017-08-31T20:49:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-curl"},{slug:"Linux命令-diff",title:"diff",date:"2017-09-03T21:05:20.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-diff"},{slug:"Linux命令-different-bin-sbin",title:"\u002Fbin,\u002Fsbin,\u002Fusr\u002Fsbin,\u002Fusr\u002Fbin目录区别",date:"2019-01-29T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-different-bin-sbin"},{slug:"Linux命令-linux-alias",title:"alias",date:"2017-07-14T21:19:45.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-linux-alias"},{slug:"Linux命令-nano",title:"nano",date:"2017-08-19T15:28:42.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-nano"},{slug:"Linux命令-passwd",date:"2020-10-26T08:44:41.000Z",title:"Passwd",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-passwd"},{slug:"Linux命令-rm",title:"rm递归删除",date:"2018-01-19T08:37:24.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-rm"},{slug:"Linux命令-scp",title:"scp",date:"2017-07-10T22:58:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-scp"},{slug:"Linux命令-sed",title:"sed",date:"2017-11-26T15:32:39.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-sed"},{slug:"Linux命令-tail",title:"tail",date:"2017-08-28T09:51:05.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-tail"},{slug:"Linux命令-vim-keycue",title:"vim常用快捷键",date:"2019-01-18T08:41:24.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-vim-keycue"},{slug:"Linux命令-vim",title:"vim",date:"2017-07-14T22:58:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-vim"}],children:[]},{folderName:"centos",articles:[{slug:"centos-yum安装提示无可用包",title:"yum安装提示无可用包",date:"2020-05-17T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002Fcentos\u002Fcentos-yum安装提示无可用包"}],children:[]},{folderName:"nginx",articles:[{slug:"nginx-google-cloud-nginx",title:"nginx安装配置(Google Cloud，centos7)",date:t,path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-google-cloud-nginx"},{slug:"nginx-nginx-https-config",title:"nginx中的https配置小记",date:"2020-03-07T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-nginx-https-config"},{slug:"nginx-nginx-setting",title:"nginx相关配置",date:k,path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-nginx-setting"}],children:[]},{folderName:"插件工具",articles:[{slug:"插件工具-ServerStatus",title:"安装serverstatus监听服务器状态",date:"2018-03-08T12:30:38.000Z",path:"\u002Fwiki\u002FLinux\u002F插件工具\u002F插件工具-ServerStatus"},{slug:"插件工具-htop",title:"htop",date:"2018-07-22T16:04:52.000Z",path:"\u002Fwiki\u002FLinux\u002F插件工具\u002F插件工具-htop"}],children:[]},{folderName:"搞机",articles:[{slug:"搞机-斐讯n1刷机",title:"斐讯n1刷入armbian记录",date:"2019-04-22T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002F搞机\u002F搞机-斐讯n1刷机"}],children:[]}]}]}],fetch:{},mutations:q}}("element","text","\n","code","div","nuxt-content-highlight","pre","language-text","line-numbers","p","2018-09-04T13:53:00.000Z","2019-02-26T00:00:00.000Z","Linux-tomcat配置自签名的https","tomcat配置自签名的https.md","\u002Fwiki\u002FLinux\u002FLinux-tomcat配置自签名的https","2021-11-18T07:37:48.000Z",void 0,"2017-06-04T00:00:00.000Z","2017-07-14T10:51:30.000Z","2018-02-28T21:34:42.000Z","2019-03-07T00:00:00.000Z","2017-08-24T10:24:01.000Z")));