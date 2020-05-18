<template>
  <div id="app">
      <TheNavigation/>
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default{
  components:{
    TheNavigation
  }
}
</script>

<style>
#app {
  font-family: 'Courier Prime', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* is the actual transition, and is applied throughout the entire entering or leaving phase.  */
.fade-enter-active, .fade-leave-active{
  transition: opacity 0.5s;
}
/* the starting stage or ending stage, before the transition starts */
.fade-enter, .fade-leave-to{
  opacity:0; 
}
.fade-enter-to, .fade-leave{
  opacity:1;
}
.title{
  color:#f5e9e2;
  text-decoration:underline;
  z-index: 100;
}
.subtitle{
  color:#f5e9e2;
}
</style>
