import VueRouter from 'vue-router'
import Vue from 'vue'

const Index = () => import('./components/views/Index');
const AboutMe = () => import('./components/views/AboutMe');
const Project = () => import('./components/views/Project');
const Contact = () => import('./components/views/Contact');

Vue.use(VueRouter);

export const router = new VueRouter({
    mode : 'history',
    routes :[{
        path : '/',
        name : 'index',
        component : Index
    },{
        path : '/aboutme',
        name : 'aboutme',
        component : AboutMe
    },{
        path : '/project',
        name : 'project',
        component : Project
    },{
        path : '/contact',
        name : 'contact',
        component : Contact
    },]
});