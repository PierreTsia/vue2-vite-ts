/* eslint-disable @typescript-eslint/no-unused-vars */
import Vue from 'vue'
import Vuetify from 'vuetify'
import { config } from '@vue/test-utils'
import VueCompositionAPI from '@vue/composition-api'
import VueRouter from 'vue-router'

Vue.use(VueCompositionAPI)
Vue.use(Vuetify)
Vue.use(VueRouter)

config.mocks.$t = (key: string, values?: unknown | (string | number | boolean | Date)[]) => {
  return key
}
