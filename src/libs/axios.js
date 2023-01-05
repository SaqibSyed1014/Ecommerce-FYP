import Vue from 'vue'

// axios
import axios from 'axios'

const axiosIns = axios.create({
  baseURL: process.env.VUE_APP_API_URL || 'http://173.255.204.216:8003',
})

axiosIns.interceptors.request.use((request) => {
  // const token = localStorage.getItem('token')
  const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjQxOTEwNDc3LCJqdGkiOiJmZGIzZTQ4ZDgwMzU0NjMxYTg4OWQzNWVjODA5MDdhOCIsInVzZXJfaWQiOjI0LCJuYW1lIjoiZmFpemFuIHNhcmRhciJ9.G11uUurMXzctQNuZfxENKtvt-TGBLa6q-MWXD0xp3do'
  if (token) {
    // eslint-disable-next-line no-param-reassign
    request.headers.Authorization = `Bearer ${token}`
  }

  return request
})
const showNotification = (message) => {
  Vue.$bvToast.toast(message, {
    title: 'Error!',
    variant: 'danger',
    solid: true,
    autoHideDelay: 3000,
  })
}
axiosIns.interceptors.response.use(
  (response) => {
    if (
      localStorage.getItem('token') !== null
      && response
      && response.status === 401
    ) {
      localStorage.clear()
      window.location.reload()
    }
    return response
  },
  (error) => {
    if (
      error?.response?.status === 401
      && localStorage.getItem('token')
    ) {
      localStorage.clear()
      window.location.reload()
    } else {
      const errorArray = error?.response?.data?.error
        ? error.response.data.error
        : ''
      if (errorArray && errorArray.length) {
        const errorMessages = errorArray.join('\n')
        errorArray.forEach((text) => {
          showNotification(text)
        })
        return Promise.reject(errorMessages)
      }
    }
    return Promise.reject(error)
  },
)

Vue.prototype.$http = axiosIns
export default axiosIns
