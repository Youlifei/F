<template>
    <div class="wrapper">
        <div class="top_img">
            <img src="http://img550.5lux.com.cn/2017/07/07/ij/149940786287_750x370.jpg" alt="">
            <div v-for="(item, index) in topImg">
                <p>{{item.a}}</p>
                <p>{{item.c}}</p>
            </div>
        </div>
        <!--  -->
        <div class="hideHihg">
            <ul>
                <router-link tag="li" :to="item.path" v-for="(item, index) in hide">
                    <img :src="item.url" alt="">
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "trendbottom",
        components: {},
        props: {},
        data() {
            return {
                topImg: [
                    {
                        a: "Jimmy Choo",
                        c: "-"
                    }
                ],
                hide:[
                    {
                        url : "http://img550.5lux.com.cn/2017/06/17/de/149767594395_880x1320_200x200.jpg",
                        path:"/first"
                    },
                    {
                        url : "http://img550.5lux.com.cn/2017/06/17/de/149767594395_880x1320_200x200.jpg",
                        path:"/first"
                    },
                    {
                        url : "http://img550.5lux.com.cn/2017/06/17/de/149767594395_880x1320_200x200.jpg",
                        path:"/first"
                    }
                ]
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
    .wrapper {
        width: 100%;
        height: 2.968rem;
        margin-bottom: 10px
    }

    .wrapper .top_img {
        width: 100%;
        height: 1.8509rem;
        position: relative;

    }

    .wrapper .top_img img {
        width: 100%;
        height: 100%;
    }

    .wrapper .top_img div {
        width: 100%;
        height: 2.106rem;
        background: rgba(238, 200, 232, 0.247);
        position: absolute;
        top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-bottom: 55px
    }

    .wrapper .top_img div p:nth-child(1) {
        font-size: 24px;
        color: #fff;
        text-align: center;
        text-shadow: 0 0 5px #000;
        margin-bottom: 2px;
    }

    .wrapper .top_img div p:nth-child(2),
    .wrapper .top_img div p:nth-child(3) {
        font-size: 18px;
        color: #fff;
        text-shadow: 0 0 5px #000;
        margin-bottom: 5px
    }
    /*  */
.wrapper .hideHihg{
    width: 100%;
    height: 1.12rem;
}
.wrapper .hideHihg ul{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto
}
.wrapper .hideHihg ul li{
    width: 1.2506rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding-top: 10px;
    padding-bottom: 10px
}
.wrapper .hideHihg ul li img{
    width: 1.33rem;
    height: 2rem
}
</style>