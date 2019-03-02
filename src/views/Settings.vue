<template>
    <div class="settings-container">
        <p :style="{color: f_color__primary}">select color:</p>
        <theme-btns />
    </div>
</template>

<script>

import themeBtns from '../components/settup-components/theme-btns/theme-btns';
import { mapState, mapMutations } from 'vuex'
export default {
    components: {
        themeBtns
    },
    computed: mapState(['themeName', "f_color__primary"]),    
}
</script>

<style lang="scss" scoped>

</style>


