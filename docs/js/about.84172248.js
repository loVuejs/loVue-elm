(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"2e7f":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"city-container text-left border-0"},[n("mt-header",{attrs:{title:"所有城市（按拼音排序）"}},[n("router-link",{attrs:{slot:"left",to:"/"},slot:"left"},[n("mt-button",{attrs:{icon:"back"}},[t._v("返回")])],1)],1),n("mt-index-list",t._l(t.sortGroupCity,function(e,o){return n("mt-index-section",{key:o,attrs:{index:o}},t._l(e,function(t){return n("mt-cell",{key:t.id,attrs:{title:t.name,to:"./city/"+t.id,"is-link":""}})}),1)}),1)],1)},i=[],a=n("76a0"),r=n("bc3a"),s=n.n(r);const c=s.a.CancelToken;var l={data(){return{groupCity:{}}},mounted(){this.getGroupCity()},components:{IndexList:a["IndexList"],IndexSection:a["IndexSection"]},methods:{getGroupCity(){var t=this;a["Indicator"].open({text:"加载中...",spinnerType:"fading-circle"}),s.a.get("https://elm.cangdu.org/v1/cities",{params:{type:"group"},cancelToken:new c(function(e){t.$store.commit("axiosCancel",e)})}).then(t=>{a["Indicator"].close(),200===t.status&&"OK"===t.statusText&&(this.groupCity=t.data)}).catch(function(t){console.log(t),s.a.isCancel(t)&&console.log("Rquest canceled",t.message)})}},computed:{sortGroupCity(){let t={};for(let e=65;e<=90;e++){let n=String.fromCharCode(e);this.groupCity[n]&&(t[n]=this.groupCity[n])}return t}}},u=l,d=(n("fd1a"),n("2877")),p=Object(d["a"])(u,o,i,!1,null,"4eac4c17",null);p.options.__file="allCity.vue";e["default"]=p.exports},"7a09":function(t,e,n){},fd1a:function(t,e,n){"use strict";var o=n("7a09"),i=n.n(o);i.a}}]);
//# sourceMappingURL=about.84172248.js.map