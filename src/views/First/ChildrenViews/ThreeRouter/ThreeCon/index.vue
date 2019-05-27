<template>

    <div class="wrapper">
        <Lavende></Lavende>
    </div>

</template>

<script>
    import Lavende from './Lavende/index'
    //引入better-scroll

    export default {
        name: "threecon",
        components: {
            Lavende
        },
        props: {},
        data() {
            return {

            }
        },
        watch: {},
        computed: {},
        methods: {},
        created() { },

    }
</script>
<style scoped>
    .wrapper {
        width: 100%;
        height: 5.7914rem;
        position: absolute;
        overflow: auto;
        padding-left: 8px;
        padding-top: 8px;
        padding-right: 8px
    }
</style>