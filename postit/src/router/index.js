import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddPostIt from '../views/AddPostIt.vue'
import ShowPostit from '../views/showPostit.vue'
import ConfirmDelete from '../views/ConfirmDelete.vue'
import ConfirmDeleteAll from '../views/ConfirmDeleteAll.vue'

const routes =
[
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },

  {
    path: '/add',
    name: 'add',
    component: AddPostIt
  },

  {
    path: '/show/:idPostit',
    name: 'show',
    component: ShowPostit
  },

  {
    path: '/delete/:idPostit',
    name: 'delete',
    component: ConfirmDelete
  },

  {
    path: '/deleteAll',
    name: 'deleteAll',
    component: ConfirmDeleteAll
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
