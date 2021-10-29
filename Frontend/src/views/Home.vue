<template>
<div style="margin:25%">
 
  <div class="row cardsmall">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src="../assets/tripsheet.jpg">
          <span class="card-title"></span>
         <router-link to="/admin" >
          <a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">add</i></a>
          </router-link>
        </div>
        <div class="card-content">
          <i class="fas fa-truck-moving"></i>
          <p>View Trip Sheet Reports / Update / Create New </p>
        </div>
          <router-link to="/admin" >
            <i class="fa fa-eye" style="font-size:26px;color:blue;curson:pointer;"></i>
            </router-link>
      </div>
    </div>
  </div>

  <div class="row cardsmall">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src="../assets/Penalty.jpg">
          <span class="card-title">Penalty</span>
           <router-link to="/admin" >
          <a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">add</i></a>
          </router-link>
           </div>
        <div class="card-content">
          <i class="fas fa-truck-moving"></i>
          <p>View Penalty Reports / Update / Create New</p>
        </div>
         <router-link to="/admin" >
            <i class="fa fa-eye" style="font-size:26px;color:blue;curson:pointer;"></i>
            </router-link>         
           
            
      </div>
    </div>
  </div>

   <div class="row cardsmall">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src="../assets/MIssing.jpg">
          <span class="card-title">Missing</span>
         <router-link to="/admin" >
          <a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">add</i></a>
          </router-link>
            </div>
        <div class="card-content">
          <i class="fas fa-truck-moving"></i>
          <p>View Missing Items Reports / Update / Create New</p>
        </div>
         <router-link to="/viewmissing" >
            <i class="fa fa-eye" style="font-size:26px;color:blue;curson:pointer;"></i>
            </router-link>
      </div>
    </div>
  </div>

  <div class="row cardsmall">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src="../assets/Damaged.jpg">
          <span class="card-title"></span>
         <router-link to="/admin" >
          <a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">add</i></a>
          </router-link>
        </div>
        <div class="card-content">
          <i class="fas fa-truck-moving"></i>
          <p>View Damaged Items Reports  / Create New </p>
        </div>
          <router-link to="/admin" >
            <i class="fa fa-eye" style="font-size:26px;color:blue;curson:pointer;"></i>
            </router-link>
      </div>
    </div>
  </div>


</div>

<!-- Grid Styling

<div class="grid-container">
  <div class="item1">Menu Selection </div>
  <div class="item2"> Menu </div>
  <div class="item3">Main</div>  
  <div class="item4">Right</div>
  <div class="item5">Footer</div>
</div>

-->


<!--
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
-->


<!--
<div id="product-list-one">
    <h2>List Posts</h2>  
    <ul>
        <li v-for="post in feed" :key="post.id">
         <span class="name">{{post.display_name}} :</span>
         <span class="name"> {{post.desc}} : {{ timestampToDate(post.timestamp) }} :</span>
        <div class="center">  <img :src="post.image">         
        </div>
        </li>         
    </ul> 
  </div>
-->

<!--
<div class="row">  
  <div class="column" v-for="post in feed" :key="post.id">
<header style="color: blue;font-family:Cursive;font-size: 30px;">{{post.display_name}}</header> 
    <div style="font-weight: bold;color:red"  class="center">
    {{post.desc}} : {{ timestampToDate(post.timestamp) }}
  </div> 
<img :src="post.image">
    </div>    
      </div>
      -->

<!--
<div class="container">
 <section  v-for="post in feed" :key="post.id">
  <header style="color: blue;font-family:Cursive;font-size: 30px;">{{post.display_name}}</header> 
  <div style="font-weight: bold;color:red">
    {{post.desc}} : {{ timestampToDate(post.timestamp) }}
  </div>
    <div class="center">
       <img :src="post.image">
   </div>
  </section>
</div>
-->


</template>

<script>
import axios from 'axios'
//import Sidebar from '../components/Sidebar.vue'
export default {
  components:{
    //Sidebar
  },
  data(){
    return{
      //
      //feed:[]
    }
  },
   mounted() {
     this.$store.commit('isAuthenticated')
  },
  //mounted() {
   // const response = axios.get('post/getposts')
    //this.feed = response.data
    //return this.$store.state.feed
  //},
    
  //async mounted() {
    //const response = await axios.get('http://localhost:3000/post/getposts')
    //this.feed = response.data
    //return this.$store.state.feed
 // },
  //computed: {
    //feed () {
     // return this.$store.state.feed
     // }
 // },
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

    goto (path) {
      this.$router.push(path)
    }


    
 }

}
</script>

<style>
/*@import '../assets/scss/main.scss'*/
/*
#product-list-one{
    background: #FFF8B1;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
    width: 600px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(255,255,255,0.7);
    height: 300px;
}
*/

/*working page style  */
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
