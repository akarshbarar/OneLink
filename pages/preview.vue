<template>
  <div class="preview">


      <h2>Akarsh Barar</h2>
        <img id="fotomati" src="https://1.bp.blogspot.com/-bHq1dvDt4NI/Xhuuh-42v6I/AAAAAAAAHdc/7_bZuAv5l-8uxdUdjMlBGh9S2E42J4jTQCLcBGAsYHQ/s1600/Unknown456456545.jpg" alt="foto matias espinosa">
        <div class="botones">
        <h1>Matias Espinosa</h1>
        <a class="boton" href="#">Anotarme en lista de espera</a>
        <a class="boton" href="#">Pagar curso en cuotas</a>
        <a class="boton" href="#">Youtube</a>
        <a class="boton" href="#">Spotify</a>
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.preview{
  background-color: black;
  text-align: center;
  padding: 30px;
  width: 100vw;
  height: 100vh;
}

.preview >h1{
  color: white;
  font-size: 18px;
  margin: 10px;
}

.preview > h2{
  color: white;
  font-size: 20px;
  margin: 10px;
}

#fotomati{
  width: 100px;
  border-radius: 50%;
  border: 2px solid #21ed76;
}

.botones{
  max-width: 500px;
  margin: 0 auto;
}

.boton{
  display: block;
  background-color: #21ed76;
  border-radius: 20px;
  padding: 10px;
  color: white;
  text-decoration: none;
  margin: 10px 0;
}

.boton:hover{
  background-color: #15ab53;
  text-decoration: none;
  color: white;
}
</style>