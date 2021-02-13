import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    type: '0'
  },
  mutations: {
    updateType (state, payload) {
      state.type = payload.type
    }
  }
})

export default store