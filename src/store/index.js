import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state() {
    return {
      oro:0,
      user: null,
      arregloMusical:[],
    }
  },
  mutations: {
    setOro(state, payload) {
      state.oro += payload;
    },
    mutandoUser(state, usuario){
      return state.user = usuario;
   },
   setAgregloMusical(state, payload) {
    state.arregloMusical =[...state.arregloMusical,payload];
  },
  },
  getters: {
    enviandoUser(state){
      return state.user;
    },
  },
  actions: {
    aumentarOro({commit},cantidadOro){
      commit("setOro",cantidadOro);
    },
    dataUser({commit}, usuario){
      commit('mutandoUser', usuario);
   },
   agregarAgregloMusical({commit},instrumento){
    commit("setAgregloMusical",instrumento);
  },
  },

  modules: {
  }
})
