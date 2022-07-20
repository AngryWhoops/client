import { createRouter, createWebHistory } from 'vue-router'
import FeedView from '../views/FeedView.vue'
import CreateView from '@/views/CreateView.vue'
import UserPosts from '@/views/UsersPosts'

const routes = [
  {
    path: '/',
    name: 'feed',
    component: FeedView
  },
  {
    path: '/create',
    name: 'create',
    component: CreateView
  },
  {
    path: '/userposts',
    name: 'userposts',
    component: UserPosts
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
