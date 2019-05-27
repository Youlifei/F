<template>
  <div class="headerOne">
    <HeaderOne></HeaderOne>
    <Tide></Tide>
    <Eight></Eight>
    <TopYears></TopYears>
    <InVoGue></InVoGue>
    <Trend></Trend>
    <TrendBottom></TrendBottom>
    <Big></Big>
    <Variety></Variety>
  </div>
</template>

<script>
import HeaderOne from "./Header_Top/index";
import Tide from "./Tide/index";
import Eight from "./Eight/index";
import TopYears from "./TopYears/index";
import InVoGue from "./InVoGue/index";
import Trend from "./Trend/index";
import TrendBottom from "./TrendBottom/index";
import Big from "./Big/index";
import Variety from "./Variety/index";
//import BScroll from "better-scroll"

export default {
  name: "sea",
  components: {
    HeaderOne,
    Tide,
    Eight,
    TopYears,
    InVoGue,
    Trend,
    TrendBottom,
    Big,
    Variety
  }
  // mounted() {
  //     this.scroll = new Bscroll(this.$refs.zhi)
  //     console.log(this.scroll)
  // },
};
</script>
<style scoped>
/* .zhi{
        height:100%
    } */
</style>