<template>

<section class="hero is-fullheight">
  <transition appear appear-class="slide-enter" appear-to-class="slide-enter-to" appear-active-class="slide-enter-active">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">Mariann Haugland.</h1>
      <h1 class="title">Full Stack Web Developer.</h1>
    </div>
    <div id="backgroundColor"></div>
  </div>
  </transition>
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
  background-image: url("../assets/background-resized.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
#backgroundColor{
  background-color: #8e2727;
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
  z-index:10;
}

.container{
  z-index: 20;
}
.slide-enter{
  opacity:0;
  transform: translateX(100%);
}
.slide-enter-to{
  opacity:1;
  transform:translateX(0%);
}
.slide-enter-active{
  transition: opacity 2s, transform 2s;
  transition-delay: 2s;
}
</style>
