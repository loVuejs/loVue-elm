<template>
    <div class="page-box">
        <mt-header fixed :title="cityInfo.name">
            <div slot="left" @click="back">
                <mt-button icon="back">返回</mt-button>
            </div>
            <router-link to="/all-city" slot="right">
                <mt-button>切换城市</mt-button>
            </router-link>
        </mt-header>
        <form class="search-box" method="post" v-on:submit.prevent>
            <div class="cell-box bg-fff padding-0">
                <div class="cell-item-left">
                    <input class="form-input" type="search"
                        v-model="address" 
                        @keyup.enter="getAddressAround"
                        placeholder="输入学校、商务楼、地址">
                </div>
                <div class="cell-item-right">
                    <button class="inline-btn" type="button"
                        @click="getAddressAround">搜索</button>
                </div>
            </div>
        </form>
        <div class="list-title-box">
            <div class="list-title-item"
                v-if="searchHistory.length > 0"
                :class="{ on: listIndex === 0 }"
                @click="showSearchList(0)">搜索历史</div>
            <div class="list-title-item"
                v-if="addressAround.length > 0"
                :class="{ on: listIndex === 1 }"
                @click="showSearchList(1)">搜索结果</div>
        </div>
        <div class="address-list" 
            v-if="renderList.length > 0">
            <div class="list-item"
                v-for="(item, index) in renderList" :key="index"
                @click='nextpage(index, item.geohash)'>
                <div class="item-name ellipsis">{{ item.name }}</div>
                <div class="item-address ellipsis">{{ item.address }}</div>
            </div>
        </div>
        <div class="clear-search-box"
            v-if="searchHistory.length > 0 && listIndex === 0">
            <button class="form-btn" type="button"
                @click="clearSearchHistory">清空搜索历史</button>
        </div>
    </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui';
import localforage from 'localforage';

export default {
    data(){
        return {
            renderList: [],
            cityInfo: {},
            address: '',
            addressAround: [],
            searchHistory: [],
            listIndex: 0, // 0显示搜索历史，1显示搜索结果
            axiosCancel: []
        }
    },
    mounted(){
        document.querySelector('title').innerText = '搜索地址';
        this.getCityInfo();
        this.getSearchHistory();
    },
    methods: {
        back(){
            if(document.referrer){
                this.$router.go(-1);
            }else{
                 this.$router.push({ path: '/' });
            }
        },
        getCityInfo(){
            let self = this,
                CancelToken = axios.CancelToken;
            axios.get('https://elm.cangdu.org/v1/cities/' + self.$route.params.cityId, {
                cancelToken: new CancelToken(function executor(c) {
                    self.axiosCancel.push(c);
                }),
            })
            .then(response => {
                if(response.status === 200 && response.statusText === 'OK'){
                    this.cityInfo = response.data;
                    this.$store.commit('setCityInfo', this.cityInfo);
                    localforage.setItem('loVue-elm-cityInfo', this.cityInfo).then(function (value) {
                        console.log('本地城市信息保存成功');
                    }).catch(function(err) {
                        console.log('本地城市信息保存失败');
                    });
                }else{
                    Toast({
                        message: '城市获取失败，请刷新页面',
                        position: 'bottom',
                        duration: 2000
                    });
                }
            })
            .catch(error => {
                if(axios.isCancel(error)){
                    console.log('Rquest canceled', error.message);
                }
            });
        },
        getAddressAround(){
            if(!this.address){
                Toast({
                    message: '请输入地址',
                    position: 'bottom',
                    duration: 2000
                });
                return false;
            }
            let self = this,
                CancelToken = axios.CancelToken;
            Indicator.open({
                text: '搜索中...',
                spinnerType: 'fading-circle'
            });
            axios.get('https://elm.cangdu.org/v1/pois', {
                params: {
                    city_id: self.cityInfo.id,
                    keyword: self.address
                },
                cancelToken: new CancelToken(function executor(c) {
                    self.axiosCancel.push(c);
                }),
            })
            .then(response => {
                Indicator.close();
                if(response.status === 200 && response.statusText === 'OK'){
                    this.renderList = this.addressAround = response.data;
                    this.listIndex = 1;
                }else{
                    Toast({
                        message: '搜索地址失败，请重新搜索',
                        position: 'bottom',
                        duration: 2000
                    });
                }
            })
            .catch(error => {
                if(axios.isCancel(error)){
                    console.log('Rquest canceled', error.message);
                }
            });
        },
        getSearchHistory(){
            localforage.getItem('loVue-elm-searchHistory').then(value => {
                this.renderList = this.searchHistory = value || [];
                this.listIndex = 0;
            });
        },
        nextpage(index, geohash){
            let address = this.renderList[index],
                flag = false; // 代表搜索历史中是否有
            this.searchHistory.forEach(element => {
                if(element.geohash === address.geohash){
                    flag = true;
                }
            });
            !flag && this.searchHistory.push(address);
            localforage.setItem('loVue-elm-searchHistory', this.searchHistory).then(value => {
                console.log('搜索信息保存成功');
                this.$router.push({ path: '/msite', query: { geohash } });
            });
            
        },
        showSearchList(index){
            if(index === 0){
                this.renderList = this.searchHistory;
                this.listIndex = 0;
            }else if(index === 1){
                this.renderList = this.addressAround;
                this.listIndex = 1;
            }
        },
        clearSearchHistory(){
            localforage.removeItem('loVue-elm-searchHistory').then(() => {
                this.renderList = this.searchHistory = [];
                if(this.addressAround.length){
                    this.renderList = this.addressAround;
                    this.listIndex = 1;
                }
                Toast({
                    message: '搜索历史已清空',
                    position: 'bottom',
                    duration: 2000
                });
            });
        }
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

.search-box
    margin: 10px 0;
    border-top: 1px solid $ddd;
    border-bottom: 1px solid $ddd;
    
.address-list
    margin: 10px 0;
    border-bottom: 1px solid $ddd;

.list-item
    border-top: 1px solid $ddd;
    padding: 10px 15px;
    text-align: left;
    background: #fff;

.item-name
    font-size: 16px;
    color: $blank;
    line-height: 24px;

.item-address
    margin-top: 3px;
    font-size: 14px;
    color: $999;
    line-height: 18px;

.ellipsis
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

.list-title-box
    margin: 10px 0;
    display: flex;
    background: #fff;

.list-title-item
    flex: auto;
    text-align: center;
    line-height: 46px;
    border-top: 1px solid $ddd;
    border-bottom: 1px solid $ddd;

.list-title-box .list-title-item:nth-child(1)
    border-right: 1px solid $ddd;

.list-title-box .list-title-item.on
    color: $blue;

.clear-search-box
    margin: 10px 0;
    padding: 0 10px;
</style>


