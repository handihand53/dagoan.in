import DoughnutChart from '@/components/home/DoughnutChart.vue'

export default {
  name: 'summary-chart',
  components: {
    DoughnutChart
  },
  data () {
    return {
      transProps: {
        // Transition name
        name: 'flip-list'
      },
      items: [
        { Task: 'Deploy Server ASAP', Duration: '02:35:02', Estimated: '02:35:02', tagColor: 'rgb(233, 192, 28)' },
        { Task: 'Fixing Bug Profile', Duration: '02:02:02', Estimated: '02:35:02', tagColor: '#D32323' },
        { Task: 'Create Login Page', Duration: '01:35:02', Estimated: '02:35:02', tagColor: 'rgb(233, 192, 28)' },
        { Task: 'Create Landing Page', Duration: '02:00:02', Estimated: '02:35:02', tagColor: '#D323BD' }
      ],
      fields: [
        { key: 'Task', sortable: false },
        { key: 'Tag', sortable: true },
        { key: 'Duration', sortable: true },
        { key: 'Estimated', sortable: true }
      ]
    }
  },
  computed: {
  },
  methods: {
  }
}
