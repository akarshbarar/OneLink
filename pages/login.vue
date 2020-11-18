<template>
  <div class="login">
      <Navbar/>
	  <div v-if="loading">
            <!-- here put a spinner or whatever you want to indicate that a request is in progress -->
			<Loading/>
        </div>
		<div v-else>
           	<div class="login-wrap">
			<div class="login-html">
				
				<!-- request finished -->
				<input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label>
				<input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>
				<div class="login-form">
					<div class="sign-in-htm">
						<div class="group">
							<label for="user" class="label">Email or Username</label>
							<input id="user" :disabled="disabled" type="text" class="input" v-model="signin__email" placeholder="Enter Email or Username">
						</div>
						<div class="group">
							<label for="pass" class="label">Password</label>
							<input id="pass" :disabled="disabled" type="password" class="input" v-model="signin__password" data-type="password" placeholder="Enter Password">
						</div>
						<div class="group">
							<input id="check" type="checkbox" class="check" checked>
							<label for="check"><span class="icon"></span> Keep me Signed in</label>
						</div>
						<div class="group">
							<input type="submit" class="button" value="Sign In" @click.prevent="signin">
						</div>
						<div class="hr"></div>
						<div class="foot-lnk">
							<nuxt-link to="/forgotpassword">Forgot Password?</nuxt-link>
						</div>
					</div>
					<div class="sign-up-htm">
						<div class="group">
							<label for="user" class="label">Full Name</label>
							<input id="user" type="text" :disabled="disabled" v-model="signup__fullname" class="input" placeholder="Enter Full Name">
						</div>
						<div class="group">
							<label for="pass" class="label">Email Address</label>
							<input id="pass" type="email" :disabled="disabled" class="input" v-model="signup__email" placeholder="Enter Email">
						</div>

						<div class="group">
							<label for="pass" class="label">Password</label>
							<input id="pass" type="password" :disabled="disabled" class="input" v-model="signup__password" data-type="password" placeholder="Enter Password">
						</div>
						<div class="group">
							<label for="pass" class="label">Repeat Password</label>
							<input id="pass" type="password" :disabled="disabled" class="input" v-model="signup__confirmPassword" data-type="password" placeholder="Confirm Username">
						</div>
						
						<div class="group">
							<input type="submit" class="button" value="Sign Up" @click.prevent="signup">
						</div>
						<div class="hr"></div>
						
					</div>
				</div>
				
			</div>
		</div>
        </div>
	
  </div>

</template>

