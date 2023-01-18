import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
        resource: 'Auth',
        action: 'read',
      },
    },
    {
      path: '/login',
      name: 'auth-login',
      component: () => import('@/views/modules/Authentication/Login.vue'),
      meta: {
        layout: 'full',
        resource: 'Auth',
        redirectIfLoggedIn: true,
      },
    },
    {
      path: '/register',
      name: 'auth-register',
      component: () => import('@/views/modules/Authentication/Register.vue'),
      meta: {
        layout: 'full',
        resource: 'Auth',
        redirectIfLoggedIn: true,
      },
    },
    {
      path: '/forgot-password',
      name: 'auth-forgot-password',
      component: () => import('@/views/modules/Authentication/ForgotPassword.vue'),
      meta: {
        layout: 'full',
        resource: 'Auth',
        redirectIfLoggedIn: true,
      },
    },
    {
      path: '/products',
      name: 'ProductsViewLayout',
      component: () => import('@/views/layouts/ProductsViewLayout.vue'),
      children: [
        {
          path: '/products/all',
          name: 'all-products',
          component: () => import('@/views/modules/Products/AllProducts.vue'),
          meta: {
            layout: 'full',
            requireAuth: true,
            breadcrumb: [
              {
                text: 'Home',
              },
              {
                text: 'Shop',
                active: true,
              },
            ],
          },
        },
        {
          path: '/product/:id',
          name: 'product-details',
          component: () => import('@/views/modules/Products/ProductDetails.vue'),
          meta: {
            layout: 'full',
            requireAuth: true,
            redirectIfLoggedIn: true,
          },
        },
      ],
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})

export default router
