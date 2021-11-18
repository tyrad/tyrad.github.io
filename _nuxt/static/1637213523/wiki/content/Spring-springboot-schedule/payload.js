__NUXT_JSONP__("/wiki/content/Spring-springboot-schedule", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao){return {data:[{},{article:{slug:J,title:K,layout:"page",date:L,collection:"SpringBoot",toc:[],body:{type:"root",children:[{type:b,tag:"p",props:{},children:[{type:a,value:"之前写过一篇关于Quartz调度的文章。 这里简单记录下spring框架中的任务调度。"}]},{type:a,value:j},{type:b,tag:M,props:{},children:[{type:a,value:j},{type:b,tag:N,props:{},children:[{type:a,value:"添加配置类，配置开启schedule."}]},{type:a,value:j}]},{type:a,value:j},{type:b,tag:O,props:{className:[P]},children:[{type:b,tag:Q,props:{className:[R,S]},children:[{type:b,tag:T,props:{},children:[{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:"@Configuration"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:"@ComponentScan"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"com.xx.mvc.service.schedule\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:"@EnableScheduling"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"TaskScheduleConfig"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:j}]}]}]},{type:a,value:j},{type:b,tag:M,props:{start:2},children:[{type:a,value:j},{type:b,tag:N,props:{},children:[{type:a,value:"添加具体的任务配置"}]},{type:a,value:j}]},{type:a,value:j},{type:b,tag:O,props:{className:[P]},children:[{type:b,tag:Q,props:{className:[R,S]},children:[{type:b,tag:T,props:{},children:[{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:"@Service"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:"@Slf4j"}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"OverdueRemindService"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,z,s]},children:[{type:a,value:"\u002F**\n     * 每天8.30点执行,计算将要超期的任务. 将任务存储到任务表\n     *\u002F"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"cron "},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"0 30 8 ? * *\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"calculateOverdueTask"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"System"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"out"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"println"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"计算将要超期的任务,当前时间：\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"+"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"DateUtils"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"now"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"\n\n\n    "},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\u002F\u002F以下选自 https:\u002F\u002Fblog.csdn.net\u002Fhry2015\u002Farticle\u002Fdetails\u002F69445289"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\u002F\u002F网上的一些其他的方法"}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"private"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"static"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"final"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:V}]},{type:a,value:" log "},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:x}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"getLogger"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"ScheduleDemo"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,z,s]},children:[{type:a,value:"\u002F**\n     * 每次方法执行完毕后，等待5s再执行此方法。\n     *  同时只能有个线程运行此方法\n     *\u002F"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:X}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:Y}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ab}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ac}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"fixedDelay--\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,z,s]},children:[{type:a,value:"\u002F**\n     * 每隔5s调用一次此方法，无论之前的方法是否执行完毕\n     *  同时可能有N个线程执行此方法\n     *  \n     *\u002F"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:ae},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ae}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:X}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:Y}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:_}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:$}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:ab}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:ac}]},{type:a,value:ad},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"fixedRate--\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,z,s]},children:[{type:a,value:"\u002F***\n     * initialDelay: 第一次调用此方法前的等待时间\n     * \n     *\u002F"}]},{type:a,value:" \n    "},{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:"initialDelay"},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:","}]},{type:a,value:" fixedRate"},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,v]},children:[{type:a,value:H}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"initialDelayAndfixedRate"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"initialDelayAndfixedRate--\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,z,s]},children:[{type:a,value:"\u002F**\n     * 支持cron语法：\n     * 每个参数的意义分别是： second, minute, hour, day of month, month, day of week\n     * \n     * 如下：周一至周五，每隔5s执行一次方法\n     *\u002F"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,q,e]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:af},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"*\u002F5 * * * * SUN-MON\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:D},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:"\"cron--\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:j}]}]}]}]},dir:"\u002Fwiki\u002FJava\u002FSpring",path:ag,extension:".md",createdAt:ah,updatedAt:ah},prev:{slug:ai,title:aj,date:ak},next:{slug:"web-flex-shrink-demo",title:"flex实战:使用flex-shrink举例",date:"2019-11-24T00:00:00.000Z"},scrollTop:al,sideCategory:[{folderName:am,articles:[{slug:"Java-java-8-install-on-centos",title:"阿里云centos上安装jdk1.8（yum）",date:"2019-09-16T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FJava-java-8-install-on-centos"},{slug:"Java-java-mvn-proxy",title:"mvn走代理的方法",date:"2019-06-08T18:54:39.000Z",path:"\u002Fwiki\u002FJava\u002FJava-java-mvn-proxy"},{slug:"Java-java-plan",title:"JAVA学习路线",date:"2019-05-17T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FJava-java-plan"}],children:[{folderName:"3part",articles:[{slug:"3part-kafka-basic",title:"kafka基本概念理解",date:"2019-05-28T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002F3part\u002F3part-kafka-basic"},{slug:"3part-类库reflections的使用",title:"类库reflections的使用",date:an,path:"\u002Fwiki\u002FJava\u002F3part\u002F3part-类库reflections的使用"}],children:[]},{folderName:am,articles:[{slug:"Java-Collection及其衍生",date:"2020-10-23T06:09:35.000Z",title:"Collection及其衍生",path:"\u002Fwiki\u002FJava\u002FJava\u002FJava-Collection及其衍生"}],children:[]},{folderName:"Mybatis",articles:[{slug:"Mybatis-mybatis-dyna-sql",title:"mybatis中#和$的简单理解",date:"2019-07-02T10:08:02.000Z",path:"\u002Fwiki\u002FJava\u002FMybatis\u002FMybatis-mybatis-dyna-sql"},{slug:"Mybatis-mybatis-foreach",title:"mybatis中foreach以及注意事项",date:"2019-07-02T09:59:01.000Z",path:"\u002Fwiki\u002FJava\u002FMybatis\u002FMybatis-mybatis-foreach"},{slug:"Mybatis-mybatis-resultmap",title:"mybatis一对多、一对一",date:ao,path:"\u002Fwiki\u002FJava\u002FMybatis\u002FMybatis-mybatis-resultmap"}],children:[]},{folderName:"Redis",articles:[{slug:"Redis-redis-basic",title:"1.Redis基本理解及使用",date:"2019-06-04T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FRedis\u002FRedis-redis-basic"},{slug:"Redis-redis-jedis",title:"2.Redis客户端：Jedis",date:"2019-06-05T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FRedis\u002FRedis-redis-jedis"},{slug:"Redis-redis-sping-cache",title:"3.Spring中的缓存抽象及SpringDataRedis使用",date:"2019-06-06T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FRedis\u002FRedis-redis-sping-cache"}],children:[]},{folderName:"Spring",articles:[{slug:"Spring-SpringMVC中的ModelModelMapModelAndView",date:"2020-10-26T08:54:36.000Z",title:"SpringMVC中的Model、ModelMap、ModelAndView(转载)",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-SpringMVC中的ModelModelMapModelAndView"},{slug:"Spring-java-requestmap",title:"Java @RequestMapping、@GetMapping、@PostMapping",date:"2019-07-04T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-java-requestmap"},{slug:"Spring-java-static-autowired",title:"Spring @Autowired注解在utils静态工具类非controller普通类中使用(转）",date:"2020-01-02T16:47:10.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-java-static-autowired"},{slug:"Spring-spring-validation",title:"spring之表单验证",date:"2019-06-14T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-spring-validation"},{slug:"Spring-springboot-jsonconvert",title:"springboot之Json转换类型嵌套问题",date:"2019-06-17T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-springboot-jsonconvert"},{slug:"Spring-springboot-kaptcha",title:"springboot之kaptcha验证码",date:"2019-05-22T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002FSpring\u002FSpring-springboot-kaptcha"},{slug:J,title:K,date:L,path:ag}],children:[]},{folderName:"idea",articles:[{slug:"idea-2019-01-28",title:"(JB)idea添加项目依赖、以及打包问题",date:"2019-01-28T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002Fidea\u002Fidea-2019-01-28"},{slug:"idea-error-javacTask-x",title:"[idea] 编译报错 javacTask:源发行版 8 需要目标发行版 1.8",date:an,path:"\u002Fwiki\u002FJava\u002Fidea\u002Fidea-error-javacTask-x"},{slug:"idea-idea-j-warnning",title:"intelliJ IDEA:JAVA文件名黄色J警告问题",date:"2019-05-27T00:00:00.000Z",path:"\u002Fwiki\u002FJava\u002Fidea\u002Fidea-idea-j-warnning"},{slug:"idea-idea-svn",title:"(JB)IDEA导入svn项目二三谈",date:ao,path:"\u002Fwiki\u002FJava\u002Fidea\u002Fidea-idea-svn"},{slug:"idea-springboot-start",title:"intelliJ idea:springboot项目初始化",date:"2018-10-26T13:56:11.000Z",path:"\u002Fwiki\u002FJava\u002Fidea\u002Fidea-springboot-start"}],children:[]},{folderName:"代码段",articles:[{slug:ai,title:aj,date:ak,path:"\u002Fwiki\u002FJava\u002F代码段\u002F代码段-java-8-rsa"},{slug:"代码段-springboot-download-config",title:"(spring boot)虚拟目录配置、文件下载",date:"2019-01-29T17:23:27.000Z",path:"\u002Fwiki\u002FJava\u002F代码段\u002F代码段-springboot-download-config"}],children:[]},{folderName:"微服务",articles:[{slug:"微服务-feign-pass-http-header",title:"feign请求头丢失",date:"2019-01-28T16:24:12.000Z",path:"\u002Fwiki\u002FJava\u002F微服务\u002F微服务-feign-pass-http-header"}],children:[]}]}]}],fetch:{},mutations:al}}("text","element","span","token","punctuation"," ","(",")","keyword","\n","\n    ","function","{","}","class-name",".","annotation","operator","comment","string",";","number","public","=","\n        ","doc-comment","@Scheduled","void","\n            ","\n        log","info","class","\n\n    ","5000","1000","Spring-springboot-schedule","spring框中简单的任务调度","2019-09-25T00:00:00.000Z","ol","li","div","nuxt-content-highlight","pre","language-java","line-numbers","code","\n     ","Logger","fixedDelay","try","\u002F\u002F 执行方法需要10s","Thread","sleep","*","10","catch","InterruptedException"," e","fixedRate","cron","\u002Fwiki\u002FJava\u002FSpring\u002FSpring-springboot-schedule","2021-11-18T05:30:57.444Z","代码段-java-8-rsa","rsa加密解密","2019-09-10T00:00:00.000Z",void 0,"Java","2019-03-15T09:36:52.000Z","2018-11-06T14:47:57.000Z")));