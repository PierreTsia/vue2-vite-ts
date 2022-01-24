import { VueConstructor } from 'vue'
import Router from 'vue-router'
import GlobalComponents from './global-components'
import UsePlugins from './use-plugins'

export interface ModuleProp {
  app: VueConstructor
  router: Router
}

export default ({ app }: ModuleProp) => {
  GlobalComponents(app)
  UsePlugins(app)
}
