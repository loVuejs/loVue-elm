import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/home.vue'
import AllCity from './views/home/allCity.vue'
import Login from './views/login/login.vue'
import City from './views/city/city.vue'
import Msite from './views/msite/msite.vue'
import Food from './views/food/food.vue'

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
