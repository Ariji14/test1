import Vue from 'vue'
import Router from 'vue-router'

//Users
import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'

// Jewelry
import AllJewelry from '@/components/Jewelry/AllJewelry'
import JewelryCreate from '@/components/Jewelry/CreateJewelry'
import JewelryEdit from '@/components/Jewelry/EditJewelry'
import JewelryShow from '@/components/Jewelry/ShowJewelry'

import Heart from '@/components/Heart'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'users-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    // เพิ่มเราเตอร์สำหรับเครื่องประดับ
    {
      path: '/jewelry', 
      name: 'jewelry',
      component: AllJewelry
    },
    {
      path: '/jewelry/create', 
      name: 'jewelry-create',
      component: JewelryCreate
    },
    {
      path: '/jewelry/edit/:jewelryId', 
      name: 'jewelry-edit',
      component: JewelryEdit
    },
    {
      path: '/jewelry/:jewelryId', 
      name: 'jewelry-show',
      component: JewelryShow
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/Heart',
      name: 'Heart',
      component: Heart
    },
  ]
})
