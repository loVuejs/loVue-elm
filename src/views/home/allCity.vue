<template>
    <div class="text-left border-0">
        <mt-header title="所有城市（按拼音排序）">
            <div slot="left" @click="back">
                <mt-button icon="back">返回</mt-button>
            </div>
        </mt-header>
        <mt-index-list>
            <mt-index-section v-for="(value, key) in sortGroupCity" :key="key" :index="key">
                <mt-cell v-for="item in value" :key="item.id" :title="item.name" :to="'./city/' + item.id" is-link></mt-cell>
            </mt-index-section>
        </mt-index-list>
    </div>
</template>

<script>
import { IndexList, IndexSection, Indicator } from 'mint-ui';
import axios from 'axios';
const CancelToken = axios.CancelToken;

export default {
    data(){
        return {
            groupCity: {},   // 所有城市列表
        }
    },
    mounted(){
        document.querySelector('title').innerText = '所有城市';
        // 获取所有城市
        this.getGroupCity();
    },
    components:{
        IndexList,
        IndexSection
    },
    methods: {
        back(){
            if(document.referrer){
                this.$router.go(-1);
            }else{
                 this.$router.push({ path: '/' });
            }
        },
        getGroupCity() {
            var self = this;
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            axios.get('https://elm.cangdu.org/v1/cities', {
                params: {
                    type: 'group'
                },
                cancelToken: new CancelToken(function executor(c) {
                    self.$store.commit('axiosCancel', c)
                })
            })
            .then(response => {
                Indicator.close();
                if(response.status === 200 && response.statusText === 'OK'){
                    this.groupCity = response.data;
                }
            })
            .catch(function (error) {
                console.log(error);
                if(axios.isCancel(error)){
                    console.log('Rquest canceled', error.message);
                }
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
            return sortObj;
        }
    }
}
</script>

<style lang="stylus" scoped>
.border-0 
    border: 0;
</style>