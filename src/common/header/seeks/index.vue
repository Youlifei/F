<template>
    <div id="seeksa">
        
        <Netsearch></Netsearch>
        <Content></Content>
    </div>
</template>

<script>
    import Netsearch from "@/common/header/seeks/netsearch"
    import Content from "@/common/header/seeks/content"
    export default{
        name:"seeks",
        components:{
            Netsearch,
            Content
        }
    }
</script>
<style>
    /* #seeksa{
        overflow:hidden;
        display:flex;
        flex-direction: column;
    } */
   
</style>