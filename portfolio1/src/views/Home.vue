<template>
  <div>
    <transition
      appear
      appear-class="fade-enter"
      appear-to-class="fade-enter-to"
      appear-active-class="fade-enter-active"
    >
      <section class="hero is-fullheight">
        <transition
          appear
          appear-class="slide-enter"
          appear-to-class="slide-enter-to"
          appear-active-class="slide-enter-active"
        >
          <div class="hero-body">
            <div class="container">
              <h1 class="title">Mariann Haugland</h1>
              <h1 class="title">Full Stack Web Developer</h1>
              <h2
                class="content"
              >Seeking to make an impact with my combined skillset in web technologies, e-marketing and communications</h2>
            </div>
            <div id="backgroundColor"></div>
              <div id="message">
                <img
                  style="max-height:7vh; opacity: 0.8;"
                  src="../assets/geoshape.png"
                  alt="geometric shape"
                />
                <a
                  class="content"
                  id="upworkLink"
                  target="_blank"
                  href="https://www.upwork.com/o/profiles/users/~013bf0fd12854a1b5a/"
                >Connect with me on Upwork!</a>
              </div>
          </div>
        </transition>
      </section>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import anime from "../../node_modules/animejs/lib/anime.es.js";

export default {
  name: "Home",
  mounted(){
    anime({
        targets: "#message",
        delay:5000,
        opacity:1,
      });
  }
};
</script>
<style scoped>
#upworkLink {
  position: absolute;
  width: 10vw;
  color: black;
}
#message {
  position: absolute;
  top: 89vh;
  left: 78vw;
  z-index: 1000;
  opacity:0;
}
.subtitle {
  margin-top: 2rem !important;
}
.hero {
  background-image: url("../assets/background-resized-min.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-left: 140px;
}
#backgroundColor {
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
  z-index: 10;
}
.container {
  z-index: 20;
}
.content{
  color:#f5e9e2;
}
@media (max-width: 750px) {
  .hero {
    margin-left: 0;
    margin-top: 17vh;
  }
  .hero.is-fullheight {
    min-height: 83vh !important;
  }
  #upworkLink {
    position: static;
    color: black;
  }
  #message {
    left: auto;
    z-index: 1000;
  }
}
.slide-enter {
  opacity: 0;
  transform: translateX(100%);
}
.slide-enter-to {
  opacity: 1;
  transform: translateX(0%);
}
.slide-enter-active {
  transition: opacity 2s, transform 2s;
  transition-delay: 1.7s;
}
.fade-enter-active {
  transition: opacity 1.5s;
  transition-delay: 1.3s;
}
/* the starting stage or ending stage, before the transition starts */
.fade-enter {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
</style>
