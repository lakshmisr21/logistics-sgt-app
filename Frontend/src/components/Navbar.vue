<template>

  <nav>
      <div class="nav-wrapper blue">
        <div class="container">
          <router-link to="/" class="brand-logo">Home</router-link>
          <ul id="nav-mobile" class="left hide-on-med-and-down">
          <!-- <li> <button class="btn black" @click="logout">LogOut</button></li>-->
        </ul>
          
        </div>
      </div>
    </nav>
  </template>

  <script>
export default {
  methods: {
    logout(){
      localStorage.removeItem('jwt')
      this.$router.push('/login')
    }
  },
}
</script>



