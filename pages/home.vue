<template>
  <div class="home">
      <Header/>
        <div class="home__content">
            <div class="home__contentNavBar">
                <img src="../assets/img/white.gif" alt="logo" class="home__contentNavbarLogo"/>
                <p>Logout</p>
            </div>
            <div class="home__contentLinkArea">
               
            <section class="wrapperr">
              <ul class="tabs">
                <li class="active">Content</li>
                <li>Analytics</li>
                <li>Pro</li>
              </ul>

              <ul class="tab__content">
                <li class="active">
                  <div class="content__wrapperr">
                    <h2 class="text-color">Content</h2>
                    
                  
                  </div>
                </li>
                <li>
                  <div class="content__wrapperr">
                    <h2 class="text-color">Analytics</h2>
                    
                  </div>
                </li>
                <li>
                  <div class="content__wrapperr">
                    <h2 class="text-color">Pro</h2>
                    
                  </div>
                </li>
              </ul>
            </section>
            </div>
            <div class="home__contentSimulator">
               <div class="smartphone">
                    <div class="content">
                        <img src="https://gravatar.com/avatar/06249b901095e80d208034c1e220d5ef?s=400&d=robohash&r=x" alt="Avatar" class="avatar">
                        <h3>@akarshbarar</h3>
                        <p> hello</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Header from '../components/Header';
import $ from 'jquery'
export default {
  components:{
    Header
  },
  mounted(){
    $(document).ready(function(){
	
	// Variables
	var clickedTab = $(".tabs > .active");
	var tabwrapperr = $(".tab__content");
	var activeTab = tabwrapperr.find(".active");
	var activeTabHeight = activeTab.outerHeight();
	
	// Show tab on page load
	activeTab.show();
	
	// Set height of wrapperr on page load
	tabwrapperr.height(activeTabHeight);
	
	$(".tabs > li").on("click", function() {
		
		// Remove class from active tab
		$(".tabs > li").removeClass("active");
		
		// Add class active to clicked tab
		$(this).addClass("active");
		
		// Update clickedTab variable
		clickedTab = $(".tabs .active");
		
		// fade out active tab
		activeTab.fadeOut(250, function() {
			
			// Remove active class all tabs
			$(".tab__content > li").removeClass("active");
			
			// Get index of clicked tab
			var clickedTabIndex = clickedTab.index();

			// Add class active to corresponding tab
			$(".tab__content > li").eq(clickedTabIndex).addClass("active");
			
			// update new active tab
			activeTab = $(".tab__content > .active");
			
			// Update variable
			activeTabHeight = activeTab.outerHeight();
			
			// Animate height of wrapperr to new tab height
			tabwrapperr.stop().delay(50).animate({
				height: activeTabHeight
			}, 500, function() {
				
				// Fade in active tab
				activeTab.delay(50).fadeIn(250);
				
			});
		});
	});
	
	// Variables
	var colorButton = $(".colors li");
	
	colorButton.on("click", function(){
		
		// Remove class from currently active button
		$(".colors > li").removeClass("active-color");
		
		// Add class active to clicked button
		$(this).addClass("active-color");
		
		// Get background color of clicked
		var newColor = $(this).attr("data-color");
		
		// Change background of everything with class .bg-color
		$(".bg-color").css("background-color", newColor);
		
		// Change color of everything with class .text-color
		$(".text-color").css("color", newColor);
	});
});
  }
}
</script>

<style>
.avatar {
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: lightgrey;
}
.content{
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
 
  
}
.home__content{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    
    
}
.home__contentNavBar{
  border: 1px solid lightgray;
    padding: 5px 5px;
    width: 5%;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: #333;
}
.home__contentNavbarLogo{
  width: 100px;
  height: 100px;
  object-fit: contain;
}
.home__contentLinkArea{
  background-color: gray;
    flex: 5;

}
.home__contentSimulator{
    flex: 5;
}

/* SMARTPHONE */
/* The device with borders */
.smartphone {
   top: 35px;
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
  height: 100%;
  background: white;
  align-items: center;
  top: 10px;
}
 /* Hide scrollbar for Chrome, Safari and Opera */
.smartphone ::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.smartphone  {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
} 
/* SMARTPHONE */


/* TABS */


.bg-color {
  background-color: #46a1de;
  transition-duration: .5s;
}

.text-color {
  color: #46a1de;
  transition-duration: .5s;
}



.wrapperr {
  min-width: 600px;
  max-width: 900px;
  margin: 0 auto;
}

.tabs {
  display: table;
  table-layout: fixed;
  width: 100%;
  -webkit-transform: translateY(5px);
  transform: translateY(5px);
}
.tabs > li {
  transition-duration: .25s;
  display: table-cell;
  list-style: none;
  text-align: center;
  padding: 20px 20px 25px 20px;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  color: white;
}
.tabs > li:before {
  z-index: -1;
  position: absolute;
  content: "";
  width: 100%;
  height: 120%;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.3);
  -webkit-transform: translateY(100%);
  transform: translateY(100%);
  transition-duration: .25s;
  border-radius: 5px 5px 0 0;
}
.tabs > li:hover:before {
  -webkit-transform: translateY(70%);
  transform: translateY(70%);
}
.tabs > li.active {
  color: #50555a;
}
.tabs > li.active:before {
  transition-duration: .5s;
  background-color: white;
  -webkit-transform: translateY(0);
  transform: translateY(0);
}

.tab__content {
  background-color: white;
  position: relative;
  width: 100%;
  border-radius: 5px;
}
.tab__content > li {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: none;
  list-style: none;
}
.tab__content > li .content__wrapperr {
  text-align: center;
  border-radius: 5px;
  width: 100%;
  padding: 45px 40px 40px 40px;
  background-color: white;
}

.content__wrapperr h2 {
  width: 100%;
  text-align: center;
  padding-bottom: 20px;
  font-weight: 300;
}
.content__wrapperr img {
  width: 100%;
  height: auto;
  border-radius: 5px;
}

.colors {
  text-align: center;
  padding-top: 20px;
}
.colors > li {
  list-style: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-bottom: 5px solid rgba(0, 0, 0, 0.1);
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
  transition-duration: .2s;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.2);
}
.colors > li:hover {
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
  border-bottom: 10px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
}
.colors > li.active-color {
  -webkit-transform: scale(1.2) translateY(-10px);
  transform: scale(1.2) translateY(-10px);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  border-bottom: 20px solid rgba(0, 0, 0, 0.15);
}
.colors > li:nth-child(1) {
  background-color: #2ecc71;
}
.colors > li:nth-child(2) {
  background-color: #D64A4B;
}
.colors > li:nth-child(3) {
  background-color: #8e44ad;
}
.colors > li:nth-child(4) {
  background-color: #46a1de;
}
.colors > li:nth-child(5) {
  background-color: #bdc3c7;
}

/* TABS */
</style>