(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group-login"],{"04ac":function(t,e,n){var o=n("4d65"),r=n("9208"),i=n("2ba0"),s=n("5ee9")("IE_PROTO"),a=function(){},c="prototype",u=function(){var t,e=n("bce2")("iframe"),o=i.length,r="<",s=">";e.style.display="none",n("5b58").appendChild(e),e.src="javascript:",t=e.contentWindow.document,t.open(),t.write(r+"script"+s+"document.F=Object"+r+"/script"+s),t.close(),u=t.F;while(o--)delete u[c][i[o]];return u()};t.exports=Object.create||function(t,e){var n;return null!==t?(a[c]=o(t),n=new a,a[c]=null,n[s]=t):n=u(),void 0===e?n:r(n,e)}},"0709":function(t,e,n){var o=n("9102");t.exports=function(t,e,n){if(o(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,o){return t.call(e,n,o)};case 3:return function(n,o,r){return t.call(e,n,o,r)}}return function(){return t.apply(e,arguments)}}},"0d0d":function(t,e,n){var o=n("54a3"),r=n("33f2"),i=n("8da8");t.exports=function(t){return function(e,n,s){var a,c=o(e),u=r(c.length),f=i(s,u);if(t&&n!=n){while(u>f)if(a=c[f++],a!=a)return!0}else for(;u>f;f++)if((t||f in c)&&c[f]===n)return t||f||0;return!t&&-1}}},1145:function(t,e,n){"use strict";var o=n("4725"),r=n("2d2c"),i=n("7f00"),s=n("c84b"),a=n("f03e"),c=n("648e"),u=n("c67d"),f=n("d6e1"),l=n("f3ae")("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",v="keys",m="values",h=function(){return this};t.exports=function(t,e,n,b,g,x,y){c(n,e,b);var w,C,_,S=function(t){if(!p&&t in L)return L[t];switch(t){case v:return function(){return new n(this,t)};case m:return function(){return new n(this,t)}}return function(){return new n(this,t)}},T=e+" Iterator",k=g==m,O=!1,L=t.prototype,P=L[l]||L[d]||g&&L[g],j=P||S(g),A=g?k?S("entries"):j:void 0,M="Array"==e&&L.entries||P;if(M&&(_=f(M.call(new t)),_!==Object.prototype&&_.next&&(u(_,T,!0),o||"function"==typeof _[l]||s(_,l,h))),k&&P&&P.name!==m&&(O=!0,j=function(){return P.call(this)}),o&&!y||!p&&!O&&L[l]||s(L,l,j),a[e]=j,a[T]=h,g)if(w={values:k?j:S(m),keys:x?j:S(v),entries:A},y)for(C in w)C in L||i(L,C,w[C]);else r(r.P+r.F*(p||O),e,w);return w}},"13c4":function(t,e,n){var o=n("1dff"),r=n("4839"),i="__core-js_shared__",s=r[i]||(r[i]={});(t.exports=function(t,e){return s[t]||(s[t]=void 0!==e?e:{})})("versions",[]).push({version:o.version,mode:n("4725")?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})},"1dff":function(t,e){var n=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=n)},"240e":function(t,e,n){var o=n("9b6d");t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==o(t)?t.split(""):Object(t)}},"2b11":function(t,e){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},"2ba0":function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"2d2c":function(t,e,n){var o=n("4839"),r=n("1dff"),i=n("c84b"),s=n("7f00"),a=n("0709"),c="prototype",u=function(t,e,n){var f,l,p,d,v=t&u.F,m=t&u.G,h=t&u.S,b=t&u.P,g=t&u.B,x=m?o:h?o[e]||(o[e]={}):(o[e]||{})[c],y=m?r:r[e]||(r[e]={}),w=y[c]||(y[c]={});for(f in m&&(n=e),n)l=!v&&x&&void 0!==x[f],p=(l?x:n)[f],d=g&&l?a(p,o):b&&"function"==typeof p?a(Function.call,p):p,x&&s(x,f,p,t&u.U),y[f]!=p&&i(y,f,d),b&&w[f]!=p&&(w[f]=p)};o.core=r,u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},3301:function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"33f2":function(t,e,n){var o=n("ae63"),r=Math.min;t.exports=function(t){return t>0?r(o(t),9007199254740991):0}},4725:function(t,e){t.exports=!1},"4d94":function(t,e,n){},"54a3":function(t,e,n){var o=n("240e"),r=n("2b11");t.exports=function(t){return o(r(t))}},"5b58":function(t,e,n){var o=n("4839").document;t.exports=o&&o.documentElement},"5c07":function(t,e,n){"use strict";var o=n("68fb"),r=n("b725"),i=n("f03e"),s=n("54a3");t.exports=n("1145")(Array,"Array",function(t,e){this._t=s(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,r(1)):r(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},"5ee9":function(t,e,n){var o=n("13c4")("keys"),r=n("75ff");t.exports=function(t){return o[t]||(o[t]=r(t))}},"612f":function(t,e,n){for(var o=n("5c07"),r=n("d753"),i=n("7f00"),s=n("4839"),a=n("c84b"),c=n("f03e"),u=n("f3ae"),f=u("iterator"),l=u("toStringTag"),p=c.Array,d={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},v=r(d),m=0;m<v.length;m++){var h,b=v[m],g=d[b],x=s[b],y=x&&x.prototype;if(y&&(y[f]||a(y,f,p),y[l]||a(y,l,b),c[b]=p,g))for(h in o)y[h]||i(y,h,o[h],!0)}},"648e":function(t,e,n){"use strict";var o=n("04ac"),r=n("b915"),i=n("c67d"),s={};n("c84b")(s,n("f3ae")("iterator"),function(){return this}),t.exports=function(t,e,n){t.prototype=o(s,{next:r(1,n)}),i(t,e+" Iterator")}},"68fb":function(t,e,n){var o=n("f3ae")("unscopables"),r=Array.prototype;void 0==r[o]&&n("c84b")(r,o,{}),t.exports=function(t){r[o][t]=!0}},"6f8f":function(t,e,n){t.exports=n("13c4")("native-function-to-string",Function.toString)},"75ff":function(t,e){var n=0,o=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++n+o).toString(36))}},"7cbd":function(t,e,n){var o=n("3301"),r=n("54a3"),i=n("0d0d")(!1),s=n("5ee9")("IE_PROTO");t.exports=function(t,e){var n,a=r(t),c=0,u=[];for(n in a)n!=s&&o(a,n)&&u.push(n);while(e.length>c)o(a,n=e[c++])&&(~i(u,n)||u.push(n));return u}},"7f00":function(t,e,n){var o=n("4839"),r=n("c84b"),i=n("3301"),s=n("75ff")("src"),a=n("6f8f"),c="toString",u=(""+a).split(c);n("1dff").inspectSource=function(t){return a.call(t)},(t.exports=function(t,e,n,a){var c="function"==typeof n;c&&(i(n,"name")||r(n,"name",e)),t[e]!==n&&(c&&(i(n,s)||r(n,s,t[e]?""+t[e]:u.join(String(e)))),t===o?t[e]=n:a?t[e]?t[e]=n:r(t,e,n):(delete t[e],r(t,e,n)))})(Function.prototype,c,function(){return"function"==typeof this&&this[s]||a.call(this)})},"8da8":function(t,e,n){var o=n("ae63"),r=Math.max,i=Math.min;t.exports=function(t,e){return t=o(t),t<0?r(t+e,0):i(t,e)}},9102:function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},9208:function(t,e,n){var o=n("694f"),r=n("4d65"),i=n("d753");t.exports=n("3a0f")?Object.defineProperties:function(t,e){r(t);var n,s=i(e),a=s.length,c=0;while(a>c)o.f(t,n=s[c++],e[n]);return t}},"9b6d":function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},aa91:function(t,e,n){var o=n("2b11");t.exports=function(t){return Object(o(t))}},ae63:function(t,e){var n=Math.ceil,o=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?o:n)(t)}},b725:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},b915:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},c67d:function(t,e,n){var o=n("694f").f,r=n("3301"),i=n("f3ae")("toStringTag");t.exports=function(t,e,n){t&&!r(t=n?t:t.prototype,i)&&o(t,i,{configurable:!0,value:e})}},c84b:function(t,e,n){var o=n("694f"),r=n("b915");t.exports=n("3a0f")?function(t,e,n){return o.f(t,e,r(1,n))}:function(t,e,n){return t[e]=n,t}},d6e1:function(t,e,n){var o=n("3301"),r=n("aa91"),i=n("5ee9")("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=r(t),o(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},d753:function(t,e,n){var o=n("7cbd"),r=n("2ba0");t.exports=Object.keys||function(t){return o(t,r)}},dc3f:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-box"},[n("mt-header",{attrs:{fixed:"",title:"密码登录"}},[n("div",{attrs:{slot:"left"},on:{click:t.back},slot:"left"},[n("mt-button",{attrs:{icon:"back"}},[t._v("返回")])],1)]),n("form",{staticClass:"login-form"},[n("div",{staticClass:"cell-box border-bottom bg-fff"},[n("div",{staticClass:"cell-item-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],staticClass:"form-input",attrs:{type:"text",placeholder:"账号"},domProps:{value:t.account},on:{input:function(e){e.target.composing||(t.account=e.target.value)}}})])]),n("div",{staticClass:"cell-box border-bottom bg-fff"},[n("div",{staticClass:"cell-item-left"},["checkbox"===(t.passwordType?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-input",attrs:{placeholder:"密码",type:"checkbox"},domProps:{checked:Array.isArray(t.password)?t._i(t.password,null)>-1:t.password},on:{change:function(e){var n=t.password,o=e.target,r=!!o.checked;if(Array.isArray(n)){var i=null,s=t._i(n,i);o.checked?s<0&&(t.password=n.concat([i])):s>-1&&(t.password=n.slice(0,s).concat(n.slice(s+1)))}else t.password=r}}}):"radio"===(t.passwordType?"text":"password")?n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-input",attrs:{placeholder:"密码",type:"radio"},domProps:{checked:t._q(t.password,null)},on:{change:function(e){t.password=null}}}):n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-input",attrs:{placeholder:"密码",type:t.passwordType?"text":"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("div",{staticClass:"cell-item-right"},[n("mt-switch",{model:{value:t.passwordType,callback:function(e){t.passwordType=e},expression:"passwordType"}})],1)]),n("div",{staticClass:"cell-box bg-fff"},[n("div",{staticClass:"cell-item-left"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"form-input",attrs:{type:"text",placeholder:"验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}})]),n("div",{staticClass:"cell-item-right"},[n("div",{staticClass:"code-box"},[n("img",{staticClass:"code-img",attrs:{src:t.codeImg}}),n("div",{staticClass:"code-btn-box",on:{click:t.getCodeImg}},[n("div",[t._v("看不清")]),n("div",{staticClass:"blue-color"},[t._v("换一张")])])])])]),t._m(0),n("div",{staticClass:"form-btn-box"},[n("button",{staticClass:"form-btn",attrs:{type:"button"},on:{click:t.login}},[t._v("登录")])]),t._m(1)])],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"login-tips"},[t._v("温馨提示：未注册过的账号，登录时将自动注册。"),n("br"),t._v("注册过的用户可凭账号密码登录。")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"0 15px","text-align":"right"}},[n("span",{staticClass:"change-password-btn"},[t._v("重置密码")])])}],i=(n("612f"),{data:function(){return{account:"",password:"",passwordType:!1,code:"",codeImg:"",axiosCancel:[]}},mounted:function(){document.querySelector("title").innerText="密码登录",this.getCodeImg()},components:{},methods:{back:function(){document.referrer?this.$router.go(-1):this.$router.push({path:"/"})},getCodeImg:function(){var t=this,e=this,n=this.axios.CancelToken;axios.post("https://elm.cangdu.org/v1/captchas",{cancelToken:new n(function(t){e.axiosCancel.push(t)})}).then(function(e){200===e.status&&"OK"===e.statusText?t.codeImg=e.data.code:t.$toast({message:"获取验证码失败，请重新获取",position:"bottom",duration:2e3})}).catch(function(e){t.axios.isCancel(e)&&console.log("Rquest canceled",e.message)})},login:function(){var t=this;if(!this.account)return this.$toast({message:"请输入账号",position:"bottom",duration:2e3}),!1;if(!this.password)return this.$toast({message:"请输入密码",position:"bottom",duration:2e3}),!1;if(!this.code)return this.$toast({message:"请输入验证码",position:"bottom",duration:2e3}),!1;this.$indicator.open({text:"加载中...",spinnerType:"fading-circle"});var e=this,n=this.axios.CancelToken;axios.post("https://elm.cangdu.org/v2/login",{params:{username:e.account,password:e.password,captcha_code:e.code},cancelToken:new n(function(t){e.axiosCancel.push(t)})}).then(function(e){t.$indicator.close(),200===e.status&&"OK"===e.statusText?1==e.data.status||0==e.data.status&&("ERROR_CAPTCHA"===e.data.type&&t.getCodeImg(),t.$toast({message:e.data.message,position:"bottom",duration:2e3})):t.$toast({message:"登录失败，请重新登录",position:"bottom",duration:2e3})}).catch(function(e){t.axios.isCancel(e)&&console.log("Rquest canceled",e.message)})}},computed:{},destroyed:function(){this.axiosCancel.forEach(function(t){t()})}}),s=i,a=(n("efcd"),n("17cc")),c=Object(a["a"])(s,o,r,!1,null,"964c514e",null);e["default"]=c.exports},efcd:function(t,e,n){"use strict";var o=n("4d94"),r=n.n(o);r.a},f03e:function(t,e){t.exports={}},f3ae:function(t,e,n){var o=n("13c4")("wks"),r=n("75ff"),i=n("4839").Symbol,s="function"==typeof i,a=t.exports=function(t){return o[t]||(o[t]=s&&i[t]||(s?i:r)("Symbol."+t))};a.store=o}}]);
//# sourceMappingURL=group-login-legacy.cbbe59c0.js.map