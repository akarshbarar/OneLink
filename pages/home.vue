<template>
  <div class="home">

      <div class="page-wrapper chiller-theme toggled">
      
        <Sidebar/>
  
          <!-- sidebar-wrapper  -->
          <main class="page-content">
            <Header/>
        <div v-if="loading">
            <!-- here put a spinner or whatever you want to indicate that a request is in progress -->
            <Loading/>
        </div>

        <div v-else>
            <!-- request finished -->
             <div class="home__pageContent">
              <div class="home__pageContentLeft">
                 <label>Your Link is:</label>
                <input v-if="displaylink" type="text" :disabled="true"   v-model="linkusername" />

                <label>Enter UserName</label>
                <input id="usernameid" type="text" :disabled="disabled"   v-model="username" placeholder="Enter UserName"/>
                <label> Enter Bio</label>
                <input id="bio" type="text" v-model="bio" placeholder="Enter Bio"/>
                <label> Enter Text Number</label>
                <input  type="number" v-model="smsnumber" placeholder="Enter SMS number"/>
                

                <label> Enter Call Number</label>
                <input  type="number" v-model="callnumber" placeholder="Enter Call Number"/>

            
                <label> Upload Image</label>
                <input  accept="image/*" @change="uploadImage($event)" type="file" />
                <hr/>
                <h3>Add Links</h3>
                		

                <form @submit.prevent="addData">
                    <input type="text" name="name" class="question" id="nme" v-model="title" required autocomplete="off" />
                    <label for="nme"><span>Enter Title</span></label>

                    <input type="url" name="name" class="question" id="nme" v-model="link" required autocomplete="off" />
                <label for="nme"><span>Enter your URL</span></label>


                   <button type="submit" class="login__submit">Add Link</button>
                </form>
               
                <div class="example">
                
                 
                  <table class="table table-sm">
                        <thead>
                          <tr>
                           
                            <th scope="col">Title</th>
                            <th scope="col">Link</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                            
                          </tr>
                        </thead>
                        <!-- <draggable v-model="linklist">
                        <transition-group> -->
                        <tbody v-for="i in linklist" v-bind:key="i">
                          <tr id="sort_me">
                            
                            <td>{{i.title}}</td>
                            <td>{{i.link}}</td>
                            <td @click.prevent="edit(i)"><i class="fa fa-pencil" aria-hidden="true" ></i></td>
                            <td @click.prevent="remove(i)"><i class="fa fa-trash-o" aria-hidden="true"></i></td>
                            
                          </tr>
                         
                        </tbody>
                        <!-- </transition-group>
                         </draggable> -->
                      </table>
                 
               
                </div>
                
              </div>
              <div class="home__pageContentRight">
                <button type="button" class="btn btn-success" @click.prevent="save">Save</button>
                <div class="simulator">
                    <div class="smartphone">
                      <div class="content" v-bind:class="backgroundColor" v-bind:style="{ 'background-image': 'url(' + backgroundImage + ')' ,'background-size': '100% 100%','background-repeat': 'no-repeat' }">
                           <div class="user-pic">
                            <img class="img-responsive img-rounded" :src="dp_image" alt="User picture">
                          </div>
                          <p>@{{username}}</p>
                          <p>{{bio}}</p>
                          <div class="button-bar">
                            <i v-if="callchecked" class="fa fa-phone"></i>
                            <i v-if="smschecked" class="fa fa-comment" aria-hidden="true"></i>
                          </div>
                          <div class="example">
                            <ul v-for="i in linklist" v-bind:key="i" class="list-group">
                              <a v-bind:href="i.link" target="_blank" class="list-group-item border border-success list-group-item-action" >{{i.title}}</a>
                            </ul>
                          </div>
                          
                      </div>
                    </div>
                </div>
            <div class="customization">
            
                  <div class="shows">
                    <div class="show__sms">
                        <label for="checkbox">Show SMS number</label>
                        <input type="checkbox" id="checkbox" v-model="smschecked">

                    </div>
                    <div class="show__sms">
                       <label for="checkbox">Show Call number</label>
                       <input type="checkbox" id="checkbox" v-model="callchecked">
                    </div>
                     <!-- <div class="show__background">
                       <label> Upload Background Image</label>
                       <input  accept="image/*" @change="uploadBackgroundImage($event)" type="file" />
                    </div> -->
                  
                   
                  </div>
             
            </div>
              
              </div>
            </div>
        </div>
           
            
          </main>
          <!-- page-content" -->
        </div>
        <!-- page-wrapper -->
  </div>
