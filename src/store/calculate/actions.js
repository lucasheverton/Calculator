export default {
  setAddExpression({ commit }, payload) {
    commit('setAddExpression', payload)
  },
  setExpression({ commit }, payload) {
    commit('setExpression', payload)
  },
  setDeleteLastKey({ commit }){
    commit('setDeleteLastKey')
  },
  clearExpression({ commit }) {
    commit('clearExpression')
  },
  setAddResultPreview({ commit }, payload) {
    commit('setAddResultPreview', payload)
  },
  setResultPreview ({ commit }, payload) {
    commit('setResultPreview', payload)
  },
  resetAllExpresion({ commit }) {
    commit('resetAllExpresion')
  },
  setCount({ commit }, payload) {
    commit('setCount', payload)
  },
  clearCount({ commit }) {
    commit('clearCount')
  }
}
