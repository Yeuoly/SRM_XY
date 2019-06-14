import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import './components'

Vue.config.productionTip = !process.env.VUE_APP_DEV_TOOL;

import { router } from "./routes"

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