</template>

<script>
import $ from 'jquery'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Loading from '../components/loading'
import usernames from '../middleware/username'
import { mapMutations } from 'vuex'
import { mapState } from 'vuex'
import db from '../middleware/firebase'

export default {
  components:{
    Sidebar,
    Header,
    Loading
  },
  head(){
    return {
        title: "OneLink | Home",
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
          displaylink:false,
          loading: false,
          linkusername:'',
          dp_image:"https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg",
          backgroundImage:"",
          callchecked:true,
          smschecked:true,
          smsnumber:0,
          callnumber:0,
          username:'',
          bio:'',
          link:'',
          title:'',
          titleList:[],
          linklist:[],
          color:'white',
          backgroundColor:"content",
          disabled:false,
          image:'',
          downloadedURL:''
            
        }
    },
    methods:{

      uploadImage(e) {

                        this.image = e.target.files[0];
                        const reader = new FileReader();
                        reader.readAsDataURL(this.image);
                        reader.onload = e =>{
                            this.dp_image = e.target.result;
                        };
                    
      },
      uploadBackgroundImage(e) {

                        const image = e.target.files[0];
                        const reader = new FileReader();
                        reader.readAsDataURL(image);
                        reader.onload = e =>{
                            this.backgroundImage ="'"+ e.target.result+"'";
                            this.$store.commit('setBackgroundImage',e.target.result);

                        };
                    
      },
      addData:function(){

          this.linklist.push({
            title:this.title,
            link:this.link
          }),

          this.link="",
          this.title=""
          
      },
      save:function(){
        var txt;
       var index= usernames.indexOf(this.username);
       if(index>0){
         alert("Please use another username. Username already taken");
       }
       else{
            var r = confirm("You are about to set UserName Once set will not be changed. Do you agree");
        if (r == true) {
         alert("Please Wait while we are uplaoding data. We will Confirm you once done.")

        document.getElementById("usernameid").disabled = true;
         usernames.push(this.username);
          // this.loading=true;
          this.$store.commit('setUserName',this.username);
          this.$store.commit('setBio',this.bio);
          // this.$store.commit('addLinks',this.linklist);
          this.$store.commit('setSmsNumber',this.smsnumber);
          this.$store.commit('setCallNumber',this.callnumber);

            this.linkusername="https://onlink-ten.vercel.app/"+this.username;
            this.displaylink=true;

           var uplaodTask= db.storage()
            .ref(db.auth().currentUser.uid).child("DIsplayPicture")
            .put(this.image);

            uplaodTask.on('state_changed',
            function(snapshot){          
            },
            function(err){
              alert(err)
            },
            function(){
               uplaodTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                console.log('File available at', downloadURL);

                    db.database().ref("dispalypicture").child(db.auth().currentUser.uid).set({
                        "displayPicture":downloadURL,
                        "uid":db.auth().currentUser.uid
                      },(err)=>{
                        if(err){
                          console.error(err);
                          alert(err.message)
                        }
                        else{
                          console.log("DATA SAVED")	
                          alert("Image Saved.")
                          this.loading=false;
                        }
                      })
                    });
            }
            
            );
             // SAVE DATA
          db.database().ref("maindata").child(db.auth().currentUser.uid).set({
									"setUserName":this.username,
									"setBio":this.bio,
                  "setSmsNumber":this.smsnumber,
                  "smsChecked":this.smschecked,
                  "setCallNumber":this.callnumber,
                  "callChecked":this.callchecked,
                  "backgroundImage":this.backgroundImage,
                  "Links":this.linklist,
									"uid":db.auth().currentUser.uid
								},(err)=>{
									if(err){
										console.error(err);
										alert(err.message)
									}
									else{
                    console.log("DATA SAVED")	
                    alert("Data Saved.")
                    this.loading=false;
									}
								})
        // Save DAta	  
        } else {
          alert("Process Aborted..")
        }
       }

      },
      change:function(){
          console.log('====================================');
          console.log("change clicked");
          this.backgroundColor='contentRed';
          console.log('====================================');
      },
      edit:function(e){
        var txt;
          var r = confirm("You are about to Edit a Link");
          if (r == true) {
            this.title=e.title;
            this.link=e.link;
            const index = this.linklist.indexOf(e);
              if (index > -1) {
                this.linklist.splice(index, 1);
              }
          }
      },
      remove:function(e){

        const index = this.linklist.indexOf(e);
        if (index > -1) {
          this.linklist.splice(index, 1);
        }
      },  
    },
    computed:{

    ...mapState({
          loggedIn:state=>state.loggedIn,
          userName:state=>state.userName,
          Bio:state=>state.Bio,
          smsNumber:state=>state.smsNumber,
          callNumber:state=>state.callNumber,
          UID:state=>state.UID
        }),
      

    },
    created(){
   
        if(!this.loggedIn){
         this.$router.push({ path: '/login' })
        }

        db.auth().onAuthStateChanged((user) => {
          if (user) {
            // User logged in already or has just logged in.
               db.database().ref("dispalypicture").child(user.uid).on('value',(snap)=>{
                                   let datalist = snap.val();
                                   this.dp_image=datalist.displayPicture;
               });


               db.database().ref("maindata").child(user.uid).on('value',(snap)=>{
                  let datalist = snap.val();
                  //  document.getElementById("usernameid").disabled = true;
              this.linkusername="https://onlink-ten.vercel.app/"+datalist.setUserName;
            this.displaylink=true;

                    this.disabled=true;
                    this.username=datalist.setUserName;
                    this.bio=datalist.setBio;
                    this.callnumber=datalist.setCallNumber;
                    this.smsnumber=datalist.setSmsNumber;
                    this.smschecked=datalist.smsChecked;
                    this.callchecked=datalist.callChecked;
                    this.backgroundImage=datalist.backgroundImage;
                    this.linklist=datalist.Links;
    
              }) 
          
          } else {
            // User not logged in or has just logged out.
             this.$router.push({ path: '/login' })

          }
          })
       

    },
    mounted(){

    }
     
}
</script>

