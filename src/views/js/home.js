import { mapGetters, mapActions } from 'vuex'
import MainHeader from '@/components/MainHeader.vue'
import HomeTab from '@/components/home/HomeTab.vue'
import Cookie from 'vue-cookie'

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
      'getUser'
    ])
  },
  methods: {
    ...mapActions([
      'getUserDetail'
    ]),
    getData () {
      this.getUserDetail({
        data: {
          userId: Cookie.get('dataId')
        }
      })
    }
  },
  created () {
    this.getData()
  }
}
