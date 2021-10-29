<template>
<div style="margin:15%; padding-bottom:0px">
  <h1>REGI<span>STER</span></h1>
   <form @submit.prevent="submit">
      <input type="text" v-model="officename" placeholder="Enter Office Name" />
      <input type="text" v-model="mobile" placeholder="Enter Mobile Number#"/>
       <input type="text" v-model="name" placeholder="Enter Employee Name"/>
        <input type="text" v-model="place" placeholder="Enter Place"/>
         <input type="password" v-model="password" placeholder="Enter Password"/>
         <br>
          <br>
          <button @click="register" class="btn green">Sign Up</button>
           <br>
            <br>
           <footer >                         
                  <router-link to="/login">Already Registered ?</router-link>            
        </footer>
   </form>
</div>
  <!--<div style="margin:10%">
      <h1>REGI<span>STER</span></h1>
     <div class="row" style="position:flex">
        
              <div class="input-field col s12">
         <input type="text" v-model="officename" placeholder="Enter Office Name" />
               </div> 
         <div class="input-field col s12">
         <input type="text" v-model="name" placeholder="Enter Employee Name"/>
         </div> 
           <div class="input-field col s12">
         <input type="text" v-model="mobile" placeholder="Enter Mobile Number#"/>
           </div>
           <div class="input-field col s12">
         <input type="text" v-model="place" placeholder="Enter Place"/>
           </div>
            <div class="input-field col s12">
          <input type="password" v-model="password" placeholder="Enter Password"/>
            </div>
          <button @click="register" class="btn green">Sign Up</button>
                    
        </div>
       <footer class = "page-footer black">   
                      
                  <router-link to="/login">Already Registered ?</router-link>
            
        </footer>
  </div>
  
-->

</template>

<script>
import axios from 'axios'
export default {
name:'register',
data () {
    return{
        mobile:'',
        password:'',
        officename:'',
        name:'',
        place:''
    }
},
methods: {
  register(){
     let URL = this.$store.state.api_url
    if(this.mobile == ''|| 
      this.password == '' || 
      this.name == '' || 
      this.place == '' || 
      this.office == ''){
     return alert('Please fill all the fields')
    }
     axios.post(URL + 'user/register',{
      mobile:this.mobile,
      password:this.password,
      officename:this.officename,
      name:this.name,
      place:this.place
    }).then(response =>{
      console.log(response)
      this.$router.push('/login')          
    }).catch(err =>{
      console.log(err)
    })
  }
},
}
</script>

<style>
span{
  font-weight: 300;
}
</style>