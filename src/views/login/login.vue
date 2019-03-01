<template>
    <div class="page-box">
        <mt-header fixed title="密码登录">
            <div slot="left" @click="back">
                <mt-button icon="back">返回</mt-button>
            </div>
        </mt-header>
        <form class="login-form">
            <div class="cell-box border-bottom bg-fff">
                <div class="cell-item-left">
                    <input class="form-input" type="text"
                        v-model="account" placeholder="账号">
                </div>
            </div>
            <div class="cell-box border-bottom bg-fff">
                <div class="cell-item-left">
                    <input class="form-input" :type="passwordType ? 'text' : 'password'"
                        v-model="password" placeholder="密码">
                </div>
                <div class="cell-item-right">
                    <mt-switch v-model="passwordType"></mt-switch>
                </div>
            </div>
            <div class="cell-box bg-fff">
                <div class="cell-item-left">
                    <input class="form-input" type="text"
                        v-model="code" placeholder="验证码">
                </div>
                <div class="cell-item-right">
                    <div class="code-box">
                        <img class="code-img" :src="codeImg">
                        <div class="code-btn-box" @click="getCodeImg">
                            <div>看不清</div>
                            <div class="blue-color">换一张</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="login-tips">温馨提示：未注册过的账号，登录时将自动注册。<br>注册过的用户可凭账号密码登录。</div>
            <div class="form-btn-box">
                <button class="form-btn" type="button" @click="login">登录</button>
            </div>
            <div style="padding: 0 15px;text-align: right;">
                <span class="change-password-btn">重置密码</span>
            </div>
        </form>
    </div>
</template>

<script>
import { Toast, Indicator, Switch } from 'mint-ui';

export default {
    data(){
        return {
            account: '',
            password: '',
            passwordType: false, // 密码是否可看
            code: '',
            codeImg: '',
            axiosCancel: []
        }
    },
    mounted(){
        document.querySelector('title').innerText = '密码登录';
        this.getCodeImg();
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
        getCodeImg(){
            var self = this,
                CancelToken = this.axios.CancelToken;
            axios.post('https://elm.cangdu.org/v1/captchas', {
                cancelToken: new CancelToken(function executor(c) {
                    self.axiosCancel.push(c);
                })
            })
            .then(response => {
                if(response.status === 200 && response.statusText === 'OK'){
                    this.codeImg = response.data.code;
                }else{
                    Toast({
                        message: '获取验证码失败，请重新获取',
                        position: 'bottom',
                        duration: 2000
                    });
                }
            })
            .catch(error => {
                if(this.axios.isCancel(error)){
                    console.log('Rquest canceled', error.message);
                }
            });
        },
        login(){
            if(!this.account){
                Toast({
                    message: '请输入账号',
                    position: 'bottom',
                    duration: 2000
                });
                return false;
            }
            if(!this.password){
                Toast({
                    message: '请输入密码',
                    position: 'bottom',
                    duration: 2000
                });
                return false;
            }
            if(!this.code){
                Toast({
                    message: '请输入验证码',
                    position: 'bottom',
                    duration: 2000
                });
                return false;
            }
            Indicator.open({
                text: '加载中...',
                spinnerType: 'fading-circle'
            });
            var self = this,
                CancelToken = this.axios.CancelToken;
            axios.post('https://elm.cangdu.org/v2/login', {
                params: {
                    username: self.account,
                    password: self.password,
                    captcha_code: self.code
                },
                cancelToken: new CancelToken(function executor(c) {
                    self.axiosCancel.push(c);
                })
            })
            .then(response => {
                Indicator.close();
                if(response.status === 200 && response.statusText === 'OK'){
                    if(response.data.status == 1){

                    }else if(response.data.status == 0){
                        if(response.data.type === 'ERROR_CAPTCHA'){
                            this.getCodeImg();
                        }
                        Toast({
                            message: response.data.message,
                            position: 'bottom',
                            duration: 2000
                        });
                    }
                }else{
                    Toast({
                        message: '登录失败，请重新登录',
                        position: 'bottom',
                        duration: 2000
                    });
                }
            })
            .catch(error => {
                if(this.axios.isCancel(error)){
                    console.log('Rquest canceled', error.message);
                }
            });
        }
    },
    computed: {
        
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

.login-form
    margin: 10px 0;

.login-form .cell-box
    padding: 0;

.login-form .cell-item-right
    padding: 0 15px;

.code-box
    display: flex;
    padding: 0 15px;

.code-img
    flex: none;
    width: 80px;
    height: 30px;
    margin-right: 15px;

.code-btn-box
    flex: auto;
    font-size: 12px;
    color: $blank;

.blue-color
    margin-top: 4px;
    color: $blue;

.login-tips
    padding: 12px 15px;
    text-align: left;
    line-height: 24px;
    font-size: 14px;
    color: #f85367;

.change-password-btn    
    display: inline-block;
    font-size: 14px;
    color: $blue;
    line-height: 20px;
</style>