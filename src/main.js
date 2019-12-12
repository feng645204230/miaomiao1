import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/element-variables.scss'
import '@/assets/css/common.css'


Vue.use(ElementUI)
Vue.config.productionTip = false
// 是不是需要权限配置 默认是需要
let OperationPermission = true
//全局权限控制
Vue.prototype.$per = (...j) => {
  if (OperationPermission) {
    let [resource, method] = j
    if (sessionStorage.getItem('permission')) {
      let pers = JSON.parse(sessionStorage.getItem('permission'))
      if (method == '菜单') {
        return pers.findIndex(m => m.funcValue == '/api/' + resource) != -1
      } else if (method == '导出') {
        return pers.findIndex(
          m =>
            m.funcValue == '/api/' + resource + '/Excel' && m.funcName == '导出'
        )
      } else {
        let per = pers.findIndex(
          m => m.funcValue == '/api/' + resource && m.funcName == method
        )
        return per != -1
      }
    }
  } else {
    return j != null
  }
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
