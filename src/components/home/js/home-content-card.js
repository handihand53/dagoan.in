import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import { mapGetters, mapActions } from 'vuex'
import Cookie from 'vue-cookie'

export default {
  name: 'homeContentCard',
  components: {
    VueBootstrapTypeahead
  },
  data () {
    return {
      displayProject: [],
      projectName: '',
      projectDescription: '',
      queryUsername: '',
      state: [
        'STATUS_ON_GOING',
        'STATUS_FINISHED'
      ]
    }
  },
  props: {
    status: {
      type: Number,
      default: 0
    }
  },
  async created () {
    await this.getListProjectId()
    await this.getProjectData()
    this.resetListProject()
  },
  computed: {
    ...mapGetters([
      'projects',
      'listProject',
      'getResponse'
    ]),
    listOfProject () {
      return this.listProject || []
    }
  },
  methods: {
    ...mapActions(['getProject', 'getListProject', 'postCreateProject', 'addMember', 'resetListProject']),
    async getListProjectId () {
      await this.getListProject({
        data: {
          userId: Cookie.get('dataId')
        }
      })
    },
    async getProjectData () {
      await this.listOfProject.member.listProjectId.forEach((id) => {
        this.getProject({
          data: id
        })
      })
    },
    setProjectDisplay () {
      this.displayProject = this.projects.filter(project => project.data.projects.status === this.state[this.status])
    },
    createProject () {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        loader: 'bars',
        color: '#0090FF',
        opacity: 0.1
      })
      this.postCreateProject({
        data: {
          description: this.projectDescription,
          memberForm: [],
          projectName: this.projectName,
          userId: Cookie.get('dataId')
        },
        success: this.successAdd,
        fail: this.failAdd(loader)
      })
    },
    successAdd () {
      this.addMember({
        data: {
          projectId: this.getResponse.data.projectId,
          userId: Cookie.get('dataId')
        },
        success: () => {
          this.$router.push(`/main/${this.getResponse.data.projectId}`)
        },
        fail: () => {}
      })
    },
    failAdd (loader) {
      setTimeout(() => {
        loader.hide()
      }, 1000)
    }
  },
  watch: {
    status: {
      immediate: true,
      handler: function () {
        this.setProjectDisplay()
      }
    },
    projects: {
      immediate: true,
      handler: function () {
        this.setProjectDisplay()
      }
    }
  }
}
