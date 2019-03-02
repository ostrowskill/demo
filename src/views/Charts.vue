<template>
  <div class="charts-container">
    <div
      class="main-chart"
      :style="{background : 'linear-gradient(0deg, ' + third +  ',' + colorSecondary + ',' + colorPrimary +')'
    }"
    >
      <line-chart :key="getReload"/>
      
    </div>
    <div class="side-charts-wrapper">
      <ul class="small-data-list">
        <li class="small-data">
          <div class="desc">
            <p class="title">Total:</p>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <span class="data-value">{{ totalSum }}</span>
        </li>
        <li class="small-data">
          <div class="desc">
            <p class="title">Total:</p>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <span class="data-value">{{ totalSum }}</span>
        </li>
        <li class="small-data">
          <div class="desc">
            <p class="title">Total:</p>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <span class="data-value">{{ totalSum }}</span>
        </li>
        <li class="small-data">
          <div class="desc">
            <p class="title">Total:</p>
            <p class="description">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <span class="data-value">{{ totalSum }}</span>
        </li>
      </ul>
      <ul class="side-chart">
        <li class="side-chart-item doughnut-chart">
          <doughnut-chart :key="getReload"/>
        </li>
        <li class="side-chart-item title">Some Title</li>
        <li class="side-chart-item values">123</li>
        <li
          class="side-chart-item description"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque maxime laudantium natus, quis voluptas suscipit similique fugiat laboriosam aspernatur reiciendis illum praesentium non vero quam assumenda mollitia labore accusantium dignissimos!</li>
      </ul>
    </div>

    <!-- custom scrollbar -->
    <div class="scrollbar" id="style-1">
      <div class="force-overflow"></div>
    </div>
  </div>
</template>

<script>
import lineChart from "../components/charts/line-chart/line-chart-view";
import barChart from "../components/charts/bar-chart/bar-chart-view";
import doughnutChart from "../components/charts/doughnut/doughnut-chart-view";

//THEME settup
import { mapState, mapMutations } from "vuex";


export default {
  components: {
    lineChart,
    barChart,
    doughnutChart,
 
  },
  data() {
    return {
      totalSum: 23
    };
  },
  computed: {
    ...mapState([
      "themeName",
      "primary",
      "secondary",
      "third",
      "colorPrimary",
      "colorSecondary"
    ]),
    getReload() {
      this.totalSum = Array.from(
        this.getFilteredByDomain[0].dataPoints[0]
      ).reduce((partial_sum, a) => partial_sum + a);

      return this.$store.state.reloadCharts;
    },
    getFilteredByDomain() {
      return this.$store.getters.filteredByDomain;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";


.main-chart {
  position: relative;
}

.side-chart {
  background-color: #262929;
  .side-chart-item {
    text-align: center;
    color: white;
    &.doughnut-chart {
      position: relative;
      height: 150px;
      overflow: hidden;

      .doughnut-chart {
        position: absolute;
        max-width: 500px;
        height: 100%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    &.title {
      font-weight: 900;
      font-size: 1.5em;
      padding-bottom: 0.4em;
    }

    &.description {
      color: white * 0.8;
      font-size: 0.8em;
      padding: 1em 1.5em;
    }

    &.values {
      padding: 0.15em;
      font-weight: 900;
      font-size: 2.5em;
      color: #fff * 0.3;
      background-color: #262929 * 0.8;
    }
  }
}

.small-data {
  background-color: #363636;
  color: white;
  padding: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: right;

  &:nth-child(2) {
    background-color: #363636 * 1.1;
  }
  &:nth-child(3) {
    background-color: #363636 * 1.3;
  }
  &:nth-child(4) {
    background-color: #363636 * 1.5;
  }

  .title {
    display: inline-block;
    padding: 0.5em 0.5em 0.5em 2em;
    background-color: rgba($color-primary-light * 3, 0.4);
  }

  .description {
    font-size: 0.8em;
    //max-width: 200px;
    color: white * 0.7;
  }

  .data-value {
    position: relative;
    font-weight: 900;
    font-size: 4em;
    margin-left: 0.5em;
    animation: lilpop 0.5s ease-in-out forwards;
  }
}

@keyframes lilpop {
  0% {
    opacity: 0;
    transform: rotate(0) scale(1);
  }
  50% {
    opacity: 0.5;
    transform: rotate(5deg) scale(1.15);
  }
  100% {
    color: white * 0.9;
    opacity: 1;
    transform: rotate(0) scale(1);
  }
}

@media screen and (min-width: 960px) {
  .charts-container {
    //background-color: #fff;
    height: 100%;
    width: 100%;

    .main-chart {
      padding: 2em 1.5em;
    }
  }
  .side-charts-wrapper {
    display: flex;
    //background-color: #fff;
    align-items: stretch;
  }
  .small-data-list {
    display: flex;
    flex-wrap: wrap;

    flex: 1 1 50%;

    .small-data {
      flex: 1 0 50%;
    }
  }

  .side-chart {
    flex: 1 2 35%;
    padding: 2em;
  }
}
</style>



