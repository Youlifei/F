<template>
  <!-- 色彩春夏 -->
  <!-- 不能再根元素使用v-for -->
  <div class="coLour">
    <div v-for="(item,index) in newImg">
      <img :src="item.newUrl" alt>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "colour",
  data() {
    return {
      newImg: [
        {
          newUrl:
            "http://img550.5lux.com.cn/2019/04/18/pq/155557437511_750x586.jpg"
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped>
/* 新人特权 */
#conMain .coLour {
  width: 100%;
  height: 2.928rem;
  margin-bottom: 10px;
}
#conMain .coLour img {
  width: 100%;
  height: 2.9315rem;
}
</style>
