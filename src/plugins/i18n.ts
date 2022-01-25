import VueI18n from 'vue-i18n'
import Vue from 'vue'
import { createI18n } from 'vue-i18n-composable'
import locales from './../locales'

Vue.use(VueI18n)

const i18n = createI18n({
  locale: 'fr',
  messages: locales,
})

export default i18n
