<template>
        <div class="wrapper">
          <div>
              <span></span>
              <p>潮流大师</p>
          </div>
          <div>
              <img src="@/assets/images/index.png" alt="">
          </div>
        </div>
      </template>
      
      <script>
      export default {
          name : "trend",
        components:{},
        props:{},
        data(){
          return {
          }
        },
        watch:{},
        computed:{},
        methods:{},
        created(){},
        mounted(){}
      }
      </script>
      <style scoped>
      .wrapper{
          width: 100%;
          height: 0.36rem;
          background: #fff;
          display: flex;
          justify-content: space-between;
      }
      .wrapper div{
          width: 1.025rem;
          height: 100%;
      }
      .wrapper div:nth-child(1){
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-right: 16px
      }
      .wrapper div:nth-child(1) span{
          display: block;
          width: 0.03rem;
          height: 0.22rem;
          background: brown;
      }
      .wrapper div:nth-child(1) p{
          font-size: 14px;
          color: #999;
          text-shadow: 0 0 .5px #000;
      }
      .wrapper div:nth-child(2) img{
          width: 0.825rem;
          height: 0.14rem
      }
      .wrapper div:nth-child(2){
          padding-top: 11px;
          padding-left: 11px;
      }
      </style>