import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue')
    },
    {
      path: '/crearusuario',
      name: 'crear',
      component: () => import('../views/crear.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import('../views/editar.vue')
    }
  ]
})
