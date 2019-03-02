<template>
  <div class="performance-container" :style="{backgroundColor : g_color__primary}">
    <line-chart
      :chart-data="linechartdata"
      class="main-chart"
    />
    <div class="flex-wrapper">
      <doughnut-chart :chart-data="doughnutdata" class="doughnut-wrapper"/>

      <ul class="info-updates">
        <li
          class="info"
          :style="{backgroundColor: g_color__secondary, color: f_color__primary }"
        >Increase Facebook budget by 12% to get additional income</li>
        <li
          class="info"
          :style="{backgroundColor: g_color__secondary, color: f_color__primary }"
        >Recent Google Ads campaign is performing 23% worse than 2019 avarege</li>
        <li
          class="info"
          :style="{backgroundColor: g_color__secondary, color: f_color__primary }"
        >20% of all campaigns doesn't get any conversions. See full list.</li>
        <li
          class="info"
          :style="{backgroundColor: g_color__secondary, color: f_color__primary }"
        >Read more</li>
      </ul>
    </div>
  </div>
</template>
<script>
import lineChart from "../components/charts/line-chart/line-chart.js";
import doughnutChart from "../components/charts/doughnut/doughnut-chart.js";

//THEME settup
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    lineChart,
    doughnutChart
  },
  data() {
    return {
      linechartdata: null,
      doughnutdata: null
    };
  },
  mounted() {
    this.fillData();
  },
  computed: {
    ...mapState([
      "themeName",
      "ch_color__primary",
      "ch_color__secondary",
      "ch_color__third",
      "ch_color__fourth",
      "ch_color__fifth",
      "g_color__primary",
      "g_color__secondary",
      "g_color__third",
      "f_color__primary",
      "f_color__secondary"
    ]),

    filteredData() {
      return this.$store.getters.filterData;
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
            // GOOGLE DATA
            // -----------------------------------------

            label: this.filteredData[0].performanceData.lineChart.googleAds
              .label,
            //backgroundColor: "rgba(62, 226, 190, .6)",
            borderColor: this.ch_color__primary,
            pointBackgroundColor: this.ch_color__primary,
            borderWidth: 1,
            //pointBorderColor: "#36b99d",
            lineTension: 0,
            fill: false,
            //data injection ---------------------------------
            data: this.filteredData[0].performanceData.lineChart.googleAds
              .chartPoints
          },
          {
            // FACEBOOK DATA
            // -----------------------------------------

            label: this.filteredData[0].performanceData.lineChart.facebookAds
              .label,
            //backgroundColor: "rgba(35, 205, 211, .8)",
            borderColor: this.ch_color__secondary,
            pointBackgroundColor: this.ch_color__secondary,
            borderWidth: 1,
            //pointBorderColor: "#bb9735",
            lineTension: 0,
            fill: false,
            //data injection ---------------------------------
            data: this.filteredData[0].performanceData.lineChart.facebookAds
              .chartPoints
          },
          {
            // ORGANIC DATA
            // -----------------------------------------

            label: this.filteredData[0].performanceData.lineChart.organic.label,
            //backgroundColor: "rgba(35, 205, 211, .8)",
            borderColor: this.ch_color__third,
            pointBackgroundColor: this.ch_color__third,
            borderWidth: 1,
            //pointBorderColor: "#bb9735",
            lineTension: 0,
            fill: false,
            //data injection ---------------------------------
            data: this.filteredData[0].performanceData.lineChart.organic
              .chartPoints
          },
          {
            // Homebook DATA
            // -----------------------------------------

            label: this.filteredData[0].performanceData.lineChart.homebook
              .label,
            //backgroundColor: "rgba(35, 205, 211, .8)",
            borderColor: this.ch_color__fourth,
            pointBackgroundColor: this.ch_color__fourth,
            borderWidth: 1,
            //pointBorderColor: "#bb9735",
            lineTension: 0,
            fill: false,
            //data injection ---------------------------------
            data: this.filteredData[0].performanceData.lineChart.homebook
              .chartPoints
          },
          {
            // Newsletter DATA
            // -----------------------------------------

            label: this.filteredData[0].performanceData.lineChart.newsletter
              .label,
            //backgroundColor: "rgba(35, 205, 211, .8)",
            borderColor: this.ch_color__fifth,
            pointBackgroundColor: this.ch_color__fifth,
            borderWidth: 1,
            //pointBorderColor: "#bb9735",
            lineTension: 0,
            fill: false,
            //data injection ---------------------------------
            data: this.filteredData[0].performanceData.lineChart.newsletter
              .chartPoints
          }
        ]
      };
      this.doughnutdata = {
        labels: this.filteredData[0].performanceData.doughnutChart.labels,
        datasets: [
          {
            backgroundColor: [
              this.ch_color__primary,
              this.ch_color__secondary,
              this.ch_color__third,
              this.ch_color__fourth,
              this.ch_color__fifth
            ],
            borderWidth: 0,

            //data
            data: this.filteredData[0].performanceData.doughnutChart.chartPoints
          }
        ]
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.performance-container {
  padding: 0.5em;
}
.main-chart {
  position: relative;
}

.info {
  cursor: pointer;
  padding: 1em;
  margin-bottom: 1em;
  text-align: center;
  opacity: 0;
    position: relative;
    &:nth-child(1) {
      animation: .3s ease-in slideIn forwards;
    }
    &:nth-child(2) {
      animation: .3s .1s ease-in slideIn forwards;
    }
    &:nth-child(3) {
      animation: .3s .2s ease-in slideIn forwards;
    }
    &:nth-child(4) {
      animation: .3s .3s ease-in slideIn forwards;
    }
}


.main-chart {
  margin-top: 3em;
}

.doughnut-wrapper {
  position: relative;
  height: 200px;
  margin: 5em 0;
}



@media screen and (min-width: 960px) {
  .performance-container {
    padding: 0;
  }

  .main-chart {
    padding: 2em;
    margin-top: 0;
  }
  .flex-wrapper {
    display: flex;
    align-items: center;

    flex-wrap: wrap;

    //margin: 5em 0;
  }

  .info {
    text-align: left;
  }

  .info-updates {
    flex-grow: 1;
  }

  .doughnut-wrapper {
    width: 60%;
    height: 250px;
    flex-grow: 1;
    //padding: 2em;
    margin: 3em 0;
  }
}
</style>
