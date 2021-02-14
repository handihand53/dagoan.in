import { mapActions } from 'vuex'
import Cookie from 'vue-cookie'

export default {
  name: 'add-list',
  data () {
    return {
      projectCardTitle: '',
      show: false
    }
  },
  props: {
    kanbanLength: {
      type: Number,
      default: 0
    }
  },
  methods: {
    ...mapActions([
      'addKanban'
    ]),
    async addKanbanCard () {
      await this.addKanban({
        data: {
          kanbanName: this.projectCardTitle,
          projectId: this.$route.params.projectId,
          kanbanSection: this.kanbanLength,
          userId: Cookie.get('dataId')
        }
      })
      this.show = false
      this.$emit('added-kanban')
    }
  }
}
