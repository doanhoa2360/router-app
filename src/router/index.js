import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home'
import Product from '../components/Product'
import About from '../components/About'

const routes = [
    {path: '/', component: Home },
    {path: '/product', component: Product },
    {path: '/about', component: About },

]  
const router = createRouter({
    history: createWebHistory(),
    routes:routes
})

export default router