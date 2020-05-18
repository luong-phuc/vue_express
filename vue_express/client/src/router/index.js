import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import NewUser from '@/components/NewUser'
import EditUser from '@/components/EditUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/new-user',
      name: 'NewUser',
      component: NewUser
    },
    {
      path: '/user/:email',
      name: 'EditUser',
      component: EditUser
    }
  ]
})
