import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home.vue'


Vue.use(Router)

export default new Router({
//这是一个路由
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
