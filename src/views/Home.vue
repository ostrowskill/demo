<template>
  <div class="home-section">
    <h1>home section</h1>
    <!-- <div v-if="!this.isLoggedIn">
      <h2>not logged in</h2>
      <button type="button" @click="login" class="btn btn-primary">login</button>
    </div> -->

    <!-- <div v-if="this.isLoggedIn">
      <h2>hello {{user.name}}</h2>
      <button type="button" @click="logout" class="btn btn-primary">logout</button>
    </div> -->
  </div>
</template>

<script>

import { login, logout, isLoggedIn, getProfile } from "@/utils/auth.js";

export default {
  name: "home",
  data() {
    return {
      // isLoggedIn: isLoggedIn(),
      // user: getProfile()
      password: ''
    }
  },
  components: {},
  methods: {
    // login() {
    //   login();
    // },
    // logout() {
    //   logout();
    //   this.isLoggedIn = false;
    // }
  }
};
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
@import '../scss/_shared.scss';
.home-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 92vh;
  background-color: $color-primary-light;
}

h1,h2 {
  color: white;
}
</style>
