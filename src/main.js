import Vue from 'vue'
import App from './App.vue'
// import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router'
import {routes} from './routes.js'

Vue.use(VueRouter)

Vue.use(Vuetify)
const router = new VueRouter ({
  routes,
  mode: 'history'
})

new Vue({
  vuetify,

  // vuetify,
  render: h => h(App),
  router
}).$mount('#app')
