<template>
    <div class="skeleton-box">
        <div class="skeleton-bac-animation"></div>
        <div class="skeleton-row" style="margin-bottom: 10px;"
            v-for="item in 2" :key="item">
            <div class="skeleton-item"
                v-for="index in 4" :key="index">
                <skeleton-circle
                    diameter="45px"
                    margin="0 auto 6px"></skeleton-circle>
                <skeleton-rect
                    width="60px"
                    height="16px"
                    margin="0 auto 0"></skeleton-rect>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ranking-list-empty',
    computed: {
        getRouteIsAgent(){
            return this.$route.name === 'agentRankingList' ? true : false;
        }
    }
}
</script>

<style lang="stylus" scoped>
@import './../../style/custom.styl'
.skeleton-box
    height: 200px;
    overflow: hidden;
.skeleton-item
    flex: 0 0 25%;
    padding: 10px 0;
</style>
