<template>
    <div class="home">
        <HeaderTop></HeaderTop>
        <FourCon></FourCon>
    </div>
</template>

<script>
    import HeaderTop from './HeaderTop/index'
    import FourCon from './FourCon/index'
    export default {
        name: 'fourrouter',
        components: {
            HeaderTop,
            FourCon
        }
    }
</script>