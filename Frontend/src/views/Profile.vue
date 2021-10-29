<template>

<div class="container" style="margin:10%">
<div id="product-list-two">
    <h2>Posts From:</h2>  
    <ul>
        <span class="name" style="color: blue;font-size: 25px;">{{display_name}}</span>
        <li v-for="post in posts" :key="post.id">
        
        <span class="center" style="height:100px">  <img :src="post.image" :alt="post.desc"> </span>
        
        </li>         
    </ul> 
  </div>
  </div>

<!--
<section class="profile-head">
        {{display_name}}
</section>


<div class="row">
    <section>
  <div class="column" v-for="post in posts" :key="post._id">           
        <img :src="post.image" :alt="post.desc">        
   </div>
   </section>
 </div>

 -->

<!--

<main class="view profile">
    <section class="profile-head">
        {{display_name}}
    </section>

    <section class="posts">
        <div class="post" v-for="post in posts"
        :key="post._id">
        <img :src="post.image" :alt="post.desc" class="post-image">
        </div>
    </section>
</main>

-->

 <!-- <div>     
   <header style="color: black;font-size: 30px;">{{display_name}}</header>
    <section v-for="post in posts"
        :key="post._id">
        <div class="center">
            <img :src="post.image" :alt="post.desc">
        </div>                
    </section>    
  </div>
  -->
</template>

<script>
import axios from 'axios'
export default {
    name: 'profile',
    data() {
    return{
        display_name:'',
        posts: []
    }
  },
  methods: {
          getProfile () {
              console.log("Profile")
          //const response = await axios.post('http://localhost:3000/user/getprofile')
          //this.feed = response.data
          //return this.$store.state.feed
             //this.$http.post(this.$store.state.api_url + 'user/getprofile', {
              axios.post('http://localhost:3000/user/getprofile', {
              auth_token: localStorage.getItem('jwt')
          }).then( ({ data }) => {
              console.log(data)
              this.display_name = data.details.display_name
              this.posts = data.details.posts
          })
      }
  },
  beforeMount() {
      this.getProfile()
  },
}
</script>

<style>
/*@import '../assets/scss/main.scss'*/

/*
.profile{
    display:flex1;
    flex-direction: row;
   }

.profile-head{
        background-color: black;
        color: white;
        padding: 15px;
        box-sizing: border-box;
    }

    .posts{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: min-content;
        grid-gap: 0px;

    }
   
    .post-image{
        width: 150%;
        display: block;
    }
    
*/

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
</style>