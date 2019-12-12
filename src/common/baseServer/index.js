import axiosServer from './axiosServer'

/**
 * @namespace
 * @author Chenjh
 * @classdesc 负责调用服务端restful接口，已集成进全局中，可直接vue.$Server直接调用
 */
const ExtendbaseServer = class base {
  constructor() {
    this.apiUrl = '/api'
    this.restUrl = '/'
  }
  /**
   * @desc 获取资源相关数据
   * @param {string} modelName - 获取资源名称.
   * @param {Object} page - 分页条件
   * @param {number} page.page - 当前所在页
   * @param {number} page.rowsPerPage - 每一页显示的数量
   * @param {Object} condition - 自定义搜索内容.
   * @returns {Promise}
   */
  queryObjectById(modelName, id) {
    let _url = this.apiUrl
    return new Promise(function(resolve, reject) {
      let url = _url + '/' + modelName + '/' + id
      axiosServer.http(url, 'GET', null, {
        success: response => {
          if (response.data.code == 200) {
            resolve(response)
          } else {
            reject(response.data.msg)
          }
        },
        error: error => {
          reject(error)
        }
      })
    })
  }
  /**
   * @desc 获取资源相关数据
   * @param {string} modelName - 获取资源名称.
   * @param {Object} page - 分页条件
   * @param {number} page.page - 当前所在页
   * @param {number} page.rowsPerPage - 每一页显示的数量
   * @param {Object} condition - 自定义搜索内容.
   * @returns {Promise}
   */
  queryAll(modelName, page, condition) {
    let _url = this.apiUrl
    let self = this
    let _condition = condition
      ? encodeURIComponent(JSON.stringify(condition))
      : ''
    return new Promise(function(resolve, reject) {
      let url =
        _url +
        '/' +
        modelName +
        '?condition=' +
        _condition +
        '&pageIndex=' +
        (page && Object.keys(page).length ? page.page : -1) +
        '&pageSize=' +
        (page && Object.keys(page).length ? page.rowsPerPage : -1)
      axiosServer.http(url, 'GET', null, {
        success: response => {
          if (response.data.code == 200) {
            resolve(self.formatQueryResponse(response))
          } else {
            reject(response.data.msg)
          }
        },
        error: error => {
          reject(error)
        }
      })
    })
  }

  /**
   * @desc 保存或新建资源
   * @param {string} modelName - 获取资源名称.
   * @param {Object} model - 待保存或新建的资源对象
   * @param {boolean} isUpdate - true 更新 | false 新建
   * @returns {Promise}
   */
  addOrUpdate(modelName, model, isUpdate) {
    let _url = this.apiUrl
    return new Promise(function(resolve, reject) {
      if (isUpdate) {
        axiosServer.http(
          _url + '/' + modelName + '?t=' + Date.now(),
          'PUT',
          model,
          {
            success: response => {
              if (response.data.code == 200) {
                resolve({ success: true, model: response.data.data })
              } else {
                reject(response.msg)
              }
            },
            error: error => {
              reject(error)
            }
          }
        )
      } else {
        axiosServer.http(
          _url + '/' + modelName + '?t=' + Date.now(),
          'POST',
          model,
          {
            success: response => {
              if (response.data.code == 200) {
                resolve({ success: true, model: response.data.data })
              } else {
                reject(response.msg)
              }
            },
            error: error => {
              reject(error)
            }
          }
        )
      }
    })
  }

  /**
   * @desc 删除资源
   * @param {string} modelName - 获取资源名称.
   * @param {Object} model - 待删除的资源对象
   * @returns {Promise}
   */
  delete(modelName, model) {
    let _url = this.apiUrl
    return new Promise(function(resolve, reject) {
      let url = _url + '/' + modelName + '/' + model.id + '?t=' + Date.now()
      axiosServer.http(url, 'DELETE', null, {
        success: response => {
          resolve({ success: !response.code })
        },
        error: error => {
          reject(error)
        }
      })
    })
  }

  /**
   * @desc 批量删除资源
   * @param {string} modelName - 获取资源名称.
   * @param {Object[]} models - 待删除的资源对象集合
   * @returns {Promise}
   */
  batchDelete(modelName, models) {
    return this.batchOpera(modelName, { deleteObjects: models })
  }

  /**
   * @desc 批量增加资源
   * @param {string} modelName - 获取资源名称.
   * @param {Object[]} models - 待增加的资源对象集合
   * @returns {Promise}
   */
  batchSave(modelName, models) {
    return this.batchOpera(modelName, { insertObjects: models })
  }

  /** 批量修改资源 */
  batchUpdate(modelName, models) {
    return this.batchOpera(modelName, { updateObjects: models })
  }

  //批量操作
  batchOpera(modelName, datas) {
    let _url = this.apiUrl
    return new Promise(function(resolve, reject) {
      axiosServer.http(_url + '/' + modelName + '/batch', 'POST', datas, {
        success: response => {
          if (response.data.code == 200) {
            resolve({ success: !response.code })
          } else {
            reject(response.msg)
          }
        },
        error: error => {
          reject(error)
        }
      })
    })
  }

  //导出
  exportFile(modelName, fileName, page, condition) {
    let _url = this.apiUrl
    let _condition = condition
      ? encodeURIComponent(JSON.stringify(condition))
      : ''
    return new Promise(function(resolve, reject) {
      let url =
        _url +
        '/' +
        modelName +
        '/exportFile?condition=' +
        _condition +
        '&pageIndex=' +
        (page && Object.keys(page).length ? page.page : -1) +
        '&pageSize=' +
        (page && Object.keys(page).length ? page.rowsPerPage : -1)
      axiosServer.http(url, 'GET', '', {
        success: response => {
          if (response.data.code == 200 && response.data.data.base64 != null) {
            let a = document.createElement('a')
            a.href = response.data.data.base64
            a.download = fileName
            a.click()
            //document.body.appendChild(document.createElement("a"))
            //window.location.href='data:application/vnd.ms-excel;base64,'+response.data.data.base64
            resolve({ success: !response.code })
          } else {
            reject(response.msg)
          }
        },
        error: error => {
          reject(error)
        }
      })
    })
  }

  //导入
  importFile(modelName, file) {
    let _url = this.apiUrl
    return new Promise(function(resolve, reject) {
      axiosServer.http(_url + '/' + modelName + '/importFile', 'POST', file, {
        success: response => {
          if (response.data.code == 200) {
            resolve({ success: !response.code, datas: response.data.data })
          } else {
            reject(response.msg)
          }
        },
        error: error => {
          reject(error)
        }
      })
    })
  }

  //解析查询返回的结果
  formatQueryResponse(reponse) {
    let { rows, index, size, total } = reponse.data.data
    return { datas: rows, page: { index, size, total } }
  }
}

export default ExtendbaseServer
