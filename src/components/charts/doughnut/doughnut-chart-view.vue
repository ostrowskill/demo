<template>
  <doughnut-chart :chart-data="datacollection" class="doughnut-chart"/>
</template>

<script>
import doughnutChart from "./doughnut-chart.js";

export default {
  components: {
    doughnutChart
  },
  data() {
    return {
      datacollection: null
    };
  },
  computed: {
    getFilteredByDomain() {
      return this.$store.getters.filteredByDomain;
    }
  },
  methods: {
    fillData() {
      this.datacollection = {
        //labels: ["errors", "succes"],
        datasets: [
          {
            data: this.getFilteredByDomain[0].doughnutPointes,
            backgroundColor: ["#515151", "#E2B53E"],
            borderWidth: 0
          }
        ]
      };
    }
  },
  mounted() {
    this.fillData();
  }
};
</script>
