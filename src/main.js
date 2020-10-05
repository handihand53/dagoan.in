import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

// font awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// vuetify
// import vuetify from '@/plugins/vuetify'

// Vue Loading
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

// AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

// bootstrap
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Install BootstrapVue
Vue.use(BootstrapVue)

// Install vue loading
Vue.use(Loading)

// iInstall fontawesome
Vue.use(FontAwesomeIcon)
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  // vuetify,
  created () {
    AOS.init()
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
