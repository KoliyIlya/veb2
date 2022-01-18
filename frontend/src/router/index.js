import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home'
import authorization from "../components/authorization"
import product from "@/components/product"
import header from '@/components/header'
import main from '@/components/main'
import product_page from "@/components/product_page"
import footer from '@/components/footer'
import cart from "@/components/cart";

Vue.component('app-authorization', authorization)
Vue.component('app-product', product)
Vue.component('app-header', header)
Vue.component('app-main', main)
Vue.component('app-product_page', product_page)
Vue.component('app-footer', footer)
Vue.component('app-cart', cart)
Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        components: {
            default: Home
        },
        meta: {
            requiredAuth: true
        }
    },
    {
        path: '/authorization',
        name: 'authorization',
        components: {
            default: authorization
        },
    },
    {
        path: '/product_page/:id',
        name: 'product_page',
        components: {
            default: product_page
        }
    },
    {
        path: '/product',
        name: 'product',
        components: {
            default: product
        }
    },
    {
        path: '/main',
        name: 'main',
        components: {
            default: main
        }
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
