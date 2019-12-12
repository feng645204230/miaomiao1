import axios from 'axios'
import { config,ip } from '@/common/config'

export default {
  http(url, method, params, events) {
    let Authorization = sessionStorage.getItem('token')
    if (!Authorization) {
      window.location.href = config.LoginUrl
      return false
    }
    
    let headers = { Authorization },
      axiosConfig = {url:(ip + url), method, data: params, headers }
    axios(axiosConfig)
      .then(response => {
        if (response.data.code == 200) {
          events.success(response)
        } else if (response.data.code == 401) {
          events.success(response)
          window.location.href = config.LoginUrl
          return false
        } else {
          events.error(response.data.msg)
        }
      })
      .catch(function(error) {
        events.error(error)
      })
  },

  thttp(url, method, params, events) {
    let Authorization = sessionStorage.getItem('token')
    let headers = { Authorization },
      axiosConfig = { url, method, params, headers }
    axios(axiosConfig)
      .then(response => {
        events.success(response)
      })
      .catch(function(error) {
        events.error(error)
      })
  }
}
