import Cookie from 'vue-cookie'
import { mapGetters, mapActions } from 'vuex'
import UpdateComment from '@/components/modal/UpdateComment.vue'

export default {
  name: 'detail-card',
  components: {
    UpdateComment
  },
  data () {
    return {
      newComment: '',
      dataComment: '',
      show: false
    }
  },
  props: {
    ownerId: {
      type: String,
      default: ''
    },
    kanbanId: {
      type: String,
      default: ''
    },
    taskId: {
      type: String,
      default: ''
    },
    labelListForm: {
      type: Array,
      default: {}
    }
  },
  created () {
    this.getData()
  },
  computed: {
    ...mapGetters([
      'taskListDetail',
      'getUser'
    ]),
    taskListDetailData () {
      return this.taskListDetail.data || {}
    },
    taskList () {
      return this.taskListDetailData.taskList || {}
    },
    labelFilter () {
      return id => this.labelListForm
        .find((label) => label.labelFormId === id) || {}
    },
    commentForm () {
      return this.taskList.commentForms || []
    },
    user () {
      return Cookie.get('dataId') || ''
    }
  },
  methods: {
    ...mapActions([
      'getTaskDetail',
      'postComment',
      'deleteComment',
      'getUserDetail'
    ]),
    reset () {
      this.show = false
    },
    setDataEdit (comment) {
      this.dataComment = comment
    },
    async addComment () {
      await this.postComment({
        data: {
          comment: this.newComment,
          userName: this.getUser.userName,
          kanbanId: this.kanbanId,
          taskListId: this.taskList.taskId,
          projectId: this.$route.params.projectId,
          userId: Cookie.get('dataId')
        }
      })
      this.newComment = ''
      await this.getDetail()
    },
    async getDetail () {
      await this.getTaskDetail({
        data: {
          kanbanId: this.kanbanId,
          taskId: this.taskId,
          projectId: this.$route.params.projectId,
          userId: Cookie.get('dataId')
        }
      })
    },
    getData () {
      this.getUserDetail({
        data: {
          userId: Cookie.get('dataId')
        }
      })
    },
    getTime (h) {
      if (Math.floor(h / 8)) {
        return h % 8 === 0 ? Math.floor(h / 8) + 'd' : Math.floor(h / 8) + 'd ' + h % 8 + 'h'
      }
      return h + 'h'
    },
    getImage (imagePath) {
      const path = imagePath.split('/')
      return `/assets/resources/uploads/commentPhoto/${path[path.length - 1]}`
    },
    async deleteCom (id) {
      await this.deleteComment({
        data: {
          commentId: id,
          kanbanId: this.kanbanId,
          taskListId: this.taskId,
          projectId: this.$route.params.projectId,
          userId: Cookie.get('dataId')
        }
      })
      this.getDetail()
    }
  }
}
