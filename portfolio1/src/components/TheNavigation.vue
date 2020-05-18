<template>
  <div class="navigation">
    <router-link id="home" :to="{name: 'Home'}">Home</router-link>
    <div class="links">
      <router-link :to="{name: 'Skills'}">Skills</router-link>
      <router-link :to="{name: 'Work'}">Work</router-link>
      <router-link :to="{name: 'Contact'}">Contact</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navigation{
    position: fixed;
    height:100%;
    width: 10vw;
    z-index:100; 
    background-color: black; 
    top:0; 
    left:0;
     
}
.links{
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
}
#home{
  position:absolute;
}
.navigation a {
  font-weight: bold;
  color: #f5e9e2;
  padding: 4vh;
}
.navigation a.router-link-exact-active {
  color: #2c3e50;
}
@media (max-width: 750px){
  .navigation{
    position: fixed;
    height:17vh;
    width: 100%;
    z-index:100; 
    background-color: black; 
    top:0; 
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
  }
  .links{
    padding:0;
  }
  .navigation a {
    padding: 0 !important;
  }
  #home{
    left: 10px; 
  }
}

</style>