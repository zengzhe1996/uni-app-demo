import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"

Vue.config.productionTip = false

App.mpType = 'app'
// 注册全局组件
Vue.component('mescroll-body', MescrollBody)
// 注册插件
Vue.use(uView);

const app = new Vue({
    ...App
})
app.$mount()
