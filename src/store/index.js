import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  getters: {
    enviandoUser(state){
      return state.user;
    },
  },
  mutations: {
    mutandoUser(state, usuario){
      return state.user = usuario;
   },
  },
  actions: {

    dataUser({commit}, usuario){
      commit('mutandoUser', usuario);
},
  },
 
})
