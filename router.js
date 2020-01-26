import Vue from 'vue'
import Router from 'vue-router'
import { scrollBehavior } from '~/utils'
import Home from '~/pages/home/HomeIndex'

Vue.use(Router)

const routes = [
  { path: '/', name: 'root', redirect: '/home' },
  { path: '/home', name: 'home', component: Home }
  // { path: '/login', name: 'login', component: Login },
  // { path: '/profile', name: 'profile', component: Profile },
]

export function createRouter () {
  return new Router({
    routes,
    scrollBehavior,
    mode: 'history'
  })
}
