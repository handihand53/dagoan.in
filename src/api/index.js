import config from '@/config'
import httpApi from '@/util/http-api'
import Vue from 'vue'

const endpoint = 'http://localhost:5000'

export default {
  // get
  getProjects: (cb, data, err) => {
    httpApi.getDataViaApi(config.api.projects.getProjects(data), cb, err)
  },
  getListProjects: (cb, data, err) => {
    httpApi.postDataViaApi(config.api.projects.getListProjects, cb, data, err)
  },
  getData: (cb, data, err) => {
    httpApi.getDataViaApi(config.api.main.swapi(data.number), cb, err)
  },
  getConnectedClients () {
    return Vue.http.get(`${endpoint}/clients`)
  },
  getKanbanList: (cb, data, err) => {
    httpApi.postDataViaApi(config.api.kanban.kanbanList, cb, data, err)
  },
  getTaskListDetail: (cb, data, err) => {
    httpApi.postDataViaApi(config.api.taskList.getTaskList, cb, data.data, err)
  },
  getLabelList: (cb, data, err) => {
    httpApi.postDataViaApi(config.api.label.labelList, cb, data.data, err)
  },
  getLabelColor: (cb, data, err) => {
    httpApi.postDataViaApi(config.api.label.labelColor, cb, data.data, err)
  },
  getUserDetail: (cb, data, err) => {
    httpApi.postDataViaApi(config.api.userDetail, cb, data, err)
  },
  getUserEmailDetail: (cb, data, err) => {
    httpApi.postDataViaApi(config.api.userEmailDetail, cb, data, err)
  },
  // post
  postChat: (cb, data, err) => {
    httpApi.postDataViaApi(config.api.chats.postChat, cb, data, err)
  },
  inviteMember: (cb, data, err) => {
    httpApi.postDataViaApi(config.api.member.addMember, cb, data, err)
  },
  addNewCard: (cb, data, err) => {
    httpApi.postDataViaApi(config.api.kanban.addKanbanList, cb, data, err)
  },
  doLogin: (cb, data, err) => {
    httpApi.postDataViaApi(config.api.login, cb, data, err)
  },
  postNewComment: (cb, data, err) => {
    httpApi.postDataViaApi(config.api.comment.addComment, cb, data, err)
  },
  addProject: (cb, data, err) => {
    httpApi.postDataViaApi(config.api.projects.addProject, cb, data, err)
  },
  postNewLabel: (cb, data, err) => {
    httpApi.postDataViaApi(config.api.label.postLabel, cb, data, err)
  },
  postTaskList: (cb, data, err) => {
    httpApi.postDataViaApi(config.api.taskList.addTaskList, cb, data, err)
  },
  addMember: (cb, data, err) => {
    httpApi.postDataViaApi(config.api.member.addMember, cb, data, err)
  },
  // put
  updateMember: (cb, data, err) => {
    httpApi.putDataViaApi(config.api.member.updateMember, cb, data, err)
  },
  updateTaskList: (cb, data, err) => {
    httpApi.putDataViaApi(config.api.taskList.updateTaskList, cb, data, err)
  },
  updateSectionTaskList: (cb, data, err) => {
    httpApi.putDataViaApi(config.api.taskList.updateSection, cb, data, err)
  },
  updateKanbanName: (cb, data, err) => {
    httpApi.putDataViaApi(config.api.kanban.editKanbanName, cb, data, err)
  },
  assignTo: (cb, data, err) => {
    httpApi.putDataViaApi(config.api.taskList.assignTask, cb, data, err)
  },
  editTheLabel: (cb, data, err) => {
    httpApi.putDataViaApi(config.api.label.editLabel, cb, data, err)
  },
  doUpdateProject: (cb, data, err) => {
    httpApi.putDataViaApi(config.api.projects.updateProject, cb, data, err)
  },
  doUpdateComment: (cb, data, err) => {
    httpApi.putDataViaApi(config.api.comment.updateComment, cb, data, err)
  },
  deleteTheComment: (cb, data, err) => {
    httpApi.putDataViaApi(config.api.comment.deleteComment, cb, data, err)
  },
  deleteMember: (cb, data, err) => {
    httpApi.putDataViaApi(config.api.member.deleteMember, cb, data, err)
  }
}
