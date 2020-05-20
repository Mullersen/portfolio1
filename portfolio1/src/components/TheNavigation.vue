<template>
  <div class="navigation">
    <router-link id="home" :to="{name: 'Home'}">
      <svg
        @mouseenter="hoverOver()"
        @mouseout="hoverOut()"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        style="height: 69px; width: 69px;"
      >
        <defs>
          <filter id="shadow-4" height="300%" width="300%" x="-100%" y="-100%">
            <feFlood flood-color="rgba(255, 255, 255, 1)" result="flood" />
            <feComposite in="flood" in2="SourceGraphic" operator="atop" result="composite" />
            <feGaussianBlur in="composite" stdDeviation="15" result="blur" />
            <feOffset dx="0" dy="0" result="offset" />
            <feComposite in="SourceGraphic" in2="offset" operator="over" />
          </filter>
        </defs>
        <circle
          @mouseenter="hoverOver()"
          @mouseout="hoverOut()"
          cx="256"
          cy="256"
          r="256"
          fill="#f5e9e2"
          fill-opacity="1"
        />
        <g class transform="translate(0,-55)" style="touch-action: none;">
          <g transform="translate(51.2, 51.2) scale(0.8, 0.8) rotate(0, 256, 256)">
            <path
              @mouseenter="hoverOver()"
              @mouseout="hoverOut()"
              d="M256 19.27L25.637 249.638L19.27 256L32 268.73L38.363 262.363L256 44.727L473.637 262.363L480 268.73L492.73 256L486.363 249.637Z"
              class
              fill="#f5e9e2"
              fill-opacity="1"
            />
            <path
              @mouseenter="hoverOver()"
              @mouseout="hoverOut()"
              d="M96 48L96 155.273L160 91.271L160 48Z"
              class
              fill="#f5e9e2"
              fill-opacity="1"
            />
            <path
              @mouseenter="hoverOver()"
              @mouseout="hoverOut()"
              d="M256 68.727L64 260.727L64 486L128 486L128 320L224 320L224 486L448 486L448 260.727Z"
              class="selected"
              fill="#000000"
              fill-opacity="1"
              filter="url(#shadow-4)"
            />
            <path
              @mouseenter="hoverOver()"
              @mouseout="hoverOut()"
              d="M288 320L384 320L384 400L288 400Z"
              class
              fill="#f5e9e2"
              fill-opacity="1"
            />
          </g>
        </g>
      </svg>
    </router-link>
    <div class="links">
      <router-link :to="{name: 'Skills'}">Skills</router-link>
      <router-link :to="{name: 'Work'}">Work</router-link>
      <router-link :to="{name: 'Contact'}">Contact</router-link>
    </div>
  </div>
</template>

<script>
import anime from "../../node_modules/animejs/lib/anime.es.js";
export default {
  methods: {
    hoverOver: function() {
      anime({
        targets: "#home",
        scale: 1.1
      });
    },
    hoverOut: function() {
      anime({
        targets: "#home",
        scale: 1
      });
    }
  }
};
</script>

<style scoped>
.navigation {
  position: fixed;
  height: 100%;
  width: 140px;
  z-index: 100;
  background-color: black;
  top: 0;
  left: 0;
}
.links {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
#home {
  position:absolute;
  padding: 4vh 0 0 0;
  left:105px;
}
.navigation a {
  font-weight: bold;
  color: #f5e9e2;
  padding: 4vh;
}
.navigation a.router-link-exact-active {
  color: #2c3e50;
}
a:hover {
  color: #2c3e50;
}
@media (max-width: 750px) {
  .navigation {
    position: fixed;
    height: 17vh;
    width: 100%;
    z-index: 100;
    background-color: black;
    top: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .links {
    padding: 0;
  }
  .navigation a {
    padding: .25rem !important;
  }
  #home {
    left: 10px;
  }
}
</style>