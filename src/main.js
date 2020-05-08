import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import qs from 'qs'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import moment from 'moment'; //导入模块

moment.locale('zh-cn'); //设置语言 或 moment.lang('zh-cn');
Vue.prototype.$moment = moment;//赋值使用

Vue.config.productionTip = false
// 快乐封装axios请求 绑定在Vue实例的prototype里 可以在任意地方通过this.$http的方式去方式能够请求
Vue.prototype.$qs = qs
Vue.prototype.$axios = axios

Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
