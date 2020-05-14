<template>
  <div class="navigation">
      <ul>
          <li><router-link :to="{name: 'Home'}">Home</router-link></li>
          <li><router-link :to="{name: 'Skills'}">Skills</router-link></li>
          <li><router-link :to="{name: 'Projects'}">Projects</router-link></li>
          <li><router-link :to="{name: 'Contact'}">Contact</router-link></li>
      </ul>
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
    width: 160px; 
    z-index:100; 
    background-color: black; 
    top:0; 
    left:0;
     padding: 30px;
}

.navigation a {
  font-weight: bold;
  color: #f5e9e2;
}

.navigation a.router-link-exact-active {
  color: #2c3e50;
}
</style>