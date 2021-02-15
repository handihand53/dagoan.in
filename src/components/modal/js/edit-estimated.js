import { mapActions } from 'vuex'
import Cookie from 'vue-cookie'

export default {
  name: 'edit-estimated',
  data () {
    return {
      estimatedTime: 0,
      show: false,
      valid: true
    }
  },
  props: {
    kanbanId: {
      type: String,
      default: ''
    },
    data: {
      type: Object
    }
  },
  methods: {
    ...mapActions([
      'updateTaskTime'
    ]),
    async editEstimated () {
      if (!((this.data.taskEstimatedTime - this.estimatedTime) < 0)) {
        await this.updateTaskTime({
          data: {
            assignTo: this.data.assignTo,
            description: this.data.description,
            imageList: this.data.imageList,
            section: this.data.section,
            tagId: this.data.tagId,
            taskEstimatedTime: this.data.taskEstimatedTime,
            taskId: this.data.taskId,
            taskTimeLeft: this.data.taskEstimatedTime - this.estimatedTime,
            title: this.data.title,
            kanbanId: this.kanbanId,
            projectId: this.$route.params.projectId,
            userId: Cookie.get('dataId')
          },
          fail: () => {
            this.valid = false
          },
          success: () => {
            this.estimatedTime = 0
            this.show = false
            this.$emit('editted-kanban')
            this.valid = true
          }
        })
      } else {
        this.valid = false
      }
      setTimeout(() => {
        this.$emit('editted-kanban')
      }, 500)
    }
  }
}
