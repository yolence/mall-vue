import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Friends from './views/friends'
import Cart from './views/cart'
import Search from './views/search'
import newlist from './views/home/newlist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'

    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/friends',
      component: Friends
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/home/newslist',
      component: newlist
    }

  ]
})
