// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueScroller from 'vue-scroller'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Toast from 'vue-easy-toast'
router.afterEach(route => {
  if (route.query.token && route.query.uid) {
    localStorage.setItem('token', route.query.token)
    localStorage.setItem('uid', route.query.uid)
  }
})
Vue.use(VueScroller)
Vue.use(VueAwesomeSwiper)
Vue.use(Toast)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

