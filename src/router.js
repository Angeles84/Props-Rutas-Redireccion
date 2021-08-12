import Vue from 'vue'
import Router from 'vue-router'

import Post from './components/Post'
import NotFound from './components/NotFound'
import Administrador from './components/Administrador'
import Simple from './components/Simple'
import Avanzado from './components/Avanzado'

Vue.use(Router)

export default new Router({
    mode: 'history', 
    routes: [
        {
            path: '/',
            name: 'inicio',
            component: () => import( './components/Inicio' )
        },
        {
            path: '/inicio',
            name: 'inicio2',
            redirect: '/'
        },
        {
            path: '/home',
            name: 'home',
            redirect: '/'
        },
        {
            path: '/portada',
            name: 'portada',
            redirect: '/'
        },
        {
            path: '/sobremi',
            name: 'sobremi',
            component: () => import( './components/SobreMi' ),
            alias: [ '/about' , '/acerca' ],
            //beforeEnter(to, from, next) {
                //console.log('Antes de entrar a la ruta SobreMi')
                //next()
            //}
        },
        {
            path: '/contacto',
            name: 'contacto',
            component: () => import( './components/Contacto' ),
            alias: [ '/contactame' , '/contact' ]
        },
        {
            path: '/post',
            name: 'post',
            component: Post,
            children: [
                {
                    path: ':articulo',
                    component: () => import( './components/Articulo' )
                }
            ]
        },
        {
            path: '*',
            component: NotFound
        },
        {
            path: '/administrador',
            name: 'administrador',
            component: Administrador,
            children: [
                {
                    path: 'simple',
                    component: Simple,
                },
                {
                    path: 'avanzado',
                    component: Avanzado,
                }
            ]
        },
    ]
})