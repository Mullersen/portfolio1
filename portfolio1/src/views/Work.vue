<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
        <div class="columns is-multiline is-gapless">
          <div class="column is-6">
            <div id="card1" class="card">
              <div class="card-content">
                <svg id="animateSvg1" height="150" width="150">
                  <circle
                    @mouseenter="hoverOver(1)"
                    @mouseout="hoverOut(1)"
                    @click="toggleModal(1)"
                    cx="75"
                    cy="75"
                    r="55"
                    fill="#364652"
                  />
                  <text
                    @mouseenter="hoverOver(1)"
                    @mouseout="hoverOut(1)"
                    @click="toggleModal(1)"
                    x="50%"
                    y="50%"
                    text-anchor="middle"
                    stroke="#f5e9e2"
                    stroke-width="0.5px"
                    fill="#f5e9e2"
                    dy=".4em"
                  >More</text>
                </svg>
                <h2 class="title is-4 has-text-left">Tweeter Project</h2>
              </div>
            </div>
          </div>
          <div class="column is-6">
            <div id="card2" class="card">
              <div class="card-content">
                <svg id="animateSvg2" height="150" width="150">
                  <circle
                    @mouseenter="hoverOver(2)"
                    @mouseout="hoverOut(2)"
                    @click="toggleModal(2)"
                    cx="75"
                    cy="75"
                    r="55"
                    fill="#364652"
                  />
                  <text
                    @mouseenter="hoverOver(2)"
                    @mouseout="hoverOut(2)"
                    @click="toggleModal(2)"
                    x="50%"
                    y="50%"
                    text-anchor="middle"
                    stroke="#f5e9e2"
                    stroke-width="0.5px"
                    fill="#f5e9e2"
                    dy=".4em"
                  >More</text>
                </svg>
                <h2 class="title is-4 has-text-left">Okotoks Pizza</h2>
              </div>
            </div>
          </div>
          <div class="column is-6">
            <div id="card3" class="card">
              <div class="card-content">
                <svg id="animateSvg3" height="150" width="150">
                  <circle
                    @mouseenter="hoverOver(3)"
                    @mouseout="hoverOut(3)"
                    @click="toggleModal(3)"
                    cx="75"
                    cy="75"
                    r="55"
                    fill="#364652"
                  />
                  <text
                    @mouseenter="hoverOver(3)"
                    @mouseout="hoverOut(3)"
                    @click="toggleModal(3)"
                    x="50%"
                    y="50%"
                    text-anchor="middle"
                    stroke="#f5e9e2"
                    stroke-width="0.5px"
                    fill="#f5e9e2"
                    dy=".4em"
                  >More</text>
                </svg>
                <h2 class="title is-4 has-text-left">MVP Inside Canada</h2>
              </div>
            </div>
          </div>
          <div class="column is-6">
            <div id="card4" class="card">
              <div class="card-content">
                <svg id="animateSvg4" height="150" width="150">
                  <circle cx="75" cy="75" r="55" fill="#364652" />
                  <text
                    x="50%"
                    y="50%"
                    text-anchor="middle"
                    stroke="#f5e9e2"
                    stroke-width="0.5px"
                    fill="#5B6B75"
                    dy=".4em"
                  >More</text>
                </svg>
                <h2 class="title is-4 has-text-left">More to come...</h2>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div id="modal1" class="modal">
      <div class="modal-background" @click="removeModal(1)"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Tweeter</p>
          <button class="modal-close is-large" @click="removeModal(1)" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <p class="modal-card-subtitle">A Laravel and Vue.js project</p>
        </section>
        <footer class="modal-card-foot">
          <button class="button">
            <a href="https://github.com/Mullersen/TweeterTwo" target="_blank">GitHub Repo</a>
          </button>
          <button class="button"><a href="https://tweeterproject.tk" target="_blank">Website</a></button>
        </footer>
      </div>
    </div>
    <div id="modal2" class="modal">
      <div class="modal-background" @click="removeModal(2)"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Okotoks Pizza</p>
          <button class="modal-close is-large" @click="removeModal(2)" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <p class="modal-card-subtitle">A CSS3 and Sass project</p>
        </section>
        <footer class="modal-card-foot">
          <button class="button">
            <a href="https://github.com/Mullersen/Okotoks-Pizza.git" target="_blank">GitHub Repo</a>
          </button>
          <button class="button"><a href="https://okotokspizzaproject.ml" target="_blank">Website</a></button>
        </footer>
      </div>
    </div>
    <div id="modal3" class="modal">
      <div class="modal-background" @click="removeModal(3)"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">MVP Inside Canada</p>
          <button class="modal-close is-large" @click="removeModal(3)" aria-label="close"></button>
        </header>
        <section class="modal-card-body">
          <p class="modal-card-subtitle">A Laravel and Vue.js project with Vuex</p>
        </section>
        <footer class="modal-card-foot">
          <button class="button">
            <a href="https://github.com/Mullersen/MVP" target="_blank">GitHub Repo</a>
          </button>
          <button class="button"><a href="https://insidecanada.ml" target="_blank">Website</a></button>
        </footer>
      </div>
    </div>
  </section>
</template>

<script>
import anime from "../../node_modules/animejs/lib/anime.es.js";
export default {
  data: function() {
    return {};
  },
  methods: {
    hoverOver: function(index) {
      document.getElementById("animateSvg" + index).style.cursor = "pointer";
      anime({
        targets: "#animateSvg" + index,
        scale: 1.1
      });
    },
    hoverOut: function(index) {
      anime({
        targets: "#animateSvg" + index,
        scale: 1
      });
    },
    toggleModal: function(index) {
      document.getElementById("modal" + index).classList.add("is-active");
    },
    removeModal: function(index) {
      document.getElementById("modal" + index).classList.remove("is-active");
    }
  }
};
</script>

<style scoped>
.title{
  text-decoration: none;
}
.hero-body{
  justify-content: center;
  margin-left: 140px;
  background-color: #b8e0d2;
  padding: 3rem 0rem !important;
}
#card1{
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,.5)), url("../assets/tweeter.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-width: 0.5px 0px 0px 0.5px;
}
#card2{
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,.5)), url("../assets/pizza.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-width: 0.5px 0.5px 0px 0px;
}
#card3{
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,.5)), url("../assets/insidecanada.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-width: 0px 0px 0.5px 0.5px;
}
#card4{
  background-color: #5B6B75;
  border-width: 0px 0.5px 0.5px 0px;
}
.card{
  border: #2A2A2A solid;
}
svg {
  margin: 50px 0 25px 0;
}
#columnWrapper {
  margin-left: 140px;
}
@media (max-width: 750px) {
  .hero-body {
    margin: 17vh 0 0 0;
  }
  #card1 #card2 #card3 #card4{
    border:none;
  }
}
</style>