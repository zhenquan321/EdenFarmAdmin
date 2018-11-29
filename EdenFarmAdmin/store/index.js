import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		forcedLogin: false, //是否需要强制登录
		weChatXPrm: true, //发布小程序设置为true
		hasLogin: uni.getStorageSync('hasLogin'),
		userInfo: uni.getStorageSync('userInfo')||"",
		platform: "",
		SystemInfo: {},
	},
	mutations: {
		login(state, data) {
			state.hasLogin = true;
			state.userInfo = data;
			uni.setStorageSync('userInfo', data);
			uni.setStorageSync('hasLogin', true);
		},
		logout(state) {
			state.userInfo = {};
			state.hasLogin = false;
			uni.setStorageSync('userInfo', "");
			uni.setStorageSync('hasLogin', false);
		},
		getSystemInfoSync(state, data) {
			state.platform = data.platform;
			state.SystemInfo = data;
		}
	}
})

export default store
