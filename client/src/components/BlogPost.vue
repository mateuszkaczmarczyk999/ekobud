<template>
  <div class="post-container">
    <h1>{{ post.title }}</h1>
    <h2>{{ post.subTitle }}</h2>
    <VisualizationGallery :images="post.imgFiles" v-if="anyImages"/>
    <b-embed v-if="post.movieUrl" class="pt-3 pb-5" type="iframe" aspect="16by9" :src="post.movieUrl" allowfullscreen></b-embed>
    <p>{{ post.text }}</p>
    <p class="pt-5">{{ post.date }}</p>
  </div>
</template>

<script>
import VisualizationGallery from '../components/VisualizationGallery'

export default {
  props: {
    post: Object
  },
  computed: {
    anyImages () {
      return this.post.imgFiles.length > 0
    }
  },
  components: {
    VisualizationGallery
  }
}
</script>

<style scoped>
  .post-container {
    overflow: auto;
    margin: 1% 20% 5%;
    font-size: 16px;
  }
  h1 {
    font-weight: 400;
    font-size: 1.2em;
    padding-bottom: 2%;
    text-align: center;
  }
  h2 {
    font-weight: 200;
    font-size: 1.1em;
    padding-bottom: 2%;
    text-align: center;
  }
  p {
    font-size: 1em;
    font-weight: 200;
    text-align: justify;
    text-justify:inter-word;
    margin-bottom: 0;
    margin-top: 0;
  }
</style>
