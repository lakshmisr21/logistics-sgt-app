<template>
  <div class="sidebar" :style="{width: sidebardWidth}">
      <!--
      <h1>
          <span v-if="collapsed" style="font-size:10px;">
              <div>M</div> 
              <div>E</div>   
              <div>N</div>  
              <div>U</div>          
          </span>
          <span v-else>Menu</span>
      </h1>
      -->
      <span 
      class="collapse-icon" 
      :class="{'rotate-180':collapsed}"
      @click="toggleSidebar">
          <i class="fas fa-angle-double-left"></i>
      </span>
      <br>
      <br>

      <SidebarLink to="/" icon="fas fa-home" style="font-size:18px;">Home</SidebarLink>
     <br>
      <!--<SidebarLink to="#" icon="fas fa-chart-bar" style="font-size:18px;">Analytics</SidebarLink>-->
      <!--<SidebarLink to="/user/getusers" icon="fas fa-user" style="font-size:18px;">Users</SidebarLink>-->
     <!--<SidebarLink to="/register" icon="fas fa-user-plus" style="font-size:18px;">New Users</SidebarLink>-->
      <!--<SidebarLink to="/dashboard" icon="fas fa-columns" style="font-size:18px;">Dashboard</SidebarLink>-->
      <!--<SidebarLink to="#" icon="fas fa-image" style="font-size:18px;">Images</SidebarLink>-->
      <!--<SidebarLink to="/newpost" icon="fas fa-camera" style="font-size:18px;">Camera</SidebarLink>-->
      <SidebarLink to="/admin" icon="fas fa-users" style="font-size:18px;">Admin</SidebarLink>
      <br>
      <!--<SidebarLink to="/logout" icon="fas fa-lock" style="font-size:18px;">Logout</SidebarLink>-->
      

  </div>
</template>

<script>
import SidebarLink from './SidebarLink.vue'
import { collapsed, toggleSidebar, sidebardWidth} from './state'
export default {
    props: {},
    components: { SidebarLink },
    setup () {
      return { collapsed, toggleSidebar, sidebardWidth}
    },
}
</script>

<style>
:root {
    --sidebar-bg-color: #30682e;
    --sidebar-item-hover: #2b1df3;
    --sidebar-item-active:#83ddb3;
}
</style>

<style scoped>
.sidebar{
    color: white;
    background-color: var(--sidebar-bg-color);

    float: left;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    bottom: 0;
    padding: 0.5em;

    transition: 0.3s ease;

    display: flex;
    flex-direction: column;
}
/* To show Collapse button at the botton */
/*
.collapse-icon{
    position: absolute;
    bottom: 0;
    padding: 0.75em;
    color: aliceblue;
    transition: 0.2s linear;
    
}
*/

.rotate-180{
    transform: rotate(180deg);
    transition: 0.2s linear;
    
}

</style>