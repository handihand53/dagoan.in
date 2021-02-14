import axios from 'axios'
import config from '@/config'
import Vue from 'vue'
import Cookie from 'vue-cookie'

axios.defaults.headers.common['Authorization'] = 'Bearer ' + Cookie.get('dataToken')

axios.interceptors.response.use(
  // do nothing
  res => res,
  defaultErrorHandler
)

const SYSTEM_BUSY_CODES = [429, 503]
export function defaultErrorHandler (error) {
  const response = error.response
  // handle busy
  if (SYSTEM_BUSY_CODES.indexOf(response.status) > -1) {
    Vue.prototype.$toast.open({
      duration: 5e3,
      message: 'You’ve made too many attempts in a short time. Please try again later.'
    })
  }
  return Promise.reject(error)
}

function dataAdapter (fn) {
  // eslint-disable-next-line standard/no-callback-literal
  return (res) => {
    const response = res.response || res
    fn && fn({
      status: response.status,
      statusText: response.status,
      body: response.data,
      headers: response.headers || (res.config && res.config.headers) || {},
      originalResponse: res
    })
  }
}

export default {
  getDataViaApi (path, cb, errorHandler, headerParams = {}) {
    const headerObject = {
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
    axios.get(config.getApiPath(path), {
      headers: { ...headerObject, ...headerParams }
    })
      .then(dataAdapter(cb))
      .catch(dataAdapter(errorHandler))
  },

  postDataViaApi (path, cb, data, errorHandler, headerParams = {}) {
    const headerObject = {
      'Cache-Control': 'no-cache',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    }
    axios.post(config.getApiPath(path), data, {
      headers: { ...headerObject, ...headerParams }
    })
      .then(dataAdapter(cb))
      .catch(dataAdapter(errorHandler))
  },

  deleteDataViaApi (path, cb, data, errorHandler) {
    axios.delete(config.getApiPath(path), data)
      .then(dataAdapter(cb))
      .catch(dataAdapter(errorHandler))
  },

  putDataViaApi (path, cb, data, errorHandler) {
    axios.put(config.getApiPath(path), data)
      .then(dataAdapter(cb))
      .catch(dataAdapter(errorHandler))
  },
  defaultErrorHandler
}
