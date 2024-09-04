import type { RouteRecordRaw } from 'vue-router'
import {CREATING_MODE_ROUTES} from './routes/creating-mode'
import { MAIN_ROUTE_NAMES } from '../../../shared/router/routes'

const additionalRoutes: RouteRecordRaw[] = [
    ...CREATING_MODE_ROUTES,
]

const routes: readonly RouteRecordRaw[] = [
    {
        path: '/arm-redirect',
        name: MAIN_ROUTE_NAMES.ARM_REDIRECT,
        component: () => import('../../../pages/ArmRedirect'),
    },

    ...additionalRoutes,
]

export default routes
