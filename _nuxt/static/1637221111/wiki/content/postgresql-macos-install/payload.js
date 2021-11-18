__NUXT_JSONP__("/wiki/content/postgresql-macos-install", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y){return {data:[{},{article:{slug:x,title:y,date:z,toc:[{id:l,depth:A,text:l},{id:p,depth:A,text:p}],body:{type:"root",children:[{type:b,tag:B,props:{id:l},children:[{type:b,tag:C,props:{href:"#%E5%AE%89%E8%A3%85",ariaHidden:"true",tabIndex:-1},children:[{type:b,tag:c,props:{className:["icon","icon-link"]},children:[]}]},{type:a,value:l}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:b,tag:C,props:{href:D,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:D}]}]},{type:a,value:e},{type:b,tag:"ol",props:{},children:[{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"Download   ➜   Move to Applications folder   ➜   Double Click"}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"Click \"Initialize\" to create a new server"}]},{type:a,value:e},{type:b,tag:q,props:{},children:[{type:a,value:"Configure your $PATH to use the included command line tools (optional):"}]},{type:a,value:e}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:E}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"mkdir"}]},{type:a,value:" -p \u002Fetc\u002Fpaths.d "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"&&"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,"builtin","class-name"]},children:[{type:a,value:"echo"}]},{type:a,value:" \u002FApplications\u002FPostgres.app\u002FContents\u002FVersions\u002Flatest\u002Fbin "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"|"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:E}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"tee"}]},{type:a,value:" \u002Fetc\u002Fpaths.d\u002Fpostgresapp\n"}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"初始化的账号信息:"}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:"table",props:{},children:[{type:b,tag:"thead",props:{},children:[{type:b,tag:h,props:{},children:[{type:b,tag:F,props:{},children:[{type:a,value:"host"}]},{type:b,tag:F,props:{},children:[{type:a,value:"localhost"}]}]}]},{type:b,tag:"tbody",props:{},children:[{type:b,tag:h,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Port"}]},{type:b,tag:f,props:{},children:[{type:a,value:"5432"}]}]},{type:b,tag:h,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"User"}]},{type:b,tag:f,props:{},children:[{type:a,value:G}]}]},{type:b,tag:h,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Database"}]},{type:b,tag:f,props:{},children:[{type:a,value:G}]}]},{type:b,tag:h,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Password"}]},{type:b,tag:f,props:{},children:[{type:a,value:"无"}]}]},{type:b,tag:h,props:{},children:[{type:b,tag:f,props:{},children:[{type:a,value:"Connection URL"}]},{type:b,tag:f,props:{},children:[{type:a,value:"postgresql:\u002F\u002Flocalhost"}]}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"如果进行了第三部操作，则可以使用在终端登录pg:"}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"命令如下"}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:w,props:{},children:[{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"#username：连接数据的用户名，默认值是postgres"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"#password：密码，默认值是postgres"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"#host：主机名，默认值是localhost"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"#port：端口，默认值是5432"}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"#dbname：要连接的数据库名，默认值是postgres"}]},{type:a,value:"\npsql postgres:\u002F\u002Fusername:password@host:port\u002Fdbname  \npsql -U username -h "},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"hostname"}]},{type:a,value:" -p port -d dbname \n"}]}]}]},{type:a,value:e},{type:b,tag:i,props:{},children:[{type:a,value:"举例:"}]},{type:a,value:e},{type:b,tag:r,props:{className:[s]},children:[{type:b,tag:t,props:{className:[u,v]},children:[{type:b,tag:w,props:{},children:[{type:a,value:"➜  ~ psql -U mist -h localhost -p "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:H}]},{type:a,value:"\npsql "},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:K}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:N}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:P}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,R,S]},children:[{type:a,value:"mist"}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"# quit;"}]},{type:a,value:"\n➜  ~ psql -U mist -h localhost -p "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:H}]},{type:a,value:" -d postgres\npsql "},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:K}]},{type:a,value:L},{type:b,tag:c,props:{className:[d,M]},children:[{type:a,value:N}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,O]},children:[{type:a,value:P}]},{type:a,value:Q},{type:b,tag:c,props:{className:[d,R,S]},children:[{type:a,value:"postgres"}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:T}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"#"}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:B,props:{id:p},children:[]}]},dir:"\u002Fwiki\u002Fdatabase\u002Fpostgresql",path:U,extension:".md",createdAt:V,updatedAt:V},prev:{slug:"kettle-install-macos",title:"Macos Kettle的安装使用",date:"2021-09-26T09:23:22.000Z"},next:{slug:"3part-umeng-install",title:"快速集成友盟分享",date:"2018-03-01 16:11"},scrollTop:W,sideCategory:[{folderName:"database",articles:[{slug:"database-wcdb",title:"WCDB",date:"2017-10-23T13:17:36.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fdatabase-wcdb"}],children:[{folderName:"mybatis",articles:[{slug:"mybatis-mybatis-common",title:"mybatis中的常见的运算符和表达式",date:"2019-10-11T20:19:03.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fmybatis\u002Fmybatis-mybatis-common"}],children:[]},{folderName:"mysql错误处理",articles:[{slug:"mysql错误处理-mysqli_connect-error1",title:"Warning: mysqli_connect(): (HY000\u002F2002)",date:"2017-07-19T00:00:00.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fmysql错误处理\u002Fmysql错误处理-mysqli_connect-error1"}],children:[]},{folderName:"oracle",articles:[{slug:"oracle-时间处理.md",date:"2020-11-10T08:35:45.000Z",title:"时间处理",path:"\u002Fwiki\u002Fdatabase\u002Foracle\u002Foracle-时间处理.md"},{slug:"oracle-锁表以及处理方法",date:"2020-10-26T08:48:36.000Z",title:"锁表以及处理方法",path:"\u002Fwiki\u002Fdatabase\u002Foracle\u002Foracle-锁表以及处理方法"}],children:[]},{folderName:X,articles:[{slug:x,title:y,date:z,path:U},{slug:"postgresql-posggresql-review",title:X,date:"2020-03-16T00:00:00.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-posggresql-review"},{slug:"postgresql-postgres-join",title:"join 'on' 与 'where'",date:Y,path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-postgres-join"},{slug:"postgresql-postgresq-dump",title:"postgresql导入导出(pg_dump)",date:"2019-06-20T00:00:00.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-postgresq-dump"},{slug:"postgresql-postgresql-confi",title:"列名、关键字冲突的情况",date:"2018-11-16T11:25:05.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-postgresql-confi"},{slug:"postgresql-postgresql-order-by-numberic",title:"字符串按数字类型排序",date:"2018-11-16T00:00:00.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-postgresql-order-by-numberic"},{slug:"postgresql-postgresql安装使用(macos)",title:"postgresql安装（macos）",date:Y,path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-postgresql安装使用(macos)"},{slug:"postgresql-逗号分割的字典值转名称",title:"逗号分割的字典值转字典名称(postgresql)",date:"2020-04-15T00:00:00.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-逗号分割的字典值转名称"}],children:[]},{folderName:"sql",articles:[{slug:"sql-sql-join-count",title:"sql 查询left join项的个数",date:"2019-10-11T20:28:26.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fsql\u002Fsql-sql-join-count"},{slug:"sql-sql-sort-rank",title:"求排名",date:"2020-04-06T00:00:00.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fsql\u002Fsql-sql-sort-rank"},{slug:"sql-记录值是否存在另一个表中",date:"2020-11-10T09:15:46.000Z",title:"记录值是否存在另一个表中",path:"\u002Fwiki\u002Fdatabase\u002Fsql\u002Fsql-记录值是否存在另一个表中"}],children:[]}]}]}],fetch:{},mutations:W}}("text","element","span","token","\n","td","comment","tr","p","function"," ","安装","operator","number","punctuation","","li","div","nuxt-content-highlight","pre","language-bash","line-numbers","code","postgresql-macos-install","macos安装和配置","2021-09-28T13:31:37.000Z",2,"h2","a","https:\u002F\u002Fpostgresapp.com\u002F","sudo","th","系统用户名","5433","(","13.4",")","\nType ","string","\"help\"","keyword","for"," help.\n\n","assign-left","variable","=","\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-macos-install","2021-11-18T07:37:48.008Z",void 0,"postgresql","2018-09-26T09:20:28.000Z")));