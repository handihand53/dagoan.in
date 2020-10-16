export default {
  api: {
    base_path: '',
    main: {
      home (promoName) {
        return `/backend/content/promotions/${promoName}/parameters`
      },
      swapi (number) {
        console.log(number)

        // return `https://swapi.dev/api/people/${number}`
        return `api/v1/employee/${number}`
        // return `api/films/${number}`
        // return `https://run.mocky.io/v3/12869b47-9508-4ebf-b9a0-178c947b772d`
      }
    }
  },
  getApiPath: function (apiPath) {
    return this.api.base_path + apiPath
  }
}
