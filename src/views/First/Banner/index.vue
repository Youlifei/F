<template>
  <!-- 轮播图 -->
  <div class="swiper-container conBanner" ref="bannerImg">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="index" v-for="(item, index) in bannerImg">
        <img :src="item.fourUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>

<script type="text/ecmascript-6">
// npm install swiper下载swiper然后引入css和js
import Swiper from "swiper"; //如果没有加路径的话指向module
import "swiper/dist/css/swiper.css";
// import 'swiper/dist/js/swiper.js'
export default {
  name: "banner",
  data() {
    return {
      bannerImg: []
    };
  },
  components: {},
  //轮播图执行
  mounted() {
    var mySwiper2 = new Swiper(this.$refs.bannerImg, {
      autoplay: {
        reverseDirection: true
      },
      effect: "cube",
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      }
    });

    // var mySwiper4 = new Swiper(this.$refs.bannerImg, {
    //   autoplay: {
    //     reverseDirection: true
    //   },
    //   effect: "flip",
    //   pagination: {
    //     el: ".swiper-pagination",
    //     clickable: true
    //   }
    // });
    //https://apim.restful.5lux.com.cn/index/index_slider
    let url = "/index/index_slider";
    this.$ajax({
      url: url,
      method: "get"
    }).then(({ data }) => {
      this.bannerImg = data.data;
      console.log(this.bannerImg);
    });
  }
};
</script>

<style scoped>
/* 定位     需要更换样式时使用 */
/* #conMain .conBanner {
  width: 100%;
  height: 4.125rem;
  position: absolute;
  top: 0.6rem;
  display: flex;
} */
/* 轮播图图片大小 */
.swiper-slide img {
  width: 100%;
  height: 4.125rem;
}
</style>