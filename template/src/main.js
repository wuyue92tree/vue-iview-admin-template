// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import * as api from './api'
import fetch from './utils/http.js'
import Db from './utils/db.js'

Vue.use(iView)

Vue.config.productionTip = false

Vue.prototype.$api = api
Vue.prototype.$http = fetch
Vue.prototype.$db = Db

// router.beforeEach((to, from, next) => {
//   let accessToken = Db.get('access_token')
//   if (!accessToken && to.name !== 'login') {
//     next('/login')
//   } else {
//     next()
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
