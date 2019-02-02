<template>
    <transition name="fade">
        <div class="layer-box">
            <div class="layer-content">
                <div class="layer-text">{{ text }}</div>
            </div>
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
            default: 1500
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
    background: rgba(0,0,0,0);
.layer-content
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
    z-index: 10;
    text-align: center;
.layer-text
    box-sizing: border-box;
    display: inline-block;
    padding: 10px 15px;
    max-width: 90%;
    font-size: 16px;
    color: #fff;
    line-height: 22px;
    border-radius: 5px;
    background: rgba(0,0,0,0.5);
.fade-enter-active, .fade-leave-active 
    transition: opacity .5s;
.fade-enter, .fade-leave-to 
    opacity: 0;
</style>