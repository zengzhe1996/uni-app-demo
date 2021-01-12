import Vue from 'vue'
import App from './App'
import MescrollBody from "@/components/mescroll-uni/mescroll-body.vue"

Vue.config.productionTip = false

App.mpType = 'app'
// 注册全局组件
Vue.component('mescroll-body', MescrollBody)

const app = new Vue({
    ...App
})
app.$mount()
