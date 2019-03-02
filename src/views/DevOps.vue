<template>
  <div class="devops-container" :style="{backgroundColor : g_color__primary}">
    <div class="flex-wrapper">
      <div
        class="current-uptime-wrapper"
        :style="{backgroundColor: g_color__primary, color: f_color__primary}"
      >
        <ul class="current-uptime">
          <li class="item title">Current uptime</li>
          <li class="item value" :style="{backgroundColor: ch_color__third}">99.94%</li>
          <li class="item downtime">Downtime this month: 24min.</li>
        </ul>
      </div>

      <line-chart :chart-data="linechartdata" class="main-chart"/>
    </div>
    <div class="flex-wrapper">
      <div
        class="read-repo"
        :style="{color: f_color__primary, border: '1px solid ' + g_color__third}"
      >
        <i class="fas fa-book-open"></i>
        <div class="desc">Read repo</div>
      </div>

      <ul class="daily-tests">
        <li
          class="item title"
          :style="{color: f_color__primary, backgroundColor: g_color__secondary}"
        >Daily tests:</li>
        <li
          class="item test"
          :style="{color: f_color__primary, backgroundColor: g_color__secondary}"
        >Checkout test... 100% done successful</li>
        <li
          class="item test"
          :style="{color: f_color__primary, backgroundColor: g_color__secondary}"
        >Form test... 100% successful</li>
        <li
          class="item test"
          :style="{color: f_color__primary, backgroundColor: g_color__secondary}"
        >Price & listing test... 100% succesful</li>
        <li
          class="item test"
          :style="{color: f_color__primary, backgroundColor: g_color__secondary}"
        >Newsletter subscription test... failed; admin informed</li>
        <li
          class="item test"
          :style="{color: f_color__primary, backgroundColor: g_color__secondary}"
        >Forgot password test... 100% succesful</li>
        <li
          class="item test"
          :style="{color: f_color__primary, backgroundColor: g_color__secondary}"
        >New account test... 100% succesful</li>
      </ul>
    </div>
  </div>
</template>


<script>
import lineChart from "../components/charts/line-chart/line-chart.js";
//THEME settup
import { mapState, mapMutations } from "vuex";

export default {
  components: {
    lineChart
  },
  data() {
    return {
      linechartdata: null
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
      "ch_color__fifth",
      "f_color__primary",
      "f_color__secondary",
      "ch_color__primary",
      "ch_color__secondary",
      "ch_color__third"
    ]),

    filteredData() {
      return this.$store.getters.filterData[0].devOps;
    }
  },
  methods: {
    fillData() {
      this.linechartdata = {
        labels: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23
        ],
        datasets: [
          {
            label: this.filteredData.lineChart.label,
            backgroundColor: "rgba(0, 0, 0, .1)",
            borderColor: this.ch_color__third,
            //pointBorderColor: this.ch_color__primary,
            pointBackgroundColor: this.ch_color__third,
            borderWidth: 2,
            lineTension: 0,

            //data injection ---------------------------------
            data: this.filteredData.lineChart.chartPoints
          }
        ]
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.devops-container {
  padding: 0.5em;
}
.main-chart {
  position: relative;
  margin: 2em 0;
}

.current-uptime-wrapper {
  background-color: #ddd;
  //display: block;
  //width: 100%;
  margin: 2em 0;
  .item {
    padding: 1em;
    position: relative;
    &:nth-child(1) {
      animation: .3s ease-in slideIn forwards;
    }
    &:nth-child(3) {
      animation: .3s ease-in slideIn forwards;
    }
  }

  .value {
    text-align: center;
    background-color: lightseagreen;
    color: white;
    font-size: 2em;
    font-weight: 900;
    padding: 0.5em;
  }
}

.read-repo {
  margin: 2em 0;
  padding: 3em;
  text-align: center;
  border: 2px solid #ddd;
  cursor: pointer;
  i {
    font-size: 5em;
  }

  .desc {
    font-size: 1.2em;
    text-transform: uppercase;
  }
}

.daily-tests {
  margin: 2em 0;
  .item {
    opacity: 0;
    background-color: #ddd;
    padding: 1em;
    margin-bottom: 1em;
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
    &:nth-child(5) {
      animation: .3s .4s ease-in slideIn forwards;
    }
    &:nth-child(6) {
      animation: .3s .5s ease-in slideIn forwards;
    }
    &:nth-child(7) {
      animation: .3s .6s ease-in slideIn forwards;
    }
  }

  .title {
    //padding: 1em .5em;
    font-size: 1.3em;
    font-weight: 900;
  }
}

@media screen and (min-width: 960px) {
  .devops-container {
    padding: 0;
  }
  .flex-wrapper {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
    margin-bottom: 1em;
  }

  .main-chart {
    margin: 0;
    margin-right: 10px;
    width: 70%;
    flex-grow: 1;
    padding: 2em;
  }

  .current-uptime-wrapper,
  .read-repo {
    flex-grow: 1;
    margin: 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 10px;
    margin-left: 10px;
  }

  .daily-tests {
    margin: 0;
    margin-right: 10px;
    //background-color: #ddd;
    width: 30%;
    flex-grow: 1;
    flex-shrink: 5;
    .item:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
