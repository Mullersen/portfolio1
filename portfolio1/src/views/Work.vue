<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
        <div class="columns is-multiline is-gapless">
          <div class="column is-6" v-for="(project, index) in projects" :key="project.id">
            <div :id="'card'+project.id" class="card">
              <div class="card-content" >
                <svg :id="'animateSvg'+index" height="150" width="150">
                  <router-link :to="{name: 'Project', params:{slug: project.slug}}">
                    <circle
                    @mouseenter="hoverOver(index)"
                    @mouseout="hoverOut(index)"
                    cx="75"
                    cy="75"
                    r="55"
                    fill="#364652"
                  />
                  <text
                  class="content"
                    @mouseenter="hoverOver(index)"
                    @mouseout="hoverOut(index)"
                    x="50%"
                    y="50%"
                    text-anchor="middle"          
                    fill="#f5e9e2"
                    dy=".4em"
                  >Details</text>
                  </router-link>
                </svg>
                <h2 class="title is-4 has-text-left has-text-centered-mobile">{{project.name}}</h2>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
import anime from "../../node_modules/animejs/lib/anime.es.js";
import work from "@/work.js";

export default {
  data: function() {
    return {
      projects: work.projects,
    };
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

}
#card1{
 background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,.75)), url("../assets/essou1.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-width: 0.5px 0.5px 0.5px 0.5px;
}
#card2{
 background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,.75)), url("../assets/tweeter.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-width: 0.5px 0.5px 0.5px 0px;
}
#card3{
 background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,.75)), url("../assets/insidecanada.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-width: 0px 0.5px 0.5px 0.5px;
}
#card4{
  background: linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,.75)), url("../assets/pizza.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-width: 0px 0.5px 0.5px 0px;
}
.card{
  border: #2A2A2A solid;
}
.card-content{
  padding:2.5rem 3rem 1.5rem 3rem !important;
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