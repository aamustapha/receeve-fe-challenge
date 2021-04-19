import Vue from 'vue'
import App from  '@/App.vue'
import '@/assets/style/main.scss'
import router from './router'
import axios from "axios";

Vue.config.productionTip = false
Vue.prototype.$api = axios.create({baseURL: 'http://localhost:9001'})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
