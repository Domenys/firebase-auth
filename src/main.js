import { createApp } from 'vue'

import '@/tailwind.css'
import App from '@/App.vue'
import router from '@/router.js'
import store from '@/store'
import aspectRatio from '@tailwindcss/aspect-ratio'
// import { createRouter, createWebHistory } from 'vue-router'

const app = createApp(App)

// const router = createRouter({
//   history: createWebHistory(),
//   routes,
// })

app.use(router)
app.use(store)
app.mount('#app')
