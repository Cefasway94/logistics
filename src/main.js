import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import store from './stores/store'
import vuelidate from './plugins/vulidate'

// const Vue = () => import('vue')
// const App = () => import('./App.vue')
// const router = () => import('./router')
// const vuetify = () => import('./plugins/vuetify')
// const store = () => import('./stores/store')
// const vuelidate = () => import('./plugins/vulidate')




Vue.config.productionTip = false


new Vue({
  router,
  vuetify,
  vuelidate,
  store,
  render: h => h(App)
}).$mount('#app')
  