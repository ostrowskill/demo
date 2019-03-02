import {
  Line,
  mixins
} from 'vue-chartjs'


export default {
  extends: Line,
  mixins: [mixins.reactiveProp],
  props: ['chartData'],
  data() {
    return {
      options: { //Chart.js options
        layout: {
            // padding: {
            //     left: 25,
            //     right: 45,
            //     top: 45,
            //     bottom: 45
            // }
          },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              //fontColor: "#ddd",
              fontSize: 12,

            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            ticks: {
              beginAtZero: true,
              //fontColor: "#ddd",
              fontSize: 12,

            },
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true,
          labels: {
            //fontColor: '#111',
            //padding: 15,

            usePointStyle: true
          }
        },
        tooltips: {
          enabled: true,
          backgroundColor: '#2b2d30',
          callbacks: {
            label: function (tooltipItems, data) {
              return tooltipItems.yLabel + ' pkt.'
            }
          }
        },
        animation: {
          duration: 3000,
          easing: 'easeOutQuart'
        },
        
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options)
  }

}
