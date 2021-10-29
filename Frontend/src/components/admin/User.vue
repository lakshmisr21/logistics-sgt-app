<template>
  <div class="admin" style="margin:10%">      
  <div class="container">   
      
             <i class="fa fa-search-plus" style="font-size:22px;color:blue;"> </i>
            <input class="input" style="text-align: center;width:40%;" v-model="search" placeholder="Search Mobile"/>

             <div class="fixed-action-btn">
               <router-link to="/register" >
                <i class="fas fa-plus-circle" style="font-size:40px;color:green"></i>
              </router-link>
              </div>
            
        <div id="product-list-two"> 
        <ul>         
            <li v-for="user in filteredUsers" :key="user._id">           
            <h1 style="font-size:28px;color:green;text-transform: uppercase;"> {{user.officename}} </h1>  
             <label for="mobile">Name:</label> |   <span> {{user.name}} </span>    
             <br>
             <label for="mobile">Mobile:</label> |   <span> {{user.mobile}} </span>     
            <br>   
             <label for="mobile">Place:</label> |   <span> {{user.place}} </span>    
             <br>             
              
        <label for="created">Account Created:</label> | <span>{{ timestampToDate(user.account_created) }} </span>
        
             <router-link class="secondary-content" v-bind:to="{ name: 'view-user', params: { user_id: user._id }}"><i class="fa fa-eye" style="font-size:26px;color:blue"></i></router-link>
      </li>         
    </ul> 
      
  </div>
  </div>
   </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'User',
  components: {  
  },
  data(){
    return{
      users:[],
      search:''
    }
  },
  computed:{
      filteredUsers: function(){
        return this.users.filter((user)=>{
          return user.mobile.toLowerCase().match(this.search.toLowerCase())
        })
      }
  },
   async mounted() {
    let api_url = this.$store.state.api_url
                axios.get(api_url + 'user/getusers', {
                auth_token: localStorage.getItem('jwt'),                
            })
            .then(response =>{
                this.users = response.data
            })
  },
  methods: {
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

      return day + '/' + month + '/' + year + ' ' + hour + ':' + minute
    }, 
  },
}
</script>

<style scoped>
/*
#product-list-two{
    background: white;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
    margin-bottom: 30px;
    padding: 10px 20px;
    
}
#product-list-two ul{
    padding: 0;
    list-style-type: none;
   }
#product-list-two li{
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background: rgba(200, 241, 214, 0.7);
    
}

.container{
  justify-content: center;
}

.input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: none;
  border-bottom: 2px solid rgb(0, 26, 255);
  
}
*/
</style>
