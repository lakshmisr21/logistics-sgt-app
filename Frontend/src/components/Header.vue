<template>
  <header class="page-header white" style="margin:50px">
     <!-- <button @click="goto('/')" class="button"><i class="material-icons">home</i>Home</button> -->
       <button @click="goto('/newpost')" style="margin:5px;" class="btn"><i class="material-icons">add_a_photo</i>Camera</button>
       <button @click="goto('/Profile')" style="margin:5px;" class="btn"><i class="material-icons">account_circle</i>Profile</button>
       <button @click="logout" style="margin:5px;" class="btn"><i class="material-icons">logout</i>LogOut</button>
       <!--<button @click="$store.commit('logout')" style="margin:5px;" class="btn"><i class="material-icons">logout</i>LogOut</button>-->
       <!-- store.commit logout not working
       <button @click="$store.commit('logout')" style="margin:5px;" class="btn"><i class="material-icons">logout</i>LogOut</button>
      <button @click="goto('/newpost')" class="btn green" style='margin-right:16px'>Post</button>
      <button @click="logout" class="btn green" style='margin-right:16px'>Logout</button>
      <button @click="goto('/Profile')" class="btn green" style='margin-right:16px'>Profile</button>
      -->
  </header>
</template> 

<script>
//import vues from 'vuex'
//import store from '../store'
//import { mapMutations } from 'vuex'
import axios from 'axios'

export default {
  beforeMount() {
      this.$store.state.mutations
  },
  methods: {
  logout (){
     localStorage.removeItem('jwt')
     this.$router.push('/login')
     this.$router.go()
    },
    goto (path) {
      this.$router.push(path)
    }
  },
}
</script>

<style>
 @import '../assets/scss/main.scss'

.btn{
    appearance: none;
    border: none;
    outline: none;
   }

   .btn {border-radius: 8px;}
</style>





