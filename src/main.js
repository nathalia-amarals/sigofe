// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)

// Vue.prototype.$token = 'Test'
let $isValidToken = false
// export default $isValidToken
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // $isValidToken,
  created: {
    $isValidToken,
    $token: ''
  },
  components: { App },
  template: '<App/>'
})
