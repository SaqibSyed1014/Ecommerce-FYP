import axios from '@axios'

const basePath = 'http://13.51.162.13'
export default {
  getProducts() {
    return axios.get(`${basePath}/category/product/`)
  },
  getCategories() {
    return axios.get(`${basePath}/category`)
  },
}
