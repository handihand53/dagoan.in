import { mapActions } from 'vuex'

export default {
  name: 'update-comment',
  props: {
    dataComment: {
      default: () => ({})
    },
    kanbanId: {
      type: String,
      default: ''
    },
    taskId: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      newComment: '',
      show: false
    }
  },
  methods: {
    ...mapActions([
      'updateComment'
    ]),
    async editComment () {
      await this.updateComment({
        data: {
          comment: this.newComment,
          commentId: this.dataComment.commentId,
          kanbanId: this.kanbanId,
          projectId: this.$route.params.projectId,
          taskListId: this.taskId,
          userId: this.dataComment.userId
        },
        success: () => {
          this.$emit('editted')
        }
      })
      setTimeout(() => {
        this.newComment = ''
        this.show = false
        this.$emit('editted')
      }, 500)
    }
  },
  watch: {
    dataComment: {
      immediate: true,
      handler: function () {
        this.newComment = this.dataComment.comment
      }
    }
  }
}
