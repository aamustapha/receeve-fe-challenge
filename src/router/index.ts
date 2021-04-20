import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Challenge from '../components/Challenge.vue'
import Login from "@/views/Login.vue";

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Challenge,
    children: [
      {path: '', component: ()=> import('@/views/Dashboard'), name: 'Dashboad'},
      {path: 'accounts', component: ()=> import('@/views/Accounts'), name: 'Accounts'},
      {path: 'accounts/:id/', component: ()=> import('@/views/AccountInfo'), name: 'Account Detail'}
    ]
  },
  {
    path: '/login',
    name: 'Login',
    meta: { isPublic: true },
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = window.localStorage.getItem("isAuthenticated") === "true"

  if (isAuthenticated && to.meta.isPublic) { // prevent going to login if signed in
    return
  }

  if (!isAuthenticated && !to.meta.isPublic) {
    return next("/login")
  }

  return next()

})

export default router
