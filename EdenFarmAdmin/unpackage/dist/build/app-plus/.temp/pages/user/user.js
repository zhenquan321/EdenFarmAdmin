require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],{38:function(t,i,s){"use strict";var e=n(s(2)),a=n(s(39));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(a.default))},39:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s(41),a=s.n(e),n=s(42);var c=function(t){s(40)},o=s(1)(a.a,n.a,c,null,null);i.default=o.exports},40:function(t,i){},41:function(t,i,s){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0});var e=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var s=arguments[i];for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&(t[e]=s[e])}return t},a=s(3);i.default={data:function(){return{}},computed:e({},(0,a.mapState)(["hasLogin","forcedLogin"])),methods:e({},(0,a.mapMutations)(["logout"]),{bindLogin:function(){t.navigateTo({url:"../login/login"})},bindLogout:function(){this.logout(),this.forcedLogin&&t.reLaunch({url:"../login/login"})}})}}).call(i,s(0).default)},42:function(t,i,s){"use strict";var e={render:function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"content"},[this._m(0),this._m(1),this._m(2),i("view",{staticClass:"goods-info"},[i("view",{staticClass:"row-box"},[i("button",{attrs:{"open-type":"getPhoneNumber",bindgetphonenumber:"getPhoneNumber"}},[this._v("授权手机号")])],1)])])},staticRenderFns:[function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"my_head"},[i("view",{staticClass:"my_head_pic"},[i("image",{staticClass:"my_head_img img",attrs:{id:"uinLogo",src:""}})]),i("view",{staticClass:"my_head_info"},[i("view",{staticClass:"my_head_name",attrs:{id:"nickname"}})])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"fui-cell-group fui-cell-click"},[i("view",{staticClass:"fui-cell-text"},[this._v("我的订单")]),i("view",{staticClass:"fui-cell-remark"},[this._v("查看全部订单")]),i("view",{staticClass:"fui-icon-group nomargin"},[i("view",{staticClass:"icon"},[i("image",{attrs:{src:"/static/user/daifukuan"}})]),i("view",{staticClass:"text"},[this._v("待付款")]),i("view",{staticClass:"icon"},[i("image",{attrs:{src:"/static/user/daishouhuo"}})]),i("view",{staticClass:"text"},[this._v("待发货")]),i("view",{staticClass:"icon"},[i("image",{attrs:{src:"/static/user/daipingjia"}})]),i("view",{staticClass:"text"},[this._v("待收货")]),i("view",{staticClass:"icon"},[i("image",{attrs:{src:"/static/user/yiwancheng"}})]),i("view",{staticClass:"text"},[this._v("已完成")])])])},function(){var t=this.$createElement,i=this._self._c||t;return i("view",{staticClass:"goods-info"},[i("view",{staticClass:"row-box"},[i("view",{staticClass:"row-label"},[this._v("会员中心")]),i("view",{staticClass:"right-text",staticStyle:{color:"#666"}},[this._v("伊甸余额：¥ ")])]),i("view",{staticClass:"row-box"},[i("view",{staticClass:"row-label"},[this._v("地址管理")]),i("view",{staticClass:"right-text"})])])}]};i.a=e}},[38]);