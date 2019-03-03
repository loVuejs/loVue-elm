<template>
    <div id="app">
        <router-view/>
        <!-- set progressbar -->
        <vue-progress-bar></vue-progress-bar>
    </div>
</template>

<script>
export default {
    created () {
        this.$Progress.start();
        this.$router.beforeEach((to, from, next) => {
            this.$indicator.close();
            this.$Progress.start();
            next();
        });
        this.$router.afterEach((to, from) => {
            this.$Progress.finish();
        });
    },
    mounted () {
        this.$Progress.finish();
    }
}
</script>

