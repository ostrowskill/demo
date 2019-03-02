<template>
    <div>
        <button  @click="switchTheme('light')" class="theme-btn light"></button>
        <button  @click="switchTheme('dark')" class="theme-btn dark"></button>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
    //computed: mapState(['themeName', 'primary', 'primaryLight', 'secondaryy']),
    methods: mapMutations(['switchTheme'])    
}
</script>

<style lang="scss" scoped>
@import '@/scss/_variables.scss';
.theme-btn {
    cursor: pointer;
    border: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 3px solid $color-primary-gold * 0.4;
    &.light {
        background-color: #ddd;
    }

    &.dark {
        background-color: #111;
    }
}
</style>


