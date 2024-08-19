import CalculateModuleGetters from './getters'
import CalculateModuleActions from './actions'
import CalculateModuleMutations from './mutations'


export default {
  namespaced: true,
  state () {
    return {
      expression: '',
      resultPreview: '',
      count: {
        parameterOne: null,
        signal: null,
        parameterTwo: null,
        result: null
      }
    }
  },

  getters: CalculateModuleGetters,
  actions: CalculateModuleActions,
  mutations: CalculateModuleMutations
}
