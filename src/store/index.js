import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      oro:0,
    }
  },
  mutations: {
    setOro(state, payload) {
      state.oro += payload;
    },
  },
  actions: {
    aumentarOro({commit},cantidadOro){
      commit("setOro",cantidadOro);
    }
  },
  modules: {
  }
})
