<template>
        <div id="netsearch">
           <div class="netserch">
             <div>
               <i class="iconfont icon-fangdajing"></i>
               <h2>Gucci包</h2>
             </div>
           </div>
           <p @click=fn()>取消</p>
        </div>
    </template>
    <script>

       export default{
         methods:{
            fn(){
             
                this.$router.go(-1)
            }
         }
       }

    </script>
    <style>
        #netsearch{
            width:100%;
            height:0.88rem;
            background:#fff;
            display:flex;
            justify-content: center;
            align-items: center;
            border-bottom:0.02rem solid #999;
        }
        #netsearch .netserch{
          margin:0 0.22rem 0 0.16rem;
          width:6.18rem;
          height:0.64rem;
          background:#ccc;
          border-radius: 0.08rem;
          opacity: 0.3;
        }
        #netsearch .netserch div{
          display:flex;
          align-items:center;
        }
        #netsearch .netserch i{
          padding-top:0.1rem;  
          width:0.26rem;
          height:0.44rem;
          margin-right:0.26rem;
          font-size:0.4rem;
        }
        #netsearch .netserch h2{
          width:5.69rem;
          font-size:0.4rem;
          height:0.34rem;
          margin-right:0.16rem;
          
        }
        #netsearch p{
          width:0.64rem;
          height:0.32rem;
          margin-right:0.02rem;
          font-size:0.32rem;
        }
    </style>