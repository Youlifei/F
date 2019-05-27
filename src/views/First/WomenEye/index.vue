<template>
  <div class="Women">
    <div class="WomenImg" v-for="(item,index) in Women">
      <img :src="item.url" alt>
      <div class="WomenImg_bottom">
        <h2>{{item.ill}}</h2>
        <p>{{item.sum}}</p>
      </div>
    </div>
    <div class="necklace">
      <ul>
        <li v-for="(item,index) in neck">
          <img :src="item.url" alt>
          <p class="p1">Swarovsk{{item.s}}</p>
          <p class="p2">{{item.price}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "women",
  data() {
    return {
      Women: [
        {
          url:
            "http://img550.5lux.com.cn/2019/05/06/ab/155710926122_750x586.jpg",
          ill: " 学不会“夏日墨镜图鉴”，你就要被时髦开除啦！ ",
          sum:
            "小伙伴们，今天是立夏了，立夏也就意味着告别了春天，迎来了花裙短袖的夏季！内心无比激动的同时不得不注意紫外线的猛烈进攻，如此热的天气最重要的事情莫不过于是防晒了，但对时髦精来说，扮潮也是必备的，这时候能"
        },
        {
          url:
            "http://img550.5lux.com.cn/2019/05/06/kl/155710712648_750x586.jpg",
          ill: "感恩母亲节，温情献礼",
          sum:
            "五月的第二个星期日，是您的节日。我没有能说出口的甜言蜜语，但我想真诚的说一句：“妈妈，节日快乐。”"
        }
      ],
      neck: [
        {
          url:
            "http://img550.5lux.com.cn/2018/09/27/kl/153801550450_800x800_350x350.jpg",
          s: "施华洛世奇",
          price: "￥687"
        },
        {
          url:
            "http://img550.5lux.com.cn/2018/09/27/kl/153801550450_800x800_350x350.jpg",
          s: "施华洛世奇",
          price: "￥687"
        },
        {
          url:
            "http://img550.5lux.com.cn/2018/09/27/kl/153801550450_800x800_350x350.jpg",
          s: "施华洛世奇",
          price: "￥687"
        },
        {
          url:
            "http://img550.5lux.com.cn/2018/09/27/kl/153801550450_800x800_350x350.jpg",
          s: "施华洛世奇",
          price: "￥687"
        },
        {
          url:
            "http://img550.5lux.com.cn/2018/09/27/kl/153801550450_800x800_350x350.jpg",
          s: "施华洛世奇",
          price: "￥687"
        },
        {
          url:
            "http://img550.5lux.com.cn/2018/09/27/kl/153801550450_800x800_350x350.jpg",
          s: "施华洛世奇",
          price: "￥687"
        },
        {
          url:
            "http://img550.5lux.com.cn/2018/09/27/kl/153801550450_800x800_350x350.jpg",
          s: "施华洛世奇",
          price: "￥687"
        },
        {
          url:
            "http://img550.5lux.com.cn/2016/11/24/bc/147995952824_260x260.jpg"
        }
      ]
    };
  },
  components: {}
};
</script>

<style scoped>
.Women {
  width: 100%;
  height: 10.269rem;
  background: aqua;
}
.Women .WomenImg {
  width: 100%;
  height: 4.0115rem;
  background: ghostwhite;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
}
.Women .WomenImg:nth-child(2) {
  margin-bottom: 0;
}
.Women .WomenImg img {
  width: 100%;
  height: 2.9315rem;
}
.Women .WomenImg .WomenImg_bottom {
  width: 100%;
  height: 1.08rem;
  padding-top: 18px;
  padding-left: 20px;
  padding-bottom: 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.Women .WomenImg .WomenImg_bottom p {
  font-size: 12px;
  color: #999;
  line-height: 18px;
  overflow: hidden;
  height: 34px;
}
.Women .WomenImg .WomenImg_bottom h2 {
  font-weight: 900;
  font-size: 14px;
}
.Women .necklace {
  width: 100%;
  height: 2.146rem;
  background: #fff;
  padding-top: 20px;
  padding-left: 10px;
  padding-bottom: 20px;
  /* overflow: auto */
  /* overflow-x:hidden */
}

.Women .necklace ul {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: auto;
  justify-content: space-around;
  align-items: center;
}
::-webkit-scrollbar {
  display: none;
}
.Women .necklace ul li {
  width: 1.5rem;
  height: 1.698rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.Women .necklace ul li img {
  width: 1.3rem;
  height: 1.3rem;
}
.Women .necklace ul li .p1 {
  font-size: 13px;
  color: #333;
  text-align: center;
}
.Women .necklace ul li .p2 {
  font-size: 12px;
  color: #999;
  text-align: center;
}
</style>
