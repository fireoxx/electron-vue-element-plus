import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import Users from '../views/users/index.vue'
import AppLayout from '../components/layout/AppLayout.vue'

export const routes = [
  {
    path: '/',
    name: 'home',
    component: AppLayout,
    redirect: '/users/index',
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AppLayout,
    redirect: '/about/index',
    hidden: true,
    children: [{
      path: 'AboutView',
      name: 'AboutView',
      component: () => import('@/views/AboutView.vue')
    }]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/users',
    name: 'users',
    component: AppLayout,
    redirect: '/users/index',
    hidden: true,
    meta: { icon: 'User', name: '用户管理' },
    children: [{
      path: 'index',
      name: 'index',
      meta: { icon: 'List', name: '列表' },
      component: () => import('@/views/users/index.vue')
    }]
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
