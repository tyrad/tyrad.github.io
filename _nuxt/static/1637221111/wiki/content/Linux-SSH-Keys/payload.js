__NUXT_JSONP__("/wiki/content/Linux-SSH-Keys", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar){return {data:[{},{article:{slug:L,title:M,layout:"page",date:N,toc:[{id:O,depth:z,text:P},{id:Q,depth:z,text:R},{id:S,depth:z,text:T},{id:U,depth:z,text:V},{id:W,depth:z,text:X},{id:Y,depth:3,text:Z}],body:{type:"root",children:[{type:b,tag:"blockquote",props:{},children:[{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"机翻出处: "},{type:b,tag:o,props:{href:_,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:_}]}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:A,props:{id:O},children:[{type:b,tag:o,props:{href:"#about-ssh-keys",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:P}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"使用SSH密钥提供更安全的登录虚拟专用服务器的方法，而不是单独使用密码。\n一个密码最终可能会被暴力攻击破解，但SSH密钥几乎不可能通过暴力来破译。\n生成密钥对为您提供两个长字符串：公共和私钥。 您可以将公钥放在任何服务器上，然后通过与已经具有私钥的客户端连接来解锁它。 当两者匹配时，系统解锁而不需要密码。\n您可以通过用密码保护私钥来提高安全性。"}]},{type:a,value:e},{type:b,tag:A,props:{id:Q},children:[{type:b,tag:o,props:{href:"#step-onecreate-the-rsa-key-pair",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:R}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"生成密钥对:"}]},{type:a,value:e},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,"language-ruby"]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"ssh"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:$}]},{type:a,value:"keygen "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:$}]},{type:a,value:"t rsa\n"}]}]}]},{type:a,value:e},{type:b,tag:A,props:{id:S},children:[{type:b,tag:o,props:{href:"#step-twostore-the-keys-and-passphrase",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:T}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"输入步骤一的命令后会出现如下提示:"}]},{type:a,value:e},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,G]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"Enter "},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aa}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:E}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:ab}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:F}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:B}]},{type:a,value:ad}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"您可以按Enter键，将文件保存到家目录（此处示例用户为"},{type:b,tag:i,props:{},children:[{type:a,value:"demo"}]},{type:a,value:B}]},{type:a,value:e},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,G]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"Enter passphrase "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:F}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:af}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:B}]},{type:a,value:ad}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"是否要使用密码？ 输入密码确实有其优点：密钥的安全性，无论加密如何，仍然取决于其他人不可见的事实。 如果通过密码保护的私钥属于未经授权的用户拥有，则他们将无法登录到其相关帐户，直到找出密码，为黑客用户购买一些额外的时间。 当然，使用密码短语的唯一缺点是，每次使用密钥对时都必须输入密码。"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"整个关键生成过程如下所示："}]},{type:a,value:e},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,G]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"ssh-keygen -t rsa\nGenerating public\u002Fprivate rsa key pair.\nEnter "},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aa}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:E}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:ab}]},{type:a,value:ac},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:F}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:B}]},{type:a,value:": \nEnter passphrase "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:F}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:af}]},{type:a,value:ag},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:B}]},{type:a,value:": \nEnter same passphrase again: \nYour identification has been saved "},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:E}]},{type:a,value:" \u002Fhome\u002Fdemo\u002F.ssh\u002Fid_rsa.\nYour public key has been saved "},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:E}]},{type:a,value:" \u002Fhome\u002Fdemo\u002F.ssh\u002Fid_rsa.pub.\nThe key fingerprint is:\n4a:dd:0a:c6:35:4e:3f:ed:27:38:8c:74:44:4d:93:67 demo@a\nThe key's randomart image is:\n+--"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"["}]},{type:a,value:" RSA "},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"2048"}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"]"}]},{type:a,value:"----+\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:"          .oo.   "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:"         "},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:s}]},{type:a,value:"  o.E  "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:"        + "},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:s}]},{type:a,value:"  o   "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:s}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:s}]},{type:a,value:ah},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:" S "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:s}]},{type:a,value:"    "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:"     o + "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:C}]},{type:a,value:" +     "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:ai},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:s}]},{type:a,value:" o + o "},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:s}]},{type:a,value:"  "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:"           "},{type:b,tag:c,props:{className:[d,q,r]},children:[{type:a,value:s}]},{type:a,value:" o   "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:"                 "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:h}]},{type:a,value:"\n+-----------------+\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"公钥现在位于:"},{type:b,tag:i,props:{},children:[{type:a,value:"\u002Fhome\u002Fdemo\u002F.ssh\u002Fid_rsa.pub"}]},{type:a,value:"\n私钥现在位于:"},{type:b,tag:i,props:{},children:[{type:a,value:H}]}]},{type:a,value:e},{type:b,tag:A,props:{id:U},children:[{type:b,tag:o,props:{href:"#step-threecopy-the-public-key",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:V}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Once the key pair is generated, it's time to place the public key on the virtual server that we want to use."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"You can copy the public key into the new machine's authorized_keys file with the ssh-copy-id command. Make sure to replace the example username and IP address below."}]},{type:a,value:e},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,y]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"ssh-copy-id user@123.45.56.78\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"``\nAlternatively, you can paste in the keys using SSH:"}]},{type:a,value:e},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,y]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"cat ~\u002F.ssh\u002Fid_rsa.pub | ssh user@123.45.56.78 \"mkdir -p ~\u002F.ssh && cat \u003E\u003E  ~\u002F.ssh\u002Fauthorized_keys\"\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"No matter which command you chose, you should see something like:"}]},{type:a,value:e},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,y]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"The authenticity of host '12.34.56.78 (12.34.56.78)' can't be established.\nRSA key fingerprint is b1:2d:33:67:ce:35:4d:5f:f3:a8:cd:c0:c4:48:86:12.\nAre you sure you want to continue connecting (yes\u002Fno)? yes\nWarning: Permanently added '12.34.56.78' (RSA) to the list of known hosts.\nuser@12.34.56.78's password: \nNow try logging into the machine, with \"ssh 'user@12.34.56.78'\", and check in:\n  ~\u002F.ssh\u002Fauthorized_keys\nto make sure we haven't added extra keys that you weren't expecting.\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Now you can go ahead and log into "},{type:b,tag:o,props:{href:"mailto:user@12.34.56.78"},children:[{type:a,value:"user@12.34.56.78"}]},{type:a,value:" and you will not be prompted for a password. However, if you set a passphrase, you will be asked to enter the passphrase at that time (and whenever else you log in in the future)."}]},{type:a,value:e},{type:b,tag:A,props:{id:W},children:[{type:b,tag:o,props:{href:"#optional-step-fourdisable-the-password-for-root-login",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:X}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Once you have copied your SSH keys unto your server and ensured that you can log in with the SSH keys alone, you can go ahead and restrict the root login to only be permitted via SSH keys."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"In order to do this, open up the SSH config file:"}]},{type:a,value:e},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,y]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"sudo nano \u002Fetc\u002Fssh\u002Fsshd_config\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Within that file, find the line that includes PermitRootLogin and modify it to ensure that users can only connect with their SSH key:"}]},{type:a,value:e},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,y]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"PermitRootLogin without-password\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Put the changes into effect:"}]},{type:a,value:e},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,y]},children:[{type:b,tag:i,props:{},children:[{type:a,value:"reload ssh\n"}]}]}]},{type:a,value:e},{type:b,tag:"h3",props:{id:Y},children:[{type:b,tag:o,props:{href:"#digital-ocean-addendum",ariaHidden:t,tabIndex:u},children:[{type:b,tag:c,props:{className:[v,w]},children:[]}]},{type:a,value:Z}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"The Digital Ocean control panel allows you to add public keys to your new droplets when they're created. You can generate the SSH Key in a convenient location, such as the computer, and then upload the public key to the SSH key section."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Then, when you create a new VPS, you can choose to include that public key on the server. No root password will be emailed to you and you can log in to your new virtual private server from your chosen client. If you created a passphrase, you will be prompted to enter that upon login."}]}]},dir:"\u002Fwiki\u002FLinux",path:aj,extension:".md",createdAt:ak,updatedAt:ak},prev:{slug:"Mac-software",title:"software",date:"2017-07-26T21:35:21.000Z"},next:{slug:al,title:am,date:I},scrollTop:an,sideCategory:[{folderName:"Linux",articles:[{slug:"Linux-2019-02-26",title:"(转)AWS ec2使用教程",date:J,path:"\u002Fwiki\u002FLinux\u002FLinux-2019-02-26"},{slug:"Linux-2019-03-06",title:"yum 404问题",date:J,path:"\u002Fwiki\u002FLinux\u002FLinux-2019-03-06"},{slug:"Linux-Apache反向代理到ngrok",title:"Apache反向代理到ngrok",date:"2017-07-18T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-Apache反向代理到ngrok"},{slug:"Linux-CentOS LAMP 环境配置 + wordpress (阿里云ECS)",title:"CentOS LAMP 环境配置 + wordpress (阿里云ECS)",date:ao,path:"\u002Fwiki\u002FLinux\u002FLinux-CentOS LAMP 环境配置 + wordpress (阿里云ECS)"},{slug:"Linux-CentOS LAMP 配置https",title:"CentOS LAMP 配置https",date:ao,path:"\u002Fwiki\u002FLinux\u002FLinux-CentOS LAMP 配置https"},{slug:L,title:M,date:N,path:aj},{slug:"Linux-centOS LNMP 环境配置",title:"centOS LNMP 环境配置",date:ap,path:"\u002Fwiki\u002FLinux\u002FLinux-centOS LNMP 环境配置"},{slug:"Linux-centos-install-config",title:"CentOS装机配置",date:"2020-07-17T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-centos-install-config"},{slug:"Linux-centos-vue-springbot-env",title:"CentOS环境下打包配置(vue\u002Fspringbot)",date:"2020-03-08T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-centos-vue-springbot-env"},{slug:"Linux-fabric",title:"fabric部署网站应用",date:"2018-01-13T14:22:40.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-fabric"},{slug:"Linux-google-cloud-ss",title:"Google Cloud安装SS服务",date:aq,path:"\u002Fwiki\u002FLinux\u002FLinux-google-cloud-ss"},{slug:"Linux-install-ngrok",title:"ngrok",date:"2017-07-13T18:19:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-install-ngrok"},{slug:"Linux-install-redis-by-homebrew",title:"homebrew安装redis以及常用命令",date:ar,path:"\u002Fwiki\u002FLinux\u002FLinux-install-redis-by-homebrew"},{slug:"Linux-macOS JAVA开发环境配置",title:"macOS JAVA开发环境配置",date:"2016-10-01T17:15:33.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-macOS JAVA开发环境配置"},{slug:"Linux-macOS上kafka搭建",title:"macOS环境kafka环境搭建[译]",date:"2019-05-28T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-macOS上kafka搭建"},{slug:al,title:am,date:I,path:"\u002Fwiki\u002FLinux\u002FLinux-macOS上搭建RAP环境"},{slug:"Linux-macOS同时启动多个tomcat",title:"macOS同时启动多个tomcat",date:I,path:"\u002Fwiki\u002FLinux\u002FLinux-macOS同时启动多个tomcat"},{slug:"Linux-pd-centos-java",title:"pd安装centOS虚拟机并配置Java环境",date:ap,path:"\u002Fwiki\u002FLinux\u002FLinux-pd-centos-java"},{slug:"Linux-speed-test",title:"测试延迟 tcping、httpstat",date:J,path:"\u002Fwiki\u002FLinux\u002FLinux-speed-test"},{slug:"Linux-su命令提示Authentication failure的解决办法",title:"su命令提示Authentication failure的解决办法",date:"2017-09-13T10:18:11.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-su命令提示Authentication failure的解决办法"},{slug:"Linux-tomcat配置https自签名证书 && iOS访问https接口",title:"tomcat配置https自签名证书 && iOS访问https接口",date:"2016-12-06 20:08",path:"\u002Fwiki\u002FLinux\u002FLinux-tomcat配置https自签名证书 && iOS访问https接口"},{slug:"Linux-tomcat配置自签名的https",title:"tomcat配置自签名的https.md",date:K,path:"\u002Fwiki\u002FLinux\u002FLinux-tomcat配置自签名的https"},{slug:"Linux-type-speed",title:"打字训练",date:"2019-08-01T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-type-speed"},{slug:"Linux-vps免密的一些配置",date:"2020-11-11T08:27:38.000Z",title:"Vps免密的一些配置",path:"\u002Fwiki\u002FLinux\u002FLinux-vps免密的一些配置"},{slug:"Linux-yum-aliyun-repo",title:"将yum源更换为国内的阿里云源",date:"2017-07-14T12:57:48.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-yum-aliyun-repo"}],children:[{folderName:"Docker",articles:[{slug:"Docker-2019-03-07",title:"nginx + php + mysql 环境搭建",date:ar,path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-2019-03-07"},{slug:"Docker-Docker基础笔记",title:"Docker基础笔记",date:K,path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-Docker基础笔记"},{slug:"Docker-docker-nginx-how-to-vist-localhost",title:"docker(nginx)内访问宿主机localhost",date:"2019-01-29T10:24:51.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-nginx-how-to-vist-localhost"},{slug:"Docker-docker-posgres",title:"docker中使用postgresSQL",date:"2019-05-22T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-posgres"},{slug:"Docker-docker-redis",title:"docker中使用redis",date:"2019-05-23T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-redis"},{slug:"Docker-docker-spring-boot",title:"springboot项目打包成docker",date:"2019-06-12T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-spring-boot"},{slug:"Docker-onlyoffice-usage",title:"OnlyOffice\u002FDocumentServer搭建",date:"2019-01-05T12:20:26.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-onlyoffice-usage"}],children:[]},{folderName:"Linux命令",articles:[{slug:"Linux命令-chown和chmod的区别",date:"2020-10-23T07:35:41.000Z",title:"Chown和chmod的区别",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-chown和chmod的区别"},{slug:"Linux命令-curl",title:"curl",date:"2017-08-31T20:49:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-curl"},{slug:"Linux命令-diff",title:"diff",date:"2017-09-03T21:05:20.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-diff"},{slug:"Linux命令-different-bin-sbin",title:"\u002Fbin,\u002Fsbin,\u002Fusr\u002Fsbin,\u002Fusr\u002Fbin目录区别",date:"2019-01-29T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-different-bin-sbin"},{slug:"Linux命令-linux-alias",title:"alias",date:"2017-07-14T21:19:45.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-linux-alias"},{slug:"Linux命令-nano",title:"nano",date:"2017-08-19T15:28:42.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-nano"},{slug:"Linux命令-passwd",date:"2020-10-26T08:44:41.000Z",title:"Passwd",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-passwd"},{slug:"Linux命令-rm",title:"rm递归删除",date:"2018-01-19T08:37:24.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-rm"},{slug:"Linux命令-scp",title:"scp",date:"2017-07-10T22:58:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-scp"},{slug:"Linux命令-sed",title:"sed",date:"2017-11-26T15:32:39.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-sed"},{slug:"Linux命令-tail",title:"tail",date:"2017-08-28T09:51:05.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-tail"},{slug:"Linux命令-vim-keycue",title:"vim常用快捷键",date:"2019-01-18T08:41:24.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-vim-keycue"},{slug:"Linux命令-vim",title:"vim",date:"2017-07-14T22:58:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-vim"}],children:[]},{folderName:"centos",articles:[{slug:"centos-yum安装提示无可用包",title:"yum安装提示无可用包",date:"2020-05-17T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002Fcentos\u002Fcentos-yum安装提示无可用包"}],children:[]},{folderName:"nginx",articles:[{slug:"nginx-google-cloud-nginx",title:"nginx安装配置(Google Cloud，centos7)",date:aq,path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-google-cloud-nginx"},{slug:"nginx-nginx-https-config",title:"nginx中的https配置小记",date:"2020-03-07T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-nginx-https-config"},{slug:"nginx-nginx-setting",title:"nginx相关配置",date:K,path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-nginx-setting"}],children:[]},{folderName:"插件工具",articles:[{slug:"插件工具-ServerStatus",title:"安装serverstatus监听服务器状态",date:"2018-03-08T12:30:38.000Z",path:"\u002Fwiki\u002FLinux\u002F插件工具\u002F插件工具-ServerStatus"},{slug:"插件工具-htop",title:"htop",date:"2018-07-22T16:04:52.000Z",path:"\u002Fwiki\u002FLinux\u002F插件工具\u002F插件工具-htop"}],children:[]},{folderName:"搞机",articles:[{slug:"搞机-斐讯n1刷机",title:"斐讯n1刷入armbian记录",date:"2019-04-22T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002F搞机\u002F搞机-斐讯n1刷机"}],children:[]}]}]}],fetch:{},mutations:an}}("text","element","span","token","\n","operator","p","|","code","div","nuxt-content-highlight","pre","line-numbers","punctuation","a"," ","builtin","class-name",".","true",-1,"icon","icon-link","keyword","language-text",2,"h2",")","=","function","in","(","language-bash","\u002Fhome\u002Fdemo\u002F.ssh\u002Fid_rsa","2017-08-24T10:24:01.000Z","2019-02-26T00:00:00.000Z","2018-09-04T13:53:00.000Z","Linux-SSH-Keys","How To Set Up SSH Keys","2017-08-19T16:14:59.000Z","about-ssh-keys","About SSH Keys","step-onecreate-the-rsa-key-pair","Step One—Create the RSA Key Pair","step-twostore-the-keys-and-passphrase","Step Two—Store the Keys and Passphrase","step-threecopy-the-public-key","Step Three—Copy the Public Key","optional-step-fourdisable-the-password-for-root-login","Optional Step Four—Disable the Password for Root Login","digital-ocean-addendum","Digital Ocean Addendum","https:\u002F\u002Fwww.digitalocean.com\u002Fcommunity\u002Ftutorials\u002Fhow-to-set-up-ssh-keys--2","-","file","which"," to save the key ",":\n","empty ","for"," no passphrase","     ","      ","\u002Fwiki\u002FLinux\u002FLinux-SSH-Keys","2021-11-18T07:37:48.000Z","Linux-macOS上搭建RAP环境","macOS上搭建RAP环境",void 0,"2017-06-04T00:00:00.000Z","2017-07-14T10:51:30.000Z","2018-02-28T21:34:42.000Z","2019-03-07T00:00:00.000Z")));