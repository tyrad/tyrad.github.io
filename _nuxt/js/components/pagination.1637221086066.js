(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{289:function(e,t,n){"use strict";var r=n(11),o=n(7),N=n(78),l=n(20),c=n(12),f=n(55),m=n(137),_=n(76),I=n(4),v=n(56),h=n(77).f,E=n(40).f,d=n(18).f,A=n(203).trim,w="Number",k=o.Number,C=k.prototype,S=f(v(C))==w,y=function(e){var t,n,r,o,N,l,c,code,f=_(e,!1);if("string"==typeof f&&f.length>2)if(43===(t=(f=A(f)).charCodeAt(0))||45===t){if(88===(n=f.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(f.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+f}for(l=(N=f.slice(2)).length,c=0;c<l;c++)if((code=N.charCodeAt(c))<48||code>o)return NaN;return parseInt(N,r)}return+f};if(N(w,!k(" 0o1")||!k("0b1")||k("+0x1"))){for(var x,F=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof F&&(S?I((function(){C.valueOf.call(n)})):f(n)!=w)?m(new k(y(t)),n,F):y(t)},T=r?h(k):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),M=0;T.length>M;M++)c(k,x=T[M])&&!c(F,x)&&d(F,x,E(k,x));F.prototype=C,C.constructor=F,l(o,w,F)}},296:function(e,t,n){"use strict";n.r(t);n(289);var r={name:"Pagination",props:{pageNum:{type:Number,default:0},pageCount:{type:Number,default:0},routeName:{type:String,default:"wiki-p"}}},o=n(22),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"pagination"},[n("li",[1!==e.pageNum?n("nuxt-link",{attrs:{to:{name:e.routeName,params:{p:e.pageNum-1}}}},[e._v("«\n    ")]):e._e()],1),e._v(" "),e._l(e.pageCount,(function(t){return n("li",[t!==e.pageNum?n("nuxt-link",{attrs:{to:{name:e.routeName,params:{p:t}}}},[e._v(e._s(t))]):e._e(),e._v(" "),t===e.pageNum?n("span",{staticStyle:{"margin-right":"5px"}},[e._v(e._s(t))]):e._e()],1)})),e._v(" "),n("li",[e.pageNum!==e.pageCount?n("nuxt-link",{attrs:{to:{name:e.routeName,params:{p:e.pageNum+1}}}},[e._v("»\n    ")]):e._e()],1)],2)}),[],!1,null,"453576f6",null);t.default=component.exports}}]);