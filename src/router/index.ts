import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Challenge from '../components/Challenge.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Challenge,
    children: [
      {path: '', component: ()=> import('@/views/Dashboard')},
      {path: 'accounts', component: ()=> import('@/views/Accounts')}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
