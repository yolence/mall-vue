import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/vant.js'
import moment from 'moment'
import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:5000/'

Vue.prototype.$http = axios
Vue.filter('datefmt', (date, arg = 'YYYY-MM-DD hh:mm:ss') => {
  return moment(date).format(arg)
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
