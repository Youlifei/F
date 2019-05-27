<template>
    <div id="footer">
        <ul>
            <router-link 
            tag="li" 
            v-for="(item,index) in tabbar"
            :to="item.path"
            :key="index">
            <i class="iconfont" v-html="item.icon"></i>
            <span>{{item.title}}</span>
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default{
        name:"tabBar",
        data(){
            return {
                tabbar:[
                    {
                        title:'首页',
                        path:'/home',
                        icon:'&#xe62e'
                    },
                    {
                        title:'商城',
                        path:'/shopping',
                        icon:'&#xe6e9'
                    },
                    {
                        title:'海外服务',
                        path:'/overseas',
                        icon:'&#xe6f2'
                    },
                    {
                        title:'到店',
                        path:'/reach',
                        icon:'&#xe67a'
                    },
                    {
                        title:'我的 ',
                        path:'/my',
                        icon:'&#xe6c7'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    #footer{
        z-index:100;
        width:100%;
        height:0.96rem;
        position:fixed;
        background:#000;
        left:0;
        bottom:0; 
    }
  #footer ul{
            display:flex;
            width:100%;
            height:100%;
            justify-content:center;
            align-items:center;
        }
    #footer ul li{
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        color:#666;
        font-size:0.2rem;
    }  
    #footer ul i{
        width:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        color:#666;
        font-size:0.44rem;
    }
    #footer ul li:hover{
        color:#fff;
    }
    #footer ul i:hover{
        color:#fff;
    }
</style>


