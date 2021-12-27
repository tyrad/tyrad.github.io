__NUXT_JSONP__("/wiki/content/Android-%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B0(%E4%B8%80)", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab){return {data:[{},{article:{slug:J,title:K,layout:"page",date:L,toc:[{id:M,depth:l,text:N},{id:O,depth:l,text:P},{id:Q,depth:l,text:R},{id:S,depth:l,text:T},{id:U,depth:l,text:V},{id:x,depth:l,text:x}],body:{type:"root",children:[{type:b,tag:m,props:{id:M},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#span-id--a1%E7%A8%8B%E5%BA%8F%E7%9A%84%E5%90%AF%E5%8A%A8%E5%85%A5%E5%8F%A3span",tabIndex:p},children:[{type:b,tag:d,props:{className:[q,r]},children:[]}]},{type:b,tag:d,props:{id:"a1"},children:[{type:a,value:N}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"简单的目录结构如图"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:B,props:{alt:"2017021751319img1.png",src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F2017021751319img1.png?imageView\u002F2\u002Fw\u002F300"},children:[]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"其中 "},{type:b,tag:h,props:{},children:[{type:a,value:W}]},{type:a,value:"  文件是android项目配置文件。 见下图:"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:B,props:{alt:"20170217824362.png",src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F20170217824362.png"},children:[]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"上方xml的"},{type:b,tag:h,props:{},children:[{type:a,value:"activity"}]},{type:a,value:"标签表示对Activity进行注册。 没有在"},{type:b,tag:h,props:{},children:[{type:a,value:W}]},{type:a,value:" 注册的活动是不能使用的。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"其中intent-filter的两行代码是很重要的。"}]},{type:a,value:c},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,G]},children:[{type:b,tag:h,props:{},children:[{type:a,value:"\u003Cactionandroid:name=\"android.intent.action.MAIN\"\u002F\u003E\n\u003Ccategoryandroid:name=\"android.intent.category.LAUNCHER\"\u002F\u003E\n"}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"表示HelloWorldActivity是这个项目的主活动。在手机上点击应用图标，首先启动的就是这个活动。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:".HelloWorldActivity 其实是 com.tyrad.helloworld.FirstActivity 的缩写而已. 由于最外层的"},{type:b,tag:"manifest",props:{},children:[{type:a,value:"标签中已经通过 package 属性指定了程序的包名,因此在注册活动时 这一部分就可以省略了，直接使用.FirstActivity 就足够了。"}]}]},{type:a,value:c},{type:b,tag:m,props:{id:O},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#span-id--a2%E5%85%B3%E4%BA%8Eactivityspan",tabIndex:p},children:[{type:b,tag:d,props:{className:[q,r]},children:[]}]},{type:b,tag:d,props:{id:"a2"},children:[{type:a,value:P}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:B,props:{alt:"201702175333514873044676192.jpg",src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F201702175333514873044676192.jpg"},children:[]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"HelloWorldActivity最终是继承自 Activity。Activity是Android系统提供的一个活动基类。\n我们在项目中的所有活动必须继承它才能有活动的特性。"}]},{type:a,value:c},{type:b,tag:H,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"onCreate()"}]},{type:a,value:"是activity创建时必须要执行的方法。"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"setContentView()"}]},{type:a,value:"给当前的活动加载一个布局，而在该方法中，我们一般都会传入一个布局文件的 id 。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"项目中添加的任何资源都会在 R 文件中生成一个相应的资源 id，因此 我们创建布局的 id 现在应该是已经添加到 R 文件中了。 只需要调用 R.layout.name_layout 就可以得到布局的id了。"}]},{type:a,value:c},{type:b,tag:m,props:{id:Q},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#span-id--a3%E5%A6%82%E4%BD%95%E5%BC%95%E7%94%A8%E8%B5%84%E6%BA%90span",tabIndex:p},children:[{type:b,tag:d,props:{className:[q,r]},children:[]}]},{type:b,tag:d,props:{id:"a3"},children:[{type:a,value:R}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"res目录是app的资源目录。"}]},{type:a,value:c},{type:b,tag:H,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"drawable   放图片（多个drawable开头的文件夹主要是为了程序能兼容更多设备）"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"values        放字符串"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"layout        放布局文件"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"比如引用strings.xml的 ccc_name 的字符串"}]},{type:a,value:c},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,G]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:I}]},{type:a,value:X}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:y}]}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:I}]},{type:a,value:Y}]},{type:a,value:" "},{type:b,tag:d,props:{className:[e,t]},children:[{type:a,value:"name"}]},{type:b,tag:d,props:{className:[e,u]},children:[{type:b,tag:d,props:{className:[e,g,v]},children:[{type:a,value:w}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:k}]},{type:a,value:"ccc_name"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:k}]}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:y}]}]},{type:a,value:"helloAndroid"},{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:Z}]},{type:a,value:Y}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:y}]}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:Z}]},{type:a,value:X}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:y}]}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"可以有两种引用方式:"}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"在代码中通过 "},{type:b,tag:h,props:{},children:[{type:a,value:"R.string.ccc_name"}]}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:"在XML中通过 "},{type:b,tag:h,props:{},children:[{type:a,value:"@string\u002Fccc_name"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"如果引用图片资源就可以将string替换成 drawable ，其他类型资源依次类推。"}]},{type:a,value:c},{type:b,tag:m,props:{id:S},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#span-id--a4layoutxmlspan",tabIndex:p},children:[{type:b,tag:d,props:{className:[q,r]},children:[]}]},{type:b,tag:d,props:{id:"a4"},children:[{type:a,value:T}]}]},{type:a,value:c},{type:b,tag:C,props:{className:[D]},children:[{type:b,tag:E,props:{className:[F,G]},children:[{type:b,tag:h,props:{},children:[{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,j]},children:[{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:I}]},{type:a,value:_}]},{type:a,value:$},{type:b,tag:d,props:{className:[e,t]},children:[{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:A}]},{type:a,value:"layout_width"}]},{type:b,tag:d,props:{className:[e,u]},children:[{type:b,tag:d,props:{className:[e,g,v]},children:[{type:a,value:w}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:k}]},{type:a,value:"match_parent"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:k}]}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,t]},children:[{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:A}]},{type:a,value:"layout_height"}]},{type:b,tag:d,props:{className:[e,u]},children:[{type:b,tag:d,props:{className:[e,g,v]},children:[{type:a,value:w}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:k}]},{type:a,value:"wrap_content"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:k}]}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,t]},children:[{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:A}]},{type:a,value:a}]},{type:b,tag:d,props:{className:[e,u]},children:[{type:b,tag:d,props:{className:[e,g,v]},children:[{type:a,value:w}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:k}]},{type:a,value:_},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:k}]}]},{type:a,value:c},{type:b,tag:d,props:{className:[e,t]},children:[{type:b,tag:d,props:{className:[e,z]},children:[{type:a,value:A}]},{type:a,value:"id"}]},{type:b,tag:d,props:{className:[e,u]},children:[{type:b,tag:d,props:{className:[e,g,v]},children:[{type:a,value:w}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:k}]},{type:a,value:"@+id\u002Fbutton_1"},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:k}]}]},{type:b,tag:d,props:{className:[e,g]},children:[{type:a,value:"\u002F\u003E"}]}]},{type:a,value:$}]}]}]},{type:a,value:c},{type:b,tag:H,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"android:id"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"android:id 是给当前的元素定义一个唯一标识符，之后可以在代码中对这个元素进行操作。"},{type:b,tag:"br",props:{},children:[]},{type:a,value:"\n@+id\u002Fbutton_1 这种语法你可能感到陌生，但如果把加号去掉，变成@id\u002Fbutton_1，这你就会 觉得有些熟悉了吧，这不就是在 XML 中引用资源的语法吗，只不过是把 string 替换成了 id。 是的，如果你需要在 XML 中引用一个 id，就使用@id\u002Fid_name 这种语法，而如果你需要 在XML中定义一个id，则要使用@+id\u002Fid_name 这种语法。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"android:layout_width"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"android:layout_width  指定了当前元素的宽度，这里使用 match_parent 表示让当前元素和父元素一样宽。\nandroid:layout_height 指定了当前元素的高度，这里使用 wrap_content，表示当前元素 的高度只要能刚好包含里面的内容就行。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"android:text"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"指定了元素中显示的文字内容。"}]},{type:a,value:c}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:m,props:{id:U},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#span-id--a5%E6%97%A5%E5%BF%97%E5%B7%A5%E4%BD%9C%E7%9A%84%E4%BD%BF%E7%94%A8span",tabIndex:p},children:[{type:b,tag:d,props:{className:[q,r]},children:[]}]},{type:b,tag:d,props:{id:"a5"},children:[{type:a,value:V}]}]},{type:a,value:c},{type:b,tag:s,props:{},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"Log.v()"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"这个方法用于打印那些最为琐碎的，意义最小的日志信息。对应级别 verbose， 是 Android 日志里面级别最低的一种。"}]},{type:a,value:c},{type:b,tag:s,props:{start:l},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"Log.d()"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"这个方法用于打印一些调试信息，这些信息对你调试程序和分析问题应该是有帮助 的。对应级别 debug，比 verbose 高一级。"}]},{type:a,value:c},{type:b,tag:s,props:{start:3},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"Log.i()"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"这个方法用于打印一些比较重要的数据，这些数据应该是你非常想看到的，可以帮 你分析用户行为的那种。对应级别 info，比 debug 高一级。"}]},{type:a,value:c},{type:b,tag:s,props:{start:4},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"Log.w()"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"这个方法用于打印一些警告信息，提示程序在这个地方可能会有潜在的风险，最好去修复一下这些出现警告的地方。对应级别 warn，比 info 高一级。"}]},{type:a,value:c},{type:b,tag:s,props:{start:5},children:[{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"Log.e()"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"这个方法用于打印程序中的错误信息，比如程序进入到了 catch 语句当中。当有 错误信息打印出来的时候，一般都代表你的程序出现严重问题了，必须尽快修复。对应 级别 error，比 warn 高一级。"}]},{type:a,value:c},{type:b,tag:m,props:{id:x},children:[{type:b,tag:n,props:{ariaHidden:o,href:"#%E5%8F%82%E8%80%83",tabIndex:p},children:[{type:b,tag:d,props:{className:[q,r]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"参考书籍: 《第一行代码》"}]},{type:a,value:c}]}]},dir:"\u002Fwiki\u002FAndroid",path:aa,extension:".md",createdAt:"2021-12-27T10:01:01.242Z",updatedAt:"2021-12-27T10:01:01.246Z"},prev:{slug:"Linux-macOS JAVA开发环境配置",title:"macOS JAVA开发环境配置",date:"2016-10-01T17:15:33.000Z"},next:{slug:"Linux-CentOS LAMP 环境配置 + wordpress (阿里云ECS)",title:"CentOS LAMP 环境配置 + wordpress (阿里云ECS)",date:"2017-06-04T00:00:00.000Z"},scrollTop:ab,sideCategory:[{folderName:"Android",articles:[{slug:J,title:K,date:L,path:aa}],children:[]}]}],fetch:{},mutations:ab}}("text","element","\n","span","token","p","punctuation","code","li","tag","\"",2,"h2","a","true",-1,"icon","icon-link","ol","attr-name","attr-value","attr-equals","=","参考","\u003E","namespace","android:","img","div","nuxt-content-highlight","pre","language-xml","line-numbers","ul","\u003C","Android-学习笔记(一)","学习笔记(一)","2017-02-17T00:00:00.000Z","span-id--a1程序的启动入口span","程序的启动入口","span-id--a2关于activityspan","关于activity","span-id--a3如何引用资源span","如何引用资源","span-id--a4layoutxmlspan","layout.xml","span-id--a5日志工作的使用span","日志工作的使用","AndroidManifest.xml","resources","string","\u003C\u002F","Button"," \n","\u002Fwiki\u002FAndroid\u002FAndroid-学习笔记(一)",void 0)));