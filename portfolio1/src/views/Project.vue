<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <h1 class="title">{{project.name}}</h1>
      <h1 class="subtitle">{{project.header}}</h1>
      <figure>
        <img :src="require('../assets/'+project.image)" alt="project image" />
      </figure>
      <div class="container">
        <h1 class="content" style="margin-top:1.5rem;">{{project.description}}</h1>
      </div>
    </div>
    <div class="hero-footer ">
      <div class="field is-grouped is-grouped-centered">
        <div class="control">
          <button class="button is-medium">
            <a :href="project.website" target="_blank">www</a>
          </button>
        </div>
        <div class="control">
          <button class="button is-medium">
            <a :href="project.github" target="_blank"><i class="fab fa-github"></i></a>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import work from "@/work.js";

export default {
  name: "Project",
  props: {
    slug: {
      type: String,
      required: true,
    },
  },
  data: function () {
    return {
      projects: work.projects,
    };
  },
  computed: {
    project: function () {
      return work.projects.find((project) => project.slug === this.slug);
    },
  },
};
</script>

<style scoped>
.title,
.subtitle {
  color: #364652 !important;
}

.hero {
  justify-content: center;
  margin-left: 140px;
  background-color: #b8e0d2;
  padding: 3rem 0rem !important;
}
.hero-body {
  display: block !important;
}
img {
  max-height: 40vh;
}
@media (max-width: 750px) {
  .hero {
    margin-left: 0;
    margin-top: 10vh;
  }
}
</style>