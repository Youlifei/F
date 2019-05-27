<!-- 秒杀  带轮播-->

<template>
   
    <div id="seckill">
        <div class="seck">
            <span class="miao">限时秒杀</span>
            <div>
                <em>仅剩</em>
                <span>00</span><i>:</i>
                <span>12</span><i>:</i>
                <span>06</span>
            </div>
        </div>
        <div class="swiper-conta">
            <div class="swiper-wrapper">
                <div class="swiper-slide swiper-sli" data-history="slide1" v-for="(item,index) in advertising">
                    <div>
                        <img :src="item.banner_m">
                        <p>{{item.description}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
     import axios from "axios"
    export default {
        data(){
            return {
                advertising:[]
            }
        },
        mounted(props){
            let url ="https://apim.restful.5lux.com.cn/ovscountry/ovscountry_list"
            axios.get(url).then(({data})=>{
                this.advertising=data.data.ovsproject_country;
            }).catch(function(error){
                console.log(error);
            });
        }
        
    }
</script>
<style>
    #seckill {
        width: 100%;
        height: 3.19rem;
        padding-bottom: 0.3rem;
        margin-bottom: 0.2rem;
        background: #fff;
    }

    #seckill .seck {
        width: 100%;
        flex-direction: column;
        height: 0.74rem;
        background: #fff;
        display: flex;
    }

    #seckill .seck .miao {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 0.32rem;
        margin-bottom: 0.2rem;
        font-size: 0.3rem;
    }

    #seckill .seck div {
        width: 100%;
        display: flex;
        height: 0.28rem;
        justify-content: center;
        background: #fff;
        font-size: 0.12rem;
    }

    #seckill .seck div span {
        width: 0.28rem;
        height: 0.28rem;
        color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.2rem;
        background: rgb(22, 22, 22);
        border-radius: 0.09rem;

    }

    #seckill .seck div em {
        font-size: 0.2rem;
        margin: 0 0.15rem;
    }

    #seckill .seck div i {
        width: 0.12rem;
        height: 0.28rem;
        color: #000;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 0.25rem;
    }

    #seckill .swiper-conta {
        width: 100%;
        height: 2.19rem;
        overflow: auto;
        margin-top: 0.2rem;
        background: #fff;
    }
    #seckill .swiper-conta .swiper-wrapper .swiper-sli{
        width:100%;
        height:2.19rem;
        display:flex;
        justify-content:center;
        align-items:center;
    }

    #seckill .swiper-conta .swiper-wrapper .swiper-sli div {
        width:5rem;
        height:2.19rem;
        background:#fff;
        padding:0.19rem;
        border:0.02rem solid #ccc;
        border-radius: 0.1rem;
        font-size:0.3rem;
        display:flex;
    }
    #seckill .swiper-conta .swiper-wrapper .swiper-sli div img{
        width:1.8rem;
        height:1.8rem;
    }
    #seckill .swiper-conta .swiper-wrapper .swiper-sli div p{
        width:2.66rem;
        height:0.68rem;
        padding:0 0.3rem;
        line-height:0.2rem;
        text-align:center;
        margin-top:0.1rem;
        font-size:0.15rem;
    }
</style>