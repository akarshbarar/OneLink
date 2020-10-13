<template>
 <div class="index">
   <div class="index__left">
     <div class="index__leftData">
        <p class="index__leftDataHeading">OneLink for All Links</p>
        <p class="index__leftDataParagraph">OneLink You need</p>
     </div>
   </div>
   <div class="index__right">
     <div class="index__rightData">
       <img src="img_avatar.png" alt="Avatar" class="avatar">
       <p>"Its really awesome!"</p>
     </div>
      <div class="index__rightData">
       <img src="img_avatar.png" alt="Avatar" class="avatar">
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
  margin-top:25% ;
    align-items: center;

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
.index__right{
  display: flex;
  align-items: center;
}
.index__rightData{
  margin: 35px;
  width: 300px;
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  box-shadow: grey;
  
}
.index__rightData > p{
  margin-left: 10px;
}
.avatar {
  vertical-align: middle;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: red;
}
</style>
