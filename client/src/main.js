// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App'
import router from './router'
import Lightbox from 'vue-pure-lightbox'
import VueScrollTo from 'vue-scrollto'
import {scroller} from 'vue-scrollto/src/scrollTo'
import Default from './layout/Default.vue'
import Admin from './layout/Admin.vue'
import store from './store'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Lightbox)
Vue.use(VueScrollTo)

Vue.component('default-layout', Default)
Vue.component('admin-layout', Admin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  mounted () {
    router.beforeEach((to, from, next) => {
      if (to.matched.some(record => record.meta.requiresAuth)) {
        next({ path: '/admin-login' })
      } else {
        const mainScrollTo = scroller()
        mainScrollTo('#menu')
        next()
      }
    })
  },
  template: '<App/>'
})
