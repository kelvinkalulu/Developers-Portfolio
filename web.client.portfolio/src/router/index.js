import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    }, 
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView, meta: {
        title: '404 Not Found'
      }
    }
  ]
})

export default router
