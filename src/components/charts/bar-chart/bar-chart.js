import {
    Bar,
    mixins
} from 'vue-chartjs'

export default {
    extends: Bar,
    mixins: [mixins.reactiveProp],
    props: ['chartData'],
    data() {
        return {
            options: { //Chart.js options
                layout: {
                    // padding: {
                    //   left: 25,
                    //   right: 45,
                    //   top: 45,
                    //   bottom: 45
                    // }
                  },
                scales: {
                  xAxes: [{
                    barPercentage : .7,
                    //categoryPercentage: 0.98,
                    // tst
                    ticks: {
                      beginAtZero: true,
                      //fontColor: "#ddd",
                      fontSize: 12,
        
                    },
                    gridLines: {
                      display: false
                    }
                  }],
                  yAxes: [{
                    categoryPercentage: 1.1,
                    ticks: {
                      beginAtZero: true,
                      //fontColor: "#ddd",
                      fontSize: 12,
        
                    },
                    gridLines: {
                      display: true
                    }
                  }]
                },
                legend: {
                  display: false,
                  labels: {
                    fontColor: '#ddd',
                    padding: 30
                  }
                },
                tooltips: {
                  enabled: true,
                  backgroundColor: '#2b2d30',
                  callbacks: {
                    label: function (tooltipItems, data) {
                      return tooltipItems.yLabel + '%'
                    }
                  }
                },
                animation: {
                  duration: 1500,
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