__NUXT_JSONP__("/wiki/content/sql-sql-sort-rank", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae){return {data:[{},{article:{slug:E,title:F,layout:"page",date:G,toc:[],body:{type:"root",children:[{type:b,tag:B,props:{},children:[{type:a,value:"根据得分求排名情况，显然存在得分并列的情况。"}]},{type:a,value:h},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,C]},children:[{type:b,tag:t,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"create"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"table"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"if"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"not"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"exists"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:I},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:"\n    uname "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"varchar"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"200"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"\n    score "},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"int"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"\n\n"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"comment"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"on"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:"column"}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"score "},{type:b,tag:c,props:{className:[d,H]},children:[{type:a,value:"is"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'得分'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'小明'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'小王'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"'小刘'"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"98"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:"70"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:v}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:w}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:z},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:A}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:L}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,"boolean"]},children:[{type:a,value:"null"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:B,props:{},children:[{type:a,value:"postgresql:"}]},{type:a,value:h},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,C]},children:[{type:b,tag:t,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"\n       rank"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:R}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:T}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:W}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:I}]}]}]},{type:a,value:h},{type:b,tag:B,props:{},children:[{type:a,value:"查询结果:"}]},{type:a,value:h},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,X]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"小刘  98  1\n小明  88  2\n小王  88  2\n小张  70  4\n小张      5\n"}]}]}]},{type:a,value:h},{type:b,tag:B,props:{},children:[{type:a,value:"不考虑并列的情况"}]},{type:a,value:h},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,C]},children:[{type:b,tag:t,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:M}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"\n       row_number"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:P}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:Q}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:R}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:T}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:V}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:W}]},{type:a,value:m},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:h}]}]}]},{type:a,value:h},{type:b,tag:p,props:{className:[q]},children:[{type:b,tag:r,props:{className:[s,X]},children:[{type:b,tag:t,props:{},children:[{type:a,value:"小刘  98  1\n小明  88  2\n小王  88  3\n小张  70  4\n小张      5\n"}]}]}]}]},dir:"\u002Fwiki\u002Fdatabase\u002Fsql",path:Y,extension:".md",createdAt:Z,updatedAt:Z},prev:{slug:_,title:D,date:$},next:{slug:aa,title:ab,date:ac},scrollTop:ad,sideCategory:[{folderName:"database",articles:[{slug:"database-wcdb",title:"WCDB",date:"2017-10-23T13:17:36.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fdatabase-wcdb"}],children:[{folderName:"mybatis",articles:[{slug:"mybatis-mybatis-common",title:"mybatis中的常见的运算符和表达式",date:"2019-10-11T20:19:03.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fmybatis\u002Fmybatis-mybatis-common"}],children:[]},{folderName:"mysql错误处理",articles:[{slug:"mysql错误处理-mysqli_connect-error1",title:"Warning: mysqli_connect(): (HY000\u002F2002)",date:"2017-07-19T00:00:00.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fmysql错误处理\u002Fmysql错误处理-mysqli_connect-error1"}],children:[]},{folderName:"oracle",articles:[{slug:"oracle-时间处理.md",date:"2020-11-10T08:35:45.000Z",title:"时间处理",path:"\u002Fwiki\u002Fdatabase\u002Foracle\u002Foracle-时间处理.md"},{slug:"oracle-锁表以及处理方法",date:"2020-10-26T08:48:36.000Z",title:"锁表以及处理方法",path:"\u002Fwiki\u002Fdatabase\u002Foracle\u002Foracle-锁表以及处理方法"}],children:[]},{folderName:D,articles:[{slug:"postgresql-macos-install",title:"macos安装和配置",date:"2021-09-28T13:31:37.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-macos-install"},{slug:_,title:D,date:$,path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-posggresql-review"},{slug:"postgresql-postgres-join",title:"join 'on' 与 'where'",date:ae,path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-postgres-join"},{slug:"postgresql-postgresq-dump",title:"postgresql导入导出(pg_dump)",date:"2019-06-20T00:00:00.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-postgresq-dump"},{slug:"postgresql-postgresql-confi",title:"列名、关键字冲突的情况",date:"2018-11-16T11:25:05.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-postgresql-confi"},{slug:"postgresql-postgresql-order-by-numberic",title:"字符串按数字类型排序",date:"2018-11-16T00:00:00.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-postgresql-order-by-numberic"},{slug:"postgresql-postgresql安装使用(macos)",title:"postgresql安装（macos）",date:ae,path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-postgresql安装使用(macos)"},{slug:aa,title:ab,date:ac,path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-逗号分割的字典值转名称"}],children:[]},{folderName:"sql",articles:[{slug:"sql-sql-join-count",title:"sql 查询left join项的个数",date:"2019-10-11T20:28:26.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fsql\u002Fsql-sql-join-count"},{slug:E,title:F,date:G,path:Y},{slug:"sql-记录值是否存在另一个表中",date:"2020-11-10T09:15:46.000Z",title:"记录值是否存在另一个表中",path:"\u002Fwiki\u002Fdatabase\u002Fsql\u002Fsql-记录值是否存在另一个表中"}],children:[]}]}]}],fetch:{},mutations:ad}}("text","element","span","token","punctuation","keyword"," ","\n","(",")",",","."," busi",";","string","div","nuxt-content-highlight","pre","line-numbers","code","number","insert","into","user_rank ","uname"," score","values","p","language-sql","postgresql","sql-sql-sort-rank","求排名","2020-04-06T00:00:00.000Z","operator","user_rank\n","user_rank","88","'小张'","select"," uname","\n       score","over","order","by"," score ","desc"," nulls ","last","from","language-text","\u002Fwiki\u002Fdatabase\u002Fsql\u002Fsql-sql-sort-rank","2021-11-18T05:30:57.452Z","postgresql-posggresql-review","2020-03-16T00:00:00.000Z","postgresql-逗号分割的字典值转名称","逗号分割的字典值转字典名称(postgresql)","2020-04-15T00:00:00.000Z",void 0,"2018-09-26T09:20:28.000Z")));