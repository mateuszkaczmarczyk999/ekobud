import Vue from 'vue'
import Router from 'vue-router'
import About from '@/sites/About'
import Blog from '@/sites/Blog'
import Contact from '@/sites/Contact'
import Offers from '@/sites/Offers'
import Details from '@/sites/Details'
import Main from '@/sites/Main'
import Panel from '@/admin/Panel'
import Login from '@/admin/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      meta: { layout: 'default' },
      component: Main
    },
    {
      path: '/o_nas',
      name: 'About',
      meta: { layout: 'default' },
      component: About
    },
    {
      path: '/kontakt',
      name: 'Contact',
      meta: { layout: 'default' },
      component: Contact
    },
    {
      path: '/aktualnosci',
      name: 'Blog',
      meta: { layout: 'default' },
      component: Blog
    },
    {
      path: '/oferty',
      name: 'Offers',
      meta: { layout: 'default' },
      component: Offers
    },
    {
      path: '/oferty/:id',
      name: 'Details',
      meta: { layout: 'default' },
      component: Details
    },
    {
      path: '/admin-login',
      name: 'Login Page',
      meta: { layout: 'admin' },
      component: Login
    },
    {
      path: '/admin-panel',
      name: 'Panel',
      meta: { layout: 'admin'},
      component: Panel
    }
  ]
})
