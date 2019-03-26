import Vue from 'vue'
import Router from 'vue-router'
import MenuBar from '@/components/MenuBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MenuBar',
      component: MenuBar
    }
  ]
})
