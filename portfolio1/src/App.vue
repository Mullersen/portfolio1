<template>
  <div id="app">
      <TheNavigation/>
      <transition name="fade">
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
.fade-enter, .fade-leave-to{
  opacity:0; 
}
.fade-enter-active, .fade-leave-active{
  transition: opacity 0.3s;
}

</style>
