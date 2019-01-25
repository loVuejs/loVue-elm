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
        <form class="search-box" method="post">
            <div class="cell-box bg-fff padding-0">
                <div class="cell-item-left">
                    <input class="form-input" type="search"
                        v-model="address" placeholder="输入学校、商务楼、地址">
                </div>
                <div class="cell-item-right">
                    <button class="inline-btn" type="button"
                        @click="getAddressAround">搜索</button>
                </div>
            </div>
        </form>
        <div class="address-list" 
            v-if="addressAround.length > 0">
            <div class="list-item"
                v-for="(item, index) in addressAround" :key="index">
                <div class="item-name ellipsis">{{ item.name }}</div>
                <div class="item-address ellipsis">{{ item.address }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { Toast, Indicator } from 'mint-ui';
import localforage from 'localforage';
import axios from 'axios';
const CancelToken = axios.CancelToken;

export default {
    data(){
        return {
            cityInfo: {},
            address: '',
            addressAround: [],
        }
    },
    mounted(){
        document.querySelector('title').innerText = '搜索地址';
        this.getCityInfo();
    },
    components:{
        
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
            var self = this;
            axios.get('https://elm.cangdu.org/v1/cities/' + self.$route.params.cityId, {
                cancelToken: new CancelToken(function executor(c) {
                    self.$store.commit('axiosCancel', c)
                })
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
            .catch(function (error) {
                console.log(error);
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
            var self = this;
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
                    self.$store.commit('axiosCancel', c)
                })
            })
            .then(response => {
                Indicator.close();
                if(response.status === 200 && response.statusText === 'OK'){
                    this.addressAround = response.data;
                }else{
                    Toast({
                        message: '搜索地址失败，请重新搜索',
                        position: 'bottom',
                        duration: 2000
                    });
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

<style lang="stylus" scoped>
@import './../../style/custom.styl'

.search-box
    margin: 10px 0;
    border-top: 1px solid $ddd;
    border-bottom: 1px solid $ddd;
    
.address-list
    margin-bottom: 10px;
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
</style>


