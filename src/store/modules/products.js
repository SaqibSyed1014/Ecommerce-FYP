import ProductsService from '@/services/ProductsService'

const getters = {
  getAllProducts: (state) => state.products,
  getAllCategories: (state) => state.category,
}
const getDefaultState = () => ({
  products: [],
  category: [],
})
const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products
  },
  SET_CATEGORIES(state, products) {
    state.category = products
  },
}

const state = getDefaultState()
const actions = {
  fetchProducts({ commit }) {
    return ProductsService.getProducts()
      .then((resp) => commit('SET_PRODUCTS', resp?.data))
      .catch((error) => console.error(error))
  },
  fetchPCategories({ commit }) {
    return ProductsService.getCategories()
      .then((resp) => commit('SET_CATEGORIES', resp?.data))
      .catch((error) => console.error(error))
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
}
