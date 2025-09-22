import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import messagesEn from './assets/locales/en'
import messagesFr from './assets/locales/fr'

const detectLanguage = (): string => {
  const savedLang = localStorage.getItem('preferred-language')
  if (savedLang && ['en', 'fr'].includes(savedLang)) {
    return savedLang
  } else if (navigator.language.startsWith('fr')) {
    return 'fr'
  } else {
    return 'en'
  }
}

const i18n = createI18n({
  legacy: false,
  locale: detectLanguage(),
  fallbackLocale: 'en',
  messages: { en: messagesEn, fr: messagesFr }
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
