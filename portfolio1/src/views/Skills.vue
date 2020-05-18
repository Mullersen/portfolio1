<template>
  <section id="skills" class="container">
    <div class="columns is-8" style="margin-top: 10vh;">
      <div class="column">
        <h1 class="title" >My Skills:</h1>
        <ul class="subtitle has-text-left-desktop" style="margin-top: 5vh;">
          <li>HTML5</li>
          <li>CSS3 + Sass</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>MySQL</li>
          <li>APIs</li>
          <li>Git/Github</li>
          <li>Laravel</li>
          <li>Vue.js</li>
          <li>Bootstrap</li>
          <li>Bulma</li>
          <li>NPM</li>
        </ul>
      </div>
      <div class="column">
        <figure>
          <img src="@/assets/mig.png" alt="Mariann">
        </figure>
      </div>
    </div>
  
    <div id="backgroundColor"></div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.columns{
  margin-left:10vw; /*for the nav bar*/
}
ul{
  list-style-type:disc;
  list-style-position: inside;
}
#backgroundColor{
  background-color: #364652;
  opacity: 0.75;
  min-height: 100%;
  min-width: 1024px;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
  z-index:-10;
}
img{
  z-index: -20;
}
@media (max-width: 750px){
  #skills .columns{
    margin-left: 0vw; 
    margin-top: 17vh;
  }
}
</style>