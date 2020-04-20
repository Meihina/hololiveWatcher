import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'

Vue.config.productionTip = false
// 快乐封装axios请求 绑定在Vue实例的prototype里 可以在任意地方通过this.$http的方式去方式能够请求
Vue.prototype.$qs = qs
Vue.prototype.$axios = axios

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
