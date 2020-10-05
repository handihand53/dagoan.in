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
      console.log('project created')
    }
  }
}
