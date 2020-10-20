export default {
  name: 'edit-member',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      queryUsername: '',
      show: false
    }
  },
  computed: {
  },
  methods: {
    deleteMember () {
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
