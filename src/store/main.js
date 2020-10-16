import api from '@/api'

export const state = {
  isLogin: false,
  currentUser: []
}

export const mutations = {
  setIsLogin (state, value) {
    state.isLogin = value
  },
  setCurrentUser (state, value) {
    state.currentUser = value
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
  }
}

export const getters = {
  isLogin (state) {
    return state.isLogin
  },
  currentUser (state) {
    return state.currentUser
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
