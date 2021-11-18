__NUXT_JSONP__("/wiki/content/Docker-Docker%E5%9F%BA%E7%A1%80%E7%AC%94%E8%AE%B0", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU){return {data:[{},{article:{slug:al,title:am,layout:"page",date:N,collection:an,toc:[{id:O,depth:P,text:O},{id:Q,depth:B,text:Q},{id:R,depth:B,text:R},{id:H,depth:P,text:H},{id:S,depth:B,text:S},{id:T,depth:B,text:T},{id:U,depth:B,text:U},{id:ao,depth:B,text:ap},{id:V,depth:B,text:V},{id:W,depth:P,text:W},{id:X,depth:B,text:X},{id:Y,depth:P,text:Y},{id:Z,depth:B,text:Z}],body:{type:"root",children:[{type:b,tag:_,props:{id:O},children:[{type:b,tag:h,props:{href:"#%E5%9F%BA%E6%9C%AC%E8%AE%A4%E8%AF%86",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:O}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"Docker是linux容器(当然也有"},{type:b,tag:f,props:{},children:[{type:a,value:"windows container docker"}]},{type:a,value:")的一种封装,提供了简单操作的接口。"}]},{type:a,value:d},{type:b,tag:C,props:{id:Q},children:[{type:b,tag:h,props:{href:"#%E5%AE%B9%E5%99%A8%E4%B8%8E%E8%99%9A%E6%8B%9F%E6%9C%BA",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:Q}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"容器和虚拟机具有类似的资源隔离和分配优势，但功能不同，因为容器虚拟化操作系统而不是硬件。容器更便携，更高效("},{type:b,tag:h,props:{href:aq,rel:[ab,ac,ad],target:ae},children:[{type:a,value:aq}]},{type:a,value:")。"}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:b,tag:af,props:{alt:"20190104154659144347828.png",src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F20190104154659144347828.png"},children:[]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"容器是应用层的抽象，它将代码和依赖关系打包在一起。 多个容器可以在同一台机器上运行，并与其他容器共享操作系统内核，每个容器在用户空间中作为独立进程运行。"}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"虚拟机（VM）是物理硬件的抽象，将一台服务器转变为多台服务器。 虚拟机管理程序允许多台虚拟机在一台计算机上运行。 每个VM都包含操作系统的完整副本，应用程序，必要的二进制文件和库 - 占用数十GB。"}]},{type:a,value:d},{type:b,tag:C,props:{id:R},children:[{type:b,tag:h,props:{href:"#%E4%BC%98%E7%82%B9",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:R}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"轻量: 只对需要的bin\u002Flib打包\n部署快: 比虚拟机强\n弹性伸缩: Kubernetes、Swam、Mesos这类开源、方便、好使的容器管理平台有着非常强大的弹性管理能力（服务访问峰差很大的场景，可以做弹性适配）"}]},{type:a,value:d},{type:b,tag:_,props:{id:H},children:[{type:b,tag:h,props:{href:"#%E5%B8%B8%E7%94%A8%E5%91%BD%E4%BB%A4",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:H}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"1). 镜像（image）"}]},{type:a,value:d},{type:b,tag:E,props:{},children:[{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:"docker的运行环境，可以理解成’快照’"}]},{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:"镜像是一个虚拟的概念，由多层文件系统联合组成"}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"2). 容器（container）"}]},{type:a,value:d},{type:b,tag:E,props:{},children:[{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:"镜像运行中的’实体’"}]},{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:"image和container的关系,可以类比面向对象中的类和实例，容器是镜像运行中的实体"}]},{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:"容器销毁，容器中存储的信息会丢失。但是容器的存储可以绑定数据卷（volume）或宿主机目录"}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"3). 仓库"}]},{type:a,value:d},{type:b,tag:E,props:{},children:[{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:"镜像(image)仓库,用户根据需要拉取镜像"}]},{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:"有官方的仓库，也可以搭私有仓库"}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:C,props:{id:S},children:[{type:b,tag:h,props:{href:"#docker",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:S}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"查看版本"}]},{type:a,value:d},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:f,props:{},children:[{type:a,value:" docker --version \n"}]}]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"查看空间占用"}]},{type:a,value:d},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:f,props:{},children:[{type:a,value:" docker system "},{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:"df"}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:C,props:{id:T},children:[{type:b,tag:h,props:{href:"#image",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:T}]},{type:a,value:d},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#镜像名称"}]},{type:a,value:"\ndocker search "},{type:b,tag:c,props:{className:[e,z]},children:[{type:a,value:I}]},{type:a,value:"image name"},{type:b,tag:c,props:{className:[e,z]},children:[{type:a,value:J}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#拉取 "}]},{type:a,value:"\ndocker pull "},{type:b,tag:c,props:{className:[e,t]},children:[{type:a,value:K}]},{type:a,value:"选项"},{type:b,tag:c,props:{className:[e,t]},children:[{type:a,value:L}]},{type:a,value:y},{type:b,tag:c,props:{className:[e,t]},children:[{type:a,value:K}]},{type:a,value:"Docker Registry 地址"},{type:b,tag:c,props:{className:[e,t]},children:[{type:a,value:K}]},{type:a,value:":端口号"},{type:b,tag:c,props:{className:[e,t]},children:[{type:a,value:L}]},{type:a,value:"\u002F"},{type:b,tag:c,props:{className:[e,t]},children:[{type:a,value:L}]},{type:a,value:"    仓库名"},{type:b,tag:c,props:{className:[e,t]},children:[{type:a,value:K}]},{type:a,value:":标签"},{type:b,tag:c,props:{className:[e,t]},children:[{type:a,value:L}]},{type:a,value:"\ndocker pull ubuntu:18.04 "},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"##例如,参数不提供地址会从官网镜像获取镜像;参数无版本号会拉取最新的（latest）"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#删除镜像"}]},{type:a,value:"\ndocker image "},{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:ag}]},{type:a,value:"  "},{type:b,tag:c,props:{className:[e,z]},children:[{type:a,value:I}]},{type:a,value:"IMAGE ID"},{type:b,tag:c,props:{className:[e,z]},children:[{type:a,value:J}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#搜索镜像(无法指定版本号)"}]},{type:a,value:"\ndocker search centos \n"}]}]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"官方镜像地址为: "},{type:b,tag:h,props:{href:ar,rel:[ab,ac,ad],target:ae},children:[{type:a,value:ar}]}]},{type:a,value:d},{type:b,tag:C,props:{id:U},children:[{type:b,tag:h,props:{href:"#container",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:U}]},{type:a,value:d},{type:b,tag:A,props:{id:"运行-docker-run-"},children:[{type:b,tag:h,props:{href:"#%E8%BF%90%E8%A1%8C-docker-run-",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:"运行 "},{type:b,tag:f,props:{},children:[{type:a,value:"docker run ..."}]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"举例:"}]},{type:a,value:d},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#运行centos的echo命令:"}]},{type:a,value:"\ndocker run --name ctName  centos "},{type:b,tag:c,props:{className:[e,v,w]},children:[{type:a,value:as}]},{type:a,value:y},{type:b,tag:c,props:{className:[e,x]},children:[{type:a,value:"'hello wolrd'"}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#操作centos命令行: "}]},{type:a,value:"\ndocker run  --name ctname -t -i --rm centos "},{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:ah}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#后台运行nginx: "}]},{type:a,value:"\ndocker run --name web -d -p "},{type:b,tag:c,props:{className:[e,at]},children:[{type:a,value:au}]},{type:a,value:":80 -v \u002FUsers\u002Ftyrad\u002FDocuments\u002Fwebapp:\u002Fusr\u002Fshare\u002Fnginx\u002Fhtml nginx\n"}]}]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"参数解释"}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"--name"}]},{type:a,value:":    为运行起来的container(实体)起个名字\n"},{type:b,tag:f,props:{},children:[{type:a,value:"-t"}]},{type:a,value:":        为容器分配一个终端(terminal)绑定到容器的输出上\n"},{type:b,tag:f,props:{},children:[{type:a,value:"-i "}]},{type:a,value:":       让容器的标准输入保持打开\n"},{type:b,tag:f,props:{},children:[{type:a,value:av}]},{type:a,value:":    容器目录B映射到本机目录A\n"},{type:b,tag:f,props:{},children:[{type:a,value:"-d"}]},{type:a,value:":        后台运行,类似& 、nohup、supervisor\n"},{type:b,tag:f,props:{},children:[{type:a,value:"--rm"}]},{type:a,value:":      退出后销毁容器,否则销毁需要手动 docker container rm ${name}\n"},{type:b,tag:f,props:{},children:[{type:a,value:"-d -p 8080:80"}]},{type:a,value:":  将容器的80端口映射到本机的80端口\n"},{type:b,tag:f,props:{},children:[{type:a,value:"-dit"}]},{type:a,value:":     等同于 -d -i -t"}]},{type:a,value:d},{type:b,tag:A,props:{id:aw},children:[{type:b,tag:h,props:{href:"#%E6%9F%A5%E7%9C%8B%E6%9F%90%E4%B8%AA%E5%AE%B9%E5%99%A8%E7%9A%84%E5%90%AF%E5%8A%A8%E9%94%99%E8%AF%AF%E6%97%A5%E5%BF%97",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:aw}]},{type:a,value:d},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:f,props:{},children:[{type:a,value:" docker logs "},{type:b,tag:c,props:{className:[e,z]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#容器id#\u003E"}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:A,props:{id:ax},children:[{type:b,tag:h,props:{href:"#%E4%B8%8E%E8%BF%90%E8%A1%8C%E5%AE%B9%E5%99%A8%E4%BA%A4%E4%BA%92",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:ax}]},{type:a,value:d},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,"language-text"]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"#ctName为容器名\ndocker attach ctName \ndocker exec -it  ctName  bash \n"}]}]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"docker attach 是 Docker 自带的命令，为容器分配一个终端绑定到容器的输出上 。但是exit时容器也会停止。 exec 作用同上。但是exit时容器不会停止。 需要配合 -it 使用。当然也可以运行其他命令，如"}]},{type:a,value:d},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"➜  ~ docker "},{type:b,tag:c,props:{className:[e,v,w]},children:[{type:a,value:"exec"}]},{type:a,value:"  web  "},{type:b,tag:c,props:{className:[e,v,w]},children:[{type:a,value:as}]},{type:a,value:y},{type:b,tag:c,props:{className:[e,x]},children:[{type:a,value:"'hello'"}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:A,props:{id:ay},children:[{type:b,tag:h,props:{href:"#%E5%81%9C%E6%AD%A2",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:ay}]},{type:a,value:d},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#退出容器的终端 :  "}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,v,w]},children:[{type:a,value:"exit"}]},{type:a,value:"  或 Ctrl+d\n"},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#停止运行中的容器:  "}]},{type:a,value:"\ndocker container  stop "},{type:b,tag:c,props:{className:[e,$]},children:[{type:a,value:aa}]},{type:a,value:"    \n"}]}]}]},{type:a,value:d},{type:b,tag:A,props:{id:az},children:[{type:b,tag:h,props:{href:"#%E9%87%8D%E6%96%B0%E5%90%AF%E5%8A%A8",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:az}]},{type:a,value:d},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#关闭中容器重启 "}]},{type:a,value:"\ndocker container    start "},{type:b,tag:c,props:{className:[e,$]},children:[{type:a,value:aa}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#容器重新启动     "}]},{type:a,value:"\ndocker container restart "},{type:b,tag:c,props:{className:[e,$]},children:[{type:a,value:aa}]},{type:a,value:aA}]}]}]},{type:a,value:d},{type:b,tag:A,props:{id:aB},children:[{type:b,tag:h,props:{href:"#%E5%88%A0%E9%99%A4",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:aB}]},{type:a,value:d},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#删除指定的（停止状态）的容器"}]},{type:a,value:"\ndocker container "},{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:ag}]},{type:a,value:"   "},{type:b,tag:c,props:{className:[e,$]},children:[{type:a,value:aa}]},{type:a,value:aA}]}]}]},{type:a,value:d},{type:b,tag:A,props:{id:aC},children:[{type:b,tag:h,props:{href:"#%E5%AE%B9%E5%99%A8%E7%9A%84%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:aC}]},{type:a,value:d},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#导出容器快照"}]},{type:a,value:F},{type:b,tag:c,props:{className:[e,v,w]},children:[{type:a,value:"export"}]},{type:a,value:" 9b804b1b "},{type:b,tag:c,props:{className:[e,z]},children:[{type:a,value:J}]},{type:a,value:" Desktop\u002Fnginx.tar\n"},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#导入快照 (可以是网络地址或本地路径)"}]},{type:a,value:F},{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:"import"}]},{type:a,value:" http:\u002F\u002Fexample.com\u002Fexampleimage.tgz example\u002Fimagerepo \n"}]}]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"快照export和save的区别是。 save会保存用户的操作，常用用途：保存作案现场并时候分析。"}]},{type:a,value:d},{type:b,tag:A,props:{id:aD},children:[{type:b,tag:h,props:{href:"#image%E9%95%9C%E5%83%8F%E7%9A%84%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:aD}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"导出:"}]},{type:a,value:d},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"docker save  imageId  "},{type:b,tag:c,props:{className:[e,z]},children:[{type:a,value:J}]},{type:a,value:" ~\u002FDesktop\u002Fimport-nginx.tar\n"}]}]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:b,tag:af,props:{alt:"20190104154659476470874.png",src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F20190104154659476470874.png"},children:[]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"导入:"}]},{type:a,value:d},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"docker load "},{type:b,tag:c,props:{className:[e,z]},children:[{type:a,value:I}]},{type:a,value:" ~\u002FDesktop\u002Fimport-nginx.tar   \n"}]}]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"导入并重命名\n"},{type:b,tag:af,props:{alt:"2019010415465948227928.png",src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F2019010415465948227928.png"},children:[]}]},{type:a,value:d},{type:b,tag:C,props:{id:ao},children:[{type:b,tag:h,props:{href:"#%E6%95%B0%E6%8D%AE%E5%8D%B7volume",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:ap}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"容器销毁时,容器内的数据都会销毁。为了数据的持久化需要用到数据卷(volume),也可以将目录映射(-v)。"}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"需要注意:"}]},{type:a,value:d},{type:b,tag:E,props:{},children:[{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:"volume容器创建时就初始化，容器运行时就可以使用其中的文件"}]},{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:"volume能在不同的容器间共享和重用"}]},{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:"对volume中数据的操作会马上生效"}]},{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:"对volume中数据的操作不会影响容器本身"}]},{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:"volume证明周期独立于容器的生命周期。即使删除容器，volume仍然会存在，没有任何容器使用的volume也不会被Docker删除。"}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"(原文："},{type:b,tag:h,props:{href:aE,rel:[ab,ac,ad],target:ae},children:[{type:a,value:aE}]},{type:a,value:" )"}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:H}]},{type:a,value:d},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#创建数据卷"}]},{type:a,value:"\n➜  docker volume create docker-volume\ndocker-volume\n"},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#查看"}]},{type:a,value:"\n➜  docker volume "},{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:"ls"}]},{type:a,value:"\nDRIVER              VOLUME NAME\n"},{type:b,tag:c,props:{className:[e,v,w]},children:[{type:a,value:"local"}]},{type:a,value:"               docker-volume \n"},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#查看具体信息"}]},{type:a,value:"\n➜  docker volume inspect docker-volume\n"},{type:b,tag:c,props:{className:[e,t]},children:[{type:a,value:K}]},{type:a,value:aF},{type:b,tag:c,props:{className:[e,t]},children:[{type:a,value:ai}]},{type:a,value:"\n        "},{type:b,tag:c,props:{className:[e,x]},children:[{type:a,value:"\"CreatedAt\""}]},{type:b,tag:c,props:{className:[e,v,w]},children:[{type:a,value:D}]},{type:a,value:y},{type:b,tag:c,props:{className:[e,x]},children:[{type:a,value:"\"2018-12-26T08:43:45Z\""}]},{type:a,value:G},{type:b,tag:c,props:{className:[e,x]},children:[{type:a,value:"\"Driver\""}]},{type:b,tag:c,props:{className:[e,v,w]},children:[{type:a,value:D}]},{type:a,value:y},{type:b,tag:c,props:{className:[e,x]},children:[{type:a,value:aG}]},{type:a,value:G},{type:b,tag:c,props:{className:[e,x]},children:[{type:a,value:"\"Labels\""}]},{type:b,tag:c,props:{className:[e,v,w]},children:[{type:a,value:D}]},{type:a,value:y},{type:b,tag:c,props:{className:[e,t]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[e,t]},children:[{type:a,value:aj}]},{type:a,value:G},{type:b,tag:c,props:{className:[e,x]},children:[{type:a,value:"\"Mountpoint\""}]},{type:b,tag:c,props:{className:[e,v,w]},children:[{type:a,value:D}]},{type:a,value:y},{type:b,tag:c,props:{className:[e,x]},children:[{type:a,value:"\"\u002Fvar\u002Flib\u002Fdocker\u002Fvolumes\u002Fdocker-volume\u002F_data\""}]},{type:a,value:G},{type:b,tag:c,props:{className:[e,x]},children:[{type:a,value:"\"Name\""}]},{type:b,tag:c,props:{className:[e,v,w]},children:[{type:a,value:D}]},{type:a,value:y},{type:b,tag:c,props:{className:[e,x]},children:[{type:a,value:"\"docker-volume\""}]},{type:a,value:G},{type:b,tag:c,props:{className:[e,x]},children:[{type:a,value:"\"Options\""}]},{type:b,tag:c,props:{className:[e,v,w]},children:[{type:a,value:D}]},{type:a,value:y},{type:b,tag:c,props:{className:[e,t]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[e,t]},children:[{type:a,value:aj}]},{type:a,value:G},{type:b,tag:c,props:{className:[e,x]},children:[{type:a,value:"\"Scope\""}]},{type:b,tag:c,props:{className:[e,v,w]},children:[{type:a,value:D}]},{type:a,value:y},{type:b,tag:c,props:{className:[e,x]},children:[{type:a,value:aG}]},{type:a,value:aF},{type:b,tag:c,props:{className:[e,t]},children:[{type:a,value:aj}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,t]},children:[{type:a,value:L}]},{type:a,value:d},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#删除"}]},{type:a,value:"\n➜ docker volume "},{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:ag}]},{type:a,value:" docker-volume\n"}]}]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"数据卷 是被设计用来持久化数据的，它的生命周期独立于容器，Docker 不会在容器被删除后自动删除 数据卷，并且也不存在垃圾回收这样的机制来处理没有任何容器引用的 数据卷。如果需要在删除容器的同时移除数据卷。可以在删除容器的时候使用 docker rm -v 这个命令。\n无主的数据卷可能会占据很多空间，要清理请使用以下命令"}]},{type:a,value:d},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"docker volume prune\n"}]}]}]},{type:a,value:d},{type:b,tag:A,props:{id:aH},children:[{type:b,tag:h,props:{href:"#%E6%95%B0%E6%8D%AE%E6%8B%B7%E8%B4%9D",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:aH}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"拷贝到宿主机"}]},{type:a,value:d},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"docker "},{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:M}]},{type:a,value:y},{type:b,tag:c,props:{className:[e,z]},children:[{type:a,value:I}]},{type:a,value:"containerId"},{type:b,tag:c,props:{className:[e,z]},children:[{type:a,value:J}]},{type:a,value:":\u002Ffile\u002Fpath\u002Fwithin\u002Fcontainer \u002Fhost\u002Fpath\u002Ftarget  \n"},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#举例"}]},{type:a,value:F},{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:M}]},{type:a,value:"  ctName:\u002Fanaconda-post.log ~\u002FDesktop\u002Fdo2pdf\n"}]}]}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"拷贝内容到容器"}]},{type:a,value:d},{type:b,tag:E,props:{},children:[{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:"-v挂载数据卷"}]},{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:"也可以用docker cp"}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:f,props:{},children:[{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#   将主机\u002Fwww\u002Frunoob目录拷贝到容器96f7f14e99ab中，目录重命名为www。 "}]},{type:a,value:F},{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:M}]},{type:a,value:" \u002Fwww\u002Frunoob 96f7f14e99ab:\u002Fwww\n"},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#将\u002Fetc\u002Fnginx\u002Fnginx.conf 文件拷贝本机目录下 "}]},{type:a,value:F},{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:M}]},{type:a,value:" web:\u002Fetc\u002Fnginx\u002Fconf.d \u002FUsers\u002Ftyrad\u002FDocuments\u002Fnginx\n"},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#\u002Fetc\u002Fnginx\u002Fconf.d目录拷贝到本机目录下"}]},{type:a,value:F},{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:M}]},{type:a,value:" web:\u002Fetc\u002Fnginx\u002Fnginx.conf  \u002FUsers\u002Ftyrad\u002FDocuments\u002Fnginx\n"}]}]}]},{type:a,value:d},{type:b,tag:A,props:{id:aI},children:[{type:b,tag:h,props:{href:"#%E7%9B%AE%E5%BD%95%E6%98%A0%E5%B0%84",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:aI}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:av}]},{type:a,value:": 目录A为本机目录，B为容器目录"}]},{type:a,value:d},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"docker run --name web  -d    -p "},{type:b,tag:c,props:{className:[e,at]},children:[{type:a,value:au}]},{type:a,value:":80   -v    \u002FUsers\u002Ftyrad\u002FDocuments\u002Fwebapp:\u002Fusr\u002Fshare\u002Fnginx\u002Fhtml    -v \u002FUsers\u002Ftyrad\u002FDocuments\u002Fnginx\u002Fnginx.conf:\u002Fetc\u002Fnginx\u002Fnginx.conf    -v  \u002FUsers\u002Ftyrad\u002FDocuments\u002Fnginx\u002Fconf.d:\u002Fetc\u002Fnginx\u002Fconf.d       nginx\n"}]}]}]},{type:a,value:d},{type:b,tag:C,props:{id:V},children:[{type:b,tag:h,props:{href:"#%E7%BD%91%E7%BB%9C",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:V}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"旧的链接方式 "},{type:b,tag:f,props:{},children:[{type:a,value:"--link"}]},{type:a,value:D}]},{type:a,value:d},{type:b,tag:g,props:{},children:[{type:a,value:"如果你之前有 Docker 使用经验，你可能已经习惯了使用 --link 参数来使容器互联。随着 Docker 网络的完善，强烈建议大家将容器加入自定义的 Docker 网络来连接多个容器，而不是使用 --link 参数。"}]},{type:a,value:d},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"docker network create -d bridge my-net\n"},{type:b,tag:c,props:{className:[e,i]},children:[{type:a,value:"#测试,容器之间通过name是可以ping通的"}]},{type:a,value:aJ},{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:ah}]},{type:a,value:aJ},{type:b,tag:c,props:{className:[e,u]},children:[{type:a,value:ah}]},{type:a,value:d}]}]}]},{type:a,value:d},{type:b,tag:_,props:{id:W},children:[{type:b,tag:h,props:{href:"#%E6%8F%90%E4%BA%A4%E9%95%9C%E5%83%8F",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:W}]},{type:a,value:d},{type:b,tag:C,props:{id:X},children:[{type:b,tag:h,props:{href:"#%E6%8F%90%E4%BA%A4%E5%88%B0%E5%AE%98%E6%96%B9%E4%BB%93%E5%BA%93",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:X}]},{type:a,value:d},{type:b,tag:E,props:{},children:[{type:a,value:d},{type:b,tag:s,props:{},children:[{type:a,value:"注册"}]},{type:a,value:d},{type:b,tag:s,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"docker login"}]}]},{type:a,value:d},{type:b,tag:s,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"docker push"}]},{type:a,value:",镜像名有要求,格式为"},{type:b,tag:f,props:{},children:[{type:a,value:"用户名\u002F镜像名"}]},{type:a,value:",如"},{type:b,tag:f,props:{},children:[{type:a,value:"tyrad\u002Fnginx"}]}]},{type:a,value:d}]},{type:a,value:d},{type:b,tag:_,props:{id:Y},children:[{type:b,tag:h,props:{href:"#%E9%A2%9D%E5%A4%96%E7%9A%84",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:Y}]},{type:a,value:d},{type:b,tag:C,props:{id:Z},children:[{type:b,tag:h,props:{href:"#centos%E5%BC%80%E6%9C%BA%E5%90%AF%E5%8A%A8%E9%85%8D%E7%BD%AE",ariaHidden:j,tabIndex:k},children:[{type:b,tag:c,props:{className:[l,m]},children:[]}]},{type:a,value:Z}]},{type:a,value:d},{type:b,tag:n,props:{className:[o]},children:[{type:b,tag:p,props:{className:[q,r]},children:[{type:b,tag:f,props:{},children:[{type:a,value:"systemctl "},{type:b,tag:c,props:{className:[e,v,w]},children:[{type:a,value:"enable"}]},{type:a,value:" docker\n"}]}]}]}]},dir:"\u002Fwiki\u002FLinux\u002FDocker",path:aK,extension:".md",createdAt:aL,updatedAt:aL},prev:{slug:aM,title:aN,date:aO},next:{slug:"idea-springboot-start",title:"intelliJ idea:springboot项目初始化",date:"2018-10-26T13:56:11.000Z"},scrollTop:aP,sideCategory:[{folderName:"Linux",articles:[{slug:"Linux-2019-02-26",title:"(转)AWS ec2使用教程",date:ak,path:"\u002Fwiki\u002FLinux\u002FLinux-2019-02-26"},{slug:"Linux-2019-03-06",title:"yum 404问题",date:ak,path:"\u002Fwiki\u002FLinux\u002FLinux-2019-03-06"},{slug:"Linux-Apache反向代理到ngrok",title:"Apache反向代理到ngrok",date:"2017-07-18T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-Apache反向代理到ngrok"},{slug:"Linux-CentOS LAMP 环境配置 + wordpress (阿里云ECS)",title:"CentOS LAMP 环境配置 + wordpress (阿里云ECS)",date:aQ,path:"\u002Fwiki\u002FLinux\u002FLinux-CentOS LAMP 环境配置 + wordpress (阿里云ECS)"},{slug:"Linux-CentOS LAMP 配置https",title:"CentOS LAMP 配置https",date:aQ,path:"\u002Fwiki\u002FLinux\u002FLinux-CentOS LAMP 配置https"},{slug:"Linux-SSH-Keys",title:"How To Set Up SSH Keys",date:"2017-08-19T16:14:59.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-SSH-Keys"},{slug:"Linux-centOS LNMP 环境配置",title:"centOS LNMP 环境配置",date:aR,path:"\u002Fwiki\u002FLinux\u002FLinux-centOS LNMP 环境配置"},{slug:"Linux-centos-install-config",title:"CentOS装机配置",date:"2020-07-17T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-centos-install-config"},{slug:"Linux-centos-vue-springbot-env",title:"CentOS环境下打包配置(vue\u002Fspringbot)",date:"2020-03-08T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-centos-vue-springbot-env"},{slug:"Linux-fabric",title:"fabric部署网站应用",date:"2018-01-13T14:22:40.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-fabric"},{slug:"Linux-google-cloud-ss",title:"Google Cloud安装SS服务",date:aS,path:"\u002Fwiki\u002FLinux\u002FLinux-google-cloud-ss"},{slug:"Linux-install-ngrok",title:"ngrok",date:"2017-07-13T18:19:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-install-ngrok"},{slug:"Linux-install-redis-by-homebrew",title:"homebrew安装redis以及常用命令",date:aT,path:"\u002Fwiki\u002FLinux\u002FLinux-install-redis-by-homebrew"},{slug:"Linux-macOS JAVA开发环境配置",title:"macOS JAVA开发环境配置",date:"2016-10-01T17:15:33.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-macOS JAVA开发环境配置"},{slug:"Linux-macOS上kafka搭建",title:"macOS环境kafka环境搭建[译]",date:"2019-05-28T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-macOS上kafka搭建"},{slug:"Linux-macOS上搭建RAP环境",title:"macOS上搭建RAP环境",date:aU,path:"\u002Fwiki\u002FLinux\u002FLinux-macOS上搭建RAP环境"},{slug:"Linux-macOS同时启动多个tomcat",title:"macOS同时启动多个tomcat",date:aU,path:"\u002Fwiki\u002FLinux\u002FLinux-macOS同时启动多个tomcat"},{slug:"Linux-pd-centos-java",title:"pd安装centOS虚拟机并配置Java环境",date:aR,path:"\u002Fwiki\u002FLinux\u002FLinux-pd-centos-java"},{slug:"Linux-speed-test",title:"测试延迟 tcping、httpstat",date:ak,path:"\u002Fwiki\u002FLinux\u002FLinux-speed-test"},{slug:"Linux-su命令提示Authentication failure的解决办法",title:"su命令提示Authentication failure的解决办法",date:"2017-09-13T10:18:11.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-su命令提示Authentication failure的解决办法"},{slug:"Linux-tomcat配置https自签名证书 && iOS访问https接口",title:"tomcat配置https自签名证书 && iOS访问https接口",date:"2016-12-06 20:08",path:"\u002Fwiki\u002FLinux\u002FLinux-tomcat配置https自签名证书 && iOS访问https接口"},{slug:"Linux-tomcat配置自签名的https",title:"tomcat配置自签名的https.md",date:N,path:"\u002Fwiki\u002FLinux\u002FLinux-tomcat配置自签名的https"},{slug:"Linux-type-speed",title:"打字训练",date:"2019-08-01T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-type-speed"},{slug:"Linux-vps免密的一些配置",date:"2020-11-11T08:27:38.000Z",title:"Vps免密的一些配置",path:"\u002Fwiki\u002FLinux\u002FLinux-vps免密的一些配置"},{slug:"Linux-yum-aliyun-repo",title:"将yum源更换为国内的阿里云源",date:"2017-07-14T12:57:48.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux-yum-aliyun-repo"}],children:[{folderName:an,articles:[{slug:"Docker-2019-03-07",title:"nginx + php + mysql 环境搭建",date:aT,path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-2019-03-07"},{slug:al,title:am,date:N,path:aK},{slug:"Docker-docker-nginx-how-to-vist-localhost",title:"docker(nginx)内访问宿主机localhost",date:"2019-01-29T10:24:51.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-nginx-how-to-vist-localhost"},{slug:"Docker-docker-posgres",title:"docker中使用postgresSQL",date:"2019-05-22T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-posgres"},{slug:"Docker-docker-redis",title:"docker中使用redis",date:"2019-05-23T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-redis"},{slug:"Docker-docker-spring-boot",title:"springboot项目打包成docker",date:"2019-06-12T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-docker-spring-boot"},{slug:"Docker-onlyoffice-usage",title:"OnlyOffice\u002FDocumentServer搭建",date:"2019-01-05T12:20:26.000Z",path:"\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-onlyoffice-usage"}],children:[]},{folderName:"Linux命令",articles:[{slug:"Linux命令-chown和chmod的区别",date:"2020-10-23T07:35:41.000Z",title:"Chown和chmod的区别",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-chown和chmod的区别"},{slug:"Linux命令-curl",title:"curl",date:"2017-08-31T20:49:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-curl"},{slug:"Linux命令-diff",title:"diff",date:"2017-09-03T21:05:20.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-diff"},{slug:"Linux命令-different-bin-sbin",title:"\u002Fbin,\u002Fsbin,\u002Fusr\u002Fsbin,\u002Fusr\u002Fbin目录区别",date:"2019-01-29T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-different-bin-sbin"},{slug:"Linux命令-linux-alias",title:"alias",date:"2017-07-14T21:19:45.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-linux-alias"},{slug:"Linux命令-nano",title:"nano",date:"2017-08-19T15:28:42.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-nano"},{slug:"Linux命令-passwd",date:"2020-10-26T08:44:41.000Z",title:"Passwd",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-passwd"},{slug:aM,title:aN,date:aO,path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-rm"},{slug:"Linux命令-scp",title:"scp",date:"2017-07-10T22:58:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-scp"},{slug:"Linux命令-sed",title:"sed",date:"2017-11-26T15:32:39.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-sed"},{slug:"Linux命令-tail",title:"tail",date:"2017-08-28T09:51:05.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-tail"},{slug:"Linux命令-vim-keycue",title:"vim常用快捷键",date:"2019-01-18T08:41:24.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-vim-keycue"},{slug:"Linux命令-vim",title:"vim",date:"2017-07-14T22:58:10.000Z",path:"\u002Fwiki\u002FLinux\u002FLinux命令\u002FLinux命令-vim"}],children:[]},{folderName:"nginx",articles:[{slug:"nginx-google-cloud-nginx",title:"nginx安装配置(Google Cloud，centos7)",date:aS,path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-google-cloud-nginx"},{slug:"nginx-nginx-https-config",title:"nginx中的https配置小记",date:"2020-03-07T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-nginx-https-config"},{slug:"nginx-nginx-setting",title:"nginx相关配置",date:N,path:"\u002Fwiki\u002FLinux\u002Fnginx\u002Fnginx-nginx-setting"}],children:[]},{folderName:"centos",articles:[{slug:"centos-yum安装提示无可用包",title:"yum安装提示无可用包",date:"2020-05-17T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002Fcentos\u002Fcentos-yum安装提示无可用包"}],children:[]},{folderName:"插件工具",articles:[{slug:"插件工具-ServerStatus",title:"安装serverstatus监听服务器状态",date:"2018-03-08T12:30:38.000Z",path:"\u002Fwiki\u002FLinux\u002F插件工具\u002F插件工具-ServerStatus"},{slug:"插件工具-htop",title:"htop",date:"2018-07-22T16:04:52.000Z",path:"\u002Fwiki\u002FLinux\u002F插件工具\u002F插件工具-htop"}],children:[]},{folderName:"搞机",articles:[{slug:"搞机-斐讯n1刷机",title:"斐讯n1刷入armbian记录",date:"2019-04-22T00:00:00.000Z",path:"\u002Fwiki\u002FLinux\u002F搞机\u002F搞机-斐讯n1刷机"}],children:[]}]}]}],fetch:{},mutations:aP}}("text","element","span","\n","token","code","p","a","comment","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","line-numbers","language-bash","li","punctuation","function","builtin","class-name","string"," ","operator","h4",3,"h3",":","ol","\ndocker ",",\n        ","常用命令","\u003C","\u003E","[","]","cp","2018-09-04T13:53:00.000Z","基本认识",2,"容器与虚拟机","优点","docker","image","container","网络","提交镜像","提交到官方仓库","额外的","centos开机启动配置","h2","variable","${name或返回的id}","nofollow","noopener","noreferrer","_blank","img","rm","bash","{","}","2019-02-26T00:00:00.000Z","Docker-Docker基础笔记","Docker基础笔记","Docker","数据卷volume","数据卷(volume)","https:\u002F\u002Fwww.docker.com\u002Fresources\u002Fwhat-container","https:\u002F\u002Fhub.docker.com\u002F","echo","number","8088","-v A:B","查看某个容器的启动错误日志","与运行容器交互","停止","重新启动"," \n","删除","容器的导入导出","image镜像的导入导出","https:\u002F\u002Fblog.csdn.net\u002Fdream_broken\u002Farticle\u002Fdetails\u002F52314993","\n    ","\"local\"","数据拷贝","目录映射","\ndocker run --name test1 -it  --rm   --network my-net centos ","\u002Fwiki\u002FLinux\u002FDocker\u002FDocker-Docker基础笔记","2021-11-18T11:07:10.233Z","Linux命令-rm","rm递归删除","2018-01-19T08:37:24.000Z",void 0,"2017-06-04T00:00:00.000Z","2017-07-14T10:51:30.000Z","2018-02-28T21:34:42.000Z","2019-03-07T00:00:00.000Z","2017-08-24T10:24:01.000Z")));