import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter);

export const router = new VueRouter({
    routes :[{
        path : '/',
        name : 'index',
        component : resolve => require(['./components/views/Index'],resolve)
    }]
});