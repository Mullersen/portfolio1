<template>
<section class="hero is-fullheight">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Mariann Haugland.</h1>
      <h1 class="title">Full Stack Web Developer.</h1>
    </div>
    <div id="backgroundColor"></div>
  </div>
</section>
  
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

  }
}
</script>
<style scoped>
.hero{
 background-image: url("../assets/background.png");
    background-repeat: no-repeat;
    background-size: cover;
}
#backgroundColor{
  background-color: #8e2727;
  opacity: 0.7;
  min-height: 100%;
  min-width: 1024px;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;
  z-index:10;
}
.title{
  color:#f5e9e2;
}
.container{
  z-index: 20;
}

</style>
