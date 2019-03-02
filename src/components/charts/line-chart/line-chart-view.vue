<template>
  <line-chart class="line-chart" :chart-data="datacollection"></line-chart>
</template>


<script>
import lineChart from "./line-chart.js";

//THEME settup
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    lineChart
  },
  data() {
    return {
      datacollection: null
    };
  },
  mounted() {
    this.fillData();
  },
  computed: {
    ...mapState(["themeName", "chartColorPrimary", "chartColorSecondary"]),
    getFilteredByDomain() {
      return this.$store.getters.filteredByDomain;
    }
  },
  methods: {
    fillData() {
      this.datacollection = {

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
            label: "first",
            //backgroundColor: "rgba(62, 226, 190, .6)",
            borderColor: this.chartColorSecondary,
            pointBackgroundColor: this.chartColorSecondary,
            borderWidth: 1,
            //pointBorderColor: "#36b99d",
            lineTension: 0,

            //data injection ---------------------------------
            data: this.getFilteredByDomain[0].dataPoints[0],
          },
          {
            label: "second",
            //backgroundColor: "rgba(35, 205, 211, .8)",
            borderColor: this.chartColorPrimary,
            pointBackgroundColor: this.chartColorPrimary,
            borderWidth: 1,
            //pointBorderColor: "#bb9735",
            lineTension: 0,

            //data injection ---------------------------------
            data: this.getFilteredByDomain[0].dataPoints[1],
          }
        ]
      };
    }
  }
};
</script>

