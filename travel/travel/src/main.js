// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 把VueAwesomeSwiper轮播图插件与Vue绑定起来，并且让它在全局也可以使用
import VueAwesomeSwiper from 'vue-awesome-swiper'
// require styles
import 'swiper/dist/css/swiper.css'

// 把数据仓库引进来
import store from './store'

// 解决移动端点击延迟300毫秒
import fastClick from 'fastclick'
// 初始化css
import './assets/styles/reset.css'

// 手机1像素边框解决方案

import './assets/styles/border.css'

// 会给手机浏览器添加es6cnp新语法
import 'babel-polyfill'
// 把字体文件的设置css引入
import './assets/styles/iconfont.css'
// 把轮播插件与Vue链接上
Vue.use(VueAwesomeSwiper)
// 解决移动端点击延迟300毫秒:npm 安装 fastclick
fastClick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})
