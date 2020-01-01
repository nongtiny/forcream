import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BackButton from './components/BackButton'
import './styles/app.scss'

Vue.config.productionTip = false
Vue.component("back-button", BackButton);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
