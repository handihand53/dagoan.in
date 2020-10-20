export default {
  name: 'add-task',
  data () {
    return {
      comment: '',
      image: [],
      imageName: [],
      isAddLabel: false
    }
  },
  methods: {
    onFileChange (e) {
      if (
        e.target.files[0].type === 'image/png' ||
        e.target.files[0].type === 'image/jpeg' ||
        e.target.files[0].type === 'image/jpg'
      ) {
        this.imageName.push(e.target.files[0].name)
        this.image.push(e.target.files[0])
      }
    },
    remove (idx) {
      this.image.splice(idx, 1)
      this.imageName.splice(idx, 1)
    }
  }
}
