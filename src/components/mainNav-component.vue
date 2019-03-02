<template>
  <nav class="main-nav">
    <div class="logo">some</div>
    <ul class="main-menu">
      <li>
        <router-link to="/" exact>Home</router-link>
      </li>
      <li>
        <router-link to="/user" exact>User</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  
}
</script>


<style lang="scss" scoped>
@import "../scss/_variables.scss";

.main-nav {
  background-color: $color-primary-dark;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  height: 8vh;
}

.logo {
  font-size: 1.5em;
  font-weight: 900;
}

.main-menu {
  display: flex;

  li {
    margin-left: 1em;
  }

  a {
    color: white;
    font-weight: 800;
    &.router-link-active {
      color: $color-primary-gold;
    }
  }
}
</style>
