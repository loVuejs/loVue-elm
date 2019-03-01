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
        <div class="food-type-list" id="foodTypeList">
            <mt-swipe :auto="0">
                <mt-swipe-item>
                    <template v-if="foodTypes.length">
                        <div class="food-type-slid">
                            <router-link class="food-type-item" 
                                v-for="(foodItem, index) in foodTypes" :key="foodItem.id"
                                v-if="index < 8"
                                :to="{ path: '/food', query: { geohash: addressInfo.geohash, title: foodItem.title, restaurant_category_id: getCategoryId(foodItem.link) } }" >      
                                <img class="food-type-img" v-if="foodItem.image_url" v-lazy.foodTypeList="'https://fuss10.elemecdn.com/' + foodItem.image_url">
                                <div class="food-type-title">{{ foodItem.title }}</div>
                            </router-link>
                        </div>
                    </template>
                    <template v-else>
                        <msite-types-empty></msite-types-empty>
                    </template>
                </mt-swipe-item>
                <mt-swipe-item>
                    <template v-if="foodTypes.length">
                        <div class="food-type-slid">
                            <router-link class="food-type-item" 
                                v-for="(foodItem, index) in foodTypes" :key="foodItem.id"
                                v-if="index >= 8"
                                :to="{ path: '/food', query: { geohash: addressInfo.geohash, title: foodItem.title, restaurant_category_id: getCategoryId(foodItem.link) } }" >
                                <img class="food-type-img" v-if="foodItem.image_url" v-lazy="'https://fuss10.elemecdn.com/' + foodItem.image_url">
                                <div class="food-type-title">{{ foodItem.title }}</div>
                            </router-link>
                        </div>
                    </template>
                    <template v-else>
                        <msite-types-empty></msite-types-empty>
                    </template>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <div class="list-wrapper">
            <div class="list-head">
                <div class="item">
                    <i class="iconfont icon-store"></i>
                    <span>附近商家：</span>
                </div>
            </div>
            <storeList 
                :storeList="storeList" 
                :geohash="geohash"
                :num="10"></storeList>
        </div>
        <layerMsg v-if="layerMsgFlag" :text="layerMsgText" @close="layerMsgFlag = false"></layerMsg>
        <loading v-if="loadingType"></loading>
    </div>
</template>

<script>
import layerMsg from './../../components/layerMsg.vue';
import loading from './../../components/loading.vue';
import storeList from './../../components/storeList.vue';
import msiteTypesEmpty from './../../components/skeleton/msiteTypesEmpty.vue';
import msiteListEmpty from './../../components/skeleton/msiteListEmpty.vue';

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
        layerMsg, loading, storeList, msiteTypesEmpty, msiteListEmpty
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
    img[lazy=loading] 
        width: 29px;
        height: 29px;
        padding: 8px;
        border-radius: 50%;
        overflow: hidden;
        background-color: #efefef;

.food-type-img
    margin-bottom: 6px;
    width: 45px;
    height: 45px;

.food-type-title
    text-align: center;
</style>
