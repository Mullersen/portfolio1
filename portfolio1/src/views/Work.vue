<template>
  <section class="projects">
    <div class="columns is-vcentered" style="height: 100vh;">
      <div id="columnWrapper" class="column">
        <div class="columns">
          <div class="column">
            <div class="card">
              <div class="card-image">
                <figure>
                  <img src="@/assets/routeMap.png" alt="">
                </figure>
              </div>
            </div>
          </div>
          <div class="column">

          </div>
        </div>
        <div class="columns">
          <div class="column">

          </div>
          <div class="column">

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.projects {
  background-color: #b8e0d2;
}
/* #columnWrapper{
  margin-left:10vw;
} */
@media (max-width: 750px){
  #columnWrapper{
  margin-left:0vw;
  margin-top:17vh;
}
}
</style>