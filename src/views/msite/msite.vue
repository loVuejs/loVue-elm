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
        <div class="food-type-list">
            <mt-swipe v-if="foodTypes.length" :auto="0">
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
            <img v-else class="full" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCA0OTAiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2NDg5SDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9IjEiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz48ZmVDb2xvck1hdHJpeCBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiB2YWx1ZXM9IjAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDEgMCIvPjwvZmlsdGVyPjwvZGVmcz48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnPjx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPjx1c2UgZmlsbD0iI0ZGRiIgeGxpbms6aHJlZj0iI2IiLz48L2c+PGcgZmlsbD0iI0Y2RjZGNiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzYgMzYpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0NiAzNikiPjxwYXRoIGQ9Ik05IDEzOWgxMDB2MzRIOXoiLz48ZWxsaXBzZSBjeD0iNTkiIGN5PSI1OSIgcng9IjU5IiByeT0iNTkiLz48L2c+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjE2IDM2KSI+PHBhdGggZD0iTTkgMTM5aDEwMHYzNEg5eiIvPjxlbGxpcHNlIGN4PSI1OSIgY3k9IjU5IiByeD0iNTkiIHJ5PSI1OSIvPjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg4ODYgMzYpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjwvZz48ZyBmaWxsPSIjRjZGNkY2Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3NiAyNTIpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0NiAyNTIpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYxNiAyNTIpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDg4NiAyNTIpIj48cGF0aCBkPSJNOSAxMzloMTAwdjM0SDl6Ii8+PGVsbGlwc2UgY3g9IjU5IiBjeT0iNTkiIHJ4PSI1OSIgcnk9IjU5Ii8+PC9nPjwvZz48L2c+PC9zdmc+">
        </div>
        <div class="list-wrapper">
            <div class="list-head">
                <div class="item">
                    <i class="iconfont icon-store"></i>
                    <span>附近商家</span>
                </div>
            </div>
            <div class="list-body">
                <div v-if="storeList.length">
                    <router-link class="item clearfix"
                        v-for="item in storeList" :key="item.id"
                        :to="{path: 'shop', query:{geohash, id: item.id}}">
                        <div class="fl img-box">
                            <img v-lazy="imgBaseUrl + item.image_path">
                        </div>
                        <div class="info-box">
                            <div class="info-first-item">
                                <div class="head-icon">品牌</div>
                                <h4 class="head-title ellipsis">{{ item.name }}</h4>
                                <ul class="head-right">
                                    <li class="head-right-item"
                                         v-for="item in item.supports" :key="item.id">{{ item.icon_name }}</li>
                                </ul>
                            </div>
                            <div class="info-second-item clearfix">
                                <div class="fl" style="margin-top: 2px;">
                                    <stars :length="5" :value="item.rating" :size="12"></stars>
                                    <span class="sales-volume">月售{{ item.recent_order_num }}单</span>
                                </div>
                                <div class="fr">
                                    <div class="hummingbird" v-if="item.delivery_mode">{{ item.delivery_mode.text }}</div>
                                    <div class="on-time" v-if="zhunshi(item.supports)">准时达</div>
                                </div>
                            </div>
                            <div class="info-three-item clearfix">
                                <div class="fl">¥{{ item.float_minimum_order_amount }}起送<span class="segmentation">/</span>{{ item.piecewise_agent_fee.tips }}</div>
                                <div class="fr">
                                    <span v-if="Number(item.distance)">{{ item.distance > 1000 ? (item.distance/1000).toFixed(2) + 'km' : item.distance + 'm'}}</span>
							        <span v-else>{{ item.distance }}</span>
                                    <span class="segmentation">/</span>
                                    <span class="blue">{{ item.order_lead_time }}</span>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
                <div v-else>
                    <div v-for="(item, index) in 10" :key="index" class="item item-bg"></div>
                </div>
            </div>
        </div>
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
            layerMsgText: '',
            storeList: [],
            geohash: '',
            imgBaseUrl: 'https://elm.cangdu.org/img/'
        }
    },
    components: {
        stars, layerMsg, loading
    },
    mounted(){
        if(this.$route.query.geohash){
            this.geohash = this.$route.query.geohash;
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
                    this.getStoreList();
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
                    this.geohash = response.data.latitude + ',' + longitude;
                    this.getStoreList();
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
        getStoreList(){
            let self = this;
            axios.get('https://elm.cangdu.org/shopping/restaurants', {
                params: {
                    latitude: self.addressInfo.latitude,
                    longitude: self.addressInfo.longitude
                },
                cancelToken: new CancelToken(function executor(c) {
                    self.$store.commit('axiosCancel', c)
                })
            })
            .then(response => {
                if(response.status === 200 && response.statusText === 'OK'){
                    this.loadingType = false;
                    this.storeList = response.data;
                }else{
                    this.loadingType = false;
                    this.layerMsgFlag = true;
                    this.layerMsgText = '加载失败，请刷新页面';
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
        },
        zhunshi(supports){
			let zhunStatus;
			if ((supports instanceof Array) && supports.length) {
 				supports.forEach(item => {
 					if (item.icon_name === '准') {
 						zhunStatus = true;
 					}
 				})
			}else{
				zhunStatus = false;
			}
			return zhunStatus
		},
    }
}
</script>

<style lang="stylus" scoped>
@import './../../style/custom.styl'

.icon-search
    padding: 5px;
    font-size: 20px;

.food-type-list
    margin-bottom: 10px;
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
