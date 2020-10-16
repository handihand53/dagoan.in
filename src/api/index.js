import config from '@/config'
import httpApi from '@/util/http-api'

export default {
  getData: (cb, data, err) => {
    httpApi.getDataViaApi(config.api.main.swapi(data.number), cb, err)
  }
}
