<template>
  <div class="support page-wrapper chiller-theme toggled">
     <Sidebar/>
    <main class="page-content">
      <center><h1>Pre-Built Component</h1></center>
         <button type="button" class="btn btn-danger"  @click="showModal" >
          Add facebook
         </button>
          <button type="button" class="btn btn-danger"  @click="showModal" >
          Add Instagram
         </button>
          <button type="button" class="btn btn-danger"  @click="showModal" >
          Add Onlyfans
         </button>
          <button type="button" class="btn btn-danger"  @click="showModal" >
          Add Spotify
         </button>
          <button type="button" class="btn btn-danger"  @click="showModal" >
          Add Snapchat
         </button>
          <button type="button" class="btn btn-danger"  @click="showModal" >
          Add TikTok
         </button>
          <button type="button" class="btn btn-danger"  @click="showModal" >
          Add LinkedIn
         </button>
          <button type="button" class="btn btn-danger"  @click="showModal" >
          Add YouTube
         </button>
          <button type="button" class="btn btn-danger"  @click="showModal" >
          Add Discord
         </button>
    <modal
      v-show="isModalVisible"
      @close="closeModal"
    />
    </main>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'
  import modal from '../components/modal.vue';
import $ from 'jquery'
export default {
components:{
    Sidebar,
      modal,

  },
  
    data () {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
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
.support{
  display: flex;
  flex-direction: row;
}

</style>