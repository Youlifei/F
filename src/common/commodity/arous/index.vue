<template>
    <div id="arous">
        <div class="swiper-con">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in ImgList"> 
                    
                        <img :src="item.thumb"> 
                        <div>{{item.title}}</div>
                 
                </div>
                
            </div>
            <div class="swiper-pagination"></div>
            <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
        </div>

        <!-- 三张图 -->
        <div id="three">
            <div v-for="item in ImgList">
                <img :src="item.thumb">
                <div>{{item.title}}</div>
            </div>
        </div>
        <!-- 查看所有旗舰店 -->
        <div id="flagshipShop">
            <p>查看所有旗舰店></p>
        </div>
    </div>
</template>
<script language="javascript">
    // npm install swiper 下载swiper 然后引入css和js
    import Swiper from "swiper";// 如果没有加路径的话指向module
    import "swiper/dist/css/swiper.css";
    import axios from "axios";
    export default {
        data(){
            return{
                ImgList:[
                //     {
                //         url:"http://img550.5lux.com.cn/2019/05/21/ef/155842553798_750x560.jpg",
                //         title:"Dior迪奥旗舰店"
                //     },
                //     {
                //         url:"http://img550.5lux.com.cn/2019/05/22/hi/155849745275_750x560.jpg",
                //         title:"迪奥旗舰店"
                //     },
                //     {
                //         url:"http://img550.5lux.com.cn/2019/05/21/ef/155842553798_750x560.jpg",
                //         title:"Dior舰店"
                //     }
                // ],
                // threeList:[
                //     {
                //         url:"http://img550.5lux.com.cn/2019/05/22/hi/155849745275_750x560.jpg",
                //         title:"Dior成都仁恒地广场店"
                //     },
                //     {
                //         url:"http://img550.5lux.com.cn/2019/05/21/ef/155842553798_750x560.jpg",
                //         title:"上海国金中心店"
                //     },
                //     {
                //         url:"http://img550.5lux.com.cn/2019/05/22/hi/155849745275_750x560.jpg",
                //         title:"上海国金中心店"
                //     }
                ]
            }
        },
        mounted() {
           let url="https://apim.restful.5lux.com.cn/shop/get_flagship_recommend"
           axios.get(url).then(({data})=>{
               this.ImgList=data.data;
               console.log(data.data)
           }).catch(function(error){
                console.log(error);
           })
        }
    }

</script>
<style>
    #arous {
        width: 100%;
        height: 7.56rem;
        background: #fff;
       border-bottom:0.02rem solid #ccc;
    }

    #arous .swiper-con {
        width: 100%;
        overflow:hidden;
        height: 4.56rem;
        font-size:0.3rem;
        position:relative;
    }
    #arous .swiper-con img{
        width: 100%;
        height: 4.56rem;
    }
    #arous .swiper-con .swiper-slide div{
        width:100%;
        overflow:auto;
        height:0.74rem;
        position:absolute;
        display:flex;
        justify-content:center;
        align-items:center;
        bottom:0.6rem;
        font-size:0.5rem;
        color:#666;
    }
    .swiper-con .swiper-pagination{
        position:absolute;
        bottom:0;
        width:7rem;
        height:0.5rem;
    }
   #three{
       width:100%;
       height:2.42rem;
       background:#fff;

   }
   #three div{
       float:left;
       width:2.40rem;
       height:2.40rem;
       margin-right:0.10rem;
       position:relative;
   }
   #three div img{
       
       width:2.40rem;
       height:2.40rem;
   }
   #three div div{
       display:flex;
       justify-content:center;
       align-items:center;
       color:#fff;
       font-size:0.26rem;
       width:2.20rem;
       height:0.8rem;
       position:absolute;
       bottom:0;
   }
   #flagshipShop{
       display:flex;
       justify-content:center;
       align-items:center;
       width:100%;
       height:0.48rem;
       margin-bottom:0.2rem;
   }
   #flagshipShop p{
       display:flex;
       justify-content:center;
       align-items:center;
       width:2.7rem;
       height:0.48rem;
       background:#000;
       border-radius: 0.15rem;
       font-size:0.28rem;
       color:#fff;
   }
</style>