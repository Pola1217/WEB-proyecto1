import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
/*import DetailsView from '../views/DetailsView.vue'*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  
  routes: [
    {
      path: '/',
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
      path: '/detail/:productId',
      name: 'detail',
      component: () => import('../views/DetailsView.vue')
  },
  {
    path: '/signIn',
    name: 'signIn',
    component: () => import('../views/SignInView.vue')
  },
  {
    path: '/signUp',
    name: 'signUp',
    component: () => import('../views/SignUpView.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cartView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'error404',
      
      component: () => import('../views/error404.vue')
  },

  ]
})

export default router

