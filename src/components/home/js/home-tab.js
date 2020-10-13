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
      this.loading()
    },
    finishSection () {
      this.finish = true
      this.onGoing = false
      this.loading()
    },
    loading () {
      let loader = this.$loading.show({
        container: this.fullPage ? null : this.$refs.formContainer,
        canCancel: false,
        loader: 'bars',
        color: '#0090FF'
      })
      setTimeout(() => {
        loader.hide()
      }, 1000)
    }
  }
}
