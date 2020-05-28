import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/home'

import gaikuangzonglan from '@/views/gaikuangzonglan'

Vue.use(VueRouter)

const routes = [
  // 创建登录页面路由
  { path: '/login', name: 'login', component: () => import('@/views/login') },
  {
    path: '/home',
    name: 'home',
    component: Home,
    redirect: '/gaikuangzonglan',
    children: [
      { path: '/gaikuangzonglan', name: 'gaikuangzonglan', component: gaikuangzonglan },
      { path: '/zhiyuanfangan', name: 'zhiyuanfangan', component: () => import('@/views/zhiyuanfangan') },
      { path: '/quanxianguanli', name: 'quanxianguanli', component: () => import('@/views/quanxianguanli') }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
