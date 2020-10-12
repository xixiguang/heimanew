import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/base.less'
import './styles/iconfont.css'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'
import HmHeader from './components/HmHeader.vue'
import Logo from './components/Logo.vue'
import axios from 'axios'
import HmNavItem from './components/HmNavItem.vue'
import moment from 'moment'
Vue.prototype.$axios = axios
axios.defaults.baseURL = 'http://localhost:3000'
Vue.use(Vant)
Vue.filter('time', input => {
  return moment(input).format('YYYY-MM-DD')
})
router.beforeEach(function(to, from, next) {
  const token = localStorage.getItem('token')
  if (to.name !== 'user' || token) {
    next()
  } else {
    router.push('/login')
  }
})
Vue.component('hm-header', HmHeader)
Vue.component('hm-logo', Logo)
Vue.component('hm-navitem', HmNavItem)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
