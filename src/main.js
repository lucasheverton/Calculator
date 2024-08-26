import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'

import { store } from './store/index.js'
import { en_us } from './locales/en_us.js'
import { es_es } from './locales/es_es.js'
import { pt_br } from './locales/pt_br.js'

import App from './App.vue'
import CustomButton from './components/ui/CustomButton.vue'

const app = createApp(App)

// Configuração de tradução

const languages = { en_us,  es_es,  pt_br }

const i18n = createI18n({
  locale: 'en_us',
  fallbackLocale: 'en_us',
  messages: languages,
})

// Registro global do componente
app.component('CustomButton', CustomButton)

// Definindo Variaveis globais
app.config.globalProperties.$calcPrimaryColor = '#2E2F38'
app.config.globalProperties.$calcSecondaryColor = '#4E505F'
app.config.globalProperties.$calcTertiaryColor = '#4B5EFC'

app.use(i18n)
app.use(store)
app.mount('#calc')
