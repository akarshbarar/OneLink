<template>
  <div class="slug">
           <!-- Alpha.ly Version 0.1 | Development Version -->
    <div class="container">
    <div class="col-xs-12">
            <div class="text-center" style="padding-top: 30px; padding-bottom: 30px;">
                <img class="backdrop linktree" :src="displayPicture" alt="User picture">
                 <h2 style="color: #ffffff; padding-top: 20px;">{{username}}</h2>
                 <h3 style="color: #ffffff; padding-top: 20px;">{{bio}}</h3>
            </div>
    </div>
    </div>


    <div class="container">
    <div class="col-xs-12">
          <div class="contact">
                 <a :href="`tel:+${ callNumber }`" v-if="callChecked" class="fa fa-phone"></a>
                 <a :href="`tel:+${ smsNumber }`" v-if="smsChecked" class="fa fa-comment" aria-hidden="true"></a>
          </div>
                
            <div class="text-center" v-for="i in linkList" v-bind:key="i">
                
                <div style="padding-bottom: 30px;">
                     <a v-bind:href="i.link" target="_blank" class="btn btn-outline-light" style="width: 80%; padding-top:10px; padding-bottom:10px; font-weight: 600;">{{i.title}}</a>
                </div>
            </div>
    </div>
    </div>

        <div class="text-center">
            <a href="#" style="color: #34312f;">powered by OneLink</a>
        </div>
  </div>
</template>

<script>
import db from '../middleware/firebase';

  export default {
    async asyncData({ params }) {
      const slug = params.slug // When calling /abc the slug will be "abc"
      return { slug }
    },
   head(){
    return {
        title: this.slug,
          meta: [
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            {
              name: "description",
              content: "OneLink is a site for all your personal links at one place."
            },
            {
              name: "keyword",
              content:
                "OneLink socail media facebook instagram snapchat whatsapp website portfolio Home Dashboard"
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
  data(){
    return{
        username:'',
        bio:'',
        displayPicture:'',
        callNumber:'',
        smsNumber:'',
        smsChecked:true,
        callChecked:true,
        backgroundImage:'',
        linkList:[],
        uid:'',
    }
      
  },
   created() {
                 
       db.database().ref("maindata").on('value',(snap)=>{
            let datalist = snap.val();
            let slugData=[];
            for(let data in datalist){
             if(datalist[data].setUserName===this.slug){

               this.username=datalist[data].setUserName;
               this.bio=datalist[data].setBio;
               this.displayPicture=datalist[data].displayPicture;
               this.callNumber=datalist[data].setCallNumber;
               this.smsNumber=datalist[data].setSmsNumber;
               this.smsChecked=datalist[data].smsChecked;
               this.callChecked=datalist[data].callChecked;
               this.backgroundImage=datalist[data].backgroundImage;
               this.linkList=datalist[data].Links;
                this.uid=datalist[data].uid;

                    db.database().ref("dispalypicture").child(datalist[data].uid).on('value',(snap)=>{
                                  let datalist = snap.val();
                                  this.displayPicture=datalist.displayPicture;
               });
             
              break;               
             }
            }
            console.log(slugData)
        }) 
  }
 
  }
</script>

<style scoped>
.fa{
  color: white;
}
.contact{
  max-width: 200px;
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-items: center;
  align-items: center;
  align-content: center;
}
.slug {
	width: 100wh;
	height: 100vh;
	color: #fff;
	background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
	background-size: 400% 400%;
	-webkit-animation: Gradient 15s ease infinite;
	-moz-animation: Gradient 15s ease infinite;
	animation: Gradient 15s ease infinite;
}

@-webkit-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@-moz-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

h1,
h6 {
	font-family: 'Open Sans';
	font-weight: 300;
	text-align: center;
	position: absolute;
	top: 45%;
	right: 0;
	left: 0;
}

.shake {
	animation: shake-animation 4.72s ease infinite;
	transform-origin: 50% 50%;
  }
  .element {
	margin: 0 auto;
	width: 150px;
	height: 150px;
	background: red;
  }
  @keyframes shake-animation {
	 0% { transform:translate(0,0) }
	1.78571% { transform:translate(5px,0) }
	3.57143% { transform:translate(0,0) }
	5.35714% { transform:translate(5px,0) }
	7.14286% { transform:translate(0,0) }
	8.92857% { transform:translate(5px,0) }
	10.71429% { transform:translate(0,0) }
	100% { transform:translate(0,0) }
  }

  .backdrop {
	  -moz-box-shadow: 0px 6px 5px #111; 
	  -webkit-box-shadow: 0px 6px 5px #111; 
	  box-shadow: 0px 2px 10px #111; 
	  -moz-border-radius:190px; 
	  -webkit-border-radius:190px; 
	  border-radius:190px;
  }

  .linktree {
	  width: 120px;
	  height: 120px;
	  background-image: url("");
	  background-size: cover;
	  background-repeat: no-repeat;
	  background-position: 50% 50%;
  }
</style>