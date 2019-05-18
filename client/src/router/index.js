import Vue from 'vue'
import Router from 'vue-router'
import About from '@/sites/About'
import Blog from '@/sites/Blog'
import Contact from '@/sites/Contact'
import Offers from '@/sites/Offers'
import Details from '@/sites/Details'
import Main from '@/sites/Main'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/o_nas',
      name: 'About',
      component: About
    },
    {
      path: '/kontakt',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/aktualnosci',
      name: 'Blog',
      component: Blog
    },
    {
      path: '/oferty',
      name: 'Offers',
      component: Offers
    },
    {
      path: '/oferty/:id',
      name: 'Details',
      component: Details
    }
  ]
})
