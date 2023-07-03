
// 导入vue
import Vue from 'vue'

// 导入App组件
import App from './App.vue'

// import {hunhe2} from './mixin'

Vue.config.productionTip = false

// Vue.mixin(hunhe2)

new Vue({
  render:h => h(App)
}).$mount("#app")