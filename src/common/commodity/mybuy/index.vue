<template>
    <div id="mybuy">
        <Fashion></Fashion>
        <Fashion></Fashion>
        <Fashion></Fashion>
        <Fashion></Fashion>
        <Fashion></Fashion>
        <Fashion></Fashion>
    </div>
</template>
<script>
    import Fashion from "@/common/commodity/mybuy/fashion"
    export default{
        name:"mybuy",
        components:{
            Fashion
        }
    }
</script>
<style>
    #mybuy{
        width:100%;
        overflow:hidden;
        display:flex;
        flex:1;
        flex-direction: column;
    }
</style>