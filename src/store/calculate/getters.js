export default {
  getExpression(state) {
    return state.expression
  },
  getExpressionLegth(state) {
    return state.expression.length
  },
  getResultPreview(state) {
    return state.resultPreview
  },
  getResultPreviewLength(state) {
    return state.resultPreview.length
  },
  getCount(state) {
    return state.count
  }
}
