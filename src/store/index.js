import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './modules/app'
import appConfig from './modules/app-config'
import verticalMenu from './modules/vertical-menu'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    auth,
    appConfig,
    verticalMenu,
  },
  strict: process.env.DEV,
})
