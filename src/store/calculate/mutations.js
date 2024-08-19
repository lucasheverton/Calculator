export default {
  setAddExpression(state, payload) {
    state.expression += payload
  },
  setExpression(state, payload) {
    state.expression = payload
  },
  setDeleteLastKey(state) {
    state.expression = state.expression.slice(0, -1)
  },
  clearExpression(state) {
    state.expression = ''
  },
  setAddResultPreview(state, payload) {
    state.resultPreview += payload
  },
  setResultPreview(state, payload) {
    state.resultPreview = payload
  },
  resetAllExpresion(state) {
    state.expression = ''
    state.resultPreview = ''
  },
  setCount(state, payload) {
    state.count = {
      ...state.count,
      ...payload
    }
  },
  clearCount(state) {
    state.count = {
      parameterOne: null,
      signal: null,
      parameterTwo: null,
      result: null
    }
  }
}
