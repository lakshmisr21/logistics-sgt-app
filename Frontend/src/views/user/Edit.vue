<template>
  <div id="new-user" style="margin:10%">
      <h3>Update User Form:</h3>
     
    <div class="row" style="position:abosolute">
    <form @submit.prevent="updateUser" class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="mobile" placeholder="Mobile">
          </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="name" placeholder="Name" required>
          </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="place" placeholder="Place" required>
          </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input type="text" v-model="officename" placeholder="Office Name" required>
           </div>
      </div>

      <div class="row">
        <div class="input-field col s12">
          <input type="password" v-model="password" placeholder="Password" required>
         </div>
      </div>

      <button type="submit" class="btn" style="margin-right: 16px;border-radius: 12px;">Update</button>
      <router-link to="/admin" class="btn blue" style="border-radius: 12px;">Cancel</router-link>
    </form>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name:'New',
    data(){
     return{
          user:[],
          name: null,
          officename: null,
          password: null,
          mobile:null,
          place:null
     }
 },
 async mounted() {
   
    const path=this.$router.currentRoute.value.path
    console.log(path)
        const response =await  axios.get('http://localhost:3000' + path)
        this.name = response.data.name,
        this.mobile = response.data.mobile,
        this.place = response.data.place,
        this.officename = response.data.officename,
        this.password = response.data.password
      },
 methods:{
   async updateUser(){
        try {
            console.log('Update Button Clicked')
            const path=this.$router.currentRoute.value.path
            console.log(path)
            await axios.put('http://localhost:3000'+path, {
                     name: this.name,
                     mobile: this.mobile,
                     place: this.place,
                     officename: this.officename,
                     password: this.password
                 })
                 console.log('User Updated Successfully')
        } catch (e) {
          console.error("Error Updating document: ", e);
        }
        this.$router.push({ name: 'view-user' })
   }
 }
}

</script>

<style>
 
</style>