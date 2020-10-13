import BarChart from '@/components/home/BarChart.vue'

export default {
  name: 'detailed-chart',
  components: {
    BarChart
  },
  data () {
    return {
      transProps: {
        // Transition name
        name: 'flip-list'
      },
      items: [
        { Task: 'Deploy Server ASAP', Duration: '02:35:02', Assign: { name: 'Punten1', url: 'https://cdn1-production-images-kly.akamaized.net/CkKE7ZHS3n2olhRuGNQRoKg_H_Q=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/840223/original/012309700_1427772429-rowan-atkinson-150331.jpg' }, tagColor: 'rgb(233, 192, 28)' },
        { Task: 'Fixing Bug Profile', Duration: '02:02:02', Assign: { name: 'Punten1', url: 'https://cdn1-production-images-kly.akamaized.net/CkKE7ZHS3n2olhRuGNQRoKg_H_Q=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/840223/original/012309700_1427772429-rowan-atkinson-150331.jpg' }, tagColor: '#D32323' },
        { Task: 'Create Login Page', Duration: '01:35:02', Assign: { name: 'Punten1', url: 'https://cdn1-production-images-kly.akamaized.net/CkKE7ZHS3n2olhRuGNQRoKg_H_Q=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/840223/original/012309700_1427772429-rowan-atkinson-150331.jpg' }, tagColor: 'rgb(233, 192, 28)' },
        { Task: 'Create Landing Page', Duration: '02:00:02', Assign: { name: 'Punten1', url: 'https://cdn1-production-images-kly.akamaized.net/CkKE7ZHS3n2olhRuGNQRoKg_H_Q=/640x640/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/840223/original/012309700_1427772429-rowan-atkinson-150331.jpg' }, tagColor: '#D323BD' }
      ],
      fields: [
        { key: 'Task', sortable: false },
        { key: 'Tag', sortable: true },
        { key: 'Duration', sortable: true },
        { key: 'Assign', label: 'Assign To', sortable: true }
      ]
    }
  },
  computed: {
  },
  methods: {
  }
}
