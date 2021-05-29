import { createStore } from 'vuex'

const store = createStore({
  state: () => ({
    authUser: null
  }),

  mutations: {
    setAuthUser (state, payload) {
      state.authUser = payload
    }
  },

  actions: {
    saveAuthUser({commit}, data) {
      commit('setAuthUser', data)
    }
  },
  
  getters: {},
})

export default store