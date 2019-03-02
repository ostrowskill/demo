<template>
    <div class="filter-nav">
        <drop-down/>
    </div>
</template>

<script>
//FILTER nav imports
import dropDown from './drop-down/drop-down';

export default {
    components: {
        dropDown
    }
}
</script>

<style lang="scss" scoped>
@import './filter-nav.scss';
</style>

