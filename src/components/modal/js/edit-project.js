import { mapActions } from 'vuex'
import Cookie from 'vue-cookie'

export default {
  name: 'edit-project',
  props: {
    dataKanban: {
      default: () => ({})
    }
  },
  data () {
    return {
      projectName: '',
      // this.dataKanban.projectName
      // this.dataKanban.description
      projectDescription: '',
      status: this.dataKanban.status || 'STATUS_ON_GOING',
      optionsStatus: [
        { value: 'STATUS_ON_GOING', text: 'On Going' },
        { value: 'STATUS_FINISHED', text: 'Finished' }
      ],
      show: false
    }
  },
  methods: {
    ...mapActions([
      'updateProject'
    ]),
    async editProject () {
      await this.updateProject({
        data: {
          description: this.projectDescription,
          projectId: this.$route.params.projectId,
          projectName: this.projectName,
          projectStatus: this.status,
          userId: Cookie.get('dataId')
        }
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
          message: 'Update Success',
          type: 'success',
          position: 'bottom'
        })
        this.$emit('submited')
        this.show = false
      }, 500)
    }
  },
  watch: {
    dataKanban: {
      immediate: true,
      handler: function () {
        this.projectName = this.dataKanban.projectName
        this.projectDescription = this.dataKanban.description
      }
    }
  }
}
