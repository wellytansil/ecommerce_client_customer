import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Product from '../views/Product.vue'
import Cart from '../views/Cart'

Vue.use(Vuex)
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/Product',
    name: 'Product',
    component: Product
  },
  {
    path: '/Cart',
    name: 'Cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
