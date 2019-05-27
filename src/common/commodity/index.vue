<template>
    <div id="commodity">
        <Carousel></Carousel>
        <Tab></Tab>
        <Seckill></Seckill>
        <Arous></Arous>
        <Mybuy></Mybuy>
        <div id="duoyu"></div>

    </div>
</template>

<script>
    
import Carousel from '@/common/commodity/carousel'
import Tab from '@/common/commodity/tab'
import Seckill from '@/common/commodity/seckill'
import Arous from "@/common/commodity/arous"
import Mybuy from "@/common/commodity/mybuy"
    export default{
        name:"commodity",
        components:{
            Carousel,
            Tab,
            Seckill,
            Arous,
            Mybuy
        }
    }
</script>
<style>
    #commodity{
        height:13rem;
        width:100%;
        overflow:auto;
        background:#ccc;
        font-size:6rem;
    }
    #duoyu{
      width:100%;
      height:0.56rem;
    }
</style>



<!-- <template>
        <div class="home" style="overflow:auto">
          <Header></Header>
          <div id="conMain">
            <Banner></Banner>
            <WhiteNav></WhiteNav>
            <FourImg></FourImg> -->
            <!-- 新人特权 -->
            <!-- <div class="newPriviLeges"></div>
          </div>
        </div>
      </template>
      
      
      <script>!
      import Header from "./Header/index.vue";
      import Banner from "./Banner/index.vue";
      import WhiteNav from "./WhiteNav/index.vue";
      import FourImg from "./FourImg/index.vue";!
      export default {
        name: "first",
        components: {
          Header,
          Banner,
          WhiteNav,
          FourImg
        },
        data() {
          return {};
        }
      };
      </script>
      <style scoped>
      /* 中间内容区 */
      #conMain {
        width: 100%;
        height: 5.1511rem;
        overflow: auto;
      } 
      
      
      /* 新人特权 */
      #conMain .newPriviLeges {
        width: 100%;
        height: 2.928rem;
        background: yellow;
        margin-top: 0.03rem;
      }
      </style> -->