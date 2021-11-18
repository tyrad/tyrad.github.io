__NUXT_JSONP__("/wiki/content/arcgis-basic-argcgis-ios-Layer-types", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae){return {data:[{},{article:{slug:B,title:C,layout:"page",date:p,collection:D,toc:[{id:E,depth:r,text:F},{id:G,depth:n,text:H},{id:I,depth:r,text:J},{id:K,depth:n,text:L},{id:M,depth:n,text:N},{id:O,depth:r,text:P},{id:Q,depth:n,text:R},{id:S,depth:n,text:T},{id:U,depth:r,text:V},{id:W,depth:n,text:X}],body:{type:"root",children:[{type:b,tag:"h1",props:{id:"layer-types"},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#layer-types",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:"Layer types"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"不同的图层类型用于绘制不同的数据类型。\n通常，地图中的图层可以分为底图(basemap)，操作图层(operational)或图形(graphics)图层。功能和性能可能会有所不同，具体取决于数据的特征以及它在应用程序中的访问方式和显示方式。"}]},{type:a,value:c},{type:b,tag:s,props:{id:E},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#choosing-layer-types",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"大多数图层显示来自GIS服务器Web服务的内容，例如ArcGIS for Server服务，Bing地图，Open Street Map或WMS服务。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"其中一种服务被称为地图服务。地图服务分为两大类：动态(dynamic)或平铺(tiled)。"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"动态地图服务,返回客户请求时,即时创建的地图图像。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"平铺地图服务根据某种切片方案(based on some tiling scheme)提供预先生成(pre-generated)的图像，并且图层在客户端应用程序中组合这些切片。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"另一种服务被称为特色服务( feature service)。 作为响应，ArcGIS for Server要素服务会从单个图层返回一组要素。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"其他图层显示不同类型的内容:"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"图形层(graphics layer)不依赖于Web服务的内容。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"专业层(Specialized layers)也可用于处理数据源，如Web地图服务（WMS）信息和KML。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"以下部分提供了用于底图(basemap)，操作(operational)和图形(graphics)图层的典型类。然而，这些并不是绝对的规则，并且类别的选择应该基于对每种类型特征的理解。\n以下部分将讨论一些例外情况。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"API提供了各种各样的图层类。\n每个可用于显示特定的数据类型，并且每个都有其自己的功能和性能特征。\n通常，每个图层类都用于特定图层类型 - 底图(basemap)，操作(operational)和图形(graphics)图层."}]},{type:a,value:c},{type:b,tag:o,props:{id:G},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#common-layer-properties",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"全部的layer types都继承自common class ,它允许为任何图层类型查询或更改某些属性。"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"获取layer的full extent,使用"},{type:b,tag:m,props:{},children:[{type:a,value:"fullEnvelope"}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"使用spatialReference方法确定图层使用的空间参考(patial reference)。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"显示或隐藏layer使用"},{type:b,tag:m,props:{},children:[{type:a,value:"visible"}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"控制透明度用"},{type:b,tag:m,props:{},children:[{type:a,value:"opacity"}]},{type:a,value:w}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"使用"},{type:b,tag:m,props:{},children:[{type:a,value:"minScale"}]},{type:a,value:"和"},{type:b,tag:m,props:{},children:[{type:a,value:"maxScale"}]},{type:a,value:"属性更改可见图层的比​​例范围阈值。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:s,props:{id:I},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#basemap-layers",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"通常将底图数据设置为平铺地图图层(tiled map layer)。根据显示的数据，不同的class用于创建底图图层。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"如果您的底图必须在具有各种不同空间参考的地图中使用，或者经常更改或者不经常使用，那么将数据发布为动态地图服务可能更合适。此外，如果您的操作数据很少更改并被大量用户使用，则将它作为平铺地图服务发布可能更合适。"}]},{type:a,value:c},{type:b,tag:o,props:{id:K},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#tiled-service-layers",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"API classes："},{type:b,tag:m,props:{},children:[{type:a,value:"AGSTiledMapServiceLayer"}]},{type:a,value:t},{type:b,tag:m,props:{},children:[{type:a,value:"AGSBingMapLayer"}]},{type:a,value:t},{type:b,tag:m,props:{},children:[{type:a,value:"AGSOpenStreetMapLayer"}]},{type:a,value:t},{type:b,tag:m,props:{},children:[{type:a,value:"AGSWebTiledLayer"}]},{type:a,value:t},{type:b,tag:m,props:{},children:[{type:a,value:"AGSWMTSLayer-Tiled"}]},{type:a,value:"地图服务图层连接到缓存地图服务（来自ArcGIS for Server，OpenGIS Web地图图块服务实现，OpenStreetMap或Bing），它们以预定义的比例提供地图图像。\n在平铺方案中。\n平铺方案由服务器设置。\n地图图像拼贴是在地图视图上绘制的栅格（也称为位图）图像，并由客户机API安排到其拼贴方案中。\n这些服务可以包含多个子层。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Functional characteristics 功能特点"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"由于服务器上已存在每个平铺图像(tile image)，因此无法更改单个图层的可见性或服务的地图默认空间参考（它们可被视为静态地图服务）。\n另外，除非高速缓存被刷新，否则数据不能随时间变化。\n平铺的服务层无法查询。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Performance characteristics 性能特点"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"平铺地图服务是运行时可用的最快的地图服务。\n地图图像是由服务器预先创建和缓存的，并且很快从服务器返回。\n多个图像通常会返回一个地图范围。\n请求是在多个线程上完成的，并且响应是异步处理的（分片被请求并且彼此单独绘制）。\n这种方法会导致对服务器的很多小型请求，而客户端处理很少会绘制返回的图像。\n每个返回图像的大小随着图像的分辨率或复杂度的增加而增加。\n例如，对于相同的区域和地图范围，高分辨率图像切片的文件大小大于地形图。"}]},{type:a,value:c},{type:b,tag:o,props:{id:M},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#offline-tiled-layers",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:N}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"API类AGSLocalTiledLayer - 可以将瓦片缓存从服务器下载到客户端设备，并在应用程序中显示为图层，而无需保持连接到服务。\n缓存可以作为单个Tile Package（TPK）文件或ArcGIS Compact Cache下载，也可以使用ArcGIS for Desktop创建并直接配置到设备。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Functional and performance characteristics"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"本地平铺图层比平铺服务图层显示速度更快，因为不需要网络调用来检索图像切片。\n但是，数据必须预先准备好，并通过网络生成并下载到设备，或者直接将生成的文件供应给设备文件存储。\n其他功能和性能特征与平铺服务层的特征类似。"}]},{type:a,value:c},{type:b,tag:s,props:{id:O},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#operational-layers",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:P}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"操作数据通常作为要素服务(feature service)或作为动态地图服务(dynamic map service)进行配置。\n服务类型的选择取决于层需要哪些功能和性能特征。\n如果需要编辑，请使用功能服务(feature service); 然而，如果需要复杂的渲染，动态地图服务可能更合适。\n下面强调了更多的差异。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"如果您的操作数据不需要编辑，更改频率不高，并且被大量用户使用，将它作为平铺地图服务发布可能更合适。\n相反，如果您的底图必须在具有各种不同空间参考的地图中使用，或者经常更改或者很少使用，那么将数据发布为动态地图服务可能更合适。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Feature layers 类似地图覆盖物?"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"要素图层(Feature layers)显示来自要素服务的数据。\n要素图层可用于显示，选择和查询图层中的要素。\n如果底层要素服务支持编辑，请使用要素图层来编辑几何图元，属性和附件。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"可以在使用应用程序时从服务器检索功能，或者可以在设备连接时下载功能，并在设备脱机时本地缓存以供使用。\n选择最合适的API选项可让您的应用程序提供所需的工作流程，并使其能够适应情况的要求。\n有关可用的不同选项的更多信息，请参阅下面的部分。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Online"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"API类：AGSFeatureTableLayer（基于AGSGDBFeatureServiceTable） - 要素服务中要素的几何图元，属性和附件被临时缓存在客户端的表中。\n要素图层使用此表根据地图范围在地图中原生地绘制要素。\n导航地图时会自动检索新功能。\n除非特别刷新图层，否则不会从服务器表中检索已在应用程序中缓存的功能更改。\n当处理图层时，本地表缓存将被丢弃。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"创建并初始化AGSGDBFeatureServiceTable，然后通过将AGSGDBFeatureServiceTable传递给构造函数来创建AGSFeatureTableLayer，最后将AGSFeatureTableLayer添加到地图中。\nAGSGDBFeatureServiceTable类是AGSGDBFeatureTable的子类型，用于离线要素图层。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Offline"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"API类：AGSGDBFeatureTable，AGSFeatureTableLayer - 可以从ArcGIS for Server下载功能服务的本地缓存，并将其显示为应用中的图层，而无需保持连接到服务。使用AGSGDBSyncTask将功能下载到本地地理数据库文件。创建并初始化一个AGSGDBFeatureTable，并通过将AGSGDBFeatureTable传递给构造函数来创建一个AGSFeatureTableLayer，然后将AGSFeatureTableLayer添加到地图中。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"创建并初始化一个AGSGDBFeatureTable，并通过将AGSGDBFeatureTable传递给构造函数来创建一个AGSFeatureTableLayer，然后将AGSFeatureTableLayer添加到地图中。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"由于要素属性，几何图形和附件信息在本地缓存，因此可以根据空间查询或基于文本的WHERE子句查询和过滤这些图层中的各个要素。如果图层是通过可编辑的ArcGIS for Server要素服务创建的，则可以编辑要素图层，并在需要时编辑推送到服务。 如果该图层最初是通过支持同步创建的，则可以将对离线图层中的要素所做的编辑上载到该服务，并且可以将该服务的更新同步到客户端应用程序。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"如果该图层最初是通过支持同步创建的，则可以将对离线图层中的要素所做的编辑上载到该服务，并且可以将该服务的更新同步到客户端应用程序。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:v}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"由于完整的特征信息在本地缓存，并且特征是本地绘制的，因此在缩放和平移地图时，此图层类型在缓存特征的范围内提供了卓越的显示性能。\n查询这些功能也很有效，可以实现应用程序功能，例如在地图中实时更新查询结果。\n本地缓存必须最初创建，这需要服务器端处理时间，并且下载到设备可能需要大量的网络使用和随后的本地设备存储。\n此外，应用程序内存随着缓存功能的数量和复杂性而增加。\n网络使用可以通过预先将缓存直接配置给设备来消除，方法是使用台式计算机创建缓存并将其复制到设备的内部存储器（如果设备支持此功能，则为可扩展存储卡），这可能是一个合适的工作流程，如果数据没有经常变化。"}]},{type:a,value:c},{type:b,tag:o,props:{id:Q},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#arcgis-feature-service-layers",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:R}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"API类：AGSFeatureLayer - 要素服务图层通过来自ArcGIS for Server要素服务或地图服务的JavaScript对象表示法（JSON）响应创建要素。\n每个特征都包含几何图形和属性信息，并在地图中本地绘制。\nArcGIS要素服务图层只能在设备保持连接时使用;\n但是，它们确实提供对地理数据库版本和相关字段上的查询的支持。\n许多现有应用程序在将其添加到API之前使用ArcGIS要素服务图层，然后才能使用其他要素图层类型。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"与其他要素图层类型一样，ArcGIS要素服务图层提供了丰富的功能，因为它们包含有关地图上显示的所有要素的完整信息。\n可以根据空间查询或基于文本的WHERE子句查询，选择和过滤这些图层中的各个要素。\n如果图层是从可编辑的ArcGIS for Server要素服务创建的，则可以编辑要素图层。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:v}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"就服务器的请求处理时间，响应处理时间和渲染速度而言，功能层的丰富功能的成本很低。\n这是因为有关每个功能的信息由服务器返回，经过分析并处理成设备上的功能，然后绘制到屏幕上。要素服务图层的性能特征可以通过更改要素图层设置进行调整。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"了解这些问题并为您的方案应用最合适的功能图层设置，可帮助您最大限度地提高应用功能图层的性能并构建令人兴奋的功能应用程序。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Feature service layer settings"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"通过更改要素服务图层的客户端设置，您可以更改图层性能的所有方面，包括请求频率配置文件，响应大小，处理时间和渲染时间。"}]},{type:a,value:c},{type:b,tag:"blockquote",props:{},children:[{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"为了获得最佳性能，无论客户端设置如何，您仍应遵循在服务器上设置服务的最佳实践。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Output attribute fields— 可以通过设置所需输出字段的列表来限制从服务器返回的属性字段。这意味着更少的数据通过网络发送并在响应中处理，因为响应包含的信息较少。使用AGSFeatureLayer类的outFields属性。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Maximum vertex offset - 通过设置最大偏移值可以减少从服务器返回的几何图形的复杂程度，从而减少内存大小。\n此值在地图单位中设置，用于在返回信息之前概括服务器上的要素顶点。\n如果您正在编辑该功能，则不应使用它，因为某些顶点将丢失，并且拓扑规则可能很容易被破坏。\n使用AGSFeatureLayer类中的maxAllowableOffset字段。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Mode—特征服务层支持三种不同的模式，这会显着影响图层的功能和性能。\n在传递给要素图层构造函数的AGSFeatureLayer的模式字段中设置您需要的模式。 模式包括Snapshot( 将图层添加到地图后，会立即从服务器检索功能，并且不会再次请求)、On demand(只有地图当前范围内的功能才能从服务中检索。)、Selection(仅在进行选择时才会从服务中请求功能。)\nFeature collections—用于显示要素服务的同一类也可以初始化，以显示一组要素，可以使用来自ArcGIS for Server具象状态传输（REST）API调用的JSON字符串定义要素，也可以使用代码手动创建要素。\n在这种情况下不需要主动服务连接。\n该层可以按照与普通要素图层相同的方式进行查询。"}]},{type:a,value:c},{type:b,tag:o,props:{id:S},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#dynamic-map-service-layers",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:T}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"PI类：AGSDynamicMapServiceLayer，AGSImageServiceLayer - 动态地图服务可以包含多个图层，每次请求时都会由服务器呈现，并作为单个栅格图像返回给客户端。\n该图像不包含有关地图中的功能的任何其他信息。\n动态地图图层连接到ArcGIS for Server动态地图服务。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"由于地图图像是由服务器在每次请求时绘制的，所以如果您的数据发生变化，只要请求新的地图图像就会看到这些更改。\n此外，可以更改各个地图图层的可见性，并且可以通过添加单个图层定义表达式来过滤显示的数据。\n此图层类型的空间参考可以从服务的默认设置改变，ArcGIS for Server可以将每个图像即时重新投影到请求的输出空间参考（地图的）。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"该API不包括查询个人动态地图服务图层的具体方法。\n但是，图层的终点URL可以被查找任务使用，标识任务，查询任务或用于创建单独的可查询要素图层。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:v}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"对于每个地图请求，ArcGIS for Server都可以即时创建地图图像。因此，服务器渲染时间取决于地图中数据的数量和复杂程度。但是，如果地图服务得到了充分优化，这应该会对客户端做出相对快速的响应，但通常会比等效平铺地图服务层的响应时间更长。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"返回的地图图片的文件大小还取决于地图中的数据。由于服务器响应是图像，因此它可以快速绘制，因为它只需要很少的客户端处理。 只要客户端不需要特征信息（属性，几何图形或符号），动态地图服务图层就可以显示随时间周期性变化的特征或需要用户进行某种过滤的特征。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"它们通常与选择模式中的要素图层结合使用，以显示最新的地图数据，而无需从每个地图请求中提取服务器中的所有要素信息（如feature layers）。"}]},{type:a,value:c},{type:b,tag:s,props:{id:U},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#graphics-layers",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:V}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"图形图层可用于显示上面其他类型图层未覆盖的信息。图形是根据用户操作，从操作产生的，或者从外部信息源中的信息转换而在应用程序的内存中定义的。 要素图层与图形图层共享一点功能。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"有关何时使用功能图层与图形图层的更多信息，请参阅功能和图形。\nAPI类：图形图层中的AGSGraphicsLayer-Graphics可以包含几何图形和属性信息，并且可以使用单独的符号或基于图层的渲染器来绘制图形。与要素图层( feature layer)中的要素(feature)一样，每个图形都在本地绘制在地图中。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:u}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"由于图形包含几何图形和属性信息，因此可以显示有关图形的信息。例如，您可以在图形图层中显示图形的弹出窗口。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"您还可以使用屏幕坐标查找图形，并将其重新映射到地图上的用户操作事件。图形层负责在地图上以空间坐标绘制图形。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"它不是设计用于绘制非地理边缘，例如北方箭头或版权文本。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:v}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"不建议向图形层添加太多图形，因为它们被保存在设备内存中。如果您正在使用许多功能（数千个），则通过创建功能服务将这些功能放入功能层可能更合适。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"当图形定期更改位置时，图形图层的设计能够最好地执行，并且在地图上放大和缩小时可以实现特征的最佳动画效果。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"可以将图形图层的默认渲染模式更改为优化，以批量绘制添加到图层的更多数量的特征。具有相同渲染模式的图层应该组合在一起。"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"有关更多信息，请参阅AGSGraphicsLayerRenderingMode枚举。"}]},{type:a,value:c},{type:b,tag:o,props:{id:W},children:[{type:b,tag:g,props:{ariaHidden:h,href:"#specialized-layers",tabIndex:i},children:[{type:b,tag:j,props:{className:[k,l]},children:[]}]},{type:a,value:X}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"其他图层类可用于在地图中显示特定类型的数据。"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Group layers- 组图层由其他图层的集合组成，用于表示由多个不同图层组成的数据集。"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"例如，KML图层和消息组图层都是组图层的类型。所有组层都从AGSGroupLayer超类继承。"}]},{type:a,value:c},{type:b,tag:q,props:{},children:[{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"WMS—Web Map Service layers 允许您将Open Geospatial Consortium（OGC）WMS服务添加到地图。 这些服务是一种动态地图服务，可用作底图或操作层。 AGSWMSLayer用于将WMS服务添加到地图。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Message groups - 消息组层使用来自其中一种受支持的符号字典类型的军事符号显示图形。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Bing maps - Bing地图服务可以添加为地图中的图层。通过使用specialist AGSBingMapLayer类，Bing地图服务可以添加为地图中的图层。这些服务是平铺地图（tiled map）服务，通常为地图提供底图图层。"}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"OpenStreetMap。通过使用专家AGSOpenStreetMapLayer类，可以将Open StreetMap服务添加为地图中的图层。这些服务是平铺地图服务，通常为地图提供底图图层。"}]},{type:a,value:c}]}]},dir:"\u002Fwiki\u002FSwift\u002Farcgis-basic",path:Y,extension:".md",createdAt:Z,updatedAt:Z},prev:{slug:_,title:$,date:p},next:{slug:aa,title:ab,date:x},scrollTop:ac,sideCategory:[{folderName:"Swift",articles:[{slug:"Swift-2018-04-25",title:"使用snapkit实现简单的动画",date:"2018-04-25T11:18:58.000Z",path:"\u002Fwiki\u002FSwift\u002FSwift-2018-04-25"},{slug:"Swift-NSClassFromString-replace-method-in-swift",title:"NSClassFromString替代方法",date:y,path:"\u002Fwiki\u002FSwift\u002FSwift-NSClassFromString-replace-method-in-swift"},{slug:"Swift-load-gif",title:"加载gif图片",date:"2018-09-05T00:00:00.000Z",path:"\u002Fwiki\u002FSwift\u002FSwift-load-gif"},{slug:"Swift-objectmapper-EnumTransform",title:"objectmapper:EnumTransform",date:"2018-06-08T00:00:00.000Z",path:"\u002Fwiki\u002FSwift\u002FSwift-objectmapper-EnumTransform"}],children:[{folderName:"3rd",articles:[{slug:"3rd-Alamofire",title:"Alamofire",date:y,path:"\u002Fwiki\u002FSwift\u002F3rd\u002F3rd-Alamofire"},{slug:"3rd-moya",title:"Moya",date:y,path:"\u002Fwiki\u002FSwift\u002F3rd\u002F3rd-moya"}],children:[]},{folderName:"RxSwift",articles:[{slug:"RxSwift-rxswift-base-operator-combine",title:"RxSwift:(三)常用的操作符-Observable合并",date:"2019-09-20T00:00:00.000Z",path:"\u002Fwiki\u002FSwift\u002FRxSwift\u002FRxSwift-rxswift-base-operator-combine"},{slug:"RxSwift-rxswift-base-operator",title:"RxSwift:(三)常用的操作符",date:z,path:"\u002Fwiki\u002FSwift\u002FRxSwift\u002FRxSwift-rxswift-base-operator"},{slug:"RxSwift-rxswift-base",title:"RxSwift:(一)概念理解",date:"2018-04-11T00:00:00.000Z",path:"\u002Fwiki\u002FSwift\u002FRxSwift\u002FRxSwift-rxswift-base"},{slug:"RxSwift-rxswift-resource-trace",title:"RxSwift: Resource Trace",date:z,path:"\u002Fwiki\u002FSwift\u002FRxSwift\u002FRxSwift-rxswift-resource-trace"},{slug:"RxSwift-rxswift-todo-example",title:"RxSwift:(二)TODO demo项目总结",date:z,path:"\u002Fwiki\u002FSwift\u002FRxSwift\u002FRxSwift-rxswift-todo-example"}],children:[]},{folderName:"arcgis",articles:[{slug:"arcgis-arcgis-create-map",title:"(一)构建地图",date:ad,path:"\u002Fwiki\u002FSwift\u002Farcgis\u002Farcgis-arcgis-create-map"},{slug:aa,title:ab,date:x,path:"\u002Fwiki\u002FSwift\u002Farcgis\u002Farcgis-arcgis-display-info"},{slug:"arcgis-arcgis-layer-types",title:"(二)Layer types",date:x,path:"\u002Fwiki\u002FSwift\u002Farcgis\u002Farcgis-arcgis-layer-types"}],children:[]},{folderName:D,articles:[{slug:"arcgis-basic-arcgis iOS SDK 使用(一)",title:"arcgis iOS SDK Tutorials(一)",date:A,path:"\u002Fwiki\u002FSwift\u002Farcgis-basic\u002Farcgis-basic-arcgis iOS SDK 使用(一)"},{slug:"arcgis-basic-arcgis-features-and-graphics",title:"基础(二):Features and graphics",date:p,path:"\u002Fwiki\u002FSwift\u002Farcgis-basic\u002Farcgis-basic-arcgis-features-and-graphics"},{slug:"arcgis-basic-arcgis-install",title:"arcgis iOS SDK 安装集成",date:A,path:"\u002Fwiki\u002FSwift\u002Farcgis-basic\u002Farcgis-basic-arcgis-install"},{slug:"arcgis-basic-arcgis-spatial-references",title:"基础(四):Spatial references",date:ad,path:"\u002Fwiki\u002FSwift\u002Farcgis-basic\u002Farcgis-basic-arcgis-spatial-references"},{slug:_,title:$,date:p,path:"\u002Fwiki\u002FSwift\u002Farcgis-basic\u002Farcgis-basic-arcgis-symbols-and-renderers"},{slug:B,title:C,date:p,path:Y}],children:[]},{folderName:"arcgis-dev",articles:[{slug:"arcgis-dev-arcgis-draw",title:"绘制点、线、面,以及使用callout",date:"2018-04-17T09:32:27.000Z",path:"\u002Fwiki\u002FSwift\u002Farcgis-dev\u002Farcgis-dev-arcgis-draw"}],children:[]},{folderName:"wkwebview",articles:[{slug:"wkwebview-2018-04-24",title:"wkwebview本地url拼接参数的正确姿势",date:"2018-04-24T12:29:50.000Z",path:"\u002Fwiki\u002FSwift\u002Fwkwebview\u002Fwkwebview-2018-04-24"},{slug:"wkwebview-swift-with-jscore",title:"Swift与jscontext的交互",date:ae,path:"\u002Fwiki\u002FSwift\u002Fwkwebview\u002Fwkwebview-swift-with-jscore"},{slug:"wkwebview-wkuidelegate",title:"WKUIDelegate",date:ae,path:"\u002Fwiki\u002FSwift\u002Fwkwebview\u002Fwkwebview-wkuidelegate"},{slug:"wkwebview-wkwebview-cross-dom",title:"wkwebview跨域问题",date:"2018-04-20T09:30:15.000Z",path:"\u002Fwiki\u002FSwift\u002Fwkwebview\u002Fwkwebview-wkwebview-cross-dom"},{slug:"wkwebview-wkwebview-js",title:"WKWebView与js交互",date:"2018-04-03T00:00:00.000Z",path:"\u002Fwiki\u002FSwift\u002Fwkwebview\u002Fwkwebview-wkwebview-js"}],children:[]},{folderName:"奇淫巧技",articles:[{slug:"奇淫巧技-实现类似前端的asyncawait方法",date:"2020-10-23T08:32:55.000Z",title:"实现类似前端的async、await方法",path:"\u002Fwiki\u002FSwift\u002F奇淫巧技\u002F奇淫巧技-实现类似前端的asyncawait方法"}],children:[]},{folderName:"语法",articles:[{slug:"语法-==和===",date:"2020-10-26T09:01:34.000Z",title:"==和===区别",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-==和==="},{slug:"语法-ObjectIdentifier",date:"2020-11-11T08:59:35.000Z",title:"ObjectIdentifier",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-ObjectIdentifier"},{slug:"语法-Tuples",title:"元组",date:A,path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-Tuples"},{slug:"语法-canImport",date:"2020-11-12T06:46:10.000Z",title:"使用CanImport检查模块是否可用",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-canImport"},{slug:"语法-discardableResult",date:"2020-10-26T08:59:35.000Z",title:"DiscardableResult",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-discardableResult"},{slug:"语法-swift-protocal-let",date:"2020-10-26T08:38:25.000Z",title:"Let in Protocal ",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-swift-protocal-let"},{slug:"语法-swift-string-seprateby",title:"字符串分割(sperateByCharacterSet)",date:"2018-09-06T00:00:00.000Z",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-swift-string-seprateby"},{slug:"语法-带有私有设置方法的公有属性",date:"2020-11-11T01:54:54.000Z",title:"带有私有设置方法的公有属性",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-带有私有设置方法的公有属性"},{slug:"语法-遍历枚举值",date:"2020-11-12T06:14:44.000Z",title:"遍历枚举值(CaseIterable)",path:"\u002Fwiki\u002FSwift\u002F语法\u002F语法-遍历枚举值"}],children:[]}]}]}],fetch:{},mutations:ac}}("text","element","\n","p","strong","li","a","true",-1,"span","icon","icon-link","code",3,"h3","2018-04-08T09:10:36.000Z","ul",2,"h2","，","Functional characteristics","Performance characteristics","属性","2018-04-09T14:51:54.000Z","2018-04-11 12:33","2019-09-19T00:00:00.000Z","2018-04-04T00:00:00.000Z","arcgis-basic-argcgis-ios-Layer-types","基础(一):Layer types","arcgis-basic","choosing-layer-types","Choosing layer types","common-layer-properties","Common layer properties","basemap-layers","Basemap layers","tiled-service-layers","Tiled service layers","offline-tiled-layers","Offline tiled layers","operational-layers","Operational layers","arcgis-feature-service-layers","ArcGIS feature service layers","dynamic-map-service-layers","Dynamic map service layers","graphics-layers","Graphics layers","specialized-layers","Specialized layers","\u002Fwiki\u002FSwift\u002Farcgis-basic\u002Farcgis-basic-argcgis-ios-Layer-types","2021-11-18T05:30:57.448Z","arcgis-basic-arcgis-symbols-and-renderers","基础(三):symbols and renderers","arcgis-arcgis-display-info","(三)Display information",void 0,"2018-04-08T00:00:00.000Z","2018-04-02T00:00:00.000Z")));