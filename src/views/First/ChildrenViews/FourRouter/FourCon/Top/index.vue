<template>
  <div class="wrapper1">
    <i class="iconfont">&#xe609;</i>
    <span>限时闪购</span>
    <span>每日10点上新</span>
  </div>
</template>

<script>
  export default {
    name: "top2",
    components: {},
    props: {},
    data() {
      return {
      }
    },
    watch: {},
    computed: {},
    methods: {},
    created() { },
    mounted() { }
  }
</script>
<style scoped>
  .wrapper1 {
    width: 100%;
    height: 0.36rem;
    background: #fff;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
   
  }

  .wrapper1 i {
    color: red;
    margin-top: 11.5px
  }

  .wrapper1 span {
    display: inline-block;
    font-size: 14px;
    color: #222;
    margin-left: 5px
  }
</style>