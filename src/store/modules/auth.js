import AuthService from '@/services/AuthService'
import router from '@/router'

const getters = {
  isAuthenticated: (state) => state.token || !!localStorage.getItem('token'),
  getUser: (state) => state.user || {},
}
const getDefaultState = () => ({
  token: localStorage.getItem('token') || null,
  user: JSON.parse(localStorage.getItem('user')) || {},
})
const mutations = {
  SET_USER_ROLES(state, roles) {
    if (!state.user) state.user = {}
    state.user.roles = roles
  },
  SET_TOKEN(state, data) {
    state.token = data
    localStorage.setItem('token', data)
  },
  SET_USER(state, user) {
    state.user = user
    localStorage.setItem('userData', JSON.stringify(user))
  },
  SET_AUTH_ERRORS(state, errors) {
    state.errors = errors
  },
  RESET_AUTH_STATE(state) {
    Object.assign(state, getDefaultState())
    localStorage.clear()
  },
}

const state = getDefaultState()
const actions = {
  registerUser({ commit }, payload) {
    console.log('pay ', payload)
    return AuthService.register(payload)
      .then((resp) => {
        console.log(resp)
        commit('SET_USER', resp?.data)
        router.push({ name: 'auth-login' })
      })
      .catch((error) => {
        console.error(error)
      })
  },
  login({ dispatch, commit }, payload) {
    return AuthService.login(payload)
      .then(async ({ data }) => {
        commit('SET_TOKEN', data?.access)
        await dispatch('fetchUser')
        await router.push({ name: 'all-products' })
      })
      .catch((error) => {
        console.error(error)
      })
  },
  fetchUser({ commit }) {
    return AuthService.fetchUser()
      .then(({ data }) => {
        commit('SET_USER', data)
      })
      .catch((error) => Promise.reject(error))
  },
  forgetPassword(vuexContext, payload) {
    return AuthService.forgetPassword(payload)
      .then((data) => Promise.reject(data))
      .catch((error) => Promise.reject(error))
  },
  logout({ commit }) {
    commit('RESET_AUTH_STATE')
    return AuthService.logout()
      .then((data) => Promise.reject(data))
      .catch((error) => Promise.reject(error))
  },
}

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
}
