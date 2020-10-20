import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

export default {
  name: 'add-member',
  components: {
    VueBootstrapTypeahead
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
    add () {
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
    }
  }
}
