import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToEdit: null,
    id: ''
  },
  mutatios: {
    setId (state) {
      state.idToEdit = state.id
    }
  },
  actions: {
    setId (context) {
      context.commit('setId')
    }
  },
  getters: {
    getId (state) {
      return state.id
    }
  }
})
