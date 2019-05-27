<template>
  <div class="wrapper">
    <ul>
        <li v-for="(item,index) in eight">
            <img :src="item.url" alt="">
            <p>{{item.size}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
    name:"eight",
  components:{},
  props:{},
  data(){
    return {
        eight : [
            {
                url:"http://img.5lux.com.cn/511/avatar/2016/04/28/14618311339956.jpg",
                size : "家居"
            },
            {
                url:"http://img.5lux.com.cn/511/avatar/2016/04/28/14618311332600.JPG",
                size : "美酒"
            },
            {
                url:"http://img.5lux.com.cn/511/avatar/2016/04/28/14618311337021.jpg",
                size : "美妆"
            }, {
                url:"http://img550.5lux.com.cn/2016/11/16/lm/147928751287_800x800.jpg",
                size : "腕表"
            }, {
                url:"http://img550.5lux.com.cn/2016/11/16/rs/147928714091_800x800.jpg",
                size : "鞋靴"
            }, {
                url:"http://img.5lux.com.cn/511/avatar/2016/04/28/14618311349201.JPG",
                size : "配饰"
            }, {
                url:"http://img.5lux.com.cn/511/avatar/2016/04/28/14618311342845.jpg",
                size : "箱包"
            }, {
                url:"http://img550.5lux.com.cn/2016/11/16/tu/147928653077_800x800.jpg",
                size : "服装"
            }
        ]
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
    height: 2.218rem;
    background: #fff;
    margin-bottom: 10px
}
.wrapper ul{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}
.wrapper ul li{
    width: 0.9375rem;
    height: 1.11rem;
    border-right: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 10px;
    padding-left: 6.5px;
    padding-bottom: 10px;
    padding-right: 6.5px;
}
.wrapper ul li:nth-child(5),
.wrapper ul li:nth-child(6),
.wrapper ul li:nth-child(7),
.wrapper ul li:nth-child(8){
    border-bottom: none
}
.wrapper ul li img{
    width: 0.7475rem;
    height: 0.7475rem;
}
.wrapper ul li p{
    font-size: 16px;
    color: #7e8c8d;
    text-align: center;
}
</style>