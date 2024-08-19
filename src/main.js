import { createApp } from 'vue'
import { store } from './store/index.js'
import App from './App.vue'

import CustomButton from './components/ui/CustomButton.vue'

const app = createApp(App)

// Registro global do componente
app.component('CustomButton', CustomButton)

// Definindo Variaveis globais
app.config.globalProperties.$calcPrimaryColor = '#2E2F38'
app.config.globalProperties.$calcSecondaryColor = '#4E505F'
app.config.globalProperties.$calcTertiaryColor = '#4B5EFC'

app.use(store)
app.mount('#calc')
