import AuthService from '@/services/AuthService'
import router from '@/router'

const getters = {
  isAuthenticated: (state) => state.token || !!localStorage.getItem('token'),
  getUser: (state) => state.user || {},
}
const getDefaultState = () => ({
  token: null,
  user: {},
})
const mutations = {
  SET_USER_ROLES(state, roles) {
    if (!state.user) state.user = {}
    state.user.roles = roles
  },
  SET_TOKEN(state, data) {
    state.token = data.token
    localStorage.setItem('token', data.token)
  },
  SET_USER(state, user) {
    state.user = user
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
  login(vuexContext, payload) {
    return AuthService.login(payload)
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error(error)
      })
  },
  fetchUser() {
    return AuthService.fetchUser()
      .then((data) => Promise.reject(data))
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
