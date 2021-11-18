__NUXT_JSONP__("/wiki/content/postgresql-postgresq-dump", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R){return {data:[{},{article:{slug:K,title:L,layout:"page",date:M,collection:D,toc:[],body:{type:"root",children:[{type:b,tag:p,props:{},children:[{type:a,value:"导入整个数据库"}]},{type:a,value:g},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,E]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"#导出数据库"}]},{type:a,value:"\npsql "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:"  数据库名"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:"\n\npg_dump "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:"   "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:" \n导出某个表"}]},{type:a,value:g},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,E]},children:[{type:b,tag:u,props:{},children:[{type:a,value:"pg_dump "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:"  "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:"t "},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"table"}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:"表名"},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"压缩方法"},{type:b,tag:"br",props:{},children:[]},{type:a,value:"\n一般用dump导出数据会比较大，推荐使用xz压缩\n压缩方法  xz dum.sql 会生成 dum.sql.xz 的文件\n "}]},{type:a,value:g},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,E]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"#xz压缩数据倒数数据库方法"}]},{type:a,value:"\nxzcat "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:m}]},{type:a,value:A},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:n}]},{type:a,value:"xz "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"|"}]},{type:a,value:" psql "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:G},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:i}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,f]},children:[{type:a,value:j}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:"hr",props:{},children:[]},{type:a,value:g},{type:b,tag:p,props:{},children:[{type:a,value:"实际举例"}]},{type:a,value:g},{type:b,tag:q,props:{className:[r]},children:[{type:b,tag:s,props:{className:[t,"language-bash"]},children:[{type:b,tag:u,props:{},children:[{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"#导入"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"#远程导入到本地,例如用户名为admin 库名为ox-datav"}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:I}]},{type:a,value:".39.57 -U admin ox-datav "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:" Desktop\u002Fdum.sql\n"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"##导出指定schema `-n schema`"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"##数据库名iep ，schema为datav "}]},{type:a,value:N},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:I}]},{type:a,value:".50.198 -n datav -U product iep "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:B}]},{type:a,value:" Desktop\u002Fdum.sql\n\n"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"#导出"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"#默认为导入到本地"}]},{type:a,value:"\npsql -U tyrad linsmart "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"##举例导入到本地（127.0.0.1）的product库"}]},{type:a,value:"\npsql -U admin -h "},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:"127.0"}]},{type:a,value:".0.1  product "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"#携带ip"}]},{type:a,value:"\npsql -U tyrad -h "},{type:b,tag:c,props:{className:[d,C]},children:[{type:a,value:I}]},{type:a,value:".32.153 linsmart "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:J}]}]}]}]},dir:"\u002Fwiki\u002Fdatabase\u002Fpostgresql",path:O,extension:".md",createdAt:P,updatedAt:P},prev:{slug:"搞机-斐讯n1刷机",title:"斐讯n1刷入armbian记录",date:"2019-04-22T00:00:00.000Z"},next:{slug:"外设-mac-keyboard-setting",title:"外接键盘设置",date:"2019-07-14T00:00:00.000Z"},scrollTop:Q,sideCategory:[{folderName:"database",articles:[{slug:"database-wcdb",title:"WCDB",date:"2017-10-23T13:17:36.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fdatabase-wcdb"}],children:[{folderName:"mybatis",articles:[{slug:"mybatis-mybatis-common",title:"mybatis中的常见的运算符和表达式",date:"2019-10-11T20:19:03.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fmybatis\u002Fmybatis-mybatis-common"}],children:[]},{folderName:"mysql错误处理",articles:[{slug:"mysql错误处理-mysqli_connect-error1",title:"Warning: mysqli_connect(): (HY000\u002F2002)",date:"2017-07-19T00:00:00.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fmysql错误处理\u002Fmysql错误处理-mysqli_connect-error1"}],children:[]},{folderName:"oracle",articles:[{slug:"oracle-时间处理.md",date:"2020-11-10T08:35:45.000Z",title:"时间处理",path:"\u002Fwiki\u002Fdatabase\u002Foracle\u002Foracle-时间处理.md"},{slug:"oracle-锁表以及处理方法",date:"2020-10-26T08:48:36.000Z",title:"锁表以及处理方法",path:"\u002Fwiki\u002Fdatabase\u002Foracle\u002Foracle-锁表以及处理方法"}],children:[]},{folderName:D,articles:[{slug:"postgresql-macos-install",title:"macos安装和配置",date:"2021-09-28T13:31:37.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-macos-install"},{slug:"postgresql-posggresql-review",title:D,date:"2020-03-16T00:00:00.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-posggresql-review"},{slug:"postgresql-postgres-join",title:"join 'on' 与 'where'",date:R,path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-postgres-join"},{slug:K,title:L,date:M,path:O},{slug:"postgresql-postgresql-confi",title:"列名、关键字冲突的情况",date:"2018-11-16T11:25:05.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-postgresql-confi"},{slug:"postgresql-postgresql-order-by-numberic",title:"字符串按数字类型排序",date:"2018-11-16T00:00:00.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-postgresql-order-by-numberic"},{slug:"postgresql-postgresql安装使用(macos)",title:"postgresql安装（macos）",date:R,path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-postgresql安装使用(macos)"},{slug:"postgresql-逗号分割的字典值转名称",title:"逗号分割的字典值转字典名称(postgresql)",date:"2020-04-15T00:00:00.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-逗号分割的字典值转名称"}],children:[]},{folderName:o,articles:[{slug:"sql-sql-join-count",title:"sql 查询left join项的个数",date:"2019-10-11T20:28:26.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fsql\u002Fsql-sql-join-count"},{slug:"sql-sql-sort-rank",title:"求排名",date:"2020-04-06T00:00:00.000Z",path:"\u002Fwiki\u002Fdatabase\u002Fsql\u002Fsql-sql-sort-rank"},{slug:"sql-记录值是否存在另一个表中",date:"2020-11-10T09:15:46.000Z",title:"记录值是否存在另一个表中",path:"\u002Fwiki\u002Fdatabase\u002Fsql\u002Fsql-记录值是否存在另一个表中"}],children:[]}]}]}],fetch:{},mutations:Q}}("text","element","span","token","operator","punctuation","\n","comment","(",")","keyword","-","\u002F",".","sql","p","div","nuxt-content-highlight","pre","line-numbers","code","U postgres","用户名","缺省时同用户名","\u003C","data","dum","\u003E","number","postgresql","language-sql"," ","h localhost "," 数据库名","10.10"," ~\u002FDesktop\u002Fsql\u002Fdum.sql\n","postgresql-postgresq-dump","postgresql导入导出(pg_dump)","2019-06-20T00:00:00.000Z","\npg_dump -h ","\u002Fwiki\u002Fdatabase\u002Fpostgresql\u002Fpostgresql-postgresq-dump","2021-11-18T11:07:10.245Z",void 0,"2018-09-26T09:20:28.000Z")));