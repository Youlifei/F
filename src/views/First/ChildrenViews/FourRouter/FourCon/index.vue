<template>
    <div class="wrapper">
        <Top2></Top2>
        <Adidas></Adidas>
    </div>
</template>

<script>
    import Top2 from './Top/index'
    import Adidas from './Adidas/index'
    export default {
        name: "fourcon",
        components: {
            Top2,
            Adidas
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
        mounted() { }
    }
</script>
<style scoped>
    .wrapper {
        width: 100%;
        height: 5.7914rem;
        position: fixed;
        overflow: auto;
        background: rgba(182, 191, 209, 0.116);
        top: 0.44rem;
    }
</style>