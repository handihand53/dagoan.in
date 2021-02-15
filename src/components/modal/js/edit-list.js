import { mapActions } from 'vuex'
import Cookie from 'vue-cookie'

export default {
  name: 'edit-list',
  data () {
    return {
      projectCardTitle: '',
      show: false
    }
  },
  props: {
    kanbanId: {
      type: String,
      default: ''
    }
  },
  methods: {
    ...mapActions([
      'updateKanbanName'
    ]),
    async editCardProject () {
      await this.updateKanbanName({
        data: {
          kanbanId: this.kanbanId,
          kanbanName: this.projectCardTitle,
          projectId: this.$route.params.projectId,
          userId: Cookie.get('dataId')
        }
      })
      setTimeout(() => {
        this.show = false
        this.$emit('edited-kanban')
      }, 500)
    }
  }
}
