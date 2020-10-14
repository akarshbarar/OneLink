<template>
  <div>
    <Navbar />
    <div class="index">
      <div class="index__left">
        <p class="logo">OneLink</p>
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
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
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
  margin-top: 5%;
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
  border: 2px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
}
.index__leftGetStartedInput >input{
  border: none;
}
.onelink > p{
  font-size: large;
}
.index__leftGetStarted >button{
  background-color: black;
  color: white;
  height: 48px;

}
.logo {
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
</style>
