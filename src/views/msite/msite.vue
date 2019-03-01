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
            <storeList 
                :storeList="storeList" 
                :geohash="geohash"
                :num="10"></storeList>
        </div>
        <layerMsg v-if="layerMsgFlag" :text="layerMsgText" @close="layerMsgFlag = false"></layerMsg>
        <!-- <stars :length="5" :value="stars" @click-index="(event) => { stars = event }"></stars> -->
        <loading v-if="loadingType"></loading>
    </div>
</template>

<script>
import { Swipe } from 'mint-ui';
import layerMsg from './../../components/layerMsg.vue';
import loading from './../../components/loading.vue';
import storeList from './../../components/storeList.vue';

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
            axiosCancel: [],
        }
    },
    components: {
        layerMsg, loading, storeList
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
            let self = this,
                CancelToken = axios.CancelToken;
            axios.get('https://elm.cangdu.org/v2/pois/' + self.$route.query.geohash, {
                cancelToken: new CancelToken(function executor(c) {
                    self.axiosCancel.push(c);
                }),
            })
            .then(response => {
                if(response.status === 200 && response.statusText === 'OK'){
                    this.addressInfo = response.data;
                    this.title = response.data.name;
                    this.getStoreList();
                }
            })
            .catch(error => {
                if(axios.isCancel(error)){
                    console.log('Rquest canceled', error.message);
                }
            });
        },
        getGuessCity() {
            var self = this,
                CancelToken = axios.CancelToken;
            axios.get('https://elm.cangdu.org/v1/cities', {
                params: {
                    type: 'guess'
                },
                cancelToken: new CancelToken(function executor(c) {
                    self.axiosCancel.push(c);
                }),
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
            .catch(error => {
                if(axios.isCancel(error)){
                    console.log('Rquest canceled', error.message);
                }
            });
        },
        getFoodTypes(){
            var self = this,
                CancelToken = axios.CancelToken;
            axios.get('https://elm.cangdu.org/v2/index_entry', {
                cancelToken: new CancelToken(function executor(c) {
                    self.axiosCancel.push(c);
                }),
            })
            .then(response => {
                if(response.status === 200 && response.statusText === 'OK'){
                    this.foodTypes = response.data;
                }else{
                    this.layerMsgFlag = true;
                    this.layerMsgText = '食品分类获取失败，请刷新页面重试';
                }
            })
            .catch(error => {
                if(axios.isCancel(error)){
                    console.log('Rquest canceled', error.message);
                }
            });
        },
        getStoreList(){
            let self = this,
                CancelToken = axios.CancelToken;
            axios.get('https://elm.cangdu.org/shopping/restaurants', {
                params: {
                    latitude: self.addressInfo.latitude,
                    longitude: self.addressInfo.longitude
                },
                cancelToken: new CancelToken(function executor(c) {
                    self.axiosCancel.push(c);
                }),
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
            .catch(error => {
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
    },
    destroyed(){
        this.axiosCancel.forEach((cancel) => {
            cancel();
        });
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
