<template>
  <bar-chart class="line-chart" :chart-data="datacollection"></bar-chart>
</template>
    <script>
import barChart from "./bar-chart.js";
export default {
  components: {
    barChart
  },
  data() {
    return {
      datacollection: null
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: ["Jan.", "Feb.", "Mar.", "Apr.", "May"],
        datasets: [
          {
            label: ["data one"],
            backgroundColor: [
              //bg for charts if needed
              "#1DEAE0",
              "#36B0B2",
              "#3B848C",
              "#4B7B88",
              "#466972"
            ],
            borderWidth: 0,
            borderColor: [
              // "rgba(62, 226, 190, .8)",
              // "rgba(226, 181, 62,.8)",
              // "rgba(62, 207, 226, .8)",
              // "rgba(196, 226, 62, .8)",
              // "rgba(62, 73, 226, .8)"
            ],
            data: [25, 20, 12, 27, 17]
          }
        ]
      };
    }
  }
};
</script>
