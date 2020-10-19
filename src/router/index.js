import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/views/LandingPage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'landingPage',
      component: LandingPage
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "p-login" */ '@/views/Login.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import(/* webpackChunkName: "p-home" */ '@/views/Home.vue')
    },
    {
      path: '/main',
      name: 'main',
      component: () => import(/* webpackChunkName: "p-home" */ '@/views/Main.vue')
    },
    {
      path: '/reports',
      name: 'reports',
      component: () => import(/* webpackChunkName: "p-reports" */ '@/views/Reports.vue')
    },
    {
      path: '/chat',
      name: 'chat',
      component: () => import(/* webpackChunkName: "p-chat" */ '@/views/Chat.vue')
    },
    {
      path: '/chat/:id/:name',
      name: 'chat',
      component: () => import(/* webpackChunkName: "p-chat" */ '@/views/Chat.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }
  ]
})
