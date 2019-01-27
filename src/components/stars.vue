<template>
    <div class="stars-box">
        <div class="stars-item"
            v-for="(item, index) in length" :key="index">
            <i class="iconfont" :class="{ 'icon-stars-10': index < getInt, ['icon-stars-' + getIndex]: index === getInt, 'icon-stars-0': index > getInt }"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        length: {
            type: Number,
            default: 5
        },
        value: {
            type: Number,
            default: 0
        }
    },
    computed: {
        getInt(){
            return parseInt(this.value);
        },
        getIndex(){
            return (this.value * 100 - parseInt(this.value) * 100) / 10;
        }
    }
}
</script>
<style lang="stylus" scoped>
@import './../style/custom.styl'
.stars-box
    display: inline-block;
    font-size: 0;

.stars-item
    margin: 0 2px;
    display: inline-block;
    font-size: 14px;

.stars-item .iconfont
    color: #ff9a0d;
</style>
