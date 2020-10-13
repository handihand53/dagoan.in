import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['January', 'February', 'March', 'April'],
      datasets: [
        {
          backgroundColor: ['#55D8FE', '#FF8373', '#FFDA83', '#A3A0FB'],
          data: [40, 20, 12, 39]
        }
      ]
    })
  }
}
