<template>
  <!-- 新人特权 -->
  <!-- 不能再根元素使用v-for -->
  <div class="newPriviLeges">
    <div v-for="(item,index) in newImg">
      <img :src="item.newUrl" alt>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "newpriviLeges",
  data() {
    return {
      newImg: [
        {
          newUrl:
            "http://img550.5lux.com.cn/2019/04/29/vw/155652835411_750x586.jpg"
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped>
/* 新人特权 */
#conMain .newPriviLeges {
  width: 100%;
  height: 2.928rem;
  background: yellow;
  margin-top: 0.03rem;
  margin-bottom: 0.1rem
}
#conMain .newPriviLeges img {
  width: 100%;
  height: 2.9315rem;
}
</style>
