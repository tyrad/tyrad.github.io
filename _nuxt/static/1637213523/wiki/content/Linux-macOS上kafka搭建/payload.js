__NUXT_JSONP__("/wiki/content/Linux-macOS%E4%B8%8Akafka%E6%90%AD%E5%BB%BA", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X){return {data:[{},{article:{slug:D,title:E,layout:"page",date:F,toc:[{id:u,depth:z,text:u},{id:G,depth:s,text:H},{id:v,depth:s,text:v},{id:w,depth:z,text:w},{id:x,depth:s,text:x},{id:I,depth:s,text:J},{id:K,depth:s,text:L},{id:y,depth:z,text:y}],body:{type:"root",children:[{type:b,tag:A,props:{id:u},children:[{type:b,tag:h,props:{href:"#%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"仍然使用hombrew安装"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,M]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[g,q]},children:[{type:a,value:"#$ brew cask install java"}]},{type:a,value:"\n$ brew "},{type:b,tag:d,props:{className:[g,"function"]},children:[{type:a,value:"install"}]},{type:a,value:" kafka\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"安装完成后提示:"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:"img",props:{alt:"20190528155902504628190.png",src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F20190528155902504628190.png"},children:[]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"然后启动"},{type:b,tag:f,props:{},children:[{type:a,value:"Zookeeper"}]},{type:a,value:"和"},{type:b,tag:f,props:{},children:[{type:a,value:"Kafka"}]},{type:a,value:":"}]},{type:a,value:c},{type:b,tag:t,props:{id:G},children:[{type:b,tag:h,props:{href:"#%E5%90%AF%E5%8A%A8zookeeper",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,r]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"zookeeper-server-start \u002Fusr\u002Flocal\u002Fetc\u002Fkafka\u002Fzookeeper.properties\n"}]}]}]},{type:a,value:c},{type:b,tag:t,props:{id:v},children:[{type:b,tag:h,props:{href:"#%E5%90%AF%E5%8A%A8kafka",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,r]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"kafka-server-start \u002Fusr\u002Flocal\u002Fetc\u002Fkafka\u002Fserver.properties\n"}]}]}]},{type:a,value:c},{type:b,tag:"h4",props:{id:N},children:[{type:b,tag:h,props:{href:"#%E8%AD%A6%E5%91%8A%E5%A4%84%E7%90%86",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,r]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"WARNING:\nDuring server start, you might be facing connection broken issue.\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"处理方法,修改"},{type:b,tag:f,props:{},children:[{type:a,value:"server.properties"}]}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,r]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"$ vim \u002Fusr\u002Flocal\u002Fetc\u002Fkafka\u002Fserver.properties\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"注释以下内容"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,r]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"listeners=PLAINTEXT:\u002F\u002F:9092\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"并更新为"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,M]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:d,props:{className:[g,q]},children:[{type:a,value:"############################# Socket Server Settings #############################"}]},{type:a,value:c},{type:b,tag:d,props:{className:[g,q]},children:[{type:a,value:"# The address the socket server listens on. It will get the value returned from "}]},{type:a,value:c},{type:b,tag:d,props:{className:[g,q]},children:[{type:a,value:"# java.net.InetAddress.getCanonicalHostName() if not configured."}]},{type:a,value:c},{type:b,tag:d,props:{className:[g,q]},children:[{type:a,value:"#   FORMAT:"}]},{type:a,value:c},{type:b,tag:d,props:{className:[g,q]},children:[{type:a,value:"#     listeners = listener_name:\u002F\u002Fhost_name:port"}]},{type:a,value:c},{type:b,tag:d,props:{className:[g,q]},children:[{type:a,value:"#   EXAMPLE:"}]},{type:a,value:c},{type:b,tag:d,props:{className:[g,q]},children:[{type:a,value:"#     listeners = PLAINTEXT:\u002F\u002Fyour.host.name:9092"}]},{type:a,value:c},{type:b,tag:d,props:{className:[g,"assign-left","variable"]},children:[{type:a,value:"listeners"}]},{type:b,tag:d,props:{className:[g,"operator"]},children:[{type:a,value:"="}]},{type:a,value:"PLAINTEXT:\u002F\u002Flocalhost:9092\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"重启服务生效"}]},{type:a,value:c},{type:b,tag:A,props:{id:w},children:[{type:b,tag:h,props:{href:"#%E6%B5%8B%E8%AF%95",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"创建 Kafka Topic:"}]},{type:a,value:c},{type:b,tag:O,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"A topic is a category or feed name to which records are published. Topics in Kafka are always multi-subscriber; that is, a topic can have zero, one, or many consumers that subscribe to the data written to it."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:O,props:{},children:[{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"主题是发布记录的类别或订阅源名称。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Kafka的主题总是多用户;\n也就是说，一个主题可以有零个，一个或多个消费者订阅写入它的数据。"}]},{type:a,value:c},{type:b,tag:t,props:{id:x},children:[{type:b,tag:h,props:{href:"#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AAtopic",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"创建一个名字为"},{type:b,tag:f,props:{},children:[{type:a,value:P}]},{type:a,value:"的topic"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,r]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"kafka-topics --create --zookeeper localhost:2181 --replication-factor 1 --partitions 1 --topic test\n"}]}]}]},{type:a,value:c},{type:b,tag:t,props:{id:I},children:[{type:b,tag:h,props:{href:"#%E5%88%9D%E5%A7%8B%E5%8C%96-producer-console",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"初始化  Kafka producer console,  它将会监听localhost的9092端口，基于"},{type:b,tag:f,props:{},children:[{type:a,value:P}]},{type:a,value:"topic:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,r]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"$ kafka-console-producer --broker-list localhost:9092 --topic test\n\u003Esend first message\n\u003Esend second message\n\u003Ewow it is working\n"}]}]}]},{type:a,value:c},{type:b,tag:t,props:{id:K},children:[{type:b,tag:h,props:{href:"#%E5%88%9D%E5%A7%8B%E5%8C%96-consumer-console",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"初始化 Kafka Consumer console,  which will listen to bootstrap server localhost at port 9092 at topic test from beginning:"}]},{type:a,value:c},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,r]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"$ kafka-console-consumer --bootstrap-server localhost:9092 --topic test --from-beginning\nsend first message\nsend second message\nwow it is working\n"}]}]}]},{type:a,value:c},{type:b,tag:A,props:{id:y},children:[{type:b,tag:h,props:{href:"#%E5%8F%82%E8%80%83",ariaHidden:m,tabIndex:n},children:[{type:b,tag:d,props:{className:[o,p]},children:[]}]},{type:a,value:y}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:h,props:{href:"https:\u002F\u002Fmedium.com\u002F@Ankitthakur\u002Fapache-kafka-installation-on-mac-using-homebrew-a367cdefd273",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"Apache Kafka Installation on Mac using Homebrew"}]}]}]},dir:"\u002Fwiki\u002FLinux",path:Q,extension:".md",createdAt:R,updatedAt:R},prev:{slug:"Java-java-plan",title:"JAVA学习路线",date:"2019-05-17T00:00:00.000Z"},next:{slug:"Python玩法-Missing-dependencies-fo- SOCKS-support",title:"Missing dependencies for SOCKS support解决方法",date:"2019-06-03T00:00:00.000Z"},scrollTop:S,sideCategory:[{folderName:"Linux",articles:[{slug:"Linux-2019-02-26",title:"(转)AWS ec2使用教程",date:B,path:"\u002Fwiki\u002FLinux\u002FLinux-2019-02-26"},{slug:"Linux-2019-03-06",title:"yum 404问题",date:B,path:"\u002Fwiki\u002FLinux\u002FLinux-2019-03-06"},{slug:"Linux-Apache反向代理到ngrok",title:"Apache反向代理到ngrok",date:"2017-07-18T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-Apache反向代理到ngrok"},{slug:"Linux-CentOS LAMP 环境配置 + wordpress (阿里云ECS)",title:"CentOS LAMP 环境配置 + wordpress (阿里云ECS)",date:T,path:"\u002Fwiki\u002FLinux\u002FLinux-CentOS LAMP 环境配置 + wordpress (阿里云ECS)"},{slug:"Linux-CentOS LAMP 配置https",title:"CentOS LAMP 配置https",date:T,path:"\u002Fwiki\u002FLinux\u002FLinux-CentOS LAMP 配置https"},{slug:"Linux-SSH-Keys",title:"How To Set Up SSH Keys",date:"2017-08-19T16:14:59.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-SSH-Keys"},{slug:"Linux-centOS LNMP 环境配置",title:"centOS LNMP 环境配置",date:U,path:"\u002Fwiki\u002FLinux\u002FLinux-centOS LNMP 环境配置"},{slug:"Linux-centos-install-config",title:"CentOS装机配置",date:"2020-07-17T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-centos-install-config"},{slug:"Linux-centos-vue-springbot-env",title:"CentOS环境下打包配置(vue\u002Fspringbot)",date:"2020-03-08T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-centos-vue-springbot-env"},{slug:"Linux-fabric",title:"fabric部署网站应用",date:"2018-01-13T14:22:40.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-fabric"},{slug:"Linux-google-cloud-ss",title:"Google Cloud安装SS服务",date:V,path:"\u002Fwiki\u002FLinux\u002FLinux-google-cloud-ss"},{slug:"Linux-install-ngrok",title:"ngrok",date:"2017-07-13T18:19:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-install-ngrok"},{slug:"Linux-install-redis-by-homebrew",title:"homebrew安装redis以及常用命令",date:W,path:"\u002Fwiki\u002FLinux\u002FLinux-install-redis-by-homebrew"},{slug:"Linux-macOS JAVA开发环境配置",title:"macOS JAVA开发环境配置",date:"2016-10-01T17:15:33.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-macOS JAVA开发环境配置"},{slug:D,title:E,date:F,path:Q},{slug:"Linux-macOS上搭建RAP环境",title:"macOS上搭建RAP环境",date:X,path:"\u002Fwiki\u002FLinux\u002FLinux-macOS上搭建RAP环境"},{slug:"Linux-macOS同时启动多个tomcat",title:"macOS同时启动多个tomcat",date:X,path:"\u002Fwiki\u002FLinux\u002FLinux-macOS同时启动多个tomcat"},{slug:"Linux-pd-centos-java",title:"pd安装centOS虚拟机并配置Java环境",date:U,path:"\u002Fwiki\u002FLinux\u002FLinux-pd-centos-java"},{slug:"Linux-speed-test",title:"测试延迟 tcping、httpstat",date:B,path:"\u002Fwiki\u002FLinux\u002FLinux-speed-test"},{slug:"Linux-su命令提示Authentication failure的解决办法",title:"su命令提示Authentication failure的解决办法",date:"2017-09-13T10:18:11.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-su命令提示Authentication failure的解决办法"},{slug:"Linux-tomcat配置https自签名证书 && iOS访问https接口",title:"tomcat配置https自签名证书 && iOS访问https接口",date:"2016-12-06 20:08",path:"\u002Fwiki\u002FLinux\u002FLinux-tomcat配置https自签名证书 && iOS访问https接口"},{slug:"Linux-tomcat配置自签名的https",title:"tomcat配置自签名的https.md",date:C,path:"\u002Fwiki\u002FLinux\u002FLinux-tomcat配置自签名的https"},{slug:"Linux-type-speed",title:"打字训练",date:"2019-08-01T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-type-speed"},{slug:"Linux-vps免密的一些配置",date:"2020-11-11T08:27:38.000Z",title:"Vps免密的一些配置",path:"\u002Fwiki\u002FLinux\u002FLinux-vps免密的一些配置"},{slug:"Linux-yum-aliyun-repo",title:"将yum源更换为国内的阿里云源",date:"2017-07-14T12:57:48.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-yum-aliyun-repo"}],children:[{folderName:"Docker",articles:[{slug:"Docker-2019-03-07",title:"nginx + php + mysql 环境搭建",date:W,path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-2019-03-07"},{slug:"Docker-Docker基础笔记",title:"Docker基础笔记",date:C,path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-Docker基础笔记"},{slug:"Docker-docker-nginx-how-to-vist-localhost",title:"docker(nginx)内访问宿主机localhost",date:"2019-01-29T10:24:51.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-nginx-how-to-vist-localhost"},{slug:"Docker-docker-posgres",title:"docker中使用postgresSQL",date:"2019-05-22T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-posgres"},{slug:"Docker-docker-redis",title:"docker中使用redis",date:"2019-05-23T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-redis"},{slug:"Docker-docker-spring-boot",title:"springboot项目打包成docker",date:"2019-06-12T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-spring-boot"},{slug:"Docker-onlyoffice-usage",title:"OnlyOffice\u002FDocumentServer搭建",date:"2019-01-05T12:20:26.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-onlyoffice-usage"}],children:[]},{folderName:"Linux命令",articles:[{slug:"Linux命令-chown和chmod的区别",date:"2020-10-23T07:35:41.000Z",title:"Chown和chmod的区别",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-chown和chmod的区别"},{slug:"Linux命令-curl",title:"curl",date:"2017-08-31T20:49:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-curl"},{slug:"Linux命令-diff",title:"diff",date:"2017-09-03T21:05:20.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-diff"},{slug:"Linux命令-different-bin-sbin",title:"\u002Fbin,\u002Fsbin,\u002Fusr\u002Fsbin,\u002Fusr\u002Fbin目录区别",date:"2019-01-29T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-different-bin-sbin"},{slug:"Linux命令-linux-alias",title:"alias",date:"2017-07-14T21:19:45.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-linux-alias"},{slug:"Linux命令-nano",title:"nano",date:"2017-08-19T15:28:42.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-nano"},{slug:"Linux命令-passwd",date:"2020-10-26T08:44:41.000Z",title:"Passwd",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-passwd"},{slug:"Linux命令-rm",title:"rm递归删除",date:"2018-01-19T08:37:24.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-rm"},{slug:"Linux命令-scp",title:"scp",date:"2017-07-10T22:58:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-scp"},{slug:"Linux命令-sed",title:"sed",date:"2017-11-26T15:32:39.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-sed"},{slug:"Linux命令-tail",title:"tail",date:"2017-08-28T09:51:05.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-tail"},{slug:"Linux命令-vim-keycue",title:"vim常用快捷键",date:"2019-01-18T08:41:24.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-vim-keycue"},{slug:"Linux命令-vim",title:"vim",date:"2017-07-14T22:58:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-vim"}],children:[]},{folderName:"centos",articles:[{slug:"centos-yum安装提示无可用包",title:"yum安装提示无可用包",date:"2020-05-17T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002Fcentos\u002Fcentos-yum安装提示无可用包"}],children:[]},{folderName:"nginx",articles:[{slug:"nginx-google-cloud-nginx",title:"nginx安装配置(Google Cloud，centos7)",date:V,path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-google-cloud-nginx"},{slug:"nginx-nginx-https-config",title:"nginx中的https配置小记",date:"2020-03-07T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-nginx-https-config"},{slug:"nginx-nginx-setting",title:"nginx相关配置",date:C,path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-nginx-setting"}],children:[]},{folderName:"插件工具",articles:[{slug:"插件工具-ServerStatus",title:"安装serverstatus监听服务器状态",date:"2018-03-08T12:30:38.000Z",path:"\u002Fwiki\u002FLinux\u002F插件工具\u002F插件工具-ServerStatus"},{slug:"插件工具-htop",title:"htop",date:"2018-07-22T16:04:52.000Z",path:"\u002Fwiki\u002FLinux\u002F插件工具\u002F插件工具-htop"}],children:[]},{folderName:"搞机",articles:[{slug:"搞机-斐讯n1刷机",title:"斐讯n1刷入armbian记录",date:"2019-04-22T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002F搞机\u002F搞机-斐讯n1刷机"}],children:[]}]}]}],fetch:{},mutations:S}}("text","element","\n","span","p","code","token","a","div","nuxt-content-highlight","pre","line-numbers","true",-1,"icon","icon-link","comment","language-text",3,"h3","开发环境搭建","启动kafka","测试","创建一个topic","参考",2,"h2","2019-02-26T00:00:00.000Z","2018-09-04T13:53:00.000Z","Linux-macOS上kafka搭建","macOS环境kafka环境搭建[译]","2019-05-28T00:00:00.000Z","启动zookeeper","启动Zookeeper","初始化-producer-console","初始化 Producer console","初始化-consumer-console","初始化 Consumer console","language-bash","警告处理","blockquote","test","\u002Fwiki\u002FLinux\u002FLinux-macOS上kafka搭建","2021-11-18T05:30:57.444Z",void 0,"2017-06-04T00:00:00.000Z","2017-07-14T10:51:30.000Z","2018-02-28T21:34:42.000Z","2019-03-07T00:00:00.000Z","2017-08-24T10:24:01.000Z")));