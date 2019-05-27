<!-- 时尚发布厅 -->
<template>

    <div id="fachion">
        <div id="fashion">
            <div class="header">
                <h2>时尚发布厅</h2>
                <h3>——FASHION TV——</h3>
            </div>
            <div class="bagmap" v-for="(item,index) in tabber">
                <div>{{item.title}}</div>
                <img :src="item.thumb">
            </div>
            <div class="twomap">
                <div v-for="item in taconer">
                    <h4>{{item.title}}</h4>
                    <img :src="item.url" alt="">
                </div>
            </div>
           
        </div>
    </div>
</template>
<script>
    import axios from "axios";
    export default{
        name:"fachion",
        data(){
            return{
                tabber:[]
            }
        },
        mounted(props){
            let url ="https://apim.restful.5lux.com.cn/shop/get_flagship_recommend"
            axios.get(url).then(({data})=>{
                this.tabber=data.data;
                // console.log(data.data)
            }).catch(function(error){
                console.log(error);
            });
        }

    }
</script>
<style>
    #fashion{
        width:100%;
        height:14.5rem;
        margin-bottom:0.2rem;
        background:#fff;
    }
    #fashion .header {
        width:100%;
        height:1rem;
        display: flex;
        flex-direction:column;
        background:#fff;
    }
    #fashion .header h2{
        width:100%;
        height:0.6rem;
        text-align:center;
        font-size:0.4rem;
        font-weight:bolder;
    }
    #fashion .header h3{
        width:100%;
        text-align:center;
        height:0.4rem;
        font-size:0.3rem;
    }
    #fashion .bagmap{
        width:100%;
        position:relative;
        height:4.47rem;
        padding-bottom:0.02rem;
        background:#fff;
    }
    #fashion .bagmap img{
        width:100%;
        position:relative;
        height:4.45rem;
        padding-bottom:0.2rem;
        background:#fff;
    }
    #fashion .bagmap div{
        width:100%;
        position:absolute;
        bottom:0;
        height:1rem;
        display:flex;
        justify-content:center;
        font-size:0.5rem;
        color:#fff;
        padding-bottom:0.2rem;
        z-index:10;
    }
 
    #fashion .twomap{
        width:100%;
        height:4.47rem;
        padding-bottom:0.2rem;
        background:#fff;
    }   
    #fashion .twomap div{
        float:left;
        width:50%;
        position:relative;
        height:4.47rem;
        background:#fff;
    }
    #fashion .twomap div:nth-child(2){
        float:right;
    }
    #fashion .twomap div h4{
        position:absolute;
        bottom:0;
        height:0.7rem;
        width:100%;
        font-size:0.4rem;
        text-align:center;
        color:#fff;
    }
    #fashion .twomap div img{
        width:3.7rem;
        height:4.47rem;
        background:pink;
    }
    #fashion .twomap div img{
        width:3.7rem;
        height:4.47rem;
        background:pink;
    }
    #fashion .twomap .twoap_right{
        width:50%;
        height:4.47rem;
        background:pink;
    }
</style>