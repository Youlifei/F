
<template>
<!-- 白色导航区下面的四张图 -->
  <div class="fourImg">
    <ul>
      <li v-for="(item,index) in fourImg">
        <img :src="item.fourUrl" alt>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "fourimg",
  data() {
    return {
      // 白色导航区下面的四张图
      fourImg: [
        {
          fourUrl:
            "http://img550.5lux.com.cn/2019/04/29/fg/155652835370_368x260.jpg"
        },
        {
          fourUrl:
            "http://img550.5lux.com.cn/2019/05/10/pq/155747998644_368x260.jpg"
        },
        {
          fourUrl:
            "http://img550.5lux.com.cn/2019/05/10/ef/155747998715_368x260.jpg"
        },
        {
          fourUrl:
            "http://img550.5lux.com.cn/2019/05/10/lm/155747998939_368x260.jpg"
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped>
#conMain .fourImg {
  width: 100%;
  height: 2.748rem;
  /* background: red; */
}
#conMain .fourImg ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
#conMain .fourImg ul li img {
  width: 1.841rem;
  height: 1.3006rem;
}
</style>
