<template>
    <div class="page-box text-left">
        <mt-header fixed>
            <div @click="reload" slot="left">
                <mt-button>ele.me</mt-button>
            </div>
            <router-link to="/login" slot="right">
                <mt-button>登录 | 注册</mt-button>
            </router-link>
        </mt-header>
        <div class="section">
            <div class="cell-box border-bottom">
                <div class="cell-item-left">
                    <span class="cell-item-text">当前定位城市：</span>
                </div>
                <div class="cell-item-right">
                    <span class="cell-item-sub-text">定位不准时，请在城市列表中选择</span>
                </div>
            </div>
            <mt-cell :title="guessCity" :to="'/city/' + guessCityid" is-link class="border-bottom"></mt-cell>
        </div>
        <div v-if="hotCity.length > 0" class="city-container margin-bottom">
            <h3>热门城市</h3>
            <ul class="city-box">
                <router-link tag="li" v-for="item in hotCity" :to="'/city/' + item.id" :key="item.id">
                    {{item.name}}
                </router-link>
            </ul>
        </div>
        <mt-cell title="所有城市" to="./all-city" is-link class="border-top-bottom"></mt-cell>
        <layerMsg v-if="layerMsgFlag" 
            :text="layerMsgText"
            @close="layerMsgFlag = false"></layerMsg>
    </div>
</template>

<script>
import layerMsg from './../../components/layerMsg.vue';
export default {
    data(){
        return {
            guessCity: '',   // 当前城市
            guessCityid: '', // 当前城市id
            hotCity: [],     // 热门城市
            layerMsgText: '',
            layerMsgFlag: false,
            axiosCancel: [],
        }
    },
    mounted(){
        document.querySelector('title').innerText = '首页';
        // 获取当前城市
        this.getGuessCity();
        // 获取热门城市
        this.getHotCity();
    },
    components: {
        layerMsg
    },
    methods: {
        getGuessCity() {
            let self = this,
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
                    this.guessCity = response.data.name;
                    this.guessCityid = response.data.id;
                }else{
                    this.layerMsgText = '定位失败，请在城市列表中选择';
                    this.layerMsgFlag = true;
                }
            })
            .catch(error => {
                if(axios.isCancel(error)){
                    console.log('Rquest canceled', error.message);
                }
            });
        },
        getHotCity() {
            let self = this,
                CancelToken = axios.CancelToken;
            this.$indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            axios.get('https://elm.cangdu.org/v1/cities', {
                params: {
                    type: 'hot'
                },
                cancelToken: new CancelToken(function executor(c) {
                    self.axiosCancel.push(c);
                }),
            })
            .then(response => {
                this.$indicator.close();
                if(response.status === 200 && response.statusText === 'OK'){
                    this.hotCity = response.data;
                }
            })
            .catch(error => {
                if(axios.isCancel(error)){
                    console.log('Rquest canceled', error.message);
                }
            });
        },
        reload(){
            location.reload();
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

.city-container
    background: #fff;
    border-top: 1px solid $ddd;
    border-bottom: 1px solid $ddd;
    margin-bottom: 10px;

h3 
    margin: 0;
    padding: 0 10px;
    font-size: 16px;
    font-weight: 400;
    line-height: 46px;

.city-box 
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;

.city-box li 
    box-sizing: border-box;
    flex: 0 0 25%;
    text-align: center;
    line-height: 40px;
    border-top: 1px solid $ddd;
    border-left: 1px solid $ddd;

.city-box li:first-child
    border-left: 0;

.city-box li:nth-child(5n)
    border-left: 0;

</style>
