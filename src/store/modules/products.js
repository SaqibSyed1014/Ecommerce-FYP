import ProductsService from '@/services/ProductsService'

const getters = {
  getAllProducts: (state) => state.products,
  getUser: (state) => state.user || {},
}
const getDefaultState = () => ({
  products: [],
})
const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
}

const state = getDefaultState()
const actions = {
  fetchProducts({ commit }) {
    return ProductsService.getProducts()
      .then((resp) => {
        console.log(resp)
        commit('SET_PRODUCTS', resp?.data)
      })
      .catch((error) => {
        console.error(error)
      })
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
}
