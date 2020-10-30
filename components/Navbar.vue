<template>
   <div class="header">
      <header>
          <nuxt-link to="/" class="nav__logo">OneLink</nuxt-link>
      <nav>
          <ul>
              <li><nuxt-link to="/">Home</nuxt-link></li>
              <li><nuxt-link to="about">About us</nuxt-link></li>
              <li><nuxt-link to="blogs"> Our Blogs</nuxt-link></li>
              <li><nuxt-link to="contact">Contact Us</nuxt-link></li>
              <li><nuxt-link to="help">Help</nuxt-link></li>
              <li><nuxt-link to="login" class="push">Login</nuxt-link></li>
              
              
          </ul>
     </nav>
      <div class="dropdown">
            <button class="dropbtn">Menu 
            <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <nuxt-link to="/">Home</nuxt-link>
              <nuxt-link to="about">About us</nuxt-link>
              <nuxt-link to="blogs"> Our Blogs</nuxt-link>
              <nuxt-link to="contact">Contact Us</nuxt-link>
              <nuxt-link to="help">Help</nuxt-link>
              <nuxt-link to="login">Login</nuxt-link>
            </div>
        </div>
      </header>
  </div>
  
</template>

<script>
// https://codepen.io/indiancoder/pen/ExVRxdV
export default {

}
</script>

<style>
.dropdown {
  float: left;
  overflow: hidden;
  margin-left: 40%;
}

.dropdown .dropbtn {
  font-size: 16px;  
  border: none;
  outline: none;
  color: white;
  padding: 14px 16px;
  background-color: inherit;
  font-family: inherit;
  margin: 0;
}



.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}


.push {
	display: inline-block;
	position: relative;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 15px;
	text-transform: uppercase;
	text-decoration: none;
	font-weight: bold;
	color: #fff;
	background-color: #2FB45A;
	background-image: -webkit-linear-gradient(top, #483e40, #3a3133);
	padding: 12px 20px;
	width: 120px;
	text-align: center;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	text-shadow: 1px 1px 4px rgba(0, 0, 0, .5);
	border: 2px solid #5f5255;
	box-shadow: 0 4px 0 #282425, 0 0 6px #282425, 1px 1px 0px #282425, -1px -1px 0px #282425, 0px 8px 10px rgba(0, 0, 0, .5);
}
.push:active {
	box-shadow: 0 2px 0 #282425, 0 0 6px #282425, 1px 1px 0px #282425, -1px -1px 0px #282425, 0px 4px 10px rgba(0, 0, 0, .5);
	top: 2px;
}
.header{
    position: sticky;
    top: 0;
    z-index: 100;
}
header{
    background: black;
    display: grid;
    grid-template-columns: repeat(2,auto);
    padding: 5px;
    
}
.nav__logo, li a {
        padding: 1em 2em;
        display: block;
        text-transform: uppercase;
        text-decoration: none;
        font-weight: bold;
        color: white;
        font-size: .9em;
    }
    nav {
        justify-self: right;
    }
    ul {
        list-style-type: none;
    }
    li {
        display: inline;
    }
    li a {
        padding: 1em 2em;
        display: inline-block;
        background: rgba(0,0,0,0.1);
    }
@media screen and (max-width: 700px) {
  nav{
      display: none;
  }
}
@media screen and (min-width: 700px) {
  .dropdown{
      display: none;
  }
}

</style>