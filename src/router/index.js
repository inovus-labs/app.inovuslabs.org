import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import EventsView from '@/views/EventsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/events',
      name: 'events',
      component: EventsView,
      meta: {
        title: 'Events',
      },
    },
  ]
})


// Change page title on route change
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} - Admin | Inovus Labs` || 'Inovus Labs IEDC'
  next()
})


export default router
