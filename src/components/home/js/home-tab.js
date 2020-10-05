import HomeContentCard from '@/components/home/HomeContentCard.vue'

export default {
  name: 'homeTab',
  components: {
    HomeContentCard
  },
  data () {
    return {
      name: 'Handi',
      onGoing: true,
      finish: false
    }
  },
  methods: {
    onGoingSection () {
      this.onGoing = true
      this.finish = false
    },
    finishSection () {
      this.finish = true
      this.onGoing = false
    }
  }
}
