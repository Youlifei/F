<template>
    <div class="slowORstyle">
        <ul>
            <li v-for="(item,index) in slowImg">
                <img :src="item.url" alt="">
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
    name : "sloworstyle",
  data() {
    return {
        slowImg : [
            {
                url : "http://img550.5lux.com.cn/2017/03/31/ij/149095371483_170x170.jpg"
            },
            {
                url : "http://img550.5lux.com.cn/2017/03/31/qr/149095371397_170x170.jpg"
            },
            {
                url : "http://img550.5lux.com.cn/2017/03/31/np/149095371411_170x170.jpg"
            },
            {
                url : "http://img550.5lux.com.cn/2017/03/31/rs/149095371490_170x170.jpg"
            }
        ]
    }
  },
  components: {

  }
}
</script>

<style scoped>
    .slowORstyle{
        width: 100%;
        height: 1.048rem;
        background: #fff;
        padding-top: 10px;
        margin-bottom: 10px;
    }
    .slowORstyle ul{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content:space-around;
    }
    .slowORstyle ul li img{
        width: 0.8505rem;
        height: 0.8505rem;
    }
</style>
