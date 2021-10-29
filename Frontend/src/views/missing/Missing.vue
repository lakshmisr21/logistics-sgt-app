<template>
  <div class="container" style="margin:10%">  
<div id="product-list-two">
    <h2>List of Missing Posts:</h2>  
    <ul>
        <li v-for="post in feed" :key="post.id">
          <span class="name">{{timestampToDate(post.timestamp)}}:</span>
         <span class="name">{{post.display_name}} :</span>
         <span class="name"> {{post.desc}} </span>
        <span class="center" style="height:100px">  <img :src="post.image"> </span>
        </li>         
    </ul> 
  </div>
</div>
</template>

<script>
import axios from 'axios'
//import Sidebar from '../components/Sidebar.vue'
export default {
    name:'Missing',
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
/*
#product-list-two{
    background: #D1E4FF;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
     width: 600px;
}
#product-list-two ul{
    padding: 0;
    list-style-type: none;
   }
#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
    height: 300px;
}

.container{
  justify-content: center;
}
*/
</style>