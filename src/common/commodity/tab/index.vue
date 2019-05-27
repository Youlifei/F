<!-- 第二个导航 -->
<template>
    <div id="tab">
        <ul>
            <li v-for="item in tabbar" :to="item.path">
                <i class="iconfont" v-html="item.icon"></i>
                <span>{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default{
       
        data(){
            return{
               tabbar:[
                   {
                       title:"分类",
                       path:"/seeks",
                       icon:"&#xe68e"
                   },
                   {
                       title:"专柜自提",
                       path:"/seeks",
                       icon:"&#xe651"
                   },
                   {
                       title:"拼团",
                       path:"/seeks",
                       icon:"&#xe6ab"
                   },
                   {
                       title:"会员特权",
                       path:"/seeks",
                       icon:"&#xe676"
                   },
                   {
                       title:"礼品",
                       path:"/seeks",
                       icon:"&#xe612"
                   }
               ] 
            }
        }
    }
</script>
<style>
    #tab{
        width:100%;
    }
    #tab ul{
        width:100%;
        height:1.6rem;
        display:flex;
        background:#fff;
    }
    #tab ul li{
        width:1.5rem;
        height:1.6rem;
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
    }
    #tab ul li i{
        font-size:0.5rem;
        color:#666;
    }
    #tab ul li span{
        margin-top:0.03rem;
        font-size:0.25rem;
        color:#666;
    }
</style>