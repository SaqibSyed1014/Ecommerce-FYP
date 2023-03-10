import axios from '@axios'

const basePath = '/auth'
export default {
  /**
   *  Accepts User details to register a user
   * @param {*} payload
   */
  register(payload) {
    return axios.post(`${basePath}/register`, payload)
  },
  /**
   *  Accepts credentials of user and post to server
   * @param {*} payload
   */
  login(payload) {
    return axios.post('token/', payload)
  },
  /**
   *  Used to remove session of user from server
   */
  logout() {
    return axios.get(`${basePath}/logout`)
  },
  /**
   *  Used to remove session of user from server
   */
  fetchUser() {
    return axios.get('/user')
  },
  /**
   *  Initiate Forget password
   */
  forgetPassword(payload) {
    return axios.post(`${basePath}/forget-password`, payload)
  },
  /**
   *  Reset password
   */
  resetPassword(payload) {
    return axios.post(`${basePath}/forget-password/confirm`, payload)
  },
}
