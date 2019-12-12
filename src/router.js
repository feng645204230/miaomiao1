import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/login.vue'
import Layout from './views/layout.vue'
import Role from './views/zhzg/role/role.vue'
import Home from './views/home.vue'
import OperateLog from './views/zhzg/operatelog/operatelog.vue'
import Datadict from './views/zhzg/datadict/datadict.vue'
import User from './views/zhzg/user/user.vue'
import Organization from './views/zhzg/organization/organization.vue'
import FileManage from './views/zhzg/manage/fileManage.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '/',
      component: Login
    },
    {
      path: '/main',
      name: 'layout',
      component: Layout,
      children : [
        {
          path: '/',
          name: 'home',
          component: Home,
        },
        {
        path: '/role',
        name: 'role',
        component: Role,
      },
      {
        path: '/operateLog',
        name: 'operateLog',
        component: OperateLog
      },
      {
        path: '/datadict',
        name: 'datadict',
        component: Datadict
      },
      {
        path: '/user',
        name: 'user',
        component: User
      },
      {
        path: '/organization',
        name: 'organization',
        component: Organization
      },
      {
        path: '/fileManage',
        name: 'fileManage',
        component: FileManage
      }
    ]
    }
    
    
  ]
})
