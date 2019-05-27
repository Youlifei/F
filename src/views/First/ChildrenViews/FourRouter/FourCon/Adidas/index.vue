<template>
    <div class="wrapper2">
        <div class="womenImg" v-for="(item, index) in woMen">
            <img :src="item.url" alt="">
            <span>
                <img src="@/assets/images/index2.png" alt="">
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "adidas",
        components: {},
        props: {},
        data() {
            return {
                woMen:[
                    {
                        url : "http://img550.5lux.com.cn/2019/05/21/bc/155840139834_750x456.jpg"
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
    .wrapper2 {
        width: 100%;
        height: 2.908rem;
        background: yellow;
        display: flex;
        flex-direction: column
    }
    .wrapper2 .womenImg{
        width: 100%;
        height: 2.28rem;
        background: blue;
        position: relative;
    }
    .wrapper2 .womenImg img{
        width: 100%;
        height: 100%;
    }
    .wrapper2 .womenImg span img{
        width: 0.6rem;
        height: 0.22rem;
        position: absolute;
        top: 8px;
        left: 8px
    }
</style>