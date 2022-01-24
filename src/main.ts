import Vue from 'vue'
import VCA, { createApp, h } from '@vue/composition-api'
import router from './router'
import AddModules from './modules/index'
import App from './App.vue'
import vuetify from './plugins/vuetify'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

Vue.use(VCA)

AddModules({ app: Vue, router })

Vue.config.productionTip = false

const app = createApp({
  router,
  vuetify,
  render: () => h(App),
})

app.mount('#app')
