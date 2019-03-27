import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import './registerServiceWorker'
import VueRouter from 'vue-router'
import {routes} from './routes'

Vue.use(VueRouter);

Vue.config.productionTip = false

const router = new VueRouter({ routes : routes});


new Vue({
  el: '#app',
  router : router,
  render: h => h(App),
})
