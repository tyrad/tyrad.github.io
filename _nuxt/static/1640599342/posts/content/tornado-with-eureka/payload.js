__NUXT_JSONP__("/posts/content/tornado-with-eureka", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P){return {data:[{},{article:{slug:"tornado-with-eureka",description:r,title:"将Python Tornado注册到Eureka",tags:["tornado","微服务"],date:"2020-06-25 11:32:22 +0800",toc:[],body:{type:w,children:[{type:b,tag:o,props:{},children:[{type:a,value:r}]},{type:a,value:f},{type:a,value:f},{type:b,tag:x,props:{id:y},children:[{type:b,tag:s,props:{href:"#%E4%BD%BF%E7%94%A8python-eureka-client",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:y}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:b,tag:s,props:{href:"https:\u002F\u002Fgithub.com\u002Fkeijack\u002Fpython-eureka-client\u002Fblob\u002Fmaster\u002FREADME.zh_cn.md",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"python-eureka-client 项目地址"}]}]},{type:a,value:f},{type:b,tag:D,props:{className:[E]},children:[{type:b,tag:F,props:{className:[G,"language-python"]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"EUREKA_SERVER_LIST "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"http:\u002F\u002F127.0.0.1:8761\u002Feureka\""}]},{type:a,value:"\nSERVER_HOST "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"10.10.38.20\""}]},{type:a,value:"\nSERVER_PORT "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"8000"}]},{type:a,value:"\n\n\n"},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"def"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"register_eureka"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:":"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"# 配置Euraka 文档见: https:\u002F\u002Fgithub.com\u002Fkeijack\u002Fpython-eureka-client\u002Fblob\u002Fmaster\u002FREADME.zh_cn.md"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"# 业务需求：仅提供对外的服务即可"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:"# The flowing code will register your server to eureka server and also start to send heartbeat every 30 seconds"}]},{type:a,value:"\n    eureka_client"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"."}]},{type:a,value:"init_registry_client"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"eureka_server"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:"EUREKA_SERVER_LIST"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"\n                                       app_name"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"economic-model\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"\n                                       instance_host"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:"SERVER_HOST"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"\n                                       instance_port"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:"SERVER_PORT"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"然后在程序的入口函数中调用该方法。"}]},{type:a,value:f},{type:b,tag:x,props:{id:I},children:[{type:b,tag:s,props:{href:"#java%E4%B8%AD%E8%B0%83%E7%94%A8",ariaHidden:z,tabIndex:A},children:[{type:b,tag:c,props:{className:[B,C]},children:[]}]},{type:a,value:I}]},{type:a,value:f},{type:b,tag:"ol",props:{},children:[{type:a,value:f},{type:b,tag:J,props:{},children:[{type:a,value:"入口函数添加注解"},{type:b,tag:t,props:{},children:[{type:a,value:"@EnableFeignClients"}]}]},{type:a,value:f},{type:b,tag:J,props:{},children:[{type:a,value:"调用如:"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:D,props:{className:[E]},children:[{type:b,tag:F,props:{className:[G,"language-java"]},children:[{type:b,tag:t,props:{},children:[{type:b,tag:c,props:{className:[d,n,e]},children:[{type:a,value:"@FeignClient"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"name "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"ECONOMIC-MODEL\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,n,e]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"\u002Fdemo\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"public"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"interface"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"ITornadoFeignService"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"{"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,n,e]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"\u002Fget\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"Object"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"getDepartInfo"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,n,e]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"phone\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:N}]},{type:a,value:" phone"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n,e]},children:[{type:a,value:M}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"\"password\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:N}]},{type:a,value:" password"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:";"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"}"}]},{type:a,value:f}]}]}]}]},excerpt:{type:w,children:[{type:b,tag:o,props:{},children:[{type:a,value:r}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Ftornado-with-eureka",extension:".md",createdAt:O,updatedAt:O},prev:{slug:"fastlane+Jenkins自动化部署",title:"fastlane+Jenkins自动化部署iOS项目"},next:{slug:"Rime-setting-2020",title:"鼠须管(Rime)使用配置(2020)"},scrollTop:P}],fetch:{},mutations:P}}("text","element","span","token","punctuation","\n"," ","operator","=","string","(",")","\n    ","annotation","p",",","class-name","简单记录如将tornado注册到eureka, 将tornado引入微服务体系。","a","code","keyword","comment","root","h1","使用python-eureka-client","true",-1,"icon","icon-link","div","nuxt-content-highlight","pre","line-numbers","function","java中调用","li","@RequestMapping","value ","@RequestParam","String","2021-12-27T10:01:01.242Z",void 0)));