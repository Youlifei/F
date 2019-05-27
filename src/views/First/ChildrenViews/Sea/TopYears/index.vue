<template>
    <div class="wrapper">
        <div class="top_img">
            <img src="http://img550.5lux.com.cn/2017/07/28/de/150122727058_750x421.jpg" alt="">
            <div v-for="(item, index) in topImg">
                <p>{{item.a}}</p>
                <p>{{item.b}}</p>
                <p>{{item.c}}</p>
            </div>
        </div>
        <!--  -->
        <div class="skirt">
            <ul>
                <router-link tag="li" v-for="(item, index) in topImgTwo" :to="item.e">
                    <img :src="item.a" alt="">
                    <p>{{item.b}}</p>
                    <p>{{item.c}}</p>
                    <p>{{item.d}}</p>
                    <i class="iconfont" v-html="item.icon"></i>
                </router-link>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: "topyears",
        components: {},
        props: {},
        data() {
            return {
                topImg: [
                    {
                        a: "TOP 100",
                        b: "一周人气排行榜",
                        c: "更多详情"
                    }
                ],
                topImgTwo: [
                    {
                        a: "http://img550.5lux.com.cn/2017/06/10/bc/149704973510_505x864_200x200.jpg",
                        b: "LPA",
                        c: "251 裙子",
                        d: "￥1471.00",
                        e: "/first",
                        icon: "&#xe618;"
                    },
                    {
                        a: "http://img550.5lux.com.cn/2017/06/10/ab/149704976488_505x864_200x200.jpg",
                        b: "LPA",
                        c: "251 裙子",
                        d: "￥1471.00",
                        e: "/first",
                        icon: "&#xe619;"
                    }, {
                        a: "http://img550.5lux.com.cn/2017/06/19/mn/149782698649_505x864_200x200.jpg",
                        b: "LPA",
                        c: "251 裙子",
                        d: "￥1471.00",
                        e: "/first",
                        icon: "&#xe61a;"
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
        height: 4.864rem;
        margin-bottom: 10px
    }

    .wrapper .top_img {
        width: 100%;
        height: 2.106rem;
        position: relative;

    }

    .wrapper .top_img img {
        width: 100%;
        height: 100%;
    }

    .wrapper .top_img div {
        width: 100%;
        height: 2.106rem;
        background: rgba(224, 240, 180, 0.247);
        position: absolute;
        top: 0;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center
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
    .wrapper .skirt {
        width: 100%;
        height: 2.758rem;
        background: gold
    }

    .wrapper .skirt ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .wrapper .skirt ul li {
        width: 1.2506rem;
        height: 2.76rem;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 22px;
        padding-right: 22px;
        position: relative;
    }

    .wrapper .skirt ul li:nth-child(3) {
        padding-left: 8px
    }

    .wrapper .skirt ul li img {
        width: 1.17rem;
        height: 2rem;
    }

    .wrapper .skirt ul li p {
        font-size: 12px;
        color: #333;
        text-align: center
    }

    .wrapper .skirt ul li p:nth-child(4) {
        color: #999
    }

    .wrapper .skirt ul li i {
        position: absolute;
        top: 12px;
        left: 18px;
        font-size: 27px;
        color: chocolate
    }

    .skirt ul li.router-link-active {
        opacity: 0.6;
    }
</style>