<template>
  <div class="blog">
      <Navbar/>
      
  </div>
</template>

<script>
import $ from 'jquery'
import Navbar from '../components/Navbar'
import Loading from '../components/loading'
export default {
components:{
	Navbar,
	Loading
},
  head: {
    title: "OneLink | About us",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: "OneLink is a site for all your personal links at one place."
      },
      {
        name: "keyword",
        content:
          "OneLink socail media facebook instagram snapchat whatsapp website portfolio Login"
      }
    ]
  },
}
</script>

<style>

</style>