import { VueConstructor } from 'vue'
import Router from 'vue-router'
import GlobalComponents from './global-components'

export interface ModuleProp {
  app: VueConstructor
  router: Router
}

export default ({ app }: ModuleProp) => {
  GlobalComponents(app)
}
