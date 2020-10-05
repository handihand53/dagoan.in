import PlainHeader from '@/components/PlainHeader.vue'
import draggable from 'vuedraggable'

export default {
  name: 'main-component',
  display: 'Two Lists',
  order: 1,
  components: {
    draggable,
    PlainHeader
  },
  data () {
    return {
      projectName: '',
      projectDescription: '',
      projectCardTitle: '',
      status: 1,
      image: [],
      imageName: [],
      isAddLabel: false,
      optionsStatus: [
        { value: 1, text: 'On Going' },
        { value: 0, text: 'Finished' }
      ],
      list1: [
        {
          id: 1,
          name: 'Deploy server to localhost:8081',
          duration: 3,
          assign: {
            id: 'david',
            name: 'David Beckham',
            profilePicture: 'https://tmssl.akamaized.net/images/portrait/originals/3139-1459504284.jpg'
          },
          label: {
            name: 'Product Merketing',
            color: '#E9C01C'
          }
        },
        {
          id: 2,
          name: 'Bug fix in server UATA',
          duration: 5,
          assign: {
            id: 'david',
            name: 'David Beckham',
            profilePicture: 'https://tmssl.akamaized.net/images/portrait/originals/3139-1459504284.jpg'
          },
          label: {
            name: 'Request',
            color: 'green'
          }
        },
        {
          id: 3,
          name: 'Carousel improvement',
          duration: 1,
          assign: {
            id: 'david',
            name: 'David Beckham',
            profilePicture: 'https://tmssl.akamaized.net/images/portrait/originals/3139-1459504284.jpg'
          },
          label: {
            name: 'Tips',
            color: 'red'
          }
        }
      ],
      list2: []
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 200,
        group: 'description',
        disabled: false,
        ghostClass: 'ghost'
      }
    }
  },
  methods: {
    editCardProject () {
      console.log('edited')
    },
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
    },
    add: function () {
      this.list.push({ name: 'Juan' })
    },
    replace: function () {
      this.list = [{ name: 'Edgard' }]
    },
    clone: function (el) {
      return {
        name: el.name + ' cloned'
      }
    },
    log: function (evt) {
      window.console.log(evt)
    }
  }
}
