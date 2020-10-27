<template>
  <div class="component">
       <div class="page-wrapper chiller-theme toggled">
        <Sidebar/>
        <div class="container">
            <h3>COMING SOON</h3>
            <div class="bar">
                <div class="progress"></div>
            </div>
            </div>
       </div>
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar'

export default {
components:{
    Sidebar,

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
}
</script>

<style>
.component {
  background-color: #222222;
}

.container >h3 {
  font-size: 1.5em;
  font-weight: 100;
  letter-spacing: 1em;
  text-shadow: 0px 0px 20px #1abb9c;
  color: #1abb9c;
  display: inline-block;
}

.container {
  font-size: 16px;
  top: 50%;
  left: 35%;
  position: absolute;
  color: #FFFFFF;
  text-align: center;
}

.bar {
  height: .3em;
  width: 30em;
  border-radius: 10px;
  background: transparent;
  box-shadow: inset 0px 0px 8px #323232;
  overflow: hidden;
  padding: 5px;
}

.progress {
  height: inherit;
  border-radius: inherit;
  width: 0;
  background: #1abb9c;
  animation: load 3s linear infinite;
  animation-delay: 2s;
}

@keyframes load {
  0% {
    width: 0%;
  }
  50% {
    width: 100%;
  }
  100% {
    width: 0%;
    float: right;
  }
}

</style>