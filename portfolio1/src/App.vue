<template>
  <div id="app">
      <TheNavigation/>
      <transition name="fade" mode="out-in">
        <router-view :key="$route.path"/> // key forces a reload everytime the path of the route changes
      </transition>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default{
  components:{
    TheNavigation,
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
  transition: opacity 0.7s;
  transition-delay: 0.3s;
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
  /* text-decoration:underline; */
  z-index: 100;
}
.subtitle{
  color:#f5e9e2;
}
.button{
  background-color: #f5e9e2 !important;
  border: none;
  border-radius: 0;
  font-family: 'DM Sans', sans-serif;

}
.button a{
  color: black !important;
  font-family: 'DM Sans', sans-serif;
}
.content{
font-family: 'DM Sans', sans-serif;
}
</style>
