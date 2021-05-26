import { createRouter, createWebHistory, createWebHashHistory} from 'vue-router'

export const routes = [
    {
        path: '/404',
        name: '404',
        component: () => import('@v/error/404.vue')
    },
    {
        path: '/401',
        name: '401',
        component: () => import('@v/error/401.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('@v/login/index.vue')
    },
    {
        path: '/',
        name: 'ma',
        component: () => import('@v/login/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    scrollBehavior: () => ({y : 0}),
    routes
})
export default router;