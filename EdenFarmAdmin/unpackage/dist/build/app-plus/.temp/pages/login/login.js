require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{23:function(t,i,e){"use strict";var o=a(e(2)),n=a(e(24));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,o.default)(n.default))},24:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=e(26),n=e.n(o),a=e(27);var s=function(t){e(25)},r=e(1)(n.a,a.a,s,"data-v-384e6512",null);i.default=r.exports},25:function(t,i){},26:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0});var o,n=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var e=arguments[i];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},a=e(5),s=((o=a)&&o.__esModule,e(3));i.default={data:function(){return{providerList:[],hasProvider:!1,account:"",password:"",positionTop:0}},computed:(0,s.mapState)(["forcedLogin"]),methods:n({},(0,s.mapMutations)(["login"]),{initProvider:function(){var i=this,e=["weixin","qq","sinaweibo"];t.getProvider({service:"oauth",success:function(t){if(t.provider&&t.provider.length){for(var o=0;o<t.provider.length;o++)~e.indexOf(t.provider[o])&&i.providerList.push({value:t.provider[o],image:"../../static/img/"+t.provider[o]+".png"});i.hasProvider=!0}},fail:function(t){console.error("获取服务供应商失败："+JSON.stringify(t))}})},initPosition:function(){this.positionTop=t.getSystemInfoSync().windowHeight-100},bindLogin:function(){var i=this;if(this.account.length<5)t.showToast({icon:"none",title:"账号最短为 5 个字符"});else if(this.password.length<6)t.showToast({icon:"none",title:"密码最短为 6 个字符"});else{var e={data:{account:this.account,password:this.password},setTime:"",host:"",method:"post",apiUrl:"api/admin/login"};this.request(e).then(function(t){i.conLog(t.data),i.login(t.data)}).catch(function(t){i.conLog("oauthAerify_catch",t)})}},oauth:function(i){var e=this;t.login({provider:i,success:function(o){t.getUserInfo({provider:i,success:function(t){e.toMain(t.userInfo.nickName)}})},fail:function(t){console.error("授权登录失败："+JSON.stringify(t))}})},toMain:function(i){this.login(i),this.forcedLogin?t.reLaunch({url:"../main/main"}):t.navigateBack()}}),onLoad:function(){this.initPosition(),this.initProvider()}}}).call(i,e(0).default)},27:function(t,i,e){"use strict";var o={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"content"},[e("view",{staticClass:"input-group"},[e("view",{staticClass:"input-row border"},[e("text",{staticClass:"title"},[t._v("账号：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.account,expression:"account"}],attrs:{type:"text",placeholder:"请输入账号",eventid:"zsJ-0"},domProps:{value:t.account},on:{input:function(i){i.target.composing||(t.account=i.target.value)}}})]),e("view",{staticClass:"input-row"},[e("text",{staticClass:"title"},[t._v("密码：")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"text",password:"true",placeholder:"请输入密码",eventid:"1rN-1"},domProps:{value:t.password},on:{input:function(i){i.target.composing||(t.password=i.target.value)}}})])]),e("view",{staticClass:"btn-row"},[e("button",{staticClass:"primary loginBtn",attrs:{type:"primary",eventid:"Rii-2"},on:{tap:t.bindLogin}},[t._v("登录")])],1),e("view",{staticClass:"action-row"})])},staticRenderFns:[]};i.a=o}},[23]);