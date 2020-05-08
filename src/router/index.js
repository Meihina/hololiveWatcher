import Vue from 'vue'
import VueRouter from 'vue-router'
import videoList from '../components/videoList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/holog'
  },
  {
    path: '/videoList',
    component: videoList,
    meta:{title:'快乐视频列表'}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
