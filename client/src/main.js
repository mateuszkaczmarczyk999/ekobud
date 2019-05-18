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

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Lightbox)
Vue.use(VueScrollTo)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  mounted () {
    router.beforeEach((to, from, next) => {
      const mainScrollTo = scroller()
      mainScrollTo('#menu')
      next()
    })
  },
  template: '<App/>'
})
