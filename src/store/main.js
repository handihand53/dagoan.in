import api from '@/api'

export const state = {
  isLogin: false,
  currentUser: [],
  clients: [],
  loading: false
}

export const mutations = {
  setIsLogin (state, value) {
    state.isLogin = value
  },
  setCurrentUser (state, value) {
    state.currentUser = value
  },
  setClients (state, payload) {
    state.clients = payload
  },
  setLoading (state, payload) {
    state.loading = payload
  }
}

export const actions = {
  getCurrentUser ({ commit }, { number }) {
    return new Promise((resolve, reject) => {
      api.getData(response => {
        commit('setCurrentUser', { value: response })
        resolve()
      }, { number })
    })
  },
  getConnectedClients: ({ commit }) => new Promise((resolve, reject) => {
    console.log('terpanggil')
    const onSuccess = (response) => {
      commit('setClients', response.body)
      commit('setLoading', false)

      resolve(response)
    }

    const onError = (error) => {
      commit('setClients', [])
      commit('setLoading', false)
      reject(error)
    }

    commit('setLoading', true)

    api.getConnectedClients().then(onSuccess).catch(onError)
  })
}

export const getters = {
  isLogin (state) {
    return state.isLogin
  },
  currentUser (state) {
    return state.currentUser
  },
  clientList (state) {
    return state.clients
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
