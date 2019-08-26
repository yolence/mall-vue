import Vue from 'vue'
import {
  Tabbar, TabbarItem,
  Button,
  NavBar, Swipe, SwipeItem, Grid, GridItem, Toast, Card, Tag
} from 'vant'
Vue.prototype.$toast = Toast
Vue
  .use(Tabbar).use(TabbarItem)
  .use(NavBar).use(Card).use(Tag)
  .use(Button).use(Swipe).use(SwipeItem).use(Grid).use(GridItem)
