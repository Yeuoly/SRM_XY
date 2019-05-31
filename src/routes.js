import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    routes :[{
        path : '/',
        name : 'index',
        component : resolve => require(['./components/views/Index'],resolve)
    },{
        path : '/aboutme',
        name : 'aboutme',
        component : resolve => require(['./components/views/AboutMe'],resolve)
    },{
        path : '/project',
        name : 'project',
        component : resolve => require(['./components/views/Project'],resolve)
    },{
        path : '/contact',
        name : 'contact',
        component : resolve => require(['./components/views/Contact'],resolve)
    },]
});