<template>
  <div class="home" style="overflow:auto">
    <!-- 头部 -->
    <Header></Header>
    <div id="conMain">
      <!-- 轮播 -->
      <Banner></Banner>
      <!-- 白色导航 -->
      <WhiteNav></WhiteNav>
      <!-- 四张图片 -->
      <FourImg></FourImg>
      <!-- 新人 -->
      <NewPriviLeges></NewPriviLeges>
      <!-- 会员尊享 -->
      <Members></Members>
      <!-- 慢必赔   时尚管家 -->
      <SlowOrStyle></SlowOrStyle>
      <!-- 色彩春夏 -->
      <Colour></Colour>
      <!-- 零假货 -->
      <Nofakers></Nofakers>
      <!-- 墨镜女 -->
      <WomenEye></WomenEye>
    </div>

  </div>
</template>

<script>
  import Header from "./Header/index.vue";
  import Banner from "./Banner/index.vue";
  import WhiteNav from "./WhiteNav/index.vue";
  import FourImg from "./FourImg/index.vue";
  import NewPriviLeges from './NewPriviLeges/index.vue';
  import Members from './Members/index.vue';
  import SlowOrStyle from './slowORstyle/index.vue';
  import Colour from './Colour/index.vue';
  import Nofakers from './Nofakers/index.vue';
  import WomenEye from './WomenEye/index.vue';

  export default {
    name: "first",
    components: {
      Header,
      Banner,
      WhiteNav,
      FourImg,
      NewPriviLeges,
      Members,
      SlowOrStyle,
      Colour,
      Nofakers,
      WomenEye
    },
    data() {
      return {

      }
    },

  };
</script>
<style scoped>
  /* 中间内容区 */
  #conMain {
    width: 100%;
    height: 5.1511rem;
    overflow: auto;

  }
</style>