<style scoped>
.customization{
  margin-bottom: 10px;
   display: flex;
  flex-direction: column;
  align-items: center;
}
.shows{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button-bar {
  display: flex;
 
}
@media screen and (min-width: 600px) {
  .button-bar {
    grid-gap: 40px;
    grid-template-columns: repeat(6, 1fr);
  }
}


 /* https://codepen.io/azouaoui-med/pen/wpBadb */
 /* https://fontawesome.com/v4.7.0/icon/calendar */
.page-wrapper .page-content {
  padding: 0;
}
.page-wrapper.toggled .page-content {
    padding-left: 260px;
}
.upload__dp{
  display: flex;
  flex-direction: row;
  align-items: center;
}
.home{
  overflow: auto;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.home::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.home {
  -ms-overflow-style: none; 
   /* IE and Edge */
  scrollbar-width: none; 
   /* Firefox */
}
/* Hide scrollbar for Chrome, Safari and Opera */
.example::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.example {
  -ms-overflow-style: none;  
  /* IE and Edge */
  scrollbar-width: none;  
  /* Firefox */
}
 /* The device with borders */
.smartphone {
  position: relative;
  width: 360px;
  height: 640px;
  margin: auto;
 
  margin-top: 5%;
  border: 16px black solid;
  border-top-width: 60px;
  border-bottom-width: 60px;
  border-radius: 36px;
}

/* The horizontal line on the top of the device */
.smartphone:before {
  content: '';
  display: block;
  width: 60px;
  height: 5px;
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 10px;
}

/* The circle on the bottom of the device */
.smartphone:after {
  content: '';
  display: block;
  width: 35px;
  height: 35px;
  position: absolute;
  left: 50%;
  bottom: -65px;
  transform: translate(-50%, -50%);
  background: #333;
  border-radius: 50%;
}

/* The screen (or content) of the device */
.smartphone .content {
  width: 100%;
  height:100%;
  background: white;
  overflow: auto;
}
/* .smartphone .contentRed {
  width: 100%;
  height:100%;
  background: red;
  overflow: auto;
} */
.smartphone .contentRed  {
    /* background-image: url("https://cdn.pixabay.com/photo/2017/10/13/14/15/fantasy-2847724_960_720.jpg"); */
        background-image: url("https://cdn.pixabay.com/photo/2012/12/27/19/41/halloween-72939_960_720.jpg");
        color: white;
   
	/* background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); */
	/* background-size: 400% 400%; */
	animation: gradient 15s ease infinite;
}

@keyframes gradient {
	0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
}


.content{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  align-items: center;
  }

.content > .user-pic >img{
  margin-top:25px ;
  width: 100px;
  height:100px;
  object-fit: contain;
  border-radius: 999px;
  /* margin-left: 25%;
  margin-right: 25%; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
}


.home__pageContent{
  display: flex;
  flex-direction: row;

}
.home__pageContentLeft{
  display: flex;
  flex-direction: column;
  flex:3;
  color: black;
}
.home__pageContentLeft >label {
  margin-top: 10px;
}
.home__pageContentRight{

  flex: 2;
}

.preview{
 margin-left: 25%;
 right: 0;
}
.login__submit {
  position: relative;
  width: 100%;
  height: 4rem;
  margin: 3rem 0 2.2rem;
  color: rgba(255, 255, 255, 0.8);
  background: #000;
  font-size: 1.5rem;
  border-radius: 3rem;
  cursor: pointer;
  overflow: hidden;
  -webkit-transition: width 0.3s 0.15s, font-size 0.1s 0.15s;
  transition: width 0.3s 0.15s, font-size 0.1s 0.15s;
}
.form__input{
  width: 100%;
}



textarea:focus,
input:focus {
  outline: 0;
}
/* Question */

input.question,
textarea.question {
  font-size: 48px;
  font-weight: 300;
  border-radius: 2px;
  margin: 0;
  border: none;
  width: 80%;
  background: rgba(0, 0, 0, 0);
  transition: padding-top 0.2s ease, margin-top 0.2s ease;
  overflow-x: hidden; /* Hack to make "rows" attribute apply in Firefox. */
}
/* Underline and Placeholder */

input.question + label,
textarea.question + label {
  display: block;
  position: relative;
  white-space: nowrap;
  padding: 0;
  margin: 0;
  width: 10%;
  border-top: 1px solid red;
  -webkit-transition: width 0.4s ease;
  transition: width 0.4s ease;
  height: 0px;
}

input.question:focus + label,
textarea.question:focus + label {
  width: 80%;
}

input.question:focus,
input.question:valid {
  padding-top: 35px;
}

textarea.question:valid,
textarea.question:focus {
  margin-top: 35px;
}

input.question:focus + label > span,
input.question:valid + label > span {
  top: -100px;
  font-size: 22px;
  color: #333;
}

textarea.question:focus + label > span,
textarea.question:valid + label > span {
  top: -150px;
  font-size: 22px;
  color: #333;
}

input.question:valid + label,
textarea.question:valid + label {
  border-color: green;
}

input.question:invalid,
textarea.question:invalid {
  box-shadow: none;
}

input.question + label > span,
textarea.question + label > span {
  font-weight: 300;
  margin: 0;
  position: absolute;
  color: #8F8F8F;
  font-size: 48px;
  top: -66px;
  left: 0px;
  z-index: -1;
  -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
}

input[type="submit"] {
  -webkit-transition: opacity 0.2s ease, background 0.2s ease;
  transition: opacity 0.2s ease, background 0.2s ease;
  display: block;
  opacity: 0;
  margin: 10px 0 0 0;
  padding: 10px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background: #EEE;
}

input[type="submit"]:active {
  background: #999;
}

input.question:valid ~ input[type="submit"], textarea.question:valid ~ input[type="submit"] {
  -webkit-animation: appear 1s forwards;
  animation: appear 1s forwards;
}

input.question:invalid ~ input[type="submit"], textarea.question:invalid ~ input[type="submit"] {
  display: none;
}

@-webkit-keyframes appear {
  100% {
    opacity: 1;
  }
}

@keyframes appear {
  100% {
    opacity: 1;
  }
}
.example__ul{
  width: 100%;
  max-width: 700px;
}
.example__li{
  width: 100%;
  font-size: large;
  font-weight: 600;
  border: 1px solid black;
  padding: 8px;
}
.example__li:hover{
  background-color: black;
  color: white;
  border: 1px solid white;
}
/* https://codepen.io/P1N2O/pen/pyBNzX */
/*  */

@media screen and (max-width: 1600px) {

  .home__pageContent{
    display: flex;
    flex-direction: column-reverse;
  }
}
@media screen and (max-width: 500px) {
  .simulator{
    display: none;
  }

  .home__pageContentRight > .btn-danger{
    display: none;
  }
  .home__pageContentRight{
    display: none;
  }
}
</style>