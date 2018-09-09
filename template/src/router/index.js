import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/pages/Login'
import List from '@/pages/List'
import Profile from '@/pages/Profile'
import Setting from '@/pages/Setting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/list',
          name: 'List',
          component: List
        },
        {
          path: '/profile',
          name: 'Profile',
          component: Profile
        },
        {
          path: '/setting',
          name: 'Setting',
          component: Setting
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
