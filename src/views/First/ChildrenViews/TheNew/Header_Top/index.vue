<template>
    <div id="headerOne">
        <div class="left" @click=fn()>
            <i class="iconfont">&#xe607;</i>
        </div>
        <div class="center">新款同步</div>
        <div class="right"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'headerOne',
        components: {

        },
        methods: {
            fn(){
                this.$router.push("/first")
            }
        },
    }
</script>
<style scoped>
    #headerOne {
        width: 100%;
        height: 0.44rem;
        display: flex;
        border-bottom: 1px solid #c4c4c4;
        position: fixed;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        z-index: 999;
        background: #fff
    }
    #headerOne .left{
        width: 0.52rem;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 20px
    }
    #headerOne .left i{
        font-size: 0.3rem;
        color: #999;

    }
    #headerOne .center{
        flex: 1;

        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        font-weight: 400
    }
    #headerOne .right{
        width: 0.52rem;
        height: 100%;

    }
</style>