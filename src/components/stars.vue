<template>
    <div class="stars-box">
        <div class="stars-item"
            v-for="(item, index) in length" :key="index"
            @click="clickIndex(index)">
            <i class="iconfont" :class="getClass(index)"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'stars',
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
    methods: {
        getInt(){
            return parseInt(this.value);
        },
        getIndex(){
            return Math.round(this.value * 100 - parseInt(this.value) * 100) / 10;
        },
        getClass(index){
            if(index < this.getInt()){
                return 'icon-stars-10';
            }else if(index === this.getInt()){
                return 'icon-stars-' + this.getIndex();
            }else{
                return 'icon-stars-0';
            }
        },
        clickIndex(index){
            this.$emit('click-index', index + 1);
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
