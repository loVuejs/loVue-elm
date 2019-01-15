<template>
    <div class="page-box">
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
        <div class="city-container margin-bottom">
            <h3>所有城市（按拼音排序）：</h3>
            <mt-index-list>
                <mt-index-section v-for="(value, key) in sortGroupCity" :key="key" :index="key">
                    <mt-cell v-for="item in value" :key="item.id" :title="item.name" :to="'./city/' + item.id" is-link></mt-cell>
                </mt-index-section>
            </mt-index-list>
        </div>
    </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { IndexList, IndexSection } from 'mint-ui';

export default {
    data(){
        return {
            guessCity: '',   // 当前城市
            guessCityid: '', // 当前城市id
            hotCity: [],     // 热门城市
            groupCity: {},   // 所有城市列表
        }
    },
    mounted(){
        // 获取当前城市
        this.getGuessCity();
        // 获取热门城市
        this.getHotCity();
        // 获取所有城市
        this.getGroupCity();
    },
    components:{
        IndexList,
        IndexSection
    },
    methods: {
        getGuessCity() {
            axios.get('https://elm.cangdu.org/v1/cities', {
                params: {
                    type: 'guess'
                }
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
            });
        },
        getHotCity() {
            axios.get('https://elm.cangdu.org/v1/cities', {
                params: {
                    type: 'hot'
                }
            })
            .then(response => {
                if(response.status === 200 && response.statusText === 'OK'){
                    console.log(response)
                    this.hotCity = response.data;
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        getGroupCity() {
            axios.get('https://elm.cangdu.org/v1/cities', {
                params: {
                    type: 'group'
                }
            })
            .then(response => {
                if(response.status === 200 && response.statusText === 'OK'){
                    console.log(response)
                    this.groupCity = response.data;
                }
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    },
    computed: {
        // 将获取的数据按照A-Z字母开头排序
        sortGroupCity(){
            let sortObj = {};
            for (let i = 65; i <= 90; i++) {
                let charCode = String.fromCharCode(i);
                if (this.groupCity[charCode]) {
                    sortObj[charCode] = this.groupCity[charCode];
                }
            }
            console.log(sortObj)
            return sortObj;
        }
    }
}
</script>

<style lang="stylus">
.subheading 
    font-size 12px
    color #999
.border-bottom
    border-bottom 1px solid #ddd
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
