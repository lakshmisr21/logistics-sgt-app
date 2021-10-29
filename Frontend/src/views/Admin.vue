<template>
  <div class="container">  
<div id="product-list-two">
    <h2>List of Posts</h2>  
    <ul>
        <li v-for="post in feed" :key="post.id">
         <span class="name">{{post.display_name}} :</span>
         <span class="name"> {{post.desc}} </span>
        <span class="center" style="height:100px">  <img :src="post.image"> </span>
        <div>
        <span class="name">{{ timestampToDate(post.timestamp) }}</span>
        </div>
        </li>         
    </ul> 
  </div>
</div>
</template>

<script>
import axios from 'axios'
//import Sidebar from '../components/Sidebar.vue'
export default {
    name:'Admin',
  components:{
    //Sidebar
  },
  data(){
    return{
      
      feed:[]
    }
  },
     
    async mounted() {
    const response = await axios.get('http://localhost:3000/post/getposts')
    this.feed = response.data
    return this.$store.state.feed
  },
  //computed: {
   // feed () {
    // return this.$store.state.feed
     // }
  //},
  methods: {
    logout(){
      //localStorage.removeItem('jwt')
      //this.$router.push('/login')
      this.$store.commit('logout')
    },
      timestampToDate (timestamp) {
      timestamp = new Number(timestamp)
      let d = new Date(timestamp)
      let year = d.getFullYear()
      let month = d.getMonth() + 1
      if(month < 10){
        month = "0" + month
      }
      let day = d.getDate()
      if(day < 10){
        day = "0" + day
      }
      let hour = d.getHours()
      let minute = d.getMinutes()

      return day + '/' + month + '/' + year + ':' + hour + ':' + minute
    }, 

    
 }

}
</script>

<style>

</style>