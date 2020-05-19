<template>
  <section class="hero is-fullheight">
    <!-- Photo credit: Tom Raftery -->
    <div class="hero-body">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-half">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <div class="title is-4">Mariann Haugland</div>
                    <p class="subtitle is-6">
                      <a href="https://www.linkedin.com/in/m-haugland-webdeveloper/">linkedin</a>
                    </p>
                    <p class="subtitle is-6">+1 403 707 7241</p>
                    <button class="button" @click="modalToggle">Resume</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-half"></div>
          <div class="column is-half"></div>
          <div class="column is-half">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <div class="title is-4">Mariann Haugland</div>
                    <p class="subtitle is-6"><a href="https://www.linkedin.com/in/m-haugland-webdeveloper/">linkedin</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal">
      <div class="modal-background" @click="modalClose"></div>
      <div class="modal-content">
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vQOBfyrYl6NRK4iIalGgKVJG3Hlh-dr1TujDhYEdROrRpUSNojl4dIAAIudjDVu_9ftoP9_J1w4dmaC/pub?embedded=true" height="700px" width="800px"></iframe>
      </div>
      <button @click="modalClose" class="modal-close is-large" aria-label="close"></button>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    modalToggle: function(){
      var modal = document.getElementsByClassName('modal');
      modal.forEach(element => {
        element.classList.add('is-active');
      });
    }, 
    modalClose : function(){
      var modal = document.getElementsByClassName('modal');
      modal.forEach(element => {
        element.classList.remove('is-active');
      });
    }
  }
}
</script>

<style scoped>
 .hero {
  background-image: url("../assets/pen.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-left: 140px;
}
.title{
  color:#364652;
}
.subtitle{
  color:#364652;
}
.modal-content{
  width:800px;
}
</style>