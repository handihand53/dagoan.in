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
  }
}
