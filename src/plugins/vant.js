import Vue from 'vue'
import {
  Tabbar, TabbarItem,
  Button, Lazyload,
  NavBar, Swipe, SwipeItem, Grid, GridItem, Toast, Card, Tag, Tab, Tabs
} from 'vant'
Vue.prototype.$toast = Toast
const options = {
  loading: ('http://img.zcool.cn/community/024b2a58c69335a801219c774350ed.gif')
}
Vue
  .use(Tabbar).use(TabbarItem).use(Lazyload, options)
  .use(NavBar).use(Card).use(Tag).use(Tab).use(Tabs)
  .use(Button).use(Swipe).use(SwipeItem).use(Grid).use(GridItem)
