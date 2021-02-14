import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
// import Cookie from 'vue-cookie'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'add-member',
  components: {
    VueBootstrapTypeahead
  },
  data () {
    return {
      queryUsername: '',
      show: false,
      detected: false
    }
  },
  computed: {
    ...mapGetters([
      'getUserEmail'
    ])
  },
  methods: {
    ...mapActions([
      'getUserEmailDetail',
      'inviteMember',
      'updateMember'
    ]),
    failGet () {
      this.detected = true
    },
    async addMember () {
      this.detected = false
      await this.inviteMember({
        data: {
          projectId: this.$route.params.projectId,
          userId: this.getUserEmail.userId
        }
      })
      await this.updateMember({
        data: {
          memberForm: {
            memberId: this.getUserEmail.userId,
            userName: this.getUserEmail.userName
          },
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
          message: 'Invitation sent',
          type: 'success',
          position: 'bottom'
        })
        this.show = false
      }, 1000)
      console.log('tekan')
    },
    async add () {
      await this.getUserEmailDetail({
        data: {
          userEmail: this.queryUsername
        },
        success: this.addMember,
        fail: this.failGet
      })
    }
  }
}
