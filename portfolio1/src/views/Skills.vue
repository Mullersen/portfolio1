<template>
  <section id="skills" class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-8">
          <div class="column is-1"></div>
          <div class="column is-6">
            <h1 class="title">My Skills:</h1>
            <ul class="subtitle has-text-left-desktop is-3" style="margin-top: 5vh;">
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
          <div class="column is-4">
            <figure class="image is-3by4">
              <img
                src="@/assets/mig1.png"
              />
            </figure>
          </div>
          <div class="column is-1"></div>
        </div>
      </div>
    </div>
    <div id="backgroundColor"></div>
  </section>
</template>

<script>
</script>

<style scoped>
.columns {
  margin-left: 140px; /*for the nav bar*/
}
ul {
  list-style-type: disc;
  list-style-position: inside;
}
#backgroundColor {
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
  z-index: -10;
}
img {
  z-index: -20;
}
@media (max-width: 750px) {
  #skills .columns {
    margin-left: 0vw;
  }
  #wrapper {
    margin-top: 17vh;
  }
  ul {
    list-style-position: outside;
  }
  img {
    padding: 0;
  }
}
</style>