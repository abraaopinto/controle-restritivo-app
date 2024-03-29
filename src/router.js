import Vue from 'vue'
import Router from 'vue-router'
import DefaultLayout from './layouts/Default.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Pessoa from './views/pessoa/Pessoa.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/pessoa',
          name: 'pessoa',
          component: Pessoa
        },
        {
          path: '/about',
          name: 'about',
          component: About
        }
      ]
    }
  ]
})
