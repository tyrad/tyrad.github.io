__NUXT_JSONP__("/wiki/content/Spring-java-static-autowired", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L){return {data:[{},{article:{slug:v,title:w,layout:"page",date:x,toc:[],body:{type:"root",children:[{type:b,tag:j,props:{},children:[{type:a,value:"转载自： "},{type:b,tag:"a",props:{href:"http:\u002F\u002Fwww.yangxiaozong.com\u002FSpring%20@Autowired%E6%B3%A8%E8%A7%A3%E5%9C%A8utils%E9%9D%99%E6%80%81%E5%B7%A5%E5%85%B7%E7%B1%BB%E9%9D%9Econtroller%E6%99%AE%E9%80%9A%E7%B1%BB%E4%B8%AD%E4%BD%BF.html",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"http:\u002F\u002Fwww.yangxiaozong.com\u002FSpring%20@Autowired注解在utils静态工具类非controller普通类中使.html"}]}]},{type:a,value:h},{type:b,tag:j,props:{},children:[{type:a,value:"说明: 我们经常要使用@Autowired注解注入Service或者Mapper接口，在service层中注入其它的service接口或者mapper接口都是可以的，但是如果我们要在我们自己封装的Utils工具类中或者非controller普通类中使用@Autowired注解注入Service或者Mapper接口，直接注入是不可能的，因为Utils使用了静态的方法，我们是无法直接使用非静态接口的，当我们遇到这样的问题，我们就要想办法解决了。"}]},{type:a,value:h},{type:b,tag:j,props:{},children:[{type:a,value:"我们有两种方法解决这个问题，第一种是注解方式，第二种是xml配置方式，下面是我们在utils中使用@Autowired注解的方法："}]},{type:a,value:h},{type:b,tag:j,props:{},children:[{type:a,value:"加注解@PostConstruct"}]},{type:a,value:h},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-java","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:c,props:{className:[d,m,e]},children:[{type:a,value:"@Component"}]},{type:a,value:" \n"},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"class"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m,e]},children:[{type:a,value:z}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"ItemService"}]},{type:a,value:" itemService"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,m,e]},children:[{type:a,value:z}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"ItemMapper"}]},{type:a,value:" itemMapper"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:" testUtils"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:t},{type:b,tag:c,props:{className:[d,m,e]},children:[{type:a,value:"@PostConstruct"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:"    \n            testUtils "},{type:b,tag:c,props:{className:[d,"operator"]},children:[{type:a,value:"="}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"this"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:" \n\n    "},{type:b,tag:c,props:{className:[d,"comment"]},children:[{type:a,value:"\u002F\u002Futils工具类中使用service和mapper接口的方法例子，用\"testUtils.xxx.方法\" 就可以了      "}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:C}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"test"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"Item"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"itemMapper"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"insert"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"itemService"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"queryAll"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:j,props:{},children:[{type:a,value:"我们在init方法中使用以下注解就可以了，时间上这个init()的方法是可以自己随便定义的，注意：inti()方法里面不用写任何东西，跟我这样的就绝对ok了，不用看网上其他人瞎掰！\nxml配置"}]},{type:a,value:h},{type:b,tag:j,props:{},children:[{type:a,value:"第二种方法就是xml配置的方式，也是很简单的，我们可以把init()方法上的@PostConstruct注解去掉，在spring-comtext.xml中配置以下bean就好了，里面什么内容都不用写，是不是很简单"}]},{type:a,value:h},{type:b,tag:"bean",props:{id:"testUtils",className:["这里写utils类的包全路径名"],"init-method":D},children:[{type:a,value:h}]}]},dir:"\u002Fwiki\u002FJava\u002FSpring",path:G,extension:".md",createdAt:H,updatedAt:H},prev:{slug:"web-flex-shrink-demo",title:"flex实战:使用flex-shrink举例",date:"2019-11-24T00:00:00.000Z"},next:{slug:"Mass-ms-env",title:"sandboxReceipt",date:"2020-05-06T00:00:00.000Z"},scrollTop:I,sideCategory:[{folderName:J,articles:[{slug:"Java-java-8-install-on-centos",title:"阿里云centos上安装jdk1.8（yum）",date:"2019-09-16T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FJava-java-8-install-on-centos"},{slug:"Java-java-mvn-proxy",title:"mvn走代理的方法",date:"2019-06-08T18:54:39.000Z",path:"\u002Fwiki\u002FJava\u002FJava-java-mvn-proxy"},{slug:"Java-java-plan",title:"JAVA学习路线",date:"2019-05-17T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FJava-java-plan"}],children:[{folderName:"3part",articles:[{slug:"3part-kafka-basic",title:"kafka基本概念理解",date:"2019-05-28T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002F3part\u002F3part-kafka-basic"},{slug:"3part-类库reflections的使用",title:"类库reflections的使用",date:K,path:"\u002Fwiki\u002FJava\u002F3part\u002F3part-类库reflections的使用"}],children:[]},{folderName:J,articles:[{slug:"Java-Collection及其衍生",date:"2020-10-23T06:09:35.000Z",title:"Collection及其衍生",path:"\u002Fwiki\u002FJava\u002FJava\u002FJava-Collection及其衍生"}],children:[]},{folderName:"Mybatis",articles:[{slug:"Mybatis-mybatis-dyna-sql",title:"mybatis中#和$的简单理解",date:"2019-07-02T10:08:02.000Z",path:"\u002Fwiki\u002FJava\u002FMybatis\u002FMybatis-mybatis-dyna-sql"},{slug:"Mybatis-mybatis-foreach",title:"mybatis中foreach以及注意事项",date:"2019-07-02T09:59:01.000Z",path:"\u002Fwiki\u002FJava\u002FMybatis\u002FMybatis-mybatis-foreach"},{slug:"Mybatis-mybatis-resultmap",title:"mybatis一对多、一对一",date:L,path:"\u002Fwiki\u002FJava\u002FMybatis\u002FMybatis-mybatis-resultmap"}],children:[]},{folderName:"Redis",articles:[{slug:"Redis-redis-basic",title:"1.Redis基本理解及使用",date:"2019-06-04T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FRedis\u002FRedis-redis-basic"},{slug:"Redis-redis-jedis",title:"2.Redis客户端：Jedis",date:"2019-06-05T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FRedis\u002FRedis-redis-jedis"},{slug:"Redis-redis-sping-cache",title:"3.Spring中的缓存抽象及SpringDataRedis使用",date:"2019-06-06T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FRedis\u002FRedis-redis-sping-cache"}],children:[]},{folderName:"Spring",articles:[{slug:"Spring-SpringMVC中的ModelModelMapModelAndView",date:"2020-10-26T08:54:36.000Z",title:"SpringMVC中的Model、ModelMap、ModelAndView(转载)",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-SpringMVC中的ModelModelMapModelAndView"},{slug:"Spring-java-requestmap",title:"Java @RequestMapping、@GetMapping、@PostMapping",date:"2019-07-04T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-java-requestmap"},{slug:v,title:w,date:x,path:G},{slug:"Spring-spring-validation",title:"spring之表单验证",date:"2019-06-14T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-spring-validation"},{slug:"Spring-springboot-jsonconvert",title:"springboot之Json转换类型嵌套问题",date:"2019-06-17T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-springboot-jsonconvert"},{slug:"Spring-springboot-kaptcha",title:"springboot之kaptcha验证码",date:"2019-05-22T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-springboot-kaptcha"},{slug:"Spring-springboot-schedule",title:"spring框中简单的任务调度",date:"2019-09-25T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-springboot-schedule"}],children:[]},{folderName:"idea",articles:[{slug:"idea-2019-01-28",title:"(JB)idea添加项目依赖、以及打包问题",date:"2019-01-28T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002Fidea\u002Fidea-2019-01-28"},{slug:"idea-error-javacTask-x",title:"[idea] 编译报错 javacTask:源发行版 8 需要目标发行版 1.8",date:K,path:"\u002Fwiki\u002FJava\u002Fidea\u002Fidea-error-javacTask-x"},{slug:"idea-idea-j-warnning",title:"intelliJ IDEA:JAVA文件名黄色J警告问题",date:"2019-05-27T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002Fidea\u002Fidea-idea-j-warnning"},{slug:"idea-idea-svn",title:"(JB)IDEA导入svn项目二三谈",date:L,path:"\u002Fwiki\u002FJava\u002Fidea\u002Fidea-idea-svn"},{slug:"idea-springboot-start",title:"intelliJ idea:springboot项目初始化",date:"2018-10-26T13:56:11.000Z",path:"\u002Fwiki\u002FJava\u002Fidea\u002Fidea-springboot-start"}],children:[]},{folderName:"代码段",articles:[{slug:"代码段-java-8-rsa",title:"rsa加密解密",date:"2019-09-10T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002F代码段\u002F代码段-java-8-rsa"},{slug:"代码段-springboot-download-config",title:"(spring boot)虚拟目录配置、文件下载",date:"2019-01-29T17:23:27.000Z",path:"\u002Fwiki\u002FJava\u002F代码段\u002F代码段-springboot-download-config"}],children:[]},{folderName:"微服务",articles:[{slug:"微服务-feign-pass-http-header",title:"feign请求头丢失",date:"2019-01-28T16:24:12.000Z",path:"\u002Fwiki\u002FJava\u002F微服务\u002F微服务-feign-pass-http-header"}],children:[]}]}]}],fetch:{},mutations:I}}("text","element","span","token","punctuation"," ","keyword","\n","\n    ","p",";","class-name","annotation","public","function","(",")",".","{","\n\n    ","}","Spring-java-static-autowired","Spring @Autowired注解在utils静态工具类非controller普通类中使用(转）","2020-01-02T16:47:10.000Z","TestUtils","@Autowired","private","static","void","init","record","\n            testUtils","\u002Fwiki\u002FJava\u002FSpring\u002FSpring-java-static-autowired","2021-11-18T07:37:48.000Z",void 0,"Java","2019-03-15T09:36:52.000Z","2018-11-06T14:47:57.000Z")));