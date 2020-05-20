import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/skills',
        name: 'Skills',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "skills" */ '../views/Skills.vue')
    },
    {
        path: '/work', // the path of the route
        name: 'Work', //the name of the component to easily refer to this route
        component: () =>
            import ( /* webpackChunkName: "work" */ '../views/Work.vue'), //this is the view-component you want to render when this internal link is clicked. 
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () =>
            import ( /* webpackChunkName: "contact" */ '../views/Contact.vue')
    }
]

const router = new VueRouter({
    routes
})

export default router