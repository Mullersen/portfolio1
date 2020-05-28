<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
        <h1 class="title">{{project.name}}</h1>
        <h1 class="subtitle">{{project.header}}</h1>
        <figure>
            <img :src="require('../assets/'+project.image)" alt="project image">
        </figure>
        <h1 class="content">{{project.description}}</h1>
    </div>
    <div class="hero-footer">
        <button class="button">
            <a :href="project.github" target="_blank">GitHub</a>
          </button>
          <button class="button"><a :href="project.website" target="_blank">Website</a></button>
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
      required: true
    }
  },
  data: function() {
    return {
      projects: work.projects
    };
  },
  computed: {
    project: function() {
      return work.projects.find(project => project.slug === this.slug);
    }
  }
};
</script>

<style scoped>
.title, .subtitle{
    color:#364652 !important;
}

.hero{
  justify-content: center;
  margin-left: 140px;
  background-color: #b8e0d2;
  padding: 3rem 0rem !important;
}
.hero-body{
    display:block !important;
}
img{
    max-height: 40vh;
}
@media (max-width: 750px) {
    .hero{
        margin-left:0;
        margin-top: 10vh;
    }
}

</style>