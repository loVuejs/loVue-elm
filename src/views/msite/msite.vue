<template>
    <div class="page-box">
        <mt-header fixed :title="addressInfo.name">
            <div slot="left">
                <i class="iconfont icon-search"></i>
            </div>
            <router-link to="/login" slot="right">
                <mt-button>登录 | 注册</mt-button>
            </router-link>
        </mt-header>
        <mt-swipe class="food-type-list" :auto="0">
            <mt-swipe-item>
                <div class="food-type-slid">
                    <router-link class="food-type-item" 
                        v-for="(foodItem, index) in foodTypes" :key="foodItem.id"
                        v-if="index < 8"
                        :to="{ path: '/food', query: { geohash: addressInfo.geohash, title: foodItem.title, restaurant_category_id: getCategoryId(foodItem.link) } }" >
                        <img class="food-type-img" v-if="foodItem.image_url" v-lazy="'https://fuss10.elemecdn.com/' + foodItem.image_url">
                        <div class="food-type-title">{{ foodItem.title }}</div>
                    </router-link>
                </div>
            </mt-swipe-item>
            <mt-swipe-item>
                <div class="food-type-slid">
                    <router-link class="food-type-item" 
                        v-for="(foodItem, index) in foodTypes" :key="foodItem.id"
                        v-if="index >= 8"
                        :to="{ path: '/food', query: { geohash: addressInfo.geohash, title: foodItem.title, restaurant_category_id: getCategoryId(foodItem.link) } }" >
                        <img class="food-type-img" v-if="foodItem.image_url" v-lazy="'https://fuss10.elemecdn.com/' + foodItem.image_url">
                        <div class="food-type-title">{{ foodItem.title }}</div>
                    </router-link>
                </div>
            </mt-swipe-item>
        </mt-swipe>
        <layerMsg v-if="layerMsgFlag" :text="layerMsgText" @close="layerMsgFlag = false"></layerMsg>
        <!-- <stars :length="5" :value="stars" @click-index="(event) => { stars = event }"></stars> -->
        <loading v-if="loadingType"></loading>
    </div>
</template>

<script>
import { Swipe } from 'mint-ui';
import axios from 'axios';
const CancelToken = axios.CancelToken;
import stars from './../../components/stars.vue';
import layerMsg from './../../components/layerMsg.vue';
import loading from './../../components/loading.vue';

export default {
    data(){
        return {
            title: '',
            addressInfo: {},
            foodTypes: [],
            loadingType: true,
            layerMsgFlag: false,
            layerMsgText: ''
        }
    },
    components: {
        stars, layerMsg, loading
    },
    mounted(){
        if(this.$route.query.geohash){
            this.getGeohash();
        }else{
            this.getGuessCity();
        }
        this.getFoodTypes();
    },
    watch: {
        title: function (val) {
            document.querySelector('title').innerText = val;
        }
    },
    methods: {
        getGeohash(){
            let self = this;
            axios.get('https://elm.cangdu.org/v2/pois/' + self.$route.query.geohash, {
                cancelToken: new CancelToken(function executor(c) {
                    self.$store.commit('axiosCancel', c)
                })
            })
            .then(response => {
                if(response.status === 200 && response.statusText === 'OK'){
                    this.addressInfo = response.data;
                    this.title = response.data.name;
                }
            })
            .catch(function (error) {
                console.log(error);
                if(axios.isCancel(error)){
                    console.log('Rquest canceled', error.message);
                }
            });
        },
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
                    this.addressInfo = response.data;
                    this.title = response.data.name;
                }else{
                    this.layerMsgFlag = true;
                    this.layerMsgText = '定位失败';
                }
            })
            .catch(function (error) {
                console.log(error);
                if(axios.isCancel(error)){
                    console.log('Rquest canceled', error.message);
                }
            });
        },
        getFoodTypes(){
            var self = this;
            axios.get('https://elm.cangdu.org/v2/index_entry', {
                cancelToken: new CancelToken(function executor(c) {
                    self.$store.commit('axiosCancel', c)
                })
            })
            .then(response => {
                if(response.status === 200 && response.statusText === 'OK'){
                    this.foodTypes = response.data;
                }else{
                    this.layerMsgFlag = true;
                    this.layerMsgText = '食品分类获取失败，请刷新页面重试';
                }
            })
            .catch(function (error) {
                console.log(error);
                if(axios.isCancel(error)){
                    console.log('Rquest canceled', error.message);
                }
            });
        },
    	getCategoryId(url){
            // 解码url地址，求去restaurant_category_id值
    		let urlData = decodeURIComponent(url.split('=')[1].replace('&target_name',''));
    		if (/restaurant_category_id/gi.test(urlData)) {
    			return JSON.parse(urlData).restaurant_category_id.id
    		}else{
    			return ''
    		}
    	}
    }
}
</script>

<style lang="stylus">
@import './../../style/custom.styl'

.icon-search
    padding: 5px;
    font-size: 20px;

.food-type-list
    height: 200px;
    background: #fff;

.food-type-slid
    display: flex;
    flex-wrap: wrap;

.food-type-item
    flex: 0 0 25%;
    padding: 10px 0;
    font-size: 14px;
    color: $blank;
    text-decoration: none;

.food-type-img
    margin-bottom: 6px;
    width: 45px;
    height: 45px;

.food-type-title
    text-align: center;
</style>