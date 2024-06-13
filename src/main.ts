import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createI18n } from 'vue-i18n'
import messagesEn from './assets/locales/en.ts'
import messagesFr from './assets/locales/fr.ts'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: { en: messagesEn, fr: messagesFr }
})

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
