import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import './registerServiceWorker'
import VueRouter from 'vue-router'
import { routes } from './routes'
import VeeValidate from 'vee-validate'
import VueCharts from 'vue-chartjs'


Vue.use(VueRouter);
Vue.use(VeeValidate);
Vue.use(VueCharts);


Vue.config.productionTip = false

const router = new VueRouter({ routes: routes });



new Vue({
  el: '#app',
  mode: 'hostory',
  router: router,

  render: h => h(App),
})
