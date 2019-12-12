import Server from '@/common/baseServer/index.js'
import utils from '@/common/baseServer/utils.js'
export default {
  state: {
    roles: [],
    Server: new Server(),
    loading: null,
    addOrUpdateFlag: false,
    self: null,
    permissions: [],
    utils: new utils()
  },
  actions: {
    GetRoleList({ state, commit }) {
      state.Server.queryAll('GkRole', {}, {}).then(function(result) {
        commit('GetRoleList', result)
      })
    },
    BatchSavePermission({ state, commit }, params) {
      state.loading = state.self.$loading({ fullscreen: true })
      state.Server.batchSave('RRoleFuncPermission', params).then(
        function() {
          commit('AddOrUpdateRole', { success: true })
        },
        e => {
          state.loading.close()
          state.self.$message({
            showClose: true,
            message: e,
            type: 'error'
          })
        }
      )
    },
    GetPermissionList({ state, commit }) {
      state.Server.queryAll('FuncPermission', {}, {}).then(function(result) {
        commit('GetPermissionList', result)
      })
    },
    DeleteRole({ state, commit }, item) {
      state.loading = state.self.$loading({ fullscreen: true })
      state.Server.batchDelete('GkRole', [item]).then(
        function() {
          commit('DeleteRole')
        },
        e => {
          state.loading.close()
          state.self.$message({
            showClose: true,
            message: e,
            type: 'error'
          })
        }
      )
    },
    AddOrUpdateRole({ state, commit }, params) {
      state.loading = state.self.$loading({ fullscreen: true })
      state.Server.addOrUpdate('GkRole', params, !state.addOrUpdateFlag).then(
        function(result) {
          commit('AddOrUpdateRole', result)
        },
        e => {
          state.loading.close()
          state.self.$message({
            showClose: true,
            message: e,
            type: 'error'
          })
        }
      )
    }
  },
  mutations: {
    defaultSelected() {
      let pagination = { currentPage: 1, pageSize: 10, isRefresh: true }
      this.commit('GetPersonList', pagination)
    },
    GetPersonList(state, pagination) {
      if (state.roles.length > 0) {
        if (pagination.isRefresh) {
          state.self.currentIndex = 0
          state.self.selectNode = state.roles[0]
          state.self.funcPermission()
        }
      } else {
        state.self.currentIndex = -1
        state.self.selectNode = {}
      }
    },
    GetPermissionList(state, result) {
      if (result != null) {
        state.permissions = state.utils.setTree(result.datas)
      }
    },
    GetRoleList(state, result) {
      if (result != null) {
        state.roles = result.datas
        this.commit('defaultSelected')
      }
    },
    DeleteRole(state) {
      state.loading.close()
      state.self.$message({
        showClose: true,
        message: '操作成功',
        type: 'success'
      })
      state.self.initializeRole()
    },
    AddOrUpdateRole(state, result) {
      state.loading.close()
      if (result.success) {
        state.self.isShow = false
        state.self.IsShowAddUser = false
        state.self.$message({
          showClose: true,
          message: '操作成功',
          type: 'success'
        })
        state.self.resetForm()
        state.self.initializeRole()
      }
    }
  }
}
