<template>
  <div class="support page-wrapper chiller-theme toggled">
     <Sidebar/>
    <main class="page-content">
      <center><h1>Pre-Built Component</h1></center>
         <button type="button" class="btn btn-danger" @click="showModal('FaceBook')" >
          Add facebook
         </button>
          <button type="button" class="btn btn-danger"  @click="showModal('Instagram')" >
          Add Instagram
         </button>
          <button type="button" class="btn btn-danger"  @click="showModal('OnlyFan')" >
          Add Onlyfans
         </button>
          <button type="button" class="btn btn-danger"  @click="showModal('Spotify')" >
          Add Spotify
         </button>
          <button type="button" class="btn btn-danger"  @click="showModal('Snapchat')" >
          Add Snapchat
         </button>
          <button type="button" class="btn btn-danger"  @click="showModal('TikTok')" >
          Add TikTok
         </button>
          <button type="button" class="btn btn-danger"  @click="showModal('LinkedIn')" >
          Add LinkedIn
         </button>
          <button type="button" class="btn btn-danger"  @click="showModal('Youtube')" >
          Add YouTube
         </button>
          <button type="button" class="btn btn-danger"  @click="showModal('Discord')" >
          Add Discord
         </button>

<ul class="social-media-container">
	<li class="social-media twitter">
		<i class="fa fa-twitter"></i>
		<a href="" target="_blank">Follow me on Twitter</a>
	</li>
	<li class="social-media facebook">
		<i class="fa fa-facebook-f"></i>
		<a href="" target="_blank">Like my Facebook page</a>
	</li>
</ul>


    <modal
      :title="title" 
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
        title:"",
        isModalVisible: false,
      };
    },
    methods: {
      showModal(e) {
        this.title=e;
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



/* 
 */







.social-media-container {
	position: fixed;
	top: 50%;
	left: calc(100% - 60px);
	list-style-type: none;
	padding: 0;
	transform: translateY(-50%);
	min-width: 250px;
}

.social-media {
	align-items: center;
	display: flex;
	transition: transform .3s ease-in-out;
}

.social-media:hover {
	transform: translateX(calc(-100% + 60px));
}

.social-media.blog {
	background-color: #e17b77;
}

.social-media.facebook {
	background-color: #3b5998;
}

.social-media.twitter {
	background-color: #00aced;
}

.social-media.github {
	background-color: #333;
}

.social-media.linkedin {
	background-color: #007bb6;
}

.social-media i {
	color: #fff;
	font-size: 20px;
	padding: 15px;
	text-align: center;
	width: 60px;
}

.social-media a {
	color: #fff;
	padding: 0 10px;
}

footer {
    background-color: #222;
    color: #fff;
    font-size: 14px;
    bottom: 0;
    position: fixed;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 999;
}

footer p {
    margin: 10px 0;
}

footer i {
    color: red;
}

footer a {
    color: #3c97bf;
    text-decoration: none;
}
</style>