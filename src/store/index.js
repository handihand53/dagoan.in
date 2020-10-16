import Vue from 'vue'
import Vuex from 'vuex'
import main from './main'

Vue.use(Vuex)

var mainStore = new Vuex.Store({
  state: main.state,
  mutations: main.mutations,
  actions: main.actions,
  getters: main.getters
})

window.addStoreModule = function (modules) {
  for (var i in modules) {
    mainStore.registerModule(i, modules[i])
  }
  return mainStore
}

export default mainStore
