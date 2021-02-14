import DoughnutChart from '@/components/home/DoughnutChart.vue'
import { mapGetters, mapActions } from 'vuex'
import Cookie from 'vue-cookie'

export default {
  name: 'summary-chart',
  components: {
    DoughnutChart
  },
  data () {
    return {
      transProps: {
        // Transition name
        name: 'flip-list'
      },
      fields: [
        { key: 'Task', sortable: false },
        { key: 'Tag', sortable: true },
        { key: 'timeLeft', sortable: true },
        { key: 'Estimated', sortable: true }
      ]
    }
  },
  async created () {
    await this.getFirstData()
    await this.getProjectDetail()
  },
  computed: {
    ...mapGetters([
      'kanbanList',
      'projectsData',
      'labelList'
    ]),
    kans () {
      return this.kanbanList.kanban || {}
    },
    kanbanForm () {
      return this.kans.kanbanForms || {}
    },
    kanbanSort () {
      return this.kanbanForm.sort(function (a, b) {
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
    }
  },
  methods: {
    ...mapActions([
      'getKanban',
      'getProjectData',
      'getLabelListData'
    ]),
    getFirstData () {
      this.getKanban({
        data: {
          projectId: this.$route.params.projectId,
          userId: Cookie.get('dataId')
        }
      })
      this.getLabel()
    },
    getProjectDetail () {
      this.getProjectData({
        data: this.$route.params.projectId
      })
    },
    getLabel () {
      this.getLabelListData({
        data: {
          projectId: this.$route.params.projectId,
          userId: Cookie.get('dataId')
        }
      })
    },
    getItem (data) {
      const item = []
      data.forEach((element) => {
        const name = this.getLabelNameData(element.tagId)
        const color = this.getLabelColorData(element.tagId)
        const estimated = this.getTime(element.taskEstimatedTime)
        const timeLeft = this.getTime(element.taskTimeLeft)

        item.push(
          { Task: element.title, timeLeft: timeLeft, Estimated: estimated, tagColor: color, tagName: name }
        )
      })
      return item
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
    }
  }
}
