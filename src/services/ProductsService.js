import axios from '@axios'

const basePath = 'http://13.50.247.255:8000/auth'
export default {
  getProducts(payload) {
    return axios.get(`${basePath}/category/product/`, payload)
  },
}
