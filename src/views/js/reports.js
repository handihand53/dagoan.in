import PlainHeader from '@/components/PlainHeader.vue'
import NavBar from '@/components/home/NavBar.vue'
import DetailedChart from '@/components/home/DetailedChart.vue'
import SummaryChart from '@/components/home/SummaryChart.vue'

export default {
  name: 'main-component',
  components: {
    PlainHeader,
    NavBar,
    DetailedChart,
    SummaryChart
  },
  data () {
    return {
      selected: true,
      options: [
        { value: true, text: 'Detailed' },
        { value: false, text: 'Summary' }
      ]
    }
  },
  computed: {
  },
  methods: {
  }
}