<script>
import $ from 'jquery'
import Navbar from '../components/Navbar'
import Loading from '../components/loading'
import db from '../middleware/firebase'
export default {
data(){
	return{
		signin__email:'',
		signin__password:'',
		signup__fullname:'',
		signup__email:'',
		signup__password:'',
		signup__confirmPassword:'',
		loading:false,
		disabled:false

	}
	
},
components:{
	Navbar,
	Loading
},
created(){
	db.auth().onAuthStateChanged((user) => {
		if (user) {
			// User logged in already or has just logged in.
			this.$router.push({ path: '/home' })

		
		} else {
			// User not logged in or has just logged out.
		}
		})
},
  head: {
    title: "OneLink | Login",
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
		mounted(){
		
		},
		methods:{
			signin:function(){
				    					this.disabled=true;

					db.auth()
					  .signInWithEmailAndPassword(this.signin__email, this.signin__password)
					  .then((e)=>{
						  this.$store.commit('isLoggedIn',true);
						  this.$router.push({ path: '/home' })
					  })
					  .catch(function(error) {
						// Handle Errors here.
						var errorCode = error.code;
						var errorMessage = error.message;
						alert(errorMessage)
						// ...
						});
			},
			signup:function(){

				if(this.signup__password===this.signup__confirmPassword){
					this.disabled=true;
					db.auth()
					  .createUserWithEmailAndPassword(this.signup__email, this.signup__password)
					  .then((e)=>{
						    db.database().ref("Users").child(e.user.uid).set({
									"name":this.signup__fullname,
									"email":this.signup__email,
									"password":this.signup__password,
									"uid":e.user.uid
								},(err)=>{
									if(err){
										console.error(err);
										alert(err.message)
									}
									else{
										console.log("DATA SAVED")

										this.$store.commit('setName',this.signup__fullname);
										this.$store.commit('setUID',e.user.uid);

										this.$store.commit('isLoggedIn',true);
						  				this.$router.push({ path: '/home' })
										
									}
								})
					  })
					  .catch(function(error) {
						// Handle Errors here.
						var errorCode = error.code;
						var errorMessage = error.message;
						alert(errorMessage)
						// ...
						});
				}
				else{
					alert("Password does not match")
				}

				
			}

		},
		  asyncData () {
			return new Promise((resolve) => {
			setTimeout(function () {
				resolve({})
			}, 1000)
			})
		}
}
</script>

<style scoped>




.login-wrap{
	width:100%;
	margin:5% auto;
	max-width:525px;
	min-height:670px;
	position:relative;
	background:url(https://raw.githubusercontent.com/khadkamhn/day-01-login-form/master/img/bg.jpg) no-repeat center;
	box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);
}
.login-html{
	width:100%;
	height:100%;
	position:absolute;
	padding:90px 70px 50px 70px;
	background:gray;
}
.login-html .sign-in-htm,
.login-html .sign-up-htm{
	top:0;
	left:0;
	right:0;
	bottom:0;
	position:absolute;
	transform:rotateY(180deg);
	backface-visibility:hidden;
	transition:all .4s linear;
}
.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check{
	display:none;
}
.login-html .tab,
.login-form .group .label,
.login-form .group .button{
	text-transform:uppercase;
}
.login-html .tab{
	font-size:22px;
	margin-right:15px;
	padding-bottom:5px;
	margin:0 15px 10px 0;
	display:inline-block;
	border-bottom:2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .sign-up:checked + .tab{
	color:#fff;
	border-color:black;
}
.login-form{
	min-height:345px;
	position:relative;
	perspective:1000px;
	transform-style:preserve-3d;
}
.login-form .group{
	margin-bottom:15px;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button{
	width:100%;
	color:#fff;
	display:block;
}
.login-form .group .input,
.login-form .group .button{
	border:none;
	padding:15px 20px;
	border-radius:25px;
	background:rgba(255,255,255,.1);
}
.login-form .group input[data-type="password"]{
	text-security:circle;
	-webkit-text-security:circle;
}
.login-form .group .label{
	color:#000;
	font-size:12px;
}
.login-form .group .button{
	background:black;
}
.login-form .group label .icon{
	width:15px;
	height:15px;
	border-radius:2px;
	position:relative;
	display:inline-block;
	background:rgba(255,255,255,.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after{
	content:'';
	width:10px;
	height:2px;
	background:#fff;
	position:absolute;
	transition:all .2s ease-in-out 0s;
}
.login-form .group label .icon:before{
	left:3px;
	width:5px;
	bottom:6px;
	transform:scale(0) rotate(0);
}
.login-form .group label .icon:after{
	top:6px;
	right:0;
	transform:scale(0) rotate(0);
}
.login-form .group .check:checked + label{
	color:#fff;
}
.login-form .group .check:checked + label .icon{
	background:black;
}
.login-form .group .check:checked + label .icon:before{
	transform:scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after{
	transform:scale(1) rotate(-45deg);
}
.login-html .sign-in:checked + .tab + .sign-up + .tab + .login-form .sign-in-htm{
	transform:rotate(0);
}
.login-html .sign-up:checked + .tab + .login-form .sign-up-htm{
	transform:rotate(0);
}

.hr{
	height:2px;
	margin:60px 0 50px 0;
	background:rgba(255,255,255,.2);
}
.foot-lnk{
	text-align:center;
}
</style>