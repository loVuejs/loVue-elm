(function(t){function e(e){for(var r,o,s=e[0],u=e[1],l=e[2],c=0,f=[];c<s.length;c++)o=s[c],a[o]&&f.push(a[o][0]),a[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a={app:0},i=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"84172248"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"58977df6"}[t]+".css",a=u.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===r||c===a))return e()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){l=f[s],c=l.getAttribute("data-href");if(c===r||c===a)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||a,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.request=r,delete o[t],d.parentNode.removeChild(d),n(i)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)}).then(function(){o[t]=0}));var r=a[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=a[t]=[e,n]});e.push(r[2]=i);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(t),l=function(e){c.onerror=c.onload=null,clearTimeout(f);var n=a[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[t]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:c})},12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/loVue-elm/",u.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var f=0;f<l.length;f++)e(l[f]);var d=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"341f":function(t,e,n){"use strict";var r=n("92a0"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("ac6a");var r=n("2b0e"),o=(n("fbb7"),n("bc3a")),a=n.n(o);let i={};const s=a.a.create(i);s.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),s.interceptors.response.use(function(t){return t},function(t){return Promise.reject(t)}),Plugin.install=function(t,e){t.axios=s,window.axios=s,Object.defineProperties(t.prototype,{axios:{get(){return s}},$axios:{get(){return s}}})},r["default"].use(Plugin);Plugin;var u=n("76a0"),l=n.n(u),c=(n("aa35"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),f=[],d=(n("7faf"),n("2877")),p={},h=Object(d["a"])(p,c,f,!1,null,null,null);h.options.__file="App.vue";var m=h.exports,g=n("8c4f"),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-box text-left"},[n("mt-header",{attrs:{fixed:""}},[n("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[n("mt-button",[t._v("ele.me")])],1),n("router-link",{attrs:{slot:"right",to:"/login"},slot:"right"},[n("mt-button",[t._v("登录 | 注册")])],1)],1),n("div",{staticClass:"section"},[t._m(0),n("mt-cell",{staticClass:"border-bottom",attrs:{title:t.guessCity,to:"./city/"+t.guessCityid,"is-link":""}})],1),t.hotCity.length>0?n("div",{staticClass:"city-container margin-bottom"},[n("h3",[t._v("热门城市：")]),n("ul",{staticClass:"city-box"},t._l(t.hotCity,function(e){return n("router-link",{key:e.id,attrs:{tag:"li",to:"/city/"+e.id}},[t._v("\n                "+t._s(e.name)+"\n            ")])}),1)]):t._e(),n("mt-cell",{staticClass:"border-top-bottom",attrs:{title:"所有城市",to:"./all-city","is-link":""}})],1)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cell-box border-bottom"},[n("div",{staticClass:"cell-item-left"},[t._v("当前定位城市：")]),n("div",{staticClass:"cell-item-right"},[t._v("定位不准时，请在城市列表中选择")])])}];const y=a.a.CancelToken;var C={data(){return{guessCity:"",guessCityid:"",hotCity:[]}},mounted(){this.getGuessCity(),this.getHotCity()},methods:{getGuessCity(){var t=this;a.a.get("https://elm.cangdu.org/v1/cities",{params:{type:"guess"},cancelToken:new y(function(e){t.$store.commit("axiosCancel",e)})}).then(t=>{200===t.status&&"OK"===t.statusText?(this.guessCity=t.data.name,this.guessCityid=t.data.id):Object(u["Toast"])({message:"定位失败，请在城市列表中选择",position:"bottom",duration:2e3})}).catch(function(t){console.log(t),a.a.isCancel(t)&&console.log("Rquest canceled",t.message)})},getHotCity(){var t=this;u["Indicator"].open({text:"加载中...",spinnerType:"fading-circle"}),a.a.get("https://elm.cangdu.org/v1/cities",{params:{type:"hot"},cancelToken:new y(function(e){t.$store.commit("axiosCancel",e)})}).then(t=>{u["Indicator"].close(),200===t.status&&"OK"===t.statusText&&(this.hotCity=t.data)}).catch(function(t){console.log(t),a.a.isCancel(t)&&console.log("Rquest canceled",t.message)})}}},_=C,x=(n("341f"),Object(d["a"])(_,v,b,!1,null,null,null));x.options.__file="home.vue";var w=x.exports;r["default"].use(g["a"]);var j=new g["a"]({base:"/loVue-elm/",routes:[{path:"/",name:"home",component:w},{path:"/all-city",name:"allCity",component:()=>n.e("about").then(n.bind(null,"2e7f"))}],scrollBehavior(t,e,n){return n||{x:0,y:0}}}),k=n("2f62");r["default"].use(k["a"]);var O=new k["a"].Store({state:{cancel:[]},mutations:{axiosCancel(t,e){t.cancel.push(e)}},actions:{}});r["default"].use(l.a),r["default"].config.productionTip=!1,j.beforeEach((t,e,n)=>{O.state.cancel.length>0&&(l.a.Indicator.close(),O.state.cancel.forEach(t=>{t()})),n()}),new r["default"]({router:j,store:O,render:t=>t(m)}).$mount("#app")},"7faf":function(t,e,n){"use strict";var r=n("8fba"),o=n.n(r);o.a},"8fba":function(t,e,n){},"92a0":function(t,e,n){},fbb7:function(t,e,n){}});
//# sourceMappingURL=app.19cad5b1.js.map