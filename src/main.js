// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import 'styles/border.css'
import 'styles/reset.css'
import 'styles/iconfont.css'

Vue.config.productionTip = false

/* 使用fastClick */
fastClick.attach(document.body)
/* 入口文件 根实例 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App }, /* es6 语法 { App :App} */
  template: '<App/>'
})
