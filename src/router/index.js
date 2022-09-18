import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/shopAll',
      name: 'shopAll',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ShopView.vue')
    },

    {
      path: '/add',
      name: 'add',
      component: () => import('../views/AddProduct.vue')
    },

    {
      path: '/accessories',
      name: 'accessories',
      component: () => import('../views/Accessories.vue')
    },

    {
      path: '/details/:productId',
      name: 'detail',
      component: DetailView
  },
  ]
})

export default router
