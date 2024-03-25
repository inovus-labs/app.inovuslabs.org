import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import EventsView from '@/views/EventsView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import ResourcesView from '@/views/ResourcesView.vue'
import login from '@/views/Login.vue'
import signup from '@/views/SignUp.vue'

import NotFoundView from '@/views/404.vue'

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
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView,
      meta: {
        title: 'Events',
      },
    },
    {
      path: '/resources',
      name: 'resources',
      component: ResourcesView,
      meta: {
        title: 'Resources',
      },
    },

    {
      path: '/:pathMatch(.*)*',
      name: '404',
      component: NotFoundView,
      meta: { title: '404' }
    },{
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        title: 'login',
      },
    },{
      path: '/signup',
      name: 'signup',
      component: signup,
      meta: {
        title: 'signup',
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
