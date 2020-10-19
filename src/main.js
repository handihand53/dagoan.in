import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vueResource from 'vue-resource'
import './registerServiceWorker'
// import socketio from 'socket.io'

// chat
import Chat from 'vue-beautiful-chat'
import * as io from 'socket.io-client'
import VueSocketIO from 'vue-socket.io'

// import enlarge image
import VueExpandableImage from 'vue-expandable-image'
import EnlargeableImage from '@diracleo/vue-enlargeable-image'

// vue Toast
// import Toasted from 'vue-toasted'
import VueToast from 'vue-toast-notification'
// Import one of available themes
// import 'vue-toast-notification/dist/theme-default.css'
import 'vue-toast-notification/dist/theme-sugar.css'

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

// export const SocketInstance = socketio('http://localhost:3000')

// Install BootstrapVue
Vue.use(BootstrapVue)

// Install vue loading
Vue.use(Loading)

// Install larger image
Vue.use(EnlargeableImage)
Vue.use(VueExpandableImage)

// Instal vue toast
// Vue.use(Toasted)
Vue.use(VueToast)

// Instal chat
Vue.use(Chat)

// Install fontawesome
Vue.use(FontAwesomeIcon)
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(vueResource)
// SocketIo Conf
// Vue.use(VueSocketIO, io('http://localhost:5000'))
// const SocketInstance = io.connect('http://localhost:5000', {
//   query: {
//     token: window.localStorage.getItem('auth')
//   }
// })

// Vue.use(new VueSocketIO({
//   debug: true,
//   connection: SocketInstance
// }), store)
Vue.use(
  new VueSocketIO({
    debug: false,
    connection: io('http://localhost:5000'), // options object is Optional
    options: { path: '/chat' },
    vuex: {
      store
    }
  })
)
Vue.config.productionTip = false
// Vue.use(new VueSocketIO, io('http://localhost:5000'), store)

new Vue({
  // vuetify,
  created () {
    AOS.init()
  },
  mounted () {
    const viewportMeta = document.createElement('meta')
    viewportMeta.name = 'viewport'
    viewportMeta.content = 'width=device-width, initial-scale=1'
    document.head.appendChild(viewportMeta)
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
