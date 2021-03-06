// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueScroller from 'vue-scroller'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Toast from 'vue-easy-toast'
// import echarts from 'echarts'

router.beforeEach((to, from, next) => {
  if (to.query.uid && to.query.token) {
    var uids = to.query.uid
    var tokens = to.query.token
    console.log(to)
    // to.url = to.url + sessionStorage.getItem('from_agent_id')
    if (uids instanceof Array) {
      localStorage.setItem('uid', uids[uids.length - 1])
    } else {
      localStorage.setItem('uid', uids)
    }
    if (tokens instanceof Array) {
      localStorage.setItem('token', tokens[tokens.length - 1])
    } else {
      localStorage.setItem('token', tokens)
    }
  }
  if (to.query.hasOwnProperty('from_agent_id')) {
    var fromAgentIds = to.query.from_agent_id
    if (fromAgentIds instanceof Array) {
      sessionStorage.setItem('from_agent_id', fromAgentIds[fromAgentIds.length - 1])
    } else {
      sessionStorage.setItem('from_agent_id', fromAgentIds)
    }
  }
  next()
})

Vue.use(VueScroller)
Vue.use(VueAwesomeSwiper)
Vue.use(Toast)
// Vue.prototype.$echarts = echarts
// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

