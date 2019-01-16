<template>
    <div class="page-box text-left">
        <mt-header fixed>
            <router-link to="/" slot="left">
                <mt-button>ele.me</mt-button>
            </router-link>
            <router-link to="/login" slot="right">
                <mt-button>登录 | 注册</mt-button>
            </router-link>
        </mt-header>
        <div class="margin-bottom">
            <mt-cell title="当前定位城市：" class="border-bottom">
            <span class="subheading">定位不准时，请在城市列表中选择</span>
        </mt-cell>
        <mt-cell :title="guessCity" :to="'./city/' + guessCityid" is-link class="border-bottom"></mt-cell>
        </div>
        <div v-if="hotCity.length > 0" class="city-container margin-bottom">
            <h3>热门城市：</h3>
            <ul class="city-box">
                <router-link tag="li" v-for="item in hotCity" :to="'/city/' + item.id" :key="item.id">
                    {{item.name}}
                </router-link>
            </ul>
        </div>
        <mt-cell title="所有城市" to="./all-city" is-link class="border-bottom"></mt-cell>
    </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui';
import axios from 'axios';
const CancelToken = axios.CancelToken;

export default {
    data(){
        return {
            guessCity: '',   // 当前城市
            guessCityid: '', // 当前城市id
            hotCity: [],     // 热门城市
        }
    },
    mounted(){
        // 获取当前城市
        this.getGuessCity();
        // 获取热门城市
        this.getHotCity();
    },
    methods: {
        getGuessCity() {
            var self = this;
            axios.get('https://elm.cangdu.org/v1/cities', {
                params: {
                    type: 'guess'
                },
                cancelToken: new CancelToken(function executor(c) {
                    self.$store.commit('axiosCancel', c)
                })
            })
            .then(response => {
                if(response.status === 200 && response.statusText === 'OK'){
                    this.guessCity = response.data.name;
                    this.guessCityid = response.data.id;
                }else{
                    Toast({
                        message: '定位失败，请在城市列表中选择',
                        position: 'bottom',
                        duration: 2000
                    });
                }
            })
            .catch(function (error) {
                Toast({
                        message: '定位失败，请在城市列表中选择',
                        position: 'bottom',
                        duration: 2000
                    });
                console.log(error);
                if(axios.isCancel(error)){
                    console.log('Rquest canceled', error.message);
                }
            });
        },
        getHotCity() {
            var self = this;
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            axios.get('https://elm.cangdu.org/v1/cities', {
                params: {
                    type: 'hot'
                },
                cancelToken: new CancelToken(function executor(c) {
                    self.$store.commit('axiosCancel', c)
                })
            })
            .then(response => {
                Indicator.close();
                if(response.status === 200 && response.statusText === 'OK'){
                    this.hotCity = response.data;
                }
            })
            .catch(function (error) {
                console.log(error);
                if(axios.isCancel(error)){
                    console.log('Rquest canceled', error.message);
                }
            });
        }
    }
}
</script>

<style lang="stylus">
.subheading 
    font-size 12px
    color #999

.border-bottom
    border-bottom 1px solid #eee

.margin-bottom
    margin-bottom 10px

.city-container
    background #fff
    border-top 1px solid #ddd
    border-bottom 1px solid #ddd

h3 
    margin 0
    padding 0 10px
    font-size 14px
    line-height 36px

.city-box 
    margin 0
    padding 0
    list-style none
    display flex
    flex-wrap wrap

.city-box li 
    box-sizing border-box
    flex 0 0 25%
    text-align center
    line-height 34px
    border-top 1px solid #eee
    border-left 1px solid #eee

.city-box li:first-child
    border-left: 0

.city-box li:nth-child(5n)
    border-left: 0

</style>
