import {createRouter, createWebHistory } from 'vue-router'
import store from '../store'
import axios from 'axios'

import Home from '../views/Home.vue'

let router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue'),
      meta:{
        reload:true,
        requiresAuth: false
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register.vue'),
      meta:{
        reload:true,
        requiresAuth: false
      }
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta:{
        reload:true,
        requiresAuth: true
      }
    },
    {
      path: '/newpost',
      name: 'Post',
      component: () => import('../views/Post.vue'),
      meta:{
        reload:true,
        requiresAuth: true
      }
    },
    {
      path: '/viewpost',
      name: 'ViewPost',
      component: () => import('../views/post/ViewPost.vue'),
      meta:{
        reload:true,
        requiresAuth: true
      }
    },

    {
      path: '/viewmissing',
      name: 'MissingPost',
      component: () => import('../views/missing/Missing.vue'),
      meta:{
        reload:true,
        requiresAuth: true
      }
    },
    {
      path: '/viewdamaged',
      name: 'DamagedPost',
      component: () => import('../views/damaged/Damaged.vue'),
      meta:{
        reload:true,
        requiresAuth: true
      }
    },

    {
      path: '/Profile',
      name: 'Profile',
      component: () => import('../views/Profile.vue'),
      meta:{
        reload:true,
        requiresAuth: true
      }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('../components/admin/Admin.vue'),
      meta:{
        reload:true,
        requiresAuth: true
      }
    },
    {
      path: '/getusers',
      name: 'GetUser',
      component: () => import('../components/admin/User.vue'),
      meta:{
        reload:true,
        requiresAuth: true
      }
    },
    {
      path: '/user/:user_id',
      name: 'view-user',
      component: () => import('../views/user/View.vue'),
      meta:{
        reload:true,
        requiresAuth: true
      }
    },
    {
      path: '/user/:user_id',
      name: 'edit-user',
      component: () => import('../views/user/Edit.vue'),
      meta:{
        reload:true,
        requiresAuth: true
      }
    },
  
  ]
})
//router.onReady is not a function

router.isReady(() => {
  
  store.commit('isAuthenticated')
  axios.get(store.state.api_url + 'post/getposts')
  .then(response =>{
  store.commit('getFeed', response.data)
  })
  .catch(err =>{
    //if(err) throw err
    console.log(err)
  })
})


router.beforeEach((to,from,next)=>{
  if(to.matched.some(record => record.meta.requiresAuth)){

    if(localStorage.getItem('jwt') == null){
      next({
        path: '/login', 
        //params: {nextUrl: to.fullPath}
        //params: {nextUrl: '/login'}
      })
    } else{
      console.log('Already Logged')
       next()
    }
  }else{
    if(localStorage.getItem('jwt') != null){
     next({
        path: '/',
        params: {nextUrl: to.fullPath}
     })      
     const loginpath = window.location.pathname
     console.log(loginpath)
     //next({ name: 'Login', query: { from: loginpath } });
      //this.$router.push({ name: 'home', query: { redirect: '/' } })
    }else{      
      next()
    }
    //console.log('Doesnot require Auth')    
  }
}) 


export default router
