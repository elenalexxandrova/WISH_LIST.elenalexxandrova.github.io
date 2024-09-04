import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { MAIN_ROUTE_NAMES } from '../../../shared/router/routes'

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  router.beforeEach(async (to, from) => {
  
    if (to.path === '/') {
        return {name: MAIN_ROUTE_NAMES.ARM_REDIRECT}
    }
    //   next({ name: MAIN_ROUTE_NAMES.ARM_REDIRECT })

    // else { next() }
  })

  export default router