import { createRouter, createWebHistory } from "vue-router";

import Home from '../components/Home'
import Product from '../components/Product'
import About from '../components/About'
import Content from '../components/Content'
import UserDetail from '../components/UserDetail'
import Itemz from '../components/Itemz'
import Hometwo from '../components/Hometwo'
import Item1 from '../components/Item1'
import Item2 from '../components/Item2'

const routes = [
    { path: '/', component: Home ,
children:[
 { path: 'item1', component: Item1 },
 { path: 'item2', component: Item2 },
]
},
    { path: '/:id', component: Hometwo },
    {path: '/product', component: Product },
    { path: '/product/:id', component: UserDetail },
    { path: '/about', component: About,
children:[
    {path: 'content',name:'content', component: Content},
    {path: 'content/:id',name:'itemz', component: Itemz},
]},


]
const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router