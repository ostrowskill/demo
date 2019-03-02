<template>
  <div class="user-dashboard" :style="{backgroundColor : g_color__primary}">
    <div class="flex-wrapper">
      <line-chart
        :chart-data="linechartdata"
        class="line-chart"
        
      />
      <bar-chart :chart-data="barchartdata" class="bar-chart"/>
    </div>
    <div class="flex-wrapper">
      <bar-chart :chart-data="barchartdata" class="bar-chart"/>
      <line-chart
        :chart-data="linechartdata"
        class="line-chart"
        
      />
    </div>
  </div>
</template>

<script>
import lineChart from "../components/charts/line-chart/line-chart.js";
import barChart from "../components/charts/bar-chart/bar-chart.js";
//THEME settup
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    lineChart,
    barChart
  },
  data() {
    return {
      linechartdata: null,
      barchartdata: null
    };
  },
  mounted() {
    this.fillData();
  },
  computed: {
    ...mapState([
      "themeName",
      "g_color__third",
      "g_color__secondary",
      "g_color__primary",
      "ch_color__primary",
      "ch_color__secondary",
      "ch_color__third",
      "ch_color__fourth",
      "ch_color__fifth",
      "f_color__primary"
    ]),
    filteredData() {
      return this.$store.getters.filterData[0].buisness;
    }
  },
  methods: {
    fillData() {
      this.linechartdata = {
        labels: [
          "Jan.",
          "Feb.",
          "Mar.",
          "Apr.",
          "May",
          "Jun.",
          "Jul.",
          "Aug.",
          "Sept.",
          "Oct.",
          "Nov.",
          "Dec."
        ],
        datasets: [
          {
            // ODERS
            // =----------------------------------------

            label: this.filteredData.lineChart.orders.label,
            borderColor: this.ch_color__fourth,
            pointBackgroundColor: this.ch_color__fourth,
            borderWidth: 1,
            lineTension: 0,
            fill: false,

            //data injection ---------------------------------
            data: this.filteredData.lineChart.orders.chartPoints
          },
          {
            // CHECKOUT
            // =----------------------------------------

            label: this.filteredData.lineChart.checkout.label,
            //backgroundColor: "rgba(35, 205, 211, .8)",
            borderColor: this.ch_color__secondary,
            pointBackgroundColor: this.ch_color__secondary,
            borderWidth: 1,
            //pointBorderColor: "#bb9735",
            lineTension: 0,
            fill: false,
            //data injection ---------------------------------
            data: this.filteredData.lineChart.checkout.chartPoints
          }
        ]
      };
      this.barchartdata = {
        labels: this.filteredData.barChart.labels,
        datasets: [
          {
            backgroundColor: [
              //bg for charts if needed
              this.ch_color__primary,
              this.ch_color__secondary,
              this.ch_color__third,
              this.ch_color__fourth,
              this.ch_color__fifth,
              this.g_color__third
            ],
            borderWidth: 0,
            data: this.filteredData.barChart.chartPoints
          }
        ]
      };
    }
  }
};
</script>
<style lang="scss" scoped>

.line-chart,
.bar-chart {
  position: relative;
}

@media screen and(min-width: 960px) {
  .user-dashboard {
    height: 92vh;
  }
  .flex-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .line-chart,
  .bar-chart {
    width: 50%;
    min-width: 400px;
    flex-grow: 1;
    padding: 2em;
  }
}
</style>



