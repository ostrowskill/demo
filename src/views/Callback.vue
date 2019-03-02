<template>
    <div class="callback-container">
        <h1>callback</h1>
    </div>
</template>

<script>
import { handleAuth } from '../utils/auth.js';
export default {
    props: {},
    methods: {},
    beforeMount() {
        handleAuth((err)=> {
            if (err) {
                console.log(err)
                return;
            } else {
                this.$router.push('/user');
            }
        })
    }
}
</script>

