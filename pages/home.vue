<template>
  <div class="home">

      <div class="page-wrapper chiller-theme toggled">
        <Sidebar/>

          <!-- sidebar-wrapper  -->
          <main class="page-content">
            <div class="home__pageContent">
              <div class="home__pageContentLeft">
                <label>Enter UserName</label>
                <input type="text"  v-model="username" placeholder="Enter UserName"/>
                <label> Enter Bio</label>
                <input type="text" v-model="bio" placeholder="Enter Bio"/>
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
                 
                  <table class="table">
                        <thead>
                          <tr>
                           
                            <th scope="col">Title</th>
                            <th scope="col">Link</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                            
                          </tr>
                        </thead>
                        <tbody v-for="i in linkList" v-bind:key="i">
                          <tr >
                            
                            <td>{{i.title}}</td>
                            <td>{{i.link}}</td>
                            <td><i class="fa fa-pencil" aria-hidden="true"></i></td>
                            <td><i class="fa fa-trash-o" aria-hidden="true"></i></td>
                            
                          </tr>
                         
                        </tbody>
                      </table>
                </div>
                
              </div>
              <div class="home__pageContentRight">
                <div class="simulator">
                    <div class="smartphone">
                      <div class="content" v-bind:class="backgroundColor">
                           <div class="user-pic">
                            <img class="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" alt="User picture">
                          </div>
                          <p>@{{username}}</p>
                          <p>{{bio}}</p>
                          <div class="example">
                            <ul v-for="i in linkList" v-bind:key="i" class="list-group">
                              <a v-bind:href="i.link" target="_blank" class="list-group-item border border-success list-group-item-action" >{{i.title}}</a>
                            </ul>
                          </div>
                          
                      </div>
                    </div>
                </div>
<button type="button" class="btn btn-success">Save</button>

<button 
   type="button" 
   class="btn btn-danger" 
   v-on:click.prevent ="change">
    change
  </button>

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
export default {
  components:{
    Sidebar
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
              username:'',
              bio:'',
             link:'',
             title:'',
             titleList:[],
             linkList:[],
             color:'white',
             backgroundColor:"content"

        }
    },
    methods:{
      addData:function(){
          this.linkList.push({
            title:this.title,
            link:this.link
          }),
          this.link="",
          this.title=""
          
      },
      change:function(){
          console.log('====================================');
          console.log("change clicked");
          this.backgroundColor='contentRed';
          console.log('====================================');
      },
      
    },
    computed:{
      classObject:function(){
          return {
            color: 'red',
          }
      }
    }


  
}
</script>

<style>


 /* https://codepen.io/azouaoui-med/pen/wpBadb */
 /* https://fontawesome.com/v4.7.0/icon/calendar */


 /* The device with borders */
.smartphone {
  position: relative;
  width: 360px;
  height: 640px;
  margin: auto;
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
.smartphone .contentRed {
  width: 100%;
  height:100%;
  background: red;
  overflow: auto;
}

/* Hide scrollbar for Chrome, Safari and Opera */
.example::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.example {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
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
</style>