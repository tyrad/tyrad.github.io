__NUXT_JSONP__("/wiki/content/fastlane-frameit:%E6%88%AA%E5%9B%BE%E5%A5%97%E5%A3%B3", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA){return {data:[{},{article:{slug:$,description:aa,title:ab,layout:"page",date:n,collection:ac,toc:[{id:G,depth:H,text:G},{id:I,depth:H,text:I},{id:J,depth:H,text:J},{id:K,depth:H,text:K}],body:{type:ad,children:[{type:a,value:f},{type:b,tag:L,props:{id:G},children:[{type:b,tag:t,props:{href:"#%E5%8A%A0%E6%89%8B%E6%9C%BA%E5%A3%B3",ariaHidden:E,tabIndex:M},children:[{type:b,tag:c,props:{className:[N,O]},children:[]}]},{type:a,value:G}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"frameit 可以将"},{type:b,tag:o,props:{},children:[{type:a,value:"fastlane snapshot"}]},{type:a,value:"生成的截图套上手机壳,手机壳支持多种设备、多种颜色。"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"使用:"}]},{type:a,value:f},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,Y]},children:[{type:b,tag:o,props:{},children:[{type:a,value:" fastlane frameit#第一次运行会提示安装imagemagick，按提示安装即可 \n #生成其他颜色外壳举例,默认黑色\n #fastlane frameit silver\n #fastlane frameit rose_gold\n #下载最新的外壳\n #fastlane frameit download_frames\n"}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"查看相关的其他信息,外壳样式、存储路径等:"}]},{type:a,value:f},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,Y]},children:[{type:b,tag:o,props:{},children:[{type:a,value:"fastlane action frameit\n"}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"这样仅仅是给屏幕截图加了个设备外壳,没有背景图片和文字。\n需要注意的是,此时生成的图是全分辨率的,因此不能直接上传appstore。"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:ae,props:{alt:aa,src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F201706245423222.png"},children:[]}]},{type:a,value:f},{type:b,tag:L,props:{id:I},children:[{type:b,tag:t,props:{href:"#%E5%8A%A0%E8%83%8C%E6%99%AF%E5%92%8C%E6%96%87%E5%AD%97%E6%8F%8F%E8%BF%B0",ariaHidden:E,tabIndex:M},children:[{type:b,tag:c,props:{className:[N,O]},children:[]}]},{type:a,value:I}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"如果想加入背景图和文字,需要编辑"},{type:b,tag:o,props:{},children:[{type:a,value:"Framefile.json"}]},{type:a,value:"文件, 这个文件放到screenshots文件夹里。\n还需要编辑"},{type:b,tag:o,props:{},children:[{type:a,value:"keyword.string"}]},{type:a,value:"和"},{type:b,tag:o,props:{},children:[{type:a,value:"title.string"}]},{type:a,value:"文件,他们放到对应截图语言的文件夹里。"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"你可以"},{type:b,tag:t,props:{href:T,rel:[z,A,B],target:C},children:[{type:a,value:"在这里获得更多信息"}]},{type:a,value:"。"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:t,props:{href:T,rel:[z,A,B],target:C},children:[{type:a,value:"官方示例"}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"现在我有两张截图,page1和page2,看看Framefile.json文件是怎么编辑的。"}]},{type:a,value:f},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,"language-json"]},children:[{type:b,tag:o,props:{},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"device_frame_version\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\"latest\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"default\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aj}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"title\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:"   \n      "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:af}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ag}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:W}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ah}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:ai}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\"#EE5C42\""}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"background\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\".\u002Fbackground.jpg\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"show_complete_frame\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,ak]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"stack_title\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:b,tag:c,props:{className:[d,ak]},children:[{type:a,value:"false"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"padding\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,"number"]},children:[{type:a,value:"50"}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:"\"data\""}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:x}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\"1page\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\"#C0FF3E\""}]},{type:a,value:"        \n      "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:" \n    "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:al}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:"\"2page\""}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:Z}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:s},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:aj}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:r},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:F},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:q}]},{type:a,value:f}]}]}]},{type:a,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:b,tag:"table",props:{},children:[{type:b,tag:"thead",props:{},children:[{type:b,tag:D,props:{},children:[{type:b,tag:am,props:{},children:[{type:a,value:"属性"}]},{type:b,tag:am,props:{},children:[]}]}]},{type:b,tag:"tbody",props:{},children:[{type:b,tag:D,props:{},children:[{type:b,tag:u,props:{},children:[{type:a,value:"default-\u003Ebackground"}]},{type:b,tag:u,props:{},children:[{type:a,value:"背景图片"}]}]},{type:b,tag:D,props:{},children:[{type:b,tag:u,props:{},children:[{type:a,value:"show_complete_frame"}]},{type:b,tag:u,props:{},children:[{type:a,value:"是否应缩小设备和框架,使其在框架屏幕截图中全部显示,否则可能被截断"}]}]},{type:b,tag:D,props:{},children:[{type:b,tag:u,props:{},children:[{type:a,value:"stack_title"}]},{type:b,tag:u,props:{},children:[{type:a,value:"当定义关键字和标题时，frameit是否应该在标题之上显示关键字。"}]}]},{type:b,tag:D,props:{},children:[{type:b,tag:u,props:{},children:[{type:a,value:"data -\u003E filter"}]},{type:b,tag:u,props:{},children:[{type:a,value:"用来匹配截图名字,要求截图的名字包含filter对应的关键字"}]}]},{type:b,tag:D,props:{},children:[{type:b,tag:u,props:{},children:[{type:a,value:"data -\u003E title"}]},{type:b,tag:u,props:{},children:[{type:a,value:"描述满足filter条件的图片的标题"}]}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"这个文件大概是这样的:"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:"filter"}]},{type:a,value:"字段会去匹配截图名字,截图名字包含这个字符串就会匹配成功,这样可以去约定的keyword颜色。"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"编辑"},{type:b,tag:o,props:{},children:[{type:a,value:".string"}]},{type:a,value:"文件:"}]},{type:a,value:f},{type:b,tag:P,props:{className:[Q]},children:[{type:b,tag:R,props:{className:[S,Y]},children:[{type:b,tag:o,props:{},children:[{type:a,value:"---en-US文件夹下----\n--title.strings--\n\"1page\" = \"this is 1 page\";\n\"2page\" = \"this is 2 page\"; \n--keyword.strings\n\"1page\" = \"keyword1\";\n\"2page\" = \"keyword2\";\n\n ---zh-Hans文件夹下---\n --keyword.strings--\n\"1page\" = \"关键字1\";\n\"2page\" = \"关键字2\";\n--title.strings--\n\"1page\" = \"第一个界面\";\n\"2page\" = \"第二个界面\";\n"}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"再次运行"},{type:b,tag:o,props:{},children:[{type:a,value:"fastlane frameit"}]},{type:a,value:",生成的图片如下:"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:ae,props:{alt:"201706256697112.png",src:"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Fquicktouch\u002Fimage@main\u002Fimg\u002F201706256697112.png"},children:[]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:t,props:{href:"https:\u002F\u002Fgithub.com\u002Ftyrad\u002FfastlaneExample\u002Ftree\u002Fmaster\u002FsnapshotExample",rel:[z,A,B],target:C},children:[{type:a,value:"下载示例 snapshotExample"}]}]},{type:a,value:f},{type:b,tag:L,props:{id:J},children:[{type:b,tag:t,props:{href:"#%E6%B3%A8%E6%84%8F%E7%82%B9",ariaHidden:E,tabIndex:M},children:[{type:b,tag:c,props:{className:[N,O]},children:[]}]},{type:a,value:J}]},{type:a,value:f},{type:b,tag:"ol",props:{},children:[{type:a,value:f},{type:b,tag:_,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:".strings"}]},{type:a,value:"文件必需utf-16编码 (UTF-16 LE with BOM)。也必须以空行开始。"}]},{type:a,value:f},{type:b,tag:_,props:{},children:[{type:a,value:"如果你需要设置标题,背景图片是必须要有的."}]},{type:a,value:f},{type:b,tag:_,props:{},children:[{type:a,value:"可以使用"},{type:b,tag:t,props:{href:"https:\u002F\u002Fgithub.com\u002Ffastlane\u002Ffastlane\u002Ftree\u002Fmaster\u002Fdeliver",rel:[z,A,B],target:C},children:[{type:a,value:"deliver"}]},{type:a,value:"上传appstore"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:L,props:{id:K},children:[{type:b,tag:t,props:{href:"#%E5%8F%82%E8%80%83%E9%93%BE%E6%8E%A5",ariaHidden:E,tabIndex:M},children:[{type:b,tag:c,props:{className:[N,O]},children:[]}]},{type:a,value:K}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:t,props:{href:an,rel:[z,A,B],target:C},children:[{type:a,value:an}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:t,props:{href:T,rel:[z,A,B],target:C},children:[{type:a,value:T}]}]}]},excerpt:{type:ad,children:[]},dir:"\u002Fwiki\u002FTools\u002Ffastlane",path:ao,extension:".md",createdAt:ap,updatedAt:ap},prev:{slug:aq,title:ar,date:n},next:{slug:as,title:at,date:n},scrollTop:au,sideCategory:[{folderName:"Tools",articles:[{slug:"Tools-2017-12-11",title:"cocoapods 私有库重名解决方法",date:"2017-12-11T18:06:43.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2017-12-11"},{slug:"Tools-2017-12-21",title:"fir.im 如何将 installUrl 转换为可以直接安装的链接？",date:"2017-12-21T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2017-12-21"},{slug:"Tools-2018-07-04",title:"vscode重装",date:"2018-07-04T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-2018-07-04"},{slug:"Tools-Increase-speed-git-clone",title:"github clone提速",date:av,path:"\u002Fwiki\u002FTools\u002FTools-Increase-speed-git-clone"},{slug:"Tools-Log Guru",title:" Log Guru",date:aw,path:"\u002Fwiki\u002FTools\u002FTools-Log Guru"},{slug:"Tools-charles",title:"charles抓包https",date:"2017-02-02T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-charles"},{slug:"Tools-cocoapods import导入时没有提示的解决办法",title:"cocoapods import导入时没有提示的解决办法",date:"2017-09-07T10:21:59.000Z",path:"\u002Fwiki\u002FTools\u002FTools-cocoapods import导入时没有提示的解决办法"},{slug:"Tools-cocoapods-missing required architecture i386",title:"cocoapods-missing required architecture i386",date:"2017-11-27T10:34:10.000Z",path:"\u002Fwiki\u002FTools\u002FTools-cocoapods-missing required architecture i386"},{slug:"Tools-git-change-remote",title:"git切换远程服务",date:n,path:"\u002Fwiki\u002FTools\u002FTools-git-change-remote"},{slug:"Tools-gn-2x-img",title:"使用imageMagick生成@2x图片脚本",date:ax,path:"\u002Fwiki\u002FTools\u002FTools-gn-2x-img"},{slug:"Tools-gitbook入门",title:"gitbook入门",date:"2018-05-24T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-gitbook入门"},{slug:"Tools-gollum-install",title:"gollum搭建笔记",date:"2019-06-03T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-gollum-install"},{slug:"Tools-how-to-manager-github-stars",title:"Github管理stars的方法",date:ax,path:"\u002Fwiki\u002FTools\u002FTools-how-to-manager-github-stars"},{slug:"Tools-lldb",title:"lldb: chisel",date:"2017-11-26T13:00:35.000Z",path:"\u002Fwiki\u002FTools\u002FTools-lldb"},{slug:"Tools-macOS上安装Composer",title:"macOS上安装Composer",date:av,path:"\u002Fwiki\u002FTools\u002FTools-macOS上安装Composer"},{slug:"Tools-npm换源",title:"npm换源",date:ay,path:"\u002Fwiki\u002FTools\u002FTools-npm换源"},{slug:"Tools-proxy-setting",title:"Mac OSX终端走shadowsocks代理 ",date:ay,path:"\u002Fwiki\u002FTools\u002FTools-proxy-setting"},{slug:"Tools-ss+bbr",title:"ss+bbr提速",date:az,path:"\u002Fwiki\u002FTools\u002FTools-ss+bbr"},{slug:"Tools-the_silver_searcher",title:"the_silver_searcher",date:aw,path:"\u002Fwiki\u002FTools\u002FTools-the_silver_searcher"},{slug:"Tools-update-cocoapods",title:"更新cocoapods",date:"2017-08-10T11:24:52.000Z",path:"\u002Fwiki\u002FTools\u002FTools-update-cocoapods"},{slug:"Tools-whistle",title:"whistle",date:"2017-09-20T09:52:30.000Z",path:"\u002Fwiki\u002FTools\u002FTools-whistle"},{slug:"Tools-xcode-refactor",title:"xcode refactor",date:"2017-05-20T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002FTools-xcode-refactor"},{slug:"Tools-在线API团队协作工具",title:"在线API团队协作工具",date:"2017-08-22T10:49:27.000Z",path:"\u002Fwiki\u002FTools\u002FTools-在线API团队协作工具"},{slug:"Tools-正则",title:"正则",date:az,path:"\u002Fwiki\u002FTools\u002FTools-正则"},{slug:"Tools-正则2",title:"正则:断言",date:"2018-02-26T16:48:45.000Z",path:"\u002Fwiki\u002FTools\u002FTools-正则2"}],children:[{folderName:ac,articles:[{slug:"fastlane-2017-09-11-3",title:" pem:生成推送证书",date:n,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-2017-09-11-3"},{slug:"fastlane-2017-09-11-7",title:"init:安装和初始化",date:"2017-06-22T00:00:00.000Z",path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-2017-09-11-7"},{slug:"fastlane-fastlane-cer",title:"cert证书",date:n,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-fastlane-cer"},{slug:"fastlane-fastlane-gym",title:"gym自动打包",date:n,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-fastlane-gym"},{slug:aq,title:ar,date:n,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-frameit"},{slug:$,title:ab,date:n,path:ao},{slug:as,title:at,date:n,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-produce 配置appid"},{slug:"fastlane-sigh resign:重签名",title:"sigh resign:重签名",date:n,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-sigh resign:重签名"},{slug:"fastlane-sign:签名",title:"sign:签名",date:n,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-sign:签名"},{slug:"fastlane-snapshot 自动截图",title:"snapshot 自动截图",date:n,path:"\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-snapshot 自动截图"}],children:[]},{folderName:"kettle",articles:[{slug:"kettle-install-macos",title:"Macos Kettle的安装使用",date:"2021-09-26T09:23:22.000Z",path:"\u002Fwiki\u002FTools\u002Fkettle\u002Fkettle-install-macos"}],children:[]},{folderName:"rsa",articles:[{slug:"rsa-ios-rsa",title:"iOS RSA加密解密测试",date:aA,path:"\u002Fwiki\u002FTools\u002Frsa\u002Frsa-ios-rsa"},{slug:"rsa-rsa-ext",title:"证书文件名、扩展名的解释",date:aA,path:"\u002Fwiki\u002FTools\u002Frsa\u002Frsa-rsa-ext"}],children:[]}]}]}],fetch:{},mutations:au}}("text","element","span","token","punctuation","\n","property","operator",":"," ",",","string","p","2017-06-30T10:32:11.000Z","code","{","}","\n    ","\n        ","a","td","\n      ","\n          ","[","]","nofollow","noopener","noreferrer","_blank","tr","true","\n  ","加手机壳",2,"加背景和文字描述","注意点","参考链接","h2",-1,"icon","icon-link","div","nuxt-content-highlight","pre","line-numbers","https:\u002F\u002Fgithub.com\u002Ffastlane\u002Ffastlane\u002Ftree\u002Fmaster\u002Fframeit#titles-and-background-optional","\"font\"","\".\u002Ffonts\u002Fwryh.ttf\"","\"supported\"","\"color\"","language-text","\"keyword\"","li","fastlane-frameit:截图套壳","","frameit:截图套壳","fastlane","root","img","\"fonts\"","\"en-US\"","\"zh-Hans\"","\"zh-Hant\"","\"#0A0A0A\"","boolean","\"filter\"","th","https:\u002F\u002Fdocs.fastlane.tools\u002Fgetting-started\u002Fios\u002Fscreenshots\u002F#upload-screenshots-to-the-app-store","\u002Fwiki\u002FTools\u002Ffastlane\u002Ffastlane-frameit:截图套壳","2021-11-18T07:37:48.008Z","fastlane-frameit","frameit:自动截图","fastlane-produce 配置appid","produce 配置appid",void 0,"2017-07-11T20:59:30.000Z","2017-12-04T20:20:43.000Z","2018-04-11T13:32:11.000Z","2018-05-31T00:00:00.000Z","2017-07-12T11:22:15.000Z","2017-08-02T09:49:02.000Z")));