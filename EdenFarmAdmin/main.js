import Vue from 'vue'
import App from './App'

import store from './store'
import globalFun from './common/vueMixin.js'
/** 全局为每个vue组件混入方法 */
Vue.mixin(globalFun);

Vue.config.productionTip = false

Vue.prototype.$store = store

App.mpType = 'app'

const app = new Vue({
    store,
    ...App
})
app.$mount()
