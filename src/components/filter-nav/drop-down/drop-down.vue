<template>
  <div class="drop-down"  @click.prevent="showDropdown = !showDropdown" 
  :style="{backgroundColor: g_color__secondary}">
        <a href="#" class="btn-drop-down">
            <span class="placeholder" ref="placeholder"
            :style='{color: f_color__primary}'
            >wybierz domene</span>
            <div class="arrow" 
            :style="{'border-color': g_color__primary + ' transparent transparent transparent'}"></div>
        </a>
        <div v-if="showDropdown">
            <ul class="drop-down-menu" :style='{backgroundColor: g_color__secondary}'>
                <li class="drop-down-item" v-for="domain in userData.domains" @click="pickValue($event)"
                :style='{color: f_color__primary}'
                >{{ domain.name }}</li>
            </ul>
        </div>
  </div>

</template>

<script>
//THEME settup
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      showDropdown: false
    };
  },
  computed: mapState(['themeName', 'userData', "g_color__third","g_color__primary", "g_color__secondary", "f_color__primary"]),
  methods: {
      pickValue(e) {
          this.$refs.placeholder.innerHTML = e.target.innerHTML
          this.$refs.placeholder.classList.add('selected');
          this.$store.state.selected = e.target.innerHTML;
          this.$store.state.reloadCharts += 1;
      }
  }
};
</script>

<style lang="scss" scoped>
@import "./drop-down.scss";
</style>


