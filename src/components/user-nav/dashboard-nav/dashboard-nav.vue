<template>
  <ul class="dashboard-nav flex-wrap">
    <li>
      <router-link to="/user/" exact>
        <p class="db-name" :style="{color: secondary, backgroundColor:third}" >Main dashboard</p>
      </router-link>
    </li>
    <li>
      <router-link to="/user/charts" exact>
        <p class="db-name" :style="{color: secondary, backgroundColor:third}" >Performance</p>
      </router-link>
    </li>
  </ul>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
    computed: mapState(["themeName", "primary", "secondary", "third"])
}
</script>


<style lang="scss" scoped>
@import './dashboard-nav.scss';
</style>

