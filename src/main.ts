import Vue from 'vue'
import VCA, { createApp, h } from '@vue/composition-api'
import router from './router'
import AddModules from './modules/index'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import i18n from './plugins/i18n'

Vue.use(VCA)

AddModules({ app: Vue, router })

Vue.config.productionTip = false

const app = createApp({
  router,
  vuetify,
  i18n,
  render: () => h(App),
})

app.mount('#app')
