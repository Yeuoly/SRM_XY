import VueRouter from 'vue-router'
import Vue from 'vue'

const Index = () => import('./views/Index');
const AboutMe = () => import('./views/AboutMe');
const Project = () => import('./views/Project');
const Contact = () => import('./views/Contact');
const NotFound = () => import('./views/NotFound');

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
    },{
        path : '*',
        component : NotFound
    },]
});