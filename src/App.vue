<template>
  <div id="app">
    <div class="container">
      <!-- hidden nav for presentation -->
      <!-- <main-nav v-if="!checkRoute" /> -->
      <router-view/>
    </div>
  </div>
</template>

<script>
import mainNav from "@/components/mainNav-component";

export default {
  components: {
    mainNav
  },
  data() {
    return {
      isLogged: false
    }
  },
  computed: {
    checkRoute() {
      if(this.$route.path.indexOf('user') != -1) {
        return true;
      } else {
        return false;
      }
    }
  }

};
</script>


<style lang="scss">
@import "./scss/_shared.scss";
@import "./scss/_variables.scss";
</style>
