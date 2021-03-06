import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/',
        name: 'Home',
        component: Home,
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})



router.beforeEach((to, from, next) => {
    if (to.name === 'Login' && localStorage.getItem('token') !== null) {
        next({name: 'Home'})
    } else if (to.name === 'Register' && localStorage.getItem('token') !== null) {
        next({name: 'Home'})
    } else if (to.name === 'Home' && localStorage.getItem('token') === null) {
        next({name: 'Login'})
    } else next()
})



export default router
