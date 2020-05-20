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
                    <div>
                      <i class="fab fa-linkedin"></i>
                      <p class="subtitle is-6" style="display:inline-block; margin-left:0.75rem;">
                        <a href="https://www.linkedin.com/in/m-haugland-webdeveloper/">My Linkedin</a>
                      </p>
                    </div>
                    <div>
                      <i class="fas fa-envelope-square"></i>
                      <p
                        class="subtitle is-6"
                        style="display:inline-block; margin-left:0.75rem;"
                      >mariannhaugland@gmail.com</p>
                    </div>
                    <div>
                      <i class="fas fa-phone-square"></i>
                      <p
                        class="subtitle is-6"
                        style="display:inline-block; margin-left:0.75rem;"
                      >+1 403 707 7241</p>
                    </div>
                    <button
                      class="button"
                      style="margin-top:1rem"
                      @click="modalToggle"
                    >See my Resume</button>
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
                    <p class="title is-4">Help me build my portfolio</p>
                    <p
                      class="subtitle"
                    >Do you have a project for me? Let me know, and I will get back to you!</p>
                    <form class="contact-form" @submit.prevent="sendEmail">
                      <label class="label">Your name</label>
                      <div class="control">
                        <input class="input" type="text" name="from_name" />
                      </div>
                      <label class="label">Your email</label>
                      <div class="control">
                        <input class="input" type="email" name="user_email" />
                      </div>
                      <label class="label">Your message</label>
                      <div class="control">
                        <textarea class="input" name="message_html"></textarea>
                        <input class="button" type="submit" value="Send" />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal modal1">
      <div class="modal-background" @click="modalClose"></div>
      <div class="modal-content">
        <iframe
          src="https://docs.google.com/document/d/e/2PACX-1vQOBfyrYl6NRK4iIalGgKVJG3Hlh-dr1TujDhYEdROrRpUSNojl4dIAAIudjDVu_9ftoP9_J1w4dmaC/pub?embedded=true"
          
        ></iframe>
      </div>
      <button @click="modalClose" class="modal-close is-large" aria-label="close"></button>
    </div>
    <div class="modal modal2">
      <div class="modal-background" @click="modalClose"></div>
      <div class="modal-content">
        <div class="box">
          <h2 id="modaltitle" class="title">Your message was sent successfully!</h2>
        </div>
      </div>
      <button @click="modalClose" class="modal-close is-large" aria-label="close"></button>
    </div>
  </section>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  data: function() {
    return {
      togglestate: false
    };
  },
  methods: {
    modalToggle: function() {
      var modal = document.getElementsByClassName("modal1");
      modal.forEach(element => {
        element.classList.add("is-active");
      });
    },
    modalClose: function() {
      var modal = document.getElementsByClassName("modal");
      modal.forEach(element => {
        element.classList.remove("is-active");
      });
    },
    sendEmail: e => {
      emailjs.init("user_NN9nBpNBUHCW5dh5dryPi");
      emailjs
        .sendForm(
          "gmail",
          "template_apcrZw0l",
          e.target,
          "user_NN9nBpNBUHCW5dh5dryPi"
        )
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
            var input = document.getElementsByClassName("input");
            input.forEach(element => {
              element.value = "";
            });
            var modal = document.getElementsByClassName("modal2");
            modal.forEach(element => {
              element.classList.add("is-active");
            });
          },
          error => {
            console.log("FAILED...", error);
            var modal = document.getElementsByClassName("modal2");
            document.getElementById('modaltitle').innerHTML ="Something went wrong... " + error;
            modal.forEach(element => {
              element.classList.add("is-active");
            });
          }
        );
    }
  }
};
</script>

<style scoped>
iframe{
  height:700px;
  width:800px;
}
.hero {
  background-image: url("../assets/pen.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-left: 140px;
}
.title {
  color: #364652;
}
.subtitle {
  color: #364652;
}
.modal-content {
  width: 800px;
}
@media (max-width: 750px) {
  .hero {
    margin-left: 0;
    margin-top: 17vh;
  }
  iframe{
    height: 90vh;
    width:100vw;
  }
}
</style>