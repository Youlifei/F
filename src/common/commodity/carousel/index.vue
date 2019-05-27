<!-- 轮播图 -->
<template>
    <div id="carousel">
            <div class="swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide red-slide" v-for="(item,index) in slideshow" data-swiper-autoplay="5000"><img :src="item.silde_original"></div>
                </div>
            </div>
                <!-- <div class="swiper-container">
            <div class="swiper-wrapper">
                <div v-for="(item,index) in slideshow" class="swiper-slide"><img :src="item.silde_original"></div>

            </div>
        </div> -->
    </div>
</template>
<script>
    // npm install swiper 下载swiper 然后引入css和js
    import Swiper from "swiper";// 如果没有加路径的话指向module
    import "swiper/dist/css/swiper.css";
    import axios from "axios";
    export default {
        data() {
            return {
                slideshow: []
            }
        },

        mounted(props) {
            let url = "https://apim.restful.5lux.com.cn/shop/slide?mtoken="
            axios.get(url).then(({ data }) => {
                this.slideshow = data.data;
            }).catch(function (error) {
                console.log(error)
            });
            var mySwiper = new Swiper('.swiper-container', {
                autoplay: {
                    delay: 1000,//1秒切换一次
                },
            });
            // var mySwiper = new Swiper('.swiper-container', {
            //     autoplay: {
            //         delay: 2000,//2秒切换一次
            //     },
            // });

        }
    }
</script>

<style>
    #carousel {
        width: 100%;
        height: 5.6rem;
        margin-top: 1.68rem;
        background: gray;
    }

    #carousel .swiper-container {
        width: 100%;
        height: 5.6rem;
    }

    #carousel .swiper-container .swiper-wrapper div img {
        width: 100%;
        height: 5.6rem;
    }
</style>






<!-- <template>
    <div id="carousel" ref="a">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">1</div>
                <div class="swiper-slide">2</div>
                <div class="swiper-slide">3</div>
            </div>
        </div>
    </div>
</template>
<script language="javascript">
     // npm install swiper 下载swiper 然后引入css和js
    import Swiper from "swiper";// 如果没有加路径的话指向module
    import "swiper/dist/css/swiper.css";
    export default {
       
        mounted() {
            var mySwiper = new Swiper('.swiper-container', {
                effect: 'cube',
                cubeEffect: {
                    slideShadows: true,
                    shadow: true,
                    shadowOffset: 100,
                    shadowScale: 0.6
                },
            })

        }

    }

</script>
<style>
    #carousel {
        width: 100%;
        height: 5.6rem;
        margin-top: 1.68rem;
        background: gray;
    }

    #carousel .swiper-container {
        width: 100%;
        height: 5.6rem;
    }
</style> -->