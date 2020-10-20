import PlainHeader from '@/components/PlainHeader.vue'
import NavBar from '@/components/home/NavBar.vue'
import draggable from 'vuedraggable'
import DetailCard from '@/components/modal/DetailCard.vue'
import AddTask from '@/components/modal/AddTask.vue'
import EditList from '@/components/modal/EditList.vue'
import EditProject from '@/components/modal/EditProject.vue'

export default {
  name: 'main-component',
  display: 'Two Lists',
  order: 1,
  components: {
    AddTask,
    DetailCard,
    draggable,
    EditList,
    NavBar,
    PlainHeader,
    EditProject
  },
  data () {
    return {
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
