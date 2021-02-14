// const endpoint = 'http://localhost:5000'

export default {
  api: {
    base_path: '',
    login: '/api/auth/login',
    userDetail: '/api/get-user',
    userEmailDetail: '/api/get-user-email',
    projects: {
      getListProjects: '/api/member',
      getProjects (id) {
        return `/api/projects?projectId=${id.data}`
      },
      addProject: '/api/projects',
      updateProject: '/api/projects/update'
    },
    chats: {
      postChat: '/api/projects/chat'
    },
    member: {
      addMember: '/api/member/add',
      inviteMember: '/api/invited/add',
      updateMember: '/api/projects/update_member',
      deleteMember: '/api/projects/delete_member'
    },
    kanban: {
      kanbanList: '/api/kanbans',
      addKanbanList: '/api/kanbans/add',
      editKanbanName: '/api/kanbans/update'
    },
    label: {
      labelList: '/api/label',
      labelColor: '/api/labelDetail',
      postLabel: '/api/label/add',
      editLabel: '/api/label/update'
    },
    comment: {
      addComment: '/api/comment/add',
      updateComment: '/api/comment/put',
      deleteComment: '/api/comment/delete'
    },
    taskList: {
      getTaskList: '/api/taskList',
      addTaskList: '/api/taskList/add',
      assignTask: '/api/taskList/update-assign-to',
      updateTaskList: '/api/taskList/update',
      updateSection: '/api/taskList/update-section'
    },
    main: {
      home (promoName) {
        return `/backend/content/promotions/${promoName}/parameters`
      },
      swapi (number) {
        console.log(number)

        // return `https://swapi.dev/api/people/${number}`
        return `api/v1/employee/${number}`
        // return `api/films/${number}`
        // return `https://run.mocky.io/v3/12869b47-9508-4ebf-b9a0-178c947b772d`
      }
    },
    chat: '/clients'
  },
  getApiPath: function (apiPath) {
    return this.api.base_path + apiPath
  }
}
