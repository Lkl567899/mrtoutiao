import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker' //发布时用到
import router from './router'
import store from './store'
import Vant from 'vant' //引入vant组件库
import 'vant/lib/index.css' //引入vant组件库
import './styles/index.less'
import 'amfe-flexible' //引入rem转换

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
