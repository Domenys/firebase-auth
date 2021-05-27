import Home from '@/views/Home.vue'
import Auth from '@/views/Auth.vue'
import NotFound from '@/views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { 
    path: '/', 
    component: Home, 
    name: 'Home' 
  },
  { 
    path: '/auth', 
    component: Auth, 
    name: 'Auth' 
  },
  { path: '/:path(.*)', component: NotFound },
]
