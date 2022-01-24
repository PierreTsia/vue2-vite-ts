import Vue from 'vue'
import VCA, { createApp, h } from '@vue/composition-api'
import router from './router'
import AddModules from './modules/index'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.use(VCA)

AddModules({ app: Vue, router })

Vue.config.productionTip = false

const app = createApp({
  router,
  vuetify,
  render: () => h(App),
})

app.mount('#app')
