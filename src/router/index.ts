import {createRouter, createWebHistory} from '@ionic/vue-router';
import {RouteRecordRaw} from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: () => import('@/views/WelcomePage.vue'),
        name: 'WelcomePage'
    },
    {
        path: '/login',
        component: () => import('@/views/LoginPage.vue'),
        name: 'LoginPage'
    },
    {
        path: '/register',
        component: () => import('@/views/RegisterPage.vue'),
        name: 'RegisterPage'
    },
    {
        path:'/add-dream',
        component: () => import('@/views/AddDreamPage.vue'),
        name: 'AddDreamPage'
    },
    {
        path: '/tabs/',
        component: TabsPage,
        children: [

            {
                path: 'tab1',
                component: () => import('@/views/Tab1Page.vue')
            },
            {
                path: 'tab2',
                component: () => import('@/views/Tab2Page.vue')
            },
            {
                path: 'tab3',
                component: () => import('@/views/Tab3Page.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default router
