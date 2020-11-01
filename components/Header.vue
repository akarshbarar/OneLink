<template>
  <div class="headerr">
      <div class="header__data">
            <div class="">
                <nuxt-link to="/">OneLink</nuxt-link>
              </div>
            <div class="header__dataLinks">
                <nuxt-link to="/">
                 <span >Log-Out</span>
                 <i class="fa fa-power-off"></i>
              </nuxt-link>
             
          </div>
       
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {

 head(){
   
  },
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