<template>
    <div class="list-body" id="listBody">
        <template v-if="storeList.length">
            <router-link class="item clearfix"
                v-for="item in storeList" :key="item.id"
                :to="{path: 'shop', query:{geohash, id: item.id}}">
                <div class="fl img-box">
                    <img v-lazy.listBody="imgBaseUrl + item.image_path">
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
        </template>
        <template v-else>
            <div v-for="(item, index) in num" :key="index" class="item item-bg"></div>
        </template>
    </div>
</template>

<script>
import stars from './stars.vue';
export default {
    props: {
        storeList: {
            type: Array
        },
        geohash: {
            type: String
        },
        num: {
            type: Number
        }
    },
    data(){
        return {
            imgBaseUrl: 'https://elm.cangdu.org/img/'
        }
    },
    components: {
        stars
    },
    methods: {
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
