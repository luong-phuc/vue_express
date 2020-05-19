// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'bootstrap'
import 'lodash'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

// Set Api Host
// Vue.config.HOST_API = 'http://127.0.0.1:8080'
Vue.config.HOST_API = ''

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
