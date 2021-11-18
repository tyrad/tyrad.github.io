__NUXT_JSONP__("/wiki/content/Linux%E5%91%BD%E4%BB%A4-chown%E5%92%8Cchmod%E7%9A%84%E5%8C%BA%E5%88%AB", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O){return {data:[{},{article:{slug:t,draft:false,date:u,title:v,toc:[{id:j,depth:w,text:j},{id:g,depth:w,text:g}],body:{type:"root",children:[{type:b,tag:x,props:{id:j},children:[{type:b,tag:k,props:{href:"#chown",ariaHidden:y,tabIndex:z},children:[{type:b,tag:e,props:{className:[A,B]},children:[]}]},{type:a,value:j}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"用来修改某个目录或者文件的用户名和用户组:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"chown 用户名:组名 文件目录(相对路径或者绝对路径)"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"例如,可道云中新增扩展或者模块文件，可能无法正常访问。网站的权限设置值建议如下: file 644， folder 755 ，用户和用户组分别是 apache : apache"}]},{type:a,value:c},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,p]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"~"},{type:b,tag:e,props:{className:[h,q]},children:[{type:a,value:"# chown -R apache.apache \u002Fdata\u002Fwwwroot\u002Fdefault"}]},{type:a,value:C},{type:b,tag:e,props:{className:[h,q]},children:[{type:a,value:"# find \u002Fdata\u002Fwwwroot\u002Fdefault -type d -exec chmod 755 {} \\;"}]},{type:a,value:C},{type:b,tag:e,props:{className:[h,q]},children:[{type:a,value:"# find \u002Fdata\u002Fwwwroot\u002Fdefault -type f -exec chmod 644 {} \\;"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:x,props:{id:g},children:[{type:b,tag:k,props:{href:"#chmod",ariaHidden:y,tabIndex:z},children:[{type:b,tag:e,props:{className:[A,B]},children:[]}]},{type:a,value:g}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"修改目录或者文件的访问权限。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"例如:"}]},{type:a,value:c},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,p]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{className:[h,D]},children:[{type:a,value:g}]},{type:a,value:" -R "},{type:b,tag:e,props:{className:[h,"number"]},children:[{type:a,value:"777"}]},{type:a,value:" \u002Fdata\u002Fwww\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Linux\u002FUnix 的文件调用权限分为三级 :"}]},{type:a,value:c},{type:b,tag:E,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"文件所有者（Owner）"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"用户组（Group）"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"其它用户（Other Users)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"只有文件所有者和超级用户可以修改文件或目录的权限。可以使用绝对模式（八进制数字模式），符号模式指定文件的权限。"}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"以下图片见: "},{type:b,tag:k,props:{href:F,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:F}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:G,props:{alt:"20201023160343986447894.jpg",src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F20201023160343986447894.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:G,props:{alt:"20201023160343987443224.png",src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F20201023160343987443224.png"},children:[]}]},{type:a,value:c},{type:b,tag:E,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"r"}]},{type:a,value:" 表示可读取，"},{type:b,tag:f,props:{},children:[{type:a,value:"w"}]},{type:a,value:" 表示可写入，"},{type:b,tag:f,props:{},children:[{type:a,value:"x"}]},{type:a,value:" 表示可执行。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"+"}]},{type:a,value:" 表示增加权限、- 表示取消权限、= 表示唯一设定权限。"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"例如添加可执行权限:"}]},{type:a,value:c},{type:b,tag:l,props:{className:[m]},children:[{type:b,tag:n,props:{className:[o,p]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:e,props:{className:[h,D]},children:[{type:a,value:g}]},{type:a,value:" +x myfile\n"}]}]}]}]},dir:"\u002Fwiki\u002FLinux\u002FLinux命令",path:H,extension:".md",createdAt:I,updatedAt:I},prev:{slug:"Java-Collection及其衍生",date:"2020-10-23T06:09:35.000Z",title:"Collection及其衍生"},next:{slug:"待学习-HBDNavigationBar",date:"2020-10-23T08:26:24.000Z",title:"HBDNavigationBar"},scrollTop:J,sideCategory:[{folderName:"Linux",articles:[{slug:"Linux-2019-02-26",title:"(转)AWS ec2使用教程",date:r,path:"\u002Fwiki\u002FLinux\u002FLinux-2019-02-26"},{slug:"Linux-2019-03-06",title:"yum 404问题",date:r,path:"\u002Fwiki\u002FLinux\u002FLinux-2019-03-06"},{slug:"Linux-Apache反向代理到ngrok",title:"Apache反向代理到ngrok",date:"2017-07-18T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-Apache反向代理到ngrok"},{slug:"Linux-CentOS LAMP 环境配置 + wordpress (阿里云ECS)",title:"CentOS LAMP 环境配置 + wordpress (阿里云ECS)",date:K,path:"\u002Fwiki\u002FLinux\u002FLinux-CentOS LAMP 环境配置 + wordpress (阿里云ECS)"},{slug:"Linux-CentOS LAMP 配置https",title:"CentOS LAMP 配置https",date:K,path:"\u002Fwiki\u002FLinux\u002FLinux-CentOS LAMP 配置https"},{slug:"Linux-SSH-Keys",title:"How To Set Up SSH Keys",date:"2017-08-19T16:14:59.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-SSH-Keys"},{slug:"Linux-centOS LNMP 环境配置",title:"centOS LNMP 环境配置",date:L,path:"\u002Fwiki\u002FLinux\u002FLinux-centOS LNMP 环境配置"},{slug:"Linux-centos-install-config",title:"CentOS装机配置",date:"2020-07-17T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-centos-install-config"},{slug:"Linux-centos-vue-springbot-env",title:"CentOS环境下打包配置(vue\u002Fspringbot)",date:"2020-03-08T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-centos-vue-springbot-env"},{slug:"Linux-fabric",title:"fabric部署网站应用",date:"2018-01-13T14:22:40.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-fabric"},{slug:"Linux-google-cloud-ss",title:"Google Cloud安装SS服务",date:M,path:"\u002Fwiki\u002FLinux\u002FLinux-google-cloud-ss"},{slug:"Linux-install-ngrok",title:"ngrok",date:"2017-07-13T18:19:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-install-ngrok"},{slug:"Linux-install-redis-by-homebrew",title:"homebrew安装redis以及常用命令",date:N,path:"\u002Fwiki\u002FLinux\u002FLinux-install-redis-by-homebrew"},{slug:"Linux-macOS JAVA开发环境配置",title:"macOS JAVA开发环境配置",date:"2016-10-01T17:15:33.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-macOS JAVA开发环境配置"},{slug:"Linux-macOS上kafka搭建",title:"macOS环境kafka环境搭建[译]",date:"2019-05-28T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-macOS上kafka搭建"},{slug:"Linux-macOS上搭建RAP环境",title:"macOS上搭建RAP环境",date:O,path:"\u002Fwiki\u002FLinux\u002FLinux-macOS上搭建RAP环境"},{slug:"Linux-macOS同时启动多个tomcat",title:"macOS同时启动多个tomcat",date:O,path:"\u002Fwiki\u002FLinux\u002FLinux-macOS同时启动多个tomcat"},{slug:"Linux-pd-centos-java",title:"pd安装centOS虚拟机并配置Java环境",date:L,path:"\u002Fwiki\u002FLinux\u002FLinux-pd-centos-java"},{slug:"Linux-speed-test",title:"测试延迟 tcping、httpstat",date:r,path:"\u002Fwiki\u002FLinux\u002FLinux-speed-test"},{slug:"Linux-su命令提示Authentication failure的解决办法",title:"su命令提示Authentication failure的解决办法",date:"2017-09-13T10:18:11.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-su命令提示Authentication failure的解决办法"},{slug:"Linux-tomcat配置https自签名证书 && iOS访问https接口",title:"tomcat配置https自签名证书 && iOS访问https接口",date:"2016-12-06 20:08",path:"\u002Fwiki\u002FLinux\u002FLinux-tomcat配置https自签名证书 && iOS访问https接口"},{slug:"Linux-tomcat配置自签名的https",title:"tomcat配置自签名的https.md",date:s,path:"\u002Fwiki\u002FLinux\u002FLinux-tomcat配置自签名的https"},{slug:"Linux-type-speed",title:"打字训练",date:"2019-08-01T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-type-speed"},{slug:"Linux-vps免密的一些配置",date:"2020-11-11T08:27:38.000Z",title:"Vps免密的一些配置",path:"\u002Fwiki\u002FLinux\u002FLinux-vps免密的一些配置"},{slug:"Linux-yum-aliyun-repo",title:"将yum源更换为国内的阿里云源",date:"2017-07-14T12:57:48.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-yum-aliyun-repo"}],children:[{folderName:"Docker",articles:[{slug:"Docker-2019-03-07",title:"nginx + php + mysql 环境搭建",date:N,path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-2019-03-07"},{slug:"Docker-Docker基础笔记",title:"Docker基础笔记",date:s,path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-Docker基础笔记"},{slug:"Docker-docker-nginx-how-to-vist-localhost",title:"docker(nginx)内访问宿主机localhost",date:"2019-01-29T10:24:51.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-nginx-how-to-vist-localhost"},{slug:"Docker-docker-posgres",title:"docker中使用postgresSQL",date:"2019-05-22T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-posgres"},{slug:"Docker-docker-redis",title:"docker中使用redis",date:"2019-05-23T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-redis"},{slug:"Docker-docker-spring-boot",title:"springboot项目打包成docker",date:"2019-06-12T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-spring-boot"},{slug:"Docker-onlyoffice-usage",title:"OnlyOffice\u002FDocumentServer搭建",date:"2019-01-05T12:20:26.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-onlyoffice-usage"}],children:[]},{folderName:"Linux命令",articles:[{slug:t,date:u,title:v,path:H},{slug:"Linux命令-curl",title:"curl",date:"2017-08-31T20:49:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-curl"},{slug:"Linux命令-diff",title:"diff",date:"2017-09-03T21:05:20.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-diff"},{slug:"Linux命令-different-bin-sbin",title:"\u002Fbin,\u002Fsbin,\u002Fusr\u002Fsbin,\u002Fusr\u002Fbin目录区别",date:"2019-01-29T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-different-bin-sbin"},{slug:"Linux命令-linux-alias",title:"alias",date:"2017-07-14T21:19:45.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-linux-alias"},{slug:"Linux命令-nano",title:"nano",date:"2017-08-19T15:28:42.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-nano"},{slug:"Linux命令-passwd",date:"2020-10-26T08:44:41.000Z",title:"Passwd",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-passwd"},{slug:"Linux命令-rm",title:"rm递归删除",date:"2018-01-19T08:37:24.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-rm"},{slug:"Linux命令-scp",title:"scp",date:"2017-07-10T22:58:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-scp"},{slug:"Linux命令-sed",title:"sed",date:"2017-11-26T15:32:39.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-sed"},{slug:"Linux命令-tail",title:"tail",date:"2017-08-28T09:51:05.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-tail"},{slug:"Linux命令-vim-keycue",title:"vim常用快捷键",date:"2019-01-18T08:41:24.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-vim-keycue"},{slug:"Linux命令-vim",title:"vim",date:"2017-07-14T22:58:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-vim"}],children:[]},{folderName:"centos",articles:[{slug:"centos-yum安装提示无可用包",title:"yum安装提示无可用包",date:"2020-05-17T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002Fcentos\u002Fcentos-yum安装提示无可用包"}],children:[]},{folderName:"nginx",articles:[{slug:"nginx-google-cloud-nginx",title:"nginx安装配置(Google Cloud，centos7)",date:M,path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-google-cloud-nginx"},{slug:"nginx-nginx-https-config",title:"nginx中的https配置小记",date:"2020-03-07T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-nginx-https-config"},{slug:"nginx-nginx-setting",title:"nginx相关配置",date:s,path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-nginx-setting"}],children:[]},{folderName:"插件工具",articles:[{slug:"插件工具-ServerStatus",title:"安装serverstatus监听服务器状态",date:"2018-03-08T12:30:38.000Z",path:"\u002Fwiki\u002FLinux\u002F插件工具\u002F插件工具-ServerStatus"},{slug:"插件工具-htop",title:"htop",date:"2018-07-22T16:04:52.000Z",path:"\u002Fwiki\u002FLinux\u002F插件工具\u002F插件工具-htop"}],children:[]},{folderName:"搞机",articles:[{slug:"搞机-斐讯n1刷机",title:"斐讯n1刷入armbian记录",date:"2019-04-22T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002F搞机\u002F搞机-斐讯n1刷机"}],children:[]}]}]}],fetch:{},mutations:J}}("text","element","\n","p","span","code","chmod","token","li","chown","a","div","nuxt-content-highlight","pre","language-bash","line-numbers","comment","2019-02-26T00:00:00.000Z","2018-09-04T13:53:00.000Z","Linux命令-chown和chmod的区别","2020-10-23T07:35:41.000Z","Chown和chmod的区别",2,"h2","true",-1,"icon","icon-link","\n~","function","ul","https:\u002F\u002Fwww.runoob.com\u002Flinux\u002Flinux-comm-chmod.html","img","\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-chown和chmod的区别","2021-11-18T05:30:57.444Z",void 0,"2017-06-04T00:00:00.000Z","2017-07-14T10:51:30.000Z","2018-02-28T21:34:42.000Z","2019-03-07T00:00:00.000Z","2017-08-24T10:24:01.000Z")));