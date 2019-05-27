<template>
    <div id="conte">
        <div class="conte">
            <h2>热门搜索</h2>
            <div class="menu">
                <a v-for="item in tabble">{{item.title}}</a>
            </div>
        </div>
        <div class="hot">
            <div class="weini">
                ---
                    <h2>为您推荐</h2>
                ---
            </div>
            <div id="commodity">
                <div class="shoop" v-for="item in tabbl">
                    <img :src="item.product_thumb">
                    <div>
                        <h2>{{item.product_name}}</h2>
                        <p>{{item.product_price}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from "axios"
    export default{
        name:"conte",
        data(){
            return{
                tabble:[
                    {
                        title:"Rolex劳力士"
                    },
                    {
                        title:"GUCCI"
                    },
                    {
                        title:"斩男香水"
                    },
                    {
                        title:"太阳镜"
                    },
                    {
                        title:"Hermes爱马仕"
                    },
                    {
                        title:"SELF-PORTRAIT仙女裙"
                    },
                    {
                        title:"百达翡丽"
                    },
                    {
                        title:"CHANEL香奈儿"
                    },
                    {
                        title:"Omege欧米茄"
                    },
                    {
                        title:"DIOR迪奥"
                    },
                    {
                        title:"S&S纽约故事女装"
                    }
                ],
                tabbl:[]
            }
            
        },
        mounted(props){
            let url = "https://apim.restful.5lux.com.cn/search/recommend_list"
            axios.get(url).then(({data})=>{
                this.tabbl=data.data.recommend_products;
                console.log(data.data.recommend_products)
            }).catch(function(error){
                console.log(error)
            })
        }
    }
</script>

<style>
   #conte{
       width:100%;
       height:12rem;
       position:absolute;
       overflow:auto;
       flex-shrink:0;
       top:0.88rem;
       flex:1;
       margin-left:-0.15rem;
       background:#f2f2f2;
   }
   #conte .conte{
       width:100%;
       height:4.15rem;
       background:#f2f2f2;
   }
   #conte .conte h2{
       width:100%;
       display:flex;
       align-items: center;
       height:0.8rem;
       background:#f2f2f2;
       opacity: 0.5;
       color:#000;
       padding:0 0.3rem 0 0.3rem;
       font-size:0.3rem;
   }
   #conte .conte .menu{
       width:100%;
       height:3.36rem;
       padding:0.2rem 0.3rem 0 0.3rem;
       background:#fff; 
   }
   #conte .conte .menu a{
       font-size:0.24rem;
       height:2.6rem;
       width:1rem;
       font-size:0.3rem;
       color:#7e8c8d;
       padding: 0 0.2rem;
       border:0.02rem solid #ccc;
   }
   #conte .hot{
       width:100%;
       flex:1;
       height:12rem;
       background: #f2f2f2;
   }
   #conte .hot .weini{
       width:100%;
       height:0.92rem;
       color:#666;
       display: flex;
       justify-content: center;
       align-items: center;
       font-size:0.28rem;
       justify-content: center;
       align-items: center;
       background: #f2f2f2;
       
   }
   #conte .hot .weini h2{
       font-size:0.3rem;
       margin:0 0.1rem;
   }
   #conte .hot #commodity{
       width:100%;
       display:flex;
       flex:1;
       flex-wrap:wrap;
       justify-content: space-between;
       padding:0.3rem;
       background:#fff;
   }
   #conte .hot #commodity .shoop{
       width:2.9rem;
       height: 3.9rem;
       float:left;
       background:#fff;
   }
   #conte .hot #commodity .shoop img{
       width:2.9rem;
       height:2.9rem;
   }
   #conte .hot #commodity .shoop div{
       padding-top:0.22rem;
        height:0.25rem;
   }
   #conte .hot #commodity .shoop div h2{
       width:2.9rem;
       height:0.24rem;
       font-size:0.2rem;
       text-align:center;
       align-content: center;
   }
   #conte .hot #commodity .shoop div p{
       margin-top:0.2rem;
       width:2.9rem;
       height:0.24rem;
       text-align:center;
       font-size:0.24rem;

   }
</style>