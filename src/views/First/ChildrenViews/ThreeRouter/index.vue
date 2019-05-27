<template>
        <div class="home">
            <NavOne></NavOne>
            <ThreeCon></ThreeCon>
        </div>
    </template>
    
    <script>
    import NavOne from './Nav/index'
    import ThreeCon from './ThreeCon/index'
        export default {
            name: 'threerouter',
            components: {
                NavOne,
                ThreeCon
            }
        }
    </script>