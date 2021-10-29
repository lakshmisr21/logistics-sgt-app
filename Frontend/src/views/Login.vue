<template>
<div style="margin:15%">
  <h1>LOG<span>-IN</span></h1>
  <form @submit.prevent="submit">
     <input type="text" v-model="mobile" placeholder="Enter Mobile Number#" />
      <br>
       <br>
     <input type="password" v-model="password" placeholder="Enter Password"/>
     <br>
     <br>
     <button type="submit" @click="login" class="btn green">Log In</button>
  </form>

  <footer>
              <p>
                 <router-link to="/register">New Registration ?</router-link>
               </p>
          </footer>    
</div>
<!--
  <div style="margin:15%">
      <h3>LogIn Form</h3>
       <div class="row" style="position:flex">         
           <div class="input-field col s12">
         <input type="text" v-model="mobile" placeholder="Enter Mobile Number#" style="width:80%"/>
           </div>
            <div class="input-field col s12">
          <input type="password" v-model="password" placeholder="Enter Password" style="width:80%"/>
            </div>
          <button type="submit" @click="login" class="btn green">Log In</button>
         
           <footer>
              <p>
                 <router-link to="/register">New Registration ?</router-link>
               </p>
          </footer>          
     </div>
  </div>
  -->
</template>

<script>
import axios from 'axios'
export default {
name:'login',
data () {
    return{
        mobile:'',
        password:'',
      }   
},
mounted() {
  //console.log(this.$router)
  const path=this.$router.currentRoute.value.path
        console.log(path)
     this.$router.push({ name: 'Home' })
     //this.$router.push({ name: 'Login', query: { redirect: '/' } })
       
},
beforeMount() {
 //console.log(this.$router.currentRoute.value.path)
 //return this.$router.currentRoute.value.path
},
 computed:{
    isAuthenticated(){
     return this.$store.state.isAuthenticated      
    }
  },

//computed: {
    //currentRouteName() {
      // return this.$route.name;
    //}
//},

methods: {
  login(){
    let self = this
    let URL = this.$store.state.api_url
    if(this.mobile == ''|| this.password == ''){
     return alert('Please fill all the fields')
    }
    axios.post(URL + 'user/login',{
      mobile:this.mobile,
      password:this.password
    })
      .then(function (response) {
        if(response.data.auth){
          localStorage.setItem('jwt', response.data.token)           
          console.log(response) //To debug
          console.log('Logged In successfully')
          self.$router.push({path: '/'}).catch((err)=>{console.log(err)})
        } 
      
      else {
        console.log("Error:",response)
      }
      }).catch(function (err) {
        console.log("Error:",err)
      })
      


      //this.$router.push({ name: 'Home' })
       //this.$router.push("/")       
     },
     //onLinkClicked() {
      // if(isAuthenticated) {
      // If not authenticated, add a path where to redirect after login.
     // this.$router.push({ name: 'login', query: { redirect: '/' } });
        //}
      //}
   }
}
</script>

<style>
span{
  font-weight: 300;
}
</style>
