<template>
  <div>
    <Navbar />
    <div class="index">
      <div class="index__left">
        <p class="logoOneLink">OneLink</p>
        <p class="tagline">OneLink is all you Need</p>
        <span>Connect your audience with OneLink</span>
        <h1>Create Your Own OneLink Here</h1>
        <form >
          <div class="index__leftGetStarted">
              <div  class="index__leftGetStartedInput">
             
                <div class="onelink">
                  <p>Onelink.com/</p>
                </div>
                <input type="text" placeholder="yourname" />

                
               </div>
            
            <button type="submit">
              <p>Get Started</p>
            </button>
          </div>
        </form>
      </div>
      <div class="index__right">

    


        <div class="index__image">
          <img src="../assets/img/cascio.png" alt="cascio image" />
        </div>
      </div>
    </div>
    <div class="index__middle">
      <div class="index__middledata">
        <h1>Use it anywhere</h1>
        <p>Take your Linktree wherever your audience is, to help them to discover all your important content.</p>
      </div>
        <div class="index__middledata">
        <h1>Link to everywhere</h1>
        <p>Take your Linktree wherever your audience is, to help them to discover all your important content.</p>
      </div>
        <div class="index__middledata">
        <h1>Easily managed</h1>
        <p>Take your Linktree wherever your audience is, to help them to discover all your important content.</p>
      </div>
        <div class="index__middledata">
        <h1>Join the Linktree community</h1>
        <p>Take your Linktree wherever your audience is, to help them to discover all your important content.</p>
      </div>
    </div>
   
   <div class="index__CTA">
     <h1> Create your OneLink Now</h1>
     <button>Get Started</button>
   </div>
  <Footer/>

 



  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "OneLink | The Only link for all your sites.",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: "OneLink is a site for all your personal links at one place."
      },
      {
        name: "keyword",
        content:
          "OneLink socail media facebook instagram snapchat whatsapp website portfolio"
      }
    ]
  },
  components: {
    Navbar
  }
};
</script>

<style>
.index {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 15%;
  height: 100vh;
}
.index__leftGetStarted{
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 10px;
  padding-bottom:10px;
  padding-right: 10px;
  padding-left: 10px;
  
}
.index__leftGetStartedInput{
  border: 1px solid black;
  border-top-left-radius: 999px;
  border-bottom-left-radius: 999px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
}
.index__leftGetStartedInput >input{
  border: none;
   padding: 10px;
  font-size: 17px;
  /* border: 1px solid grey; */
  float: left;
  width: 80%;
}
.index__left > h1{
  margin-top: 5%;
}
.onelink > p{
  font-size: large;
  font-weight: 800;
}
.index__leftGetStarted >button{

  float: left;
  width: 20%;
  padding: 10px;
  background: black;
  color: white;
  font-size: 17px;
  border: 1px solid grey;
  border-left: none;
  cursor: pointer;
  border-top-right-radius: 999px;
  border-bottom-right-radius: 999px;

}
.index__leftGetStarted >button :hover{
 background-color: gray;

}
.logoOneLink {
  font-weight: 200;
  font-size: large;
}
.tagline {
  font-weight: 800;
  font-size: 50px;
}
span {
  margin-top: 20%;
}
.index__image > img {
  object-fit: contain;
  width: 600px;
  height: 600px;
}

.index__CTA{
  background-color: gray;
  align-content: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 5%;
}
.index__CTA >button{
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
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
.index__CTA >button:active {
	box-shadow: 0 2px 0 #282425, 0 0 6px #282425, 1px 1px 0px #282425, -1px -1px 0px #282425, 0px 4px 10px rgba(0, 0, 0, .5);
	top: 2px;
}


/* ANIMATION */

</style>
