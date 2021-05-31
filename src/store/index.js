import { createStore } from 'vuex'

import createPersistedState from 'vuex-persistedstate'

const store = createStore({
  state: () => ({
    authUser: null
  }),

  plugins: [createPersistedState()],

  mutations: {
    setAuthUser (state, payload) {
      state.authUser = payload
    },
    setAuthUserNull (state, payload) {
      state.authUser = null
    }
  },

  actions: {
    saveAuthUser({ commit }, data) {
      commit('setAuthUser', data)
    },
    authUserNull({ commit }) {
      commit('setAuthUserNull')
    }
  },
  
  getters: {},
})

export default store