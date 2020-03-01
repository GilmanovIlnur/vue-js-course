import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMaterial from 'vue-material'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate)
Vue.use(VueMaterial)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')