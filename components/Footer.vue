<template>
  <div class="footer">
    <div class="footer__socialmedia">
      <p>Made with 💖 in India</p>
      <div class="social-menu">
            <ul>
              <li><a href=""><i class="fa fa-facebook"></i></a></li>
              <li><a href=""><i class="fa fa-twitter"></i></a></li>
              <li><a href=""><i class="fa fa-instagram"></i></a></li>
              <li><a href=""><i class="fa fa-youtube"></i></a></li>
              <li><a href=""><i class="fa fa-linkedin"></i></a></li>
            </ul>
      </div>
      <p>Copyright 2020 OnLink</p>
    </div>
    <div class="col-wrap "><!-- style col-shadow/ col-gray/ testimonial/-->
	<div class="container ">

      <!-- Two columns of text below the Box -->
      <div class="row-fluid tb-mar"><!-- box-style row Class .box-style -->

        <div class="span12">
			<div class="subscrib homesub">
				<form> 
	        <!--   Big Title wrap -->	

						  <h1>Subscribe to our newsletter</h1>	
				<p>
					<input type="email" placeholder="Enter Email" />
				  <input type="submit" class="submit button purchase btn-sent " value="Subscribe Now">
				</p>

				<p></p>
				</form>

			</div><!-- /portfolio-item -->
        </div><!-- /.span4 -->
 		
			 
      </div><!-- /.row -->		
	 
 
	</div><!-- /.container -->
</div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {

mounted(){

},
methods:{
  subscribe:function(){
    
  }
}

}
</script>

<style>
.footer{
  background-color: lightgrey;
  display: flex;
  flex-direction: row;
  padding: 5%;

  justify-content: space-between;
}

.social-menu ul {

    display: flex;
}
.social-menu ul li {
    list-style: none;
    /* margin: 0 10px; */
}
.social-menu ul li .fa {
    color: #000000;
    font-size: 25px;
    line-height: 50px;
    transition: .5s;
}
.social-menu ul li .fa:hover {
    color: #ffffff;
}

.social-menu ul li:nth-child(1) a:hover {
    background-color: #3b5999;
}
.social-menu ul li:nth-child(2) a:hover {
    background-color: #55acee;
}
.social-menu ul li:nth-child(3) a:hover {
    background-color: #e4405f;
}
.social-menu ul li:nth-child(4) a:hover {
    background-color: #cd201f;
}
.social-menu ul li:nth-child(5) a:hover {
    background-color: #0077B5;
}


.col-wrap {
    background-size: 100% 100% !important;
    clear: left;
    width: 100%;
}
.container {
    margin-left: auto;
    margin-right: auto;
    padding: 0 10px;
    width: 1030px;
}
.row-fluid {
    width: 100%;
}
.subscrib {
    background-attachment: scroll;
    background-clip: inherit;
    background-color: rgba(0, 0, 0, 0);
    background-origin: padding-box;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    border-radius: 5px;
}
.subscrib form {
    border-radius: 5px;
    margin: 0 auto;
    padding: 20px 30px 30px;
    text-align: center;
    width: 84%;
    display: flex;
    flex-direction: column;
}
.subscrib > form >p {
  display: flex;
  flex-direction: row;
}
h1 {
    color: #2A323A;
    font-family: 'Roboto',sans-serif;
    font-size: 24px;
    font-weight: normal;
    margin: 0;
}

/* hr */
.hr.hr-center {
    margin: 0 auto 10px;
}
.hr.hr-center {
    width: 223px;
}
.hr {
    clear: both;
    display: block;
    height: 25px;
    line-height: 25px;
    margin: 0 0 10px;
    position: relative;
    width: 223px;
}
.hr-center .hr-inner:before {
    background: none repeat scroll 0 0 #D7D7D7;
    content: "";
    display: block;
    float: left;
    height: 2px;
    left: 0;
    position: absolute;
    width: 99px;
    z-index: 99;
}
.hr-center .hr-inner:after {
    background: none repeat scroll 0 0 #D7D7D7;
    content: "";
    display: block;
    height: 2px;
    left: 126px;
    position: absolute;
    width: 99px;
    z-index: 99;
}
.hr-inner {
    background: none repeat scroll 0 0 rgba(0, 0, 0, 0);
    float: left;
}
.hr-inner {
    background: none repeat scroll 0 0 #D7D7D7;
    height: 2px;
    left: 0;
    position: absolute;
    top: 50%;
    width: 100%;
}
.hr-center .hr-inner-style {
    left: 50%;
    margin-left: -10px;
    margin-top: -2px;
}
.hr-inner-style {
    border-radius: 20px;
    border-style: solid;
    border-width: 2px;
    display: block;
    height: 2px;
    margin-left: 0;
    margin-top: -2px;
    position: absolute;
    width: 17px;
}

.container p {
    font-size: 14px;
   color: #2A323A;
    font-family:sans-serif;
    line-height: 24px;
}

.subscrib input {
    margin: 0;
    padding: 6px 8px;
    width: 100%;
}
.button.btn-sent {
    margin: 0;
    padding: 8px 16px;
    top: 0;
}
.button.purchase {
    padding: 8px 15px 8px 10px;
}
a.button, .button {
    background-color: black;
    border-color: black;
}
a.button, .button {
    background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.23) 0%, rgba(255, 255, 255, 0) 100%);
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    color: #FFFFFF !important;
    display: inline-block;
    width: 100%;
    font-size: 13px;
    font-weight: bold;
    margin-top: 10px;
    padding: 5px 15px;
    transition: all 0.2s ease-out 0s;
}

/* SUBSCRIBE */
@media screen and (max-width: 1200px) {
  .footer{
    display: flex;
    flex-direction: column;
  }
   .social-menu{
      display: flex;
      justify-content: space-evenly;
  }
  .subscrib > form >p {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 400px) {
  .footer{
    display: flex;
    flex-direction: column;
  }
   .social-menu{
      display: grid;
      grid-template-columns: repeat(5,20px);
      /* justify-content: space-evenly; */
  }
  .subscrib > form >p {
    display: flex;
    flex-direction: column;
  }
}

</style>