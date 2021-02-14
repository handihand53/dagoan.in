import PlainHeader from '@/components/PlainHeader.vue'
import NavBar from '@/components/home/NavBar.vue'
import draggable from 'vuedraggable'
import { mapGetters, mapActions } from 'vuex'
import Cookie from 'vue-cookie'

const AddTask = () => import(/* webpackChunkName: "modal-addTask" */ '@/components/modal/AddTask.vue')
const DetailCard = () => import(/* webpackChunkName: "modal-detailCard" */ '@/components/modal/DetailCard.vue')
const EditList = () => import(/* webpackChunkName: "modal-editList" */ '@/components/modal/EditList.vue')
const AddList = () => import(/* webpackChunkName: "modal-addList" */ '@/components/modal/AddList.vue')
const EditProject = () => import(/* webpackChunkName: "modal-editProject" */ '@/components/modal/EditProject.vue')
const EditEstimated = () => import(/* webpackChunkName: "modal-editEstimated" */ '@/components/modal/EditEstimated.vue')

export default {
  name: 'main-component',
  display: 'Two Lists',
  order: 1,
  components: {
    AddTask,
    DetailCard,
    draggable,
    EditList,
    AddList,
    NavBar,
    PlainHeader,
    EditProject,
    EditEstimated
  },
  created () {
    this.getFirstData()
    this.getProjectDetail()
  },
  data () {
    return {
      idUser: Cookie.get('dataId'),
      kanbanId: '',
      taskId: '',
      taskListLength: 0,
      allList: [],
      calledTimes: 0,
      ele: {},
      called: 0
    }
  },
  computed: {
    ...mapGetters([
      'kanbanList',
      'projectsData',
      'labelList',
      'getUser'
    ]),
    data () {
      return this.projectsData.data || []
    },
    dataProject () {
      return this.data.projects || []
    },
    kanban () {
      return this.kanbanList.kanban || []
    },
    kanbanForms () {
      return this.kanban.kanbanForms || []
    },
    listOfKanban () {
      return this.kanbanForms.sort(function (a, b) {
        return a.section - b.section
      })
    },
    labelListData () {
      return this.labelList.data || []
    },
    labelListForm () {
      return this.labelListData.labelForm || []
    },
    labelFilter () {
      return id => this.labelListForm
        .find((label) => label.labelFormId === id) || {}
    },
    dragOptions () {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  },
  methods: {
    ...mapActions([
      'getKanban',
      'getProjectData',
      'getLabelListData',
      'assignTask',
      'updateSection',
      'getUserDetail'
    ]),
    getFirstData () {
      console.log('ter[aggil')
      this.getKanban({
        data: {
          projectId: this.$route.params.projectId,
          userId: Cookie.get('dataId')
        }
      })
      this.getLabel()
    },
    getLabel () {
      this.getLabelListData({
        data: {
          projectId: this.$route.params.projectId,
          userId: Cookie.get('dataId')
        }
      })
    },
    async assignTaskTo (kanbanId, id) {
      await this.assignTask({
        data: {
          assignTo: {
            userId: Cookie.get('dataId'),
            userName: this.getUser.userName
          },
          kanbanId: kanbanId,
          projectId: this.$route.params.projectId,
          userId: Cookie.get('dataId'),
          taskId: id
        }
      })
      this.getFirstData()
    },
    getProjectDetail () {
      this.getProjectData({
        data: this.$route.params.projectId
      })
    },
    getLabelNameData (id) {
      return this.labelFilter(id).labelName || []
    },
    getLabelColorData (id) {
      return this.labelFilter(id).labelColor || []
    },
    getTime (h) {
      if (Math.floor(h / 8)) {
        return h % 8 === 0 ? Math.floor(h / 8) + 'd' : Math.floor(h / 8) + 'd ' + h % 8 + 'h'
      }
      return h + 'h'
    },
    logChange (data, id) {
      let i = 0
      data.forEach((el) => {
        el.section = i
        i += 1
      })
      this.allList.push({
        list: data,
        id: id
      })
    },
    getData () {
      this.getUserDetail({
        data: {
          userId: Cookie.get('dataId')
        }
      })
    },
    getDataUser (d, length, sd) {
      console.log(d, length, sd)

      this.called += 1
      return 'asd'
    },
    updateData () {
      setTimeout(() => {
        const idx = this.calledTimes
        this.updateSection({
          data: {
            kanbanId: this.allList[idx].id,
            projectId: this.$route.params.projectId,
            taskLists: this.allList[idx].list,
            userId: Cookie.get('dataId')
          }
        })
        this.calledTimes += 1
        if (this.calledTimes <= this.allList.length) {
          this.updateData()
        } else {
          this.allList = []
          this.calledTimes = 0
        }
      }, 500)
    },
    kanbanDetailUpdate (id, taskId) {
      this.kanbanId = id
      this.taskId = taskId
    },
    setEditTime (element, id) {
      this.ele = element
      this.kanbanId = id
    }
  }
}
