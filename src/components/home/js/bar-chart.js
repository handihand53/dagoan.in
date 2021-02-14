import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: {
    dataTable: {
      default: () => ({})
    }
  },
  data () {
    return {
      dataTab: [],
      bgColor: [],
      dataEstimated: [],
      dataTimeLeft: [],
      color: [
        '#55D8FE', '#FF8373', '#FFDA83', '#A3A0FB', '#59ff78', '#ff59ec', '#42003b', '#2f5736', '#ff9900', '#c2b3b0', '#ffe3f6'
      ]
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    let i = 0

    this.dataTable.forEach((x) => {
      console.log(x.name)
      x.taskLists.forEach((y) => {
        this.dataTab.push([
          y.title
        ])
        this.dataEstimated.push(y.taskEstimatedTime)
        this.dataTimeLeft.push(y.taskEstimatedTime - y.taskTimeLeft)
        this.bgColor.push(this.color[i])
      })
      i += 1
    })
    this.renderChart({
      labels: this.dataTab,
      datasets: [
        {
          label: ['Estimated (h)'],
          backgroundColor: '#FF8373',
          data: this.dataEstimated
        },
        {
          label: ['Worked (h)'],
          backgroundColor: '#55D8FE',
          data: this.dataTimeLeft
        }
      ],
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              responsive: false,
              maintainAspectRatio: true
            }
          }]
        }
      }
    })
  }
}
