__NUXT_JSONP__("/wiki/content/postgresql-postgresql-order-by-numberic", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B){return {data:[{},{article:{slug:j,title:k,layout:"page",date:l,collection:c,toc:[{id:c,depth:m,text:c},{id:f,depth:m,text:f}],body:{type:"root",children:[{type:a,tag:e,props:{},children:[{type:a,tag:g,props:{},children:[{type:b,value:"SELECT month  FROM month_record ORDER BY month"}]}]},{type:b,value:d},{type:a,tag:e,props:{},children:[{type:b,value:"得到"},{type:a,tag:g,props:{},children:[{type:b,value:"1 10 8 9"}]},{type:b,value:" 显然是不符合要求的"}]},{type:b,value:d},{type:a,tag:n,props:{id:c},children:[{type:a,tag:h,props:{href:"#postgresql",ariaHidden:o,tabIndex:p},children:[{type:a,tag:q,props:{className:[r,s]},children:[]}]},{type:b,value:c}]},{type:b,value:d},{type:a,tag:e,props:{},children:[{type:a,tag:g,props:{},children:[{type:b,value:"SELECT month FROM month_record ORDER BY month::int"}]}]},{type:b,value:d},{type:a,tag:e,props:{},children:[{type:a,tag:h,props:{href:t,rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:b,value:t}]}]},{type:b,value:d},{type:a,tag:n,props:{id:f},children:[{type:a,tag:h,props:{href:"#mysql",ariaHidden:o,tabIndex:p},children:[{type:a,tag:q,props:{className:[r,s]},children:[]}]},{type:b,value:f}]},{type:b,value:d},{type:a,tag:e,props:{},children:[{type:a,tag:g,props:{},children:[{type:b,value:"SELECT month FROM month_record ORDER BY month + 0"}]}]}]},dir:"\u002Fwiki\u002Fdatabase\u002Fpostgresql",path:u,extension:".md",createdAt:v,updatedAt:v},prev:{slug:w,title:x,date:i},next:{slug:y,title:z,date:A},scrollTop:B,sideCategory:[{folderName:"database",articles:[{slug:"database-wcdb",title:"WCDB",date:"2017-10-23T13:17:36.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fdatabase-wcdb"}],children:[{folderName:"mybatis",articles:[{slug:"mybatis-mybatis-common",title:"mybatis中的常见的运算符和表达式",date:"2019-10-11T20:19:03.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fmybatis\u002Fmybatis-mybatis-common"}],children:[]},{folderName:"mysql错误处理",articles:[{slug:"mysql错误处理-mysqli_connect-error1",title:"Warning: mysqli_connect(): (HY000\u002F2002)",date:"2017-07-19T00:00:00.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fmysql错误处理\u002Fmysql错误处理-mysqli_connect-error1"}],children:[]},{folderName:"oracle",articles:[{slug:"oracle-时间处理.md",date:"2020-11-10T08:35:45.000Z",title:"时间处理",path:"\u002Fwiki\u002Fdatabase\u002Foracle\u002Foracle-时间处理.md"},{slug:"oracle-锁表以及处理方法",date:"2020-10-26T08:48:36.000Z",title:"锁表以及处理方法",path:"\u002Fwiki\u002Fdatabase\u002Foracle\u002Foracle-锁表以及处理方法"}],children:[]},{folderName:c,articles:[{slug:"postgresql-macos-install",title:"macos安装和配置",date:"2021-09-28T13:31:37.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-macos-install"},{slug:"postgresql-posggresql-review",title:c,date:"2020-03-16T00:00:00.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-posggresql-review"},{slug:"postgresql-postgres-join",title:"join 'on' 与 'where'",date:i,path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-postgres-join"},{slug:"postgresql-postgresq-dump",title:"postgresql导入导出(pg_dump)",date:"2019-06-20T00:00:00.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-postgresq-dump"},{slug:y,title:z,date:A,path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-postgresql-confi"},{slug:j,title:k,date:l,path:u},{slug:w,title:x,date:i,path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-postgresql安装使用(macos)"},{slug:"postgresql-逗号分割的字典值转名称",title:"逗号分割的字典值转字典名称(postgresql)",date:"2020-04-15T00:00:00.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-逗号分割的字典值转名称"}],children:[]},{folderName:"sql",articles:[{slug:"sql-sql-join-count",title:"sql 查询left join项的个数",date:"2019-10-11T20:28:26.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fsql\u002Fsql-sql-join-count"},{slug:"sql-sql-sort-rank",title:"求排名",date:"2020-04-06T00:00:00.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fsql\u002Fsql-sql-sort-rank"},{slug:"sql-记录值是否存在另一个表中",date:"2020-11-10T09:15:46.000Z",title:"记录值是否存在另一个表中",path:"\u002Fwiki\u002Fdatabase\u002Fsql\u002Fsql-记录值是否存在另一个表中"}],children:[]}]}]}],fetch:{},mutations:B}}("element","text","postgresql","\n","p","mysql","code","a","2018-09-26T09:20:28.000Z","postgresql-postgresql-order-by-numberic","字符串按数字类型排序","2018-11-16T00:00:00.000Z",2,"h2","true",-1,"span","icon","icon-link","https:\u002F\u002Fstackoverflow.com\u002Fquestions\u002F8502505\u002Forder-varchar-string-as-numeric","\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-postgresql-order-by-numberic","2021-12-27T10:01:01.262Z","postgresql-postgresql安装使用(macos)","postgresql安装（macos）","postgresql-postgresql-confi","列名、关键字冲突的情况","2018-11-16T11:25:05.000Z",void 0)));