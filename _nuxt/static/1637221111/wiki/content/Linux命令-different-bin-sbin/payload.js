__NUXT_JSONP__("/wiki/content/Linux%E5%91%BD%E4%BB%A4-different-bin-sbin", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L){return {data:[{},{article:{slug:r,title:s,layout:"page",date:t,collection:u,toc:[{id:v,depth:g,text:w},{id:x,depth:g,text:y},{id:h,depth:g,text:h},{id:i,depth:g,text:i}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"转自: "},{type:b,tag:f,props:{href:z,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:z}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fbin,\u002Fsbin,\u002Fusr\u002Fsbin,\u002Fusr\u002Fbin 目录"}]},{type:a,value:c},{type:b,tag:j,props:{id:v},children:[{type:b,tag:f,props:{href:"#bin--sbin",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"这些目录都是存放命令的，首先区别下\u002Fsbin和\u002Fbin："}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"从命令功能来看，\u002Fsbin 下的命令属于基本的系统命令，如shutdown，reboot，用于启动系统，修复系统，\u002Fbin下存放一些普通的基本命令，如ls,chmod等，这些命令在Linux系统里的配置文件脚本里经常用到。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"从用户权限的角度看，\u002Fsbin目录下的命令通常只有管理员才可以运行，\u002Fbin下的命令管理员和一般的用户都可以使用。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"从可运行时间角度看，\u002Fsbin,\u002Fbin能够在挂载其他文件系统前就可以使用。"}]},{type:a,value:c},{type:b,tag:j,props:{id:x},children:[{type:b,tag:f,props:{href:"#usrbin-%E3%80%81-usrsbin-%E3%80%81-bin",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"而\u002Fusr\u002Fbin,\u002Fusr\u002Fsbin与\u002Fsbin \u002Fbin目录的区别在于："}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fbin,\u002Fsbin目录是在系统启动后挂载到根文件系统中的，所以\u002Fsbin,\u002Fbin目录必须和根文件系统在同一分区；"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fusr\u002Fbin,usr\u002Fsbin可以和根文件系统不在一个分区。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fusr\u002Fsbin存放的一些非必须的系统命令；\u002Fusr\u002Fbin存放一些用户命令，如led(控制LED灯的)。"}]},{type:a,value:c},{type:b,tag:j,props:{id:h},children:[{type:b,tag:f,props:{href:"#%E5%85%B6%E4%BB%96",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:h}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"转下一位网友的解读，个人认为诠释得很到位："}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fbin是系统的一些指令。bin为binary的简写主要放置一些系统的必备执行档例如:cat、cp、chmod df、dmesg、gzip、kill、ls、mkdir、more、mount、rm、su、tar等。\n\u002Fsbin一般是指超级用户指令。主要放置一些系统管理的必备程式例如:cfdisk、dhcpcd、dump、e2fsck、fdisk、halt、ifconfig、ifup、 ifdown、init、insmod、lilo、lsmod、mke2fs、modprobe、quotacheck、reboot、rmmod、 runlevel、shutdown等。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fusr\u002Fbin　是你在后期安装的一些软件的运行脚本。主要放置一些应用软体工具的必备执行档例如c++、g++、gcc、chdrv、diff、dig、du、eject、elm、free、"},{type:b,tag:e,props:{},children:[{type:a,value:"gnome*"}]},{type:a,value:"、 gzip、htpasswd、kfm、ktop、last、less、locale、m4、make、man、mcopy、ncftp、 newaliases、nslookup passwd、quota、"},{type:b,tag:e,props:{},children:[{type:a,value:"smb*"}]},{type:a,value:"、wget等。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"\u002Fusr\u002Fsbin   放置一些用户安装的系统管理的必备程式。例如:dhcpd、httpd、imap、in.*d、inetd、lpd、named、netconfig、nmbd、samba、sendmail、squid、swap、tcpd、tcpdump等。\n如果新装的系统，运行一些很正常的诸如：shutdown，fdisk的命令时，悍然提示：bash:command not found。那么\n首先就要考虑root 的$PATH里是否已经包含了这些环境变量。\n可以查看PATH，如果是："},{type:b,tag:e,props:{},children:[{type:a,value:"PATH=$PATH:$HOME\u002Fbin"}]},{type:a,value:"则需要添加成如下：\n"},{type:b,tag:e,props:{},children:[{type:a,value:"PATH=$PATH:$HOME\u002Fbin:\u002Fsbin:\u002Fusr\u002Fbin:\u002Fusr\u002Fsbin"}]}]},{type:a,value:c},{type:b,tag:j,props:{id:i},children:[{type:b,tag:f,props:{href:"#%E6%80%BB%E7%BB%93",ariaHidden:k,tabIndex:l},children:[{type:b,tag:m,props:{className:[n,o]},children:[]}]},{type:a,value:i}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"总结:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"\u002Fsbin"}]},{type:a,value:" 权限更高,存放比较重要的命令,如"},{type:b,tag:e,props:{},children:[{type:a,value:"shutdown"}]},{type:a,value:A},{type:b,tag:e,props:{},children:[{type:a,value:"reboot"}]},{type:a,value:"等。\n"},{type:b,tag:e,props:{},children:[{type:a,value:"\u002Fbin"}]},{type:a,value:"  常用命令,如"},{type:b,tag:e,props:{},children:[{type:a,value:"cat"}]},{type:a,value:A},{type:b,tag:e,props:{},children:[{type:a,value:"ls"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"\u002Fusr\u002Fbin"}]},{type:a,value:"　是你在后期安装的一些软件的运行脚本。\n"},{type:b,tag:e,props:{},children:[{type:a,value:"\u002Fusr\u002Fsbin"}]},{type:a,value:" 放置一些用户安装的系统管理的必备程式"}]}]},dir:"\u002Fwiki\u002FLinux\u002FLinux命令",path:B,extension:".md",createdAt:C,updatedAt:C},prev:{slug:"微服务-feign-pass-http-header",title:"feign请求头丢失",date:"2019-01-28T16:24:12.000Z"},next:{slug:D,title:E,date:F},scrollTop:G,sideCategory:[{folderName:"Linux",articles:[{slug:"Linux-2019-02-26",title:"(转)AWS ec2使用教程",date:p,path:"\u002Fwiki\u002FLinux\u002FLinux-2019-02-26"},{slug:"Linux-2019-03-06",title:"yum 404问题",date:p,path:"\u002Fwiki\u002FLinux\u002FLinux-2019-03-06"},{slug:"Linux-Apache反向代理到ngrok",title:"Apache反向代理到ngrok",date:"2017-07-18T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-Apache反向代理到ngrok"},{slug:"Linux-CentOS LAMP 环境配置 + wordpress (阿里云ECS)",title:"CentOS LAMP 环境配置 + wordpress (阿里云ECS)",date:H,path:"\u002Fwiki\u002FLinux\u002FLinux-CentOS LAMP 环境配置 + wordpress (阿里云ECS)"},{slug:"Linux-CentOS LAMP 配置https",title:"CentOS LAMP 配置https",date:H,path:"\u002Fwiki\u002FLinux\u002FLinux-CentOS LAMP 配置https"},{slug:"Linux-SSH-Keys",title:"How To Set Up SSH Keys",date:"2017-08-19T16:14:59.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-SSH-Keys"},{slug:"Linux-centOS LNMP 环境配置",title:"centOS LNMP 环境配置",date:I,path:"\u002Fwiki\u002FLinux\u002FLinux-centOS LNMP 环境配置"},{slug:"Linux-centos-install-config",title:"CentOS装机配置",date:"2020-07-17T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-centos-install-config"},{slug:"Linux-centos-vue-springbot-env",title:"CentOS环境下打包配置(vue\u002Fspringbot)",date:"2020-03-08T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-centos-vue-springbot-env"},{slug:"Linux-fabric",title:"fabric部署网站应用",date:"2018-01-13T14:22:40.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-fabric"},{slug:"Linux-google-cloud-ss",title:"Google Cloud安装SS服务",date:J,path:"\u002Fwiki\u002FLinux\u002FLinux-google-cloud-ss"},{slug:"Linux-install-ngrok",title:"ngrok",date:"2017-07-13T18:19:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-install-ngrok"},{slug:"Linux-install-redis-by-homebrew",title:"homebrew安装redis以及常用命令",date:K,path:"\u002Fwiki\u002FLinux\u002FLinux-install-redis-by-homebrew"},{slug:"Linux-macOS JAVA开发环境配置",title:"macOS JAVA开发环境配置",date:"2016-10-01T17:15:33.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-macOS JAVA开发环境配置"},{slug:"Linux-macOS上kafka搭建",title:"macOS环境kafka环境搭建[译]",date:"2019-05-28T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-macOS上kafka搭建"},{slug:"Linux-macOS上搭建RAP环境",title:"macOS上搭建RAP环境",date:L,path:"\u002Fwiki\u002FLinux\u002FLinux-macOS上搭建RAP环境"},{slug:"Linux-macOS同时启动多个tomcat",title:"macOS同时启动多个tomcat",date:L,path:"\u002Fwiki\u002FLinux\u002FLinux-macOS同时启动多个tomcat"},{slug:"Linux-pd-centos-java",title:"pd安装centOS虚拟机并配置Java环境",date:I,path:"\u002Fwiki\u002FLinux\u002FLinux-pd-centos-java"},{slug:"Linux-speed-test",title:"测试延迟 tcping、httpstat",date:p,path:"\u002Fwiki\u002FLinux\u002FLinux-speed-test"},{slug:"Linux-su命令提示Authentication failure的解决办法",title:"su命令提示Authentication failure的解决办法",date:"2017-09-13T10:18:11.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-su命令提示Authentication failure的解决办法"},{slug:"Linux-tomcat配置https自签名证书 && iOS访问https接口",title:"tomcat配置https自签名证书 && iOS访问https接口",date:"2016-12-06 20:08",path:"\u002Fwiki\u002FLinux\u002FLinux-tomcat配置https自签名证书 && iOS访问https接口"},{slug:"Linux-tomcat配置自签名的https",title:"tomcat配置自签名的https.md",date:q,path:"\u002Fwiki\u002FLinux\u002FLinux-tomcat配置自签名的https"},{slug:"Linux-type-speed",title:"打字训练",date:"2019-08-01T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-type-speed"},{slug:"Linux-vps免密的一些配置",date:"2020-11-11T08:27:38.000Z",title:"Vps免密的一些配置",path:"\u002Fwiki\u002FLinux\u002FLinux-vps免密的一些配置"},{slug:"Linux-yum-aliyun-repo",title:"将yum源更换为国内的阿里云源",date:"2017-07-14T12:57:48.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-yum-aliyun-repo"}],children:[{folderName:"Docker",articles:[{slug:"Docker-2019-03-07",title:"nginx + php + mysql 环境搭建",date:K,path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-2019-03-07"},{slug:"Docker-Docker基础笔记",title:"Docker基础笔记",date:q,path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-Docker基础笔记"},{slug:D,title:E,date:F,path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-nginx-how-to-vist-localhost"},{slug:"Docker-docker-posgres",title:"docker中使用postgresSQL",date:"2019-05-22T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-posgres"},{slug:"Docker-docker-redis",title:"docker中使用redis",date:"2019-05-23T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-redis"},{slug:"Docker-docker-spring-boot",title:"springboot项目打包成docker",date:"2019-06-12T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-spring-boot"},{slug:"Docker-onlyoffice-usage",title:"OnlyOffice\u002FDocumentServer搭建",date:"2019-01-05T12:20:26.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-onlyoffice-usage"}],children:[]},{folderName:u,articles:[{slug:"Linux命令-chown和chmod的区别",date:"2020-10-23T07:35:41.000Z",title:"Chown和chmod的区别",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-chown和chmod的区别"},{slug:"Linux命令-curl",title:"curl",date:"2017-08-31T20:49:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-curl"},{slug:"Linux命令-diff",title:"diff",date:"2017-09-03T21:05:20.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-diff"},{slug:r,title:s,date:t,path:B},{slug:"Linux命令-linux-alias",title:"alias",date:"2017-07-14T21:19:45.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-linux-alias"},{slug:"Linux命令-nano",title:"nano",date:"2017-08-19T15:28:42.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-nano"},{slug:"Linux命令-passwd",date:"2020-10-26T08:44:41.000Z",title:"Passwd",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-passwd"},{slug:"Linux命令-rm",title:"rm递归删除",date:"2018-01-19T08:37:24.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-rm"},{slug:"Linux命令-scp",title:"scp",date:"2017-07-10T22:58:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-scp"},{slug:"Linux命令-sed",title:"sed",date:"2017-11-26T15:32:39.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-sed"},{slug:"Linux命令-tail",title:"tail",date:"2017-08-28T09:51:05.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-tail"},{slug:"Linux命令-vim-keycue",title:"vim常用快捷键",date:"2019-01-18T08:41:24.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-vim-keycue"},{slug:"Linux命令-vim",title:"vim",date:"2017-07-14T22:58:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-vim"}],children:[]},{folderName:"centos",articles:[{slug:"centos-yum安装提示无可用包",title:"yum安装提示无可用包",date:"2020-05-17T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002Fcentos\u002Fcentos-yum安装提示无可用包"}],children:[]},{folderName:"nginx",articles:[{slug:"nginx-google-cloud-nginx",title:"nginx安装配置(Google Cloud，centos7)",date:J,path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-google-cloud-nginx"},{slug:"nginx-nginx-https-config",title:"nginx中的https配置小记",date:"2020-03-07T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-nginx-https-config"},{slug:"nginx-nginx-setting",title:"nginx相关配置",date:q,path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-nginx-setting"}],children:[]},{folderName:"插件工具",articles:[{slug:"插件工具-ServerStatus",title:"安装serverstatus监听服务器状态",date:"2018-03-08T12:30:38.000Z",path:"\u002Fwiki\u002FLinux\u002F插件工具\u002F插件工具-ServerStatus"},{slug:"插件工具-htop",title:"htop",date:"2018-07-22T16:04:52.000Z",path:"\u002Fwiki\u002FLinux\u002F插件工具\u002F插件工具-htop"}],children:[]},{folderName:"搞机",articles:[{slug:"搞机-斐讯n1刷机",title:"斐讯n1刷入armbian记录",date:"2019-04-22T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002F搞机\u002F搞机-斐讯n1刷机"}],children:[]}]}]}],fetch:{},mutations:G}}("text","element","\n","p","code","a",2,"其他","总结","h2","true",-1,"span","icon","icon-link","2019-02-26T00:00:00.000Z","2018-09-04T13:53:00.000Z","Linux命令-different-bin-sbin","\u002Fbin,\u002Fsbin,\u002Fusr\u002Fsbin,\u002Fusr\u002Fbin目录区别","2019-01-29T00:00:00.000Z","Linux命令","bin--sbin","bin & sbin","usrbin-、-usrsbin-、-bin","\u002Fusr\u002Fbin 、 \u002Fusr\u002Fsbin 、 \u002Fbin","https:\u002F\u002Fblog.csdn.net\u002Fkkdelta\u002Farticle\u002Fdetails\u002F7708250","、","\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-different-bin-sbin","2021-11-18T07:37:48.000Z","Docker-docker-nginx-how-to-vist-localhost","docker(nginx)内访问宿主机localhost","2019-01-29T10:24:51.000Z",void 0,"2017-06-04T00:00:00.000Z","2017-07-14T10:51:30.000Z","2018-02-28T21:34:42.000Z","2019-03-07T00:00:00.000Z","2017-08-24T10:24:01.000Z")));