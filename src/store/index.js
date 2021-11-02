import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, user){
      state.user = user;
    },

  },
  actions: {
  },
  modules: {
  },

  getters: {
    isLoggedIn(state){
      return !!state.user;
    },

    getUser(state) {
      return state.user;
    }
  },
})
