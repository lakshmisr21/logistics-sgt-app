<template>
  <footer class="page-footer black">
      <button @click="goto('/newpost')" class="btn green" style='margin-right:16px'>Post</button>
      <button @click="logout" class="btn green" style='margin-right:16px'>Logout</button>
      <button @click="goto('/Profile')" class="btn green" style='margin-right:16px'>Profile</button>
  </footer>
</template>

<script>
export default {
  methods: {
    logout (){
      localStorage.removeItem('jwt')
      this.$router.push('/login')
    },
    goto (path) {
      this.$router.push(path)
    }
  },
}
</script>




