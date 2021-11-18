__NUXT_JSONP__("/wiki/content/%E5%BE%AE%E6%9C%8D%E5%8A%A1-feign-pass-http-header", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z){return {data:[{},{article:{slug:y,title:z,layout:"page",date:A,collection:B,toc:[],body:{type:"root",children:[{type:b,tag:"blockquote",props:{},children:[{type:a,value:n},{type:b,tag:v,props:{},children:[{type:a,value:"参考自 "},{type:b,tag:"a",props:{href:C,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:C}]}]},{type:a,value:n}]},{type:a,value:n},{type:b,tag:v,props:{},children:[{type:a,value:"在使用SpringCloud开发微服务项目时，从A服务调用B服务的接口，会出现请求头参数出错的情况，一半情况下是不会出现任何问题的，但是当我们在请求头中添加了token认证信息的时候，也就是说，我们的服务需要认证的时候就会导致Feign请求出现401的错误。"}]},{type:a,value:n},{type:b,tag:v,props:{},children:[{type:a,value:"解决办法，利用拦截器，在每次调用Feign请求之前，把Header内的信息给到新请求中。添加一个拦截器:"}]},{type:a,value:n},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-java","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:c,props:{className:[d,w,e]},children:[{type:a,value:"@Configuration"}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,w,e]},children:[{type:a,value:"@EnableFeignClients"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"basePackages "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"\"com.majiaxueyuan.feign\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"class"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"FeignClientsConfigurationCustom"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"implements"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"RequestInterceptor"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n\n    "},{type:b,tag:c,props:{className:[d,w,e]},children:[{type:a,value:"@Override"}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"void"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"apply"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"RequestTemplate"}]},{type:a,value:" template"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:"\n\n        "},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"RequestAttributes"}]},{type:a,value:" requestAttributes "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"RequestContextHolder"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"getRequestAttributes"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:G}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"requestAttributes "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"=="}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"return"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"HttpServletRequest"}]},{type:a,value:" request "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"ServletRequestAttributes"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:" requestAttributes"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"getRequest"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,J]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]}]},{type:a,value:" headerNames "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"getHeaderNames"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:G}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"headerNames "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"!="}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"headerNames"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:t}]},{type:a,value:" name "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:a,value:" headerNames"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,J]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:t}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:L}]}]},{type:a,value:" values "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:a,value:M},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"getHeaders"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:N}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"values"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:t}]},{type:a,value:" value "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:p}]},{type:a,value:" values"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:P}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"System"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:"out"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"println"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"name "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:S}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:"\"---\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:S}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"\n                    template"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"header"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:","}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:n}]}]}]}]},dir:"\u002Fwiki\u002FJava\u002F微服务",path:U,extension:".md",createdAt:V,updatedAt:V},prev:{slug:"Docker-onlyoffice-usage",title:"OnlyOffice\u002FDocumentServer搭建",date:"2019-01-05T12:20:26.000Z"},next:{slug:"Linux命令-different-bin-sbin",title:"\u002Fbin,\u002Fsbin,\u002Fusr\u002Fsbin,\u002Fusr\u002Fbin目录区别",date:"2019-01-29T00:00:00.000Z"},scrollTop:W,sideCategory:[{folderName:X,articles:[{slug:"Java-java-8-install-on-centos",title:"阿里云centos上安装jdk1.8（yum）",date:"2019-09-16T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FJava-java-8-install-on-centos"},{slug:"Java-java-mvn-proxy",title:"mvn走代理的方法",date:"2019-06-08T18:54:39.000Z",path:"\u002Fwiki\u002FJava\u002FJava-java-mvn-proxy"},{slug:"Java-java-plan",title:"JAVA学习路线",date:"2019-05-17T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FJava-java-plan"}],children:[{folderName:"3part",articles:[{slug:"3part-kafka-basic",title:"kafka基本概念理解",date:"2019-05-28T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002F3part\u002F3part-kafka-basic"},{slug:"3part-类库reflections的使用",title:"类库reflections的使用",date:Y,path:"\u002Fwiki\u002FJava\u002F3part\u002F3part-类库reflections的使用"}],children:[]},{folderName:X,articles:[{slug:"Java-Collection及其衍生",date:"2020-10-23T06:09:35.000Z",title:"Collection及其衍生",path:"\u002Fwiki\u002FJava\u002FJava\u002FJava-Collection及其衍生"}],children:[]},{folderName:"Mybatis",articles:[{slug:"Mybatis-mybatis-dyna-sql",title:"mybatis中#和$的简单理解",date:"2019-07-02T10:08:02.000Z",path:"\u002Fwiki\u002FJava\u002FMybatis\u002FMybatis-mybatis-dyna-sql"},{slug:"Mybatis-mybatis-foreach",title:"mybatis中foreach以及注意事项",date:"2019-07-02T09:59:01.000Z",path:"\u002Fwiki\u002FJava\u002FMybatis\u002FMybatis-mybatis-foreach"},{slug:"Mybatis-mybatis-resultmap",title:"mybatis一对多、一对一",date:Z,path:"\u002Fwiki\u002FJava\u002FMybatis\u002FMybatis-mybatis-resultmap"}],children:[]},{folderName:"Redis",articles:[{slug:"Redis-redis-basic",title:"1.Redis基本理解及使用",date:"2019-06-04T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FRedis\u002FRedis-redis-basic"},{slug:"Redis-redis-jedis",title:"2.Redis客户端：Jedis",date:"2019-06-05T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FRedis\u002FRedis-redis-jedis"},{slug:"Redis-redis-sping-cache",title:"3.Spring中的缓存抽象及SpringDataRedis使用",date:"2019-06-06T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FRedis\u002FRedis-redis-sping-cache"}],children:[]},{folderName:"Spring",articles:[{slug:"Spring-SpringMVC中的ModelModelMapModelAndView",date:"2020-10-26T08:54:36.000Z",title:"SpringMVC中的Model、ModelMap、ModelAndView(转载)",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-SpringMVC中的ModelModelMapModelAndView"},{slug:"Spring-java-requestmap",title:"Java @RequestMapping、@GetMapping、@PostMapping",date:"2019-07-04T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-java-requestmap"},{slug:"Spring-java-static-autowired",title:"Spring @Autowired注解在utils静态工具类非controller普通类中使用(转）",date:"2020-01-02T16:47:10.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-java-static-autowired"},{slug:"Spring-spring-validation",title:"spring之表单验证",date:"2019-06-14T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-spring-validation"},{slug:"Spring-springboot-jsonconvert",title:"springboot之Json转换类型嵌套问题",date:"2019-06-17T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-springboot-jsonconvert"},{slug:"Spring-springboot-kaptcha",title:"springboot之kaptcha验证码",date:"2019-05-22T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-springboot-kaptcha"},{slug:"Spring-springboot-schedule",title:"spring框中简单的任务调度",date:"2019-09-25T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-springboot-schedule"}],children:[]},{folderName:"idea",articles:[{slug:"idea-2019-01-28",title:"(JB)idea添加项目依赖、以及打包问题",date:"2019-01-28T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002Fidea\u002Fidea-2019-01-28"},{slug:"idea-error-javacTask-x",title:"[idea] 编译报错 javacTask:源发行版 8 需要目标发行版 1.8",date:Y,path:"\u002Fwiki\u002FJava\u002Fidea\u002Fidea-error-javacTask-x"},{slug:"idea-idea-j-warnning",title:"intelliJ IDEA:JAVA文件名黄色J警告问题",date:"2019-05-27T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002Fidea\u002Fidea-idea-j-warnning"},{slug:"idea-idea-svn",title:"(JB)IDEA导入svn项目二三谈",date:Z,path:"\u002Fwiki\u002FJava\u002Fidea\u002Fidea-idea-svn"},{slug:"idea-springboot-start",title:"intelliJ idea:springboot项目初始化",date:"2018-10-26T13:56:11.000Z",path:"\u002Fwiki\u002FJava\u002Fidea\u002Fidea-springboot-start"}],children:[]},{folderName:"代码段",articles:[{slug:"代码段-java-8-rsa",title:"rsa加密解密",date:"2019-09-10T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002F代码段\u002F代码段-java-8-rsa"},{slug:"代码段-springboot-download-config",title:"(spring boot)虚拟目录配置、文件下载",date:"2019-01-29T17:23:27.000Z",path:"\u002Fwiki\u002FJava\u002F代码段\u002F代码段-springboot-download-config"}],children:[]},{folderName:B,articles:[{slug:y,title:z,date:A,path:U}],children:[]}]}]}],fetch:{},mutations:W}}("text","element","span","token","punctuation"," ","(",")","class-name","keyword","operator","function",".","\n",";","=","{","\n        ","}","String","\n                ","p","annotation","\n            ","微服务-feign-pass-http-header","feign请求头丢失","2019-01-28T16:24:12.000Z","微服务","https:\u002F\u002Fmy.oschina.net\u002Fliaoxiang521\u002Fblog\u002F1788488","string","public","\n    ","if","null","Enumeration","generics","\u003C","\u003E"," request","while","hasMoreElements","nextElement","name","\n                    ","+"," value","\u002Fwiki\u002FJava\u002F微服务\u002F微服务-feign-pass-http-header","2021-11-18T11:07:10.233Z",void 0,"Java","2019-03-15T09:36:52.000Z","2018-11-06T14:47:57.000Z")));