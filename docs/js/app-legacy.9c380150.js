(function(e){function t(t){for(var r,o,a=t[0],c=t[1],l=t[2],s=0,f=[];s<a.length;s++)o=a[s],i[o]&&f.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);p&&p(t);while(f.length)f.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},i={app:0},u=[];function a(e){return c.p+"js/"+({"group-city":"group-city","group-food":"group-food","group-home":"group-home","group-login":"group-login","group-msite":"group-msite"}[e]||e)+"-legacy."+{"group-city":"97182ef7","group-food":"754c3163","group-home":"aedb8cdf","group-login":"2fb627b8","group-msite":"6a304640"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"group-city":1,"group-home":1,"group-login":1,"group-msite":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({"group-city":"group-city","group-food":"group-food","group-home":"group-home","group-login":"group-login","group-msite":"group-msite"}[e]||e)+"."+{"group-city":"b3be3a1a","group-food":"31d6cfe0","group-home":"23a8c1d2","group-login":"723b3c2e","group-msite":"ef5d6303"}[e]+".css",i=c.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var l=u[a],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===i))return t()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){l=f[a],s=l.getAttribute("data-href");if(s===r||s===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.request=r,delete o[e],p.parentNode.removeChild(p),n(u)},p.href=i;var d=document.getElementsByTagName("head")[0];d.appendChild(p)}).then(function(){o[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=u);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=a(e),l=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");u.type=r,u.request=o,n[1](u)}i[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:s})},12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/loVue-elm/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f59":function(e,t,n){},"24d9":function(e,t,n){},4506:function(e,t,n){"use strict";var r=n("b67c"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=(n("fbb7"),n("d847")),i=n.n(o),u=n("795b"),a=n.n(u),c=n("bc3a"),l=n.n(c),s={},f=l.a.create(s);f.CancelToken=l.a.CancelToken,f.isCancel=l.a.isCancel,f.all=l.a.all,f.interceptors.request.use(function(e){return e},function(e){return a.a.reject(e)}),f.interceptors.response.use(function(e){return e},function(e){return a.a.reject(e)}),Plugin.install=function(e,t){e.axios=f,window.axios=f,i()(e.prototype,{axios:{get:function(){return f}},$axios:{get:function(){return f}}})},r["default"].use(Plugin);Plugin;var p=n("76a0"),d=n.n(p),g=(n("aa35"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("vue-progress-bar")],1)}),h=[],m={created:function(){var e=this;this.$Progress.start(),this.$router.beforeEach(function(t,n,r){e.$indicator.close(),e.$Progress.start(),r()}),this.$router.afterEach(function(t,n){e.$Progress.finish()})},mounted:function(){this.$Progress.finish()}},y=m,b=n("2877"),v=Object(b["a"])(y,g,h,!1,null,null,null),w=v.exports,x=n("8c4f"),S=function(){return n.e("group-home").then(n.bind(null,"77b8"))},P=function(){return n.e("group-home").then(n.bind(null,"2e7f"))},j=function(){return n.e("group-login").then(n.bind(null,"dc3f"))},k=function(){return n.e("group-city").then(n.bind(null,"2427"))},C=function(){return n.e("group-msite").then(n.bind(null,"be73"))},E=function(){return n.e("group-food").then(n.bind(null,"46b4"))};r["default"].use(x["a"]);var O=new x["a"]({base:"/loVue-elm/",routes:[{path:"/",name:"home",component:S},{path:"/all-city",name:"allCity",component:P},{path:"/login",name:"login",component:j},{path:"/city/:cityId",name:"city",component:k},{path:"/msite",name:"msite",component:C},{path:"/food",name:"food",component:E}],scrollBehavior:function(e,t,n){return n||{x:0,y:0}}}),$=n("2f62");r["default"].use($["a"]);var _=new $["a"].Store({state:{cityInfo:{},addressInfo:{}},mutations:{setCityInfo:function(e,t){e.cityInfo=t},setAddressInfo:function(e,t){e.addressInfo=t}},actions:{}}),T=(n("0f59"),n("26b9")),I=n.n(T),A=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rect",style:{margin:e.margin,flex:e.flex,width:e.width,height:e.height,opacity:e.opacity}})}),B=[],M={name:"skeleton-rect",props:{margin:String,flex:String,width:{type:String,default:"100%"},height:{type:String,default:"26px"},opacity:{type:String,default:"1"}}},N=M,q=(n("4506"),Object(b["a"])(N,A,B,!1,null,"73b87328",null)),J=q.exports;J.install=function(e){e.component(J.name,J)};var L=J,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"circle",style:{margin:e.margin,flex:e.flex,width:e.diameter,height:e.diameter,opacity:e.opacity}})},z=[],D={name:"skeleton-circle",props:{margin:String,flex:String,diameter:String,opacity:{type:String,default:"1"}}},F=D,G=(n("6937"),Object(b["a"])(F,V,z,!1,null,"5695ecdc",null)),H=G.exports;H.install=function(e){e.component(H.name,H)};var K=H;r["default"].use(d.a),r["default"].use(L),r["default"].use(K);var Q={color:"#3eaf7c",thickness:"3px",transition:{speed:"0.2s",opacity:"0.6s",termination:300}};r["default"].use(I.a,Q),r["default"].config.productionTip=!1,new r["default"]({router:O,store:_,render:function(e){return e(w)}}).$mount("#app")},6937:function(e,t,n){"use strict";var r=n("24d9"),o=n.n(r);o.a},b67c:function(e,t,n){},fbb7:function(e,t,n){}});
//# sourceMappingURL=app-legacy.9c380150.js.map