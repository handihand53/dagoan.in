export default {
  name: 'edit-project',
  data () {
    return {
      projectName: '',
      projectDescription: '',
      status: 1,
      optionsStatus: [
        { value: 1, text: 'On Going' },
        { value: 0, text: 'Finished' }
      ]
    }
  },
  methods: {
  }
}
