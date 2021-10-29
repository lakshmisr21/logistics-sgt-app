<template>
<div style="margin:25%">

<div class="row cardsmall">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src="../../assets/users.jpg">
          <span class="card-title"></span>
           <router-link to="/register">
          <a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">add</i></a>
           </router-link>
        </div>
        <div class="card-content">
          <i class="fas fa-truck-moving"></i>
          <p>View Users/ Create / Update </p>
        </div>
        <router-link to="/getusers">
            <i class="fa fa-eye" style="font-size:26px;color:blue"></i>
            </router-link>
      </div>
    </div>
  </div>

 
  <div class="row cardsmall">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src="../../assets/tripsheet.jpg">
          <span class="card-title"></span>
          <router-link to="#">
          <a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">add</i></a>
           </router-link>
        </div>
        <div class="card-content">
          <i class="fas fa-truck-moving"></i>
          <p>View Trip Sheet Reports / Update / Create New </p>
        </div>
        <router-link to="/admin">
            <i class="fa fa-eye" style="font-size:26px;color:blue"></i>
            </router-link>
      </div>
    </div>
  </div>

  <div class="row cardsmall">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src="../../assets/Penalty.jpg">
          <span class="card-title">Penalty</span>
         <router-link to="#">
          <a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">add</i></a>
           </router-link>        
          </div>
        <div class="card-content">
          <i class="fas fa-truck-moving"></i>
          <p>View Penalty Reports / Update / Create New</p>
        </div>
         <router-link to="/admin">
            <i class="fa fa-eye" style="font-size:26px;color:blue"></i>
            </router-link>
      </div>
    </div>
  </div>

   <div class="row cardsmall">
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src="../../assets/MIssing.jpg">
          <span class="card-title">Missing</span>
           <router-link to="#">
          <a class="btn-floating halfway-fab waves-effect waves-light green"><i class="material-icons">add</i></a>
           </router-link>            
        </div>
        <div class="card-content">
          <i class="fas fa-truck-moving"></i>
          <p>View Missing Items Reports / Update / Create New</p>
        </div>
         <router-link to="/viewmissing">
            <i class="fa fa-eye" style="font-size:26px;color:blue"></i>
            </router-link>
      </div>
    </div>
  </div>
</div>


</template>

<script>
export default {
   mounted() {
      return this.$store.state.feed
  },
}
</script>