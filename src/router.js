import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home'
import Friends from './views/friends'
import Cart from './views/cart'
import Search from './views/search'
import Newlist from './views/home/news/newlist/'
import newsinfo from './views/home/news/newsinfo'
import photolist from './views/home/photos/photolist'

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
      component: Newlist
    },
    {
      path: '/home/newsinfo/:id',
      component: newsinfo
    },
    {
      path: '/home/photolist',
      component: photolist
    }

  ]
})
