<template>
  <div class="header">
      <div class="header__data">
          <h1><nuxt-link to="/">OneLink</nuxt-link></h1>
          <div class="header__dataLinks">
              <p>OneLink : <a href="#">https://www.OneLink.com/akarshbarar</a></p>
             
          </div>
       
      </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {

mounted(){
     
}
}
</script>

<style>
.header{
    background-color: gray;
    
text-decoration: none;
}
.header__data{
    color: white;
    text-decoration: none;
    padding: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
        align-content: center;

}
.header__dataLinks{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: center;
}




</style>