<template>
   <div class="header">
      <header>
          <nuxt-link to="/" class="nav__logo">OneLink</nuxt-link>
      <nav>
          <ul>
              <li><nuxt-link to="/">Home</nuxt-link></li>
              <li><nuxt-link to="about">About us</nuxt-link></li>
              <li><nuxt-link to="blog"> Our Blogs</nuxt-link></li>
              <li><nuxt-link to="contact">Contact Us</nuxt-link></li>
              <li><nuxt-link to="help">Help</nuxt-link></li>
              <li><nuxt-link to="login" >Login</nuxt-link></li>
              
              
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



.header{
    position: sticky;
    top: 0;
    z-index: 100;
}
header{
    background: black;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* grid-template-columns: repeat(2,auto); */
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