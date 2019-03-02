<template>
  <div class="business-container" :style="{backgroundColor : g_color__primary}">
    <div class="flex-wrapper">
      <ul class="info-updates">
        <li class="info"  :style="{backgroundColor: g_color__secondary, color: f_color__primary}">
          <span class="desc">Avg. checkout (for all orders)</span>
          <span class="value" :style="{backgroundColor: ch_color__fourth}">584,34 PLN NET</span>
        </li>
        <li class="info" :style="{backgroundColor: g_color__secondary, color: f_color__primary}">
          <span class="desc">Global conversion rate</span>
          <span class="value" :style="{backgroundColor: ch_color__fourth}">1,58%</span>
        </li>
        <li class="info" :style="{backgroundColor: g_color__secondary, color: f_color__primary}">
          <span class="desc">Sessions data from all websites</span>
          <span class="value" :style="{backgroundColor: ch_color__fourth}">439935</span>
        </li>
      </ul>
      <bar-chart :chart-data="barchartdata" class="bar-wrapper" :style="{backgroundColor: g_color__primary}"/>
    </div>
    <line-chart
      :chart-data="linechartdata"
      class="main-chart"
      :style="{backgroundColor : g_color__primary}"
    />
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
      "ch_color__primary", "ch_color__secondary", "ch_color__third", "ch_color__fourth", "ch_color__fifth", "f_color__primary"
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
              this.g_color__third,
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
.business-container {
  padding: 0 0.5em;
}

.bar-wrapper, .main-chart {
  position: relative;

}

.info-updates {
  flex-grow: 1;
  margin: 2em 0;
}

.main-chart {
  margin: 2em 0;
}

.info {
  background-color: #ddd;
  //padding: 1em;
  margin-bottom: 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;

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
  .desc {
    padding: 0 1em;
  }
  .value {
    display: inline-block;
    background-color: tomato;
    color: white;
    padding: 1em;
  }
}

@media screen and (min-width: 960px) {
  .flex-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .bar-wrapper {
    width: 40%;
    flex-grow: 1;
    padding: 2em;
  }
  .info-updates {
    margin: 0;
  }
  .main-chart {
    margin: 0;
    padding: 2em;
  }
}
</style>


