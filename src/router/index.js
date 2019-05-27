// 按模块的方式   重定向

import Vue from 'vue'
import Router from 'vue-router'
import home from "./home"
import my from './my'
import overseas from './overseas'
import reach from './reach'
import shopping from './shopping'
import seeks from './seeks'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    // 重定向
    {
        path:"/",
        redirect:"/shopping"
    },
    home,
    my,
    overseas,
    reach,
    shopping,
    seeks,
    {
      path:"**",// 当找不到页面时跳转到home页面
      redirext:"/shopping"
    }
  ]
})

