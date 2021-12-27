__NUXT_JSONP__("/wiki/content/iOS-Swift-ObjectMapper%20%E6%8C%87%E5%8D%97", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad){return {data:[{},{article:{slug:G,description:w,title:H,layout:"page",date:I,toc:[{id:J,depth:r,text:K},{id:t,depth:r,text:t},{id:L,depth:r,text:"Mappable 协议"},{id:M,depth:r,text:N},{id:O,depth:r,text:"常用的转换 Custom Transforms"},{id:u,depth:r,text:u},{id:P,depth:r,text:Q},{id:v,depth:r,text:v}],body:{type:R,children:[{type:b,tag:e,props:{},children:[{type:a,value:w}]},{type:a,value:"\n "},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:l,props:{href:S,rel:[x,y,z],target:A},children:[{type:a,value:"ObjectMapper-GitHub 官方指南"}]}]},{type:a,value:c},{type:b,tag:s,props:{id:J},children:[{type:b,tag:l,props:{href:"#features",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:B,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"将JSON映射成对象"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"将对象映射成JSON"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"模型嵌套(模型可以在数组\u002F字典中)"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"支持映射时候key的转换"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"支持结构体类型"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:s,props:{id:t},children:[{type:b,tag:l,props:{href:"#%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"为了支持映射,"},{type:b,tag:d,props:{},children:[{type:a,value:"class"}]},{type:a,value:"或者"},{type:b,tag:d,props:{},children:[{type:a,value:"sturct"}]},{type:a,value:"只需要实现 "},{type:b,tag:d,props:{},children:[{type:a,value:"Mapple"}]},{type:a,value:"协议."}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"public protocol Mappable {\n    init?(_ map: Map)\n    mutating func mapping(map: Map)\n}\npublic protocol MappableCluster: Mappable {\n    static func objectForMapping(map: Map) -\u003E Mappable? \u002F\u002F可选的方法\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"ObjectMapper使用"},{type:b,tag:d,props:{},children:[{type:a,value:"\u003C-"}]},{type:a,value:"来定义每个成员变量是如何映射到JSON或者从JSON映射的"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"struct Temperature: Mappable {\n    var celsius: String?\n    var fahrenheit: String?    \n    init?(_ map: Map) {\n    }\n    mutating func mapping(map: Map) {\n        celsius     \u003C- map[\"celsius\"]\n        fahrenheit  \u003C- map[\"fahrenheit\"]\n    }\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"一旦你的类实现"},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:", 就可以方便实现模型和JSONh的相互转换"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"let user = Mapper\u003CUser\u003E().map(JSONString)"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"将模型转换成JSON字符串:\n"},{type:b,tag:d,props:{},children:[{type:a,value:"let JSONString = Mapper().toJSONString(user, prettyPrint: true)"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"ObjectMapper支持的类型如下:"}]},{type:a,value:c},{type:b,tag:B,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Int"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Bool"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Double"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Float"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"String"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"RawRepresentable (Enums)"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Array"},{type:b,tag:"any-object",props:{},children:[]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Dictionary\u003CString, AnyObject\u003E"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Object\u003CT: Mappable\u003E"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Array\u003CT: Mappable\u003E"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Array\u003CArray\u003CT: Mappable\u003E\u003E"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Set\u003CT: Mappable\u003E"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Dictionary\u003CString, T: Mappable\u003E"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Dictionary\u003CString, Array\u003CT: Mappable\u003E\u003E"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Optionals of all the above"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Implicitly Unwrapped Optionals of the above"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:s,props:{id:L},children:[{type:b,tag:l,props:{href:"#mappable-%E5%8D%8F%E8%AE%AE",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:" 协议"}]},{type:a,value:c},{type:b,tag:D,props:{id:"init_-map-map--方法"},children:[{type:b,tag:l,props:{href:"#init_-map-map--%E6%96%B9%E6%B3%95",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:b,tag:d,props:{},children:[{type:a,value:"init?(_ map: Map) {...}"}]},{type:a,value:T}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"这个可失败构造器,可以基于模型属性序列化的优先级来对JSON验证.  如下:必须保证"},{type:b,tag:d,props:{},children:[{type:a,value:"name"}]},{type:a,value:"有值才使初始化成功"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"required init?(_ map: Map){\n   \u002F\u002F check if a required \"name\" property exists within the JSON.\n   if map[\"name\"].value() == nil {\n       return nil\n   }\n   if map.JSONDictionary[\"name\"] == nil {\n       return nil\n    }\n}\n"}]}]}]},{type:a,value:c},{type:a,value:" \n"},{type:b,tag:D,props:{id:"mutating-func-mappingmap-map-方法"},children:[{type:b,tag:l,props:{href:"#mutating-func-mappingmap-map-%E6%96%B9%E6%B3%95",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:b,tag:d,props:{},children:[{type:a,value:"mutating func mapping(map: Map)"}]},{type:a,value:T}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"当 "},{type:b,tag:E,props:{},children:[{type:a,value:"JSON -\u003E 模型"}]},{type:a,value:" 时,初始化成功后会执行.\n当 "},{type:b,tag:E,props:{},children:[{type:a,value:"模型 -\u003E JOSN"}]},{type:a,value:" 时,这是模型只会执行这个方法."}]},{type:a,value:c},{type:b,tag:D,props:{id:"static-func-objectformappingmap-map---mappable方法"},children:[{type:b,tag:l,props:{href:"#static-func-objectformappingmap-map---mappable%E6%96%B9%E6%B3%95",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:b,tag:d,props:{},children:[{type:a,value:"static func objectForMapping(map: Map) -\u003E Mappable?"}]},{type:a,value:"方法"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"这是个可选的方法.如果实现这个方法 ,那么"},{type:b,tag:d,props:{},children:[{type:a,value:"init?(_ map: Map)"}]},{type:a,value:"就不再执行.  这个方法的作用在于:"}]},{type:a,value:c},{type:b,tag:B,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"提供一个存在的对象缓存用于mapping"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"返回一个其他类型的对象(也需遵循Mappale协议),例如:你可以观察JSON去推断应该用哪种类型来进行映射.  "},{type:b,tag:l,props:{href:"https:\u002F\u002Fgithub.com\u002FHearst-DD\u002FObjectMapper\u002Fblob\u002Fmaster\u002FObjectMapperTests\u002FClassClusterTests.swift#L62",rel:[x,y,z],target:A},children:[{type:a,value:"举例"}]}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"    class Vehicle: Mappable {\n        var type: String?\n        class func objectForMapping(map: Map) -\u003E Mappable? {\n            if let type: String = map[\"type\"].value() {\n                switch type {\n                    case \"car\":\n                        return Car(map)\n                    case \"bus\":\n                        return Bus(map)\n                    default:\n                        return nil\n                }\n            }\n            return nil\n        }\n        required init?(_ map: Map){         \n        }\n        func mapping(map: Map) {\n            type \u003C- map[\"type\"]\n        }\n    }\n"}]}]}]},{type:a,value:c},{type:b,tag:s,props:{id:M},children:[{type:b,tag:l,props:{href:"#%E7%B1%BB%E5%9E%8B%E5%B5%8C%E5%A5%97%E6%98%A0%E5%B0%84-nested-objects%EF%BC%89",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"如:"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"\"distance\" : {\n     \"text\" : \"102 ft\",\n     \"value\" : 31\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:U}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"func mapping(map: Map) {\n    distance \u003C- map[\"distance.value\"]\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Nested keys 也支持访问数组里的值:"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"\"distance\" : [\n    {\n     \"text\" : \"102 ft\",\n     \"value\" : 31\n     }\n]\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:U}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"func mapping(map: Map) {\n    distance \u003C- map[\"distances.0.value\"] \n}\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:E,props:{},children:[{type:a,value:"需要注意:如果你  json  的 key 包含了"},{type:b,tag:d,props:{},children:[{type:a,value:"."}]},{type:a,value:",你需要进行单独处理"}]}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"func mapping(map: Map) {\n    identifier \u003C- map[\"app.identifier\", nested: false]\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:s,props:{id:O},children:[{type:b,tag:l,props:{href:"#%E5%B8%B8%E7%94%A8%E7%9A%84%E8%BD%AC%E6%8D%A2-custom-transforms",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:"常用的转换 "},{type:b,tag:d,props:{},children:[{type:a,value:"Custom Transforms"}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"ObjectMapper 支持map中的常用的转换.  想实现转换,只需要创建个元组"},{type:b,tag:d,props:{},children:[{type:a,value:"-\u003E (map[\"filed_name\"], transform())"}]}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"birthday \u003C- (map[\"birthday\"], DateTransform())\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"上边的转换会使得JSON中的Int类型 与 NSDate 类型 相互转换."}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"当然我们可以实现自己的 custom transforms , 通过满足 "},{type:b,tag:d,props:{},children:[{type:a,value:"TransformType"}]},{type:a,value:" 协议."}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"public protocol TransformType {\n    typealias Object\n    typealias JSON\n    func transformFromJSON(value: AnyObject?) -\u003E Object?\n    func transformToJSON(value: Object?) -\u003E JSON?\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:"h4",props:{id:"transformof"},children:[{type:b,tag:l,props:{href:"#transformof",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"很多情况用"},{type:b,tag:d,props:{},children:[{type:a,value:F}]},{type:a,value:"类,能快速实现"},{type:b,tag:d,props:{},children:[{type:a,value:"Transform"}]},{type:a,value:"功能 .  "},{type:b,tag:d,props:{},children:[{type:a,value:F}]}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"let transform = TransformOf\u003CInt, String\u003E(fromJSON: { (value: String?) -\u003E Int? in \n    \u002F\u002F transform value from String? to Int?\n    return Int(value!)\n}, toJSON: { (value: Int?) -\u003E String? in\n    \u002F\u002F transform value from Int? to String?\n    if let value = value {\n        return String(value)\n    }\n    return nil\n})\nid \u003C- (map[\"id\"], transform)\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"更简单的写法"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"id \u003C- (map[\"id\"], TransformOf\u003CInt, String\u003E(fromJSON: { Int($0!) }, toJSON: { $0.map { String($0) } }))\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"举例: 我可以将JSON中的Int, Float等转成字符串."}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"    let transformAnyObject = TransformOf\u003CString, AnyObject\u003E(fromJSON: { (value: AnyObject?) -\u003E String? in\n        if let  value = value {\n            return \"\\(value)\"\n        }\n        return nil\n        \n        }, toJSON: { (value: String?) -\u003E AnyObject? in\n            if let value = value {\n                return value\n            }\n            return nil\n    })      \n\nfahrenheit  \u003C- (map[\"fahrenheit\"], transformAnyObject) \u002F\u002Fmap[\"fahrenheit\"]  \n"}]}]}]},{type:a,value:c},{type:b,tag:s,props:{id:u},children:[{type:b,tag:l,props:{href:"#%E5%AD%90%E7%B1%BB",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"实现"},{type:b,tag:d,props:{},children:[{type:a,value:C}]},{type:a,value:"协议的类可以很容易被继承 ."}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"    class Base: Mappable {\n        var base: String?\n        required init?(_ map: Map) {\n        }\n        func mapping(map: Map) {\n            base \u003C- map[\"base\"]\n        }\n    }\n    class Subclass: Base {\n        var sub: String?\n        required init?(_ map: Map) {\n            super.init(map)\n        }\n        override func mapping(map: Map) {\n            super.mapping(map)\n            sub \u003C- map[\"sub\"]\n            }\n        }\n"}]}]}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"不要忘记实现协议的初始化方法."}]},{type:a,value:c},{type:b,tag:s,props:{id:P},children:[{type:b,tag:l,props:{href:"#%E6%94%AF%E6%8C%81%E6%B3%9B%E5%9E%8B-generic-objects",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"ObjectMapper 支持泛型, 同样我们需要实现协议`Mappabl``` swift"}]},{type:a,value:c},{type:b,tag:g,props:{className:[h]},children:[{type:b,tag:i,props:{className:[j,k]},children:[{type:b,tag:d,props:{},children:[{type:a,value:"    class Result\u003CT: Mappable\u003E: Mappable {\n        var result: T?\n        required init?(_ map: Map){\n        }\n        func mapping(map: Map) {\n            result \u003C- map[\"result\"]\n        }\n    }\n    let result = Mapper\u003CResult\u003CUser\u003E\u003E().SON)\n"}]}]}]},{type:a,value:c},{type:b,tag:s,props:{id:v},children:[{type:b,tag:l,props:{href:"#%E6%9B%B4%E5%A4%9A",ariaHidden:m,tabIndex:n},children:[{type:b,tag:o,props:{className:[p,q]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:b,tag:l,props:{href:S,rel:[x,y,z],target:A},children:[{type:a,value:"ObjectMapper-GitHub 官方文档"}]}]}]},excerpt:{type:R,children:[{type:b,tag:e,props:{},children:[{type:a,value:w}]}]},dir:"\u002Fwiki\u002FiOS",path:V,extension:".md",createdAt:W,updatedAt:W},prev:{slug:"vuex-usage",title:"vuex使用记录",date:"2021-08-23T21:35:31.000Z"},next:{slug:X,title:Y,date:Z},scrollTop:_,sideCategory:[{folderName:"iOS",articles:[{slug:G,title:H,date:I,path:V},{slug:X,title:Y,date:Z,path:"\u002Fwiki\u002FiOS\u002FiOS-URL Schemes && Universal Links 简单使用"},{slug:"iOS-YYModel",title:"YYModel几种使用场景",date:$,path:"\u002Fwiki\u002FiOS\u002FiOS-YYModel"},{slug:"iOS-ios-useful-link",title:"'实用链接",date:"2017-07-14T16:58:04.000Z",path:"\u002Fwiki\u002FiOS\u002FiOS-ios-useful-link"},{slug:"iOS-mrpeak杂货铺-iOS应用层架构之CDD",title:"(转)mrpeak杂货铺-iOS应用层架构之CDD",date:aa,path:"\u002Fwiki\u002FiOS\u002FiOS-mrpeak杂货铺-iOS应用层架构之CDD"},{slug:"iOS-检测离屏渲染与绘制高性能圆角",title:"(待)检测离屏渲染与绘制高性能圆角",date:"2017-08-17T10:03:56.000Z",path:"\u002Fwiki\u002FiOS\u002FiOS-检测离屏渲染与绘制高性能圆角"},{slug:"iOS-深度重构UIViewController",title:"(转)mrpeak杂货铺-深度重构UIViewController",date:"2017-11-19T21:33:42.000Z",path:"\u002Fwiki\u002FiOS\u002FiOS-深度重构UIViewController"},{slug:"iOS-添加字体库",title:"使用第三方字体",date:aa,path:"\u002Fwiki\u002FiOS\u002FiOS-添加字体库"}],children:[{folderName:"3part",articles:[{slug:"3part-umeng-install",title:"快速集成友盟分享",date:"2018-03-01 16:11",path:"\u002Fwiki\u002FiOS\u002F3part\u002F3part-umeng-install"},{slug:"3part-快速集成微信支付",title:"快速集成微信\u002F支付宝\u002F银联",date:"2017-11-17T16:19:25.000Z",path:"\u002Fwiki\u002FiOS\u002F3part\u002F3part-快速集成微信支付"},{slug:"3part-快速集成百度地图",title:"集成百度地图、百度导航",date:"2017-08-11T11:24:43.000Z",path:"\u002Fwiki\u002FiOS\u002F3part\u002F3part-快速集成百度地图"},{slug:"3part-阿里云视频点播集成",date:"2020-10-26T01:10:15.000Z",title:"阿里云视频点播VOD",path:"\u002Fwiki\u002FiOS\u002F3part\u002F3part-阿里云视频点播集成"}],children:[]},{folderName:"Autolayout",articles:[{slug:"Autolayout-baseline",title:"label底部对齐、顶部对齐",date:ab,path:"\u002Fwiki\u002FiOS\u002FAutolayout\u002FAutolayout-baseline"}],children:[]},{folderName:"Error",articles:[{slug:"Error-2017-07-31",title:"Undefined symbols for architecture ..",date:"2017-07-31T08:52:40.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-2017-07-31"},{slug:"Error-Shell-Script-Invocation-Error",title:"'Shell Script Invocation Error'",date:"2017-07-20T14:27:04.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-Shell-Script-Invocation-Error"},{slug:"Error-gesture",title:"tableViewCell的点击和tapGestureRecognizer冲突的处理",date:"2016-11-19T21:33:42.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-gesture"},{slug:"Error-崩溃分析",date:"2020-11-11T07:28:34.000Z",title:"崩溃分析(转载)",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-崩溃分析"},{slug:"Error-竖屏下视频全屏播放",title:"(转)竖屏下视频全屏播放",date:"2017-08-01T15:23:01.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-竖屏下视频全屏播放"},{slug:"Error-证书过期或者移除对app的影响",title:"证书过期或者移除对app的影响",date:"2018-01-11T13:49:33.000Z",path:"\u002Fwiki\u002FiOS\u002FError\u002FError-证书过期或者移除对app的影响"}],children:[]},{folderName:"Objective-C",articles:[{slug:"Objective-C-KVO - Observe property of an object contained in a NSArray",title:"KVO - Observe property of an object contained in a NSArray",date:"2017-09-28 22:26",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-KVO - Observe property of an object contained in a NSArray"},{slug:"Objective-C-NSArrayFilter",title:"NSArray: filteredArrayUsingPredicate",date:"2017-09-14 16:24",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-NSArrayFilter"},{slug:"Objective-C-NSRecursiveLock",date:"2020-10-27T00:52:16.000Z",title:"NSRecursiveLock",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-NSRecursiveLock"},{slug:"Objective-C-NSStringCompareOptions",title:"NSStringCompareOptions",date:"2017-07-10T17:13:25.000Z",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-NSStringCompareOptions"},{slug:"Objective-C-containsObject-or-removeObject",title:"containsObject or removeObject",date:"2015年04月12日09:55:35",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-containsObject-or-removeObject"},{slug:"Objective-C-get-lunarholidays",title:"节气、节假日计算",date:"2017-07-13T09:30:26.000Z",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-get-lunarholidays"},{slug:"Objective-C-use-dispatch_queue_t-with-strong",title:"dispatch_queue_t 用strong来修饰",date:$,path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-use-dispatch_queue_t-with-strong"},{slug:"Objective-C-农历",title:"农历",date:"2017-07-11T13:12:46.000Z",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-农历"},{slug:"Objective-C-常用的宏",title:"常用的宏",date:"2015-03-04 11:11",path:"\u002Fwiki\u002FiOS\u002FObjective-C\u002FObjective-C-常用的宏"}],children:[]},{folderName:"StatusBar",articles:[{slug:"StatusBar-how-to-detect-touches-in-status-bar",title:"获取StatusBar的点击事件",date:ac,path:"\u002Fwiki\u002FiOS\u002FStatusBar\u002FStatusBar-how-to-detect-touches-in-status-bar"},{slug:"StatusBar-ios-status-bar-style",title:"修改StatusBarStyle以及statusBar的背景颜色",date:ac,path:"\u002Fwiki\u002FiOS\u002FStatusBar\u002FStatusBar-ios-status-bar-style"}],children:[]},{folderName:"UIKit",articles:[{slug:"UIKit-UIAlertController修改文字对齐方式",date:"2020-10-23T08:07:07.000Z",title:"UIAlertController修改文字对齐方式",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-UIAlertController修改文字对齐方式"},{slug:"UIKit-UIDynamic Animator",title:"UIDynamic Animator",date:"2016-07-20T16:13:11.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-UIDynamic Animator"},{slug:"UIKit-UISplit​View​Controller 学习笔记",title:"UISplit​View​Controller 学习笔记",date:"2017-04-07T00:00:00.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-UISplit​View​Controller 学习笔记"},{slug:"UIKit-searchBar-style",title:"如何修改searchBar的样式",date:"2017-05-14T19:01:01.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-searchBar-style"},{slug:"UIKit-uioffset",title:"UIOffset",date:"2017-08-02T15:30:01.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-uioffset"},{slug:"UIKit-屏幕旋转.md",date:"2020-11-09T06:04:42.000Z",title:"屏幕旋转",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-屏幕旋转.md"},{slug:"UIKit-离屏渲染",title:"(转)关于iOS离屏渲染的深入研究",date:"2020-04-06T00:00:00.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-离屏渲染"},{slug:"UIKit-给WebView添加个粗糙的加载动画",title:"给UIWebView添加个粗糙的加载动画",date:"2017-02-10T00:00:00.000Z",path:"\u002Fwiki\u002FiOS\u002FUIKit\u002FUIKit-给WebView添加个粗糙的加载动画"}],children:[]},{folderName:"UITextFeild",articles:[{slug:"UITextFeild-2018-01-16",title:"修改光标颜色和clear button的颜色",date:"2018-01-16T15:44:44.000Z",path:"\u002Fwiki\u002FiOS\u002FUITextFeild\u002FUITextFeild-2018-01-16"},{slug:"UITextFeild-uitextfeild-select-all",title:"默认选中文本",date:"2017-07-07 04:44",path:"\u002Fwiki\u002FiOS\u002FUITextFeild\u002FUITextFeild-uitextfeild-select-all"}],children:[]},{folderName:"keyboard",articles:[{slug:"keyboard-disable-3rd-keyboard",title:"禁用第三方键盘",date:ab,path:"\u002Fwiki\u002FiOS\u002Fkeyboard\u002Fkeyboard-disable-3rd-keyboard"}],children:[]},{folderName:"loc",articles:[{slug:"loc-2018-01-22",title:"CLPlacemark中文",date:"2018-01-22T14:36:49.000Z",path:"\u002Fwiki\u002FiOS\u002Floc\u002Floc-2018-01-22"},{slug:"loc-sim-locaiton-ios",title:"真机或模拟器修改定位位置",date:"2017-08-11T10:29:01.000Z",path:"\u002Fwiki\u002FiOS\u002Floc\u002Floc-sim-locaiton-ios"}],children:[]},{folderName:"tableView",articles:[{slug:"tableView-cell-seprateLine",title:"cell分割线的颜色",date:"2017-08-08T15:26:14.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-cell-seprateLine"},{slug:"tableView-compare-NSIndexPath",title:"compare NSIndexPath",date:"2017-08-15T17:01:49.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-compare-NSIndexPath"},{slug:"tableView-tabeleView 获取某个cell的高度",title:"tabeleView 获取某个cell的高度",date:"2017-05-09T10:36:29.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-tabeleView 获取某个cell的高度"},{slug:"tableView-taleview-headerfooterView-xib",title:"xib UITableViewHeaderFooterView",date:"2017-08-18T09:47:36.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-taleview-headerfooterView-xib"},{slug:"tableView-结合layoutMargins做tableViewCell的适配",title:"结合layoutMargins做cell的适配",date:"2017-08-20T21:55:52.000Z",path:"\u002Fwiki\u002FiOS\u002FtableView\u002FtableView-结合layoutMargins做tableViewCell的适配"}],children:[]},{folderName:"xib",articles:[{slug:"xib-如何替换已有的控件",title:"如何替换已有的控件",date:"2017-09-07T10:51:38.000Z",path:"\u002Fwiki\u002FiOS\u002Fxib\u002Fxib-如何替换已有的控件"}],children:[]},{folderName:"代码片段",articles:[{slug:"代码片段-分割小说章节",title:"分割小说章节",date:"2017-01-18T15:12:12.000Z",path:"\u002Fwiki\u002FiOS\u002F代码片段\u002F代码片段-分割小说章节"},{slug:"代码片段-截图 截长图 高清图",title:"截图 截长图 高清图",date:"2016-05-04 22:38",path:"\u002Fwiki\u002FiOS\u002F代码片段\u002F代码片段-截图 截长图 高清图"},{slug:"代码片段-读取未知类型的txt文件",title:"读取未知类型的txt文件 ",date:"2017-01-16 20:12",path:"\u002Fwiki\u002FiOS\u002F代码片段\u002F代码片段-读取未知类型的txt文件"}],children:[]},{folderName:"包管理工具",articles:[{slug:"包管理工具-spm-introduce",date:"2020-11-18T08:08:33.000Z",title:"Swift Package Manager介绍",path:"\u002Fwiki\u002FiOS\u002F包管理工具\u002F包管理工具-spm-introduce"},{slug:"包管理工具-spm-resource-handle",date:"2020-11-19T00:58:59.000Z",title:"SWift Package Manager资源文件管理",path:"\u002Fwiki\u002FiOS\u002F包管理工具\u002F包管理工具-spm-resource-handle"}],children:[]},{folderName:"日历",articles:[{slug:"日历-FSCalendar",title:"FSCalendar",date:"2017-07-11T08:48:12.000Z",path:"\u002Fwiki\u002FiOS\u002F日历\u002F日历-FSCalendar"}],children:[]},{folderName:"适配",articles:[{slug:"适配-NFC初试",title:"NFC初试",date:"2017-06-07 18:31",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-NFC初试"},{slug:"适配-iOS11 Xcode9新功能新特性",title:"iOS11 Xcode9新功能新特性",date:ad,path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS11 Xcode9新功能新特性"},{slug:"适配-iOS11 tableView适配不完全指南",title:"iOS11 tableView适配不完全指南",date:"2017-09-19 12:33",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS11 tableView适配不完全指南"},{slug:"适配-iOS11刘海屏EdgeProtect相关",date:"2020-10-26T06:00:25.000Z",title:"iOS11刘海屏EdgeProtect相关",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS11刘海屏EdgeProtect相关"},{slug:"适配-iOS11适配参考",title:"iOS11 适配参考",date:ad,path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS11适配参考"},{slug:"适配-iOS14hidesBottomBarWhenPushed兼容问题",date:"2020-10-23T08:53:49.000Z",title:"iOS14 hidesBottomBarWhenPushed兼容问题",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-iOS14hidesBottomBarWhenPushed兼容问题"},{slug:"适配-touch-id",title:"touch Id",date:"2017-08-04T13:46:10.000Z",path:"\u002Fwiki\u002FiOS\u002F适配\u002F适配-touch-id"}],children:[]},{folderName:"问与答",articles:[{slug:"问与答-为什么ui操作要在主线程",date:"2020-11-16T03:38:48.000Z",title:"为什么ui操作要在主线程",path:"\u002Fwiki\u002FiOS\u002F问与答\u002F问与答-为什么ui操作要在主线程"}],children:[]}]}]}],fetch:{},mutations:_}}("text","element","\n","code","p","li","div","nuxt-content-highlight","pre","language-text","line-numbers","a","true",-1,"span","icon","icon-link",3,"h3","基本使用","子类","更多","ObjectMapper是swift写的框架,旨在简化模型(Struct\u002FClass)和JSON相互转换.","nofollow","noopener","noreferrer","_blank","ul","Mappable","h5","em","TransformOf","iOS-Swift-ObjectMapper 指南","Swift-ObjectMapper 指南","2016-05-23 16:13","features","Features","mappable-协议","类型嵌套映射-nested-objects）","类型嵌套映射 (Nested Objects）","常用的转换-custom-transforms","支持泛型-generic-objects","支持泛型 Generic Objects","root","https:\u002F\u002Fgithub.com\u002FHearst-DD\u002FObjectMapper"," 方法","处理方法:","\u002Fwiki\u002FiOS\u002FiOS-Swift-ObjectMapper 指南","2021-12-27T10:01:01.266Z","iOS-URL Schemes && Universal Links 简单使用","URL Schemes && Universal Links 简单使用","2017-02-14T00:00:00.000Z",void 0,"2017-08-31T09:32:08.000Z","2017-10-27T18:01:13.000Z","2017-08-19T16:10:51.000Z","2016-07-01T14:19:23.000Z","2017-09-20T15:20:33.000Z")));