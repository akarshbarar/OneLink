<template>
  <div class="headerr">
      <div class="header__data">
            <div class="">
                <nuxt-link to="/">OneLink</nuxt-link>
              </div>
            <div class="header__dataLinks">
                <div @click="logout">
                 <span >Log-Out</span>
                 <i class="fa fa-power-off"></i>
              </div>
             
          </div>
       
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
import db from '../middleware/firebase'
export default {

 head(){
   
  },
  methods:{
    logout:function(){
       this.$router.push({ path: '/' })
       this.$store.commit('isLoggedIn',false);

      db.auth().signOut().then(function() {
        // Sign-out successful.
        console.log("Logging out");
        
       

      }).catch(function(error) {
        // An error happened.
      });

    }
  }
}
</script>

<style>
.headerr{
    background-color: #31353D;
  
}
.header__data{
    color: #818896;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
}
.header__data > .sidebar-brand{
        color: #818896;

}
.header__data:hover{
     color: #b8bfce;
}
/* */




</style>