<template>
    <div class="wrapper">
        <div v-for="(item, index) in urlImg">
            <img :src="item.url" alt="">
            <div class="price">
                <h2>{{item.size}}</h2>
                <h3>{{item.sizetwo}}</h3>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "tide",
        components: {},
        props: {},
        data() {
            return {
                urlImg : [
                    {
                        url:"http://img550.5lux.com.cn/2017/07/07/qr/149940647718_750x320.jpg",
                        size:"全球潮流品牌",
                        sizetwo : "MORE BRANDS"

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
        height: 1.6rem;
        background: rebeccapurple;
        margin-top: 44px;
       
    }
    .wrapper div img{
        width: 100%;
        height: 1.6rem;
    }
  
    .wrapper div .price{
        position: relative;
    }
    .wrapper div .price h2{
        font-size: 18px;
        font-weight: 400;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -14.5%;
        color: aliceblue
    }
    .wrapper div .price h3{
        font-size: 24px;
        font-weight: 900;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -21.5%;
          color: aliceblue
    }
</style>