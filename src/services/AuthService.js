import axios from '@axios'

const basePath = 'http://13.50.247.255:8000/auth'
export default {
  /**
   *  Accepts User details to register a user
   * @param {*} payload
   */
  register(payload) {
    return axios.post(`${basePath}/create_buyer/`, payload)
  },
  /**
   *  Accepts credentials of user and post to server
   * @param {*} payload
   */
  login(payload) {
    return axios.post(`${basePath}/login/`, payload)
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
    return axios.get(`${basePath}/me/`)
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
