<template>
 <div class="container" style="margin:10%">                
          <div id="product-list-two"> 
        <ul>         
            <li>               
           <router-link class="secondary-content" v-bind:to="{ name: 'edit-user'}"><i class="fa fa-edit" style="font-size:26px;color:blue"></i></router-link> 
            <h1 style="font-size:28px;color:green;text-transform: uppercase;"> {{user.officename}} </h1>  
            
            <label for="mobile">Name:</label> |   <span> {{user.name}} </span>    
             <br>
             <label for="mobile">Mobile:</label> |   <span> {{user.mobile}} </span>     
            <br>   
             <label for="place">Place:</label> |   <span> {{user.place}} </span>     
            <br>            
            
            <label for="created">Account Created:</label> | <span>{{ timestampToDate(user.account_created) }} </span>
            <br>      
            <br>
            <button type="submit" @click="removeuser"><i style="font-size:28px;color:red;cursor: pointer;" class="fa fa-trash-alt"></i></button>                         
            </li>            
        </ul> 
  </div>
  </div>
 
</template>

<script>
import axios from 'axios'
export default {
    name:'View',
   data(){
    return{
      user:[]
    }
  },
   async mounted() {
   
    const path=this.$router.currentRoute.value.path
    console.log(path)
    const response = await axios.get('http://localhost:3000' + path)
    console.log(response.data)
    this.user=response.data
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
     async removeuser(){
    if(confirm){
    alert('Are you sure?')
    const path=this.$router.currentRoute.value.path
    console.log(path)    
    await axios.delete('http://localhost:3000'+path)
    console.log('User Successfully Deleted')
    this.$router.push({ name: 'User' })
    }
  },
  },
 
}
</script>

<style>
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
    background: rgba(228, 211, 156, 0.7);
    
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
</style>