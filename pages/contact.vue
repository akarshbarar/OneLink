<template>
  <div class="contact">
      <Navbar/>
      <section>
  <div class="container">
    <div class="contactinfo">
      <div>
        <h2>Contact Us</h2>
        <ul class="info">
          <li>
            <span>
              <img src="https://www.clipartmax.com/png/middle/121-1214856_pro-locator-free-location-icon-vector.png" />
            </span>
            <span>
              1 John Smith Street <br />
              Smithville <br />
              Smithland
            </span>
          </li>
          <li>
            <span>
              <img src="https://p7.hiclipart.com/preview/663/97/225/email-computer-icons-message-bounce-address-email-icon.jpg" />
            </span>
            <span>
              johnsmith@johnsmith.com
            </span>
          </li>
          <li>
            <span>
              <img src="https://www.pinclipart.com/picdir/middle/210-2108807_tete-mobile-svg-png-icon-free-download-phone.png" />
            </span>
            <span>
              01234567890
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="contactusform">
      <h2>Send Us A Message</h2>
      <div class="formBox">
        <div class="inputBox w50">
          <input type="text" name="" required>
          <span>First Name</span>
        </div>
        <div class="inputBox w50">
          <input type="text" name="" required>
          <span>Last Name</span>
        </div>
        <div class="inputBox w50">
          <input type="text" name="" required>
          <span>Email Address</span>
        </div>
        <div class="inputBox w100">
          <textarea name="" required></textarea>
          <span>Please enter a message</span>
        </div>
        <div class="inputBox w50">
          <input type="submit" value="Send">
        </div>
      </div>
    </div>
  </div>
</section>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";

export default {
  head: {
    title: "OneLink | Contact Us.",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content: "OneLink is a site for all your personal links at one place."
      },
      {
        name: "keyword",
        content:
          "OneLink socail media facebook instagram snapchat whatsapp website portfolio"
      }
    ],
    
  },
  components: {
    Navbar
  },
}
</script>

<style>


.container .contactinfo {
  display: -webkit-box;
  display: flex;
  top: 0;
  height: 100%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  -webkit-box-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
          align-items: center;
  padding: 40px;
  background-color: #333;
}
.container .contactinfo h2 {
  text-align: center;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
}
.container .contactinfo .info {
  position: relative;
  margin: 20px 0;
  height: 100%;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  -webkit-box-pack: center;
          justify-content: center;
}
.container .contactinfo .info li {
  position: relative;
  list-style: none;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
          align-items: center;
  margin: 20px 0;
  cursor: pointer;
}
.container .contactinfo .info li span:nth-child(1) {
  width: 40px;
  min-width: 40px;
}
.container .contactinfo .info li span:nth-child(1) img {
  max-width: 100%;
  -webkit-filter: invert(83%);
          filter: invert(83%);
  opacity: 0.5;
}
.container .contactinfo .info li span:nth-child(2) {
  color: #fff;
  margin-left: 10px;
  font-weight: 100;
  opacity: 0.5;
}
.container .contactinfo .info li:hover span:nth-child(1) img, .container .contactinfo .info li:hover span:nth-child(2) {
  opacity: 1;
}
.container .contactusform {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  -webkit-box-pack: center;
          justify-content: center;
  padding: 70px 50px;
  background-color: #fff;
  top: 0;
}
.container .contactusform h2 {
  color: #882;
  font-size: 24px;
  font-weight: 700;
}
.container .contactusform .formBox {
  position: relative;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  -webkit-box-pack: justify;
          justify-content: space-between;
  flex-wrap: wrap;
  padding-top: 30px;
}
.container .contactusform .formBox .inputBox {
  position: relative;
  margin: 0 0 35px 0;
  width: 100% !important;
}
.container .contactusform .formBox .inputBox input, .container .contactusform .formBox .inputBox textarea {
  width: 100% !important;
  padding: 5px 0;
  resize: none;
  font-size: 18px;
  font-weight: 300;
  color: #333;
  border: none;
  border-bottom: 1px solid #333;
  outline: none;
}
.container .contactusform .formBox .inputBox textarea {
  min-height: 120px;
}
.container .contactusform .formBox .inputBox span {
  position: absolute;
  left: 0;
  padding: 5px 0;
  font-size: 18px;
  font-weight: 300;
  color: #333;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  pointer-events: none;
}
.container .contactusform .formBox .inputBox input:focus ~ span, .container .contactusform .formBox .inputBox textarea:focus ~ span,
.container .contactusform .formBox .inputBox input:valid ~ span, .container .contactusform .formBox .inputBox textarea:valid ~ span {
  -webkit-transform: translateY(-20px);
          transform: translateY(-20px);
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 1px;
  color: #FF4136;
}
.container .contactusform .formBox .inputBox input[type="submit"] {
  position: relative;
  cursor: pointer;
  background-color: #333;
  color: #fff;
  border: none;
  max-width: 150px;
  padding: 12px;
}
.container .contactusform .formBox .inputBox input[type="submit"]:hover {
  background-color: #DCDCDC;
}
.container .contactusform .formBox .w50 {
  width: 47%;
}
.container .contactusform .formBox .w100 {
  width: 100%;
}

@media screen and (min-width: 700px) {
  .container .contactinfo h2 {
    text-align: center;
  }
  .container .contactinfo .info {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
            flex-direction: row;
  }
  .container .contactinfo li span:nth-child(2) {
    margin-right: 20px;
  }
}
@media screen and (min-width: 900px) {
  .contact > section {
    position: relative;
    display: -webkit-box;
    display: flex;
    -webkit-box-pack: center;
            justify-content: center;
    align-content: center;
    min-height: 100vh;
    background-color: #ccc;
  }
  .contact >section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background-color: #DCDCDC;
  }
  .contact >section .container {
    position: relative;
    width: 1100px;
    min-height: 550px;
    display: -webkit-box;
    display: flex;
    z-index: 1000;
    margin: 0 20px 0 20px;
  }
  .contact >section .container .contactinfo {
    position: absolute;
    top: 20%;
    width: 350px;
    height: calc(100% - 40%);
    z-index: 1;
    box-shadow: 0 30px 30px rgba(0, 0, 0, 0.3);
    -webkit-box-align: left;
            align-items: left;
  }
  .contact >section .container .contactinfo h2 {
    text-align: left;
  }
  .contact >section .container .contactinfo .info {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
            flex-direction: column;
  }
  .contact >section .container .contactinfo li span:nth-child(2) {
    margin-right: 0;
  }
  .contact >section .container .contactusform {
    position: absolute;
    top: 10%;
    height: calc(100% - 20%);
    box-shadow: 0 50px 50px rgba(0, 0, 0, 0.5);
    margin-left: 150px;
    padding-left: 250px;
  }
  .contact >section .container .contactusform .formBox {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
            flex-direction: row;
  }
}

</style>