<template>
 <div class="index">
   <div class="index__left">
     <div class="index__leftData">
        <p class="index__leftDataHeading">OneLink for All Links</p>
        <p class="index__leftDataParagraph">Your links at one place</p>
     </div>
   </div>
   <div class="index__right">
     <div>
       <p>"Its really awesome!"</p>
     </div>
   </div>
 </div>
</template>

<script>
export default {

    // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'OneLink',
    meta: [
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'OneLink is a site for all your personal links at one place.' },
      { name: 'keyword', content: 'OneLink socail media facebook instagram snapchat whatsapp website portfolio' },
    ],
  },
}
</script>

<style>
.index{
  display: flex;
  flex-direction: row;
}
.index__left{
  height: 100vh;
  width: 50vw;
  background-color: #1B3D58;
}
.index__leftData{
  padding: 20%;
}
.index__leftDataHeading{
  color: #338ED9;
  font-size: 50px;
  font-weight: 800;
}
.index__leftDataParagraph{
  color: white;
  font-size: 35px;
}

</style>
