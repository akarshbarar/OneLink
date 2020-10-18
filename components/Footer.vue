<template>
  <div class="footer">
    <div class="footer__socialmedia">
      <p>Made with 💖 in India</p>
      <div class="social-menu">
            <ul>
              <li><a href=""><i class="fa fa-facebook"></i></a></li>
              <li><a href=""><i class="fa fa-twitter"></i></a></li>
              <li><a href=""><i class="fa fa-instagram"></i></a></li>
              <li><a href=""><i class="fa fa-youtube"></i></a></li>
              <li><a href=""><i class="fa fa-linkedin"></i></a></li>
            </ul>
      </div>
      <p>Copyright 2020 OnLink</p>
    </div>
    <div class="footer__newsletter">
      <h1>Sign up for News Letter and updates</h1>
      <!-- <input type="email" required placeholder="Enter Email"/>
      <button>Subscribe</button> -->
     <div id='wrap'>
      <div class='field'></div>
      <form class='signup' @submit.prevent="subscribe">
        <input class='email' placeholder='email' type='email'>
        <div class='btnwrap'>
          <div class='spark'></div>
          <div class='spark'></div>
          <div class='spark'></div>
          <div class='spark'></div>
          <div class='spark'></div>
          <div class='spark'></div>
          <b>Subscribe</b>
          <div class='blob'></div>
          <input type='submit' value='Subscribe'>
        </div>
      </form>
    </div>



    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {

mounted(){

},
methods:{
  subscribe:function(){
    
  }
}

}
</script>

<style>
.footer{
  background-color: lightgrey;
  display: flex;
  flex-direction: row;
  padding: 5%;
  justify-content: space-between;
}

.social-menu ul {
 
    padding: 0;
    margin: 0;
    display: flex;
}
.social-menu ul li {
    list-style: none;
    margin: 0 10px;
}
.social-menu ul li .fa {
    color: #000000;
    font-size: 25px;
    line-height: 50px;
    transition: .5s;
}
.social-menu ul li .fa:hover {
    color: #ffffff;
}
/* .social-menu ul li a {
  display: flex;
  align-items: center;
    position: relative;
    display: block;
    width: 50px;
    height: 50px;
    background-color: white;
    text-align: center;
    transition: 0.5s;
    transform: translate(0,0px);
    box-shadow: 0px 7px 5px rgba(0, 0, 0, 0.5);
} */
/* .social-menu ul li a:hover {
    transform: rotate(0deg) skew(0deg) translate(0, -10px);
} */
.social-menu ul li:nth-child(1) a:hover {
    background-color: #3b5999;
}
.social-menu ul li:nth-child(2) a:hover {
    background-color: #55acee;
}
.social-menu ul li:nth-child(3) a:hover {
    background-color: #e4405f;
}
.social-menu ul li:nth-child(4) a:hover {
    background-color: #cd201f;
}
.social-menu ul li:nth-child(5) a:hover {
    background-color: #0077B5;
}




/* SUBSCRIBE */

</style>