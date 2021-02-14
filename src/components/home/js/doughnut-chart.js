import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  props: {
    dataTable: {
      default: () => ({})
    }
  },
  data () {
    return {
      dataTab: [],
      bgColor: [],
      dataCount: [],
      color: [
        '#55D8FE', '#FF8373', '#FFDA83', '#A3A0FB', '#59ff78', '#ff59ec', '#42003b', '#2f5736', '#ff9900', '#c2b3b0', '#ffe3f6'
      ]
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    let i = 0
    this.dataTable.forEach((x) => {
      this.dataTab.push([
        x.name
      ])
      this.dataCount.push(x.taskLists.length)
      this.bgColor.push(this.color[i])
      i += 1
    })
    this.renderChart({
      labels: this.dataTab,
      datasets: [
        {
          backgroundColor: this.bgColor,
          data: this.dataCount
        }
      ]
    })
  }
}
