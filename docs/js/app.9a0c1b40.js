(function(t){function e(e){for(var r,o,u=e[0],s=e[1],c=e[2],l=0,f=[];l<u.length;l++)o=u[l],a[o]&&f.push(a[o][0]),a[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function u(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"987c5914"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"bf078c75"}[t]+".css",a=s.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var c=i[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return e()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){c=f[u],l=c.getAttribute("data-href");if(l===r||l===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.request=r,delete o[t],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[t]=0}));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=i);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(t),c=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[t]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/loVue-elm/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var f=0;f<c.length;f++)e(c[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"341f":function(t,e,n){"use strict";var r=n("92a0"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),o=(n("fbb7"),n("d847")),a=n.n(o),i=n("795b"),u=n.n(i),s=n("bc3a"),c=n.n(s),l={},f=c.a.create(l);f.interceptors.request.use(function(t){return t},function(t){return u.a.reject(t)}),f.interceptors.response.use(function(t){return t},function(t){return u.a.reject(t)}),Plugin.install=function(t,e){t.axios=f,window.axios=f,a()(t.prototype,{axios:{get:function(){return f}},$axios:{get:function(){return f}}})},r["default"].use(Plugin);Plugin;var d=n("76a0"),p=n.n(d),h=(n("aa35"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),m=[],g=(n("7faf"),n("2877")),b={},v=Object(g["a"])(b,h,m,!1,null,null,null);v.options.__file="App.vue";var y=v.exports,C=n("8c4f"),x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-box text-left"},[n("mt-header",{attrs:{fixed:""}},[n("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[n("mt-button",[t._v("ele.me")])],1),n("router-link",{attrs:{slot:"right",to:"/login"},slot:"right"},[n("mt-button",[t._v("登录 | 注册")])],1)],1),n("div",{staticClass:"margin-bottom"},[n("mt-cell",{staticClass:"border-bottom",attrs:{title:"当前定位城市："}},[n("span",{staticClass:"subheading"},[t._v("定位不准时，请在城市列表中选择")])]),n("mt-cell",{staticClass:"border-bottom",attrs:{title:t.guessCity,to:"./city/"+t.guessCityid,"is-link":""}})],1),t.hotCity.length>0?n("div",{staticClass:"city-container margin-bottom"},[n("h3",[t._v("热门城市：")]),n("ul",{staticClass:"city-box"},t._l(t.hotCity,function(e){return n("router-link",{key:e.id,attrs:{tag:"li",to:"/city/"+e.id}},[t._v("\n                "+t._s(e.name)+"\n            ")])}),1)]):t._e(),n("mt-cell",{staticClass:"border-bottom",attrs:{title:"所有城市",to:"./all-city","is-link":""}})],1)},_=[],w=(n("7f7f"),{data:function(){return{guessCity:"",guessCityid:"",hotCity:[]}},mounted:function(){this.getGuessCity(),this.getHotCity()},methods:{getGuessCity:function(){var t=this;axios.get("https://elm.cangdu.org/v1/cities",{params:{type:"guess"}}).then(function(e){200===e.status&&"OK"===e.statusText?(t.guessCity=e.data.name,t.guessCityid=e.data.id):Object(d["Toast"])({message:"定位失败，请在城市列表中选择",position:"bottom",duration:2e3})}).catch(function(t){Object(d["Toast"])({message:"定位失败，请在城市列表中选择",position:"bottom",duration:2e3}),console.log(t)})},getHotCity:function(){var t=this;d["Indicator"].open({text:"加载中...",spinnerType:"fading-circle"}),axios.get("https://elm.cangdu.org/v1/cities",{params:{type:"hot"}}).then(function(e){d["Indicator"].close(),200===e.status&&"OK"===e.statusText&&(t.hotCity=e.data)}).catch(function(t){console.log(t)})}}}),j=w,O=(n("341f"),Object(g["a"])(j,x,_,!1,null,null,null));O.options.__file="home.vue";var k=O.exports;r["default"].use(C["a"]);var T=new C["a"]({mode:"history",base:"/loVue-elm/",routes:[{path:"/",name:"home",component:k},{path:"/all-city",name:"allCity",component:function(){return n.e("about").then(n.bind(null,"2e7f"))}}],scrollBehavior:function(t,e,n){return n||{x:0,y:0}}}),P=n("2f62");r["default"].use(P["a"]);var E=new P["a"].Store({state:{},mutations:{},actions:{}});r["default"].use(p.a),r["default"].config.productionTip=!1,T.beforeEach(function(t,e,n){n()}),new r["default"]({router:T,store:E,render:function(t){return t(y)}}).$mount("#app")},"7faf":function(t,e,n){"use strict";var r=n("8fba"),o=n.n(r);o.a},"8fba":function(t,e,n){},"92a0":function(t,e,n){},fbb7:function(t,e,n){}});
//# sourceMappingURL=app.9a0c1b40.js.map