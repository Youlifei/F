<template>
    <div class="wrapper">
        <ul>
            <router-link :to="item.path" tag="li" v-for="(item, index) in variety">
                <img :src="item.url" alt="">
            </router-link>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "varirty",
        components: {},
        props: {},
        data() {
            return {
                variety: [
                    {
                        url: "http://img550.5lux.com.cn/2017/04/28/uv/149334288666_374x374.jpg",
                        path: "/first"
                    },
                    {
                        url: "http://img550.5lux.com.cn/2017/04/28/hi/149334288588_374x374.jpg",
                        path: "/first"
                    },
                    {
                        url: "http://img550.5lux.com.cn/2017/04/28/ef/149334288581_374x374.jpg",
                        path: "/first"
                    },
                    {
                        url: "http://img550.5lux.com.cn/2017/04/28/de/149334288518_374x374.jpg",
                        path: "/first"
                    },{
                        url: "http://img550.5lux.com.cn/2017/04/28/wx/149334288763_374x374.jpg",
                        path: "/first"
                    },
                    {
                        url: "http://img550.5lux.com.cn/2017/04/28/uv/149334288666_374x374.jpg",
                        path: "/first"
                    },
                    {
                        url: "http://img550.5lux.com.cn/2017/04/28/uv/149334288666_374x374.jpg",
                        path: "/first"
                    },
                    {
                        url: "http://img550.5lux.com.cn/2017/04/28/uv/149334288666_374x374.jpg",
                        path: "/first"
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
        height: 7.8rem;
      
    }
    .wrapper ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
       
    }
    .wrapper ul li{
       margin-bottom: 0.5px
    } 
    .wrapper li img {
        width: 1.872rem;
        height: 1.872rem
    }
</style>