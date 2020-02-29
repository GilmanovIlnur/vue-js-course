import Vue from 'vue'
import VueRouter from 'vue-router'
import Users from '../dashboards/users.vue'
import UserAlbums from '../dashboards/userAlbums.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'users',
    component: Users
  },
  {
    path: '/photos',
    name: 'userAlbums',
    component: UserAlbums
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL || '/',
  routes
})

export default router
