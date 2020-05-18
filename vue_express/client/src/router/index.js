import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import NewUser from '@/components/NewUser'
import EditUser from '@/components/EditUser'
import UserList from '@/components/UserList'

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
      path: '/user',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/new-user',
      name: 'NewUser',
      component: NewUser
    },
    {
      path: '/user/:id',
      name: 'EditUser',
      component: EditUser
    }
  ]
})
