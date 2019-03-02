<template>
  <div class="side-menu" @click="closeSideMenu($event)"
  :style="{backgroundColor: g_color__primary, border: '1px solid ' + g_color__third}"
  >
    <div class="upper-nav">
      <!-- <div class="user-profile">
        <div class="user-card wrapper">
          <img :src="user.picture" alt="user picture" class="img">
          <div class="user-info">
            <p class="user-name">{{ user.nickname }}</p>
            <p class="user-location">{{ user.name }}</p>
          </div>
        </div>
      </div>-->

      <!-- profile card-->
      <div class="user-profile" :style="{backgroundColor: g_color__third}">
        <div class="user-card wrapper">
          <img src="../../assets/img/luke.jpg" alt="user picture" class="img">
          <div class="user-info">
            <p class="user-name">Łukasz Wyglądała</p>
            <p class="user-location">Strategic Lead & Co-founder</p>
          </div>
        </div>
      </div>
      <!-- end -->

      <ul class="side-nav">
        <li class="side-nav-item">
          <router-link to="/" exact class="side-nav-item-link"
          :style="{color: f_color__primary}">
            <i class="fas fa-chart-bar"></i>
            <p class="item-name">Main dashboard</p>
          </router-link>
        </li>
        <li class="side-nav-item">
          <router-link
            to="/performance"
            exact
            :style="{color: f_color__primary}"
            class="side-nav-item-link"
          >
            <i class="fas fa-chart-line"></i>
            <p class="item-name">Performance</p>
          </router-link>
        </li>
        <li class="side-nav-item">
          <router-link
            to="/devops"
            exact
            :style="{color: f_color__primary}"
            class="side-nav-item-link"
          >
            <i class="fas fa-chart-area"></i>
            <p class="item-name">DevOps</p>
          </router-link>
        </li>
        <li class="side-nav-item">
          <router-link
            to="/buisness"
            exact
            :style="{color: f_color__primary}"
            class="side-nav-item-link"
          >
            <i class="fas fa-hand-holding-usd"></i>
            <p class="item-name">Business</p>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="down-nav">
      <ul class="side-nav" >
        <li class="side-nav-item">
          <a href="#"  class="side-nav-item-link"
          :style="{color: f_color__primary}"
          >
            <i class="far fa-comment-alt" ></i>
            <p class="item-name">Messages</p>
          </a>
        </li>
        <li class="side-nav-item">
          <a href="#"  class="side-nav-item-link"
          :style="{color: f_color__primary}"
          >
            <i class="fab fa-sistrix" ></i>
            <p class="item-name">Help</p>
          </a>
        </li>
        <li class="side-nav-item">
          <router-link
            to="/settings"
            exact
            :style="{color: f_color__primary}"
            class="side-nav-item-link"
          >
            <i class="fas fa-cogs"></i>
            <p class="item-name">Settings</p>
          </router-link>
        </li>
      </ul>

      <hr :style="{border: '1px solid ' + g_color__third}">

      <ul class="bottom-nav wrapper">
        <li class="side-nav-item">
          <a href="#"  class="side-nav-item-link"
          :style="{color: f_color__primary}"
          >
            <i class="far fa-bell" ></i>
            <p class="item-name">News</p>
          </a>
        </li>
        <li class="side-nav-item">
          <a href="#"  class="side-nav-item-link"
          :style="{color: f_color__primary}"
          >
            <i class="far fa-window-maximize" ></i>
            <p class="item-name">Info</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getProfile } from "@/utils/auth.js";

//THEME settup
import { mapState, mapMutations } from "vuex";

export default {
  data() {
    return {
      user: getProfile()
    };
  },
  computed: mapState(["themeName", "f_color__primary", "g_color__primary", "g_color__third"]),
  methods: {
    closeSideMenu(e) {
      const sideNav = document.querySelector(".side-menu");
      const hamburger = document.querySelector(".hamburger");

      if (sideNav !== e.target || !sideNav.contains(e.target)) {
        sideNav.classList.toggle("open");
        hamburger.classList.toggle("active");
      } else {
        sideNav.classList.toggle("open");
        hamburger.classList.toggle("active");
      }
    }
  }
};
</script>


<style lang="scss" scoped>
@import "./side-menu.scss";
</style>

