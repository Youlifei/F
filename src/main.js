import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from '@/common/header'
import Navb from '@/common/navb'
import Commodity from '@/common/commodity'
import TabBar from "@/common/tabbar"
import axios from "axios"


Vue.config.productionTip = false;
Vue.component("Header",Header);
Vue.component("Navb",Navb);
Vue.component("Commodity",Commodity);
Vue.component("TabBar",TabBar);

new Vue({
  router,
  store,
  axios,
  render: function (h) { return h(App) }
}).$mount('#app')
