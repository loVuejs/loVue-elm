(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group-home"],{"2e7f":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-left border-0"},[s("mt-header",{attrs:{title:"所有城市（按拼音排序）"}},[s("div",{attrs:{slot:"left"},on:{click:t.back},slot:"left"},[s("mt-button",{attrs:{icon:"back"}},[t._v("返回")])],1)]),s("mt-index-list",t._l(t.sortGroupCity,function(e,i){return s("mt-index-section",{key:i,attrs:{index:i}},t._l(e,function(t){return s("mt-cell",{key:t.id,attrs:{title:t.name,to:"./city/"+t.id,"is-link":""}})}),1)}),1)],1)},a=[],o=(s("612f"),{data(){return{groupCity:{},axiosCancel:[]}},mounted(){document.querySelector("title").innerText="所有城市",this.getGroupCity()},methods:{back(){document.referrer?this.$router.go(-1):this.$router.push({path:"/"})},getGroupCity(){let t=this,e=axios.CancelToken;this.$indicator.open({text:"加载中...",spinnerType:"fading-circle"}),axios.get("https://elm.cangdu.org/v1/cities",{params:{type:"group"},cancelToken:new e(function(e){t.axiosCancel.push(e)})}).then(t=>{this.$indicator.close(),200===t.status&&"OK"===t.statusText&&(this.groupCity=t.data)}).catch(t=>{axios.isCancel(t)&&console.log("Rquest canceled",t.message)})}},computed:{sortGroupCity(){let t={};for(let e=65;e<=90;e++){let s=String.fromCharCode(e);this.groupCity[s]&&(t[s]=this.groupCity[s])}return t}},destroyed(){this.axiosCancel.forEach(t=>{t()})}}),n=o,l=(s("fa03"),s("17cc")),c=Object(l["a"])(n,i,a,!1,null,"7b118d61",null);e["default"]=c.exports},"4ef2":function(t,e,s){},"77b8":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page-box text-left"},[s("mt-header",{attrs:{fixed:""}},[s("div",{attrs:{slot:"left"},on:{click:t.reload},slot:"left"},[s("mt-button",[t._v("ele.me")])],1),s("router-link",{attrs:{slot:"right",to:"/login"},slot:"right"},[s("mt-button",[t._v("登录 | 注册")])],1)],1),s("div",{staticClass:"section"},[t._m(0),s("mt-cell",{staticClass:"border-bottom",attrs:{title:t.guessCity,to:"/city/"+t.guessCityid,"is-link":""}})],1),t.hotCity.length>0?s("div",{staticClass:"city-container margin-bottom"},[s("h3",[t._v("热门城市")]),s("ul",{staticClass:"city-box"},t._l(t.hotCity,function(e){return s("router-link",{key:e.id,attrs:{tag:"li",to:"/city/"+e.id}},[t._v("\n                "+t._s(e.name)+"\n            ")])}),1)]):t._e(),s("mt-cell",{staticClass:"border-top-bottom",attrs:{title:"所有城市",to:"./all-city","is-link":""}}),t.layerMsgFlag?s("layerMsg",{attrs:{text:t.layerMsgText},on:{close:function(e){t.layerMsgFlag=!1}}}):t._e()],1)},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"cell-box border-bottom"},[s("div",{staticClass:"cell-item-left"},[s("span",{staticClass:"cell-item-text"},[t._v("当前定位城市：")])]),s("div",{staticClass:"cell-item-right"},[s("span",{staticClass:"cell-item-sub-text"},[t._v("定位不准时，请在城市列表中选择")])])])}],o=(s("612f"),s("5dfb")),n={data(){return{guessCity:"",guessCityid:"",hotCity:[],layerMsgText:"",layerMsgFlag:!1,axiosCancel:[]}},mounted(){document.querySelector("title").innerText="首页",this.getGuessCity(),this.getHotCity()},components:{layerMsg:o["a"]},methods:{getGuessCity(){let t=this,e=axios.CancelToken;axios.get("https://elm.cangdu.org/v1/cities",{params:{type:"guess"},cancelToken:new e(function(e){t.axiosCancel.push(e)})}).then(t=>{200===t.status&&"OK"===t.statusText?(this.guessCity=t.data.name,this.guessCityid=t.data.id):(this.layerMsgText="定位失败，请在城市列表中选择",this.layerMsgFlag=!0)}).catch(t=>{axios.isCancel(t)&&console.log("Rquest canceled",t.message)})},getHotCity(){let t=this,e=axios.CancelToken;this.$indicator.open({text:"加载中...",spinnerType:"fading-circle"}),axios.get("https://elm.cangdu.org/v1/cities",{params:{type:"hot"},cancelToken:new e(function(e){t.axiosCancel.push(e)})}).then(t=>{this.$indicator.close(),200===t.status&&"OK"===t.statusText&&(this.hotCity=t.data)}).catch(t=>{axios.isCancel(t)&&console.log("Rquest canceled",t.message)})},reload(){location.reload()}},destroyed(){this.axiosCancel.forEach(t=>{t()})}},l=n,c=(s("ae60"),s("17cc")),r=Object(c["a"])(l,i,a,!1,null,"86e8c9d2",null);e["default"]=r.exports},ae60:function(t,e,s){"use strict";var i=s("4ef2"),a=s.n(i);a.a},d4ea:function(t,e,s){},fa03:function(t,e,s){"use strict";var i=s("d4ea"),a=s.n(i);a.a}}]);
//# sourceMappingURL=group-home.37f40b13.js.map