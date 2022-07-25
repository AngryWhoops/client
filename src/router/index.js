import { createRouter, createWebHistory } from 'vue-router'
import MyFeedView from '../views/MyFeedView.vue'
import CreateView from '@/views/CreateView.vue'
import UserPosts from '@/views/UserPostsView.vue'
import HashtagPostsView from '@/views/HashtagPostsView.vue'

const routes = [
  {
    path: '/',
    name: 'myfeed',
    component: MyFeedView
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
  },
  {
    path: '/hashtagposts',
    name: 'hashtagposts',
    component: HashtagPostsView,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
