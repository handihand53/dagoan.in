import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

export default {
  name: 'homeContentCard',
  components: {
    VueBootstrapTypeahead
  },
  data () {
    return {
      projectName: '',
      projectDescription: '',
      queryUsername: ''
    }
  },
  methods: {
    createProject () {
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
          message: 'Project Created',
          type: 'success',
          position: 'bottom'
        })
        this.$router.push('/main')
      }, 1000)
    }
  }
}
