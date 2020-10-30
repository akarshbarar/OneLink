<template>
  <div class="support page-wrapper chiller-theme toggled">
     <Sidebar/>
    <div class="component">
      
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
import $ from 'jquery'
export default {
components:{
    Sidebar,

  },
   head(){
    return {
        title: "OneLink | Support",
          meta: [
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
              name: "description",
              content: "OneLink is a site for all your personal links at one place."
            },
            {
              name: "keyword",
              content:
                "OneLink socail media facebook instagram snapchat whatsapp website portfolio Home Support"
            }
          ],
          link: [
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
          },
          { 
             rel:"stylesheet", 
             href:"https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css", 
             integrity:"sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2", 
             crossorigin:"anonymous"
          }

        ]
    }
  },
  mounted(){
    	
  }
}
</script>

<style>

</style>