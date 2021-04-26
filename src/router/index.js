import { createRouter, createWebHistory, routerKey} from 'vue-router'

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
        path: '/',
        name: 'Home',
        component: () => import('@v/home/index.vue')
    }
]

const router = new Router({
    scrollBehavior: () => ({y : 0}),
    routes
})
export default routerKey;