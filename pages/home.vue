<template>
  <div class="home">
      <Navbar/>
        <div class="home__content">
            <div class="home__contentNavBar">
                <p>OL</p>
                <p>Logout</p>
            </div>
            <div class="home__contentLinkArea">
                
            </div>
            <div class="home__contentSimulator">
               <div class="smartphone">
                    <div class="content">
                        <h1>hii i am phone</h1>
                        <p> hello</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
export default {
    components:{
        Navbar
    }
}
</script>

<style>

.home__content{
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: row;
    
    
}
.home__contentNavBar{
    padding: 5% 0;
    width: 3%;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: #333;
}
.home__contentLinkArea{
    background-color: yellow;
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
</style>