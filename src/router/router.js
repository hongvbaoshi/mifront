import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'

const myRoutes = [
    {
        path: '/',
        name: '主页',
        meta: {
            title: '小米商城首页'
        },
        component: defineAsyncComponent(() => import('../components/home.vue')),
    },
    {
        path: '/about',
        name: 'about',
        component: defineAsyncComponent(() => import('@/views/AboutView.vue'))
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

router.beforeEach((to, from, next) => {
    next()
})

export default router