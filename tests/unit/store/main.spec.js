import api from '@/api'
import Cookie from 'vue-cookie'
import objModule from '@/store/main'

jest.mock('@/api')

describe('main.spec.js', () => {
  test('getter', () => {
    const state = {
      isLogin: false,
      currentUser: 1,
      clients: 2,
      listProject: 3,
      projects: 4,
      kanbanList: 5,
      loading: false,
      response: 6,
      projectsData: 7,
      taskListDetail: 8,
      labelList: 9,
      labelColor: 10,
      userDetail: {
        data: 11
      },
      userEmailDetail: {
        data: 12
      },
      projectsOwner: {
        data: 13
      }
    }
    expect(objModule.getters.isLogin(state)).toBe(false)
    expect(objModule.getters.currentUser(state)).toBe(1)
    expect(objModule.getters.clientList(state)).toBe(2)
    expect(objModule.getters.listProject(state)).toBe(3)
    expect(objModule.getters.projects(state)).toEqual(4)
    expect(objModule.getters.kanbanList(state)).toBe(5)
    expect(objModule.getters.getResponse(state)).toBe(6)
    expect(objModule.getters.projectsData(state)).toBe(7)
    expect(objModule.getters.taskListDetail(state)).toBe(8)
    expect(objModule.getters.labelList(state)).toBe(9)
    expect(objModule.getters.labelColor(state)).toBe(10)
    expect(objModule.getters.getUser(state)).toBe(11)
    expect(objModule.getters.getUserEmail(state)).toBe(12)
    expect(objModule.getters.projectOwner(state)).toBe(13)
  })

  test('mutations', () => {
    const state = {
      isLogin: false,
      currentUser: 1,
      clients: 2,
      listProject: 3,
      projects: 4,
      kanbanList: 5,
      loading: false,
      response: 6,
      projectsData: 7,
      taskListDetail: 8,
      labelList: 9,
      labelColor: 10,
      userDetail: 11,
      userEmailDetail: 12,
      projectsOwner: 13
    }
    objModule.mutations.setIsLogin(state, true)
    expect(state.isLogin).toBe(true)

    objModule.mutations.setCurrentUser(state, 'desta')
    expect(state.currentUser).toBe('desta')

    objModule.mutations.setClients(state, 'gs')
    expect(state.clients).toBe('gs')

    objModule.mutations.setListProjects(state, 'ea')
    expect(state.listProject).toBe('ea')

    objModule.mutations.resetList(state)
    expect(state.projects).toEqual([])

    objModule.mutations.setLoading(state, false)
    expect(state.loading).toBe(false)

    objModule.mutations.setResponse(state, 'ada')
    expect(state.response).toBe('ada')

    objModule.mutations.setProjectsData(state, 'data')
    expect(state.projectsData).toBe('data')

    objModule.mutations.setTaskListDetail(state, 'lily')
    expect(state.taskListDetail).toBe('lily')

    objModule.mutations.setLabelList(state, 'billy')
    expect(state.labelList).toBe('billy')

    objModule.mutations.setLabelColor(state, 'lina')
    expect(state.labelColor).toBe('lina')

    objModule.mutations.setUserDetail(state, 'true')
    expect(state.userDetail).toBe('true')

    objModule.mutations.setUserEmailDetail(state, 'dava')
    expect(state.userEmailDetail).toBe('dava')

    objModule.mutations.setProjectsOwner(state, true)
    expect(state.projectsOwner).toBe(true)
  })
})
