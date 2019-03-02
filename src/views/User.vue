<template>
  <div class="user-container" :style="{backgroundColor: g_color__primary}">
    <user-navigation/>
    <div id="splitter" class="flex-wrap">
      <div id="first">
        <side-menu/>
        <div class="pointer" @click="resetSideMenu"
        :style="{backgroundColor: g_color__third, color: g_color__primary}"
        >
          <i class="fas fa-angle-right"></i>
        </div>
      </div>

      <div id="seperator" ref="seperator"></div>

      <div id="second">
        <router-view :key="getReload"/>
      </div>
    </div>
  </div>
</template>

<script>
import userNavigation from "@/components/user-nav/user-navigation";
import sideMenu from "@/components/side-menu/side-menu";

//theme settup
import { mapState, mapMutations } from "vuex";

//hide sidenav - show only icons
let sidenavName = document.querySelectorAll(".side-nav-item .item-name");

export default {
  components: {
    userNavigation,
    sideMenu
  },
  computed: {
    ...mapState(["themeName", "g_color__primary", "g_color__third"]),
   getReload() {
      return this.$store.state.reloadCharts;
    }
  },
  methods: {
    resetSideMenu() {
      document.querySelector("#first").style.width = "450px";
      document.querySelector('.user-card .user-info').classList.remove('hide')
      document.querySelector(".pointer").classList.remove("open");
      document
        .querySelectorAll(".side-nav-item .item-name")
        .forEach(item => item.classList.remove("hide"));
    },
    dragElement(element, direction, handler) {
      const drag = { x: 0, y: 0 };
      const delta = { x: 0, y: 0 };
      handler
        ? (handler.onmousedown = dragMouseDown)
        : (element.onmousedown = dragMouseDown);

      function dragMouseDown(e) {
        drag.x = e.clientX;
        drag.y = e.clientY;
        document.onmousemove = onMouseMove;
        document.onmouseup = () => {
          document.onmousemove = document.onmouseup = null;
        };
      }
      function onMouseMove(e) {
        const currentX = e.clientX;
        const currentY = e.clientY;

        delta.x = currentX - drag.x;
        delta.y = currentY - drag.y;

        const offsetLeft = element.offsetLeft;
        const offsetTop = element.offsetTop;

        const first = document.getElementById("first");
        const second = document.getElementById("second");
        let firstWidth = first.offsetWidth;
        let secondWidth = second.offsetWidth;
        if (direction === "H") {
          // Horizontal
          element.style.left = offsetLeft + delta.x + "px";

          firstWidth += delta.x;
          secondWidth -= delta.x;
        }
        drag.x = currentX;
        drag.y = currentY;
        first.style.width = firstWidth + "px";
        second.style.width = secondWidth + "px";

        //hide sidenav - show only icons
        let sidenavName = document.querySelectorAll(
          ".side-nav-item .item-name"
        );

        //user profile card from sidemenu
        const profileCard = document.querySelector('.user-card .user-info')

        //change display depending on width
        if (offsetLeft < 180) {
          document.querySelector(".pointer").classList.add("open");
          sidenavName.forEach(item => item.classList.add("hide"));
          profileCard.classList.add('hide')
          //drag.x = 315;
          first.style.width = 70 + "px";
          second.style.width = 100 + "%";
        } else {
          document.querySelector(".pointer").classList.remove("open");
          sidenavName.forEach(item => item.classList.remove("hide"));
          profileCard.classList.remove('hide')
          //drag.x = currentX;
          first.style.width = firstWidth + "px";
        }
      }
    }
  },
  mounted() {
    this.dragElement(this.$refs.seperator, "H");
  }
};
</script>

<style lang="scss" scoped>
@import "../scss/_variables.scss";
#splitter {
  //background-color: $color-primary-light;
  height: 92vh;
}
#seperator {
  display: none;
}

#second {
  width: 100%;
  //height: auto;
}

#first {
  i {
    display: none;
  }
}

@media screen and (min-width: 960px) {
  .user-container {
    height: 100vh;
  }
  #seperator {
    display: inline-block;
    min-width: 10px;
    cursor: col-resize;
    background-color: rgba(0, 0, 0, .025);
  }
  #first {
    display: block;
    width: 450px;
    position: relative;
      i {
    display: block;
  }
    .pointer {
      display: none;
      cursor: pointer;
      height: 25px;
      width: 25px;
      border-radius: 50%;
      box-shadow: 4px 0 5px rgba(0,0,0, .3);

      position: absolute;
      top: 50%;
      right: -12px;
      transform: translateY(-50%);
      z-index: 10;
      &.open {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      
    }
  }
  #second {
    user-select: none;
    //width: 1920px;
    //overflow: hidden;
    //height: 92vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  #second::-webkit-scrollbar {
    //background-color: #111;
    width: 10px;
  }

  // #second::-webkit-scrollbar-track {
  //   background-color: $color-primary-light;
  // }

  #second::-webkit-scrollbar-thumb {
    background-color: $color-primary-light * 6;
    //border-radius: 15px;
    border: 1px solid $color-primary-light * 7;
  }
}
</style>


