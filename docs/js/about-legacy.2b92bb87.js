(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1a66":function(t,e,n){"use strict";var o=n("cdb3"),i=n.n(o);i.a},"2e7f":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-left border-0"},[n("mt-header",{attrs:{title:"所有城市（按拼音排序）"}},[n("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[n("mt-button",{attrs:{icon:"back"}},[t._v("返回")])],1)],1),n("mt-index-list",t._l(t.sortGroupCity,function(e,o){return n("mt-index-section",{key:o,attrs:{index:o}},t._l(e,function(t){return n("mt-cell",{key:t.id,attrs:{title:t.name,to:"./city/"+t.id,"is-link":""}})}),1)}),1)],1)},i=[],a=(n("cadf"),n("551c"),n("097d"),n("76a0")),c=n("bc3a"),r=n.n(c),s=r.a.CancelToken,u={data:function(){return{groupCity:{}}},mounted:function(){this.getGroupCity()},components:{IndexList:a["IndexList"],IndexSection:a["IndexSection"]},methods:{getGroupCity:function(){var t=this,e=this;a["Indicator"].open({text:"加载中...",spinnerType:"fading-circle"}),r.a.get("https://elm.cangdu.org/v1/cities",{params:{type:"group"},cancelToken:new s(function(t){e.$store.commit("axiosCancel",t)})}).then(function(e){a["Indicator"].close(),200===e.status&&"OK"===e.statusText&&(t.groupCity=e.data)}).catch(function(t){console.log(t),r.a.isCancel(t)&&console.log("Rquest canceled",t.message)})}},computed:{sortGroupCity:function(){for(var t={},e=65;e<=90;e++){var n=String.fromCharCode(e);this.groupCity[n]&&(t[n]=this.groupCity[n])}return t}}},l=u,d=(n("1a66"),n("2877")),f=Object(d["a"])(l,o,i,!1,null,"5dbdd9a2",null);f.options.__file="allCity.vue";e["default"]=f.exports},cdb3:function(t,e,n){}}]);
//# sourceMappingURL=about-legacy.2b92bb87.js.map