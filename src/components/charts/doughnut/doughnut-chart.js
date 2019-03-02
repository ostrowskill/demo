import { Doughnut, mixins } from 'vue-chartjs'

export default {
  extends: Doughnut,
  
  mixins: [mixins.reactiveProp],
  props: ['chartData'],
  data() {
    return {
        options: {
          layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
          },
          legend: {
            display: true,
            labels: {
              //fontColor: 'white',
              //padding: 30,
              //borderWidth: '3px',
              usePointStyle: true
            }
          },
            responsive: true,
            maintainAspectRatio: false
        }
    }
  },
  mounted () {
    this.renderChart(this.chartdata)
  }
}