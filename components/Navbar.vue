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
      </header>
  </div>
</template>

<script>
// https://codepen.io/indiancoder/pen/ExVRxdV
export default {

}
</script>

<style>

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
</style>