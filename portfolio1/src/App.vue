<template>
  <div id="app">
      <TheNavigation/>
      <transition name="slide" mode="out-in">
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
.slide-enter, .slide-leave-to{
  opacity:0; 
  transform: translateX(100%);

}
.slide-enter-active, .slide-leave-active{
  transition: opacity 1s, transform 1s;
}

</style>
