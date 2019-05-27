<template>
  <div id="headerOne">
    <!-- 头部上半部 -->
    <div class="diately" v-show="a">
      <!-- 头部上半部_左半部 -->
      <div class="diately_left">
        <!-- 头部上半部_左半部   第一块-->
        <div class="fork" @click="a = !a">
          <i class="iconfont">&#xe600;</i>
        </div>
        <!-- 头部上半部_左半部   第二块-->
        <div class="five_lux">
          <div class="five_luxCon">
            <img src="@/assets/images/com_03.gif" alt>
          </div>
        </div>
        <!-- 头部上半部_左半部   第三块-->
        <div class="reg_dow">
          <div class="reg_dowSize" :style="sizeStyle">注册享1880元大礼包</div>
          <div class="reg_dowSize" :style="sizeStyleTwo">下载第五大道APP</div>
        </div>
      </div>
      <!-- 头部上半部_右半部 -->
      <div class="diately_right">
        <el-row style="width:0.95rem" class="diately_rightBtn">
          <el-button type="danger" :style="btnStyle">立即体验</el-button>
        </el-row>
      </div>
      
    </div>
  
    <!-- 头部下半部 -->
    <div class="headerBottom">
      <input type="text" placeholder="5LUX.COM">
      <i class="iconfont">&#xe612;</i>
      <i class="iconfont" :style="magniFying">&#xe60f;</i>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "headerOne",
  data() {
    return {
      a : true,
      // 头部上半部_左半部   第三块中的字体样式
      sizeStyle: {
        fontSize: "13px",
        color: "#FFFFFF"
      },
      sizeStyleTwo: {
        fontSize: "12px",
        color: "#999"
      },
      //头部上半部_右半部 按钮字体和背景
      btnStyle: {
        width: "0.84rem",
        height: "0.36rem",
        background: "#f33",
        fontSize: "13px",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        lineHeight: 0.36
      },
      //头部下半部 放大镜调距离
      magniFying: {
        position: "absolute",
        top: "12px",
        left: "13px",
        fontSize: "20px"
      }
    };
  },
  components: {}
};
</script>

<style scoped>
#headerOne {
  width: 100%;
  height: 1.04rem;
  /* position: fixed;
  z-index: 1000; */
}
/* 头部上半部 */
#headerOne .diately {
  width: 100%;
  height: 0.6rem;
  background: #000;
}
/* 头部上半部_左部 */
#headerOne .diately .diately_left {
  width: 2.79rem;
  height: 0.6rem;
  /* background: #000; */
  float: left;
}
/* 头部上半部_左部--第一块 */
#headerOne .diately .diately_left .fork {
  width: 0.46rem;
  height: 0.6rem;
  /* background: cornsilk; */
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 0.15rem;
}
#headerOne .diately .diately_left .fork i {
  font-size: 24px;
  color: aliceblue;
  opacity: 0.5;
}
/* 头部上半部_左部--第二块 */
#headerOne .diately .diately_left .five_lux {
  width: 0.48rem;
  height: 0.6rem;
  /* background:aqua; */
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
#headerOne .diately .diately_left .five_lux .five_luxCon {
  width: 0.48rem;
  height: 0.48rem;
  /* background:url(./assets/images/com_03.gif) */
}
#headerOne .diately .diately_left .five_lux .five_luxCon img {
  width: 0.48rem;
  height: 0.48rem;
}
/* 头部上半部_左部--第三块 */
#headerOne .diately .diately_left .reg_dow {
  width: 1.85rem;
  height: 0.6rem;
  /* background: darkorange; */
  float: left;
  padding-left: 0.1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
#headerOne .diately .diately_left .reg_dow .reg_dowSize {
  width: 1.75rem;
  height: 0.24rem;
  /* background: pink; */
}
#headerOne .diately .diately_left .reg_dow .reg_dowSize:nth-child(1) {
  display: flex;
  align-items: flex-end;
}
/* 头部上半部_右部 */
#headerOne .diately .diately_right {
  width: 0.95rem;
  height: 0.6rem;
  /* background: yellow; */
  float: right;
  display: flex;
  justify-content: center;
  align-items: center;
}
#headerOne .diately .diately_right .diately_rightBtn {
  display: flex;
  align-items: center;
  margin-right: 0.12rem;
}

/* 头部下半部 */
#headerOne .headerBottom {
  width: 100%;
  height: 0.4402rem;
  background: linear-gradient(#999, rgba(194, 180, 300, 0));
  /* background:rgba(0, 0, 0, 0.3); */
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 100;
}
#headerOne .headerBottom input {
  width: 3.03rem;
  height: 0.3rem;
  background: #fff;
  /* background: rgba(241, 239, 239, 0.1); */
  border: none;
  border-radius: 4px;
  padding-left: 27px;
  font-size: 0.16rem;
  opacity: 0.3;
  /* color: #fff; */
}
#headerOne .headerBottom i {
  font-size: 0.25rem;
  color: #fff;
  opacity: 0.5;
  /* align-self: flex-end */
  /* line-height: 0.01rem */
  margin-bottom: -13px;
}
</style>
