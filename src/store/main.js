import api from '@/api'
import Cookie from 'vue-cookie'

export const state = {
  isLogin: false,
  currentUser: [],
  clients: [],
  listProject: [],
  projects: [],
  kanbanList: [],
  loading: false,
  response: {},
  projectsData: {},
  taskListDetail: {},
  labelList: [],
  labelColor: [],
  userDetail: [],
  userEmailDetail: [],
  projectsOwner: []
}

export const mutations = {
  setProjects (state, value) {
    state.projects.push(value)
  },
  setProjectsData (state, value) {
    state.projectsData = value
  },
  setProjectsOwner (state, value) {
    state.projectsOwner = value
  },
  setListProjects (state, value) {
    state.listProject = value
  },
  setKanbanList (state, value) {
    state.kanbanList = value
  },
  setTaskListDetail (state, value) {
    state.taskListDetail = value
  },
  setLabelList (state, value) {
    state.labelList = value
  },
  setLabelColor (state, value) {
    state.labelColor = value
  },
  // tidak terpakai kayanya
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
  },
  setResponse (state, payload) {
    state.response = payload
  },
  resetList (state) {
    state.projects = []
  },
  setUserDetail (state, payload) {
    state.userDetail = payload
  },
  setUserEmailDetail (state, payload) {
    state.userEmailDetail = payload
  }
}

export const actions = {
  resetListProject ({ commit }) {
    commit('resetList')
  },
  // Get Section
  getUserDetail: ({ commit }, { success, fail, data } = {}) => {
    api.getUserDetail(response => {
      commit('setUserDetail', response.body)
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  },
  getUserEmailDetail: ({ commit }, { success, fail, data } = {}) => {
    api.getUserEmailDetail(response => {
      commit('setUserEmailDetail', response.body)
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  },
  getListProject ({ commit }, { data }) {
    return new Promise((resolve, reject) => {
      api.getListProjects(response => {
        commit('setListProjects', response.body.data)
        resolve()
      }, data)
    })
  },
  getKanban ({ commit }, { data }) {
    return new Promise((resolve, reject) => {
      api.getKanbanList(response => {
        commit('setKanbanList', response.body.data)
        resolve()
      }, data)
    })
  },
  // getListProject ({ commit }, { data }) {
  //   console.log(data, 'request')
  //   return new Promise((resolve, reject) => {
  //     api.getListProjects(response => {
  //       commit('setListProjects', response.body)
  //       resolve()
  //     }, { data })
  //   })
  // },
  getProjectData ({ commit }, { data }) {
    return new Promise((resolve, reject) => {
      api.getProjects(response => {
        commit('setProjectsData', response.body)
        resolve()
      }, { data })
    })
  },
  // d
  getProjectOwner: ({ commit }, { success, fail, data } = {}) => {
    api.getUserDetail(response => {
      commit('setProjectsOwner', response.body)
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  },
  getProject ({ commit }, { data }) {
    return new Promise((resolve, reject) => {
      api.getProjects(response => {
        commit('setProjects', response.body)
        resolve()
      }, { data })
    })
  },
  getTaskDetail ({ commit }, { data }) {
    return new Promise((resolve, reject) => {
      api.getTaskListDetail(response => {
        commit('setTaskListDetail', response.body)
        resolve()
      }, { data })
    })
  },
  getLabelListData ({ commit }, { data }) {
    return new Promise((resolve, reject) => {
      api.getLabelList(response => {
        commit('setLabelList', response.body)
        resolve()
      }, { data })
    })
  },
  getLabelColor ({ commit }, { data }) {
    return new Promise((resolve, reject) => {
      api.getLabelColor(response => {
        commit('setLabelColor', response.body)
        resolve()
      }, { data })
    })
  },
  getConnectedClients: ({ commit }) => new Promise((resolve, reject) => {
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
  }),
  // Post Section
  postChat: ({ commit }, { success, fail, data } = {}) => {
    api.postChat(response => {
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  },
  inviteMember: ({ commit }, { success, fail, data } = {}) => {
    api.inviteMember(response => {
      commit('setResponse', response.body)
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  },
  addKanban: ({ commit }, { success, fail, data } = {}) => {
    api.addNewCard(response => {
      commit('setResponse', response.body)
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  },
  postLoginUser: ({ commit }, { success, fail, data } = {}) => {
    api.doLogin(response => {
      success && success(response)
      Cookie.set('dataId', response.body.userId, 1) // set cookies expired 1 hari
      Cookie.set('dataToken', response.body.accessToken, 1) // set cookies expired 1 hari
    }, data, (res) => {
      fail && fail(res)
    })
  },
  postNewLabel: ({ commit }, { success, fail, data } = {}) => {
    api.postNewLabel(response => {
      commit('setResponse', response.body)
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  },
  postComment: ({ commit }, { success, fail, data } = {}) => {
    api.postNewComment(response => {
      commit('setResponse', response.body)
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  },
  postTaskList: ({ commit }, { success, fail, data } = {}) => {
    api.postTaskList(response => {
      commit('setResponse', response.body)
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  },
  postCreateProject: ({ commit }, { success, fail, data } = {}) => {
    api.addProject(response => {
      commit('setResponse', response.body)
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  },
  addMember: ({ commit }, { success, fail, data } = {}) => {
    api.addMember(response => {
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  },
  // update
  updateMember: ({ commit }, { success, fail, data } = {}) => {
    api.updateMember(response => {
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  },
  updateTaskTime: ({ commit }, { success, fail, data } = {}) => {
    api.updateTaskList(response => {
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  },
  updateKanbanName: ({ commit }, { success, fail, data } = {}) => {
    api.updateKanbanName(response => {
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  },
  editTheLabel: ({ commit }, { success, fail, data } = {}) => {
    api.editTheLabel(response => {
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  },
  assignTask: ({ commit }, { success, fail, data } = {}) => {
    api.assignTo(response => {
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  },
  updateSection: ({ commit }, { success, fail, data } = {}) => {
    api.updateSectionTaskList(response => {
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  },
  updateProject: ({ commit }, { success, fail, data } = {}) => {
    api.doUpdateProject(response => {
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  },
  updateComment: ({ commit }, { success, fail, data } = {}) => {
    api.doUpdateComment(response => {
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  },
  // delete
  deleteComment: ({ commit }, { success, fail, data } = {}) => {
    api.deleteTheComment(response => {
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  },
  deleteMember: ({ commit }, { success, fail, data } = {}) => {
    api.deleteMember(response => {
      success && success(response)
    }, data, (res) => {
      fail && fail(res)
    })
  }
}

export const getters = {
  getUser (state) {
    return state.userDetail.data
  },
  getUserEmail (state) {
    return state.userEmailDetail.data
  },
  listProject (state) {
    return state.listProject
  },
  projects (state) {
    return state.projects
  },
  kanbanList (state) {
    return state.kanbanList
  },
  taskListDetail (state) {
    return state.taskListDetail
  },
  labelList (state) {
    return state.labelList
  },
  labelColor (state) {
    return state.labelColor
  },
  // tidak terpakai kayanya
  isLogin (state) {
    return state.isLogin
  },
  currentUser (state) {
    return state.currentUser
  },
  clientList (state) {
    return state.clients
  },
  getResponse (state) {
    return state.response
  },
  projectsData (state) {
    return state.projectsData
  },
  projectOwner (state) {
    return state.projectsOwner.data
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
