import { mapGetters, mapActions } from 'vuex'
import MainHeader from '@/components/MainHeader.vue'
import HomeTab from '@/components/home/HomeTab.vue'

export default {
  name: 'home',
  components: {
    MainHeader,
    HomeTab
  },
  data () {
    return {
      name: 'Handi'
    }
  },
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  },
  methods: {
    ...mapActions(['getCurrentUser'])
  },
  created () {
    // axios.get(`https://swapi.dev/api/`)
    //   .then((res) => {
    //     console.log(res)
    //   })
    this.getCurrentUser({ number: 1 })
  }
}
