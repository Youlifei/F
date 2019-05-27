<template>
    <div id="heaer">
            <router-link 
            v-for="(item,index) in tabbar"
            :to="item.path"
            :key="index">
                <div class="nav">
                    <i class="iconfont" v-html="item.icon"></i>
                    {{item.title}}
                </div>
            </router-link>
            <div class="bag">
                <i class="iconfont">&#xe657;</i>
            </div>
            <Seeks></Seeks>
        <router-view/>
    </div>
</template>
<script>
    import Seeks from "@/common/header/seeks"
    export default{
        name:"heaer",
        components:{
            Seeks
        },
        methods:{
        
        },
        data(){
            return {
                tabbar:[
                    {
                        title:"5LUX.COM",
                        path:"/seeks",//跳转的页面
                        icon:"&#xe6dd"
                    }
                ]
            }
        }
       
    }
</script>
<style>
    #heaer{
        width:100%;
        height:0.88rem;
        background:#000;
        position:fixed;
        left:0;
        top:0;
        display:flex;
        align-items:center;
        justify-content:space-between;
        z-index:100;
    }
    #heaer .nav i{
        font-size:0.3rem;
        color:#fff;
        padding:0 0.1rem 0 0.1rem;
    }
    #heaer .nav{
        display:flex;
        align-items:center;
        width:6.06rem;
        height:0.6rem;
        background:#fff;
        background-color:hsla(0,0%,100%,0.25);
        border:0;
        color:#fff;
        opacity: 0.9;
        border-radius:0.1rem;
        margin: 0 0.32rem 0 0.34rem;
        font-size:0.32rem;
    }
    #heaer .bag{
        width:0.44rem;
        height:0.44rem;
        margin-right:0.34rem;
    }
    #heaer .bag i{
        
        font-size:0.44rem;
        color:#fff;
    }
</style>