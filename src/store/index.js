import { createStore } from "vuex"

import calculateModule from './calculate/state'

export const store = createStore({
  modules: {
    calculate: calculateModule
  },

  state() {
    return {
      authenticated: false
    }
  },
})
