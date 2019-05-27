<template>
    <div id="navb">
        <ul>
            <li v-for="item in tabbar" @click="fn">{{item.title}}</li>
        </ul>
    </div>
</template>

<script>
    export default{
        name:"navb",

        data(){
            return {
                tabbar:[
                    {
                        title:"首页"
                    },
                    {
                        title:"箱包"
                    },
                    {
                        title:"美妆"
                    },
                    {
                        title:"服饰"
                    },
                    {
                        title:"腕表"
                    },
                    {
                        title:"配饰"
                    },
                    {
                        title:"鞋靴"
                    },
                    {
                        title:"母婴"
                    },
                    {
                        title:"美酒"
                    },
                    {
                        title:"美食"
                    },
                    {
                        title:"家居"
                    },
                    {
                        title:"电子"
                    },
                    {
                        title:"办公"
                    }
                ]
            }
        },
        methods:{
            fn(){
                console.log(11111)
            }
        }
    }
</script>
<style>
    #navb{
        width:100%;
        height:0.78rem;
        background:#fff;
        border-bottom:0.02rem solid #ccc;
        position:fixed;
        overflow:auto;
        
        z-index:100;
        /* overflow:hidden; */
        top:0.88rem;
    }
    ::-webkit-scrollbar {
        display: none;
    }
        
    
    #navb ul{
        display:flex;
        width:16rem;
        height:0.78rem;
        color:gray;
        align-items:center;
    }
    #navb ul li:nth-child(1){
        margin-left:0.5rem;
        
    }
    #navb ul li{
        box-sizing:border-box;
        display:flex;
        align-items:center;
        width:0.6rem;
        height:0.78rem;
        margin-right:0.6rem;
        font-size:0.29rem;
        color:#999;
    }
    #navb ul li:hover{
        color:#000;
        border-bottom:0.04rem solid #000;
    }
</style>