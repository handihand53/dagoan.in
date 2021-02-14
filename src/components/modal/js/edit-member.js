import { mapActions } from 'vuex'

export default {
  name: 'edit-member',
  props: {
    member: String
  },
  data () {
    return {
      queryUsername: '',
      show: false
    }
  },
  computed: {
    username () {
      return this.member.userName || {}
    }
  },
  methods: {
    ...mapActions([
      'deleteMember'
    ]),
    deleteMem () {
      this.deleteMember({
        data: {
          memberId: this.member.memberId,
          projectId: this.$route.params.projectId
        },
        success: this.$emit('editted')
      })
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        loader: 'bars',
        color: '#0090FF',
        opacity: 0.1
      })
      setTimeout(() => {
        loader.hide()
        this.$toast.open({
          message: 'Delete Success',
          type: 'success',
          position: 'bottom'
        })
        this.show = false
      }, 1000)
    }
  }
}
