import Vue from 'vue'
import Router from 'vue-router'
let Home = () => import(/* webpackChunkName: "group-home" */ './views/home/home.vue')
let AllCity = () => import(/* webpackChunkName: "group-home" */ './views/home/allCity.vue')
let Login = () => import(/* webpackChunkName: "group-login" */ './views/login/login.vue')
let City = () => import(/* webpackChunkName: "group-city" */ './views/city/city.vue')
let Msite = () => import(/* webpackChunkName: "group-msite" */ './views/msite/msite.vue')
let Food = () => import(/* webpackChunkName: "group-food" */ './views/food/food.vue')

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/all-city',
      name: 'allCity',
      component: AllCity
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/city/:cityId',
      name: 'city',
      component: City
    },
    {
      path: '/msite',
      name: 'msite',
      component: Msite
    },
    {
      path: '/food',
      name: 'food',
      component: Food
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
