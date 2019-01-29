<template>
    <transition name="fade">
        <div class="layer-box">
            <div class="layer-content">{{ text }}</div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        time: {
            type: Number,
            default: 2000
        }
    },
    data(){
        return {
            timeout: ''
        }
    },
    mounted(){
        this.timeout = setTimeout(() => {
            this.$emit('close');
        }, this.time);
    },
    beforeDestroy(){
        this.timeout && clearTimeout(this.timeout);
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
    z-index: 1000;
    background: rgba(0,0,0,0.5);

.layer-content
    padding: 10px 15px;
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: #fff;
    border-radius: 5px;
    transform: translate3d(-50%,-50%,0);

.fade-enter-active, .fade-leave-active 
    transition: opacity .5s;
.fade-enter, .fade-leave-to 
    opacity: 0;
</style>
