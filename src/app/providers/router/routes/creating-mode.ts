import type { RouteRecordRaw } from 'vue-router'
import { CREATING_MODE_ROUTE_NAMES } from '../../../../shared/router/routes'
import MainPage from '../../../../pages/CreatingMode/Main/ui/MainPage.vue'
import ForYouPage from '../../../../pages/CreatingMode/FYP/ui/ForYouPage.vue'
import UserPage from '../../../../pages/CreatingMode/User/ui/UserPage.vue'

export const CREATING_MODE_ROUTES: RouteRecordRaw[] = [
    {
        path: '/main-creating-mode',
        name: CREATING_MODE_ROUTE_NAMES.MAIN,
        redirect: '/main-creating-mode/for-you-page',
        component: MainPage,
        children: [
            {
                path: '/main-creating-mode/for-you-page',
                name: CREATING_MODE_ROUTE_NAMES.FYP,
                component: ForYouPage,
            },
            // {
            //     path: 'main-creating-mode/for-you-page/wish-item-detail/:id',
            //     name: CREATING_MODE_ROUTE_NAMES.WISH_ITEM_DETAIL,
            //     component: FYPDetail,
            //     meta: {
            //         sourcePage: {
            //             label: 'Wish ideas for you',
            //             routeName: CREATING_MODE_ROUTE_NAMES.FYP,
            //             currentRouteName: CREATING_MODE_ROUTE_NAMES.WISH_ITEM_DETAIL,
            //         },
            //     },
            // },

            {
                path:  '/main-creating-mode/user-page',
                name: CREATING_MODE_ROUTE_NAMES.USER_PAGE,
                component: UserPage,
            },
        ]

    },
]