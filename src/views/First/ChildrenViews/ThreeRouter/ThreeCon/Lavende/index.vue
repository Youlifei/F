<template>
  <!-- <div class="moveW" ref="moveW"> -->
  <BScroll>
    <div class="lavende">
      <div class="laveTop">
        <span>
          <img src="/static/img/5luxpc.png" alt="" />
        </span>
        <span>lavender乖乖</span>
        <span>
          <div>+关注</div>
        </span>
      </div>
      <!--  -->
      <a>
        <router-link :to="item.path" v-for="(item, index) in girl" :key="index">
          <img :src="item.url" alt="" />
        </router-link>
      </a>
      <!--  -->
      <div class="fiveDay" v-for="(item, index) in fiveDay" :key="index">
        <h2>{{ item.a }}</h2>
        <p>{{ item.b }}</p>
      </div>
      <!--  -->
      <div class="lavende_bottom">
        <div class="lavende_bottom_div">
          <span>
            <i class="iconfont">&#xe642;</i>
            <b>2345</b>
          </span>
          <span>
            <i class="iconfont">&#xe67f;</i>
            <b>2345</b>
          </span>
          <span>
            <i class="iconfont">&#xe608;</i>
            <b>25</b>
          </span>
        </div>
      </div>
    </div>
  </BScroll>
  <!-- </div> -->
</template>

<script>
// import BScroll from "better-scroll"
export default {
  name: "lavende",
  components: {},
  props: {},
  data() {
    return {
      girl: [
        {
          url:
            "http://img550.5lux.com.cn/2019/05/14/hi/155779778516_600x600.jpeg",
          path: "/first"
        }
      ],
      fiveDay: [
        {
          a: "为你们的520撒点儿浪漫的调味剂",
          b:
            "夏天的风轻轻吹过，穿过头发穿过耳朵~夏天到来的时候很喜欢听这首《夏天的风》，甜甜地季节里，一切都是最好的状态，这个时候仙女们就开始想着如何展现自己最美的一面，把好身材秀出来，那么，连衣裙一定是女孩们的最爱！"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {}
  // mounted() {
  //     this.scroll = new BScroll(this.$refs.moveW)//最外层的div
  // }//因为mounted可以获取到真是的dom结构
};
</script>
<style scoped>
.lavende {
  width: 100%;
  height: 6.25rem;
  background: #fff;
  border-radius: 0.133333333rem;
  display: flex;
  flex-direction: column;
}

/* 转盒 */
.lavende .laveTop {
  width: 100%;
  height: 0.5501rem;
  /* background: blue; */
  border-top-left-radius: 0.133333333rem;
  border-top-right-radius: 0.133333333rem;
  display: flex;
}

.lavende .laveTop span:nth-child(1) {
  display: block;
  width: 0.4rem;
  height: 100%;
  /* background: black; */
  display: flex;
  justify-content: center;
  align-items: center;
}

.lavende .laveTop span:nth-child(1) img {
  width: 0.35rem;
  height: 0.35rem;
}

.lavende .laveTop span:nth-child(2) {
  display: block;

  flex: 1;
  font-size: 15px;
  color: #333;
  padding-top: 10px;
  padding-left: 5px;
}

.lavende .laveTop span:nth-child(3) {
  display: block;
  width: 0.8rem;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 10px;
}

.lavende .laveTop span:nth-child(3) div {
  width: 0.68rem;
  height: 0.24rem;
  border: 1px solid black;
  border-radius: 0.32rem;
  font-size: 13px;
  text-align: center;
  line-height: 0.19rem;
  color: #333;
}

/*  */
.lavende a {
  width: 100%;
  height: 3.592rem;
  background: palegreen;
}

.lavende a img {
  width: 100%;
  height: 100%;
}

/*  */
.lavende .fiveDay {
  width: 100%;
  height: 1.59rem;

  border-bottom: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 10px;
}

.lavende .fiveDay h2 {
  font-size: 20px;
  color: #333;
  font-weight: 700;
}

.lavende .fiveDay p {
  font-size: 13px;
  color: #999;
}

/*  */
.lavende .lavende_bottom {
  width: 100%;
  height: 0.5rem;
  border-bottom-left-radius: 0.133333333rem;
  border-bottom-right-radius: 0.133333333rem;
  display: flex;
  padding-left: 10px;
}

.lavende .lavende_bottom .lavende_bottom_div {
  width: 2.32rem;
  height: 100%;

  display: flex;
  align-items: center;
}

.lavende .lavende_bottom .lavende_bottom_div span:nth-child(1) {
  display: block;
  width: 0.6rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.lavende .lavende_bottom .lavende_bottom_div span:nth-child(1) b {
  font-size: 12px;
  color: #999;
}

.lavende .lavende_bottom .lavende_bottom_div span:nth-child(1) i {
  font-size: 20px;
  color: #999;
  margin-top: 10px;
}

.lavende .lavende_bottom .lavende_bottom_div span:nth-child(2) {
  display: block;
  width: 0.55rem;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.lavende .lavende_bottom .lavende_bottom_div span:nth-child(2) b {
  font-size: 12px;
  color: #ccc;
}

.lavende .lavende_bottom .lavende_bottom_div span:nth-child(2) i {
  font-size: 20px;
  color: #ccc;
  margin-top: 15px;
}

.lavende .lavende_bottom .lavende_bottom_div span:nth-child(3) {
  display: block;
  width: 0.4rem;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.lavende .lavende_bottom .lavende_bottom_div span:nth-child(3) b {
  font-size: 12px;
  color: #ccc;
}

.lavende .lavende_bottom .lavende_bottom_div span:nth-child(3) i {
  font-size: 20px;
  color: #ccc;
  margin-top: 15px;
}

.lavende .lavende_bottom .lavende_bottom_div span {
  margin-right: 10px;
}
/* .moveW{
        height: 100%
    } */
</style>