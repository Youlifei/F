<template>
    <div class="wrapper">
        <ul>
            <router-link :to="item.path" tag="li" v-for="(item, index) in NavSize">
                {{item.a}}
            </router-link>
        </ul>

    </div>
</template>

<script>
    export default {
        name: "navone",
        components: {},
        props: {},
        data() {
            return {
                NavSize: [
                    {
                        a: "值得买",
                        path: "/first"

                    },
                    {
                        a: "直播",
                        path: "/first"

                    },
                    {
                        a: "视频",
                        path: "/first"

                    },
                    {
                        a: "活动",
                        path: "/thenew"

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
        height: 0.4rem;
        background: #333;

    }

    .wrapper ul {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center
    }

    .wrapper ul li {
        font-size: 15px;
        color: #fff
    }
</style>