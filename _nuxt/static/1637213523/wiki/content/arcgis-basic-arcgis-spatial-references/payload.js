__NUXT_JSONP__("/wiki/content/arcgis-basic-arcgis-spatial-references", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af){return {data:[{},{article:{slug:E,title:F,layout:"page",date:r,collection:G,toc:[{id:s,depth:y,text:s},{id:t,depth:k,text:t},{id:H,depth:y,text:I},{id:u,depth:y,text:u},{id:J,depth:k,text:K},{id:L,depth:k,text:M},{id:N,depth:k,text:O},{id:P,depth:k,text:Q},{id:R,depth:k,text:S},{id:T,depth:k,text:U},{id:V,depth:k,text:W},{id:X,depth:k,text:Y},{id:v,depth:k,text:v},{id:w,depth:k,text:w},{id:m,depth:k,text:m}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"空间参考很重要，对于新来GIS的人来说，它们看起来很复杂。\n空间参考确保可以集成不同图层或来源的空间数据，以便进行精确查看或分析。\n如果将具有不同空间参考的图层组合在一起进行查看或分析，ArcGIS Runtime SDK会尝试通过设置默认值并在适当的空间参考中请求数据（如果可能的话）从服务处理这一差异。\n但有时，您需要了解空间参考才能使事情顺利进行。\n无论是将数据对齐在一起，使地图看起来合适，提高准确性，还是仅使图层显示出来，理解空间参考的基础知识都是至关重要的。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"空间参考可以通过 well-known ID（WKID）来引用。\n在下面的文本中提到了一些常见的WKID;\n有关更完整的说明，请参阅本主题中的"},{type:b,tag:e,props:{href:"https:\u002F\u002Fdevelopers.arcgis.com\u002Fios\u002F10-2\u002Fswift\u002Fguide\u002Fspatial-references.htm#GUID-EE810B02-A106-49E7-B77E-57FE563DBBA1",rel:[n,o,p],target:q},children:[{type:a,value:m}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:A,props:{id:s},children:[{type:b,tag:e,props:{href:"#%E4%B8%BA%E4%BB%80%E4%B9%88%E7%A9%BA%E9%97%B4%E5%8F%82%E8%80%83%E5%BE%88%E9%87%8D%E8%A6%81",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:s}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"要将空间数据整合到地图中或分析过程中，ArcGIS Runtime必须知道事物在地球表面的位置。\n要做到这一点，它使用坐标。\n坐标与坐标系相关，坐标系是围绕地球表面模型的参照系。\n并非所有的坐标和相关的坐标系都是相同的;\n他们可以以不同的单位（度分秒，十进制度或米）或者他们可以基于不同类型的模型。\n为了将坐标从一个坐标系移到另一个坐标系，使用数学变换。\n空间参考提供了所有这些信息，以及诸如期望的精度水平等参数，从而可以一起查看和分析空间数据。"}]},{type:a,value:c},{type:b,tag:l,props:{id:t},children:[{type:b,tag:e,props:{href:"#%E5%85%B3%E4%BA%8E%E8%AE%BE%E7%BD%AE%E7%A9%BA%E9%97%B4%E5%8F%82%E8%80%83%E7%9A%84%E8%AF%B4%E6%98%8E",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"在API中，空间参考类表示坐标系。它包含一个坐标系和辅助方法来访问和使用。间参考类与其他几个需要坐标系功能的API类相关联。例如，图层具有关联的空间参考。某些任务参数（例如查询任务和本地路由任务的任务参数）是空间参考对象。"}]},{type:a,value:c},{type:b,tag:A,props:{id:H},children:[{type:b,tag:e,props:{href:"#coordinate-systems%E5%92%8Cprojections",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:I}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"用于坐标系统的模型分为两大类：Coordinate systems和projections："}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"1). 地理坐标系（GCS）使用三维球面（或椭球面）来定义位置。\n坐标基于从地球中心到地表的角度。\n通常GCS使用以度为单位指定的纬度和经度。\n从GPS设备导出的坐标在名为WGS84的GCS（WKID = 4326）中返回。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"2). 投影坐标系统（PCS）是平面的（二维的），笛卡儿或“平坦的”。\n与GCS不同，投影坐标系统在两个维度上具有恒定的长度，角度和面积。\nPCSs使用地理坐标系统，然后扭曲数据，以便它可以表示在平面上用于打印的地图或屏幕上。坐标由网格上的x，y坐标标识。 ArcGIS Online，Google和OpenStreetMap底图使用相同的投影坐标系（名为Web Mercator辅助球体（WKID = 3857））。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"您可能会遇到第三个坐标系，即一个与任何其他坐标系无关的局部坐标系。\n原点和x，y坐标单位对应于本地参考点。由于局部坐标系与另一个坐标系的关系不容易建立，所以有时称为未知坐标系。"}]},{type:a,value:c},{type:b,tag:A,props:{id:u},children:[{type:b,tag:e,props:{href:"#%E4%BB%80%E4%B9%88%E6%97%B6%E5%80%99%E9%9C%80%E8%A6%81%E8%80%83%E8%99%91%E5%9D%90%E6%A0%87%E7%B3%BB%E5%8F%82%E8%80%83",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:u}]},{type:a,value:c},{type:b,tag:l,props:{id:J},children:[{type:b,tag:e,props:{href:"#mapview%E4%B8%8A%E6%B7%BB%E5%8A%A0layer",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:K}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"ArcGIS Runtime渲染地图时，需要在同一空间参考中绘制所有数据，以便数据排列整齐。当您创建MapView时，您添加的第一个图层的空间参考将用作整个地图的空间参考;这通常是底图(basemap)。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"当您向地图添加其他图层（MapView）时，您可能需要使用MapView使用的相同空间参考来请求它们。\n无论你是否必须要求这取决于你添加的图层类型。\n以下部分描述了与设置地图空间参考相关的图层类型。"}]},{type:a,value:c},{type:b,tag:l,props:{id:L},children:[{type:b,tag:e,props:{href:"#graphic-layers",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:M}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"图形层不支持数据的即时重投影;\nArcGIS Runtime呈现客户端的这些图层。\n对图形图层进行即时重投影可能需要大量处理，这会减慢MapView渲染时间。\n将图形图层添加到MapView时，必须确保其空间参考与MapView上定义的相同（通常由底图图层设置）。\n您还需要确保添加到图形图层的单个图形在匹配的空间参考中具有坐标;\n否则，图形可能不会显示在地图上."}]},{type:a,value:c},{type:b,tag:l,props:{id:N},children:[{type:b,tag:e,props:{href:"#feature-layers-from-feature-services",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:O}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"在使用由ArcGIS for Server功能服务支持的功能服务表时，服务器支持重新投影。\n将服务功能表添加到MapView时，请务必在初始化表之前根据MapView的空间参考设置其空间参考。\n这将确保以正确的空间参考从服务器请求数据。\n在使用ArcGIS要素图层时，如果将其添加到MapView中，ArcGIS Runtime会自动确定正确的空间参考并相应地从要素服务请求数据。"}]},{type:a,value:c},{type:b,tag:l,props:{id:P},children:[{type:b,tag:e,props:{href:"#feature-layers-from-geodatabase-feature-tables",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:Q}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"您的地理数据库中的表必须与要添加到其中的地图处于相同的空间参考中，因为不支持对这些表中的数据进行即时重新投影。\n如果您使用的是桌面工作流程，请在运行创建运行时内容工具之前确保ArcMap地图框架正在使用所需的空间参考。\n如果您正在使用服务工作流程，请在生成地理数据库之前在SyncTaskParameters中设置所需的空间参考。\n有关桌面和服务器工作流程的详细信息，请参阅本指南的“创建离线地图”主题中的“离线模式”。"}]},{type:a,value:c},{type:b,tag:l,props:{id:R},children:[{type:b,tag:e,props:{href:"#featurelayers-from-shapefiles-featuretables-and-geopackagesfeaturetables",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:S}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"地理数据库中的表格需要与您要添加到的地图处于相同的空间参考中;\n不支持从这些表中即时重新投射数据。"}]},{type:a,value:c},{type:b,tag:l,props:{id:T},children:[{type:b,tag:e,props:{href:"#dynamicmapservicelayers",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:U}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"如果这些是ArcGIS for Server地图服务，则服务器将支持重新投影。\n将ArcGISDynamicMapService添加到MapView时，ArcGIS Runtime将自动根据MapView的空间参考为您提供正确的空间参考地图图像。\nWMS地图服务是一种动态地图服务，它支持一组有限的空间参考，所以您应该在WMSLayer上设置空间参考，然后将其添加到MapView。"}]},{type:a,value:c},{type:b,tag:l,props:{id:V},children:[{type:b,tag:e,props:{href:"#tiled-layers",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:W}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"TiledLayers是预先存储的图层。\n在缓存时，使用空间参考，因此是预定义的。\n通常不可能在与服务中定义的空间引用不同的空间引用中请求TiledLayers（除非服务器支持在运行中执行此操作，大多数则不支持）。\n如果将ArcGIS平铺图层添加到不同空间参考的MapView中，则无法将其绘制为平铺图层。"}]},{type:a,value:c},{type:b,tag:l,props:{id:X},children:[{type:b,tag:e,props:{href:"#edit-data",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:Y}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"从坐标创建新要素时，坐标值必须与图层的空间参考相匹配;\n否则，这些功能将不会显示在地图上的正确位置。\n您可以使用几何引擎确保坐标在添加到图层之前正确转换。\n有关几何引擎的更多信息，请参阅几何操作。"}]},{type:a,value:c},{type:b,tag:l,props:{id:v},children:[{type:b,tag:e,props:{href:"#%E6%89%A7%E8%A1%8C%E5%88%86%E6%9E%90",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:v}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"用于分析的几何对象（例如，确定空间关系，例如多边形相交的位置）需要在执行分析之前知道空间参考。\n否则，结果可能不准确或不正确。\n同样，如果两个几何对象具有不同的空间参考，则比较两个几何对象或确定它们的空间关系是没有意义的。\n要在地图图层中显示几何图形，几何图形必须具有与图层相同的空间参考或投影到图层的空间参考。\n要一起使用两个对象，如果这些对象都具有空间参考，则它们应具有相同的空间参考。\n有关通过几何操作进行分析的更多信息，请参阅"},{type:b,tag:e,props:{href:"https:\u002F\u002Fdevelopers.arcgis.com\u002Fios\u002F10-2\u002Fswift\u002Fguide\u002Fgeometry-operations.htm",rel:[n,o,p],target:q},children:[{type:a,value:"几何操作"}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:l,props:{id:w},children:[{type:b,tag:e,props:{href:"#%E7%A9%BA%E9%97%B4%E5%8F%82%E8%80%83%E8%BD%AC%E6%8D%A2",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"当使用几何引擎将一个空间参考转换为另一个空间参考时，必须指定输入和输出空间参考。\n您也可以指定要使用的转换。\n有关详细信息，请参阅"},{type:b,tag:e,props:{href:"https:\u002F\u002Fdevelopers.arcgis.com\u002Fios\u002F10-2\u002Fswift\u002Fguide\u002Fgeometry-operations.htm#ESRI_SECTION2_98BDBE00EC5243F1BFA85323E76CCE4F",rel:[n,o,p],target:q},children:[{type:a,value:"“几何操作”中的投影到不同的空间参考"}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:l,props:{id:m},children:[{type:b,tag:e,props:{href:"#%E7%A9%BA%E9%97%B4%E5%8F%82%E8%80%83%E5%92%8C%E8%BD%AC%E6%8D%A2%E8%A7%84%E8%8C%83",ariaHidden:f,tabIndex:g},children:[{type:b,tag:h,props:{className:[i,j]},children:[]}]},{type:a,value:m}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"要定义空间参考，您可以使用WKID（有时也称为空间参考ID或SRID）或称为知名文本（WKT）的全文定义。\nWKID由标准组织或组织定义。\nArcGIS支持多种WKID，通常由欧洲石油调查组织（EPSG）或Esri定义的WKID以及其他一些常用的ID。\nWKT是指定空间参考的所有参数的全文定义（如上所述）。\n要了解支持哪些WKID并查看其WKT定义，请参阅以下内容："}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{href:"https:\u002F\u002Fdevelopers.arcgis.com\u002Fios\u002F10-2\u002Fswift\u002Fguide\u002Fgeographic-coordinate-systems.htm",rel:[n,o,p],target:q},children:[{type:a,value:"Geographic coordinate systems"}]},{type:a,value:c},{type:b,tag:e,props:{href:"https:\u002F\u002Fdevelopers.arcgis.com\u002Fios\u002F10-2\u002Fswift\u002Fguide\u002Fprojected-coordinate-systems-part-1.htm",rel:[n,o,p],target:q},children:[{type:a,value:"Projected coordinate systems"}]}]}]},dir:"\u002Fwiki\u002FSwift\u002Farcgis-basic",path:Z,extension:".md",createdAt:_,updatedAt:_},prev:{slug:$,title:aa,date:r},next:{slug:ab,title:ac,date:x},scrollTop:ad,sideCategory:[{folderName:"Swift",articles:[{slug:"Swift-2018-04-25",title:"使用snapkit实现简单的动画",date:"2018-04-25T11:18:58.000Z",path:"\u002Fwiki\u002FSwift\u002FSwift-2018-04-25"},{slug:"Swift-NSClassFromString-replace-method-in-swift",title:"NSClassFromString替代方法",date:B,path:"\u002Fwiki\u002FSwift\u002FSwift-NSClassFromString-replace-method-in-swift"},{slug:"Swift-load-gif",title:"加载gif图片",date:"2018-09-05T00:00:00.000Z",path:"\u002Fwiki\u002FSwift\u002FSwift-load-gif"},{slug:"Swift-objectmapper-EnumTransform",title:"objectmapper:EnumTransform",date:"2018-06-08T00:00:00.000Z",path:"\u002Fwiki\u002FSwift\u002FSwift-objectmapper-EnumTransform"}],children:[{folderName:"3rd",articles:[{slug:"3rd-Alamofire",title:"Alamofire",date:B,path:"\u002Fwiki\u002FSwift\u002F3rd\u002F3rd-Alamofire"},{slug:"3rd-moya",title:"Moya",date:B,path:"\u002Fwiki\u002FSwift\u002F3rd\u002F3rd-moya"}],children:[]},{folderName:"RxSwift",articles:[{slug:"RxSwift-rxswift-base-operator-combine",title:"RxSwift:(三)常用的操作符-Observable合并",date:"2019-09-20T00:00:00.000Z",path:"\u002Fwiki\u002FSwift\u002FRxSwift\u002FRxSwift-rxswift-base-operator-combine"},{slug:"RxSwift-rxswift-base-operator",title:"RxSwift:(三)常用的操作符",date:C,path:"\u002Fwiki\u002FSwift\u002FRxSwift\u002FRxSwift-rxswift-base-operator"},{slug:"RxSwift-rxswift-base",title:"RxSwift:(一)概念理解",date:"2018-04-11T00:00:00.000Z",path:"\u002Fwiki\u002FSwift\u002FRxSwift\u002FRxSwift-rxswift-base"},{slug:"RxSwift-rxswift-resource-trace",title:"RxSwift: Resource Trace",date:C,path:"\u002Fwiki\u002FSwift\u002FRxSwift\u002FRxSwift-rxswift-resource-trace"},{slug:"RxSwift-rxswift-todo-example",title:"RxSwift:(二)TODO demo项目总结",date:C,path:"\u002Fwiki\u002FSwift\u002FRxSwift\u002FRxSwift-rxswift-todo-example"}],children:[]},{folderName:"arcgis",articles:[{slug:$,title:aa,date:r,path:"\u002Fwiki\u002FSwift\u002Farcgis\u002Farcgis-arcgis-create-map"},{slug:"arcgis-arcgis-display-info",title:"(三)Display information",date:ae,path:"\u002Fwiki\u002FSwift\u002Farcgis\u002Farcgis-arcgis-display-info"},{slug:"arcgis-arcgis-layer-types",title:"(二)Layer types",date:ae,path:"\u002Fwiki\u002FSwift\u002Farcgis\u002Farcgis-arcgis-layer-types"}],children:[]},{folderName:G,articles:[{slug:"arcgis-basic-arcgis iOS SDK 使用(一)",title:"arcgis iOS SDK Tutorials(一)",date:D,path:"\u002Fwiki\u002FSwift\u002Farcgis-basic\u002Farcgis-basic-arcgis iOS SDK 使用(一)"},{slug:ab,title:ac,date:x,path:"\u002Fwiki\u002FSwift\u002Farcgis-basic\u002Farcgis-basic-arcgis-features-and-graphics"},{slug:"arcgis-basic-arcgis-install",title:"arcgis iOS SDK 安装集成",date:D,path:"\u002Fwiki\u002FSwift\u002Farcgis-basic\u002Farcgis-basic-arcgis-install"},{slug:E,title:F,date:r,path:Z},{slug:"arcgis-basic-arcgis-symbols-and-renderers",title:"基础(三):symbols and renderers",date:x,path:"\u002Fwiki\u002FSwift\u002Farcgis-basic\u002Farcgis-basic-arcgis-symbols-and-renderers"},{slug:"arcgis-basic-argcgis-ios-Layer-types",title:"基础(一):Layer types",date:x,path:"\u002Fwiki\u002FSwift\u002Farcgis-basic\u002Farcgis-basic-argcgis-ios-Layer-types"}],children:[]},{folderName:"arcgis-dev",articles:[{slug:"arcgis-dev-arcgis-draw",title:"绘制点、线、面,以及使用callout",date:"2018-04-17T09:32:27.000Z",path:"\u002Fwiki\u002FSwift\u002Farcgis-dev\u002Farcgis-dev-arcgis-draw"}],children:[]},{folderName:"wkwebview",articles:[{slug:"wkwebview-2018-04-24",title:"wkwebview本地url拼接参数的正确姿势",date:"2018-04-24T12:29:50.000Z",path:"\u002Fwiki\u002FSwift\u002Fwkwebview\u002Fwkwebview-2018-04-24"},{slug:"wkwebview-swift-with-jscore",title:"Swift与jscontext的交互",date:af,path:"\u002Fwiki\u002FSwift\u002Fwkwebview\u002Fwkwebview-swift-with-jscore"},{slug:"wkwebview-wkuidelegate",title:"WKUIDelegate",date:af,path:"\u002Fwiki\u002FSwift\u002Fwkwebview\u002Fwkwebview-wkuidelegate"},{slug:"wkwebview-wkwebview-cross-dom",title:"wkwebview跨域问题",date:"2018-04-20T09:30:15.000Z",path:"\u002Fwiki\u002FSwift\u002Fwkwebview\u002Fwkwebview-wkwebview-cross-dom"},{slug:"wkwebview-wkwebview-js",title:"WKWebView与js交互",date:"2018-04-03T00:00:00.000Z",path:"\u002Fwiki\u002FSwift\u002Fwkwebview\u002Fwkwebview-wkwebview-js"}],children:[]},{folderName:"奇淫巧技",articles:[{slug:"奇淫巧技-实现类似前端的asyncawait方法",date:"2020-10-23T08:32:55.000Z",title:"实现类似前端的async、await方法",path:"\u002Fwiki\u002FSwift\u002F奇淫巧技\u002F奇淫巧技-实现类似前端的asyncawait方法"}],children:[]},{folderName:"语法",articles:[{slug:"语法-==和===",date:"2020-10-26T09:01:34.000Z",title:"==和===区别",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-==和==="},{slug:"语法-ObjectIdentifier",date:"2020-11-11T08:59:35.000Z",title:"ObjectIdentifier",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-ObjectIdentifier"},{slug:"语法-Tuples",title:"元组",date:D,path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-Tuples"},{slug:"语法-canImport",date:"2020-11-12T06:46:10.000Z",title:"使用CanImport检查模块是否可用",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-canImport"},{slug:"语法-discardableResult",date:"2020-10-26T08:59:35.000Z",title:"DiscardableResult",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-discardableResult"},{slug:"语法-swift-protocal-let",date:"2020-10-26T08:38:25.000Z",title:"Let in Protocal ",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-swift-protocal-let"},{slug:"语法-swift-string-seprateby",title:"字符串分割(sperateByCharacterSet)",date:"2018-09-06T00:00:00.000Z",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-swift-string-seprateby"},{slug:"语法-带有私有设置方法的公有属性",date:"2020-11-11T01:54:54.000Z",title:"带有私有设置方法的公有属性",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-带有私有设置方法的公有属性"},{slug:"语法-遍历枚举值",date:"2020-11-12T06:14:44.000Z",title:"遍历枚举值(CaseIterable)",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-遍历枚举值"}],children:[]}]}]}],fetch:{},mutations:ad}}("text","element","\n","p","a","true",-1,"span","icon","icon-link",3,"h3","空间参考和转换规范","nofollow","noopener","noreferrer","_blank","2018-04-08T00:00:00.000Z","为什么空间参考很重要","关于设置空间参考的说明","什么时候需要考虑坐标系参考","执行分析","空间参考转换","2018-04-08T09:10:36.000Z",2,"。","h2","2018-04-11 12:33","2019-09-19T00:00:00.000Z","2018-04-04T00:00:00.000Z","arcgis-basic-arcgis-spatial-references","基础(四):Spatial references","arcgis-basic","coordinate-systems和projections","Coordinate systems和projections","mapview上添加layer","mapView上添加layer","graphic-layers","Graphic layers","feature-layers-from-feature-services","Feature layers from feature services","feature-layers-from-geodatabase-feature-tables","Feature layers from geodatabase feature tables","featurelayers-from-shapefiles-featuretables-and-geopackagesfeaturetables","FeatureLayers from shapefiles FeatureTables and GeoPackagesFeatureTables","dynamicmapservicelayers","DynamicMapServiceLayers","tiled-layers","Tiled layers","edit-data","Edit data","\u002Fwiki\u002FSwift\u002Farcgis-basic\u002Farcgis-basic-arcgis-spatial-references","2021-11-18T05:30:57.448Z","arcgis-arcgis-create-map","(一)构建地图","arcgis-basic-arcgis-features-and-graphics","基础(二):Features and graphics",void 0,"2018-04-09T14:51:54.000Z","2018-04-02T00:00:00.000Z")));