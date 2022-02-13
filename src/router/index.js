import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Senha2 from '../views/Senha2.vue'
import Cadastro3 from '../views/Cadastro3.vue'
import ToDoList4 from '../views/ToDoList4.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/senha',
    name: 'Senha2',
    component: Senha2
  },
  {
    path: '/cadastro',
    name: 'Cadastro3',
    component: Cadastro3
  },
  {
    path: '/todolist',
    name: 'ToDoList4',
    component: ToDoList4
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
