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
      path: '/main/:projectId',
      name: 'main',
      component: () => import(/* webpackChunkName: "p-home" */ '@/views/Main.vue')
    },
    {
      path: '/reports/:projectId',
      name: 'reports',
      component: () => import(/* webpackChunkName: "p-reports" */ '@/views/Reports.vue')
    },
    {
      path: '/chat/:projectId',
      name: 'chat',
      component: () => import(/* webpackChunkName: "p-chat" */ '@/views/Chat.vue')
    },
    {
      path: '/chat/:id/:name',
      name: 'chat2',
      component: () => import(/* webpackChunkName: "p-chat" */ '@/views/Chat.vue')
    },
    {
      path: '/team/:projectId',
      name: 'team',
      component: () => import(/* webpackChunkName: "p-chat" */ '@/views/Team.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
    {
      path: '*',
      name: 'Not Found',
      component: () => import(/* webpackChunkName: "p-not-found" */ '@/views/About.vue'),
      meta: {
        title: 'Halaman tidak ditemukan'
      }
    }
  ]
})
