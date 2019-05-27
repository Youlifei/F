<template>
  <div class="just">
    <div class="just_top">
      <div class="just_top_left" v-for="(item, index) in justUrl">
        <img :src="item.url" />
      </div>
      <div class="just_top_center">Just Cavalli加斯特.卡沃利</div>
      <div class="just_top_right">
        <i class="iconfont">&#xe62e;</i>
      </div>
    </div>
    <!--  -->
    <div class="just_bottom">
      <div>
        <ul>
          <li v-for="(item, index) in liUrl.type1">
            <img :src="item.url" alt="" />
            <p>{{ item.size }}</p>
            <span>{{ item.price }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "just",
  components: {},
  props: {},
  data() {
    return {
      justUrl: [
        {
          url: "http://img.5lux.com.cn/511/avatar/2015/11/17/14477388157177.png"
        }
      ],
      liUrl: {
        type1: [
          {
            url:
              "http://img550.5lux.com.cn/2019/05/20/uv/155830727472_1571x2000_350x350.JPG",
            size:
              "JUST CAVALLI 短款连衣裙 女                 【包邮            免关税】",
            price: "￥6699"
          },
          {
            url:
              "http://img550.5lux.com.cn/2019/05/19/cd/155822053468_1571x2000_350x350.JPG",
            size:
              "JUST CAVALLI 运动服 男                 【包邮             免关税】",
            price: "￥3529"
          },
          {
            url:
              "http://img550.5lux.com.cn/2019/05/19/uv/155821241821_1571x2000_350x350.JPG",
            size:
              "JUST CAVALLI 短款连衣裙 女                 【包邮            免关税】",
            price: "￥6699"
          },
          {
            url:
              "http://img550.5lux.com.cn/2019/05/20/uv/155830727472_1571x2000_350x350.JPG",
            size:
              "JUST CAVALLI 短款连衣裙 女                 【包邮            免关税】",
            price: "￥6699"
          },
          {
            url:
              "http://img550.5lux.com.cn/2019/05/20/uv/155830727472_1571x2000_350x350.JPG",
            size:
              "JUST CAVALLI 短款连衣裙 女                 【包邮            免关税】",
            price: "￥6699"
          },
          {
            url:
              "http://img550.5lux.com.cn/2019/05/20/uv/155830727472_1571x2000_350x350.JPG",
            size:
              "JUST CAVALLI 短款连衣裙 女                 【包邮            免关税】",
            price: "￥6699"
          },
          {
            url:
              "http://img550.5lux.com.cn/2017/05/05/pq/149398682373_160x160.png"
          }
        ]
      }
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped>
.just {
  width: 100%;
  height: 3.064rem;
  margin-top: 44px;
  margin-bottom: 10px;
}

.just .just_top {
  width: 100%;
  height: 0.7rem;

  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  display: flex;
}

.just .just_top .just_top_left {
  width: 0.48rem;
  height: 0.48rem;
  border: 1px solid #999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.just .just_top .just_top_left img {
  width: 0.44rem;
  height: 0.22rem;
}

.just .just_top .just_top_right {
  width: 0.5rem;
  height: 0.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
  padding-top: 9px;
}

.just .just_top .just_top_center {
  flex: 1;

  font-size: 14px;
  display: flex;
  align-items: center;
  color: #666;
  padding-left: 20px;
}

/*  */
.just .just_bottom {
  width: 100%;
  height: 2.364rem;
  padding-left: 10px;
  padding-right: 10px;
  background: ghostwhite;
  border-bottom: 0.5px solid #ccc;
  margin-bottom: 10px;
}

.just .just_bottom div {
  width: 100%;
  height: 100%;
}

.just .just_bottom div ul {
  display: flex;
  overflow: auto;
  height: 100%;
}

::-webkit-scrollbar {
  display: none;
}

.just .just_bottom div ul li {
  width: 1.58rem;
  height: 100%;
  /* background: blue; */
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.just .just_bottom div ul li:nth-child(7) {
  width: 1.38rem;
  height: 1.36rem;
  border: 1px solid #ccc;
  padding-bottom: 10px;
}

.just .just_bottom div ul li:nth-child(7) img {
  width: 1.2rem;
  height: 1.2rem;
}

.just .just_bottom div ul li img {
  width: 1.0843rem;
  height: 1.48rem;
}

.just .just_bottom div ul li p {
  font-size: 13px;
  color: #333;
  text-align: center;
  line-height: 14px;
}

.just .just_bottom div ul li span {
  display: inline-block;
  font-size: 13px;
  text-align: center;
  color: #9b885f;
}
</style>