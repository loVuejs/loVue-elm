<template>
    <transition name="fade">
        <div class="layer-box">
            <div class="layer-wrapper">
                <div class="layer-img" :style="{ backgroundPositionY: -( positionY % 7) * 58 + 'px' }"></div>
                <svg class="layer-ellipse" xmlns="http://www.w3.org/2000/svg" version="1.1">
                    <ellipse cx="26" cy="10" rx="26" ry="10" style="fill: #ddd; stroke: none;"></ellipse>
                </svg>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'loading',
    data(){
        return{
            positionY: 0,
            time: null,
        }
    },
    mounted(){
        this.time = setInterval(() => {
            this.positionY ++;
        }, 600);
    },
    beforeDestroy(){
        clearInterval(this.time);
    }
}
</script>
<style lang="stylus" scoped>
@import './../style/custom.styl'

.layer-box
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
.layer-wrapper
    width: 58px;
    height: 58px;
.layer-img
    width: 100%;
    height: 100%;
    background: url('./../assets/icon_loading.png') no-repeat 0 0;
    background-size: 58px auto;
    transform: translateY(0px);
    animation: load 0.6s infinite ease-in-out;
    position: relative;
    z-index: 11;
@keyframes load
    0%
        transform: translateY(0px);
    50%
        transform: translateY(-50px);
    100%
        transform: translateY(0px);
.layer-ellipse
    width: 55px; 
    height: 20px;
    animation: ellipse 0.6s infinite ease-in-out;
@keyframes ellipse
    0%
        transform: scale(1);
    50%
        transform: scale(0.3);
    100%
        transform: scale(1);
.fade-enter-active, .fade-leave-active 
    transition: opacity .5s;
.fade-enter, .fade-leave-to 
    opacity: 0;
</style>
