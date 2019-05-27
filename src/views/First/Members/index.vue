<template>
  <!-- 会员尊享 -->
  <!-- 不能再根元素使用v-for -->
  <div class="memBers">
    <div v-for="(item,index) in newImg">
      <img :src="item.newUrl" alt>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "members",
  data() {
    return {
      newImg: [
        {
          newUrl:
            "http://img550.5lux.com.cn/2019/04/29/uv/155652835481_750x586.jpg"
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped>
/* 新人特权 */
#conMain .memBers {
  width: 100%;
  height: 2.928rem;
  background: yellow;
}
#conMain .memBers img {
  width: 100%;
  height: 2.9315rem;
}
</style>
