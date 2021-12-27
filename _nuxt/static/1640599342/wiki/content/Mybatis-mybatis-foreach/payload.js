__NUXT_JSONP__("/wiki/content/Mybatis-mybatis-foreach", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J){return {data:[{},{article:{slug:s,title:t,layout:"page",date:u,collection:v,toc:[],body:{type:"root",children:[{type:b,tag:o,props:{},children:[{type:a,value:"sql中判断"},{type:b,tag:p,props:{},children:[{type:a,value:"in"}]},{type:a,value:"常用到"},{type:b,tag:p,props:{},children:[{type:a,value:"\u003Cforeach\u003E\u003C\u002Fforeach\u003E"}]},{type:a,value:",可以比较方便的进行拼接。 注意需要考虑集合元素的个数,以免出现sql的异常问题。"}]},{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"举例如下:"}]},{type:a,value:g},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-sql","line-numbers"]},children:[{type:b,tag:p,props:{},children:[{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"-- mapper调用"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"-- void clearItemNotBelongTo(@Param(\"belong\") String belong, @Param(\"idSet\") Set\u003CString\u003E idSet);"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"--"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:" id"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"clearItemNotBelongTo\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"DELETE"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"FROM"}]},{type:a,value:"\n        datav_screen_item_template "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"AS"}]},{type:a,value:" tep\n    "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"WHERE"}]},{type:a,value:"\n        tep"},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:a,value:"belong_id "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"#{belong}"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:a,value:" test"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"idSet !=null and idSet.size !=0\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"AND"}]},{type:a,value:" tep"},{type:b,tag:c,props:{className:[d,x]},children:[{type:a,value:y}]},{type:a,value:"ID "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"NOT"}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"IN"}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"foreach collection"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"idSet\""}]},{type:a,value:" item"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"id\""}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"index"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"index\""}]},{type:a,value:"\n                    "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"open"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\"(\""}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"close"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\")\""}]},{type:a,value:" separator"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\",\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"\n            "},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"#{id}"}]},{type:a,value:q},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:a,value:"foreach"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:"blockquote",props:{},children:[{type:a,value:g},{type:b,tag:o,props:{},children:[{type:a,value:"参考: "},{type:b,tag:"a",props:{href:A,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:A}]}]},{type:a,value:g}]}]},dir:"\u002Fwiki\u002FJava\u002FMybatis",path:B,extension:".md",createdAt:C,updatedAt:C},prev:{slug:"web-html-anchor-positon",title:"调整锚点跳转偏移(转)",date:"2019-07-02T09:12:21.000Z"},next:{slug:D,title:E,date:F},scrollTop:G,sideCategory:[{folderName:H,articles:[{slug:"Java-java-8-install-on-centos",title:"阿里云centos上安装jdk1.8（yum）",date:"2019-09-16T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FJava-java-8-install-on-centos"},{slug:"Java-java-mvn-proxy",title:"mvn走代理的方法",date:"2019-06-08T18:54:39.000Z",path:"\u002Fwiki\u002FJava\u002FJava-java-mvn-proxy"},{slug:"Java-java-plan",title:"JAVA学习路线",date:"2019-05-17T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FJava-java-plan"}],children:[{folderName:"3part",articles:[{slug:"3part-kafka-basic",title:"kafka基本概念理解",date:"2019-05-28T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002F3part\u002F3part-kafka-basic"},{slug:"3part-类库reflections的使用",title:"类库reflections的使用",date:I,path:"\u002Fwiki\u002FJava\u002F3part\u002F3part-类库reflections的使用"}],children:[]},{folderName:H,articles:[{slug:"Java-Collection及其衍生",date:"2020-10-23T06:09:35.000Z",title:"Collection及其衍生",path:"\u002Fwiki\u002FJava\u002FJava\u002FJava-Collection及其衍生"}],children:[]},{folderName:v,articles:[{slug:D,title:E,date:F,path:"\u002Fwiki\u002FJava\u002FMybatis\u002FMybatis-mybatis-dyna-sql"},{slug:s,title:t,date:u,path:B},{slug:"Mybatis-mybatis-resultmap",title:"mybatis一对多、一对一",date:J,path:"\u002Fwiki\u002FJava\u002FMybatis\u002FMybatis-mybatis-resultmap"}],children:[]},{folderName:"Redis",articles:[{slug:"Redis-redis-basic",title:"1.Redis基本理解及使用",date:"2019-06-04T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FRedis\u002FRedis-redis-basic"},{slug:"Redis-redis-jedis",title:"2.Redis客户端：Jedis",date:"2019-06-05T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FRedis\u002FRedis-redis-jedis"},{slug:"Redis-redis-sping-cache",title:"3.Spring中的缓存抽象及SpringDataRedis使用",date:"2019-06-06T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FRedis\u002FRedis-redis-sping-cache"}],children:[]},{folderName:"Spring",articles:[{slug:"Spring-SpringMVC中的ModelModelMapModelAndView",date:"2020-10-26T08:54:36.000Z",title:"SpringMVC中的Model、ModelMap、ModelAndView(转载)",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-SpringMVC中的ModelModelMapModelAndView"},{slug:"Spring-java-requestmap",title:"Java @RequestMapping、@GetMapping、@PostMapping",date:"2019-07-04T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-java-requestmap"},{slug:"Spring-java-static-autowired",title:"Spring @Autowired注解在utils静态工具类非controller普通类中使用(转）",date:"2020-01-02T16:47:10.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-java-static-autowired"},{slug:"Spring-spring-validation",title:"spring之表单验证",date:"2019-06-14T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-spring-validation"},{slug:"Spring-springboot-jsonconvert",title:"springboot之Json转换类型嵌套问题",date:"2019-06-17T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-springboot-jsonconvert"},{slug:"Spring-springboot-kaptcha",title:"springboot之kaptcha验证码",date:"2019-05-22T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-springboot-kaptcha"},{slug:"Spring-springboot-schedule",title:"spring框中简单的任务调度",date:"2019-09-25T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-springboot-schedule"}],children:[]},{folderName:"idea",articles:[{slug:"idea-2019-01-28",title:"(JB)idea添加项目依赖、以及打包问题",date:"2019-01-28T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002Fidea\u002Fidea-2019-01-28"},{slug:"idea-error-javacTask-x",title:"[idea] 编译报错 javacTask:源发行版 8 需要目标发行版 1.8",date:I,path:"\u002Fwiki\u002FJava\u002Fidea\u002Fidea-error-javacTask-x"},{slug:"idea-idea-j-warnning",title:"intelliJ IDEA:JAVA文件名黄色J警告问题",date:"2019-05-27T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002Fidea\u002Fidea-idea-j-warnning"},{slug:"idea-idea-svn",title:"(JB)IDEA导入svn项目二三谈",date:J,path:"\u002Fwiki\u002FJava\u002Fidea\u002Fidea-idea-svn"},{slug:"idea-springboot-start",title:"intelliJ idea:springboot项目初始化",date:"2018-10-26T13:56:11.000Z",path:"\u002Fwiki\u002FJava\u002Fidea\u002Fidea-springboot-start"}],children:[]},{folderName:"代码段",articles:[{slug:"代码段-java-8-rsa",title:"rsa加密解密",date:"2019-09-10T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002F代码段\u002F代码段-java-8-rsa"},{slug:"代码段-springboot-download-config",title:"(spring boot)虚拟目录配置、文件下载",date:"2019-01-29T17:23:27.000Z",path:"\u002Fwiki\u002FJava\u002F代码段\u002F代码段-springboot-download-config"}],children:[]},{folderName:"微服务",articles:[{slug:"微服务-feign-pass-http-header",title:"feign请求头丢失",date:"2019-01-28T16:24:12.000Z",path:"\u002Fwiki\u002FJava\u002F微服务\u002F微服务-feign-pass-http-header"}],children:[]}]}]}],fetch:{},mutations:G}}("text","element","span","token","operator","keyword","\n","=","string","\u003C","\u003E","comment","\n    "," ","p","code","\n        ","\u002F","Mybatis-mybatis-foreach","mybatis中foreach以及注意事项","2019-07-02T09:59:01.000Z","Mybatis","select","punctuation",".","if","https:\u002F\u002Fblog.csdn.net\u002Fu011781521\u002Farticle\u002Fdetails\u002F79669180","\u002Fwiki\u002FJava\u002FMybatis\u002FMybatis-mybatis-foreach","2021-12-27T10:01:01.246Z","Mybatis-mybatis-dyna-sql","mybatis中#和$的简单理解","2019-07-02T10:08:02.000Z",void 0,"Java","2019-03-15T09:36:52.000Z","2018-11-06T14:47:57.000Z")));