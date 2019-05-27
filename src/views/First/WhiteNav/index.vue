<template>
<!-- 白色导航区 -->
    <div class="whiteNav">
      <ul>
        <router-link tag="li" v-for="(item,index) in whiteTabbar" :to="item.path">
          <i class="iconfont" v-html="item.icon"></i>
          <span>{{item.title}}</span>
        </router-link>
      </ul>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "whitenav",
  data() {
    return {
      // 白色导航区
      whiteTabbar: [
        {
          icon: "&#xe650;",
          title: "上新",
          path: "/thenew"
        },
        {
          icon: "&#xe627;",
          title: "海外馆",
          path: "/sea"
        },
        {
          icon: "&#xe606;",
          title: "值得买",
          path: "/threerouter"
        },
        {
          icon: "&#xe605;",
          title: "闪购",
          path: "/fourrouter"
        },
        {
          icon: "&#xe675;",
          title: "品牌",
          path: "/fiverouter"
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped>
/* 白色导航区 */
#conMain .whiteNav {
  width: 100%;
  height: 0.7504rem;
  background: #f2f2f2;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
/* #conMain .whiteNav span {
  font-size: 12px;
  display: block;
} */
#conMain .whiteNav ul {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
#conMain .whiteNav ul li {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  color: #7e8c8d;
}
#conMain .whiteNav ul li span {
  display: block;
  text-align: center;
  font-size: 13px;
}
#conMain .whiteNav ul li i {
  text-align: center;
  font-size: 0.25rem;
  margin-bottom: -0.4rem;
  color: #666;
}
</style>
