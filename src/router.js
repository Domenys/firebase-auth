import { createRouter, createWebHistory } from 'vue-router'
import { auth } from '@/firebase'

import store from '@/store'

import Home from '@/views/Home.vue'
import Auth from '@/views/Auth.vue'
import Reg from '@/views/Reg.vue'
import NotFound from '@/views/NotFound.vue'

export const routes = [
  { 
    path: '/', 
    component: Home, 
    name: 'Home',
    meta: {
      requiresAuth: true
    }
  },
  { 
    path: '/auth', 
    component: Auth, 
    name: 'Auth' 
  },
  {
    path: '/reg',
    component: Reg,
    name: 'Reg'
  },
  { path: '/:path(.*)', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
  console.log('store')
  console.log(store.state.authUser)
  if (requiresAuth && !auth.currentUser) {
    next('/auth')
  } else {
    next()
  }
})

export default router