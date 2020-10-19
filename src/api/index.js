import config from '@/config'
import httpApi from '@/util/http-api'
import Vue from 'vue'

const endpoint = 'http://localhost:5000'

export default {
  getData: (cb, data, err) => {
    httpApi.getDataViaApi(config.api.main.swapi(data.number), cb, err)
  },
  getConnectedClients () {
    return Vue.http.get(`${endpoint}/clients`)
  }
}
